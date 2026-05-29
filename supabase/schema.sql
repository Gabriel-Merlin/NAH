-- =========================================================
-- NAH — Schéma Supabase (PostgreSQL)
-- À exécuter dans : Supabase > SQL Editor > New query > Run
--
-- Principe de sécurité :
--   - Le site public utilise la clé "anon" (publique).
--   - Les visiteurs peuvent UNIQUEMENT insérer (envoyer une
--     question, un signalement, voter, enregistrer un score).
--   - PERSONNE ne peut LIRE les questions/signalements avec la
--     clé anon. Seule l'équipe NAH les lit depuis le tableau de
--     bord Supabase (qui utilise la clé "service_role").
-- =========================================================

-- ---------------------------------------------------------
-- 1. QUESTIONS ANONYMES
-- ---------------------------------------------------------
create table if not exists public.questions_anonymes (
  id          uuid primary key default gen_random_uuid(),
  message     text not null check (char_length(message) between 1 and 200),
  reponse     text,                       -- réponse publique éventuelle de l'équipe
  is_published boolean not null default false,
  created_at  timestamptz not null default now()
);

alter table public.questions_anonymes enable row level security;

-- N'importe qui peut envoyer une question…
create policy "insert questions (public)"
  on public.questions_anonymes for insert
  to anon with check (true);

-- … mais seules les questions marquées "publiées" sont lisibles publiquement
-- (utile si tu veux afficher un mur de questions/réponses validées).
create policy "read published questions"
  on public.questions_anonymes for select
  to anon using (is_published = true);

-- ---------------------------------------------------------
-- 2. SIGNALEMENTS
-- ---------------------------------------------------------
create table if not exists public.signalements (
  id          uuid primary key default gen_random_uuid(),
  message     text not null check (char_length(message) between 1 and 2000),
  contact     text,                       -- facultatif : anonyme si null
  traite      boolean not null default false,
  created_at  timestamptz not null default now()
);

alter table public.signalements enable row level security;

-- Insertion ouverte au public, AUCUNE lecture publique (pas de policy select).
create policy "insert signalements (public)"
  on public.signalements for insert
  to anon with check (true);

-- ---------------------------------------------------------
-- 3. QUIZ — scores anonymes (statistiques agrégées)
-- ---------------------------------------------------------
create table if not exists public.quiz_scores (
  id         uuid primary key default gen_random_uuid(),
  score_pct  int not null check (score_pct between 0 and 100),
  created_at timestamptz not null default now()
);

alter table public.quiz_scores enable row level security;

create policy "insert quiz scores (public)"
  on public.quiz_scores for insert
  to anon with check (true);

-- ---------------------------------------------------------
-- 4. SONDAGES
--    options : jsonb au format [{ "id": "a", "label": "...", "votes": 0 }, ...]
-- ---------------------------------------------------------
create table if not exists public.sondages (
  id         uuid primary key default gen_random_uuid(),
  question   text not null,
  options    jsonb not null default '[]'::jsonb,
  is_active  boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.sondages enable row level security;

-- Le sondage actif est lisible par tous (pour afficher question + résultats).
create policy "read active sondage"
  on public.sondages for select
  to anon using (is_active = true);

-- Le vote ne passe PAS par un UPDATE direct (sécurité) mais par la
-- fonction vote_sondage() ci-dessous, exécutée avec les droits du
-- propriétaire (security definer).
create or replace function public.vote_sondage(p_poll uuid, p_option text)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  opts jsonb;
  new_opts jsonb := '[]'::jsonb;
  o jsonb;
begin
  select options into opts from public.sondages
    where id = p_poll and is_active = true;
  if opts is null then
    return; -- sondage inexistant ou inactif : on ignore
  end if;

  for o in select * from jsonb_array_elements(opts) loop
    if (o->>'id') = p_option then
      o := jsonb_set(o, '{votes}',
             to_jsonb(coalesce((o->>'votes')::int, 0) + 1));
    end if;
    new_opts := new_opts || o;
  end loop;

  update public.sondages set options = new_opts where id = p_poll;
end;
$$;

grant execute on function public.vote_sondage(uuid, text) to anon;

-- Exemple : créer un premier sondage actif
-- insert into public.sondages (question, options, is_active) values (
--   'Penses-tu que le harcèlement est bien pris au sérieux dans ton lycée ?',
--   '[{"id":"a","label":"Oui, tout à fait","votes":0},
--     {"id":"b","label":"Plutôt oui","votes":0},
--     {"id":"c","label":"Plutôt non","votes":0},
--     {"id":"d","label":"Non, pas du tout","votes":0}]'::jsonb,
--   true
-- );

-- =========================================================
-- NOTE : suppression automatique après 6 mois (RGPD)
-- À planifier avec l'extension pg_cron (Database > Extensions) :
--   select cron.schedule('purge-nah', '0 3 * * *', $$
--     delete from public.signalements      where created_at < now() - interval '6 months';
--     delete from public.questions_anonymes where created_at < now() - interval '6 months' and is_published = false;
--   $$);
-- =========================================================
