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
          id: 'math-c1-qcm', type: 'qcm', title: 'QCM — Comprendre les évolutions', icon: '❓',
          questions: [
            { q: 'Une valeur passe de 200 à 250. Quel est le taux d’évolution ?', choices: ['+25 %', '+50 %', '+20 %', '+30 %'], answer: 0, explain: 't = (250 − 200) / 200 = 50/200 = 0,25 = +25 %.' },
            { q: 'À une hausse de 25 % correspond quel coefficient multiplicateur ?', choices: ['1,25', '0,25', '25', '0,75'], answer: 0, explain: 'CM = 1 + t = 1 + 0,25 = 1,25.' },
            { q: 'Pour deux évolutions successives, comment obtient-on l’évolution globale ?', choices: ['On multiplie les coefficients multiplicateurs', 'On additionne les deux taux', 'On fait la moyenne des taux', 'On soustrait les taux'], answer: 0, explain: 'CM global = produit des CM. On n’additionne JAMAIS les taux (+20 % puis +20 % ≠ +40 %).' },
            { q: 'Une hausse de 20 % suivie d’une baisse de 20 %, cela donne au total…', choices: ['Une baisse d’environ 4 %', 'Aucun changement', 'Une hausse de 4 %', 'Une baisse de 40 %'], answer: 0, explain: '1,20 × 0,80 = 0,96, soit une baisse de 4 % : les évolutions ne se compensent pas.' },
            { q: 'Un indice base 100 vaut 130. Cela signifie que la valeur a…', choices: ['Augmenté de 30 % depuis la référence', 'Été multipliée par 130', 'Baissé de 30 %', 'Augmenté de 130 %'], answer: 0, explain: 'Indice 130 pour une base 100 = +30 % par rapport à la valeur de référence.' },
          ],
        },
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
        {
          id: 'math-c2-qcm', type: 'qcm', title: 'QCM — Reconnaître une suite', icon: '❓',
          questions: [
            { q: 'Dans une suite ARITHMÉTIQUE, on passe d’un terme au suivant en…', choices: ['Ajoutant toujours la même raison r', 'Multipliant par la raison q', 'Ajoutant un nombre différent à chaque fois', 'Élevant au carré'], answer: 0, explain: 'Suite arithmétique : u_(n+1) = u_n + r (on ajoute r). Croissance linéaire.' },
            { q: 'Dans une suite GÉOMÉTRIQUE, on passe d’un terme au suivant en…', choices: ['Multipliant par la raison q', 'Ajoutant la raison r', 'Divisant par n', 'Ajoutant n'], answer: 0, explain: 'Suite géométrique : u_(n+1) = u_n × q. Croissance exponentielle.' },
            { q: 'Une augmentation de 5 % chaque année se modélise par une suite géométrique de raison…', choices: ['1,05', '0,05', '5', '0,95'], answer: 0, explain: 'Hausse de p % ⇒ q = 1 + p/100 = 1,05.' },
            { q: 'Une baisse de 8 % par an correspond à une raison q égale à…', choices: ['0,92', '1,08', '0,08', '8'], answer: 0, explain: 'Baisse de p % ⇒ q = 1 − p/100 = 1 − 0,08 = 0,92.' },
            { q: 'Le terme général d’une suite arithmétique de premier terme u₀ et de raison r est…', choices: ['u_n = u₀ + n·r', 'u_n = u₀ × r^n', 'u_n = u₀ + r^n', 'u_n = n·u₀'], answer: 0, explain: 'Arithmétique : u_n = u₀ + n·r. (Géométrique : u_n = u₀ × q^n.)' },
          ],
        },
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
        {
          id: 'math-c3-qcm', type: 'qcm', title: 'QCM — Comprendre la dérivée', icon: '❓',
          questions: [
            { q: 'Le nombre dérivé f’(a) représente…', choices: ['Le coefficient directeur de la tangente en a', 'L’image de a par f', 'L’aire sous la courbe', 'La valeur maximale de f'], answer: 0, explain: 'f’(a) est le coefficient directeur (la pente) de la tangente à la courbe au point d’abscisse a.' },
            { q: 'Si f’(x) > 0 sur un intervalle, alors sur cet intervalle f est…', choices: ['Croissante', 'Décroissante', 'Constante', 'Nulle'], answer: 0, explain: 'f’ > 0 ⇒ f croissante ; f’ < 0 ⇒ f décroissante.' },
            { q: 'La dérivée de f(x) = ax² + bx + c est…', choices: ['f’(x) = 2ax + b', 'f’(x) = ax + b', 'f’(x) = 2ax + b + c', 'f’(x) = x² + b'], answer: 0, explain: 'La dérivée de ax² est 2ax, celle de bx est b, celle de c est 0 ⇒ f’(x) = 2ax + b.' },
            { q: 'Un extremum (maximum ou minimum) de f est atteint quand…', choices: ['f’ s’annule en changeant de signe', 'f = 0', 'f’ est maximale', 'la tangente est verticale'], answer: 0, explain: 'C’est le principe de l’optimisation (coût minimal, bénéfice maximal) : f’ s’annule ET change de signe.' },
            { q: 'L’équation de la tangente à la courbe de f au point d’abscisse a est…', choices: ['y = f’(a)(x − a) + f(a)', 'y = f(a)(x − a) + f’(a)', 'y = f’(a)·x', 'y = f(a)·x + a'], answer: 0, explain: 'Formule de cours : y = f’(a)(x − a) + f(a).' },
          ],
        },
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
        {
          id: 'math-c4-qcm', type: 'qcm', title: 'QCM — Ajustement affine', icon: '❓',
          questions: [
            { q: 'Le point moyen G d’un nuage a pour coordonnées…', choices: ['(moyenne des x ; moyenne des y)', '(plus grand x ; plus grand y)', '(0 ; 0)', '(médiane des x ; médiane des y)'], answer: 0, explain: 'G a pour coordonnées la moyenne des abscisses et la moyenne des ordonnées : G(x̄ ; ȳ).' },
            { q: 'La droite d’ajustement affine s’obtient par la méthode…', choices: ['Des moindres carrés', 'De la médiane', 'Du produit en croix', 'De la dérivation'], answer: 0, explain: 'La méthode des moindres carrés minimise les écarts pour trouver y = ax + b (à la calculatrice).' },
            { q: 'Utiliser la droite d’ajustement pour prévoir une valeur À L’INTÉRIEUR de l’intervalle des données, c’est…', choices: ['Interpoler', 'Extrapoler', 'Arrondir', 'Moyenner'], answer: 0, explain: 'Interpoler = estimer entre des données connues ; extrapoler = au-delà.' },
            { q: 'Prévoir une valeur AU-DELÀ des données observées, c’est…', choices: ['Extrapoler', 'Interpoler', 'Ajuster', 'Corréler'], answer: 0, explain: 'Extrapoler = prolonger la tendance au-delà de l’intervalle (prévision plus risquée).' },
            { q: 'Une droite d’ajustement affine a pour équation…', choices: ['y = ax + b', 'y = ax² + bx + c', 'y = a/x', 'y = a^x'], answer: 0, explain: 'Un ajustement AFFINE est une droite : y = ax + b.' },
          ],
        },
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
        {
          id: 'math-c5-qcm', type: 'qcm', title: 'QCM — Conditionnelles & arbres', icon: '❓',
          questions: [
            { q: 'La probabilité conditionnelle P_A(B) (« B sachant A ») se calcule par…', choices: ['P(A ∩ B) / P(A)', 'P(A) × P(B)', 'P(A ∩ B) / P(B)', 'P(A) + P(B)'], answer: 0, explain: 'Par définition : P_A(B) = P(A ∩ B) / P(A).' },
            { q: 'Dans un arbre pondéré, les probabilités des branches issues d’un même nœud…', choices: ['Ont une somme égale à 1', 'Ont une somme égale à 0', 'Sont toujours égales', 'Se multiplient entre elles'], answer: 0, explain: 'La somme des branches partant d’un même nœud vaut toujours 1.' },
            { q: 'Pour trouver la probabilité d’un chemin (une suite de branches), on…', choices: ['Multiplie les probabilités le long des branches', 'Additionne les probabilités', 'Prend la plus grande', 'Divise par le nombre de branches'], answer: 0, explain: 'On multiplie le long d’un chemin ; on additionne les chemins qui mènent au même événement.' },
            { q: 'Deux événements A et B sont INDÉPENDANTS lorsque…', choices: ['P(A ∩ B) = P(A) × P(B)', 'P(A ∩ B) = 0', 'P(A) = P(B)', 'A et B sont incompatibles'], answer: 0, explain: 'Indépendance : la réalisation de l’un ne change pas la probabilité de l’autre ⇒ P(A ∩ B) = P(A) × P(B).' },
            { q: 'La formule des probabilités totales sert à…', choices: ['Calculer P(B) en additionnant tous les chemins qui mènent à B', 'Calculer une moyenne', 'Vérifier l’indépendance', 'Trouver P(A) sachant B'], answer: 0, explain: 'On somme les probabilités des différents chemins de l’arbre aboutissant à B.' },
          ],
        },
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
        {
          id: 'math-c6-qcm', type: 'qcm', title: 'QCM — Comprendre la loi binomiale', icon: '❓',
          questions: [
            { q: 'Une épreuve de Bernoulli est une expérience qui…', choices: ['N’a que deux issues : succès (p) et échec (1 − p)', 'A trois issues possibles', 'Se répète à l’infini', 'Donne toujours le même résultat'], answer: 0, explain: 'Bernoulli = deux issues seulement : succès de probabilité p, échec de probabilité 1 − p.' },
            { q: 'Si X suit la loi binomiale B(n ; p), alors X compte…', choices: ['Le nombre de succès sur les n épreuves', 'La probabilité d’un succès', 'Le nombre d’épreuves', 'La moyenne des résultats'], answer: 0, explain: 'X = nombre de succès obtenus en répétant n fois l’épreuve de Bernoulli.' },
            { q: 'Pour appliquer une loi binomiale, les n épreuves doivent être…', choices: ['Identiques et indépendantes', 'Toutes différentes', 'Dépendantes les unes des autres', 'Réalisées une seule fois'], answer: 0, explain: 'Schéma de Bernoulli : même épreuve répétée n fois de façon identique et indépendante.' },
            { q: 'L’espérance de X suivant B(n ; p) est…', choices: ['E(X) = n × p', 'E(X) = p / n', 'E(X) = n + p', 'E(X) = n × p × (1 − p)'], answer: 0, explain: 'E(X) = n × p : c’est le nombre moyen de succès attendu.' },
            { q: 'La variance de X suivant B(n ; p) est…', choices: ['V(X) = n × p × (1 − p)', 'V(X) = n × p', 'V(X) = p × (1 − p)', 'V(X) = n / p'], answer: 0, explain: 'V(X) = n × p × (1 − p) (l’écart-type est sa racine carrée).' },
          ],
        },
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
        {
          id: 'math-c7-qcm', type: 'qcm', title: 'QCM — Loi normale & estimation', icon: '❓',
          questions: [
            { q: 'La courbe représentant une loi normale est…', choices: ['Une courbe « en cloche » symétrique', 'Une droite', 'Une parabole', 'Une courbe croissante'], answer: 0, explain: 'La loi normale a une densité en forme de cloche, symétrique autour de la moyenne μ.' },
            { q: 'Le paramètre σ (écart-type) d’une loi normale règle…', choices: ['La dispersion autour de la moyenne', 'La position du centre', 'La hauteur maximale uniquement', 'Le nombre de valeurs'], answer: 0, explain: 'μ fixe le centre ; σ mesure la dispersion : plus σ est grand, plus la cloche est étalée.' },
            { q: 'La courbe de la loi normale est symétrique par rapport à…', choices: ['La moyenne μ', 'La valeur 0', 'L’écart-type σ', 'L’axe des abscisses'], answer: 0, explain: 'Elle est symétrique autour de sa moyenne μ.' },
            { q: 'Un intervalle de confiance (au niveau ~95 %) a pour amplitude…', choices: ['2/√n', '1/n', '√n', 'n/2'], answer: 0, explain: 'Intervalle [f − 1/√n ; f + 1/√n] : son amplitude vaut 2/√n (plus n est grand, plus il est précis).' },
            { q: 'Un intervalle de confiance sert à…', choices: ['Estimer une proportion à partir d’un échantillon', 'Calculer une moyenne exacte', 'Trouver le maximum d’une fonction', 'Ordonner des données'], answer: 0, explain: 'Il encadre la proportion inconnue de la population (sondages, contrôle qualité).' },
          ],
        },
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
