import { useMemo, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useStore, isoWeekKey, WEEKLY_GOAL } from '../store.jsx'
import { reviewQueue, reviewStats } from '../data/study.js'
import { ProgressBar } from '../components/ui.jsx'
import { isStandalone } from '../pwa.js'
import Flashcards from '../games/Flashcards.jsx'
import AudioReview from '../components/AudioReview.jsx'
import { encodeDeck, decodeDeck } from '../deckShare.js'
import { useT } from '../i18n.js'

const REASON = {
  due: { key: 'reasonDue', bg: 'bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300', icon: '⏰' },
  weak: { key: 'reasonWeak', bg: 'bg-rose-100 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300', icon: '⚠️' },
  new: { key: 'reasonNew', bg: 'bg-violet-100 text-violet-700 dark:bg-violet-950/50 dark:text-violet-300', icon: '✨' },
  review: { key: 'reasonReview', bg: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300', icon: '🔁' },
}

export default function Revise() {
  const { state, derived, addXp, removeDeck, saveDeck, claimWeekly } = useStore()
  const t = useT()
  const navigate = useNavigate()
  const [playing, setPlaying] = useState(null) // paquet en cours (lecteur flashcards)
  const [audio, setAudio] = useState(null) // paquet en cours (révision audio)
  const [shareCode, setShareCode] = useState('') // code à partager
  const [importCode, setImportCode] = useState('')
  const [importMsg, setImportMsg] = useState('')
  if (!state.track) return <Navigate to="/" replace />

  const queue = useMemo(() => reviewQueue(state, state.track), [state])
  const stats = reviewStats(queue)
  const top = queue.slice(0, 14)
  const first = queue.find((q) => q.reason === 'due') || queue.find((q) => q.reason === 'weak') || queue[0]

  const wk = isoWeekKey()
  const weekDone = state.weekly?.week === wk ? (state.weekly.done?.length || 0) : 0
  const weekPct = Math.min(100, Math.round((weekDone / WEEKLY_GOAL) * 100))
  const weekReached = weekDone >= WEEKLY_GOAL
  const weekClaimed = state.weekly?.rewarded === wk

  const tiles = [
    { icon: '⏰', label: t('toReviewToday'), value: stats.due, color: '#d97706' },
    { icon: '⚠️', label: t('weakPoints'), value: stats.weak, color: '#e11d48' },
    { icon: '✨', label: t('neverSeen'), value: stats.fresh, color: '#7c3aed' },
  ]

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
        <p className="kicker">🧠 {t('smartRevision')}</p>
        <h1 className="mt-1 font-display text-[1.9rem] font-medium leading-tight">{t('smartRevision')}</h1>
        <span className="mx-auto mt-3 block h-px w-24 rounded-full" style={{ background: 'linear-gradient(90deg,transparent,#c8a24e,transparent)' }} />
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{t('smartRevisionSub')}</p>
      </header>

      {/* Objectif de la semaine */}
      <section className="card card-lux p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="font-display font-semibold">🎯 {t('weeklyGoal')}</span>
          <span className="text-sm font-semibold" style={{ color: 'var(--c-accent)' }}>{Math.min(weekDone, WEEKLY_GOAL)} / {WEEKLY_GOAL}</span>
        </div>
        <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
          <div className="h-full rounded-full transition-all" style={{ width: `${weekPct}%`, backgroundColor: 'var(--c-accent)' }} />
        </div>
        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{t('weeklyGoalHint').replace('{n}', WEEKLY_GOAL)}</p>
        {weekClaimed ? (
          <p className="mt-3 text-sm font-semibold text-emerald-600 dark:text-emerald-400">✅ {t('weeklyClaimed')}</p>
        ) : weekReached ? (
          <button onClick={claimWeekly} className="btn-gold mt-3 w-full !py-2.5 text-sm">🎁 {t('weeklyClaim')}</button>
        ) : null}
      </section>

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

      {/* Mes flashcards téléchargées (application installée uniquement) */}
      <section className="space-y-2.5">
        <h2 className="px-1 font-display text-lg font-medium">🃏 {t('myDecks')}</h2>
        {!isStandalone() ? (
          <div className="card p-5 text-center text-sm text-slate-500 dark:text-slate-400">{t('decksAppOnly')}</div>
        ) : (
          <>
            {(state.savedDecks || []).length === 0 ? (
              <div className="card p-5 text-center text-sm text-slate-500 dark:text-slate-400">{t('noDeckYet')}</div>
            ) : (
              (state.savedDecks || []).map((d) => (
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
            {/* Importer un paquet partagé par un ami */}
            <div className="card p-4">
              <p className="mb-2 text-sm font-semibold">📥 {t('importDeck')}</p>
              <div className="flex gap-2">
                <input value={importCode} onChange={(e) => { setImportCode(e.target.value); setImportMsg('') }} placeholder={t('importPlaceholder')} className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-transparent px-3 py-2 text-sm outline-none dark:border-slate-700" />
                <button onClick={doImport} disabled={!importCode.trim()} className="btn-primary shrink-0 !min-h-0 !py-2 text-sm disabled:opacity-40">{t('importBtn')}</button>
              </div>
              {importMsg && <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{importMsg}</p>}
            </div>
          </>
        )}
      </section>

      <p className="text-center text-xs text-slate-400">{t('masteredThemes')} : <span className="font-semibold" style={{ color: 'var(--c-accent)' }}>{derived.chaptersMastered}</span></p>

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

      {/* Révision audio mains-libres */}
      {audio && <AudioReview items={audio.cards} color={audio.color || '#7c3aed'} title={audio.title} onClose={() => setAudio(null)} />}

      {/* Code de partage */}
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
