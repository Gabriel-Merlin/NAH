import { useEffect, useState } from 'react'
import { Link, useParams, Navigate, useSearchParams } from 'react-router-dom'
import { getChapter, getSubject, themeChapters, deckForTheme } from '../data/index.js'
import { buildThemeExam, themeExamSize } from '../data/study.js'
import { PIEGES } from '../data/pieges.js'
import { useStore, useThemeTimer, chapterScore, starsFromScore } from '../store.jsx'
import { ProgressBar, Stars } from '../components/ui.jsx'
import { Rich } from '../components/ui.jsx'
import { Essentiel, Resources, CourseText } from '../components/Course.jsx'
import { DeckDownload } from '../components/DeckDownload.jsx'
import ThemeTest from '../games/ThemeTest.jsx'
import Exam from '../games/Exam.jsx'
import { useT, useGameLabel } from '../i18n.js'

const TABS = [
  { id: 'chapitres', key: 'tabChapters', icon: '📚' },
  { id: 'test', key: 'tabTest', icon: '🏁' },
  { id: 'progression', key: 'tabProgress', icon: '📊' },
]

export default function Theme() {
  const { sid, tid } = useParams()
  const subject = getSubject(sid)
  const theme = getChapter(tid)
  const { state, setLastChapter, toggleFavorite, setNote } = useStore()
  const t = useT()
  const [searchParams] = useSearchParams()
  const [tab, setTab] = useState(searchParams.get('tab') === 'test' ? 'test' : 'chapitres')
  const [themeExam, setThemeExam] = useState(null) // questions du bac blanc de thème
  useThemeTimer(tid) // mesure le temps de révision passé sur ce thème

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
  // Progression d'un chapitre = moyenne des meilleurs scores de SES exercices
  // (null si le chapitre est un pur cours sans exercice).
  const chapterProgress = (c) => {
    const gs = c.games || []
    if (!gs.length) return null
    const vals = gs.map((g) => rec?.games?.[g.id] || 0)
    return Math.round(vals.reduce((a, b) => a + b, 0) / gs.length)
  }

  if (themeExam) {
    return (
      <div className="space-y-4">
        <Exam questions={themeExam} durationSec={Math.max(300, themeExam.length * 60)} color={color} onExit={() => setThemeExam(null)} />
      </div>
    )
  }

  return (
    <div className="animate-lux space-y-4">
      <nav className="no-print text-xs text-slate-500 dark:text-slate-400">
        <Link to={`/subject/${sid}`} className="hover:underline" style={{ color }}>{subject.name}</Link>
        <span className="mx-1">›</span>
        <span className="font-semibold">{theme.short || t('theme')}</span>
      </nav>

      <header>
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em]" style={{ color }}>{subject.name}</p>
            <h1 className="font-display text-2xl font-medium leading-tight"><CourseText text={theme.name} /></h1>
          </div>
          <button
            onClick={() => toggleFavorite(tid)}
            className={`no-print grid h-10 w-10 shrink-0 place-items-center rounded-full text-xl ${fav ? 'text-amber-400' : 'text-slate-300 hover:text-amber-400 dark:text-slate-600'}`}
            aria-label={fav ? t('removeFav') : t('addFav')}
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
          {TABS.map((tb) => (
            <button
              key={tb.id}
              onClick={() => setTab(tb.id)}
              className={`flex-1 border-b-2 px-2 py-2.5 text-sm font-semibold transition ${
                tab === tb.id ? 'text-slate-900 dark:text-white' : 'border-transparent text-slate-400 hover:text-slate-600'
              }`}
              style={tab === tb.id ? { borderColor: color } : undefined}
              aria-current={tab === tb.id}
            >
              <span className="mr-1" aria-hidden>{tb.icon}</span>
              <span>{t(tb.key)}</span>
            </button>
          ))}
        </div>
      </div>

      {tab === 'chapitres' && (
        <div className="space-y-5">
          {/* LE COURS — sommaire clair des chapitres (le cœur de la page) */}
          <section className="space-y-2.5">
            <div className="flex items-baseline justify-between gap-2 px-1">
              <h2 className="font-display text-lg font-semibold">📖 {t('courseInChapters')}</h2>
              <span className="shrink-0 text-xs font-semibold text-slate-400">{chapters.length} {t(chapters.length > 1 ? 'chaptersWord' : 'chapterWord')}</span>
            </div>
            <p className="px-1 text-xs text-slate-500 dark:text-slate-400">{t('chooseChapterHint')}</p>
            <ol className="space-y-2.5">
              {chapters.map((c) => {
                const prog = chapterProgress(c)
                const done = prog != null && prog >= 90
                const nEx = c.games.length
                return (
                  <Link
                    key={c.id}
                    to={`/subject/${sid}/theme/${tid}/chapter/${c.idx}`}
                    className="card group flex w-full items-center gap-3 p-4 text-left transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <span
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-sm font-black text-white shadow-sm"
                      style={{ backgroundColor: done ? '#16a34a' : color }}
                      aria-hidden
                    >
                      {done ? '✓' : c.idx + 1}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold leading-snug"><CourseText text={c.title} /></span>
                      <span className="mt-0.5 flex items-center gap-2 text-xs text-slate-400">
                        <span>📘 {t('course')}</span>
                        {nEx > 0 && <span>· 🎮 {nEx} {t(nEx > 1 ? 'exercisesWord' : 'exerciseWord')}</span>}
                      </span>
                      {prog != null && prog > 0 && (
                        <span className="mt-1.5 block max-w-[220px]"><ProgressBar value={prog} color={done ? '#16a34a' : color} /></span>
                      )}
                    </span>
                    <span className="text-lg text-slate-300 transition group-hover:translate-x-0.5" aria-hidden>›</span>
                  </Link>
                )
              })}
            </ol>
          </section>

          <Essentiel items={theme.essentiel} color={color} />

          {/* Aller plus loin : test du thème, pièges, ressources, notes */}
          {themeExamSize(tid) >= 4 && (
            <button onClick={() => setThemeExam(buildThemeExam(tid))} className="card card-lux flex w-full items-center gap-3 p-4 text-left transition hover:-translate-y-0.5 hover:shadow-md">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-xl" style={{ backgroundColor: color + '22' }}>📝</span>
              <span className="min-w-0 flex-1">
                <span className="block font-display font-semibold leading-tight">{t('themeExam')}</span>
                <span className="block text-xs text-slate-500 dark:text-slate-400">{t('themeExamSub')}</span>
              </span>
              <span className="text-slate-300" aria-hidden>›</span>
            </button>
          )}
          {PIEGES[tid]?.length > 0 && (
            <section className="rounded-2xl border-2 p-4" style={{ borderColor: '#f59e0b', background: '#f59e0b12' }}>
              <h3 className="mb-2 flex items-center gap-2 font-display text-base font-semibold text-amber-700 dark:text-amber-300">⚠️ {t('commonMistakes')}</h3>
              <ul className="space-y-1.5">
                {PIEGES[tid].map((p, i) => (
                  <li key={i} className="flex gap-2 text-[14px] leading-relaxed text-slate-700 dark:text-slate-200">
                    <span className="mt-0.5 shrink-0" style={{ color: '#f59e0b' }}>•</span><span><Rich text={p} /></span>
                  </li>
                ))}
              </ul>
            </section>
          )}
          <Resources items={theme.resources} />
          <DeckDownload deck={deckForTheme(tid)} color={color} label={t('downloadThemeDeck')} />
          {/* Notes personnelles de l'élève sur ce thème (sauvegardées & synchronisées) */}
          <section className="card p-4">
            <h3 className="mb-2 flex items-center gap-2 font-display text-base font-semibold">📝 {t('myNotes')}</h3>
            <textarea
              value={state.notes?.[tid] || ''}
              onChange={(e) => setNote(tid, e.target.value)}
              rows={4}
              placeholder={t('myNotesPlaceholder')}
              className="w-full resize-y rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[color:var(--c-accent)] dark:border-slate-700 dark:bg-slate-800"
            />
            <p className="mt-1.5 text-xs text-slate-400">💾 {t('myNotesHint')}</p>
          </section>
        </div>
      )}

      {tab === 'test' && <ThemeTest theme={theme} color={color} onExit={() => setTab('chapitres')} />}

      {tab === 'progression' && <ProgressionTab theme={theme} rec={rec} color={color} score={score} />}
    </div>
  )
}

function ProgressionTab({ theme, rec, color, score }) {
  const t = useT()
  const gameLabel = useGameLabel()
  return (
    <div className="space-y-4">
      <div className="card p-5 text-center">
        <p className="text-sm text-slate-500 dark:text-slate-400">{t('themeMastery')}</p>
        <div className="my-1 text-4xl font-extrabold" style={{ color }}>{score}%</div>
        <Stars count={starsFromScore(score)} size="text-2xl" />
      </div>
      <div className="card p-5">
        <h3 className="mb-3 font-bold">{t('detailByGame')}</h3>
        <ul className="space-y-2.5">
          {(theme.games || []).map((g) => {
            const best = rec?.games?.[g.id]
            return (
              <li key={g.id} className="flex items-center gap-3">
                <span className="w-6 text-center">{g.icon || '🎲'}</span>
                <span className="flex-1 text-sm"><CourseText text={g.title} /><span className="ml-1 text-xs text-slate-400">· {gameLabel(g.type)}</span></span>
                <div className="w-24"><ProgressBar value={best || 0} color={color} /></div>
                <span className="w-10 text-right text-xs font-semibold">{best != null ? best + '%' : '—'}</span>
              </li>
            )
          })}
          <li className="flex items-center gap-3 border-t border-slate-100 pt-2.5 dark:border-slate-800">
            <span className="w-6 text-center">🏁</span>
            <span className="flex-1 text-sm font-semibold">{t('tabTest')}</span>
            <div className="w-24"><ProgressBar value={rec?.quiz || 0} color={color} /></div>
            <span className="w-10 text-right text-xs font-semibold">{rec?.quiz != null ? rec.quiz + '%' : '—'}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
