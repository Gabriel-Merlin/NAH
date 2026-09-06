// Comptes prof / élève via Supabase Auth (GoTrue) + table `profiles`.
// Le site reste statique : on parle directement à l'API Auth et REST de Supabase
// avec la clé publique. La session (jeton) est conservée en local ET rafraîchie
// automatiquement grâce au refresh_token, pour rester connecté durablement.
import { SUPA_URL, SUPA_ANON } from './supabase.js'

const SESSION_KEY = 'stmg_session'

export function getSession() {
  try { return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null') } catch { return null }
}
function saveSession(data) {
  const now = Math.floor(Date.now() / 1000)
  // GoTrue renvoie expires_at (unix) et/ou expires_in (secondes).
  const expires_at = Number(data.expires_at) || (data.expires_in ? now + Number(data.expires_in) : now + 3600)
  const prev = getSession()
  const s = {
    token: data.access_token,
    refresh: data.refresh_token || prev?.refresh,
    user: data.user || prev?.user,
    expires_at,
  }
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

// --- Rafraîchissement du jeton -------------------------------------------
// Le jeton d'accès expire (~1 h). On l'échange contre un nouveau grâce au
// refresh_token pour que l'utilisateur reste connecté sans se ré-identifier.
let _refreshing = null
export async function refreshSession() {
  const s = getSession()
  if (!s?.refresh) return null
  if (_refreshing) return _refreshing
  const p = (async () => {
    let res
    try {
      res = await fetch(`${SUPA_URL}/auth/v1/token?grant_type=refresh_token`, {
        method: 'POST',
        headers: { apikey: SUPA_ANON, 'Content-Type': 'application/json' },
        body: JSON.stringify({ refresh_token: s.refresh }),
      })
    } catch {
      return null // réseau indisponible : on garde la session, on réessaiera.
    }
    if (res.ok) {
      const data = await res.json().catch(() => null)
      if (data?.access_token) return saveSession(data)
      return null
    }
    // 400/401 = refresh_token invalide/expiré : la session est terminée.
    if (res.status === 400 || res.status === 401) clearSession()
    return null
  })()
  _refreshing = p
  try { return await p } finally { _refreshing = null }
}

// Renvoie un jeton valide (rafraîchi si sur le point d'expirer), sinon null.
export async function getValidToken() {
  const s = getSession()
  if (!s?.token) return null
  const exp = Number(s.expires_at) || 0
  if (exp && Date.now() / 1000 >= exp - 120) {
    const ns = await refreshSession()
    return ns?.token || getSession()?.token || null
  }
  return s.token
}

// Requête REST/Auth authentifiée : jeton frais + une nouvelle tentative après
// rafraîchissement si le serveur répond 401 (jeton expiré entre-temps).
async function authFetch(url, opts = {}) {
  const token = await getValidToken()
  const build = (t) => ({
    ...opts,
    headers: {
      apikey: SUPA_ANON,
      Authorization: 'Bearer ' + (t || SUPA_ANON),
      'Content-Type': 'application/json',
      ...(opts.headers || {}),
    },
  })
  let res = await fetch(url, build(token))
  if (res.status === 401) {
    const ns = await refreshSession()
    if (ns?.token) res = await fetch(url, build(ns.token))
  }
  return res
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
  const res = await authFetch(`${SUPA_URL}/auth/v1/user`, {
    method: 'PUT',
    body: JSON.stringify({ password }),
  })
  if (!res.ok) { const d = await res.json().catch(() => ({})); throw new Error(d.error_description || d.msg || d.message || `Erreur ${res.status}`) }
  return true
}

// Crée / met à jour la fiche profil (role, name, class_code, level, specialty…).
export async function upsertProfile(patch) {
  const s = getSession()
  if (!s?.token || !s.user?.id) throw new Error('no session')
  const row = { id: s.user.id, email: s.user.email, ...patch, updated_at: new Date().toISOString() }
  const res = await authFetch(`${SUPA_URL}/rest/v1/profiles?on_conflict=id`, {
    method: 'POST',
    headers: { Prefer: 'resolution=merge-duplicates,return=representation' },
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
  const res = await authFetch(`${SUPA_URL}/rest/v1/profiles?id=eq.${s.user.id}`, {
    method: 'PATCH',
    headers: { Prefer: 'return=minimal' },
    body: JSON.stringify({ progress: progress || {}, updated_at: new Date().toISOString() }),
  })
  return res.ok
}

// RGPD : supprime la fiche profil de l'utilisateur (nom, e-mail, photo, progression).
export async function deleteMyProfile() {
  const s = getSession()
  if (!s?.token || !s.user?.id) return false
  const res = await authFetch(`${SUPA_URL}/rest/v1/profiles?id=eq.${s.user.id}`, {
    method: 'DELETE',
    headers: { Prefer: 'return=minimal' },
  })
  return res.ok
}

export async function fetchProfile() {
  const s = getSession()
  if (!s?.token || !s.user?.id) return null
  const res = await authFetch(`${SUPA_URL}/rest/v1/profiles?id=eq.${s.user.id}&select=*`)
  if (!res.ok) return null
  const rows = await res.json().catch(() => [])
  return rows[0] || null
}
