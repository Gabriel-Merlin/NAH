// Supabase Edge Function « fiche-vision »
// Reçoit une ou plusieurs photos (data URL base64) d'un cours / sujet STMG et
// renvoie une FICHE structurée { title, questions, keyInfo, definitions } en
// appelant une IA de vision CÔTÉ SERVEUR (la clé d'API n'est jamais dans l'appli).
//
// Deux fournisseurs possibles, choisis automatiquement selon la clé présente :
//   • Google Gemini  (GRATUIT dans la limite du quota)  → secret GEMINI_API_KEY
//   • Anthropic Claude (payant, ~centimes/photo)         → secret ANTHROPIC_API_KEY
// Si les deux sont présentes, Gemini est utilisé.
//
// Déploiement :
//   supabase functions deploy fiche-vision --no-verify-jwt
//   supabase secrets set GEMINI_API_KEY=...           # clé gratuite : https://aistudio.google.com/apikey
//   (facultatif) supabase secrets set GEMINI_MODEL=gemini-2.0-flash
//
// deno-lint-ignore-file no-explicit-any
const CORS: Record<string, string> = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

const SYSTEM = `Tu aides des élèves de STMG (lycée français, filière Gestion) à réviser.
On te donne la/les photo(s) d'un cours ou d'un sujet d'étude de cas. Tu en extrais UNIQUEMENT l'essentiel utile à la révision, rien d'autre.

Réponds STRICTEMENT par un objet JSON valide (aucun texte autour, pas de balises Markdown) avec exactement ces clés :
{
  "title": "titre court de la fiche",
  "questions": ["les questions / consignes de l'énoncé (Identifiez…, Calculez…, Justifiez…, Analysez…), reformulées proprement et complètes"],
  "keyInfo": ["les informations importantes des documents : chiffres, pourcentages, montants en euros, dates, ratios, faits de gestion clés — une information courte et claire par élément"],
  "definitions": [{ "term": "notion", "def": "définition claire" }]
}

Règles :
- Ignore le texte de remplissage, les en-têtes, numéros de page, mentions légales, le blabla.
- Corrige les fautes de lecture (OCR). Écris en français correct, sans symboles parasites (pas de | : > = _ * etc.).
- Ne garde que ce qui aide vraiment à réviser.
- Si une catégorie est absente, renvoie un tableau vide. N'invente pas d'informations qui ne sont pas dans le document.`

const ASK = 'Analyse ce document et renvoie la fiche JSON demandée.'

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS })
  if (req.method !== 'POST') return json({ error: 'method_not_allowed' }, 405)
  try {
    const geminiKey = Deno.env.get('GEMINI_API_KEY') || Deno.env.get('GOOGLE_API_KEY')
    const anthropicKey = Deno.env.get('ANTHROPIC_API_KEY')
    if (!geminiKey && !anthropicKey) return json({ error: 'not_configured' }, 503)

    const body = await req.json().catch(() => ({}))
    const rawImages: unknown = (body as any)?.images
    const imgs: { mime: string; data: string }[] = []
    if (Array.isArray(rawImages)) {
      for (const img of rawImages.slice(0, 4)) {
        const m = /^data:(image\/[a-z0-9.+-]+);base64,(.+)$/i.exec(typeof img === 'string' ? img : '')
        if (m) imgs.push({ mime: m[1], data: m[2] })
      }
    }
    if (!imgs.length) return json({ error: 'no_images' }, 400)

    const r = geminiKey ? await callGemini(geminiKey, imgs) : await callAnthropic(anthropicKey as string, imgs)
    if (!r.ok) return json({ error: r.error || 'api_error', detail: r.detail }, 502)
    const fiche = parseFiche(r.text || '')
    if (!fiche) return json({ error: 'parse_error' }, 502)
    return json({ fiche, provider: geminiKey ? 'gemini' : 'anthropic' }, 200)
  } catch (e) {
    return json({ error: 'server_error', detail: String(e).slice(0, 300) }, 500)
  }
})

// --- Google Gemini (gratuit dans la limite du quota) ------------------------
async function callGemini(key: string, imgs: { mime: string; data: string }[]) {
  const model = Deno.env.get('GEMINI_MODEL') || 'gemini-2.0-flash'
  const parts: any[] = imgs.map((i) => ({ inlineData: { mimeType: i.mime, data: i.data } }))
  parts.push({ text: ASK })
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(key)}`
  const resp = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: SYSTEM }] },
      contents: [{ role: 'user', parts }],
      generationConfig: { temperature: 0.2, responseMimeType: 'application/json', maxOutputTokens: 2048 },
    }),
  })
  if (!resp.ok) return { ok: false, error: 'api_error', detail: (await resp.text()).slice(0, 500) }
  const data = await resp.json()
  const text = (data?.candidates?.[0]?.content?.parts || []).map((p: any) => p?.text).filter(Boolean).join('')
  if (!text) return { ok: false, error: data?.promptFeedback ? 'blocked' : 'empty' }
  return { ok: true, text }
}

// --- Anthropic Claude (payant) ---------------------------------------------
async function callAnthropic(key: string, imgs: { mime: string; data: string }[]) {
  const model = Deno.env.get('FICHE_MODEL') || 'claude-opus-5'
  const content: any[] = imgs.map((i) => ({ type: 'image', source: { type: 'base64', media_type: i.mime, data: i.data } }))
  content.push({ type: 'text', text: ASK })
  const resp = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'x-api-key': key, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
    body: JSON.stringify({ model, max_tokens: 4096, system: SYSTEM, output_config: { effort: 'low' }, messages: [{ role: 'user', content }] }),
  })
  if (!resp.ok) return { ok: false, error: 'api_error', detail: (await resp.text()).slice(0, 500) }
  const data = await resp.json()
  const tb = (data?.content || []).find((b: any) => b?.type === 'text')
  return { ok: true, text: tb?.text || '' }
}

function json(obj: unknown, status: number): Response {
  return new Response(JSON.stringify(obj), { status, headers: { ...CORS, 'content-type': 'application/json' } })
}

function parseFiche(raw: string): any | null {
  let s = (raw || '').trim().replace(/^```(?:json)?/i, '').replace(/```$/, '').trim()
  const a = s.indexOf('{'), b = s.lastIndexOf('}')
  if (a >= 0 && b > a) s = s.slice(a, b + 1)
  try {
    const o = JSON.parse(s)
    const strArr = (v: any, n: number) => (Array.isArray(v) ? v.filter((x) => typeof x === 'string' && x.trim()).map((x) => x.trim()).slice(0, n) : [])
    return {
      title: typeof o.title === 'string' && o.title.trim() ? o.title.trim() : 'Ma fiche de révision',
      questions: strArr(o.questions, 20),
      keyInfo: strArr(o.keyInfo, 20),
      definitions: Array.isArray(o.definitions)
        ? o.definitions.filter((d: any) => d && typeof d.term === 'string' && typeof d.def === 'string' && d.term.trim() && d.def.trim()).map((d: any) => ({ term: d.term.trim(), def: d.def.trim() })).slice(0, 20)
        : [],
    }
  } catch {
    return null
  }
}
