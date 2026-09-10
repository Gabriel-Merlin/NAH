import { useMemo, useRef, useState } from 'react'
import { useStore } from '../store.jsx'
import { useT } from '../i18n.js'
import { Confetti } from '../components/ui.jsx'

// Entraînement personnalisé « Coach IA » : QCM ciblé sur les points faibles, avec
// correction immédiate. S'ADAPTE en direct : si l'élève se trompe sur un thème,
// une question bonus de ce thème est réinjectée (dans la limite d'un quota). À la
// fin : score, détail par thème, écriture dans la répétition espacée + XP.
export default function CoachSession({ training, color = 'var(--c-accent)', onExit }) {
  const t = useT()
  const { recordResult } = useStore()
  const [queue, setQueue] = useState(() => [...(training.sequence || [])])
  const [i, setI] = useState(0)
  const [picked, setPicked] = useState(null)
  const [tally, setTally] = useState({}) // { themeId: { c, n } }
  const tallyRef = useRef({}) // même contenu que `tally`, lisible hors rendu
  const [correct, setCorrect] = useState(0)
  const [done, setDone] = useState(false)
  const banks = useRef({ ...(training.banks || {}) })
  const extras = useRef(0)
  const MAX_EXTRA = 4
  const savedRef = useRef(false)

  const q = queue[i] || null
  const answered = picked !== null
  const isRight = answered && q && picked === q.answer

  const choose = (k) => {
    if (answered || !q) return
    setPicked(k)
    const ok = k === q.answer
    if (ok) setCorrect((c) => c + 1)
    const cur = tallyRef.current[q.themeId] || { c: 0, n: 0 }
    tallyRef.current = { ...tallyRef.current, [q.themeId]: { c: cur.c + (ok ? 1 : 0), n: cur.n + 1 } }
    setTally(tallyRef.current)
    // Adaptatif : erreur → on réinjecte une question bonus du même thème.
    if (!ok && extras.current < MAX_EXTRA) {
      const bank = banks.current[q.themeId]
      if (bank && bank.length) {
        const bonus = bank.shift()
        extras.current += 1
        setQueue((qq) => { const copy = [...qq]; copy.splice(i + 1, 0, { ...bonus, bonus: true }); return copy })
      }
    }
  }

  const next = () => {
    if (i + 1 >= queue.length) finish()
    else { setI((v) => v + 1); setPicked(null) }
  }

  const finish = () => {
    if (!savedRef.current) {
      savedRef.current = true
      for (const [tid, v] of Object.entries(tallyRef.current)) {
        if (v.n > 0) recordResult({ chapterId: tid, gameId: 'coach-ia', quiz: false, pct: Math.round((v.c / v.n) * 100), correct: v.c, total: v.n, xp: v.c * 8 })
      }
    }
    setDone(true)
  }

  const totalAsked = useMemo(() => Object.values(tally).reduce((s, v) => s + v.n, 0), [tally])

  if (done) {
    const pct = totalAsked ? Math.round((correct / totalAsked) * 100) : 0
    const great = pct >= 80
    const rows = Object.entries(tally).map(([tid, v]) => ({ tid, ...v, name: (training.names?.[tid] || {}).name || t('theme') }))
    return (
      <div className="animate-pop-in card p-6 text-center">
        <Confetti show={great} />
        <div className="text-5xl">{great ? '🎉' : pct >= 50 ? '💪' : '📈'}</div>
        <h3 className="mt-2 font-display text-xl font-semibold">{t('aiSessionDone')}</h3>
        <div className="my-2 font-display text-5xl font-extrabold" style={{ color }}>{pct}%</div>
        <p className="text-sm text-slate-500 dark:text-slate-400">{correct} / {totalAsked} · +{correct * 8} XP 🪙</p>
        <div className="mt-5 space-y-1.5 text-left">
          {rows.map((r) => (
            <div key={r.tid} className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2 text-sm dark:bg-slate-800/50">
              <span className="min-w-0 flex-1 truncate">{r.name}</span>
              <span className="shrink-0 font-semibold" style={{ color: r.c === r.n ? '#3f9d6d' : r.c === 0 ? '#e11d48' : undefined }}>{r.c}/{r.n}</span>
            </div>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          <button onClick={onExit} className="btn-primary" style={{ backgroundColor: color }}>{t('done')}</button>
        </div>
      </div>
    )
  }

  if (!q) {
    return (
      <div className="card p-6 text-center">
        <p className="text-sm text-slate-500 dark:text-slate-400">{t('notEnoughQuestions')}</p>
        <button onClick={onExit} className="btn-ghost mt-4">← {t('quit')}</button>
      </div>
    )
  }

  return (
    <div className="animate-pop-in">
      <div className="mb-3 flex items-center justify-between">
        <button onClick={onExit} className="text-sm text-slate-500 hover:text-violet-600">← {t('quit')}</button>
        <span className="chip gap-1.5 text-slate-500 ring-1 ring-slate-200 dark:text-slate-400 dark:ring-slate-800 tabular-nums">
          {Math.min(i + 1, queue.length)} / {queue.length}
        </span>
      </div>
      <div className="mb-4 h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
        <div className="h-full rounded-full transition-all duration-300" style={{ width: `${(i / queue.length) * 100}%`, backgroundColor: color }} />
      </div>

      <div className="card p-5">
        {q.bonus && <p className="mb-2 inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-[11px] font-semibold text-amber-700 dark:bg-amber-950/50 dark:text-amber-300">🎯 {t('aiBonusQuestion')}</p>}
        <h3 className="mb-4 text-lg font-semibold leading-snug">{q.q}</h3>
        <div className="grid gap-2.5">
          {q.choices.map((c, k) => {
            let cls = 'border-slate-200 bg-white hover:border-violet-300 dark:border-slate-700 dark:bg-slate-800'
            if (answered) {
              if (k === q.answer) cls = 'border-emerald-400 bg-emerald-50 dark:bg-emerald-950/40'
              else if (k === picked) cls = 'border-rose-400 bg-rose-50 dark:bg-rose-950/40'
              else cls = 'border-slate-200 bg-white opacity-60 dark:border-slate-700 dark:bg-slate-800'
            }
            return (
              <button key={k} onClick={() => choose(k)} disabled={answered}
                className={`flex items-center gap-3 rounded-xl border-2 px-4 py-3 text-left text-[15px] transition ${cls}`}>
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-slate-100 text-xs font-bold dark:bg-slate-700">{String.fromCharCode(65 + k)}</span>
                <span>{c}</span>
                {answered && k === q.answer && <span className="ml-auto">✅</span>}
                {answered && k === picked && k !== q.answer && <span className="ml-auto">❌</span>}
              </button>
            )
          })}
        </div>

        {answered && (
          <>
            <div className={`mt-3 animate-slide-up rounded-xl px-4 py-3 text-sm ${isRight ? 'bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-200' : 'bg-rose-50 text-rose-800 ring-1 ring-rose-200 dark:bg-rose-950/40 dark:text-rose-200'}`}>
              <span className="mr-1 font-bold">{isRight ? `✅ ${t('feedbackGood')}` : `❌ ${t('feedbackBad')}`}</span>
              {q.explain}
            </div>
            <button onClick={next} className="btn-primary mt-4 w-full" style={{ backgroundColor: color }}>
              {i + 1 >= queue.length ? t('seeScore') : `${t('nextQuestion')} →`}
            </button>
          </>
        )}
      </div>
    </div>
  )
}
