import { useEffect, useMemo, useRef, useState } from 'react'
import { useStore } from '../store.jsx'
import { useT } from '../i18n.js'
import { Confetti } from '../components/ui.jsx'

function fmt(s) { const m = Math.floor(s / 60); return `${m}:${String(s % 60).padStart(2, '0')}` }

// Bac blanc chronométré : les questions défilent SANS correction, puis note /20
// et corrigé détaillé à la fin. Le résultat met à jour la répétition espacée
// (chaque thème couvert) et attribue des XP.
export default function Exam({ questions, durationSec = 1200, color = '#7c3aed', onExit }) {
  const t = useT()
  const { recordResult, addXp } = useStore()
  const [i, setI] = useState(0)
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const endAt = useRef(Date.now() + durationSec * 1000)
  const [left, setLeft] = useState(durationSec)
  const savedRef = useRef(false)

  const total = questions.length
  const correct = useMemo(() => questions.reduce((n, q, qi) => n + (answers[qi] === q.answer ? 1 : 0), 0), [answers, questions])
  const note = total ? Math.round((correct / total) * 20 * 10) / 10 : 0

  const submit = () => setSubmitted(true)

  // Chronomètre : arrêt et remise de copie automatique à 0.
  useEffect(() => {
    if (submitted) return
    const id = setInterval(() => {
      const rem = Math.round((endAt.current - Date.now()) / 1000)
      if (rem <= 0) { setLeft(0); setSubmitted(true) } else setLeft(rem)
    }, 500)
    return () => clearInterval(id)
  }, [submitted])

  // À la remise : note par thème → répétition espacée + XP (une fois).
  useEffect(() => {
    if (!submitted || savedRef.current) return
    savedRef.current = true
    const byTheme = {}
    questions.forEach((q, qi) => {
      const tid = q.themeId || '__x'
      byTheme[tid] = byTheme[tid] || { c: 0, n: 0 }
      byTheme[tid].n++; if (answers[qi] === q.answer) byTheme[tid].c++
    })
    for (const [tid, v] of Object.entries(byTheme)) {
      if (tid !== '__x') recordResult({ chapterId: tid, gameId: 'exam', quiz: true, pct: Math.round((v.c / v.n) * 100), correct: v.c, total: v.n, xp: 0 })
    }
    addXp(correct * 5)
  }, [submitted]) // eslint-disable-line react-hooks/exhaustive-deps

  if (submitted) {
    const great = note >= 12
    return (
      <div className="animate-pop-in card p-6 text-center">
        <Confetti show={note >= 16} />
        <div className="text-5xl">{note >= 16 ? '🏆' : note >= 10 ? '👍' : '💪'}</div>
        <h3 className="mt-2 font-display text-xl font-semibold">{t('examResult')}</h3>
        <div className="my-2 font-display text-5xl font-extrabold" style={{ color }}>{note}<span className="text-2xl text-slate-400">/20</span></div>
        <p className="text-sm text-slate-500 dark:text-slate-400">{correct} / {total} · +{correct * 5} XP</p>

        <div className="mt-5 space-y-3 text-left">
          <p className="px-1 text-sm font-semibold">{t('correction')}</p>
          {questions.map((q, qi) => {
            const good = answers[qi] === q.answer
            return (
              <div key={qi} className="rounded-xl p-3" style={{ backgroundColor: good ? 'color-mix(in srgb, #10b981 10%, transparent)' : 'color-mix(in srgb, #f43f5e 9%, transparent)' }}>
                <p className="text-sm font-semibold">{good ? '✅' : '❌'} {qi + 1}. {q.q}</p>
                {!good && <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">{t('yourAnswer')} {answers[qi] != null ? q.choices[answers[qi]] : '—'}</p>}
                <p className="mt-0.5 text-xs" style={{ color: 'var(--c-accent)' }}>✔ {q.choices[q.answer]}</p>
                {q.explain && <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">💡 {q.explain}</p>}
              </div>
            )
          })}
        </div>
        <button onClick={onExit} className="btn-primary mt-5 w-full" style={{ backgroundColor: color }}>{t('done')}</button>
      </div>
    )
  }

  const q = questions[i]
  const answeredCount = Object.keys(answers).length
  const low = left <= 60
  return (
    <div className="animate-pop-in">
      <div className="mb-3 flex items-center justify-between">
        <button onClick={onExit} className="text-sm text-slate-500 hover:text-violet-600">← {t('quit')}</button>
        <span className={`chip gap-1.5 font-bold ${low ? 'animate-pulse text-rose-600 ring-1 ring-rose-300' : 'text-slate-600 ring-1 ring-slate-200 dark:text-slate-300 dark:ring-slate-700'}`}>⏱ {fmt(left)}</span>
      </div>

      <div className="card p-5">
        <div className="mb-3 flex flex-wrap gap-1.5">
          {questions.map((_, qi) => (
            <button key={qi} onClick={() => setI(qi)} aria-label={`Question ${qi + 1}`}
              className="h-6 w-6 rounded-md text-[11px] font-bold"
              style={{ backgroundColor: qi === i ? color : answers[qi] != null ? 'color-mix(in srgb, ' + color + ' 22%, transparent)' : 'var(--c-card, #eee)', color: qi === i ? '#fff' : 'inherit', boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--c-accent) 20%, transparent)' }}>
              {qi + 1}
            </button>
          ))}
        </div>
        <p className="mb-1 text-xs font-medium text-slate-400">{t('question')} {i + 1} / {total}</p>
        <p className="mb-4 text-[15px] font-semibold leading-relaxed">{q.q}</p>
        <div className="grid gap-2">
          {q.choices.map((c, ci) => {
            const chosen = answers[i] === ci
            return (
              <button key={ci} onClick={() => setAnswers((a) => ({ ...a, [i]: ci }))}
                className={`rounded-xl border-2 px-3 py-2.5 text-left text-sm transition ${chosen ? 'font-semibold' : 'border-transparent bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700'}`}
                style={chosen ? { borderColor: color, backgroundColor: 'color-mix(in srgb, ' + color + ' 12%, transparent)' } : undefined}>
                {c}
              </button>
            )
          })}
        </div>

        <div className="mt-4 flex items-center justify-between gap-2">
          <button onClick={() => setI((v) => Math.max(0, v - 1))} disabled={i === 0} className="btn-ghost disabled:opacity-40">←</button>
          {i + 1 < total ? (
            <button onClick={() => setI((v) => Math.min(total - 1, v + 1))} className="btn-primary flex-1" style={{ backgroundColor: color }}>{t('next')} →</button>
          ) : (
            <button onClick={submit} className="btn-primary flex-1" style={{ backgroundColor: color }}>{t('submitExam')}</button>
          )}
        </div>
        <p className="mt-3 text-center text-xs text-slate-400">{answeredCount} / {total} {t('answered')} · <button onClick={submit} className="font-semibold underline hover:text-violet-600">{t('submitExam')}</button></p>
      </div>
    </div>
  )
}
