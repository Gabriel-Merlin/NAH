import { useEffect, useMemo, useRef, useState } from 'react'
import { shuffle, Feedback, GameProgress, useStopwatch } from './common.jsx'
import { useT } from '../i18n.js'

const PER_Q = 20 // secondes par question en mode Défi

export default function Qcm({ game, mode, color, onDone }) {
  const t = useT()
  const questions = useMemo(
    () =>
      shuffle(game.questions).map((q) => ({
        ...q,
        choices: shuffle(q.choices.map((c, i) => ({ text: c, correct: i === q.answer }))),
      })),
    [game],
  )
  const [i, setI] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [picked, setPicked] = useState(null) // index dans choices
  const [left, setLeft] = useState(PER_Q)
  const elapsed = useStopwatch(mode === 'defi')
  const tick = useRef(null)
  const q = questions[i]
  const answered = picked !== null

  // Décompte par question (mode Défi).
  useEffect(() => {
    if (mode !== 'defi' || answered) return
    setLeft(PER_Q)
    tick.current = setInterval(() => {
      setLeft((v) => {
        if (v <= 1) {
          clearInterval(tick.current)
          setPicked(-1) // temps écoulé = raté
          return 0
        }
        return v - 1
      })
    }, 1000)
    return () => clearInterval(tick.current)
  }, [i, mode, answered])

  const choose = (idx) => {
    if (answered) return
    clearInterval(tick.current)
    setPicked(idx)
    if (q.choices[idx]?.correct) setCorrect((c) => c + 1)
  }

  const next = () => {
    if (i + 1 >= questions.length) {
      const timeBonus = Math.max(0, questions.length * 6 - elapsed)
      onDone({ correct, total: questions.length, timeBonus })
    } else {
      setI((v) => v + 1)
      setPicked(null)
    }
  }

  return (
    <div className="card p-5">
      <GameProgress index={i} total={questions.length} color={color} />
      {mode === 'defi' && !answered && (
        <div className="mb-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
          <div className="h-full bg-amber-400 transition-all duration-1000 ease-linear" style={{ width: `${(left / PER_Q) * 100}%` }} />
        </div>
      )}
      <h3 className="mb-4 text-lg font-semibold leading-snug">{q.q}</h3>
      <div className="grid gap-2.5">
        {q.choices.map((c, idx) => {
          let cls = 'border-slate-200 bg-white hover:border-violet-300 dark:border-slate-700 dark:bg-slate-800'
          if (answered) {
            if (c.correct) cls = 'border-emerald-400 bg-emerald-50 dark:bg-emerald-950/40'
            else if (idx === picked) cls = 'border-rose-400 bg-rose-50 dark:bg-rose-950/40'
            else cls = 'border-slate-200 bg-white opacity-60 dark:border-slate-700 dark:bg-slate-800'
          }
          return (
            <button
              key={idx}
              onClick={() => choose(idx)}
              disabled={answered}
              className={`flex items-center gap-3 rounded-xl border-2 px-4 py-3 text-left text-[15px] transition ${cls}`}
            >
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-slate-100 text-xs font-bold dark:bg-slate-700">
                {String.fromCharCode(65 + idx)}
              </span>
              <span>{c.text}</span>
              {answered && c.correct && <span className="ml-auto">✅</span>}
              {answered && !c.correct && idx === picked && <span className="ml-auto">❌</span>}
            </button>
          )
        })}
      </div>

      {answered && (
        <>
          <Feedback ok={q.choices[picked]?.correct}>
            {picked === -1 && <span className="font-semibold">{t('timeUp')} </span>}
            {q.explain}
          </Feedback>
          <button onClick={next} className="btn-primary mt-4 w-full" style={{ backgroundColor: color }}>
            {i + 1 >= questions.length ? t('seeScore') : `${t('nextQuestion')} →`}
          </button>
        </>
      )}
    </div>
  )
}
