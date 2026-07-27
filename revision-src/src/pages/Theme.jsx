import { useEffect, useState } from 'react'
import { Link, useParams, Navigate, useSearchParams } from 'react-router-dom'
import { getChapter, getSubject, themeChapters } from '../data/index.js'
import { useStore, chapterScore, starsFromScore } from '../store.jsx'
import { ProgressBar, Stars } from '../components/ui.jsx'
import { Intro, Essentiel, Resources } from '../components/Course.jsx'
import { GAME_LABELS } from '../games/GameHost.jsx'
import ThemeTest from '../games/ThemeTest.jsx'

const TABS = [
  { id: 'chapitres', label: 'Chapitres', icon: '📚' },
  { id: 'test', label: 'Test du thème', icon: '🏁' },
  { id: 'progression', label: 'Progression', icon: '📊' },
]

export default function Theme() {
  const { sid, tid } = useParams()
  const subject = getSubject(sid)
  const theme = getChapter(tid)
  const { state, setLastChapter, toggleFavorite } = useStore()
  const [searchParams] = useSearchParams()
  const [tab, setTab] = useState(searchParams.get('tab') === 'test' ? 'test' : 'chapitres')

  useEffect(() => {
    if (theme) setLastChapter(sid, tid)
  }, [sid, tid, theme, setLastChapter])

  useEffect(() => { setTab(searchParams.get('tab') === 'test' ? 'test' : 'chapitres') }, [tid, searchParams])

  if (!subject || !theme) return <Navigate to="/" replace />
  const color = subject.color
  const chapters = themeChapters(theme)
  const score = chapterScore(state, tid)
  const rec = state.chapters[tid]
  const fav = state.favorites.includes(tid)

  return (
    <div className="space-y-4">
      <nav className="no-print text-xs text-slate-500 dark:text-slate-400">
        <Link to={`/subject/${sid}`} className="hover:underline" style={{ color }}>{subject.name}</Link>
        <span className="mx-1">›</span>
        <span className="font-semibold">{theme.short || 'Thème'}</span>
      </nav>

      <header>
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide" style={{ color }}>{subject.name}</p>
            <h1 className="font-display text-xl font-extrabold leading-tight">{theme.name}</h1>
          </div>
          <button
            onClick={() => toggleFavorite(tid)}
            className={`no-print grid h-10 w-10 shrink-0 place-items-center rounded-full text-xl ${fav ? 'text-amber-400' : 'text-slate-300 hover:text-amber-400 dark:text-slate-600'}`}
            aria-label={fav ? 'Retirer des favoris' : 'Ajouter aux favoris'}
            aria-pressed={fav}
          >
            {fav ? '★' : '☆'}
          </button>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <Stars count={starsFromScore(score)} />
          <ProgressBar value={score} color={color} className="max-w-[180px]" />
          <span className="text-sm font-bold" style={{ color }}>{score}%</span>
        </div>
      </header>

      <div className="no-print sticky top-[52px] z-30 -mx-4 border-b border-slate-200 bg-slate-50/90 px-4 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
        <div className="flex gap-1">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex-1 border-b-2 px-2 py-2.5 text-sm font-semibold transition ${
                tab === t.id ? 'text-slate-900 dark:text-white' : 'border-transparent text-slate-400 hover:text-slate-600'
              }`}
              style={tab === t.id ? { borderColor: color } : undefined}
              aria-current={tab === t.id}
            >
              <span className="mr-1" aria-hidden>{t.icon}</span>
              <span>{t.label}</span>
            </button>
          ))}
        </div>
      </div>

      {tab === 'chapitres' && (
        <div className="space-y-4">
          <Intro text={theme.intro} color={color} />
          <div className="space-y-2.5">
            <p className="px-1 text-sm text-slate-500 dark:text-slate-400">Choisis un chapitre pour lire le cours et t’entraîner.</p>
            {chapters.map((c) => (
              <Link
                key={c.id}
                to={`/subject/${sid}/theme/${tid}/chapter/${c.idx}`}
                className="card flex w-full items-center gap-3 p-4 text-left transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-sm font-black text-white" style={{ backgroundColor: color }}>{c.idx + 1}</span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold leading-tight">{c.title}</span>
                  <span className="block text-xs text-slate-400">{c.games.length > 0 ? `${c.games.length} jeu${c.games.length > 1 ? 'x' : ''}` : 'Cours'}</span>
                </span>
                <span className="text-slate-300" aria-hidden>›</span>
              </Link>
            ))}
          </div>
          <Essentiel items={theme.essentiel} color={color} />
          <Resources items={theme.resources} />
        </div>
      )}

      {tab === 'test' && <ThemeTest theme={theme} color={color} onExit={() => setTab('chapitres')} />}

      {tab === 'progression' && <ProgressionTab theme={theme} rec={rec} color={color} score={score} />}
    </div>
  )
}

function ProgressionTab({ theme, rec, color, score }) {
  return (
    <div className="space-y-4">
      <div className="card p-5 text-center">
        <p className="text-sm text-slate-500 dark:text-slate-400">Maîtrise du thème</p>
        <div className="my-1 text-4xl font-extrabold" style={{ color }}>{score}%</div>
        <Stars count={starsFromScore(score)} size="text-2xl" />
      </div>
      <div className="card p-5">
        <h3 className="mb-3 font-bold">Détail par jeu</h3>
        <ul className="space-y-2.5">
          {(theme.games || []).map((g) => {
            const best = rec?.games?.[g.id]
            return (
              <li key={g.id} className="flex items-center gap-3">
                <span className="w-6 text-center">{g.icon || '🎲'}</span>
                <span className="flex-1 text-sm">{g.title}<span className="ml-1 text-xs text-slate-400">· {GAME_LABELS[g.type]}</span></span>
                <div className="w-24"><ProgressBar value={best || 0} color={color} /></div>
                <span className="w-10 text-right text-xs font-semibold">{best != null ? best + '%' : '—'}</span>
              </li>
            )
          })}
          <li className="flex items-center gap-3 border-t border-slate-100 pt-2.5 dark:border-slate-800">
            <span className="w-6 text-center">🏁</span>
            <span className="flex-1 text-sm font-semibold">Test du thème</span>
            <div className="w-24"><ProgressBar value={rec?.quiz || 0} color={color} /></div>
            <span className="w-10 text-right text-xs font-semibold">{rec?.quiz != null ? rec.quiz + '%' : '—'}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
