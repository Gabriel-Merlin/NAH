import { useCallback, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useStore } from '../store.jsx'
import { useT } from '../i18n.js'
import {
  FRIENDS_READY, friendCode, normFriendCode, upsertMe,
  sendRequest, incoming, outgoing, respond, fetchFriends, removeFriend,
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

  const [status, setStatus] = useState('loading') // loading | ok | error
  const [friends, setFriends] = useState([])
  const [reqs, setReqs] = useState([])
  const [sent, setSent] = useState([])
  const [input, setInput] = useState('')
  const [msg, setMsg] = useState(null) // { kind:'ok'|'err', text }
  const [busy, setBusy] = useState(false)
  const [copied, setCopied] = useState(false)

  const load = useCallback(async () => {
    if (!FRIENDS_READY) { setStatus('error'); return }
    setStatus('loading')
    try {
      await upsertMe({ name: myName, photo: state.profile?.photo || '', xp: state.xp, streak: state.streak?.count, coursesWeek: derived.weeklyCourses })
      const [f, i, o] = await Promise.all([fetchFriends(), incoming(), outgoing()])
      // Tri : classement par XP décroissant.
      setFriends(f.sort((a, b) => (b.xp || 0) - (a.xp || 0)))
      setReqs(i); setSent(o); setStatus('ok')
    } catch { setStatus('error') }
  }, [myName, state.profile?.photo, state.xp, state.streak?.count, derived.weeklyCourses])

  useEffect(() => { load() }, [load])

  const add = async () => {
    const c = normFriendCode(input)
    if (c.length < 4 || busy) return
    setBusy(true); setMsg(null)
    try {
      const r = await sendRequest(c, myName)
      const M = {
        sent: { kind: 'ok', text: t('friendReqSent') },
        self: { kind: 'err', text: t('friendSelf') },
        notfound: { kind: 'err', text: t('friendNotFound') },
        exists: { kind: 'ok', text: t('friendReqPending') },
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

  return (
    <div className="animate-lux space-y-5">
      <header className="text-center">
        <p className="kicker">🤝 {t('friends')}</p>
        <h1 className="mt-1 font-display text-[1.9rem] font-medium leading-tight">{t('friends')}</h1>
        <span className="mx-auto mt-3 block h-px w-24 rounded-full" style={{ background: 'linear-gradient(90deg,transparent,#c8a24e,transparent)' }} />
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{t('friendsSub')}</p>
      </header>

      {/* Mon code ami */}
      <section className="card card-lux p-5 text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{t('myFriendCode')}</p>
        <p className="my-1 font-display text-4xl font-extrabold tracking-[0.2em]" style={{ color: 'var(--c-accent)' }}>{code}</p>
        <button onClick={copy} className="btn-ghost !min-h-0 !py-2 text-sm">{copied ? `✓ ${t('copied')}` : `📋 ${t('copyCode')}`}</button>
        <p className="mt-2 text-xs text-slate-400">{t('friendCodeHint')}</p>
      </section>

      {/* Ajouter un ami */}
      <section className="card p-5">
        <h2 className="mb-2 font-display text-lg font-semibold">{t('addFriend')}</h2>
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(normFriendCode(e.target.value))}
            onKeyDown={(e) => e.key === 'Enter' && add()}
            placeholder={t('friendCodePlaceholder')}
            maxLength={6}
            className="flex-1 rounded-xl border border-slate-200 bg-white px-3 py-2.5 font-display text-lg font-semibold uppercase tracking-widest outline-none focus:border-[color:var(--c-accent)] dark:border-slate-700 dark:bg-slate-800"
            aria-label={t('addFriend')}
          />
          <button onClick={add} disabled={busy || normFriendCode(input).length < 4} className="btn-primary shrink-0 disabled:opacity-40" style={{ backgroundColor: 'var(--c-accent)' }}>{t('send')}</button>
        </div>
        {msg && <p className={`mt-2 text-sm ${msg.kind === 'ok' ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>{msg.text}</p>}
      </section>

      {status === 'error' && (
        <div className="card p-6 text-center text-sm text-slate-500 dark:text-slate-400">{t('rankOffline')}</div>
      )}

      {/* Demandes reçues */}
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

      {/* Mes amis (classement) */}
      <section>
        <div className="mb-2 flex items-end justify-between px-1">
          <h2 className="font-display text-lg font-semibold">{t('myFriends')}</h2>
          {sent.length > 0 && <span className="text-xs text-slate-400">{sent.length} {t('friendReqWaiting')}</span>}
        </div>
        {status === 'loading' && <div className="card p-6 text-center text-sm text-slate-500 dark:text-slate-400">…</div>}
        {status === 'ok' && friends.length === 0 && (
          <div className="card p-6 text-center text-sm text-slate-500 dark:text-slate-400">{t('noFriendsYet')}</div>
        )}
        {friends.length > 0 && (
          <div className="space-y-2">
            {friends.map((f, i) => (
              <div key={f.device_id} className="card flex items-center gap-3 p-3">
                <span className="w-6 shrink-0 text-center font-display text-lg font-semibold" style={{ color: i < 3 ? undefined : 'var(--c-accent)' }}>{medal(i)}</span>
                <span className="monogram grid h-10 w-10 shrink-0 place-items-center overflow-hidden text-sm">
                  {f.photo ? <img src={f.photo} alt="" className="h-full w-full rounded-full object-cover" /> : initialsOf(f.name)}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-semibold">{f.name || 'Élève'}</span>
                  <span className="block text-xs text-slate-400">🔥 {f.streak || 0} · {f.courses_week || 0} {t('coursesThisWeek')}</span>
                </span>
                <span className="shrink-0 text-right">
                  <span className="font-display text-lg font-semibold" style={{ color: 'var(--c-accent)' }}>{f.xp || 0}</span>
                  <span className="block text-[0.6rem] uppercase tracking-wide text-slate-400">XP</span>
                </span>
                <button onClick={() => drop(f.device_id)} disabled={busy} className="shrink-0 text-slate-300 hover:text-rose-500" title={t('friendRemove')} aria-label={t('friendRemove')}>✕</button>
              </div>
            ))}
          </div>
        )}
      </section>

      <p className="pt-1 text-center text-xs text-slate-400">{t('friendsPrivacy')}</p>
    </div>
  )
}
