import { useCallback, useEffect, useMemo, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useStore } from '../store.jsx'
import { useT } from '../i18n.js'
import { subjectsForTrack } from '../data/tracks.js'
import { buildQuiz } from '../data/index.js'
import DuelQuiz from '../games/DuelQuiz.jsx'
import {
  FRIENDS_READY, friendCode, normFriendCode, upsertMe,
  sendRequest, incoming, outgoing, respond, fetchFriends, removeFriend,
  createDuel, incomingDuels, sentDuels, finishDuel, duelHistory, duelOutcome,
} from '../friends.js'

const initialsOf = (name) => {
  const p = String(name || '').trim().split(/\s+/)
  return ((p[0]?.[0] || '') + (p[1]?.[0] || '')).toUpperCase() || '·'
}
const medal = (i) => (i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i + 1}`)

export default function Friends() {
  const { state, derived } = useStore()
  const t = useT()
  if (!state.track) return <Navigate to="/" replace />

  const myName = `${state.profile?.firstName || ''} ${state.profile?.lastName || ''}`.trim() || 'Élève'
  const code = friendCode()
  const subjects = useMemo(() => subjectsForTrack(state.track).filter((s) => !s.comingSoon && (s.chapters || []).length), [state.track])

  const [view, setView] = useState('amis')
  const [status, setStatus] = useState('loading')
  const [friends, setFriends] = useState([])
  const [reqs, setReqs] = useState([])
  const [sent, setSent] = useState([])
  const [duelsIn, setDuelsIn] = useState([])
  const [duelsSent, setDuelsSent] = useState([])
  const [history, setHistory] = useState([])
  const [input, setInput] = useState('')
  const [msg, setMsg] = useState(null)
  const [busy, setBusy] = useState(false)
  const [copied, setCopied] = useState(false)
  const [flow, setFlow] = useState(null) // duel flow (voir plus bas)

  const load = useCallback(async () => {
    if (!FRIENDS_READY) { setStatus('error'); return }
    setStatus('loading')
    try {
      await upsertMe({ name: myName, photo: state.profile?.photo || '', xp: state.xp, streak: state.streak?.count, coursesWeek: derived.weeklyCourses })
      const [f, i, o, di, ds, h] = await Promise.all([fetchFriends(), incoming(), outgoing(), incomingDuels(), sentDuels(), duelHistory()])
      setFriends(f.sort((a, b) => (b.xp || 0) - (a.xp || 0)))
      setReqs(i); setSent(o); setDuelsIn(di); setDuelsSent(ds); setHistory(h); setStatus('ok')
    } catch { setStatus('error') }
  }, [myName, state.profile?.photo, state.xp, state.streak?.count, derived.weeklyCourses])

  useEffect(() => { load() }, [load])

  // Bilan victoires/défaites par appareil-ami.
  const record = useMemo(() => {
    const r = {}
    for (const d of history) {
      const o = duelOutcome(d)
      const other = o.iAmA ? d.b_device : d.a_device
      r[other] ||= { w: 0, l: 0, d: 0 }
      if (o.result === 'win') r[other].w++; else if (o.result === 'loss') r[other].l++; else r[other].d++
    }
    return r
  }, [history])

  // ---- Amis : ajout / demandes ----
  const add = async () => {
    const c = normFriendCode(input)
    if (c.length < 4 || busy) return
    setBusy(true); setMsg(null)
    try {
      const r = await sendRequest(c, myName)
      const M = {
        sent: { kind: 'ok', text: t('friendReqSent') }, self: { kind: 'err', text: t('friendSelf') },
        notfound: { kind: 'err', text: t('friendNotFound') }, exists: { kind: 'ok', text: t('friendReqPending') },
        accepted: { kind: 'ok', text: t('friendAlready') },
      }
      setMsg(M[r] || null)
      if (r === 'sent') { setInput(''); load() }
    } catch { setMsg({ kind: 'err', text: t('rankOffline') }) }
    setBusy(false)
  }
  const answer = async (id, ok) => { setBusy(true); try { await respond(id, ok); await load() } catch { /* */ } setBusy(false) }
  const drop = async (dev) => { if (!confirm(t('friendRemoveConfirm'))) return; setBusy(true); try { await removeFriend(dev); await load() } catch { /* */ } setBusy(false) }
  const copy = () => { try { navigator.clipboard?.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 1500) } catch { /* */ } }

  // ---- Duels ----
  const startDuel = (friend) => { setView('duels'); setFlow({ step: 'setup', friend, subjectId: subjects[0]?.id || '' }) }
  const beginPlay = (friend, themeId, label) => {
    const questions = buildQuiz(themeId)
    if (!questions || questions.length < 3) { setMsg({ kind: 'err', text: t('duelTooFew') }); return }
    setMsg(null); setFlow({ step: 'play', friend, themeId, label, questions })
  }
  const randomDuel = (friend) => {
    // Cherche un thème avec assez de questions, au hasard.
    for (let tries = 0; tries < 12; tries++) {
      const s = subjects[Math.floor(Math.random() * subjects.length)]
      const th = s?.chapters?.[Math.floor(Math.random() * (s.chapters.length || 1))]
      if (!th) continue
      const qs = buildQuiz(th.id)
      if (qs && qs.length >= 3) { setFlow({ step: 'play', friend, themeId: th.id, label: `${s.short || s.name} · ${th.short || th.name}`, questions: qs }); return }
    }
    setMsg({ kind: 'err', text: t('duelTooFew') })
  }
  const onPlayDone = async ({ score, total }) => {
    setBusy(true)
    try {
      await createDuel({ friendDevice: flow.friend.device_id, friendName: flow.friend.name, themeId: flow.themeId, label: flow.label, questions: flow.questions, score, total, myName })
      setFlow({ step: 'sent', label: flow.label, score, total, opp: flow.friend.name })
      load()
    } catch { setFlow(null); setMsg({ kind: 'err', text: t('rankOffline') }) }
    setBusy(false)
  }
  const onAnswerDone = async ({ score, total }) => {
    const d = flow.duel
    setBusy(true)
    try {
      await finishDuel(d.id, score, total)
      const mine = score, theirs = d.a_score
      const result = mine > theirs ? 'win' : mine < theirs ? 'loss' : 'draw'
      setFlow({ step: 'result', result, mine, total, theirs, theirTotal: d.a_total, opp: d.a_name, label: d.chapter_label })
      load()
    } catch { setFlow(null); setMsg({ kind: 'err', text: t('rankOffline') }) }
    setBusy(false)
  }

  // ===== Écran de jeu (duel en cours) =====
  if (flow?.step === 'play' || flow?.step === 'answer') {
    const opp = flow.step === 'play' ? flow.friend.name : flow.duel.a_name
    const label = flow.step === 'play' ? flow.label : flow.duel.chapter_label
    const questions = flow.step === 'play' ? flow.questions : flow.duel.questions
    return (
      <div className="animate-lux space-y-4">
        <header className="text-center">
          <p className="kicker">⚔️ {t('duel')}</p>
          <h1 className="mt-1 font-display text-xl font-medium">{t('duelVs')} {opp || 'Élève'}</h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{label}</p>
        </header>
        <DuelQuiz questions={questions} onDone={flow.step === 'play' ? onPlayDone : onAnswerDone} />
        <button onClick={() => setFlow(null)} className="btn-ghost !min-h-0 !py-2 text-sm">← {t('quit')}</button>
      </div>
    )
  }
  // ===== Écran résultat / défi envoyé =====
  if (flow?.step === 'sent' || flow?.step === 'result') {
    const win = flow.result === 'win', draw = flow.result === 'draw'
    return (
      <div className="animate-lux space-y-4">
        <div className="card card-lux p-6 text-center">
          {flow.step === 'sent' ? (
            <>
              <div className="text-5xl">📨</div>
              <h1 className="mt-2 font-display text-xl font-semibold">{t('duelSent')}</h1>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{t('duelSentHint').replace('{opp}', flow.opp || 'ton ami')}</p>
              <p className="mt-2 font-display text-lg" style={{ color: 'var(--c-accent)' }}>{t('yourScore')} : {flow.score}/{flow.total}</p>
            </>
          ) : (
            <>
              <div className="text-5xl">{win ? '🏆' : draw ? '🤝' : '💪'}</div>
              <h1 className="mt-2 font-display text-2xl font-bold">{win ? t('duelWin') : draw ? t('duelDraw') : t('duelLoss')}</h1>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{flow.label}</p>
              <div className="mt-3 flex items-center justify-center gap-6">
                <div><p className="text-xs text-slate-400">{t('you')}</p><p className="font-display text-3xl font-bold" style={{ color: 'var(--c-accent)' }}>{flow.mine}</p></div>
                <span className="font-display text-xl text-slate-400">—</span>
                <div><p className="text-xs text-slate-400">{flow.opp || 'Élève'}</p><p className="font-display text-3xl font-bold">{flow.theirs}</p></div>
              </div>
            </>
          )}
          <button onClick={() => { setFlow(null); setView('duels') }} className="btn-primary mt-5" style={{ backgroundColor: 'var(--c-accent)' }}>{t('done')}</button>
        </div>
      </div>
    )
  }

  const Tabs = () => (
    <div className="flex gap-2">
      {[['amis', `🤝 ${t('friends')}`], ['duels', `⚔️ ${t('duels')}`]].map(([k, lbl]) => (
        <button key={k} onClick={() => setView(k)} className={`flex-1 rounded-xl px-3 py-2 text-sm font-semibold transition ${view === k ? 'text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'}`} style={view === k ? { backgroundColor: 'var(--c-accent)' } : undefined}>
          {lbl}{k === 'duels' && duelsIn.length > 0 ? ` (${duelsIn.length})` : ''}
        </button>
      ))}
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
                      <span className="block text-xs text-slate-400">🔥 {f.streak || 0} · {f.xp || 0} XP{rec ? ` · ⚔️ ${rec.w}V-${rec.l}D` : ''}</span>
                    </span>
                    <button onClick={() => startDuel(f)} disabled={busy} className="shrink-0 rounded-lg px-3 py-1.5 text-sm font-semibold text-white" style={{ backgroundColor: 'var(--c-accent)' }}>⚔️ {t('challenge')}</button>
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
          {/* Défis reçus */}
          {duelsIn.length > 0 && (
            <section>
              <h2 className="mb-2 px-1 font-display text-lg font-semibold">{t('duelsReceived')} <span className="text-sm font-normal text-slate-400">({duelsIn.length})</span></h2>
              <div className="space-y-2">
                {duelsIn.map((d) => (
                  <button key={d.id} onClick={() => setFlow({ step: 'answer', duel: d })} className="card flex w-full items-center gap-3 p-3 text-left transition hover:-translate-y-0.5 hover:shadow-md">
                    <span className="text-2xl" aria-hidden>⚔️</span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-semibold">{d.a_name || 'Élève'} {t('duelChallengesYou')}</span>
                      <span className="block text-xs text-slate-400">{d.chapter_label} · {t('theirScore')} {d.a_score}/{d.a_total}</span>
                    </span>
                    <span className="shrink-0 rounded-lg px-3 py-1.5 text-sm font-semibold text-white" style={{ backgroundColor: '#3f9d6d' }}>{t('duelAccept')}</span>
                  </button>
                ))}
              </div>
            </section>
          )}

          {/* Nouveau duel */}
          <section className="card card-lux p-5">
            <h2 className="mb-3 font-display text-lg font-semibold">⚔️ {t('newDuel')}</h2>
            {friends.length === 0 ? (
              <p className="text-sm text-slate-500 dark:text-slate-400">{t('duelNeedFriend')}</p>
            ) : !flow || flow.step !== 'setup' ? (
              <div className="grid gap-2 sm:grid-cols-2">
                {friends.map((f) => (
                  <button key={f.device_id} onClick={() => setFlow({ step: 'setup', friend: f, subjectId: subjects[0]?.id || '' })} className="flex items-center gap-2 rounded-xl bg-slate-100 px-3 py-2.5 text-left text-sm font-semibold hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700">
                    <span className="monogram grid h-7 w-7 shrink-0 place-items-center text-xs" aria-hidden>{initialsOf(f.name)}</span>
                    <span className="min-w-0 flex-1 truncate">{f.name || 'Élève'}</span>
                    <span aria-hidden>⚔️</span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-sm">{t('duelWith')} <b>{flow.friend.name || 'Élève'}</b></p>
                <div className="flex gap-2">
                  <button onClick={() => randomDuel(flow.friend)} className="rounded-xl px-3 py-2 text-sm font-semibold text-white" style={{ backgroundColor: 'var(--c-accent)' }}>🎲 {t('duelRandom')}</button>
                  <button onClick={() => setFlow(null)} className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-500 dark:border-slate-700">{t('cancel')}</button>
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">{t('chooseSubject')}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {subjects.map((s) => (
                      <button key={s.id} onClick={() => setFlow((fl) => ({ ...fl, subjectId: s.id }))} className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${flow.subjectId === s.id ? 'text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'}`} style={flow.subjectId === s.id ? { backgroundColor: 'var(--c-accent)' } : undefined}>
                        {s.icon} {s.short || s.name}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">{t('chooseTheme')}</p>
                  <div className="space-y-1.5">
                    {(subjects.find((s) => s.id === flow.subjectId)?.chapters || []).map((th) => {
                      const s = subjects.find((x) => x.id === flow.subjectId)
                      return (
                        <button key={th.id} onClick={() => beginPlay(flow.friend, th.id, `${s.short || s.name} · ${th.short || th.name}`)} className="flex w-full items-center gap-2 rounded-xl bg-slate-100 px-3 py-2.5 text-left text-sm hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700">
                          <span className="min-w-0 flex-1 truncate">{th.short || th.name}</span>
                          <span aria-hidden>▶</span>
                        </button>
                      )
                    })}
                  </div>
                </div>
                {msg && msg.kind === 'err' && <p className="text-sm text-rose-600 dark:text-rose-400">{msg.text}</p>}
              </div>
            )}
          </section>

          {/* Défis en attente (envoyés) */}
          {duelsSent.length > 0 && (
            <section>
              <h2 className="mb-2 px-1 font-display text-lg font-semibold">{t('duelsWaiting')}</h2>
              <div className="space-y-2">
                {duelsSent.map((d) => (
                  <div key={d.id} className="card flex items-center gap-3 p-3 text-sm">
                    <span className="text-xl" aria-hidden>⏳</span>
                    <span className="min-w-0 flex-1"><span className="block truncate font-semibold">{d.b_name || 'Élève'}</span><span className="block text-xs text-slate-400">{d.chapter_label}</span></span>
                    <span className="shrink-0 text-slate-400">{d.a_score}/{d.a_total}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Historique */}
          <section>
            <h2 className="mb-2 px-1 font-display text-lg font-semibold">{t('duelHistory')}</h2>
            {status === 'loading' && <div className="card p-6 text-center text-sm text-slate-500 dark:text-slate-400">…</div>}
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
