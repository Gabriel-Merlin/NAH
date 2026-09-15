import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { useStore } from '../store.jsx'
import { shuffle } from '../games/common.jsx'
import { useT } from '../i18n.js'

// Page plein écran d'un paquet de flashcards, façon « cartes à glisser » :
// on touche la carte pour révéler la définition, puis on glisse à GAUCHE si on
// savait, à DROITE si c'est à revoir. Boutons de repli et clavier (← →) fournis.
export default function FlashcardsPage() {
  const { deckId } = useParams()
  const navigate = useNavigate()
  const { state, addXp } = useStore()
  const t = useT()
  const deck = (state.savedDecks || []).find((d) => d.id === deckId)

  const [queue, setQueue] = useState(() => (deck ? shuffle(deck.cards) : []))
  const [i, setI] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [again, setAgain] = useState([])
  const [known, setKnown] = useState(() => new Set())
  const [phase, setPhase] = useState('study') // study | passEnd | done
  const [drag, setDrag] = useState({ x: 0, active: false })
  const [fly, setFly] = useState(null) // 'left' | 'right'
  const startX = useRef(0), startY = useRef(0), dxRef = useRef(0), moved = useRef(false)

  const total = deck ? deck.cards.length : 0
  const color = deck?.color || '#7c3aed'
  const card = queue[i]

  // Valider une carte : gauche = su (known), droite = à revoir.
  const commit = (dir) => {
    if (fly || !card) return
    const ok = dir === 'left'
    setFly(dir)
    const c = card, na = ok ? again : [...again, card], last = i + 1 >= queue.length
    setTimeout(() => {
      if (ok) setKnown((s) => new Set(s).add(c.front))
      setAgain(na); setFly(null); setDrag({ x: 0, active: false }); dxRef.current = 0; setFlipped(false)
      if (!last) setI((v) => v + 1)
      else setPhase(na.length ? 'passEnd' : 'done')
    }, 230)
  }

  const onDown = (e) => { if (fly) return; startX.current = e.clientX; startY.current = e.clientY; moved.current = false; dxRef.current = 0; setDrag({ x: 0, active: true }); try { e.currentTarget.setPointerCapture(e.pointerId) } catch { /* */ } }
  const onMove = (e) => { if (!drag.active) return; const dx = e.clientX - startX.current; if (Math.abs(dx) > 6 || Math.abs(e.clientY - startY.current) > 6) moved.current = true; dxRef.current = dx; setDrag({ x: dx, active: true }) }
  const onUp = () => {
    if (!drag.active) return
    const dx = dxRef.current
    const TH = 90
    if (dx <= -TH) { commit('left'); return }
    if (dx >= TH) { commit('right'); return }
    if (!moved.current) setFlipped((f) => !f) // simple touche = retourner
    setDrag({ x: 0, active: false }); dxRef.current = 0
  }

  // Clavier
  useEffect(() => {
    if (phase !== 'study') return
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') commit('left')
      else if (e.key === 'ArrowRight') commit('right')
      else if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); setFlipped((f) => !f) }
      else if (e.key === 'Escape') navigate('/revision')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  const restartAll = () => { setQueue(shuffle(deck.cards)); setI(0); setAgain([]); setKnown(new Set()); setFlipped(false); setPhase('study') }
  const studyMissed = () => { setQueue(shuffle(again)); setI(0); setAgain([]); setFlipped(false); setPhase('study') }
  const finish = () => { try { addXp(Math.min(15, known.size)) } catch { /* */ } navigate('/revision') }

  if (!deck) return <Navigate to="/revision" replace />

  const Bar = (
    <div className="flex items-center gap-3 px-4 pt-4 pb-2">
      <button onClick={() => navigate('/revision')} aria-label={t('quit')} className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-slate-500 shadow dark:bg-slate-800 dark:text-slate-300">✕</button>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold">{deck.title}</p>
        <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
          <div className="h-full rounded-full transition-all" style={{ width: `${Math.round((i / Math.max(1, queue.length)) * 100)}%`, backgroundColor: color }} />
        </div>
      </div>
      <span className="shrink-0 text-sm font-semibold tabular-nums" style={{ color }}>{Math.min(i + 1, queue.length)}<span className="text-slate-400">/{queue.length}</span></span>
    </div>
  )

  // Rendu via un portal sur <body> pour couvrir vraiment tout l'écran (au-dessus
  // de l'en-tête), sans être piégé par la transformation de la zone de contenu.
  return createPortal(
    <div className="fixed inset-0 z-[70] flex select-none flex-col bg-slate-50 dark:bg-slate-950">
      {Bar}

      {phase === 'study' && card && (
        <>
          <div className="relative flex flex-1 items-center justify-center overflow-hidden px-5">
            <div
              onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp}
              className="relative w-full max-w-md touch-none"
              style={{
                transform: fly ? `translateX(${fly === 'left' ? -140 : 140}%) rotate(${fly === 'left' ? -16 : 16}deg)` : `translateX(${drag.x}px) rotate(${drag.x * 0.04}deg)`,
                transition: fly || !drag.active ? 'transform .23s ease' : 'none',
              }}
            >
              <div className="[perspective:1400px]">
                <div className="relative h-[58vh] max-h-[520px] w-full transition-transform duration-500 [transform-style:preserve-3d]" style={{ transform: flipped ? 'rotateY(180deg)' : 'none' }}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center overflow-y-auto rounded-[1.75rem] border border-slate-200 bg-white p-8 text-center shadow-xl [backface-visibility:hidden] dark:border-slate-700 dark:bg-slate-800">
                    <span className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.25em] text-slate-400">{t('question')}</span>
                    <span className="font-display text-[1.75rem] font-semibold leading-snug">{card.front}</span>
                    <span className="mt-6 text-xs text-slate-400">{t('tapToFlip')}</span>
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center overflow-y-auto rounded-[1.75rem] border-2 p-8 text-center shadow-xl [backface-visibility:hidden]" style={{ transform: 'rotateY(180deg)', borderColor: color, background: color + '12' }}>
                    <span className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.25em]" style={{ color }}>{t('answer')}</span>
                    <span className={`font-medium leading-relaxed ${card.back && card.back.length > 90 ? 'text-lg' : 'text-2xl'}`}>{card.back}</span>
                  </div>
                </div>
              </div>
              {/* Étiquettes de glissement */}
              <div className="pointer-events-none absolute left-5 top-5 -rotate-12 rounded-xl border-[3px] border-emerald-500 px-3 py-1 font-display text-xl font-black text-emerald-500" style={{ opacity: Math.min(1, Math.max(0, -drag.x / 90)) }}>✓ {t('iKnew')}</div>
              <div className="pointer-events-none absolute right-5 top-5 rotate-12 rounded-xl border-[3px] border-rose-500 px-3 py-1 font-display text-xl font-black text-rose-500" style={{ opacity: Math.min(1, Math.max(0, drag.x / 90)) }}>↩ {t('toReview')}</div>
            </div>
          </div>

          <div className="px-5 pb-7 pt-1">
            <p className="mb-3 text-center text-xs text-slate-400">{t('swipeHint')}</p>
            <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
              <button onClick={() => commit('left')} className="btn bg-emerald-100 py-3.5 font-bold text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300">✓ {t('iKnew')}</button>
              <button onClick={() => commit('right')} className="btn bg-rose-100 py-3.5 font-bold text-rose-700 hover:bg-rose-200 dark:bg-rose-950/50 dark:text-rose-300">{t('toReview')} ↩</button>
            </div>
          </div>
        </>
      )}

      {(phase === 'passEnd' || phase === 'done') && (
        <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
          <div className="text-5xl">{phase === 'done' ? '🎉' : '🔁'}</div>
          {phase === 'done' && <p className="mt-3 font-display text-2xl font-semibold">{t('flashWellDone')}</p>}
          <p className="mt-2 text-slate-600 dark:text-slate-300">{t('cardsKnownOf').replace('{c}', known.size).replace('{n}', total)}</p>
          {phase === 'passEnd' && <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{again.length} {t('toReviewLabel')}</p>}
          <div className="mt-7 w-full max-w-xs space-y-3">
            {phase === 'passEnd' && <button onClick={studyMissed} className="btn-primary w-full text-white" style={{ backgroundColor: color }}>🔁 {t('reviewMissed')} ({again.length})</button>}
            <button onClick={restartAll} className={`w-full ${phase === 'done' ? 'btn-primary text-white' : 'btn-ghost'}`} style={phase === 'done' ? { backgroundColor: color } : undefined}>↻ {t('restartDeck')}</button>
            <button onClick={finish} className="w-full py-2 text-sm text-slate-400 hover:text-slate-600">{t('finishNow')}</button>
          </div>
        </div>
      )}
    </div>,
    document.body,
  )
}
