import { useEffect, useMemo, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { getChapter, getSubject, buildQuiz } from '../data/index.js'
import { useStore, chapterScore, starsFromScore } from '../store.jsx'
import { ProgressBar, Stars } from '../components/ui.jsx'
import Course from '../components/Course.jsx'
import GameHost, { GAME_LABELS } from '../games/GameHost.jsx'

const TABS = [
  { id: 'cours', label: 'Cours', icon: '📖' },
  { id: 'jeux', label: 'Jeux', icon: '🎮' },
  { id: 'quiz', label: 'Quiz', icon: '📝' },
  { id: 'progression', label: 'Progression', icon: '📊' },
]

export default function Chapter() {
  const { sid, cid } = useParams()
  const subject = getSubject(sid)
  const chapter = getChapter(cid)
  const { state, setLastChapter, toggleFavorite } = useStore()
  const [tab, setTab] = useState('cours')
  const [activeGame, setActiveGame] = useState(null)
  const [quizOn, setQuizOn] = useState(false)
  const [quizKey, setQuizKey] = useState(0)

  useEffect(() => {
    if (chapter) setLastChapter(sid, cid)
  }, [sid, cid, chapter, setLastChapter])

  // Changement de chapitre (le composant reste monté d'un chapitre à l'autre) :
  // on repart de l'onglet Cours et on referme tout jeu/quiz ouvert.
  useEffect(() => {
    setTab('cours')
    setActiveGame(null)
    setQuizOn(false)
  }, [cid])

  useEffect(() => {
    setActiveGame(null)
    setQuizOn(false)
  }, [tab])

  const quizGame = useMemo(
    () => ({ id: 'quiz', type: 'qcm', title: 'Quiz du chapitre', questions: buildQuiz(cid) }),
    [cid, quizKey],
  )

  if (!subject || !chapter) return <Navigate to="/" replace />
  const color = subject.color
  const score = chapterScore(state, cid)
  const rec = state.chapters[cid]
  const fav = state.favorites.includes(cid)

  return (
    <div className="space-y-4">
      <header>
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide" style={{ color }}>{subject.name}</p>
            <h1 className="font-display text-xl font-extrabold leading-tight">{chapter.name}</h1>
          </div>
          <button
            onClick={() => toggleFavorite(cid)}
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

      {/* Onglets */}
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

      {tab === 'cours' && <Course chapter={chapter} color={color} onPlay={() => setTab('jeux')} />}

      {tab === 'jeux' && (
        activeGame ? (
          <GameHost game={activeGame} chapterId={cid} color={color} onExit={() => setActiveGame(null)} />
        ) : (
          <GamesList chapter={chapter} rec={rec} color={color} onOpen={setActiveGame} />
        )
      )}

      {tab === 'quiz' && (
        quizOn ? (
          <GameHost
            game={quizGame}
            chapterId={cid}
            color={color}
            quiz
            onExit={() => { setQuizOn(false); setQuizKey((k) => k + 1) }}
          />
        ) : (
          <QuizIntro rec={rec} color={color} count={quizGame.questions.length} onStart={() => setQuizOn(true)} />
        )
      )}

      {tab === 'progression' && <ProgressionTab chapter={chapter} rec={rec} color={color} score={score} />}
    </div>
  )
}

function GamesList({ chapter, rec, color, onOpen }) {
  return (
    <div className="space-y-2.5">
      <p className="px-1 text-sm text-slate-500 dark:text-slate-400">Choisis un mini-jeu pour réviser ce chapitre.</p>
      {chapter.games.map((g) => {
        const best = rec?.games?.[g.id]
        return (
          <button
            key={g.id}
            onClick={() => onOpen(g)}
            className="card flex w-full items-center gap-3 p-4 text-left transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-xl" style={{ backgroundColor: color + '22' }}>{g.icon || '🎲'}</span>
            <span className="min-w-0 flex-1">
              <span className="block font-semibold leading-tight">{g.title}</span>
              <span className="block text-xs text-slate-400">{GAME_LABELS[g.type]}</span>
            </span>
            {best != null ? (
              <span className="chip bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">★ {best}%</span>
            ) : (
              <span className="chip bg-slate-100 text-slate-400 dark:bg-slate-800">Nouveau</span>
            )}
            <span className="text-slate-300" aria-hidden>›</span>
          </button>
        )
      })}
    </div>
  )
}

function QuizIntro({ rec, color, count, onStart }) {
  return (
    <div className="card p-6 text-center">
      <div className="text-4xl">📝</div>
      <h2 className="mt-2 text-lg font-bold">Quiz du chapitre</h2>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{count} questions tirées de tout le chapitre. Teste-toi&nbsp;!</p>
      {rec?.quiz != null && (
        <p className="mt-3 inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">
          Meilleur score : {rec.quiz}%
        </p>
      )}
      <button onClick={onStart} className="btn-primary mt-5 w-full" style={{ backgroundColor: color }}>Commencer le quiz</button>
    </div>
  )
}

function ProgressionTab({ chapter, rec, color, score }) {
  return (
    <div className="space-y-4">
      <div className="card p-5 text-center">
        <p className="text-sm text-slate-500 dark:text-slate-400">Maîtrise du chapitre</p>
        <div className="my-1 text-4xl font-extrabold" style={{ color }}>{score}%</div>
        <Stars count={starsFromScore(score)} size="text-2xl" />
      </div>
      <div className="card p-5">
        <h3 className="mb-3 font-bold">Détail par jeu</h3>
        <ul className="space-y-2.5">
          {chapter.games.map((g) => {
            const best = rec?.games?.[g.id]
            return (
              <li key={g.id} className="flex items-center gap-3">
                <span className="w-6 text-center">{g.icon || '🎲'}</span>
                <span className="flex-1 text-sm">{g.title}</span>
                <div className="w-24"><ProgressBar value={best || 0} color={color} /></div>
                <span className="w-10 text-right text-xs font-semibold">{best != null ? best + '%' : '—'}</span>
              </li>
            )
          })}
          <li className="flex items-center gap-3 border-t border-slate-100 pt-2.5 dark:border-slate-800">
            <span className="w-6 text-center">📝</span>
            <span className="flex-1 text-sm font-semibold">Quiz du chapitre</span>
            <div className="w-24"><ProgressBar value={rec?.quiz || 0} color={color} /></div>
            <span className="w-10 text-right text-xs font-semibold">{rec?.quiz != null ? rec.quiz + '%' : '—'}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
