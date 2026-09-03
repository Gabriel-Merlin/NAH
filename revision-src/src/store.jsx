import { createContext, useContext, useEffect, useMemo, useRef, useState, useCallback } from 'react'
import { SUBJECTS, ALL_CHAPTERS, chapterGameCount } from './data/index.js'
import { BADGES } from './badges.js'

// ---------------------------------------------------------------------------
// Sauvegarde locale (localStorage). La progression de l'élève est conservée
// entre les sessions sur son appareil, mais un compte est désormais requis
// pour accéder au site. Structure versionnée pour évoluer sans casser.
// ---------------------------------------------------------------------------
const KEY = 'stmg_progress_v2'

// Remise à zéro (v2) : on efface l'ancienne progression locale et la session
// pour forcer chaque utilisateur à (re)créer un compte. Effectué une seule fois
// par appareil grâce au marqueur `stmg_reset_v2`.
;(function resetForV2() {
  try {
    if (localStorage.getItem('stmg_reset_v2')) return
    localStorage.removeItem('stmg_progress_v1')
    localStorage.removeItem('stmg_session')
    localStorage.setItem('stmg_reset_v2', '1')
  } catch {
    /* navigation privée / quota : on ignore */
  }
})()

const emptyState = () => ({
  xp: 0,
  streak: { count: 0, last: null },
  badges: [], // ids de badges obtenus
  chapters: {}, // { [chapterId]: { games: { [gameId]: pct }, quiz: pct } }
  favorites: [], // ids de chapitres marqués « à revoir »
  lastChapter: null, // { subjectId, chapterId }
  track: null, // { level, specialty } — filière choisie à l'entrée
  profile: null, // { firstName, lastName } — fiche d'information (accueil personnalisé)
  onboarded: false, // a vu l'étape « Que veux-tu travailler ? » (choix des chapitres)
  theme: null, // 'light' | 'dark' | null (= système)
  customTheme: null, // { bg, ink, accent, card } — couleurs personnalisées (null = charte par défaut)
  lang: 'fr', // langue de l'interface : 'fr' | 'en' | 'es'
  totalAnswers: 0,
  correctAnswers: 0,
  weekly: { week: null, done: [] }, // cours travaillés durant la semaine ISO en cours
  classCode: '', // code de classe pour le classement hebdomadaire partagé
  account: null, // { id, email, role } quand connecté (compte prof/élève)
})

// Clé de semaine ISO (ex. « 2026-W36 ») pour le suivi / classement hebdomadaire.
export function isoWeekKey(d = new Date()) {
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))
  const day = date.getUTCDay() || 7
  date.setUTCDate(date.getUTCDate() + 4 - day)
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1))
  const weekNo = Math.ceil(((date - yearStart) / 86400000 + 1) / 7)
  return `${date.getUTCFullYear()}-W${String(weekNo).padStart(2, '0')}`
}

function load() {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return emptyState()
    return { ...emptyState(), ...JSON.parse(raw) }
  } catch {
    return emptyState()
  }
}

function todayKey() {
  return new Date().toISOString().slice(0, 10)
}
function daysBetween(a, b) {
  const d1 = new Date(a + 'T00:00:00')
  const d2 = new Date(b + 'T00:00:00')
  return Math.round((d2 - d1) / 86400000)
}

// Niveaux : paliers d'XP cumulés.
const LEVELS = [0, 100, 250, 450, 700, 1000, 1400, 1900, 2500, 3200, 4000, 5000]
export function levelFromXp(xp) {
  let lvl = 1
  for (let i = 0; i < LEVELS.length; i++) if (xp >= LEVELS[i]) lvl = i + 1
  const curFloor = LEVELS[lvl - 1] ?? 0
  const nextFloor = LEVELS[lvl] ?? curFloor + 1200
  return {
    level: lvl,
    into: xp - curFloor,
    span: nextFloor - curFloor,
    pct: Math.min(100, Math.round(((xp - curFloor) / (nextFloor - curFloor)) * 100)),
    next: nextFloor,
  }
}

const StoreCtx = createContext(null)

export function StoreProvider({ children }) {
  const [state, setState] = useState(load)
  const [newBadges, setNewBadges] = useState([]) // badges à célébrer

  // Persistance à chaque changement.
  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(state))
    } catch {
      /* quota plein ou navigation privée : on ignore silencieusement */
    }
  }, [state])

  // Application du thème sur <html>.
  useEffect(() => {
    const root = document.documentElement
    const prefersDark =
      state.theme === 'dark' ||
      (state.theme == null && window.matchMedia?.('(prefers-color-scheme: dark)').matches)
    root.classList.toggle('dark', !!prefersDark)
  }, [state.theme])

  // Apparence personnalisée : on pose (ou retire) les variables CSS sur <html>
  // (couleurs, polices, arrondi, taille du texte). `avatar` n'est pas une
  // variable CSS (géré dans les composants), on l'ignore ici.
  useEffect(() => {
    const root = document.documentElement
    const map = {
      bg: '--c-bg', ink: '--c-ink', accent: '--c-accent', card: '--c-card',
      fontDisplay: '--font-display', fontBody: '--font-body', radius: '--radius', scale: '--scale',
    }
    for (const k of Object.keys(map)) {
      const v = state.customTheme?.[k]
      if (v) root.style.setProperty(map[k], v)
      else root.style.removeProperty(map[k])
    }
  }, [state.customTheme])

  const evaluateBadges = useCallback((next) => {
    const derived = deriveAll(next)
    const earned = BADGES.filter((b) => b.check(next, derived)).map((b) => b.id)
    const fresh = earned.filter((id) => !next.badges.includes(id))
    if (fresh.length) {
      next.badges = [...next.badges, ...fresh]
      setNewBadges((q) => [...q, ...fresh])
    }
    return next
  }, [])

  // Met à jour le streak (jours consécutifs) au moment d'une activité.
  const bumpStreak = (s) => {
    const t = todayKey()
    if (s.streak.last === t) return s.streak
    if (s.streak.last && daysBetween(s.streak.last, t) === 1)
      return { count: s.streak.count + 1, last: t }
    return { count: 1, last: t }
  }

  const recordResult = useCallback(
    ({ chapterId, gameId, quiz = false, pct, correct = 0, total = 0, xp = 0 }) => {
      setState((prev) => {
        const next = structuredCloneSafe(prev)
        const ch = (next.chapters[chapterId] ||= { games: {}, quiz: 0 })
        if (quiz) ch.quiz = Math.max(ch.quiz || 0, Math.round(pct))
        else ch.games[gameId] = Math.max(ch.games[gameId] || 0, Math.round(pct))
        next.xp += Math.round(xp)
        next.totalAnswers += total
        next.correctAnswers += correct
        next.streak = bumpStreak(next)
        // Suivi hebdomadaire : chapitres distincts travaillés cette semaine ISO.
        const wk = isoWeekKey()
        if (!next.weekly || next.weekly.week !== wk) next.weekly = { week: wk, done: [] }
        if (chapterId && !next.weekly.done.includes(chapterId)) next.weekly.done = [...next.weekly.done, chapterId]
        return evaluateBadges(next)
      })
    },
    [evaluateBadges],
  )

  const toggleFavorite = useCallback((chapterId) => {
    setState((prev) => {
      const has = prev.favorites.includes(chapterId)
      const next = {
        ...prev,
        favorites: has
          ? prev.favorites.filter((c) => c !== chapterId)
          : [...prev.favorites, chapterId],
      }
      return evaluateBadges(next)
    })
  }, [evaluateBadges])

  const setLastChapter = useCallback((subjectId, chapterId) => {
    setState((prev) => {
      if (prev.lastChapter?.chapterId === chapterId) return prev
      return { ...prev, lastChapter: { subjectId, chapterId } }
    })
  }, [])

  const setTheme = useCallback((theme) => setState((p) => ({ ...p, theme })), [])

  const setTrack = useCallback((track) => setState((p) => ({ ...p, track })), [])

  const setProfile = useCallback((profile) => setState((p) => evaluateBadges({ ...p, profile })), [evaluateBadges])

  // Photo de profil (data URL déjà réduite) : fusionnée dans le profil.
  const setPhoto = useCallback((photo) => setState((p) => ({ ...p, profile: { ...(p.profile || {}), photo: photo || undefined } })), [])

  const setLang = useCallback((lang) => setState((p) => ({ ...p, lang })), [])

  const setClassCode = useCallback((classCode) => setState((p) => ({ ...p, classCode: classCode || '' })), [])

  const setAccount = useCallback((account) => setState((p) => ({ ...p, account: account || null })), [])

  // Couleurs personnalisées : fusionne des overrides ({bg,ink,accent,card}).
  const setCustomTheme = useCallback((patch) => setState((p) => ({
    ...p,
    customTheme: patch ? { ...(p.customTheme || {}), ...patch } : null,
  })), [])
  const resetCustomTheme = useCallback(() => setState((p) => ({ ...p, customTheme: null })), [])

  // Inscription : applique en une fois le profil, la filière, les chapitres
  // choisis (favoris « à revoir ») et le point de reprise, puis évalue les
  // badges (Bienvenue, Feuille de route…).
  const applyOnboarding = useCallback(({ profile, track, favorites, lastChapter }) => {
    setState((p) => {
      const next = { ...p, onboarded: true }
      if (profile) next.profile = profile
      if (track) next.track = track
      if (favorites?.length) next.favorites = Array.from(new Set([...(p.favorites || []), ...favorites]))
      if (lastChapter) next.lastChapter = lastChapter
      return evaluateBadges(next)
    })
  }, [evaluateBadges])

  const resetAll = useCallback(() => setState(emptyState()), [])

  const dismissBadge = useCallback(
    (id) => setNewBadges((q) => q.filter((b) => b !== id)),
    [],
  )

  const derived = useMemo(() => deriveAll(state), [state])

  const value = {
    state,
    derived,
    newBadges,
    recordResult,
    toggleFavorite,
    setLastChapter,
    setTheme,
    setTrack,
    setProfile,
    setPhoto,
    setLang,
    setClassCode,
    setAccount,
    setCustomTheme,
    resetCustomTheme,
    applyOnboarding,
    resetAll,
    dismissBadge,
  }
  return <StoreCtx.Provider value={value}>{children}</StoreCtx.Provider>
}

export function useStore() {
  const ctx = useContext(StoreCtx)
  if (!ctx) throw new Error('useStore doit être utilisé dans <StoreProvider>')
  return ctx
}

// ---- Calculs de progression dérivés de l'état ----------------------------
// Score d'un chapitre = moyenne des meilleurs scores de ses jeux + quiz
// (les jeux non joués comptent 0), pour une progression toujours visible.
export function chapterScore(state, chapterId) {
  const meta = ALL_CHAPTERS[chapterId]
  if (!meta) return 0
  const nGames = chapterGameCount(chapterId)
  const items = nGames + 1 // + le quiz
  const rec = state.chapters[chapterId]
  if (!rec) return 0
  let sum = 0
  for (const g of meta.games || []) sum += rec.games?.[g.id] || 0
  sum += rec.quiz || 0
  return Math.round(sum / items)
}

export function starsFromScore(score) {
  if (score >= 90) return 3
  if (score >= 60) return 2
  if (score >= 25) return 1
  return 0
}

export function subjectScore(state, subjectId) {
  const subj = SUBJECTS.find((s) => s.id === subjectId)
  if (!subj || !subj.chapters.length) return 0
  const sum = subj.chapters.reduce((a, c) => a + chapterScore(state, c.id), 0)
  return Math.round(sum / subj.chapters.length)
}

export function globalScore(state) {
  if (!SUBJECTS.length) return 0
  const sum = SUBJECTS.reduce((a, s) => a + subjectScore(state, s.id), 0)
  return Math.round(sum / SUBJECTS.length)
}

function deriveAll(state) {
  const bySubject = {}
  const byChapter = {}
  let chaptersMastered = 0
  let subjectsPlayed = 0
  for (const s of SUBJECTS) {
    bySubject[s.id] = subjectScore(state, s.id)
    const played = s.chapters.some((c) => {
      const rec = state.chapters[c.id]
      return rec && (rec.quiz > 0 || Object.keys(rec.games || {}).length > 0)
    })
    if (played) subjectsPlayed++
  }
  for (const cid of Object.keys(ALL_CHAPTERS)) {
    const sc = chapterScore(state, cid)
    byChapter[cid] = sc
    if (sc >= 90) chaptersMastered++
  }
  const wk = isoWeekKey()
  const weeklyCourses = state.weekly?.week === wk ? (state.weekly.done?.length || 0) : 0
  return {
    global: globalScore(state),
    bySubject,
    byChapter,
    chaptersMastered,
    subjectsPlayed,
    weeklyCourses,
    ...levelFromXp(state.xp),
  }
}

// structuredClone n'est pas garanti partout : petit filet de sécurité.
function structuredCloneSafe(obj) {
  try {
    return structuredClone(obj)
  } catch {
    return JSON.parse(JSON.stringify(obj))
  }
}
