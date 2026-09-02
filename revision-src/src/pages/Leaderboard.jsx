import { useCallback, useEffect, useState } from 'react'
import { useStore } from '../store.jsx'
import { useT } from '../i18n.js'
import { Icon } from '../components/ui.jsx'
import { submitScore, fetchRanking, deviceId, normalizeCode, LEADERBOARD_READY } from '../leaderboard.js'

const initialsOf = (name) => {
  const p = String(name || '').trim().split(/\s+/)
  return ((p[0]?.[0] || '') + (p[1]?.[0] || '')).toUpperCase() || '·'
}
const medal = (i) => (i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i + 1}`)

export default function Leaderboard() {
  const { state, derived, setClassCode } = useStore()
  const t = useT()
  const [code, setCode] = useState('')
  const [rows, setRows] = useState(null)
  const [status, setStatus] = useState('idle') // idle | loading | ok | error
  const myId = deviceId()

  const name = `${state.profile?.firstName || ''} ${state.profile?.lastName || ''}`.trim() || 'Élève'
  const photo = state.profile?.photo || ''
  const courses = derived.weeklyCourses
  const classCode = state.classCode

  const load = useCallback(async () => {
    if (!classCode) return
    setStatus('loading')
    try {
      await submitScore({ classCode, name, photo, courses })
      const data = await fetchRanking(classCode)
      setRows(data)
      setStatus('ok')
    } catch {
      setStatus('error')
    }
  }, [classCode, name, photo, courses])

  useEffect(() => { load() }, [load])

  // ----- Pas encore de classe : formulaire pour rejoindre -----
  if (!classCode) {
    return (
      <div className="animate-lux space-y-4">
        <header>
          <p className="kicker">{t('leaderboard')}</p>
          <h1 className="font-display text-3xl font-medium leading-tight">🏆 {t('weeklyRanking')}</h1>
        </header>
        <hr className="rule-gold" />
        <div className="card card-lux p-5">
          <h2 className="font-display text-xl font-semibold">{t('joinClass')}</h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{t('classCodeHint')}</p>
          <label className="mt-4 block text-xs font-semibold uppercase tracking-wide text-slate-400">{t('classCodeField')}</label>
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && normalizeCode(code).length >= 2 && setClassCode(normalizeCode(code))}
            placeholder="ex : marceau-tstmg2"
            className="mt-1 w-full rounded-xl border border-[color-mix(in_srgb,var(--c-accent)_30%,transparent)] bg-transparent px-3 py-2.5 text-base outline-none focus:border-[var(--c-accent)]"
            maxLength={24}
            autoFocus
          />
          <button
            onClick={() => normalizeCode(code).length >= 2 && setClassCode(normalizeCode(code))}
            disabled={normalizeCode(code).length < 2}
            className="btn-primary mt-4 w-full"
          >
            {t('joinBtn')}
          </button>
          <p className="mt-3 text-xs text-slate-400">{t('rankPrivacy')}</p>
          {!LEADERBOARD_READY && <p className="mt-2 text-xs text-rose-500">{t('rankOffline')}</p>}
        </div>
      </div>
    )
  }

  // ----- Classe rejointe : classement -----
  return (
    <div className="animate-lux space-y-4">
      <header className="flex items-start justify-between gap-3">
        <div>
          <p className="kicker">{t('classLabel')} · {classCode}</p>
          <h1 className="font-display text-3xl font-medium leading-tight">🏆 {t('weeklyRanking')}</h1>
        </div>
        <button onClick={() => { setClassCode(''); setRows(null) }} className="shrink-0 text-xs font-semibold text-[#98761f] hover:underline dark:text-[#d9bd77]">{t('leaveClass')}</button>
      </header>
      <hr className="rule-gold" />
      <p className="text-xs text-slate-400">{t('weeklyRankHint')}</p>

      {status === 'loading' && !rows && (
        <div className="card p-6 text-center text-sm text-slate-500 dark:text-slate-400">…</div>
      )}
      {status === 'error' && (
        <div className="card p-6 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">{t('rankOffline')}</p>
          <button onClick={load} className="btn-ghost mt-3 !min-h-0 !py-2 text-sm">{t('retry')}</button>
        </div>
      )}
      {rows && rows.length === 0 && (
        <div className="card p-6 text-center text-sm text-slate-500 dark:text-slate-400">{t('noOneYet')}</div>
      )}

      {rows && rows.length > 0 && (
        <div className="space-y-2">
          {rows.map((r, i) => {
            const me = r.device_id === myId
            return (
              <div
                key={r.device_id + i}
                className={`card flex items-center gap-3 p-3 ${me ? 'ring-2' : ''}`}
                style={me ? { boxShadow: 'inset 0 0 0 2px var(--c-accent)' } : undefined}
              >
                <span className="w-7 shrink-0 text-center font-display text-lg font-semibold" style={{ color: i < 3 ? undefined : 'var(--c-accent)' }}>{medal(i)}</span>
                <span className="monogram grid h-10 w-10 shrink-0 place-items-center overflow-hidden text-sm">
                  {r.photo ? <img src={r.photo} alt="" className="h-full w-full rounded-full object-cover" /> : initialsOf(r.name)}
                </span>
                <span className="min-w-0 flex-1 truncate font-semibold">
                  {r.name || 'Élève'}{me && <span className="ml-1 text-xs font-normal text-slate-400">· {t('youLabel')}</span>}
                </span>
                <span className="shrink-0 text-right">
                  <span className="font-display text-xl font-semibold" style={{ color: 'var(--c-accent)' }}>{r.courses}</span>
                  <span className="block text-[0.65rem] uppercase tracking-wide text-slate-400">{t('coursesThisWeek')}</span>
                </span>
              </div>
            )
          })}
        </div>
      )}

      <p className="flex items-center justify-center gap-1.5 pt-1 text-xs text-slate-400">
        <Icon.Flame size={13} /> {courses} {t('coursesThisWeek')}
      </p>
    </div>
  )
}
