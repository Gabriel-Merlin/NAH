import { Link, useParams, Navigate } from 'react-router-dom'
import { getSubject } from '../data/index.js'
import { useStore, chapterScore, starsFromScore, subjectScore } from '../store.jsx'
import { ProgressBar, Stars } from '../components/ui.jsx'
import { CourseText } from '../components/Course.jsx'
import { useT } from '../i18n.js'

export default function Subject() {
  const { sid } = useParams()
  const subject = getSubject(sid)
  const { state, toggleFavorite } = useStore()
  const t = useT()
  if (!subject) return <Navigate to="/" replace />
  const pct = subjectScore(state, sid)

  return (
    <div className="animate-lux space-y-5">
      <header className="flex items-center gap-4">
        <span className="grid h-16 w-16 shrink-0 place-items-center rounded-3xl text-3xl" style={{ backgroundColor: subject.color + '18', boxShadow: `inset 0 0 0 1px ${subject.color}40` }}>{subject.icon}</span>
        <div className="flex-1">
          <h1 className="font-display text-3xl font-medium leading-tight">{subject.name}</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400"><CourseText text={subject.tagline} /></p>
          <div className="mt-2 flex items-center gap-2">
            <ProgressBar value={pct} color={subject.color} className="max-w-[200px]" />
            <span className="text-sm font-bold" style={{ color: subject.color }}>{pct}%</span>
          </div>
        </div>
      </header>
      <hr className="rule-gold" />

      <div className="space-y-3">
        {subject.chapters.map((c) => {
          const score = chapterScore(state, c.id)
          const stars = starsFromScore(score)
          const fav = state.favorites.includes(c.id)
          return (
            <div key={c.id} className="card relative overflow-hidden p-4">
              <span className="absolute inset-y-0 left-0 w-1.5" style={{ backgroundColor: subject.color }} />
              <div className="pl-2">
                <div className="flex items-start justify-between gap-2">
                  <Link to={`/subject/${sid}/theme/${c.id}`} className="min-w-0 flex-1">
                    <h3 className="font-bold leading-snug hover:underline"><CourseText text={c.name} /></h3>
                    <div className="mt-1 flex items-center gap-2">
                      <Stars count={stars} />
                      <span className="text-xs text-slate-500 dark:text-slate-400">{c.cours?.length || 0} {t('chapters')} · {c.games.length} {t('gamePlur')} · {score}%</span>
                    </div>
                  </Link>
                  <button
                    onClick={() => toggleFavorite(c.id)}
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-lg transition ${fav ? 'text-amber-400' : 'text-slate-300 hover:text-amber-400 dark:text-slate-600'}`}
                    aria-label={fav ? t('removeFav') : t('addFav')}
                    aria-pressed={fav}
                  >
                    {fav ? '★' : '☆'}
                  </button>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <ProgressBar value={score} color={subject.color} />
                  <Link to={`/subject/${sid}/theme/${c.id}`} className="btn shrink-0 !min-h-0 !px-4 !py-2 text-sm text-white" style={{ backgroundColor: subject.color }}>
                    {t('reviseBtn')} →
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
