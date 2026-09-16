// Espace parent (suivi parental) via Supabase, sur le même modèle « appareil +
// code » que les amis : l'élève publie un instantané de ses stats sous un code
// court qu'il partage à ses parents ; le parent saisit ce code une fois et
// consulte, en lecture seule, la progression de son enfant (temps de révision,
// connexion/série, XP, matières, badges…). Le lien est mémorisé localement sur
// l'appareil du parent → une fois relié, l'espace s'ouvre automatiquement.
import { SUPA_URL, SUPA_ANON, SUPA_READY } from './supabase.js'
import { deviceId } from './leaderboard.js'

export const PARENT_READY = SUPA_READY
const H = () => ({ apikey: SUPA_ANON, Authorization: 'Bearer ' + SUPA_ANON, 'Content-Type': 'application/json' })
const rest = (p) => `${SUPA_URL}/rest/v1/${p}`
const enc = encodeURIComponent
const clampInt = (v, min, max) => Math.max(min, Math.min(max, Math.round(v || 0)))

// Code à donner à ses parents (6 caractères lisibles, préfixe P pour le repérer).
export function parentCode() {
  try {
    let c = localStorage.getItem('stmg_parent_code')
    if (!c) {
      const A = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
      c = 'P' + Array.from({ length: 5 }, () => A[Math.floor(Math.random() * A.length)]).join('')
      localStorage.setItem('stmg_parent_code', c)
    }
    return c
  } catch { return 'PSTMG1' }
}
export function normParentCode(s) {
  return String(s || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6)
}

async function getJSON(url) {
  const r = await fetch(url, { headers: H() })
  if (!r.ok) throw new Error('GET ' + r.status)
  return r.json()
}
async function send(method, path, body, prefer) {
  const r = await fetch(rest(path), { method, headers: { ...H(), ...(prefer ? { Prefer: prefer } : {}) }, body: body ? JSON.stringify(body) : undefined })
  if (!r.ok) throw new Error(method + ' ' + r.status)
  return r
}

// ÉLÈVE — publie / met à jour l'instantané lu par le parent.
export async function publishChildStats(snap) {
  if (!PARENT_READY || !snap) return
  const row = {
    device_id: deviceId(),
    code: parentCode(),
    name: String(snap.name || '').slice(0, 60),
    xp: clampInt(snap.xp, 0, 1e9),
    level: clampInt(snap.level, 0, 1000),
    streak: clampInt(snap.streak, 0, 100000),
    courses_week: clampInt(snap.coursesWeek, 0, 1000),
    weekly_goal: clampInt(snap.weeklyGoal, 0, 1000),
    total_time: clampInt(snap.totalTime, 0, 1e9),
    bac_date: snap.bacDate || null,
    badges: clampInt(snap.badges, 0, 1000),
    track: String(snap.track || '').slice(0, 80),
    subjects: Array.isArray(snap.subjects)
      ? snap.subjects.slice(0, 20).map((s) => ({
          short: String(s.short || '').slice(0, 40),
          color: String(s.color || '').slice(0, 20),
          score: clampInt(s.score, 0, 100),
          time: clampInt(s.time, 0, 1e9),
        }))
      : [],
    last_active: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }
  await send('POST', 'child_stats?on_conflict=device_id', [row], 'resolution=merge-duplicates,return=minimal')
}

// ÉLÈVE — supprime son instantané (rompre le suivi côté enfant).
export async function deleteMyChildStats() {
  if (!PARENT_READY) return
  try { await send('DELETE', `child_stats?device_id=eq.${enc(deviceId())}`) } catch { /* best effort */ }
}

// PARENT — lit l'instantané d'un enfant par son code.
export async function fetchChildByCode(code) {
  const c = normParentCode(code)
  if (c.length < 4) return null
  const rows = await getJSON(rest(`child_stats?select=*&code=eq.${enc(c)}&order=updated_at.desc&limit=1`))
  return rows[0] || null
}

// Lien parent ↔ enfant, mémorisé localement sur l'appareil du parent.
export function getLinkedChild() {
  try { return localStorage.getItem('stmg_parent_link') || '' } catch { return '' }
}
export function setLinkedChild(code) {
  try {
    const c = normParentCode(code)
    if (c) localStorage.setItem('stmg_parent_link', c)
    else localStorage.removeItem('stmg_parent_link')
  } catch { /* stockage indisponible */ }
}
