import { useState } from 'react'
import { useStore, starsFromScore } from '../store.jsx'
import { Stars, Confetti, Icon } from '../components/ui.jsx'
import Qcm from './Qcm.jsx'
import VraiFaux from './VraiFaux.jsx'
import Flashcards from './Flashcards.jsx'
import Association from './Association.jsx'
import Tri from './Tri.jsx'
import Trou from './Trou.jsx'
import Ordre from './Ordre.jsx'
import Calcul from './Calcul.jsx'
import Memory from './Memory.jsx'
import DocStudy from './DocStudy.jsx'

const COMPONENTS = {
  qcm: Qcm,
  vraifaux: VraiFaux,
  flashcard: Flashcards,
  association: Association,
  tri: Tri,
  trou: Trou,
  ordre: Ordre,
  calcul: Calcul,
  memory: Memory,
  doc: DocStudy,
}

export const GAME_LABELS = {
  qcm: 'QCM',
  vraifaux: 'Vrai / Faux',
  flashcard: 'Flashcards',
  association: 'Association',
  tri: 'Tri par catégories',
  trou: 'Texte à trous',
  ordre: 'Remise en ordre',
  calcul: 'Calcul express',
  memory: 'Memory',
  doc: 'Étude de documents',
}

// Types sans « mode » (Entraînement / Défi) : on entre directement dans le jeu.
const NO_MODE = new Set(['doc'])

// Jeux « auto-corrigés en continu » où le mode Entraînement montre l'explication
// après chaque réponse (les autres se corrigent surtout à la fin).
const HAS_MODES = true

export default function GameHost({ game, chapterId, color, quiz = false, onExit }) {
  const { recordResult } = useStore()
  const [mode, setMode] = useState(NO_MODE.has(game.type) ? 'solo' : null)
  const [result, setResult] = useState(null)
  const [runKey, setRunKey] = useState(0)

  const Comp = COMPONENTS[game.type]

  const handleDone = ({ correct, total, timeBonus = 0 }) => {
    const pct = total ? Math.round((correct / total) * 100) : 0
    const base = mode === 'defi' ? 15 : 10
    const xp = correct * base + (mode === 'defi' ? timeBonus : 0)
    recordResult({ chapterId, gameId: game.id, quiz, pct, correct, total, xp })
    setResult({ correct, total, pct, xp })
  }

  const replay = () => {
    setResult(null)
    setRunKey((k) => k + 1)
  }

  if (!Comp) return null

  if (!mode) {
    return (
      <div className="card animate-pop-in p-5">
        <button onClick={onExit} className="mb-3 text-sm text-slate-500 hover:text-violet-600">← Retour aux jeux</button>
        <h3 className="mb-1 font-display text-xl font-semibold">{game.title}</h3>
        <p className="mb-5 text-sm text-slate-500 dark:text-slate-400">Choisis ton mode de jeu.</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <button onClick={() => setMode('train')} className="rounded-2xl p-4 text-left ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:ring-slate-300 dark:ring-slate-800 dark:hover:ring-slate-700" style={{ background: '#fffdf8' }}>
            <div className="text-slate-400"><Icon.Brain size={22} /></div>
            <div className="mt-2 font-display text-lg font-semibold">Entraînement</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Sans pression, avec les corrections détaillées.</div>
          </button>
          <button onClick={() => setMode('defi')} className="rounded-2xl p-4 text-left ring-1 ring-violet-300/70 transition hover:-translate-y-0.5 hover:ring-violet-400 dark:ring-violet-500/40" style={{ background: 'linear-gradient(135deg,#fbf5e6,#fffdf8)' }}>
            <div className="text-violet-500 dark:text-violet-400"><Icon.Timer size={22} /></div>
            <div className="mt-2 font-display text-lg font-semibold">Défi</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Chronomètre + score. Gagne plus d’XP&nbsp;!</div>
          </button>
        </div>
      </div>
    )
  }

  if (result) {
    const stars = starsFromScore(result.pct)
    const great = result.pct >= 80
    return (
      <div className="card animate-pop-in p-6 text-center">
        <Confetti show={great} />
        <div className="text-5xl">{great ? '🎉' : result.pct >= 50 ? '👍' : '💪'}</div>
        <h3 className="mt-2 text-xl font-bold">{game.title}</h3>
        <div className="my-3 text-4xl font-extrabold" style={{ color }}>{result.pct}%</div>
        <div className="mb-1"><Stars count={stars} size="text-2xl" /></div>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {result.correct} / {result.total} bonnes réponses · <span className="font-semibold text-violet-600 dark:text-violet-400">+{result.xp} XP</span>
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          <button onClick={replay} className="btn-primary" style={{ backgroundColor: color }}>Rejouer</button>
          {!NO_MODE.has(game.type) && <button onClick={() => { setMode(null); setResult(null) }} className="btn-ghost">Changer de mode</button>}
          <button onClick={onExit} className="btn-ghost">Terminé</button>
        </div>
      </div>
    )
  }

  return (
    <div className="animate-pop-in">
      <div className="mb-3 flex items-center justify-between">
        <button onClick={onExit} className="text-sm text-slate-500 hover:text-violet-600">← Quitter</button>
        <span className="chip gap-1.5 text-slate-500 ring-1 ring-slate-200 dark:text-slate-400 dark:ring-slate-800">
          {mode === 'defi' ? <Icon.Timer size={14} /> : <Icon.Brain size={14} />}
          {mode === 'defi' ? 'Défi' : 'Entraînement'}
        </span>
      </div>
      <Comp key={runKey} game={game} mode={mode} color={color} onDone={handleDone} />
    </div>
  )
}
