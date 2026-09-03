// Espace « Classe » partagé (par code de classe) via Supabase.
// Le site reste statique : on parle directement à l'API REST (PostgREST) avec
// la clé publique « anon » (protégée par des règles RLS permissives : la classe
// est un espace collaboratif entre camarades identifiés par leur code).
import { SUPA_URL, SUPA_ANON, SUPA_READY } from './supabase.js'
import { deviceId, normalizeCode, isoWeekKey } from './leaderboard.js'

export const CLASSROOM_READY = SUPA_READY
export { deviceId, normalizeCode, isoWeekKey }

const H = () => ({ apikey: SUPA_ANON, Authorization: 'Bearer ' + SUPA_ANON, 'Content-Type': 'application/json' })
const enc = encodeURIComponent
const rest = (path) => `${SUPA_URL}/rest/v1/${path}`

async function getJSON(url) {
  const res = await fetch(url, { headers: H() })
  if (!res.ok) throw new Error('GET ' + res.status)
  return res.json()
}
async function send(method, path, body, prefer) {
  const res = await fetch(rest(path), {
    method,
    headers: { ...H(), ...(prefer ? { Prefer: prefer } : {}) },
    body: body ? JSON.stringify(body) : undefined,
  })
  if (!res.ok) throw new Error(method + ' ' + res.status)
  return res
}

export function todayKey() { return new Date().toISOString().slice(0, 10) }

// --- Instantané du membre (classement, podium, heatmap, groupes) -----------
export async function upsertMember({ classCode, name, photo, role, xp, streak, coursesWeek, subjects }) {
  const row = {
    class_code: normalizeCode(classCode),
    device_id: deviceId(),
    name: String(name || '').slice(0, 40),
    photo: photo ? String(photo).slice(0, 40000) : null,
    role: role === 'prof' ? 'prof' : 'eleve',
    xp: Math.max(0, Math.min(100000000, Math.round(xp || 0))),
    streak: Math.max(0, Math.min(100000, Math.round(streak || 0))),
    courses_week: Math.max(0, Math.min(1000, Math.round(coursesWeek || 0))),
    week: isoWeekKey(),
    active_day: todayKey(),
    subjects: subjects && typeof subjects === 'object' ? subjects : {},
    updated_at: new Date().toISOString(),
  }
  // Ne pas écraser le groupe déjà attribué : on met à jour les colonnes utiles.
  await send('POST', 'class_member?on_conflict=class_code,device_id', [row],
    'resolution=merge-duplicates,return=minimal')
}

export async function fetchMembers(classCode) {
  const cols = 'device_id,name,photo,role,group_id,xp,streak,courses_week,week,active_day,subjects,updated_at'
  return getJSON(rest(`class_member?select=${cols}&class_code=eq.${enc(normalizeCode(classCode))}&order=courses_week.desc,xp.desc&limit=300`))
}

// --- Groupes ---------------------------------------------------------------
export async function fetchGroups(classCode) {
  return getJSON(rest(`class_group?select=id,name,color,emoji,created_at&class_code=eq.${enc(normalizeCode(classCode))}&order=created_at.asc&limit=50`))
}
export async function createGroup({ classCode, name, color, emoji }) {
  const res = await send('POST', 'class_group', [{
    class_code: normalizeCode(classCode), name: String(name || '').slice(0, 40),
    color: color || '', emoji: emoji || '',
  }], 'return=representation')
  const rows = await res.json().catch(() => [])
  return rows[0]
}
export async function deleteGroup(id) {
  // Détacher les membres puis supprimer le groupe.
  await send('PATCH', `class_member?group_id=eq.${enc(id)}`, { group_id: null }, 'return=minimal')
  await send('DELETE', `class_group?id=eq.${enc(id)}`)
}
export async function setMemberGroup({ classCode, deviceId: dev, groupId }) {
  await send('PATCH', `class_member?class_code=eq.${enc(normalizeCode(classCode))}&device_id=eq.${enc(dev)}`,
    { group_id: groupId || null }, 'return=minimal')
}

// --- Réglages / identité de la classe --------------------------------------
export async function fetchMeta(classCode) {
  const rows = await getJSON(rest(`class_meta?select=*&class_code=eq.${enc(normalizeCode(classCode))}&limit=1`))
  return rows[0] || null
}
export async function upsertMeta(classCode, patch) {
  const row = { class_code: normalizeCode(classCode), ...patch, updated_at: new Date().toISOString() }
  await send('POST', 'class_meta?on_conflict=class_code', [row], 'resolution=merge-duplicates,return=minimal')
}

// --- Mur de la classe ------------------------------------------------------
export async function fetchWall(classCode) {
  return getJSON(rest(`class_wall?select=*&class_code=eq.${enc(normalizeCode(classCode))}&order=created_at.desc&limit=100`))
}
export async function postWall({ classCode, name, kind, text, chapterLabel, isAnon }) {
  const res = await send('POST', 'class_wall', [{
    class_code: normalizeCode(classCode), device_id: deviceId(), name: String(name || '').slice(0, 40),
    kind: kind || 'question', text: String(text || '').slice(0, 1000),
    chapter_label: String(chapterLabel || '').slice(0, 120), is_anon: !!isAnon,
  }], 'return=representation')
  const rows = await res.json().catch(() => [])
  return rows[0]
}
export async function answerWall(id, answer, by) {
  await send('PATCH', `class_wall?id=eq.${enc(id)}`, { answer: String(answer || '').slice(0, 1000), answered_by: String(by || '').slice(0, 40) }, 'return=minimal')
}
export async function resolveWall(id, resolved = true) {
  await send('PATCH', `class_wall?id=eq.${enc(id)}`, { resolved: !!resolved }, 'return=minimal')
}
export async function deleteWall(id) { await send('DELETE', `class_wall?id=eq.${enc(id)}`) }
// Réaction (👏🔥…) : lecture-modification-écriture du compteur jsonb.
export async function reactWall(id, emoji) {
  const rows = await getJSON(rest(`class_wall?select=reactions&id=eq.${enc(id)}&limit=1`))
  const reactions = { ...(rows[0]?.reactions || {}) }
  reactions[emoji] = (reactions[emoji] || 0) + 1
  await send('PATCH', `class_wall?id=eq.${enc(id)}`, { reactions }, 'return=minimal')
  return reactions
}

// --- QCM de classe (+ propositions d'élèves + devoirs) ---------------------
function sanitizeQuestion(qz) {
  const q = String(qz?.q || '').trim().slice(0, 300)
  const choices = (Array.isArray(qz?.choices) ? qz.choices : []).map((c) => String(c || '').trim().slice(0, 160)).filter(Boolean).slice(0, 6)
  let answer = Number.isInteger(qz?.answer) ? qz.answer : 0
  if (answer < 0 || answer >= choices.length) answer = 0
  const explain = String(qz?.explain || '').trim().slice(0, 300)
  return { q, choices, answer, explain }
}
export function validQuestion(qz) {
  const s = sanitizeQuestion(qz)
  return !!s.q && s.choices.length >= 2 && s.choices[s.answer] !== undefined
}

export async function createQuiz({ classCode, authorId, authorName, title, questions, status = 'approved', proposedBy = '' }) {
  const row = {
    class_code: normalizeCode(classCode), author_id: authorId || null, author_name: String(authorName || '').slice(0, 60),
    title: String(title || '').slice(0, 120),
    questions: (Array.isArray(questions) ? questions : []).map(sanitizeQuestion).filter((q) => q.q && q.choices.length >= 2).slice(0, 30),
    status, proposed_by: String(proposedBy || '').slice(0, 60),
  }
  const res = await send('POST', 'class_quiz', [row], 'return=representation')
  const rows = await res.json().catch(() => [])
  return rows[0] || row
}
export async function fetchQuizzes(classCode) {
  const cols = 'id,title,author_id,author_name,questions,status,proposed_by,due_at,created_at'
  return getJSON(rest(`class_quiz?select=${cols}&class_code=eq.${enc(normalizeCode(classCode))}&order=created_at.desc&limit=100`))
}
export async function approveQuiz(id) { await send('PATCH', `class_quiz?id=eq.${enc(id)}`, { status: 'approved' }, 'return=minimal') }
export async function assignQuiz(id, dueAt) { await send('PATCH', `class_quiz?id=eq.${enc(id)}`, { due_at: dueAt || null }, 'return=minimal') }
export async function deleteQuiz(id) { await send('DELETE', `class_quiz?id=eq.${enc(id)}`) }

export async function submitQuizResult({ quizId, name, score, total }) {
  await send('POST', 'class_quiz_result?on_conflict=quiz_id,device_id', [{
    quiz_id: quizId, device_id: deviceId(), name: String(name || '').slice(0, 40),
    score: Math.max(0, Math.min(1000, Math.round(score || 0))), total: Math.max(0, Math.min(1000, Math.round(total || 0))),
    updated_at: new Date().toISOString(),
  }], 'resolution=merge-duplicates,return=minimal')
}
export async function fetchQuizResults(quizId) {
  return getJSON(rest(`class_quiz_result?select=device_id,name,score,total,updated_at&quiz_id=eq.${enc(quizId)}&order=score.desc,updated_at.asc&limit=100`))
}

// --- Duels 1v1 -------------------------------------------------------------
export async function fetchDuels(classCode) {
  return getJSON(rest(`class_duel?select=*&class_code=eq.${enc(normalizeCode(classCode))}&order=created_at.desc&limit=60`))
}
export async function createDuel({ classCode, quizId, quizTitle, name, score, total }) {
  const res = await send('POST', 'class_duel', [{
    class_code: normalizeCode(classCode), quiz_id: quizId, quiz_title: String(quizTitle || '').slice(0, 120),
    challenger_device: deviceId(), challenger_name: String(name || '').slice(0, 40),
    challenger_score: Math.round(score || 0), challenger_total: Math.round(total || 0), status: 'open',
  }], 'return=representation')
  const rows = await res.json().catch(() => [])
  return rows[0]
}
export async function acceptDuel({ id, name, score, total }) {
  await send('PATCH', `class_duel?id=eq.${enc(id)}&status=eq.open`, {
    opponent_device: deviceId(), opponent_name: String(name || '').slice(0, 40),
    opponent_score: Math.round(score || 0), opponent_total: Math.round(total || 0), status: 'done',
  }, 'return=minimal')
}
export async function deleteDuel(id) { await send('DELETE', `class_duel?id=eq.${enc(id)}`) }

// --- Ligue inter-classes (même lycée = préfixe avant le 1er tiret) ---------
export function lyceeOf(classCode) {
  const c = normalizeCode(classCode)
  const i = c.indexOf('-')
  return i > 0 ? c.slice(0, i) : c
}
// Classement des classes du lycée sur la semaine en cours (somme des cours).
export async function fetchLeague(classCode) {
  const lyc = lyceeOf(classCode)
  const wk = isoWeekKey()
  const rows = await getJSON(rest(`class_member?select=class_code,courses_week,role&class_code=like.${enc(lyc + '-%')}&week=eq.${wk}&limit=1000`))
  const by = {}
  for (const r of rows) {
    if (r.role === 'prof') continue
    const b = (by[r.class_code] ||= { class_code: r.class_code, total: 0, members: 0 })
    b.total += r.courses_week || 0
    b.members += 1
  }
  return Object.values(by).sort((a, b) => b.total - a.total || b.members - a.members)
}
