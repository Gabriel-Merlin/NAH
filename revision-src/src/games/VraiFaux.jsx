import { useEffect, useMemo, useRef, useState } from 'react'
import { shuffle, Feedback, GameProgress, useStopwatch } from './common.jsx'

const PER_Q = 10

export default function VraiFaux({ game, mode, color, onDone }) {
  const items = useMemo(() => shuffle(game.questions), [game])
  const [i, setI] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [picked, setPicked] = useState(null) // true / false / -1 (temps écoulé)
  const [left, setLeft] = useState(PER_Q)
  const elapsed = useStopwatch(mode === 'defi')
  const tick = useRef(null)
  const q = items[i]
  const answered = picked !== null

  useEffect(() => {
    if (mode !== 'defi' || answered) return
    setLeft(PER_Q)
    tick.current = setInterval(() => {
      setLeft((v) => {
        if (v <= 1) {
          clearInterval(tick.current)
          setPicked(-1)
          return 0
        }
        return v - 1
      })
    }, 1000)
    return () => clearInterval(tick.current)
  }, [i, mode, answered])

  const answer = (val) => {
    if (answered) return
    clearInterval(tick.current)
    setPicked(val)
    if (val === q.answer) setCorrect((c) => c + 1)
  }

  const next = () => {
    if (i + 1 >= items.length) {
      const timeBonus = Math.max(0, items.length * 4 - elapsed)
      onDone({ correct, total: items.length, timeBonus })
    } else {
      setI((v) => v + 1)
      setPicked(null)
    }
  }

  const isCorrect = picked === q.answer

  const btnClass = (val, baseIdle) => {
    if (!answered) return baseIdle
    if (q.answer === val) return 'bg-emerald-500 text-white'
    if (picked === val) return 'bg-rose-500 text-white'
    return 'bg-slate-100 text-slate-400 dark:bg-slate-800'
  }

  return (
    <div className="card p-5">
      <GameProgress index={i} total={items.length} color={color} />
      {mode === 'defi' && !answered && (
        <div className="mb-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
          <div className="h-full bg-amber-400 transition-all duration-1000 ease-linear" style={{ width: `${(left / PER_Q) * 100}%` }} />
        </div>
      )}
      <p className="mb-5 min-h-[3.5rem] text-lg font-semibold leading-snug">{q.statement}</p>
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => answer(true)}
          disabled={answered}
          className={`btn py-4 text-lg font-bold ${btnClass(true, 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300')}`}
        >
          ✔ Vrai
        </button>
        <button
          onClick={() => answer(false)}
          disabled={answered}
          className={`btn py-4 text-lg font-bold ${btnClass(false, 'bg-rose-100 text-rose-800 hover:bg-rose-200 dark:bg-rose-950/50 dark:text-rose-300')}`}
        >
          ✘ Faux
        </button>
      </div>

      {answered && (
        <>
          <Feedback ok={isCorrect}>
            {picked === -1 && <span className="font-semibold">Temps écoulé. </span>}
            {q.explain}
          </Feedback>
          <button onClick={next} className="btn-primary mt-4 w-full" style={{ backgroundColor: color }}>
            {i + 1 >= items.length ? 'Voir mon score' : 'Suivant →'}
          </button>
        </>
      )}
    </div>
  )
}
