import { useEffect, useMemo, useState } from 'react'
import { translate, LANGS } from '../translate.js'
import { GLOSSARY } from '../data/glossary.js'
import { Icon } from './ui.jsx'

// Dictionnaire / traducteur FR ⇄ EN ⇄ ES. Mots via le glossaire hors-ligne
// (instantané) + phrases via le service en ligne. Suggestions du glossaire
// pendant la saisie.
export default function Dictionary({ onClose }) {
  const [source, setSource] = useState('fr')
  const [target, setTarget] = useState('en')
  const [text, setText] = useState('')
  const [result, setResult] = useState(null) // { text, via }
  const [status, setStatus] = useState('idle') // idle | loading | error
  const [error, setError] = useState('')

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  // Suggestions rapides depuis le glossaire (préfixe sur la langue source).
  const suggestions = useMemo(() => {
    const q = text.toLowerCase().trim()
    if (q.length < 2 || /\s/.test(text.trim())) return []
    return GLOSSARY.filter((e) => e[source]?.toLowerCase().startsWith(q))
      .slice(0, 6)
      .map((e) => ({ from: e[source], to: e[target] }))
  }, [text, source, target])

  const swap = () => {
    setSource(target)
    setTarget(source)
    if (result?.text) setText(result.text)
    setResult(null)
  }

  const go = async () => {
    if (!text.trim() || status === 'loading') return
    setStatus('loading'); setError(''); setResult(null)
    try {
      const r = await translate(text, source, target)
      setResult(r); setStatus('idle')
    } catch (e) {
      setError(e.message || 'Traduction impossible.'); setStatus('error')
    }
  }

  const LangPicker = ({ value, onChange, label }) => (
    <div className="flex-1">
      <span className="mb-1 block text-[0.65rem] font-semibold uppercase tracking-wide text-slate-400">{label}</span>
      <div className="flex gap-1">
        {Object.entries(LANGS).map(([code, name]) => (
          <button
            key={code}
            onClick={() => onChange(code)}
            className={`flex-1 rounded-lg px-2 py-1.5 text-xs font-semibold transition ${value === code ? 'bg-violet-600 text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400'}`}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  )

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-slate-900/50 p-4 pt-16 backdrop-blur-sm" onClick={onClose}>
      <div className="card w-full max-w-lg animate-pop-in p-4" onClick={(e) => e.stopPropagation()}>
        <div className="mb-3 flex items-center gap-2">
          <Icon.Book size={18} />
          <h2 className="font-display text-lg font-semibold">Dictionnaire</h2>
          <button onClick={onClose} className="ml-auto text-slate-400 hover:text-slate-600" aria-label="Fermer">✕</button>
        </div>

        <div className="flex items-end gap-2">
          <LangPicker value={source} onChange={setSource} label="De" />
          <button onClick={swap} className="mb-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Inverser les langues" title="Inverser">
            <Icon.Swap size={18} />
          </button>
          <LangPicker value={target} onChange={setTarget} label="Vers" />
        </div>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) go() }}
          rows={2}
          autoFocus
          placeholder="Un mot ou une phrase à traduire…"
          className="mt-3 w-full resize-y rounded-xl border-2 border-slate-200 bg-white px-3 py-2.5 text-base outline-none focus:border-violet-400 dark:border-slate-700 dark:bg-slate-800"
          aria-label="Texte à traduire"
        />

        {suggestions.length > 0 && !result && (
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {suggestions.map((s) => (
              <li key={s.from}>
                <button onClick={() => { setText(s.from); setResult({ text: s.to, via: 'glossaire' }) }}
                  className="chip bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300">
                  {s.from} → <span className="font-semibold">{s.to}</span>
                </button>
              </li>
            ))}
          </ul>
        )}

        <button onClick={go} disabled={!text.trim() || status === 'loading'} className="btn-primary mt-3 w-full">
          {status === 'loading' ? 'Traduction…' : 'Traduire'}
        </button>

        {result && (
          <div className="mt-3 rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200 dark:bg-slate-800/60 dark:ring-slate-700">
            <p className="whitespace-pre-line text-lg font-medium">{result.text}</p>
            {result.via && <p className="mt-1 text-[0.7rem] uppercase tracking-wide text-slate-400">{result.via}</p>}
          </div>
        )}
        {status === 'error' && (
          <p className="mt-3 rounded-xl bg-rose-50 p-3 text-sm text-rose-700 ring-1 ring-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:ring-rose-900">
            {error} {' '}Le glossaire fonctionne hors-ligne, mais la traduction des phrases nécessite une connexion.
          </p>
        )}

        <p className="mt-3 text-center text-[0.7rem] text-slate-400">
          Mots courants hors-ligne · phrases via un service en ligne gratuit (MyMemory).
        </p>
      </div>
    </div>
  )
}
