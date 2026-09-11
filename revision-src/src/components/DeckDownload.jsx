import { useStore } from '../store.jsx'
import { isStandalone } from '../pwa.js'
import { useT } from '../i18n.js'

// Bouton « Télécharger dans Révision » pour un paquet de flashcards (thème ou
// matière). Réservé à l'application installée. `deck` = { id, title, cards, … }.
export function DeckDownload({ deck, color = 'var(--c-accent)', label }) {
  const { state, saveDeck } = useStore()
  const t = useT()
  if (!isStandalone() || !deck || !deck.cards?.length) return null
  const saved = (state.savedDecks || []).some((d) => d.id === deck.id)
  return (
    <section className="no-print card card-lux flex items-center gap-3 p-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-xl" style={{ backgroundColor: (deck.color || '#7c3aed') + '22' }}>🃏</span>
      <div className="min-w-0 flex-1">
        <p className="font-display font-semibold leading-tight">{label || t('downloadDeckTitle')}</p>
        <p className="text-xs text-slate-500 dark:text-slate-400">{deck.cards.length} {t('cardsCount')} · {t('downloadDeckHint')}</p>
      </div>
      <button
        onClick={() => saveDeck(deck)}
        disabled={saved}
        className="btn-primary shrink-0 !min-h-0 !py-2 text-sm text-white disabled:opacity-60"
        style={{ backgroundColor: saved ? undefined : (deck.color || color) }}
      >
        {saved ? `✓ ${t('deckSaved')}` : `⬇️ ${t('downloadDeck')}`}
      </button>
    </section>
  )
}
