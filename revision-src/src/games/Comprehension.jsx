import { useEffect, useState } from 'react'
import { useT } from '../i18n.js'

// Compréhension ORALE (écoute via synthèse vocale) ou ÉCRITE (texte affiché).
// L'élève répond aux questions, puis découvre la CORRECTION une fois terminé
// (bonnes réponses + explications + transcription pour l'oral).
export default function Comprehension({ game, color, onDone }) {
  const t = useT()
  const listen = !!game.listen
  const lang = game.lang === 'es' ? 'es-ES' : 'en-US'
  const questions = game.questions || []
  const [answers, setAnswers] = useState({}) // { [qi]: choiceIndex }
  const [revealed, setRevealed] = useState(false)
  const [speaking, setSpeaking] = useState(false)

  useEffect(() => () => { try { window.speechSynthesis?.cancel() } catch { /* */ } }, [])

  const speak = (rate = 0.95) => {
    try {
      const synth = window.speechSynthesis
      if (!synth) return
      synth.cancel()
      const u = new SpeechSynthesisUtterance(game.text)
      u.lang = lang
      u.rate = rate
      u.onend = () => setSpeaking(false)
      u.onerror = () => setSpeaking(false)
      setSpeaking(true)
      synth.speak(u)
    } catch { setSpeaking(false) }
  }
  const stop = () => { try { window.speechSynthesis?.cancel() } catch { /* */ } ; setSpeaking(false) }

  const allAnswered = questions.every((_, qi) => answers[qi] != null)
  const correct = questions.reduce((n, q, qi) => n + (answers[qi] === q.answer ? 1 : 0), 0)

  const reveal = () => { stop(); setRevealed(true) }

  return (
    <div className="card p-5">
      <div className="mb-3 flex items-center justify-between">
        <span className="chip text-white" style={{ backgroundColor: color }}>{listen ? `🎧 ${t('listening')}` : `📖 ${t('reading')}`}</span>
        <span className="chip bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">{game.level}</span>
      </div>
      {game.topic && <h3 className="mb-3 font-display text-lg font-semibold">{game.topic}</h3>}

      {/* Support : audio (écoute) ou texte (lecture) */}
      {listen ? (
        <div className="mb-4 rounded-2xl p-4 text-center" style={{ backgroundColor: 'color-mix(in srgb, var(--c-accent) 8%, transparent)' }}>
          <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">{t('listenInstr')}</p>
          <div className="flex flex-wrap justify-center gap-2">
            <button onClick={() => speak(0.95)} className="btn-primary" style={{ backgroundColor: color }}>▶ {speaking ? t('listenAgain') : t('listen')}</button>
            <button onClick={() => speak(0.7)} className="btn-ghost">🐢 {t('listenSlow')}</button>
            {speaking && <button onClick={stop} className="btn-ghost">⏹</button>}
          </div>
          <p className="mt-2 text-xs text-slate-400">{t('ttsNote')}</p>
        </div>
      ) : (
        <div className="mb-4 whitespace-pre-line rounded-2xl bg-slate-50 p-4 text-[15px] leading-relaxed dark:bg-slate-800/60">{game.text}</div>
      )}

      {/* Questions */}
      <div className="space-y-4">
        {questions.map((q, qi) => (
          <div key={qi}>
            <p className="mb-2 text-sm font-semibold">{qi + 1}. {q.q}</p>
            <div className="grid gap-2">
              {q.choices.map((c, ci) => {
                const chosen = answers[qi] === ci
                const isRight = revealed && ci === q.answer
                const isWrongChosen = revealed && chosen && ci !== q.answer
                let cls = 'rounded-xl border-2 px-3 py-2.5 text-left text-sm transition '
                if (isRight) cls += 'border-emerald-400 bg-emerald-50 dark:bg-emerald-950/40'
                else if (isWrongChosen) cls += 'border-rose-400 bg-rose-50 dark:bg-rose-950/40'
                else if (chosen) cls += 'font-semibold'
                else cls += 'border-transparent bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700'
                return (
                  <button
                    key={ci}
                    disabled={revealed}
                    onClick={() => setAnswers((a) => ({ ...a, [qi]: ci }))}
                    className={cls}
                    style={chosen && !revealed ? { borderColor: color, backgroundColor: 'color-mix(in srgb, ' + color + ' 12%, transparent)' } : undefined}
                  >
                    {isRight ? '✅ ' : isWrongChosen ? '❌ ' : ''}{c}
                  </button>
                )
              })}
            </div>
            {revealed && q.explain && <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">💡 {q.explain}</p>}
          </div>
        ))}
      </div>

      {!revealed ? (
        <button onClick={reveal} disabled={!allAnswered} className="btn-primary mt-5 w-full disabled:opacity-40" style={{ backgroundColor: color }}>
          {allAnswered ? t('seeCorrection') : t('answerAllFirst')}
        </button>
      ) : (
        <>
          <div className="mt-5 rounded-2xl p-4 text-center" style={{ backgroundColor: 'color-mix(in srgb, ' + color + ' 10%, transparent)' }}>
            <p className="font-display text-2xl font-bold" style={{ color }}>{correct} / {questions.length}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{t('yourScore')}</p>
          </div>
          {listen && (
            <div className="mt-3">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">{t('transcript')}</p>
              <div className="whitespace-pre-line rounded-2xl bg-slate-50 p-4 text-sm leading-relaxed dark:bg-slate-800/60">{game.text}</div>
            </div>
          )}
          <button onClick={() => onDone({ correct, total: questions.length })} className="btn-primary mt-4 w-full" style={{ backgroundColor: color }}>{t('done')}</button>
        </>
      )}
    </div>
  )
}
