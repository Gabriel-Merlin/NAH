import { useMemo, useState } from 'react'
import { Feedback, GameProgress, useStopwatch, answerMatches } from './common.jsx'
import { useT } from '../i18n.js'

// Jeu à réponse saisie, GÉNÉRATIF : game.gen() renvoie une question différente
// à chaque appel (verbes irréguliers, grammaire…). Chaque partie tire un
// nouveau jeu de questions, donc elles ne se ressemblent jamais.
export default function TypedGen({ game, mode, color, onDone }) {
  const t = useT()
  const set = useMemo(() => {
    const n = game.count || 8
    if (typeof game.gen === 'function') return Array.from({ length: n }, () => game.gen())
    return game.questions || []
  }, [game])

  const [i, setI] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [val, setVal] = useState('')
  const [checked, setChecked] = useState(false)
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
      const timeBonus = Math.max(0, set.length * 10 - elapsed)
      onDone({ correct, total: set.length, timeBonus })
    } else {
      setI((v) => v + 1); setVal(''); setChecked(false)
    }
  }

  const shownAnswer = [q.answer, ...(q.alt || [])].join(' / ')

  return (
    <div className="card p-5">
      <GameProgress index={i} total={set.length} color={color} />
      <p className="mb-4 whitespace-pre-line text-[15px] font-medium leading-relaxed">{q.prompt}</p>
      <input
        value={val}
        onChange={(e) => setVal(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && (checked ? next() : check())}
        disabled={checked}
        autoFocus
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck={false}
        placeholder={t('yourAnswer')}
        className={`w-full rounded-xl border-2 bg-white px-3 py-3 text-lg font-semibold outline-none dark:bg-slate-800 ${
          checked ? (ok ? 'border-emerald-400' : 'border-rose-400') : 'border-violet-300 focus:border-violet-500 dark:border-slate-600'
        }`}
        aria-label={t('yourAnswer')}
      />
      {!checked ? (
        <button onClick={check} disabled={val.trim() === ''} className="btn-primary mt-4 w-full" style={{ backgroundColor: color }}>{t('check')}</button>
      ) : (
        <>
          <Feedback ok={ok}>
            {!ok && <>{t('expectedAnswer')} <strong>{shownAnswer}</strong>.<br /></>}
            <span className="whitespace-pre-line">{q.explain}</span>
          </Feedback>
          <button onClick={next} className="btn-primary mt-4 w-full" style={{ backgroundColor: color }}>
            {i + 1 >= set.length ? t('seeScore') : `${t('next')} →`}
          </button>
        </>
      )}
    </div>
  )
}
