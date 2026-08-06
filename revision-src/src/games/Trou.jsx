import { useMemo, useState } from 'react'
import { shuffle, Feedback, GameProgress, answerMatches } from './common.jsx'
import { useT } from '../i18n.js'

export default function Trou({ game, color, onDone }) {
  const t = useT()
  const items = useMemo(() => shuffle(game.questions), [game])
  const [i, setI] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [val, setVal] = useState('')
  const [checked, setChecked] = useState(false)
  const q = items[i]
  const [before, after] = useMemo(() => q.text.split(/_{2,}/), [q])
  const ok = checked && answerMatches(val, q.answer, q.alt)

  const check = () => {
    if (checked || !val.trim()) return
    setChecked(true)
    if (answerMatches(val, q.answer, q.alt)) setCorrect((c) => c + 1)
  }
  const next = () => {
    if (i + 1 >= items.length) onDone({ correct, total: items.length })
    else {
      setI((v) => v + 1)
      setVal('')
      setChecked(false)
    }
  }

  return (
    <div className="card p-5">
      <GameProgress index={i} total={items.length} color={color} />
      <p className="mb-4 text-lg leading-relaxed">
        {before}
        <input
          value={val}
          onChange={(e) => setVal(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && (checked ? next() : check())}
          disabled={checked}
          autoFocus
          className={`mx-1 inline-block w-40 max-w-[60vw] rounded-lg border-2 bg-white px-2 py-1 text-center font-semibold outline-none dark:bg-slate-800 ${
            checked ? (ok ? 'border-emerald-400' : 'border-rose-400') : 'border-violet-300 focus:border-violet-500 dark:border-slate-600'
          }`}
          placeholder="…"
          aria-label={t('answerToComplete')}
        />
        {after}
      </p>

      {!checked ? (
        <button onClick={check} disabled={!val.trim()} className="btn-primary w-full" style={{ backgroundColor: color }}>{t('check')}</button>
      ) : (
        <>
          <Feedback ok={ok}>{ok ? t('exact') : <>{t('rightAnswerIs')} <strong>{q.answer}</strong>. </>}{' '}{q.explain}</Feedback>
          <button onClick={next} className="btn-primary mt-4 w-full" style={{ backgroundColor: color }}>
            {i + 1 >= items.length ? t('seeScore') : `${t('next')} →`}
          </button>
        </>
      )}
    </div>
  )
}
