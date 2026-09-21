// APPROFONDISSEMENT (4) — chapitres supplémentaires pour atteindre au moins
// 10 chapitres par thème là où il en manquait : Mathématiques, Géographie,
// actualité économique, et les spécialités Mercatique / RH-Communication / SIG.
// Fusionné dans data/index.js (ajout à la suite + catégorie repliable).
const S = (h, blocks) => ({ h, blocks })

export const APPROF4 = {
  // #####################################################################
  // MATHÉMATIQUES
  // #####################################################################
  'math-c1': [
    S('🔢 Calculer un pourcentage d’une valeur', [
      { t: 'p', c: 'Prendre **x % d’une valeur V**, c’est multiplier V par x/100. C’est le calcul le plus courant : remises, TVA, part d’un total.' },
      { t: 'formula', c: 'x % de V = V × (x ÷ 100)' },
      { t: 'example', h: 'Exemple', c: 'Une remise de 30 % sur 80 € : 80 × 30/100 = **24 €** de remise, soit un prix de 80 − 24 = **56 €**.' },
      { t: 'p', c: 'Pour retrouver **quel pourcentage** représente une partie d’un tout : partie ÷ tout × 100.' },
      { t: 'example', h: 'Retrouver un %', c: 'Sur 250 élèves, 40 sont en GF : 40 ÷ 250 × 100 = **16 %**.' },
      { t: 'tip', h: 'À retenir', c: 'Prendre un % → **× (x/100)**. Retrouver un % → **partie ÷ tout × 100**. Ne pas confondre la remise (en €) et le prix final.' },
    ]),
    S('⚠️ Points de pourcentage ≠ pourcentage d’évolution', [
      { t: 'p', c: 'Deux façons très différentes de comparer des pourcentages, et un piège classique du bac.' },
      { t: 'list', c: [
        'Passer de **8 % à 10 %**, c’est **+2 points de pourcentage** (10 − 8).',
        'Mais en **évolution**, c’est +2/8 × 100 = **+25 %** (le taux a augmenté d’un quart).',
      ] },
      { t: 'warning', h: 'Le piège', c: 'Un taux de chômage qui passe de 8 % à 10 % a augmenté de **2 points**, pas de « 2 % ». Toujours préciser « points » ou « % d’évolution ».' },
      { t: 'tip', h: 'À retenir', c: 'Différence de deux pourcentages = **points**. Évolution relative entre eux = **taux d’évolution** (÷ valeur de départ).' },
    ]),
    S('🧮 Exercices variés — informations chiffrées', [
      { t: 'example', h: 'Évolutions successives', c: 'Un prix augmente de 20 % puis baisse de 20 %. CM = 1,20 × 0,80 = 0,96 → **− 4 %** au total (pas 0 %).' },
      { t: 'example', h: 'Taux moyen', c: 'Une population croît de 21 % en 3 ans. CM moyen = 1,21^(1/3) ≈ 1,0656 → **+ 6,56 % par an**.' },
      { t: 'example', h: 'Indice base 100', c: 'Base 2020 (indice 100), un chiffre d’affaires vaut 128 en 2024 : il a augmenté de **28 %** depuis 2020.' },
      { t: 'tip', h: 'Réflexe', c: 'Traduire chaque évolution en **coefficient** (1 + t), multiplier pour l’effet global, racine n-ième pour le taux moyen.' },
    ]),
  ],
  'math-c2': [
    S('🔼 Sens de variation d’une suite', [
      { t: 'p', c: 'Une suite est **croissante** si chaque terme est plus grand que le précédent, **décroissante** sinon. On le détermine avec la raison.' },
      { t: 'table', head: ['Type', 'Croissante si…', 'Décroissante si…'], rows: [
        ['Arithmétique (raison r)', 'r > 0', 'r < 0'],
        ['Géométrique (u₀ > 0, raison q)', 'q > 1', '0 < q < 1'],
      ] },
      { t: 'example', h: 'Exemple', c: 'uₙ₊₁ = uₙ + 15 (r = 15 > 0) → **croissante**. vₙ₊₁ = 0,9·vₙ (q = 0,9 < 1, v₀ > 0) → **décroissante**.' },
      { t: 'tip', h: 'À retenir', c: 'Arithmétique : le signe de **r** décide. Géométrique (termes positifs) : **q > 1** croît, **q < 1** décroît.' },
    ]),
    S('💶 Intérêts simples et intérêts composés', [
      { t: 'p', c: 'Un placement modélise une suite. Avec des **intérêts simples**, on ajoute chaque année le même montant : c’est une suite **arithmétique**. Avec des **intérêts composés**, on multiplie chaque année par le même coefficient : c’est une suite **géométrique**.' },
      { t: 'example', h: 'Comparaison sur 1 000 €', c: 'Simples à 40 €/an (arithmétique) : après 10 ans → 1 000 + 400 = **1 400 €**.\nComposés à 4 %/an (géométrique) : 1 000 × 1,04¹⁰ ≈ **1 480 €**.' },
      { t: 'tip', h: 'À retenir', c: 'Intérêts **simples** → suite **arithmétique** ; intérêts **composés** (en %) → suite **géométrique**. Sur la durée, le composé l’emporte.' },
    ]),
    S('➕ Calculer une somme de termes', [
      { t: 'p', c: 'On sait additionner les premiers termes d’une suite, utile pour un cumul (ventes, remboursements).' },
      { t: 'formula', c: 'Géométrique (q ≠ 1) : S = u₀ × (1 − q^n) ÷ (1 − q)   (n = nombre de termes)' },
      { t: 'example', h: 'Exemple', c: 'u₀ = 200, q = 1,05, 10 termes : S = 200 × (1 − 1,05¹⁰) ÷ (1 − 1,05) ≈ 200 × 12,578 = **2 515,6**.' },
      { t: 'tip', h: 'Astuce', c: 'Bien compter le **nombre de termes** n (du premier au dernier inclus).' },
    ]),
    S('🧮 Suites au tableur', [
      { t: 'p', c: 'Au tableur, une suite définie par récurrence se construit avec une **formule recopiée vers le bas**. Si u₀ est en B2, on écrit en B3 la relation de récurrence en fonction de B2.' },
      { t: 'example', h: 'Exemple', c: 'Suite uₙ₊₁ = 1,05·uₙ + 10 : en B3, saisir « =1,05*B2+10 » puis recopier vers le bas. La colonne affiche tous les termes.' },
      { t: 'tip', h: 'À retenir', c: 'Le tableur calcule les termes de proche en proche : une **formule** en fonction de la cellule du dessus, puis **recopie**.' },
    ]),
  ],
  'math-c3': [
    S('📐 Les formules de dérivation', [
      { t: 'p', c: 'La **dérivée** f ′ se calcule avec des formules à connaître, et des règles d’opérations.' },
      { t: 'table', head: ['f(x)', 'f ′(x)'], rows: [
        ['k (constante)', '0'], ['x', '1'], ['x²', '2x'], ['xⁿ', 'n·xⁿ⁻¹'], ['1/x', '−1/x²'],
      ] },
      { t: 'formula', c: '(u + v)′ = u′ + v′     (k·u)′ = k·u′' },
      { t: 'example', h: 'Exemple', c: 'f(x) = 3x² − 5x + 2 → f ′(x) = 3·(2x) − 5·(1) + 0 = **6x − 5**.' },
      { t: 'tip', h: 'À retenir', c: 'On dérive **terme par terme** : chaque puissance descend son exposant (n·xⁿ⁻¹), une constante disparaît.' },
    ]),
    S('📊 Étudier une fonction : la méthode complète', [
      { t: 'p', c: 'Étudier les variations d’une fonction suit toujours les mêmes étapes.' },
      { t: 'list', c: [
        '**1.** Calculer f ′(x).',
        '**2.** Résoudre f ′(x) = 0 et étudier son **signe**.',
        '**3.** En déduire le **tableau de variations** (f croît quand f ′ > 0).',
        '**4.** Repérer les **extremums** (là où f ′ change de signe).',
      ] },
      { t: 'example', h: 'Exemple', c: 'f(x) = −x² + 4x → f ′(x) = −2x + 4, nulle en x = 2. f ′ passe de + à − → **maximum** en x = 2, f(2) = 4.' },
      { t: 'tip', h: 'À retenir', c: 'Le **signe de f ′** donne les variations : + = croissante, − = décroissante. Un maximum = passage de + à −.' },
    ]),
    S('🏭 Optimiser un bénéfice ou un coût', [
      { t: 'p', c: 'La dérivée sert à **optimiser** en gestion : trouver la quantité qui **maximise le bénéfice** ou **minimise le coût**.' },
      { t: 'example', h: 'Exemple', c: 'Bénéfice B(x) = −2x² + 40x − 120. B ′(x) = −4x + 40 = 0 → x = 10. Maximum en x = 10 : B(10) = −200 + 400 − 120 = **80**.' },
      { t: 'tip', h: 'Réflexe', c: 'Maximiser/minimiser → chercher là où **f ′ s’annule en changeant de signe**. Toujours donner la valeur optimale **et** le résultat correspondant.' },
    ]),
    S('👀 Lecture graphique', [
      { t: 'p', c: 'Sans calcul, une courbe se lit : là où elle **monte**, f ′ > 0 ; là où elle **descend**, f ′ < 0 ; à un **sommet** ou un **creux**, f ′ = 0.' },
      { t: 'p', c: 'Le **nombre dérivé f ′(a)** est le **coefficient directeur de la tangente** au point d’abscisse a. Une tangente horizontale ⇒ f ′(a) = 0.' },
      { t: 'tip', h: 'À retenir', c: 'Tangente **montante** → f ′(a) > 0 ; **horizontale** → f ′(a) = 0 ; **descendante** → f ′(a) < 0.' },
    ]),
  ],
  'math-c4': [
    S('📈 Le point moyen et l’ajustement affine', [
      { t: 'p', c: 'Pour un nuage de points (xᵢ ; yᵢ), le **point moyen G** a pour coordonnées les moyennes : G(x̄ ; ȳ). La **droite d’ajustement** (moindres carrés) passe toujours par G.' },
      { t: 'formula', c: 'Droite d’ajustement : y = a·x + b   (a et b donnés par la calculatrice)' },
      { t: 'tip', h: 'À retenir', c: 'La droite d’ajustement modélise le lien entre x et y **si les points sont bien alignés**. Elle passe par le **point moyen G**.' },
    ]),
    S('🧮 Régression à la calculatrice (pas à pas)', [
      { t: 'list', c: [
        '**1.** Saisir les données dans deux listes (L1 = x, L2 = y).',
        '**2.** Choisir la **régression linéaire** (ax + b).',
        '**3.** Lire **a** (pente) et **b** (ordonnée à l’origine).',
        '**4.** Écrire l’équation y = a·x + b.',
      ] },
      { t: 'tip', h: 'Astuce', c: 'Arrondir a et b selon l’énoncé (souvent 2 ou 3 décimales). Vérifier l’ordre de grandeur avec un point du nuage.' },
    ]),
    S('🔮 Interpoler, extrapoler, interpréter', [
      { t: 'p', c: 'Une fois y = a·x + b obtenu, on **estime** un y pour un x donné. **Interpolation** : à l’intérieur des données (fiable). **Extrapolation** : au-delà (plus risqué).' },
      { t: 'example', h: 'Exemple', c: 'y = 2,5x + 40 (CA en k€ selon la pub en k€). Pour x = 20 : y ≈ **90 k€**. a = 2,5 : chaque 1 000 € de pub rapporte 2 500 € de CA.' },
      { t: 'tip', h: 'À retenir', c: 'a = variation de y quand x augmente de 1 ; b = valeur de y quand x = 0. Toujours **interpréter** dans le contexte.' },
    ]),
    S('⚠️ Corrélation n’est pas causalité', [
      { t: 'p', c: 'Deux variables peuvent évoluer ensemble sans que l’une **cause** l’autre : c’est le piège de la **corrélation ≠ causalité**.' },
      { t: 'example', h: 'Exemple', c: 'Les ventes de glaces et les noyades augmentent l’été **ensemble** : la vraie cause commune est la **chaleur**, pas un lien direct.' },
      { t: 'tip', h: 'À retenir', c: 'Un ajustement montre une **relation statistique**, pas forcément une **cause**. Rester prudent dans l’interprétation.' },
    ]),
  ],
  'math-c5': [
    S('🌳 Construire et lire un arbre pondéré', [
      { t: 'p', c: 'L’**arbre pondéré** représente une expérience en plusieurs étapes. Chaque branche porte une probabilité ; les branches d’un même nœud somment à **1**.' },
      { t: 'formula', c: 'Probabilité d’un chemin = produit des probabilités le long du chemin' },
      { t: 'example', h: 'Exemple', c: 'P(A) = 0,6 et P_A(B) = 0,3 → P(A ∩ B) = 0,6 × 0,3 = **0,18**.' },
      { t: 'tip', h: 'À retenir', c: 'On **multiplie** le long d’un chemin, on **additionne** les chemins menant au même résultat.' },
    ]),
    S('➕ La formule des probabilités totales', [
      { t: 'p', c: 'Quand un événement B peut arriver via A **ou** via Ā, on additionne les deux chemins.' },
      { t: 'formula', c: 'P(B) = P(A)·P_A(B) + P(Ā)·P_Ā(B)' },
      { t: 'example', h: 'Exemple', c: 'Machine A (60 %, 2 % défauts), machine B (40 %, 5 %). P(défaut) = 0,6×0,02 + 0,4×0,05 = **0,032**.' },
      { t: 'tip', h: 'À retenir', c: 'Repérer **tous les chemins** menant à l’événement, calculer chacun (produit), puis **additionner**.' },
    ]),
    S('🧮 Du tableau croisé aux probabilités', [
      { t: 'p', c: 'Un **tableau croisé d’effectifs** permet de lire directement des probabilités : on divise l’effectif concerné par l’effectif total (ou par un total de ligne/colonne pour une probabilité conditionnelle).' },
      { t: 'example', h: 'Exemple', c: 'Sur 200 clients, 120 satisfaits dont 90 fidèles. P(fidèle sachant satisfait) = 90 ÷ 120 = **0,75**.' },
      { t: 'tip', h: 'À retenir', c: 'Probabilité conditionnelle depuis un tableau = effectif de l’intersection ÷ **effectif du sous-groupe** (pas le total).' },
    ]),
  ],
  'math-c6': [
    S('🎯 Reconnaître un schéma de Bernoulli', [
      { t: 'p', c: 'On peut utiliser la loi binomiale si l’expérience est un **schéma de Bernoulli** : n répétitions **identiques et indépendantes** d’une épreuve à **deux issues** (succès/échec), avec une probabilité de succès **p constante**.' },
      { t: 'p', c: 'La variable X compte alors le **nombre de succès** : X suit **B(n ; p)**.' },
      { t: 'tip', h: 'À retenir', c: 'Justifier **4 points** : deux issues, n répétitions, indépendance, p constant. C’est souvent la première question notée.' },
    ]),
    S('🧮 Calculatrice : P(X = k), P(X ≤ k), P(X ≥ k)', [
      { t: 'formula', c: 'P(X = k) = C(n, k) · pᵏ · (1 − p)ⁿ⁻ᵏ' },
      { t: 'list', c: [
        '**P(X = k)** : binomFdp(n, p, k).',
        '**P(X ≤ k)** : binomFRép(n, p, k).',
        '**P(X ≥ k)** = 1 − P(X ≤ k − 1).',
      ] },
      { t: 'warning', h: 'Traduire l’énoncé', c: '« au moins k » → P(X ≥ k) = 1 − P(X ≤ k−1). « au plus k » → P(X ≤ k). « exactement k » → P(X = k).' },
    ]),
    S('📊 Espérance et écart-type', [
      { t: 'formula', c: 'E(X) = n·p     σ(X) = √( n·p·(1 − p) )' },
      { t: 'example', h: 'Exemple', c: 'B(50 ; 0,5) : E(X) = 25 (nombre moyen de succès). σ = √(50×0,5×0,5) = √12,5 ≈ 3,54.' },
      { t: 'tip', h: 'À retenir', c: 'E(X) = np est le nombre **moyen** de succès attendu sur un grand nombre de répétitions.' },
    ]),
    S('🧩 Exercice type — contrôle qualité', [
      { t: 'p', c: '**Énoncé.** 5 % des pièces sont défectueuses ; on prélève 20 pièces (indépendance). X = nombre de défectueuses.' },
      { t: 'example', h: 'Résolution', c: 'X ~ B(20 ; 0,05). E(X) = 20 × 0,05 = **1**. P(X = 0) = 0,95²⁰ ≈ **0,358**. P(X ≥ 1) = 1 − 0,358 = **0,642**.' },
      { t: 'tip', h: 'Méthode', c: 'Écrire **X ~ B(n ; p)**, traduire la question, calculer à la **calculatrice**, interpréter.' },
    ]),
  ],
  'math-c7': [
    S('🔔 La loi normale à la calculatrice', [
      { t: 'p', c: 'La **loi normale N(μ ; σ)** modélise des grandeurs réparties autour d’une moyenne μ (courbe en cloche). Une probabilité P(a ≤ X ≤ b) = **aire sous la courbe**, calculée par **normalFRép(a, b, μ, σ)**.' },
      { t: 'p', c: 'La courbe est **symétrique** autour de μ : P(X ≤ μ) = P(X ≥ μ) = 0,5.' },
      { t: 'tip', h: 'À retenir', c: 'Identifier **μ** (centre) et **σ** (dispersion), puis utiliser la calculatrice pour l’aire entre deux bornes.' },
    ]),
    S('📏 Les plages 68 / 95 / 99,7 %', [
      { t: 'table', head: ['Intervalle', 'Probabilité'], rows: [
        ['[ μ − σ ; μ + σ ]', '≈ 0,68'],
        ['[ μ − 2σ ; μ + 2σ ]', '≈ 0,95'],
        ['[ μ − 3σ ; μ + 3σ ]', '≈ 0,997'],
      ] },
      { t: 'example', h: 'Exemple', c: 'X ~ N(250 ; 4). P(246 ≤ X ≤ 254) = P(μ−σ ≤ X ≤ μ+σ) ≈ **0,68** (68 % des paquets).' },
      { t: 'tip', h: 'À retenir', c: 'Ces trois plages (68/95/99,7 %) sont à connaître par cœur : elles évitent parfois la calculatrice.' },
    ]),
    S('🎯 L’intervalle de confiance — méthode', [
      { t: 'p', c: 'Pour **estimer** une proportion inconnue à partir d’un échantillon (fréquence observée f, taille n), on donne un **intervalle de confiance à 95 %**.' },
      { t: 'formula', c: 'IC 95 % = [ f − 1/√n ; f + 1/√n ]' },
      { t: 'example', h: 'Exemple', c: 'n = 400, f = 0,60 : 1/√400 = 0,05 → IC = **[0,55 ; 0,65]**. On estime la proportion réelle entre 55 % et 65 %.' },
      { t: 'tip', h: 'À retenir', c: 'Amplitude = 2/√n : plus n est **grand**, plus l’intervalle est **précis**. Diviser l’amplitude par 2 ⇒ **× 4** l’échantillon.' },
    ]),
    S('🧮 Exercice type — sondage', [
      { t: 'p', c: '**Énoncé.** Sondage sur 625 personnes : 52 % favorables. Donner l’intervalle de confiance à 95 % et conclure.' },
      { t: 'example', h: 'Résolution', c: '1/√625 = 1/25 = 0,04 → IC = [0,52 − 0,04 ; 0,52 + 0,04] = **[0,48 ; 0,56]**.' },
      { t: 'p', c: '**Conclusion.** L’intervalle **contient 50 %** : on ne peut pas affirmer que la majorité est favorable. Le résultat n’est **pas significatif**.' },
      { t: 'tip', h: 'Méthode', c: 'IC = f ± 1/√n, puis **interpréter** : l’intervalle franchit-il un seuil clé (50 %) ?' },
    ]),
  ],

  // #####################################################################
  // GÉOGRAPHIE
  // #####################################################################
  'hg-g1': [
    S('🚢 Étude de cas — un point de passage stratégique', [
      { t: 'p', c: 'Le **canal de Suez** (Égypte) relie la Méditerranée à la mer Rouge : il évite le contournement de l’Afrique et fait gagner des milliers de kilomètres. Environ **10 % du commerce mondial** y transite.' },
      { t: 'p', c: 'En 2021, le blocage du canal par un porte-conteneurs (l’*Ever Given*) a **paralysé** le commerce mondial plusieurs jours : preuve de la **vulnérabilité** de ces points de passage. Suez, Panama, Ormuz, Malacca sont des **verrous** stratégiques que les États cherchent à sécuriser.' },
      { t: 'tip', h: 'À retenir', c: 'Un **point de passage** (détroit, canal) concentre les flux : stratégique **et** vulnérable (blocage, piraterie, tensions).' },
    ]),
    S('📊 Chiffres clés et acteurs de la maritimisation', [
      { t: 'list', c: [
        '**≈ 80 %** du commerce mondial de marchandises passe par la mer.',
        'La **conteneurisation** a standardisé et abaissé les coûts du transport.',
        'Les **hubs** mondiaux : Shanghai, Singapour, Rotterdam.',
        'Les **câbles sous-marins** portent l’essentiel des données d’Internet.',
      ] },
      { t: 'p', c: 'Acteurs : les **armateurs** (compagnies maritimes géantes), les **ports**, les **États** (ZEE, marines militaires) et les **firmes** qui organisent les chaînes logistiques mondiales.' },
      { t: 'tip', h: 'À retenir', c: 'La **maritimisation** = poids croissant de la mer dans l’économie mondialisée (marchandises, énergie, données).' },
    ]),
    S('📚 Vocabulaire de la géographie des océans', [
      { t: 'table', head: ['Terme', 'Définition'], rows: [
        ['ZEE', 'Zone économique exclusive (200 milles marins) : droits d’exploitation'],
        ['Maritimisation', 'Importance croissante de la mer dans l’économie'],
        ['Hub portuaire', 'Grand port de correspondance des flux'],
        ['Route maritime', 'Axe majeur de circulation des navires'],
      ] },
      { t: 'tip', h: 'À retenir', c: 'Associer chaque terme à un **exemple** (ZEE française outre-mer, hub = Singapour, route = Asie-Europe).' },
    ]),
  ],
  'hg-g2': [
    S('🌆 Étude de cas — une métropole mondiale', [
      { t: 'p', c: 'Une **métropole mondiale** (Londres, New York, Tokyo, Shanghai) concentre les fonctions de **commandement** : sièges sociaux, bourses, universités, aéroports internationaux. Elle est connectée aux autres métropoles plus qu’à son propre arrière-pays.' },
      { t: 'p', c: 'Ces villes forment un **archipel mégalopolitain mondial** : un réseau de pôles reliés par les flux (capitaux, informations, personnes). C’est le cœur de la mondialisation.' },
      { t: 'tip', h: 'À retenir', c: 'La **métropolisation** concentre pouvoir et richesse dans quelques grandes villes connectées (l’**archipel mondial**).' },
    ]),
    S('🌍 La Triade et les émergents', [
      { t: 'table', head: ['Groupe', 'Caractéristique'], rows: [
        ['Triade', 'Amérique du Nord, Europe, Asie de l’Est : pôles dominants'],
        ['Émergents (BRICS)', 'Chine, Inde, Brésil… : montée en puissance rapide'],
        ['En marge', 'Nombre de PMA, peu connectés aux flux'],
      ] },
      { t: 'p', c: 'La mondialisation est **sélective** : elle intègre fortement la Triade, intègre de plus en plus les **émergents** (surtout la Chine), et laisse des espaces **à l’écart**.' },
      { t: 'tip', h: 'À retenir', c: 'Territoires **intégrés / émergents / en marge** : la mondialisation crée des gagnants et des perdants.' },
    ]),
    S('📉 Les territoires en marge', [
      { t: 'p', c: 'Certains espaces restent **à l’écart** de la mondialisation : nombre de **pays les moins avancés (PMA)**, mais aussi, à l’intérieur des pays riches, des régions rurales isolées ou d’anciennes zones industrielles en déclin.' },
      { t: 'p', c: 'Les causes : enclavement, manque d’infrastructures, faible qualification, instabilité. Les inégalités se creusent **entre** pays et **à l’intérieur** des pays.' },
      { t: 'tip', h: 'À retenir', c: 'La mondialisation **fragmente** les territoires : des pôles gagnants, des marges perdantes, à toutes les échelles.' },
    ]),
    S('📚 Vocabulaire clé de la mondialisation', [
      { t: 'table', head: ['Terme', 'Définition'], rows: [
        ['Métropolisation', 'Concentration des activités et du pouvoir dans les grandes villes'],
        ['FTN', 'Firme transnationale : entreprise implantée dans plusieurs pays'],
        ['DIT', 'Division internationale du travail'],
        ['Archipel mondial', 'Réseau des métropoles connectées entre elles'],
      ] },
      { t: 'tip', h: 'À retenir', c: 'Un vocabulaire précis + un exemple par notion = des points faciles à l’épreuve.' },
    ]),
  ],
  'hg-g3': [
    S('🇪🇺 L’Union européenne : fonctionnement et enjeux', [
      { t: 'p', c: 'L’**Union européenne** (27 États) est une organisation d’intégration unique : un **marché unique** (libre circulation des biens, services, capitaux, personnes), une monnaie commune (l’**euro**) pour une partie des États, et des politiques communes.' },
      { t: 'p', c: 'La France en est un **membre fondateur**. Repères : traité de **Rome** (1957), **Maastricht** (1992, création de l’UE), **euro** (2002). L’UE structure fortement le territoire français (échanges, aménagement, frontières ouvertes).' },
      { t: 'tip', h: 'À retenir', c: 'UE = **marché unique** + intégration poussée. La France, membre fondateur, y réalise l’essentiel de ses échanges.' },
    ]),
    S('🌐 Paris, ville mondiale (étude de cas)', [
      { t: 'p', c: '**Paris** est la seule métropole française de rang mondial : fonctions de commandement (sièges, bourse), 1er pôle touristique mondial, hub aérien (Roissy), pôle universitaire et culturel. Elle connecte la France à la mondialisation.' },
      { t: 'p', c: 'Mais Paris concentre aussi les richesses au détriment du reste du territoire (débat sur la « France périphérique »).' },
      { t: 'tip', h: 'À retenir', c: 'Paris = **métropole mondiale** et porte d’entrée de la France dans la mondialisation, mais source de **déséquilibres** territoriaux.' },
    ]),
    S('🏭 Façades, frontières et territoires français', [
      { t: 'p', c: 'La France s’insère dans la mondialisation par ses **façades maritimes** (Le Havre, Marseille), ses **frontières** ouvertes avec ses voisins de l’UE, et son vaste **domaine ultramarin** (2e ZEE mondiale).' },
      { t: 'p', c: 'Les territoires sont **inégalement intégrés** : métropoles et façades dynamiques d’un côté, espaces ruraux ou industriels en difficulté de l’autre.' },
      { t: 'tip', h: 'À retenir', c: 'Atouts : **façades**, **frontières UE**, **outre-mer** (ZEE). Mais une intégration **inégale** selon les territoires.' },
    ]),
    S('📚 Vocabulaire clé — France et mondialisation', [
      { t: 'table', head: ['Terme', 'Définition'], rows: [
        ['Marché unique', 'Espace de libre circulation dans l’UE'],
        ['Façade maritime', 'Littoral équipé de grands ports, ouvert sur le monde'],
        ['Ultramarin', 'Relatif aux territoires français d’outre-mer'],
        ['Attractivité', 'Capacité à attirer entreprises, talents, touristes'],
      ] },
      { t: 'tip', h: 'À retenir', c: 'Toujours illustrer : marché unique (UE), façade (Le Havre), ultramarin (ZEE), attractivité (Paris).' },
    ]),
  ],

  // #####################################################################
  // ACTUALITÉ ÉCONOMIQUE
  // #####################################################################
  'eco-actu': [
    S('📊 Lire un graphique économique', [
      { t: 'p', c: 'Un graphique se **décrit** avant de s’**interpréter**. On repère : le **titre**, les **axes** (unités !), la **source**, la **période**, puis la **tendance** générale (hausse, baisse, stabilité) et les **ruptures** (pics, chutes).' },
      { t: 'warning', h: 'Piège', c: 'Bien distinguer une **valeur** (en euros, en %) d’un **taux d’évolution** (variation en %). Et vérifier si l’axe commence à zéro (sinon l’effet visuel est trompeur).' },
      { t: 'tip', h: 'Méthode', c: 'Décrire (que montre le graphique ?) → chiffrer (donner des valeurs) → expliquer (avec le cours).' },
    ]),
    S('🔎 Où trouver des chiffres fiables', [
      { t: 'list', c: [
        '**INSEE** : statistiques françaises (PIB, chômage, prix).',
        '**Eurostat** : données de l’Union européenne.',
        '**Banque de France / BCE** : monnaie, taux, inflation.',
        '**OCDE, FMI, Banque mondiale** : comparaisons internationales.',
      ] },
      { t: 'tip', h: 'Réflexe', c: 'Citer une **source officielle** et une **date** renforce la crédibilité. Se méfier des chiffres sans source.' },
    ]),
    S('🧭 Relier l’actualité aux chapitres du programme', [
      { t: 'table', head: ['Actualité', 'Chapitre du cours'], rows: [
        ['Hausse des prix (inflation)', 'Rôle de l’État, politique monétaire (BCE)'],
        ['Plan de relance / déficit', 'Rôle de l’État, dette publique'],
        ['Chômage, réformes de l’emploi', 'Emploi et chômage'],
        ['Guerre commerciale, droits de douane', 'Commerce international'],
        ['Transition écologique, taxe carbone', 'Croissance et développement durable'],
      ] },
      { t: 'tip', h: 'À retenir', c: 'Une actu bien reliée à une **notion du cours** est très valorisée : montre que tu comprends, pas que tu récites.' },
    ]),
    S('📚 Le vocabulaire économique de l’actualité', [
      { t: 'table', head: ['Terme', 'Sens'], rows: [
        ['Inflation', 'Hausse générale et durable des prix'],
        ['Pouvoir d’achat', 'Ce que le revenu permet d’acheter'],
        ['Récession', 'Recul de l’activité (PIB) sur plusieurs trimestres'],
        ['Relance', 'Politique de soutien de l’activité'],
      ] },
      { t: 'tip', h: 'À retenir', c: 'Maîtriser ce vocabulaire permet de **comprendre un article** et de le relier au cours.' },
    ]),
    S('✍️ Méthode — commenter un chiffre d’actualité', [
      { t: 'list', c: [
        '**1.** Lire le chiffre **précisément** (valeur, unité, période, source).',
        '**2.** Le **situer** : par rapport à l’an dernier ? à un objectif ? à un autre pays ?',
        '**3.** L’**expliquer** avec une notion du cours.',
        '**4.** En tirer une **conséquence** ou une limite.',
      ] },
      { t: 'example', h: 'Exemple', c: '« L’inflation atteint 5 % sur un an (INSEE). C’est élevé : le pouvoir d’achat baisse si les salaires suivent moins vite. La BCE peut relever ses taux pour la freiner. »' },
      { t: 'tip', h: 'Réflexe', c: 'Ne jamais laisser un chiffre **seul** : le situer, l’expliquer, le nuancer.' },
    ]),
    S('🗞️ Exemple d’actualité commentée', [
      { t: 'p', c: '**Sujet : la hausse des prix de l’énergie.** Face à la flambée des prix du gaz et de l’électricité, l’État a mis en place un « bouclier tarifaire ».' },
      { t: 'p', c: '**Analyse.** C’est une intervention de l’État (fonction de **stabilisation** et de **répartition**) qui protège le pouvoir d’achat. **Limite** : le coût creuse le **déficit**, et plafonner les prix peut retarder les économies d’énergie.' },
      { t: 'tip', h: 'À retenir', c: 'Relier l’actu au cours (rôle de l’État), donner un **avantage** et une **limite** : c’est la structure attendue.' },
    ]),
  ],

  // #####################################################################
  // MERCATIQUE
  // #####################################################################
  'mkg-t1': [
    S('🧾 Mémo — les notions clés du consommateur', [
      { t: 'table', head: ['Notion', 'Définition'], rows: [
        ['Besoin', 'Sensation de manque (Maslow : 5 niveaux)'],
        ['Motivation / mobile', 'Force qui pousse à l’achat (hédoniste, oblatif, auto-expression)'],
        ['Frein', 'Force qui retient (peur, risque, inhibition)'],
        ['Attente', 'Ce que le client espère précisément'],
      ] },
      { t: 'tip', h: 'À retenir', c: 'Un achat = équilibre **mobiles** (pousser) / **freins** (retenir). Le marketing renforce les uns et lève les autres.' },
    ]),
    S('🧑‍💼 Étude de cas — analyser un comportement d’achat', [
      { t: 'p', c: '**Énoncé.** Une cliente hésite longuement puis achète une voiture électrique plus chère qu’une thermique équivalente. Analysez.' },
      { t: 'example', h: 'Étape 1 — Besoins et mobiles', c: 'Besoin de mobilité, mais aussi d’**estime** et mobile **d’auto-expression** (image écologique, valeurs).' },
      { t: 'example', h: 'Étape 2 — Freins', c: 'Frein **financier** (prix élevé) et frein **risque** (autonomie, recharge), qui expliquent l’hésitation.' },
      { t: 'p', c: '**Conclusion.** Le vendeur doit **lever les freins** (aides à l’achat, garantie batterie, démonstration de l’autonomie) et **renforcer les mobiles** (valeurs, économies à l’usage). C’est un **achat réfléchi**.' },
      { t: 'tip', h: 'Méthode', c: 'Identifier besoin → mobiles → freins → montrer comment la mercatique agit dessus.' },
    ]),
  ],
  'mkg-t2': [
    S('📐 Calculer et interpréter une part de marché', [
      { t: 'formula', c: 'Part de marché (%) = Ventes de l’entreprise ÷ Ventes totales du marché × 100' },
      { t: 'example', h: 'Exemple', c: 'Ventes 4,5 M€ ; marché 30 M€ → 4,5 ÷ 30 × 100 = **15 %**. L’entreprise détient 15 % du marché.' },
      { t: 'p', c: 'La **part de marché relative** compare l’entreprise au **leader** : elle situe la position concurrentielle.' },
      { t: 'tip', h: 'À retenir', c: 'Part de marché = poids sur le marché total ; part **relative** = face au leader.' },
    ]),
    S('🧭 Le positionnement : la carte perceptuelle', [
      { t: 'p', c: 'Le **positionnement** est l’image que l’entreprise veut occuper dans l’esprit du client, par rapport aux concurrents. On le visualise avec une **carte perceptuelle** (deux axes, ex. prix et qualité).' },
      { t: 'p', c: 'Un bon positionnement est **clair, distinctif et crédible** : il répond à « pourquoi me choisir plutôt qu’un autre ? ». Il oriente ensuite tout le **mix**.' },
      { t: 'tip', h: 'À retenir', c: 'Positionner = choisir une **place distinctive**. La carte perceptuelle montre les espaces libres face aux concurrents.' },
    ]),
    S('🧑‍💼 Étude de cas — segmenter, cibler, positionner', [
      { t: 'p', c: '**Énoncé.** Une marque de cosmétiques veut lancer une gamme. Appliquez la démarche SCP.' },
      { t: 'example', h: 'SCP', c: '**Segmenter** (âge, valeurs, budget) → **Cibler** un segment porteur (jeunes adultes, produits naturels) → **Positionner** (« cosmétique naturel et accessible »).' },
      { t: 'p', c: '**Conclusion.** Cibler plutôt que viser « tout le monde » ; décliner le positionnement dans tout le mix (produit bio, prix moyen, distribution sélective, communication authentique).' },
      { t: 'tip', h: 'Méthode', c: 'Toujours **Segmenter → Cibler → Positionner**, puis vérifier la cohérence avec le mix.' },
    ]),
  ],
  'mkg-t3': [
    S('🏷️ La politique de produit', [
      { t: 'p', c: 'Le **produit** se gère sur plusieurs plans : la **gamme** (ensemble des produits, largeur et profondeur), la **marque** (nom, logo, image), et le **cycle de vie**.' },
      { t: 'table', head: ['Phase du cycle de vie', 'Enjeu'], rows: [
        ['Lancement', 'Faire connaître, investir'],
        ['Croissance', 'Gagner des parts de marché'],
        ['Maturité', 'Fidéliser, se différencier'],
        ['Déclin', 'Relancer ou retirer'],
      ] },
      { t: 'tip', h: 'À retenir', c: 'Un produit **naît, grandit, mûrit et décline** : la stratégie s’adapte à chaque phase.' },
    ]),
    S('🚚 La politique de distribution', [
      { t: 'p', c: 'La **distribution** amène le produit au client via des **circuits** : **direct** (sans intermédiaire), **court** (un intermédiaire), **long** (plusieurs).' },
      { t: 'table', head: ['Intensité', 'Principe', 'Exemple'], rows: [
        ['Intensive', 'Partout, un maximum de points de vente', 'Boissons, snacks'],
        ['Sélective', 'Points de vente choisis', 'Cosmétiques, électroménager'],
        ['Exclusive', 'Très peu de distributeurs', 'Luxe, automobile haut de gamme'],
      ] },
      { t: 'tip', h: 'À retenir', c: 'Le choix du circuit et de l’intensité doit être **cohérent** avec le positionnement (le luxe ne se vend pas partout).' },
    ]),
    S('📣 La politique de communication', [
      { t: 'p', c: 'La **communication** fait connaître et aimer le produit. On distingue les moyens **média** (TV, radio, presse, affichage, internet) et **hors-média** (promotion des ventes, relations publiques, marketing direct, réseaux sociaux, influence).' },
      { t: 'p', c: 'La communication **commerciale** vise à vendre un produit ; la communication **institutionnelle** valorise l’image de l’entreprise.' },
      { t: 'tip', h: 'À retenir', c: 'Média (grand public) vs hors-média (ciblé). Aujourd’hui, **réseaux sociaux** et **influence** pèsent souvent plus que la pub classique.' },
    ]),
  ],
  'mkg-t4': [
    S('📱 Marketing digital et réseaux sociaux', [
      { t: 'p', c: 'Le **marketing digital** utilise le web, les applications et les réseaux sociaux pour toucher, engager et fidéliser les clients. Il permet un **ciblage précis** et une **mesure en temps réel** (taux de clic, de conversion).' },
      { t: 'list', c: [
        '**Référencement** (SEO/SEA) : être visible sur les moteurs de recherche.',
        '**Réseaux sociaux** : communauté, contenu, influence.',
        '**E-mailing / marketing direct** : messages ciblés.',
      ] },
      { t: 'tip', h: 'À retenir', c: 'Le digital = **ciblage** + **mesure** + **interactivité**. Le parcours client est devenu **omnicanal**.' },
    ]),
    S('🔒 Données personnelles et RGPD (méthode)', [
      { t: 'p', c: 'Exploiter les **données** clients est puissant mais encadré par le **RGPD**. Avant toute collecte, se poser les bonnes questions.' },
      { t: 'list', c: [
        '**Finalité** : pour quel but précis ?',
        '**Consentement** : la personne a-t-elle accepté ?',
        '**Minimisation** : ne collecter que le nécessaire.',
        '**Droits** : accès, rectification, effacement.',
      ] },
      { t: 'tip', h: 'À retenir', c: 'Data = atout **et** responsabilité. Un usage **transparent et consenti** renforce la confiance ; le non-respect du RGPD expose à des sanctions.' },
    ]),
    S('🌱 Étude de cas — marketing responsable', [
      { t: 'p', c: '**Énoncé.** Une marque de vêtements accusée de « fast fashion » veut redorer son image. Que proposer ?' },
      { t: 'example', h: 'Analyse', c: 'Risque de **greenwashing** si la communication verte n’est pas suivie d’actes. Il faut des **preuves** : matières recyclées, reprise des vêtements, transparence, label.' },
      { t: 'p', c: '**Conclusion.** Une mercatique **responsable sincère** peut devenir un **avantage concurrentiel** ; un greenwashing découvert détruit la confiance.' },
      { t: 'tip', h: 'Méthode', c: 'Distinguer démarche **sincère** (prouvée) et **greenwashing** (façade). La e-réputation se surveille.' },
    ]),
  ],

  // #####################################################################
  // RESSOURCES HUMAINES & COMMUNICATION
  // #####################################################################
  'rh-t1': [
    S('📊 Les théories de la motivation', [
      { t: 'table', head: ['Théorie', 'Idée clé'], rows: [
        ['Taylor (OST)', 'La motivation passe par le salaire'],
        ['Maslow', 'Besoins hiérarchisés (pyramide)'],
        ['Herzberg', 'Facteurs d’hygiène ≠ facteurs de motivation'],
        ['Mayo', 'Reconnaissance et relations sociales motivent'],
      ] },
      { t: 'p', c: 'La distinction de **Herzberg** est centrale : le salaire et les conditions évitent le **mécontentement** (hygiène) mais ne motivent pas durablement ; la reconnaissance, l’intérêt et l’évolution **motivent** vraiment.' },
      { t: 'tip', h: 'À retenir', c: 'Un bon salaire évite l’insatisfaction mais ne suffit pas à **motiver**.' },
    ]),
    S('🎓 GPEC et développement des compétences', [
      { t: 'p', c: 'La **GPEC** (gestion prévisionnelle des emplois et des compétences) **anticipe** les besoins futurs : quels métiers vont évoluer, quelles compétences développer ? Elle évite de subir les changements.' },
      { t: 'p', c: 'Leviers de développement : **formation**, **tutorat**, **mobilité** interne, **VAE**. La compétence = **savoir + savoir-faire + savoir-être**.' },
      { t: 'tip', h: 'À retenir', c: 'GPEC = anticiper les compétences. La formation adapte les salariés aux évolutions (et lutte contre le chômage structurel).' },
    ]),
    S('💶 La politique de rémunération', [
      { t: 'table', head: ['Composante', 'Exemple'], rows: [
        ['Salaire fixe', 'Base mensuelle'],
        ['Part variable', 'Primes, commissions'],
        ['Périphériques', 'Participation, intéressement, avantages'],
        ['Reconnaissance non monétaire', 'Évolution, autonomie'],
      ] },
      { t: 'p', c: 'Une rémunération perçue comme **équitable** (en interne et face au marché) motive ; un sentiment d’injustice démotive fortement.' },
      { t: 'tip', h: 'À retenir', c: 'La rémunération combine fixe, variable et périphériques ; son **équité** perçue est décisive.' },
    ]),
  ],
  'rh-t2': [
    S('🤝 Groupe, équipe et culture d’entreprise', [
      { t: 'p', c: 'Une **équipe** est un groupe orienté vers un **objectif commun**, avec des rôles complémentaires. La **cohésion** l’unit ; la **culture d’entreprise** (valeurs, rites, histoire) renforce le sentiment d’appartenance.' },
      { t: 'warning', h: 'Limite', c: 'Une cohésion **excessive** crée du **conformisme** (pensée de groupe) : plus personne n’ose contredire, ce qui nuit aux décisions.' },
      { t: 'tip', h: 'À retenir', c: 'La cohésion est une force **jusqu’à un point** ; une bonne équipe reste **soudée ET critique**.' },
    ]),
    S('⚔️ Typologie et résolution des conflits', [
      { t: 'table', head: ['Type de conflit', 'Origine'], rows: [
        ['D’intérêts', 'Objectifs/avantages incompatibles'],
        ['De valeurs', 'Visions opposées'],
        ['De personnes', 'Incompatibilités relationnelles'],
        ['De pouvoir', 'Lutte d’influence'],
      ] },
      { t: 'p', c: 'Résolution, du plus subi au plus constructif : **recours hiérarchique** (le chef tranche), **négociation**, **médiation** (un tiers aide), **arbitrage** (un tiers décide).' },
      { t: 'tip', h: 'À retenir', c: 'Privilégier la **négociation gagnant-gagnant** ; un conflit bien géré peut être **constructif**.' },
    ]),
    S('🧑‍💼 Étude de cas — gérer un conflit d’équipe', [
      { t: 'p', c: '**Énoncé.** Deux salariés s’opposent sur la répartition des tâches, ce qui bloque un projet. Que fait le manager ?' },
      { t: 'example', h: 'Démarche', c: 'Identifier la nature (conflit **d’intérêts/organisation**, rôles mal définis) → réunir les parties en **médiation** → clarifier les rôles → poser des règles.' },
      { t: 'p', c: '**Conclusion.** Traité par le dialogue, le conflit renforce l’équipe ; ignoré, il pourrit le climat.' },
      { t: 'tip', h: 'Méthode', c: 'Identifier → choisir le mode de résolution (médiation) → prévenir la rechute.' },
    ]),
  ],
  'rh-t3': [
    S('📣 Formes et canaux de communication', [
      { t: 'table', head: ['Critère', 'Types'], rows: [
        ['Destinataire', 'Interne (salariés) / Externe (clients, public)'],
        ['Objet', 'Commerciale (vendre) / Institutionnelle (image)'],
        ['Cadre', 'Formelle (officielle) / Informelle (« radio couloir »)'],
      ] },
      { t: 'p', c: 'La **communication globale** vise la **cohérence** de tous ces messages. Le schéma : émetteur → message → canal → récepteur, avec du **feedback** et des **bruits** possibles.' },
      { t: 'tip', h: 'À retenir', c: 'Choisir le **canal** selon le sujet : réunion pour un sujet sensible, mail pour une info simple.' },
    ]),
    S('🚨 La communication de crise', [
      { t: 'p', c: 'Face à un **bad buzz** ou une crise, la règle est : **réagir vite**, être **transparent et honnête**, **assumer** et agir, **parler d’une seule voix**.' },
      { t: 'warning', h: 'À éviter', c: 'Le **silence** et le **mensonge** aggravent tout. Sur les réseaux, la réputation se joue en quelques heures.' },
      { t: 'tip', h: 'À retenir', c: 'Communication de crise = **vitesse + transparence + cohérence**.' },
    ]),
    S('🧑‍💼 Étude de cas — communiquer un changement', [
      { t: 'p', c: '**Énoncé.** Une entreprise doit annoncer une réorganisation à ses salariés. Comment ?' },
      { t: 'example', h: 'Démarche', c: 'Communication **interne, formelle**, sujet **sensible** → privilégier une **réunion** (canal riche) plutôt qu’un mail ; message **clair et honnête** ; temps de **questions** (feedback).' },
      { t: 'p', c: '**Conclusion.** Bien communiquée, la réorganisation limite l’angoisse et les rumeurs ; mal communiquée, elle crée de la résistance.' },
      { t: 'tip', h: 'Méthode', c: 'Type/objectif → canal adapté → message clair → feedback.' },
    ]),
  ],
  'rh-t4': [
    S('⚙️ Coordonner le travail (Mintzberg)', [
      { t: 'table', head: ['Mécanisme', 'Principe'], rows: [
        ['Ajustement mutuel', 'On se coordonne en communiquant (petites équipes)'],
        ['Supervision directe', 'Un chef donne les ordres'],
        ['Standardisation des procédés', 'Procédures écrites'],
        ['Standardisation des résultats', 'On fixe des objectifs'],
        ['Standardisation des qualifications', 'On recrute des experts formés'],
      ] },
      { t: 'tip', h: 'À retenir', c: 'Petite structure → **ajustement mutuel** ; grande → **supervision** et **standardisation**.' },
    ]),
    S('🏥 Conditions de travail et QVT', [
      { t: 'p', c: 'Les **conditions de travail** (environnement, rythme, charge mentale, relations) influencent la santé, la motivation et la performance. La **QVT** (qualité de vie au travail) améliore à la fois le **bien-être** et l’**efficacité**.' },
      { t: 'p', c: 'Enjeux actuels : prévention des **risques psychosociaux** (stress, burn-out, harcèlement), **télétravail**, **droit à la déconnexion**.' },
      { t: 'tip', h: 'À retenir', c: 'De bonnes conditions **améliorent la performance** (moins d’absentéisme, plus d’engagement) : bien-être et efficacité vont de pair.' },
    ]),
    S('📊 Mesurer le climat social', [
      { t: 'table', head: ['Indicateur', 'Ce qu’il révèle'], rows: [
        ['Taux d’absentéisme', 'Démotivation, mauvaises conditions'],
        ['Taux de turnover', 'Départs fréquents, malaise'],
        ['Conflits / grèves', 'Tensions sociales'],
        ['Accidents du travail', 'Problèmes de sécurité'],
      ] },
      { t: 'p', c: 'Rappel : le **coût du travail** (brut + charges patronales) dépasse largement le salaire **net** perçu.' },
      { t: 'tip', h: 'À retenir', c: 'Le climat social se **pilote** avec des indicateurs ; c’est un **faisceau**, pas un seul chiffre.' },
    ]),
  ],

  // #####################################################################
  // SYSTÈMES D'INFORMATION DE GESTION
  // #####################################################################
  'sig-t1': [
    S('💻 Composants et rôle du système d’information', [
      { t: 'p', c: 'Le **système d’information (SI)** rassemble les ressources (humaines, matérielles, logicielles) qui **collectent, stockent, traitent et diffusent** l’information. C’est le « système nerveux » de l’organisation.' },
      { t: 'table', head: ['Fonction', 'Exemple'], rows: [
        ['Collecter', 'Saisir une commande'],
        ['Stocker', 'Base de données'],
        ['Traiter', 'Calculer, éditer un document'],
        ['Diffuser', 'Transmettre au bon service'],
      ] },
      { t: 'tip', h: 'À retenir', c: 'SI = **collecter → stocker → traiter → diffuser** l’information.' },
    ]),
    S('📈 SI et aide à la décision (PGI)', [
      { t: 'p', c: 'Le SI aide à **décider** à tous les niveaux. Le **PGI (ERP)** est un logiciel unique autour d’une **base commune** : une saisie met à jour tous les services (fiabilité, temps réel).' },
      { t: 'p', c: 'On distingue **donnée** (fait brut) → **information** (donnée en contexte) → **connaissance** (information interprétée pour décider).' },
      { t: 'tip', h: 'À retenir', c: 'PGI = base **commune**, une saisie unique. La **qualité des données** conditionne la qualité des décisions.' },
    ]),
    S('🔗 Processus et représentation du SI', [
      { t: 'p', c: 'Un **processus** est une suite d’activités transformant des entrées en sorties (ex. « traiter une commande »). Le **modéliser** (schéma de flux) aide à repérer les dysfonctionnements (ressaisies, étapes inutiles).' },
      { t: 'tip', h: 'À retenir', c: 'Représenter un processus permet de l’**améliorer** : supprimer les doublons, fluidifier l’information.' },
    ]),
  ],
  'sig-t2': [
    S('🗄️ Le modèle relationnel', [
      { t: 'table', head: ['Terme', 'Signification'], rows: [
        ['Table', 'Un tableau de données (CLIENTS)'],
        ['Enregistrement', 'Une ligne (un client)'],
        ['Champ', 'Une colonne (nom, ville)'],
        ['Clé primaire', 'Identifiant unique de la ligne'],
        ['Clé étrangère', 'Lien vers une autre table'],
      ] },
      { t: 'tip', h: 'À retenir', c: 'Base relationnelle = **tables liées par des clés**. Primaire = identifiant unique ; étrangère = lien.' },
    ]),
    S('🔍 SQL — SELECT, FROM, WHERE, ORDER BY', [
      { t: 'formula', c: 'SELECT colonnes FROM table WHERE condition ORDER BY colonne ;' },
      { t: 'example', h: 'Exemple', c: 'SELECT nom, ville FROM CLIENTS WHERE ville = \'Lyon\' ORDER BY nom ;' },
      { t: 'warning', h: 'Pièges', c: 'Guillemets autour du texte, **point-virgule** final, WHERE filtre avant regroupement.' },
      { t: 'tip', h: 'À retenir', c: 'SELECT (quoi) · FROM (où) · WHERE (condition) · ORDER BY (tri).' },
    ]),
    S('🧮 SQL — agrégation et jointures', [
      { t: 'table', head: ['Fonction', 'Rôle'], rows: [
        ['COUNT()', 'Compter'], ['SUM()', 'Additionner'], ['AVG()', 'Moyenne'], ['MAX/MIN', 'Extremum'],
      ] },
      { t: 'example', h: 'Jointure', c: 'SELECT CLIENTS.nom, COMMANDES.montant FROM CLIENTS, COMMANDES WHERE CLIENTS.id = COMMANDES.id_client ;' },
      { t: 'tip', h: 'À retenir', c: 'Agrégation = **calculer** ; jointure = **croiser** deux tables via leur **clé commune**.' },
    ]),
  ],
  'sig-t3': [
    S('🤝 Outils collaboratifs et cloud', [
      { t: 'p', c: 'Les outils **collaboratifs** permettent de travailler ensemble : partage de fichiers, **coédition**, **historique des versions**, messagerie, visio. Ils reposent souvent sur le **cloud** (serveurs distants via Internet).' },
      { t: 'tip', h: 'À retenir', c: 'Cloud = accessibilité et mise à jour automatique, mais enjeux de **sécurité** et de **dépendance**. Définir les **droits d’accès**.' },
    ]),
    S('🧠 L’intelligence collective', [
      { t: 'p', c: 'L’**intelligence collective** = un groupe produit **plus** que la somme des individus (ex. Wikipédia). Le numérique la démultiplie (crowdsourcing, communautés).' },
      { t: 'warning', h: 'Conditions', c: 'Elle exige des **règles** et une **modération** pour rester fiable (risque de désinformation).' },
      { t: 'tip', h: 'À retenir', c: 'Intelligence collective = coopération à grande échelle, encadrée par des règles.' },
    ]),
    S('🔄 La transformation numérique du travail', [
      { t: 'table', head: ['Opportunités', 'Risques'], rows: [
        ['Flexibilité, télétravail', 'Frontière vie pro/perso brouillée'],
        ['Collaboration à distance', 'Isolement'],
        ['Automatisation', 'Surcharge, sécurité'],
      ] },
      { t: 'tip', h: 'À retenir', c: 'Le numérique transforme le travail : plus de flexibilité, mais besoin de **nouvelles compétences** et d’un **droit à la déconnexion**.' },
    ]),
  ],
  'sig-t4': [
    S('🌐 Réseaux et architecture client-serveur', [
      { t: 'p', c: 'Un **réseau** relie des ordinateurs pour **communiquer** et **partager** des ressources. L’architecture la plus courante est le **client-serveur** : les **clients** demandent, le **serveur** fournit (ex. Internet).' },
      { t: 'tip', h: 'À retenir', c: 'Client-serveur : le client **demande**, le serveur **répond**. Un réseau élargit aussi la **surface d’attaque**.' },
    ]),
    S('🔐 Sécurité : DICP et menaces', [
      { t: 'table', head: ['Objectif', 'Signification'], rows: [
        ['Disponibilité', 'Accessible quand il le faut'],
        ['Intégrité', 'Non altérée'],
        ['Confidentialité', 'Réservée aux autorisés'],
        ['Preuve', 'Traçabilité des actions'],
      ] },
      { t: 'p', c: 'Menaces phares : **phishing** (hameçonnage), **ransomware** (rançongiciel), malwares, vol de données. La faille est souvent **humaine**.' },
      { t: 'tip', h: 'À retenir', c: 'Sécurité = **DICP**. Menaces : phishing, ransomware. Premier rempart : la **vigilance** humaine.' },
    ]),
    S('🛡️ Se protéger + RGPD', [
      { t: 'list', c: [
        'Mots de passe forts, double authentification.',
        'Sauvegardes régulières (et hors ligne).',
        'Mises à jour, pare-feu, antivirus.',
        'Gestion des droits d’accès, sensibilisation.',
      ] },
      { t: 'p', c: 'Le **RGPD** encadre les **données personnelles** : consentement, finalité, minimisation, sécurité, droits (accès, effacement). Sanctions par la **CNIL**.' },
      { t: 'tip', h: 'À retenir', c: 'Se protéger = **combiner** technique et humain. Traiter des données = respecter le **RGPD**.' },
    ]),
  ],
}
