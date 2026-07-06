// Filières / niveaux proposés à l'entrée du site.
// Seul le contenu réellement présent dans le cours est marqué « available ».
// Le reste est affiché mais signalé « bientôt disponible » (aucune notion inventée).
import { SUBJECTS } from './index.js'

// Matières du tronc commun de Terminale STMG (partagées par toutes les spécialités).
const COMMON_IDS = ['management', 'droit', 'economie', 'maths', 'philosophie', 'histoire-geo', 'langues']

export const LEVELS = [
  {
    id: 'seconde',
    name: 'Seconde générale',
    icon: '📗',
    color: '#0ea5e9',
    desc: 'Tronc commun de seconde.',
    available: false,
  },
  {
    id: 'premiere-stmg',
    name: 'Première STMG',
    icon: '📘',
    color: '#f59e0b',
    desc: 'Sciences de gestion et numérique, droit-éco, management.',
    available: false,
  },
  {
    id: 'terminale-stmg',
    name: 'Terminale STMG',
    icon: '📕',
    color: '#7c3aed',
    desc: 'Choisis ta spécialité.',
    available: true,
    specialties: [
      {
        id: 'gestion-finance',
        name: 'Gestion et Finance',
        icon: '💰',
        color: '#059669',
        desc: 'Comptabilité, analyse financière, aide à la décision.',
        available: true,
      },
      {
        id: 'rh-communication',
        name: 'Ressources humaines & Communication',
        icon: '🧑‍💼',
        color: '#db2777',
        desc: 'Mobilisation, cohésion, communication.',
        available: false,
      },
      {
        id: 'mercatique',
        name: 'Mercatique (Marketing)',
        icon: '🛍️',
        color: '#f97316',
        desc: 'Marché, offre, relation client.',
        available: false,
      },
    ],
  },
]

export function getLevel(id) {
  return LEVELS.find((l) => l.id === id) || null
}
export function getSpecialty(levelId, specId) {
  const l = getLevel(levelId)
  if (!l?.specialties) return null
  return l.specialties.find((s) => s.id === specId) || null
}

// Matière « placeholder » pour une spécialité dont le cours n'est pas encore fourni.
function placeholderSubject(spec) {
  return {
    id: 'spec-' + spec.id,
    name: spec.name,
    short: spec.name,
    icon: spec.icon,
    color: spec.color,
    tagline: 'Spécialité — contenu à venir',
    chapters: [],
    comingSoon: true,
  }
}

// Renvoie la liste des matières (objets) à afficher pour la filière choisie.
export function subjectsForTrack(track) {
  if (!track || track.level !== 'terminale-stmg') return []
  const common = COMMON_IDS.map((id) => SUBJECTS.find((s) => s.id === id)).filter(Boolean)
  if (track.specialty === 'gestion-finance') {
    const gf = SUBJECTS.find((s) => s.id === 'gestion-finance')
    return [gf, ...common]
  }
  const spec = getSpecialty('terminale-stmg', track.specialty)
  return spec ? [placeholderSubject(spec), ...common] : common
}

export function trackLabel(track) {
  if (!track) return ''
  const l = getLevel(track.level)
  if (track.level === 'terminale-stmg') {
    const s = getSpecialty('terminale-stmg', track.specialty)
    return s ? `${l.name} · ${s.name}` : l.name
  }
  return l?.name || ''
}

export function trackIcon(track) {
  if (!track) return '🎓'
  if (track.level === 'terminale-stmg') {
    const s = getSpecialty('terminale-stmg', track.specialty)
    return s?.icon || '📕'
  }
  return getLevel(track.level)?.icon || '🎓'
}
