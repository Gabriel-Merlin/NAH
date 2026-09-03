// Espace « Classe » partagé (par code de classe) via Supabase.
// Le professeur crée des QCM que ses élèves passent ; les résultats alimentent
// un classement par QCM. Le site reste statique : on parle directement à
// l'API REST (PostgREST) avec la clé publique « anon » (protégée par RLS).
import { SUPA_URL, SUPA_ANON, SUPA_READY } from './supabase.js'
import { deviceId, normalizeCode } from './leaderboard.js'

export const CLASSROOM_READY = SUPA_READY
export { deviceId, normalizeCode }

const headers = () => ({ apikey: SUPA_ANON, Authorization: 'Bearer ' + SUPA_ANON, 'Content-Type': 'application/json' })

// Nettoie une question de QCM avant l'envoi : { q, choices[2..6], answer, explain }.
function sanitizeQuestion(qz) {
  const q = String(qz?.q || '').trim().slice(0, 300)
  const choices = (Array.isArray(qz?.choices) ? qz.choices : [])
    .map((c) => String(c || '').trim().slice(0, 160))
    .filter(Boolean)
    .slice(0, 6)
  let answer = Number.isInteger(qz?.answer) ? qz.answer : 0
  if (answer < 0 || answer >= choices.length) answer = 0
  const explain = String(qz?.explain || '').trim().slice(0, 300)
  return { q, choices, answer, explain }
}

export function validQuestion(qz) {
  const s = sanitizeQuestion(qz)
  return !!s.q && s.choices.length >= 2 && s.choices[s.answer] !== undefined
}

// --- QCM de classe --------------------------------------------------------

// Crée un QCM pour une classe. Renvoie la ligne créée.
export async function createQuiz({ classCode, authorId, authorName, title, questions }) {
  const row = {
    class_code: normalizeCode(classCode),
    author_id: authorId || null,
    author_name: String(authorName || '').slice(0, 60),
    title: String(title || '').slice(0, 120),
    questions: (Array.isArray(questions) ? questions : []).map(sanitizeQuestion).filter((q) => q.q && q.choices.length >= 2).slice(0, 30),
  }
  const res = await fetch(`${SUPA_URL}/rest/v1/class_quiz`, {
    method: 'POST',
    headers: { ...headers(), Prefer: 'return=representation' },
    body: JSON.stringify([row]),
  })
  if (!res.ok) throw new Error('createQuiz ' + res.status)
  const rows = await res.json().catch(() => [])
  return rows[0] || row
}

// Liste les QCM d'une classe (du plus récent au plus ancien).
export async function fetchQuizzes(classCode) {
  const url = `${SUPA_URL}/rest/v1/class_quiz?select=id,title,author_id,author_name,questions,created_at&class_code=eq.${encodeURIComponent(normalizeCode(classCode))}&order=created_at.desc&limit=100`
  const res = await fetch(url, { headers: headers() })
  if (!res.ok) throw new Error('fetchQuizzes ' + res.status)
  return await res.json()
}

// Supprime un QCM (réservé à son auteur — filtré aussi côté serveur par id).
export async function deleteQuiz(id) {
  const res = await fetch(`${SUPA_URL}/rest/v1/class_quiz?id=eq.${encodeURIComponent(id)}`, {
    method: 'DELETE',
    headers: headers(),
  })
  if (!res.ok) throw new Error('deleteQuiz ' + res.status)
}

// --- Résultats des élèves -------------------------------------------------

// Enregistre / met à jour mon meilleur score à un QCM (upsert par appareil).
export async function submitQuizResult({ quizId, name, score, total }) {
  const row = {
    quiz_id: quizId,
    device_id: deviceId(),
    name: String(name || '').slice(0, 40),
    score: Math.max(0, Math.min(1000, Math.round(score || 0))),
    total: Math.max(0, Math.min(1000, Math.round(total || 0))),
    updated_at: new Date().toISOString(),
  }
  const res = await fetch(`${SUPA_URL}/rest/v1/class_quiz_result?on_conflict=quiz_id,device_id`, {
    method: 'POST',
    headers: { ...headers(), Prefer: 'resolution=merge-duplicates,return=minimal' },
    body: JSON.stringify([row]),
  })
  if (!res.ok) throw new Error('submitResult ' + res.status)
}

// Classement d'un QCM (meilleurs scores en tête).
export async function fetchQuizResults(quizId) {
  const url = `${SUPA_URL}/rest/v1/class_quiz_result?select=device_id,name,score,total,updated_at&quiz_id=eq.${encodeURIComponent(quizId)}&order=score.desc,updated_at.asc&limit=100`
  const res = await fetch(url, { headers: headers() })
  if (!res.ok) throw new Error('fetchResults ' + res.status)
  return await res.json()
}

// Membres de la classe : élèves déjà vus dans le classement hebdomadaire
// (toutes semaines confondues), dédoublonnés par appareil.
export async function fetchMembers(classCode) {
  const url = `${SUPA_URL}/rest/v1/leaderboard?select=device_id,name,photo,updated_at&class_code=eq.${encodeURIComponent(normalizeCode(classCode))}&order=updated_at.desc&limit=300`
  const res = await fetch(url, { headers: headers() })
  if (!res.ok) throw new Error('fetchMembers ' + res.status)
  const rows = await res.json()
  const seen = new Map()
  for (const r of rows) if (!seen.has(r.device_id)) seen.set(r.device_id, r)
  return Array.from(seen.values())
}
