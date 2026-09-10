import { Navigate } from 'react-router-dom'
import { useStore } from '../store.jsx'
import { useT } from '../i18n.js'
import { SHOP_ITEMS } from '../data/shop.js'

const CATS = [
  { id: 'boost', icon: '⚡', key: 'catBoost' },
  { id: 'theme', icon: '🎨', key: 'catTheme' },
  { id: 'avatar', icon: '🙂', key: 'catAvatar' },
]

export default function Shop() {
  const { state, buy, equip, resetCustomTheme } = useStore()
  const t = useT()
  if (!state.track) return <Navigate to="/" replace />

  const coins = state.coins || 0
  const owned = state.owned || []
  const ct = state.customTheme || {}

  const isOwned = (it) => owned.includes(it.id)
  const isEquipped = (it) =>
    (it.type === 'palette' && ct.accent && ct.accent.toLowerCase() === it.theme.accent.toLowerCase()) ||
    (it.type === 'avatar' && ct.avatar === it.avatar)

  const Coin = () => <span aria-hidden>🪙</span>

  const ItemCard = ({ it }) => {
    const ownedIt = isOwned(it)
    const equipped = isEquipped(it)
    const affordable = coins >= it.price
    const swatch = it.type === 'palette'
    return (
      <div className="card flex flex-col gap-3 p-4">
        <div className="flex items-center gap-3">
          {swatch ? (
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-lg ring-1 ring-black/5" style={{ background: it.theme.bg, color: it.theme.accent }}>{it.icon}</span>
          ) : (
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-2xl" style={{ backgroundColor: 'color-mix(in srgb, var(--c-accent) 14%, transparent)' }}>{it.icon}</span>
          )}
          <div className="min-w-0 flex-1">
            <p className="font-display font-semibold leading-tight">{it.name}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {it.type === 'consumable' ? `${t('inStock')} : ${state.freezes || 0}` : (it.desc || '')}
            </p>
          </div>
        </div>
        {swatch && (
          <div className="flex gap-1.5">
            {[it.theme.bg, it.theme.card, it.theme.accent, it.theme.ink].map((c, i) => (
              <span key={i} className="h-4 flex-1 rounded-full ring-1 ring-black/5" style={{ background: c }} />
            ))}
          </div>
        )}
        {!ownedIt || it.type === 'consumable' ? (
          <button
            onClick={() => buy(it)}
            disabled={!affordable}
            className="btn-primary !min-h-0 !py-2 text-sm disabled:opacity-40"
            style={{ backgroundColor: 'var(--c-accent)' }}
          >
            {affordable ? <>{t('buy')} · <Coin /> {it.price}</> : <>{t('notEnough')} (<Coin /> {it.price})</>}
          </button>
        ) : equipped ? (
          <span className="rounded-xl bg-emerald-100 py-2 text-center text-sm font-semibold text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">✓ {t('equipped')}</span>
        ) : (
          <button onClick={() => equip(it)} className="btn-ghost !min-h-0 !py-2 text-sm ring-1 ring-slate-200 dark:ring-slate-700">{t('equip')}</button>
        )}
      </div>
    )
  }

  return (
    <div className="animate-lux space-y-6">
      <header className="text-center">
        <p className="kicker">🛍️ {t('shop')}</p>
        <h1 className="mt-1 font-display text-[1.9rem] font-medium leading-tight">{t('shop')}</h1>
        <span className="mx-auto mt-3 block h-px w-24 rounded-full" style={{ background: 'linear-gradient(90deg,transparent,#c8a24e,transparent)' }} />
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{t('shopSub')}</p>
      </header>

      {/* Solde */}
      <section className="card card-lux flex items-center justify-between p-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{t('yourBalance')}</p>
          <p className="font-display text-3xl font-extrabold" style={{ color: 'var(--c-accent)' }}>🪙 {coins}</p>
        </div>
        <p className="max-w-[55%] text-right text-xs text-slate-500 dark:text-slate-400">{t('howToEarnCoins')}</p>
      </section>

      {CATS.map((cat) => {
        const items = SHOP_ITEMS.filter((i) => i.category === cat.id)
        if (!items.length) return null
        return (
          <section key={cat.id}>
            <div className="mb-3 flex items-center justify-between px-1">
              <h2 className="font-display text-lg font-semibold text-slate-700 dark:text-slate-200">{cat.icon} {t(cat.key)}</h2>
              {cat.id === 'theme' && (state.customTheme?.accent || state.customTheme?.avatar) && (
                <button onClick={resetCustomTheme} className="text-xs font-semibold text-[#98761f] hover:underline dark:text-[#d9bd77]">{t('resetTheme')}</button>
              )}
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((it) => <ItemCard key={it.id} it={it} />)}
            </div>
          </section>
        )
      })}
    </div>
  )
}
