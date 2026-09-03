import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../store.jsx'
import { useT } from '../i18n.js'
import { subjectsForTrack } from '../data/tracks.js'
import Qcm from '../games/Qcm.jsx'
import {
  CLASSROOM_READY, deviceId, normalizeCode, todayKey, lyceeOf,
  upsertMember, fetchMembers,
  fetchGroups, createGroup, deleteGroup, setMemberGroup,
  fetchMeta, upsertMeta,
  fetchWall, postWall, answerWall, resolveWall, deleteWall, reactWall,
  createQuiz, fetchQuizzes, approveQuiz, assignQuiz, deleteQuiz, submitQuizResult, fetchQuizResults, validQuestion,
  fetchDuels, createDuel, acceptDuel, deleteDuel, fetchLeague,
} from '../classroom.js'
import { upsertProfile, isSignedIn } from '../auth.js'

const initialsOf = (name) => {
  const p = String(name || '').trim().split(/\s+/)
  return ((p[0]?.[0] || '') + (p[1]?.[0] || '')).toUpperCase() || '·'
}
const medal = (i) => (i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i + 1}`)
const GROUP_COLORS = ['#c0392b', '#2e86de', '#27ae60', '#8e44ad', '#e67e22', '#16a085', '#d81b60', '#f1c40f']
const GROUP_EMOJIS = ['🦁', '🦅', '🐺', '🐉', '🦊', '🐢', '🦈', '⚡', '🔥', '⭐', '🚀', '🏆']

const Loading = () => <div className="card p-6 text-center text-sm text-slate-500 dark:text-slate-400">…</div>
function ErrorBox({ t, onRetry }) {
  return (
    <div className="card p-6 text-center">
      <p className="text-sm text-slate-500 dark:text-slate-400">{t('rankOffline')}</p>
      <button onClick={onRetry} className="btn-ghost mt-3 !min-h-0 !py-2 text-sm">{t('retry')}</button>
    </div>
  )
}
const Empty = ({ children }) => <div className="card p-6 text-center text-sm text-slate-500 dark:text-slate-400">{children}</div>

// ===========================================================================
export default function Classe() {
  const { state, derived, setClassCode, setCustomTheme } = useStore()
  const t = useT()
  const classCode = state.classCode
  const role = state.account?.role || 'eleve'
  const myName = `${state.profile?.firstName || ''} ${state.profile?.lastName || ''}`.trim() || t('roleStudent')
  const photo = state.profile?.photo || ''
  const [tab, setTab] = useState('rank')
  const [meta, setMeta] = useState(null)

  // Instantané du membre (pour classements, podium, heatmap, groupes).
  const subjectsKey = JSON.stringify(derived.bySubject)
  useEffect(() => {
    if (!classCode) return
    upsertMember({
      classCode, name: myName, photo, role,
      xp: state.xp, streak: state.streak.count, coursesWeek: derived.weeklyCourses,
      subjects: derived.bySubject,
    }).catch(() => {})
  }, [classCode, myName, photo, role, state.xp, state.streak.count, derived.weeklyCourses, subjectsKey])

  const loadMeta = useCallback(() => {
    if (!classCode) return
    fetchMeta(classCode).then(setMeta).catch(() => {})
  }, [classCode])
  useEffect(() => { loadMeta() }, [loadMeta])

  if (!classCode) return <JoinForm onJoin={setClassCode} t={t} />

  const blason = meta?.blason_name
  const TABS = [
    { id: 'rank', label: t('tabRanking'), icon: '🏆' },
    { id: 'goal', label: t('tabGoal'), icon: '🎯' },
    { id: 'quiz', label: t('tabQuizzes'), icon: '📝' },
    { id: 'wall', label: t('tabWall'), icon: '💬' },
    { id: 'members', label: t('tabMembers'), icon: '👥' },
    ...(role === 'prof' ? [{ id: 'prof', label: t('tabTeacher'), icon: '🧑‍🏫' }] : []),
  ]

  return (
    <div className="animate-lux space-y-4">
      <header className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="kicker">{t('classSpace')}</p>
          <h1 className="flex items-center gap-2 truncate font-display text-3xl font-medium leading-tight">
            <span aria-hidden>{meta?.blason_emoji || '👥'}</span>
            <span className="truncate" style={blason && meta?.blason_color ? { color: meta.blason_color } : undefined}>{blason || classCode}</span>
          </h1>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            {blason ? `${classCode} · ` : ''}{role === 'prof' ? `🧑‍🏫 ${t('roleTeacher')} · ${t('shareCodeHint')}` : `🎓 ${t('roleStudent')}`}
          </p>
        </div>
        <button onClick={() => setClassCode('')} className="shrink-0 text-xs font-semibold text-[#98761f] hover:underline dark:text-[#d9bd77]">{t('leaveClass')}</button>
      </header>

      {meta?.announcement && (
        <div className="card border-l-4 p-3.5" style={{ borderColor: 'var(--c-accent)', background: 'color-mix(in srgb, var(--c-accent) 8%, transparent)' }}>
          <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--c-accent)' }}>📣 {t('announcement')}{meta.announcement_by ? ` · ${meta.announcement_by}` : ''}</p>
          <p className="mt-0.5 text-sm">{meta.announcement}</p>
        </div>
      )}

      <hr className="rule-gold" />

      <div className="flex gap-1.5 overflow-x-auto rounded-2xl bg-[color-mix(in_srgb,var(--c-accent)_8%,transparent)] p-1.5">
        {TABS.map((tb) => (
          <button key={tb.id} onClick={() => setTab(tb.id)}
            className={`flex-1 whitespace-nowrap rounded-xl px-3 py-2 text-sm font-semibold transition ${tab === tb.id ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-800 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
            <span aria-hidden className="mr-1">{tb.icon}</span>{tb.label}
          </button>
        ))}
      </div>

      {tab === 'rank' && <RankTab classCode={classCode} track={state.track} t={t} />}
      {tab === 'goal' && <GoalTab classCode={classCode} meta={meta} state={state} derived={derived} setCustomTheme={setCustomTheme} t={t} />}
      {tab === 'quiz' && <QuizTab classCode={classCode} role={role} name={myName} accountId={state.account?.id} t={t} />}
      {tab === 'wall' && <WallTab classCode={classCode} role={role} name={myName} track={state.track} t={t} />}
      {tab === 'members' && <MembersTab classCode={classCode} track={state.track} t={t} />}
      {tab === 'prof' && role === 'prof' && <ProfTab classCode={classCode} name={myName} track={state.track} meta={meta} reloadMeta={loadMeta} t={t} />}
    </div>
  )
}

// ----- Rejoindre une classe (onglet code) ----------------------------------
function JoinForm({ onJoin, t }) {
  const [code, setCode] = useState('')
  const ok = normalizeCode(code).length >= 2
  const join = async () => {
    if (!ok) return
    const cc = normalizeCode(code)
    onJoin(cc)
    if (isSignedIn()) { try { await upsertProfile({ class_code: cc }) } catch { /* hors ligne */ } }
  }
  return (
    <div className="animate-lux space-y-4">
      <header>
        <p className="kicker">{t('classSpace')}</p>
        <h1 className="font-display text-3xl font-medium leading-tight">👥 {t('joinClass')}</h1>
      </header>
      <hr className="rule-gold" />
      <div className="card card-lux p-5">
        <h2 className="font-display text-xl font-semibold">{t('enterClassCode')}</h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{t('classCodeHint')}</p>
        <label className="mt-4 block text-xs font-semibold uppercase tracking-wide text-slate-400">{t('classCodeField')}</label>
        <input value={code} onChange={(e) => setCode(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && join()}
          placeholder="ex : marceau-tstmg2" maxLength={24} autoFocus
          className="mt-1 w-full rounded-xl border border-[color-mix(in_srgb,var(--c-accent)_30%,transparent)] bg-transparent px-3 py-2.5 text-base outline-none focus:border-[var(--c-accent)]" />
        <button onClick={join} disabled={!ok} className="btn-primary mt-4 w-full">{t('joinBtn')}</button>
        <p className="mt-3 text-xs text-slate-400">{t('classJoinPrivacy')}</p>
        {!CLASSROOM_READY && <p className="mt-2 text-xs text-rose-500">{t('rankOffline')}</p>}
      </div>
    </div>
  )
}

// ----- Onglet Classement ----------------------------------------------------
function RankTab({ classCode, track, t }) {
  const myId = deviceId()
  const [seg, setSeg] = useState('week') // week | xp | subjects | groups | league
  const [members, setMembers] = useState(null)
  const [groups, setGroups] = useState([])
  const [league, setLeague] = useState(null)
  const [status, setStatus] = useState('loading')

  const load = useCallback(async () => {
    setStatus('loading')
    try {
      const [m, g] = await Promise.all([fetchMembers(classCode), fetchGroups(classCode)])
      setMembers(m); setGroups(g)
      if (seg === 'league') setLeague(await fetchLeague(classCode))
      setStatus('ok')
    } catch { setStatus('error') }
  }, [classCode, seg])
  useEffect(() => { load() }, [load])

  const SEGS = [
    { id: 'week', label: t('segWeek') }, { id: 'xp', label: t('segXp') },
    { id: 'subjects', label: t('segSubjects') }, { id: 'groups', label: t('segGroups') },
    { id: 'league', label: t('segLeague') },
  ]
  const students = (members || []).filter((m) => m.role !== 'prof')
  const trackSubjects = (track ? subjectsForTrack(track) : []).filter((s) => s && !s.comingSoon && s.chapters?.length)

  return (
    <div className="space-y-3">
      <div className="flex gap-1.5 overflow-x-auto text-xs">
        {SEGS.map((s) => (
          <button key={s.id} onClick={() => setSeg(s.id)}
            className={`whitespace-nowrap rounded-full px-3 py-1.5 font-semibold transition ${seg === s.id ? 'text-white' : 'text-slate-500 ring-1 ring-slate-200 dark:text-slate-400 dark:ring-slate-700'}`}
            style={seg === s.id ? { backgroundColor: 'var(--c-accent)' } : undefined}>{s.label}</button>
        ))}
      </div>

      {status === 'loading' && <Loading />}
      {status === 'error' && <ErrorBox t={t} onRetry={load} />}

      {status === 'ok' && seg === 'week' && (
        <RankList rows={[...students].sort((a, b) => b.courses_week - a.courses_week)} myId={myId} t={t}
          value={(r) => r.courses_week} unit={t('coursesThisWeek')} empty={t('noOneYet')} />
      )}
      {status === 'ok' && seg === 'xp' && (
        <RankList rows={[...students].sort((a, b) => b.xp - a.xp)} myId={myId} t={t}
          value={(r) => r.xp} unit="XP" empty={t('noOneYet')} />
      )}
      {status === 'ok' && seg === 'subjects' && (
        <div className="space-y-2">
          <p className="text-xs text-slate-400">{t('podiumHint')}</p>
          {trackSubjects.map((s) => {
            const best = students.map((m) => ({ m, v: Number(m.subjects?.[s.id] || 0) })).filter((x) => x.v > 0).sort((a, b) => b.v - a.v)[0]
            return (
              <div key={s.id} className="card flex items-center gap-3 p-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-lg" style={{ backgroundColor: s.color + '18', boxShadow: `inset 0 0 0 1px ${s.color}44` }}>{s.icon}</span>
                <span className="min-w-0 flex-1"><span className="block text-sm font-semibold leading-tight">{s.name}</span>
                  <span className="block truncate text-xs text-slate-500 dark:text-slate-400">{best ? `🥇 ${best.m.name || t('roleStudent')}` : t('podiumNobody')}</span>
                </span>
                {best && <span className="shrink-0 font-display text-lg font-semibold" style={{ color: s.color }}>{best.v}%</span>}
              </div>
            )
          })}
        </div>
      )}
      {status === 'ok' && seg === 'groups' && (
        <GroupStandings groups={groups} students={students} t={t} />
      )}
      {status === 'ok' && seg === 'league' && (
        league && league.length > 0 ? (
          <div className="space-y-2">
            <p className="text-xs text-slate-400">{t('leagueHint')}</p>
            {league.map((c, i) => {
              const me = c.class_code === normalizeCode(classCode)
              return (
                <div key={c.class_code} className="card flex items-center gap-3 p-3" style={me ? { boxShadow: 'inset 0 0 0 2px var(--c-accent)' } : undefined}>
                  <span className="w-7 shrink-0 text-center font-display text-lg font-semibold" style={{ color: i < 3 ? undefined : 'var(--c-accent)' }}>{medal(i)}</span>
                  <span className="min-w-0 flex-1 truncate font-semibold">{c.class_code}{me && <span className="ml-1 text-xs font-normal text-slate-400">· {t('yourClassLabel')}</span>}</span>
                  <span className="shrink-0 text-right"><span className="font-display text-xl font-semibold" style={{ color: 'var(--c-accent)' }}>{c.total}</span><span className="block text-[0.65rem] uppercase tracking-wide text-slate-400">{c.members} {t('membersCount')}</span></span>
                </div>
              )
            })}
          </div>
        ) : <Empty>{t('leagueEmpty')}</Empty>
      )}
    </div>
  )
}

function RankList({ rows, myId, value, unit, empty, t }) {
  if (!rows.length) return <Empty>{empty}</Empty>
  return rows.map((r, i) => {
    const me = r.device_id === myId
    return (
      <div key={r.device_id} className="card flex items-center gap-3 p-3" style={me ? { boxShadow: 'inset 0 0 0 2px var(--c-accent)' } : undefined}>
        <span className="w-7 shrink-0 text-center font-display text-lg font-semibold" style={{ color: i < 3 ? undefined : 'var(--c-accent)' }}>{medal(i)}</span>
        <span className="monogram grid h-10 w-10 shrink-0 place-items-center overflow-hidden text-sm">
          {r.photo ? <img src={r.photo} alt="" className="h-full w-full rounded-full object-cover" /> : initialsOf(r.name)}
        </span>
        <span className="min-w-0 flex-1 truncate font-semibold">{r.name || t('roleStudent')}{me && <span className="ml-1 text-xs font-normal text-slate-400">· {t('youLabel')}</span>}</span>
        <span className="shrink-0 text-right"><span className="font-display text-xl font-semibold" style={{ color: 'var(--c-accent)' }}>{value(r)}</span><span className="block text-[0.65rem] uppercase tracking-wide text-slate-400">{unit}</span></span>
      </div>
    )
  })
}

function GroupStandings({ groups, students, t }) {
  if (!groups.length) return <Empty>{t('noGroupYet')}</Empty>
  const rows = groups.map((g) => {
    const mem = students.filter((m) => m.group_id === g.id)
    return { g, total: mem.reduce((a, m) => a + (m.courses_week || 0), 0), count: mem.length }
  }).sort((a, b) => b.total - a.total || b.count - a.count)
  const unassigned = students.filter((m) => !m.group_id).length
  return (
    <div className="space-y-2">
      <p className="text-xs text-slate-400">{t('groupsHint')}</p>
      {rows.map((r, i) => (
        <div key={r.g.id} className="card flex items-center gap-3 p-3.5" style={{ boxShadow: `inset 0 0 0 1px ${(r.g.color || '#999')}55` }}>
          <span className="w-7 shrink-0 text-center font-display text-lg font-semibold" style={{ color: i < 3 ? undefined : 'var(--c-accent)' }}>{medal(i)}</span>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl text-xl" style={{ backgroundColor: (r.g.color || '#999') + '22' }}>{r.g.emoji || '🏳️'}</span>
          <span className="min-w-0 flex-1"><span className="block truncate font-display font-semibold" style={{ color: r.g.color || undefined }}>{r.g.name || t('groupUnnamed')}</span><span className="block text-xs text-slate-400">{r.count} {t('membersCount')}</span></span>
          <span className="shrink-0 text-right"><span className="font-display text-xl font-semibold" style={{ color: 'var(--c-accent)' }}>{r.total}</span><span className="block text-[0.65rem] uppercase tracking-wide text-slate-400">{t('coursesThisWeek')}</span></span>
        </div>
      ))}
      {unassigned > 0 && <p className="pt-1 text-center text-xs text-slate-400">{unassigned} {t('withoutGroup')}</p>}
    </div>
  )
}

// ----- Onglet Objectif ------------------------------------------------------
function GoalTab({ classCode, meta, state, derived, setCustomTheme, t }) {
  const [members, setMembers] = useState(null)
  const [status, setStatus] = useState('loading')
  const load = useCallback(async () => {
    setStatus('loading')
    try { setMembers(await fetchMembers(classCode)); setStatus('ok') } catch { setStatus('error') }
  }, [classCode])
  useEffect(() => { load() }, [load])

  const students = (members || []).filter((m) => m.role !== 'prof')
  const target = meta?.goal_target || 0
  const total = students.reduce((a, m) => a + (m.courses_week || 0), 0)
  const pct = target > 0 ? Math.min(100, Math.round((total / target) * 100)) : 0
  const reached = target > 0 && total >= target
  const today = todayKey()
  const activeToday = students.filter((m) => m.active_day === today).length
  const streakPct = students.length ? Math.round((activeToday / students.length) * 100) : 0
  const streakOn = students.length >= 2 && streakPct >= 60

  // Bingo hebdomadaire (local) : petites missions cochées selon ta progression.
  const cells = [
    { k: 'course1', label: t('bingoCourse1'), done: derived.weeklyCourses >= 1 },
    { k: 'course3', label: t('bingoCourse3'), done: derived.weeklyCourses >= 3 },
    { k: 'course5', label: t('bingoCourse5'), done: derived.weeklyCourses >= 5 },
    { k: 'streak3', label: t('bingoStreak3'), done: state.streak.count >= 3 },
    { k: 'xp200', label: t('bingoXp200'), done: state.xp >= 200 },
    { k: 'badge', label: t('bingoBadge'), done: (state.badges?.length || 0) >= 1 },
    { k: 'fav', label: t('bingoFav'), done: (state.favorites?.length || 0) >= 1 },
    { k: 'three', label: t('bingoThreeSubjects'), done: Object.values(derived.bySubject || {}).filter((v) => v > 0).length >= 3 },
    { k: 'master', label: t('bingoMaster'), done: (derived.chaptersMastered || 0) >= 1 },
  ]
  const bingoDone = cells.filter((c) => c.done).length

  const challenge = meta?.challenge_label
  const [csid, ctid] = String(meta?.challenge_chapter || '').split('|')

  return (
    <div className="space-y-4">
      {status === 'error' && (
        <div className="card flex items-center justify-between gap-2 p-3 text-sm text-slate-500 dark:text-slate-400">
          <span>{t('rankOffline')}</span>
          <button onClick={load} className="btn-ghost !min-h-0 !py-1.5 text-xs">{t('retry')}</button>
        </div>
      )}
      {/* Objectif collectif */}
      <div className="card card-lux p-5">
        <div className="flex items-center justify-between gap-2">
          <h2 className="font-display text-xl font-semibold">🎯 {t('collectiveGoal')}</h2>
          {target > 0 && <span className="font-display text-lg font-semibold" style={{ color: 'var(--c-accent)' }}>{total}/{target}</span>}
        </div>
        {target > 0 ? (
          <>
            <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
              <div className="h-full rounded-full transition-all duration-700" style={{ width: `${pct}%`, backgroundColor: 'var(--c-accent)' }} />
            </div>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{reached ? t('goalReached') : `${t('goalRemaining')} ${Math.max(0, target - total)} ${t('coursesThisWeek')}`}</p>
            {reached && (
              <button onClick={() => setCustomTheme({ bg: '#17130d', ink: '#f4ecd8', accent: '#d9bd77', card: '#221d15' })} className="btn-primary mt-3 w-full !min-h-0 !py-2.5 text-sm">🏅 {t('unlockGoldTheme')}</button>
            )}
          </>
        ) : <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{t('noGoalYet')}</p>}
      </div>

      {/* Flamme collective */}
      <div className="card p-5">
        <div className="flex items-center justify-between gap-2">
          <h2 className="font-display text-xl font-semibold">🔥 {t('collectiveStreak')}</h2>
          <span className={`font-display text-lg font-semibold ${streakOn ? '' : 'text-slate-400'}`} style={streakOn ? { color: 'var(--c-accent)' } : undefined}>{streakPct}%</span>
        </div>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{streakOn ? t('streakOn') : t('streakOff')}</p>
        <p className="mt-1 text-xs text-slate-400">{activeToday}/{students.length || 0} {t('activeToday')}</p>
      </div>

      {/* Défi de la semaine */}
      {challenge && (
        <div className="card p-5">
          <h2 className="font-display text-xl font-semibold">⚡ {t('weeklyChallenge')}</h2>
          <p className="mt-1 text-sm">{challenge}</p>
          {csid && ctid && <Link to={`/subject/${csid}/theme/${ctid}`} className="btn-primary mt-3 inline-flex !min-h-0 !py-2 text-sm">{t('goChallenge')} →</Link>}
        </div>
      )}

      {/* Bingo de révision */}
      <div className="card p-5">
        <div className="flex items-center justify-between gap-2">
          <h2 className="font-display text-xl font-semibold">🎟️ {t('reviewBingo')}</h2>
          <span className="font-display text-lg font-semibold" style={{ color: 'var(--c-accent)' }}>{bingoDone}/9</span>
        </div>
        <p className="mt-1 text-xs text-slate-400">{t('bingoHint')}</p>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {cells.map((c) => (
            <div key={c.k} className={`flex aspect-square flex-col items-center justify-center rounded-xl p-2 text-center text-[0.7rem] font-semibold leading-tight transition ${c.done ? 'text-white' : 'text-slate-500 ring-1 ring-slate-200 dark:text-slate-400 dark:ring-slate-700'}`} style={c.done ? { backgroundColor: 'var(--c-accent)' } : undefined}>
              <span className="mb-0.5 text-base">{c.done ? '✓' : '○'}</span>{c.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ----- Onglet QCM (+ devoirs, propositions, duels) --------------------------
function QuizTab({ classCode, role, name, accountId, t }) {
  const [seg, setSeg] = useState('quiz') // quiz | duel
  return (
    <div className="space-y-3">
      <div className="flex gap-1.5 text-xs">
        {[{ id: 'quiz', label: t('segQuizzes') }, { id: 'duel', label: t('segDuels') }].map((s) => (
          <button key={s.id} onClick={() => setSeg(s.id)}
            className={`whitespace-nowrap rounded-full px-3 py-1.5 font-semibold transition ${seg === s.id ? 'text-white' : 'text-slate-500 ring-1 ring-slate-200 dark:text-slate-400 dark:ring-slate-700'}`}
            style={seg === s.id ? { backgroundColor: 'var(--c-accent)' } : undefined}>{s.label}</button>
        ))}
      </div>
      {seg === 'quiz' ? <QuizList classCode={classCode} role={role} name={name} accountId={accountId} t={t} />
        : <DuelList classCode={classCode} name={name} t={t} />}
    </div>
  )
}

function QuizList({ classCode, role, name, accountId, t }) {
  const [view, setView] = useState('list') // list | build | propose | take | results
  const [quizzes, setQuizzes] = useState(null)
  const [status, setStatus] = useState('loading')
  const [active, setActive] = useState(null)

  const load = useCallback(async () => {
    setStatus('loading')
    try { setQuizzes(await fetchQuizzes(classCode)); setStatus('ok') } catch { setStatus('error') }
  }, [classCode])
  useEffect(() => { if (view === 'list') load() }, [load, view])

  if (view === 'build' || view === 'propose') {
    return <QuizBuilder classCode={classCode} authorName={name} accountId={accountId} propose={view === 'propose'} t={t}
      onCancel={() => setView('list')} onSaved={() => setView('list')} />
  }
  if (view === 'take' && active) return <QuizTake quiz={active} name={name} t={t} onDone={() => setView('results')} onBack={() => setView('list')} />
  if (view === 'results' && active) return <QuizResults quiz={active} role={role} accountId={accountId} t={t} onBack={() => { setActive(null); setView('list') }} onReplay={() => setView('take')} />

  const all = quizzes || []
  const visible = role === 'prof' ? all : all.filter((q) => q.status !== 'proposed')
  const proposals = all.filter((q) => q.status === 'proposed')

  return (
    <div className="space-y-3">
      {role === 'prof'
        ? <button onClick={() => setView('build')} className="btn-primary w-full gap-1.5"><span aria-hidden>＋</span> {t('createQuiz')}</button>
        : <button onClick={() => setView('propose')} className="btn-ghost w-full gap-1.5"><span aria-hidden>＋</span> {t('proposeQuestion')}</button>}

      {status === 'loading' && <Loading />}
      {status === 'error' && <ErrorBox t={t} onRetry={load} />}

      {role === 'prof' && proposals.length > 0 && (
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{t('studentProposals')}</p>
          {proposals.map((qz) => (
            <div key={qz.id} className="card p-4" style={{ boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--c-accent) 40%, transparent)' }}>
              <h3 className="font-display font-semibold">{qz.title || t('quizUntitled')}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">{qz.questions?.length || 0} {t('questionsWord')}{qz.proposed_by ? ` · ${qz.proposed_by}` : ''}</p>
              <div className="mt-2 flex gap-2">
                <button onClick={async () => { try { await approveQuiz(qz.id) } catch { /* */ } load() }} className="btn-primary !min-h-0 flex-1 !py-2 text-sm">✓ {t('approve')}</button>
                <button onClick={async () => { if (confirm(t('deleteQuizConfirm'))) { try { await deleteQuiz(qz.id) } catch { /* */ } load() } }} className="!min-h-0 rounded-xl px-3 py-2 text-sm font-semibold text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40">{t('delete')}</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {status === 'ok' && visible.filter((q) => q.status !== 'proposed').length === 0 && (
        <Empty>{role === 'prof' ? t('noQuizProf') : t('noQuizStudent')}</Empty>
      )}

      {visible.filter((q) => q.status !== 'proposed').map((qz) => (
        <QuizCard key={qz.id} qz={qz} role={role} accountId={accountId} t={t}
          onPlay={() => { setActive(qz); setView('take') }} onResults={() => { setActive(qz); setView('results') }} reload={load} />
      ))}
    </div>
  )
}

function QuizCard({ qz, role, accountId, t, onPlay, onResults, reload }) {
  const [assigning, setAssigning] = useState(false)
  const due = qz.due_at ? new Date(qz.due_at) : null
  const overdue = due && due < new Date()
  return (
    <div className="card p-4">
      <div className="flex items-start gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl text-lg" style={{ backgroundColor: 'color-mix(in srgb, var(--c-accent) 12%, transparent)', boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--c-accent) 30%, transparent)' }} aria-hidden>📝</span>
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-lg font-semibold leading-tight">{qz.title || t('quizUntitled')}</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">{qz.questions?.length || 0} {t('questionsWord')}{qz.author_name ? ` · ${qz.author_name}` : ''}</p>
          {due && <p className={`mt-0.5 text-xs font-semibold ${overdue ? 'text-rose-500' : 'text-amber-600 dark:text-amber-400'}`}>📌 {t('dueBy')} {due.toLocaleDateString()}</p>}
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <button onClick={onPlay} disabled={!qz.questions?.length} className="btn-primary !min-h-0 flex-1 !py-2 text-sm">{t('playQuiz')}</button>
        <button onClick={onResults} className="btn-ghost !min-h-0 !py-2 text-sm">{t('quizRanking')}</button>
        {role === 'prof' && <button onClick={() => setAssigning((v) => !v)} className="!min-h-0 rounded-xl px-3 py-2 text-sm font-semibold text-[var(--c-accent)] hover:bg-[color-mix(in_srgb,var(--c-accent)_12%,transparent)]">📌 {t('assign')}</button>}
        {role === 'prof' && <button onClick={async () => { if (confirm(t('deleteQuizConfirm'))) { try { await deleteQuiz(qz.id) } catch { /* */ } reload() } }} className="!min-h-0 rounded-xl px-3 py-2 text-sm font-semibold text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40">{t('delete')}</button>}
      </div>
      {assigning && role === 'prof' && (
        <div className="mt-2 flex items-center gap-2">
          <input type="date" defaultValue={qz.due_at ? qz.due_at.slice(0, 10) : ''} onChange={async (e) => { try { await assignQuiz(qz.id, e.target.value ? new Date(e.target.value + 'T23:59:00').toISOString() : null) } catch { /* */ } reload() }}
            className="rounded-lg border border-slate-200 bg-transparent px-2 py-1.5 text-sm dark:border-slate-700" />
          <button onClick={async () => { try { await assignQuiz(qz.id, null) } catch { /* */ } reload() }} className="text-xs font-semibold text-slate-400 hover:underline">{t('removeDeadline')}</button>
        </div>
      )}
    </div>
  )
}

function QuizTake({ quiz, name, t, onDone, onBack }) {
  const game = useMemo(() => ({ questions: quiz.questions || [] }), [quiz])
  const handleDone = async ({ correct, total }) => {
    try { await submitQuizResult({ quizId: quiz.id, name, score: correct, total }) } catch { /* */ }
    onDone()
  }
  return (
    <div className="space-y-3">
      <button onClick={onBack} className="text-sm font-semibold text-[#98761f] hover:underline dark:text-[#d9bd77]">← {t('backToQuizzes')}</button>
      <h2 className="font-display text-xl font-semibold">{quiz.title || t('quizUntitled')}</h2>
      <Qcm game={game} mode="training" color="var(--c-accent)" onDone={handleDone} />
    </div>
  )
}

function QuizResults({ quiz, role, accountId, t, onBack, onReplay }) {
  const myId = deviceId()
  const [rows, setRows] = useState(null)
  const [status, setStatus] = useState('loading')
  const load = useCallback(async () => {
    setStatus('loading')
    try { setRows(await fetchQuizResults(quiz.id)); setStatus('ok') } catch { setStatus('error') }
  }, [quiz.id])
  useEffect(() => { load() }, [load])
  return (
    <div className="space-y-3">
      <button onClick={onBack} className="text-sm font-semibold text-[#98761f] hover:underline dark:text-[#d9bd77]">← {t('backToQuizzes')}</button>
      <div className="flex items-end justify-between gap-3">
        <h2 className="font-display text-xl font-semibold">{t('quizRanking')} · {quiz.title || t('quizUntitled')}</h2>
        <button onClick={onReplay} disabled={!quiz.questions?.length} className="btn-ghost shrink-0 !min-h-0 !py-2 text-sm">{t('playQuiz')}</button>
      </div>
      {status === 'loading' && <Loading />}
      {status === 'error' && <ErrorBox t={t} onRetry={load} />}
      {rows && rows.length === 0 && <Empty>{t('noResultYet')}</Empty>}
      {rows && rows.map((r, i) => {
        const me = r.device_id === myId
        const pct = r.total ? Math.round((r.score / r.total) * 100) : 0
        return (
          <div key={r.device_id} className="card flex items-center gap-3 p-3" style={me ? { boxShadow: 'inset 0 0 0 2px var(--c-accent)' } : undefined}>
            <span className="w-7 shrink-0 text-center font-display text-lg font-semibold" style={{ color: i < 3 ? undefined : 'var(--c-accent)' }}>{medal(i)}</span>
            <span className="monogram grid h-10 w-10 shrink-0 place-items-center overflow-hidden text-sm">{initialsOf(r.name)}</span>
            <span className="min-w-0 flex-1 truncate font-semibold">{r.name || t('roleStudent')}{me && <span className="ml-1 text-xs font-normal text-slate-400">· {t('youLabel')}</span>}</span>
            <span className="shrink-0 text-right"><span className="font-display text-xl font-semibold" style={{ color: 'var(--c-accent)' }}>{r.score}/{r.total}</span><span className="block text-[0.65rem] uppercase tracking-wide text-slate-400">{pct}%</span></span>
          </div>
        )
      })}
    </div>
  )
}

const emptyQ = () => ({ q: '', choices: ['', ''], answer: 0, explain: '' })
function QuizBuilder({ classCode, authorName, accountId, propose, t, onCancel, onSaved }) {
  const [title, setTitle] = useState('')
  const [questions, setQuestions] = useState([emptyQ()])
  const [busy, setBusy] = useState(false)
  const [err, setErr] = useState('')
  const setQ = (i, patch) => setQuestions((qs) => qs.map((q, j) => (j === i ? { ...q, ...patch } : q)))
  const setChoice = (i, k, val) => setQuestions((qs) => qs.map((q, j) => (j === i ? { ...q, choices: q.choices.map((c, m) => (m === k ? val : c)) } : q)))
  const addChoice = (i) => setQuestions((qs) => qs.map((q, j) => (j === i && q.choices.length < 6 ? { ...q, choices: [...q.choices, ''] } : q)))
  const rmChoice = (i, k) => setQuestions((qs) => qs.map((q, j) => {
    if (j !== i || q.choices.length <= 2) return q
    const choices = q.choices.filter((_, m) => m !== k)
    const answer = q.answer >= choices.length ? 0 : (k < q.answer ? q.answer - 1 : q.answer)
    return { ...q, choices, answer }
  }))
  const addQ = () => setQuestions((qs) => (qs.length < 30 ? [...qs, emptyQ()] : qs))
  const rmQ = (i) => setQuestions((qs) => (qs.length > 1 ? qs.filter((_, j) => j !== i) : qs))
  const valid = questions.filter(validQuestion)
  const canSave = title.trim().length > 0 && valid.length > 0
  const save = async () => {
    setErr('')
    if (!canSave) { setErr(t('quizNeedsOne')); return }
    setBusy(true)
    try {
      await createQuiz({ classCode, authorId: accountId, authorName, title: title.trim(), questions: valid,
        status: propose ? 'proposed' : 'approved', proposedBy: propose ? authorName : '' })
      onSaved()
    } catch { setErr(t('rankOffline')); setBusy(false) }
  }
  return (
    <div className="space-y-4">
      <button onClick={onCancel} className="text-sm font-semibold text-[#98761f] hover:underline dark:text-[#d9bd77]">← {t('backToQuizzes')}</button>
      <h2 className="font-display text-2xl font-medium">{propose ? t('proposeQuestion') : t('createQuiz')}</h2>
      {propose && <p className="-mt-2 text-sm text-slate-500 dark:text-slate-400">{t('proposeHint')}</p>}
      <div className="card p-4">
        <label className="block text-xs font-semibold uppercase tracking-wide text-slate-400">{t('quizTitle')}</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} maxLength={120} placeholder={t('quizTitlePlaceholder')}
          className="mt-1 w-full rounded-xl border border-[color-mix(in_srgb,var(--c-accent)_30%,transparent)] bg-transparent px-3 py-2.5 text-base outline-none focus:border-[var(--c-accent)]" />
      </div>
      {questions.map((q, i) => (
        <div key={i} className="card p-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">{t('question')} {i + 1}</span>
            {questions.length > 1 && <button onClick={() => rmQ(i)} className="text-xs font-semibold text-rose-600 hover:underline">{t('remove')}</button>}
          </div>
          <input value={q.q} onChange={(e) => setQ(i, { q: e.target.value })} maxLength={300} placeholder={t('questionPlaceholder')}
            className="w-full rounded-xl border border-slate-200 bg-transparent px-3 py-2.5 text-base outline-none focus:border-[var(--c-accent)] dark:border-slate-700" />
          <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-400">{t('choicesLabel')}</p>
          <div className="mt-1.5 space-y-2">
            {q.choices.map((c, k) => (
              <div key={k} className="flex items-center gap-2">
                <button type="button" onClick={() => setQ(i, { answer: k })} aria-label={t('markCorrect')}
                  className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 text-xs font-bold transition ${q.answer === k ? 'border-emerald-500 bg-emerald-500 text-white' : 'border-slate-300 text-slate-400 dark:border-slate-600'}`}>{q.answer === k ? '✓' : String.fromCharCode(65 + k)}</button>
                <input value={c} onChange={(e) => setChoice(i, k, e.target.value)} maxLength={160} placeholder={`${t('choice')} ${String.fromCharCode(65 + k)}`}
                  className="w-full rounded-xl border border-slate-200 bg-transparent px-3 py-2 text-sm outline-none focus:border-[var(--c-accent)] dark:border-slate-700" />
                {q.choices.length > 2 && <button type="button" onClick={() => rmChoice(i, k)} className="shrink-0 text-slate-400 hover:text-rose-500" aria-label={t('remove')}>✕</button>}
              </div>
            ))}
          </div>
          {q.choices.length < 6 && <button type="button" onClick={() => addChoice(i)} className="mt-2 text-xs font-semibold text-[var(--c-accent)] hover:underline">＋ {t('addChoice')}</button>}
          <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-400">{t('explainOptional')}</p>
          <input value={q.explain} onChange={(e) => setQ(i, { explain: e.target.value })} maxLength={300} placeholder={t('explainPlaceholder')}
            className="mt-1 w-full rounded-xl border border-slate-200 bg-transparent px-3 py-2 text-sm outline-none focus:border-[var(--c-accent)] dark:border-slate-700" />
          <p className="mt-2 text-xs text-slate-400">✓ {t('correctChoiceHint')}</p>
        </div>
      ))}
      <button onClick={addQ} disabled={questions.length >= 30} className="btn-ghost w-full !py-2.5 text-sm">＋ {t('addQuestion')}</button>
      {err && <p className="text-sm font-semibold text-rose-600">{err}</p>}
      <div className="flex gap-2">
        <button onClick={onCancel} className="btn-ghost flex-1">{t('cancel')}</button>
        <button onClick={save} disabled={!canSave || busy} className="btn-primary flex-[2]">{busy ? t('pleaseWait') : propose ? t('sendProposal') : t('publishQuiz')}</button>
      </div>
    </div>
  )
}

// ----- Duels ----------------------------------------------------------------
function DuelList({ classCode, name, t }) {
  const myId = deviceId()
  const [view, setView] = useState('list') // list | pickQuiz | play
  const [duels, setDuels] = useState(null)
  const [quizzes, setQuizzes] = useState([])
  const [status, setStatus] = useState('loading')
  const [ctx, setCtx] = useState(null) // { quiz, duelId? } — play context

  const load = useCallback(async () => {
    setStatus('loading')
    try {
      const [d, q] = await Promise.all([fetchDuels(classCode), fetchQuizzes(classCode)])
      setDuels(d); setQuizzes(q.filter((x) => x.status !== 'proposed' && x.questions?.length))
      setStatus('ok')
    } catch { setStatus('error') }
  }, [classCode])
  useEffect(() => { if (view === 'list') load() }, [load, view])

  if (view === 'pickQuiz') {
    return (
      <div className="space-y-3">
        <button onClick={() => setView('list')} className="text-sm font-semibold text-[#98761f] hover:underline dark:text-[#d9bd77]">← {t('back')}</button>
        <h2 className="font-display text-xl font-semibold">{t('pickQuizForDuel')}</h2>
        {quizzes.length === 0 && <Empty>{t('noQuizForDuel')}</Empty>}
        {quizzes.map((qz) => (
          <button key={qz.id} onClick={() => { setCtx({ quiz: qz }); setView('play') }} className="card flex w-full items-center gap-3 p-4 text-left transition hover:-translate-y-0.5 hover:shadow-md">
            <span aria-hidden className="text-lg">📝</span>
            <span className="min-w-0 flex-1"><span className="block truncate font-semibold">{qz.title || t('quizUntitled')}</span><span className="block text-xs text-slate-400">{qz.questions.length} {t('questionsWord')}</span></span>
            <span className="text-slate-300" aria-hidden>›</span>
          </button>
        ))}
      </div>
    )
  }
  if (view === 'play' && ctx) {
    const game = { questions: ctx.quiz.questions || [] }
    const onDone = async ({ correct, total }) => {
      try {
        if (ctx.duelId) await acceptDuel({ id: ctx.duelId, name, score: correct, total })
        else await createDuel({ classCode, quizId: ctx.quiz.id, quizTitle: ctx.quiz.title, name, score: correct, total })
      } catch { /* */ }
      setCtx(null); setView('list')
    }
    return (
      <div className="space-y-3">
        <button onClick={() => { setCtx(null); setView('list') }} className="text-sm font-semibold text-[#98761f] hover:underline dark:text-[#d9bd77]">← {t('back')}</button>
        <h2 className="font-display text-xl font-semibold">⚔️ {ctx.quiz.title || t('quizUntitled')}</h2>
        <Qcm game={game} mode="training" color="var(--c-accent)" onDone={onDone} />
      </div>
    )
  }

  const open = (duels || []).filter((d) => d.status === 'open')
  const mine = open.filter((d) => d.challenger_device === myId)
  const toAccept = open.filter((d) => d.challenger_device !== myId)
  const done = (duels || []).filter((d) => d.status === 'done')

  return (
    <div className="space-y-3">
      <button onClick={() => setView('pickQuiz')} className="btn-primary w-full gap-1.5">⚔️ {t('startDuel')}</button>
      {status === 'loading' && <Loading />}
      {status === 'error' && <ErrorBox t={t} onRetry={load} />}
      {status === 'ok' && open.length === 0 && done.length === 0 && <Empty>{t('noDuelYet')}</Empty>}

      {toAccept.length > 0 && <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{t('duelsToAccept')}</p>}
      {toAccept.map((d) => {
        const quiz = quizzes.find((q) => q.id === d.quiz_id)
        return (
          <div key={d.id} className="card p-4">
            <p className="font-semibold">⚔️ {d.challenger_name || t('roleStudent')} <span className="text-slate-400">· {d.quiz_title}</span></p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{t('theirScore')}: {d.challenger_score}/{d.challenger_total}</p>
            {quiz ? <button onClick={() => { setCtx({ quiz, duelId: d.id }); setView('play') }} className="btn-primary mt-2 !min-h-0 w-full !py-2 text-sm">{t('acceptDuel')}</button>
              : <p className="mt-2 text-xs text-slate-400">{t('quizGone')}</p>}
          </div>
        )
      })}

      {mine.length > 0 && <p className="pt-1 text-xs font-semibold uppercase tracking-wide text-slate-400">{t('yourOpenDuels')}</p>}
      {mine.map((d) => (
        <div key={d.id} className="card flex items-center justify-between gap-2 p-3.5">
          <span className="min-w-0"><span className="block truncate font-semibold">⏳ {d.quiz_title}</span><span className="block text-xs text-slate-400">{t('waitingOpponent')} · {d.challenger_score}/{d.challenger_total}</span></span>
          <button onClick={async () => { try { await deleteDuel(d.id) } catch { /* */ } load() }} className="shrink-0 text-xs font-semibold text-rose-600 hover:underline">{t('cancel')}</button>
        </div>
      ))}

      {done.length > 0 && <p className="pt-1 text-xs font-semibold uppercase tracking-wide text-slate-400">{t('finishedDuels')}</p>}
      {done.map((d) => {
        const aWin = d.challenger_score >= (d.opponent_score ?? -1)
        return (
          <div key={d.id} className="card p-3.5">
            <p className="mb-1 text-xs text-slate-400">{d.quiz_title}</p>
            <div className="flex items-center gap-2 text-sm">
              <span className={`flex-1 font-semibold ${aWin ? '' : 'opacity-60'}`}>{aWin && '👑 '}{d.challenger_name} <span className="text-slate-400">{d.challenger_score}/{d.challenger_total}</span></span>
              <span className="text-slate-300">vs</span>
              <span className={`flex-1 text-right font-semibold ${!aWin ? '' : 'opacity-60'}`}>{!aWin && '👑 '}{d.opponent_name} <span className="text-slate-400">{d.opponent_score}/{d.opponent_total}</span></span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

// ----- Onglet Mur -----------------------------------------------------------
const REACTIONS = ['👏', '🔥', '💡', '🙋']
function WallTab({ classCode, role, name, track, t }) {
  const myId = deviceId()
  const [items, setItems] = useState(null)
  const [status, setStatus] = useState('loading')
  const [kind, setKind] = useState(role === 'prof' ? 'announce' : 'question')
  const [text, setText] = useState('')
  const [chapter, setChapter] = useState('')
  const [anon, setAnon] = useState(false)
  const [busy, setBusy] = useState(false)

  const load = useCallback(async () => {
    setStatus('loading')
    try { setItems(await fetchWall(classCode)); setStatus('ok') } catch { setStatus('error') }
  }, [classCode])
  useEffect(() => { load() }, [load])

  const submit = async () => {
    if (!text.trim()) return
    setBusy(true)
    try {
      await postWall({ classCode, name, kind, text: text.trim(), chapterLabel: kind === 'sos' ? chapter : '', isAnon: kind !== 'announce' && anon })
      setText(''); setChapter(''); await load()
    } catch { /* */ } finally { setBusy(false) }
  }
  const react = async (id, e) => { try { const r = await reactWall(id, e); setItems((its) => its.map((it) => it.id === id ? { ...it, reactions: r } : it)) } catch { /* */ } }

  const KINDS = role === 'prof'
    ? [{ id: 'announce', label: `📣 ${t('kindAnnounce')}` }, { id: 'question', label: `❓ ${t('kindQuestion')}` }, { id: 'sos', label: `🆘 ${t('kindSos')}` }]
    : [{ id: 'question', label: `❓ ${t('kindQuestion')}` }, { id: 'sos', label: `🆘 ${t('kindSos')}` }]

  return (
    <div className="space-y-3">
      <div className="card p-4">
        <div className="flex flex-wrap gap-1.5">
          {KINDS.map((k) => (
            <button key={k.id} onClick={() => setKind(k.id)} className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${kind === k.id ? 'text-white' : 'text-slate-500 ring-1 ring-slate-200 dark:text-slate-400 dark:ring-slate-700'}`} style={kind === k.id ? { backgroundColor: 'var(--c-accent)' } : undefined}>{k.label}</button>
          ))}
        </div>
        {kind === 'sos' && (
          <input value={chapter} onChange={(e) => setChapter(e.target.value)} maxLength={120} placeholder={t('sosChapterPlaceholder')}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-transparent px-3 py-2 text-sm outline-none focus:border-[var(--c-accent)] dark:border-slate-700" />
        )}
        <textarea value={text} onChange={(e) => setText(e.target.value)} maxLength={1000} rows={2}
          placeholder={kind === 'announce' ? t('announcePlaceholder') : kind === 'sos' ? t('sosPlaceholder') : t('questionWallPlaceholder')}
          className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-transparent px-3 py-2 text-sm outline-none focus:border-[var(--c-accent)] dark:border-slate-700" />
        <div className="mt-2 flex items-center justify-between gap-2">
          {kind !== 'announce'
            ? <label className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400"><input type="checkbox" checked={anon} onChange={(e) => setAnon(e.target.checked)} /> {t('postAnon')}</label>
            : <span />}
          <button onClick={submit} disabled={!text.trim() || busy} className="btn-primary !min-h-0 !py-2 text-sm">{busy ? t('pleaseWait') : t('post')}</button>
        </div>
      </div>

      {status === 'loading' && <Loading />}
      {status === 'error' && <ErrorBox t={t} onRetry={load} />}
      {items && items.length === 0 && <Empty>{t('wallEmpty')}</Empty>}
      {items && items.map((it) => {
        const canManage = role === 'prof' || it.device_id === myId
        const author = it.is_anon ? t('anonymous') : (it.name || t('roleStudent'))
        const badge = it.kind === 'announce' ? `📣 ${t('kindAnnounce')}` : it.kind === 'sos' ? `🆘 ${t('kindSos')}` : `❓ ${t('kindQuestion')}`
        return (
          <div key={it.id} className={`card p-4 ${it.kind === 'announce' ? 'border-l-4' : ''}`} style={it.kind === 'announce' ? { borderColor: 'var(--c-accent)' } : undefined}>
            <div className="flex items-center justify-between gap-2">
              <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--c-accent)' }}>{badge}</p>
              {canManage && <button onClick={async () => { try { await deleteWall(it.id) } catch { /* */ } load() }} className="text-xs text-slate-400 hover:text-rose-500">✕</button>}
            </div>
            {it.kind === 'sos' && it.chapter_label && <p className="mt-1 text-sm font-semibold">📚 {it.chapter_label}</p>}
            <p className="mt-1 whitespace-pre-wrap text-sm">{it.text}</p>
            <p className="mt-1 text-xs text-slate-400">— {author}{it.resolved ? ` · ✓ ${t('resolved')}` : ''}</p>
            {it.answer && (
              <div className="mt-2 rounded-xl bg-[color-mix(in_srgb,var(--c-accent)_8%,transparent)] p-2.5 text-sm">
                <span className="font-semibold" style={{ color: 'var(--c-accent)' }}>↳ {it.answered_by || t('roleTeacher')}: </span>{it.answer}
              </div>
            )}
            <div className="mt-2 flex flex-wrap items-center gap-1.5">
              {REACTIONS.map((e) => (
                <button key={e} onClick={() => react(it.id, e)} className="rounded-full px-2 py-1 text-sm ring-1 ring-slate-200 transition hover:bg-slate-100 dark:ring-slate-700 dark:hover:bg-slate-800">
                  {e}{it.reactions?.[e] ? <span className="ml-0.5 text-xs font-semibold">{it.reactions[e]}</span> : ''}
                </button>
              ))}
              {role === 'prof' && <AnswerButton it={it} name={name} t={t} onDone={load} />}
              {canManage && !it.resolved && it.kind !== 'announce' && <button onClick={async () => { try { await resolveWall(it.id, true) } catch { /* */ } load() }} className="ml-auto text-xs font-semibold text-emerald-600 hover:underline">✓ {t('markResolved')}</button>}
            </div>
          </div>
        )
      })}
    </div>
  )
}

function AnswerButton({ it, name, t, onDone }) {
  const [open, setOpen] = useState(false)
  const [val, setVal] = useState(it.answer || '')
  if (!open) return <button onClick={() => setOpen(true)} className="text-xs font-semibold text-[var(--c-accent)] hover:underline">💬 {t('reply')}</button>
  return (
    <div className="mt-1 w-full">
      <textarea value={val} onChange={(e) => setVal(e.target.value)} rows={2} maxLength={1000} placeholder={t('replyPlaceholder')}
        className="w-full resize-none rounded-xl border border-slate-200 bg-transparent px-3 py-2 text-sm outline-none focus:border-[var(--c-accent)] dark:border-slate-700" />
      <div className="mt-1 flex gap-2">
        <button onClick={() => setOpen(false)} className="text-xs font-semibold text-slate-400">{t('cancel')}</button>
        <button onClick={async () => { try { await answerWall(it.id, val, name) } catch { /* */ } setOpen(false); onDone() }} className="btn-primary !min-h-0 !py-1.5 text-xs">{t('sendReply')}</button>
      </div>
    </div>
  )
}

// ----- Onglet Membres -------------------------------------------------------
function MembersTab({ classCode, track, t }) {
  const [members, setMembers] = useState(null)
  const [groups, setGroups] = useState([])
  const [status, setStatus] = useState('loading')
  const load = useCallback(async () => {
    setStatus('loading')
    try { const [m, g] = await Promise.all([fetchMembers(classCode), fetchGroups(classCode)]); setMembers(m); setGroups(g); setStatus('ok') } catch { setStatus('error') }
  }, [classCode])
  useEffect(() => { load() }, [load])
  const groupById = Object.fromEntries(groups.map((g) => [g.id, g]))
  const students = (members || []).filter((m) => m.role !== 'prof')
  const profs = (members || []).filter((m) => m.role === 'prof')
  return (
    <div className="space-y-3">
      {status === 'loading' && <Loading />}
      {status === 'error' && <ErrorBox t={t} onRetry={load} />}
      {members && members.length === 0 && <Empty>{t('noMemberYet')}</Empty>}
      {profs.length > 0 && (
        <>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">🧑‍🏫 {t('roleTeacher')}</p>
          {profs.map((m) => <MemberRow key={m.device_id} m={m} group={groupById[m.group_id]} t={t} />)}
        </>
      )}
      {students.length > 0 && <p className="pt-1 text-xs font-semibold uppercase tracking-wide text-slate-400">🎓 {t('roleStudent')} · {students.length}</p>}
      {students.map((m) => <MemberRow key={m.device_id} m={m} group={groupById[m.group_id]} t={t} />)}
    </div>
  )
}
function MemberRow({ m, group, t }) {
  return (
    <div className="card flex items-center gap-3 p-3">
      <span className="monogram grid h-10 w-10 shrink-0 place-items-center overflow-hidden text-sm">{m.photo ? <img src={m.photo} alt="" className="h-full w-full rounded-full object-cover" /> : initialsOf(m.name)}</span>
      <span className="min-w-0 flex-1"><span className="block truncate font-semibold">{m.name || t('roleStudent')}</span>
        {group && <span className="mt-0.5 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.65rem] font-semibold" style={{ backgroundColor: (group.color || '#999') + '22', color: group.color || undefined }}>{group.emoji} {group.name}</span>}
      </span>
      <span className="shrink-0 text-right text-xs text-slate-400">
        <span className="block font-display text-base font-semibold text-[color:var(--c-accent)]">{m.xp} XP</span>
        <span>🔥 {m.streak} · {m.courses_week} {t('thisWeekShort')}</span>
      </span>
    </div>
  )
}

// ----- Onglet Professeur ----------------------------------------------------
function ProfTab({ classCode, name, track, meta, reloadMeta, t }) {
  const [sub, setSub] = useState('board') // board | groups | settings
  const SUBS = [{ id: 'board', label: t('profBoard') }, { id: 'groups', label: t('profGroups') }, { id: 'settings', label: t('profSettings') }]
  return (
    <div className="space-y-3">
      <div className="flex gap-1.5 text-xs">
        {SUBS.map((s) => (
          <button key={s.id} onClick={() => setSub(s.id)} className={`whitespace-nowrap rounded-full px-3 py-1.5 font-semibold transition ${sub === s.id ? 'text-white' : 'text-slate-500 ring-1 ring-slate-200 dark:text-slate-400 dark:ring-slate-700'}`} style={sub === s.id ? { backgroundColor: 'var(--c-accent)' } : undefined}>{s.label}</button>
        ))}
      </div>
      {sub === 'board' && <ProfDashboard classCode={classCode} track={track} t={t} />}
      {sub === 'groups' && <ProfGroups classCode={classCode} t={t} />}
      {sub === 'settings' && <ProfSettings classCode={classCode} name={name} track={track} meta={meta} reloadMeta={reloadMeta} t={t} />}
    </div>
  )
}

function ProfDashboard({ classCode, track, t }) {
  const [members, setMembers] = useState(null)
  const [status, setStatus] = useState('loading')
  const load = useCallback(async () => {
    setStatus('loading')
    try { setMembers(await fetchMembers(classCode)); setStatus('ok') } catch { setStatus('error') }
  }, [classCode])
  useEffect(() => { load() }, [load])
  const students = (members || []).filter((m) => m.role !== 'prof')
  const trackSubjects = (track ? subjectsForTrack(track) : []).filter((s) => s && !s.comingSoon && s.chapters?.length)
  const avg = (sid) => {
    const vals = students.map((m) => Number(m.subjects?.[sid] || 0))
    return vals.length ? Math.round(vals.reduce((a, b) => a + b, 0) / vals.length) : 0
  }
  const heat = (v) => v >= 70 ? '#16a085' : v >= 45 ? '#f1c40f' : v >= 20 ? '#e67e22' : '#c0392b'
  const rows = students.length ? trackSubjects.map((s) => ({ s, v: avg(s.id) })).sort((a, b) => a.v - b.v) : []
  return (
    <div className="space-y-3">
      <div className="card p-4">
        <h2 className="font-display text-lg font-semibold">📊 {t('classDashboard')}</h2>
        <p className="mt-1 text-xs text-slate-400">{students.length} {t('membersCount')} · {t('lacunaHint')}</p>
      </div>
      {status === 'loading' && <Loading />}
      {status === 'error' && <ErrorBox t={t} onRetry={load} />}
      {status === 'ok' && students.length === 0 && <Empty>{t('noMemberYet')}</Empty>}
      {rows.map(({ s, v }) => (
        <div key={s.id} className="card flex items-center gap-3 p-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-lg" style={{ backgroundColor: s.color + '18' }}>{s.icon}</span>
          <span className="min-w-0 flex-1"><span className="block text-sm font-semibold leading-tight">{s.name}</span>
            <span className="mt-1 block h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800"><span className="block h-full rounded-full" style={{ width: `${Math.max(3, v)}%`, backgroundColor: heat(v) }} /></span>
          </span>
          <span className="shrink-0 font-display text-lg font-semibold" style={{ color: heat(v) }}>{v}%</span>
        </div>
      ))}
      {rows.length > 0 && <p className="pt-1 text-center text-xs text-slate-400">🔴 {t('weakest')}: {rows[0].s.name}</p>}
    </div>
  )
}

function ProfGroups({ classCode, t }) {
  const [members, setMembers] = useState(null)
  const [groups, setGroups] = useState([])
  const [status, setStatus] = useState('loading')
  const [gname, setGname] = useState('')
  const [gemoji, setGemoji] = useState(GROUP_EMOJIS[0])
  const [gcolor, setGcolor] = useState(GROUP_COLORS[0])
  const load = useCallback(async () => {
    setStatus('loading')
    try { const [m, g] = await Promise.all([fetchMembers(classCode), fetchGroups(classCode)]); setMembers(m); setGroups(g); setStatus('ok') } catch { setStatus('error') }
  }, [classCode])
  useEffect(() => { load() }, [load])
  const students = (members || []).filter((m) => m.role !== 'prof')
  const create = async () => {
    if (!gname.trim()) return
    try { await createGroup({ classCode, name: gname.trim(), color: gcolor, emoji: gemoji }) } catch { /* */ }
    setGname(''); load()
  }
  return (
    <div className="space-y-3">
      <div className="card p-4">
        <h2 className="font-display text-lg font-semibold">🏳️ {t('createGroup')}</h2>
        <p className="mt-1 text-xs text-slate-400">{t('createGroupHint')}</p>
        <input value={gname} onChange={(e) => setGname(e.target.value)} maxLength={40} placeholder={t('groupNamePlaceholder')}
          className="mt-2 w-full rounded-xl border border-slate-200 bg-transparent px-3 py-2 text-sm outline-none focus:border-[var(--c-accent)] dark:border-slate-700" />
        <div className="mt-2 flex flex-wrap gap-1.5">
          {GROUP_EMOJIS.map((e) => <button key={e} onClick={() => setGemoji(e)} className={`grid h-8 w-8 place-items-center rounded-lg text-base ${gemoji === e ? 'ring-2' : 'ring-1 ring-slate-200 dark:ring-slate-700'}`} style={gemoji === e ? { boxShadow: 'inset 0 0 0 2px var(--c-accent)' } : undefined}>{e}</button>)}
        </div>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {GROUP_COLORS.map((c) => <button key={c} onClick={() => setGcolor(c)} aria-label={c} className={`h-8 w-8 rounded-lg ${gcolor === c ? 'ring-2 ring-offset-2 ring-slate-400 dark:ring-offset-slate-900' : ''}`} style={{ backgroundColor: c }} />)}
        </div>
        <button onClick={create} disabled={!gname.trim()} className="btn-primary mt-3 w-full !min-h-0 !py-2 text-sm">＋ {t('createGroup')}</button>
      </div>

      {status === 'loading' && <Loading />}
      {status === 'error' && <ErrorBox t={t} onRetry={load} />}
      {groups.map((g) => (
        <div key={g.id} className="card p-3.5">
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-2 font-display font-semibold" style={{ color: g.color || undefined }}><span className="text-lg">{g.emoji}</span>{g.name}</span>
            <button onClick={async () => { if (confirm(t('deleteGroupConfirm'))) { try { await deleteGroup(g.id) } catch { /* */ } load() } }} className="text-xs font-semibold text-rose-600 hover:underline">{t('delete')}</button>
          </div>
          <p className="mt-1 text-xs text-slate-400">{students.filter((m) => m.group_id === g.id).length} {t('membersCount')}</p>
        </div>
      ))}

      {students.length > 0 && (
        <div className="card p-4">
          <h3 className="font-display font-semibold">{t('assignMembers')}</h3>
          <div className="mt-2 space-y-2">
            {students.map((m) => (
              <div key={m.device_id} className="flex items-center gap-2">
                <span className="monogram grid h-8 w-8 shrink-0 place-items-center overflow-hidden text-xs">{m.photo ? <img src={m.photo} alt="" className="h-full w-full rounded-full object-cover" /> : initialsOf(m.name)}</span>
                <span className="min-w-0 flex-1 truncate text-sm font-semibold">{m.name || t('roleStudent')}</span>
                <select value={m.group_id || ''} onChange={async (e) => { try { await setMemberGroup({ classCode, deviceId: m.device_id, groupId: e.target.value || null }) } catch { /* */ } load() }}
                  className="shrink-0 rounded-lg border border-slate-200 bg-transparent px-2 py-1.5 text-sm dark:border-slate-700">
                  <option value="">— {t('noGroup')} —</option>
                  {groups.map((g) => <option key={g.id} value={g.id}>{g.emoji} {g.name}</option>)}
                </select>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function ProfSettings({ classCode, name, track, meta, reloadMeta, t }) {
  const [bname, setBname] = useState(meta?.blason_name || '')
  const [bemoji, setBemoji] = useState(meta?.blason_emoji || '🏫')
  const [bcolor, setBcolor] = useState(meta?.blason_color || GROUP_COLORS[0])
  const [goal, setGoal] = useState(meta?.goal_target || 0)
  const [announce, setAnnounce] = useState(meta?.announcement || '')
  const [csid, setCsid] = useState((meta?.challenge_chapter || '').split('|')[0] || '')
  const [ctid, setCtid] = useState((meta?.challenge_chapter || '').split('|')[1] || '')
  const [saved, setSaved] = useState('')
  const trackSubjects = (track ? subjectsForTrack(track) : []).filter((s) => s && !s.comingSoon && s.chapters?.length)
  const chosenSubj = trackSubjects.find((s) => s.id === csid)

  const flash = (msg) => { setSaved(msg); setTimeout(() => setSaved(''), 2500) }
  const saveBlason = async () => { try { await upsertMeta(classCode, { blason_name: bname.trim(), blason_emoji: bemoji, blason_color: bcolor }) ; flash(t('saved')); reloadMeta() } catch { /* */ } }
  const saveGoal = async () => { try { await upsertMeta(classCode, { goal_target: Math.max(0, Math.min(100000, Math.round(Number(goal) || 0))) }); flash(t('saved')); reloadMeta() } catch { /* */ } }
  const saveAnnounce = async () => { try { await upsertMeta(classCode, { announcement: announce.trim(), announcement_by: name, announcement_at: new Date().toISOString() }); flash(t('saved')); reloadMeta() } catch { /* */ } }
  const saveChallenge = async () => {
    const ch = trackSubjects.find((s) => s.id === csid)?.chapters?.find((c) => c.id === ctid)
    const label = ch ? `${chosenSubj?.name} — ${ch.short || ch.name}` : ''
    try { await upsertMeta(classCode, { challenge_chapter: csid && ctid ? `${csid}|${ctid}` : '', challenge_label: label }); flash(t('saved')); reloadMeta() } catch { /* */ }
  }

  return (
    <div className="space-y-3">
      {saved && <p className="rounded-xl bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-200">✓ {saved}</p>}

      {/* Blason */}
      <div className="card p-4">
        <h3 className="font-display font-semibold">🛡️ {t('classCrest')}</h3>
        <input value={bname} onChange={(e) => setBname(e.target.value)} maxLength={40} placeholder={t('crestNamePlaceholder')}
          className="mt-2 w-full rounded-xl border border-slate-200 bg-transparent px-3 py-2 text-sm outline-none focus:border-[var(--c-accent)] dark:border-slate-700" />
        <div className="mt-2 flex flex-wrap gap-1.5">{GROUP_EMOJIS.concat(['🏫', '🎓', '📚']).map((e) => <button key={e} onClick={() => setBemoji(e)} className={`grid h-8 w-8 place-items-center rounded-lg text-base ${bemoji === e ? 'ring-2' : 'ring-1 ring-slate-200 dark:ring-slate-700'}`} style={bemoji === e ? { boxShadow: 'inset 0 0 0 2px var(--c-accent)' } : undefined}>{e}</button>)}</div>
        <div className="mt-2 flex flex-wrap gap-1.5">{GROUP_COLORS.map((c) => <button key={c} onClick={() => setBcolor(c)} aria-label={c} className={`h-8 w-8 rounded-lg ${bcolor === c ? 'ring-2 ring-offset-2 ring-slate-400 dark:ring-offset-slate-900' : ''}`} style={{ backgroundColor: c }} />)}</div>
        <button onClick={saveBlason} className="btn-primary mt-3 w-full !min-h-0 !py-2 text-sm">{t('save')}</button>
      </div>

      {/* Objectif collectif */}
      <div className="card p-4">
        <h3 className="font-display font-semibold">🎯 {t('weeklyGoalTarget')}</h3>
        <p className="mt-1 text-xs text-slate-400">{t('goalTargetHint')}</p>
        <div className="mt-2 flex items-center gap-2">
          <input type="number" min={0} max={100000} value={goal} onChange={(e) => setGoal(e.target.value)} className="w-28 rounded-xl border border-slate-200 bg-transparent px-3 py-2 text-sm dark:border-slate-700" />
          <span className="text-sm text-slate-500 dark:text-slate-400">{t('coursesThisWeek')}</span>
          <button onClick={saveGoal} className="btn-primary ml-auto !min-h-0 !py-2 text-sm">{t('save')}</button>
        </div>
      </div>

      {/* Annonce */}
      <div className="card p-4">
        <h3 className="font-display font-semibold">📣 {t('classAnnouncement')}</h3>
        <textarea value={announce} onChange={(e) => setAnnounce(e.target.value)} rows={2} maxLength={500} placeholder={t('announcePlaceholder')}
          className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-transparent px-3 py-2 text-sm outline-none focus:border-[var(--c-accent)] dark:border-slate-700" />
        <button onClick={saveAnnounce} className="btn-primary mt-2 w-full !min-h-0 !py-2 text-sm">{t('publishAnnouncement')}</button>
      </div>

      {/* Défi de la semaine */}
      <div className="card p-4">
        <h3 className="font-display font-semibold">⚡ {t('setChallenge')}</h3>
        <select value={csid} onChange={(e) => { setCsid(e.target.value); setCtid('') }} className="mt-2 w-full rounded-xl border border-slate-200 bg-transparent px-3 py-2 text-sm dark:border-slate-700">
          <option value="">— {t('chooseSubject')} —</option>
          {trackSubjects.map((s) => <option key={s.id} value={s.id}>{s.icon} {s.name}</option>)}
        </select>
        {chosenSubj && (
          <select value={ctid} onChange={(e) => setCtid(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 bg-transparent px-3 py-2 text-sm dark:border-slate-700">
            <option value="">— {t('chooseChapterShort')} —</option>
            {chosenSubj.chapters.map((c) => <option key={c.id} value={c.id}>{c.short || c.name}</option>)}
          </select>
        )}
        <button onClick={saveChallenge} className="btn-primary mt-2 w-full !min-h-0 !py-2 text-sm">{t('save')}</button>
      </div>
    </div>
  )
}
