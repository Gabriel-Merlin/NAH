import { useMemo, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useStore } from '../store.jsx'
import { dailyPlan, realThemes } from '../data/study.js'
import { daysUntil, defaultBacDate } from '../data/srs.js'
import { useT } from '../i18n.js'

export default function Programme() {
  const { state, derived, setBacDate } = useStore()
  const t = useT()
  const navigate = useNavigate()
  if (!state.track) return <Navigate to="/" replace />

  const [editing, setEditing] = useState(!state.bacDate)
  const [draft, setDraft] = useState(state.bacDate || defaultBacDate())
  const dLeft = daysUntil(state.bacDate)

  const plan = useMemo(() => dailyPlan(state, state.track, undefined, 4), [state])
  const themesTotal = useMemo(() => realThemes(state.track).length, [state.track])
  const masteredPct = themesTotal ? Math.round((derived.chaptersMastered / themesTotal) * 100) : 0
  const doneToday = plan.filter((p) => p.done).length

  const save = () => { if (draft) { setBacDate(draft); setEditing(false) } }

  return (
    <div className="animate-lux space-y-6">
      <header className="text-center">
        <p className="kicker">📅 {t('studyPlan')}</p>
        <h1 className="mt-1 font-display text-[1.9rem] font-medium leading-tight">{t('studyPlan')}</h1>
        <span className="mx-auto mt-3 block h-px w-24 rounded-full" style={{ background: 'linear-gradient(90deg,transparent,#c8a24e,transparent)' }} />
      </header>

      {/* Compte à rebours */}
      <section className="card-lux relative overflow-hidden rounded-[1.6rem] p-6 text-center text-[#f4ecd8]"
        style={{ background: 'linear-gradient(140deg, color-mix(in srgb, var(--c-accent) 16%, #17130d) 0%, #221d15 55%, #17130d 100%)', border: '1px solid color-mix(in srgb, var(--c-accent) 30%, transparent)' }}>
        {state.bacDate && dLeft != null && !editing ? (
          <>
            <p className="kicker" style={{ color: 'color-mix(in srgb, var(--c-accent) 62%, #fff)' }}>{t('examCountdown')}</p>
            <p className="my-1 font-display text-6xl font-extrabold" style={{ color: 'color-mix(in srgb, var(--c-accent) 55%, #fff)' }}>{dLeft > 0 ? `J-${dLeft}` : t('itsToday')}</p>
            <p className="text-xs text-[#d8cca8]">{new Date(state.bacDate + 'T00:00:00').toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>
            <button onClick={() => { setDraft(state.bacDate); setEditing(true) }} className="mt-3 text-xs font-semibold underline" style={{ color: 'color-mix(in srgb, var(--c-accent) 60%, #fff)' }}>{t('editDate')}</button>
          </>
        ) : (
          <>
            <p className="mb-2 text-sm">{t('setBacDate')}</p>
            <input type="date" value={draft} onChange={(e) => setDraft(e.target.value)} className="rounded-xl border-0 px-3 py-2 text-slate-800" />
            <button onClick={save} className="btn-gold mt-3 block w-full !py-2.5">{t('save')}</button>
          </>
        )}
      </section>

      {/* Objectifs du jour */}
      <section>
        <div className="mb-2 flex items-end justify-between px-1">
          <h2 className="font-display text-lg font-medium">{t('todayGoals')}</h2>
          <span className="text-xs text-slate-400">{doneToday} / {plan.length}</span>
        </div>
        <div className="space-y-2">
          {plan.length === 0 && <div className="card p-4 text-center text-sm text-slate-500 dark:text-slate-400">{t('allCaughtUp')}</div>}
          {plan.map((p) => (
            <button key={p.themeId} onClick={() => navigate(`/subject/${p.subjectId}/theme/${p.themeId}`)} className="card flex w-full items-center gap-3 p-3.5 text-left transition hover:-translate-y-0.5 hover:shadow-md">
              <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-sm ${p.done ? 'text-white' : ''}`} style={{ backgroundColor: p.done ? '#3f9d6d' : 'color-mix(in srgb, var(--c-accent) 16%, transparent)', color: p.done ? '#fff' : 'var(--c-accent)' }} aria-hidden>{p.done ? '✓' : '○'}</span>
              <span className="min-w-0 flex-1">
                <span className={`block truncate text-sm font-semibold ${p.done ? 'text-slate-400 line-through' : ''}`}>{p.themeName}</span>
                <span className="block text-xs text-slate-400">{p.subjectName}</span>
              </span>
              <span className="text-slate-300" aria-hidden>›</span>
            </button>
          ))}
        </div>
      </section>

      {/* Avancement global */}
      <section className="card p-5">
        <div className="mb-1 flex items-center justify-between text-sm">
          <span className="font-semibold">{t('overallProgress')}</span>
          <span style={{ color: 'var(--c-accent)' }}>{derived.chaptersMastered} / {themesTotal} {t('themes')}</span>
        </div>
        <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
          <div className="h-full rounded-full" style={{ width: `${masteredPct}%`, backgroundColor: 'var(--c-accent)' }} />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <Link to="/revision" className="btn-ghost justify-center text-center">🧠 {t('smartRevision')}</Link>
          <Link to="/bac-blanc" className="btn-ghost justify-center text-center">📝 {t('mockExam')}</Link>
        </div>
      </section>
    </div>
  )
}
