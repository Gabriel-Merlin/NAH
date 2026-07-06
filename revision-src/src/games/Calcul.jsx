import { useMemo, useState } from 'react'
import { Feedback, GameProgress, useStopwatch } from './common.jsx'
import { makeCalcSet } from '../calc.js'

// Analyse une saisie chiffrée à la française (« 7 000 », « 8,45 »).
function parseNum(s) {
  const clean = String(s).replace(/[€%\s]/g, '').replace(',', '.')
  const n = parseFloat(clean)
  return Number.isFinite(n) ? n : null
}

export default function Calcul({ game, mode, color, onDone }) {
  const set = useMemo(
    () => (game.gen ? makeCalcSet(game.gen, game.count || 5) : game.questions || []),
    [game],
  )
  const [i, setI] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [val, setVal] = useState('')
  const [checked, setChecked] = useState(false)
  const elapsed = useStopwatch(mode === 'defi')
  const q = set[i]

  const num = parseNum(val)
  const ok = checked && num !== null && Math.abs(num - q.answer) <= (q.tolerance ?? 0.01)

  const check = () => {
    if (checked || val.trim() === '') return
    setChecked(true)
    if (num !== null && Math.abs(num - q.answer) <= (q.tolerance ?? 0.01)) setCorrect((c) => c + 1)
  }
  const next = () => {
    if (i + 1 >= set.length) {
      const timeBonus = Math.max(0, set.length * 8 - elapsed)
      onDone({ correct, total: set.length, timeBonus })
    } else {
      setI((v) => v + 1)
      setVal('')
      setChecked(false)
    }
  }

  return (
    <div className="card p-5">
      <GameProgress index={i} total={set.length} color={color} />
      <p className="mb-4 whitespace-pre-line text-[15px] font-medium leading-relaxed">{q.prompt}</p>
      <div className="flex items-stretch gap-2">
        <input
          value={val}
          onChange={(e) => setVal(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && (checked ? next() : check())}
          disabled={checked}
          inputMode="decimal"
          autoFocus
          placeholder="Ta réponse…"
          className={`w-full rounded-xl border-2 bg-white px-3 py-3 text-lg font-semibold outline-none dark:bg-slate-800 ${
            checked ? (ok ? 'border-emerald-400' : 'border-rose-400') : 'border-violet-300 focus:border-violet-500 dark:border-slate-600'
          }`}
          aria-label="Réponse chiffrée"
        />
        {q.unit && <span className="grid place-items-center rounded-xl bg-slate-100 px-4 text-lg font-bold text-slate-500 dark:bg-slate-800">{q.unit}</span>}
      </div>

      {!checked ? (
        <button onClick={check} disabled={val.trim() === ''} className="btn-primary mt-4 w-full" style={{ backgroundColor: color }}>Vérifier</button>
      ) : (
        <>
          <Feedback ok={ok}>
            {!ok && <>Réponse attendue : <strong>{q.answer.toLocaleString('fr-FR')} {q.unit}</strong>.<br /></>}
            <span className="whitespace-pre-line">{q.explain}</span>
          </Feedback>
          <button onClick={next} className="btn-primary mt-4 w-full" style={{ backgroundColor: color }}>
            {i + 1 >= set.length ? 'Voir mon score' : 'Suivant →'}
          </button>
        </>
      )}
    </div>
  )
}
