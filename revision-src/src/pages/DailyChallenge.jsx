import { useMemo, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useStore } from '../store.jsx'
import { buildDailyChallenge } from '../data/dailyChallenge.js'
import Qcm from '../games/Qcm.jsx'
import { Confetti, Stars } from '../components/ui.jsx'
import { useT } from '../i18n.js'

const todayKey = () => new Date().toISOString().slice(0, 10)

export default function DailyChallenge() {
  const { state, completeDailyChallenge } = useStore()
  const t = useT()
  const navigate = useNavigate()
  const today = todayKey()
  const dc = state.dailyChallenge || {}
  const alreadyDone = dc.last === today

  const questions = useMemo(() => (state.track ? buildDailyChallenge(state.track, today) : []), [state.track, today])
  const [phase, setPhase] = useState('intro') // intro | run | result
  const [result, setResult] = useState(null)
  const accent = '#c8a24e'

  if (!state.track) return <Navigate to="/" replace />

  const onDone = ({ correct, total }) => {
    const pct = total ? Math.round((correct / total) * 100) : 0
    completeDailyChallenge(pct)
    setResult({ correct, total, pct })
    setPhase('result')
  }

  // Déjà relevé aujourd'hui (et on n'est pas en train d'afficher le résultat).
  if (alreadyDone && phase !== 'result') {
    return (
      <div className="animate-lux mx-auto max-w-md space-y-5 text-center">
        <Header t={t} />
        <div className="card card-lux p-6">
          <div className="text-5xl">✅</div>
          <h2 className="mt-2 font-display text-xl font-semibold">{t('challengeDoneToday')}</h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{t('challengeComeBack')}</p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold" style={{ background: 'color-mix(in srgb, var(--c-accent) 14%, transparent)', color: 'var(--c-accent)' }}>
            🔥 {t('challengeStreak')} : {dc.streak || 0} · 🏆 {t('best')} : {dc.best || 0}
          </div>
        </div>
        <button onClick={() => navigate('/accueil')} className="btn-ghost !min-h-0 !py-2 text-sm">← {t('backHome')}</button>
      </div>
    )
  }

  if (questions.length < 3) {
    return (
      <div className="animate-lux mx-auto max-w-md space-y-5 text-center">
        <Header t={t} />
        <div className="card p-6 text-sm text-slate-500 dark:text-slate-400">{t('challengeSoon')}</div>
        <button onClick={() => navigate('/accueil')} className="btn-ghost !min-h-0 !py-2 text-sm">← {t('backHome')}</button>
      </div>
    )
  }

  if (phase === 'result' && result) {
    const great = result.pct >= 80
    const bonus = state.dailyChallenge?.lastBonus || 0
    return (
      <div className="animate-lux mx-auto max-w-md space-y-5 text-center">
        <Header t={t} />
        <div className="card card-lux p-6">
          <Confetti show={great} />
          <div className="animate-bounce-in text-5xl">{great ? '🎉' : result.pct >= 50 ? '👍' : '💪'}</div>
          <div className="score-pop my-3 text-4xl font-extrabold" style={{ color: accent }}>{result.pct}%</div>
          <Stars count={result.pct >= 80 ? 3 : result.pct >= 50 ? 2 : 1} size="text-2xl" />
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            {result.correct} / {result.total} · <span className="pop-badge font-semibold" style={{ color: accent }}>+{bonus} XP</span>
          </p>
          <div className="mt-3 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold" style={{ background: 'color-mix(in srgb, var(--c-accent) 14%, transparent)', color: 'var(--c-accent)' }}>
            🔥 {t('challengeStreak')} : {state.dailyChallenge?.streak || 0}
          </div>
        </div>
        <button onClick={() => navigate('/accueil')} className="btn-gold w-full !py-3 text-sm">{t('done')}</button>
      </div>
    )
  }

  if (phase === 'run') {
    return (
      <div className="animate-lux mx-auto max-w-md space-y-4">
        <Header t={t} />
        <Qcm game={{ questions }} mode="daily" color={accent} onDone={onDone} />
      </div>
    )
  }

  // Intro
  return (
    <div className="animate-lux mx-auto max-w-md space-y-5 text-center">
      <Header t={t} />
      <div className="card card-lux p-6">
        <div className="text-5xl">⚡</div>
        <h2 className="mt-2 font-display text-xl font-semibold">{t('challengeIntroTitle')}</h2>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{t('challengeIntroSub').replace('{n}', questions.length)}</p>
        {(dc.streak || 0) > 0 && (
          <p className="mt-3 text-sm font-semibold" style={{ color: 'var(--c-accent)' }}>🔥 {t('challengeStreak')} : {dc.streak}</p>
        )}
        <button onClick={() => setPhase('run')} className="btn-gold mt-5 w-full !py-3 text-base">▶ {t('challengeStart')}</button>
      </div>
    </div>
  )
}

function Header({ t }) {
  return (
    <header className="text-center">
      <p className="kicker">⚡ {t('dailyChallenge')}</p>
      <h1 className="mt-1 font-display text-[1.8rem] font-medium leading-tight">{t('dailyChallenge')}</h1>
      <span className="mx-auto mt-3 block h-px w-24 rounded-full" style={{ background: 'linear-gradient(90deg,transparent,#c8a24e,transparent)' }} />
    </header>
  )
}
