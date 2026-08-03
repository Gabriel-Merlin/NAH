import { useEffect, useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { getChapter, getSubject, themeChapters, getThemeChapter } from '../data/index.js'
import { useStore } from '../store.jsx'
import { CourseSection, saveFiche } from '../components/Course.jsx'
import GameHost, { GAME_LABELS } from '../games/GameHost.jsx'

export default function Chapter() {
  const { sid, tid, cidx } = useParams()
  const subject = getSubject(sid)
  const theme = getChapter(tid)
  const chapter = getThemeChapter(tid, cidx)
  const { state } = useStore()
  const [activeGame, setActiveGame] = useState(null)

  // Nouveau chapitre : on referme tout jeu ouvert et on remonte en haut.
  useEffect(() => {
    setActiveGame(null)
    window.scrollTo(0, 0)
  }, [tid, cidx])

  if (!subject || !theme || !chapter) return <Navigate to="/" replace />
  const color = subject.color
  const chapters = themeChapters(theme)
  const i = chapter.idx
  const prev = chapters[i - 1]
  const next = chapters[i + 1]
  const rec = state.chapters[tid]

  if (activeGame) {
    return (
      <div className="space-y-4">
        <GameHost game={activeGame} chapterId={tid} color={color} onExit={() => setActiveGame(null)} />
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <nav className="no-print text-xs text-slate-500 dark:text-slate-400">
        <Link to={`/subject/${sid}`} className="hover:underline" style={{ color }}>{subject.name}</Link>
        <span className="mx-1">›</span>
        <Link to={`/subject/${sid}/theme/${tid}`} className="hover:underline" style={{ color }}>{theme.short || 'Thème'}</Link>
        <span className="mx-1">›</span>
        <span className="font-semibold">Chapitre {i + 1}</span>
      </nav>

      <header className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wide" style={{ color }}>{theme.name} · Chapitre {i + 1}/{chapters.length}</p>
          <h1 className="font-display text-xl font-extrabold leading-tight">{chapter.title}</h1>
        </div>
        <Link
          to={`/subject/${sid}/theme/${tid}`}
          aria-label="Fermer et revenir à la liste des chapitres"
          title="Revenir aux chapitres"
          className="no-print grid h-10 w-10 shrink-0 place-items-center rounded-full bg-slate-100 text-lg text-slate-500 transition hover:bg-slate-200 hover:text-slate-800 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
        >
          ✕
        </Link>
      </header>

      <div className="no-print flex justify-end">
        <button onClick={saveFiche} className="btn-ghost !min-h-0 !py-2 text-sm" title="Ouvre la fenêtre d’impression pour enregistrer au format PDF">
          🖨️ Enregistrer (PDF)
        </button>
      </div>

      {/* Cours du chapitre */}
      <CourseSection sec={chapter.section} color={color} />

      {/* Jeux de ce chapitre */}
      {chapter.games.length > 0 && (
        <section className="space-y-2.5">
          <h2 className="px-1 font-display text-lg font-bold">🎮 Jeux de ce chapitre</h2>
          {chapter.games.map((g) => {
            const best = rec?.games?.[g.id]
            return (
              <button
                key={g.id}
                onClick={() => setActiveGame(g)}
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
        </section>
      )}

      {/* Navigation entre chapitres */}
      <div className="no-print flex items-center justify-between gap-2 pt-1">
        {prev ? (
          <Link to={`/subject/${sid}/theme/${tid}/chapter/${prev.idx}`} className="btn-ghost !min-h-0 flex-1 !py-2.5 text-sm">← Précédent</Link>
        ) : <span className="flex-1" />}
        {next ? (
          <Link to={`/subject/${sid}/theme/${tid}/chapter/${next.idx}`} className="btn-primary !min-h-0 flex-1 !py-2.5 text-sm text-white" style={{ backgroundColor: color }}>Chapitre suivant →</Link>
        ) : (
          <Link to={`/subject/${sid}/theme/${tid}?tab=test`} className="btn-primary !min-h-0 flex-1 !py-2.5 text-sm text-white" style={{ backgroundColor: color }}>Passer le test du thème 🏁</Link>
        )}
      </div>

      <p className="print-footer">RévizSTMG · {theme.name} — {chapter.title} (contenu généré avec l’aide de l’IA, à recouper avec le cours officiel).</p>
    </div>
  )
}
