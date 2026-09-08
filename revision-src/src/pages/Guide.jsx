import { Link, Navigate } from 'react-router-dom'
import { InstallCard } from '../components/InstallApp.jsx'
import { useInstall } from '../pwa.js'

// Guide de démarrage (élèves) — accessible depuis le pied de page et le menu.
// Rédigé en français (public : lycées français).
const SITE = 'revizstmg.github.io'

function Step({ n, title, children }) {
  return (
    <section className="card p-5">
      <div className="flex items-start gap-4">
        <span
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full font-display text-lg font-semibold"
          style={{ color: 'var(--c-accent)', border: '1.5px solid color-mix(in srgb, var(--c-accent) 40%, transparent)' }}
          aria-hidden
        >
          {n}
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="mb-1 font-display text-lg font-semibold">{title}</h2>
          <div className="text-sm text-slate-600 dark:text-slate-300">{children}</div>
        </div>
      </div>
    </section>
  )
}

export default function Guide() {
  const { standalone } = useInstall()
  // Le tutoriel d'installation n'a pas de sens dans l'app déjà installée.
  if (standalone) return <Navigate to="/accueil" replace />
  return (
    <div className="animate-lux mx-auto max-w-2xl space-y-5">
      <header className="text-center">
        <p className="kicker">🎓 Guide de démarrage</p>
        <h1 className="mt-1 font-display text-[1.9rem] font-medium leading-tight">Bien commencer en 5 minutes</h1>
        <span className="mx-auto mt-3 block h-px w-24 rounded-full" style={{ background: 'linear-gradient(90deg,transparent,#c8a24e,transparent)' }} />
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Crée ton compte, choisis ta filière, installe l’appli — et révise le bac STMG en jouant.</p>
      </header>

      {/* Adresse du site */}
      <div className="card card-lux flex flex-wrap items-center justify-between gap-3 p-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Adresse du site</p>
          <p className="font-display text-xl font-semibold" style={{ color: 'var(--c-accent)' }}>{SITE}</p>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">Ouvre-le dans ton navigateur pour commencer.</p>
      </div>

      <Step n={1} title="Va sur le site">
        Ouvre <b>{SITE}</b> dans ton navigateur. <span className="text-slate-400">Rien à télécharger pour l’instant.</span>
      </Step>

      <Step n={2} title="Crée ton compte">
        <p>Choisis <b>« Créer un compte »</b>, saisis ton <b>e-mail</b> et un <b>mot de passe</b>.</p>
        <p className="mt-1">Un e-mail de confirmation t’est envoyé : <b>ouvre-le et clique sur le lien</b> <span className="text-slate-400">(pense à regarder dans les spams)</span>, puis reviens te connecter. Ensuite, tu restes connecté.</p>
      </Step>

      <Step n={3} title="Choisis ta filière">
        <b>Première STMG</b>, ou <b>Terminale STMG</b> avec ta spécialité : Gestion &amp; Finance, RH &amp; Communication, Mercatique ou Systèmes d’information de gestion.
      </Step>

      <Step n={4} title="Installe l’appli sur ton téléphone">
        <div className="mb-3"><InstallCard /></div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-3 dark:border-slate-700">
            <p className="mb-1.5 flex items-center gap-2 font-semibold"><span aria-hidden>📱</span> iPhone</p>
            <ol className="list-decimal space-y-1 pl-4">
              <li>Ouvre le site dans <b>Safari</b></li>
              <li>Touche <b>Partager</b> <span className="text-slate-400">(le carré avec la flèche ↑)</span></li>
              <li>Choisis <b>« Sur l’écran d’accueil »</b></li>
              <li>Touche <b>Ajouter</b></li>
            </ol>
            <p className="mt-2 rounded-lg px-2 py-1.5 text-xs" style={{ backgroundColor: 'color-mix(in srgb, #c8a24e 16%, transparent)', color: '#8a6a1e' }}>⚠️ Sur iPhone, ça marche <b>uniquement dans Safari</b> — pas dans Chrome.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-3 dark:border-slate-700">
            <p className="mb-1.5 flex items-center gap-2 font-semibold"><span aria-hidden>🤖</span> Android</p>
            <ol className="list-decimal space-y-1 pl-4">
              <li>Ouvre le site dans <b>Chrome</b></li>
              <li>Touche le menu <b>⋮</b> <span className="text-slate-400">(en haut à droite)</span></li>
              <li>Choisis <b>« Installer l’application »</b></li>
              <li>Confirme l’installation</li>
            </ol>
            <p className="mt-2 rounded-lg px-2 py-1.5 text-xs" style={{ backgroundColor: 'color-mix(in srgb, var(--c-accent) 12%, transparent)' }}>💡 L’icône RévizSTMG s’ajoute à ton écran d’accueil.</p>
          </div>
        </div>
      </Step>

      <Step n={5} title="Révise partout">
        Une fois connecté, ta <b>progression se synchronise</b> automatiquement entre tous tes appareils. Le Coach, la révision intelligente, le bac blanc et le Grand Oral t’attendent.
      </Step>

      {/* Code de classe */}
      <div className="card flex items-center gap-4 p-5" style={{ boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--c-accent) 30%, transparent)' }}>
        <span className="text-3xl" aria-hidden>🔑</span>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          <b>Un code de classe ?</b> Si ton prof t’en donne un, saisis-le dans <Link to="/classement" className="font-semibold text-[#98761f] underline dark:text-[#d9bd77]">Classement</Link> pour rejoindre ta classe et suivre le classement de la semaine.
        </p>
      </div>

      <div className="card card-lux p-5 text-center">
        <h2 className="font-display text-lg font-semibold">Une question ?</h2>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Écris-nous, on te répond :</p>
        <a href="mailto:revizstmg@gmail.com" className="mt-2 inline-block font-semibold text-[#98761f] underline dark:text-[#d9bd77]">revizstmg@gmail.com</a>
      </div>

      <div className="flex flex-wrap gap-2 pt-1">
        <Link to="/accueil" className="btn-ghost !min-h-0 !py-2 text-sm">← Retour</Link>
        <Link to="/faq" className="btn-ghost !min-h-0 !py-2 text-sm">Foire aux questions →</Link>
      </div>
    </div>
  )
}
