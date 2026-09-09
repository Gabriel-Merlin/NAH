import { useEffect, useRef, useState } from 'react'
import { useT } from '../i18n.js'

// Duel « façon Kahoot » : QCM chronométré, points selon la rapidité, sur N
// questions. Une bonne réponse rapporte 50 à 100 points selon la vitesse ;
// une mauvaise réponse ou un temps écoulé = 0. Renvoie { points, correct, total }.
const DUR = 18 // secondes par question
const TILES = [
  { bg: '#e21b3c', shape: '▲' },
  { bg: '#1368ce', shape: '◆' },
  { bg: '#d89e00', shape: '●' },
  { bg: '#26890c', shape: '■' },
]

export default function KahootQuiz({ questions, onDone }) {
  const t = useT()
  const [i, setI] = useState(0)
  const [points, setPoints] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [picked, setPicked] = useState(null) // index | 'timeout' | null
  const [left, setLeft] = useState(DUR)
  const [gain, setGain] = useState(0)
  const startRef = useRef(Date.now())
  const q = questions[i] || { q: '', choices: [], answer: 0 }
  const answered = picked !== null

  useEffect(() => {
    setPicked(null); setLeft(DUR); setGain(0)
    startRef.current = Date.now()
    const id = setInterval(() => {
      const rem = Math.max(0, DUR - (Date.now() - startRef.current) / 1000)
      setLeft(rem)
      if (rem <= 0) { clearInterval(id); setPicked((p) => (p === null ? 'timeout' : p)) }
    }, 100)
    return () => clearInterval(id)
  }, [i])

  const choose = (k) => {
    if (answered) return
    const rem = Math.max(0, DUR - (Date.now() - startRef.current) / 1000)
    if (k === q.answer) {
      const g = Math.round(50 + 50 * (rem / DUR))
      setGain(g); setPoints((p) => p + g); setCorrect((c) => c + 1)
    } else { setGain(0) }
    setPicked(k)
  }
  const next = () => {
    if (i + 1 >= questions.length) onDone({ points, correct, total: questions.length })
    else setI(i + 1)
  }

  const pct = Math.max(0, Math.min(100, (left / DUR) * 100))
  const barColor = left > DUR * 0.5 ? '#26890c' : left > DUR * 0.25 ? '#d89e00' : '#e21b3c'
  const ok = picked === q.answer

  return (
    <div className="mx-auto max-w-xl">
      {/* Barre supérieure : progression + points */}
      <div className="mb-3 flex items-center justify-between text-sm font-semibold">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600 dark:bg-slate-800 dark:text-slate-300 tabular-nums">
          {Math.min(i + 1, questions.length)} / {questions.length}
        </span>
        <span className="rounded-full px-3 py-1 tabular-nums text-white" style={{ backgroundColor: 'var(--c-accent)' }}>
          {points} pts
        </span>
      </div>

      {/* Chrono */}
      <div className="mb-4 h-2.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
        <div className="h-full rounded-full transition-[width] duration-100 ease-linear" style={{ width: `${answered ? 100 : pct}%`, backgroundColor: answered ? '#94a3b8' : barColor }} />
      </div>

      {/* Question */}
      <div className="card mb-4 p-6 text-center">
        <p className="font-display text-xl font-semibold leading-snug text-balance">{q.q}</p>
      </div>

      {/* Tuiles de réponse */}
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        {q.choices.map((c, k) => {
          const tile = TILES[k % 4]
          const isAns = k === q.answer
          const isMine = k === picked
          const dim = answered && !isAns && !isMine
          return (
            <button
              key={k}
              onClick={() => choose(k)}
              disabled={answered}
              className="flex items-center gap-3 rounded-2xl px-4 py-4 text-left font-semibold text-white shadow-md transition"
              style={{
                backgroundColor: tile.bg,
                opacity: dim ? 0.35 : 1,
                outline: answered && isAns ? '4px solid #fff' : 'none',
                outlineOffset: '-4px',
                boxShadow: answered && isAns ? '0 0 0 4px #26890c' : undefined,
                transform: answered && isMine && !isAns ? 'scale(0.97)' : 'none',
              }}
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/25 text-lg" aria-hidden>{tile.shape}</span>
              <span className="flex-1">{c}</span>
              {answered && isAns && <span aria-hidden>✓</span>}
              {answered && isMine && !isAns && <span aria-hidden>✗</span>}
            </button>
          )
        })}
      </div>

      {/* Feedback + suite */}
      {answered && (
        <div className="mt-4 animate-slide-up text-center">
          <p className="font-display text-lg font-bold" style={{ color: ok ? '#26890c' : '#e21b3c' }}>
            {picked === 'timeout' ? `⏱ ${t('timeUp')}` : ok ? `✅ +${gain} pts` : `❌ ${t('feedbackBad')}`}
          </p>
          {q.explain && <p className="mx-auto mt-1 max-w-md text-sm text-slate-500 dark:text-slate-400">{q.explain}</p>}
          <button onClick={next} className="btn-primary mt-4" style={{ backgroundColor: 'var(--c-accent)' }}>
            {i + 1 >= questions.length ? t('seeScore') : `${t('next')} →`}
          </button>
        </div>
      )}
    </div>
  )
}
