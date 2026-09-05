// Comptes prof / élève via Supabase Auth (GoTrue) + table `profiles`.
// Le site reste statique : on parle directement à l'API Auth et REST de Supabase
// avec la clé publique. La session (jeton) est conservée en local.
import { SUPA_URL, SUPA_ANON } from './supabase.js'

const SESSION_KEY = 'stmg_session'

export function getSession() {
  try { return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null') } catch { return null }
}
function saveSession(data) {
  const s = { token: data.access_token, refresh: data.refresh_token, user: data.user }
  try { localStorage.setItem(SESSION_KEY, JSON.stringify(s)) } catch { /* ignore */ }
  return s
}
export function clearSession() {
  try { localStorage.removeItem(SESSION_KEY) } catch { /* ignore */ }
}
export function isSignedIn() { return !!getSession()?.token }

async function gotrue(path, body) {
  const res = await fetch(`${SUPA_URL}/auth/v1/${path}`, {
    method: 'POST',
    headers: { apikey: SUPA_ANON, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.error_description || data.msg || data.message || `Erreur ${res.status}`)
  return data
}

// Crée un compte. Renvoie { needsConfirm } si l'e-mail doit être confirmé.
export async function signUp({ email, password }) {
  const data = await gotrue('signup', { email, password })
  if (data.access_token) { saveSession(data); return { needsConfirm: false } }
  return { needsConfirm: true }
}

export async function signIn({ email, password }) {
  const data = await gotrue('token?grant_type=password', { email, password })
  if (!data.access_token) throw new Error('Identifiants invalides')
  saveSession(data)
  return true
}

export function signOut() { clearSession() }

// Mot de passe oublié : envoie un e-mail de récupération (lien + code OTP selon
// le modèle d'e-mail configuré dans Supabase).
export async function requestPasswordReset(email) {
  await gotrue('recover', { email })
  return true
}

// Vérifie le code reçu par e-mail (type « recovery ») et ouvre une session.
export async function verifyRecovery({ email, token }) {
  const data = await gotrue('verify', { type: 'recovery', email, token: String(token || '').trim() })
  if (!data.access_token) throw new Error('Code invalide ou expiré')
  saveSession(data)
  return true
}

// Change le mot de passe de l'utilisateur connecté (session courante).
export async function updatePassword(password) {
  const s = getSession()
  if (!s?.token) throw new Error('no session')
  const res = await fetch(`${SUPA_URL}/auth/v1/user`, {
    method: 'PUT',
    headers: { apikey: SUPA_ANON, Authorization: 'Bearer ' + s.token, 'Content-Type': 'application/json' },
    body: JSON.stringify({ password }),
  })
  if (!res.ok) { const d = await res.json().catch(() => ({})); throw new Error(d.error_description || d.msg || d.message || `Erreur ${res.status}`) }
  return true
}

const restHeaders = (token) => ({
  apikey: SUPA_ANON,
  Authorization: 'Bearer ' + (token || SUPA_ANON),
  'Content-Type': 'application/json',
})

// Crée / met à jour la fiche profil (role, name, class_code, level, specialty…).
export async function upsertProfile(patch) {
  const s = getSession()
  if (!s?.token || !s.user?.id) throw new Error('no session')
  const row = { id: s.user.id, email: s.user.email, ...patch, updated_at: new Date().toISOString() }
  const res = await fetch(`${SUPA_URL}/rest/v1/profiles?on_conflict=id`, {
    method: 'POST',
    headers: { ...restHeaders(s.token), Prefer: 'resolution=merge-duplicates,return=representation' },
    body: JSON.stringify([row]),
  })
  if (!res.ok) throw new Error('profile ' + res.status)
  const rows = await res.json().catch(() => [])
  return rows[0] || row
}

// Sauvegarde la progression (jsonb) sur la ligne profil de l'utilisateur connecté.
export async function saveProgress(progress) {
  const s = getSession()
  if (!s?.token || !s.user?.id) return false
  const res = await fetch(`${SUPA_URL}/rest/v1/profiles?id=eq.${s.user.id}`, {
    method: 'PATCH',
    headers: { ...restHeaders(s.token), Prefer: 'return=minimal' },
    body: JSON.stringify({ progress: progress || {}, updated_at: new Date().toISOString() }),
  })
  return res.ok
}

// RGPD : supprime la fiche profil de l'utilisateur (nom, e-mail, photo, progression).
export async function deleteMyProfile() {
  const s = getSession()
  if (!s?.token || !s.user?.id) return false
  const res = await fetch(`${SUPA_URL}/rest/v1/profiles?id=eq.${s.user.id}`, {
    method: 'DELETE',
    headers: { ...restHeaders(s.token), Prefer: 'return=minimal' },
  })
  return res.ok
}

export async function fetchProfile() {
  const s = getSession()
  if (!s?.token || !s.user?.id) return null
  const res = await fetch(`${SUPA_URL}/rest/v1/profiles?id=eq.${s.user.id}&select=*`, { headers: restHeaders(s.token) })
  if (!res.ok) return null
  const rows = await res.json().catch(() => [])
  return rows[0] || null
}
