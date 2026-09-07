// Générateurs d'exercices de LANGUES (anglais / espagnol).
// Chaque appel de gen() produit une question DIFFÉRENTE (verbe + format tirés au
// hasard), pour que les exercices ne se ressemblent jamais.

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)]
const splitAlt = (s) => {
  const parts = String(s).split('/').map((x) => x.trim()).filter(Boolean)
  return { answer: parts[0], alt: parts.slice(1) }
}

// ---------------------------------------------------------------------------
// VERBES IRRÉGULIERS ANGLAIS  (base – prétérit – participe passé – sens)
// « / » = formes acceptées en variante.
// ---------------------------------------------------------------------------
export const EN_IRREGULAR = [
  ['be', 'was/were', 'been', 'être'], ['become', 'became', 'become', 'devenir'],
  ['begin', 'began', 'begun', 'commencer'], ['break', 'broke', 'broken', 'casser'],
  ['bring', 'brought', 'brought', 'apporter'], ['build', 'built', 'built', 'construire'],
  ['buy', 'bought', 'bought', 'acheter'], ['catch', 'caught', 'caught', 'attraper'],
  ['choose', 'chose', 'chosen', 'choisir'], ['come', 'came', 'come', 'venir'],
  ['cost', 'cost', 'cost', 'coûter'], ['cut', 'cut', 'cut', 'couper'],
  ['do', 'did', 'done', 'faire'], ['draw', 'drew', 'drawn', 'dessiner'],
  ['drink', 'drank', 'drunk', 'boire'], ['drive', 'drove', 'driven', 'conduire'],
  ['eat', 'ate', 'eaten', 'manger'], ['fall', 'fell', 'fallen', 'tomber'],
  ['feel', 'felt', 'felt', 'ressentir'], ['fight', 'fought', 'fought', 'se battre'],
  ['find', 'found', 'found', 'trouver'], ['fly', 'flew', 'flown', 'voler'],
  ['forget', 'forgot', 'forgotten', 'oublier'], ['forgive', 'forgave', 'forgiven', 'pardonner'],
  ['get', 'got', 'got/gotten', 'obtenir'], ['give', 'gave', 'given', 'donner'],
  ['go', 'went', 'gone', 'aller'], ['grow', 'grew', 'grown', 'grandir'],
  ['have', 'had', 'had', 'avoir'], ['hear', 'heard', 'heard', 'entendre'],
  ['hide', 'hid', 'hidden', 'cacher'], ['hit', 'hit', 'hit', 'frapper'],
  ['hold', 'held', 'held', 'tenir'], ['keep', 'kept', 'kept', 'garder'],
  ['know', 'knew', 'known', 'savoir'], ['lay', 'laid', 'laid', 'poser'],
  ['lead', 'led', 'led', 'mener'], ['learn', 'learned/learnt', 'learned/learnt', 'apprendre'],
  ['leave', 'left', 'left', 'partir'], ['lend', 'lent', 'lent', 'prêter'],
  ['let', 'let', 'let', 'laisser'], ['lose', 'lost', 'lost', 'perdre'],
  ['make', 'made', 'made', 'fabriquer'], ['mean', 'meant', 'meant', 'signifier'],
  ['meet', 'met', 'met', 'rencontrer'], ['pay', 'paid', 'paid', 'payer'],
  ['put', 'put', 'put', 'mettre'], ['read', 'read', 'read', 'lire'],
  ['ride', 'rode', 'ridden', 'chevaucher'], ['ring', 'rang', 'rung', 'sonner'],
  ['rise', 'rose', 'risen', "s'élever"], ['run', 'ran', 'run', 'courir'],
  ['say', 'said', 'said', 'dire'], ['see', 'saw', 'seen', 'voir'],
  ['sell', 'sold', 'sold', 'vendre'], ['send', 'sent', 'sent', 'envoyer'],
  ['show', 'showed', 'shown', 'montrer'], ['shut', 'shut', 'shut', 'fermer'],
  ['sing', 'sang', 'sung', 'chanter'], ['sit', 'sat', 'sat', "s'asseoir"],
  ['sleep', 'slept', 'slept', 'dormir'], ['speak', 'spoke', 'spoken', 'parler'],
  ['spend', 'spent', 'spent', 'dépenser'], ['stand', 'stood', 'stood', 'être debout'],
  ['steal', 'stole', 'stolen', 'voler (dérober)'], ['swim', 'swam', 'swum', 'nager'],
  ['take', 'took', 'taken', 'prendre'], ['teach', 'taught', 'taught', 'enseigner'],
  ['tell', 'told', 'told', 'raconter'], ['think', 'thought', 'thought', 'penser'],
  ['throw', 'threw', 'thrown', 'lancer'], ['understand', 'understood', 'understood', 'comprendre'],
  ['wake', 'woke', 'woken', 'se réveiller'], ['wear', 'wore', 'worn', 'porter'],
  ['win', 'won', 'won', 'gagner'], ['write', 'wrote', 'written', 'écrire'],
].map(([base, pret, pp, fr]) => ({ base, pret, pp, fr }))

export function genVerbEN() {
  const v = pick(EN_IRREGULAR)
  const full = `${v.base} – ${v.pret.replace('/', ' / ')} – ${v.pp.replace('/', ' / ')} (${v.fr})`
  const format = pick(['pret', 'pp', 'base', 'pret', 'pp']) // prétérit/PP plus fréquents
  if (format === 'base') {
    const { answer, alt } = splitAlt(v.base)
    return { prompt: `🇬🇧 Quel est l'INFINITIF dont le prétérit est « ${v.pret.split('/')[0]} » ? (${v.fr})`, answer, alt, explain: full }
  }
  if (format === 'pp') {
    const { answer, alt } = splitAlt(v.pp)
    return { prompt: `🇬🇧 PARTICIPE PASSÉ de to ${v.base} (${v.fr}) ?`, answer, alt, explain: full }
  }
  const { answer, alt } = splitAlt(v.pret)
  return { prompt: `🇬🇧 PRÉTÉRIT de to ${v.base} (${v.fr}) ?`, answer, alt, explain: full }
}

// ---------------------------------------------------------------------------
// VERBES IRRÉGULIERS ESPAGNOLS (infinitif – présent yo – indéfini él/ella – sens)
// ---------------------------------------------------------------------------
export const ES_IRREGULAR = [
  ['ser', 'soy', 'fue', 'être'], ['estar', 'estoy', 'estuvo', 'être (état)'],
  ['tener', 'tengo', 'tuvo', 'avoir'], ['hacer', 'hago', 'hizo', 'faire'],
  ['ir', 'voy', 'fue', 'aller'], ['decir', 'digo', 'dijo', 'dire'],
  ['poder', 'puedo', 'pudo', 'pouvoir'], ['poner', 'pongo', 'puso', 'mettre'],
  ['querer', 'quiero', 'quiso', 'vouloir'], ['saber', 'sé', 'supo', 'savoir'],
  ['venir', 'vengo', 'vino', 'venir'], ['ver', 'veo', 'vio', 'voir'],
  ['dar', 'doy', 'dio', 'donner'], ['salir', 'salgo', 'salió', 'sortir'],
  ['traer', 'traigo', 'trajo', 'apporter'], ['conocer', 'conozco', 'conoció', 'connaître'],
  ['pedir', 'pido', 'pidió', 'demander'], ['dormir', 'duermo', 'durmió', 'dormir'],
  ['empezar', 'empiezo', 'empezó', 'commencer'], ['jugar', 'juego', 'jugó', 'jouer'],
  ['pensar', 'pienso', 'pensó', 'penser'], ['volver', 'vuelvo', 'volvió', 'revenir'],
  ['sentir', 'siento', 'sintió', 'ressentir'], ['leer', 'leo', 'leyó', 'lire'],
  ['oír', 'oigo', 'oyó', 'entendre'], ['seguir', 'sigo', 'siguió', 'suivre'],
  ['conducir', 'conduzco', 'condujo', 'conduire'], ['haber', 'he', 'hubo', 'avoir (auxiliaire)'],
].map(([inf, pres, pret, fr]) => ({ inf, pres, pret, fr }))

export function genVerbES() {
  const v = pick(ES_IRREGULAR)
  const full = `${v.inf} → yo ${v.pres} (présent) · él/ella ${v.pret} (passé simple) — ${v.fr}`
  const format = pick(['pres', 'pret', 'pres', 'pret', 'inf'])
  if (format === 'inf') {
    return { prompt: `🇪🇸 Quel est l'INFINITIF dont le « yo » au présent est « ${v.pres} » ? (${v.fr})`, answer: v.inf, alt: [], explain: full }
  }
  if (format === 'pret') {
    return { prompt: `🇪🇸 PRETÉRITO INDEFINIDO (él/ella) de ${v.inf} (${v.fr}) ?`, answer: v.pret, alt: [], explain: full }
  }
  return { prompt: `🇪🇸 PRÉSENT (yo) de ${v.inf} (${v.fr}) ?`, answer: v.pres, alt: [], explain: full }
}

// ---------------------------------------------------------------------------
// GRAMMAIRE ANGLAISE — règles variées, items tirés au hasard.
// ---------------------------------------------------------------------------
const EN_GRAMMAR = [
  // a / an
  () => {
    const words = [['apple', 'an'], ['car', 'a'], ['hour', 'an'], ['university', 'a'], ['egg', 'an'], ['house', 'a'], ['umbrella', 'an'], ['European', 'a'], ['idea', 'an'], ['job', 'a']]
    const [w, a] = pick(words)
    return { prompt: `🇬🇧 Article : ____ ${w}.`, answer: a, alt: [], explain: `« ${a} ${w} » — « an » devant un son voyelle, « a » devant un son consonne.` }
  },
  // present simple 3rd person
  () => {
    const items = [['go', 'goes'], ['watch', 'watches'], ['study', 'studies'], ['play', 'plays'], ['do', 'does'], ['fix', 'fixes'], ['carry', 'carries'], ['have', 'has'], ['miss', 'misses'], ['fly', 'flies']]
    const [v, a] = pick(items)
    return { prompt: `🇬🇧 Présent simple : He ____ (${v}) every day.`, answer: a, alt: [], explain: `3ᵉ pers. sing. : « He ${a} ». (+s ; +es après ch/sh/x/o ; y→ies).` }
  },
  // comparative
  () => {
    const items = [['big', 'bigger'], ['happy', 'happier'], ['expensive', 'more expensive'], ['good', 'better'], ['bad', 'worse'], ['fast', 'faster'], ['modern', 'more modern'], ['far', 'farther/further']]
    const [adj, a] = pick(items)
    const { answer, alt } = splitAlt(a)
    return { prompt: `🇬🇧 Comparatif de supériorité de « ${adj} » : This one is ____ than that one.`, answer, alt, explain: `« ${a.replace('/', ' / ')} ». Court → +er ; long → more + adj ; irréguliers : good→better, bad→worse.` }
  },
  // superlative
  () => {
    const items = [['big', 'the biggest'], ['good', 'the best'], ['expensive', 'the most expensive'], ['easy', 'the easiest'], ['bad', 'the worst']]
    const [adj, a] = pick(items)
    return { prompt: `🇬🇧 Superlatif de « ${adj} » : It is ____ of all.`, answer: a, alt: [a.replace('the ', '')], explain: `« ${a} » (the + …est / the most …).` }
  },
  // some / any
  () => {
    const items = [['I have ____ money.', 'some'], ["I don't have ____ friends here.", 'any'], ['Would you like ____ tea?', 'some'], ['Is there ____ milk?', 'any'], ['There aren’t ____ tickets left.', 'any']]
    const [s, a] = pick(items)
    return { prompt: `🇬🇧 some / any : ${s}`, answer: a, alt: [], explain: `« ${a} » — some (affirmatif / offre), any (négatif / question).` }
  },
  // much / many
  () => {
    const items = [['How ____ money do you have?', 'much'], ['How ____ people came?', 'many'], ['There isn’t ____ time.', 'much'], ['She has ____ books.', 'many']]
    const [s, a] = pick(items)
    return { prompt: `🇬🇧 much / many : ${s}`, answer: a, alt: [], explain: `« ${a} » — much + indénombrable, many + dénombrable pluriel.` }
  },
  // preterit vs present perfect
  () => {
    const items = [['I ____ (see) him yesterday.', 'saw', 'yesterday → prétérit'], ['She has ____ (finish) her homework.', 'finished', 'have + participe passé'], ['They ____ (go) to Spain last year.', 'went', 'last year → prétérit'], ['We have ____ (know) them for years.', 'known', 'for + present perfect']]
    const [s, a, why] = pick(items)
    return { prompt: `🇬🇧 Temps du passé : ${s}`, answer: a, alt: [], explain: `« ${a} » — ${why}.` }
  },
  // this / that / these / those
  () => {
    const items = [['____ book here', 'this'], ['____ books here', 'these'], ['____ car over there', 'that'], ['____ cars over there', 'those']]
    const [s, a] = pick(items)
    return { prompt: `🇬🇧 Démonstratif : ${s}.`, answer: a, alt: [], explain: `« ${a} » — this/these (près), that/those (loin) ; -s = pluriel.` }
  },
]

export function genGrammarEN() { return pick(EN_GRAMMAR)() }

// ---------------------------------------------------------------------------
// GRAMMAIRE ESPAGNOLE
// ---------------------------------------------------------------------------
const ES_GRAMMAR = [
  // ser / estar
  () => {
    const items = [['Yo ____ profesor.', 'soy', 'ser : identité/profession'], ['Ella ____ cansada.', 'está', 'estar : état passager'], ['Nosotros ____ de Francia.', 'somos', 'ser : origine'], ['Madrid ____ en España.', 'está', 'estar : localisation'], ['El cielo ____ azul hoy.', 'está', 'estar : état'], ['Hoy ____ lunes.', 'es', 'ser : jour/heure']]
    const [s, a, why] = pick(items)
    return { prompt: `🇪🇸 ser / estar : ${s}`, answer: a, alt: [], explain: `« ${a} » — ${why}.` }
  },
  // por / para
  () => {
    const items = [['Este regalo es ____ ti.', 'para', 'destinataire → para'], ['Gracias ____ tu ayuda.', 'por', 'cause/échange → por'], ['Estudio ____ aprobar.', 'para', 'but → para'], ['Paso ____ el parque.', 'por', 'lieu traversé → por']]
    const [s, a, why] = pick(items)
    return { prompt: `🇪🇸 por / para : ${s}`, answer: a, alt: [], explain: `« ${a} » — ${why}.` }
  },
  // articles el / la
  () => {
    const items = [['problema', 'el'], ['mano', 'la'], ['día', 'el'], ['foto', 'la'], ['agua', 'el'], ['mapa', 'el'], ['universidad', 'la'], ['sistema', 'el']]
    const [w, a] = pick(items)
    return { prompt: `🇪🇸 Article défini : ____ ${w}.`, answer: a, alt: [], explain: `« ${a} ${w} » — attention aux exceptions (el problema, la mano…).` }
  },
  // présent régulier
  () => {
    const items = [['hablar', 'yo', 'hablo'], ['comer', 'tú', 'comes'], ['vivir', 'nosotros', 'vivimos'], ['trabajar', 'ellos', 'trabajan'], ['aprender', 'ella', 'aprende']]
    const [inf, subj, a] = pick(items)
    return { prompt: `🇪🇸 Présent : ${subj} (${inf}) → ${subj} ____.`, answer: a, alt: [], explain: `« ${subj} ${a} » (verbe en -${inf.slice(-2)}).` }
  },
  // gustar
  () => {
    const items = [['A mí ____ gusta el fútbol.', 'me'], ['A ti ____ gustan los libros.', 'te'], ['A él ____ gusta viajar.', 'le'], ['A nosotros ____ gusta la música.', 'nos']]
    const [s, a] = pick(items)
    return { prompt: `🇪🇸 Verbe gustar : ${s}`, answer: a, alt: [], explain: `Pronom COI : « ${a} » (me/te/le/nos/os/les).` }
  },
  // muy / mucho
  () => {
    const items = [['Estoy ____ cansado.', 'muy', 'muy + adjectif'], ['Trabajo ____.', 'mucho', 'mucho = beaucoup (verbe)'], ['Hay ____ gente.', 'mucha', 'mucho s’accorde avec le nom']]
    const [s, a, why] = pick(items)
    return { prompt: `🇪🇸 muy / mucho : ${s}`, answer: a, alt: [], explain: `« ${a} » — ${why}.` }
  },
]

export function genGrammarES() { return pick(ES_GRAMMAR)() }
