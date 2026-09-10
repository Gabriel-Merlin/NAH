import { useMemo, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useStore } from '../store.jsx'
import { analyzeStudent, buildTraining } from '../data/coachAI.js'
import { ProgressBar } from '../components/ui.jsx'
import { useT } from '../i18n.js'
import CoachSession from '../games/CoachSession.jsx'

const REASON = {
  due: { key: 'reasonDue', icon: '⏰', c: '#d97706' },
  weak: { key: 'reasonWeak', icon: '⚠️', c: '#e11d48' },
  new: { key: 'reasonNew', icon: '✨', c: '#7c3aed' },
  review: { key: 'reasonReview', icon: '🔁', c: '#64748b' },
}

export default function CoachAI() {
  const { state } = useStore()
  const t = useT()
  const [training, setTraining] = useState(null)
  if (!state.track) return <Navigate to="/" replace />

  const a = useMemo(() => analyzeStudent(state, state.track), [state])

  const start = () => {
    const tr = buildTraining(state, state.track, 12)
    if (tr.sequence.length) setTraining(tr)
  }

  if (training) {
    return (
      <div className="animate-lux space-y-4">
        <header className="text-center">
          <p className="kicker">🤖 {t('aiTraining')}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">{t('aiAdapts')}</p>
        </header>
        <CoachSession training={training} onExit={() => setTraining(null)} />
      </div>
    )
  }

  return (
    <div className="animate-lux space-y-6">
      <header className="text-center">
        <p className="kicker">🤖 {t('coachAI')}</p>
        <h1 className="mt-1 font-display text-[1.9rem] font-medium leading-tight">{t('coachAI')}</h1>
        <span className="mx-auto mt-3 block h-px w-24 rounded-full" style={{ background: 'linear-gradient(90deg,transparent,#c8a24e,transparent)' }} />
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{t('coachAISub')}</p>
      </header>

      {!a.hasData ? (
        <section className="card card-lux p-6 text-center">
          <div className="text-4xl">🧭</div>
          <p className="mx-auto mt-3 max-w-sm text-sm text-slate-600 dark:text-slate-300">{t('aiNoData')}</p>
          <Link to="/revision" className="btn-primary mt-5 inline-flex" style={{ backgroundColor: 'var(--c-accent)' }}>{t('aiNoDataCta')}</Link>
        </section>
      ) : (
        <>
          {/* Analyse */}
          <section className="card card-lux p-5">
            <h2 className="mb-2 flex items-center gap-2 font-display text-lg font-semibold">🧠 {t('aiMyAnalysis')}</h2>
            <p className="text-sm text-slate-700 dark:text-slate-200">
              {t('aiIntro').replace('{n}', a.total)}{' '}
              {a.weakestSubject && a.weakestSubject.avg < 75 ? t('aiFocusSubject').replace('{subject}', a.weakestSubject.name).replace('{pct}', a.weakestSubject.avg) : t('aiGoodOverall')}
            </p>
            <div className="mt-3">
              <div className="mb-1 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>{t('aiLevelLabel')}</span><span className="font-semibold" style={{ color: 'var(--c-accent)' }}>{a.acc}%</span>
              </div>
              <ProgressBar value={a.acc} color="var(--c-accent)" />
            </div>
          </section>

          {/* Points faibles */}
          <section>
            <h2 className="mb-2 px-1 font-display text-lg font-semibold">⚠️ {t('aiWeakTitle')}</h2>
            {a.focus.length === 0 ? (
              <div className="card p-5 text-center text-sm text-slate-500 dark:text-slate-400">{t('aiNoWeak')}</div>
            ) : (
              <div className="space-y-2">
                {a.focus.map((f) => {
                  const r = REASON[f.reason] || REASON.review
                  return (
                    <Link key={f.themeId} to={`/subject/${f.subjectId}/theme/${f.themeId}`} className="card flex items-center gap-3 p-3.5 transition hover:-translate-y-0.5 hover:shadow-md">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-lg" style={{ backgroundColor: (f.color || '#888') + '22' }} aria-hidden>{r.icon}</span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-semibold">{f.themeName}</span>
                        <span className="block text-xs text-slate-400">{f.subjectName}{f.practiced ? ` · ${f.score}%` : ''}</span>
                      </span>
                      <span className="chip shrink-0" style={{ backgroundColor: r.c + '1e', color: r.c }}>{t(r.key)}</span>
                    </Link>
                  )
                })}
              </div>
            )}
          </section>

          {/* Points forts */}
          {a.strengths.length > 0 && (
            <section>
              <h2 className="mb-2 px-1 font-display text-lg font-semibold">💪 {t('aiStrongTitle')}</h2>
              <div className="flex flex-wrap gap-2">
                {a.strengths.map((s) => (
                  <span key={s.themeId} className="chip bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">✓ {s.themeName} · {s.score}%</span>
                ))}
              </div>
            </section>
          )}

          {/* Lancer l'entraînement */}
          <button onClick={start} className="btn-gold w-full !py-4 text-base">⚡ {t('aiStart')}</button>
          <p className="text-center text-xs text-slate-400">🔒 {t('aiLocal')}</p>
        </>
      )}
    </div>
  )
}
