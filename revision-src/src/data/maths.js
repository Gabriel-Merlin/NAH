// MATHÉMATIQUES — 7 chapitres (contrôle continu en STMG).
export const maths = {
  id: 'maths',
  name: 'Mathématiques',
  short: 'Maths',
  icon: '🧮',
  color: '#2563eb',
  tagline: 'Modélisation et applications en gestion.',
  chapters: [
    {
      id: 'math-c1',
      name: 'Chapitre 1 — Informations chiffrées',
      short: 'Informations chiffrées',
      keywords: 'taux d’évolution coefficient multiplicateur évolutions successives taux moyen indice base 100 réciproque',
      cours: [
        {
          h: 'Taux et coefficients',
          points: [
            'Taux d’évolution : t = (V arrivée − V départ) / V départ.',
            'Coefficient multiplicateur : CM = 1 + t.',
            'Évolutions successives : CM global = produit des CM.',
            'Taux moyen : CM moyen = (CM global)^(1/n) ; t moyen = CM moyen − 1.',
            'Évolution réciproque : CM réciproque = 1 / CM.',
            'Indice base 100 = (valeur / valeur de référence) × 100.',
          ],
        },
      ],
      formulas: [
        't = (V arrivée − V départ) / V départ',
        'CM = 1 + t · CM global = produit des CM',
        'Indice = (valeur / référence) × 100',
      ],
      essentiel: [
        '**Taux d’évolution** : t = (V arrivée − V départ) / V départ ; **coefficient multiplicateur CM = 1 + t**.',
        'Évolutions successives : on **multiplie** les CM (surtout ne pas additionner les taux).',
        '**Taux moyen** : CM moyen = (CM global)^(1/n) ; **évolution réciproque** : 1/CM.',
        '**Indice base 100** = (valeur / valeur de référence) × 100.',
      ],
      games: [
        { id: 'math-c1-calc-t', type: 'calcul', title: 'Exercices — Taux d’évolution', icon: '✍️', gen: 'taux_evolution', count: 8 },
        { id: 'math-c1-calc-succ', type: 'calcul', title: 'Exercices — Évolutions successives', icon: '✍️', gen: 'cm_successif', count: 6 },
        { id: 'math-c1-calc-val', type: 'calcul', title: 'Exercices — Valeur après évolution', icon: '✍️', gen: 'valeur_apres_evolution', count: 6 },
        { id: 'math-c1-calc-indice', type: 'calcul', title: 'Exercices — Indice base 100', icon: '✍️', gen: 'indice_base100', count: 6 },
        { id: 'math-c1-calc-moyen', type: 'calcul', title: 'Exercices — Taux moyen', icon: '✍️', gen: 'taux_moyen', count: 5 },
        { id: 'math-c1-calc-recip', type: 'calcul', title: 'Exercices — Taux réciproque', icon: '✍️', gen: 'taux_reciproque', count: 5 },
        {
          id: 'math-c1-flash',
          type: 'flashcard',
          title: 'Flashcards — Formules',
          icon: '🃏',
          cards: [
            { front: 'Taux d’évolution t', back: 't = (V arrivée − V départ) / V départ.' },
            { front: 'Coefficient multiplicateur', back: 'CM = 1 + t.' },
            { front: 'Taux moyen', back: 'CM moyen = (CM global)^(1/n) ; t moyen = CM moyen − 1.' },
            { front: 'Indice base 100', back: '(valeur / valeur de référence) × 100.' },
          ],
        },
      ],
    },
    {
      id: 'math-c2',
      name: 'Chapitre 2 — Suites numériques',
      short: 'Suites',
      keywords: 'suite arithmétique géométrique raison croissance linéaire exponentielle',
      cours: [
        {
          h: 'Deux types de suites',
          points: [
            'Arithmétique (on ajoute la raison r) : u_n = u_0 + n·r (croissance linéaire).',
            'Géométrique (on multiplie par la raison q) : u_n = u_0 × q^n (croissance exponentielle).',
            'Sens de variation, comparaison, calcul de termes au tableur.',
          ],
        },
      ],
      formulas: ['Arithmétique : u_n = u_0 + n·r', 'Géométrique : u_n = u_0 × q^n'],
      essentiel: [
        'Suite **arithmétique** : on ajoute la raison r → u_n = u_0 + n·r (croissance **linéaire**).',
        'Suite **géométrique** : on multiplie par la raison q → u_n = u_0 × q^n (croissance **exponentielle**).',
        'Hausse/baisse de p % ⇒ raison **q = 1 ± p/100** (ex. −8 % → q = 0,92).',
      ],
      games: [
        { id: 'math-c2-calc-arith', type: 'calcul', title: 'Exercices — Suite arithmétique', icon: '✍️', gen: 'suite_arith', count: 8 },
        { id: 'math-c2-calc-geo', type: 'calcul', title: 'Exercices — Suite géométrique', icon: '✍️', gen: 'suite_geo_terme', count: 8 },
        { id: 'math-c2-calc-baisse', type: 'calcul', title: 'Exercices — Évolution en %', icon: '✍️', gen: 'suite_geo', count: 6 },
        {
          id: 'math-c2-flash',
          type: 'flashcard',
          title: 'Flashcards — Formules',
          icon: '🃏',
          cards: [
            { front: 'Suite arithmétique', back: 'On ajoute la raison r : u_n = u_0 + n·r.' },
            { front: 'Suite géométrique', back: 'On multiplie par la raison q : u_n = u_0 × q^n.' },
            { front: 'Baisse de p %', back: 'Raison q = 1 − p/100 (ex. −8 % → q = 0,92).' },
          ],
        },
      ],
    },
    {
      id: 'math-c3',
      name: 'Chapitre 3 — Fonctions et dérivation',
      short: 'Dérivation',
      keywords: 'nombre dérivé tangente dérivées variations signe optimisation maximum bénéfice',
      cours: [
        {
          h: 'Dérivée et variations',
          points: [
            'Nombre dérivé f’(a) = coefficient directeur de la tangente en a.',
            'Équation de la tangente : y = f’(a)(x − a) + f(a).',
            'Signe de f’ → variations : f’ > 0 ⇒ croissante ; f’ < 0 ⇒ décroissante.',
            'Extremum quand f’ s’annule en changeant de signe (optimisation coût/bénéfice).',
          ],
        },
      ],
      formulas: ['Tangente : y = f’(a)(x − a) + f(a)', 'f’ > 0 ⇒ croissante · f’ < 0 ⇒ décroissante'],
      essentiel: [
        '**Nombre dérivé** f’(a) = coefficient directeur de la **tangente** en a.',
        'Équation de la tangente : **y = f’(a)(x − a) + f(a)**.',
        'Signe de f’ → variations : **f’ > 0 ⇒ croissante**, **f’ < 0 ⇒ décroissante**.',
        '**Extremum** (optimisation coût/bénéfice) quand f’ **s’annule en changeant de signe**.',
      ],
      games: [
        { id: 'math-c3-calc-img', type: 'calcul', title: 'Exercices — Image f(x)', icon: '✍️', gen: 'image_fonction', count: 8 },
        { id: 'math-c3-calc-der', type: 'calcul', title: 'Exercices — Nombre dérivé f’(x)', icon: '✍️', gen: 'derivee_affine', count: 8 },
        { id: 'math-c3-calc-graph', type: 'calcul', title: 'Exercices — Lecture graphique', icon: '📈', gen: 'lecture_graphique_affine', count: 6 },
        {
          id: 'math-c3-flash',
          type: 'flashcard',
          title: 'Flashcards — Formules',
          icon: '🃏',
          cards: [
            { front: 'Nombre dérivé f’(a)', back: 'Coefficient directeur de la tangente à la courbe en a.' },
            { front: 'Dérivée de ax² + bx + c', back: 'f’(x) = 2ax + b.' },
            { front: 'Équation de la tangente', back: 'y = f’(a)(x − a) + f(a).' },
            { front: 'Extremum', back: 'Atteint quand f’ s’annule en changeant de signe.' },
          ],
        },
      ],
    },
    {
      id: 'math-c4',
      name: 'Chapitre 4 — Statistiques à deux variables',
      short: 'Stats à deux variables',
      keywords: 'nuage de points point moyen G moindres carrés ajustement affine interpolation extrapolation',
      cours: [
        {
          h: 'Ajustement affine',
          points: [
            'Nuage de points, point moyen G.',
            'Ajustement affine par la méthode des moindres carrés (droite y = ax + b à la calculatrice).',
            'Utilisation pour interpoler / extrapoler (prévisions).',
          ],
        },
      ],
      formulas: ['Droite d’ajustement : y = ax + b (moindres carrés)'],
      essentiel: [
        '**Nuage de points** + **point moyen G** (coordonnées = moyennes de x et de y).',
        '**Ajustement affine** par la méthode des **moindres carrés** : droite y = ax + b (calculatrice).',
        '**Interpoler** (à l’intérieur des données) vs **extrapoler** (au-delà) pour faire des prévisions.',
      ],
      games: [
        { id: 'math-c4-calc-moy', type: 'calcul', title: 'Exercices — Moyenne d’une série', icon: '✍️', gen: 'moyenne_serie', count: 6 },
        { id: 'math-c4-calc-nuage', type: 'calcul', title: 'Exercices — Point moyen (nuage)', icon: '📈', gen: 'nuage_point_moyen', count: 6 },
        { id: 'math-c4-calc-etendue', type: 'calcul', title: 'Exercices — Étendue', icon: '✍️', gen: 'etendue_serie', count: 6 },
        {
          id: 'math-c4-flash',
          type: 'flashcard',
          title: 'Flashcards — Formules',
          icon: '🃏',
          cards: [
            { front: 'Point moyen G', back: 'Point de coordonnées (moyenne des x, moyenne des y).' },
            { front: 'Moindres carrés', back: 'Méthode qui minimise les écarts pour trouver y = ax + b.' },
            { front: 'Interpoler / extrapoler', back: 'Prévoir à l’intérieur / au-delà de l’intervalle des données.' },
          ],
        },
      ],
    },
    {
      id: 'math-c5',
      name: 'Chapitre 5 — Probabilités conditionnelles',
      short: 'Probabilités conditionnelles',
      keywords: 'probabilité conditionnelle arbre pondéré probabilités totales indépendance',
      cours: [
        {
          h: 'Conditionnelles et arbres',
          points: [
            'P_A(B) = P(A ∩ B) / P(A).',
            'Arbre pondéré : somme des branches issues d’un nœud = 1 ; on multiplie le long des branches.',
            'Formule des probabilités totales.',
            'Indépendance : P(A ∩ B) = P(A) × P(B).',
          ],
        },
      ],
      formulas: ['P_A(B) = P(A ∩ B) / P(A)', 'Indépendance : P(A ∩ B) = P(A) × P(B)'],
      essentiel: [
        '**Probabilité conditionnelle** : P_A(B) = P(A ∩ B) / P(A).',
        '**Arbre pondéré** : on **multiplie** le long des branches ; les branches d’un même nœud **somment à 1**.',
        '**Formule des probabilités totales** ; **indépendance** : P(A ∩ B) = P(A) × P(B).',
      ],
      games: [
        { id: 'math-c5-calc-cond', type: 'calcul', title: 'Exercices — Probabilité conditionnelle', icon: '✍️', gen: 'proba_cond', count: 8 },
        { id: 'math-c5-calc-tot', type: 'calcul', title: 'Exercices — Probabilités totales', icon: '✍️', gen: 'proba_totale', count: 6 },
        {
          id: 'math-c5-flash',
          type: 'flashcard',
          title: 'Flashcards — Formules',
          icon: '🃏',
          cards: [
            { front: 'Probabilité conditionnelle', back: 'P_A(B) = P(A ∩ B) / P(A).' },
            { front: 'Arbre pondéré', back: 'On multiplie le long des branches ; les branches d’un nœud somment à 1.' },
            { front: 'Indépendance', back: 'P(A ∩ B) = P(A) × P(B).' },
          ],
        },
      ],
    },
    {
      id: 'math-c6',
      name: 'Chapitre 6 — Loi binomiale',
      short: 'Loi binomiale',
      keywords: 'épreuve de Bernoulli succès échec loi binomiale espérance n p',
      cours: [
        {
          h: 'L’épreuve de Bernoulli',
          points: [
            'Une **épreuve de Bernoulli** n’a que **deux issues** : le **succès** (probabilité p) et l’**échec** (probabilité 1 − p).',
            'On répète cette même épreuve **n fois**, de façon **identique** et **indépendante** : c’est un **schéma de Bernoulli**.',
            'Exemple : lancer une pièce truquée qui tombe sur pile (succès) avec p = 0,6, répété 10 fois.',
          ],
        },
        {
          h: 'La loi binomiale B(n ; p) et son espérance',
          points: [
            'Si X compte le **nombre de succès** sur les n épreuves du schéma, X suit la **loi binomiale B(n ; p)**.',
            'On calcule P(X = k), P(X ⩽ k) directement à la **calculatrice** (menu loi binomiale).',
            'L’**espérance** est **E(X) = n × p** : c’est le nombre moyen de succès attendu.',
          ],
        },
      ],
      formulas: ['E(X) = n × p pour X suivant B(n ; p)'],
      essentiel: [
        '**Épreuve de Bernoulli** : deux issues seulement, **succès (p)** / **échec (1 − p)**.',
        '**Loi binomiale B(n ; p)** : nombre de succès sur n épreuves **identiques et indépendantes**.',
        '**Espérance : E(X) = n × p**.',
      ],
      games: [
        { id: 'math-c6-calc-esp', type: 'calcul', title: 'Exercices — Espérance E(X)', icon: '✍️', gen: 'esperance_binomiale', count: 8 },
        { id: 'math-c6-calc-var', type: 'calcul', title: 'Exercices — Variance V(X)', icon: '✍️', gen: 'variance_binomiale', count: 6 },
        {
          id: 'math-c6-flash',
          type: 'flashcard',
          title: 'Flashcards — Formules',
          icon: '🃏',
          cards: [
            { front: 'Épreuve de Bernoulli', back: 'Expérience à deux issues : succès (p) / échec (1 − p).' },
            { front: 'Loi binomiale B(n ; p)', back: 'Nombre de succès sur n épreuves identiques et indépendantes.' },
            { front: 'Espérance E(X)', back: 'E(X) = n × p.' },
            { front: 'Variance V(X)', back: 'V(X) = n × p × (1 − p).' },
          ],
        },
      ],
    },
    {
      id: 'math-c7',
      name: 'Chapitre 7 — Loi normale et estimation',
      short: 'Loi normale',
      keywords: 'loi normale courbe en cloche moyenne écart-type intervalle de confiance estimation sondage',
      cours: [
        {
          h: 'Loi normale et estimation',
          points: [
            'Loi normale : courbe en cloche symétrique autour de μ, dispersion réglée par σ.',
            'Intervalle de confiance d’une proportion (niveau ~95 %). Applications : sondages, qualité.',
          ],
        },
      ],
      formulas: ['Courbe en cloche : symétrique autour de la moyenne μ, dispersion σ'],
      essentiel: [
        '**Loi normale** : courbe **en cloche** symétrique autour de la moyenne **μ**.',
        '**σ** (écart-type) règle la **dispersion** autour de μ.',
        '**Intervalle de confiance** : estime une **proportion** (niveau ~95 %) — sondages, contrôle qualité.',
      ],
      games: [
        { id: 'math-c7-calc-amp', type: 'calcul', title: 'Exercices — Amplitude de l’IC (2/√n)', icon: '✍️', gen: 'amplitude_ic', count: 8 },
        { id: 'math-c7-calc-borne', type: 'calcul', title: 'Exercices — Borne de l’intervalle', icon: '✍️', gen: 'borne_ic', count: 6 },
        {
          id: 'math-c7-flash',
          type: 'flashcard',
          title: 'Flashcards — Formules',
          icon: '🃏',
          cards: [
            { front: 'Loi normale', back: 'Courbe en cloche symétrique autour de la moyenne μ.' },
            { front: 'μ et σ', back: 'μ = moyenne (centre) ; σ = écart-type (dispersion).' },
            { front: 'Intervalle de confiance', back: '[f − 1/√n ; f + 1/√n] ; amplitude = 2/√n.' },
          ],
        },
      ],
    },
  ],
}
