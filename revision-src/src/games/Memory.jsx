import { useMemo, useState } from 'react'
import { shuffle } from './common.jsx'
import { useT } from '../i18n.js'

// Memory : retrouver les paires (terme ↔ traduction).
export default function Memory({ game, color, onDone }) {
  const t = useT()
  const cards = useMemo(
    () =>
      shuffle(
        game.pairs.flatMap((p, id) => [
          { key: `a${id}`, id, text: p.a },
          { key: `b${id}`, id, text: p.b },
        ]),
      ),
    [game],
  )
  const [flipped, setFlipped] = useState([]) // index dans cards
  const [matched, setMatched] = useState(() => new Set())
  const [mistakes, setMistakes] = useState(0)
  const [lock, setLock] = useState(false)

  const click = (idx) => {
    if (lock || flipped.includes(idx) || matched.has(idx)) return
    const nf = [...flipped, idx]
    setFlipped(nf)
    if (nf.length === 2) {
      setLock(true)
      const [a, b] = nf
      if (cards[a].id === cards[b].id) {
        setTimeout(() => {
          const nm = new Set(matched)
          nm.add(a)
          nm.add(b)
          setMatched(nm)
          setFlipped([])
          setLock(false)
          if (nm.size === cards.length) {
            setTimeout(() => onDone({ correct: game.pairs.length, total: game.pairs.length + mistakes }), 300)
          }
        }, 450)
      } else {
        setMistakes((m) => m + 1)
        setTimeout(() => {
          setFlipped([])
          setLock(false)
        }, 900)
      }
    }
  }

  return (
    <div className="card p-5">
      <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">
        {t('findPairs')} <span className="font-semibold">{matched.size / 2}/{game.pairs.length}</span> · {t('errorsCount')} : {mistakes}
      </p>
      <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-4">
        {cards.map((c, idx) => {
          const show = flipped.includes(idx) || matched.has(idx)
          const done = matched.has(idx)
          return (
            <button
              key={c.key}
              onClick={() => click(idx)}
              disabled={done}
              className={`flex aspect-[4/3] items-center justify-center rounded-xl border-2 p-1.5 text-center text-xs font-semibold leading-tight transition ${
                done
                  ? 'border-emerald-300 bg-emerald-50 text-emerald-700 opacity-70 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300'
                  : show
                    ? 'border-violet-300 bg-white dark:border-slate-500 dark:bg-slate-800'
                    : 'border-transparent text-white'
              }`}
              style={!show && !done ? { backgroundColor: color } : undefined}
              aria-label={show ? c.text : t('hiddenCard')}
            >
              {show ? c.text : '?'}
            </button>
          )
        })}
      </div>
    </div>
  )
}
