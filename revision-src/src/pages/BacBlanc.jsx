import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useStore } from '../store.jsx'
import { buildExam, examSubjects } from '../data/study.js'
import Exam from '../games/Exam.jsx'
import { useT } from '../i18n.js'

const DURATIONS = [
  { min: 15, q: 12 },
  { min: 30, q: 20 },
  { min: 45, q: 30 },
]

export default function BacBlanc() {
  const { state, recordExamSeen } = useStore()
  const t = useT()
  if (!state.track) return <Navigate to="/" replace />

  const subjects = examSubjects(state.track)
  const [subjectId, setSubjectId] = useState('all') // 'all' | subjectId
  const [dur, setDur] = useState(DURATIONS[1])
  const [exam, setExam] = useState(null) // { questions, durationSec }

  const start = () => {
    const ids = subjectId === 'all' ? null : [subjectId]
    const seen = state.examSeen?.[subjectId] || []
    const { questions, keys } = buildExam(state, state.track, ids, dur.q, seen)
    if (questions.length < 4) { setExam({ questions: [], durationSec: 0 }); return }
    recordExamSeen(subjectId, keys) // mémorise ce sujet pour ne pas le répéter
    setExam({ questions, durationSec: dur.min * 60 })
  }

  if (exam && exam.questions.length >= 4) {
    return <Exam questions={exam.questions} durationSec={exam.durationSec} color="var(--c-accent)" onExit={() => setExam(null)} />
  }

  return (
    <div className="animate-lux space-y-6">
      <header className="text-center">
        <p className="kicker">📝 {t('mockExam')}</p>
        <h1 className="mt-1 font-display text-[1.9rem] font-medium leading-tight">{t('mockExam')}</h1>
        <span className="mx-auto mt-3 block h-px w-24 rounded-full" style={{ background: 'linear-gradient(90deg,transparent,#c8a24e,transparent)' }} />
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{t('mockExamSub')}</p>
      </header>

      {exam && exam.questions.length < 4 && (
        <div className="card p-4 text-center text-sm text-rose-600 dark:text-rose-400">{t('notEnoughQuestions')}</div>
      )}

      <section className="card card-lux p-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">{t('chooseSubject')}</p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          <button onClick={() => setSubjectId('all')} className={`rounded-xl px-3 py-3 text-center text-sm font-semibold transition ${subjectId === 'all' ? 'text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'}`} style={subjectId === 'all' ? { backgroundColor: 'var(--c-accent)' } : undefined}>
            🎓 {t('wholeTrack')}
          </button>
          {subjects.map((s) => (
            <button key={s.id} onClick={() => setSubjectId(s.id)} className={`flex items-center justify-center gap-1.5 rounded-xl px-3 py-3 text-center text-sm font-semibold transition ${subjectId === s.id ? 'text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'}`} style={subjectId === s.id ? { backgroundColor: 'var(--c-accent)' } : undefined}>
              <span aria-hidden>{s.icon}</span> {s.short || s.name}
            </button>
          ))}
        </div>

        <p className="mb-2 mt-5 text-xs font-semibold uppercase tracking-wide text-slate-400">{t('duration')}</p>
        <div className="grid grid-cols-3 gap-2">
          {DURATIONS.map((d) => (
            <button key={d.min} onClick={() => setDur(d)} className={`rounded-xl px-3 py-2.5 text-center text-sm font-semibold transition ${dur.min === d.min ? 'text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'}`} style={dur.min === d.min ? { backgroundColor: 'var(--c-accent)' } : undefined}>
              {d.min} {t('minShort')}<br /><span className="opacity-70">{d.q} {t('questionsShort')}</span>
            </button>
          ))}
        </div>

        <button onClick={start} className="btn-gold mt-6 w-full !py-3.5 text-base">⏱ {t('startExam')}</button>
        <p className="mt-3 text-center text-xs text-slate-400">{t('examNote')}</p>
      </section>
    </div>
  )
}
