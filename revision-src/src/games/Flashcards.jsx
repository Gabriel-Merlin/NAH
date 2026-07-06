import { useMemo, useState } from 'react'
import { shuffle, GameProgress } from './common.jsx'

export default function Flashcards({ game, color, onDone }) {
  const cards = useMemo(() => shuffle(game.cards), [game])
  const [i, setI] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [known, setKnown] = useState(0)
  const card = cards[i]

  const rate = (ok) => {
    const nk = known + (ok ? 1 : 0)
    if (i + 1 >= cards.length) {
      onDone({ correct: nk, total: cards.length })
    } else {
      setKnown(nk)
      setI((v) => v + 1)
      setFlipped(false)
    }
  }

  return (
    <div className="card p-5">
      <GameProgress index={i} total={cards.length} color={color} />
      <div className="[perspective:1200px]">
        <button
          onClick={() => setFlipped((f) => !f)}
          className="relative block h-56 w-full text-left transition-transform duration-500 [transform-style:preserve-3d]"
          style={{ transform: flipped ? 'rotateY(180deg)' : 'none' }}
          aria-label="Retourner la carte"
        >
          <span className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border-2 border-slate-200 bg-white p-6 text-center [backface-visibility:hidden] dark:border-slate-700 dark:bg-slate-800">
            <span className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-400">Question</span>
            <span className="text-xl font-bold">{card.front}</span>
            <span className="mt-4 text-xs text-slate-400">👆 Touche pour retourner</span>
          </span>
          <span
            className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border-2 p-6 text-center [backface-visibility:hidden]"
            style={{ transform: 'rotateY(180deg)', borderColor: color, background: color + '14' }}
          >
            <span className="mb-2 text-xs font-bold uppercase tracking-wide" style={{ color }}>Réponse</span>
            <span className="text-lg font-semibold">{card.back}</span>
          </span>
        </button>
      </div>

      {flipped ? (
        <div className="mt-4 grid grid-cols-2 gap-3">
          <button onClick={() => rate(false)} className="btn bg-rose-100 py-3 font-bold text-rose-700 hover:bg-rose-200 dark:bg-rose-950/50 dark:text-rose-300">
            À revoir
          </button>
          <button onClick={() => rate(true)} className="btn bg-emerald-100 py-3 font-bold text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300">
            Je savais ✅
          </button>
        </div>
      ) : (
        <button onClick={() => setFlipped(true)} className="btn-ghost mt-4 w-full">Voir la réponse</button>
      )}
    </div>
  )
}
