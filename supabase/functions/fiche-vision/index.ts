// Supabase Edge Function « fiche-vision »
// Reçoit une ou plusieurs photos (data URL base64) d'un cours / sujet STMG et
// renvoie une FICHE structurée { title, questions, keyInfo, definitions } en
// appelant l'API Anthropic (Claude, vision). La clé API reste côté serveur.
//
// Déploiement :
//   supabase functions deploy fiche-vision --no-verify-jwt
//   supabase secrets set ANTHROPIC_API_KEY=sk-ant-...
//   (facultatif) supabase secrets set FICHE_MODEL=claude-haiku-4-5   # moins cher
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

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS })
  if (req.method !== 'POST') return json({ error: 'method_not_allowed' }, 405)
  try {
    const key = Deno.env.get('ANTHROPIC_API_KEY')
    if (!key) return json({ error: 'not_configured' }, 503)
    const model = Deno.env.get('FICHE_MODEL') || 'claude-opus-5'

    const body = await req.json().catch(() => ({}))
    const images: string[] = Array.isArray(body?.images) ? body.images : []
    const content: any[] = []
    for (const img of images.slice(0, 4)) {
      const m = /^data:(image\/[a-z0-9.+-]+);base64,(.+)$/i.exec(typeof img === 'string' ? img : '')
      if (m) content.push({ type: 'image', source: { type: 'base64', media_type: m[1], data: m[2] } })
    }
    if (!content.length) return json({ error: 'no_images' }, 400)
    content.push({ type: 'text', text: 'Analyse ce document et renvoie la fiche JSON demandée.' })

    const resp = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'x-api-key': key, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
      body: JSON.stringify({
        model,
        max_tokens: 4096,
        system: SYSTEM,
        output_config: { effort: 'low' },
        messages: [{ role: 'user', content }],
      }),
    })
    if (!resp.ok) {
      const detail = (await resp.text()).slice(0, 500)
      return json({ error: 'api_error', status: resp.status, detail }, 502)
    }
    const data = await resp.json()
    const textBlock = (data?.content || []).find((b: any) => b?.type === 'text')
    const fiche = parseFiche(textBlock?.text || '')
    if (!fiche) return json({ error: 'parse_error' }, 502)
    return json({ fiche }, 200)
  } catch (e) {
    return json({ error: 'server_error', detail: String(e).slice(0, 300) }, 500)
  }
})

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
