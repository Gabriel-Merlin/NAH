// Test du thème : évaluation globale de fin de thème, mélangeant
// - des QCM auto-corrigés (repris des mini-jeux du thème) ;
// - des questions à RÉDIGER (dérivées des flashcards) ;
// - des CAS PRATIQUES à analyser (dérivés des exemples travaillés du cours).
// Les parties rédigées se corrigent en auto-évaluation (corrigé révélé).
import { useMemo, useState } from 'react'
import { buildThemeTest } from '../data/index.js'
import { useStore, starsFromScore } from '../store.jsx'
import { Stars, Confetti, Rich } from '../components/ui.jsx'
import Qcm from './Qcm.jsx'

export default function ThemeTest({ theme, color, onExit }) {
  const { recordResult } = useStore()
  const test = useMemo(() => buildThemeTest(theme.id), [theme.id])
  const written = useMemo(
    () => [
      ...test.redac.map((r) => ({ ...r, kind: 'redac' })),
      ...test.cas.map((c) => ({ ...c, kind: 'cas' })),
    ],
    [test],
  )

  const [step, setStep] = useState('intro') // intro | qcm | written | result
  const [qcmScore, setQcmScore] = useState({ correct: 0, total: 0 })
  const [writtenOk, setWrittenOk] = useState(0)
  const [result, setResult] = useState(null)

  const hasQcm = test.qcm.length > 0
  const hasWritten = written.length > 0

  const qcmGame = useMemo(() => ({ type: 'qcm', title: 'Test — QCM', questions: test.qcm }), [test])

  const finish = (qc, wOk) => {
    const total = qc.total + written.length
    const correct = qc.correct + wOk
    const pct = total ? Math.round((correct / total) * 100) : 0
    const xp = correct * 12
    recordResult({ chapterId: theme.id, gameId: 'test-theme', quiz: true, pct, correct, total, xp })
    setResult({ pct, correct, total, xp })
    setStep('result')
  }

  // ---- Intro -------------------------------------------------------------
  if (step === 'intro') {
    return (
      <div className="card animate-pop-in p-6 text-center">
        <div className="text-4xl">🏁</div>
        <h2 className="mt-2 text-lg font-bold">Test du thème</h2>
        <p className="mx-auto mt-1 max-w-md text-sm text-slate-500 dark:text-slate-400">
          Une évaluation complète sur <strong>{theme.name.replace(/^Thème\s*\d+\s*[—–-]\s*/, '')}</strong> :
        </p>
        <ul className="mx-auto mt-4 max-w-xs space-y-2 text-left text-sm">
          <li className="flex items-center gap-2">❓ <span><strong>{test.qcm.length}</strong> questions de QCM</span></li>
          <li className="flex items-center gap-2">✍️ <span><strong>{test.redac.length}</strong> questions à rédiger</span></li>
          <li className="flex items-center gap-2">⚖️ <span><strong>{test.cas.length}</strong> cas pratiques à analyser</span></li>
        </ul>
        <p className="mx-auto mt-4 max-w-md text-xs text-slate-400">
          Les questions rédigées se corrigent en <em>auto-évaluation</em> : tu rédiges ta réponse, puis tu affiches le corrigé et tu t’évalues honnêtement.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          <button onClick={() => setStep(hasQcm ? 'qcm' : 'written')} className="btn-primary" style={{ backgroundColor: color }}>Commencer le test</button>
          <button onClick={onExit} className="btn-ghost">Retour</button>
        </div>
      </div>
    )
  }

  // ---- Partie QCM --------------------------------------------------------
  if (step === 'qcm') {
    return (
      <div className="animate-pop-in">
        <div className="mb-3 flex items-center justify-between">
          <button onClick={onExit} className="text-sm text-slate-500 hover:text-violet-600">← Quitter</button>
          <span className="chip bg-violet-100 text-violet-700 dark:bg-violet-950/50 dark:text-violet-300">Partie 1 · QCM</span>
        </div>
        <Qcm
          game={qcmGame}
          mode="train"
          color={color}
          onDone={({ correct, total }) => {
            setQcmScore({ correct, total })
            if (hasWritten) setStep('written')
            else finish({ correct, total }, 0)
          }}
        />
      </div>
    )
  }

  // ---- Partie rédigée (rédaction + cas pratiques) ------------------------
  if (step === 'written') {
    return (
      <WrittenPart
        items={written}
        color={color}
        onExit={onExit}
        onDone={(ok) => { setWrittenOk(ok); finish(qcmScore, ok) }}
      />
    )
  }

  // ---- Résultat ----------------------------------------------------------
  const stars = starsFromScore(result.pct)
  const great = result.pct >= 80
  return (
    <div className="card animate-pop-in p-6 text-center">
      <Confetti show={great} />
      <div className="text-5xl">{great ? '🎉' : result.pct >= 50 ? '👍' : '💪'}</div>
      <h3 className="mt-2 text-xl font-bold">Test du thème terminé</h3>
      <div className="my-3 text-4xl font-extrabold" style={{ color }}>{result.pct}%</div>
      <div className="mb-1"><Stars count={stars} size="text-2xl" /></div>
      <p className="text-sm text-slate-500 dark:text-slate-400">
        {result.correct} / {result.total} réussies · <span className="font-semibold text-violet-600 dark:text-violet-400">+{result.xp} XP</span>
      </p>
      <p className="mx-auto mt-2 max-w-md text-xs text-slate-400">Les questions rédigées sont auto-évaluées : sois honnête pour suivre ta vraie progression.</p>
      <div className="mt-5 flex flex-wrap justify-center gap-2">
        <button onClick={() => { setStep('intro'); setResult(null); setQcmScore({ correct: 0, total: 0 }); setWrittenOk(0) }} className="btn-primary" style={{ backgroundColor: color }}>Refaire le test</button>
        <button onClick={onExit} className="btn-ghost">Terminé</button>
      </div>
    </div>
  )
}

function WrittenPart({ items, color, onExit, onDone }) {
  const [i, setI] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [ok, setOk] = useState(0)
  const [answer, setAnswer] = useState('')
  const it = items[i]
  const isCas = it.kind === 'cas'
  const style = it.style
  const prompt = isCas
    ? `Analyse ce cas : ${it.prompt}`
    : style === 'tri'
      ? `Classe et justifie : ${it.prompt}`
      : style === 'section'
        ? `Présente et explique : ${it.prompt}`
        : `Définis / explique : ${it.prompt}`
  const badge = isCas ? '⚖️ Cas pratique' : style === 'tri' ? '🗂️ Classement justifié' : style === 'section' ? '📝 Développement' : '✍️ Rédaction'

  const rate = (good) => {
    const nextOk = ok + (good ? 1 : 0)
    if (i + 1 >= items.length) {
      onDone(nextOk)
    } else {
      setOk(nextOk)
      setI((v) => v + 1)
      setRevealed(false)
      setAnswer('')
    }
  }

  return (
    <div className="animate-pop-in">
      <div className="mb-3 flex items-center justify-between">
        <button onClick={onExit} className="text-sm text-slate-500 hover:text-violet-600">← Quitter</button>
        <span className="chip bg-sky-100 text-sky-700 dark:bg-sky-950/50 dark:text-sky-300">Partie 2 · À rédiger</span>
      </div>
      <div className="card p-5">
        <div className="mb-2 flex items-center justify-between text-xs font-semibold text-slate-400">
          <span>{badge}</span>
          <span>{i + 1} / {items.length}</span>
        </div>
        <h3 className="mb-3 text-lg font-semibold leading-snug">{prompt}</h3>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          rows={isCas ? 5 : 3}
          placeholder="Rédige ta réponse ici…"
          className="w-full resize-y rounded-xl border-2 border-slate-200 bg-white p-3 text-[15px] leading-relaxed outline-none focus:border-violet-400 dark:border-slate-700 dark:bg-slate-800"
        />

        {!revealed ? (
          <button onClick={() => setRevealed(true)} className="btn-primary mt-3 w-full" style={{ backgroundColor: color }}>Voir le corrigé</button>
        ) : (
          <>
            <div className="mt-3 rounded-xl border-l-4 border-emerald-400 bg-emerald-50 p-4 dark:border-emerald-500 dark:bg-emerald-950/30">
              <p className="mb-1 text-xs font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">✅ Corrigé</p>
              <p className="whitespace-pre-line text-sm leading-relaxed text-slate-700 dark:text-slate-200"><Rich text={it.answer} /></p>
            </div>
            <p className="mt-3 text-center text-sm font-semibold">Ta réponse était-elle correcte ?</p>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <button onClick={() => rate(false)} className="rounded-xl border-2 border-rose-200 bg-rose-50 py-2.5 text-sm font-bold text-rose-700 hover:border-rose-400 dark:border-rose-900 dark:bg-rose-950/40 dark:text-rose-300">❌ À revoir</button>
              <button onClick={() => rate(true)} className="rounded-xl border-2 border-emerald-200 bg-emerald-50 py-2.5 text-sm font-bold text-emerald-700 hover:border-emerald-400 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300">✅ Je maîtrisais</button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
