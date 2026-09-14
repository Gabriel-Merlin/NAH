// Enrichissement ADDITIF des cours (n'écrase rien) : exemples résolus pas à pas,
// sections complémentaires pour étoffer les cours courts, et ressources
// « Pour aller plus loin ». Fusionné dans index.js : les `sections` sont
// ajoutées à la fin du cours du thème, les `resources` à ses ressources.
//
// Format : { [themeId]: { sections?: [ { h, blocks:[...] } ], resources?: [ {label,url,kind,note} ] } }
// Blocs disponibles : p, list, table{head,rows}, formula, example{h,c}, tip{h,c}, warning{h,c}.

// Raccourci pour une section « exemple traité » lisible.
const worked = (h, blocks) => ({ h, blocks })

export const ENRICH = {
  // =========================================================================
  // MATHÉMATIQUES — TERMINALE
  // =========================================================================
  'math-c1': {
    sections: [worked('🧮 Exemple traité — évolutions et indice', [
      { t: 'example', h: 'Énoncé', c: 'Le chiffre d’affaires d’une entreprise passe de 80 000 € en 2023 à 92 000 € en 2024.\n1) Quel est le taux d’évolution 2023 → 2024 ?\n2) Le CA augmente encore de 15 % en 2025 : quelle est l’évolution globale 2023 → 2025 ?\n3) Donne l’indice base 100 (base 2023) du CA de 2024.' },
      { t: 'p', c: '**Résolution, étape par étape :**' },
      { t: 'list', c: [
        '**Taux** : t = (92 000 − 80 000) / 80 000 = 12 000 / 80 000 = **0,15 = +15 %**.',
        '**Coefficient multiplicateur** : CM = 1 + 0,15 = **1,15**.',
        '**Évolution globale** (deux hausses de 15 %) : CM global = 1,15 × 1,15 = **1,3225**, soit **+32,25 %** (et surtout pas +30 % : on multiplie les CM, on n’additionne pas les taux).',
        '**Indice** base 100 : (92 000 / 80 000) × 100 = **115** → l’indice 115 confirme le +15 %.',
      ] },
      { t: 'tip', h: 'Méthode', c: 'Toujours passer par le coefficient multiplicateur (CM = 1 + t) pour enchaîner des évolutions : c’est la source d’erreur n°1 au bac.' },
    ])],
  },
  'math-c2': {
    sections: [worked('🧮 Exemple traité — arithmétique vs géométrique', [
      { t: 'example', h: 'Énoncé', c: 'Une association compte 500 membres en 2024.\nScénario A : elle gagne 40 membres chaque année.\nScénario B : elle progresse de 6 % chaque année.\nCombien de membres dans 5 ans dans chaque scénario ?' },
      { t: 'p', c: '**Résolution :**' },
      { t: 'list', c: [
        '**Scénario A — suite arithmétique** de premier terme u₀ = 500 et de raison r = 40 : uₙ = 500 + 40n. Pour n = 5 : u₅ = 500 + 40 × 5 = **700 membres**.',
        '**Scénario B — suite géométrique** de raison q = 1,06 : uₙ = 500 × 1,06ⁿ. Pour n = 5 : u₅ = 500 × 1,06⁵ = 500 × 1,3382 ≈ **669 membres**.',
        'Après 5 ans A (700) dépasse B (669), mais la suite **géométrique** finit toujours par l’emporter (croissance exponentielle) : dès n = 9, B repasse devant.',
      ] },
      { t: 'tip', h: 'Repère', c: 'Hausse de p % ⇒ q = 1 + p/100 ; baisse de p % ⇒ q = 1 − p/100. « On ajoute » = arithmétique ; « on multiplie / en % » = géométrique.' },
    ])],
  },
  'math-c3': {
    sections: [worked('🧮 Exemple traité — dérivée, tangente, optimisation', [
      { t: 'example', h: 'Énoncé', c: 'Le coût de production (en milliers d’€) est modélisé par f(x) = x² − 6x + 10, où x est la quantité (en tonnes).\n1) Calcule f’(x).\n2) Étudie les variations et trouve la quantité qui minimise le coût.\n3) Donne l’équation de la tangente en x = 1.' },
      { t: 'p', c: '**Résolution :**' },
      { t: 'list', c: [
        '**Dérivée** : f’(x) = 2x − 6.',
        '**Variations** : f’(x) = 0 ⇔ x = 3. f’ < 0 avant 3 (coût décroissant), f’ > 0 après 3 (coût croissant) → **minimum en x = 3**, avec f(3) = 9 − 18 + 10 = **1** (soit 1 000 €).',
        '**Tangente en x = 1** : f’(1) = 2 − 6 = −4 et f(1) = 1 − 6 + 10 = 5, donc y = −4(x − 1) + 5 = **−4x + 9**.',
      ] },
      { t: 'tip', h: 'Optimiser', c: 'Minimiser un coût / maximiser un bénéfice = chercher où la dérivée s’annule EN CHANGEANT DE SIGNE. Le tableau de signes de f’ donne directement la réponse.' },
    ])],
  },
  'math-c4': {
    sections: [worked('🧮 Exemple traité — ajustement affine et prévision', [
      { t: 'example', h: 'Énoncé', c: 'Ventes (en milliers) d’un produit sur 5 ans :\nAnnée (x) : 1 · 2 · 3 · 4 · 5\nVentes (y) : 12 · 15 · 17 · 20 · 26\n1) Donne les coordonnées du point moyen G.\n2) La calculatrice donne y = 3,3x + 8,1. Prévois les ventes de l’année 6.' },
      { t: 'p', c: '**Résolution :**' },
      { t: 'list', c: [
        '**Point moyen G** : x̄ = (1+2+3+4+5)/5 = 3 ; ȳ = (12+15+17+20+26)/5 = 90/5 = 18 → **G(3 ; 18)**. (La droite d’ajustement passe toujours par G.)',
        '**Prévision année 6** (extrapolation) : y = 3,3 × 6 + 8,1 = 19,8 + 8,1 = **27,9 milliers**, soit environ **27 900 ventes**.',
      ] },
      { t: 'warning', h: 'Prudence', c: 'Extrapoler (au-delà des données) est plus risqué qu’interpoler : la tendance passée peut ne pas se poursuivre. À justifier en analyse.' },
    ])],
  },
  'math-c5': {
    sections: [worked('🧮 Exemple traité — arbre pondéré et probabilité conditionnelle', [
      { t: 'example', h: 'Énoncé', c: 'Une usine a deux machines. M1 fabrique 60 % des pièces, M2 les 40 % restants.\n3 % des pièces de M1 sont défectueuses, contre 5 % pour M2.\n1) Quelle est la probabilité qu’une pièce soit défectueuse ?\n2) Une pièce est défectueuse : quelle est la probabilité qu’elle vienne de M1 ?' },
      { t: 'p', c: '**Résolution avec l’arbre :** P(M1)=0,6 ; P(D|M1)=0,03 ; P(M2)=0,4 ; P(D|M2)=0,05.' },
      { t: 'list', c: [
        '**Probabilités totales** : P(D) = 0,6 × 0,03 + 0,4 × 0,05 = 0,018 + 0,020 = **0,038** (soit 3,8 %).',
        '**Conditionnelle** : P(M1|D) = P(M1 ∩ D) / P(D) = 0,018 / 0,038 ≈ **0,474**, soit **47,4 %**.',
      ] },
      { t: 'tip', h: 'Réflexe', c: 'On MULTIPLIE le long d’un chemin ; on ADDITIONNE les chemins qui mènent au même événement. La question « sachant que… » = probabilité conditionnelle.' },
    ])],
  },
  'math-c6': {
    sections: [worked('🧮 Exemple traité — loi binomiale', [
      { t: 'example', h: 'Énoncé', c: 'Un commercial conclut une vente avec une probabilité de 0,2 à chaque visite. Il effectue 10 visites indépendantes. On note X le nombre de ventes.\n1) Quelle loi suit X ?\n2) Combien de ventes en moyenne ?\n3) Quelle est la probabilité de ne conclure aucune vente, puis d’en conclure au moins une ?' },
      { t: 'p', c: '**Résolution :**' },
      { t: 'list', c: [
        'X compte les succès sur 10 épreuves identiques et indépendantes à deux issues → **X suit B(10 ; 0,2)**.',
        '**Espérance** : E(X) = n × p = 10 × 0,2 = **2 ventes** en moyenne.',
        '**Aucune vente** : P(X = 0) = 0,8¹⁰ ≈ **0,107**. Donc **au moins une** : P(X ⩾ 1) = 1 − 0,107 = **0,893** (≈ 89 %).',
      ] },
      { t: 'tip', h: 'Calculatrice', c: 'P(X = k) et P(X ⩽ k) se lisent directement au menu « loi binomiale ». « Au moins un » = 1 − P(aucun).' },
    ])],
  },
  'math-c7': {
    sections: [worked('🧮 Exemple traité — intervalle de confiance', [
      { t: 'example', h: 'Énoncé', c: 'Lors d’un sondage, sur 400 personnes interrogées, 220 se déclarent favorables à un projet.\n1) Quelle est la fréquence observée f ?\n2) Donne un intervalle de confiance de la proportion au niveau de confiance de 95 %.' },
      { t: 'p', c: '**Résolution :**' },
      { t: 'list', c: [
        '**Fréquence** : f = 220 / 400 = **0,55** (55 %).',
        '**Intervalle** : [f − 1/√n ; f + 1/√n] avec 1/√400 = 1/20 = 0,05 → IC = **[0,50 ; 0,60]**.',
        '**Amplitude** : 2/√n = **0,10** (10 points). Interprétation : on estime, avec 95 % de confiance, que la proportion réelle de la population est comprise entre **50 % et 60 %**.',
      ] },
      { t: 'tip', h: 'Précision', c: 'Plus l’échantillon n est grand, plus 2/√n est petit, donc plus l’estimation est précise (fourchette resserrée).' },
    ])],
  },

  // =========================================================================
  // MATHÉMATIQUES — PREMIÈRE
  // =========================================================================
  'p1-math-c1': {
    sections: [worked('🧮 Exemple traité — proportions et pourcentages', [
      { t: 'example', h: 'Énoncé', c: 'Dans un lycée de 750 élèves, 60 % sont des filles, et 25 % des filles sont en STMG.\n1) Combien de filles ?\n2) Combien de filles en STMG ?\n3) Un article à 40 € subit +5 % puis −5 %. Prix final ?' },
      { t: 'p', c: '**Résolution :**' },
      { t: 'list', c: [
        '**Filles** : 750 × 0,60 = **450 filles**.',
        '**Filles en STMG** : 450 × 0,25 = **112,5** → on arrondit à **112 ou 113** (pourcentage d’un sous-ensemble).',
        '**Prix final** : 40 × 1,05 × 0,95 = 40 × 0,9975 = **39,90 €** (une hausse puis une baisse du même taux ne se compensent pas exactement).',
      ] },
      { t: 'tip', h: 'À retenir', c: 'Prendre un pourcentage = multiplier par t/100. « Pourcentage de pourcentage » = on multiplie les coefficients.' },
    ])],
  },
  'p1-math-c2': {
    sections: [worked('🧮 Exemple traité — suites', [
      { t: 'example', h: 'Énoncé', c: 'Un capital de 2 000 € est placé à 3 % par an (intérêts composés).\n1) Quelle est la nature de la suite (Cₙ) des capitaux ?\n2) Calcule C₁ et C₂.\n3) Exprime Cₙ.' },
      { t: 'p', c: '**Résolution :**' },
      { t: 'list', c: [
        'Chaque année on **multiplie** par 1,03 → suite **géométrique** de raison q = 1,03, C₀ = 2 000.',
        'C₁ = 2 000 × 1,03 = **2 060 €** ; C₂ = 2 060 × 1,03 = **2 121,80 €**.',
        'Terme général : **Cₙ = 2 000 × 1,03ⁿ**.',
      ] },
      { t: 'tip', h: 'Repère', c: 'Intérêts composés, croissance en % → suite géométrique. Ajout d’un montant fixe → suite arithmétique.' },
    ])],
  },
  'p1-math-c3': {
    sections: [worked('🧮 Exemple traité — second degré', [
      { t: 'example', h: 'Énoncé', c: 'Résous l’équation x² − 5x + 6 = 0, puis étudie le signe de f(x) = x² − 5x + 6.' },
      { t: 'p', c: '**Résolution :**' },
      { t: 'list', c: [
        '**Discriminant** : Δ = b² − 4ac = (−5)² − 4 × 1 × 6 = 25 − 24 = **1** (> 0 → deux solutions).',
        '**Racines** : x = (5 ± √1) / 2 → x₁ = (5 − 1)/2 = **2** et x₂ = (5 + 1)/2 = **3**.',
        '**Signe** : a = 1 > 0, la parabole est « ouverte vers le haut » → f(x) > 0 à l’extérieur des racines (x < 2 ou x > 3), **négatif entre 2 et 3**.',
      ] },
      { t: 'tip', h: 'Astuce signe', c: '« Du signe de a à l’extérieur des racines, du signe opposé à l’intérieur. »' },
    ])],
  },
  'p1-math-c4': {
    sections: [worked('🧮 Exemple traité — dérivation', [
      { t: 'example', h: 'Énoncé', c: 'Soit f(x) = 2x² − 8x + 3.\n1) Calcule f’(x).\n2) Dresse le tableau de variations.\n3) Quel est le minimum de f ?' },
      { t: 'p', c: '**Résolution :**' },
      { t: 'list', c: [
        '**Dérivée** : f’(x) = 4x − 8.',
        '**Signe** : f’(x) = 0 ⇔ x = 2 ; f’ < 0 avant 2, f’ > 0 après → f décroît puis croît.',
        '**Minimum** en x = 2 : f(2) = 8 − 16 + 3 = **−5**.',
      ] },
      { t: 'tip', h: 'Lien', c: 'Le sommet d’une parabole correspond à f’(x) = 0 : dérivation et second degré racontent la même histoire.' },
    ])],
  },
  'p1-math-c5': {
    sections: [worked('🧮 Exemple traité — statistiques', [
      { t: 'example', h: 'Énoncé', c: 'Notes d’un élève : 8 · 10 · 12 · 12 · 13 · 15 · 18.\n1) Calcule la moyenne.\n2) Donne la médiane.\n3) Que dit l’étendue ?' },
      { t: 'p', c: '**Résolution :**' },
      { t: 'list', c: [
        '**Moyenne** : (8+10+12+12+13+15+18) / 7 = 88 / 7 ≈ **12,6**.',
        '**Médiane** : 7 valeurs ordonnées → la 4ᵉ valeur = **12** (autant de notes en dessous qu’au-dessus).',
        '**Étendue** : 18 − 8 = **10** (mesure la dispersion : écart entre la meilleure et la moins bonne note).',
      ] },
      { t: 'tip', h: 'Moyenne ≠ médiane', c: 'La médiane est peu sensible aux valeurs extrêmes, la moyenne l’est beaucoup : une très mauvaise note tire la moyenne vers le bas, pas la médiane.' },
    ])],
  },
  'p1-math-c6': {
    sections: [worked('🧮 Exemple traité — probabilités', [
      { t: 'example', h: 'Énoncé', c: 'On tire une carte dans un jeu de 32 cartes.\nA = « tirer un roi », B = « tirer un cœur ».\n1) P(A) et P(B) ?\n2) P(A ∩ B) ?\n3) P(A ∪ B) ?' },
      { t: 'p', c: '**Résolution :**' },
      { t: 'list', c: [
        '**P(A)** = 4/32 = 1/8 (4 rois) ; **P(B)** = 8/32 = 1/4 (8 cœurs).',
        '**P(A ∩ B)** = 1/32 (un seul roi de cœur).',
        '**P(A ∪ B)** = P(A) + P(B) − P(A ∩ B) = 4/32 + 8/32 − 1/32 = **11/32**.',
      ] },
      { t: 'tip', h: 'Formule clé', c: 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B) : on retire l’intersection comptée deux fois.' },
    ])],
  },
  'p1-math-c7': {
    sections: [worked('🐍 Exemple traité — un algorithme en Python', [
      { t: 'example', h: 'Énoncé', c: 'On veut une fonction qui calcule le capital après n années à 3 % (intérêts composés), à partir d’un capital de départ.' },
      { t: 'p', c: '**Programme commenté :**' },
      { t: 'formula', c: 'def capital(depart, annees):\n    c = depart\n    for i in range(annees):\n        c = c * 1.03      # +3 % chaque année\n    return round(c, 2)\n\nprint(capital(2000, 2))   # affiche 2121.8' },
      { t: 'list', c: [
        'La **boucle for** répète l’opération `annees` fois.',
        'La **variable c** est mise à jour à chaque tour (accumulation).',
        '`round(c, 2)` arrondit à 2 décimales ; `range(n)` compte de 0 à n − 1.',
      ] },
      { t: 'tip', h: 'Lien maths ↔ Python', c: 'Cette boucle calcule exactement une suite géométrique : Python automatise le calcul des termes.' },
    ])],
  },

  // =========================================================================
  // HISTOIRE-GÉOGRAPHIE — TERMINALE
  // =========================================================================
  'hg-h1': {
    sections: [worked('📝 Méthode + exemple — analyser un document de propagande', [
      { t: 'p', c: 'Au bac, on te demande souvent d’**analyser un document**. Une méthode en 4 temps : **présenter → décrire → expliquer (contexte) → prendre du recul**.' },
      { t: 'example', h: 'Document', c: 'Une affiche de propagande d’un régime totalitaire des années 1930 : le chef est représenté seul, en surplomb, au-dessus d’une foule en rangs serrés, avec les symboles du parti unique.' },
      { t: 'list', c: [
        '**Présenter** : nature = affiche de **propagande** ; émetteur = l’État / le parti unique ; date = années 1930 ; destinataire = toute la population.',
        '**Décrire** : le chef domine, la foule est encadrée et uniforme, les symboles rappellent le parti → mise en scène du **culte du chef**.',
        '**Expliquer** : c’est une caractéristique du **totalitarisme** (parti unique, idéologie officielle, embrigadement, terreur). L’image sert à obtenir l’adhésion et à supprimer l’individu au profit de la masse.',
        '**Prendre du recul** : c’est une source **orientée** (but de manipulation). On la recoupe avec d’autres documents pour ne pas confondre le message de propagande et la réalité historique.',
      ] },
      { t: 'tip', h: 'À réutiliser', c: 'Cette méthode « présenter → décrire → expliquer → critiquer » marche pour tout document (affiche, discours, photo, caricature).' },
    ])],
  },
  'hg-h2': {
    sections: [worked('📝 Exemple — analyser un texte de la Guerre froide', [
      { t: 'example', h: 'Document', c: 'Extrait d’un discours américain de 1947 annonçant une aide aux pays « menacés » par le communisme (esprit de la doctrine Truman).' },
      { t: 'list', c: [
        '**Présenter** : discours politique, chef d’État américain, 1947, début de la Guerre froide.',
        '**Analyser** : il oppose « monde libre » et « communisme » → logique de **blocs** et d’**endiguement** (containment).',
        '**Contexte** : la Guerre froide est un affrontement **indirect** (pas de guerre ouverte USA–URSS) mais total : idéologique, économique, militaire (course aux armements), spatial.',
        '**Recul** : source engagée (vision américaine) ; l’URSS répond par sa propre doctrine → toujours confronter les deux points de vue.',
      ] },
      { t: 'tip', h: 'Repère', c: 'Bipolaire (1947–1991) → après la chute de l’URSS, monde **multipolaire** (plusieurs pôles), pas « fin de l’histoire ».' },
    ])],
  },
  'hg-h3': {
    sections: [worked('📝 Exemple — la France depuis 1945 en une frise raisonnée', [
      { t: 'frise', title: 'Grandes ruptures politiques', events: [
        { date: '1946', label: 'IVᵉ République', note: 'instabilité gouvernementale' },
        { date: '1958', label: 'Vᵉ République', note: 'de Gaulle, pouvoir exécutif renforcé' },
        { date: '1962', label: 'Élection du président au suffrage universel direct' },
        { date: '1981', label: 'Alternance', note: 'première alternance gauche/droite sous la Vᵉ' },
      ] },
      { t: 'p', c: 'Pour une question sur la vie politique française, structure ta réponse autour de ces **ruptures** : instabilité de la IVᵉ → renforcement de l’exécutif sous la Vᵉ → démocratisation (suffrage universel, alternances, décentralisation).' },
      { t: 'tip', h: 'Méthode', c: 'Une frise bien choisie = une introduction déjà à moitié écrite : elle donne le plan chronologique.' },
    ])],
  },
  'hg-g1': {
    sections: [
      worked('🌍 L’essentiel — mers et océans, cœur de la mondialisation', [
        { t: 'p', c: 'Les mers et océans concentrent les **flux**, les **ressources** et les **tensions** de la mondialisation.' },
        { t: 'list', c: [
          '**Maritimisation** : environ **80 % du commerce mondial** de marchandises transite par la mer, grâce à la **conteneurisation** (standardisation des boîtes → transport massif et bon marché).',
          '**Routes stratégiques** et points de passage (« détroits » et canaux) : **Suez, Panama, Malacca, Ormuz, Gibraltar** — leur contrôle est un enjeu géopolitique majeur.',
          '**Façades maritimes** majeures : Asie de l’Est, Northern Range (Europe du Nord-Ouest), côtes américaines.',
          '**Ressources** : pêche, hydrocarbures offshore, **câbles sous-marins** (99 % des données mondiales), énergies marines.',
          '**Tensions** : rivalités (mer de Chine méridionale), piraterie, surpêche, pollution, montée des eaux.',
        ] },
      ]),
      worked('🌍 Étude de cas — le canal de Suez', [
        { t: 'example', h: 'Situation', c: 'Le canal de Suez (Égypte) relie la Méditerranée à la mer Rouge. Environ 10 % du commerce maritime mondial y transite. En mars 2021, l’échouage d’un porte-conteneurs géant (Ever Given) l’a bloqué plusieurs jours.' },
        { t: 'list', c: [
          '**Enjeu économique** : raccourci vital entre l’Asie et l’Europe (évite le tour de l’Afrique) → gain de temps et de coûts.',
          '**Vulnérabilité** : un seul incident bloque une part énorme du commerce → révèle la **dépendance** de la mondialisation à quelques passages.',
          '**Enjeu géopolitique** : qui contrôle le détroit contrôle une route stratégique → source de rivalités.',
        ] },
        { t: 'tip', h: 'Réutiliser', c: 'Un exemple précis (Suez, Ever Given, Malacca) rend une copie de géo concrète : cite-le pour illustrer « maritimisation » et « vulnérabilité ».' },
      ]),
    ],
  },
  'hg-g2': {
    sections: [worked('🌍 Étude de cas — la métropolisation', [
      { t: 'p', c: 'La **métropolisation** est la concentration croissante des populations, des activités et du pouvoir dans les grandes villes (métropoles).' },
      { t: 'list', c: [
        '**Concentration** : les métropoles rassemblent sièges sociaux, universités, recherche, services de haut niveau → elles commandent l’économie.',
        '**Mise en réseau** : elles sont reliées entre elles (transports, numérique) plus qu’à leur arrière-pays → un « archipel » mondial des grandes villes.',
        '**Inégalités** : la métropolisation **accentue** les écarts — entre métropoles et territoires « en marge », et à l’intérieur des villes (quartiers riches / quartiers en difficulté).',
      ] },
      { t: 'warning', h: 'Nuance attendue', c: 'Un territoire « en marge » n’est pas « vide » : il a ses propres dynamiques (tourisme, agriculture, industrie). À ne pas caricaturer.' },
    ])],
  },
  'hg-g3': {
    sections: [worked('🌍 L’essentiel — la France dans l’Union européenne et le monde', [
      { t: 'list', c: [
        '**Puissance** : la France est une puissance **complète** (économique, diplomatique, militaire, culturelle) et le 2ᵉ **domaine maritime** mondial (grâce à ses territoires ultramarins).',
        '**Dans l’UE** : membre fondateur, moteur de la construction européenne (avec l’Allemagne) ; l’UE est son premier partenaire commercial.',
        '**Rayonnement** : langue (francophonie), siège permanent au Conseil de sécurité de l’ONU, réseau diplomatique mondial.',
        '**Limites** : concurrence des puissances émergentes, débats sur la place dans la mondialisation.',
      ] },
      { t: 'tip', h: 'Argument clé', c: 'Insiste sur les **territoires ultramarins** : ils donnent à la France une présence sur tous les océans (ZEE immense).' },
    ])],
  },

  // =========================================================================
  // HISTOIRE-GÉOGRAPHIE — PREMIÈRE
  // =========================================================================
  'p1-hg-h1': {
    sections: [worked('📝 Exemple — la Révolution française, points de repère', [
      { t: 'frise', title: 'De la monarchie à l’Empire', events: [
        { date: '1789', label: 'Prise de la Bastille · Déclaration des droits de l’homme et du citoyen' },
        { date: '1792', label: 'Proclamation de la Ière République' },
        { date: '1799', label: 'Coup d’État de Bonaparte' },
        { date: '1804', label: 'Napoléon empereur · Code civil' },
      ] },
      { t: 'p', c: 'La Révolution met fin à la **monarchie absolue** et à la société d’ordres, et pose les principes de **liberté** et d’**égalité** (DDHC de 1789). L’Empire les prolonge sur certains points (Code civil) mais rétablit un pouvoir personnel fort.' },
      { t: 'tip', h: 'À maîtriser', c: 'Sache dater et expliquer 1789, 1792, 1804 : ce sont les repères attendus.' },
    ])],
  },
  'p1-hg-h2': {
    sections: [worked('📝 Exemple — la France industrielle au XIXᵉ siècle', [
      { t: 'example', h: 'Document', c: 'Une gravure d’usine du XIXᵉ siècle : hautes cheminées, machines à vapeur, ouvriers nombreux, longues journées de travail.' },
      { t: 'list', c: [
        '**Décrire** : concentration d’ouvriers, machines, énergie (charbon, vapeur) → **industrialisation**.',
        '**Expliquer** : naissance d’un nouveau monde du travail (usine, salariat, patronat) et de nouvelles inégalités (« question sociale »).',
        '**Mettre en perspective** : progrès techniques ET conditions de travail difficiles → à nuancer.',
      ] },
      { t: 'tip', h: 'Notion clé', c: 'Industrialisation → urbanisation → apparition de la classe ouvrière : une chaîne de causes à retenir.' },
    ])],
  },
  'p1-hg-h3': {
    sections: [worked('📝 Exemple — la Grande Guerre (1914-1918)', [
      { t: 'list', c: [
        '**Une guerre totale** : mobilisation des soldats **et** de l’arrière (économie, femmes à l’usine, propagande).',
        '**Une violence de masse** : guerre de tranchées, batailles meurtrières (Verdun, 1916), millions de morts.',
        '**Des conséquences durables** : bilan humain et matériel, traité de Versailles (1919), fragilisation des démocraties.',
      ] },
      { t: 'tip', h: 'Mot-clé', c: '« Guerre totale » = tout le pays et toutes ses ressources sont engagés, pas seulement l’armée.' },
    ])],
  },
  'p1-hg-g1': {
    sections: [worked('🌍 Étude de cas — la métropolisation en France', [
      { t: 'p', c: 'La **métropolisation** concentre populations, emplois qualifiés et pouvoir dans les grandes aires urbaines.' },
      { t: 'list', c: [
        '**Paris** domine (aire urbaine de plus de 12 millions d’habitants) : c’est une métropole de rang mondial.',
        'Quelques **métropoles régionales** (Lyon, Marseille, Toulouse, Lille, Bordeaux…) structurent le territoire.',
        '**Inégalités** : la métropolisation renforce l’écart avec les espaces ruraux et les villes petites/moyennes (« France périphérique »).',
      ] },
      { t: 'warning', h: 'Nuance', c: 'Les espaces ruraux ne sont pas condamnés : périurbanisation, tourisme, télétravail leur donnent de nouvelles dynamiques.' },
    ])],
  },
  'p1-hg-g2': {
    sections: [worked('🌍 L’essentiel — les espaces productifs français', [
      { t: 'list', c: [
        'Un **espace productif** = un espace aménagé pour produire (agricole, industriel ou de services).',
        '**Agricoles** : grandes plaines céréalières (Bassin parisien), vignobles, élevage → une agriculture productive et exportatrice.',
        '**Industriels** : recomposition (désindustrialisation de certaines régions, technopôles ailleurs).',
        '**De services** : de plus en plus dominants (tourisme, finance, numérique), surtout dans les métropoles.',
      ] },
      { t: 'tip', h: 'Idée forte', c: 'La France est de plus en plus une économie de **services** : les espaces productifs se recomposent autour des métropoles.' },
    ])],
  },
  'p1-hg-g3': {
    sections: [worked('🌍 L’essentiel — les espaces ruraux, multifonctionnels', [
      { t: 'list', c: [
        'Les espaces ruraux ne servent plus qu’à produire : ils sont **multifonctionnels** (agriculture, résidence, tourisme, nature).',
        '**Dynamiques** : certains gagnent des habitants (périurbanisation, cadre de vie) ; d’autres se dépeuplent (« diagonale du vide »).',
        '**Enjeux** : accès aux services publics, mobilités, préservation de l’environnement.',
      ] },
      { t: 'tip', h: 'Mot-clé', c: '« Multifonctionnalité » : un même espace rural remplit plusieurs rôles à la fois.' },
    ])],
  },

  // =========================================================================
  // SPÉCIALITÉS — RESSOURCES « pour aller plus loin »
  // =========================================================================
  'mkg-t1': { sections: [worked('🛍️ Exemple — comprendre un achat', [
    { t: 'example', h: 'Cas', c: 'Un client achète un smartphone haut de gamme d’une grande marque, plus cher que les autres.' },
    { t: 'list', c: [
      '**Motivation** (pousse à l’achat) : besoin d’estime, image de soi (motivation d’auto-expression).',
      '**Frein** (retient) : le prix élevé (frein financier), la peur de se tromper (risque perçu).',
      '**Besoin** (Maslow) : ici un besoin d’**estime**, pas seulement un besoin fonctionnel.',
    ] },
    { t: 'tip', h: 'Rôle du marketing', c: 'Le marketing cherche à renforcer les motivations et à lever les freins (garantie, facilités de paiement).' },
  ])], resources: [
    { label: 'Lumni — vidéos d’économie-gestion', url: 'https://www.lumni.fr/', kind: 'video', note: 'Cherche « marketing », « besoins », « consommation ».' },
    { label: 'CNIL — données personnelles des consommateurs', url: 'https://www.cnil.fr/', kind: 'link', note: 'Ce que dit la loi sur la collecte des données clients.' },
  ] },
  'mkg-t2': { sections: [worked('🛍️ Exemple — segmenter, cibler, positionner', [
    { t: 'example', h: 'Cas', c: 'Une marque lance une nouvelle boisson énergisante.' },
    { t: 'list', c: [
      '**Segmentation** : découper le marché (âge, mode de vie, sportifs…).',
      '**Ciblage** : choisir le segment « jeunes actifs sportifs ».',
      '**Positionnement** : l’image voulue (« énergie naturelle et saine ») pour se distinguer des concurrents.',
    ] },
    { t: 'tip', h: '3 étapes distinctes', c: 'Segmenter (découper) → cibler (choisir) → positionner (image). On ne les confond pas.' },
  ])], resources: [
    { label: 'INSEE — études de marché & données', url: 'https://www.insee.fr/fr/statistiques', kind: 'doc', note: 'Segmenter un marché avec de vraies données (CSP, âge, région).' },
    { label: 'Lumni — le marché et la concurrence', url: 'https://www.lumni.fr/', kind: 'video' },
  ] },
  'mkg-t3': { sections: [worked('🛍️ Exemple — la cohérence des 4P', [
    { t: 'example', h: 'Cas', c: 'Une marque de montres de luxe.' },
    { t: 'list', c: [
      '**Produit** : haut de gamme, finitions soignées.',
      '**Prix** : élevé (cohérent avec l’image).',
      '**Distribution** : boutiques sélectives, pas en supermarché.',
      '**Communication** : magazines haut de gamme, ambassadeurs.',
    ] },
    { t: 'tip', h: 'Cohérence', c: 'Un prix « premium » avec une distribution « discount » serait incohérent : les 4P forment un tout.' },
  ])], resources: [
    { label: 'Lumni — les 4P et la stratégie commerciale', url: 'https://www.lumni.fr/', kind: 'video', note: 'Produit, prix, distribution, communication.' },
    { label: 'economie.gouv.fr — fixation des prix, soldes, promotions', url: 'https://www.economie.gouv.fr/', kind: 'link' },
  ] },
  'mkg-t4': { sections: [worked('🛍️ Exemple — mercatique numérique & données', [
    { t: 'example', h: 'Cas', c: 'Un site e-commerce recommande des produits à partir de l’historique d’achat.' },
    { t: 'list', c: [
      'Les **données clients** permettent de personnaliser l’offre (recommandations, publicités ciblées).',
      'Leur collecte est encadrée par le **RGPD** : consentement, base légale, droit à l’effacement.',
      'Attention au **greenwashing** : un argument « écologique » doit être vrai et prouvé.',
    ] },
    { t: 'tip', h: 'Éthique', c: 'La donnée personnelle n’est pas une marchandise comme une autre : la loi protège le consommateur.' },
  ])], resources: [
    { label: 'CNIL — marketing numérique & cookies', url: 'https://www.cnil.fr/', kind: 'link', note: 'Consentement, ciblage publicitaire, RGPD.' },
    { label: 'ADEME — publicité responsable / anti-greenwashing', url: 'https://www.ademe.fr/', kind: 'link' },
  ] },
  'rh-t1': { sections: [worked('🧑‍💼 Exemple — motiver et développer les compétences', [
    { t: 'example', h: 'Cas', c: 'Un manager veut impliquer davantage son équipe.' },
    { t: 'list', c: [
      '**Facteurs de motivation** (Herzberg) : reconnaissance, responsabilités, intérêt du travail.',
      '**Facteurs d’hygiène** : salaire, conditions — leur absence démotive, mais leur présence seule ne motive pas durablement.',
      '**Compétence** = savoir + savoir-faire + savoir-être ; elle se démontre **en situation**.',
    ] },
    { t: 'tip', h: 'Piège', c: 'Motivation ≠ satisfaction : on peut être satisfait (bien payé) sans être motivé, et inversement.' },
  ])], resources: [
    { label: 'travail-emploi.gouv.fr — contrat, compétences, formation', url: 'https://travail-emploi.gouv.fr/', kind: 'link' },
    { label: 'Lumni — motivation et management', url: 'https://www.lumni.fr/', kind: 'video', note: 'Maslow, Herzberg, la motivation au travail.' },
  ] },
  'rh-t2': { sections: [worked('🧑‍💼 Cas — gérer un conflit', [
    { t: 'example', h: 'Situation', c: 'Deux salariés se disputent en permanence sur la répartition des tâches.' },
    { t: 'list', c: [
      '**Identifier la source** : ici un conflit d’**organisation** (répartition), pas seulement de personnes.',
      '**Modes de résolution** : négociation directe, puis médiation (un tiers aide) ou arbitrage (un tiers tranche).',
      'Bien géré, un conflit peut être **constructif** (il clarifie les rôles).',
    ] },
    { t: 'tip', h: 'À distinguer', c: 'Médiation = le tiers aide à trouver un accord ; arbitrage = le tiers impose la solution.' },
  ])], resources: [
    { label: 'Lumni — groupes, cohésion et conflits', url: 'https://www.lumni.fr/', kind: 'video' },
    { label: 'service-public.fr — représentants du personnel & dialogue social', url: 'https://www.service-public.fr/', kind: 'link' },
  ] },
  'rh-t3': { sections: [worked('🧑‍💼 Exemple — une communication efficace', [
    { t: 'example', h: 'Situation', c: 'Une note de service importante n’est pas comprise par les équipes.' },
    { t: 'list', c: [
      'Schéma : **émetteur → message → canal → récepteur**. Ici, un **bruit** (jargon, mauvais canal) a gêné la compréhension.',
      'Améliorer : message clair, bon canal (réunion plutôt que mail ?), et un **retour** (feedback) pour vérifier.',
      'Distinguer communication **interne** (salariés) et **externe** (clients, partenaires).',
    ] },
    { t: 'tip', h: 'Voir le schéma', c: 'Le « Schéma du thème » illustre l’émetteur, le message, le canal, le récepteur et le bruit.' },
  ])], resources: [
    { label: 'Lumni — la communication dans l’organisation', url: 'https://www.lumni.fr/', kind: 'video', note: 'Émetteur, message, canal, récepteur, bruit.' },
  ] },
  'rh-t4': { sections: [worked('🧑‍💼 Exemple — coût du travail & climat social', [
    { t: 'example', h: 'Cas', c: 'Un salarié touche 1 800 € net ; l’entreprise, elle, dépense bien plus pour ce poste.' },
    { t: 'list', c: [
      '**Coût employeur** = salaire net + cotisations salariales + **cotisations patronales** → bien supérieur au net perçu.',
      '**Climat social** : ne se mesure pas qu’au turnover ; on regarde aussi l’absentéisme, les conflits, les enquêtes de satisfaction.',
    ] },
    { t: 'tip', h: 'À retenir', c: 'Le coût pour l’employeur est très supérieur au salaire net : n’oublie pas les charges patronales.' },
  ])], resources: [
    { label: 'travail-emploi.gouv.fr — rémunération & conditions de travail', url: 'https://travail-emploi.gouv.fr/', kind: 'link' },
    { label: 'INSEE — emploi, salaires, climat social', url: 'https://www.insee.fr/fr/statistiques', kind: 'doc' },
  ] },
  'sig-t1': { sections: [worked('💻 Exemple — le système d’information à l’œuvre', [
    { t: 'example', h: 'Cas', c: 'Un client passe commande sur un site : la commande, le stock, la facturation et la livraison doivent rester cohérents.' },
    { t: 'list', c: [
      'Un **SI** collecte, stocke, traite et **diffuse** l’information entre les services.',
      'Avec un **PGI/ERP** (base de données **unique**), la commande met à jour le stock, la compta et la logistique **sans ressaisie**.',
      'Résultat : moins d’erreurs, information fiable et partagée en temps réel.',
    ] },
    { t: 'tip', h: 'Clé', c: 'PGI = un seul logiciel, une seule base → l’information saisie une fois est disponible partout.' },
  ])], resources: [
    { label: 'Lumni — système d’information & numérique', url: 'https://www.lumni.fr/', kind: 'video' },
  ] },
  'sig-t2': { sections: [worked('💻 Exemple — écrire une requête SQL', [
    { t: 'example', h: 'Besoin', c: 'Table Client(id_client, nom, ville). On veut le nom des clients de Lyon, classés par ordre alphabétique.' },
    { t: 'formula', c: "SELECT nom\nFROM Client\nWHERE ville = 'Lyon'\nORDER BY nom ;" },
    { t: 'list', c: [
      '**SELECT** choisit les colonnes ; **FROM** la table ; **WHERE** filtre les lignes ; **ORDER BY** trie.',
      "Pour compter : SELECT COUNT(*) FROM Client WHERE ville = 'Lyon' ;",
    ] },
    { t: 'tip', h: 'Piège', c: 'WHERE filtre AVANT regroupement, HAVING filtre APRÈS un GROUP BY. Et n’oublie jamais la condition de jointure entre deux tables.' },
  ])], resources: [
    { label: 'SQL.sh — cours et exercices SQL en français', url: 'https://sql.sh/', kind: 'link', note: 'SELECT, WHERE, jointures, GROUP BY : la référence pour s’entraîner.' },
  ] },
  'sig-t3': { sections: [worked('💻 Exemple — le travail collaboratif', [
    { t: 'example', h: 'Cas', c: 'Trois élèves rédigent un dossier ensemble, à distance.' },
    { t: 'list', c: [
      'Un **espace partagé** (cloud) permet d’écrire à plusieurs sur le même document.',
      'L’**historique des versions** évite de perdre le travail ou de s’écraser mutuellement.',
      'Le **numérique** transforme l’organisation : plus de collaboration, mais des enjeux (droits d’accès, sécurité).',
    ] },
    { t: 'tip', h: 'Bon réflexe', c: 'Définir qui peut lire / modifier (droits d’accès) est essentiel dès qu’on partage.' },
  ])], resources: [
    { label: 'Lumni — travail collaboratif & outils numériques', url: 'https://www.lumni.fr/', kind: 'video' },
  ] },
  'sig-t4': { sections: [worked('💻 Exemple — sécuriser le système d’information', [
    { t: 'example', h: 'Cas', c: 'Un employé reçoit un mail « urgent » lui demandant son mot de passe.' },
    { t: 'list', c: [
      'C’est une tentative d’**hameçonnage (phishing)** : on ne donne **jamais** son mot de passe par mail.',
      'La sécurité repose sur la **DICP** : Disponibilité, Intégrité, Confidentialité, Preuve (traçabilité).',
      'Mesures : mot de passe **fort**, **sauvegardes** régulières, droits d’accès, sensibilisation.',
    ] },
    { t: 'tip', h: 'À retenir', c: 'La sécurité n’est pas que technique : la vigilance humaine est la première protection.' },
  ])], resources: [
    { label: 'Cybermalveillance.gouv.fr — sécurité & bonnes pratiques', url: 'https://www.cybermalveillance.gouv.fr/', kind: 'link', note: 'Mots de passe, sauvegardes, hameçonnage.' },
    { label: 'CNIL — protection des données (RGPD)', url: 'https://www.cnil.fr/', kind: 'link' },
  ] },
  'eco-actu': { resources: [
    { label: 'INSEE — les chiffres à jour (croissance, chômage, inflation)', url: 'https://www.insee.fr/fr/statistiques', kind: 'doc', note: 'La source officielle pour vérifier les chiffres avant de les citer.' },
    { label: 'Banque de France — ABC de l’économie', url: 'https://abc-economie.banque-france.fr/', kind: 'link', note: 'Fiches courtes et fiables sur les grandes notions d’actualité.' },
    { label: 'Vie-publique.fr — politiques économiques', url: 'https://www.vie-publique.fr/', kind: 'link' },
  ], sections: [worked('🗞️ Exemple — relier une actu au cours', [
    { t: 'example', h: 'Situation', c: 'Aux informations : « l’inflation ralentit à 2 % et la Banque centrale ajuste ses taux d’intérêt ».' },
    { t: 'list', c: [
      '**Nommer la notion** : inflation (hausse générale des prix), politique monétaire (taux d’intérêt).',
      '**Relier au cours** : rôle de la Banque centrale, action de l’État sur l’économie.',
      '**Analyser** : cause (demande, énergie…) → conséquence (pouvoir d’achat) → réponse (hausse des taux pour freiner l’inflation).',
    ] },
    { t: 'tip', h: 'Méthode copie', c: 'Ne retiens pas le chiffre exact (il change) : retiens la **tendance** et **vérifie** sur l’INSEE. Un exemple d’actu bien relié au cours = des points en plus.' },
  ])] },

  // =========================================================================
  // LANGUES — ressources + méthode de compréhension
  // =========================================================================
  'lng-en-gram': { resources: [{ label: 'Lingolia English — grammaire (règles + exercices)', url: 'https://english.lingolia.com/en/grammar', kind: 'link' }, { label: 'BBC Learning English', url: 'https://www.bbc.co.uk/learningenglish', kind: 'video' }] },
  'lng-en-voc': { resources: [{ label: 'BBC Learning English — vocabulary', url: 'https://www.bbc.co.uk/learningenglish', kind: 'video' }] },
  'lng-en-verbs': { resources: [{ label: 'Lingolia — irregular verbs (liste + exercices)', url: 'https://english.lingolia.com/en/grammar/verbs/irregular-verbs', kind: 'link' }] },
  'lng-en-grammar-ex': { resources: [{ label: 'Lingolia English — exercices de grammaire', url: 'https://english.lingolia.com/en/grammar', kind: 'link' }] },
  'lng-en-comp': {
    resources: [{ label: 'BBC Learning English — 6 Minute English', url: 'https://www.bbc.co.uk/learningenglish', kind: 'video', note: 'S’entraîner à comprendre un texte / un audio.' }],
    sections: [worked('📖 Méthode — comprendre un texte en anglais', [
      { t: 'list', c: [
        '**Repère d’abord** le titre, la source et la date : ils donnent le thème.',
        '**Ne bloque pas sur chaque mot** : devine le sens grâce au contexte et aux mots transparents (information, situation…).',
        '**Cherche les mots-clés** (qui ? quoi ? où ? quand ? pourquoi ?) et les connecteurs (but, because, however, so).',
        '**Reformule** chaque paragraphe en une phrase, en français puis en anglais.',
      ] },
      { t: 'tip', h: 'ETLV / STMG', c: 'Le dictionnaire intégré 📖 traduit aussi les phrases : sers-t’en pour vérifier, pas pour tout traduire mot à mot.' },
    ])],
  },
  'lng-es-gram': { resources: [{ label: 'Lingolia Español — gramática (reglas + ejercicios)', url: 'https://espanol.lingolia.com/es/gramatica', kind: 'link' }] },
  'lng-es-voc': { resources: [{ label: 'Lingolia Español — vocabulario', url: 'https://espanol.lingolia.com/es/vocabulario', kind: 'link' }] },
  'lng-es-verbs': { resources: [{ label: 'Lingolia — verbos irregulares (conjugación)', url: 'https://espanol.lingolia.com/es/gramatica/verbos', kind: 'link' }] },
  'lng-es-grammar-ex': { resources: [{ label: 'Lingolia Español — ejercicios', url: 'https://espanol.lingolia.com/es/gramatica', kind: 'link' }] },
  'lng-es-comp': {
    resources: [{ label: 'Lingolia Español — comprensión & gramática', url: 'https://espanol.lingolia.com/es', kind: 'link' }],
    sections: [worked('📖 Méthode — comprendre un texte en espagnol', [
      { t: 'list', c: [
        '**Repère** le titre, la source, la date → le thème.',
        '**Appuie-toi sur les mots transparents** (información, situación, economía) et le contexte.',
        '**Attention aux faux-amis** (ex. « éxito » = succès, pas sortie) et aux connecteurs (pero, porque, sin embargo).',
        '**Reformule** chaque paragraphe en une phrase simple.',
      ] },
      { t: 'tip', h: 'Astuce', c: 'Les terminaisons des verbes indiquent la personne et le temps : identifie-les pour comprendre qui fait quoi et quand.' },
    ])],
  },

  // =========================================================================
  // PREMIÈRE — exemples (management, économie, français)
  // =========================================================================
  'p1-mgmt-t1': {
    sections: [worked('💼 Exemple traité — reconnaître une organisation', [
      { t: 'example', h: 'Cas', c: 'Une association sportive de quartier organise des tournois gratuits, financés par les cotisations et une subvention de la mairie.' },
      { t: 'list', c: [
        '**Type d’organisation** : c’est une **organisation à but non lucratif** (association), pas une entreprise (elle ne cherche pas le profit).',
        '**Finalité** (raison d’être durable) : proposer une activité sportive accessible à tous.',
        '**Objectif** (précis, mesurable) : « organiser 4 tournois cette année ». On ne confond pas finalité et objectif.',
        '**Ressources** : humaines (bénévoles), financières (cotisations, subvention), matérielles (terrain).',
      ] },
      { t: 'tip', h: 'Piège classique', c: 'Finalité = pourquoi l’organisation existe (durable) ; objectif = un but précis, chiffré et daté.' },
    ])],
  },
  'p1-mgmt-t2': {
    sections: [worked('💼 Exemple traité — un diagnostic SWOT', [
      { t: 'example', h: 'Cas', c: 'Une petite chaîne de boulangeries locales bien connue veut se développer face à l’arrivée d’une grande enseigne.' },
      { t: 'table', head: ['Interne', 'Externe'], rows: [
        ['**Forces** : notoriété locale, qualité, savoir-faire', '**Opportunités** : goût pour le « fait maison », circuits courts'],
        ['**Faiblesses** : peu de moyens financiers, peu digitalisée', '**Menaces** : concurrence de la grande enseigne, hausse du coût des matières'],
      ] },
      { t: 'p', c: 'Le **diagnostic interne** (forces/faiblesses) porte sur l’entreprise ; le **diagnostic externe** (opportunités/menaces) sur son environnement. Croiser les deux = le **SWOT**.' },
      { t: 'tip', h: 'Décision', c: 'La stratégie consiste à s’appuyer sur les forces pour saisir les opportunités et se protéger des menaces.' },
    ])],
  },
  'p1-mgmt-t3': {
    sections: [worked('💼 Exemple traité — choix stratégiques', [
      { t: 'example', h: 'Cas', c: 'Un fabricant de vélos hésite : baisser ses prix pour vendre plus, ou proposer des vélos haut de gamme personnalisés.' },
      { t: 'list', c: [
        '**Domination par les coûts** : prix bas grâce à des coûts réduits (volumes, standardisation) → viser un large marché.',
        '**Différenciation** : une offre unique (qualité, design, personnalisation) que le client accepte de payer plus cher.',
        '**Spécialisation** (rester sur les vélos) vs **diversification** (proposer aussi des trottinettes) : question de périmètre d’activité.',
      ] },
      { t: 'tip', h: 'À justifier', c: 'Il n’y a pas de « bonne » réponse universelle : le choix dépend des ressources de l’entreprise et de son marché.' },
    ])],
  },
  'p1-eco-t4': {
    sections: [worked('💶 Exemple traité — comment se financer ?', [
      { t: 'example', h: 'Cas', c: 'Une PME veut acheter une nouvelle machine à 100 000 €. Comment financer cet investissement ?' },
      { t: 'list', c: [
        '**Financement interne** (autofinancement) : utiliser ses bénéfices mis en réserve → pas de dette, mais épuise la trésorerie.',
        '**Financement externe direct** : émettre des actions/obligations (surtout pour les grandes entreprises) → se financer sur les marchés.',
        '**Financement externe indirect** : emprunter auprès d’une **banque** (crédit) → solution la plus courante pour une PME, mais coût des intérêts.',
      ] },
      { t: 'tip', h: 'À retenir', c: 'Direct = passer par les marchés financiers ; indirect = passer par une banque (intermédiaire).' },
    ])],
  },
  'p1-fr-3': {
    sections: [worked('✒️ Exemple traité — repérer une figure de style', [
      { t: 'example', h: 'Phrase', c: '« Cette ville est une fourmilière où chacun court sans se voir. »' },
      { t: 'list', c: [
        '**Identifier** : « une fourmilière » compare la ville à un nid de fourmis sans outil de comparaison → c’est une **métaphore**.',
        '**Expliquer l’effet** : elle souligne l’agitation, la foule, l’anonymat de la vie urbaine.',
        '**Nommer d’autres figures utiles** : comparaison (avec « comme »), personnification, hyperbole (exagération), anaphore (répétition en début de phrase).',
      ] },
      { t: 'tip', h: 'Méthode commentaire', c: 'Une figure de style ne se contente pas de se nommer : dis toujours **quel effet** elle produit sur le sens.' },
    ])],
  },
  'p1-fr-4': {
    sections: [worked('🎤 Exemple — réussir l’oral de français (EAF)', [
      { t: 'list', c: [
        '**Lecture** du texte à voix haute (soigne le rythme et la ponctuation).',
        '**Explication linéaire** : suivre le texte dans l’ordre en montrant comment il produit du sens (mouvements, procédés).',
        '**Question de grammaire** posée par l’examinateur.',
        '**Entretien** sur une œuvre choisie : présente-la, défends ton avis, sois précis.',
      ] },
      { t: 'tip', h: 'Conseil', c: 'Prépare une phrase d’introduction et une de conclusion par texte : ce sont les moments qui rassurent et qui font la meilleure impression.' },
    ])],
  },

  // =========================================================================
  // GESTION ET FINANCE — exemples chiffrés
  // =========================================================================
  'gf-t1': {
    sections: [worked('🧮 Exemple traité — TVA et enregistrement', [
      { t: 'example', h: 'Énoncé', c: 'Une entreprise achète des marchandises : 2 000 € HT, TVA au taux de 20 %.\n1) Calcule la TVA et le montant TTC.\n2) Comment l’opération est-elle enregistrée (principe de la partie double) ?' },
      { t: 'list', c: [
        '**TVA** = 2 000 × 0,20 = **400 €** ; **TTC** = 2 000 + 400 = **2 400 €**.',
        '**Partie double** : on **débite** « Achats » (2 000) et « TVA déductible » (400), on **crédite** « Fournisseurs » (2 400). Débit = Crédit = 2 400 → l’équilibre est respecté.',
        'La **TVA n’est pas une charge** : la TVA déductible est une **créance sur l’État** (l’entreprise la récupère).',
      ] },
      { t: 'tip', h: 'Réflexe', c: 'À chaque écriture : total des débits = total des crédits. Si ça ne tombe pas juste, il y a une erreur.' },
    ])],
  },
  'gf-t2': {
    sections: [worked('🧮 Exemple traité — FRNG, BFR, trésorerie', [
      { t: 'example', h: 'Énoncé', c: 'Ressources stables = 500 000 € ; emplois stables (immobilisations) = 420 000 €.\nStocks + créances = 150 000 € ; dettes d’exploitation = 90 000 €.\nCalcule le FRNG, le BFR et la trésorerie nette.' },
      { t: 'list', c: [
        '**FRNG** = ressources stables − emplois stables = 500 000 − 420 000 = **80 000 €**.',
        '**BFR** = (stocks + créances) − dettes d’exploitation = 150 000 − 90 000 = **60 000 €**.',
        '**Trésorerie nette** = FRNG − BFR = 80 000 − 60 000 = **20 000 €** (> 0 : l’équilibre financier est sain).',
      ] },
      { t: 'tip', h: 'Interprétation', c: 'Trésorerie = FRNG − BFR. Une trésorerie négative (FRNG < BFR) n’est pas une faillite, mais un déséquilibre à financer.' },
    ])],
  },
  'gf-t3': {
    sections: [worked('🧮 Exemple traité — seuil de rentabilité', [
      { t: 'example', h: 'Énoncé', c: 'CA = 200 000 € ; charges variables = 120 000 € ; charges fixes = 50 000 €.\n1) Calcule la marge sur coût variable et son taux.\n2) Détermine le seuil de rentabilité.\n3) Quel est le résultat ?' },
      { t: 'list', c: [
        '**MCV** = CA − charges variables = 200 000 − 120 000 = **80 000 €** ; **taux de MCV** = 80 000 / 200 000 = **0,40**.',
        '**Seuil de rentabilité** = charges fixes / taux de MCV = 50 000 / 0,40 = **125 000 € de CA** (à partir de ce CA, l’entreprise couvre toutes ses charges).',
        '**Résultat** = MCV − charges fixes = 80 000 − 50 000 = **30 000 €**.',
      ] },
      { t: 'tip', h: 'Au seuil', c: 'Au seuil de rentabilité, le résultat est **nul** (pas la marge) : la MCV couvre exactement les coûts fixes.' },
    ])],
  },

  // =========================================================================
  // MANAGEMENT (Terminale) — exemples
  // =========================================================================
  'mgmt-t1': {
    sections: [worked('💼 Exemple traité — caractériser une organisation', [
      { t: 'example', h: 'Cas', c: 'Une entreprise privée fabrique et vend des vélos électriques ; un hôpital public soigne des patients ; une association distribue des repas.' },
      { t: 'table', head: ['Organisation', 'Finalité', 'Production'], rows: [
        ['Entreprise (vélos)', 'Réaliser un **profit**', 'Biens marchands'],
        ['Hôpital public', 'Service public (santé)', 'Services non marchands'],
        ['Association', 'Cause / intérêt général', 'Services non marchands'],
      ] },
      { t: 'p', c: 'On caractérise une organisation par son **type**, sa **finalité**, sa **production** (marchande/non marchande) et ses **ressources**.' },
      { t: 'tip', h: 'Piège', c: 'Toutes les organisations ne cherchent pas le profit : ne confonds pas finalité (raison d’être) et objectif (but précis).' },
    ])],
  },
  'mgmt-t2': {
    sections: [worked('💼 Exemple traité — diagnostic et avantage concurrentiel', [
      { t: 'example', h: 'Cas', c: 'Une marque de cosmétiques bio, reconnue pour sa qualité, fait face à l’arrivée de grands groupes sur le marché du « naturel ».' },
      { t: 'list', c: [
        '**Diagnostic interne** — forces : image « bio » forte, savoir-faire ; faiblesses : petite taille, budget limité.',
        '**Diagnostic externe** — opportunités : marché du naturel en croissance ; menaces : grands concurrents, matières premières plus chères.',
        '**Avantage concurrentiel** : sa réputation « bio authentique » est **rare et difficile à imiter** → à protéger et à mettre en avant.',
      ] },
      { t: 'tip', h: 'SWOT', c: 'Interne = forces/faiblesses (l’entreprise) ; externe = opportunités/menaces (l’environnement). Une ressource devient un avantage seulement si elle est rare et difficile à copier.' },
    ])],
  },
  'mgmt-t3': {
    sections: [worked('💼 Exemple traité — parties prenantes et RSE', [
      { t: 'example', h: 'Cas', c: 'Une entreprise textile envisage de délocaliser sa production pour réduire ses coûts.' },
      { t: 'list', c: [
        '**Parties prenantes** : salariés (emploi menacé), actionnaires (rentabilité), clients (prix, éthique), territoire (fermeture d’usine).',
        'La **RSE** invite à intégrer les enjeux **sociaux et environnementaux** à la décision, pas seulement le coût.',
        'Le **numérique** est une opportunité (productivité) **et** un risque (cybersécurité, dépendance) : à nuancer.',
      ] },
      { t: 'tip', h: 'Nuance attendue', c: 'La RSE n’est pas de la philanthropie : c’est une stratégie qui concilie performance économique et responsabilité.' },
    ])],
  },

  // =========================================================================
  // DROIT (Terminale) — cas pratiques (syllogisme juridique)
  // =========================================================================
  'droit-t5': {
    sections: [worked('⚖️ Cas pratique — la validité du contrat', [
      { t: 'example', h: 'Situation', c: 'Un mineur de 16 ans achète seul, à crédit, une voiture. Le vendeur exige le paiement. Le contrat est-il valable ?' },
      { t: 'list', c: [
        '**Règle de droit (majeure)** : un contrat n’est valable que si les conditions sont réunies : consentement, **capacité juridique**, contenu licite et certain.',
        '**Faits (mineure)** : l’acheteur est **mineur**, donc juridiquement **incapable** de conclure seul un tel contrat.',
        '**Application** : une condition de validité (la capacité) manque.',
        '**Conclusion** : le contrat encourt la **nullité** (il peut être annulé).',
      ] },
      { t: 'tip', h: 'Méthode', c: 'Cas pratique = **syllogisme** : règle de droit → faits → application → conclusion. C’est la structure attendue au bac.' },
    ])],
  },
  'droit-t6': {
    sections: [worked('⚖️ Cas pratique — la responsabilité civile', [
      { t: 'example', h: 'Situation', c: 'Un livreur, en reculant son camion, brise la vitrine d’un magasin. Le commerçant peut-il être indemnisé ?' },
      { t: 'list', c: [
        '**Règle** : la responsabilité civile suppose trois éléments réunis : **fait générateur + dommage + lien de causalité**.',
        '**Faits** : fait générateur = la manœuvre du camion ; dommage = la vitrine brisée ; lien = la manœuvre a causé le bris.',
        '**Application** : les trois conditions sont réunies.',
        '**Conclusion** : la responsabilité est engagée → le commerçant a droit à **réparation** (indemnisation du préjudice).',
      ] },
      { t: 'tip', h: 'À distinguer', c: 'Responsabilité **civile** = réparer (indemniser) ; responsabilité **pénale** = punir. Ici, il s’agit d’indemniser.' },
    ])],
  },
  'droit-t7': {
    sections: [worked('⚖️ Cas pratique — le licenciement', [
      { t: 'example', h: 'Situation', c: 'Un salarié en CDI est licencié au motif que « son responsable ne l’apprécie pas ». Ce licenciement est-il régulier ?' },
      { t: 'list', c: [
        '**Règle** : tout licenciement doit reposer sur une **cause réelle et sérieuse** (motif objectif, vérifiable et suffisamment grave).',
        '**Faits** : le motif invoqué est une simple **antipathie**, ni objective ni sérieuse.',
        '**Application** : la cause réelle et sérieuse fait défaut.',
        '**Conclusion** : le licenciement est **sans cause réelle et sérieuse** (abusif) → le salarié peut obtenir des indemnités.',
      ] },
      { t: 'tip', h: 'Repère', c: 'Le CDI est la norme ; le CDD est l’exception, encadrée et motivée. La rupture suit des procédures strictes.' },
    ])],
  },
  'droit-t8': {
    sections: [worked('⚖️ Cas pratique — choisir une forme juridique', [
      { t: 'example', h: 'Situation', c: 'Un entrepreneur veut lancer son activité tout en protégeant son patrimoine personnel en cas de dettes. Que lui conseiller ?' },
      { t: 'list', c: [
        '**Règle** : en **entreprise individuelle**, l’entrepreneur et l’entreprise ne forment qu’une personne (patrimoine plus exposé). En **société** (SARL, SAS), la société est une **personne morale** distincte : le patrimoine est séparé et la responsabilité est **limitée aux apports**.',
        '**Application** : pour protéger son patrimoine personnel, il faut séparer les patrimoines.',
        '**Conclusion** : créer une **société à responsabilité limitée** (SARL/SAS) est la solution adaptée.',
      ] },
      { t: 'tip', h: 'À retenir', c: 'La **propriété industrielle** (brevet, marque) protège l’innovation ; ne la confonds pas avec le droit d’auteur.' },
    ])],
  },

  // =========================================================================
  // ÉCONOMIE (Terminale) — raisonnements et calculs
  // =========================================================================
  'eco-t6': {
    sections: [worked('💶 Exemple — pourquoi et comment l’État intervient', [
      { t: 'example', h: 'Situation', c: 'En période de fort chômage, faut-il que l’État intervienne dans l’économie ?' },
      { t: 'list', c: [
        '**Allouer** : l’État produit des **biens publics** (routes, école, défense) que le marché ne fournit pas seul.',
        '**Redistribuer** : impôts et prestations réduisent les inégalités.',
        '**Stabiliser** : face au chômage, il peut soutenir l’activité (dépense publique, baisse d’impôts) → politique de relance.',
      ] },
      { t: 'warning', h: 'Nuance', c: 'L’intervention a un coût (déficit, dette). Ne confonds pas **déficit** (flux annuel) et **dette** (stock accumulé).' },
    ])],
  },
  'eco-t7': {
    sections: [worked('💶 Exemple chiffré — le taux de chômage', [
      { t: 'example', h: 'Énoncé', c: 'Population active = 30 millions ; nombre de chômeurs = 2,4 millions. Calcule le taux de chômage.' },
      { t: 'list', c: [
        '**Taux de chômage** = chômeurs / population active = 2,4 / 30 = 0,08 = **8 %**.',
        'Rappel : un **chômeur au sens du BIT** est **sans emploi, disponible et à la recherche active** d’un emploi.',
        'À ne pas confondre avec le **taux d’emploi** (part des personnes en emploi dans la population en âge de travailler).',
      ] },
      { t: 'tip', h: 'Attention', c: 'Un **inactif** (étudiant, retraité) n’est pas un chômeur : il ne fait pas partie de la population active.' },
    ])],
  },
  'eco-t8': {
    sections: [worked('💶 Exemple chiffré — la balance commerciale', [
      { t: 'example', h: 'Énoncé', c: 'Un pays exporte pour 500 milliards € et importe pour 560 milliards €. Que peut-on dire de sa balance commerciale ?' },
      { t: 'list', c: [
        '**Solde commercial** = exportations − importations = 500 − 560 = **−60 milliards €**.',
        'Le solde est **négatif** → la balance commerciale est **déficitaire** (on importe plus qu’on n’exporte).',
        '**Nuance** : le libre-échange fait des gagnants **et** des perdants → réponse à nuancer (théorie vs réalité sociale).',
      ] },
      { t: 'tip', h: 'Signe', c: 'Garde le **signe** : déficit = solde négatif, excédent = solde positif.' },
    ])],
  },
  'eco-t9': {
    sections: [worked('💶 Exemple — croissance, développement, soutenabilité', [
      { t: 'example', h: 'Situation', c: 'Un pays affiche une forte croissance du PIB, mais une pollution qui augmente et des inégalités qui se creusent. Est-ce un vrai « progrès » ?' },
      { t: 'list', c: [
        '**Croissance** = augmentation quantitative de la production (PIB) ; **développement** = amélioration qualitative des conditions de vie (mesurée par l’**IDH**).',
        'La pollution est une **externalité négative** : le marché seul ne la corrige pas → intervention publique nécessaire.',
        '**Soutenabilité** : une croissance n’est durable que si elle préserve l’environnement et les générations futures.',
      ] },
      { t: 'tip', h: 'À distinguer', c: 'PIB (richesse marchande) ≠ bien-être : il ignore les inégalités, l’environnement et le travail non rémunéré → d’où l’IDH.' },
    ])],
  },

  // =========================================================================
  // PHILOSOPHIE — méthode
  // =========================================================================
  'philo-notions': {
    sections: [worked('🤔 Méthode — analyser une notion (ex. la liberté)', [
      { t: 'list', c: [
        '**Définir** : donner le sens courant, puis le sens philosophique (être libre = faire ce que l’on veut ? ou se donner ses propres règles ?).',
        '**Distinguer** : liberté / licence (faire n’importe quoi) ; liberté / déterminisme (sommes-nous déterminés ?).',
        '**Problématiser** : la vraie liberté est-elle l’absence de contraintes, ou l’obéissance à des règles que l’on se donne (autonomie) ?',
        '**Illustrer** : un exemple concret ou un auteur (ex. « on n’est pas libre de ne pas être libre », Sartre).',
      ] },
      { t: 'tip', h: 'Réflexe', c: 'Une notion se travaille toujours en la **distinguant** d’une notion voisine : c’est ce qui fait la profondeur d’une copie de philo.' },
    ])],
  },
  'philo-methode': {
    sections: [worked('🤔 Méthode — construire une dissertation', [
      { t: 'list', c: [
        '**Analyser le sujet** : définir chaque mot, repérer le problème (ce qui n’est pas évident).',
        '**Problématique** : transformer le sujet en une vraie question (« peut-on… ? faut-il… ? »).',
        '**Plan dialectique** : I. Thèse (oui, parce que…) — II. Antithèse (mais…) — III. Dépassement (en réalité…).',
        '**Argumenter** : chaque partie = une idée + un argument + un exemple (ou un auteur).',
      ] },
      { t: 'tip', h: 'Conseil', c: 'L’introduction (amener le sujet → problématique → annonce du plan) et la conclusion (réponse claire) sont ce que le correcteur lit le plus attentivement.' },
    ])],
  },

  // =========================================================================
  // PREMIÈRE — Sciences de gestion et numérique
  // =========================================================================
  'p1-sgn-t1': {
    sections: [worked('💼 Exemple — de l’individu à l’acteur', [
      { t: 'example', h: 'Cas', c: 'Dans un restaurant, Léa est serveuse : elle prend les commandes, conseille les clients et forme les nouveaux.' },
      { t: 'list', c: [
        '**Statut** : sa position dans l’organisation (salariée, serveuse).',
        '**Rôle** : le comportement attendu (accueillir, servir, conseiller) → elle devient un **acteur** par ce qu’elle fait.',
        '**Compétences** : savoir (les plats), savoir-faire (le service), savoir-être (le relationnel).',
      ] },
      { t: 'tip', h: 'Piège', c: 'On ne réduit pas une personne à son statut : c’est par son **rôle** et ses **compétences** qu’elle agit dans l’organisation.' },
    ])],
  },
  'p1-sgn-t2': {
    sections: [worked('💻 Exemple — de la donnée à la connaissance', [
      { t: 'example', h: 'Cas', c: 'Une caisse enregistre « 14/03, produit A, 3 unités, 12 € ».' },
      { t: 'list', c: [
        '**Donnée** : brute, isolée (« 3 », « 12 € »).',
        '**Information** : la donnée mise en contexte (« le 14/03, on a vendu 3 unités de A pour 12 € »).',
        '**Connaissance** : mobilisable pour décider (« A se vend surtout le week-end → réassortir »).',
        'Un **PGI/ERP** relie tout via une **base de données unique** → l’information circule sans ressaisie.',
      ] },
      { t: 'tip', h: 'À retenir', c: 'Donnée → information → connaissance : chaque étape ajoute du sens et de l’utilité.' },
    ])],
  },
  'p1-sgn-t3': {
    sections: [worked('💼 Exemple — valeur et performance', [
      { t: 'example', h: 'Cas', c: 'Un artisan vend un meuble 800 €. Le bois et les fournitures lui ont coûté 300 €.' },
      { t: 'list', c: [
        '**Valeur ajoutée** = valeur de la production − consommations intermédiaires = 800 − 300 = **500 €** (la richesse réellement créée).',
        '**Efficacité** : atteindre l’objectif (le meuble est vendu).',
        '**Efficience** : l’atteindre en économisant les moyens (moins de chutes de bois, moins de temps).',
      ] },
      { t: 'tip', h: 'Ne pas confondre', c: 'Efficacité = le résultat est atteint ; efficience = il est atteint **au meilleur coût**.' },
    ])],
  },
  'p1-sgn-t4': {
    sections: [worked('💼 Exemple — temps et risque', [
      { t: 'example', h: 'Cas', c: 'Une entreprise investit 50 000 € dans une machine qui doit rapporter davantage… mais seulement dans quelques années.' },
      { t: 'list', c: [
        '**Le temps** : un investissement engage l’avenir ; le gain est différé, pas immédiat.',
        '**Le risque** : la machine peut tomber en panne, la demande peut baisser → le résultat est incertain.',
        'Décider, c’est **arbitrer** entre un coût certain aujourd’hui et un gain incertain demain.',
      ] },
      { t: 'tip', h: 'Idée clé', c: 'Toute décision de gestion se prend dans l’incertitude : on cherche à réduire le risque, pas à le supprimer.' },
    ])],
  },

  // =========================================================================
  // PREMIÈRE — Droit
  // =========================================================================
  'p1-droit-t1': {
    sections: [worked('⚖️ Exemple — droit et règle de droit', [
      { t: 'example', h: 'Situation', c: 'Griller un feu rouge : est-ce une faute morale ou juridique ? Quelle différence ?' },
      { t: 'list', c: [
        'La **règle de droit** est **générale, obligatoire et sanctionnée** par l’État (amende, retrait de points).',
        'La **morale**, elle, n’est pas sanctionnée par l’État (seulement par la conscience).',
        '**Droit objectif** = l’ensemble des règles ; **droits subjectifs** = les prérogatives d’une personne (ex. droit de propriété).',
      ] },
      { t: 'tip', h: 'À distinguer', c: 'Ce qui caractérise le droit : la **sanction organisée par l’État**. C’est ce qui le sépare de la morale.' },
    ])],
  },
  'p1-droit-t2': {
    sections: [worked('⚖️ Exemple — le litige et sa résolution', [
      { t: 'example', h: 'Situation', c: 'Un client n’est pas livré malgré son paiement : un litige naît avec le vendeur.' },
      { t: 'list', c: [
        '**Les parties** : le demandeur (le client) et le défendeur (le vendeur).',
        '**Modes de résolution** : à l’amiable (négociation, médiation, conciliation) ou en justice (procès).',
        '**La preuve** : « qui allègue un fait doit le prouver » (facture, contrat, mails).',
      ] },
      { t: 'tip', h: 'Réflexe', c: 'Avant le procès, on privilégie les modes **amiables** (plus rapides et moins coûteux).' },
    ])],
  },
  'p1-droit-t3': {
    sections: [worked('⚖️ Exemple — les personnes juridiques', [
      { t: 'example', h: 'Cas', c: 'Une jeune femme de 25 ans crée une entreprise sous forme de société.' },
      { t: 'list', c: [
        '**Personne physique** : un être humain, doté de la personnalité juridique de la naissance à la mort.',
        '**Personne morale** : un groupement (société, association) qui a sa propre existence juridique.',
        '**Capacité** : à 25 ans, elle est majeure et capable → elle peut contracter seule.',
      ] },
      { t: 'tip', h: 'À retenir', c: 'La société est une **personne morale** : son patrimoine est distinct de celui de ses associés.' },
    ])],
  },
  'p1-droit-t4': {
    sections: [worked('⚖️ Exemple — les droits des personnes', [
      { t: 'example', h: 'Cas', c: 'Une personne possède une maison (bien) et a droit au respect de sa vie privée.' },
      { t: 'list', c: [
        '**Droits patrimoniaux** : ils ont une valeur en argent et peuvent se vendre/transmettre (propriété, créances).',
        '**Droits extrapatrimoniaux** : ils n’ont pas de prix et sont attachés à la personne (droit à la vie privée, à l’image, au nom).',
        'Les seconds sont **incessibles** : on ne peut pas les vendre.',
      ] },
      { t: 'tip', h: 'À distinguer', c: 'Patrimonial = « chiffrable et cessible » ; extrapatrimonial = « attaché à la personne, non monnayable ».' },
    ])],
  },

  // =========================================================================
  // PREMIÈRE — Économie
  // =========================================================================
  'p1-eco-t1': {
    sections: [worked('💶 Exemple — rareté et choix économiques', [
      { t: 'example', h: 'Situation', c: 'Avec un budget de 50 €, un étudiant hésite entre des livres et des sorties.' },
      { t: 'list', c: [
        '**Rareté** : les ressources (ici l’argent) sont limitées face à des besoins illimités.',
        '**Choix & coût d’opportunité** : choisir les livres, c’est renoncer aux sorties (ce à quoi on renonce = coût d’opportunité).',
        '**Les agents** (ménages, entreprises, État) font tous des choix sous contrainte de ressources.',
      ] },
      { t: 'tip', h: 'Idée fondatrice', c: 'L’économie étudie comment des agents font des **choix** face à la **rareté**.' },
    ])],
  },
  'p1-eco-t2': {
    sections: [worked('💶 Exemple chiffré — la valeur ajoutée', [
      { t: 'example', h: 'Énoncé', c: 'Une boulangerie produit pour 300 000 € de pain sur l’année. Elle a acheté pour 110 000 € de farine, d’énergie et de fournitures.' },
      { t: 'list', c: [
        '**Valeur ajoutée** = production − consommations intermédiaires = 300 000 − 110 000 = **190 000 €**.',
        'La VA mesure la **richesse réellement créée** (pas le chiffre d’affaires).',
        'La somme des VA de toutes les entreprises d’un pays = le **PIB**.',
      ] },
      { t: 'tip', h: 'Piège', c: 'Ne confonds pas production (300 000) et valeur ajoutée (190 000) : on retire ce qui a été acheté à d’autres (les consommations intermédiaires).' },
    ])],
  },
  'p1-eco-t3': {
    sections: [worked('💶 Exemple — la répartition des revenus', [
      { t: 'example', h: 'Situation', c: 'Un salarié gagne 1 800 € net, touche des allocations et paie des impôts.' },
      { t: 'list', c: [
        '**Revenus primaires** : issus de la production — du travail (salaire) ou du capital (loyers, dividendes, intérêts).',
        '**Redistribution** : l’État prélève (impôts, cotisations) et verse des **prestations** (allocations, retraites) → revenu disponible.',
        'Objectif : réduire les **inégalités** et couvrir les risques sociaux.',
      ] },
      { t: 'tip', h: 'Formule', c: 'Revenu disponible = revenus primaires + prestations reçues − prélèvements obligatoires.' },
    ])],
  },
  'p1-eco-t5': {
    sections: [worked('💶 Exemple — le marché et le prix d’équilibre', [
      { t: 'example', h: 'Situation', c: 'Sur un marché, quand le prix d’un produit baisse, les acheteurs sont plus nombreux mais les vendeurs moins motivés.' },
      { t: 'list', c: [
        '**Demande** : elle **augmente** quand le prix baisse (courbe décroissante).',
        '**Offre** : elle **augmente** quand le prix monte (courbe croissante).',
        '**Prix d’équilibre** : là où offre = demande. Ce n’est pas l’État qui le fixe (marché concurrentiel).',
        '**Élasticité** : mesure la sensibilité de la demande au prix (garde le signe, raisonne en %).',
      ] },
      { t: 'tip', h: 'Voir le schéma', c: 'Le « Schéma du thème » (offre/demande) illustre exactement ce point d’équilibre.' },
    ])],
  },

  // =========================================================================
  // PREMIÈRE — Français (EAF)
  // =========================================================================
  'p1-fr-1': {
    sections: [worked('✒️ Méthode — construire un commentaire', [
      { t: 'list', c: [
        '**Lire et repérer les mouvements** du texte (ses grandes étapes de sens).',
        '**Analyser les procédés** (figures, ponctuation, champs lexicaux) → toujours dire **quel effet** ils produisent.',
        '**Bâtir un plan** : 2 ou 3 axes de lecture (ex. « un portrait élogieux » / « une critique voilée »).',
        '**Rédiger** : chaque paragraphe = une idée + une citation + une analyse.',
      ] },
      { t: 'tip', h: 'Erreur à éviter', c: 'Ne pas paraphraser (redire le texte). Le commentaire **explique comment** le texte produit du sens.' },
    ])],
  },
  'p1-fr-2': {
    sections: [worked('✒️ Méthode — contraction & essai', [
      { t: 'list', c: [
        '**Contraction** : réduire le texte (souvent au **quart**) en gardant les idées et l’ordre, sans citer ni commenter.',
        'Rester **fidèle** : ne rien ajouter, ne rien juger ; reformuler avec ses propres mots.',
        '**Essai** : donner un avis **argumenté** sur une question liée au texte, avec des exemples.',
        'Compter ses mots : le respect du nombre de mots est noté.',
      ] },
      { t: 'tip', h: 'Piège', c: 'Contraction = fidélité (pas d’avis) ; essai = argumentation (ton avis, justifié). Ne mélange pas les deux exercices.' },
    ])],
  },
}
