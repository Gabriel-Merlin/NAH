import { useCallback, useEffect, useMemo, useState } from 'react'
import { useStore } from '../store.jsx'
import { useT } from '../i18n.js'
import Qcm from '../games/Qcm.jsx'
import { submitScore, fetchRanking, deviceId, normalizeCode, LEADERBOARD_READY } from '../leaderboard.js'
import {
  createQuiz, fetchQuizzes, deleteQuiz, submitQuizResult, fetchQuizResults, fetchMembers, validQuestion,
} from '../classroom.js'
import { upsertProfile, isSignedIn } from '../auth.js'

const initialsOf = (name) => {
  const p = String(name || '').trim().split(/\s+/)
  return ((p[0]?.[0] || '') + (p[1]?.[0] || '')).toUpperCase() || '·'
}
const medal = (i) => (i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i + 1}`)

// ---------------------------------------------------------------------------
// Espace « Classe » : rejoindre par code, se comparer (classement) et faire
// les QCM créés par le professeur de la classe.
// ---------------------------------------------------------------------------
export default function Classe() {
  const { state, setClassCode } = useStore()
  const t = useT()
  const classCode = state.classCode
  const role = state.account?.role || 'eleve'
  const myName = `${state.profile?.firstName || ''} ${state.profile?.lastName || ''}`.trim() || t('roleStudent')
  const [tab, setTab] = useState('rank') // 'rank' | 'quiz' | 'members'

  if (!classCode) return <JoinForm onJoin={setClassCode} t={t} />

  const TABS = [
    { id: 'rank', label: t('tabRanking'), icon: '🏆' },
    { id: 'quiz', label: t('tabQuizzes'), icon: '📝' },
    { id: 'members', label: t('tabMembers'), icon: '👥' },
  ]

  return (
    <div className="animate-lux space-y-4">
      <header className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="kicker">{t('classSpace')}</p>
          <h1 className="truncate font-display text-3xl font-medium leading-tight">
            <span aria-hidden>👥</span> {classCode}
          </h1>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            {role === 'prof' ? `🧑‍🏫 ${t('roleTeacher')} · ${t('shareCodeHint')}` : `🎓 ${t('roleStudent')}`}
          </p>
        </div>
        <button
          onClick={() => { setClassCode('') }}
          className="shrink-0 text-xs font-semibold text-[#98761f] hover:underline dark:text-[#d9bd77]"
        >
          {t('leaveClass')}
        </button>
      </header>
      <hr className="rule-gold" />

      <div className="flex gap-1.5 overflow-x-auto rounded-2xl bg-[color-mix(in_srgb,var(--c-accent)_8%,transparent)] p-1.5">
        {TABS.map((tb) => (
          <button
            key={tb.id}
            onClick={() => setTab(tb.id)}
            className={`flex-1 whitespace-nowrap rounded-xl px-3 py-2 text-sm font-semibold transition ${
              tab === tb.id ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-800 dark:text-white' : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            <span aria-hidden className="mr-1">{tb.icon}</span>{tb.label}
          </button>
        ))}
      </div>

      {tab === 'rank' && <RankTab classCode={classCode} name={myName} photo={state.profile?.photo || ''} t={t} />}
      {tab === 'quiz' && <QuizTab classCode={classCode} role={role} name={myName} accountId={state.account?.id} t={t} />}
      {tab === 'members' && <MembersTab classCode={classCode} t={t} />}
    </div>
  )
}

// ----- Rejoindre une classe (onglet « code ») ------------------------------
function JoinForm({ onJoin, t }) {
  const [code, setCode] = useState('')
  const ok = normalizeCode(code).length >= 2
  const join = async () => {
    if (!ok) return
    const cc = normalizeCode(code)
    onJoin(cc)
    if (isSignedIn()) { try { await upsertProfile({ class_code: cc }) } catch { /* hors ligne : on ignore */ } }
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
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && join()}
          placeholder="ex : marceau-tstmg2"
          className="mt-1 w-full rounded-xl border border-[color-mix(in_srgb,var(--c-accent)_30%,transparent)] bg-transparent px-3 py-2.5 text-base outline-none focus:border-[var(--c-accent)]"
          maxLength={24}
          autoFocus
        />
        <button onClick={join} disabled={!ok} className="btn-primary mt-4 w-full">{t('joinBtn')}</button>
        <p className="mt-3 text-xs text-slate-400">{t('classJoinPrivacy')}</p>
        {!LEADERBOARD_READY && <p className="mt-2 text-xs text-rose-500">{t('rankOffline')}</p>}
      </div>
    </div>
  )
}

// ----- Onglet Classement (hebdomadaire) ------------------------------------
function RankTab({ classCode, name, photo, t }) {
  const { derived } = useStore()
  const courses = derived.weeklyCourses
  const myId = deviceId()
  const [rows, setRows] = useState(null)
  const [status, setStatus] = useState('idle')

  const load = useCallback(async () => {
    setStatus('loading')
    try {
      await submitScore({ classCode, name, photo, courses })
      setRows(await fetchRanking(classCode))
      setStatus('ok')
    } catch { setStatus('error') }
  }, [classCode, name, photo, courses])

  useEffect(() => { load() }, [load])

  return (
    <div className="space-y-3">
      <p className="text-xs text-slate-400">{t('weeklyRankHint')}</p>
      {status === 'loading' && !rows && <div className="card p-6 text-center text-sm text-slate-500 dark:text-slate-400">…</div>}
      {status === 'error' && (
        <div className="card p-6 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">{t('rankOffline')}</p>
          <button onClick={load} className="btn-ghost mt-3 !min-h-0 !py-2 text-sm">{t('retry')}</button>
        </div>
      )}
      {rows && rows.length === 0 && <div className="card p-6 text-center text-sm text-slate-500 dark:text-slate-400">{t('noOneYet')}</div>}
      {rows && rows.length > 0 && rows.map((r, i) => {
        const me = r.device_id === myId
        return (
          <div key={r.device_id + i} className="card flex items-center gap-3 p-3" style={me ? { boxShadow: 'inset 0 0 0 2px var(--c-accent)' } : undefined}>
            <span className="w-7 shrink-0 text-center font-display text-lg font-semibold" style={{ color: i < 3 ? undefined : 'var(--c-accent)' }}>{medal(i)}</span>
            <span className="monogram grid h-10 w-10 shrink-0 place-items-center overflow-hidden text-sm">
              {r.photo ? <img src={r.photo} alt="" className="h-full w-full rounded-full object-cover" /> : initialsOf(r.name)}
            </span>
            <span className="min-w-0 flex-1 truncate font-semibold">
              {r.name || t('roleStudent')}{me && <span className="ml-1 text-xs font-normal text-slate-400">· {t('youLabel')}</span>}
            </span>
            <span className="shrink-0 text-right">
              <span className="font-display text-xl font-semibold" style={{ color: 'var(--c-accent)' }}>{r.courses}</span>
              <span className="block text-[0.65rem] uppercase tracking-wide text-slate-400">{t('coursesThisWeek')}</span>
            </span>
          </div>
        )
      })}
    </div>
  )
}

// ----- Onglet QCM de la classe ---------------------------------------------
function QuizTab({ classCode, role, name, accountId, t }) {
  const [view, setView] = useState('list') // 'list' | 'build' | 'take' | 'results'
  const [quizzes, setQuizzes] = useState(null)
  const [status, setStatus] = useState('idle')
  const [active, setActive] = useState(null)

  const load = useCallback(async () => {
    setStatus('loading')
    try { setQuizzes(await fetchQuizzes(classCode)); setStatus('ok') } catch { setStatus('error') }
  }, [classCode])
  useEffect(() => { if (view === 'list') load() }, [load, view])

  if (view === 'build') {
    return <QuizBuilder classCode={classCode} authorName={name} accountId={accountId} t={t}
      onCancel={() => setView('list')} onSaved={() => setView('list')} />
  }
  if (view === 'take' && active) {
    return <QuizTake quiz={active} name={name} t={t} onDone={() => { setView('results') }} onBack={() => setView('list')} />
  }
  if (view === 'results' && active) {
    return <QuizResults quiz={active} name={name} role={role} accountId={accountId} t={t}
      onBack={() => { setActive(null); setView('list') }}
      onReplay={() => setView('take')} />
  }

  // Liste des QCM
  return (
    <div className="space-y-3">
      {role === 'prof' && (
        <button onClick={() => setView('build')} className="btn-primary w-full gap-1.5">
          <span aria-hidden>＋</span> {t('createQuiz')}
        </button>
      )}
      {status === 'loading' && !quizzes && <div className="card p-6 text-center text-sm text-slate-500 dark:text-slate-400">…</div>}
      {status === 'error' && (
        <div className="card p-6 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">{t('rankOffline')}</p>
          <button onClick={load} className="btn-ghost mt-3 !min-h-0 !py-2 text-sm">{t('retry')}</button>
        </div>
      )}
      {quizzes && quizzes.length === 0 && (
        <div className="card p-6 text-center text-sm text-slate-500 dark:text-slate-400">
          {role === 'prof' ? t('noQuizProf') : t('noQuizStudent')}
        </div>
      )}
      {quizzes && quizzes.map((qz) => (
        <div key={qz.id} className="card p-4">
          <div className="flex items-start gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl text-lg" style={{ backgroundColor: 'color-mix(in srgb, var(--c-accent) 12%, transparent)', boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--c-accent) 30%, transparent)' }} aria-hidden>📝</span>
            <div className="min-w-0 flex-1">
              <h3 className="font-display text-lg font-semibold leading-tight">{qz.title || t('quizUntitled')}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {qz.questions?.length || 0} {t('questionsWord')}{qz.author_name ? ` · ${qz.author_name}` : ''}
              </p>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <button onClick={() => { setActive(qz); setView('take') }} disabled={!qz.questions?.length}
              className="btn-primary !min-h-0 flex-1 !py-2 text-sm">{t('playQuiz')}</button>
            <button onClick={() => { setActive(qz); setView('results') }}
              className="btn-ghost !min-h-0 !py-2 text-sm">{t('quizRanking')}</button>
            {role === 'prof' && (
              <button
                onClick={async () => { if (confirm(t('deleteQuizConfirm'))) { try { await deleteQuiz(qz.id) } catch { /* ignore */ } load() } }}
                className="!min-h-0 rounded-xl px-3 py-2 text-sm font-semibold text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40"
              >{t('delete')}</button>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

// ----- Passer un QCM (réutilise le mini-jeu QCM) ---------------------------
function QuizTake({ quiz, name, t, onDone, onBack }) {
  const game = useMemo(() => ({ questions: quiz.questions || [] }), [quiz])
  const handleDone = async ({ correct, total }) => {
    try { await submitQuizResult({ quizId: quiz.id, name, score: correct, total }) } catch { /* hors ligne : on ignore */ }
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

// ----- Classement d'un QCM -------------------------------------------------
function QuizResults({ quiz, name, role, accountId, t, onBack, onReplay }) {
  const myId = deviceId()
  const [rows, setRows] = useState(null)
  const [status, setStatus] = useState('loading')
  const load = useCallback(async () => {
    setStatus('loading')
    try { setRows(await fetchQuizResults(quiz.id)); setStatus('ok') } catch { setStatus('error') }
  }, [quiz.id])
  useEffect(() => { load() }, [load])
  const isAuthor = role === 'prof' && (!quiz.author_id || quiz.author_id === accountId)

  return (
    <div className="space-y-3">
      <button onClick={onBack} className="text-sm font-semibold text-[#98761f] hover:underline dark:text-[#d9bd77]">← {t('backToQuizzes')}</button>
      <div className="flex items-end justify-between gap-3">
        <h2 className="font-display text-xl font-semibold">{t('quizRanking')} · {quiz.title || t('quizUntitled')}</h2>
        <button onClick={onReplay} disabled={!quiz.questions?.length} className="btn-ghost shrink-0 !min-h-0 !py-2 text-sm">{t('playQuiz')}</button>
      </div>
      {status === 'loading' && <div className="card p-6 text-center text-sm text-slate-500 dark:text-slate-400">…</div>}
      {status === 'error' && (
        <div className="card p-6 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">{t('rankOffline')}</p>
          <button onClick={load} className="btn-ghost mt-3 !min-h-0 !py-2 text-sm">{t('retry')}</button>
        </div>
      )}
      {rows && rows.length === 0 && <div className="card p-6 text-center text-sm text-slate-500 dark:text-slate-400">{t('noResultYet')}</div>}
      {rows && rows.map((r, i) => {
        const me = r.device_id === myId
        const pct = r.total ? Math.round((r.score / r.total) * 100) : 0
        return (
          <div key={r.device_id + i} className="card flex items-center gap-3 p-3" style={me ? { boxShadow: 'inset 0 0 0 2px var(--c-accent)' } : undefined}>
            <span className="w-7 shrink-0 text-center font-display text-lg font-semibold" style={{ color: i < 3 ? undefined : 'var(--c-accent)' }}>{medal(i)}</span>
            <span className="monogram grid h-10 w-10 shrink-0 place-items-center overflow-hidden text-sm">{initialsOf(r.name)}</span>
            <span className="min-w-0 flex-1 truncate font-semibold">
              {r.name || t('roleStudent')}{me && <span className="ml-1 text-xs font-normal text-slate-400">· {t('youLabel')}</span>}
            </span>
            <span className="shrink-0 text-right">
              <span className="font-display text-xl font-semibold" style={{ color: 'var(--c-accent)' }}>{r.score}/{r.total}</span>
              <span className="block text-[0.65rem] uppercase tracking-wide text-slate-400">{pct}%</span>
            </span>
          </div>
        )
      })}
      {isAuthor && rows && rows.length > 0 && (
        <p className="pt-1 text-center text-xs text-slate-400">{rows.length} {t('participants')}</p>
      )}
    </div>
  )
}

// ----- Créateur de QCM (professeur) ----------------------------------------
const emptyQ = () => ({ q: '', choices: ['', ''], answer: 0, explain: '' })

function QuizBuilder({ classCode, authorName, accountId, t, onCancel, onSaved }) {
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
      await createQuiz({ classCode, authorId: accountId, authorName, title: title.trim(), questions: valid })
      onSaved()
    } catch { setErr(t('rankOffline')); setBusy(false) }
  }

  return (
    <div className="space-y-4">
      <button onClick={onCancel} className="text-sm font-semibold text-[#98761f] hover:underline dark:text-[#d9bd77]">← {t('backToQuizzes')}</button>
      <h2 className="font-display text-2xl font-medium">{t('createQuiz')}</h2>

      <div className="card p-4">
        <label className="block text-xs font-semibold uppercase tracking-wide text-slate-400">{t('quizTitle')}</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} maxLength={120} placeholder={t('quizTitlePlaceholder')}
          className="mt-1 w-full rounded-xl border border-[color-mix(in_srgb,var(--c-accent)_30%,transparent)] bg-transparent px-3 py-2.5 text-base outline-none focus:border-[var(--c-accent)]" />
      </div>

      {questions.map((q, i) => (
        <div key={i} className="card p-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">{t('question')} {i + 1}</span>
            {questions.length > 1 && (
              <button onClick={() => rmQ(i)} className="text-xs font-semibold text-rose-600 hover:underline">{t('remove')}</button>
            )}
          </div>
          <input value={q.q} onChange={(e) => setQ(i, { q: e.target.value })} maxLength={300} placeholder={t('questionPlaceholder')}
            className="w-full rounded-xl border border-slate-200 bg-transparent px-3 py-2.5 text-base outline-none focus:border-[var(--c-accent)] dark:border-slate-700" />
          <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-400">{t('choicesLabel')}</p>
          <div className="mt-1.5 space-y-2">
            {q.choices.map((c, k) => (
              <div key={k} className="flex items-center gap-2">
                <button type="button" onClick={() => setQ(i, { answer: k })} aria-label={t('markCorrect')}
                  className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 text-xs font-bold transition ${
                    q.answer === k ? 'border-emerald-500 bg-emerald-500 text-white' : 'border-slate-300 text-slate-400 dark:border-slate-600'
                  }`}>{q.answer === k ? '✓' : String.fromCharCode(65 + k)}</button>
                <input value={c} onChange={(e) => setChoice(i, k, e.target.value)} maxLength={160} placeholder={`${t('choice')} ${String.fromCharCode(65 + k)}`}
                  className="w-full rounded-xl border border-slate-200 bg-transparent px-3 py-2 text-sm outline-none focus:border-[var(--c-accent)] dark:border-slate-700" />
                {q.choices.length > 2 && (
                  <button type="button" onClick={() => rmChoice(i, k)} className="shrink-0 text-slate-400 hover:text-rose-500" aria-label={t('remove')}>✕</button>
                )}
              </div>
            ))}
          </div>
          {q.choices.length < 6 && (
            <button type="button" onClick={() => addChoice(i)} className="mt-2 text-xs font-semibold text-[var(--c-accent)] hover:underline">＋ {t('addChoice')}</button>
          )}
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
        <button onClick={save} disabled={!canSave || busy} className="btn-primary flex-[2]">{busy ? t('pleaseWait') : t('publishQuiz')}</button>
      </div>
    </div>
  )
}

// ----- Onglet Membres ------------------------------------------------------
function MembersTab({ classCode, t }) {
  const [rows, setRows] = useState(null)
  const [status, setStatus] = useState('loading')
  const load = useCallback(async () => {
    setStatus('loading')
    try { setRows(await fetchMembers(classCode)); setStatus('ok') } catch { setStatus('error') }
  }, [classCode])
  useEffect(() => { load() }, [load])

  return (
    <div className="space-y-3">
      <p className="text-xs text-slate-400">{t('membersHint')}</p>
      {status === 'loading' && <div className="card p-6 text-center text-sm text-slate-500 dark:text-slate-400">…</div>}
      {status === 'error' && (
        <div className="card p-6 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">{t('rankOffline')}</p>
          <button onClick={load} className="btn-ghost mt-3 !min-h-0 !py-2 text-sm">{t('retry')}</button>
        </div>
      )}
      {rows && rows.length === 0 && <div className="card p-6 text-center text-sm text-slate-500 dark:text-slate-400">{t('noMemberYet')}</div>}
      {rows && rows.length > 0 && (
        <>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {rows.map((r) => (
              <div key={r.device_id} className="card flex items-center gap-2.5 p-3">
                <span className="monogram grid h-9 w-9 shrink-0 place-items-center overflow-hidden text-xs">
                  {r.photo ? <img src={r.photo} alt="" className="h-full w-full rounded-full object-cover" /> : initialsOf(r.name)}
                </span>
                <span className="min-w-0 flex-1 truncate text-sm font-semibold">{r.name || t('roleStudent')}</span>
              </div>
            ))}
          </div>
          <p className="pt-1 text-center text-xs text-slate-400">{rows.length} {t('membersCount')}</p>
        </>
      )}
    </div>
  )
}
