import { useMemo, useState } from 'react'
import { FORMULAS } from '../data/formulas.js'
import { useT } from '../i18n.js'

// Évaluateur d'expression sûr (sans eval) : + − × ÷, parenthèses, décimales.
function calc(expr) {
  const s = String(expr).replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-').replace(/,/g, '.')
  const tokens = s.match(/\d+\.?\d*|[+\-*/()]/g)
  if (!tokens) return null
  const out = [], ops = []
  const prec = { '+': 1, '-': 1, '*': 2, '/': 2 }
  let prev = null
  for (const tk of tokens) {
    if (/\d/.test(tk)) { out.push(parseFloat(tk)); prev = 'num' }
    else if (tk === '(') { ops.push(tk); prev = '(' }
    else if (tk === ')') { while (ops.length && ops[ops.length - 1] !== '(') out.push(ops.pop()); if (!ops.length) return null; ops.pop(); prev = 'num' }
    else {
      if (tk === '-' && (prev === null || prev === 'op' || prev === '(')) out.push(0)
      while (ops.length && prec[ops[ops.length - 1]] >= prec[tk]) out.push(ops.pop())
      ops.push(tk); prev = 'op'
    }
  }
  while (ops.length) { const o = ops.pop(); if (o === '(') return null; out.push(o) }
  const st = []
  for (const t of out) {
    if (typeof t === 'number') st.push(t)
    else { const b = st.pop(), a = st.pop(); if (a === undefined || b === undefined) return null; st.push(t === '+' ? a + b : t === '-' ? a - b : t === '*' ? a * b : a / b) }
  }
  if (st.length !== 1 || !isFinite(st[0])) return null
  return Math.round(st[0] * 1e6) / 1e6
}

function Calculator({ t }) {
  const [expr, setExpr] = useState('')
  const result = useMemo(() => (expr ? calc(expr) : null), [expr])
  const push = (c) => setExpr((e) => (e + c).slice(0, 40))
  const keys = ['C', '(', ')', '÷', '7', '8', '9', '×', '4', '5', '6', '−', '1', '2', '3', '+', '0', '.', '⌫', '=']
  const onKey = (k) => {
    if (k === 'C') return setExpr('')
    if (k === '⌫') return setExpr((e) => e.slice(0, -1))
    if (k === '=') { const r = calc(expr); if (r !== null) setExpr(String(r)); return }
    push(k)
  }
  return (
    <div className="card card-lux p-4">
      <p className="kicker mb-2">🧮 {t('calcTitle')}</p>
      <div className="mb-3 rounded-xl bg-slate-50 px-3 py-2 text-right dark:bg-slate-800/60">
        <div className="min-h-[1.25rem] break-all font-mono text-sm text-slate-500 dark:text-slate-400">{expr || '0'}</div>
        <div className="font-mono text-2xl font-bold" style={{ color: 'var(--c-accent)' }}>{result !== null ? result : (expr ? '…' : '0')}</div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {keys.map((k) => {
          const op = ['÷', '×', '−', '+'].includes(k)
          const eq = k === '='
          return (
            <button
              key={k}
              onClick={() => onKey(k)}
              className="rounded-xl py-3 text-lg font-semibold transition active:scale-95"
              style={eq
                ? { gridColumn: 'span 1', background: 'var(--c-accent)', color: '#fff' }
                : op
                  ? { background: 'color-mix(in srgb, var(--c-accent) 16%, transparent)', color: 'var(--c-accent)' }
                  : { boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--c-accent) 20%, transparent)' }}
            >
              {k}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default function Formulas() {
  const t = useT()
  const [q, setQ] = useState('')
  const query = q.trim().toLowerCase()
  const cats = useMemo(() => FORMULAS.map((c) => ({
    ...c,
    items: c.items.filter((it) => !query || it.name.toLowerCase().includes(query) || it.f.toLowerCase().includes(query)),
  })).filter((c) => c.items.length), [query])

  return (
    <div className="animate-lux mx-auto max-w-2xl space-y-5">
      <header className="text-center">
        <p className="kicker">📐 {t('formulasTitle')}</p>
        <h1 className="mt-1 font-display text-[1.9rem] font-medium leading-tight">{t('formulasTitle')}</h1>
        <span className="mx-auto mt-3 block h-px w-24 rounded-full" style={{ background: 'linear-gradient(90deg,transparent,#c8a24e,transparent)' }} />
      </header>

      <Calculator t={t} />

      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={t('searchFormula')}
        className="w-full rounded-xl border border-slate-200 bg-transparent px-4 py-2.5 text-sm outline-none dark:border-slate-700"
      />

      {cats.map((c) => (
        <section key={c.cat} className="space-y-2">
          <h2 className="px-1 font-display text-lg font-semibold" style={{ color: c.color }}>{c.icon} {c.cat}</h2>
          <div className="card divide-y divide-slate-100 p-0 dark:divide-slate-800">
            {c.items.map((it) => (
              <div key={it.name} className="flex flex-col gap-0.5 p-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                <span className="text-sm font-semibold">{it.name}{it.note ? <span className="ml-1 text-xs font-normal text-slate-400">({it.note})</span> : null}</span>
                <span className="font-mono text-sm text-slate-600 dark:text-slate-300">{it.f}</span>
              </div>
            ))}
          </div>
        </section>
      ))}
      {cats.length === 0 && <p className="card p-5 text-center text-sm text-slate-500 dark:text-slate-400">{t('noResult')}</p>}
    </div>
  )
}
