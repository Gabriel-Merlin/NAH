import { useMemo, useState } from 'react'
import { Feedback, GameProgress, normalize } from './common.jsx'
import { useT } from '../i18n.js'

// Normalisation SQL tolérante : on accepte les différences de casse, de
// guillemets (" ou '), d'espacement autour des virgules et des opérateurs,
// et un point-virgule final facultatif. L'élève écrit un vrai SELECT.
function sqlNorm(s) {
  return normalize(s) // minuscules, accents retirés, ' unifiée, espaces réduits
    .replace(/"/g, "'") // guillemets doubles → simples
    .replace(/;+\s*$/g, '') // point-virgule final facultatif
    .replace(/\s*,\s*/g, ', ') // « a ,b » → « a, b »
    .replace(/\s*(<=|>=|<>|!=|=|<|>)\s*/g, ' $1 ') // espaces autour des opérateurs
    .replace(/\(\s*\*\s*\)/g, '(*)') // count( * ) → count(*)
    .replace(/\s+/g, ' ')
    .trim()
}

function sqlMatches(input, answer, alt = []) {
  const n = sqlNorm(input)
  if (!n) return false
  return [answer, ...alt].some((a) => sqlNorm(a) === n)
}

// Affiche le schéma des tables (colonnes, clé primaire 🔑, clé étrangère 🔗).
function Schema({ schema }) {
  if (!schema?.length) return null
  return (
    <div className="mb-4 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm dark:border-slate-700 dark:bg-slate-800/60">
      <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-slate-400">Schéma de la base</p>
      <div className="space-y-1.5">
        {schema.map((tb) => (
          <p key={tb.name} className="font-mono text-[13px] leading-snug">
            <span className="font-bold" style={{ color: 'var(--c-accent)' }}>{tb.name}</span>
            <span className="text-slate-500 dark:text-slate-400"> ({tb.cols.join(', ')})</span>
          </p>
        ))}
      </div>
      {schema.some((t) => t.legend) && (
        <p className="mt-2 text-xs text-slate-400">🔑 clé primaire · 🔗 clé étrangère</p>
      )}
    </div>
  )
}

// Jeu « écris la requête SQL » : à partir d'un objectif en français, l'élève
// tape un SELECT. Correction tolérante + explication.
export default function SqlQuery({ game, color, onDone }) {
  const t = useT()
  const questions = useMemo(() => game.questions || [], [game])
  const [i, setI] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [val, setVal] = useState('')
  const [checked, setChecked] = useState(false)
  const [revealed, setRevealed] = useState(false)

  const q = questions[i] || { ask: '', answer: '', alt: [] }
  const ok = checked && sqlMatches(val, q.answer, q.alt || [])

  const check = () => {
    if (checked || val.trim() === '') return
    setChecked(true)
    if (sqlMatches(val, q.answer, q.alt || [])) setCorrect((c) => c + 1)
  }
  const next = () => {
    if (i + 1 >= questions.length) {
      onDone({ correct, total: questions.length })
    } else {
      setI((v) => v + 1); setVal(''); setChecked(false); setRevealed(false)
    }
  }

  return (
    <div className="card p-5">
      <GameProgress index={i} total={questions.length} color={color} />
      <Schema schema={game.schema} />
      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">🎯 Objectif</p>
      <p className="mb-3 text-[15px] font-medium leading-relaxed">{q.ask}</p>
      <textarea
        value={val}
        onChange={(e) => setVal(e.target.value)}
        onKeyDown={(e) => { if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); checked ? next() : check() } }}
        disabled={checked}
        autoFocus
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck={false}
        rows={2}
        placeholder="SELECT … FROM … WHERE …"
        className={`w-full resize-y rounded-xl border-2 bg-white px-3 py-3 font-mono text-[15px] outline-none dark:bg-slate-800 ${
          checked ? (ok ? 'border-emerald-400' : 'border-rose-400') : 'border-violet-300 focus:border-violet-500 dark:border-slate-600'
        }`}
        aria-label="Ta requête SQL"
      />
      {!checked ? (
        <div className="mt-4 flex gap-2">
          <button onClick={check} disabled={val.trim() === ''} className="btn-primary flex-1" style={{ backgroundColor: color }}>{t('check')}</button>
          <button
            onClick={() => setRevealed((r) => !r)}
            className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-500 transition hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
          >
            💡 {revealed ? 'Cacher' : 'Indice'}
          </button>
        </div>
      ) : (
        <>
          <Feedback ok={ok}>
            {!ok && <>Requête attendue : <code className="font-mono font-semibold">{q.answer}</code><br /></>}
            <span className="whitespace-pre-line">{q.explain}</span>
          </Feedback>
          <button onClick={next} className="btn-primary mt-4 w-full" style={{ backgroundColor: color }}>
            {i + 1 >= questions.length ? t('seeScore') : `${t('next')} →`}
          </button>
        </>
      )}
      {!checked && revealed && (
        <p className="mt-3 rounded-xl bg-amber-50 px-3 py-2 font-mono text-sm text-amber-800 ring-1 ring-amber-200 dark:bg-amber-950/40 dark:text-amber-200 dark:ring-amber-800/50">
          {q.answer}
        </p>
      )}
      <p className="mt-3 text-center text-xs text-slate-400">La casse, les guillemets et les espaces n’ont pas d’importance.</p>
    </div>
  )
}
