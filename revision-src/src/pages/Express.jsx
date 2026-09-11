import { useEffect, useMemo, useRef, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useStore } from '../store.jsx'
import { buildExam } from '../data/study.js'
import { Confetti, Stars } from '../components/ui.jsx'
import { useT } from '../i18n.js'

const DURATION = 300 // 5 minutes
const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.max(0, s % 60)).padStart(2, '0')}`

export default function Express() {
  const { state, addXp } = useStore()
  const t = useT()
  const navigate = useNavigate()
  const accent = '#c8a24e'

  const pool = useMemo(() => (state.track ? buildExam(state, state.track, null, 60).questions : []), [state.track]) // eslint-disable-line react-hooks/exhaustive-deps
  const [phase, setPhase] = useState('intro') // intro | run | result
  const [i, setI] = useState(0)
  const [picked, setPicked] = useState(null)
  const [correct, setCorrect] = useState(0)
  const [answered, setAnswered] = useState(0)
  const [left, setLeft] = useState(DURATION)
  const endRef = useRef(0)
  const finishRef = useRef(false)

  if (!state.track) return <Navigate to="/" replace />

  const q = pool[i] || null

  useEffect(() => {
    if (phase !== 'run') return
    endRef.current = Date.now() + DURATION * 1000
    const id = setInterval(() => {
      const rem = Math.round((endRef.current - Date.now()) / 1000)
      setLeft(rem)
      if (rem <= 0) finish()
    }, 250)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase])

  const finish = () => {
    if (finishRef.current) return
    finishRef.current = true
    const gain = Math.min(80, correctRef.current * 3)
    try { addXp(gain) } catch { /* */ }
    setPhase('result')
  }
  // ref pour lire le score à jour dans finish()
  const correctRef = useRef(0)
  correctRef.current = correct

  const choose = (idx) => {
    if (picked !== null) return
    setPicked(idx)
    setAnswered((a) => a + 1)
    if (q.choices[idx] === q.choices[q.answer]) setCorrect((c) => c + 1)
  }
  const next = () => {
    if (i + 1 >= pool.length) return finish()
    setI((v) => v + 1); setPicked(null)
  }

  if (pool.length < 3) {
    return (
      <div className="animate-lux mx-auto max-w-md space-y-5 text-center">
        <H t={t} />
        <div className="card p-6 text-sm text-slate-500 dark:text-slate-400">{t('challengeSoon')}</div>
        <button onClick={() => navigate('/accueil')} className="btn-ghost !min-h-0 !py-2 text-sm">← {t('backHome')}</button>
      </div>
    )
  }

  if (phase === 'result') {
    const pct = answered ? Math.round((correct / answered) * 100) : 0
    const great = pct >= 80 && answered >= 5
    const gain = Math.min(80, correct * 3)
    return (
      <div className="animate-lux mx-auto max-w-md space-y-5 text-center">
        <H t={t} />
        <div className="card card-lux p-6">
          <Confetti show={great} />
          <div className="animate-bounce-in text-5xl">{great ? '🎉' : pct >= 50 ? '👍' : '💪'}</div>
          <div className="score-pop my-3 text-4xl font-extrabold" style={{ color: accent }}>{correct}</div>
          <p className="text-sm text-slate-500 dark:text-slate-400">{t('expressResult').replace('{c}', correct).replace('{n}', answered)}</p>
          <div className="mt-2"><Stars count={pct >= 80 ? 3 : pct >= 50 ? 2 : 1} size="text-2xl" /></div>
          <p className="mt-2 text-sm"><span className="pop-badge font-semibold" style={{ color: accent }}>+{gain} XP</span></p>
        </div>
        <button onClick={() => navigate('/accueil')} className="btn-gold w-full !py-3 text-sm">{t('done')}</button>
      </div>
    )
  }

  if (phase === 'run' && q) {
    const done = picked !== null
    return (
      <div className="animate-lux mx-auto max-w-md space-y-4">
        <div className="flex items-center justify-between px-1">
          <span className="chip bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">✅ {correct}</span>
          <span className="font-display text-xl font-bold tabular-nums" style={{ color: left <= 30 ? '#e11d48' : accent }}>⏱ {fmt(left)}</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
          <div className="h-full bg-amber-400 transition-all duration-200 ease-linear" style={{ width: `${(left / DURATION) * 100}%` }} />
        </div>
        <div className="card p-5">
          <h3 className="mb-4 text-lg font-semibold leading-snug">{q.q}</h3>
          <div className="grid gap-2.5">
            {q.choices.map((c, idx) => {
              const isCorrect = idx === q.answer
              let cls = 'border-slate-200 bg-white hover:border-violet-300 dark:border-slate-700 dark:bg-slate-800'
              let anim = ''
              if (done) {
                if (isCorrect) { cls = 'border-emerald-400 bg-emerald-50 dark:bg-emerald-950/40'; anim = 'correct-pop' }
                else if (idx === picked) { cls = 'border-rose-400 bg-rose-50 dark:bg-rose-950/40'; anim = 'animate-shake' }
                else cls = 'border-slate-200 bg-white opacity-60 dark:border-slate-700 dark:bg-slate-800'
              }
              return (
                <button key={`${i}-${idx}`} onClick={() => choose(idx)} disabled={done} style={done ? undefined : { animationDelay: `${idx * 45}ms` }}
                  className={`flex items-center gap-3 rounded-xl border-2 px-4 py-3 text-left text-[15px] transition ${cls} ${done ? anim : 'choice-in'}`}>
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-slate-100 text-xs font-bold dark:bg-slate-700">{String.fromCharCode(65 + idx)}</span>
                  <span>{c}</span>
                  {done && isCorrect && <span className="pop-badge ml-auto">✅</span>}
                  {done && !isCorrect && idx === picked && <span className="pop-badge ml-auto">❌</span>}
                </button>
              )
            })}
          </div>
          {done && (
            <button onClick={next} className="btn-primary mt-4 w-full" style={{ backgroundColor: accent }}>{t('nextQuestion')} →</button>
          )}
        </div>
        <button onClick={finish} className="w-full text-center text-xs font-semibold text-slate-400 underline">{t('finishNow')}</button>
      </div>
    )
  }

  // Intro
  return (
    <div className="animate-lux mx-auto max-w-md space-y-5 text-center">
      <H t={t} />
      <div className="card card-lux p-6">
        <div className="text-5xl">⏱️</div>
        <h2 className="mt-2 font-display text-xl font-semibold">{t('expressIntroTitle')}</h2>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{t('expressIntroSub')}</p>
        <button onClick={() => setPhase('run')} className="btn-gold mt-5 w-full !py-3 text-base">▶ {t('challengeStart')}</button>
      </div>
    </div>
  )
}

function H({ t }) {
  return (
    <header className="text-center">
      <p className="kicker">⏱️ {t('expressMode')}</p>
      <h1 className="mt-1 font-display text-[1.8rem] font-medium leading-tight">{t('expressMode')}</h1>
      <span className="mx-auto mt-3 block h-px w-24 rounded-full" style={{ background: 'linear-gradient(90deg,transparent,#c8a24e,transparent)' }} />
    </header>
  )
}
