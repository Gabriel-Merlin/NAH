import { useCallback, useEffect, useMemo, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useStore } from '../store.jsx'
import { useT } from '../i18n.js'
import { subjectsForTrack } from '../data/tracks.js'
import { buildQuiz, shuffle } from '../data/index.js'
import { deviceId } from '../leaderboard.js'
import KahootQuiz from '../games/KahootQuiz.jsx'
import {
  FRIENDS_READY, friendCode, normFriendCode, upsertMe,
  sendRequest, incoming, outgoing, respond, fetchFriends, removeFriend,
  createDuelInvite, getDuel, acceptDuelInvite, submitDuel, cancelDuel, declineDuel,
  incomingDuels, sentDuels, liveDuels, myTurnToPlay, duelHistory, duelOutcome,
} from '../friends.js'

const initialsOf = (name) => {
  const p = String(name || '').trim().split(/\s+/)
  return ((p[0]?.[0] || '') + (p[1]?.[0] || '')).toUpperCase() || '·'
}
const medal = (i) => (i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i + 1}`)
const me = deviceId()

function resultFromDuel(d) {
  const o = duelOutcome(d)
  const total = (d.questions || []).length
  return { result: o.result, mine: o.mine, theirs: o.theirs, myCorrect: o.iAmA ? d.a_total : d.b_total, theirCorrect: o.iAmA ? d.b_total : d.a_total, total, opp: o.opp, label: d.chapter_label }
}

export default function Friends() {
  const { state, derived } = useStore()
  const t = useT()
  if (!state.track) return <Navigate to="/" replace />

  const myName = `${state.profile?.firstName || ''} ${state.profile?.lastName || ''}`.trim() || 'Élève'
  const code = friendCode()
  const subjects = useMemo(() => subjectsForTrack(state.track).filter((s) => !s.comingSoon && (s.chapters || []).length), [state.track])
  const allThemes = useMemo(() => {
    const out = []
    for (const s of subjects) for (const th of s.chapters || []) out.push({ id: th.id, label: `${s.short || s.name} · ${th.short || th.name}` })
    return out
  }, [subjects])

  const [view, setView] = useState('amis')
  const [status, setStatus] = useState('loading')
  const [friends, setFriends] = useState([])
  const [reqs, setReqs] = useState([])
  const [sent, setSent] = useState([])
  const [duelInv, setDuelInv] = useState([]) // invitations reçues (pending)
  const [duelSentInv, setDuelSentInv] = useState([]) // invitations envoyées (pending)
  const [duelLive, setDuelLive] = useState([]) // duels acceptés
  const [history, setHistory] = useState([])
  const [input, setInput] = useState('')
  const [msg, setMsg] = useState(null)
  const [busy, setBusy] = useState(false)
  const [copied, setCopied] = useState(false)
  const [flow, setFlow] = useState(null)
  const [sel, setSel] = useState(() => new Set())

  const load = useCallback(async () => {
    if (!FRIENDS_READY) { setStatus('error'); return }
    setStatus('loading')
    try {
      await upsertMe({ name: myName, photo: state.profile?.photo || '', xp: state.xp, streak: state.streak?.count, coursesWeek: derived.weeklyCourses })
      const [f, i, o, di, ds, dl, h] = await Promise.all([fetchFriends(), incoming(), outgoing(), incomingDuels(), sentDuels(), liveDuels(), duelHistory()])
      setFriends(f.sort((a, b) => (b.xp || 0) - (a.xp || 0)))
      setReqs(i); setSent(o); setDuelInv(di); setDuelSentInv(ds); setDuelLive(dl); setHistory(h); setStatus('ok')
    } catch { setStatus('error') }
  }, [myName, state.profile?.photo, state.xp, state.streak?.count, derived.weeklyCourses])

  useEffect(() => { load() }, [load])

  // Polling pendant l'attente (acceptation ou score de l'adversaire).
  useEffect(() => {
    if (flow?.step !== 'waiting' && flow?.step !== 'waitingResult') return
    let alive = true
    const tick = async () => {
      try {
        const d = await getDuel(flow.duelId)
        if (!alive) return
        if (flow.step === 'waiting') {
          if (!d) { setMsg({ kind: 'err', text: t('duelDeclinedByOther') }); setFlow(null); load() }
          else if (d.status === 'live') setFlow({ step: 'play', duel: d, side: d.a_device === me ? 'a' : 'b' })
        } else if (flow.step === 'waitingResult') {
          if (!d) { setFlow(null); load() }
          else if (d.status === 'done') setFlow({ step: 'result', ...resultFromDuel(d) })
        }
      } catch { /* réseau : on retentera */ }
    }
    tick(); const id = setInterval(tick, 2500)
    return () => { alive = false; clearInterval(id) }
  }, [flow?.step, flow?.duelId]) // eslint-disable-line

  const record = useMemo(() => {
    const r = {}
    for (const d of history) { const o = duelOutcome(d); const other = o.iAmA ? d.b_device : d.a_device; r[other] ||= { w: 0, l: 0 }; if (o.result === 'win') r[other].w++; else if (o.result === 'loss') r[other].l++ }
    return r
  }, [history])

  // ---- Amis ----
  const add = async () => {
    const c = normFriendCode(input)
    if (c.length < 4 || busy) return
    setBusy(true); setMsg(null)
    try {
      const r = await sendRequest(c, myName)
      const M = { sent: { kind: 'ok', text: t('friendReqSent') }, self: { kind: 'err', text: t('friendSelf') }, notfound: { kind: 'err', text: t('friendNotFound') }, exists: { kind: 'ok', text: t('friendReqPending') }, accepted: { kind: 'ok', text: t('friendAlready') } }
      setMsg(M[r] || null); if (r === 'sent') { setInput(''); load() }
    } catch { setMsg({ kind: 'err', text: t('rankOffline') }) }
    setBusy(false)
  }
  const answer = async (id, ok) => { setBusy(true); try { await respond(id, ok); await load() } catch { /* */ } setBusy(false) }
  const drop = async (dev) => { if (!confirm(t('friendRemoveConfirm'))) return; setBusy(true); try { await removeFriend(dev); await load() } catch { /* */ } setBusy(false) }
  const copy = () => { try { navigator.clipboard?.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 1500) } catch { /* */ } }

  // ---- Duels (synchrone) ----
  const openSetup = (friend) => { setView('duels'); setSel(new Set()); setMsg(null); setFlow({ step: 'setup', friend }) }
  const toggleTheme = (id) => setSel((s) => { const n = new Set(s); n.has(id) ? n.delete(id) : n.add(id); return n })
  const buildPool = (ids) => {
    const seen = new Set(); const pool = []
    for (const id of ids) for (const qq of buildQuiz(id) || []) { const k = (qq.q || '').toLowerCase().trim(); if (k && !seen.has(k)) { seen.add(k); pool.push(qq) } }
    return shuffle(pool).slice(0, 10)
  }
  const invite = async (friend, ids, label) => {
    const pool = buildPool(ids)
    if (pool.length < 3) { setMsg({ kind: 'err', text: t('duelTooFew') }); return }
    setBusy(true); setMsg(null)
    try {
      const id = await createDuelInvite({ friendDevice: friend.device_id, friendName: friend.name, label, questions: pool, myName })
      if (id) setFlow({ step: 'waiting', duelId: id, opp: friend.name, label }); else setMsg({ kind: 'err', text: t('rankOffline') })
      load()
    } catch { setMsg({ kind: 'err', text: t('rankOffline') }) }
    setBusy(false)
  }
  const launch = (friend) => {
    const ids = [...sel]
    if (!ids.length) { setMsg({ kind: 'err', text: t('duelPickTheme') }); return }
    const selThemes = allThemes.filter((x) => sel.has(x.id))
    invite(friend, ids, selThemes.length === 1 ? selThemes[0].label : `${selThemes.length} ${t('chaptersWord')}`)
  }
  const randomDuel = (friend) => {
    for (let tries = 0; tries < 14; tries++) {
      const th = allThemes[Math.floor(Math.random() * allThemes.length)]
      if (th && buildPool([th.id]).length >= 3) { invite(friend, [th.id], th.label); return }
    }
    setMsg({ kind: 'err', text: t('duelTooFew') })
  }
  const acceptInvite = async (d) => { setBusy(true); try { await acceptDuelInvite(d.id); setFlow({ step: 'play', duel: { ...d, status: 'live' }, side: 'b' }) } catch { setMsg({ kind: 'err', text: t('rankOffline') }) } setBusy(false) }
  const playLive = (d) => setFlow({ step: 'play', duel: d, side: d.a_device === me ? 'a' : 'b' })
  const onDuelDone = async ({ points, correct }) => {
    const d = flow.duel; setBusy(true)
    try {
      const fresh = await submitDuel(d, points, correct)
      if (fresh && fresh.status === 'done') setFlow({ step: 'result', ...resultFromDuel(fresh) })
      else setFlow({ step: 'waitingResult', duelId: d.id })
      load()
    } catch { setFlow(null); setMsg({ kind: 'err', text: t('rankOffline') }) }
    setBusy(false)
  }
  const remove = async (id) => { setBusy(true); try { await cancelDuel(id); if (flow?.duelId === id) setFlow(null); await load() } catch { /* */ } setBusy(false) }

  const liveToPlay = duelLive.filter((d) => myTurnToPlay(d))
  const liveWaiting = duelLive.filter((d) => !myTurnToPlay(d))

  // ===== Jeu =====
  if (flow?.step === 'play') {
    return (
      <div className="animate-lux space-y-4">
        <header className="text-center">
          <p className="kicker">⚔️ {t('duel')} · {t('duelVs')} {(flow.side === 'a' ? flow.duel.b_name : flow.duel.a_name) || 'Élève'}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{flow.duel.chapter_label}</p>
        </header>
        <KahootQuiz questions={flow.duel.questions} onDone={onDuelDone} />
        <button onClick={() => setFlow(null)} className="btn-ghost !min-h-0 !py-2 text-sm">← {t('quit')}</button>
      </div>
    )
  }
  // ===== Invitation reçue : accepter / refuser =====
  if (flow?.step === 'confirm') {
    const d = flow.duel
    return (
      <div className="animate-lux">
        <div className="card card-lux p-6 text-center">
          <div className="text-5xl">⚔️</div>
          <h1 className="mt-2 font-display text-xl font-bold">{d.a_name || 'Élève'} {t('duelChallengesYou')}</h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{d.chapter_label} · {(d.questions || []).length} {t('questionsShort')}</p>
          <p className="mt-2 text-sm">{t('duelConfirmHint')}</p>
          <div className="mt-5 flex justify-center gap-2">
            <button onClick={() => acceptInvite(d)} disabled={busy} className="btn-primary" style={{ backgroundColor: '#3f9d6d' }}>▶ {t('duelAcceptPlay')}</button>
            <button onClick={() => remove(d.id)} disabled={busy} className="btn-ghost">{t('duelDecline')}</button>
          </div>
        </div>
      </div>
    )
  }
  // ===== Attente (acceptation ou score adverse) =====
  if (flow?.step === 'waiting' || flow?.step === 'waitingResult') {
    const isAccept = flow.step === 'waiting'
    return (
      <div className="animate-lux">
        <div className="card card-lux p-8 text-center">
          <div className="mx-auto mb-3 h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[color:var(--c-accent)]" />
          <h1 className="font-display text-xl font-semibold">{isAccept ? t('duelWaitAccept') : t('duelWaitScore')}</h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {isAccept ? t('duelWaitAcceptHint').replace('{opp}', flow.opp || 'ton ami') : t('duelWaitScoreHint')}
          </p>
          {isAccept && <button onClick={() => remove(flow.duelId)} disabled={busy} className="btn-ghost mt-5">{t('duelCancel')}</button>}
          {!isAccept && <button onClick={() => setFlow(null)} className="btn-ghost mt-5">{t('later')}</button>}
        </div>
      </div>
    )
  }
  // ===== Résultat =====
  if (flow?.step === 'result') {
    const win = flow.result === 'win', draw = flow.result === 'draw'
    return (
      <div className="animate-lux">
        <div className="card card-lux p-6 text-center">
          <div className="text-5xl">{win ? '🏆' : draw ? '🤝' : '💪'}</div>
          <h1 className="mt-2 font-display text-2xl font-bold">{win ? t('duelWin') : draw ? t('duelDraw') : t('duelLoss')}</h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{flow.label}</p>
          <div className="mt-4 flex items-center justify-center gap-6">
            <div><p className="text-xs text-slate-400">{t('you')}</p><p className="font-display text-4xl font-extrabold" style={{ color: 'var(--c-accent)' }}>{flow.mine}</p><p className="text-xs text-slate-400">{flow.myCorrect}/{flow.total}</p></div>
            <span className="font-display text-2xl text-slate-400">—</span>
            <div><p className="text-xs text-slate-400">{flow.opp || 'Élève'}</p><p className="font-display text-4xl font-extrabold">{flow.theirs}</p><p className="text-xs text-slate-400">{flow.theirCorrect}/{flow.total}</p></div>
          </div>
          <button onClick={() => { setFlow(null); setView('duels') }} className="btn-primary mt-6" style={{ backgroundColor: 'var(--c-accent)' }}>{t('done')}</button>
        </div>
      </div>
    )
  }

  const Tabs = () => (
    <div className="flex gap-2">
      {[['amis', `🤝 ${t('friends')}`], ['duels', `⚔️ ${t('duels')}`]].map(([k, lbl]) => {
        const badge = k === 'duels' ? duelInv.length + liveToPlay.length : 0
        return (
          <button key={k} onClick={() => setView(k)} className={`flex-1 rounded-xl px-3 py-2 text-sm font-semibold transition ${view === k ? 'text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'}`} style={view === k ? { backgroundColor: 'var(--c-accent)' } : undefined}>
            {lbl}{badge > 0 ? ` (${badge})` : ''}
          </button>
        )
      })}
    </div>
  )

  return (
    <div className="animate-lux space-y-5">
      <header className="text-center">
        <p className="kicker">🤝 {t('friends')}</p>
        <h1 className="mt-1 font-display text-[1.9rem] font-medium leading-tight">{t('friends')}</h1>
        <span className="mx-auto mt-3 block h-px w-24 rounded-full" style={{ background: 'linear-gradient(90deg,transparent,#c8a24e,transparent)' }} />
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{t('friendsSub')}</p>
      </header>
      <Tabs />

      {status === 'error' && <div className="card p-6 text-center text-sm text-slate-500 dark:text-slate-400">{t('rankOffline')}</div>}

      {view === 'amis' && (
        <>
          <section className="card card-lux p-5 text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{t('myFriendCode')}</p>
            <p className="my-1 font-display text-4xl font-extrabold tracking-[0.2em]" style={{ color: 'var(--c-accent)' }}>{code}</p>
            <button onClick={copy} className="btn-ghost !min-h-0 !py-2 text-sm">{copied ? `✓ ${t('copied')}` : `📋 ${t('copyCode')}`}</button>
            <p className="mt-2 text-xs text-slate-400">{t('friendCodeHint')}</p>
          </section>

          <section className="card p-5">
            <h2 className="mb-2 font-display text-lg font-semibold">{t('addFriend')}</h2>
            <div className="flex gap-2">
              <input value={input} onChange={(e) => setInput(normFriendCode(e.target.value))} onKeyDown={(e) => e.key === 'Enter' && add()} placeholder={t('friendCodePlaceholder')} maxLength={6}
                className="flex-1 rounded-xl border border-slate-200 bg-white px-3 py-2.5 font-display text-lg font-semibold uppercase tracking-widest outline-none focus:border-[color:var(--c-accent)] dark:border-slate-700 dark:bg-slate-800" aria-label={t('addFriend')} />
              <button onClick={add} disabled={busy || normFriendCode(input).length < 4} className="btn-primary shrink-0 disabled:opacity-40" style={{ backgroundColor: 'var(--c-accent)' }}>{t('send')}</button>
            </div>
            {msg && <p className={`mt-2 text-sm ${msg.kind === 'ok' ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>{msg.text}</p>}
          </section>

          {reqs.length > 0 && (
            <section>
              <h2 className="mb-2 px-1 font-display text-lg font-semibold">{t('friendRequests')} <span className="text-sm font-normal text-slate-400">({reqs.length})</span></h2>
              <div className="space-y-2">
                {reqs.map((r) => (
                  <div key={r.id} className="card flex items-center gap-3 p-3">
                    <span className="monogram grid h-9 w-9 shrink-0 place-items-center text-sm" aria-hidden>{initialsOf(r.from_name)}</span>
                    <span className="min-w-0 flex-1 truncate font-semibold">{r.from_name || 'Élève'} <span className="text-xs font-normal text-slate-400">· {r.from_code}</span></span>
                    <button onClick={() => answer(r.id, true)} disabled={busy} className="shrink-0 rounded-lg px-3 py-1.5 text-sm font-semibold text-white" style={{ backgroundColor: '#3f9d6d' }}>✓ {t('accept')}</button>
                    <button onClick={() => answer(r.id, false)} disabled={busy} className="shrink-0 rounded-lg px-3 py-1.5 text-sm font-semibold text-slate-500 ring-1 ring-slate-200 dark:ring-slate-700">✕</button>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section>
            <div className="mb-2 flex items-end justify-between px-1">
              <h2 className="font-display text-lg font-semibold">{t('myFriends')}</h2>
              {sent.length > 0 && <span className="text-xs text-slate-400">{sent.length} {t('friendReqWaiting')}</span>}
            </div>
            {status === 'loading' && <div className="card p-6 text-center text-sm text-slate-500 dark:text-slate-400">…</div>}
            {status === 'ok' && friends.length === 0 && <div className="card p-6 text-center text-sm text-slate-500 dark:text-slate-400">{t('noFriendsYet')}</div>}
            <div className="space-y-2">
              {friends.map((f, i) => {
                const rec = record[f.device_id]
                return (
                  <div key={f.device_id} className="card flex items-center gap-3 p-3">
                    <span className="w-6 shrink-0 text-center font-display text-lg font-semibold" style={{ color: i < 3 ? undefined : 'var(--c-accent)' }}>{medal(i)}</span>
                    <span className="monogram grid h-10 w-10 shrink-0 place-items-center overflow-hidden text-sm">
                      {f.photo ? <img src={f.photo} alt="" className="h-full w-full rounded-full object-cover" /> : initialsOf(f.name)}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-semibold">{f.name || 'Élève'}</span>
                      <span className="block text-xs text-slate-400">🔥 {f.streak || 0} · {f.xp || 0} XP{rec ? ` · ⚔️ ${rec.w}${t('duelWinShort')}-${rec.l}${t('duelLossShort')}` : ''}</span>
                    </span>
                    <button onClick={() => openSetup(f)} disabled={busy} className="shrink-0 rounded-lg px-3 py-1.5 text-sm font-semibold text-white" style={{ backgroundColor: 'var(--c-accent)' }}>⚔️ {t('challenge')}</button>
                    <button onClick={() => drop(f.device_id)} disabled={busy} className="shrink-0 text-slate-300 hover:text-rose-500" title={t('friendRemove')} aria-label={t('friendRemove')}>✕</button>
                  </div>
                )
              })}
            </div>
          </section>
          <p className="pt-1 text-center text-xs text-slate-400">{t('friendsPrivacy')}</p>
        </>
      )}

      {view === 'duels' && (
        <>
          {/* À jouer maintenant (duels acceptés) */}
          {liveToPlay.length > 0 && (
            <section>
              <h2 className="mb-2 px-1 font-display text-lg font-semibold">🔴 {t('duelPlayNow')}</h2>
              <div className="space-y-2">
                {liveToPlay.map((d) => (
                  <button key={d.id} onClick={() => playLive(d)} className="card flex w-full items-center gap-3 p-3 text-left transition hover:-translate-y-0.5 hover:shadow-md" style={{ boxShadow: 'inset 0 0 0 2px #3f9d6d' }}>
                    <span className="text-2xl" aria-hidden>▶️</span>
                    <span className="min-w-0 flex-1"><span className="block truncate font-semibold">{t('duelVs')} {(d.a_device === me ? d.b_name : d.a_name) || 'Élève'}</span><span className="block text-xs text-slate-400">{d.chapter_label} · {t('duelReadyPlay')}</span></span>
                    <span className="shrink-0 rounded-lg px-3 py-1.5 text-sm font-semibold text-white" style={{ backgroundColor: '#3f9d6d' }}>{t('play')}</span>
                  </button>
                ))}
              </div>
            </section>
          )}

          {/* Invitations reçues */}
          {duelInv.length > 0 && (
            <section>
              <h2 className="mb-2 px-1 font-display text-lg font-semibold">{t('duelsReceived')} <span className="text-sm font-normal text-slate-400">({duelInv.length})</span></h2>
              <div className="space-y-2">
                {duelInv.map((d) => (
                  <div key={d.id} className="card flex items-center gap-3 p-3">
                    <span className="text-2xl" aria-hidden>⚔️</span>
                    <span className="min-w-0 flex-1"><span className="block truncate font-semibold">{d.a_name || 'Élève'} {t('duelChallengesYou')}</span><span className="block text-xs text-slate-400">{d.chapter_label}</span></span>
                    <button onClick={() => acceptInvite(d)} disabled={busy} className="shrink-0 rounded-lg px-3 py-1.5 text-sm font-semibold text-white" style={{ backgroundColor: '#3f9d6d' }}>▶ {t('duelAccept')}</button>
                    <button onClick={() => remove(d.id)} disabled={busy} className="shrink-0 text-slate-300 hover:text-rose-500" aria-label={t('duelDecline')}>✕</button>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Nouveau duel */}
          <section className="card card-lux p-5">
            <h2 className="mb-1 font-display text-lg font-semibold">⚔️ {t('newDuel')}</h2>
            <p className="mb-3 text-xs text-slate-500 dark:text-slate-400">{t('duelKahootHint')}</p>
            {friends.length === 0 ? (
              <p className="text-sm text-slate-500 dark:text-slate-400">{t('duelNeedFriend')}</p>
            ) : !flow || flow.step !== 'setup' ? (
              <div className="grid gap-2 sm:grid-cols-2">
                {friends.map((f) => (
                  <button key={f.device_id} onClick={() => openSetup(f)} className="flex items-center gap-2 rounded-xl bg-slate-100 px-3 py-2.5 text-left text-sm font-semibold hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700">
                    <span className="monogram grid h-7 w-7 shrink-0 place-items-center text-xs" aria-hidden>{initialsOf(f.name)}</span>
                    <span className="min-w-0 flex-1 truncate">{f.name || 'Élève'}</span>
                    <span aria-hidden>⚔️</span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm">{t('duelWith')} <b>{flow.friend.name || 'Élève'}</b></p>
                  <button onClick={() => randomDuel(flow.friend)} disabled={busy} className="rounded-full px-3 py-1.5 text-xs font-semibold text-white" style={{ backgroundColor: 'var(--c-accent)' }}>🎲 {t('duelRandom')}</button>
                </div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{t('duelPickThemes')}</p>
                <div className="max-h-64 space-y-3 overflow-y-auto rounded-xl bg-slate-50 p-3 dark:bg-slate-800/40">
                  {subjects.map((s) => (
                    <div key={s.id}>
                      <p className="mb-1 text-xs font-semibold text-slate-500 dark:text-slate-400">{s.icon} {s.short || s.name}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {(s.chapters || []).map((th) => {
                          const on = sel.has(th.id)
                          return (
                            <button key={th.id} onClick={() => toggleTheme(th.id)} className={`rounded-full px-2.5 py-1 text-xs font-semibold transition ${on ? 'text-white' : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700'}`} style={on ? { backgroundColor: 'var(--c-accent)' } : undefined}>
                              {on ? '✓ ' : ''}{th.short || th.name}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => launch(flow.friend)} disabled={busy || sel.size === 0} className="btn-primary flex-1 disabled:opacity-40" style={{ backgroundColor: 'var(--c-accent)' }}>📨 {t('duelInviteBtn')} {sel.size > 0 ? `(${sel.size})` : ''}</button>
                  <button onClick={() => { setFlow(null); setSel(new Set()) }} className="btn-ghost">{t('cancel')}</button>
                </div>
                {msg && msg.kind === 'err' && <p className="text-sm text-rose-600 dark:text-rose-400">{msg.text}</p>}
              </div>
            )}
          </section>

          {/* Invitations envoyées (annulables) */}
          {duelSentInv.length > 0 && (
            <section>
              <h2 className="mb-2 px-1 font-display text-lg font-semibold">{t('duelWaitAccept')}</h2>
              <div className="space-y-2">
                {duelSentInv.map((d) => (
                  <div key={d.id} className="card flex items-center gap-3 p-3 text-sm">
                    <span className="text-xl" aria-hidden>⌛</span>
                    <span className="min-w-0 flex-1"><span className="block truncate font-semibold">{d.b_name || 'Élève'}</span><span className="block text-xs text-slate-400">{d.chapter_label}</span></span>
                    <button onClick={() => remove(d.id)} disabled={busy} className="shrink-0 rounded-lg px-3 py-1 text-xs font-semibold text-rose-500 ring-1 ring-rose-200 hover:bg-rose-50 dark:ring-rose-800 dark:hover:bg-rose-950/40">{t('duelCancel')}</button>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* En attente du score de l'adversaire */}
          {liveWaiting.length > 0 && (
            <section>
              <h2 className="mb-2 px-1 font-display text-lg font-semibold">{t('duelWaitScore')}</h2>
              <div className="space-y-2">
                {liveWaiting.map((d) => (
                  <div key={d.id} className="card flex items-center gap-3 p-3 text-sm">
                    <span className="text-xl" aria-hidden>⏳</span>
                    <span className="min-w-0 flex-1"><span className="block truncate font-semibold">{(d.a_device === me ? d.b_name : d.a_name) || 'Élève'}</span><span className="block text-xs text-slate-400">{d.chapter_label} · {t('duelWaitScoreHint')}</span></span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Historique */}
          <section>
            <h2 className="mb-2 px-1 font-display text-lg font-semibold">{t('duelHistory')}</h2>
            {status === 'ok' && history.length === 0 && <div className="card p-6 text-center text-sm text-slate-500 dark:text-slate-400">{t('noDuelsYet')}</div>}
            <div className="space-y-2">
              {history.map((d) => {
                const o = duelOutcome(d)
                const badge = o.result === 'win' ? { t: t('duelWinShort'), c: '#3f9d6d' } : o.result === 'loss' ? { t: t('duelLossShort'), c: '#e11d48' } : { t: t('duelDrawShort'), c: '#9a8330' }
                return (
                  <div key={d.id} className="card flex items-center gap-3 p-3 text-sm">
                    <span className="shrink-0 rounded-md px-2 py-0.5 text-xs font-bold text-white" style={{ backgroundColor: badge.c }}>{badge.t}</span>
                    <span className="min-w-0 flex-1"><span className="block truncate font-semibold">{t('duelVs')} {o.opp || 'Élève'}</span><span className="block text-xs text-slate-400">{d.chapter_label}</span></span>
                    <span className="shrink-0 font-display font-semibold tabular-nums">{o.mine} — {o.theirs}</span>
                  </div>
                )
              })}
            </div>
          </section>
        </>
      )}
    </div>
  )
}
