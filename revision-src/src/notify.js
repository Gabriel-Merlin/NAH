// Notifications locales — passent par le service worker (compatible mobile,
// où le constructeur Notification n'est pas disponible).
export async function ensurePermission() {
  try {
    if (typeof Notification === 'undefined') return 'unsupported'
    if (Notification.permission === 'granted') return 'granted'
    if (Notification.permission === 'denied') return 'denied'
    return await Notification.requestPermission()
  } catch { return 'denied' }
}

export function notifSupported() {
  return typeof Notification !== 'undefined' && 'serviceWorker' in navigator
}

export async function notify(title, body) {
  try {
    if (typeof Notification === 'undefined' || Notification.permission !== 'granted') return false
    const reg = await navigator.serviceWorker?.ready
    const opts = { body, icon: './icon-192.png', badge: './favicon.png', tag: 'revision-reminder', renotify: true }
    if (reg?.showNotification) { await reg.showNotification(title, opts); return true }
    // Repli desktop.
    // eslint-disable-next-line no-new
    new Notification(title, opts)
    return true
  } catch { return false }
}

// Enregistre une synchro périodique (PWA installée sur Android) pour que le
// rappel puisse arriver même app fermée. Sans effet ailleurs (best-effort).
export async function registerPeriodicReminder(on) {
  try {
    const reg = await navigator.serviceWorker?.ready
    if (!reg || !('periodicSync' in reg)) return
    if (on) {
      const status = await navigator.permissions?.query?.({ name: 'periodic-background-sync' }).catch(() => null)
      if (!status || status.state === 'granted') await reg.periodicSync.register('revision-reminder', { minInterval: 20 * 60 * 60 * 1000 }).catch(() => {})
    } else {
      await reg.periodicSync.unregister('revision-reminder').catch(() => {})
    }
  } catch { /* non supporté */ }
}
