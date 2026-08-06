import { useMemo, useState } from 'react'
import { shuffle } from './common.jsx'
import { useT } from '../i18n.js'

// Association par « toucher-toucher » (adapté au mobile) : on sélectionne un
// élément de gauche puis son correspondant à droite.
export default function Association({ game, color, onDone }) {
  const t = useT()
  const pairs = game.pairs
  const lefts = useMemo(() => shuffle(pairs.map((p, i) => ({ id: i, text: p.left }))), [game])
  const rights = useMemo(() => shuffle(pairs.map((p, i) => ({ id: i, text: p.right }))), [game])
  const [sel, setSel] = useState(null) // id de gauche sélectionné
  const [matched, setMatched] = useState(() => new Set())
  const [wrong, setWrong] = useState(null) // id de droite qui clignote
  const [mistakes, setMistakes] = useState(0)

  const pickRight = (rid) => {
    if (sel === null || matched.has(rid)) return
    if (rid === sel) {
      const nm = new Set(matched)
      nm.add(rid)
      setMatched(nm)
      setSel(null)
      if (nm.size === pairs.length) {
        setTimeout(() => onDone({ correct: pairs.length, total: pairs.length + mistakes }), 400)
      }
    } else {
      setMistakes((m) => m + 1)
      setWrong(rid)
      setTimeout(() => setWrong(null), 500)
      setSel(null)
    }
  }

  return (
    <div className="card p-5">
      <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">
        {t('matchEach')} <span className="font-semibold">{matched.size}/{pairs.length}</span>
      </p>
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-2.5">
          {lefts.map((l) => {
            const done = matched.has(l.id)
            const active = sel === l.id
            return (
              <button
                key={l.id}
                onClick={() => !done && setSel(active ? null : l.id)}
                disabled={done}
                className={`rounded-xl border-2 px-3 py-3 text-left text-sm font-medium transition ${
                  done
                    ? 'border-emerald-300 bg-emerald-50 text-emerald-700 opacity-70 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300'
                    : active
                      ? 'border-violet-500 bg-violet-50 dark:bg-violet-950/40'
                      : 'border-slate-200 bg-white hover:border-violet-300 dark:border-slate-700 dark:bg-slate-800'
                }`}
                style={active ? { borderColor: color } : undefined}
              >
                {done && '✅ '}{l.text}
              </button>
            )
          })}
        </div>
        <div className="grid gap-2.5">
          {rights.map((r) => {
            const done = matched.has(r.id)
            const isWrong = wrong === r.id
            return (
              <button
                key={r.id}
                onClick={() => pickRight(r.id)}
                disabled={done}
                className={`rounded-xl border-2 px-3 py-3 text-left text-sm transition ${
                  done
                    ? 'border-emerald-300 bg-emerald-50 text-emerald-700 opacity-70 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300'
                    : isWrong
                      ? 'animate-shake border-rose-400 bg-rose-50 dark:bg-rose-950/40'
                      : 'border-slate-200 bg-white hover:border-violet-300 dark:border-slate-700 dark:bg-slate-800'
                }`}
              >
                {done && '✅ '}{r.text}
              </button>
            )
          })}
        </div>
      </div>
      {mistakes > 0 && (
        <p className="mt-3 text-center text-xs text-slate-400">{t('errorsCount')} : {mistakes}</p>
      )}
    </div>
  )
}
