import { useMemo, useRef, useState } from 'react'
import { Feedback, GameProgress, useStopwatch, answerMatches, normalize, shuffle } from './common.jsx'
import { useT } from '../i18n.js'

// Jeu « à toi d'écrire la réponse » : une question, l'élève saisit sa réponse,
// on la compare (accents/casse/ponctuation ignorés, plus quelques variantes).
// Les questions sont mélangées à chaque partie : jamais les mêmes dans le même
// ordre. game.questions = [{ prompt, answer, alt?, explain? }].
export default function Saisie({ game, mode, color, onDone }) {
  const t = useT()
  const set = useMemo(() => shuffle(game.questions || []).slice(0, game.count || 10), [game])
  const [i, setI] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [val, setVal] = useState('')
  const [checked, setChecked] = useState(false)
  const [revealed, setRevealed] = useState(false)
  const inputRef = useRef(null)
  const elapsed = useStopwatch(mode === 'defi')
  const q = set[i] || { prompt: '', answer: '', alt: [] }
  const ok = checked && answerMatches(val, q.answer, q.alt || [])

  const check = () => {
    if (checked || val.trim() === '') return
    setChecked(true)
    if (answerMatches(val, q.answer, q.alt || [])) setCorrect((c) => c + 1)
  }
  const next = () => {
    if (i + 1 >= set.length) {
      const timeBonus = Math.max(0, set.length * 8 - elapsed)
      onDone({ correct, total: set.length, timeBonus })
    } else {
      setI((v) => v + 1); setVal(''); setChecked(false); setRevealed(false)
      setTimeout(() => inputRef.current?.focus(), 30)
    }
  }

  // Réponse affichée : le terme attendu + les variantes réellement utiles.
  // On masque les doublons et les variantes déjà contenues dans la réponse
  // principale (ex. « PGI » dans « PGI / ERP ») pour un affichage propre.
  const nAns = normalize(q.answer)
  const shownAnswer = [q.answer, ...(q.alt || [])]
    .filter(Boolean)
    .filter((a, idx, arr) => {
      const na = normalize(a)
      if (arr.slice(0, idx).some((b) => normalize(b) === na)) return false // doublon
      if (idx > 0 && nAns.includes(na)) return false // déjà dans la réponse principale
      return true
    })
    .join(' / ')

  return (
    <div className="card p-5">
      <GameProgress index={i} total={set.length} color={color} />
      <p className="mb-4 whitespace-pre-line text-[15px] font-medium leading-relaxed">{q.prompt}</p>
      <input
        ref={inputRef}
        value={val}
        onChange={(e) => setVal(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && (checked ? next() : check())}
        disabled={checked}
        autoFocus
        autoComplete="off"
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck={false}
        placeholder={t('yourAnswer')}
        className={`w-full rounded-xl border-2 bg-white px-3 py-3 text-lg font-semibold outline-none dark:bg-slate-800 ${
          checked ? (ok ? 'border-emerald-400 correct-pop' : 'border-rose-400 animate-shake') : 'border-violet-300 focus:border-violet-500 dark:border-slate-600'
        }`}
        aria-label={t('yourAnswer')}
      />
      {!checked ? (
        <div className="mt-4 flex gap-2">
          <button onClick={check} disabled={val.trim() === ''} className="btn-primary flex-1 disabled:opacity-40" style={{ backgroundColor: color }}>{t('check')}</button>
          {!revealed && <button onClick={() => setRevealed(true)} className="btn-ghost shrink-0">{t('showAnswer')}</button>}
        </div>
      ) : (
        <>
          <Feedback ok={ok}>
            {!ok && <>{t('expectedAnswer')} <strong>{shownAnswer}</strong>.<br /></>}
            {q.explain && <span className="whitespace-pre-line">{q.explain}</span>}
          </Feedback>
          <button onClick={next} className="btn-primary mt-4 w-full" style={{ backgroundColor: color }}>
            {i + 1 >= set.length ? t('seeScore') : `${t('next')} →`}
          </button>
        </>
      )}
      {revealed && !checked && (
        <p className="mt-3 rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-500 dark:bg-slate-800/60 dark:text-slate-400">
          💡 {t('answer')} : <strong>{shownAnswer}</strong>
        </p>
      )}
    </div>
  )
}
