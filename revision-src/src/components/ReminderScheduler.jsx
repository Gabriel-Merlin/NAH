import { useEffect, useRef } from 'react'
import { useStore } from '../store.jsx'
import { useT } from '../i18n.js'
import { notify, registerPeriodicReminder } from '../notify.js'

// Planifie le rappel de révision : tant que l'app est ouverte, un rappel est
// programmé à l'heure choisie (une fois par jour). En complément, une synchro
// périodique (PWA installée) permet le rappel app fermée sur Android.
export default function ReminderScheduler() {
  const { state } = useStore()
  const t = useT()
  const timer = useRef(null)
  const r = state.reminder || {}

  useEffect(() => {
    clearTimeout(timer.current)
    registerPeriodicReminder(!!r.on)
    if (!r.on) return
    if (typeof Notification === 'undefined' || Notification.permission !== 'granted') return

    let cancelled = false
    const arm = () => {
      if (cancelled) return
      const [hh, mm] = String(r.time || '18:00').split(':').map(Number)
      const now = new Date()
      const next = new Date(); next.setHours(hh || 18, mm || 0, 0, 0)
      if (next <= now) next.setDate(next.getDate() + 1)
      const ms = Math.min(next - now, 2 ** 31 - 1)
      timer.current = setTimeout(async () => {
        try {
          const today = new Date().toISOString().slice(0, 10)
          if (localStorage.getItem('stmg_reminder_shown') !== today) {
            localStorage.setItem('stmg_reminder_shown', today)
            await notify(t('reminderTitle'), t('reminderBody'))
          }
        } catch { /* */ }
        arm()
      }, ms)
    }
    arm()
    return () => { cancelled = true; clearTimeout(timer.current) }
  }, [r.on, r.time, t])

  return null
}
