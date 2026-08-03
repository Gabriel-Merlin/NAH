import { useMemo, useState } from 'react'
import { Feedback, GameProgress, useStopwatch } from './common.jsx'
import { makeCalcSet } from '../calc.js'

// Analyse une saisie chiffrée à la française (« 7 000 », « 8,45 »).
function parseNum(s) {
  const clean = String(s).replace(/[€%\s]/g, '').replace(',', '.')
  const n = parseFloat(clean)
  return Number.isFinite(n) ? n : null
}

// Graphique (repère quadrillé) généré avec l'exercice : il change à chaque
// nouveau tirage, donc la réponse à lire change aussi. Gère les droites
// affines (type 'grid') et les nuages de points (type 'scatter').
function Figure({ fig, color }) {
  if (!fig) return null
  const W = 320, H = 220, pad = 30
  const xmin = fig.xmin ?? 0, ymin = fig.ymin ?? 0
  const xmax = fig.xmax ?? 10, ymax = fig.ymax ?? 10
  const px = (x) => pad + ((x - xmin) / (xmax - xmin)) * (W - 2 * pad)
  const py = (y) => H - pad - ((y - ymin) / (ymax - ymin)) * (H - 2 * pad)
  const xt = [], yt = []
  for (let x = Math.ceil(xmin); x <= xmax; x++) xt.push(x)
  for (let y = Math.ceil(ymin); y <= ymax; y++) yt.push(y)
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="mb-4 w-full rounded-xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-50" role="img" aria-label="graphique de l'exercice">
      {xt.map((x) => <line key={'gx' + x} x1={px(x)} y1={py(ymin)} x2={px(x)} y2={py(ymax)} stroke="#e2e8f0" strokeWidth="1" />)}
      {yt.map((y) => <line key={'gy' + y} x1={px(xmin)} y1={py(y)} x2={px(xmax)} y2={py(y)} stroke="#e2e8f0" strokeWidth="1" />)}
      <line x1={px(xmin)} y1={py(0)} x2={px(xmax)} y2={py(0)} stroke="#475569" strokeWidth="1.5" />
      <line x1={px(0)} y1={py(ymin)} x2={px(0)} y2={py(ymax)} stroke="#475569" strokeWidth="1.5" />
      {xt.filter((x) => x % 2 === 0 && x !== 0).map((x) => <text key={'lx' + x} x={px(x)} y={py(0) + 12} fontSize="9" textAnchor="middle" fill="#64748b">{x}</text>)}
      {yt.filter((y) => y % 2 === 0 && y !== 0).map((y) => <text key={'ly' + y} x={px(0) - 5} y={py(y) + 3} fontSize="9" textAnchor="end" fill="#64748b">{y}</text>)}
      {(fig.lines || []).map((l, i) => (
        <line key={'ln' + i} x1={px(xmin)} y1={py(l.a * xmin + l.b)} x2={px(xmax)} y2={py(l.a * xmax + l.b)} stroke={color} strokeWidth="2.5" />
      ))}
      {fig.markX != null && <line x1={px(fig.markX)} y1={py(ymin)} x2={px(fig.markX)} y2={py(ymax)} stroke={color} strokeWidth="1.2" strokeDasharray="4 3" opacity="0.7" />}
      {(fig.points || []).map((p, i) => <circle key={'pt' + i} cx={px(p.x)} cy={py(p.y)} r="4" fill={color} />)}
    </svg>
  )
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
      {q.figure && <Figure fig={q.figure} color={color} />}
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
