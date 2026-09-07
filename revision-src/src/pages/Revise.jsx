import { useMemo } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useStore } from '../store.jsx'
import { reviewQueue, reviewStats } from '../data/study.js'
import { ProgressBar } from '../components/ui.jsx'
import { useT } from '../i18n.js'

const REASON = {
  due: { key: 'reasonDue', bg: 'bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300', icon: '⏰' },
  weak: { key: 'reasonWeak', bg: 'bg-rose-100 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300', icon: '⚠️' },
  new: { key: 'reasonNew', bg: 'bg-violet-100 text-violet-700 dark:bg-violet-950/50 dark:text-violet-300', icon: '✨' },
  review: { key: 'reasonReview', bg: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300', icon: '🔁' },
}

export default function Revise() {
  const { state, derived } = useStore()
  const t = useT()
  const navigate = useNavigate()
  if (!state.track) return <Navigate to="/" replace />

  const queue = useMemo(() => reviewQueue(state, state.track), [state])
  const stats = reviewStats(queue)
  const top = queue.slice(0, 14)
  const first = queue.find((q) => q.reason === 'due') || queue.find((q) => q.reason === 'weak') || queue[0]

  const tiles = [
    { icon: '⏰', label: t('toReviewToday'), value: stats.due, color: '#d97706' },
    { icon: '⚠️', label: t('weakPoints'), value: stats.weak, color: '#e11d48' },
    { icon: '✨', label: t('neverSeen'), value: stats.fresh, color: '#7c3aed' },
  ]

  return (
    <div className="animate-lux space-y-6">
      <header className="text-center">
        <p className="kicker">🧠 {t('smartRevision')}</p>
        <h1 className="mt-1 font-display text-[1.9rem] font-medium leading-tight">{t('smartRevision')}</h1>
        <span className="mx-auto mt-3 block h-px w-24 rounded-full" style={{ background: 'linear-gradient(90deg,transparent,#c8a24e,transparent)' }} />
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{t('smartRevisionSub')}</p>
      </header>

      <div className="grid grid-cols-3 gap-3">
        {tiles.map((s) => (
          <div key={s.label} className="card flex flex-col items-center justify-center p-4 text-center">
            <span className="text-2xl" aria-hidden>{s.icon}</span>
            <span className="mt-1 font-display text-2xl font-semibold" style={{ color: s.color }}>{s.value}</span>
            <span className="mt-0.5 text-[0.62rem] uppercase tracking-wide text-slate-400">{s.label}</span>
          </div>
        ))}
      </div>

      {first && (
        <button onClick={() => navigate(`/subject/${first.subjectId}/theme/${first.themeId}`)} className="btn-gold w-full !py-3.5 text-base">
          ▶ {t('reviseNow')} — {first.themeName}
        </button>
      )}

      <section className="space-y-2.5">
        <h2 className="px-1 font-display text-lg font-medium">{t('priorityList')}</h2>
        {top.map((item) => {
          const r = REASON[item.reason] || REASON.review
          return (
            <Link key={item.themeId} to={`/subject/${item.subjectId}/theme/${item.themeId}`} className="card flex items-center gap-3 p-3.5 transition hover:-translate-y-0.5 hover:shadow-md">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-lg" style={{ backgroundColor: item.color + '22' }} aria-hidden>{r.icon}</span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-semibold">{item.themeName}</span>
                <span className="block text-xs text-slate-400">{item.subjectName}</span>
              </span>
              <span className={`chip shrink-0 ${r.bg}`}>{t(r.key)}</span>
              <span className="hidden w-16 sm:block"><ProgressBar value={item.practiced ? item.score : 0} color={item.color} /></span>
            </Link>
          )
        })}
      </section>

      <p className="text-center text-xs text-slate-400">{t('masteredThemes')} : <span className="font-semibold" style={{ color: 'var(--c-accent)' }}>{derived.chaptersMastered}</span></p>
    </div>
  )
}
