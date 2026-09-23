import { useEffect, useState, useCallback } from 'react'
import { ProgressBar } from '../components/ui.jsx'
import { fmtDuration } from '../components/StatsCharts.jsx'
import { useT, useLang } from '../i18n.js'
import { PARENT_READY, fetchChildByCode, getLinkedChild, setLinkedChild, normParentCode } from '../parent.js'

// Temps relatif localisé (« il y a 5 min ») sans clé i18n dédiée.
function relativeTime(iso, lang) {
  if (!iso) return ''
  const diff = Date.now() - new Date(iso).getTime()
  if (isNaN(diff)) return ''
  const rtf = new Intl.RelativeTimeFormat(lang || 'fr', { numeric: 'auto' })
  const min = Math.round(diff / 60000)
  if (Math.abs(min) < 60) return rtf.format(-min, 'minute')
  const h = Math.round(min / 60)
  if (Math.abs(h) < 24) return rtf.format(-h, 'hour')
  return rtf.format(-Math.round(h / 24), 'day')
}

// Synthèse automatique pour le parent : lecture de l'engagement + points forts
// et points à renforcer, dérivés des données de l'enfant.
function parentSynthesis(child) {
  const subs = Array.isArray(child.subjects) ? child.subjects : []
  const strengths = subs.filter((s) => (s.score || 0) >= 75).sort((a, b) => (b.score || 0) - (a.score || 0)).slice(0, 3)
  const toWork = subs.filter((s) => (s.score || 0) < 55).sort((a, b) => (a.score || 0) - (b.score || 0)).slice(0, 3)
  const name = child.name || 'Votre enfant'
  const days = child.last_active ? Math.floor((Date.now() - new Date(child.last_active).getTime()) / 86400000) : null
  const streak = child.streak || 0
  const week = child.courses_week || 0
  let tone, message
  if (days != null && days >= 5) { tone = 'warn'; message = `${name} ne s’est pas connecté·e depuis ${days} jours. Un petit encouragement peut relancer la dynamique 💛.` }
  else if (streak >= 5 || week >= 5) { tone = 'good'; message = `${name} révise avec régularité — ${streak} jour(s) de suite et ${week} thème(s) cette semaine. Beau travail 👏.` }
  else if (week >= 2) { tone = 'ok'; message = `${name} a travaillé ${week} thème(s) cette semaine. Encouragez la régularité : 15 min par jour suffisent.` }
  else { tone = 'warn'; message = `Peu d’activité cette semaine. Fixez ensemble un petit objectif quotidien pour garder le rythme.` }
  return { tone, message, strengths, toWork }
}

function StatTile({ icon, label, value, sub, color }) {
  return (
    <div className="card p-4 text-center">
      <div className="text-2xl" aria-hidden>{icon}</div>
      <div className="mt-1 font-display text-2xl font-extrabold tabular-nums" style={color ? { color } : undefined}>{value}</div>
      <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">{label}</div>
      {sub && <div className="mt-0.5 text-[11px] text-slate-400">{sub}</div>}
    </div>
  )
}

export default function Parent() {
  const t = useT()
  const lang = useLang()
  const accent = '#0e7490'
  const [linked, setLinked] = useState(() => getLinkedChild())
  const [code, setCode] = useState('')
  const [child, setChild] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const load = useCallback(async (c) => {
    if (!c) return
    setLoading(true); setError('')
    try {
      const row = await fetchChildByCode(c)
      if (row) setChild(row)
      else { setError(t('parentNotFound')); setChild(null) }
    } catch { setError(t('parentNotFound')) }
    setLoading(false)
  }, [t])

  // À l'ouverture : si un enfant est déjà relié, on charge ses stats.
  useEffect(() => { if (linked) load(linked) }, [linked, load])

  const doLink = async () => {
    const c = normParentCode(code)
    if (c.length < 4) { setError(t('parentNotFound')); return }
    setLoading(true); setError('')
    try {
      const row = await fetchChildByCode(c)
      if (row) { setLinkedChild(c); setLinked(c); setChild(row); setCode('') }
      else setError(t('parentNotFound'))
    } catch { setError(t('parentNotFound')) }
    setLoading(false)
  }
  const unlink = () => { setLinkedChild(''); setLinked(''); setChild(null) }

  const bacDays = child?.bac_date ? Math.ceil((new Date(child.bac_date + 'T00:00:00') - Date.now()) / 86400000) : null

  return (
    <div className="animate-lux mx-auto max-w-2xl space-y-6">
      <header className="text-center">
        <p className="kicker">👨‍👩‍👧 {t('parentSpace')}</p>
        <h1 className="mt-1 font-display text-[1.9rem] font-medium leading-tight">{t('parentSpace')}</h1>
        <p className="mx-auto mt-2 max-w-md text-sm text-slate-500 dark:text-slate-400">{t('parentIntro')}</p>
        <span className="mx-auto mt-3 block h-px w-24 rounded-full" style={{ background: 'linear-gradient(90deg,transparent,#c8a24e,transparent)' }} />
      </header>

      {!PARENT_READY && (
        <div className="card p-5 text-center text-sm text-slate-500 dark:text-slate-400">{t('parentOffline')}</div>
      )}

      {/* Reliage : saisir le code de l'enfant */}
      {!linked && (
        <section className="card card-lux p-6">
          <h2 className="font-display text-lg font-semibold">🔗 {t('parentLinkTitle')}</h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{t('parentLinkHelp')}</p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <input
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              onKeyDown={(e) => e.key === 'Enter' && doLink()}
              placeholder={t('parentCodePlaceholder')}
              maxLength={6}
              className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-center font-mono text-lg font-bold uppercase tracking-widest shadow-inner focus:border-cyan-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800"
            />
            <button onClick={doLink} disabled={loading} className="btn-primary text-white disabled:opacity-50" style={{ backgroundColor: accent }}>
              {loading ? '…' : t('parentLinkBtn')}
            </button>
          </div>
          {error && <p className="mt-2 text-sm text-rose-600 dark:text-rose-400">{error}</p>}
          <p className="mt-4 rounded-xl bg-slate-50 p-3 text-xs text-slate-500 dark:bg-slate-800/60 dark:text-slate-400">{t('parentForStudents')}</p>
        </section>
      )}

      {/* Tableau de bord de l'enfant relié */}
      {linked && (
        <>
          <section className="card card-lux flex items-center gap-4 p-5">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-2xl text-white" style={{ backgroundColor: accent }}>🎓</span>
            <div className="min-w-0 flex-1">
              <p className="truncate font-display text-lg font-semibold leading-tight">{child?.name || '—'}</p>
              {child?.track && <p className="truncate text-xs text-slate-500 dark:text-slate-400">{child.track}</p>}
              {child?.last_active && <p className="mt-0.5 text-[11px] text-slate-400">{t('parentLastActive')} : {relativeTime(child.last_active, lang)}</p>}
            </div>
            <button onClick={() => load(linked)} disabled={loading} aria-label={t('parentRefresh')} className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 disabled:opacity-40 dark:text-slate-400 dark:hover:bg-slate-800">↻</button>
          </section>

          {error && <p className="text-center text-sm text-rose-600 dark:text-rose-400">{error}</p>}

          {!child && !error && (
            <div className="card p-5 text-center text-sm text-slate-500 dark:text-slate-400">{loading ? '…' : t('parentNoData')}</div>
          )}

          {child && (
            <>
              <section className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                <StatTile icon="🔥" label={t('parentStreak')} value={child.streak || 0} sub={t('parentDays')} color="#e8590c" />
                <StatTile icon="⭐" label={t('parentLevel')} value={child.level || 0} sub={`${child.xp || 0} XP`} color="#c8a24e" />
                <StatTile icon="⏱️" label={t('parentTotalTime')} value={fmtDuration(child.total_time || 0, t)} color={accent} />
                <StatTile icon="🎯" label={t('parentWeeklyGoal')} value={`${child.courses_week || 0}/${child.weekly_goal || 5}`} sub={t('themesCount')} color="#2f9e44" />
                <StatTile icon="🏅" label={t('parentBadges')} value={child.badges || 0} color="#7c3aed" />
                {bacDays != null && bacDays >= 0 && <StatTile icon="📅" label={t('parentBacIn')} value={bacDays} sub={t('parentDaysShort')} color="#e11d48" />}
              </section>

              {(() => {
                const syn = parentSynthesis(child)
                const tc = syn.tone === 'good' ? '#059669' : syn.tone === 'warn' ? '#e11d48' : '#0891b2'
                return (
                  <section className="card p-5" style={{ boxShadow: 'inset 0 0 0 1px color-mix(in srgb, ' + tc + ' 35%, transparent)' }}>
                    <h2 className="mb-2 flex items-center gap-2 font-display text-lg font-semibold">🧭 Synthèse de la semaine</h2>
                    <p className="text-sm text-slate-700 dark:text-slate-200">{syn.message}</p>
                    {(syn.strengths.length > 0 || syn.toWork.length > 0) && (
                      <div className="mt-3 grid gap-3 sm:grid-cols-2">
                        {syn.strengths.length > 0 && (
                          <div>
                            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">💪 Points forts</p>
                            <div className="flex flex-wrap gap-1.5">
                              {syn.strengths.map((s, i) => <span key={i} className="chip bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">{s.short} · {s.score || 0}%</span>)}
                            </div>
                          </div>
                        )}
                        {syn.toWork.length > 0 && (
                          <div>
                            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-rose-600 dark:text-rose-400">🎯 À renforcer</p>
                            <div className="flex flex-wrap gap-1.5">
                              {syn.toWork.map((s, i) => <span key={i} className="chip bg-rose-100 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300">{s.short} · {s.score || 0}%</span>)}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </section>
                )
              })()}

              {Array.isArray(child.subjects) && child.subjects.length > 0 && (
                <section className="card space-y-3 p-5">
                  <h2 className="px-1 font-display text-lg font-semibold">📚 {t('parentSubjects')}</h2>
                  {child.subjects.map((s, i) => (
                    <div key={i}>
                      <div className="mb-1 flex items-baseline justify-between gap-2">
                        <span className="min-w-0 flex-1 truncate text-sm font-medium">{s.short}</span>
                        <span className="shrink-0 text-xs text-slate-400">{fmtDuration(s.time || 0, t)}</span>
                        <span className="shrink-0 text-xs font-semibold tabular-nums" style={{ color: s.color || accent }}>{s.score || 0}%</span>
                      </div>
                      <ProgressBar value={s.score || 0} color={s.color || accent} />
                    </div>
                  ))}
                </section>
              )}
            </>
          )}

          <div className="text-center">
            <button onClick={unlink} className="text-sm font-semibold text-slate-400 hover:text-rose-600">{t('parentUnlink')}</button>
          </div>
        </>
      )}
    </div>
  )
}
