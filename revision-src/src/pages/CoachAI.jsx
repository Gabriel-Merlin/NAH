import { useMemo, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useStore, useStudyTimer } from '../store.jsx'
import { analyzeStudent, buildTraining, buildStudyPlan, coachAdvice, coachSubjects } from '../data/coachAI.js'
import { ProgressBar, Ring } from '../components/ui.jsx'
import { useT } from '../i18n.js'
import CoachSession from '../games/CoachSession.jsx'

const REASON = {
  due: { key: 'reasonDue', icon: '⏰', c: '#d97706' },
  weak: { key: 'reasonWeak', icon: '⚠️', c: '#e11d48' },
  new: { key: 'reasonNew', icon: '✨', c: '#7c3aed' },
  review: { key: 'reasonReview', icon: '🔁', c: '#64748b' },
}
const SUB_STATUS = {
  strong: { c: '#059669', label: '💪' },
  ok: { c: '#0891b2', label: '👍' },
  weak: { c: '#e11d48', label: '⚠️' },
  unseen: { c: '#94a3b8', label: '·' },
}

function fmtDay(dateStr) {
  try {
    return new Date(dateStr + 'T00:00:00').toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' })
  } catch { return dateStr }
}

export default function CoachAI() {
  const { state, setBacDate } = useStore()
  const t = useT()
  useStudyTimer() // le temps de l'entraînement coach IA compte pour les récompenses
  const [training, setTraining] = useState(null)
  const [subjectFilter, setSubjectFilter] = useState('')
  const [planOpen, setPlanOpen] = useState(false)
  if (!state.track) return <Navigate to="/" replace />

  const a = useMemo(() => analyzeStudent(state, state.track), [state])
  const plan = useMemo(() => buildStudyPlan(state, state.track, { perDay: 3, maxDays: 30 }), [state])
  const advice = useMemo(() => coachAdvice(a), [a])
  const subjects = useMemo(() => coachSubjects(state.track), [state.track])

  const start = () => {
    const tr = buildTraining(state, state.track, 12, subjectFilter || null)
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

  const visibleDays = planOpen ? plan.days : plan.days.slice(0, 4)

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
          {/* ---------- Diagnostic ---------- */}
          <section className="card card-lux p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="flex items-center gap-2 font-display text-lg font-semibold">🧠 {t('aiDiagnostic')}</h2>
              <span className="chip shrink-0" style={{ backgroundColor: a.level.c + '1e', color: a.level.c }}>{t('aiLevelTag')} · {t(a.level.key)}</span>
            </div>
            <div className="flex items-center gap-5">
              <Ring value={a.acc} color="var(--c-accent)" size={84} label={<span className="text-lg font-bold">{a.acc}%</span>} />
              <div className="min-w-0 flex-1">
                <p className="text-sm text-slate-700 dark:text-slate-200">
                  {t('aiIntro').replace('{n}', a.total)}{' '}
                  {a.weakestSubject && a.weakestSubject.avg < 75 ? t('aiFocusSubject').replace('{subject}', a.weakestSubject.name).replace('{pct}', a.weakestSubject.avg) : t('aiGoodOverall')}
                </p>
              </div>
            </div>
            {/* mini-stats */}
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-xl bg-slate-50 p-2.5 dark:bg-slate-800/60">
                <div className="text-lg font-bold" style={{ color: 'var(--c-accent)' }}>{a.coverage}%</div>
                <div className="text-[11px] leading-tight text-slate-500 dark:text-slate-400">{t('aiCoverage')}</div>
              </div>
              <div className="rounded-xl bg-slate-50 p-2.5 dark:bg-slate-800/60">
                <div className="text-lg font-bold" style={{ color: '#0891b2' }}>{a.momentum.activeDays}/7</div>
                <div className="text-[11px] leading-tight text-slate-500 dark:text-slate-400">{t('aiActiveDays')}</div>
              </div>
              <div className="rounded-xl bg-slate-50 p-2.5 dark:bg-slate-800/60">
                <div className="text-lg font-bold" style={{ color: a.daysToBac != null && a.daysToBac <= 30 ? '#e11d48' : '#7c3aed' }}>{a.daysToBac != null ? 'J-' + a.daysToBac : '—'}</div>
                <div className="text-[11px] leading-tight text-slate-500 dark:text-slate-400">bac</div>
              </div>
            </div>
          </section>

          {/* ---------- Maîtrise ---------- */}
          <section className="card p-5">
            <h2 className="mb-3 flex items-center gap-2 font-display text-lg font-semibold">📊 {t('aiMastery')}</h2>
            <div className="flex h-3 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
              {[['mastered', '#059669'], ['solid', '#0891b2'], ['fragile', '#e11d48'], ['unseen', '#cbd5e1']].map(([k, c]) => {
                const pct = a.themeCount ? (a.mastery[k] / a.themeCount) * 100 : 0
                return pct > 0 ? <div key={k} style={{ width: pct + '%', background: c }} title={`${t('ai' + k[0].toUpperCase() + k.slice(1))}: ${a.mastery[k]}`} /> : null
              })}
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {[['mastered', '#059669', 'aiMastered'], ['solid', '#0891b2', 'aiSolid'], ['fragile', '#e11d48', 'aiFragile'], ['unseen', '#94a3b8', 'aiUnseen']].map(([k, c, key]) => (
                <div key={k} className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 dark:bg-slate-800/60">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: c }} />
                  <span className="text-sm font-bold tabular-nums">{a.mastery[k]}</span>
                  <span className="truncate text-[11px] text-slate-500 dark:text-slate-400">{t(key)}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ---------- Niveau par matière ---------- */}
          <section>
            <h2 className="mb-2 px-1 font-display text-lg font-semibold">📚 {t('aiBySubject')}</h2>
            <div className="card divide-y divide-slate-100 p-0 dark:divide-slate-800">
              {a.subjects.map((s) => {
                const st = SUB_STATUS[s.status]
                return (
                  <Link key={s.id} to={`/subject/${s.id}`} className="flex items-center gap-3 p-3.5 transition hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <span className="min-w-0 flex-1">
                      <span className="mb-1 flex items-center justify-between gap-2">
                        <span className="truncate text-sm font-semibold">{s.name}</span>
                        <span className="shrink-0 text-xs font-semibold tabular-nums" style={{ color: st.c }}>{s.done === 0 ? t('aiNotSeen') : s.avg + '%'}</span>
                      </span>
                      <ProgressBar value={s.done === 0 ? 0 : s.avg} color={st.c} height={7} />
                      <span className="mt-1 block text-[11px] text-slate-400">{s.done}/{s.total} {t('aiThemesDone')}</span>
                    </span>
                  </Link>
                )
              })}
            </div>
          </section>

          {/* ---------- Plan jusqu'au bac ---------- */}
          <section>
            <div className="mb-2 flex flex-wrap items-center justify-between gap-2 px-1">
              <h2 className="font-display text-lg font-semibold">🗓️ {t('aiPlanTitle')}</h2>
              <label className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span>{a.daysToBac != null ? t('aiBacIn').replace('{n}', a.daysToBac) : t('aiSetBac')}</span>
                <input type="date" value={state.bacDate || ''} onChange={(e) => setBacDate(e.target.value)} className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs dark:border-slate-700 dark:bg-slate-800" />
              </label>
            </div>
            <p className="mb-3 px-1 text-xs text-slate-400">{t('aiPlanSub')}</p>
            {plan.days.length === 0 ? (
              <div className="card p-5 text-center text-sm text-slate-500 dark:text-slate-400">{t('aiPlanEmpty')}</div>
            ) : (
              <>
                <div className="space-y-2">
                  {visibleDays.map((d) => (
                    <div key={d.date} className={`card p-3.5 ${d.isToday ? 'ring-2 ring-offset-2 ring-offset-transparent' : ''}`} style={d.isToday ? { '--tw-ring-color': 'var(--c-accent)' } : undefined}>
                      <div className="mb-2 flex items-center gap-2">
                        <span className="text-sm font-semibold">{d.isToday ? t('aiToday') : d.dayOffset === 1 ? t('aiTomorrow') : fmtDay(d.date)}</span>
                        {d.isToday && <span className="chip" style={{ backgroundColor: 'var(--c-accent)22', color: 'var(--c-accent)' }}>{t('aiToday')}</span>}
                        <span className="ml-auto text-xs text-slate-400">{d.items.length} thème{d.items.length > 1 ? 's' : ''}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {d.items.map((it, i) => {
                          const r = REASON[it.reason] || REASON.review
                          return (
                            <Link key={it.themeId + i} to={`/subject/${it.subjectId}/theme/${it.themeId}`} className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium transition hover:-translate-y-0.5 hover:shadow-sm dark:border-slate-700 dark:bg-slate-800" style={{ borderLeftColor: it.color || '#888', borderLeftWidth: 3 }}>
                              <span aria-hidden>{r.icon}</span>
                              <span className="max-w-[42vw] truncate sm:max-w-[220px]">{it.themeName}</span>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
                {plan.days.length > 4 && (
                  <button onClick={() => setPlanOpen((v) => !v)} className="mt-2 w-full rounded-xl border border-slate-200 py-2 text-sm font-medium text-slate-500 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800/50">
                    {planOpen ? t('aiViewPlanLess') : `${t('aiViewPlanMore')} (${plan.days.length} j)`}
                  </button>
                )}
              </>
            )}
          </section>

          {/* ---------- Points faibles ---------- */}
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

          {/* ---------- Points forts ---------- */}
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

          {/* ---------- Conseils du coach ---------- */}
          {advice.length > 0 && (
            <section className="card p-5">
              <h2 className="mb-3 flex items-center gap-2 font-display text-lg font-semibold">💡 {t('aiAdviceTitle')}</h2>
              <ul className="space-y-2.5">
                {advice.map((tip, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-200">
                    <span className="shrink-0 text-base" aria-hidden>{tip.icon}</span>
                    <span>{tip.text}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* ---------- Lancer l'entraînement ---------- */}
          <section className="card card-lux p-5">
            <label className="mb-2 block text-xs font-medium text-slate-500 dark:text-slate-400">{t('aiTargetSubject')}</label>
            <select value={subjectFilter} onChange={(e) => setSubjectFilter(e.target.value)} className="mb-4 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-800">
              <option value="">{t('aiAllSubjects')}</option>
              {subjects.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
            </select>
            <button onClick={start} className="btn-gold w-full !py-4 text-base">⚡ {t('aiStart')}</button>
            <p className="mt-3 text-center text-xs text-slate-400">🔒 {t('aiLocal')}</p>
          </section>
        </>
      )}
    </div>
  )
}
