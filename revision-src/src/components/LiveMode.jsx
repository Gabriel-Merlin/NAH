import { useCallback, useEffect, useRef, useState } from 'react'
import { useT } from '../i18n.js'
import {
  deviceId, fetchActiveLive, fetchLive, createLive, updateLive, endLive,
  joinLive, fetchPlayers, submitLiveAnswer, fetchQuizzes,
} from '../classroom.js'

const QT = 25 // secondes indicatives par question
const CHOICE_COLORS = ['#e21b3c', '#1368ce', '#d89e00', '#26890c', '#8e44ad', '#e67e22']
const CHOICE_SHAPES = ['▲', '◆', '●', '■', '★', '⬢']
const initialsOf = (n) => { const p = String(n || '').trim().split(/\s+/); return ((p[0]?.[0] || '') + (p[1]?.[0] || '')).toUpperCase() || '·' }
const medal = (i) => (i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i + 1}`)

// ===========================================================================
// Point d'entrée : découvre / crée une session et bascule vers l'hôte ou le joueur.
export default function LiveSection({ classCode, role, name, photo, t }) {
  const myId = deviceId()
  const [session, setSession] = useState(null)
  const [status, setStatus] = useState('loading') // loading | none | ok | error

  const poll = useCallback(async () => {
    try { const s = await fetchActiveLive(classCode); setSession(s); setStatus(s ? 'ok' : 'none') } catch { setStatus('error') }
  }, [classCode])

  // Tant qu'aucune session active n'est connue, on sonde régulièrement.
  useEffect(() => {
    if (session && session.phase !== 'ended') return
    poll()
    const id = setInterval(poll, 2500)
    return () => clearInterval(id)
  }, [poll, session])

  if (session && session.phase !== 'ended') {
    return session.host_device === myId
      ? <HostView session={session} t={t} onExit={() => { setSession(null); setStatus('none') }} />
      : <PlayerView session={session} name={name} photo={photo} t={t} onExit={() => { setSession(null); setStatus('none') }} />
  }

  // Aucune session en cours.
  return (
    <div className="space-y-3">
      {role === 'prof'
        ? <HostLauncher classCode={classCode} name={name} t={t} onCreated={(s) => { setSession(s); setStatus('ok') }} />
        : (
          <div className="card p-6 text-center">
            <div className="mb-2 text-3xl">🔴</div>
            <p className="font-display text-lg font-semibold">{t('noLiveYet')}</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{t('noLiveHint')}</p>
            <button onClick={poll} className="btn-ghost mt-3 !min-h-0 !py-2 text-sm">{t('retry')}</button>
          </div>
        )}
    </div>
  )
}

// ----- Le prof choisit un QCM et lance la session --------------------------
function HostLauncher({ classCode, name, t, onCreated }) {
  const [quizzes, setQuizzes] = useState(null)
  const [status, setStatus] = useState('loading')
  const [busy, setBusy] = useState(false)
  const load = useCallback(async () => {
    setStatus('loading')
    try { const q = await fetchQuizzes(classCode); setQuizzes(q.filter((x) => x.status !== 'proposed' && x.questions?.length)); setStatus('ok') } catch { setStatus('error') }
  }, [classCode])
  useEffect(() => { load() }, [load])
  const launch = async (qz) => {
    setBusy(true)
    try { const s = await createLive({ classCode, title: qz.title, questions: qz.questions, hostName: name }); onCreated(s) } catch { setBusy(false) }
  }
  return (
    <div className="space-y-3">
      <div className="card card-lux p-5 text-center">
        <div className="mb-1 text-3xl">🔴</div>
        <h2 className="font-display text-xl font-semibold">{t('liveMode')}</h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{t('liveHostIntro')}</p>
      </div>
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{t('pickQuizForLive')}</p>
      {status === 'loading' && <div className="card p-6 text-center text-sm text-slate-500 dark:text-slate-400">…</div>}
      {status === 'error' && <div className="card p-6 text-center"><p className="text-sm text-slate-500 dark:text-slate-400">{t('rankOffline')}</p><button onClick={load} className="btn-ghost mt-3 !min-h-0 !py-2 text-sm">{t('retry')}</button></div>}
      {quizzes && quizzes.length === 0 && <div className="card p-6 text-center text-sm text-slate-500 dark:text-slate-400">{t('noQuizForLive')}</div>}
      {quizzes && quizzes.map((qz) => (
        <button key={qz.id} disabled={busy} onClick={() => launch(qz)} className="card flex w-full items-center gap-3 p-4 text-left transition hover:-translate-y-0.5 hover:shadow-md disabled:opacity-60">
          <span aria-hidden className="text-lg">📝</span>
          <span className="min-w-0 flex-1"><span className="block truncate font-semibold">{qz.title}</span><span className="block text-xs text-slate-400">{qz.questions.length} {t('questionsWord')}</span></span>
          <span className="btn-primary pointer-events-none !min-h-0 !py-1.5 text-xs">▶ {t('launch')}</span>
        </button>
      ))}
    </div>
  )
}

// ----- Vue Professeur (à projeter) -----------------------------------------
function HostView({ session: initial, t, onExit }) {
  const [session, setSession] = useState(initial)
  const [players, setPlayers] = useState([])
  const [busy, setBusy] = useState(false)
  const id = initial.id
  const refresh = useCallback(async () => {
    try { const [s, p] = await Promise.all([fetchLive(id), fetchPlayers(id)]); if (s) setSession(s); setPlayers(p) } catch { /* */ }
  }, [id])
  useEffect(() => { refresh(); const iv = setInterval(refresh, 1800); return () => clearInterval(iv) }, [refresh])

  const qs = session.questions || []
  const idx = session.current_index || 0
  const q = qs[idx]
  const answeredCount = players.filter((p) => p.answers && p.answers[idx] !== undefined).length
  const set = async (patch) => { setBusy(true); setSession((s) => ({ ...s, ...patch })); try { await updateLive(id, patch) } catch { /* */ } finally { setBusy(false) } }
  const start = () => set({ phase: 'question', current_index: 0, q_started_at: new Date().toISOString() })
  const reveal = () => set({ phase: 'reveal' })
  const next = () => idx + 1 < qs.length ? set({ phase: 'question', current_index: idx + 1, q_started_at: new Date().toISOString() }) : set({ phase: 'ended' })
  const close = async () => { try { await endLive(id) } catch { /* */ } onExit() }

  const Header = (
    <div className="flex items-center justify-between gap-2">
      <span className="rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: '#e21b3c' }}>🔴 {t('liveMode')}</span>
      <button onClick={close} className="text-xs font-semibold text-rose-600 hover:underline">{t('endLive')}</button>
    </div>
  )

  if (session.phase === 'lobby') {
    return (
      <div className="space-y-3">
        {Header}
        <div className="card card-lux p-6 text-center">
          <p className="kicker">{t('joinWithCode')}</p>
          <p className="my-2 font-display text-4xl font-bold tracking-wide" style={{ color: 'var(--c-accent)' }}>{session.class_code}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{t('playersJoining')}</p>
          <p className="mt-3 font-display text-2xl font-semibold">{players.length} 👥</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {players.map((p) => (
            <span key={p.device_id} className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-sm font-semibold dark:bg-slate-800">
              <span className="monogram grid h-6 w-6 place-items-center overflow-hidden text-[0.6rem]">{p.photo ? <img src={p.photo} alt="" className="h-full w-full rounded-full object-cover" /> : initialsOf(p.name)}</span>{p.name || '—'}
            </span>
          ))}
        </div>
        <button onClick={start} disabled={busy || players.length === 0 || qs.length === 0} className="btn-primary w-full">▶ {t('startLive')}</button>
        {players.length === 0 && <p className="text-center text-xs text-slate-400">{t('waitPlayers')}</p>}
      </div>
    )
  }

  if (session.phase === 'question' && q) {
    return (
      <div className="space-y-3">
        {Header}
        <QTimer startedAt={session.q_started_at} />
        <div className="card p-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{t('question')} {idx + 1} / {qs.length}</p>
          <h2 className="mt-2 font-display text-2xl font-semibold leading-snug">{q.q}</h2>
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{answeredCount} / {players.length} {t('answered')}</p>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {q.choices.map((c, i) => (
            <div key={i} className="flex items-center gap-2 rounded-xl px-4 py-3 text-white" style={{ backgroundColor: CHOICE_COLORS[i % CHOICE_COLORS.length] }}>
              <span className="text-lg">{CHOICE_SHAPES[i % CHOICE_SHAPES.length]}</span><span className="font-semibold">{c}</span>
            </div>
          ))}
        </div>
        <button onClick={reveal} disabled={busy} className="btn-primary w-full">{t('reveal')}</button>
      </div>
    )
  }

  if (session.phase === 'reveal' && q) {
    const dist = q.choices.map((_, i) => players.filter((p) => p.answers?.[idx]?.choice === i).length)
    const maxD = Math.max(1, ...dist)
    const top = [...players].sort((a, b) => b.score - a.score).slice(0, 5)
    return (
      <div className="space-y-3">
        {Header}
        <div className="card p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{t('question')} {idx + 1} / {qs.length}</p>
          <h2 className="mt-1 font-display text-xl font-semibold">{q.q}</h2>
          <div className="mt-3 space-y-2">
            {q.choices.map((c, i) => (
              <div key={i}>
                <div className="flex items-center justify-between text-sm">
                  <span className={`font-semibold ${i === q.answer ? '' : 'opacity-70'}`}>{i === q.answer ? '✅ ' : ''}<span style={{ color: CHOICE_COLORS[i % CHOICE_COLORS.length] }}>{CHOICE_SHAPES[i % CHOICE_SHAPES.length]}</span> {c}</span>
                  <span className="text-slate-400">{dist[i]}</span>
                </div>
                <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800"><div className="h-full rounded-full" style={{ width: `${(dist[i] / maxD) * 100}%`, backgroundColor: CHOICE_COLORS[i % CHOICE_COLORS.length] }} /></div>
              </div>
            ))}
          </div>
          {q.explain && <p className="mt-3 rounded-xl bg-slate-100 p-2.5 text-sm dark:bg-slate-800">💡 {q.explain}</p>}
        </div>
        <div className="card p-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">🏆 {t('leaderboard')}</p>
          {top.map((p, i) => (
            <div key={p.device_id} className="flex items-center gap-2 py-1">
              <span className="w-6 text-center font-semibold">{medal(i)}</span>
              <span className="min-w-0 flex-1 truncate text-sm font-semibold">{p.name || '—'}</span>
              <span className="font-display font-semibold" style={{ color: 'var(--c-accent)' }}>{p.score}</span>
            </div>
          ))}
          {top.length === 0 && <p className="text-sm text-slate-400">—</p>}
        </div>
        <button onClick={next} disabled={busy} className="btn-primary w-full">{idx + 1 < qs.length ? `${t('nextQuestion')} →` : `🏁 ${t('seePodium')}`}</button>
      </div>
    )
  }

  // ended
  const podium = [...players].sort((a, b) => b.score - a.score)
  return (
    <div className="space-y-3">
      {Header}
      <div className="card card-lux p-6 text-center">
        <div className="text-3xl">🏁</div>
        <h2 className="mt-1 font-display text-2xl font-semibold">{t('finalPodium')}</h2>
      </div>
      {podium.slice(0, 10).map((p, i) => (
        <div key={p.device_id} className="card flex items-center gap-3 p-3" style={i < 3 ? { boxShadow: 'inset 0 0 0 2px var(--c-accent)' } : undefined}>
          <span className="w-8 text-center font-display text-xl font-semibold">{medal(i)}</span>
          <span className="monogram grid h-10 w-10 shrink-0 place-items-center overflow-hidden text-sm">{p.photo ? <img src={p.photo} alt="" className="h-full w-full rounded-full object-cover" /> : initialsOf(p.name)}</span>
          <span className="min-w-0 flex-1 truncate font-semibold">{p.name || '—'}</span>
          <span className="font-display text-xl font-semibold" style={{ color: 'var(--c-accent)' }}>{p.score}</span>
        </div>
      ))}
      <button onClick={close} className="btn-primary w-full">{t('close')}</button>
    </div>
  )
}

// ----- Vue Élève (smartphone) ----------------------------------------------
function PlayerView({ session: initial, name, photo, t, onExit }) {
  const [session, setSession] = useState(initial)
  const [answered, setAnswered] = useState(null) // { index, choice, correct, points }
  const [myScore, setMyScore] = useState(0)
  const [rank, setRank] = useState(null)
  const id = initial.id
  const joinedRef = useRef(false)

  useEffect(() => {
    if (joinedRef.current) return
    joinedRef.current = true
    joinLive({ sessionId: id, name, photo }).catch(() => {})
  }, [id, name, photo])

  const refresh = useCallback(async () => {
    try {
      const [s, players] = await Promise.all([fetchLive(id), fetchPlayers(id)])
      if (s) setSession(s)
      const me = players.find((p) => p.device_id === deviceId())
      if (me) setMyScore(me.score || 0)
      setRank(players.findIndex((p) => p.device_id === deviceId()) + 1)
    } catch { /* */ }
  }, [id])
  useEffect(() => { refresh(); const iv = setInterval(refresh, 1800); return () => clearInterval(iv) }, [refresh])

  const idx = session.current_index || 0
  const q = (session.questions || [])[idx]
  useEffect(() => { setAnswered(null) }, [idx, session.phase])

  const pick = async (i) => {
    if (answered || !q) return
    const correct = i === q.answer
    let frac = 1
    if (session.q_started_at) { const el = (Date.now() - new Date(session.q_started_at).getTime()) / 1000; frac = Math.max(0, Math.min(1, (QT - el) / QT)) }
    const points = correct ? 100 + Math.round(400 * frac) : 0
    setAnswered({ index: idx, choice: i, correct, points })
    try { const r = await submitLiveAnswer({ sessionId: id, index: idx, choice: i, correct, addScore: points }); if (r?.score != null) setMyScore(r.score) } catch { /* */ }
  }

  const Header = (
    <div className="flex items-center justify-between gap-2">
      <span className="rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: '#e21b3c' }}>🔴 {t('liveMode')}</span>
      <span className="text-sm font-semibold">{myScore} <span className="text-xs font-normal text-slate-400">pts{rank ? ` · #${rank}` : ''}</span></span>
    </div>
  )

  if (session.phase === 'lobby') {
    return (
      <div className="space-y-3">
        {Header}
        <div className="card card-lux p-8 text-center">
          <div className="text-3xl">✅</div>
          <h2 className="mt-2 font-display text-xl font-semibold">{t('youAreIn')}</h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{t('waitHost')}</p>
          <p className="mt-3 font-semibold">{name}</p>
        </div>
      </div>
    )
  }
  if (session.phase === 'question' && q) {
    return (
      <div className="space-y-3">
        {Header}
        <QTimer startedAt={session.q_started_at} />
        <div className="card p-5 text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{t('question')} {idx + 1} / {(session.questions || []).length}</p>
          <h2 className="mt-2 font-display text-lg font-semibold leading-snug">{q.q}</h2>
        </div>
        {answered ? (
          <div className="card p-6 text-center">
            <div className="text-3xl">{answered.correct ? '✅' : '⌛'}</div>
            <p className="mt-2 font-semibold">{t('answerRecorded')}</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{t('waitOthers')}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-2.5">
            {q.choices.map((c, i) => (
              <button key={i} onClick={() => pick(i)} className="flex items-center gap-3 rounded-2xl px-5 py-4 text-left text-white transition active:scale-[0.98]" style={{ backgroundColor: CHOICE_COLORS[i % CHOICE_COLORS.length] }}>
                <span className="text-xl">{CHOICE_SHAPES[i % CHOICE_SHAPES.length]}</span><span className="font-semibold">{c}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    )
  }
  if (session.phase === 'reveal' && q) {
    const myAns = answered && answered.index === idx ? answered : null
    const good = myAns?.correct
    return (
      <div className="space-y-3">
        {Header}
        <div className={`card p-6 text-center ${myAns ? '' : 'opacity-90'}`}>
          <div className="text-4xl">{myAns ? (good ? '🎉' : '❌') : '⌛'}</div>
          <h2 className="mt-2 font-display text-xl font-semibold">{myAns ? (good ? t('correctAnswer') : t('wrongAnswer')) : t('noAnswerGiven')}</h2>
          {myAns && good && <p className="mt-1 text-sm text-emerald-600 dark:text-emerald-400">+{myAns.points} pts</p>}
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">✅ {q.choices[q.answer]}</p>
          {q.explain && <p className="mt-2 rounded-xl bg-slate-100 p-2.5 text-sm dark:bg-slate-800">💡 {q.explain}</p>}
          <p className="mt-3 font-display text-lg font-semibold">{myScore} pts{rank ? ` · #${rank}` : ''}</p>
        </div>
        <p className="text-center text-xs text-slate-400">{t('waitHost')}</p>
      </div>
    )
  }
  // ended
  return (
    <div className="space-y-3">
      {Header}
      <div className="card card-lux p-8 text-center">
        <div className="text-4xl">🏁</div>
        <h2 className="mt-2 font-display text-2xl font-semibold">{rank === 1 ? `🥇 ${t('youWon')}` : t('gameOver')}</h2>
        <p className="mt-2 font-display text-3xl font-bold" style={{ color: 'var(--c-accent)' }}>{myScore} pts</p>
        {rank ? <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{medal(rank - 1)} {t('yourRank')}</p> : null}
      </div>
      <button onClick={onExit} className="btn-ghost w-full">{t('close')}</button>
    </div>
  )
}

// Barre de temps indicative (repère visuel, l'hôte garde la main).
function QTimer({ startedAt }) {
  const [left, setLeft] = useState(QT)
  useEffect(() => {
    const tick = () => {
      if (!startedAt) { setLeft(QT); return }
      const el = (Date.now() - new Date(startedAt).getTime()) / 1000
      setLeft(Math.max(0, QT - el))
    }
    tick(); const iv = setInterval(tick, 250); return () => clearInterval(iv)
  }, [startedAt])
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
      <div className="h-full rounded-full transition-all duration-200 ease-linear" style={{ width: `${(left / QT) * 100}%`, backgroundColor: left > QT * 0.3 ? 'var(--c-accent)' : '#e21b3c' }} />
    </div>
  )
}
