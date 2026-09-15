import { useEffect, useState } from 'react'
import { shuffle } from './common.jsx'
import { useT } from '../i18n.js'

// Lecteur de flashcards façon NotebookLM : une carte que l'on retourne, une
// progression claire, l'auto-évaluation « Acquis / À revoir », puis la
// possibilité de ne rejouer que les cartes ratées, ou de tout recommencer.
export default function Flashcards({ game, color = '#7c3aed', onDone }) {
  const t = useT()
  const total = game.cards.length
  const [queue, setQueue] = useState(() => shuffle(game.cards))
  const [i, setI] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [again, setAgain] = useState([]) // cartes « à revoir » de la série en cours
  const [knownSet, setKnownSet] = useState(() => new Set())
  const [phase, setPhase] = useState('study') // study | passEnd | done

  const card = queue[i]

  const rate = (ok) => {
    if (ok) setKnownSet((s) => new Set(s).add(card.front))
    const na = ok ? again : [...again, card]
    if (i + 1 < queue.length) {
      setAgain(na); setI(i + 1); setFlipped(false)
    } else {
      setAgain(na); setPhase(na.length > 0 ? 'passEnd' : 'done')
    }
  }
  const studyMissed = () => { setQueue(shuffle(again)); setI(0); setAgain([]); setFlipped(false); setPhase('study') }
  const restartAll = () => { setQueue(shuffle(game.cards)); setI(0); setAgain([]); setKnownSet(new Set()); setFlipped(false); setPhase('study') }
  const finish = () => { try { onDone?.({ correct: knownSet.size, total }) } catch { /* */ } }

  // Clavier : Espace = retourner ; ← = à revoir ; → = acquis (une fois retournée).
  useEffect(() => {
    if (phase !== 'study') return
    const onKey = (e) => {
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); setFlipped((f) => !f) }
      else if (flipped && (e.key === 'ArrowLeft')) { e.preventDefault(); rate(false) }
      else if (flipped && (e.key === 'ArrowRight')) { e.preventDefault(); rate(true) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }) // deps volontairement larges : dépend de flipped/i/queue

  // ---- Écran de fin de série (il reste des cartes à revoir) ----
  if (phase === 'passEnd') {
    return (
      <div className="card p-6 text-center">
        <div className="text-4xl">🔁</div>
        <p className="mt-2 font-display text-xl font-semibold">{t('cardsKnownOf').replace('{c}', knownSet.size).replace('{n}', total)}</p>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{again.length} {t('toReviewLabel')}</p>
        <div className="mt-5 space-y-2.5">
          <button onClick={studyMissed} className="btn-primary w-full text-white" style={{ backgroundColor: color }}>🔁 {t('reviewMissed')} ({again.length})</button>
          <button onClick={restartAll} className="btn-ghost w-full">↻ {t('restartDeck')}</button>
          <button onClick={finish} className="w-full py-2 text-sm text-slate-400 hover:text-slate-600">{t('finishNow')}</button>
        </div>
      </div>
    )
  }

  // ---- Écran final (toutes les cartes acquises) ----
  if (phase === 'done') {
    return (
      <div className="card p-6 text-center">
        <div className="text-4xl">🎉</div>
        <p className="mt-2 font-display text-xl font-semibold">{t('flashWellDone')}</p>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{t('cardsKnownOf').replace('{c}', knownSet.size).replace('{n}', total)}</p>
        <div className="mt-5 space-y-2.5">
          <button onClick={restartAll} className="btn-primary w-full text-white" style={{ backgroundColor: color }}>↻ {t('restartDeck')}</button>
          <button onClick={finish} className="btn-ghost w-full">{t('finishNow')}</button>
        </div>
      </div>
    )
  }

  // ---- Étude ----
  const pct = Math.round(((i) / queue.length) * 100)
  return (
    <div className="card p-5">
      {/* Progression */}
      <div className="mb-3 flex items-center gap-3">
        <span className="text-sm font-semibold tabular-nums" style={{ color }}>{i + 1}<span className="text-slate-400"> / {queue.length}</span></span>
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
          <div className="h-full rounded-full transition-all duration-300" style={{ width: `${pct}%`, backgroundColor: color }} />
        </div>
        {again.length > 0 && <span className="chip bg-rose-100 text-rose-600 dark:bg-rose-950/50 dark:text-rose-300">🔁 {again.length}</span>}
      </div>

      {/* Carte (clic pour retourner) */}
      <div className="[perspective:1400px]">
        <button
          onClick={() => setFlipped((f) => !f)}
          className="relative block min-h-[16rem] w-full text-left transition-transform duration-500 [transform-style:preserve-3d]"
          style={{ transform: flipped ? 'rotateY(180deg)' : 'none' }}
          aria-label={t('flipCard')}
        >
          {/* Recto : la question / le terme */}
          <span className="absolute inset-0 flex flex-col items-center justify-center overflow-y-auto rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm [backface-visibility:hidden] dark:border-slate-700 dark:bg-slate-800">
            <span className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-slate-400">{t('question')}</span>
            <span className="font-display text-2xl font-semibold leading-snug">{card.front}</span>
            <span className="mt-5 text-xs text-slate-400">{t('tapToFlip')}</span>
          </span>
          {/* Verso : la réponse / la définition */}
          <span
            className="absolute inset-0 flex flex-col items-center justify-center overflow-y-auto rounded-3xl border-2 p-6 text-center shadow-sm [backface-visibility:hidden]"
            style={{ transform: 'rotateY(180deg)', borderColor: color, background: color + '12' }}
          >
            <span className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.2em]" style={{ color }}>{t('answer')}</span>
            <span className={`font-medium leading-relaxed ${card.back && card.back.length > 90 ? 'text-base' : 'text-lg'}`}>{card.back}</span>
          </span>
        </button>
      </div>

      {/* Actions */}
      {flipped ? (
        <div className="mt-4 grid grid-cols-2 gap-3">
          <button onClick={() => rate(false)} className="btn bg-rose-100 py-3.5 font-bold text-rose-700 hover:bg-rose-200 dark:bg-rose-950/50 dark:text-rose-300">↩︎ {t('toReview')}</button>
          <button onClick={() => rate(true)} className="btn bg-emerald-100 py-3.5 font-bold text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300">{t('iKnew')} ✅</button>
        </div>
      ) : (
        <button onClick={() => setFlipped(true)} className="btn-primary mt-4 w-full text-white" style={{ backgroundColor: color }}>{t('seeAnswer')}</button>
      )}
    </div>
  )
}
