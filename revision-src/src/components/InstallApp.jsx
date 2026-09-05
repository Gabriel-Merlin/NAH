import { useState } from 'react'
import { useInstall } from '../pwa.js'
import { useT } from '../i18n.js'

// Carte « Installer l'application » — affichée dans « Mon espace ».
export function InstallCard() {
  const t = useT()
  const { standalone, ios, canPrompt, promptInstall } = useInstall()

  if (standalone) {
    return (
      <div className="card p-4" style={{ boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--c-accent) 35%, transparent)' }}>
        <h3 className="flex items-center gap-2 font-display font-semibold" style={{ color: 'var(--c-accent)' }}>
          <span aria-hidden>✓</span> {t('installDone')}
        </h3>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{t('installDoneHint')}</p>
      </div>
    )
  }

  return (
    <div className="card card-lux p-4">
      <h3 className="flex items-center gap-2 font-display font-semibold">
        <span aria-hidden>📲</span> {t('installApp')}
      </h3>
      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{t('installAppHint')}</p>
      {canPrompt ? (
        <button
          onClick={() => promptInstall()}
          className="mt-3 w-full rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
          style={{ backgroundColor: 'var(--c-accent)' }}
        >
          {t('installBtn')}
        </button>
      ) : (
        <p className="mt-3 rounded-xl bg-slate-100 px-3 py-2.5 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          {ios ? t('installIosHint') : t('installGuideHint')}
        </p>
      )}
    </div>
  )
}

// Bannière discrète en bas d'écran — uniquement quand l'installation directe
// est possible (Android / Chrome desktop) et non déjà installée / masquée.
const DISMISS_KEY = 'stmg_install_dismissed'
export function InstallBanner() {
  const t = useT()
  const { standalone, canPrompt, promptInstall } = useInstall()
  const [dismissed, setDismissed] = useState(() => {
    try { return localStorage.getItem(DISMISS_KEY) === '1' } catch { return false }
  })

  if (standalone || !canPrompt || dismissed) return null

  const close = () => {
    try { localStorage.setItem(DISMISS_KEY, '1') } catch { /* */ }
    setDismissed(true)
  }
  const install = async () => {
    const r = await promptInstall()
    if (r === 'accepted' || r === 'dismissed') close()
  }

  return (
    <div className="no-print fixed inset-x-0 bottom-0 z-[60] px-3 pb-3" role="dialog" aria-label={t('installApp')}>
      <div className="mx-auto flex max-w-md items-center gap-3 rounded-2xl border p-3 shadow-xl"
        style={{ backgroundColor: 'color-mix(in srgb, var(--c-bg) 94%, var(--c-accent) 6%)', borderColor: 'color-mix(in srgb, var(--c-accent) 30%, transparent)' }}>
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-xl" style={{ backgroundColor: 'color-mix(in srgb, var(--c-accent) 16%, transparent)' }} aria-hidden>📲</span>
        <p className="min-w-0 flex-1 text-sm font-semibold">{t('installBannerText')}</p>
        <button onClick={install} className="shrink-0 rounded-xl px-3 py-2 text-sm font-semibold text-white transition hover:opacity-90" style={{ backgroundColor: 'var(--c-accent)' }}>
          {t('installBtn')}
        </button>
        <button onClick={close} className="shrink-0 rounded-lg px-2 py-1 text-xs text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100" aria-label={t('later')}>✕</button>
      </div>
    </div>
  )
}
