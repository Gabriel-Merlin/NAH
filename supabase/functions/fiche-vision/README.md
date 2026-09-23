# Fiche par photo — analyse IA (vision)

Cette *Edge Function* Supabase lit une photo de cours / sujet STMG avec une **IA
de vision** (Claude d'Anthropic) et renvoie une fiche structurée
(`questions`, `keyInfo`, `definitions`). Contrairement à l'OCR embarqué, elle
lit correctement les **tableaux, le texte petit et l'écriture manuscrite**.

La clé d'API reste **côté serveur** (secret Supabase) : elle n'est jamais dans
l'application ni visible par les élèves.

## Mise en place (une seule fois)

Prérequis : le [CLI Supabase](https://supabase.com/docs/guides/cli) et une clé
d'API Anthropic (https://console.anthropic.com → *API Keys*).

```bash
# 1) Se placer à la racine du dépôt puis se relier au projet Supabase
supabase link --project-ref wyydagcjkbivtbuhbzon

# 2) Déployer la fonction (accès public : pas de JWT requis)
supabase functions deploy fiche-vision --no-verify-jwt

# 3) Renseigner la clé API Anthropic (reste secrète, côté serveur)
supabase secrets set ANTHROPIC_API_KEY=sk-ant-xxxxxxxx

# 4) (Facultatif) Choisir un modèle moins cher pour réduire les coûts
#    Par défaut : claude-opus-5 (meilleure lecture). Alternative économique :
supabase secrets set FICHE_MODEL=claude-haiku-4-5
```

C'est tout : dans l'appli, le bouton **« ✨ Analyser avec l'IA »** de la page
*Fiche par photo* fonctionne alors pour tous les élèves.

## Coût

Chaque analyse = 1 appel à l'API Anthropic, facturé sur **ta** clé.
- `claude-opus-5` (défaut) : lecture optimale, ~1 à 3 centimes par photo.
- `claude-haiku-4-5` : ~5× moins cher, très correct pour du texte imprimé.

Tu peux changer de modèle à tout moment via `FICHE_MODEL` (étape 4), puis
`supabase functions deploy fiche-vision` n'est **pas** nécessaire (les secrets
sont pris en compte immédiatement).

## Sécurité / bonnes pratiques

- La fonction est publique (`--no-verify-jwt`) pour que n'importe quel élève
  puisse l'appeler avec la clé anonyme de l'appli. Pour limiter les coûts, tu
  peux plus tard : exiger le JWT (élèves connectés), ajouter une limite de débit,
  ou réserver cette fonction à l'offre payante (paywall).
- Aucune donnée n'est stockée : la photo est envoyée à l'API, la fiche est
  renvoyée, rien n'est conservé.

## Test rapide

```bash
curl -s -X POST \
  "https://wyydagcjkbivtbuhbzon.supabase.co/functions/v1/fiche-vision" \
  -H "apikey: <clé anon>" -H "Content-Type: application/json" \
  -d '{"images":["data:image/jpeg;base64,/9j/..."]}'
```

Réponse attendue : `{ "fiche": { "title": "...", "questions": [...], "keyInfo": [...], "definitions": [...] } }`.
Si la clé n'est pas configurée : `{ "error": "not_configured" }` (l'appli bascule
alors automatiquement sur la lecture OCR).
