// Étude de documents : un dossier de plusieurs documents, suivi de questions
// (QCM auto-corrigés ou questions à rédiger en auto-évaluation) qui s'appuient
// sur ces documents. Format « analyse de dossier documentaire » du bac STMG.
import { useMemo, useState } from 'react'
import { Rich } from '../components/ui.jsx'
import { Feedback, GameProgress } from './common.jsx'

function DocCard({ doc, color }) {
  return (
    <div className="rounded-xl border-l-4 bg-slate-50 p-4 dark:bg-slate-800/60" style={{ borderColor: color }}>
      <p className="mb-1 text-xs font-bold uppercase tracking-wide" style={{ color }}>
        📄 {doc.title}
      </p>
      <p className="whitespace-pre-line text-sm leading-relaxed text-slate-700 dark:text-slate-200"><Rich text={doc.text} /></p>
      {doc.source && <p className="mt-2 text-right text-xs italic text-slate-400">{doc.source}</p>}
    </div>
  )
}

export default function DocStudy({ game, color, onDone }) {
  const [phase, setPhase] = useState('read') // read | quiz
  const questions = game.questions
  const [i, setI] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [picked, setPicked] = useState(null)
  const [revealed, setRevealed] = useState(false)
  const [answer, setAnswer] = useState('')

  const docById = useMemo(() => Object.fromEntries(game.documents.map((d) => [d.id, d])), [game])

  if (phase === 'read') {
    return (
      <div className="card space-y-4 p-5">
        <div>
          <h3 className="text-lg font-bold">{game.title}</h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{game.intro || 'Lis attentivement les documents, puis réponds aux questions.'}</p>
        </div>
        {game.documents.map((d) => <DocCard key={d.id} doc={d} color={color} />)}
        <button onClick={() => setPhase('quiz')} className="btn-primary w-full" style={{ backgroundColor: color }}>
          Répondre aux {questions.length} questions →
        </button>
      </div>
    )
  }

  const q = questions[i]
  const isQcm = q.type !== 'redac' && Array.isArray(q.choices)
  const answered = isQcm ? picked !== null : revealed
  const refDocs = (Array.isArray(q.doc) ? q.doc : q.doc != null ? [q.doc] : [])

  const finishQ = (wasCorrect) => {
    const nc = correct + (wasCorrect ? 1 : 0)
    if (i + 1 >= questions.length) onDone({ correct: nc, total: questions.length })
    else { setCorrect(nc); setI(i + 1); setPicked(null); setRevealed(false); setAnswer('') }
  }

  const choose = (idx) => { if (picked === null) setPicked(idx) }

  return (
    <div className="card p-5">
      <GameProgress index={i} total={questions.length} color={color} />

      {refDocs.map((id) => docById[id] && <div key={id} className="mb-3"><DocCard doc={docById[id]} color={color} /></div>)}

      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
        {isQcm ? '❓ Question' : '✍️ À rédiger'}{refDocs.length ? ` · d’après le doc. ${refDocs.join(' et ')}` : ''}
      </p>
      <h3 className="mb-4 text-lg font-semibold leading-snug">{q.q}</h3>

      {isQcm ? (
        <>
          <div className="grid gap-2.5">
            {q.choices.map((c, idx) => {
              let cls = 'border-slate-200 bg-white hover:border-violet-300 dark:border-slate-700 dark:bg-slate-800'
              if (answered) {
                if (idx === q.answer) cls = 'border-emerald-400 bg-emerald-50 dark:bg-emerald-950/40'
                else if (idx === picked) cls = 'border-rose-400 bg-rose-50 dark:bg-rose-950/40'
                else cls = 'border-slate-200 bg-white opacity-60 dark:border-slate-700 dark:bg-slate-800'
              }
              return (
                <button key={idx} onClick={() => choose(idx)} disabled={answered} className={`flex items-center gap-3 rounded-xl border-2 px-4 py-3 text-left text-[15px] transition ${cls}`}>
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-slate-100 text-xs font-bold dark:bg-slate-700">{String.fromCharCode(65 + idx)}</span>
                  <span><Rich text={c} /></span>
                  {answered && idx === q.answer && <span className="ml-auto">✅</span>}
                  {answered && idx === picked && idx !== q.answer && <span className="ml-auto">❌</span>}
                </button>
              )
            })}
          </div>
          {answered && (
            <>
              <Feedback ok={picked === q.answer}>{q.explain}</Feedback>
              <button onClick={() => finishQ(picked === q.answer)} className="btn-primary mt-4 w-full" style={{ backgroundColor: color }}>
                {i + 1 >= questions.length ? 'Voir mon score' : 'Question suivante →'}
              </button>
            </>
          )}
        </>
      ) : (
        <>
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            rows={4}
            placeholder="Rédige ta réponse ici…"
            className="w-full resize-y rounded-xl border-2 border-slate-200 bg-white p-3 text-[15px] leading-relaxed outline-none focus:border-violet-400 dark:border-slate-700 dark:bg-slate-800"
          />
          {!revealed ? (
            <button onClick={() => setRevealed(true)} className="btn-primary mt-3 w-full" style={{ backgroundColor: color }}>Voir le corrigé</button>
          ) : (
            <>
              <div className="mt-3 rounded-xl border-l-4 border-emerald-400 bg-emerald-50 p-4 dark:border-emerald-500 dark:bg-emerald-950/30">
                <p className="mb-1 text-xs font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">✅ Corrigé</p>
                <p className="whitespace-pre-line text-sm leading-relaxed text-slate-700 dark:text-slate-200"><Rich text={q.answer} /></p>
              </div>
              <p className="mt-3 text-center text-sm font-semibold">Ta réponse était-elle correcte ?</p>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <button onClick={() => finishQ(false)} className="rounded-xl border-2 border-rose-200 bg-rose-50 py-2.5 text-sm font-bold text-rose-700 hover:border-rose-400 dark:border-rose-900 dark:bg-rose-950/40 dark:text-rose-300">❌ À revoir</button>
                <button onClick={() => finishQ(true)} className="rounded-xl border-2 border-emerald-200 bg-emerald-50 py-2.5 text-sm font-bold text-emerald-700 hover:border-emerald-400 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300">✅ Je maîtrisais</button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  )
}
