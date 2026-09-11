import { useMemo, useRef, useState } from 'react'
import { Feedback, GameProgress, answerMatches, normalize } from './common.jsx'
import MicButton from '../components/MicButton.jsx'
import { useT } from '../i18n.js'

// Extrait un nombre d'une saisie : « 3 300 € » → 3300, « 33,3 % » → 33.3.
function parseNum(s) {
  const v = String(s == null ? '' : s).replace(/[€%\s ]/g, '').replace(',', '.').replace(/[^0-9.\-−]/g, '').replace('−', '-')
  if (!v || v === '-' || v === '.') return null
  const n = parseFloat(v)
  return Number.isFinite(n) ? n : null
}

// Vrai si la réponse saisie correspond (texte OU nombre tolérant).
function matches(input, q) {
  const alt = q.alt || []
  if (answerMatches(input, q.a, alt)) return true
  if (q.num) {
    const pin = parseNum(input)
    const tol = q.tol ?? 0.05
    if (pin != null) {
      for (const cand of [q.a, ...alt]) {
        const pc = parseNum(cand)
        if (pc != null && Math.abs(pin - pc) <= tol) return true
      }
    }
  }
  return false
}

// Cas pratique chiffré : un contexte d'entreprise, puis une série de questions à
// répondre (nombre ou mot). Corrigé + explication après chaque réponse.
export default function CasPratique({ game, color, onDone }) {
  const t = useT()
  const items = useMemo(() => {
    const list = []
    for (const c of game.cases || []) {
      (c.questions || []).forEach((q, qi) => list.push({ ...q, context: c.context, caseTitle: c.title, isFirstOfCase: qi === 0 }))
    }
    return list
  }, [game])

  const [i, setI] = useState(0)
  const [val, setVal] = useState('')
  const [checked, setChecked] = useState(false)
  const [correct, setCorrect] = useState(0)
  const inputRef = useRef(null)
  const q = items[i] || { q: '', a: '' }
  const ok = checked && matches(val, q)

  const check = () => {
    if (checked || val.trim() === '') return
    setChecked(true)
    if (matches(val, q)) setCorrect((c) => c + 1)
  }
  const next = () => {
    if (i + 1 >= items.length) {
      onDone({ correct, total: items.length })
    } else {
      setI((v) => v + 1); setVal(''); setChecked(false)
      setTimeout(() => inputRef.current?.focus(), 30)
    }
  }

  const shownAnswer = [q.a, ...(q.alt || [])].filter(Boolean).filter((a, k, arr) => {
    const na = normalize(a); return !arr.slice(0, k).some((b) => normalize(b) === na)
  }).join(' / ')

  return (
    <div className="card p-5">
      <GameProgress index={i} total={items.length} color={color} />

      {q.caseTitle && (
        <p className="mb-1 text-xs font-bold uppercase tracking-wide" style={{ color }}>🧮 {q.caseTitle}</p>
      )}
      {q.context && (
        <div className="mb-3 rounded-xl border-l-4 p-3 text-[14px] leading-relaxed text-slate-700 dark:text-slate-200" style={{ borderColor: color, background: color + '10' }}>
          {q.context}
        </div>
      )}

      <p className="mb-3 whitespace-pre-line text-[15px] font-semibold leading-relaxed">{q.q}</p>
      <div className="flex items-stretch gap-2">
        <input
          ref={inputRef}
          value={val}
          onChange={(e) => setVal(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && (checked ? next() : check())}
          disabled={checked}
          autoFocus
          autoComplete="off"
          inputMode={q.num ? 'decimal' : 'text'}
          placeholder={t('yourAnswer')}
          className={`min-w-0 flex-1 rounded-xl border-2 bg-white px-3 py-3 text-lg font-semibold outline-none dark:bg-slate-800 ${
            checked ? (ok ? 'border-emerald-400 correct-pop' : 'border-rose-400 animate-shake') : 'border-violet-300 focus:border-violet-500 dark:border-slate-600'
          }`}
          aria-label={t('yourAnswer')}
        />
        {!checked && !q.num && <MicButton onResult={(txt) => setVal(txt)} />}
      </div>

      {!checked ? (
        <button onClick={check} disabled={val.trim() === ''} className="btn-primary mt-4 w-full disabled:opacity-40" style={{ backgroundColor: color }}>{t('check')}</button>
      ) : (
        <>
          <Feedback ok={ok}>
            {!ok && <>{t('expectedAnswer')} <strong>{shownAnswer}</strong>.<br /></>}
            {q.e && <span className="whitespace-pre-line">{q.e}</span>}
          </Feedback>
          <button onClick={next} className="btn-primary mt-4 w-full" style={{ backgroundColor: color }}>
            {i + 1 >= items.length ? t('seeScore') : `${t('next')} →`}
          </button>
        </>
      )}
    </div>
  )
}
