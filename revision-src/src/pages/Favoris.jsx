import { Link } from 'react-router-dom'
import { getChapter } from '../data/index.js'
import { useStore, chapterScore, starsFromScore } from '../store.jsx'
import { ProgressBar, Stars, Empty } from '../components/ui.jsx'
import { CourseText } from '../components/Course.jsx'
import { useT } from '../i18n.js'

export default function Favoris() {
  const { state, toggleFavorite } = useStore()
  const t = useT()
  const favs = state.favorites.map(getChapter).filter(Boolean)

  return (
    <div className="animate-lux space-y-4">
      <h1 className="font-display text-3xl font-medium leading-tight">⭐ {state.profile?.firstName ? `${t('favoritesOf')} ${state.profile.firstName}` : t('myFavorites')}</h1>
      <hr className="rule-gold" />
      {favs.length === 0 ? (
        <Empty icon="⭐">
          {t('noFavYet')}
          <br />
          {t('addFavHint')}
        </Empty>
      ) : (
        <div className="space-y-3">
          {favs.map((c) => {
            const score = chapterScore(state, c.id)
            return (
              <div key={c.id} className="card relative overflow-hidden p-4">
                <span className="absolute inset-y-0 left-0 w-1.5" style={{ backgroundColor: c.color }} />
                <div className="flex items-center gap-3 pl-2">
                  <Link to={`/subject/${c.subjectId}/theme/${c.id}`} className="min-w-0 flex-1">
                    <p className="text-xs font-semibold" style={{ color: c.color }}>{c.subjectName}</p>
                    <h3 className="font-bold leading-snug hover:underline"><CourseText text={c.name} /></h3>
                    <div className="mt-1.5 flex items-center gap-2">
                      <Stars count={starsFromScore(score)} />
                      <div className="w-28"><ProgressBar value={score} color={c.color} /></div>
                      <span className="text-xs font-semibold">{score}%</span>
                    </div>
                  </Link>
                  <button onClick={() => toggleFavorite(c.id)} className="grid h-9 w-9 place-items-center rounded-full text-lg text-amber-400" aria-label={t('removeFav')}>★</button>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
