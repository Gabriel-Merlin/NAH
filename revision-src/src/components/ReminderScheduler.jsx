import { useEffect, useRef } from 'react'
import { useStore } from '../store.jsx'
import { useT } from '../i18n.js'
import { notify, registerPeriodicReminder } from '../notify.js'

const todayKey = () => new Date().toISOString().slice(0, 10)

// Planifie le rappel « il est temps de réviser » :
//  - tant que l'app est ouverte, un rappel est programmé à l'heure choisie ;
//  - re-planifié à chaque retour sur l'app (les setTimeout longs sont souvent
//    suspendus par le téléphone → sinon le rappel « saute ») ;
//  - rattrapage : si l'heure est déjà passée aujourd'hui et que l'élève n'a pas
//    encore révisé, le rappel s'affiche dès qu'il rouvre l'app ;
//  - jamais deux fois le même jour, et pas de rappel si déjà révisé ce jour ;
//  - en complément, synchro périodique (PWA installée) pour le rappel app fermée.
export default function ReminderScheduler() {
  const { state } = useStore()
  const t = useT()
  const timer = useRef(null)
  const r = state.reminder || {}
  const studiedToday = state.streak?.last === todayKey()

  useEffect(() => {
    clearTimeout(timer.current)
    registerPeriodicReminder(!!r.on)
    if (!r.on) return
    if (typeof Notification === 'undefined' || Notification.permission !== 'granted') return

    let cancelled = false

    const fireOnce = async () => {
      try {
        const day = todayKey()
        // Déjà révisé aujourd'hui, ou rappel déjà montré : on ne dérange pas.
        if (state.streak?.last === day) return
        if (localStorage.getItem('stmg_reminder_shown') === day) return
        localStorage.setItem('stmg_reminder_shown', day)
        const streak = state.streak?.count || 0
        const body = streak > 0 ? t('reminderBodyStreak').replace('{n}', streak) : t('reminderBody')
        await notify(t('reminderTitle'), body)
      } catch { /* ignore */ }
    }

    const [hh, mm] = String(r.time || '18:00').split(':').map(Number)
    const dueMsFromNow = () => {
      const now = new Date()
      const next = new Date(); next.setHours(hh || 18, mm || 0, 0, 0)
      if (next <= now) next.setDate(next.getDate() + 1)
      return next - now
    }

    const arm = () => {
      if (cancelled) return
      clearTimeout(timer.current)
      const ms = Math.min(dueMsFromNow(), 2 ** 31 - 1)
      timer.current = setTimeout(async () => { await fireOnce(); arm() }, ms)
    }

    // Rattrapage à l'ouverture : l'heure est-elle déjà passée aujourd'hui ?
    const catchUp = () => {
      const now = new Date()
      const todayAt = new Date(); todayAt.setHours(hh || 18, mm || 0, 0, 0)
      if (now >= todayAt) fireOnce()
    }

    // Re-planifie à chaque retour au premier plan (les minuteurs longs sont
    // souvent tués en arrière-plan sur mobile).
    const onVisible = () => { if (!document.hidden) { catchUp(); arm() } }

    catchUp()
    arm()
    document.addEventListener('visibilitychange', onVisible)
    window.addEventListener('focus', onVisible)
    return () => {
      cancelled = true
      clearTimeout(timer.current)
      document.removeEventListener('visibilitychange', onVisible)
      window.removeEventListener('focus', onVisible)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [r.on, r.time, studiedToday, t])

  return null
}
