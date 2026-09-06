import { useMemo, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useStore } from '../store.jsx'
import { useFocus } from '../focus.jsx'
import { useT } from '../i18n.js'
import { Ring, Icon } from '../components/ui.jsx'

// --- Bibliothèque de méthodes de révision (contenu en français) -------------
const METHODS = [
  { id: 'pomodoro', icon: '🍅', name: 'Pomodoro', tags: ['focus'],
    desc: 'Travaille par sessions minutées (ex. 25 min) suivies d’une courte pause. Idéal pour rester concentré et arrêter de procrastiner. Utilise le minuteur ci-dessus !' },
  { id: 'recall', icon: '🧠', name: 'Rappel actif', tags: ['memoire', 'exos'],
    desc: 'Ferme ton cours et essaie de tout redire ou réécrire de mémoire, puis vérifie. C’est la technique la plus efficace pour retenir sur le long terme.' },
  { id: 'spaced', icon: '🗓️', name: 'Répétition espacée', tags: ['memoire'],
    desc: 'Revois une notion à J+1, J+3, puis J+7… Des révisions courtes mais répétées ancrent bien mieux qu’une longue séance la veille.' },
  { id: 'mindmap', icon: '🗺️', name: 'Carte mentale', tags: ['visuel'],
    desc: 'Schématise les liens entre les notions avec des branches et des couleurs. Parfait si tu retiens mieux en voyant.' },
  { id: 'feynman', icon: '🗣️', name: 'Méthode Feynman', tags: ['comprendre', 'auditif'],
    desc: 'Réexplique la notion avec tes propres mots, comme à un ami. Si tu bloques quelque part, c’est exactement ce point qu’il faut revoir.' },
  { id: 'fiches', icon: '📝', name: 'Fiches de synthèse', tags: ['visuel', 'focus'],
    desc: 'Résume chaque chapitre sur une fiche claire : mots-clés, définitions, petit schéma. Rapide à relire juste avant un contrôle.' },
  { id: 'group', icon: '👥', name: 'Réviser à plusieurs', tags: ['social'],
    desc: 'Interrogez-vous mutuellement et expliquez à tour de rôle. Motivant et efficace si tu es plutôt sociable.' },
  { id: 'cas', icon: '💼', name: 'Études de cas & exercices', tags: ['exos', 'comprendre'],
    desc: 'Entraîne-toi sur des cas concrets et des exercices (très STMG). Idéal pour appliquer le cours et être prêt le jour de l’épreuve.' },
]

// Mini-quiz de personnalité → tags accumulés → méthodes recommandées.
const QUIZ = [
  { q: 'Comment retiens-tu le mieux ?', a: [
    { label: '👀 En voyant (schémas, couleurs)', tags: ['visuel'] },
    { label: '👂 En écoutant / en disant à voix haute', tags: ['auditif'] },
    { label: '✍️ En faisant des exercices', tags: ['exos'] },
  ]},
  { q: 'Tu révises plutôt…', a: [
    { label: '🧘 Seul(e), au calme', tags: ['focus'] },
    { label: '🫂 Avec des amis', tags: ['social'] },
    { label: '🔀 Ça dépend des jours', tags: ['focus', 'social'] },
  ]},
  { q: 'Ton principal défi ?', a: [
    { label: '⏳ Je me déconcentre / je procrastine', tags: ['focus'] },
    { label: '💨 J’oublie vite', tags: ['memoire'] },
    { label: '🎯 Je comprends mais je bloque à l’épreuve', tags: ['comprendre', 'exos'] },
  ]},
]

const PRESETS = [
  { key: 'classic', s: 25, b: 5 },
  { key: 'balanced', s: 50, b: 10 },
  { key: 'marathon', s: 60, b: 15 },
]

function two(n) { return String(n).padStart(2, '0') }

export default function Coach() {
  const { state } = useStore()
  const f = useFocus()
  const t = useT()
  const [answers, setAnswers] = useState({}) // { [qIndex]: aIndex }
  const [showResults, setShowResults] = useState(false)

  if (!state.track) return <Navigate to="/" replace />

  const { phase, running, remaining, phaseTotal, studyMin, breakMin, cycles } = f
  const canEdit = phase === 'idle'
  const pct = phaseTotal > 0 ? (1 - remaining / phaseTotal) * 100 : 0
  const mm = Math.floor(remaining / 60)
  const ss = remaining % 60
  const isBreak = phase === 'break'
  const ringColor = isBreak ? '#3f9d6d' : 'var(--c-accent)'
  const phaseLabel = phase === 'idle' ? t('phaseReady') : isBreak ? t('phaseBreak') : t('phaseFocus')
  const tip = phase === 'idle' ? t('idleTip') : isBreak ? t('breakTip') : t('focusTip')
  const activePreset = PRESETS.find((p) => p.s === studyMin && p.b === breakMin)?.key || 'custom'

  // Recommandation : score chaque méthode par la somme des tags sélectionnés.
  const recommended = useMemo(() => {
    const counts = {}
    Object.entries(answers).forEach(([qi, ai]) => {
      QUIZ[qi]?.a[ai]?.tags.forEach((tg) => { counts[tg] = (counts[tg] || 0) + 1 })
    })
    return [...METHODS]
      .map((m) => ({ m, score: m.tags.reduce((s, tg) => s + (counts[tg] || 0), 0) }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map((x) => x.m)
  }, [answers])
  const allAnswered = Object.keys(answers).length === QUIZ.length

  const Stepper = ({ label, value, onChange, color }) => (
    <div className="flex items-center justify-between gap-3 rounded-xl bg-slate-100 px-3 py-2.5 dark:bg-slate-800">
      <span className="text-sm font-semibold">{label}</span>
      <div className="flex items-center gap-2">
        <button onClick={() => onChange(value - 5)} disabled={!canEdit} className="grid h-8 w-8 place-items-center rounded-full bg-white text-lg font-bold shadow-sm disabled:opacity-40 dark:bg-slate-700" aria-label="-5">−</button>
        <span className="w-16 text-center font-display text-lg font-semibold tabular-nums" style={{ color }}>{value} {t('minShort')}</span>
        <button onClick={() => onChange(value + 5)} disabled={!canEdit} className="grid h-8 w-8 place-items-center rounded-full bg-white text-lg font-bold shadow-sm disabled:opacity-40 dark:bg-slate-700" aria-label="+5">+</button>
      </div>
    </div>
  )

  return (
    <div className="animate-lux space-y-8">
      <header className="text-center">
        <p className="kicker">🎯 {t('coach')}</p>
        <h1 className="mt-1 font-display text-[1.9rem] font-medium leading-tight">{t('coach')}</h1>
        <span className="mx-auto mt-3 block h-px w-24 rounded-full" style={{ background: 'linear-gradient(90deg,transparent,#c8a24e,transparent)' }} />
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{t('coachSub')}</p>
      </header>

      {/* ---- Minuteur ---- */}
      <section className="card card-lux p-5 sm:p-6">
        <h2 className="mb-4 text-center font-display text-xl font-medium">{t('timerTitle')}</h2>

        <div className="flex flex-col items-center">
          <div className="relative">
            <Ring
              value={pct}
              color={ringColor}
              size={228}
              label={
                <span className="flex flex-col items-center">
                  <span className="font-display text-5xl font-semibold tabular-nums" style={{ color: ringColor }}>{two(mm)}:{two(ss)}</span>
                  <span className="mt-1 text-xs uppercase tracking-widest text-slate-400">{phaseLabel}</span>
                </span>
              }
            />
          </div>

          {/* Contrôles */}
          <div className="mt-6 flex w-full max-w-xs flex-col gap-2">
            <button
              onClick={() => (running ? f.pause() : f.start())}
              className="w-full rounded-2xl px-4 py-3 text-base font-semibold text-white shadow-md transition hover:opacity-90"
              style={{ backgroundColor: isBreak ? '#3f9d6d' : 'var(--c-accent)' }}
            >
              {running ? `⏸ ${t('pauseTimer')}` : phase === 'idle' ? `▶ ${t('startTimer')}` : `▶ ${t('resume')}`}
            </button>
            <div className="flex gap-2">
              <button onClick={f.skip} disabled={phase === 'idle'} className="flex-1 rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 disabled:opacity-40 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">⏭ {t('skipPhase')}</button>
              <button onClick={f.reset} disabled={phase === 'idle' && cycles === 0} className="flex-1 rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 disabled:opacity-40 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">↺ {t('resetTimer')}</button>
            </div>
          </div>

          {cycles > 0 && (
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">🎯 {cycles} {cycles > 1 ? t('sessionsDoneP') : t('sessionsDoneS')}</p>
          )}
        </div>

        {/* Réglages : presets + durées personnalisées */}
        <hr className="rule-gold my-5" />
        <p className="mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-slate-400">{t('presetsLabel')}</p>
        <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {PRESETS.map((p) => (
            <button
              key={p.key}
              onClick={() => f.applyPreset(p.s, p.b)}
              className={`rounded-xl px-2 py-2 text-center text-xs font-semibold transition ${activePreset === p.key ? 'text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'}`}
              style={activePreset === p.key ? { backgroundColor: 'var(--c-accent)' } : undefined}
            >
              {t('preset_' + p.key)}<br /><span className="opacity-70">{p.s}/{p.b}</span>
            </button>
          ))}
          <span className={`flex items-center justify-center rounded-xl px-2 py-2 text-center text-xs font-semibold ${activePreset === 'custom' ? 'text-white' : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400'}`} style={activePreset === 'custom' ? { backgroundColor: 'var(--c-accent)' } : undefined}>
            {t('preset_custom')}
          </span>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          <Stepper label={`📖 ${t('phaseFocus')}`} value={studyMin} onChange={f.setStudyMin} color="var(--c-accent)" />
          <Stepper label={`☕ ${t('phaseBreak')}`} value={breakMin} onChange={f.setBreakMin} color="#3f9d6d" />
        </div>
        {!canEdit && <p className="mt-2 text-center text-xs text-slate-400">{t('resetToEdit')}</p>}

        <div className="mt-4 flex items-start gap-2 rounded-xl px-3 py-2.5 text-sm" style={{ backgroundColor: 'color-mix(in srgb, var(--c-accent) 10%, transparent)' }}>
          <span aria-hidden>💡</span><span className="text-slate-600 dark:text-slate-300">{tip}</span>
        </div>
        <p className="mt-2 text-center text-xs text-slate-400">{t('focusXpNote')}</p>
      </section>

      {/* ---- Quiz méthodes ---- */}
      <section>
        <div className="mb-3 px-1">
          <h2 className="font-display text-xl font-medium">{t('methodsTitle')}</h2>
          <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{t('methodsSub')}</p>
        </div>

        {!showResults ? (
          <div className="card card-lux space-y-4 p-5">
            {QUIZ.map((item, qi) => (
              <div key={qi}>
                <p className="mb-2 font-semibold">{qi + 1}. {item.q}</p>
                <div className="grid gap-2">
                  {item.a.map((opt, ai) => (
                    <button
                      key={ai}
                      onClick={() => setAnswers((a) => ({ ...a, [qi]: ai }))}
                      className={`rounded-xl border-2 px-3 py-2.5 text-left text-sm transition ${answers[qi] === ai ? 'font-semibold' : 'border-transparent bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700'}`}
                      style={answers[qi] === ai ? { borderColor: 'var(--c-accent)', backgroundColor: 'color-mix(in srgb, var(--c-accent) 12%, transparent)' } : undefined}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <button
              onClick={() => setShowResults(true)}
              disabled={!allAnswered}
              className="w-full rounded-2xl px-4 py-3 text-base font-semibold text-white shadow-md transition hover:opacity-90 disabled:opacity-40"
              style={{ backgroundColor: 'var(--c-accent)' }}
            >
              {t('seeResults')}
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="card card-lux p-5">
              <h3 className="mb-3 font-display text-lg font-medium">✨ {t('yourMethods')}</h3>
              <div className="space-y-3">
                {recommended.map((m) => (
                  <div key={m.id} className="flex gap-3 rounded-xl p-3" style={{ backgroundColor: 'color-mix(in srgb, var(--c-accent) 9%, transparent)' }}>
                    <span className="text-2xl" aria-hidden>{m.icon}</span>
                    <div><p className="font-semibold">{m.name}</p><p className="mt-0.5 text-sm text-slate-600 dark:text-slate-300">{m.desc}</p></div>
                  </div>
                ))}
              </div>
              <button onClick={() => { setShowResults(false); setAnswers({}) }} className="mt-4 text-sm font-semibold text-[#98761f] hover:underline dark:text-[#d9bd77]">↺ {t('restartQuiz')}</button>
            </div>
          </div>
        )}
      </section>

      {/* ---- Bibliothèque complète ---- */}
      <section>
        <h2 className="mb-3 px-1 font-display text-xl font-medium">{t('allMethods')}</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {METHODS.map((m) => (
            <div key={m.id} className="card p-4">
              <p className="flex items-center gap-2 font-display font-semibold"><span className="text-xl" aria-hidden>{m.icon}</span> {m.name}</p>
              <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
