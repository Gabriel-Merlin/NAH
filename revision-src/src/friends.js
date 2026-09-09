// Amis (demandes mutuelles) via Supabase. Modèle « code ami » : chaque élève
// a un code court à partager ; on envoie une demande à un code, l'ami
// l'accepte, puis chacun voit la progression de l'autre. Anonyme par appareil
// (clé anon + device_id), comme l'espace classe.
import { SUPA_URL, SUPA_ANON, SUPA_READY } from './supabase.js'
import { deviceId, isoWeekKey } from './leaderboard.js'

export const FRIENDS_READY = SUPA_READY
const H = () => ({ apikey: SUPA_ANON, Authorization: 'Bearer ' + SUPA_ANON, 'Content-Type': 'application/json' })
const rest = (p) => `${SUPA_URL}/rest/v1/${p}`
const enc = encodeURIComponent

// Code ami stable, stocké localement (6 caractères sans risque de confusion).
export function friendCode() {
  try {
    let c = localStorage.getItem('stmg_friend_code')
    if (!c) {
      const A = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
      c = Array.from({ length: 6 }, () => A[Math.floor(Math.random() * A.length)]).join('')
      localStorage.setItem('stmg_friend_code', c)
    }
    return c
  } catch { return 'STMGAM' }
}
export function normFriendCode(s) {
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

// Publie / met à jour ma fiche pour que mes amis voient mes stats à jour.
export async function upsertMe({ name, photo, xp, streak, coursesWeek }) {
  const row = {
    device_id: deviceId(), code: friendCode(),
    name: String(name || '').slice(0, 40),
    photo: photo ? String(photo).slice(0, 40000) : null,
    xp: Math.max(0, Math.min(100000000, Math.round(xp || 0))),
    streak: Math.max(0, Math.min(100000, Math.round(streak || 0))),
    courses_week: Math.max(0, Math.min(1000, Math.round(coursesWeek || 0))),
    week: isoWeekKey(), updated_at: new Date().toISOString(),
  }
  await send('POST', 'friend_user?on_conflict=device_id', [row], 'resolution=merge-duplicates,return=minimal')
}

export async function findByCode(code) {
  const c = normFriendCode(code)
  if (c.length < 4) return null
  const rows = await getJSON(rest(`friend_user?select=device_id,code,name,photo,xp,streak,courses_week&code=eq.${enc(c)}&limit=1`))
  return rows[0] || null
}

// Envoie une demande. Retourne : 'sent' | 'self' | 'notfound' | 'exists' | 'accepted'
export async function sendRequest(code, myName) {
  const target = await findByCode(code)
  if (!target) return 'notfound'
  if (target.device_id === deviceId()) return 'self'
  const me = deviceId()
  const existing = await getJSON(rest(`friend_request?select=id,status,from_device,to_device&or=(and(from_device.eq.${enc(me)},to_device.eq.${enc(target.device_id)}),and(from_device.eq.${enc(target.device_id)},to_device.eq.${enc(me)}))&limit=1`))
  if (existing[0]) return existing[0].status === 'accepted' ? 'accepted' : 'exists'
  await send('POST', 'friend_request?on_conflict=from_device,to_device', [{
    from_device: me, from_name: String(myName || '').slice(0, 40), from_code: friendCode(),
    to_device: target.device_id, to_name: String(target.name || '').slice(0, 40), status: 'pending',
  }], 'resolution=merge-duplicates,return=minimal')
  return 'sent'
}

export async function incoming() {
  return getJSON(rest(`friend_request?select=id,from_device,from_name,from_code,created_at&to_device=eq.${enc(deviceId())}&status=eq.pending&order=created_at.desc&limit=100`))
}
export async function outgoing() {
  return getJSON(rest(`friend_request?select=id,to_device,to_name&from_device=eq.${enc(deviceId())}&status=eq.pending&order=created_at.desc&limit=100`))
}
export async function respond(id, accept) {
  await send('PATCH', `friend_request?id=eq.${enc(id)}`, { status: accept ? 'accepted' : 'declined' }, 'return=minimal')
}

// Amis (relations acceptées) + leurs stats actuelles.
export async function fetchFriends() {
  const me = deviceId()
  const rows = await getJSON(rest(`friend_request?select=from_device,to_device&or=(from_device.eq.${enc(me)},to_device.eq.${enc(me)})&status=eq.accepted&limit=300`))
  const ids = [...new Set(rows.map((r) => (r.from_device === me ? r.to_device : r.from_device)))].filter(Boolean)
  if (!ids.length) return []
  const users = await getJSON(rest(`friend_user?select=device_id,code,name,photo,xp,streak,courses_week&device_id=in.(${ids.map(enc).join(',')})&limit=300`))
  return users
}
export async function removeFriend(otherDevice) {
  const me = deviceId()
  await send('DELETE', `friend_request?or=(and(from_device.eq.${enc(me)},to_device.eq.${enc(otherDevice)}),and(from_device.eq.${enc(otherDevice)},to_device.eq.${enc(me)}))`)
}

// --- Duels de révision entre amis (synchrone) ------------------------------
// Modèle : j'envoie une INVITATION (les questions sont figées d'emblée pour
// que les deux jouent les mêmes) → l'ami ACCEPTE (le duel passe « live ») →
// chacun joue et soumet son score → quand les deux ont joué, c'est « terminé ».
// Personne ne joue avant l'acceptation.
export async function createDuelInvite({ friendDevice, friendName, label, questions, myName }) {
  const res = await send('POST', 'friend_duel', [{
    a_device: deviceId(), a_name: String(myName || '').slice(0, 40), a_code: friendCode(),
    b_device: friendDevice, b_name: String(friendName || '').slice(0, 40),
    theme_id: '', chapter_label: String(label || '').slice(0, 120),
    questions, a_score: 0, a_total: 0, a_done: false, b_done: false, status: 'pending',
  }], 'return=representation')
  const rows = await res.json().catch(() => [])
  return rows[0]?.id || null
}
// Lecture d'un duel (pour le polling).
export async function getDuel(id) {
  const r = await getJSON(rest(`friend_duel?select=*&id=eq.${enc(id)}&limit=1`))
  return r[0] || null
}
// L'ami accepte l'invitation → le duel démarre (les deux peuvent jouer).
export async function acceptDuelInvite(id) {
  await send('PATCH', `friend_duel?id=eq.${enc(id)}`, { status: 'live', updated_at: new Date().toISOString() }, 'return=minimal')
}
// Je soumets mon score. Si les deux ont joué, le duel devient « terminé ».
export async function submitDuel(duel, points, correct) {
  const isA = duel.a_device === deviceId()
  const patch = isA ? { a_score: Math.round(points || 0), a_total: Math.round(correct || 0), a_done: true } : { b_score: Math.round(points || 0), b_total: Math.round(correct || 0), b_done: true }
  patch.updated_at = new Date().toISOString()
  await send('PATCH', `friend_duel?id=eq.${enc(duel.id)}`, patch, 'return=minimal')
  const fresh = await getDuel(duel.id)
  if (fresh && fresh.a_done && fresh.b_done && fresh.status !== 'done') {
    await send('PATCH', `friend_duel?id=eq.${enc(duel.id)}`, { status: 'done', updated_at: new Date().toISOString() }, 'return=minimal')
    return { ...fresh, status: 'done' }
  }
  return fresh
}
// Annuler / refuser un duel : le supprime (l'invitation disparaît des deux côtés).
export async function cancelDuel(id) {
  await send('DELETE', `friend_duel?id=eq.${enc(id)}`)
}
export const declineDuel = cancelDuel // alias (refuser une invitation reçue)

// Invitations reçues, en attente de mon acceptation.
export async function incomingDuels() {
  return getJSON(rest(`friend_duel?select=*&b_device=eq.${enc(deviceId())}&status=eq.pending&order=created_at.desc&limit=50`))
}
// Mes invitations envoyées, en attente que l'ami accepte (annulables).
export async function sentDuels() {
  return getJSON(rest(`friend_duel?select=id,b_name,chapter_label&a_device=eq.${enc(deviceId())}&status=eq.pending&order=created_at.desc&limit=50`))
}
// Duels acceptés (« live ») où je suis impliqué : à jouer ou en attente de l'autre.
export async function liveDuels() {
  const me = deviceId()
  return getJSON(rest(`friend_duel?select=*&or=(a_device.eq.${enc(me)},b_device.eq.${enc(me)})&status=eq.live&order=updated_at.desc&limit=50`))
}
export function myTurnToPlay(d, me = deviceId()) {
  return d.a_device === me ? !d.a_done : !d.b_done
}
// Historique des duels terminés (des deux côtés).
export async function duelHistory() {
  const me = deviceId()
  return getJSON(rest(`friend_duel?select=*&or=(a_device.eq.${enc(me)},b_device.eq.${enc(me)})&status=eq.done&order=updated_at.desc&limit=60`))
}
// Issue d'un duel terminé du point de vue de l'appareil courant.
export function duelOutcome(d, me = deviceId()) {
  const iAmA = d.a_device === me
  const mine = iAmA ? d.a_score : d.b_score
  const theirs = iAmA ? d.b_score : d.a_score
  const opp = iAmA ? d.b_name : d.a_name
  let result = 'draw'
  if (mine > theirs) result = 'win'
  else if (mine < theirs) result = 'loss'
  return { mine: mine ?? 0, theirs: theirs ?? 0, opp, result, iAmA }
}
