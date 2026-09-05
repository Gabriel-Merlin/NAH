// Gestion de l'installation PWA (« Ajouter à l'écran d'accueil »).
// Capture l'événement beforeinstallprompt le plus tôt possible (il peut être
// émis avant le montage de React), et expose un petit hook pour l'UI.
import { useEffect, useState } from 'react'

let deferred = null
const listeners = new Set()
function notify() { listeners.forEach((fn) => fn()) }

// À appeler une fois au démarrage (dans main.jsx), avant le rendu.
export function initPwa() {
  if (typeof window === 'undefined') return
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault()
    deferred = e
    notify()
  })
  window.addEventListener('appinstalled', () => {
    deferred = null
    notify()
  })
}

export function isStandalone() {
  if (typeof window === 'undefined') return false
  return (
    window.matchMedia?.('(display-mode: standalone)').matches ||
    window.matchMedia?.('(display-mode: fullscreen)').matches ||
    window.navigator.standalone === true
  )
}

export function isIOS() {
  if (typeof navigator === 'undefined') return false
  const ua = navigator.userAgent || ''
  const iOSDevice = /iphone|ipad|ipod/i.test(ua)
  // iPadOS récent se présente comme un Mac tactile.
  const iPadOS = /Macintosh/i.test(ua) && typeof document !== 'undefined' && 'ontouchend' in document
  return iOSDevice || iPadOS
}

export async function promptInstall() {
  if (!deferred) return 'unavailable'
  deferred.prompt()
  try {
    const { outcome } = await deferred.userChoice
    if (outcome === 'accepted') { deferred = null; notify() }
    return outcome
  } catch {
    return 'dismissed'
  }
}

// Hook React : renvoie l'état d'installation courant et se met à jour tout seul.
export function useInstall() {
  const [, force] = useState(0)
  useEffect(() => {
    const fn = () => force((n) => n + 1)
    listeners.add(fn)
    return () => listeners.delete(fn)
  }, [])
  return {
    standalone: isStandalone(),
    ios: isIOS(),
    canPrompt: !!deferred,
    promptInstall,
  }
}
