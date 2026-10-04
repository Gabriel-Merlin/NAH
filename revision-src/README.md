# RévizSTMG

Application de révision pour le bac STMG (Première et Terminale) : cours, exercices
corrigés générés automatiquement, flashcards, bac blanc, coach IA, révision entre amis
et en classe. Installable sur téléphone et utilisable hors ligne.

- **En ligne :** https://revizstmg.github.io
- **Aussi servie par ce dépôt :** https://gabriel-merlin.github.io/NAH/revision/
- **Code source :** ce dossier, `revision-src/`
- **Version compilée :** `../revision/`. Elle est générée par le build : ne la modifiez jamais à la main.

> Ce dépôt héberge aussi **NAH**, le site du lycée Marceau contre le harcèlement
> (fichiers à la racine, voir `../README.md`). Les deux projets partagent le même
> dépôt et le même projet Supabase.
>
> Ce document décrit l'application **avant la refonte d'octobre 2026**. Mettez-le à
> jour à chaque étape de la refonte.

## Ce que fait l'application

| Domaine | Contenu |
|---|---|
| Matières | 11 matières de Terminale : tronc commun (management, droit, économie, maths, philosophie, histoire-géo, langues) et spécialités (gestion-finance, mercatique, RH & communication, SIG). Plus les matières de Première. |
| Parcours | Matière → thème → chapitre, avec les onglets Cours, Définitions et Exercices. |
| Exercices | Une vingtaine de types : QCM, vrai/faux, texte à trous, saisie, tri, association, remise en ordre, calcul, memory, requêtes SQL, cas pratique, étude de documents, compréhension en langue… |
| Révision | Flashcards à répétition espacée, révision express de 5 minutes, défi du jour, bac blanc chronométré, programme, formulaire, méthodologie par épreuve, Grand Oral. |
| IA | Coach IA qui analyse les résultats et propose un plan. Fiches créées à partir de photos de cours (fonction `fiche-vision`, pas encore déployée). |
| Social | Comptes élève et prof, classes (mur, quiz, duels, groupes), amis et duels, classement hebdomadaire et ligues, espace parent. |
| Motivation | XP, niveaux, badges, série de jours, boutique de pièces, objectifs de la semaine. |
| Confort | Application installable (PWA), hors ligne, rappels de révision, interface en français, anglais et espagnol, réglages d'accessibilité (dys, contraste, lecture audio). |

## Démarrer

Il faut Node.js 18 ou plus récent.

```bash
cd revision-src
npm install
npm run dev       # serveur de développement : http://localhost:5173 (pages sous /#/…)
npm run build     # compile l'application dans ../revision/
npm run preview   # sert la version compilée pour la vérifier
```

`npm run build` **vide `../revision/`** avant d'y écrire, puis lance
`pwa-postbuild.mjs`.

## Comment c'est construit

- **React 18**, **React Router 6** (`HashRouter`), **Tailwind CSS 3**, **Vite 5**.
- `vite-plugin-singlefile` met tout le JavaScript, le CSS et le contenu dans un seul
  `revision/index.html` d'environ 2,7 Mo.
- `pwa-postbuild.mjs` copie ensuite le dossier `pwa/` (manifest, service worker,
  icônes) à côté, et ajoute dans `index.html` les balises d'installation et
  l'enregistrement du service worker.
- Avec `base: './'` et le routage par `#`, le site fonctionne depuis n'importe quelle
  adresse, sans configuration de serveur.
- Le service worker (`pwa/sw.js`) va d'abord chercher la page sur le réseau, ce qui
  donne toujours la dernière version, et garde icônes et polices en cache.

## Arborescence

```
revision-src/
  index.html            page d'entrée de Vite
  vite.config.js        build en fichier unique vers ../revision
  pwa-postbuild.mjs     ajoute manifest, service worker et icônes après le build
  pwa/                  manifest.webmanifest, sw.js, icônes (gen-icons.mjs les régénère)
  src/
    main.jsx            démarrage
    App.jsx             toutes les routes
    store.jsx           état de l'élève : progression, XP, badges, série, réglages
    pages/              28 écrans (accueil, matière, thème, chapitre, bac blanc, coach IA, amis…)
    components/         mise en page, affichage des cours, outils transverses
    games/              un composant par type d'exercice, orchestrés par GameHost.jsx
    data/               tout le contenu et les moteurs qui s'en servent (voir plus bas)
    auth.js             comptes élève et prof (Supabase Auth + table profiles)
    classroom.js        espace Classe
    friends.js          amis et duels
    leaderboard.js      classement hebdomadaire
    parent.js           espace parent
    ficheVision.js      appel de la fonction fiche-vision
    ocr.js              lecture du texte d'une image (Tesseract, chargé à la demande)
    i18n.js, translate.js   langues de l'interface et traduction du contenu
    notify.js, pwa.js   rappels et installation
```

## Le contenu (`src/data/`)

**`index.js` assemble tout.** Il exporte la liste `SUBJECTS` et l'index
`ALL_CHAPTERS`. Il génère aussi automatiquement les exercices et les flashcards à
partir du texte des cours : `sectionExercises`, `flashcardsForSection`,
`buildQuiz`, `buildThemeTest`.

**Une matière = un fichier** (`gestion.js`, `droit.js`, `economie.js`…). Les matières
de Première sont regroupées dans `premiere.js`. Dans chaque fichier, l'objet matière
a un `id`, un `name` et un tableau `chapters`. Chaque chapitre (un thème du
programme) contient :
- `cours` : les sections du cours ;
- `formulas` : les formules ;
- `games` : les exercices écrits à la main.

**Pour ajouter un chapitre**, ajoutez un objet dans `chapters`, puis relancez
`npm run build`. Les exercices automatiques sont créés à partir du cours.

**Des couches enrichissent les cours** au moment de l'assemblage :

| Fichier | Rôle |
|---|---|
| `lessons.js` | cours complets |
| `coursreels.js` | exemples réels d'entreprises |
| `approfondir.js` à `approfondir4.js` | cours approfondis, méthodes de calcul, études de cas |
| `enrich.js` | enrichissements transverses |
| `histoiredeep.js`, `managementdeep.js`, `philocours.js`, `sicsi.js` | cours détaillés par matière |

**Banques de contenu :**

| Fichier | Contenu |
|---|---|
| `keyterms.js` | définitions clés par thème |
| `pieges.js` | erreurs fréquentes |
| `caspratiques.js` | cas pratiques |
| `docstudies.js` | études de documents |
| `formulas.js` | formules |
| `methodo.js` | méthodologie par épreuve |
| `glossary.js` | glossaire |

**Moteurs :**

| Fichier | Rôle |
|---|---|
| `srs.js` | répétition espacée |
| `study.js` | file de révision, bac blanc |
| `coachAI.js` | analyse des résultats |
| `dailyChallenge.js` | défi du jour |
| `rewards.js` | récompenses de connexion |
| `shop.js` | boutique |
| `langgen.js` | exercices de langues |
| `tracks.js` | niveaux et spécialités proposés à l'entrée |

Au total, le contenu pèse environ 2 Mo de JavaScript.

### Règles de contenu

- Les **cours de Terminale** ne contiennent que des notions de Terminale. Les notions
  de Première servent uniquement à formuler des **exercices**.
- **Aucune notion inventée** : tout doit correspondre au programme officiel de STMG.

## Comptes et données (Supabase)

**Configuration.** L'application utilise le même projet Supabase que NAH
(`wyydagcjkbivtbuhbzon`), configuré dans `src/supabase.js`. La clé « anon » est
publique par conception : la sécurité repose sur les règles RLS de chaque table.

**Sans compte**, tout fonctionne en local dans le navigateur. **Avec un compte**, la
progression est aussi enregistrée dans la colonne `progress` de la ligne `profiles`
de l'élève, ce qui permet de la retrouver sur un autre appareil.

**Tables utilisées par l'application :**
- `profiles`
- `leaderboard`
- `friend_user`, `friend_request`, `friend_duel`
- `class_member`, `class_meta`, `class_wall`, `class_quiz`, `class_quiz_result`,
  `class_duel`, `class_group`, `class_ban`
- `child_stats`

**Attention :** `../supabase/schema.sql` ne contient pas toutes ces tables. La plupart
ont été créées directement sur Supabase. Les remettre en migrations fait partie de la
refonte.

**Fonction `fiche-vision`** (`../supabase/functions/fiche-vision/`) : elle transforme
des photos de cours en fiche structurée avec Gemini (gratuit) ou Claude. Le code est
prêt, mais **elle n'est pas encore déployée**. La marche à suivre est dans le README
de son dossier.

## Mise en ligne

1. Travaillez sur une branche, puis lancez `npm run build` pour mettre à jour
   `../revision/`.
2. Publiez en mettant `revision/` à jour sur la branche `main`. Deux workflows GitHub
   prennent le relais :
   - `rebuild-pages.yml` reconstruit GitHub Pages pour ce dépôt (site NAH et `/revision/`).
   - `sync-revizstmg.yml` copie `revision/*` dans le dépôt `revizstmg/revizstmg.github.io`,
     qui sert https://revizstmg.github.io. Il a besoin du secret `REVIZSTMG_DEPLOY_TOKEN`.

## Limites connues (ce que la refonte doit régler)

- Toute l'application est chargée d'un bloc, en un seul fichier de 2,7 Mo.
- Le contenu (2 Mo) est écrit dans des fichiers JavaScript, mélangé au code.
- Il n'y a aucun test automatique.
- `schema.sql` ne reflète pas la base réelle.
- La mise en ligne passe par une copie manuelle de `revision/` sur `main`.
- RévizSTMG partage son dépôt et sa base Supabase avec NAH.
