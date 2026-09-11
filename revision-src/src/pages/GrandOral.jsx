import { useEffect, useRef, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useStore } from '../store.jsx'
import { trackLabel } from '../data/tracks.js'
import { useT } from '../i18n.js'
import { Ring } from '../components/ui.jsx'
import AudioRecorder from '../components/AudioRecorder.jsx'

// Banque de questions types du Grand Oral, par spécialité de Terminale STMG.
// Chaque question s'accompagne d'un « angle » : comment l'aborder.
const GO_QUESTIONS = {
  'rh-communication': {
    label: 'RH & Communication', icon: '🧑‍💼',
    items: [
      { q: 'La rémunération suffit-elle à motiver durablement les salariés ?', angle: 'Oppose facteurs d’hygiène et de motivation (Herzberg) : le salaire évite l’insatisfaction, mais reconnaissance et intérêt du travail motivent vraiment.' },
      { q: 'Comment le management peut-il transformer un conflit en opportunité ?', angle: 'Distingue conflit latent/ouvert, puis les modes de résolution (négociation, médiation, arbitrage). Illustre avec un cas d’entreprise.' },
      { q: 'La communication interne améliore-t-elle vraiment la cohésion d’une équipe ?', angle: 'Relie communication formelle/informelle, schéma de communication et performance sociale (turnover, absentéisme).' },
      { q: 'Le télétravail renforce-t-il ou fragilise-t-il l’implication des salariés ?', angle: 'Pèse autonomie et qualité de vie contre risques d’isolement et de perte de cohésion. Nuance selon les métiers.' },
    ],
  },
  mercatique: {
    label: 'Mercatique', icon: '🛍️',
    items: [
      { q: 'Les réseaux sociaux ont-ils transformé la relation client ?', angle: 'Montre le passage d’une communication descendante à l’interaction/co-création. Parle e-réputation, avis clients et fidélisation.' },
      { q: 'Fidéliser coûte-t-il vraiment moins cher que conquérir de nouveaux clients ?', angle: 'Compare coûts d’acquisition et de fidélisation, valeur à vie du client, programmes de fidélité. Appuie-toi sur des chiffres.' },
      { q: 'Le marketing responsable est-il un argument commercial ou une conviction ?', angle: 'Interroge la frontière avec le greenwashing ; relie mercatique responsable, image de marque et attentes des consommateurs.' },
      { q: 'Comment une marque crée-t-elle de la valeur perçue aux yeux du consommateur ?', angle: 'Mobilise le mix (4P), le positionnement et la valeur perçue vs valeur réelle. Prends une marque que tu connais.' },
    ],
  },
  'gestion-finance': {
    label: 'Gestion et Finance', icon: '💰',
    items: [
      { q: 'Un résultat positif suffit-il à garantir la santé financière d’une entreprise ?', angle: 'Sépare résultat (comptable) et trésorerie (encaissements réels). Une entreprise rentable peut manquer de liquidités.' },
      { q: 'Pourquoi la trésorerie est-elle vitale, même pour une entreprise rentable ?', angle: 'Explique le décalage encaissements/décaissements, le BFR et le risque de cessation de paiement.' },
      { q: 'L’endettement est-il toujours un risque pour l’entreprise ?', angle: 'Distingue effet de levier (l’endettement finance la croissance) et surendettement. Relie au coût du capital.' },
      { q: 'Comment les documents comptables aident-ils à la prise de décision ?', angle: 'Montre le rôle du bilan, du compte de résultat et des SIG comme outils d’analyse et de pilotage.' },
    ],
  },
  sig: {
    label: 'Systèmes d’information de gestion', icon: '💻',
    items: [
      { q: 'Le partage des données améliore-t-il vraiment la prise de décision ?', angle: 'Relie SI, intelligence collective et information de qualité (fiable, pertinente, actuelle). Nuance avec la surcharge d’information.' },
      { q: 'Faut-il tout dématérialiser dans une organisation ?', angle: 'Balance gains (temps, place, workflow) et limites (sécurité, valeur juridique, fracture numérique).' },
      { q: 'La sécurité des systèmes d’information est-elle d’abord un problème technique ou humain ?', angle: 'Mobilise le triptyque CID puis montre que la faille est souvent humaine (phishing, mot de passe faible).' },
      { q: 'Un PGI rend-il l’entreprise plus performante ou plus dépendante ?', angle: 'Oppose intégration/cohérence des données et coût/dépendance au fournisseur. Conclus sur un arbitrage.' },
    ],
  },
}

// --- Contenu de l'épreuve (français : épreuve du bac) ----------------------
// Le déroulé exact (durées) est confirmé chaque année par le professeur ; on
// présente ici la structure de préparation de référence.
const TEMPS = [
  {
    n: 1, icon: '🎤', title: 'L’exposé', dur: '≈ 5 min',
    desc: 'Debout, sans tes notes, tu présentes UNE des deux questions (c’est le jury qui la choisit). Tu annonces ton plan, tu argumentes, tu conclus.',
  },
  {
    n: 2, icon: '💬', title: 'L’échange avec le jury', dur: '≈ 10 min',
    desc: 'Le jury te pose des questions pour approfondir : définitions, exemples, liens avec le programme de ta spécialité. Reste calme, prends le temps de reformuler.',
  },
  {
    n: 3, icon: '🧭', title: 'Le projet d’orientation', dur: '≈ 5 min',
    desc: 'Tu expliques en quoi cette question éclaire ton projet d’études ou professionnel : pourquoi ce sujet, ce qu’il t’a appris sur toi et ta voie.',
  },
]

const CRITERES = [
  { icon: '🗣️', h: 'Qualité orale', c: 'Voix audible, débit posé, regard vers le jury, peu de « euh ». On évalue ta capacité à t’exprimer clairement, pas à réciter.' },
  { icon: '🧩', h: 'Argumentation', c: 'Un propos construit : une accroche, un plan clair, des arguments illustrés d’exemples, une conclusion. La structure compte autant que le contenu.' },
  { icon: '📚', h: 'Solidité des connaissances', c: 'Tu maîtrises les notions de ta spécialité liées à la question et tu sais les mobiliser pour répondre aux relances du jury.' },
  { icon: '🎯', h: 'Projet motivé', c: 'Tu relies sincèrement la question à ton projet : le jury veut sentir une démarche personnelle et réfléchie.' },
]

const ETAPES = [
  { icon: '①', h: 'Choisir ses deux questions', c: 'Elles s’appuient sur le programme de tes spécialités (souvent une par spécialité, ou une transversale). Choisis des sujets qui t’intéressent vraiment : tu les défendras mieux.' },
  { icon: '②', h: 'Construire une réponse', c: 'Formule une problématique, puis un plan en 2 ou 3 parties. Chaque partie = une idée + un exemple concret. Prépare une accroche qui donne envie et une conclusion qui ouvre.' },
  { icon: '③', h: 'Préparer le projet d’orientation', c: 'Prépare 3–4 phrases : pourquoi ce sujet te touche, ce qu’il révèle de ton projet d’études, le métier ou le domaine visé.' },
  { icon: '④', h: 'S’entraîner à voix haute', c: 'Répète debout, sans lire, en te chronométrant. Filme-toi ou récite à un proche. C’est l’entraînement oral, pas la fiche écrite, qui fait la différence.' },
]

const CONSEILS = [
  { icon: '😮‍💨', t: 'Gère le stress', d: 'Respire lentement avant de commencer. Un court silence vaut mieux qu’un « euh ». Le jury est bienveillant, il veut te voir réussir.' },
  { icon: '👀', t: 'Regarde le jury', d: 'Adresse-toi à eux, pas à tes chaussures. Le contact visuel montre l’aisance et capte l’attention.' },
  { icon: '🧱', t: 'Structure, structure, structure', d: 'Annonce ton plan (« Je vais répondre en deux temps… »). Un jury suit d’autant mieux qu’il sait où tu vas.' },
  { icon: '🗂️', t: 'Un exemple par idée', d: 'Chaque argument doit être illustré (cas d’entreprise, chiffre, situation vécue). L’exemple rend ton propos vivant et crédible.' },
]

function two(n) { return String(n).padStart(2, '0') }

const PRACTICE = [
  { key: 'expose', label: 'Exposé', min: 5 },
  { key: 'echange', label: 'Échange', min: 10 },
  { key: 'projet', label: 'Projet', min: 5 },
]

export default function GrandOral() {
  const { state, setGrandOral } = useStore()
  const t = useT()
  if (!state.track) return <Navigate to="/" replace />

  const go = state.grandOral || { spec: '', q1: '', q2: '', notes: '' }
  const set = (patch) => setGrandOral(patch)

  // Banque de questions : par défaut, la spécialité de l'élève.
  const specKeys = Object.keys(GO_QUESTIONS)
  const mySpec = specKeys.includes(state.track?.specialty) ? state.track.specialty : specKeys[0]
  const [bankSpec, setBankSpec] = useState(mySpec)
  const bank = GO_QUESTIONS[bankSpec]
  // Pré-remplit une question dans la fiche de préparation.
  const useQuestion = (text) => {
    if (!go.q1) set({ q1: text })
    else if (!go.q2) set({ q2: text })
    else set({ q2: text })
  }

  // Minuteur d'entraînement (local, indépendant du Coach).
  const [total, setTotal] = useState(PRACTICE[0].min * 60)
  const [left, setLeft] = useState(PRACTICE[0].min * 60)
  const [running, setRunning] = useState(false)
  const tick = useRef(null)

  useEffect(() => {
    if (!running) return
    tick.current = setInterval(() => {
      setLeft((l) => {
        if (l <= 1) { clearInterval(tick.current); setRunning(false); return 0 }
        return l - 1
      })
    }, 1000)
    return () => clearInterval(tick.current)
  }, [running])

  const pickPractice = (min) => { setRunning(false); setTotal(min * 60); setLeft(min * 60) }
  const pct = total > 0 ? (1 - left / total) * 100 : 0
  const activeMin = Math.round(total / 60)

  return (
    <div className="animate-lux space-y-8">
      <header className="text-center">
        <p className="kicker">🎓 {t('grandOral')}</p>
        <h1 className="mt-1 font-display text-[1.9rem] font-medium leading-tight">{t('grandOral')}</h1>
        <span className="mx-auto mt-3 block h-px w-24 rounded-full" style={{ background: 'linear-gradient(90deg,transparent,#c8a24e,transparent)' }} />
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{t('grandOralSub')}</p>
      </header>

      {/* ---- L'épreuve en bref ---- */}
      <section className="card card-lux p-5 sm:p-6">
        <h2 className="mb-3 font-display text-xl font-medium">📋 L’épreuve en bref</h2>
        <div className="mb-4 grid grid-cols-3 gap-2 text-center">
          <div className="rounded-xl p-3" style={{ backgroundColor: 'color-mix(in srgb, var(--c-accent) 10%, transparent)' }}>
            <p className="font-display text-2xl font-bold" style={{ color: 'var(--c-accent)' }}>20 min</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">de préparation</p>
          </div>
          <div className="rounded-xl p-3" style={{ backgroundColor: 'color-mix(in srgb, var(--c-accent) 10%, transparent)' }}>
            <p className="font-display text-2xl font-bold" style={{ color: 'var(--c-accent)' }}>20 min</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">de passage</p>
          </div>
          <div className="rounded-xl p-3" style={{ backgroundColor: 'color-mix(in srgb, var(--c-accent) 10%, transparent)' }}>
            <p className="font-display text-2xl font-bold" style={{ color: 'var(--c-accent)' }}>coef. 14</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">en STMG</p>
          </div>
        </div>
        <p className="mb-3 text-sm text-slate-600 dark:text-slate-300">
          Tu prépares <strong>deux questions</strong> adossées au programme de tes spécialités. Le jour J, après 20 minutes de préparation, l’épreuve se déroule en trois temps :
        </p>
        <div className="space-y-2">
          {TEMPS.map((tp) => (
            <div key={tp.n} className="flex gap-3 rounded-xl bg-slate-50 p-3 dark:bg-slate-800/60">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-lg" style={{ backgroundColor: 'color-mix(in srgb, var(--c-accent) 14%, transparent)' }} aria-hidden>{tp.icon}</span>
              <div className="min-w-0">
                <p className="font-semibold">Temps {tp.n} — {tp.title} <span className="ml-1 text-xs font-normal text-slate-400">{tp.dur}</span></p>
                <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-300">{tp.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-slate-400">Les durées sont indicatives : ton professeur confirme les modalités exactes de la session.</p>
      </section>

      {/* ---- Préparer mes questions (interactif, sauvegardé) ---- */}
      <section className="card card-lux p-5 sm:p-6">
        <h2 className="font-display text-xl font-medium">✍️ Préparer mes deux questions</h2>
        <p className="mb-4 mt-0.5 text-sm text-slate-500 dark:text-slate-400">Note ici tes questions et ton plan — tout est enregistré automatiquement sur cet appareil.</p>

        <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-400">Spécialité(s) concernée(s)</label>
        <input
          value={go.spec || ''}
          onChange={(e) => set({ spec: e.target.value })}
          placeholder={`Ex. ${trackLabel(state.track)}`}
          className="mb-4 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[color:var(--c-accent)] dark:border-slate-700 dark:bg-slate-800"
        />

        <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-400">Question 1</label>
        <textarea
          value={go.q1 || ''}
          onChange={(e) => set({ q1: e.target.value })}
          rows={2}
          placeholder="Formule ta première question…"
          className="mb-4 w-full resize-y rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[color:var(--c-accent)] dark:border-slate-700 dark:bg-slate-800"
        />

        <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-400">Question 2</label>
        <textarea
          value={go.q2 || ''}
          onChange={(e) => set({ q2: e.target.value })}
          rows={2}
          placeholder="Formule ta seconde question…"
          className="mb-4 w-full resize-y rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[color:var(--c-accent)] dark:border-slate-700 dark:bg-slate-800"
        />

        <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-400">Mon plan / mes notes (accroche · arguments · conclusion · projet)</label>
        <textarea
          value={go.notes || ''}
          onChange={(e) => set({ notes: e.target.value })}
          rows={6}
          placeholder={'Accroche : …\nPartie 1 : idée + exemple\nPartie 2 : idée + exemple\nConclusion : …\nProjet d’orientation : …'}
          className="w-full resize-y rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[color:var(--c-accent)] dark:border-slate-700 dark:bg-slate-800"
        />
        {(go.q1 || go.q2 || go.notes) && (
          <button
            onClick={() => { if (confirm('Effacer tes notes du Grand Oral ?')) set({ spec: '', q1: '', q2: '', notes: '' }) }}
            className="mt-3 text-xs font-semibold text-rose-500 hover:underline"
          >
            ↺ Tout effacer
          </button>
        )}
      </section>

      {/* ---- Banque de questions par spécialité ---- */}
      <section className="card card-lux p-5 sm:p-6">
        <h2 className="font-display text-xl font-medium">💡 Exemples de questions</h2>
        <p className="mb-3 mt-0.5 text-sm text-slate-500 dark:text-slate-400">Des idées de questions par spécialité, avec un angle pour les traiter. Touche « Utiliser » pour l’ajouter à ta fiche.</p>
        <div className="mb-4 flex flex-wrap gap-1.5">
          {Object.entries(GO_QUESTIONS).map(([key, v]) => (
            <button
              key={key}
              onClick={() => setBankSpec(key)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${bankSpec === key ? 'text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'}`}
              style={bankSpec === key ? { backgroundColor: 'var(--c-accent)' } : undefined}
            >
              {v.icon} {v.label}{key === mySpec ? ' ★' : ''}
            </button>
          ))}
        </div>
        <div className="space-y-2">
          {bank.items.map((it, k) => (
            <div key={k} className="rounded-xl bg-slate-50 p-3 dark:bg-slate-800/60">
              <div className="flex items-start justify-between gap-2">
                <p className="font-semibold leading-snug">« {it.q} »</p>
                <button
                  onClick={() => useQuestion(it.q)}
                  className="shrink-0 rounded-lg px-2 py-1 text-xs font-semibold text-white transition hover:opacity-90"
                  style={{ backgroundColor: 'var(--c-accent)' }}
                >
                  Utiliser
                </button>
              </div>
              <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300"><span className="font-semibold" style={{ color: 'var(--c-accent)' }}>Angle :</span> {it.angle}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-slate-400">★ Ta spécialité. Ces questions sont des exemples pour t’inspirer — la meilleure question reste celle qui t’intéresse vraiment.</p>
      </section>

      {/* ---- S'entraîner (minuteur) ---- */}
      <section className="card card-lux p-5 sm:p-6">
        <h2 className="mb-1 font-display text-xl font-medium">⏱️ M’entraîner à l’oral</h2>
        <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">Choisis un temps, mets-toi debout et parle sans lire tes notes jusqu’à la fin du chrono.</p>
        <div className="mb-5 grid grid-cols-3 gap-2">
          {PRACTICE.map((p) => (
            <button
              key={p.key}
              onClick={() => pickPractice(p.min)}
              className={`rounded-xl px-2 py-2 text-center text-xs font-semibold transition ${activeMin === p.min ? 'text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'}`}
              style={activeMin === p.min ? { backgroundColor: 'var(--c-accent)' } : undefined}
            >
              {p.label}<br /><span className="opacity-70">{p.min} min</span>
            </button>
          ))}
        </div>
        <div className="flex flex-col items-center">
          <Ring
            value={pct}
            color={left === 0 ? '#3f9d6d' : 'var(--c-accent)'}
            size={200}
            label={
              <span className="flex flex-col items-center">
                <span className="font-display text-5xl font-semibold tabular-nums" style={{ color: left === 0 ? '#3f9d6d' : 'var(--c-accent)' }}>{two(Math.floor(left / 60))}:{two(left % 60)}</span>
                <span className="mt-1 text-xs uppercase tracking-widest text-slate-400">{left === 0 ? 'Terminé' : running ? 'En cours' : 'Prêt'}</span>
              </span>
            }
          />
          <div className="mt-5 flex w-full max-w-xs gap-2">
            <button
              onClick={() => { if (left === 0) pickPractice(activeMin); setRunning((r) => !r) }}
              className="flex-1 rounded-2xl px-4 py-3 text-base font-semibold text-white shadow-md transition hover:opacity-90"
              style={{ backgroundColor: 'var(--c-accent)' }}
            >
              {running ? '⏸ Pause' : left === 0 ? '↺ Recommencer' : '▶ Démarrer'}
            </button>
            <button
              onClick={() => pickPractice(activeMin)}
              className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              ↺
            </button>
          </div>
        </div>

        <AudioRecorder />
      </section>

      {/* ---- Étapes de préparation ---- */}
      <section>
        <h2 className="mb-3 px-1 font-display text-xl font-medium">🧭 Comment se préparer, étape par étape</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {ETAPES.map((e) => (
            <div key={e.h} className="card p-4">
              <p className="flex items-center gap-2 font-display font-semibold"><span className="text-lg" style={{ color: 'var(--c-accent)' }} aria-hidden>{e.icon}</span> {e.h}</p>
              <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300">{e.c}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---- Ce que le jury évalue ---- */}
      <section>
        <h2 className="mb-3 px-1 font-display text-xl font-medium">⚖️ Ce que le jury évalue</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {CRITERES.map((c) => (
            <div key={c.h} className="card p-4">
              <p className="flex items-center gap-2 font-display font-semibold"><span className="text-xl" aria-hidden>{c.icon}</span> {c.h}</p>
              <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300">{c.c}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---- Conseils express ---- */}
      <section>
        <h2 className="mb-3 px-1 font-display text-xl font-medium">💡 Conseils express</h2>
        <div className="space-y-2">
          {CONSEILS.map((c) => (
            <div key={c.t} className="flex gap-3 rounded-xl p-3" style={{ backgroundColor: 'color-mix(in srgb, var(--c-accent) 9%, transparent)' }}>
              <span className="text-2xl" aria-hidden>{c.icon}</span>
              <div><p className="font-semibold">{c.t}</p><p className="mt-0.5 text-sm text-slate-600 dark:text-slate-300">{c.d}</p></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
