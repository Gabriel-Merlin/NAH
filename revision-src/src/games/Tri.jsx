import { useMemo, useState } from 'react'
import { shuffle, Feedback, GameProgress } from './common.jsx'
import { useT } from '../i18n.js'

// Tri : on présente les éléments un par un ; l'élève choisit la bonne catégorie.
export default function Tri({ game, mode, color, onDone }) {
  const t = useT()
  const items = useMemo(() => shuffle(game.items), [game])
  const [i, setI] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [picked, setPicked] = useState(null)
  const item = items[i]
  const answered = picked !== null
  const isCorrect = picked === item?.cat
  const catLabel = (id) => game.categories.find((c) => c.id === id)?.label

  const choose = (catId) => {
    if (answered) return
    setPicked(catId)
    if (catId === item.cat) setCorrect((c) => c + 1)
  }
  const next = () => {
    if (i + 1 >= items.length) onDone({ correct, total: items.length })
    else {
      setI((v) => v + 1)
      setPicked(null)
    }
  }

  return (
    <div className="card p-5">
      <GameProgress index={i} total={items.length} color={color} />
      {game.instruction && <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">{game.instruction}</p>}
      <div className="mb-4 rounded-2xl border-2 border-dashed p-5 text-center text-lg font-semibold" style={{ borderColor: color + '66' }}>
        {item.text}
      </div>
      <div className={`grid gap-2.5 ${game.categories.length > 2 ? 'grid-cols-2' : 'grid-cols-1 sm:grid-cols-2'}`}>
        {game.categories.map((cat) => {
          let cls = 'border-slate-200 bg-white hover:border-violet-300 dark:border-slate-700 dark:bg-slate-800'
          if (answered) {
            if (cat.id === item.cat) cls = 'border-emerald-400 bg-emerald-50 dark:bg-emerald-950/40'
            else if (cat.id === picked) cls = 'border-rose-400 bg-rose-50 dark:bg-rose-950/40'
            else cls = 'opacity-50 border-slate-200 dark:border-slate-700'
          }
          return (
            <button key={cat.id} onClick={() => choose(cat.id)} disabled={answered} className={`rounded-xl border-2 px-3 py-3 text-sm font-semibold transition ${cls}`}>
              {cat.label}
            </button>
          )
        })}
      </div>
      {answered && (
        <>
          <Feedback ok={isCorrect}>
            {isCorrect ? t('wellSorted') : <>{t('itWas')} <strong>{catLabel(item.cat)}</strong>.</>}
          </Feedback>
          <button onClick={next} className="btn-primary mt-4 w-full" style={{ backgroundColor: color }}>
            {i + 1 >= items.length ? t('seeScore') : `${t('next')} →`}
          </button>
        </>
      )}
    </div>
  )
}
