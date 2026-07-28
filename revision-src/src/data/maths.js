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
        {
          id: 'math-c1-calc-t',
          type: 'calcul',
          title: 'Calcul express — Taux d’évolution',
          icon: '⚡',
          gen: 'taux_evolution',
          count: 5,
        },
        {
          id: 'math-c1-calc-succ',
          type: 'calcul',
          title: 'Calcul express — Évolutions successives',
          icon: '⚡',
          gen: 'cm_successif',
          count: 5,
        },
        {
          id: 'math-c1-qcm',
          type: 'qcm',
          title: 'QCM — Informations chiffrées',
          icon: '❓',
          questions: [
            {
              q: 'Une valeur passe de 250 000 à 280 000. Taux d’évolution ?',
              choices: ['+12 %', '+30 %', '+8 %', '+3 %'],
              answer: 0,
              explain: 't = (280 000 − 250 000)/250 000 = 0,12 = +12 %.',
            },
            {
              q: 'Le coefficient multiplicateur associé à une hausse de 5 % est…',
              choices: ['1,05', '0,95', '5', '0,05'],
              answer: 0,
              explain: 'CM = 1 + t = 1 + 0,05 = 1,05.',
            },
            {
              q: '+12 % puis +5 %. CM global ?',
              choices: ['1,176', '1,17', '1,60', '0,60'],
              answer: 0,
              explain: 'CM global = 1,12 × 1,05 = 1,176, soit +17,6 %.',
            },
            {
              q: 'Le CM réciproque de 1,25 est…',
              choices: ['0,8', '1,25', '−0,25', '2,5'],
              answer: 0,
              explain: 'CM réciproque = 1/CM = 1/1,25 = 0,8.',
            },
          ],
        },
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
        {
          id: 'math-c2-calc',
          type: 'calcul',
          title: 'Calcul express — Suite géométrique',
          icon: '⚡',
          gen: 'suite_geo',
          count: 5,
        },
        {
          id: 'math-c2-qcm',
          type: 'qcm',
          title: 'QCM — Suites',
          icon: '❓',
          questions: [
            {
              q: 'Une valeur qui perd 8 % chaque année forme une suite…',
              choices: ['géométrique de raison 0,92', 'arithmétique de raison −8', 'géométrique de raison 8', 'constante'],
              answer: 0,
              explain: 'Baisse de 8 % → multiplication par 0,92 → suite géométrique de raison q = 0,92.',
            },
            {
              q: 'Pour une suite arithmétique, u_n = …',
              choices: ['u_0 + n·r', 'u_0 × q^n', 'u_0 − r', 'n × u_0'],
              answer: 0,
              explain: 'Suite arithmétique : u_n = u_0 + n·r (croissance linéaire).',
            },
            {
              q: 'u_0 = 20 000, q = 0,92. u_3 ≈ ?',
              choices: ['≈ 15 574 €', '≈ 16 400 €', '≈ 18 400 €', '≈ 20 000 €'],
              answer: 0,
              explain: 'u_3 = 20 000 × 0,92³ = 20 000 × 0,778688 ≈ 15 573,76 €.',
            },
            {
              q: 'Une suite géométrique modélise une croissance…',
              choices: ['exponentielle', 'linéaire', 'nulle', 'aléatoire'],
              answer: 0,
              explain: 'La suite géométrique correspond à une croissance (ou décroissance) exponentielle.',
            },
          ],
        },
        {
          id: 'math-c2-flash',
          type: 'flashcard',
          title: 'Flashcards — Suites',
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
        {
          id: 'math-c3-calc',
          type: 'calcul',
          title: 'Calcul express — Nombre dérivé',
          icon: '⚡',
          gen: 'derivee_affine',
          count: 5,
        },
        {
          id: 'math-c3-qcm',
          type: 'qcm',
          title: 'QCM — Dérivation',
          icon: '❓',
          questions: [
            {
              q: 'f(x) = −x² + 40x − 100. f’(x) = ?',
              choices: ['−2x + 40', '−x + 40', '2x − 40', '−2x − 100'],
              answer: 0,
              explain: 'f’(x) = −2x + 40.',
            },
            {
              q: 'f’(x) = −2x + 40 s’annule pour…',
              choices: ['x = 20', 'x = 40', 'x = 0', 'x = −20'],
              answer: 0,
              explain: '−2x + 40 = 0 ⇔ x = 20 : le bénéfice y est maximal.',
            },
            {
              q: 'Quand f’(x) > 0, la fonction est…',
              choices: ['croissante', 'décroissante', 'constante', 'négative'],
              answer: 0,
              explain: 'f’ > 0 ⇒ f croissante ; f’ < 0 ⇒ f décroissante.',
            },
            {
              q: 'f(x) = −x² + 40x − 100 : bénéfice maximal ?',
              choices: ['300 € (pour x = 20)', '400 € (pour x = 40)', '100 € (pour x = 10)', '0 € (pour x = 0)'],
              answer: 0,
              explain: 'f(20) = −400 + 800 − 100 = 300 €.',
            },
          ],
        },
        {
          id: 'math-c3-flash',
          type: 'flashcard',
          title: 'Flashcards — Dérivation',
          icon: '🃏',
          cards: [
            { front: 'Nombre dérivé f’(a)', back: 'Coefficient directeur de la tangente à la courbe en a.' },
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
        {
          id: 'math-c4-qcm',
          type: 'qcm',
          title: 'QCM — Stats à deux variables',
          icon: '❓',
          questions: [
            {
              q: 'La méthode des moindres carrés donne…',
              choices: ['la droite d’ajustement affine y = ax + b', 'la médiane', 'l’écart-type', 'le mode'],
              answer: 0,
              explain: 'Elle fournit la droite d’ajustement y = ax + b.',
            },
            {
              q: 'Le point moyen d’un nuage se note…',
              choices: ['G', 'M', 'O', 'P'],
              answer: 0,
              explain: 'Le point moyen G a pour coordonnées les moyennes de x et de y.',
            },
            {
              q: 'Prévoir une valeur au-delà des données connues, c’est…',
              choices: ['extrapoler', 'interpoler', 'arrondir', 'trier'],
              answer: 0,
              explain: 'Extrapoler = prévoir hors de l’intervalle des données ; interpoler = à l’intérieur.',
            },
          ],
        },
        {
          id: 'math-c4-flash',
          type: 'flashcard',
          title: 'Flashcards — Ajustement',
          icon: '🃏',
          cards: [
            { front: 'Point moyen G', back: 'Point de coordonnées (moyenne des x, moyenne des y).' },
            { front: 'Moindres carrés', back: 'Méthode qui minimise les écarts pour trouver y = ax + b.' },
            { front: 'Interpoler / extrapoler', back: 'Prévoir à l’intérieur / au-delà de l’intervalle des données.' },
          ],
        },
        {
          id: 'math-c4-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'La droite des moindres carrés passe par le point moyen G.', answer: true, explain: 'Vrai : la droite d’ajustement passe par G.' },
            { statement: 'Interpoler, c’est prévoir en dehors des données connues.', answer: false, explain: 'Faux : c’est extrapoler ; interpoler reste à l’intérieur.' },
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
        {
          id: 'math-c5-calc',
          type: 'calcul',
          title: 'Calcul express — Probabilités totales',
          icon: '⚡',
          gen: 'proba_totale',
          count: 5,
        },
        {
          id: 'math-c5-qcm',
          type: 'qcm',
          title: 'QCM — Probabilités conditionnelles',
          icon: '❓',
          questions: [
            {
              q: 'A : 60 % (2 % défauts) ; B : 40 % (5 % défauts). P(défectueuse) ?',
              choices: ['0,032', '0,07', '0,02', '0,05'],
              answer: 0,
              explain: 'P(D) = 0,60×0,02 + 0,40×0,05 = 0,012 + 0,020 = 0,032.',
            },
            {
              q: 'P(D) = 0,032 et P(B ∩ D) = 0,020. P_D(B) ?',
              choices: ['0,625', '0,320', '0,400', '0,050'],
              answer: 0,
              explain: 'P_D(B) = P(B ∩ D)/P(D) = 0,020/0,032 = 0,625.',
            },
            {
              q: 'La somme des probabilités des branches issues d’un nœud vaut…',
              choices: ['1', '0', '0,5', 'variable'],
              answer: 0,
              explain: 'Sur un arbre pondéré, les branches issues d’un même nœud somment à 1.',
            },
            {
              q: 'A et B sont indépendants si…',
              choices: ['P(A ∩ B) = P(A) × P(B)', 'P(A) = P(B)', 'P(A ∩ B) = 0', 'P(A) + P(B) = 1'],
              answer: 0,
              explain: 'Indépendance : P(A ∩ B) = P(A) × P(B).',
            },
          ],
        },
        {
          id: 'math-c5-flash',
          type: 'flashcard',
          title: 'Flashcards — Probabilités',
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
          h: 'Bernoulli et binomiale',
          points: [
            'Épreuve de Bernoulli (succès p / échec 1 − p), schéma de n épreuves identiques et indépendantes.',
            'Loi binomiale B(n ; p) ; espérance E(X) = n·p (calculs à la calculatrice).',
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
        {
          id: 'math-c6-calc',
          type: 'calcul',
          title: 'Calcul express — Espérance E(X)',
          icon: '⚡',
          gen: 'esperance_binomiale',
          count: 5,
        },
        {
          id: 'math-c6-qcm',
          type: 'qcm',
          title: 'QCM — Loi binomiale',
          icon: '❓',
          questions: [
            {
              q: 'Pour X ~ B(n ; p), l’espérance vaut…',
              choices: ['n × p', 'n + p', 'p / n', 'n − p'],
              answer: 0,
              explain: 'E(X) = n × p.',
            },
            {
              q: 'Une épreuve de Bernoulli a…',
              choices: ['deux issues : succès ou échec', 'trois issues', 'une infinité d’issues', 'aucune issue'],
              answer: 0,
              explain: 'Bernoulli : succès (p) ou échec (1 − p).',
            },
            {
              q: 'La loi binomiale suppose des épreuves…',
              choices: ['identiques et indépendantes', 'dépendantes', 'toutes différentes', 'sans hasard'],
              answer: 0,
              explain: 'B(n ; p) répète n épreuves de Bernoulli identiques et indépendantes.',
            },
            {
              q: 'X ~ B(20 ; 0,3). E(X) ?',
              choices: ['6', '3', '20', '0,3'],
              answer: 0,
              explain: 'E(X) = 20 × 0,3 = 6.',
            },
          ],
        },
        {
          id: 'math-c6-flash',
          type: 'flashcard',
          title: 'Flashcards — Binomiale',
          icon: '🃏',
          cards: [
            { front: 'Épreuve de Bernoulli', back: 'Expérience à deux issues : succès (p) / échec (1 − p).' },
            { front: 'Loi binomiale B(n ; p)', back: 'Nombre de succès sur n épreuves identiques et indépendantes.' },
            { front: 'Espérance E(X)', back: 'E(X) = n × p.' },
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
        {
          id: 'math-c7-qcm',
          type: 'qcm',
          title: 'QCM — Loi normale',
          icon: '❓',
          questions: [
            {
              q: 'La courbe de la loi normale est…',
              choices: ['une cloche symétrique autour de μ', 'une droite', 'en escalier', 'décroissante partout'],
              answer: 0,
              explain: 'C’est la courbe en cloche, symétrique autour de la moyenne μ.',
            },
            {
              q: 'σ (sigma) mesure…',
              choices: ['la dispersion', 'la moyenne', 'le maximum', 'la médiane'],
              answer: 0,
              explain: 'σ (écart-type) règle la dispersion autour de μ.',
            },
            {
              q: 'Un intervalle de confiance sert à…',
              choices: ['estimer une proportion (ex. sondage)', 'calculer la TVA', 'trier des données', 'dériver une fonction'],
              answer: 0,
              explain: 'Il encadre une proportion inconnue avec un niveau de confiance (~95 %).',
            },
          ],
        },
        {
          id: 'math-c7-flash',
          type: 'flashcard',
          title: 'Flashcards — Loi normale',
          icon: '🃏',
          cards: [
            { front: 'Loi normale', back: 'Courbe en cloche symétrique autour de la moyenne μ.' },
            { front: 'μ et σ', back: 'μ = moyenne (centre) ; σ = écart-type (dispersion).' },
            { front: 'Intervalle de confiance', back: 'Encadre une proportion estimée avec un niveau (~95 %).' },
          ],
        },
        {
          id: 'math-c7-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'La loi normale est symétrique autour de sa moyenne.', answer: true, explain: 'Vrai : la cloche est symétrique autour de μ.' },
            { statement: 'Un intervalle de confiance donne une valeur exacte et certaine.', answer: false, explain: 'Faux : il fournit une estimation avec un niveau de confiance.' },
          ],
        },
      ],
    },
  ],
}
