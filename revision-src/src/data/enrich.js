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
  // PHILOSOPHIE — cours longs : histoire de la notion, littérature & arts,
  // dissertation guidée. Ces sections s'ajoutent aux 3 chapitres de base de
  // chaque notion, pour un cours véritablement approfondi (plusieurs pages).
  // =========================================================================
  'philo-art': {
    sections: [
      worked('🏛️ Aux sources — une histoire de l’idée d’art', [
        { t: 'p', c: 'Le mot « art » vient du latin *ars*, qui traduit le grec *tekhnê* : à l’origine, il ne désigne pas du tout ce que nous appelons aujourd’hui l’art, mais tout **savoir-faire**, toute compétence réglée — celle du menuisier comme celle du médecin ou du navigateur. Pendant des siècles, le peintre et le sculpteur furent considérés comme des **artisans**, membres de corporations, exécutant des commandes. L’idée moderne d’un « artiste » singulier, créateur inspiré et libre, est une invention récente, née à la **Renaissance** et pleinement affirmée au **XIXᵉ siècle** avec le romantisme.' },
        { t: 'p', c: 'Dès l’Antiquité, deux grandes conceptions s’affrontent. Pour **Platon**, l’art est **imitation** (*mimésis*) : le peintre copie un lit particulier, qui n’est lui-même que la copie de l’Idée de lit ; l’œuvre est donc une « copie de copie », deux fois éloignée de la vérité, et le poète, qui flatte les passions, est même banni de la cité idéale de *La République*. Pour **Aristote**, au contraire, l’imitation est naturelle et instructive : la tragédie, en représentant des actions terribles, produit une **catharsis**, une purgation des émotions qui élève l’âme. Ces deux positions — l’art qui trompe / l’art qui forme — traversent toute l’histoire de la pensée.' },
        { t: 'table', head: ['Époque', 'Ce que devient l’art', 'Idée directrice'], rows: [
          ['Antiquité', 'Imitation (mimésis) et savoir-faire', 'Platon (méfiance) / Aristote (catharsis)'],
          ['Moyen Âge', 'Art sacré au service de la foi', 'L’œuvre élève l’âme vers Dieu'],
          ['Renaissance', 'Perspective, anatomie, « génie »', 'L’artiste égale le savant (Vinci)'],
          ['XVIIIᵉ s.', 'Naissance de l’esthétique', 'Kant : le jugement de goût'],
          ['XIXᵉ s.', 'L’art pour l’art, le génie romantique', 'Hugo, Baudelaire, Hegel'],
          ['XXᵉ s.', 'Ruptures : abstraction, ready-made', 'Duchamp, Kandinsky, l’art conceptuel'],
        ] },
        { t: 'p', c: 'Au **XVIIIᵉ siècle**, **Kant** fonde l’**esthétique** comme discipline : le beau n’est ni l’agréable (qui flatte les sens) ni le bon (qui satisfait la raison morale) ; il procure un « plaisir désintéressé » et, chose remarquable, prétend valoir **pour tout le monde** sans reposer sur un concept. **Hegel**, lui, voit dans l’art l’une des voies par lesquelles l’**Esprit** prend conscience de lui-même : l’œuvre n’imite pas, elle **manifeste** une vérité sensible sur l’humanité. Puis le XXᵉ siècle fait exploser toutes les certitudes : avec la *Fontaine* de **Duchamp** (1917), ce n’est plus l’objet ni le métier qui font l’œuvre, mais le **geste** de l’artiste et l’**institution** qui l’expose.' },
        { t: 'tip', h: 'À retenir', c: 'L’idée d’« art » a une **histoire** : opposer « avant on savait faire, aujourd’hui n’importe quoi est de l’art » est un cliché ; la vraie question est de savoir **ce qui fait la valeur** d’une œuvre à chaque époque.' },
      ]),
      worked('📖 L’art dans la littérature et les arts', [
        { t: 'p', c: 'La littérature n’a cessé d’interroger le pouvoir — et le danger — de l’art. Dans *Le Portrait de Dorian Gray* d’**Oscar Wilde**, un tableau vieillit et se corrompt à la place de son modèle resté jeune : l’œuvre devient le miroir de l’âme, et pose la question du rapport entre **beauté** et **morale**. Chez **Balzac**, *Le Chef-d’œuvre inconnu* met en scène un peintre qui, à force de recherche de la perfection, ne produit plus qu’un chaos de couleurs : l’art peut se perdre dans sa propre exigence.' },
        { t: 'p', c: 'Chez **Marcel Proust**, dans *À la recherche du temps perdu*, l’art n’est pas un ornement mais un **salut** : seule l’œuvre (la petite phrase de Vinteuil, les toiles d’Elstir) permet de retrouver le temps perdu et de donner un sens à l’existence. **Baudelaire**, dans *Les Fleurs du mal*, revendique de « faire de la boue et d’en tirer de l’or » : l’art transfigure le laid et arrache une beauté au réel le plus sordide. À l’inverse, **Platon** aurait vu là un danger — celui d’aimer les apparences plutôt que la vérité.' },
        { t: 'example', h: 'Illustration', c: '**Guernica** de Picasso (1937) ne « représente » pas joliment le bombardement d’une ville : par sa déformation, son noir et blanc, ses cris figés, il rend **visible** l’horreur de la guerre mieux qu’une photographie. C’est l’idée de Klee : « L’art ne reproduit pas le visible, il rend visible. »' },
        { t: 'tip', h: 'Réflexe de dissertation', c: 'Un exemple **littéraire ou artistique précis**, expliqué (pas seulement cité), vaut mieux que dix généralités. Montre **ce que l’œuvre fait**, pas seulement qu’elle existe.' },
      ]),
      worked('✍️ Dissertation guidée — « N’y a-t-il de beau que l’utile ? »', [
        { t: 'p', c: '**Introduction.** On dit souvent d’un objet bien conçu qu’il est « beau parce qu’il est pratique » : une voiture, un outil, un pont. Cela laisserait entendre que la beauté se ramène à l’**utilité**. Pourtant, une fleur inutile, un coucher de soleil, une symphonie nous paraissent beaux sans servir à rien. Le beau se confond-il avec l’utile, ou faut-il, au contraire, qu’une chose soit **inutile** — désintéressée — pour être vraiment belle ?' },
        { t: 'list', c: [
          '**I. Le beau semble lié à l’utile.** Ce qui est bien adapté à sa fonction nous plaît (un objet « fonctionnel ») ; l’architecture, le design, l’artisanat unissent forme et usage. Argument : la beauté serait la perfection visible d’une fonction.',
          '**II. Mais le beau est désintéressé.** Pour **Kant**, le jugement de goût est **sans intérêt** : je ne demande pas à quoi sert une rose pour la trouver belle. L’œuvre d’art ne se réduit jamais à un usage ; un tableau qui ne servirait qu’à « décorer » cesserait d’être une œuvre.',
          '**III. Dépassement.** Le beau et l’utile ne s’opposent pas terme à terme : une chose peut être belle *et* utile, mais sa beauté ne **vient pas** de son utilité. Le beau ouvre un rapport au monde plus libre — il nous arrache, un instant, à la logique des moyens et des fins.',
        ] },
        { t: 'example', h: 'Conclusion rédigée', c: 'L’utile peut être beau, mais la beauté ne se laisse jamais **enfermer** dans l’utilité : elle commence précisément là où cesse le calcul des fins. C’est pourquoi l’art, souverainement inutile, est peut-être ce dont l’homme a le plus besoin.' },
      ]),
    ],
    resources: [
      { label: 'France Culture — l’art et l’esthétique', url: 'https://www.radiofrance.fr/franceculture/podcasts/les-chemins-de-la-philosophie', kind: 'link', note: 'Émissions sur le beau, la création, Kant, Hegel.' },
    ],
  },

  'philo-justice': {
    sections: [
      worked('🏛️ Aux sources — justice, loi et cité', [
        { t: 'p', c: 'La question de la justice naît avec la **cité** grecque. Dans *La République*, **Platon** fait dire au sophiste **Thrasymaque** que « la justice n’est que l’intérêt du plus fort » : les lois seraient toujours faites par les puissants pour les puissants. Toute la philosophie politique va s’efforcer de réfuter ce **cynisme** — de montrer que le juste ne se réduit pas au rapport de force. Pour Platon, la justice est l’**harmonie** de l’âme et de la cité, où chacun est à sa place ; pour **Aristote**, elle est une **vertu** et se dit de deux façons.' },
        { t: 'table', head: ['Forme de justice (Aristote)', 'Principe', 'Exemple'], rows: [
          ['Justice distributive', 'À chacun selon son mérite (égalité proportionnelle)', 'Répartir des récompenses selon le travail fourni'],
          ['Justice corrective / commutative', 'Rétablir l’égalité rompue', 'Réparer un tort, punir un vol'],
          ['Équité (epieikeia)', 'Corriger la loi générale dans le cas particulier', 'Adoucir une peine injuste au regard des circonstances'],
        ] },
        { t: 'p', c: 'À l’époque moderne, la justice se pense à partir du **contrat**. **Hobbes** part d’un « état de nature » où règne la « guerre de tous contre tous » : les hommes, par peur de la mort, cèdent leur droit à un souverain qui garantit la paix. **Rousseau** refuse cette soumission : le pacte social légitime n’aliène pas la liberté, il la fonde, car obéir à la loi qu’on s’est prescrite, c’est être libre. Au XXᵉ siècle, **John Rawls** propose une expérience de pensée célèbre : sous un « **voile d’ignorance** » (ne sachant pas quelle place on occupera dans la société), quelles règles choisirait-on ? Celles qui protègent le plus **les plus défavorisés**.' },
        { t: 'tip', h: 'Distinction essentielle', c: '**Légal** (conforme à la loi) ≠ **légitime** (conforme à la justice). Tout le débat politique tient dans cet écart : une loi peut être légale sans être juste.' },
      ]),
      worked('📖 La justice en littérature — de l’injustice à la révolte', [
        { t: 'p', c: 'La littérature donne un visage à l’injustice. Dans *Les Misérables* de **Victor Hugo**, Jean Valjean est condamné au bagne pour un pain volé : le roman dénonce une justice **légale** qui écrase les misérables au lieu de les relever, et oppose la loi implacable de Javert à la **miséricorde** de l’évêque. Chez **Kafka**, *Le Procès* montre un homme arrêté et jugé sans jamais connaître le motif de son accusation : c’est le cauchemar d’une justice devenue **absurde**, machine anonyme qui broie l’individu.' },
        { t: 'p', c: '**Antigone**, de Sophocle, met en scène le conflit le plus pur : Antigone enterre son frère au mépris de l’interdit du roi Créon, opposant les **lois non écrites** (divines, morales) aux **lois de la cité**. Doit-on obéir à une loi que l’on juge injuste ? La **désobéissance civile** — de Thoreau à Gandhi, de Rosa Parks à Martin Luther King — répond que oui, à condition d’agir publiquement, pacifiquement, et d’accepter la sanction, au nom d’une justice supérieure.' },
        { t: 'example', h: 'Illustration', c: 'Dans *L’Étranger* de **Camus**, Meursault est condamné moins pour son meurtre que pour n’avoir pas pleuré à l’enterrement de sa mère : la justice juge alors une **conformité sociale**, non un acte. Le roman interroge : que juge-t-on vraiment dans un tribunal ?' },
        { t: 'warning', h: 'Piège', c: 'Ne pas confondre **la justice** (idéal moral et politique) avec **l’appareil judiciaire** (les tribunaux). On peut trouver une décision de justice… injuste.' },
      ]),
      worked('✍️ Dissertation guidée — « Est-il toujours juste d’obéir à la loi ? »', [
        { t: 'list', c: [
          '**I. La loi est la condition de la justice.** Sans loi commune, c’est la loi du plus fort (Hobbes) ; la loi, égale pour tous, protège le faible et rend la vie sociale possible. Désobéir, ce serait ouvrir la porte à l’arbitraire de chacun.',
          '**II. Mais une loi peut être injuste.** L’histoire le prouve (lois ségrégationnistes, lois d’exception) : le légal n’est pas toujours le légitime. Obéir aveuglément peut rendre complice (procès de Nuremberg, Arendt et la « banalité du mal »).',
          '**III. Dépassement : la désobéissance civile.** Enfreindre **publiquement** une loi injuste, au nom d’une justice supérieure et en acceptant la sanction, n’est pas de l’anarchie : c’est encore respecter l’idée de loi, en appelant à une loi meilleure.',
        ] },
        { t: 'example', h: 'Ouverture', c: 'La vraie obéissance n’est pas la soumission : c’est l’adhésion réfléchie à des lois que l’on peut, en conscience, reconnaître comme justes — et, quand elles ne le sont pas, le courage de les contester dans les formes du droit.' },
      ]),
    ],
    resources: [
      { label: 'France Culture — justice, droit, politique', url: 'https://www.radiofrance.fr/franceculture/podcasts/les-chemins-de-la-philosophie', kind: 'link', note: 'Rawls, Rousseau, la désobéissance civile.' },
    ],
  },

  'philo-liberte': {
    sections: [
      worked('🏛️ Aux sources — sommes-nous libres ?', [
        { t: 'p', c: 'La liberté est peut-être la notion la plus intime et la plus disputée. Le sens commun l’identifie au **libre arbitre** : le pouvoir de choisir sans y être contraint. Mais dès l’Antiquité, les **stoïciens** distinguent ce qui **dépend de nous** (nos jugements, nos désirs) de ce qui **n’en dépend pas** (les événements, la mort, l’opinion d’autrui) : être libre, pour Épictète, ce n’est pas tout pouvoir, c’est ne désirer que ce qui dépend de nous. La liberté devient alors une **conquête intérieure**, non une absence de contraintes.' },
        { t: 'p', c: 'L’âge classique oppose deux camps. Pour **Descartes**, la liberté est une évidence : le libre arbitre est « la plus haute perfection de l’homme », si grand qu’il nous rend « en quelque façon semblables à Dieu ». Pour **Spinoza**, au contraire, cette liberté est une **illusion** : nous nous croyons libres parce que nous avons conscience de nos actions, mais nous **ignorons les causes** qui nous déterminent — telle la pierre lancée qui, si elle pensait, se croirait libre de tomber. Le **déterminisme** (tout a une cause) semble ainsi menacer la liberté.' },
        { t: 'table', head: ['Penseur', 'Thèse sur la liberté', 'Formule'], rows: [
          ['Épictète', 'Liberté = maîtrise de ce qui dépend de nous', '« Ce qui dépend de nous… »'],
          ['Descartes', 'Le libre arbitre est une évidence', '« La plus haute perfection de l’homme »'],
          ['Spinoza', 'La liberté est une illusion (déterminisme)', 'La pierre qui se croit libre'],
          ['Kant', 'Liberté = autonomie (se donner sa loi)', 'Agir par devoir, non par penchant'],
          ['Sartre', 'L’homme est condamné à être libre', '« L’existence précède l’essence »'],
        ] },
        { t: 'p', c: '**Kant** dépasse le conflit : la liberté n’est pas dans le monde des phénomènes (où tout est déterminé), mais dans le domaine **moral**. Être libre, c’est être **autonome** : se donner à soi-même sa propre loi, agir par **devoir** et non par simple penchant. **Sartre**, enfin, radicalise : il n’y a pas de « nature humaine » qui nous excuserait ; « l’existence précède l’essence », nous sommes ce que nous **faisons** de nous, et donc **responsables** — d’où l’angoisse d’une liberté sans mode d’emploi.' },
        { t: 'tip', h: 'Distinction clé', c: '**Liberté ≠ licence.** Faire tout ce qui passe par la tête, c’est être l’esclave de ses désirs ; l’autonomie (se donner sa loi) est une liberté supérieure.' },
      ]),
      worked('📖 La liberté en littérature et en histoire', [
        { t: 'p', c: 'La littérature explore les prisons visibles et invisibles de l’homme. *1984* de **George Orwell** décrit un État totalitaire qui contrôle jusqu’aux pensées : la liberté y survit dans le simple fait de dire « 2 + 2 = 4 ». *Le Meilleur des mondes* d’**Aldous Huxley** imagine une servitude plus insidieuse encore — une population si divertie et droguée au plaisir qu’elle **aime** sa servitude et ne réclame plus aucune liberté. Deux avertissements complémentaires : on peut asservir par la terreur, mais aussi par le divertissement.' },
        { t: 'p', c: 'Chez **Sartre**, la pièce *Huis clos* (« l’enfer, c’est les autres ») et le roman *La Nausée* mettent en scène le vertige d’une liberté totale : sans Dieu ni nature pour décider à notre place, l’homme doit **s’inventer**. **Camus**, dans *Le Mythe de Sisyphe*, tire de l’absurde une liberté paradoxale : condamné à pousser éternellement son rocher, Sisyphe est libre parce qu’il **assume** son destin — « il faut imaginer Sisyphe heureux ».' },
        { t: 'example', h: 'Illustration', c: 'Le fumeur qui dit « je suis libre de fumer » est peut-être l’esclave de son addiction : la conscience d’un choix ne prouve pas la liberté du choix. C’est exactement l’objection de Spinoza.' },
        { t: 'tip', h: 'Réflexe', c: 'Relier **liberté** et **responsabilité** : si je suis libre, je réponds de mes actes ; nier ma liberté, c’est souvent chercher une excuse (« la mauvaise foi », dit Sartre).' },
      ]),
      worked('✍️ Dissertation guidée — « Être libre, est-ce faire ce que l’on veut ? »', [
        { t: 'list', c: [
          '**I. Oui : la liberté semble être l’absence d’obstacles.** Être libre, c’est pouvoir agir selon sa volonté, sans contrainte extérieure. La contrainte (physique, sociale) apparaît comme l’ennemie de la liberté.',
          '**II. Mais suivre ses désirs, c’est en être l’esclave.** Mes envies sont souvent déterminées (habitudes, publicité, passions) : « faire ce que je veux » peut être obéir à des forces qui me dépassent (Spinoza). La liberté suppose donc de se **libérer de soi-même**.',
          '**III. Dépassement : la liberté comme autonomie.** Être vraiment libre, ce n’est pas suivre tous ses désirs, mais se **donner sa propre loi** (Kant), choisir avec lucidité et assumer ses actes. La loi juste ne supprime pas la liberté : elle la garantit (Montesquieu).',
        ] },
        { t: 'example', h: 'Conclusion', c: 'Faire ce que l’on veut n’est qu’une liberté apparente si l’on ne sait pas **pourquoi** on le veut. La liberté accomplie est celle d’un sujet autonome, maître de ses désirs et responsable de ses choix.' },
      ]),
    ],
    resources: [
      { label: 'France Culture — la liberté, le déterminisme', url: 'https://www.radiofrance.fr/franceculture/podcasts/les-chemins-de-la-philosophie', kind: 'link', note: 'Spinoza, Sartre, le libre arbitre.' },
    ],
  },

  'philo-nature': {
    sections: [
      worked('🏛️ Aux sources — nature, culture et condition humaine', [
        { t: 'p', c: 'Le mot « nature » est piégé, car il a au moins trois sens : ① l’**ensemble de ce qui existe** sans l’homme (l’environnement, le cosmos) ; ② l’**essence** d’une chose (« la nature du triangle ») ; ③ l’**inné**, ce qui est donné à la naissance, par opposition à l’**acquis** (par la culture). Confondre ces sens est la source d’innombrables erreurs de raisonnement.' },
        { t: 'p', c: 'La grande question anthropologique est celle du couple **nature / culture**. **Rousseau**, dans le *Discours sur l’origine de l’inégalité*, imagine un « homme de la nature » — non pour affirmer qu’il a existé, mais pour **distinguer** ce qui, en nous, vient de la nature et ce qui vient de la société. La **perfectibilité** (la capacité de se transformer, d’apprendre, d’inventer) est ce qui arrache l’homme à l’animalité. **Lévi-Strauss**, plus tard, montrera que l’interdit de l’inceste, universel mais variable, marque précisément le **passage** de la nature à la culture.' },
        { t: 'table', head: ['Sens de « nature »', 'Opposé', 'Exemple'], rows: [
          ['L’environnement, le monde non produit par l’homme', 'L’artificiel, la technique', 'Une forêt vierge / un barrage'],
          ['L’essence d’une chose', 'L’accident, le contingent', '« La nature du cercle »'],
          ['L’inné', 'L’acquis (la culture)', 'Un réflexe / une langue apprise'],
        ] },
        { t: 'p', c: 'Reste le rapport de l’homme **à** la nature. **Descartes** assigne à la science une visée pratique : nous rendre « comme maîtres et possesseurs de la nature », pour la santé et le confort. Trois siècles plus tard, **Hans Jonas** retourne l’ambition en inquiétude : notre **puissance technique** est devenue si grande qu’elle menace la biosphère et les générations futures. D’où un **principe responsabilité** : « agis de telle sorte que les effets de ton action soient compatibles avec la permanence d’une vie authentiquement humaine sur terre ».' },
        { t: 'warning', h: 'Le piège du « naturel »', c: 'Passer du fait (« c’est naturel ») à la valeur (« c’est bien ») est un **sophisme naturaliste**. Beaucoup de comportements dits « naturels » sont en réalité **culturels**, donc modifiables.' },
      ]),
      worked('📖 La nature dans la littérature et la pensée', [
        { t: 'p', c: 'La sensibilité à la nature a une histoire. Les **romantiques** (Rousseau déjà, puis Chateaubriand, Hugo, Lamartine avec *Le Lac*) font du paysage le miroir de l’âme et le lieu d’un ressourcement contre la société. Le XXᵉ siècle bascule dans l’**inquiétude écologique** : *Printemps silencieux* de Rachel Carson (1962) alerte sur les pesticides, et la philosophie contemporaine (Jonas, Arne Næss et l’« écologie profonde ») repense notre place dans le vivant.' },
        { t: 'p', c: 'La science-fiction pousse les scénarios à l’extrême : dans de nombreux récits, l’homme, ayant épuisé ou détruit la nature terrestre, doit fuir vers d’autres mondes — façon d’interroger notre rapport de **prédation**. À l’inverse, la pensée de **Spinoza** (« *Deus sive Natura* », Dieu, c’est-à-dire la Nature) invite à ne pas se penser comme un « empire dans un empire » : l’homme est **partie** de la nature, non son souverain extérieur.' },
        { t: 'example', h: 'Illustration', c: 'Un barrage hydroélectrique produit une énergie « propre » mais noie une vallée et détruit un écosystème : faut-il **maîtriser** la nature (Descartes) ou en assumer la **responsabilité** (Jonas) ? Le cas concret oblige à peser les deux.' },
        { t: 'tip', h: 'Repère central', c: '**Nature / culture** : ce qui définit l’homme, c’est la culture — mais elle a une base naturelle. L’un ne va pas sans l’autre.' },
      ]),
      worked('✍️ Dissertation guidée — « L’homme doit-il dominer la nature ? »', [
        { t: 'list', c: [
          '**I. La technique invite à la maîtrise.** Livré à la nature, l’homme est démuni ; la médecine, l’agriculture, l’énergie l’en affranchissent. Descartes : nous rendre « maîtres et possesseurs de la nature » pour vivre mieux.',
          '**II. Mais cette domination se retourne contre nous.** Épuisement des ressources, dérèglement climatique, extinctions : la maîtrise sans limite devient auto-destruction. La nature n’est pas un simple « stock » exploitable (Heidegger).',
          '**III. Dépassement : de la domination à la responsabilité.** Il ne s’agit ni de tout exploiter ni de « revenir à la nature », mais d’une **cohabitation** réfléchie : le principe responsabilité de Jonas engage l’avenir de la vie.',
        ] },
        { t: 'example', h: 'Conclusion', c: '« Dominer » la nature au sens de la piller est une impasse ; la vraie maîtrise est celle de nos propres pouvoirs — savoir **limiter** notre puissance au nom de ce qui nous dépasse et nous suit.' },
      ]),
    ],
    resources: [
      { label: 'France Culture — nature, culture, écologie', url: 'https://www.radiofrance.fr/franceculture/podcasts/les-chemins-de-la-philosophie', kind: 'link', note: 'Rousseau, Lévi-Strauss, Jonas.' },
    ],
  },

  'philo-religion': {
    sections: [
      worked('🏛️ Aux sources — foi, raison et sacré', [
        { t: 'p', c: 'La religion (du latin *religare*, relier, ou *relegere*, recueillir) désigne un ensemble de **croyances et de pratiques** qui relient l’homme au **sacré** — ce qui est mis à part, entouré de respect et d’interdits (par opposition au *profane*). Toute la difficulté philosophique tient dans le rapport entre la **foi** et la **raison** : sont-elles ennemies, étrangères, ou complémentaires ?' },
        { t: 'p', c: 'La distinction décisive est celle du **croire** et du **savoir**. **Croire**, c’est adhérer **sans preuve** (la foi) ; **savoir**, c’est tenir pour vrai **avec preuve** (démonstration, expérience). La foi n’est donc pas un savoir défaillant, un savoir « raté » : c’est un **autre rapport** à la vérité. **Pascal**, savant et croyant, l’exprime d’une formule célèbre : « le cœur a ses raisons que la raison ne connaît point » — il existe un ordre du cœur, irréductible à celui de la démonstration. Son fameux **pari** invite le sceptique à parier sur l’existence de Dieu, l’enjeu (l’infini) valant le risque.' },
        { t: 'table', head: ['Penseur', 'Regard sur la religion', 'Idée'], rows: [
          ['Pascal', 'La foi dépasse la raison sans la nier', '« Le cœur a ses raisons… » ; le pari'],
          ['Marx', 'Critique sociale', '« Opium du peuple » : consolation qui endort'],
          ['Freud', 'Critique psychologique', 'Illusion née d’un désir de protection'],
          ['Durkheim', 'Approche sociologique', 'Fonction de lien social, ciment du groupe'],
        ] },
        { t: 'p', c: 'La modernité développe une **critique** de la religion. **Marx** y voit « l’opium du peuple » : une consolation illusoire qui détourne les opprimés de transformer leur condition réelle. **Freud** en fait une **illusion** — non un simple mensonge, mais la réalisation d’un désir infantile de protection paternelle. **Durkheim**, lui, en propose une lecture **sociologique** : au-delà de la question de la vérité, la religion remplit une fonction de **cohésion**, elle fait tenir le groupe ensemble. Ces critiques n’épuisent pas la question : elles éclairent les **fonctions** de la religion sans trancher celle de la foi.' },
        { t: 'warning', h: 'Piège à éviter', c: 'Opposer bêtement « religion = obscurantisme » et « science = vérité ». Le sujet demande de **distinguer les plans** (croire / savoir), pas de disqualifier l’un par l’autre.' },
      ]),
      worked('📖 La religion en littérature et en histoire', [
        { t: 'p', c: 'Le conflit entre foi et raison a une histoire dramatique. En **1633**, **Galilée** est condamné par l’Inquisition pour avoir soutenu, preuves à l’appui, que la Terre tourne : cas d’école d’un affrontement entre l’autorité religieuse et la démarche scientifique. **Voltaire**, au XVIIIᵉ siècle, combat le **fanatisme** et l’intolérance (*Traité sur la tolérance*, après l’affaire Calas), tout en distinguant la foi personnelle du dogmatisme persécuteur.' },
        { t: 'p', c: 'La grande littérature sonde le **doute** et la foi. **Dostoïevski**, dans *Les Frères Karamazov*, met dans la bouche d’Ivan la plus redoutable objection à Dieu — le « scandale » de la souffrance des enfants innocents — et lui oppose, sans la réfuter, la foi humble d’Aliocha. **Pascal**, dans les *Pensées*, décrit l’homme partagé entre grandeur et misère, « roseau pensant » jeté dans un univers muet, et cherche dans la foi une réponse au silence des « espaces infinis ».' },
        { t: 'example', h: 'Illustration', c: 'Dire « je crois qu’il fera beau demain » et « je sais que 2 + 2 = 4 », ce n’est pas parler de la même façon de la vérité : l’un espère sans preuve, l’autre démontre. Toute la notion tient dans cette différence.' },
        { t: 'tip', h: 'Ouverture', c: 'La **laïcité** n’est pas l’hostilité à la religion, mais la neutralité de l’État qui garantit à chacun la liberté de croire — ou de ne pas croire.' },
      ]),
      worked('✍️ Dissertation guidée — « La foi est-elle contraire à la raison ? »', [
        { t: 'list', c: [
          '**I. Elles semblent s’opposer.** La foi adhère sans preuve, la raison exige des démonstrations ; l’histoire (Galilée) montre des conflits. Croire pourrait sembler renoncer à penser.',
          '**II. Mais elles n’ont pas le même objet.** Croire ≠ savoir : la foi ne porte pas sur des faits démontrables, mais sur un sens, une espérance. Elle relève d’un autre ordre (Pascal), que la raison ne peut ni prouver ni réfuter.',
          '**III. Dépassement : foi et raison peuvent se compléter.** La raison peut éclairer la foi (théologie), et la foi peut donner à la raison un horizon ; l’ennemi commun n’est pas la raison ni la foi, mais le **fanatisme** — la foi qui refuse de penser.',
        ] },
        { t: 'example', h: 'Conclusion', c: 'La foi n’est contraire à la raison que lorsqu’elle prétend se substituer à elle sur son propre terrain (les faits). Distinguées, elles peuvent coexister ; confondues, elles s’égarent l’une l’autre.' },
      ]),
    ],
    resources: [
      { label: 'France Culture — foi, raison, laïcité', url: 'https://www.radiofrance.fr/franceculture/podcasts/les-chemins-de-la-philosophie', kind: 'link', note: 'Pascal, la critique de la religion, la tolérance.' },
    ],
  },

  'philo-technique': {
    sections: [
      worked('🏛️ Aux sources — l’homme, l’outil et le travail', [
        { t: 'p', c: 'La technique est l’ensemble des **procédés efficaces** par lesquels l’homme transforme la nature pour produire de l’**utile** — à distinguer de l’art (qui vise le beau) et de la science (qui vise le vrai). Le mythe grec de **Prométhée** l’exprime : l’homme, seul animal sans griffes, sans fourrure ni rapidité, reçoit en compensation le **feu** — la technique — volé aux dieux. La technique n’est donc pas un supplément : elle est **constitutive** de l’humanité. **Bergson** dira que l’intelligence est d’abord « la faculté de fabriquer des outils » ; l’homme est *homo faber* avant d’être *homo sapiens*.' },
        { t: 'p', c: 'Le **travail**, activité par laquelle l’homme transforme la nature en se transformant lui-même, est au cœur de la réflexion. **Hegel**, dans la « dialectique du maître et de l’esclave », montre que c’est l’**esclave** — celui qui travaille et façonne le monde — qui accède à la conscience de soi, tandis que le maître, purement consommateur, en reste dépendant. **Marx** en tire une critique de l’**aliénation** : dans le travail industriel, l’ouvrier, dépossédé du produit et du sens de son activité, devient étranger à lui-même.' },
        { t: 'table', head: ['Penseur', 'Sur la technique / le travail', 'Idée'], rows: [
          ['Bergson', 'L’homme est homo faber', 'L’intelligence fabrique des outils'],
          ['Hegel', 'Dialectique maître / esclave', 'Le travail humanise et libère'],
          ['Marx', 'Critique de l’aliénation', 'Le travail industriel peut déshumaniser'],
          ['Heidegger', 'Critique de la technique moderne', 'La nature réduite à un « fonds » exploitable'],
          ['Jonas', 'Éthique du futur', 'Le principe responsabilité'],
        ] },
        { t: 'p', c: '**Heidegger** porte la critique la plus radicale : la technique **moderne** n’est pas un simple ensemble d’outils, c’est une manière de **dévoiler** le monde qui transforme tout — la nature, et l’homme lui-même — en « fonds » (*Bestand*), en réserve disponible et calculable. Le fleuve n’est plus contemplé, il est « sommé » de fournir de l’énergie. **Jonas**, enfin, tire les conséquences éthiques de la démesure technique : notre pouvoir engage désormais l’existence même de l’humanité future, d’où une responsabilité inédite.' },
        { t: 'tip', h: 'Distinction clé', c: '**Moyen / fin.** La technique est un **moyen** ; un même couteau soigne ou tue. La vraie question n’est pas « pour ou contre la technique », mais « quel **usage** en faisons-nous ? ».' },
      ]),
      worked('📖 La technique en littérature et au cinéma', [
        { t: 'p', c: 'La littérature a très tôt exprimé la **peur de la créature qui échappe au créateur**. *Frankenstein* de **Mary Shelley** (1818) — sous-titré « le Prométhée moderne » — met en scène un savant qui donne la vie à une créature qu’il ne peut plus contrôler : préfiguration de tous nos débats sur les limites de la science. *Le Meilleur des mondes* de **Huxley** imagine une humanité fabriquée, conditionnée, « heureuse » parce que dépossédée de toute liberté.' },
        { t: 'p', c: 'Le cinéma prolonge l’interrogation : de *Metropolis* (Lang) à *Blade Runner* et aux récits sur l’intelligence artificielle, la question revient : la machine peut-elle nous **remplacer**, nous **asservir**, ou même devenir « humaine » ? **Rousseau**, dès le *Discours sur les sciences et les arts*, doutait déjà que le progrès technique rende les hommes **meilleurs** : la puissance croît, mais la moralité ne suit pas nécessairement.' },
        { t: 'example', h: 'Illustration', c: 'Le smartphone nous **libère** (tout savoir, joindre chacun, partout) et nous **asservit** (dépendance, surveillance des données, économie de l’attention). Une seule technique, deux visages : tout dépend de la maîtrise que nous en gardons.' },
        { t: 'warning', h: 'Piège', c: 'Croire que le **progrès technique** entraîne **automatiquement** le progrès **humain** ou moral. L’histoire du XXᵉ siècle a tragiquement démenti cet optimisme.' },
      ]),
      worked('✍️ Dissertation guidée — « La technique nous libère-t-elle ? »', [
        { t: 'list', c: [
          '**I. La technique libère de la nécessité naturelle.** Être démuni, l’homme compense sa faiblesse : médecine, transports, moins de pénibilité. Chaque invention élargit le champ de nos possibles (Descartes).',
          '**II. Mais elle crée de nouvelles servitudes.** Aliénation du travail (Marx), dépendance, réduction du monde à un fonds exploitable (Heidegger), risques inédits (Jonas). La libération se paie de dépendances nouvelles.',
          '**III. Dépassement : tout dépend de l’usage et de la maîtrise.** La technique est un moyen neutre ; la vraie liberté n’est pas de posséder des machines, mais de **rester maître de nos moyens**, ce qui exige une éthique.',
        ] },
        { t: 'example', h: 'Conclusion', c: 'La technique nous libère des contraintes naturelles, mais ne nous rend pas libres par elle-même : elle nous met en demeure de **choisir** ce que nous voulons en faire — et c’est là, précisément, que se joue notre liberté.' },
      ]),
    ],
    resources: [
      { label: 'France Culture — technique, travail, progrès', url: 'https://www.radiofrance.fr/franceculture/podcasts/les-chemins-de-la-philosophie', kind: 'link', note: 'Heidegger, Jonas, l’aliénation.' },
    ],
  },

  'philo-verite': {
    sections: [
      worked('🏛️ Aux sources — vérité, opinion et démonstration', [
        { t: 'p', c: 'La vérité se définit classiquement comme l’**accord de la pensée avec son objet** (l’*adéquation*). Il faut aussitôt la distinguer de la **réalité** : la réalité est ce qui **est** ; la vérité est une propriété de nos **jugements** sur le réel. Une pierre n’est ni vraie ni fausse ; c’est ce que j’en **dis** qui peut l’être. Il faut aussi la distinguer de l’**opinion** (*doxa*) : une croyance non fondée, même partagée par tous, n’est pas un savoir.' },
        { t: 'p', c: 'C’est le sens de la célèbre **allégorie de la caverne** de **Platon** : des prisonniers enchaînés prennent les **ombres** projetées sur une paroi pour la réalité ; l’un d’eux se libère, sort, découvre le soleil (l’Idée du Bien, la vérité), puis revient — et on ne le croit pas. Philosopher, c’est cette **conversion** du regard, ce difficile passage de l’apparence au réel, de l’opinion au savoir. **Descartes**, à l’aube de la modernité, propose une autre méthode : le **doute méthodique**. Douter volontairement de tout — des sens, des raisonnements, du monde — jusqu’à trouver une première certitude que le doute ne peut emporter : « je pense, donc je suis » (*cogito*).' },
        { t: 'table', head: ['Distinction', 'Sens', 'Exemple'], rows: [
          ['Vérité / réalité', 'Propriété du jugement / ce qui est', '« Il pleut » est vrai si, de fait, il pleut'],
          ['Opinion / savoir', 'Croyance non fondée / connaissance justifiée', 'Croire vs démontrer'],
          ['Vérités de raison / de fait (Leibniz)', 'Logiques, nécessaires / vérifiées par l’expérience', '2 + 2 = 4 / « César a franchi le Rubicon »'],
          ['Objectif / subjectif', 'Vaut pour l’objet, pour tous / dépend du sujet', '« 20 °C » / « il fait bon »'],
        ] },
        { t: 'p', c: 'Peut-on **tout** démontrer ? Non. Toute démonstration part d’**axiomes** que l’on ne démontre pas, sous peine de régression à l’infini. **Leibniz** distingue les **vérités de raison** (nécessaires, comme les mathématiques) et les **vérités de fait** (contingentes, vérifiées par l’expérience). Au XXᵉ siècle, **Karl Popper** ajoute un critère décisif pour la science : une théorie n’est scientifique que si elle est **réfutable** (falsifiable) — ce qui ne peut être contredit par aucune expérience n’est pas une science, mais une croyance déguisée.' },
        { t: 'warning', h: 'Le piège du relativisme', c: '« À chacun sa vérité » confond le **goût** (subjectif) et la **vérité** (qui prétend valoir pour tous). Une vérité ne se décide pas au vote : la Terre ne s’est pas mise à tourner quand la majorité l’a admis.' },
      ]),
      worked('📖 La vérité en littérature et dans les sciences', [
        { t: 'p', c: 'La quête de la vérité, et le mensonge, nourrissent la littérature. **Molière**, dans *Le Misanthrope*, met en scène Alceste, l’homme qui veut dire toujours la vérité, et montre combien la vie sociale repose sur de petits arrangements. **Orwell**, dans *1984*, invente la « novlangue » et le « Ministère de la Vérité » qui **réécrit** le passé : le pouvoir totalitaire ne se contente pas de mentir, il abolit l’idée même d’une vérité indépendante.' },
        { t: 'p', c: 'L’histoire des sciences illustre le caractère **conquis** et **révisable** de la vérité : longtemps « la Terre est plate » ou « le Soleil tourne autour de la Terre » furent des évidences. Le progrès scientifique procède par **ruptures** (Bachelard parle d’« obstacles épistémologiques » à franchir) : la vérité d’aujourd’hui corrige celle d’hier, sans que cela ruine l’idée de vérité — au contraire, c’est le signe d’une pensée qui se **contrôle** elle-même.' },
        { t: 'example', h: 'Illustration', c: 'Le doute cartésien n’est pas le scepticisme (qui doute pour ne rien conclure) : c’est un **outil**, une étape pour atteindre le certain. On doute afin de mieux savoir.' },
        { t: 'tip', h: 'Repère central', c: '**Opinion / savoir.** Une vérité ne dépend pas du nombre de gens qui y croient, mais de ce qui la **fonde** (preuve, expérience, démonstration).' },
      ]),
      worked('✍️ Dissertation guidée — « Toutes les opinions se valent-elles ? »', [
        { t: 'list', c: [
          '**I. Chacun a droit à son opinion.** La liberté de pensée et d’expression suppose de respecter la diversité des points de vue ; nul ne détient un monopole de la vérité, et le dogmatisme est dangereux.',
          '**II. Mais l’opinion n’est pas le savoir.** Une opinion non fondée ne vaut pas une connaissance démontrée : sur un fait, toutes les opinions ne se valent pas (Platon oppose la *doxa* à l’*épistémè*). Confondre les deux, c’est ouvrir la porte à la désinformation.',
          '**III. Dépassement.** Respecter le **droit** d’avoir une opinion n’oblige pas à tenir toutes les opinions pour **également vraies**. La vérité se cherche par l’argumentation et la preuve ; le débat n’a de sens que s’il vise, au-delà des opinions, quelque chose de vrai.',
        ] },
        { t: 'example', h: 'Conclusion', c: 'Toutes les opinions ont un droit égal à s’exprimer, mais elles n’ont pas une valeur égale devant la vérité : c’est même parce que la vérité existe que la discussion vaut la peine d’être menée.' },
      ]),
    ],
    resources: [
      { label: 'France Culture — vérité, science, opinion', url: 'https://www.radiofrance.fr/franceculture/podcasts/les-chemins-de-la-philosophie', kind: 'link', note: 'Platon, Descartes, Popper, Bachelard.' },
    ],
  },

  'philo-methode': {
    sections: [
      worked('🧭 La dissertation — méthode complète et détaillée', [
        { t: 'p', c: 'La dissertation de philosophie n’est ni un exposé de cours, ni une opinion personnelle : c’est une **démonstration** organisée qui répond à **une** question précise. Le correcteur n’attend pas que vous « sachiez » beaucoup de choses, mais que vous sachiez **penser** — analyser, problématiser, argumenter. Voici la marche à suivre, étape par étape.' },
        { t: 'list', c: [
          '**1. Analyser le sujet.** Définir chaque mot important (souvent plusieurs sens possibles), repérer les présupposés, délimiter le champ. Un mot mal défini, et toute la copie déraille.',
          '**2. Problématiser.** Transformer le sujet en un **problème** : montrer que la réponse évidente se heurte à une objection, qu’il y a une **tension** entre deux réponses également défendables. C’est le cœur de l’introduction.',
          '**3. Construire un plan progressif.** Souvent en trois moments : **thèse** (oui, parce que…) — **antithèse** (mais…) — **dépassement** (en réalité…). Chaque partie doit **faire avancer** la réflexion, pas seulement juxtaposer des avis.',
          '**4. Argumenter.** Chaque sous-partie = une **idée** + un **argument** qui la justifie + un **exemple** ou un **auteur** qui l’illustre. On explique toujours ce que l’exemple apporte.',
          '**5. Conclure.** Répondre **clairement** au problème posé (surtout pas « ça dépend » sans plus), puis, éventuellement, ouvrir sur une nouvelle question.',
        ] },
        { t: 'example', h: 'Introduction rédigée — « La technique nous libère-t-elle ? »', c: 'Chaque jour, le GPS, le smartphone ou la machine à laver nous épargnent mille efforts : la technique paraît être une puissance de libération. Pourtant, beaucoup se sentent esclaves de leurs écrans ou menacés par les machines. La **technique** désigne l’ensemble des procédés efficaces par lesquels l’homme transforme la nature ; **libérer**, c’est affranchir d’une contrainte. Le problème est donc le suivant : si la technique nous délivre des contraintes naturelles, ne crée-t-elle pas de nouvelles dépendances ? Nous verrons d’abord qu’elle libère de la nature, puis qu’elle peut asservir, enfin que tout dépend de l’usage que nous en faisons.' },
        { t: 'warning', h: 'Les deux pièges mortels', c: 'Le **hors-sujet** (on répond à côté, faute d’avoir analysé le sujet) et la **récitation** (on déroule le cours sans problématiser). Revenez sans cesse à **la** question posée.' },
      ]),
      worked('📖 L’explication de texte — méthode et exemple traité', [
        { t: 'p', c: 'L’explication de texte consiste à **rendre compte** fidèlement d’un texte philosophique, puis à en **discuter** la portée. On ne donne pas son avis d’emblée : on suit d’abord, pas à pas, la pensée de l’auteur, comme un guide qui éclaire chaque passage.' },
        { t: 'list', c: [
          '**① Dégager la thèse** : que veut prouver l’auteur ? En une phrase.',
          '**② Repérer les mouvements** : découper le texte en étapes logiques (les « moments » de l’argumentation), repérés par les connecteurs (« mais », « donc », « car », « ainsi »).',
          '**③ Expliquer** : reformuler et éclairer chaque étape, définir les concepts employés, montrer comment l’auteur passe de l’un à l’autre.',
          '**④ Éclairer les exemples** et le vocabulaire technique.',
          '**⑤ Discuter** : la thèse est-elle convaincante ? Quelles objections ? Quelle portée ?',
        ] },
        { t: 'example', h: 'Exemple traité — Pascal, le « roseau pensant »', c: '« L’homme n’est qu’un roseau, le plus faible de la nature ; mais c’est un roseau pensant. » **Thèse** : la grandeur de l’homme tient non à sa force mais à sa pensée. **Mouvements** : (a) « le plus faible de la nature » = la fragilité physique (un souffle suffit à le tuer) ; (b) le « **mais** » renverse tout : « roseau **pensant** » = la pensée fait sa dignité. **Explication** : l’homme est supérieur à l’univers qui l’écrase parce qu’il **le sait**, tandis que l’univers l’ignore. **Discussion** : où placer la dignité humaine ? Dans la conscience plutôt que dans la force — ce qui relie ce texte aux notions de conscience et de nature.' },
        { t: 'tip', h: 'Réflexe', c: 'Souligner les **connecteurs logiques** (« mais », « donc », « car ») : ils dessinent la charpente du texte et vous donnent le plan de votre explication.' },
      ]),
      worked('👤 Galerie d’auteurs — une idée par philosophe', [
        { t: 'p', c: 'Inutile de connaître des dizaines d’auteurs : quelques-uns, **bien maîtrisés** (une idée, une formule, un exemple chacun), suffisent à nourrir n’importe quelle copie. Voici une galerie de repères, de l’Antiquité au XXᵉ siècle.' },
        { t: 'table', head: ['Auteur', 'Idée clé', 'Notions concernées'], rows: [
          ['Platon', 'Allégorie de la caverne : des ombres à la vérité', 'Vérité, art'],
          ['Aristote', 'La justice comme équité ; l’homme « animal politique »', 'Justice'],
          ['Épictète', 'Distinguer ce qui dépend de nous', 'Liberté, bonheur'],
          ['Descartes', 'Doute méthodique, cogito, maîtrise de la nature', 'Vérité, technique'],
          ['Pascal', 'Le « roseau pensant » ; les raisons du cœur', 'Religion, nature'],
          ['Spinoza', 'La liberté comme illusion (déterminisme)', 'Liberté'],
          ['Rousseau', 'Nature / culture ; le contrat social', 'Justice, liberté, nature'],
          ['Kant', 'L’autonomie ; le jugement de goût désintéressé', 'Liberté, art'],
          ['Hegel', 'Dialectique maître / esclave ; l’art manifeste l’Esprit', 'Technique, art'],
          ['Marx', 'Aliénation ; religion « opium du peuple »', 'Technique, religion'],
          ['Nietzsche', 'Critique de la morale et des « arrière-mondes »', 'Vérité, religion'],
          ['Freud', 'L’inconscient ; la religion comme illusion', 'Conscience, religion'],
          ['Heidegger', 'La technique moderne réduit le monde à un « fonds »', 'Technique'],
          ['Sartre', 'L’existence précède l’essence : liberté et responsabilité', 'Liberté'],
          ['Arendt', 'La « banalité du mal » ; l’action politique', 'Justice, politique'],
          ['Jonas', 'Le principe responsabilité envers l’avenir', 'Nature, technique'],
        ] },
        { t: 'tip', h: 'Stratégie payante', c: 'Reliez chaque auteur à **une notion** et à **un exemple**. Le jour du bac, vous mobiliserez la bonne référence au bon endroit, expliquée — jamais plaquée.' },
      ]),
    ],
    resources: [
      { label: 'Éduscol — sujets & annales de philosophie (voie techno)', url: 'https://eduscol.education.fr/', kind: 'doc', note: 'Le programme officiel et des sujets pour s’entraîner.' },
    ],
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
