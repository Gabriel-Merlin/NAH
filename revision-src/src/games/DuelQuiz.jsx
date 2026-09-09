import { useState } from 'react'
import { GameProgress, Feedback } from './common.jsx'
import { useT } from '../i18n.js'

// Quiz d'un duel : joue un jeu de questions FIGÉ (les mêmes pour les deux
// adversaires), avec correction immédiate, puis renvoie { score, total }.
export default function DuelQuiz({ questions, color = 'var(--c-accent)', onDone }) {
  const t = useT()
  const [i, setI] = useState(0)
  const [score, setScore] = useState(0)
  const [picked, setPicked] = useState(null)
  const q = questions[i] || { q: '', choices: [], answer: 0 }
  const answered = picked !== null

  const choose = (k) => {
    if (answered) return
    setPicked(k)
    if (k === q.answer) setScore((s) => s + 1)
  }
  const next = () => {
    if (i + 1 >= questions.length) onDone({ score, total: questions.length })
    else { setI(i + 1); setPicked(null) }
  }

  return (
    <div className="card animate-pop-in p-5">
      <GameProgress index={i} total={questions.length} color={color} />
      <p className="mb-4 text-[15px] font-medium leading-relaxed">{q.q}</p>
      <div className="grid gap-2">
        {q.choices.map((c, k) => {
          const isAns = k === q.answer
          const isMine = k === picked
          let cls = 'border-transparent bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700'
          if (answered) {
            if (isAns) cls = 'border-emerald-400 bg-emerald-50 dark:border-emerald-500 dark:bg-emerald-950/40'
            else if (isMine) cls = 'border-rose-400 bg-rose-50 dark:border-rose-500 dark:bg-rose-950/40'
            else cls = 'border-transparent opacity-60'
          }
          return (
            <button key={k} onClick={() => choose(k)} disabled={answered} className={`rounded-xl border-2 px-3 py-2.5 text-left text-sm transition ${cls}`}>
              {c}
            </button>
          )
        })}
      </div>
      {answered && (
        <>
          <Feedback ok={picked === q.answer}>{q.explain}</Feedback>
          <button onClick={next} className="btn-primary mt-4 w-full" style={{ backgroundColor: color }}>
            {i + 1 >= questions.length ? t('seeScore') : `${t('next')} →`}
          </button>
        </>
      )}
    </div>
  )
}
