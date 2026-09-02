// Classement hebdomadaire partagé (par code de classe) via Supabase.
// Le site reste statique : on parle directement à l'API REST (PostgREST) de
// Supabase avec la clé publique « anon » (protégée par des règles RLS).
// La clé anon est PUBLIQUE par conception (comme prévu par Supabase).
const SUPA_URL = 'https://wyydagcjkbivtbuhbzon.supabase.co'
const SUPA_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5eWRhZ2Nqa2JpdnRidWhiem9uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxNjUzNjgsImV4cCI6MjA5NTc0MTM2OH0.ZSfHT9Ki6_bZae9yeJm-rh9Nc7TrsJnX08q68KK0xfs'

export const LEADERBOARD_READY = /^https:\/\/[a-z0-9]+\.supabase\.co$/.test(SUPA_URL) && SUPA_KEY.length > 20

// Clé de semaine ISO (identique au store) : « 2026-W36 ».
export function isoWeekKey(d = new Date()) {
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))
  const day = date.getUTCDay() || 7
  date.setUTCDate(date.getUTCDate() + 4 - day)
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1))
  const weekNo = Math.ceil(((date - yearStart) / 86400000 + 1) / 7)
  return `${date.getUTCFullYear()}-W${String(weekNo).padStart(2, '0')}`
}

// Identifiant d'appareil (anonyme, stable) — pour ne pas créer de doublons.
export function deviceId() {
  try {
    let id = localStorage.getItem('stmg_device')
    if (!id) {
      id = (crypto?.randomUUID?.() || 'd' + Date.now().toString(36) + Math.random().toString(36).slice(2))
      localStorage.setItem('stmg_device', id)
    }
    return id
  } catch {
    return 'anon'
  }
}

export function normalizeCode(code) {
  return String(code || '').trim().toLowerCase().replace(/\s+/g, '-').slice(0, 24)
}

const headers = () => ({ apikey: SUPA_KEY, Authorization: 'Bearer ' + SUPA_KEY, 'Content-Type': 'application/json' })

// Envoie / met à jour mon score de la semaine dans ma classe (upsert).
export async function submitScore({ classCode, name, photo, courses }) {
  const row = {
    class_code: normalizeCode(classCode),
    device_id: deviceId(),
    week: isoWeekKey(),
    name: String(name || '').slice(0, 40),
    photo: photo ? String(photo).slice(0, 40000) : null,
    courses: Math.max(0, Math.min(1000, Math.round(courses || 0))),
    updated_at: new Date().toISOString(),
  }
  const res = await fetch(`${SUPA_URL}/rest/v1/leaderboard?on_conflict=class_code,device_id,week`, {
    method: 'POST',
    headers: { ...headers(), Prefer: 'resolution=merge-duplicates,return=minimal' },
    body: JSON.stringify([row]),
  })
  if (!res.ok) throw new Error('submit ' + res.status)
}

// Lit le classement de la semaine en cours pour une classe (top 100).
export async function fetchRanking(classCode) {
  const wk = isoWeekKey()
  const url = `${SUPA_URL}/rest/v1/leaderboard?select=name,photo,courses,device_id,updated_at&class_code=eq.${encodeURIComponent(normalizeCode(classCode))}&week=eq.${wk}&order=courses.desc,updated_at.asc&limit=100`
  const res = await fetch(url, { headers: headers() })
  if (!res.ok) throw new Error('fetch ' + res.status)
  return await res.json()
}
