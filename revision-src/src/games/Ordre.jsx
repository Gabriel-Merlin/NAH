import { useMemo, useState } from 'react'
import { shuffle, Feedback } from './common.jsx'
import { useT } from '../i18n.js'

// Remise en ordre : l'élève tape les étapes dans le bon ordre.
export default function Ordre({ game, color, onDone }) {
  const t = useT()
  const steps = game.steps
  const pool = useMemo(() => shuffle(steps.map((text, id) => ({ id, text }))), [game])
  const [placed, setPlaced] = useState([]) // ids placés dans l'ordre
  const [wrong, setWrong] = useState(null)
  const [mistakes, setMistakes] = useState(0)

  const tap = (id) => {
    if (placed.includes(id)) return
    if (id === placed.length) {
      const np = [...placed, id]
      setPlaced(np)
      if (np.length === steps.length) {
        setTimeout(() => onDone({ correct: steps.length, total: steps.length + mistakes }), 400)
      }
    } else {
      setMistakes((m) => m + 1)
      setWrong(id)
      setTimeout(() => setWrong(null), 500)
    }
  }

  return (
    <div className="card p-5">
      {game.instruction && <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">{game.instruction}</p>}

      <ol className="mb-4 space-y-2">
        {placed.map((id, pos) => (
          <li key={id} className="flex animate-slide-up items-center gap-3 rounded-xl border-2 border-emerald-300 bg-emerald-50 px-3 py-2.5 text-sm font-medium dark:border-emerald-800 dark:bg-emerald-950/40">
            <span className="grid h-6 w-6 place-items-center rounded-full text-xs font-bold text-white" style={{ backgroundColor: color }}>{pos + 1}</span>
            {steps[id]}
          </li>
        ))}
        {placed.length < steps.length && (
          <li className="rounded-xl border-2 border-dashed border-slate-300 px-3 py-2.5 text-sm text-slate-400 dark:border-slate-700">
            {t('stepN')} {placed.length + 1} : {t('chooseBelow')}
          </li>
        )}
      </ol>

      <div className="grid gap-2.5">
        {pool.filter((p) => !placed.includes(p.id)).map((p) => (
          <button
            key={p.id}
            onClick={() => tap(p.id)}
            className={`rounded-xl border-2 px-3 py-3 text-left text-sm font-medium transition ${
              wrong === p.id
                ? 'animate-shake border-rose-400 bg-rose-50 dark:bg-rose-950/40'
                : 'border-slate-200 bg-white hover:border-violet-300 dark:border-slate-700 dark:bg-slate-800'
            }`}
          >
            {p.text}
          </button>
        ))}
      </div>

      {mistakes > 0 && placed.length < steps.length && (
        <p className="mt-3 text-center text-xs text-slate-400">{t('errorsCount')} : {mistakes}</p>
      )}
      {game.explain && placed.length === steps.length && <Feedback ok>{game.explain}</Feedback>}
    </div>
  )
}
