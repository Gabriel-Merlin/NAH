# RévizSTMG — Site de révision interactif (Terminale STMG)

Application web **React + Tailwind CSS** qui transforme le cours
« Terminale STMG — Cours complet » en **fiches + mini-jeux + quiz**, matière par
matière et chapitre par chapitre, avec progression, XP, badges et streak.

> Tout le contenu (cours, définitions, formules, exercices, corrigés) est tiré
> **exclusivement** du fichier de cours. Aucune notion inventée.

## 🎮 Ce que fait le site

- **Accueil** : tableau de bord (progression globale, XP, niveau, streak), grille
  des 8 matières colorées, « Reprendre où j'en étais » et « Chapitre au hasard ».
- **Page matière** : liste des chapitres avec progression (%, étoiles) et favoris.
- **Page chapitre** : 4 onglets — **Cours**, **Jeux**, **Quiz** (noté),
  **Progression** — avec fil d'Ariane permanent.
- **9 types de jeux** : QCM chronométré, Vrai/Faux, Flashcards, Association,
  Tri par catégories, Texte à trous, Remise en ordre, Calcul express (nombres
  aléatoires auto-corrigés), Memory.
- **2 modes** par jeu : **Entraînement** (corrections détaillées) et **Défi**
  (chronomètre + bonus d'XP).
- **Gamification** : XP, niveaux, 16 badges, streak de jours consécutifs.
- **Sauvegarde locale** (localStorage) — aucune connexion nécessaire.
- **Mode sombre**, mobile-first, responsive, recherche, favoris, accessible.

## 🚀 Développement

```bash
npm install
npm run dev      # serveur de dev
npm run build    # génère un fichier unique autonome dans ../revision/index.html
```

Le build produit **un seul fichier HTML** (JS + CSS + données inlinés) grâce à
`vite-plugin-singlefile`. Avec `base: './'` et le routage par hash, il fonctionne
depuis n'importe quelle URL : GitHub Pages, `file://`, ou un sous-dossier.

👉 Le site compilé est servi à l'adresse **`/revision/`** du dépôt.

## 🧩 Ajouter / modifier du contenu (facile à étendre)

Le contenu vit dans `src/data/<matiere>.js`. Chaque matière est un objet ; chaque
chapitre en contient un aussi. **Ajouter un chapitre = ajouter un objet** dans le
tableau `chapters` d'une matière, avec ses `cours`, `formulas` et `games`.

Types de jeux disponibles (champ `type`) : `qcm`, `vraifaux`, `flashcard`,
`association`, `tri`, `trou`, `ordre`, `calcul`, `memory`. Les générateurs de
« Calcul express » sont dans `src/calc.js`, les badges dans `src/badges.js`.

## 🗂️ Structure

```
src/
  data/        # tout le contenu (1 fichier par matière) — source unique
  games/       # 1 composant par type de jeu + GameHost (modes, score, XP)
  pages/       # Accueil, Matière, Chapitre, Favoris, Badges
  components/  # Layout (nav, recherche, thème), UI réutilisable
  store.jsx    # progression localStorage (XP, badges, streak, favoris)
  calc.js      # générateurs de calculs aléatoires
  badges.js    # définition des badges
```
