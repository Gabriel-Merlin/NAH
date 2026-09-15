import { useMemo, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useStore, isoWeekKey, WEEKLY_GOAL } from '../store.jsx'
import { reviewQueue } from '../data/study.js'
import { subjectsForTrack } from '../data/tracks.js'
import { ProgressBar } from '../components/ui.jsx'
import Flashcards from '../games/Flashcards.jsx'
import AudioReview from '../components/AudioReview.jsx'
import { encodeDeck, decodeDeck } from '../deckShare.js'
import { useT } from '../i18n.js'

// Étiquette d'état d'un thème commencé (jamais « nouveau » ici : on ne liste que
// ce que l'élève a déjà travaillé).
const REASON = {
  due: { key: 'reasonDue', bg: 'bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300', icon: '⏰' },
  weak: { key: 'reasonWeak', bg: 'bg-rose-100 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300', icon: '⚠️' },
  review: { key: 'reasonReview', bg: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300', icon: '✅' },
}

export default function Revise() {
  const { state, addXp, removeDeck, saveDeck, claimWeekly } = useStore()
  const t = useT()
  const navigate = useNavigate()
  const [playing, setPlaying] = useState(null)
  const [audio, setAudio] = useState(null)
  const [shareCode, setShareCode] = useState('')
  const [importCode, setImportCode] = useState('')
  const [importMsg, setImportMsg] = useState('')
  if (!state.track) return <Navigate to="/" replace />

  const queue = useMemo(() => reviewQueue(state, state.track), [state])
  const started = queue.filter((q) => q.practiced) // uniquement ce qu'on a commencé
  const first = started[0] // le plus prioritaire à reprendre
  const hasStarted = started.length > 0
  const subjects = useMemo(() => subjectsForTrack(state.track).filter((s) => s && !s.comingSoon && (s.chapters || []).length), [state.track])
  const startedSubjects = useMemo(() => new Set(started.map((s) => s.subjectId)), [started])
  const decks = state.savedDecks || []

  const wk = isoWeekKey()
  const weekDone = state.weekly?.week === wk ? (state.weekly.done?.length || 0) : 0
  const weekPct = Math.min(100, Math.round((weekDone / WEEKLY_GOAL) * 100))
  const weekReached = weekDone >= WEEKLY_GOAL
  const weekClaimed = state.weekly?.rewarded === wk

  const share = async (deck) => {
    const code = encodeDeck(deck)
    if (!code) return
    try { if (navigator.share) { await navigator.share({ title: deck.title, text: code }); return } } catch { /* annulé */ }
    setShareCode(code)
  }
  const copyShare = async () => { try { await navigator.clipboard.writeText(shareCode) } catch { /* */ } }
  const doImport = () => {
    const deck = decodeDeck(importCode)
    if (!deck) { setImportMsg(t('importError')); return }
    saveDeck({ id: `import-${Date.now()}`, title: deck.title, subjectId: null, themeId: null, color: '#7c3aed', cards: deck.cards })
    setImportCode(''); setImportMsg(`✅ ${deck.title} (${deck.cards.length} ${t('cardsCount')})`)
  }

  return (
    <div className="animate-lux space-y-6">
      <header className="text-center">
        <p className="kicker">🧠 {t('reviseTab')}</p>
        <h1 className="mt-1 font-display text-[1.9rem] font-medium leading-tight">{t('reviseTab')}</h1>
        <span className="mx-auto mt-3 block h-px w-24 rounded-full" style={{ background: 'linear-gradient(90deg,transparent,#c8a24e,transparent)' }} />
      </header>

      {/* 1) REPRENDRE ce qu'on a commencé — ou COMMENCER si rien n'est commencé */}
      {hasStarted ? (
        <button
          onClick={() => navigate(`/subject/${first.subjectId}/theme/${first.themeId}`)}
          className="card card-lux flex w-full items-center gap-4 p-5 text-left transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-2xl text-white" style={{ backgroundColor: first.color }}>▶</span>
          <span className="min-w-0 flex-1">
            <span className="block text-xs font-semibold uppercase tracking-wide text-slate-400">{t('resumeTitle')}</span>
            <span className="block truncate font-display text-lg font-semibold leading-tight">{first.themeName}</span>
            <span className="block truncate text-xs text-slate-500 dark:text-slate-400">{first.subjectName}</span>
          </span>
          <span className="text-slate-300" aria-hidden>›</span>
        </button>
      ) : (
        <section className="card card-lux p-6 text-center">
          <div className="text-4xl" aria-hidden>🚀</div>
          <h2 className="mt-2 font-display text-xl font-semibold">{t('startTitle')}</h2>
          <p className="mx-auto mt-1 max-w-xs text-sm text-slate-500 dark:text-slate-400">{t('startSub')}</p>
          {subjects[0] && (
            <button onClick={() => navigate(`/subject/${subjects[0].id}`)} className="btn-gold mt-4 w-full !py-3 text-base">
              📚 {t('startCourseBtn')}
            </button>
          )}
        </section>
      )}

      {/* 2) À RÉVISER — la liste des thèmes commencés (aucun « nouveau » ici) */}
      {hasStarted && (
        <section className="space-y-2.5">
          <h2 className="px-1 font-display text-lg font-semibold">🔁 {t('toReviseSection')}</h2>
          {started.slice(0, 20).map((item) => {
            const r = REASON[item.reason] || REASON.review
            return (
              <Link key={item.themeId} to={`/subject/${item.subjectId}/theme/${item.themeId}`} className="card flex items-center gap-3 p-3.5 transition hover:-translate-y-0.5 hover:shadow-md">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-lg" style={{ backgroundColor: item.color + '22' }} aria-hidden>{r.icon}</span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold">{item.themeName}</span>
                  <span className="block text-xs text-slate-400">{item.subjectName}</span>
                </span>
                <span className="hidden w-14 sm:block"><ProgressBar value={item.score} color={item.color} /></span>
                <span className={`chip shrink-0 ${r.bg}`}>{item.reason === 'review' ? `${item.score}%` : t(r.key)}</span>
              </Link>
            )
          })}
        </section>
      )}

      {/* 3) TES MATIÈRES — pour commencer un nouveau cours (toujours accessible) */}
      <section className="space-y-2.5">
        <h2 className="px-1 font-display text-lg font-semibold">📚 {t('mySubjects')}</h2>
        {subjects.map((s) => {
          const inProgress = startedSubjects.has(s.id)
          return (
            <Link key={s.id} to={`/subject/${s.id}`} className="card flex items-center gap-3 p-3.5 transition hover:-translate-y-0.5 hover:shadow-md">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl text-xl" style={{ backgroundColor: s.color + '22' }} aria-hidden>{s.icon || '📘'}</span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-semibold">{s.name}</span>
                <span className="block text-xs text-slate-400">{(s.chapters || []).length} {t('themesCount')}</span>
              </span>
              <span className="chip shrink-0" style={{ backgroundColor: s.color + '18', color: s.color }}>{inProgress ? t('continueChip') : t('startChip')}</span>
              <span className="text-slate-300" aria-hidden>›</span>
            </Link>
          )
        })}
      </section>

      {/* 4) MES FLASHCARDS (paquets enregistrés depuis les cours) */}
      <section className="space-y-2.5">
        <div className="flex items-center justify-between px-1">
          <h2 className="font-display text-lg font-semibold">🃏 {t('myDecks')}</h2>
          {decks.length > 0 && <span className="chip bg-slate-100 text-slate-500 dark:bg-slate-800">{decks.length}</span>}
        </div>
        {decks.length === 0 ? (
          <div className="card p-5 text-center text-sm text-slate-500 dark:text-slate-400">{t('noDeckYet')}</div>
        ) : (
          decks.map((d) => (
            <div key={d.id} className="card flex items-center gap-2 p-3.5">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-lg" style={{ backgroundColor: (d.color || '#7c3aed') + '22' }} aria-hidden>🃏</span>
              <button onClick={() => setPlaying(d)} className="min-w-0 flex-1 text-left">
                <span className="block truncate text-sm font-semibold">{d.title}</span>
                <span className="block text-xs text-slate-400">{d.cards.length} {t('cardsCount')}</span>
              </button>
              <button onClick={() => setPlaying(d)} title={t('review')} aria-label={t('review')} className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-white" style={{ backgroundColor: d.color || 'var(--c-accent)' }}>▶</button>
              <button onClick={() => setAudio(d)} title={t('audioReview')} aria-label={t('audioReview')} className="grid h-9 w-9 shrink-0 place-items-center rounded-full" style={{ boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--c-accent) 30%, transparent)' }}>🔊</button>
              <button onClick={() => share(d)} title={t('shareDeck')} aria-label={t('shareDeck')} className="grid h-9 w-9 shrink-0 place-items-center rounded-full" style={{ boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--c-accent) 30%, transparent)' }}>📤</button>
              <button onClick={() => removeDeck(d.id)} title={t('remove')} aria-label={t('remove')} className="shrink-0 text-slate-400 transition hover:text-rose-500">🗑</button>
            </div>
          ))
        )}
        <p className="px-1 text-xs text-slate-400">{t('decksHowTo')}</p>
        <div className="card p-4">
          <p className="mb-2 text-sm font-semibold">📥 {t('importDeck')}</p>
          <div className="flex gap-2">
            <input value={importCode} onChange={(e) => { setImportCode(e.target.value); setImportMsg('') }} placeholder={t('importPlaceholder')} className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-transparent px-3 py-2 text-sm outline-none dark:border-slate-700" />
            <button onClick={doImport} disabled={!importCode.trim()} className="btn-primary shrink-0 !min-h-0 !py-2 text-sm disabled:opacity-40">{t('importBtn')}</button>
          </div>
          {importMsg && <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{importMsg}</p>}
        </div>
      </section>

      {/* 5) OBJECTIF DE LA SEMAINE (compact, en bas) */}
      <section className="card p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="font-display font-semibold">🎯 {t('weeklyGoal')}</span>
          <span className="text-sm font-semibold" style={{ color: 'var(--c-accent)' }}>{Math.min(weekDone, WEEKLY_GOAL)} / {WEEKLY_GOAL}</span>
        </div>
        <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
          <div className="h-full rounded-full transition-all" style={{ width: `${weekPct}%`, backgroundColor: 'var(--c-accent)' }} />
        </div>
        {weekClaimed ? (
          <p className="mt-3 text-sm font-semibold text-emerald-600 dark:text-emerald-400">✅ {t('weeklyClaimed')}</p>
        ) : weekReached ? (
          <button onClick={claimWeekly} className="btn-gold mt-3 w-full !py-2.5 text-sm">🎁 {t('weeklyClaim')}</button>
        ) : (
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{t('weeklyGoalHint').replace('{n}', WEEKLY_GOAL)}</p>
        )}
      </section>

      {/* Lecteur de flashcards */}
      {playing && (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-900/50 p-4 pt-10 backdrop-blur-sm" onClick={() => setPlaying(null)}>
          <div className="w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            <div className="mb-2 flex items-center justify-between text-white">
              <span className="truncate font-display text-lg">{playing.title}</span>
              <button onClick={() => setPlaying(null)} className="grid h-9 w-9 place-items-center rounded-full bg-white/90 text-slate-600 shadow" aria-label={t('quit')}>✕</button>
            </div>
            <Flashcards game={{ cards: playing.cards }} color={playing.color || '#7c3aed'} onDone={({ correct = 0 }) => { try { addXp(Math.min(10, correct)) } catch { /* */ } setPlaying(null) }} />
          </div>
        </div>
      )}

      {audio && <AudioReview items={audio.cards} color={audio.color || '#7c3aed'} title={audio.title} onClose={() => setAudio(null)} />}

      {shareCode && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-slate-900/50 p-4 pt-16 backdrop-blur-sm" onClick={() => setShareCode('')}>
          <div className="card w-full max-w-md p-5" onClick={(e) => e.stopPropagation()}>
            <div className="mb-2 flex items-center justify-between">
              <span className="font-display text-lg font-semibold">📤 {t('shareDeck')}</span>
              <button onClick={() => setShareCode('')} className="grid h-8 w-8 place-items-center rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200" aria-label={t('quit')}>✕</button>
            </div>
            <p className="mb-2 text-xs text-slate-500 dark:text-slate-400">{t('shareHint')}</p>
            <textarea readOnly value={shareCode} onFocus={(e) => e.target.select()} rows={4} className="w-full resize-none rounded-xl border border-slate-200 bg-transparent p-3 font-mono text-xs outline-none dark:border-slate-700" />
            <button onClick={copyShare} className="btn-primary mt-3 w-full !min-h-0 !py-2 text-sm">📋 {t('copyCode')}</button>
          </div>
        </div>
      )}
    </div>
  )
}
