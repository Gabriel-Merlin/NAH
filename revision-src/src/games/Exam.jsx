import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../store.jsx'
import { useT } from '../i18n.js'
import { Confetti, ProgressBar } from '../components/ui.jsx'
import { THEME_INDEX } from '../data/study.js'

function fmt(s) { const m = Math.floor(s / 60); return `${m}:${String(s % 60).padStart(2, '0')}` }

// Appréciation façon bulletin, à partir de la note /20.
function mentionFor(note) {
  if (note >= 16) return { t: 'Excellent — niveau mention Très bien 🏆', c: '#059669' }
  if (note >= 14) return { t: 'Très bon travail — niveau mention Bien 🎉', c: '#0891b2' }
  if (note >= 12) return { t: 'Bien — niveau mention Assez bien 👍', c: '#0891b2' }
  if (note >= 10) return { t: 'La moyenne est là — continue à consolider 💪', c: '#d97706' }
  if (note >= 8) return { t: 'Presque la moyenne — accroche-toi, tu y es 🔁', c: '#d97706' }
  return { t: 'Il faut réviser ces thèmes — ne lâche rien 📚', c: '#e11d48' }
}

// Bac blanc chronométré : les questions défilent SANS correction, puis note /20
// et corrigé détaillé à la fin. Le résultat met à jour la répétition espacée
// (chaque thème couvert) et attribue des XP.
export default function Exam({ questions, durationSec = 1200, color = '#7c3aed', onExit }) {
  const t = useT()
  const { recordResult, addXp } = useStore()
  const [i, setI] = useState(0)
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [errorsOnly, setErrorsOnly] = useState(false)
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
      // On enregistre le bac blanc sous un jeu dédié « exam » (pas comme « quiz »
      // du thème) : ainsi passer un bac blanc n'ajoute pas un thème dans « À
      // réviser » tant que la leçon elle-même n'a pas été travaillée.
      if (tid !== '__x') recordResult({ chapterId: tid, gameId: 'exam', quiz: false, pct: Math.round((v.c / v.n) * 100), correct: v.c, total: v.n, xp: 0 })
    }
    addXp(correct * 5)
  }, [submitted]) // eslint-disable-line react-hooks/exhaustive-deps

  if (submitted) {
    const mention = mentionFor(note)
    // Bilan par thème : regroupe les questions par thème couvert.
    const byTheme = {}
    questions.forEach((q, qi) => {
      const tid = q.themeId
      if (!tid) return
      const m = (byTheme[tid] ||= { c: 0, n: 0 })
      m.n++; if (answers[qi] === q.answer) m.c++
    })
    const themeRows = Object.entries(byTheme).map(([tid, v]) => {
      const info = THEME_INDEX[tid] || {}
      return { tid, name: info.themeName || 'Thème', subjectId: info.subjectId, color: info.color || color, pct: Math.round((v.c / v.n) * 100), c: v.c, n: v.n }
    }).sort((a, b) => a.pct - b.pct)
    const answeredN = Object.keys(answers).length
    const wrongCount = total - correct
    const shown = errorsOnly ? questions.map((q, qi) => ({ q, qi })).filter(({ qi }) => answers[qi] !== questions[qi].answer) : questions.map((q, qi) => ({ q, qi }))
    return (
      <div className="animate-pop-in card p-6">
        <Confetti show={note >= 16} />
        <div className="text-center">
          <div className="text-5xl">{note >= 16 ? '🏆' : note >= 10 ? '👍' : '💪'}</div>
          <h3 className="mt-2 font-display text-xl font-semibold">{t('examResult')}</h3>
          <div className="my-2 font-display text-5xl font-extrabold" style={{ color }}>{note}<span className="text-2xl text-slate-400">/20</span></div>
          <p className="font-semibold" style={{ color: mention.c }}>{mention.t}</p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{correct} / {total} bonnes réponses · {answeredN} répondues · +{correct * 5} XP</p>
        </div>

        {/* Bilan par thème */}
        {themeRows.length > 1 && (
          <div className="mt-5">
            <p className="mb-2 px-1 text-sm font-semibold">📊 Bilan par thème</p>
            <div className="space-y-2">
              {themeRows.map((r) => {
                const col = r.pct >= 80 ? '#059669' : r.pct >= 50 ? '#d97706' : '#e11d48'
                const row = (
                  <>
                    <span className="min-w-0 flex-1">
                      <span className="mb-1 flex items-center justify-between gap-2">
                        <span className="truncate text-sm font-medium">{r.name}</span>
                        <span className="shrink-0 text-xs font-semibold tabular-nums" style={{ color: col }}>{r.c}/{r.n} · {r.pct}%</span>
                      </span>
                      <ProgressBar value={r.pct} color={col} height={7} />
                    </span>
                    {r.subjectId && <span className="shrink-0 text-slate-300" aria-hidden>›</span>}
                  </>
                )
                return r.subjectId
                  ? <Link key={r.tid} to={`/subject/${r.subjectId}/theme/${r.tid}`} onClick={onExit} className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 transition hover:bg-slate-100 dark:bg-slate-800/60 dark:hover:bg-slate-800">{row}</Link>
                  : <div key={r.tid} className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 dark:bg-slate-800/60">{row}</div>
              })}
            </div>
            <p className="mt-1.5 px-1 text-xs text-slate-400">Touche un thème faible pour aller le réviser.</p>
          </div>
        )}

        <div className="mt-5">
          <div className="mb-2 flex items-center justify-between px-1">
            <p className="text-sm font-semibold">{t('correction')}</p>
            {wrongCount > 0 && (
              <button onClick={() => setErrorsOnly((v) => !v)} className="chip bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                {errorsOnly ? 'Tout voir' : `Mes erreurs (${wrongCount})`}
              </button>
            )}
          </div>
          <div className="space-y-3 text-left">
            {shown.map(({ q, qi }) => {
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
