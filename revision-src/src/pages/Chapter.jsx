import { useEffect, useMemo, useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { getChapter, getSubject, themeChapters, flashcardsForSection } from '../data/index.js'
import { useStore, useThemeTimer } from '../store.jsx'
import { useInstall } from '../pwa.js'
import { CourseSection, CourseText, saveFiche } from '../components/Course.jsx'
import GameHost from '../games/GameHost.jsx'
import { useT, useGameLabel } from '../i18n.js'

export default function Chapter() {
  const { sid, tid, cidx } = useParams()
  const subject = getSubject(sid)
  const theme = getChapter(tid)
  const { state, saveDeck } = useStore()
  const { standalone } = useInstall() // flashcards réservées à l'app installée
  const t = useT()
  const gameLabel = useGameLabel()
  const [activeGame, setActiveGame] = useState(null)
  useThemeTimer(tid) // mesure le temps de révision passé sur ce thème

  // Génération stable par visite : on ne régénère (et re-mélange) les exercices
  // qu'au changement de thème/chapitre, pas à chaque rendu. Une nouvelle visite
  // = un nouveau tirage → jamais exactement les mêmes exercices.
  const chapters = useMemo(() => (theme ? themeChapters(theme) : []), [theme, cidx]) // eslint-disable-line react-hooks/exhaustive-deps
  const chapter = chapters[Number(cidx)] || null

  // Jeux affichés : ceux du chapitre + (dans l'app installée seulement) des
  // flashcards générées à partir des notions de la section.
  const games = useMemo(() => {
    if (!chapter) return []
    const base = chapter.games || []
    if (!standalone) return base
    const fc = flashcardsForSection(chapter.section, theme, chapter.idx)
    return fc ? [...base, fc] : base
  }, [chapter, standalone, theme])

  // Nouveau chapitre : on referme tout jeu ouvert et on remonte en haut.
  useEffect(() => {
    setActiveGame(null)
    window.scrollTo(0, 0)
  }, [tid, cidx])

  if (!subject || !theme || !chapter) return <Navigate to="/" replace />
  const color = subject.color
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

  const printDate = new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
  const studentName = `${state.profile?.firstName || ''} ${state.profile?.lastName || ''}`.trim()

  return (
    <div className="animate-lux space-y-4">
      {/* En-tête visible uniquement à l'impression (fiche de révision PDF) */}
      <div className="print-only print-header">
        <div className="print-title">RévizSTMG — {t('revisionSheet')}</div>
        <div>{theme.name} — {chapter.title}{studentName ? ` · ${studentName}` : ''} · {printDate}</div>
      </div>

      <nav className="no-print text-xs text-slate-500 dark:text-slate-400">
        <Link to={`/subject/${sid}`} className="hover:underline" style={{ color }}>{subject.name}</Link>
        <span className="mx-1">›</span>
        <Link to={`/subject/${sid}/theme/${tid}`} className="hover:underline" style={{ color }}>{theme.short || t('theme')}</Link>
        <span className="mx-1">›</span>
        <span className="font-semibold">{t('chapter')} {i + 1}</span>
      </nav>

      <header className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em]" style={{ color }}><CourseText text={theme.name} /> · {t('chapter')} {i + 1}/{chapters.length}</p>
          <h1 className="font-display text-2xl font-medium leading-tight"><CourseText text={chapter.title} /></h1>
        </div>
        <Link
          to={`/subject/${sid}/theme/${tid}`}
          aria-label={t('backToChapters')}
          title={t('backToChapters')}
          className="no-print grid h-10 w-10 shrink-0 place-items-center rounded-full bg-slate-100 text-lg text-slate-500 transition hover:bg-slate-200 hover:text-slate-800 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
        >
          ✕
        </Link>
      </header>

      <div className="no-print flex justify-end">
        <button onClick={saveFiche} className="btn-ghost !min-h-0 !py-2 text-sm" title="Ouvre la fenêtre d’impression pour enregistrer au format PDF">
          🖨️ {t('savePdf')}
        </button>
      </div>

      {/* Cours du chapitre */}
      <CourseSection sec={chapter.section} color={color} sectionIdx={chapter.idx} themeId={tid} subjectId={sid} />

      {/* Flashcards à télécharger dans « Révision » (application installée) */}
      {standalone && (() => {
        const deck = games.find((g) => g.type === 'flashcard')
        if (!deck) return null
        const saved = (state.savedDecks || []).some((d) => d.id === deck.id)
        return (
          <section className="no-print card card-lux flex items-center gap-3 p-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-xl" style={{ backgroundColor: color + '22' }}>🃏</span>
            <div className="min-w-0 flex-1">
              <p className="font-display font-semibold leading-tight">{t('downloadDeckTitle')}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{deck.cards.length} {t('cardsCount')} · {t('downloadDeckHint')}</p>
            </div>
            <button
              onClick={() => saveDeck({ id: deck.id, title: `${theme.short || theme.name} · ${chapter.title}`, subjectId: sid, themeId: tid, color, cards: deck.cards })}
              disabled={saved}
              className="btn-primary shrink-0 !min-h-0 !py-2 text-sm disabled:opacity-60"
              style={{ backgroundColor: saved ? undefined : color }}
            >
              {saved ? `✓ ${t('deckSaved')}` : `⬇️ ${t('downloadDeck')}`}
            </button>
          </section>
        )
      })()}

      {/* Jeux de ce chapitre */}
      {games.length > 0 && (
        <section className="no-print space-y-2.5">
          <h2 className="px-1 font-display text-lg font-bold">🎮 {t('gamesOfChapter')}</h2>
          {games.map((g) => {
            const best = rec?.games?.[g.id]
            return (
              <button
                key={g.id}
                onClick={() => setActiveGame(g)}
                className="card flex w-full items-center gap-3 p-4 text-left transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-xl" style={{ backgroundColor: color + '22' }}>{g.icon || '🎲'}</span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold leading-tight"><CourseText text={g.title} /></span>
                  <span className="block text-xs text-slate-400">{gameLabel(g.type)}</span>
                </span>
                {best != null ? (
                  <span className="chip bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">★ {best}%</span>
                ) : (
                  <span className="chip bg-slate-100 text-slate-400 dark:bg-slate-800">{t('new')}</span>
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
          <Link to={`/subject/${sid}/theme/${tid}/chapter/${prev.idx}`} className="btn-ghost !min-h-0 flex-1 !py-2.5 text-sm">← {t('previous')}</Link>
        ) : <span className="flex-1" />}
        {next ? (
          <Link to={`/subject/${sid}/theme/${tid}/chapter/${next.idx}`} className="btn-primary !min-h-0 flex-1 !py-2.5 text-sm text-white" style={{ backgroundColor: color }}>{t('nextChapter')} →</Link>
        ) : (
          <Link to={`/subject/${sid}/theme/${tid}?tab=test`} className="btn-primary !min-h-0 flex-1 !py-2.5 text-sm text-white" style={{ backgroundColor: color }}>{t('takeTest')} 🏁</Link>
        )}
      </div>

      <p className="print-footer">
        {state.profile?.firstName ? `Fiche de révision de ${state.profile.firstName}${state.profile.lastName ? ' ' + state.profile.lastName : ''} · ` : ''}
        RévizSTMG · {theme.name} — {chapter.title} (contenu généré avec l’aide de l’IA, à recouper avec le cours officiel).
      </p>
    </div>
  )
}
