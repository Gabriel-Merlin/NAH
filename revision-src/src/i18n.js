// Internationalisation de l'interface (FR/EN/ES) + traduction du contenu.
// - `useT()` renvoie une fonction t(clé) pour les libellés d'interface
//   (traduits à la main ci-dessous).
// - `useAutoTranslate(texte)` traduit un texte français à la volée via le
//   moteur du dictionnaire (glossaire + service en ligne), avec cache.
import { useEffect, useState } from 'react'
import { useStore } from './store.jsx'
import { translate } from './translate.js'

// --- Libellés d'interface -------------------------------------------------
const FR = {
  // en-tête / navigation
  search: 'Rechercher un chapitre', dictionary: 'Dictionnaire', language: 'Langue',
  mySpace: 'mon espace', light: 'Passer en mode clair', dark: 'Passer en mode sombre',
  home: 'Accueil', theme: 'Thème', chapter: 'Chapitre', level: 'Niveau', streakDays: 'j de suite',
  // accueil / tableau de bord
  greetingNight: 'Belle nuit', greetingMorning: 'Bonjour', greetingAfternoon: 'Bon après-midi', greetingEvening: 'Bonsoir',
  change: 'Changer', resume: 'Reprendre', start: 'Commencer', randomChapter: 'Chapitre au hasard',
  mySubjects: 'Tes matières', badges: 'Badges', favorites: 'Favoris',
  earnedM: 'obtenu', earnedP: 'obtenus', chapToReviewM: 'chapitre à revoir', chapToReviewP: 'chapitres à revoir',
  chapters: 'chapitres', comingSoon: 'Bientôt disponible',
  // fiche d'accueil
  welcome: 'Bienvenue', enterHint: 'Touchez pour entrer', letsMeet: 'Faisons connaissance',
  fillCard: 'Renseigne ta fiche pour un espace de révision à ton nom.',
  firstName: 'Prénom', lastName: 'Nom', yourFirstName: 'Ton prénom', yourLastName: 'Ton nom',
  yourClass: 'Ta classe', yourSpecialty: 'Ta spécialité', enter: 'Entrer', soon: 'bientôt', toCome: 'à venir',
  chooseLevel: 'Choisis ton niveau pour commencer.', whatRevise: 'Qu’est-ce que tu veux réviser ?',
  // chapitre / jeux
  backToChapters: 'Revenir aux chapitres', savePdf: 'Enregistrer (PDF)', gamesOfChapter: 'Jeux de ce chapitre',
  previous: 'Précédent', nextChapter: 'Chapitre suivant', takeTest: 'Passer le test du thème',
  new: 'Nouveau', backToGames: 'Retour aux jeux', quit: 'Quitter', chooseMode: 'Choisis ton mode de jeu.',
  training: 'Entraînement', trainingDesc: 'Sans pression, avec les corrections détaillées.',
  challenge: 'Défi', challengeDesc: 'Chronomètre + score. Gagne plus d’XP !',
  check: 'Vérifier', next: 'Suivant', replay: 'Rejouer', changeMode: 'Changer de mode', done: 'Terminé',
  seeScore: 'Voir mon score', yourAnswer: 'Ta réponse…', goodAnswers: 'bonnes réponses',
  // pages
  myBadges: 'Mes badges', myFavorites: 'Mes favoris', badgesOf: 'Les badges de', favoritesOf: 'Les favoris de',
  unlocked: 'débloqués', autoTranslated: 'traduit automatiquement',
}
const EN = {
  search: 'Search a chapter', dictionary: 'Dictionary', language: 'Language',
  mySpace: 'my space', light: 'Switch to light mode', dark: 'Switch to dark mode',
  home: 'Home', theme: 'Theme', chapter: 'Chapter', level: 'Level', streakDays: 'day streak',
  greetingNight: 'Good night', greetingMorning: 'Good morning', greetingAfternoon: 'Good afternoon', greetingEvening: 'Good evening',
  change: 'Change', resume: 'Resume', start: 'Start', randomChapter: 'Random chapter',
  mySubjects: 'Your subjects', badges: 'Badges', favorites: 'Favorites',
  earnedM: 'earned', earnedP: 'earned', chapToReviewM: 'chapter to review', chapToReviewP: 'chapters to review',
  chapters: 'chapters', comingSoon: 'Coming soon',
  welcome: 'Welcome', enterHint: 'Tap to enter', letsMeet: 'Let’s get to know you',
  fillCard: 'Fill in your card for a revision space in your name.',
  firstName: 'First name', lastName: 'Last name', yourFirstName: 'Your first name', yourLastName: 'Your last name',
  yourClass: 'Your class', yourSpecialty: 'Your specialty', enter: 'Enter', soon: 'soon', toCome: 'coming',
  chooseLevel: 'Choose your level to start.', whatRevise: 'What do you want to revise?',
  backToChapters: 'Back to chapters', savePdf: 'Save (PDF)', gamesOfChapter: 'Games of this chapter',
  previous: 'Previous', nextChapter: 'Next chapter', takeTest: 'Take the theme test',
  new: 'New', backToGames: 'Back to games', quit: 'Quit', chooseMode: 'Choose your game mode.',
  training: 'Practice', trainingDesc: 'No pressure, with detailed corrections.',
  challenge: 'Challenge', challengeDesc: 'Timer + score. Earn more XP!',
  check: 'Check', next: 'Next', replay: 'Play again', changeMode: 'Change mode', done: 'Done',
  seeScore: 'See my score', yourAnswer: 'Your answer…', goodAnswers: 'correct answers',
  myBadges: 'My badges', myFavorites: 'My favorites', badgesOf: 'Badges of', favoritesOf: 'Favorites of',
  unlocked: 'unlocked', autoTranslated: 'automatically translated',
}
const ES = {
  search: 'Buscar un capítulo', dictionary: 'Diccionario', language: 'Idioma',
  mySpace: 'mi espacio', light: 'Cambiar a modo claro', dark: 'Cambiar a modo oscuro',
  home: 'Inicio', theme: 'Tema', chapter: 'Capítulo', level: 'Nivel', streakDays: 'días seguidos',
  greetingNight: 'Buenas noches', greetingMorning: 'Buenos días', greetingAfternoon: 'Buenas tardes', greetingEvening: 'Buenas noches',
  change: 'Cambiar', resume: 'Continuar', start: 'Empezar', randomChapter: 'Capítulo al azar',
  mySubjects: 'Tus asignaturas', badges: 'Insignias', favorites: 'Favoritos',
  earnedM: 'obtenida', earnedP: 'obtenidas', chapToReviewM: 'capítulo por repasar', chapToReviewP: 'capítulos por repasar',
  chapters: 'capítulos', comingSoon: 'Próximamente',
  welcome: 'Bienvenido', enterHint: 'Toca para entrar', letsMeet: 'Vamos a conocernos',
  fillCard: 'Rellena tu ficha para un espacio de repaso con tu nombre.',
  firstName: 'Nombre', lastName: 'Apellido', yourFirstName: 'Tu nombre', yourLastName: 'Tu apellido',
  yourClass: 'Tu clase', yourSpecialty: 'Tu especialidad', enter: 'Entrar', soon: 'pronto', toCome: 'próximamente',
  chooseLevel: 'Elige tu nivel para empezar.', whatRevise: '¿Qué quieres repasar?',
  backToChapters: 'Volver a los capítulos', savePdf: 'Guardar (PDF)', gamesOfChapter: 'Juegos de este capítulo',
  previous: 'Anterior', nextChapter: 'Capítulo siguiente', takeTest: 'Hacer la prueba del tema',
  new: 'Nuevo', backToGames: 'Volver a los juegos', quit: 'Salir', chooseMode: 'Elige tu modo de juego.',
  training: 'Entrenamiento', trainingDesc: 'Sin presión, con correcciones detalladas.',
  challenge: 'Desafío', challengeDesc: 'Cronómetro + puntuación. ¡Gana más XP!',
  check: 'Comprobar', next: 'Siguiente', replay: 'Jugar otra vez', changeMode: 'Cambiar de modo', done: 'Terminado',
  seeScore: 'Ver mi puntuación', yourAnswer: 'Tu respuesta…', goodAnswers: 'respuestas correctas',
  myBadges: 'Mis insignias', myFavorites: 'Mis favoritos', badgesOf: 'Las insignias de', favoritesOf: 'Los favoritos de',
  unlocked: 'desbloqueadas', autoTranslated: 'traducido automáticamente',
}
const DICT = { fr: FR, en: EN, es: ES }

export function useLang() {
  const { state } = useStore()
  return state.lang || 'fr'
}

export function useT() {
  const lang = useLang()
  return (key) => (DICT[lang] && DICT[lang][key]) || FR[key] || key
}

// Traduit un texte français vers la langue de l'interface (cache + service en
// ligne). Affiche le français tant que la traduction n'est pas arrivée.
export function useAutoTranslate(text) {
  const lang = useLang()
  const [out, setOut] = useState(text)
  useEffect(() => {
    if (lang === 'fr' || !text || !String(text).trim()) { setOut(text); return }
    let alive = true
    translate(String(text), 'fr', lang)
      .then((r) => { if (alive && r.text) setOut(r.text) })
      .catch(() => { if (alive) setOut(text) })
    return () => { alive = false }
  }, [text, lang])
  return lang === 'fr' ? text : out
}
