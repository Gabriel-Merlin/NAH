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
  home: 'Accueil', theme: 'Thème', chapter: 'Chapitre', level: 'Niveau', levelShort: 'Niv.',
  streakDays: 'j de suite', streakTitle: 'Jours de révision consécutifs', xpTitle: 'Niveau et points d’expérience',
  // accueil / tableau de bord
  greetingNight: 'Belle nuit', greetingMorning: 'Bonjour', greetingAfternoon: 'Bon après-midi', greetingEvening: 'Bonsoir',
  change: 'Changer', resume: 'Reprendre', start: 'Commencer', randomChapter: 'Chapitre au hasard',
  mySubjects: 'Tes matières', badges: 'Badges', favorites: 'Favoris',
  earnedM: 'obtenu', earnedP: 'obtenus', chapToReviewM: 'chapitre à revoir', chapToReviewP: 'chapitres à revoir',
  chapters: 'chapitres', comingSoon: 'Bientôt disponible',
  savedOnDevice: 'Progression sauvegardée sur cet appareil.',
  courseBasedNote: 'Contenu basé sur ton cours « Terminale STMG — Cours complet ». Progression sauvegardée sur cet appareil.',
  // fiche d'accueil
  welcome: 'Bienvenue', enterHint: 'Touchez pour entrer', letsMeet: 'Faisons connaissance',
  fillCard: 'Renseigne ta fiche pour un espace de révision à ton nom.',
  firstName: 'Prénom', lastName: 'Nom', yourFirstName: 'Ton prénom', yourLastName: 'Ton nom',
  yourClass: 'Ta classe', yourSpecialty: 'Ta spécialité', enter: 'Entrer', soon: 'bientôt', toCome: 'à venir',
  chooseLevel: 'Choisis ton niveau pour commencer.', whatRevise: 'Qu’est-ce que tu veux réviser ?',
  // écran d'entrée (Landing)
  soonShort: 'Bientôt', complete: 'Complet', specialtyComing: 'Spécialité à venir',
  commonSubjectsNote: 'Les matières communes (Management, Droit, Éco, Maths, Philo, Histoire-Géo, Langues) sont disponibles pour toutes les spécialités.',
  landingNote: 'Seconde, Première et les spécialités RH / Mercatique arriveront dès que leur cours sera ajouté.',
  // inscription — choix des matières & chapitres
  planTitle: 'Que veux-tu travailler ?', planSub: 'Choisis tes matières, puis touche le chapitre où tu en es.',
  whereAreYou: 'Où en es-tu ?', continueBtn: 'Continuer', skipStep: 'Passer cette étape',
  pickSubjectsHint: 'Touche une ou plusieurs matières.', chapterChosen: 'Chapitre choisi',
  // chapitre / thème
  backToChapters: 'Revenir aux chapitres', savePdf: 'Enregistrer (PDF)', gamesOfChapter: 'Jeux de ce chapitre',
  previous: 'Précédent', nextChapter: 'Chapitre suivant', takeTest: 'Passer le test du thème',
  new: 'Nouveau', tabChapters: 'Chapitres', tabTest: 'Test du thème', tabProgress: 'Progression',
  chooseChapter: 'Choisis un chapitre pour lire le cours et t’entraîner.', course: 'Cours',
  gameSing: 'jeu', gamePlur: 'jeux', themeMastery: 'Maîtrise du thème', detailByGame: 'Détail par jeu',
  memoSheet: 'Fiche mémo — l’essentiel', goFurther: 'Pour aller plus loin',
  goFurtherSub: 'Vidéos et ressources pour approfondir (s’ouvrent dans un nouvel onglet).',
  saveFicheBtn: 'Enregistrer la fiche (PDF)', reviseBtn: 'Réviser',
  // jeux — cadre (GameHost)
  backToGames: 'Retour aux jeux', quit: 'Quitter', chooseMode: 'Choisis ton mode de jeu.',
  training: 'Entraînement', trainingDesc: 'Sans pression, avec les corrections détaillées.',
  challenge: 'Défi', challengeDesc: 'Chronomètre + score. Gagne plus d’XP !',
  check: 'Vérifier', next: 'Suivant', replay: 'Rejouer', changeMode: 'Changer de mode', done: 'Terminé',
  seeScore: 'Voir mon score', yourAnswer: 'Ta réponse…', goodAnswers: 'bonnes réponses',
  gl_qcm: 'QCM', gl_vraifaux: 'Vrai / Faux', gl_flashcard: 'Flashcards', gl_association: 'Association',
  gl_tri: 'Tri par catégories', gl_trou: 'Texte à trous', gl_ordre: 'Remise en ordre',
  gl_calcul: 'Calcul express', gl_memory: 'Memory', gl_doc: 'Étude de documents',
  // jeux — détail (mini-jeux)
  question: 'Question', answer: 'Réponse', seeAnswer: 'Voir la réponse', flipCard: 'Retourner la carte',
  tapToFlip: '👆 Touche pour retourner', toReview: 'À revoir', iKnew: 'Je savais',
  feedbackGood: 'Bravo !', feedbackBad: 'Presque…', timeUp: 'Temps écoulé.', nextQuestion: 'Question suivante',
  trueLabel: 'Vrai', falseLabel: 'Faux', exact: 'Exact !', rightAnswerIs: 'La bonne réponse :',
  expectedAnswer: 'Réponse attendue :', answerToComplete: 'Réponse à compléter', numericAnswer: 'Réponse chiffrée',
  wellSorted: 'Bien classé !', itWas: 'C’était :', errorsCount: 'Erreurs',
  stepN: 'Étape', chooseBelow: 'choisis ci-dessous…',
  matchEach: 'Relie chaque élément à sa correspondance.', findPairs: 'Retrouve les paires.', hiddenCard: 'Carte cachée',
  // étude de documents
  readDocsThenAnswer: 'Lis attentivement les documents, puis réponds aux questions.',
  answerToThe: 'Répondre aux', questionsWord: 'questions', toWrite: 'À rédiger', basedOnDoc: 'd’après le doc.',
  writeAnswerHere: 'Rédige ta réponse ici…', seeCorrection: 'Voir le corrigé', correction: 'Corrigé',
  category: 'Catégorie', wasYourAnswerCorrect: 'Ta réponse était-elle correcte ?', iMastered: 'Je maîtrisais',
  // test du thème
  fullEvalOn: 'Une évaluation complète sur', qcmQuestionsSuffix: 'questions de QCM',
  writtenQuestionsSuffix: 'questions à rédiger', caseStudiesSuffix: 'cas pratiques à analyser',
  selfEvalNote1: 'Les questions rédigées se corrigent en auto-évaluation : tu rédiges ta réponse, puis tu affiches le corrigé et tu t’évalues honnêtement.',
  startTest: 'Commencer le test', back: 'Retour', part1Qcm: 'Partie 1 · QCM', part2Written: 'Partie 2 · À rédiger',
  themeTestDone: 'Test du thème terminé', succeeded: 'réussies',
  selfEvalNote2: 'Les questions rédigées sont auto-évaluées : sois honnête pour suivre ta vraie progression.',
  retakeTest: 'Refaire le test', analyzeCase: 'Analyse ce cas :', sortJustify: 'Classe et justifie :',
  presentExplain: 'Présente et explique :', defineExplain: 'Définis / explique :',
  caseStudy: 'Cas pratique', sortedClass: 'Classement justifié', development: 'Développement', writing: 'Rédaction',
  // pages badges / favoris
  myBadges: 'Mes badges', myFavorites: 'Mes favoris', badgesOf: 'Les badges de', favoritesOf: 'Les favoris de',
  unlocked: 'débloqués', earnedCheck: 'Obtenu ✓', resetProgress: 'Réinitialiser ma progression',
  resetConfirm: 'Effacer toute ta progression (XP, badges, scores) sur cet appareil ?',
  noFavYet: 'Aucun chapitre en favori pour l’instant.',
  addFavHint: 'Ajoute-en avec l’étoile ☆ sur une page de chapitre.',
  removeFav: 'Retirer des favoris', addFav: 'Ajouter aux favoris',
  autoTranslated: 'traduit automatiquement',
}
const EN = {
  search: 'Search a chapter', dictionary: 'Dictionary', language: 'Language',
  mySpace: 'my space', light: 'Switch to light mode', dark: 'Switch to dark mode',
  home: 'Home', theme: 'Theme', chapter: 'Chapter', level: 'Level', levelShort: 'Lv.',
  streakDays: 'day streak', streakTitle: 'Consecutive revision days', xpTitle: 'Level and experience points',
  greetingNight: 'Good night', greetingMorning: 'Good morning', greetingAfternoon: 'Good afternoon', greetingEvening: 'Good evening',
  change: 'Change', resume: 'Resume', start: 'Start', randomChapter: 'Random chapter',
  mySubjects: 'Your subjects', badges: 'Badges', favorites: 'Favorites',
  earnedM: 'earned', earnedP: 'earned', chapToReviewM: 'chapter to review', chapToReviewP: 'chapters to review',
  chapters: 'chapters', comingSoon: 'Coming soon',
  savedOnDevice: 'Progress saved on this device.',
  courseBasedNote: 'Content based on your “Terminale STMG — Full course”. Progress saved on this device.',
  welcome: 'Welcome', enterHint: 'Tap to enter', letsMeet: 'Let’s get to know you',
  fillCard: 'Fill in your card for a revision space in your name.',
  firstName: 'First name', lastName: 'Last name', yourFirstName: 'Your first name', yourLastName: 'Your last name',
  yourClass: 'Your class', yourSpecialty: 'Your specialty', enter: 'Enter', soon: 'soon', toCome: 'coming',
  chooseLevel: 'Choose your level to start.', whatRevise: 'What do you want to revise?',
  soonShort: 'Soon', complete: 'Complete', specialtyComing: 'Specialty coming',
  commonSubjectsNote: 'The common subjects (Management, Law, Economics, Maths, Philosophy, History-Geography, Languages) are available for every specialty.',
  landingNote: 'Seconde, Première and the HR / Marketing specialties will arrive as soon as their course is added.',
  planTitle: 'What do you want to work on?', planSub: 'Pick your subjects, then tap the chapter you’re on.',
  whereAreYou: 'Where are you?', continueBtn: 'Continue', skipStep: 'Skip this step',
  pickSubjectsHint: 'Tap one or more subjects.', chapterChosen: 'Chapter chosen',
  backToChapters: 'Back to chapters', savePdf: 'Save (PDF)', gamesOfChapter: 'Games of this chapter',
  previous: 'Previous', nextChapter: 'Next chapter', takeTest: 'Take the theme test',
  new: 'New', tabChapters: 'Chapters', tabTest: 'Theme test', tabProgress: 'Progress',
  chooseChapter: 'Choose a chapter to read the lesson and practise.', course: 'Lesson',
  gameSing: 'game', gamePlur: 'games', themeMastery: 'Theme mastery', detailByGame: 'Detail by game',
  memoSheet: 'Memo sheet — the essentials', goFurther: 'Go further',
  goFurtherSub: 'Videos and resources to dig deeper (open in a new tab).',
  saveFicheBtn: 'Save the sheet (PDF)', reviseBtn: 'Revise',
  backToGames: 'Back to games', quit: 'Quit', chooseMode: 'Choose your game mode.',
  training: 'Practice', trainingDesc: 'No pressure, with detailed corrections.',
  challenge: 'Challenge', challengeDesc: 'Timer + score. Earn more XP!',
  check: 'Check', next: 'Next', replay: 'Play again', changeMode: 'Change mode', done: 'Done',
  seeScore: 'See my score', yourAnswer: 'Your answer…', goodAnswers: 'correct answers',
  gl_qcm: 'Quiz (MCQ)', gl_vraifaux: 'True / False', gl_flashcard: 'Flashcards', gl_association: 'Matching',
  gl_tri: 'Sort by category', gl_trou: 'Fill in the blanks', gl_ordre: 'Reorder',
  gl_calcul: 'Quick calculation', gl_memory: 'Memory', gl_doc: 'Document study',
  question: 'Question', answer: 'Answer', seeAnswer: 'See the answer', flipCard: 'Flip the card',
  tapToFlip: '👆 Tap to flip', toReview: 'To review', iKnew: 'I knew it',
  feedbackGood: 'Well done!', feedbackBad: 'Almost…', timeUp: 'Time’s up.', nextQuestion: 'Next question',
  trueLabel: 'True', falseLabel: 'False', exact: 'Exactly!', rightAnswerIs: 'The right answer:',
  expectedAnswer: 'Expected answer:', answerToComplete: 'Answer to complete', numericAnswer: 'Numeric answer',
  wellSorted: 'Well sorted!', itWas: 'It was:', errorsCount: 'Mistakes',
  stepN: 'Step', chooseBelow: 'choose below…',
  matchEach: 'Match each item to its pair.', findPairs: 'Find the pairs.', hiddenCard: 'Hidden card',
  readDocsThenAnswer: 'Read the documents carefully, then answer the questions.',
  answerToThe: 'Answer the', questionsWord: 'questions', toWrite: 'To write', basedOnDoc: 'based on doc.',
  writeAnswerHere: 'Write your answer here…', seeCorrection: 'See the answer key', correction: 'Answer key',
  category: 'Category', wasYourAnswerCorrect: 'Was your answer correct?', iMastered: 'I had it',
  fullEvalOn: 'A full assessment on', qcmQuestionsSuffix: 'MCQ questions',
  writtenQuestionsSuffix: 'questions to write', caseStudiesSuffix: 'case studies to analyse',
  selfEvalNote1: 'Written questions are self-assessed: write your answer, then reveal the answer key and grade yourself honestly.',
  startTest: 'Start the test', back: 'Back', part1Qcm: 'Part 1 · MCQ', part2Written: 'Part 2 · Written',
  themeTestDone: 'Theme test finished', succeeded: 'correct',
  selfEvalNote2: 'Written questions are self-assessed: be honest to track your real progress.',
  retakeTest: 'Retake the test', analyzeCase: 'Analyse this case:', sortJustify: 'Sort and justify:',
  presentExplain: 'Present and explain:', defineExplain: 'Define / explain:',
  caseStudy: 'Case study', sortedClass: 'Justified sorting', development: 'Development', writing: 'Writing',
  myBadges: 'My badges', myFavorites: 'My favorites', badgesOf: 'Badges of', favoritesOf: 'Favorites of',
  unlocked: 'unlocked', earnedCheck: 'Earned ✓', resetProgress: 'Reset my progress',
  resetConfirm: 'Erase all your progress (XP, badges, scores) on this device?',
  noFavYet: 'No favorite chapter yet.',
  addFavHint: 'Add some with the star ☆ on a chapter page.',
  removeFav: 'Remove from favorites', addFav: 'Add to favorites',
  autoTranslated: 'automatically translated',
}
const ES = {
  search: 'Buscar un capítulo', dictionary: 'Diccionario', language: 'Idioma',
  mySpace: 'mi espacio', light: 'Cambiar a modo claro', dark: 'Cambiar a modo oscuro',
  home: 'Inicio', theme: 'Tema', chapter: 'Capítulo', level: 'Nivel', levelShort: 'Nv.',
  streakDays: 'días seguidos', streakTitle: 'Días de repaso consecutivos', xpTitle: 'Nivel y puntos de experiencia',
  greetingNight: 'Buenas noches', greetingMorning: 'Buenos días', greetingAfternoon: 'Buenas tardes', greetingEvening: 'Buenas noches',
  change: 'Cambiar', resume: 'Continuar', start: 'Empezar', randomChapter: 'Capítulo al azar',
  mySubjects: 'Tus asignaturas', badges: 'Insignias', favorites: 'Favoritos',
  earnedM: 'obtenida', earnedP: 'obtenidas', chapToReviewM: 'capítulo por repasar', chapToReviewP: 'capítulos por repasar',
  chapters: 'capítulos', comingSoon: 'Próximamente',
  savedOnDevice: 'Progreso guardado en este dispositivo.',
  courseBasedNote: 'Contenido basado en tu «Terminale STMG — Curso completo». Progreso guardado en este dispositivo.',
  welcome: 'Bienvenido', enterHint: 'Toca para entrar', letsMeet: 'Vamos a conocernos',
  fillCard: 'Rellena tu ficha para un espacio de repaso con tu nombre.',
  firstName: 'Nombre', lastName: 'Apellido', yourFirstName: 'Tu nombre', yourLastName: 'Tu apellido',
  yourClass: 'Tu clase', yourSpecialty: 'Tu especialidad', enter: 'Entrar', soon: 'pronto', toCome: 'próximamente',
  chooseLevel: 'Elige tu nivel para empezar.', whatRevise: '¿Qué quieres repasar?',
  soonShort: 'Pronto', complete: 'Completo', specialtyComing: 'Especialidad próximamente',
  commonSubjectsNote: 'Las asignaturas comunes (Gestión, Derecho, Economía, Matemáticas, Filosofía, Historia-Geografía, Idiomas) están disponibles para todas las especialidades.',
  landingNote: 'Seconde, Première y las especialidades de RR. HH. / Marketing llegarán en cuanto se añada su curso.',
  planTitle: '¿Qué quieres trabajar?', planSub: 'Elige tus asignaturas y toca el capítulo por el que vas.',
  whereAreYou: '¿Por dónde vas?', continueBtn: 'Continuar', skipStep: 'Omitir este paso',
  pickSubjectsHint: 'Toca una o varias asignaturas.', chapterChosen: 'Capítulo elegido',
  backToChapters: 'Volver a los capítulos', savePdf: 'Guardar (PDF)', gamesOfChapter: 'Juegos de este capítulo',
  previous: 'Anterior', nextChapter: 'Capítulo siguiente', takeTest: 'Hacer la prueba del tema',
  new: 'Nuevo', tabChapters: 'Capítulos', tabTest: 'Prueba del tema', tabProgress: 'Progreso',
  chooseChapter: 'Elige un capítulo para leer la lección y practicar.', course: 'Lección',
  gameSing: 'juego', gamePlur: 'juegos', themeMastery: 'Dominio del tema', detailByGame: 'Detalle por juego',
  memoSheet: 'Ficha resumen — lo esencial', goFurther: 'Para saber más',
  goFurtherSub: 'Vídeos y recursos para profundizar (se abren en una nueva pestaña).',
  saveFicheBtn: 'Guardar la ficha (PDF)', reviseBtn: 'Repasar',
  backToGames: 'Volver a los juegos', quit: 'Salir', chooseMode: 'Elige tu modo de juego.',
  training: 'Entrenamiento', trainingDesc: 'Sin presión, con correcciones detalladas.',
  challenge: 'Desafío', challengeDesc: 'Cronómetro + puntuación. ¡Gana más XP!',
  check: 'Comprobar', next: 'Siguiente', replay: 'Jugar otra vez', changeMode: 'Cambiar de modo', done: 'Terminado',
  seeScore: 'Ver mi puntuación', yourAnswer: 'Tu respuesta…', goodAnswers: 'respuestas correctas',
  gl_qcm: 'Cuestionario', gl_vraifaux: 'Verdadero / Falso', gl_flashcard: 'Tarjetas', gl_association: 'Asociación',
  gl_tri: 'Clasificar por categorías', gl_trou: 'Rellenar huecos', gl_ordre: 'Ordenar',
  gl_calcul: 'Cálculo rápido', gl_memory: 'Memoria', gl_doc: 'Estudio de documentos',
  question: 'Pregunta', answer: 'Respuesta', seeAnswer: 'Ver la respuesta', flipCard: 'Girar la tarjeta',
  tapToFlip: '👆 Toca para girar', toReview: 'Por repasar', iKnew: 'Lo sabía',
  feedbackGood: '¡Bien hecho!', feedbackBad: 'Casi…', timeUp: 'Se acabó el tiempo.', nextQuestion: 'Siguiente pregunta',
  trueLabel: 'Verdadero', falseLabel: 'Falso', exact: '¡Exacto!', rightAnswerIs: 'La respuesta correcta:',
  expectedAnswer: 'Respuesta esperada:', answerToComplete: 'Respuesta a completar', numericAnswer: 'Respuesta numérica',
  wellSorted: '¡Bien clasificado!', itWas: 'Era:', errorsCount: 'Errores',
  stepN: 'Paso', chooseBelow: 'elige abajo…',
  matchEach: 'Relaciona cada elemento con su pareja.', findPairs: 'Encuentra las parejas.', hiddenCard: 'Tarjeta oculta',
  readDocsThenAnswer: 'Lee atentamente los documentos y luego responde a las preguntas.',
  answerToThe: 'Responder a las', questionsWord: 'preguntas', toWrite: 'Para redactar', basedOnDoc: 'según el doc.',
  writeAnswerHere: 'Redacta tu respuesta aquí…', seeCorrection: 'Ver la corrección', correction: 'Corrección',
  category: 'Categoría', wasYourAnswerCorrect: '¿Tu respuesta era correcta?', iMastered: 'Lo dominaba',
  fullEvalOn: 'Una evaluación completa sobre', qcmQuestionsSuffix: 'preguntas tipo test',
  writtenQuestionsSuffix: 'preguntas para redactar', caseStudiesSuffix: 'casos prácticos para analizar',
  selfEvalNote1: 'Las preguntas redactadas se corrigen por autoevaluación: redactas tu respuesta, luego muestras la corrección y te evalúas con honestidad.',
  startTest: 'Empezar la prueba', back: 'Volver', part1Qcm: 'Parte 1 · Test', part2Written: 'Parte 2 · Redactar',
  themeTestDone: 'Prueba del tema terminada', succeeded: 'acertadas',
  selfEvalNote2: 'Las preguntas redactadas se autoevalúan: sé honesto para seguir tu progreso real.',
  retakeTest: 'Repetir la prueba', analyzeCase: 'Analiza este caso:', sortJustify: 'Clasifica y justifica:',
  presentExplain: 'Presenta y explica:', defineExplain: 'Define / explica:',
  caseStudy: 'Caso práctico', sortedClass: 'Clasificación justificada', development: 'Desarrollo', writing: 'Redacción',
  myBadges: 'Mis insignias', myFavorites: 'Mis favoritos', badgesOf: 'Las insignias de', favoritesOf: 'Los favoritos de',
  unlocked: 'desbloqueadas', earnedCheck: 'Obtenida ✓', resetProgress: 'Reiniciar mi progreso',
  resetConfirm: '¿Borrar todo tu progreso (XP, insignias, puntuaciones) en este dispositivo?',
  noFavYet: 'Aún no hay ningún capítulo favorito.',
  addFavHint: 'Añade con la estrella ☆ en una página de capítulo.',
  removeFav: 'Quitar de favoritos', addFav: 'Añadir a favoritos',
  autoTranslated: 'traducido automáticamente',
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

// Libellé traduit d'un type de jeu (qcm, vraifaux, …).
export function useGameLabel() {
  const t = useT()
  return (type) => t('gl_' + type)
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
