// PREMIÈRE STMG — contenu fidèle au cours « Premiere_STMG_Cours_Complet.md ».
// Cours détaillés (format blocs), exemples chiffrés, fiches mémo et jeux.
// Spécialités : Sciences de gestion et numérique, Management, Droit, Économie.
// Tronc commun : Mathématiques, Français (EAF), Histoire-Géographie, Langues.
const yt = (q) => 'https://www.youtube.com/results?search_query=' + encodeURIComponent(q)

// ===========================================================================
// SCIENCES DE GESTION ET NUMÉRIQUE (4 thèmes)
// ===========================================================================
const sgn = {
  id: 'p1-sgn',
  name: 'Sciences de gestion et numérique',
  short: 'Sciences de gestion',
  icon: '💡',
  color: '#0d9488',
  niveau: 'premiere',
  tagline: 'Comment une organisation fonctionne concrètement au quotidien.',
  chapters: [
    {
      id: 'p1-sgn-t1',
      name: 'Thème 1 — De l’individu à l’acteur',
      short: 'De l’individu à l’acteur',
      keywords: 'individu acteur perception émotion compétence qualification communication formelle informelle groupe cohésion conflit coopération',
      intro:
        'Une organisation n’est pas qu’un organigramme : c’est avant tout un **collectif humain**. Chaque individu y arrive avec sa personnalité et ses compétences, et devient peu à peu un **acteur** qui influence l’organisation autant qu’il en est influencé.',
      cours: [
        {
          h: 'L’individu et ses caractéristiques',
          blocks: [
            { t: 'p', c: 'Chaque personne a une **perception** subjective : deux individus vivent le même événement différemment. Elle ressent des **émotions** (joie, stress, colère) qui influencent son comportement au travail.' },
            { t: 'example', h: 'Exemple', c: 'Un salarié stressé par une surcharge de travail communiquera moins bien et fera plus d’erreurs. Comprendre les émotions aide donc à mieux gérer les équipes.' },
          ],
        },
        {
          h: 'Compétences et activité de travail',
          blocks: [
            { t: 'p', c: 'L’individu apporte ses **compétences** = **savoirs** (connaissances) + **savoir-faire** (pratique) + **savoir-être** (comportement). Sa **qualification** (diplômes, expérience) le situe dans l’**organigramme** (la représentation de la structure hiérarchique).' },
          ],
        },
        {
          h: 'La communication',
          blocks: [
            { t: 'p', c: 'Elle fait tenir le collectif. On distingue :' },
            { t: 'table', head: ['Communication formelle', 'Communication informelle'], rows: [
              ['Officielle, organisée par l’entreprise', 'Spontanée, non prévue'],
              ['Réunions, notes de service, mails pros', 'Discussions à la pause, messages entre collègues'],
              ['Assure la coordination', 'Crée du lien, fait circuler l’information'],
            ] },
            { t: 'p', c: 'On distingue aussi la communication **interpersonnelle** (entre deux personnes) et de **groupe**.' },
          ],
        },
        {
          h: 'Le groupe et sa dynamique',
          blocks: [
            { t: 'p', c: 'Travailler ensemble crée une **dynamique de groupe** : des relations, une **cohésion** (le sentiment d’appartenance qui soude l’équipe), mais aussi parfois des **conflits**. Bien gérés, les conflits peuvent être constructifs ; mal gérés, ils nuisent à la performance. Le rôle du management est de favoriser la **coopération**.' },
            { t: 'tip', c: 'L’individu devient **acteur** par les **relations** (formelles et informelles) qu’il noue et les **compétences** qu’il mobilise : la performance dépend largement de la qualité des relations humaines.' },
          ],
        },
      ],
      essentiel: [
        '**Perception** subjective + **émotions** influencent le comportement au travail.',
        '**Compétence** = savoirs + savoir-faire + savoir-être ; la **qualification** situe dans l’organigramme.',
        'Communication **formelle** (officielle) vs **informelle** (spontanée) ; interpersonnelle vs de groupe.',
        'La **dynamique de groupe** : cohésion, conflits, coopération.',
      ],
      resources: [
        { kind: 'video', label: 'De l’individu à l’acteur (1re STMG)', note: 'Vidéos — recherche YouTube', url: yt('sciences de gestion de l individu à l acteur première STMG') },
      ],
      games: [
        {
          id: 'p1-sgn-t1-qcm',
          type: 'qcm',
          title: 'QCM — De l’individu à l’acteur',
          icon: '❓',
          questions: [
            { q: 'La compétence d’un individu combine…', choices: ['savoirs, savoir-faire et savoir-être', 'salaire, prime et statut', 'perception, émotion et humeur', 'offre, demande et prix'], answer: 0, explain: 'Compétence = connaissances (savoirs) + pratique (savoir-faire) + comportement (savoir-être).' },
            { q: 'Une réunion hebdomadaire officielle relève de la communication…', choices: ['formelle', 'informelle', 'de masse', 'publicitaire'], answer: 0, explain: 'La communication formelle est officielle et organisée ; l’informelle est spontanée.' },
            { q: 'Le sentiment d’appartenance qui soude une équipe s’appelle…', choices: ['la cohésion', 'la qualification', 'la perception', 'la marge'], answer: 0, explain: 'La cohésion renforce la coopération et la performance du groupe.' },
            { q: 'La perception d’une situation est…', choices: ['subjective (propre à chacun)', 'toujours identique pour tous', 'une donnée comptable', 'un contrat'], answer: 0, explain: 'Deux personnes perçoivent différemment un même événement.' },
            { q: 'Le rôle du management face aux conflits est de favoriser…', choices: ['la coopération', 'la rupture', 'l’isolement', 'le silence'], answer: 0, explain: 'Bien gérés, les conflits peuvent être constructifs ; le management favorise la coopération.' },
          ],
        },
        {
          id: 'p1-sgn-t1-tri',
          type: 'tri',
          title: 'Tri — Communication formelle ou informelle ?',
          icon: '🗂️',
          instruction: 'Classe chaque situation.',
          categories: [
            { id: 'form', label: 'Formelle' },
            { id: 'inf', label: 'Informelle' },
          ],
          items: [
            { text: 'Une note de service affichée', cat: 'form' },
            { text: 'Une discussion à la machine à café', cat: 'inf' },
            { text: 'Un mail professionnel de la direction', cat: 'form' },
            { text: 'Un message entre collègues sur une appli', cat: 'inf' },
            { text: 'Une réunion d’équipe planifiée', cat: 'form' },
          ],
        },
        {
          id: 'p1-sgn-t1-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'La communication informelle est inutile à l’organisation.', answer: false, explain: 'Faux : elle crée du lien et fait circuler des informations utiles.' },
            { statement: 'Le savoir-être fait partie des compétences.', answer: true, explain: 'Vrai : savoirs + savoir-faire + savoir-être.' },
            { statement: 'Les émotions n’ont aucun effet sur le travail.', answer: false, explain: 'Faux : le stress, par exemple, dégrade la communication et augmente les erreurs.' },
          ],
        },
        {
          id: 'p1-sgn-t1-flash',
          type: 'flashcard',
          title: 'Flashcards — Notions clés',
          icon: '🃏',
          cards: [
            { front: 'Compétence', back: 'Savoirs + savoir-faire + savoir-être mobilisés au travail.' },
            { front: 'Qualification', back: 'Reconnaissance (diplômes, expérience) qui situe dans l’organigramme.' },
            { front: 'Communication formelle / informelle', back: 'Officielle et organisée / spontanée et non prévue.' },
            { front: 'Cohésion', back: 'Sentiment d’appartenance qui soude le groupe.' },
          ],
        },
      ],
    },
    {
      id: 'p1-sgn-t2',
      name: 'Thème 2 — Numérique et intelligence collective',
      short: 'Numérique & données',
      keywords: 'donnée information connaissance système d’information PGI ERP collaboratif intelligence collective sécurité RGPD',
      intro:
        'Les technologies numériques transforment l’**information** en véritable **ressource** stratégique et permettent de travailler collectivement mieux et plus vite.',
      cours: [
        {
          h: 'La chaîne donnée → information → connaissance',
          blocks: [
            { t: 'list', c: [
              '**Donnée** : élément brut, isolé, sans interprétation (ex. « 35 »).',
              '**Information** : donnée **mise en contexte**, qui a du sens (« le projet X a nécessité 35 heures »).',
              '**Connaissance** : information **assimilée et mobilisable** pour agir (« nos projets de ce type prennent ~35 h, il faut donc les facturer au moins tel montant »).',
            ] },
          ],
        },
        {
          h: 'Le système d’information et le PGI',
          blocks: [
            { t: 'p', c: 'Le **système d’information (SI)** est l’ensemble organisé des ressources (matériels, logiciels, données, procédures, personnes) qui **collecte, stocke, traite et diffuse** l’information. Il **structure** l’organisation et relie les services.' },
            { t: 'p', c: 'Le **PGI (ERP)** est un logiciel unique reposant sur une **base de données unique** partagée par toutes les fonctions.' },
            { t: 'example', h: 'Exemple', c: 'Une vente enregistrée met automatiquement à jour le stock, la facturation et la comptabilité → plus de **double saisie**, information **fiabilisée**.' },
          ],
        },
        {
          h: 'Intelligence collective et risques',
          blocks: [
            { t: 'p', c: 'Les outils numériques (messagerie, agendas partagés, cloud) permettent l’**intelligence collective** : le groupe, en partageant idées et connaissances, produit **mieux que la somme des individus isolés**.' },
            { t: 'warning', c: 'Risques : **sécurité** des données (piratage, virus), **protection des données personnelles** (vie privée, **RGPD**), dépendance technologique. Il faut protéger la **disponibilité**, l’**intégrité** et la **confidentialité** des informations.' },
          ],
        },
      ],
      essentiel: [
        '**Donnée** (brute) → **information** (mise en sens) → **connaissance** (mobilisable pour agir).',
        'Le **SI** collecte, stocke, traite et diffuse l’information ; le **PGI** repose sur une base unique.',
        '**Intelligence collective** grâce aux outils collaboratifs ; enjeux de **sécurité** et de **RGPD**.',
      ],
      resources: [
        { kind: 'video', label: 'Donnée, information, connaissance', note: 'Vidéos — recherche YouTube', url: yt('donnée information connaissance système information PGI première STMG') },
      ],
      games: [
        {
          id: 'p1-sgn-t2-qcm',
          type: 'qcm',
          title: 'QCM — Numérique et données',
          icon: '❓',
          questions: [
            { q: 'Un élément brut, isolé et sans interprétation est…', choices: ['une donnée', 'une information', 'une connaissance', 'une décision'], answer: 0, explain: 'La donnée est brute ; mise en contexte, elle devient information.' },
            { q: 'Le PGI (ERP) repose sur…', choices: ['une base de données unique partagée', 'plusieurs logiciels indépendants', 'des fichiers papier', 'un tableur isolé'], answer: 0, explain: 'La base unique évite les doubles saisies et fiabilise l’information.' },
            { q: 'Produire ensemble mieux que la somme des individus isolés, c’est…', choices: ['l’intelligence collective', 'la double saisie', 'la coutume', 'l’oligopole'], answer: 0, explain: 'L’intelligence collective naît du partage via les outils collaboratifs.' },
            { q: 'Protéger la vie privée et les données personnelles renvoie notamment au…', choices: ['RGPD', 'PIB', 'SWOT', 'CDI'], answer: 0, explain: 'Le RGPD encadre la protection des données personnelles.' },
          ],
        },
        {
          id: 'p1-sgn-t2-ordre',
          type: 'ordre',
          title: 'Remise en ordre — De la donnée à la décision',
          icon: '🔢',
          instruction: 'Remets la transformation de l’information dans l’ordre.',
          steps: ['Donnée (brute)', 'Information (mise en contexte)', 'Connaissance (mobilisable)', 'Décision'],
          explain: 'La donnée devient information, puis connaissance, pour éclairer la décision.',
        },
        {
          id: 'p1-sgn-t2-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'Une information est une donnée mise en contexte.', answer: true, explain: 'Vrai : elle a du sens, contrairement à la donnée brute.' },
            { statement: 'Le PGI oblige à saisir plusieurs fois la même information.', answer: false, explain: 'Faux : la base unique évite justement les doubles saisies.' },
            { statement: 'La confidentialité est un enjeu de sécurité du SI.', answer: true, explain: 'Vrai : avec la disponibilité et l’intégrité.' },
          ],
        },
        {
          id: 'p1-sgn-t2-flash',
          type: 'flashcard',
          title: 'Flashcards — Numérique',
          icon: '🃏',
          cards: [
            { front: 'Système d’information (SI)', back: 'Collecte, stocke, traite et diffuse l’information ; structure l’organisation.' },
            { front: 'PGI / ERP', back: 'Logiciel unique à base de données unique.' },
            { front: 'Intelligence collective', back: 'Produire mieux ensemble grâce au partage et aux outils collaboratifs.' },
            { front: 'RGPD', back: 'Cadre de protection des données personnelles.' },
          ],
        },
      ],
    },
    {
      id: 'p1-sgn-t3',
      name: 'Thème 3 — Création de valeur et performance',
      short: 'Valeur & performance',
      keywords: 'valeur marchande perçue partenariale prix coût marge charges efficacité efficience indicateurs tableau de bord',
      intro:
        'Toute organisation cherche à **créer de la valeur** et à mesurer sa **performance**, c’est-à-dire à vérifier qu’elle atteint bien ses objectifs.',
      cours: [
        {
          h: 'Les formes de valeur',
          blocks: [
            { t: 'list', c: [
              '**Valeur marchande** : le prix qu’un client accepte de payer.',
              '**Valeur perçue** : la valeur que le client **croit** obtenir (image, qualité ressentie, marque) — parfois supérieure au coût réel.',
              '**Valeur partenariale** : la valeur créée et **partagée** entre toutes les **parties prenantes** (salariés, actionnaires, État, fournisseurs, clients).',
            ] },
          ],
        },
        {
          h: 'Prix, coût, marge',
          blocks: [
            { t: 'p', c: 'Le **coût** est ce que dépense l’entreprise pour produire (les **charges**). Le **prix** est ce que paie le client, largement fixé par le **marché**.' },
            { t: 'formula', c: 'Marge = prix de vente − coût' },
            { t: 'example', h: 'Exemple', c: 'Un site vitrine vendu 900 € qui coûte 560 € dégage une marge de **340 €**. Baisser le prix à 750 € réduit la marge à **190 €** : c’est un arbitrage entre compétitivité et rentabilité.' },
          ],
        },
        {
          h: 'Efficacité, efficience et indicateurs',
          blocks: [
            { t: 'p', c: '**Efficacité** = atteindre l’objectif fixé. **Efficience** = l’atteindre **au moindre coût**. Une organisation performante est efficace **et** efficiente.' },
            { t: 'p', c: 'On pilote avec des **indicateurs**, réunis dans un **tableau de bord**. La performance a plusieurs dimensions :' },
            { t: 'table', head: ['Dimension', 'Indicateurs'], rows: [
              ['Commerciale', 'Clients, part de marché, satisfaction'],
              ['Financière', 'Résultat, marge, chiffre d’affaires'],
              ['Sociale', 'Satisfaction des salariés, turnover, formation'],
              ['Environnementale', 'Énergie, déchets, empreinte carbone'],
            ] },
          ],
        },
      ],
      essentiel: [
        'Trois valeurs : **marchande** (prix payé), **perçue** (crue par le client), **partenariale** (partagée entre parties prenantes).',
        '**Marge = prix de vente − coût** ; le prix est largement fixé par le marché.',
        '**Efficacité** (atteindre l’objectif) vs **efficience** (au moindre coût).',
        'Indicateurs (commerciaux, financiers, **sociaux**, environnementaux) réunis dans un **tableau de bord**.',
      ],
      resources: [
        { kind: 'video', label: 'Création de valeur et performance', note: 'Vidéos — recherche YouTube', url: yt('création de valeur performance efficacité efficience première STMG') },
      ],
      games: [
        {
          id: 'p1-sgn-t3-qcm',
          type: 'qcm',
          title: 'QCM — Valeur et performance',
          icon: '❓',
          questions: [
            { q: 'La valeur partagée entre toutes les parties prenantes est la valeur…', choices: ['partenariale', 'marchande', 'perçue', 'boursière'], answer: 0, explain: 'La valeur partenariale est redistribuée aux salariés, actionnaires, État…' },
            { q: 'Un produit vendu 50 € qui coûte 30 € dégage une marge de…', choices: ['20 €', '30 €', '50 €', '80 €'], answer: 0, explain: 'Marge = prix − coût = 50 − 30 = 20 €.' },
            { q: 'Atteindre son objectif au moindre coût, c’est être…', choices: ['efficient', 'efficace seulement', 'partenarial', 'marchand'], answer: 0, explain: 'Efficience = objectif atteint au moindre coût ; efficacité = objectif atteint.' },
            { q: 'Le turnover est un indicateur de performance…', choices: ['sociale', 'commerciale', 'financière', 'environnementale'], answer: 0, explain: 'Il mesure la performance sociale (climat, fidélisation).' },
            { q: 'L’outil qui réunit les indicateurs pour piloter est…', choices: ['le tableau de bord', 'le RGPD', 'le PIB', 'la coutume'], answer: 0, explain: 'Le tableau de bord permet de suivre l’organisation d’un coup d’œil.' },
          ],
        },
        {
          id: 'p1-sgn-t3-tri',
          type: 'tri',
          title: 'Tri — Dimension de la performance',
          icon: '🗂️',
          instruction: 'Classe chaque indicateur.',
          categories: [
            { id: 'com', label: 'Commerciale' },
            { id: 'fin', label: 'Financière' },
            { id: 'soc', label: 'Sociale' },
          ],
          items: [
            { text: 'Part de marché', cat: 'com' },
            { text: 'Chiffre d’affaires', cat: 'fin' },
            { text: 'Turnover', cat: 'soc' },
            { text: 'Satisfaction client', cat: 'com' },
            { text: 'Marge', cat: 'fin' },
            { text: 'Nombre de formations suivies', cat: 'soc' },
          ],
        },
        {
          id: 'p1-sgn-t3-flash',
          type: 'flashcard',
          title: 'Flashcards — Valeur & performance',
          icon: '🃏',
          cards: [
            { front: 'Valeur perçue', back: 'Valeur que le client croit obtenir (image, qualité ressentie).' },
            { front: 'Marge', back: 'Prix de vente − coût.' },
            { front: 'Efficacité / efficience', back: 'Atteindre l’objectif / l’atteindre au moindre coût.' },
            { front: 'Tableau de bord', back: 'Outil de pilotage réunissant les indicateurs.' },
          ],
        },
      ],
    },
    {
      id: 'p1-sgn-t4',
      name: 'Thème 4 — Temps et risque',
      short: 'Temps & risque',
      keywords: 'temps ressource contrainte délais cycles échéances risque financier commercial humain numérique anticiper',
      intro:
        'Gérer, c’est agir dans un monde incertain. Deux contraintes s’imposent toujours : le **temps** et le **risque**. Les ignorer, c’est s’exposer à l’échec.',
      cours: [
        {
          h: 'Le temps',
          blocks: [
            { t: 'p', c: 'Le temps est à la fois une **ressource** (qu’on peut organiser, planifier) et une **contrainte** (les délais s’imposent). Il intervient via les **délais de réaction**, les **cycles** (production, vie d’un produit) et les **échéances** (livraison, paiement).' },
            { t: 'tip', c: 'Bien gérer le temps, c’est **anticiper** : planifier les commandes pour ne jamais être en rupture, étaler les paiements pour préserver la trésorerie.' },
          ],
        },
        {
          h: 'Le risque',
          blocks: [
            { t: 'p', c: 'Un **risque** est un **événement incertain aux conséquences négatives possibles**. Gérer, c’est nécessairement en prendre. Les principaux types :' },
            { t: 'table', head: ['Type de risque', 'Exemples'], rows: [
              ['Financier', 'Client qui ne paie pas, manque de trésorerie'],
              ['Commercial', 'Produit qui ne se vend pas, perte d’un gros client'],
              ['Humain', 'Accident, départ d’un salarié clé, conflit'],
              ['Numérique', 'Perte de données, cyberattaque, panne'],
            ] },
          ],
        },
        {
          h: 'Anticiper et limiter les risques',
          blocks: [
            { t: 'p', c: 'On ne supprime jamais totalement le risque, mais on peut le **réduire** : demander un **acompte** (impayés), **diversifier** ses clients, faire des **sauvegardes**, souscrire des **assurances**, **planifier**. La bonne gestion consiste à **prévoir** les risques et à préparer des réponses **avant** qu’ils ne surviennent.' },
          ],
        },
      ],
      essentiel: [
        'Le **temps** est une **ressource** (à planifier) et une **contrainte** (délais, cycles, échéances).',
        'Un **risque** = événement incertain aux conséquences négatives : financier, commercial, humain, numérique.',
        'On **anticipe** : acompte, diversification, sauvegardes, assurances, planification.',
      ],
      resources: [
        { kind: 'video', label: 'Temps et risque en gestion', note: 'Vidéos — recherche YouTube', url: yt('sciences de gestion temps et risque première STMG') },
      ],
      games: [
        {
          id: 'p1-sgn-t4-qcm',
          type: 'qcm',
          title: 'QCM — Temps et risque',
          icon: '❓',
          questions: [
            { q: 'Le risque d’un client qui ne paie pas est un risque…', choices: ['financier', 'humain', 'numérique', 'commercial'], answer: 0, explain: 'Un impayé/manque de trésorerie est un risque financier.' },
            { q: 'Une cyberattaque relève du risque…', choices: ['numérique', 'financier', 'commercial', 'humain'], answer: 0, explain: 'Perte de données, panne, cyberattaque = risque numérique.' },
            { q: 'Pour limiter le risque d’impayé, on peut…', choices: ['demander un acompte', 'ignorer le client', 'supprimer les factures', 'baisser la qualité'], answer: 0, explain: 'L’acompte réduit le risque financier ; on peut aussi suivre les règlements.' },
            { q: 'Dépendre d’un seul gros client est un risque…', choices: ['commercial', 'numérique', 'humain', 'nul'], answer: 0, explain: 'La perte de ce client menacerait l’activité : risque commercial, réduit par la diversification.' },
          ],
        },
        {
          id: 'p1-sgn-t4-tri',
          type: 'tri',
          title: 'Tri — Type de risque',
          icon: '🗂️',
          instruction: 'Classe chaque risque.',
          categories: [
            { id: 'fin', label: 'Financier' },
            { id: 'com', label: 'Commercial' },
            { id: 'num', label: 'Numérique' },
          ],
          items: [
            { text: 'Un client insolvable', cat: 'fin' },
            { text: 'Une panne informatique', cat: 'num' },
            { text: 'La perte d’un gros client', cat: 'com' },
            { text: 'Un manque de trésorerie', cat: 'fin' },
            { text: 'Une fuite de données', cat: 'num' },
          ],
        },
        {
          id: 'p1-sgn-t4-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'On peut supprimer totalement le risque d’une décision.', answer: false, explain: 'Faux : on peut le réduire, pas le supprimer.' },
            { statement: 'Le temps est à la fois une ressource et une contrainte.', answer: true, explain: 'Vrai : on l’organise mais les délais s’imposent.' },
            { statement: 'Diversifier ses clients réduit un risque commercial.', answer: true, explain: 'Vrai : on ne dépend plus d’un seul client.' },
          ],
        },
        {
          id: 'p1-sgn-t4-flash',
          type: 'flashcard',
          title: 'Flashcards — Temps & risque',
          icon: '🃏',
          cards: [
            { front: 'Risque', back: 'Événement incertain aux conséquences négatives possibles.' },
            { front: 'Types de risques', back: 'Financier, commercial, humain, numérique.' },
            { front: 'Anticiper', back: 'Acompte, diversification, sauvegardes, assurances, planification.' },
            { front: 'Échéance', back: 'Date imposée (livraison, paiement).' },
          ],
        },
      ],
    },
  ],
}

// ===========================================================================
// MANAGEMENT (3 thèmes)
// ===========================================================================
const managementP = {
  id: 'p1-management',
  name: 'Management',
  short: 'Management',
  icon: '🏢',
  color: '#4f46e5',
  niveau: 'premiere',
  tagline: 'Conduire une organisation : diagnostiquer, décider, piloter.',
  chapters: [
    {
      id: 'p1-mgmt-t1',
      name: 'Thème 1 — Le rôle du management dans la gestion des organisations',
      short: 'Le rôle du management',
      keywords: 'organisation but ressources structure frontière management performance pérennité stratégique opérationnel',
      intro:
        'Le management, c’est l’**art de conduire une organisation** pour qu’elle atteigne ses buts et **dure** dans le temps. En première, on définit les notions de base.',
      cours: [
        {
          h: 'Qu’est-ce qu’une organisation ?',
          blocks: [
            { t: 'p', c: 'Une organisation naît de la nécessité de **structurer une action collective**. Elle se reconnaît à **quatre éléments** :' },
            { t: 'list', c: [
              'un **but** (ce qu’elle veut accomplir),',
              'des **ressources** (humaines, matérielles, financières, immatérielles),',
              'une **structure** (répartition des rôles, hiérarchie),',
              'une **frontière** (ce qui la distingue de son environnement).',
            ] },
          ],
        },
        {
          h: 'Qu’est-ce que le management ?',
          blocks: [
            { t: 'p', c: 'Le management est la **conduite de l’action collective** dans un environnement en perpétuel changement (numérique, écologie, attentes sociales). Manager, c’est fixer des objectifs, organiser les ressources, animer les équipes et contrôler les résultats, pour assurer **performance** (atteindre les objectifs) et **pérennité** (durer).' },
          ],
        },
        {
          h: 'Deux niveaux de management',
          blocks: [
            { t: 'table', head: ['Management stratégique', 'Management opérationnel'], rows: [
              ['Long terme', 'Court terme'],
              ['Direction générale', 'Encadrement intermédiaire'],
              ['Ouvrir une filiale, lancer une activité', 'Organiser les plannings, gérer un stock'],
            ] },
            { t: 'tip', c: 'Les deux sont complémentaires : la **stratégie fixe le cap**, l’**opérationnel le met en pratique**.' },
          ],
        },
      ],
      essentiel: [
        'Une **organisation** = un **but** + des **ressources** + une **structure** + une **frontière**.',
        'Le **management** conduit l’action collective pour assurer **performance** et **pérennité**.',
        'Management **stratégique** (long terme, direction) vs **opérationnel** (court terme, encadrement).',
      ],
      resources: [
        { kind: 'video', label: 'Le rôle du management (1re)', note: 'Vidéos — recherche YouTube', url: yt('rôle du management organisation stratégique opérationnel première STMG') },
      ],
      games: [
        {
          id: 'p1-mgmt-t1-qcm',
          type: 'qcm',
          title: 'QCM — Le rôle du management',
          icon: '❓',
          questions: [
            { q: 'Parmi les 4 éléments d’une organisation :', choices: ['un but, des ressources, une structure, une frontière', 'un logo, un slogan, une couleur, un site', 'un impôt, une TVA, une marge, un stock', 'un juge, une loi, un contrat, une preuve'], answer: 0, explain: 'But, ressources, structure, frontière caractérisent une organisation.' },
            { q: 'Le management vise deux objectifs :', choices: ['la performance et la pérennité', 'le profit et l’impôt', 'la publicité et la vente', 'le risque et le temps'], answer: 0, explain: 'Atteindre les objectifs (performance) et durer (pérennité).' },
            { q: 'Ouvrir une filiale à l’étranger est une décision de management…', choices: ['stratégique', 'opérationnel', 'quotidien', 'comptable'], answer: 0, explain: 'Décision de long terme prise par la direction générale.' },
            { q: 'Organiser les plannings de la semaine relève du management…', choices: ['opérationnel', 'stratégique', 'financier', 'juridique'], answer: 0, explain: 'Mise en œuvre de court terme, par l’encadrement.' },
          ],
        },
        {
          id: 'p1-mgmt-t1-tri',
          type: 'tri',
          title: 'Tri — Stratégique ou opérationnel ?',
          icon: '🗂️',
          instruction: 'Classe chaque décision.',
          categories: [
            { id: 'str', label: 'Stratégique' },
            { id: 'ope', label: 'Opérationnel' },
          ],
          items: [
            { text: 'Racheter un concurrent', cat: 'str' },
            { text: 'Gérer un stock cette semaine', cat: 'ope' },
            { text: 'Lancer une nouvelle activité', cat: 'str' },
            { text: 'Résoudre un problème client', cat: 'ope' },
            { text: 'S’implanter à l’international', cat: 'str' },
          ],
        },
        {
          id: 'p1-mgmt-t1-flash',
          type: 'flashcard',
          title: 'Flashcards — Management',
          icon: '🃏',
          cards: [
            { front: 'Organisation', back: 'But + ressources + structure + frontière.' },
            { front: 'Management', back: 'Conduire l’action collective (performance + pérennité).' },
            { front: 'Management stratégique', back: 'Long terme, direction générale.' },
            { front: 'Management opérationnel', back: 'Court terme, encadrement intermédiaire.' },
          ],
        },
      ],
    },
    {
      id: 'p1-mgmt-t2',
      name: 'Thème 2 — Les critères de différenciation des organisations',
      short: 'Types d’organisations',
      keywords: 'entreprise privée organisation publique société civile finalité lucrative intérêt général non lucrative parties prenantes champ d’action RSE',
      intro:
        'Toutes les organisations ne se ressemblent pas. On les classe selon leurs **finalités** (leur raison d’être) et leurs contraintes. On distingue **trois grandes formes**.',
      cours: [
        {
          h: 'Trois grandes formes d’organisations',
          blocks: [
            { t: 'table', head: ['Type', 'Finalité', 'Exemples'], rows: [
              ['Entreprise privée', 'Lucrative (profit) + dimension sociétale (RSE)', 'Boulangerie, multinationale, start-up'],
              ['Organisation publique', 'Intérêt général (service public, non marchand)', 'Mairie, hôpital, lycée, police'],
              ['Société civile', 'Non lucrative (objet social)', 'Association, ONG, syndicat, mutuelle'],
            ] },
            { t: 'p', c: 'Les **entreprises privées** cherchent le **profit** mais intègrent de plus en plus des enjeux sociaux et environnementaux (**RSE**). Les **organisations publiques** rendent un **service public** financé par l’**impôt**. Les **organisations de la société civile** poursuivent un **objet social** sans but de profit ; leur enjeu est de **pérenniser leurs ressources** (bénévoles, cotisations, subventions, dons).' },
          ],
        },
        {
          h: 'Les notions à maîtriser',
          blocks: [
            { t: 'list', c: [
              '**Finalité** : lucrative / intérêt général / non lucrative.',
              '**Parties prenantes** : tous ceux qui ont un intérêt dans l’organisation (salariés, clients, actionnaires, État, fournisseurs, riverains…).',
              '**Champ d’action** : local, national, international ; **marchand** ou **non marchand**.',
              'La **performance** se mesure différemment selon la finalité (un profit pour l’entreprise, un service rendu pour l’organisation publique).',
            ] },
          ],
        },
      ],
      essentiel: [
        'Trois formes : **entreprise privée** (lucrative + RSE), **organisation publique** (intérêt général), **société civile** (non lucrative).',
        '**Parties prenantes** = tous ceux qui ont un intérêt dans l’organisation.',
        'La **performance** se mesure selon la **finalité** (profit vs service rendu).',
      ],
      resources: [
        { kind: 'video', label: 'Types et finalités des organisations', note: 'Vidéos — recherche YouTube', url: yt('finalités organisations entreprise publique association première STMG management') },
      ],
      games: [
        {
          id: 'p1-mgmt-t2-qcm',
          type: 'qcm',
          title: 'QCM — Types d’organisations',
          icon: '❓',
          questions: [
            { q: 'La finalité d’une organisation publique est…', choices: ['l’intérêt général (service public)', 'le profit', 'la spéculation', 'la publicité'], answer: 0, explain: 'Les organisations publiques rendent un service public, financé par l’impôt.' },
            { q: 'Une association relève des organisations…', choices: ['de la société civile (non lucratives)', 'privées lucratives', 'publiques', 'multinationales'], answer: 0, explain: 'Associations, ONG, syndicats, mutuelles = société civile, non lucratives.' },
            { q: 'La prise en compte des enjeux sociaux et environnementaux par une entreprise s’appelle…', choices: ['la RSE', 'le PIB', 'le PGI', 'le MARC'], answer: 0, explain: 'RSE = Responsabilité Sociétale des Entreprises.' },
            { q: 'Salariés, clients, actionnaires et État sont des…', choices: ['parties prenantes', 'concurrents', 'indicateurs', 'ressources matérielles'], answer: 0, explain: 'Ce sont les parties prenantes de l’organisation.' },
            { q: 'Les ressources d’une association reposent souvent sur…', choices: ['des bénévoles, cotisations, subventions, dons', 'des dividendes', 'la TVA collectée', 'des actions cotées'], answer: 0, explain: 'Son enjeu est de pérenniser ces ressources humaines et financières.' },
          ],
        },
        {
          id: 'p1-mgmt-t2-tri',
          type: 'tri',
          title: 'Tri — Type d’organisation',
          icon: '🗂️',
          instruction: 'Classe chaque organisation.',
          categories: [
            { id: 'priv', label: 'Entreprise privée' },
            { id: 'pub', label: 'Organisation publique' },
            { id: 'civ', label: 'Société civile' },
          ],
          items: [
            { text: 'Une start-up', cat: 'priv' },
            { text: 'Un hôpital public', cat: 'pub' },
            { text: 'Une ONG humanitaire', cat: 'civ' },
            { text: 'Une multinationale', cat: 'priv' },
            { text: 'Un syndicat', cat: 'civ' },
            { text: 'Une mairie', cat: 'pub' },
          ],
        },
        {
          id: 'p1-mgmt-t2-flash',
          type: 'flashcard',
          title: 'Flashcards — Organisations',
          icon: '🃏',
          cards: [
            { front: 'Entreprise privée', back: 'Finalité lucrative (profit) + dimension sociétale (RSE).' },
            { front: 'Organisation publique', back: 'Finalité d’intérêt général (service public, non marchand).' },
            { front: 'Société civile', back: 'Non lucrative (association, ONG, syndicat, mutuelle).' },
            { front: 'Parties prenantes', back: 'Tous ceux qui ont un intérêt dans l’organisation.' },
          ],
        },
      ],
    },
    {
      id: 'p1-mgmt-t3',
      name: 'Thème 3 — Le management stratégique : diagnostiquer, décider, piloter',
      short: 'Diagnostic stratégique',
      keywords: 'stratégie diagnostic SWOT PESTEL macro-environnement 5 forces de Porter micro-environnement ressources compétences distinctives avantage concurrentiel domination coûts différenciation DAS',
      intro:
        'Pour atteindre ses finalités, une organisation met en place une **stratégie**. Avant de décider, elle réalise un **diagnostic** : se connaître (interne) et connaître son environnement (externe). C’est le cœur du management de première.',
      cours: [
        {
          h: 'La démarche stratégique',
          blocks: [
            { t: 'p', c: 'Trois étapes : (1) **diagnostic stratégique** (interne + externe), (2) **fixation des objectifs**, (3) **pilotage** (suivre les résultats avec des indicateurs et s’adapter). C’est un processus permanent d’ajustement.' },
          ],
        },
        {
          h: 'Le diagnostic externe MACRO : PESTEL',
          blocks: [
            { t: 'p', c: 'Le **macro-environnement** regroupe les grandes forces générales qui s’imposent à **toutes** les organisations, sur lesquelles une entreprise seule **n’a aucune prise**. On l’analyse avec **PESTEL** :' },
            { t: 'figure', name: 'pestel' },
            { t: 'list', c: [
              '**P** olitique · **E** conomique · **S** ocioculturel · **T** echnologique · **E** cologique · **L** égal.',
              'Chaque dimension révèle des **opportunités** (favorables) ou des **menaces** (défavorables).',
            ] },
          ],
        },
        {
          h: 'Le diagnostic externe MICRO : les 5 forces de Porter',
          blocks: [
            { t: 'p', c: 'Le **micro-environnement** regroupe les **acteurs proches** en relation directe avec l’organisation. On mesure la **pression concurrentielle** avec les **5 forces de Porter** :' },
            { t: 'figure', name: 'porter5' },
            { t: 'list', c: [
              'l’**intensité de la concurrence** entre acteurs présents,',
              'le **pouvoir de négociation des clients**,',
              'le **pouvoir de négociation des fournisseurs**,',
              'la **menace des nouveaux entrants** (barrières à l’entrée),',
              'la **menace des produits de substitution**.',
            ] },
          ],
        },
        {
          h: 'Le diagnostic INTERNE et la synthèse SWOT',
          blocks: [
            { t: 'p', c: 'Le **diagnostic interne** analyse les **ressources** (financières, humaines, matérielles, immatérielles) et les **compétences distinctives** (ce que l’organisation sait faire **mieux** que ses concurrents). Il révèle **forces** et **faiblesses**.' },
            { t: 'figure', name: 'swot' },
            { t: 'p', c: 'La synthèse forme le **SWOT** (Forces/Faiblesses = interne ; Opportunités/Menaces = externe).' },
          ],
        },
        {
          h: 'L’avantage concurrentiel (Porter)',
          blocks: [
            { t: 'p', c: 'L’objectif est un **avantage concurrentiel** : se distinguer **durablement**. Selon **Porter**, deux stratégies génériques :' },
            { t: 'table', head: ['Domination par les coûts', 'Différenciation'], rows: [
              ['Prix plus bas que les concurrents', 'Offre perçue comme unique'],
              ['Économies d’échelle, productivité', 'Qualité, image, innovation, service'],
              ['Ex. enseigne discount', 'Ex. marque de luxe / haut de gamme'],
            ] },
            { t: 'warning', c: 'On choisit son terrain : difficile d’être à la fois **le moins cher** et **le plus différencié**. Autre notion : le **DAS** (Domaine d’Activité Stratégique).' },
          ],
        },
      ],
      essentiel: [
        'Démarche : **diagnostic → objectifs → pilotage** (ajustement permanent).',
        'Externe **macro** = **PESTEL** ; externe **micro** = **5 forces de Porter** ; **interne** = ressources + compétences distinctives.',
        'Synthèse = **SWOT** (Forces/Faiblesses internes ; Opportunités/Menaces externes).',
        'Avantage concurrentiel (**Porter**) : **domination par les coûts** ou **différenciation**.',
      ],
      resources: [
        { kind: 'video', label: 'PESTEL, 5 forces de Porter, SWOT', note: 'Vidéos — recherche YouTube', url: yt('diagnostic stratégique PESTEL 5 forces de Porter SWOT première STMG') },
        { kind: 'video', label: 'Domination par les coûts vs différenciation', note: 'Vidéos — recherche YouTube', url: yt('stratégies génériques Porter domination coûts différenciation avantage concurrentiel') },
      ],
      games: [
        {
          id: 'p1-mgmt-t3-qcm',
          type: 'qcm',
          title: 'QCM — Diagnostic stratégique',
          icon: '❓',
          questions: [
            { q: 'La méthode PESTEL analyse…', choices: ['le macro-environnement', 'le micro-environnement', 'les ressources internes', 'la comptabilité'], answer: 0, explain: 'PESTEL = Politique, Économique, Socioculturel, Technologique, Écologique, Légal (macro).' },
            { q: 'Les 5 forces de Porter analysent…', choices: ['la pression concurrentielle (micro-environnement)', 'les grandes forces générales', 'les forces internes', 'le PIB'], answer: 0, explain: 'Elles mesurent la pression concurrentielle du micro-environnement.' },
            { q: 'Le « L » de PESTEL correspond à la dimension…', choices: ['Légale', 'Logistique', 'Locale', 'Libérale'], answer: 0, explain: 'L = Légal (lois, réglementations, RGPD).' },
            { q: 'La menace des nouveaux entrants est limitée par…', choices: ['des barrières à l’entrée', 'une baisse des prix', 'la publicité', 'la médiation'], answer: 0, explain: 'Coûts élevés, brevets, réglementation freinent les nouveaux entrants.' },
            { q: 'Une compétence distinctive est ce que l’organisation sait faire…', choices: ['mieux que ses concurrents', 'comme tout le monde', 'sans ressources', 'à perte'], answer: 0, explain: 'C’est une force du diagnostic interne, source d’avantage concurrentiel.' },
            { q: 'Proposer une offre unique justifiant un prix élevé, c’est une stratégie de…', choices: ['différenciation', 'domination par les coûts', 'imitation', 'délocalisation'], answer: 0, explain: 'Différenciation (qualité, image, innovation) ; l’autre voie est la domination par les coûts.' },
          ],
        },
        {
          id: 'p1-mgmt-t3-tri',
          type: 'tri',
          title: 'Tri — Diagnostic interne ou externe ?',
          icon: '🗂️',
          instruction: 'Classe chaque élément du diagnostic.',
          categories: [
            { id: 'int', label: 'Interne (forces/faiblesses)' },
            { id: 'ext', label: 'Externe (opportunités/menaces)' },
          ],
          items: [
            { text: 'Un savoir-faire unique', cat: 'int' },
            { text: 'Une nouvelle réglementation', cat: 'ext' },
            { text: 'Une trésorerie fragile', cat: 'int' },
            { text: 'Un marché en croissance', cat: 'ext' },
            { text: 'L’arrivée d’un concurrent', cat: 'ext' },
            { text: 'Une équipe très compétente', cat: 'int' },
          ],
        },
        {
          id: 'p1-mgmt-t3-ordre',
          type: 'ordre',
          title: 'Remise en ordre — La démarche stratégique',
          icon: '🔢',
          instruction: 'Remets les étapes dans l’ordre.',
          steps: ['Diagnostic stratégique (interne + externe)', 'Fixation des objectifs', 'Mise en œuvre et pilotage', 'Adaptation si écart'],
          explain: 'On diagnostique, on fixe des objectifs, on pilote, puis on adapte.',
        },
        {
          id: 'p1-mgmt-t3-flash',
          type: 'flashcard',
          title: 'Flashcards — Stratégie',
          icon: '🃏',
          cards: [
            { front: 'PESTEL', back: 'Diagnostic du macro-environnement (P,E,S,T,E,L).' },
            { front: '5 forces de Porter', back: 'Pression concurrentielle du micro-environnement.' },
            { front: 'SWOT', back: 'Forces/Faiblesses (interne) + Opportunités/Menaces (externe).' },
            { front: 'Avantage concurrentiel', back: 'Domination par les coûts OU différenciation (Porter).' },
            { front: 'Compétence distinctive', back: 'Ce que l’organisation sait faire mieux que les concurrents.' },
          ],
        },
      ],
    },
  ],
}

// ===========================================================================
// DROIT (4 thèmes)
// ===========================================================================
const droitP = {
  id: 'p1-droit',
  name: 'Droit',
  short: 'Droit',
  icon: '⚖️',
  color: '#d97706',
  niveau: 'premiere',
  tagline: 'Les fondamentaux : la règle, le litige, les personnes, les droits.',
  chapters: [
    {
      id: 'p1-droit-t1',
      name: 'Thème 1 — Qu’est-ce que le droit ?',
      short: 'Qu’est-ce que le droit ?',
      keywords: 'règle de droit générale impersonnelle obligatoire sanctionnée règle morale sources hiérarchie des normes jurisprudence coutume droit privé public',
      intro:
        'Le droit, ce sont les **règles qui organisent la vie en société** et que l’État fait respecter. Sans droit, ce serait la loi du plus fort. Méthode clé : le **syllogisme juridique** (règle → faits → conclusion).',
      cours: [
        {
          h: 'Définition et fonctions',
          blocks: [
            { t: 'p', c: 'Le droit est l’ensemble des **règles générales et obligatoires** qui régissent les rapports entre les personnes, dont le respect est **garanti par la puissance publique** (l’État). Ses fonctions : **organiser** la société, **pacifier** les relations, **protéger** les personnes et **sanctionner**.' },
          ],
        },
        {
          h: 'Les caractères de la règle de droit',
          blocks: [
            { t: 'p', c: 'Une règle de droit est **générale** (elle s’applique à tous), **impersonnelle** (elle ne vise personne nommément), **obligatoire** et **sanctionnée par l’État**.' },
            { t: 'warning', c: 'C’est la **sanction par l’État** qui la distingue d’une **règle morale** (qui relève de la conscience) ou **religieuse** (qui relève de la croyance) : celles-ci ne sont pas sanctionnées par l’État.' },
          ],
        },
        {
          h: 'Les sources du droit (hiérarchie des normes)',
          blocks: [
            { t: 'table', head: ['Niveau', 'Source'], rows: [
              ['1', 'La Constitution (organise l’État, garantit les libertés)'],
              ['2', 'Traités internationaux et droit de l’Union européenne'],
              ['3', 'La loi (votée par le Parlement)'],
              ['4', 'Les règlements (décrets, arrêtés)'],
            ] },
            { t: 'p', c: 'S’y ajoutent la **jurisprudence** (décisions des tribunaux qui interprètent la règle) et la **coutume** (usages anciens et acceptés). Une norme inférieure doit **respecter** les normes supérieures.' },
            { t: 'p', c: 'Grandes distinctions : **droit privé** (rapports entre particuliers : civil, commercial, travail) vs **droit public** (État et ses rapports avec les citoyens).' },
          ],
        },
      ],
      essentiel: [
        'Règle de droit = **générale, impersonnelle, obligatoire, sanctionnée par l’État**.',
        'La **sanction par l’État** la distingue de la règle morale ou religieuse.',
        'Sources : **Constitution > traités/UE > lois > règlements** (+ jurisprudence, coutume).',
        '**Droit privé** (particuliers) vs **droit public** (État).',
      ],
      resources: [
        { kind: 'video', label: 'Qu’est-ce que le droit ?', note: 'Vidéos — recherche YouTube', url: yt('qu est ce que le droit règle sources hiérarchie des normes première STMG') },
      ],
      games: [
        {
          id: 'p1-droit-t1-qcm',
          type: 'qcm',
          title: 'QCM — La règle de droit',
          icon: '❓',
          questions: [
            { q: 'La règle de droit est générale, impersonnelle, obligatoire et…', choices: ['sanctionnée par l’État', 'facultative', 'religieuse', 'secrète'], answer: 0, explain: 'La sanction étatique la distingue des règles morales ou religieuses.' },
            { q: 'Ce qui distingue une règle de droit d’une règle morale, c’est…', choices: ['la sanction par l’État', 'sa longueur', 'son ancienneté', 'sa langue'], answer: 0, explain: 'La règle morale relève de la conscience, non sanctionnée par l’État.' },
            { q: 'Au sommet de la hiérarchie des normes :', choices: ['la Constitution', 'un arrêté municipal', 'un contrat', 'un règlement intérieur'], answer: 0, explain: 'La Constitution prime sur toutes les autres normes.' },
            { q: 'L’ensemble des décisions des tribunaux qui interprètent la règle s’appelle…', choices: ['la jurisprudence', 'la coutume', 'la doctrine', 'la loi'], answer: 0, explain: 'La jurisprudence précise et interprète la règle de droit.' },
            { q: 'Le droit du travail relève du droit…', choices: ['privé', 'public', 'constitutionnel', 'international'], answer: 0, explain: 'Le droit privé régit les rapports entre particuliers (dont employeur/salarié).' },
          ],
        },
        {
          id: 'p1-droit-t1-ordre',
          type: 'ordre',
          title: 'Remise en ordre — Hiérarchie des normes',
          icon: '🔢',
          instruction: 'Classe les sources de la plus élevée à la plus basse.',
          steps: ['Constitution', 'Traités et droit de l’UE', 'Lois', 'Règlements (décrets, arrêtés)'],
          explain: 'Constitution > traités/UE > lois > règlements.',
        },
        {
          id: 'p1-droit-t1-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'Une règle de droit vise une personne en particulier.', answer: false, explain: 'Faux : elle est générale et impersonnelle.' },
            { statement: 'La jurisprudence est une source du droit.', answer: true, explain: 'Vrai : les décisions des tribunaux interprètent la règle.' },
            { statement: 'Une loi peut être contraire à la Constitution.', answer: false, explain: 'Faux : elle doit respecter la norme supérieure.' },
          ],
        },
        {
          id: 'p1-droit-t1-flash',
          type: 'flashcard',
          title: 'Flashcards — La règle de droit',
          icon: '🃏',
          cards: [
            { front: 'Caractères de la règle de droit', back: 'Générale, impersonnelle, obligatoire, sanctionnée par l’État.' },
            { front: 'Règle morale vs de droit', back: 'La morale relève de la conscience ; le droit est sanctionné par l’État.' },
            { front: 'Hiérarchie des normes', back: 'Constitution > traités/UE > lois > règlements.' },
            { front: 'Jurisprudence', back: 'Ensemble des décisions des tribunaux qui interprètent la règle.' },
          ],
        },
      ],
    },
    {
      id: 'p1-droit-t2',
      name: 'Thème 2 — Comment le droit permet-il de régler un litige ?',
      short: 'Le litige',
      keywords: 'litige preuve charge preuve parfaite imparfaite organisation judiciaire ordre judiciaire administratif appel cassation MARC conciliation médiation arbitrage',
      intro:
        'Quand un désaccord dégénère, il devient un **litige**. Le droit offre des moyens de le résoudre pacifiquement : par la preuve, par le juge, ou à l’amiable.',
      cours: [
        {
          h: 'Le litige et la preuve',
          blocks: [
            { t: 'p', c: 'Un **litige** est un **désaccord juridique** entre deux parties aux prétentions opposées. Pour faire valoir un droit, il faut le **prouver**.' },
            { t: 'p', c: 'La **charge de la preuve** pèse sur celui qui **réclame** l’exécution d’une obligation. Les modes de preuve : la **preuve parfaite** (l’**écrit signé**, qui s’impose au juge) et les **preuves imparfaites** (témoignages, indices, que le juge apprécie librement). La preuve doit être **loyale**.' },
            { t: 'tip', c: 'D’où l’importance de conserver des **écrits** (contrats, reçus, factures), surtout pour les sommes importantes.' },
          ],
        },
        {
          h: 'Le recours au juge : l’organisation judiciaire',
          blocks: [
            { t: 'p', c: 'La justice est organisée en **deux ordres** :' },
            { t: 'list', c: [
              '**Ordre judiciaire** : litiges entre particuliers (**juridictions civiles**) et infractions (**juridictions pénales**).',
              '**Ordre administratif** : litiges impliquant l’administration.',
            ] },
            { t: 'p', c: 'Plusieurs **degrés** : le **premier degré** (le tribunal juge l’affaire), l’**appel** (une nouvelle juridiction rejuge), la **cassation** (la Cour de cassation vérifie la bonne application du droit, sans rejuger les faits).' },
          ],
        },
        {
          h: 'Les modes alternatifs (MARC)',
          blocks: [
            { t: 'p', c: 'Avant ou à la place d’un procès (long et coûteux), on peut recourir aux **modes alternatifs de règlement des conflits (MARC)** : la **conciliation** et la **médiation** (un tiers aide les parties à trouver un accord) et l’**arbitrage** (un arbitre privé tranche). Souvent plus rapides et apaisés.' },
          ],
        },
      ],
      essentiel: [
        '**Litige** = désaccord juridique aux prétentions opposées ; il faut **prouver**.',
        '**Charge de la preuve** sur celui qui réclame ; **preuve parfaite** (écrit signé) vs **imparfaites**.',
        'Deux ordres : **judiciaire** (civil/pénal) et **administratif** ; degrés : **1er → appel → cassation**.',
        '**MARC** : conciliation, médiation, arbitrage (avant/à la place du procès).',
      ],
      resources: [
        { kind: 'video', label: 'Le litige, la preuve, les MARC', note: 'Vidéos — recherche YouTube', url: yt('litige preuve organisation judiciaire MARC conciliation médiation première STMG') },
      ],
      games: [
        {
          id: 'p1-droit-t2-qcm',
          type: 'qcm',
          title: 'QCM — Le litige',
          icon: '❓',
          questions: [
            { q: 'La charge de la preuve pèse en principe sur…', choices: ['celui qui réclame', 'le juge', 'le témoin', 'l’avocat adverse'], answer: 0, explain: 'C’est à celui qui réclame l’exécution d’une obligation de prouver.' },
            { q: 'La preuve « parfaite » est…', choices: ['l’écrit signé (qui s’impose au juge)', 'un témoignage', 'un simple indice', 'une rumeur'], answer: 0, explain: 'L’écrit signé est une preuve parfaite ; témoignages et indices sont imparfaits.' },
            { q: 'Un litige avec l’administration relève de l’ordre…', choices: ['administratif', 'judiciaire', 'pénal', 'européen'], answer: 0, explain: 'L’ordre administratif juge les litiges impliquant l’administration.' },
            { q: 'La Cour de cassation…', choices: ['vérifie la bonne application du droit (sans rejuger les faits)', 'rejuge entièrement l’affaire', 'écrit les lois', 'gère l’administration'], answer: 0, explain: 'Elle contrôle le droit ; l’appel, lui, rejuge les faits.' },
            { q: 'La médiation et la conciliation sont des…', choices: ['modes alternatifs de règlement des conflits (MARC)', 'peines pénales', 'sources du droit', 'juridictions administratives'], answer: 0, explain: 'Un tiers aide les parties à trouver un accord, sans jugement.' },
          ],
        },
        {
          id: 'p1-droit-t2-tri',
          type: 'tri',
          title: 'Tri — Amiable (MARC) ou juge ?',
          icon: '🗂️',
          instruction: 'Classe chaque mode de résolution.',
          categories: [
            { id: 'marc', label: 'MARC (amiable)' },
            { id: 'juge', label: 'Recours au juge' },
          ],
          items: [
            { text: 'La médiation', cat: 'marc' },
            { text: 'La conciliation', cat: 'marc' },
            { text: 'Saisir le tribunal judiciaire', cat: 'juge' },
            { text: 'L’arbitrage', cat: 'marc' },
            { text: 'Faire appel d’un jugement', cat: 'juge' },
          ],
        },
        {
          id: 'p1-droit-t2-flash',
          type: 'flashcard',
          title: 'Flashcards — Le litige',
          icon: '🃏',
          cards: [
            { front: 'Charge de la preuve', back: 'Pèse sur celui qui réclame l’exécution d’une obligation.' },
            { front: 'Preuve parfaite / imparfaite', back: 'Écrit signé (s’impose au juge) / témoignages, indices.' },
            { front: 'Deux ordres de juridiction', back: 'Judiciaire (civil/pénal) et administratif.' },
            { front: 'MARC', back: 'Conciliation, médiation, arbitrage (règlement amiable).' },
          ],
        },
      ],
    },
    {
      id: 'p1-droit-t3',
      name: 'Thème 3 — Qui peut faire valoir ses droits ?',
      short: 'Les personnes',
      keywords: 'personnalité juridique personne physique morale capacité jouissance exercice mineur majeur protégé patrimoine droits patrimoniaux extrapatrimoniaux',
      intro:
        'Pour avoir des droits, il faut être un **sujet de droit**, c’est-à-dire disposer de la **personnalité juridique**.',
      cours: [
        {
          h: 'La personnalité juridique',
          blocks: [
            { t: 'p', c: 'C’est l’**aptitude à être titulaire de droits et d’obligations**. Elle est reconnue à deux catégories :' },
            { t: 'table', head: ['Personne physique', 'Personne morale'], rows: [
              ['Un être humain', 'Un groupement (société, association déclarée, État)'],
              ['De la naissance à la mort', 'Nom, siège, patrimoine propres'],
            ] },
            { t: 'p', c: 'Une personne morale a un patrimoine **distinct** de celui de ses membres et peut agir en justice.' },
          ],
        },
        {
          h: 'La capacité juridique',
          blocks: [
            { t: 'p', c: 'On distingue la **capacité de jouissance** (avoir des droits) et la **capacité d’exercice** (pouvoir les exercer soi-même). Certaines personnes sont **incapables** et doivent être représentées ou assistées : les **mineurs** (représentés par leurs parents) et les **majeurs protégés** (tutelle, curatelle).' },
          ],
        },
        {
          h: 'Le patrimoine',
          blocks: [
            { t: 'p', c: 'Le **patrimoine** est l’ensemble des **droits et obligations** d’une personne **évaluables en argent** (actif et passif). On distingue :' },
            { t: 'table', head: ['Droits patrimoniaux', 'Droits extrapatrimoniaux'], rows: [
              ['Valeur monétaire, cessibles, saisissables', 'Hors commerce, attachés à la personne, non cessibles'],
              ['Ex. droit de propriété', 'Ex. vie privée, image, nom'],
            ] },
          ],
        },
      ],
      essentiel: [
        '**Personnalité juridique** = aptitude à être titulaire de droits et d’obligations.',
        '**Personne physique** (naissance→mort) vs **personne morale** (patrimoine propre distinct).',
        '**Capacité de jouissance** (avoir des droits) vs **d’exercice** (les exercer seul) ; mineurs et majeurs protégés = incapables.',
        'Droits **patrimoniaux** (cessibles) vs **extrapatrimoniaux** (vie privée, image).',
      ],
      resources: [
        { kind: 'video', label: 'La personnalité juridique', note: 'Vidéos — recherche YouTube', url: yt('personnalité juridique personne physique morale capacité patrimoine première STMG') },
      ],
      games: [
        {
          id: 'p1-droit-t3-qcm',
          type: 'qcm',
          title: 'QCM — Les personnes',
          icon: '❓',
          questions: [
            { q: 'La personnalité juridique est l’aptitude à…', choices: ['être titulaire de droits et d’obligations', 'voter une loi', 'juger un litige', 'produire des biens'], answer: 0, explain: 'Elle fait de l’être un sujet de droit.' },
            { q: 'Une association déclarée est une personne…', choices: ['morale', 'physique', 'publique par nature', 'sans patrimoine'], answer: 0, explain: 'Elle a un patrimoine propre, distinct de celui de ses membres.' },
            { q: 'Un mineur non émancipé a…', choices: ['la capacité de jouissance mais pas la pleine capacité d’exercice', 'aucune personnalité juridique', 'la pleine capacité pour tout acte', 'le droit de voter'], answer: 0, explain: 'Il a des droits mais doit être représenté pour les actes importants.' },
            { q: 'Le droit à l’image est un droit…', choices: ['extrapatrimonial', 'patrimonial', 'cessible', 'saisissable'], answer: 0, explain: 'Les droits de la personnalité sont extrapatrimoniaux.' },
            { q: 'Le patrimoine comprend…', choices: ['les droits et obligations évaluables en argent (actif et passif)', 'seulement les revenus', 'les opinions', 'la nationalité'], answer: 0, explain: 'Actif (biens) + passif (dettes), évaluables en argent.' },
          ],
        },
        {
          id: 'p1-droit-t3-tri',
          type: 'tri',
          title: 'Tri — Patrimonial ou extrapatrimonial ?',
          icon: '🗂️',
          instruction: 'Classe chaque droit.',
          categories: [
            { id: 'pat', label: 'Patrimonial' },
            { id: 'ext', label: 'Extrapatrimonial' },
          ],
          items: [
            { text: 'Le droit de propriété', cat: 'pat' },
            { text: 'Le droit à la vie privée', cat: 'ext' },
            { text: 'Une créance (somme due)', cat: 'pat' },
            { text: 'Le droit à l’image', cat: 'ext' },
            { text: 'Le droit au nom', cat: 'ext' },
          ],
        },
        {
          id: 'p1-droit-t3-flash',
          type: 'flashcard',
          title: 'Flashcards — Les personnes',
          icon: '🃏',
          cards: [
            { front: 'Personnalité juridique', back: 'Aptitude à être titulaire de droits et d’obligations.' },
            { front: 'Personne morale', back: 'Groupement au patrimoine propre distinct de ses membres.' },
            { front: 'Capacité de jouissance / d’exercice', back: 'Avoir des droits / pouvoir les exercer soi-même.' },
            { front: 'Patrimoine', back: 'Droits et obligations évaluables en argent (actif + passif).' },
          ],
        },
      ],
    },
    {
      id: 'p1-droit-t4',
      name: 'Thème 4 — Quels sont les droits reconnus aux personnes ?',
      short: 'Les droits des personnes',
      keywords: 'droit de propriété usus fructus abusus limites obligations contrat responsabilité droits de la personnalité vie privée image dignité',
      intro:
        'Les personnes disposent de **droits**. On étudie ici le **droit de propriété**, les **sources d’obligations** (contrat, responsabilité) et les **droits de la personnalité**.',
      cours: [
        {
          h: 'Le droit de propriété',
          blocks: [
            { t: 'p', c: 'C’est le droit le plus complet sur un bien. Il comporte **trois attributs** :' },
            { t: 'list', c: [
              '**Usus** : le droit d’**utiliser** le bien.',
              '**Fructus** : le droit d’en **percevoir les revenus** (ex. un loyer).',
              '**Abusus** : le droit d’en **disposer** (vendre, détruire).',
            ] },
            { t: 'warning', c: 'Le droit de propriété n’est **pas absolu** : il connaît des **limites** (respect du voisinage, intérêt général, réglementation). Ex. : le **trouble anormal du voisinage** engage la responsabilité.' },
          ],
        },
        {
          h: 'Les sources d’obligations',
          blocks: [
            { t: 'p', c: 'Une **obligation** est un lien de droit par lequel une personne (le **débiteur**) doit quelque chose à une autre (le **créancier**). Deux grandes sources, **approfondies en terminale** :' },
            { t: 'list', c: [
              'Le **contrat** : un **accord de volontés** qui crée des obligations (ex. la vente).',
              'La **responsabilité** : l’obligation de **réparer un dommage** causé à autrui.',
            ] },
          ],
        },
        {
          h: 'Les droits de la personnalité',
          blocks: [
            { t: 'p', c: 'Ce sont les droits qui protègent la personne elle-même : droit au respect de la **vie privée**, droit à l’**image**, droit à la **dignité**. Ils sont **extrapatrimoniaux** et particulièrement importants à l’ère numérique (données, réseaux sociaux).' },
          ],
        },
      ],
      essentiel: [
        'Droit de propriété = **usus** (utiliser) + **fructus** (revenus) + **abusus** (disposer), avec des **limites**.',
        'Sources d’obligations : le **contrat** (accord de volontés) et la **responsabilité** (réparer un dommage).',
        '**Droits de la personnalité** (vie privée, image, dignité) = extrapatrimoniaux.',
      ],
      resources: [
        { kind: 'video', label: 'Droit de propriété et droits de la personnalité', note: 'Vidéos — recherche YouTube', url: yt('droit de propriété usus fructus abusus droits personnalité première STMG') },
      ],
      games: [
        {
          id: 'p1-droit-t4-qcm',
          type: 'qcm',
          title: 'QCM — Les droits des personnes',
          icon: '❓',
          questions: [
            { q: 'Le droit de percevoir les revenus d’un bien (ex. un loyer) est…', choices: ['le fructus', 'l’usus', 'l’abusus', 'l’usufruit du voisin'], answer: 0, explain: 'Usus = utiliser ; fructus = revenus ; abusus = disposer.' },
            { q: 'Vendre ou détruire un bien correspond à…', choices: ['l’abusus', 'l’usus', 'le fructus', 'la médiation'], answer: 0, explain: 'L’abusus est le droit de disposer du bien.' },
            { q: 'Le droit de propriété…', choices: ['n’est pas absolu (il a des limites)', 'permet tout sans limite', 'appartient à l’État', 'est extrapatrimonial'], answer: 0, explain: 'Respect du voisinage, intérêt général, réglementation le limitent.' },
            { q: 'Un accord de volontés créant des obligations est…', choices: ['un contrat', 'une responsabilité', 'une coutume', 'un patrimoine'], answer: 0, explain: 'Le contrat est une source d’obligations ; la responsabilité en est une autre.' },
            { q: 'Publier la photo de quelqu’un sans son accord porte atteinte…', choices: ['au droit à l’image (droit de la personnalité)', 'au droit de propriété', 'à la hiérarchie des normes', 'au fructus'], answer: 0, explain: 'Le droit à l’image est un droit de la personnalité, extrapatrimonial.' },
          ],
        },
        {
          id: 'p1-droit-t4-assoc',
          type: 'association',
          title: 'Association — Attribut de la propriété ↔ sens',
          icon: '🔗',
          pairs: [
            { left: 'Usus', right: 'Utiliser le bien' },
            { left: 'Fructus', right: 'Percevoir les revenus (loyer)' },
            { left: 'Abusus', right: 'Disposer (vendre, détruire)' },
            { left: 'Contrat', right: 'Accord de volontés créant des obligations' },
          ],
        },
        {
          id: 'p1-droit-t4-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'Le droit de propriété autorise à causer un trouble anormal du voisinage.', answer: false, explain: 'Faux : c’est une limite au droit de propriété.' },
            { statement: 'La responsabilité oblige à réparer un dommage causé à autrui.', answer: true, explain: 'Vrai : c’est une source d’obligations.' },
            { statement: 'Le droit à la vie privée est un droit de la personnalité.', answer: true, explain: 'Vrai, extrapatrimonial.' },
          ],
        },
        {
          id: 'p1-droit-t4-flash',
          type: 'flashcard',
          title: 'Flashcards — Les droits',
          icon: '🃏',
          cards: [
            { front: 'Usus / fructus / abusus', back: 'Utiliser / percevoir les revenus / disposer.' },
            { front: 'Obligation', back: 'Lien de droit : le débiteur doit quelque chose au créancier.' },
            { front: 'Sources d’obligations', back: 'Le contrat et la responsabilité.' },
            { front: 'Droits de la personnalité', back: 'Vie privée, image, dignité (extrapatrimoniaux).' },
          ],
        },
      ],
    },
  ],
}

// ===========================================================================
// ÉCONOMIE (5 thèmes)
// ===========================================================================
const economieP = {
  id: 'p1-economie',
  name: 'Économie',
  short: 'Économie',
  icon: '📈',
  color: '#dc2626',
  niveau: 'premiere',
  tagline: 'Produire, mesurer, répartir et financer la richesse.',
  chapters: [
    {
      id: 'p1-eco-t1',
      name: 'Thème 1 — Les grandes questions économiques',
      short: 'Grandes questions',
      keywords: 'besoin rareté choix coût agents économiques ménages entreprises administrations bien service utilité décroissante',
      intro:
        'Les **besoins** sont quasi illimités mais les **ressources** sont **rares** : la rareté oblige à faire des **choix**. C’est le cœur de la science économique.',
      cours: [
        {
          h: 'Rareté et choix',
          blocks: [
            { t: 'p', c: 'La **rareté** oblige à choisir. Chaque choix implique un **coût** (ce à quoi on renonce). On satisfait les besoins avec des **biens** (matériels) et des **services** (immatériels).' },
            { t: 'p', c: 'Le **consommateur** cherche à maximiser son **utilité** (satisfaction). L’utilité est **décroissante** : le premier verre d’eau dans le désert procure une énorme satisfaction, le dixième beaucoup moins. Le **producteur** décide quoi et combien produire pour dégager un **profit**.' },
          ],
        },
        {
          h: 'Les agents économiques',
          blocks: [
            { t: 'table', head: ['Agent', 'Rôle principal'], rows: [
              ['Ménages', 'Consomment, fournissent du travail'],
              ['Entreprises', 'Produisent des biens et services'],
              ['Institutions financières (banques)', 'Financent l’économie'],
              ['Administrations publiques', 'Services non marchands, redistribution'],
              ['Reste du monde', 'Échanges avec l’étranger'],
            ] },
          ],
        },
      ],
      essentiel: [
        'La **rareté** des ressources oblige à faire des **choix** ; tout choix a un **coût**.',
        '**Bien** (matériel) vs **service** (immatériel) ; l’**utilité** du consommateur est **décroissante**.',
        'Agents : **ménages, entreprises, institutions financières, administrations, reste du monde**.',
      ],
      resources: [
        { kind: 'video', label: 'Les grandes questions économiques', note: 'Vidéos — recherche YouTube', url: yt('grandes questions économiques rareté agents économiques première STMG') },
      ],
      games: [
        {
          id: 'p1-eco-t1-qcm',
          type: 'qcm',
          title: 'QCM — Grandes questions',
          icon: '❓',
          questions: [
            { q: 'Le problème économique de base vient de ce que les besoins sont illimités et les ressources…', choices: ['rares', 'infinies', 'gratuites', 'interdites'], answer: 0, explain: 'La rareté oblige à faire des choix.' },
            { q: 'L’utilité procurée par la consommation est…', choices: ['décroissante', 'toujours croissante', 'constante', 'nulle'], answer: 0, explain: 'Chaque unité supplémentaire procure moins de satisfaction.' },
            { q: 'Les ménages, dans le circuit économique…', choices: ['consomment et fournissent du travail', 'produisent tous les biens', 'votent les lois', 'fixent les taux'], answer: 0, explain: 'Rôle des ménages : consommation et offre de travail.' },
            { q: 'Un service se distingue d’un bien car il est…', choices: ['immatériel', 'toujours gratuit', 'toujours importé', 'stockable'], answer: 0, explain: 'Le service est immatériel, le bien est matériel.' },
          ],
        },
        {
          id: 'p1-eco-t1-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'Tout choix économique implique un coût (renoncement).', answer: true, explain: 'Vrai : choisir, c’est renoncer.' },
            { statement: 'Les banques sont des agents qui financent l’économie.', answer: true, explain: 'Vrai : ce sont les institutions financières.' },
            { statement: 'L’utilité d’un bien augmente à chaque unité consommée.', answer: false, explain: 'Faux : l’utilité est décroissante.' },
          ],
        },
        {
          id: 'p1-eco-t1-flash',
          type: 'flashcard',
          title: 'Flashcards — Bases',
          icon: '🃏',
          cards: [
            { front: 'Rareté', back: 'Ressources limitées face à des besoins illimités.' },
            { front: 'Coût (d’un choix)', back: 'Ce à quoi on renonce en choisissant.' },
            { front: 'Utilité décroissante', back: 'Chaque unité supplémentaire procure moins de satisfaction.' },
            { front: 'Agents économiques', back: 'Ménages, entreprises, banques, administrations, reste du monde.' },
          ],
        },
      ],
    },
    {
      id: 'p1-eco-t2',
      name: 'Thème 2 — Comment crée-t-on des richesses et comment les mesure-t-on ?',
      short: 'Créer & mesurer la richesse',
      keywords: 'production valeur ajoutée consommations intermédiaires PIB croissance limites facteurs travail capital productivité',
      intro:
        'Produire, c’est créer des biens et services. Pour mesurer la richesse **réellement créée**, on utilise la **valeur ajoutée**, puis le **PIB**.',
      cours: [
        {
          h: 'La valeur ajoutée',
          blocks: [
            { t: 'formula', c: 'Valeur ajoutée = valeur de la production − consommations intermédiaires' },
            { t: 'p', c: 'Les **consommations intermédiaires** sont les biens détruits ou transformés dans la production (matières, énergie).' },
            { t: 'example', h: 'Exemple', c: 'Un menuisier vend 100 € de meubles en utilisant 30 € de bois → VA = 70 €. La VA rémunère le travail (salaires), le capital (intérêts, profits) et l’État (impôts).' },
          ],
        },
        {
          h: 'Le PIB et la croissance',
          blocks: [
            { t: 'p', c: 'Le **PIB** (Produit Intérieur Brut) est la **somme des valeurs ajoutées** produites sur un territoire pendant un an. La **croissance** est l’augmentation du PIB dans le temps.' },
            { t: 'warning', c: 'Le PIB a des **limites** : il ne mesure ni le **bien-être**, ni les **inégalités**, ni les dégâts **environnementaux**, ni le travail non rémunéré (bénévolat, tâches domestiques).' },
          ],
        },
        {
          h: 'Les facteurs de production',
          blocks: [
            { t: 'p', c: 'On combine deux facteurs : le **travail** (main-d’œuvre) et le **capital** (machines, bâtiments). La **productivité** mesure l’efficacité de la production : gagner en productivité permet de produire plus avec autant, source de croissance.' },
          ],
        },
      ],
      essentiel: [
        '**Valeur ajoutée = production − consommations intermédiaires** ; elle rémunère travail, capital, État.',
        '**PIB = somme des valeurs ajoutées** d’un territoire ; la **croissance** = hausse du PIB.',
        'Le PIB est **limité** (ni bien-être, ni inégalités, ni environnement).',
        'Facteurs : **travail** + **capital** ; la **productivité** est source de croissance.',
      ],
      resources: [
        { kind: 'video', label: 'Valeur ajoutée, PIB, croissance', note: 'Vidéos — recherche YouTube', url: yt('valeur ajoutée PIB croissance facteurs de production première STMG économie') },
      ],
      games: [
        {
          id: 'p1-eco-t2-qcm',
          type: 'qcm',
          title: 'QCM — Créer et mesurer la richesse',
          icon: '❓',
          questions: [
            { q: 'La valeur ajoutée se calcule…', choices: ['production − consommations intermédiaires', 'production + impôts', 'salaires + profit', 'CA − TVA'], answer: 0, explain: 'VA = valeur de la production − consommations intermédiaires.' },
            { q: 'Une boulangerie produit 300 000 € en consommant 90 000 €. Sa VA est…', choices: ['210 000 €', '390 000 €', '90 000 €', '300 000 €'], answer: 0, explain: 'VA = 300 000 − 90 000 = 210 000 €.' },
            { q: 'Le PIB est…', choices: ['la somme des valeurs ajoutées d’un territoire sur un an', 'le total des salaires', 'le montant des impôts', 'le chiffre d’affaires mondial'], answer: 0, explain: 'Le PIB agrège les VA produites sur un territoire.' },
            { q: 'Une limite du PIB est qu’il ne mesure pas…', choices: ['le bien-être ni les inégalités', 'la production', 'la croissance', 'les échanges'], answer: 0, explain: 'Il ignore bien-être, inégalités, environnement, travail non rémunéré.' },
            { q: 'Les deux facteurs de production sont…', choices: ['le travail et le capital', 'l’offre et la demande', 'le prix et la quantité', 'l’actif et le passif'], answer: 0, explain: 'On combine travail (main-d’œuvre) et capital (équipements).' },
          ],
        },
        {
          id: 'p1-eco-t2-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'Le PIB est la somme des valeurs ajoutées.', answer: true, explain: 'Vrai, sur un territoire et une année.' },
            { statement: 'Le PIB mesure parfaitement le bien-être.', answer: false, explain: 'Faux : c’est un indicateur limité.' },
            { statement: 'Gagner en productivité peut être source de croissance.', answer: true, explain: 'Vrai : produire plus avec autant de facteurs.' },
          ],
        },
        {
          id: 'p1-eco-t2-flash',
          type: 'flashcard',
          title: 'Flashcards — Richesse',
          icon: '🃏',
          cards: [
            { front: 'Valeur ajoutée', back: 'Production − consommations intermédiaires.' },
            { front: 'PIB', back: 'Somme des valeurs ajoutées d’un territoire sur un an.' },
            { front: 'Limites du PIB', back: 'N’intègre ni bien-être, ni inégalités, ni environnement.' },
            { front: 'Productivité', back: 'Efficacité de la production (source de croissance).' },
          ],
        },
      ],
    },
    {
      id: 'p1-eco-t3',
      name: 'Thème 3 — Comment répartir les revenus et la richesse ?',
      short: 'Répartition des revenus',
      keywords: 'répartition primaire revenus travail capital mixtes redistribution prélèvements prestations revenu disponible consommation épargne taux d’épargne pouvoir d’achat patrimoine',
      intro:
        'La richesse créée (la VA) est **répartie**, d’abord entre ceux qui ont produit, puis **corrigée** par l’État pour réduire les inégalités.',
      cours: [
        {
          h: 'Répartition primaire et redistribution',
          blocks: [
            { t: 'p', c: 'La **répartition primaire** partage la VA entre les **revenus du travail** (salaires), les **revenus du capital** (intérêts, loyers, dividendes) et les **revenus mixtes** (indépendants).' },
            { t: 'p', c: 'L’État corrige ensuite par la **redistribution** : il **prélève** (impôts, cotisations) et **verse** des prestations (allocations, retraites). Résultat : le **revenu disponible** des ménages (ce qui reste pour consommer ou épargner).' },
          ],
        },
        {
          h: 'Consommer ou épargner',
          blocks: [
            { t: 'p', c: 'Avec son revenu disponible, le ménage arbitre entre **consommer** (dépenser maintenant) et **épargner** (mettre de côté).' },
            { t: 'formula', c: 'Taux d’épargne = épargne / revenu disponible' },
            { t: 'example', h: 'Exemple', c: 'Revenu disponible 2 500 €, consommation 2 100 € → épargne = 400 € → taux d’épargne = 400/2 500 = **16 %**.' },
            { t: 'p', c: 'Notions liées : le **pouvoir d’achat** (ce que le revenu permet réellement d’acheter compte tenu des prix) et le **patrimoine** (accumulation de l’épargne : logement, placements).' },
          ],
        },
      ],
      essentiel: [
        'Répartition **primaire** : revenus du **travail**, du **capital**, **mixtes**.',
        '**Redistribution** = prélèvements (impôts, cotisations) + prestations → **revenu disponible**.',
        '**Taux d’épargne = épargne / revenu disponible** ; notions de **pouvoir d’achat** et de **patrimoine**.',
      ],
      resources: [
        { kind: 'video', label: 'Répartition et redistribution des revenus', note: 'Vidéos — recherche YouTube', url: yt('répartition primaire redistribution revenu disponible taux épargne première STMG') },
      ],
      games: [
        {
          id: 'p1-eco-t3-qcm',
          type: 'qcm',
          title: 'QCM — Répartition des revenus',
          icon: '❓',
          questions: [
            { q: 'Les salaires sont des revenus…', choices: ['du travail', 'du capital', 'mixtes', 'de transfert'], answer: 0, explain: 'Travail = salaires ; capital = intérêts, loyers, dividendes ; mixtes = indépendants.' },
            { q: 'La redistribution consiste à…', choices: ['prélever (impôts, cotisations) et verser des prestations', 'produire des biens', 'fixer les prix', 'créer de la monnaie'], answer: 0, explain: 'Elle corrige la répartition primaire pour réduire les inégalités.' },
            { q: 'Le revenu disponible est ce qui reste…', choices: ['après impôts et prestations, pour consommer ou épargner', 'avant tout prélèvement', 'après avoir tout épargné', 'après la TVA seulement'], answer: 0, explain: 'C’est le revenu disponible des ménages.' },
            { q: 'Revenu disponible 2 500 €, consommation 2 100 €. Taux d’épargne ?', choices: ['16 %', '84 %', '40 %', '4 %'], answer: 0, explain: 'Épargne = 400 ; 400/2 500 = 0,16 = 16 %.' },
          ],
        },
        {
          id: 'p1-eco-t3-tri',
          type: 'tri',
          title: 'Tri — Type de revenu',
          icon: '🗂️',
          instruction: 'Classe chaque revenu.',
          categories: [
            { id: 'trav', label: 'Revenu du travail' },
            { id: 'cap', label: 'Revenu du capital' },
          ],
          items: [
            { text: 'Un salaire', cat: 'trav' },
            { text: 'Un loyer perçu', cat: 'cap' },
            { text: 'Des dividendes', cat: 'cap' },
            { text: 'Un traitement de fonctionnaire', cat: 'trav' },
            { text: 'Des intérêts d’un placement', cat: 'cap' },
          ],
        },
        {
          id: 'p1-eco-t3-flash',
          type: 'flashcard',
          title: 'Flashcards — Revenus',
          icon: '🃏',
          cards: [
            { front: 'Répartition primaire', back: 'Partage de la VA : revenus du travail, du capital, mixtes.' },
            { front: 'Redistribution', back: 'Prélèvements + prestations pour réduire les inégalités.' },
            { front: 'Revenu disponible', back: 'Ce qui reste après impôts et prestations.' },
            { front: 'Pouvoir d’achat', back: 'Ce que le revenu permet réellement d’acheter.' },
          ],
        },
      ],
    },
    {
      id: 'p1-eco-t4',
      name: 'Thème 4 — Comment les agents économiques se financent-ils ?',
      short: 'Le financement',
      keywords: 'besoin capacité de financement direct indirect marché financier actions obligations banque crédit banque centrale taux directeurs',
      intro:
        'Certains agents dépensent plus qu’ils ne gagnent (**besoin de financement**), d’autres épargnent (**capacité de financement**). Le système financier met les deux en relation.',
      cours: [
        {
          h: 'Deux modes de financement',
          blocks: [
            { t: 'table', head: ['Financement direct (désintermédié)', 'Financement indirect (intermédié)'], rows: [
              ['Sur le marché financier', 'Auprès d’une banque'],
              ['Émission de titres', 'Octroi d’un crédit'],
              ['Actions (propriété) et obligations (dette)', 'Emprunt remboursé avec intérêts'],
            ] },
            { t: 'p', c: 'Dans le financement **direct**, l’agent obtient des fonds **directement** des épargnants (marché financier). Dans le financement **indirect**, il passe par un **intermédiaire**, la **banque**.' },
          ],
        },
        {
          h: 'Le rôle des banques',
          blocks: [
            { t: 'p', c: 'Les **banques** financent l’économie par le **crédit** et peuvent **créer de la monnaie**. La **banque centrale** (la **BCE** pour la zone euro) régule tout cela par ses **taux directeurs** : en baissant les taux, elle rend le crédit moins cher et stimule l’économie ; en les augmentant, elle freine l’inflation.' },
          ],
        },
      ],
      essentiel: [
        '**Besoin** de financement (dépenser plus) vs **capacité** de financement (épargner).',
        'Financement **direct** (marché financier : **actions** = propriété, **obligations** = dette) vs **indirect** (crédit bancaire).',
        'Les **banques** créent de la monnaie ; la **BCE** régule via ses **taux directeurs**.',
      ],
      resources: [
        { kind: 'video', label: 'Le financement de l’économie', note: 'Vidéos — recherche YouTube', url: yt('financement direct indirect actions obligations banque première STMG économie') },
      ],
      games: [
        {
          id: 'p1-eco-t4-qcm',
          type: 'qcm',
          title: 'QCM — Le financement',
          icon: '❓',
          questions: [
            { q: 'Un agent qui épargne a une…', choices: ['capacité de financement', 'besoin de financement', 'dette obligatoire', 'obligation légale'], answer: 0, explain: 'Capacité de financement = épargne disponible ; besoin = dépenses > ressources.' },
            { q: 'Emprunter auprès d’une banque est un financement…', choices: ['indirect (intermédié)', 'direct', 'interne', 'gratuit'], answer: 0, explain: 'La banque est l’intermédiaire ; le marché financier = direct.' },
            { q: 'Une action est…', choices: ['un titre de propriété d’une entreprise', 'un titre de dette', 'un crédit bancaire', 'un impôt'], answer: 0, explain: 'Action = part de propriété ; obligation = titre de dette.' },
            { q: 'La BCE agit sur l’économie via…', choices: ['ses taux directeurs', 'la TVA', 'le SWOT', 'les cotisations'], answer: 0, explain: 'Baisser les taux stimule le crédit ; les monter freine l’inflation.' },
          ],
        },
        {
          id: 'p1-eco-t4-tri',
          type: 'tri',
          title: 'Tri — Financement direct ou indirect ?',
          icon: '🗂️',
          instruction: 'Classe chaque mode de financement.',
          categories: [
            { id: 'dir', label: 'Direct (marché)' },
            { id: 'ind', label: 'Indirect (banque)' },
          ],
          items: [
            { text: 'Émettre des actions en Bourse', cat: 'dir' },
            { text: 'Un crédit bancaire', cat: 'ind' },
            { text: 'Émettre des obligations', cat: 'dir' },
            { text: 'Un emprunt auprès de sa banque', cat: 'ind' },
          ],
        },
        {
          id: 'p1-eco-t4-flash',
          type: 'flashcard',
          title: 'Flashcards — Financement',
          icon: '🃏',
          cards: [
            { front: 'Besoin / capacité de financement', back: 'Dépenser plus que gagner / épargner.' },
            { front: 'Financement direct', back: 'Marché financier : actions et obligations.' },
            { front: 'Financement indirect', back: 'Crédit accordé par une banque.' },
            { front: 'Taux directeurs (BCE)', back: 'Outil pour stimuler l’économie ou freiner l’inflation.' },
          ],
        },
      ],
    },
    {
      id: 'p1-eco-t5',
      name: 'Thème 5 — Les marchés sont-ils concurrentiels ?',
      short: 'Le marché',
      keywords: 'marché offre demande prix d’équilibre élasticité-prix coût marginal concurrence parfaite imparfaite monopole oligopole barrières à l’entrée',
      intro:
        'Un **marché** est le lieu de rencontre de l’**offre** et de la **demande**. De leur confrontation naît le **prix d’équilibre**. Mais la concurrence est souvent **imparfaite**.',
      cours: [
        {
          h: 'Offre, demande et prix d’équilibre',
          blocks: [
            { t: 'p', c: 'Le **prix d’équilibre** est le prix pour lequel la quantité offerte égale la quantité demandée. En général, quand le prix monte, l’**offre augmente** mais la **demande baisse** ; le marché ajuste le prix jusqu’à l’équilibre.' },
          ],
        },
        {
          h: 'Élasticité et coût marginal',
          blocks: [
            { t: 'p', c: 'L’**élasticité-prix de la demande** mesure la **sensibilité de la demande à une variation de prix**. Si une hausse fait beaucoup baisser la demande, elle est **élastique** ; si elle change peu (produits de première nécessité), elle est **peu élastique**.' },
            { t: 'p', c: 'Le **coût marginal** est le coût de production d’une **unité supplémentaire** : le producteur a intérêt à produire tant que le prix couvre ce coût.' },
          ],
        },
        {
          h: 'Concurrence parfaite et imparfaite',
          blocks: [
            { t: 'p', c: 'La **concurrence pure et parfaite** suppose de nombreux vendeurs/acheteurs, des produits identiques, une information parfaite et une entrée libre. La réalité est souvent **imparfaite** :' },
            { t: 'list', c: [
              '**Monopole** (un seul vendeur) et **oligopole** (quelques vendeurs) → pouvoir sur les prix.',
              '**Barrières à l’entrée** (coûts élevés, brevets, réglementation) → protègent les acteurs en place.',
            ] },
          ],
        },
      ],
      essentiel: [
        'Le **prix d’équilibre** égalise quantité offerte et demandée.',
        '**Élasticité-prix** = sensibilité de la demande au prix ; **coût marginal** = coût d’une unité supplémentaire.',
        'Concurrence **imparfaite** : **monopole**, **oligopole**, **barrières à l’entrée**.',
      ],
      resources: [
        { kind: 'video', label: 'Marché, offre, demande, concurrence', note: 'Vidéos — recherche YouTube', url: yt('marché offre demande prix équilibre concurrence imparfaite première STMG') },
      ],
      games: [
        {
          id: 'p1-eco-t5-qcm',
          type: 'qcm',
          title: 'QCM — Le marché',
          icon: '❓',
          questions: [
            { q: 'Le prix d’équilibre est celui pour lequel…', choices: ['la quantité offerte = la quantité demandée', 'l’offre est nulle', 'la demande est infinie', 'le vendeur perd de l’argent'], answer: 0, explain: 'À l’équilibre, offre et demande s’égalisent.' },
            { q: 'Si un produit devient rare, son prix a tendance à…', choices: ['augmenter', 'baisser', 'rester identique', 'disparaître'], answer: 0, explain: 'L’offre baisse alors que la demande reste forte → hausse du prix.' },
            { q: 'L’élasticité-prix de la demande mesure…', choices: ['la sensibilité de la demande au prix', 'le coût d’une unité', 'le nombre de vendeurs', 'la marge'], answer: 0, explain: 'Forte sensibilité = demande élastique ; faible = peu élastique.' },
            { q: 'Un marché avec un seul vendeur est un…', choices: ['monopole', 'oligopole', 'marché parfait', 'marché libre'], answer: 0, explain: 'Monopole = un vendeur ; oligopole = quelques-uns.' },
            { q: 'Les barrières à l’entrée…', choices: ['freinent l’arrivée de nouveaux concurrents', 'garantissent la concurrence parfaite', 'baissent les prix', 'suppriment les monopoles'], answer: 0, explain: 'Coûts, brevets, réglementation protègent les acteurs en place.' },
          ],
        },
        {
          id: 'p1-eco-t5-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'En concurrence pure et parfaite, les produits sont identiques.', answer: true, explain: 'Vrai : c’est l’une des hypothèses (homogénéité).' },
            { statement: 'Un produit de première nécessité a une demande très élastique.', answer: false, explain: 'Faux : elle est peu élastique (on l’achète quel que soit le prix).' },
            { statement: 'Le coût marginal est le coût d’une unité supplémentaire.', answer: true, explain: 'Vrai : on produit tant que le prix le couvre.' },
          ],
        },
        {
          id: 'p1-eco-t5-flash',
          type: 'flashcard',
          title: 'Flashcards — Le marché',
          icon: '🃏',
          cards: [
            { front: 'Prix d’équilibre', back: 'Prix où quantité offerte = quantité demandée.' },
            { front: 'Élasticité-prix', back: 'Sensibilité de la demande à une variation de prix.' },
            { front: 'Coût marginal', back: 'Coût de production d’une unité supplémentaire.' },
            { front: 'Monopole / oligopole', back: 'Un seul / quelques vendeurs (concurrence imparfaite).' },
          ],
        },
      ],
    },
  ],
}

// ===========================================================================
// MATHÉMATIQUES (7 chapitres)
// ===========================================================================
const mathsP = {
  id: 'p1-maths',
  name: 'Mathématiques',
  short: 'Maths',
  icon: '🧮',
  color: '#2563eb',
  niveau: 'premiere',
  tagline: 'Maths appliquées à la gestion (contrôle continu).',
  chapters: [
    {
      id: 'p1-math-c1',
      name: 'Chapitre 1 — Information chiffrée',
      short: 'Information chiffrée',
      keywords: 'proportion pourcentage taux d’évolution coefficient multiplicateur évolutions successives réciproque',
      intro:
        'Proportions et évolutions sont partout en gestion. Ce chapitre apprend à les manier sans se tromper.',
      cours: [
        {
          h: 'Proportion et taux d’évolution',
          blocks: [
            { t: 'p', c: 'Une **proportion** = partie / tout (× 100 pour un pourcentage). Ex. 15 filles sur 30 → 50 %.' },
            { t: 'formula', c: 't = (Valeur d’arrivée − Valeur de départ) / Valeur de départ · CM = 1 + t' },
            { t: 'example', h: 'Exemple', c: 'Un prix passe de 200 € à 250 € → t = 50/200 = **+25 %** (CM = 1,25).' },
          ],
        },
        {
          h: 'Évolutions successives et réciproque',
          blocks: [
            { t: 'p', c: 'Pour enchaîner des évolutions, on **multiplie les CM** (jamais additionner les taux !). Ex. +20 % puis −10 % → 1,20 × 0,90 = 1,08 = **+8 %**.' },
            { t: 'warning', c: 'Évolution réciproque : après +25 % (×1,25), pour revenir il faut ×(1/1,25) = 0,80, soit **−20 %** (et non −25 %).' },
          ],
        },
      ],
      essentiel: [
        't = (arrivée − départ) / départ ; **CM = 1 + t**.',
        'Évolutions successives : on **multiplie les CM** (on n’additionne pas les taux).',
        'Réciproque : CM réciproque = 1 / CM.',
      ],
      resources: [{ kind: 'video', label: 'Taux d’évolution et coefficient multiplicateur', note: 'Vidéos — recherche YouTube', url: yt('taux évolution coefficient multiplicateur première STMG maths') }],
      games: [
        { id: 'p1-math-c1-calc', type: 'calcul', title: 'Calcul express — Taux d’évolution', icon: '⚡', gen: 'taux_evolution', count: 5 },
        { id: 'p1-math-c1-calc2', type: 'calcul', title: 'Calcul express — Évolutions successives', icon: '⚡', gen: 'cm_successif', count: 5 },
        {
          id: 'p1-math-c1-qcm', type: 'qcm', title: 'QCM — Information chiffrée', icon: '❓',
          questions: [
            { q: 'Un prix passe de 200 € à 250 €. Taux d’évolution ?', choices: ['+25 %', '+50 %', '+20 %', '+5 %'], answer: 0, explain: 't = 50/200 = 0,25 = +25 %.' },
            { q: 'Le CM d’une baisse de 10 % est…', choices: ['0,90', '1,10', '0,10', '10'], answer: 0, explain: 'CM = 1 − 0,10 = 0,90.' },
            { q: '+20 % puis −10 % donne au total…', choices: ['+8 %', '+10 %', '−8 %', '+30 %'], answer: 0, explain: '1,20 × 0,90 = 1,08 → +8 %.' },
          ],
        },
      ],
    },
    {
      id: 'p1-math-c2',
      name: 'Chapitre 2 — Suites numériques',
      short: 'Suites',
      keywords: 'suite arithmétique géométrique raison linéaire exponentielle',
      intro: 'Une **suite** est une liste ordonnée de nombres. Deux modèles clés en gestion : arithmétique et géométrique.',
      cours: [
        {
          h: 'Arithmétique et géométrique',
          blocks: [
            { t: 'table', head: ['Arithmétique', 'Géométrique'], rows: [
              ['On ajoute la raison r', 'On multiplie par la raison q'],
              ['u_n = u_0 + n × r', 'u_n = u_0 × q^n'],
              ['Croissance linéaire', 'Croissance exponentielle'],
            ] },
            { t: 'example', h: 'Exemple', c: 'Capital 1 000 € placé à 3 %/an → q = 1,03, u_5 = 1 000 × 1,03⁵ ≈ **1 159 €**. Astuce : évolution en % fixe → suite **géométrique**.' },
          ],
        },
      ],
      essentiel: ['Arithmétique : **u_n = u_0 + n·r** (linéaire).', 'Géométrique : **u_n = u_0 × q^n** (exponentielle).', 'Évolution en % constant → suite **géométrique** (q = 1 + t).'],
      resources: [{ kind: 'video', label: 'Suites arithmétiques et géométriques', note: 'Vidéos — recherche YouTube', url: yt('suites arithmétiques géométriques première STMG maths') }],
      games: [
        { id: 'p1-math-c2-calc', type: 'calcul', title: 'Calcul express — Suite géométrique', icon: '⚡', gen: 'suite_geo', count: 5 },
        {
          id: 'p1-math-c2-qcm', type: 'qcm', title: 'QCM — Suites', icon: '❓',
          questions: [
            { q: 'Un capital placé à taux fixe forme une suite…', choices: ['géométrique', 'arithmétique', 'constante', 'aléatoire'], answer: 0, explain: 'Évolution en % constant → géométrique (q = 1 + t).' },
            { q: 'Pour une suite arithmétique, u_n = …', choices: ['u_0 + n·r', 'u_0 × q^n', 'u_0 − r', 'n × q'], answer: 0, explain: 'Suite arithmétique : on ajoute la raison r.' },
            { q: 'Un salaire de 1 500 € + 50 €/an au bout de 4 ans :', choices: ['1 700 €', '1 650 €', '2 000 €', '1 550 €'], answer: 0, explain: 'u_4 = 1 500 + 4×50 = 1 700 €.' },
          ],
        },
        {
          id: 'p1-math-c2-flash', type: 'flashcard', title: 'Flashcards — Suites', icon: '🃏',
          cards: [
            { front: 'Suite arithmétique', back: 'On ajoute la raison r : u_n = u_0 + n·r.' },
            { front: 'Suite géométrique', back: 'On multiplie par la raison q : u_n = u_0 × q^n.' },
            { front: 'Placement à t %', back: 'Suite géométrique de raison q = 1 + t.' },
          ],
        },
      ],
    },
    {
      id: 'p1-math-c3',
      name: 'Chapitre 3 — Second degré et fonctions',
      short: 'Second degré',
      keywords: 'polynôme second degré parabole sommet maximum minimum fonction inverse hyperbole',
      intro: 'La fonction du **second degré** modélise beaucoup de situations d’optimisation (bénéfice max, coût min).',
      cours: [
        {
          h: 'La parabole',
          blocks: [
            { t: 'p', c: 'f(x) = ax² + bx + c (a ≠ 0) a pour courbe une **parabole**.' },
            { t: 'list', c: [
              'Si **a > 0** : parabole vers le haut (∪), la fonction a un **minimum**.',
              'Si **a < 0** : parabole vers le bas (∩), la fonction a un **maximum**.',
            ] },
            { t: 'p', c: 'Le **sommet** donne l’extremum ; la courbe est symétrique par rapport à l’axe vertical passant par le sommet.' },
          ],
        },
      ],
      essentiel: ['f(x) = ax² + bx + c → **parabole**.', '**a > 0** : minimum (∪) ; **a < 0** : maximum (∩).', 'Le **sommet** donne l’extremum ; sert à l’**optimisation**.'],
      resources: [{ kind: 'video', label: 'Fonctions du second degré', note: 'Vidéos — recherche YouTube', url: yt('fonction second degré parabole sommet première STMG maths') }],
      games: [
        {
          id: 'p1-math-c3-qcm', type: 'qcm', title: 'QCM — Second degré', icon: '❓',
          questions: [
            { q: 'La courbe de f(x) = ax² + bx + c est…', choices: ['une parabole', 'une droite', 'un cercle', 'une hyperbole'], answer: 0, explain: 'Le second degré donne une parabole.' },
            { q: 'Si a < 0, la fonction du second degré a un…', choices: ['maximum', 'minimum', 'ni max ni min', 'point d’inflexion'], answer: 0, explain: 'a < 0 : parabole vers le bas (∩) → maximum.' },
            { q: 'Le point qui donne l’extremum de la parabole est…', choices: ['le sommet', 'l’origine', 'l’axe des x', 'le foyer'], answer: 0, explain: 'Le sommet donne le minimum ou le maximum.' },
          ],
        },
        {
          id: 'p1-math-c3-vf', type: 'vraifaux', title: 'Vrai / Faux rapide', icon: '⚡',
          questions: [
            { statement: 'Si a > 0, la parabole est tournée vers le haut.', answer: true, explain: 'Vrai : ∪, la fonction a un minimum.' },
            { statement: 'La parabole n’a aucun axe de symétrie.', answer: false, explain: 'Faux : elle est symétrique par rapport à la verticale passant par le sommet.' },
          ],
        },
      ],
    },
    {
      id: 'p1-math-c4',
      name: 'Chapitre 4 — Dérivation',
      short: 'Dérivation',
      keywords: 'nombre dérivé tangente dérivées signe variations extremum optimisation',
      intro: 'La **dérivée** mesure comment une fonction varie. C’est l’outil de l’**optimisation**.',
      cours: [
        {
          h: 'Nombre dérivé et variations',
          blocks: [
            { t: 'p', c: 'f’(a) est le **coefficient directeur de la tangente** en a. Équation de la tangente : y = f’(a)(x − a) + f(a).' },
            { t: 'p', c: 'Dérivées utiles : (constante)’ = 0 ; (x²)’ = 2x ; (ax² + bx + c)’ = **2ax + b**.' },
            { t: 'figure', name: 'derivee' },
            { t: 'list', c: [
              'f’(x) > 0 → f **croissante** ; f’(x) < 0 → f **décroissante**.',
              'f’(x) = 0 en changeant de signe → **extremum**.',
            ] },
            { t: 'example', h: 'Exemple', c: 'f(x) = −2x² + 12x → f’(x) = −4x + 12, s’annule en x = 3 : maximum f(3) = **18**.' },
          ],
        },
      ],
      essentiel: ['f’(a) = pente de la **tangente** en a ; tangente : y = f’(a)(x − a) + f(a).', '(ax² + bx + c)’ = **2ax + b**.', 'f’ > 0 croissante · f’ < 0 décroissante · f’ = 0 (change de signe) → extremum.'],
      resources: [{ kind: 'video', label: 'Dérivation et variations', note: 'Vidéos — recherche YouTube', url: yt('dérivation nombre dérivé signe variations première STMG maths') }],
      games: [
        { id: 'p1-math-c4-calc', type: 'calcul', title: 'Calcul express — Nombre dérivé', icon: '⚡', gen: 'derivee_affine', count: 5 },
        {
          id: 'p1-math-c4-qcm', type: 'qcm', title: 'QCM — Dérivation', icon: '❓',
          questions: [
            { q: 'La dérivée de ax² + bx + c est…', choices: ['2ax + b', 'ax + b', '2ax', 'a x² + b'], answer: 0, explain: '(ax² + bx + c)’ = 2ax + b.' },
            { q: 'Si f’(x) > 0 sur un intervalle, alors f est…', choices: ['croissante', 'décroissante', 'constante', 'négative'], answer: 0, explain: 'f’ > 0 ⇒ f croissante.' },
            { q: 'f(x) = −2x² + 12x. f’(x) s’annule en…', choices: ['x = 3', 'x = 6', 'x = 12', 'x = 0'], answer: 0, explain: '−4x + 12 = 0 ⇔ x = 3 (maximum).' },
          ],
        },
      ],
    },
    {
      id: 'p1-math-c5',
      name: 'Chapitre 5 — Statistiques à une variable',
      short: 'Statistiques',
      keywords: 'moyenne médiane quartiles étendue écart interquartile écart-type boîte à moustaches dispersion',
      intro: 'On résume une série de données par des **indicateurs** de position et de dispersion.',
      cours: [
        {
          h: 'Position et dispersion',
          blocks: [
            { t: 'list', c: [
              '**Position** : la **moyenne** (somme / effectif), la **médiane** (partage la série en deux), les **quartiles** Q1 et Q3.',
              '**Dispersion** : l’**étendue** (max − min), l’**écart interquartile** (Q3 − Q1), l’**écart-type** (dispersion autour de la moyenne).',
            ] },
            { t: 'p', c: 'Le **diagramme en boîte** (boîte à moustaches) visualise min, Q1, médiane, Q3, max. Deux séries de même moyenne mais d’écarts-types différents n’ont pas la même **homogénéité**.' },
          ],
        },
      ],
      essentiel: ['Position : **moyenne**, **médiane**, **quartiles** Q1/Q3.', 'Dispersion : **étendue**, **écart interquartile** (Q3 − Q1), **écart-type**.', 'La **boîte à moustaches** visualise min, Q1, médiane, Q3, max.'],
      resources: [{ kind: 'video', label: 'Statistiques : médiane, quartiles, écart-type', note: 'Vidéos — recherche YouTube', url: yt('statistiques médiane quartiles écart type boîte à moustaches première STMG') }],
      games: [
        {
          id: 'p1-math-c5-qcm', type: 'qcm', title: 'QCM — Statistiques', icon: '❓',
          questions: [
            { q: 'La valeur qui partage une série en deux moitiés est…', choices: ['la médiane', 'la moyenne', 'l’étendue', 'le maximum'], answer: 0, explain: '50 % des valeurs sont en dessous de la médiane.' },
            { q: 'L’écart interquartile est…', choices: ['Q3 − Q1', 'max − min', 'la moyenne', 'Q1 + Q3'], answer: 0, explain: 'Il mesure la dispersion des 50 % centraux.' },
            { q: 'Plus l’écart-type est grand, plus les valeurs sont…', choices: ['dispersées', 'égales', 'proches', 'nulles'], answer: 0, explain: 'L’écart-type mesure la dispersion autour de la moyenne.' },
            { q: 'La boîte à moustaches visualise…', choices: ['min, Q1, médiane, Q3, max', 'seulement la moyenne', 'l’écart-type seul', 'la somme'], answer: 0, explain: 'Ce sont ses cinq repères.' },
          ],
        },
        {
          id: 'p1-math-c5-flash', type: 'flashcard', title: 'Flashcards — Statistiques', icon: '🃏',
          cards: [
            { front: 'Médiane', back: 'Valeur qui partage la série en deux moitiés.' },
            { front: 'Écart interquartile', back: 'Q3 − Q1 (dispersion des 50 % centraux).' },
            { front: 'Écart-type', back: 'Mesure la dispersion autour de la moyenne.' },
          ],
        },
      ],
    },
    {
      id: 'p1-math-c6',
      name: 'Chapitre 6 — Probabilités',
      short: 'Probabilités',
      keywords: 'probabilité conditionnelle arbre pondéré indépendance variable aléatoire espérance',
      intro: 'Les probabilités mesurent le **hasard**. Outils clés : la probabilité conditionnelle et l’espérance.',
      cours: [
        {
          h: 'Conditionnelle, indépendance, espérance',
          blocks: [
            { t: 'formula', c: 'P_A(B) = P(A ∩ B) / P(A) · A et B indépendants ⇔ P(A ∩ B) = P(A) × P(B)' },
            { t: 'p', c: 'On visualise avec un **arbre pondéré** (on multiplie le long des branches ; la somme des branches d’un nœud vaut 1). Une **variable aléatoire** prend des valeurs selon le hasard ; son **espérance** E(X) = somme des (valeur × probabilité) est la « moyenne » attendue.' },
            { t: 'example', h: 'Exemple', c: '60 % font anglais, dont 30 % font aussi espagnol → P(anglais ∩ espagnol) = 0,60 × 0,30 = **0,18**.' },
          ],
        },
      ],
      essentiel: ['**P_A(B) = P(A ∩ B) / P(A)** ; sur un arbre, on multiplie le long des branches.', 'Indépendance : **P(A ∩ B) = P(A) × P(B)**.', '**E(X)** = somme des (valeur × probabilité) : la moyenne attendue.'],
      resources: [{ kind: 'video', label: 'Probabilités conditionnelles', note: 'Vidéos — recherche YouTube', url: yt('probabilités conditionnelles arbre espérance première STMG') }],
      games: [
        { id: 'p1-math-c6-calc', type: 'calcul', title: 'Calcul express — Probabilités totales', icon: '⚡', gen: 'proba_totale', count: 5 },
        {
          id: 'p1-math-c6-qcm', type: 'qcm', title: 'QCM — Probabilités', icon: '❓',
          questions: [
            { q: 'La probabilité conditionnelle P_A(B) vaut…', choices: ['P(A ∩ B) / P(A)', 'P(A) × P(B)', 'P(A) + P(B)', 'P(B) − P(A)'], answer: 0, explain: 'Probabilité de B sachant A.' },
            { q: '60 % font anglais, dont 30 % font espagnol. P(anglais et espagnol) ?', choices: ['0,18', '0,90', '0,30', '0,50'], answer: 0, explain: '0,60 × 0,30 = 0,18.' },
            { q: 'A et B sont indépendants si…', choices: ['P(A ∩ B) = P(A) × P(B)', 'P(A) = P(B)', 'P(A ∩ B) = 0', 'P(A) + P(B) = 1'], answer: 0, explain: 'Définition de l’indépendance.' },
          ],
        },
      ],
    },
    {
      id: 'p1-math-c7',
      name: 'Chapitre 7 — Algorithmique et Python',
      short: 'Python',
      keywords: 'algorithme Python variable condition if else boucle for while fonction liste',
      intro: 'On consolide les bases de la **programmation** en Python, pour automatiser des calculs et simuler le hasard.',
      cours: [
        {
          h: 'Les briques de base',
          blocks: [
            { t: 'list', c: [
              'Les **variables** (stocker une valeur),',
              'les **conditions** (`if / else`, pour faire des choix),',
              'les **boucles** (`for`, `while`, pour répéter),',
              'les **fonctions** (regrouper des instructions), les **listes** (stocker plusieurs valeurs).',
            ] },
            { t: 'p', c: 'Applications : **simuler** une expérience aléatoire, calculer les termes d’une suite, automatiser un calcul répétitif.' },
          ],
        },
      ],
      essentiel: ['**Variables**, **conditions** (if/else), **boucles** (for/while), **fonctions**, **listes**.', 'Applications : simuler le hasard, calculer des suites, automatiser.'],
      resources: [{ kind: 'video', label: 'Python : bases (variables, boucles, conditions)', note: 'Vidéos — recherche YouTube', url: yt('python bases variables boucles conditions première STMG maths') }],
      games: [
        {
          id: 'p1-math-c7-qcm', type: 'qcm', title: 'QCM — Python', icon: '❓',
          questions: [
            { q: 'Pour répéter des instructions un nombre connu de fois, on utilise…', choices: ['une boucle for', 'un if', 'une variable', 'une liste'], answer: 0, explain: 'La boucle for répète ; while répète tant qu’une condition est vraie.' },
            { q: '`if / else` sert à…', choices: ['faire un choix selon une condition', 'répéter à l’infini', 'stocker plusieurs valeurs', 'afficher une image'], answer: 0, explain: 'C’est l’instruction conditionnelle.' },
            { q: 'Une **liste** permet de…', choices: ['stocker plusieurs valeurs', 'faire un seul calcul', 'créer une condition', 'arrêter le programme'], answer: 0, explain: 'La liste regroupe plusieurs valeurs.' },
          ],
        },
        {
          id: 'p1-math-c7-flash', type: 'flashcard', title: 'Flashcards — Python', icon: '🃏',
          cards: [
            { front: 'Variable', back: 'Stocke une valeur.' },
            { front: 'Boucle (for / while)', back: 'Répète des instructions.' },
            { front: 'Condition (if / else)', back: 'Fait un choix selon une condition.' },
            { front: 'Liste', back: 'Stocke plusieurs valeurs.' },
          ],
        },
      ],
    },
  ],
}

// ===========================================================================
// FRANÇAIS — Épreuves anticipées (EAF)
// ===========================================================================
const francaisP = {
  id: 'p1-francais',
  name: 'Français (EAF)',
  short: 'Français',
  icon: '📚',
  color: '#7c3aed',
  niveau: 'premiere',
  tagline: 'La seule épreuve du bac dès la première (écrit + oral).',
  chapters: [
    {
      id: 'p1-fr-1',
      name: 'Objets d’étude & figures de style',
      short: 'Objets d’étude',
      keywords: 'poésie littérature d’idées roman théâtre figures de style métaphore personnification hyperbole anaphore ironie',
      intro:
        'Le programme repose sur **4 objets d’étude**, chacun associé à une **œuvre** et à un **parcours**. Pour analyser un texte, il faut repérer et **nommer** les procédés, puis expliquer leur **effet**.',
      cours: [
        {
          h: 'Les 4 objets d’étude',
          blocks: [
            { t: 'list', c: [
              '**La poésie** (XIXe-XXIe) : travail du langage (images, sonorités, rythme).',
              '**La littérature d’idées** (XVIe-XVIIIe) : textes qui défendent des idées, argumentent (humanisme, Lumières).',
              '**Le roman et le récit** (Moyen Âge-XXIe) : l’art de raconter (personnages, intrigue, point de vue).',
              '**Le théâtre** (XVIIe-XXIe) : le texte **et** sa représentation (dialogue, monologue, didascalies).',
            ] },
            { t: 'warning', c: 'Un **programme national d’œuvres** est fixé chaque année et renouvelé par quart : **vérifie toujours la liste donnée par ton professeur** (elle change selon l’année).' },
          ],
        },
        {
          h: 'Les figures de style (boîte à outils)',
          blocks: [
            { t: 'table', head: ['Figure', 'Définition'], rows: [
              ['Comparaison', 'Rapproche deux éléments avec un outil (« comme »)'],
              ['Métaphore', 'Rapprochement sans outil (« une mer de larmes »)'],
              ['Personnification', 'Donne des traits humains à une chose (« le vent murmure »)'],
              ['Hyperbole', 'Exagération (« mourir de faim »)'],
              ['Anaphore', 'Répétition en début de vers/phrase (insistance)'],
              ['Antithèse / oxymore', 'Opposition d’idées / deux mots contradictoires (« soleil noir »)'],
              ['Ironie', 'Dire le contraire de ce qu’on pense pour critiquer'],
            ] },
            { t: 'tip', c: 'Toujours associer **le procédé + son effet** : « la personnification rend la nature vivante et crée une atmosphère mélancolique ».' },
          ],
        },
      ],
      essentiel: [
        '4 objets d’étude : **poésie, littérature d’idées, roman, théâtre** (chacun = 1 œuvre + 1 parcours).',
        'La liste des **œuvres change chaque année** : se fier au professeur.',
        'Analyser = **nommer le procédé + expliquer son effet**.',
      ],
      resources: [{ kind: 'video', label: 'Les figures de style', note: 'Vidéos — recherche YouTube', url: yt('figures de style métaphore personnification hyperbole première français') }],
      games: [
        {
          id: 'p1-fr-1-qcm', type: 'qcm', title: 'QCM — Figures de style', icon: '❓',
          questions: [
            { q: '« Le vent murmure » est une…', choices: ['personnification', 'hyperbole', 'litote', 'anaphore'], answer: 0, explain: 'On donne un trait humain (murmurer) au vent.' },
            { q: '« Une mer de larmes » est une…', choices: ['métaphore', 'comparaison', 'ironie', 'antithèse'], answer: 0, explain: 'Rapprochement sans outil de comparaison → métaphore.' },
            { q: 'Dire le contraire de ce qu’on pense pour critiquer, c’est…', choices: ['l’ironie', 'la métaphore', 'l’anaphore', 'l’hyperbole'], answer: 0, explain: 'L’ironie critique en disant l’inverse.' },
            { q: 'Combien d’objets d’étude au programme ?', choices: ['4', '3', '6', '8'], answer: 0, explain: 'Poésie, littérature d’idées, roman, théâtre.' },
          ],
        },
        {
          id: 'p1-fr-1-assoc', type: 'association', title: 'Association — Figure ↔ définition', icon: '🔗',
          pairs: [
            { left: 'Comparaison', right: 'Rapprochement avec « comme »' },
            { left: 'Hyperbole', right: 'Exagération' },
            { left: 'Anaphore', right: 'Répétition en début de vers' },
            { left: 'Oxymore', right: 'Deux mots contradictoires côte à côte' },
          ],
        },
        {
          id: 'p1-fr-1-flash', type: 'flashcard', title: 'Flashcards — Objets d’étude', icon: '🃏',
          cards: [
            { front: 'Poésie', back: 'Travail du langage : images, sonorités, rythme.' },
            { front: 'Littérature d’idées', back: 'Argumenter, défendre des idées (humanisme, Lumières).' },
            { front: 'Roman et récit', back: 'L’art de raconter (personnages, intrigue, point de vue).' },
            { front: 'Théâtre', back: 'Le texte et sa représentation (dialogue, didascalies).' },
          ],
        },
      ],
    },
    {
      id: 'p1-fr-2',
      name: 'Les épreuves & la méthode',
      short: 'Épreuves & méthode',
      keywords: 'EAF écrit commentaire contraction essai oral explication linéaire question de grammaire entretien',
      intro:
        'Le français se joue au bac **dès la première** : un **écrit (coef. 5)** et un **oral (coef. 5)**. La note récompense la **méthode**.',
      cours: [
        {
          h: 'L’écrit (4 h, coef. 5) — voie technologique',
          blocks: [
            { t: 'p', c: 'Au **choix** entre deux sujets :' },
            { t: 'list', c: [
              'un **commentaire** de texte littéraire, OU',
              'une **contraction de texte** (résumer au **¼**, fidèlement) **suivie d’un essai** (réflexion argumentée).',
            ] },
            { t: 'tip', c: '**Contraction** : respecter le sens et l’ordre des idées, garder le « je » de l’auteur, ne rien commenter. **Essai** : intro (reformuler la question), 2 parties argumentées, conclusion nuancée.' },
          ],
        },
        {
          h: 'L’oral (coef. 5)',
          blocks: [
            { t: 'list', c: [
              '**Partie 1 (12 min)** : **explication linéaire** d’un texte du descriptif + une **question de grammaire**.',
              '**Partie 2 (8 min)** : **présentation d’une œuvre** choisie + **entretien**.',
            ] },
            { t: 'p', c: '**Explication linéaire** : expliquer le texte **dans l’ordre**, en analysant les procédés au fil de la lecture (sans plaquer un plan thématique).' },
          ],
        },
      ],
      essentiel: [
        'Écrit (coef. 5) : **commentaire** OU **contraction (¼) + essai**.',
        'Oral (coef. 5) : **explication linéaire** + question de grammaire, puis **présentation d’œuvre** + entretien.',
        'Contraction : fidèle, ¼ du texte, garder le « je », ne pas commenter.',
      ],
      resources: [{ kind: 'video', label: 'Méthode du commentaire et de la contraction', note: 'Vidéos — recherche YouTube', url: yt('méthode commentaire contraction essai EAF première voie technologique') }],
      games: [
        {
          id: 'p1-fr-2-qcm', type: 'qcm', title: 'QCM — Les épreuves', icon: '❓',
          questions: [
            { q: 'À l’écrit techno, la contraction est suivie…', choices: ['d’un essai', 'd’un commentaire', 'd’une dictée', 'd’un exposé oral'], answer: 0, explain: 'Contraction + essai est l’un des deux sujets au choix.' },
            { q: 'La contraction réduit le texte à environ…', choices: ['un quart', 'la moitié', 'un dixième', 'trois quarts'], answer: 0, explain: 'Environ ¼, fidèlement.' },
            { q: 'La première partie de l’oral est…', choices: ['l’explication linéaire + une question de grammaire', 'une dissertation', 'une dictée', 'un débat'], answer: 0, explain: 'Puis présentation d’œuvre + entretien.' },
            { q: 'L’explication linéaire consiste à expliquer le texte…', choices: ['dans l’ordre, au fil de la lecture', 'en le résumant', 'par un plan thématique', 'sans le lire'], answer: 0, explain: 'On suit le texte pas à pas.' },
          ],
        },
        {
          id: 'p1-fr-2-flash', type: 'flashcard', title: 'Flashcards — Épreuves', icon: '🃏',
          cards: [
            { front: 'Écrit EAF (techno)', back: 'Commentaire OU contraction (¼) + essai.' },
            { front: 'Oral EAF', back: 'Explication linéaire + question de grammaire, puis œuvre + entretien.' },
            { front: 'Contraction', back: 'Résumer fidèlement au quart, sans commenter.' },
            { front: 'Explication linéaire', back: 'Expliquer le texte dans l’ordre, au fil de la lecture.' },
          ],
        },
      ],
    },
  ],
}

// ===========================================================================
// HISTOIRE-GÉOGRAPHIE (Le long XIXe + recompositions du territoire)
// ===========================================================================
const histoireP = {
  id: 'p1-histoire-geo',
  name: 'Histoire-Géographie',
  short: 'Histoire-Géo',
  icon: '🗺️',
  color: '#0891b2',
  niveau: 'premiere',
  tagline: 'Le long XIXe siècle · les recompositions du territoire.',
  chapters: [
    {
      id: 'p1-hg-h1',
      name: 'Histoire — La Révolution française et l’Empire (1789-1815)',
      short: 'Révolution & Empire',
      keywords: 'Révolution française 1789 monarchie absolue DDHC République Napoléon Empire 1804 1815 Code civil',
      intro: 'En 1789, la Révolution met fin à la **monarchie absolue** et proclame des principes nouveaux qui bouleversent l’Europe.',
      cours: [
        {
          h: 'La Révolution puis l’Empire',
          blocks: [
            { t: 'p', c: 'La **Révolution française (1789)** proclame **liberté, égalité, souveraineté de la nation** (Déclaration des droits de l’homme et du citoyen). Elle passe par plusieurs phases (monarchie constitutionnelle, République, Terreur).' },
            { t: 'p', c: '**Napoléon Bonaparte** bâtit ensuite un **Empire (1804-1815)** qui réorganise la France (**Code civil**, administration) et diffuse — par la guerre — certains principes révolutionnaires en Europe.' },
            { t: 'table', head: ['Date', 'Repère'], rows: [
              ['1789', 'Révolution française (DDHC)'],
              ['1792', 'Proclamation de la Ire République'],
              ['1804', 'Napoléon empereur (Empire)'],
              ['1815', 'Chute de Napoléon'],
            ] },
          ],
        },
      ],
      essentiel: ['**1789** : Révolution, DDHC (liberté, égalité, souveraineté de la nation).', '**Napoléon** : Empire **1804-1815**, Code civil.', 'Repères : 1789 · 1792 · 1804 · 1815.'],
      resources: [{ kind: 'video', label: 'Révolution française et Empire', note: 'Vidéos — recherche YouTube', url: yt('Révolution française Empire Napoléon 1789 1815 première histoire') }],
      games: [
        {
          id: 'p1-hg-h1-qcm', type: 'qcm', title: 'QCM — Révolution & Empire', icon: '❓',
          questions: [
            { q: 'La Révolution française éclate en…', choices: ['1789', '1815', '1848', '1870'], answer: 0, explain: '1789 : fin de la monarchie absolue, DDHC.' },
            { q: 'Le texte proclamant liberté et égalité en 1789 est…', choices: ['la Déclaration des droits de l’homme et du citoyen', 'le Code civil', 'la Constitution de 1958', 'le traité de Rome'], answer: 0, explain: 'La DDHC de 1789.' },
            { q: 'Napoléon devient empereur en…', choices: ['1804', '1789', '1848', '1815'], answer: 0, explain: 'L’Empire : 1804-1815.' },
            { q: 'Le grand code juridique napoléonien est…', choices: ['le Code civil', 'le Code du travail', 'le Code pénal européen', 'le RGPD'], answer: 0, explain: 'Le Code civil (1804) réorganise le droit.' },
          ],
        },
        {
          id: 'p1-hg-h1-flash', type: 'flashcard', title: 'Flashcards — Repères', icon: '🃏',
          cards: [
            { front: '1789', back: 'Révolution française, DDHC.' },
            { front: '1792', back: 'Ire République.' },
            { front: '1804-1815', back: 'Empire de Napoléon (Code civil).' },
          ],
        },
      ],
    },
    {
      id: 'p1-hg-h2',
      name: 'Histoire — La France au XIXe siècle',
      short: 'La France au XIXe',
      keywords: 'instabilité révolutions 1830 1848 IIe République suffrage universel masculin abolition esclavage industrialisation urbanisation',
      intro: 'Après 1815, la France connaît une grande **instabilité politique** et une profonde **transformation sociale** liée à l’industrialisation.',
      cours: [
        {
          h: 'Instabilité et transformations',
          blocks: [
            { t: 'p', c: 'Retour de la monarchie, puis **révolutions (1830, 1848)**. En **1848**, la **IIe République** instaure le **suffrage universel masculin** et **abolit l’esclavage**.' },
            { t: 'p', c: 'Parallèlement, l’**industrialisation** transforme la société : **urbanisation**, essor de la **bourgeoisie** et d’une **classe ouvrière**, nouvelles **tensions sociales**.' },
          ],
        },
      ],
      essentiel: ['Après 1815 : **instabilité** (révolutions de 1830 et 1848).', '**1848** : suffrage universel **masculin** + **abolition de l’esclavage**.', '**Industrialisation** → urbanisation, bourgeoisie, classe ouvrière, tensions sociales.'],
      resources: [{ kind: 'video', label: 'La France au XIXe siècle', note: 'Vidéos — recherche YouTube', url: yt('France XIXe siècle 1848 industrialisation première histoire') }],
      games: [
        {
          id: 'p1-hg-h2-qcm', type: 'qcm', title: 'QCM — La France au XIXe', icon: '❓',
          questions: [
            { q: 'En 1848, la IIe République instaure…', choices: ['le suffrage universel masculin', 'le suffrage des femmes', 'la monarchie absolue', 'l’Empire'], answer: 0, explain: '1848 : suffrage universel masculin et abolition de l’esclavage.' },
            { q: 'Quel événement de 1848 concerne l’esclavage ?', choices: ['son abolition', 'son rétablissement', 'son extension', 'aucun'], answer: 0, explain: 'L’esclavage est aboli en 1848.' },
            { q: 'L’industrialisation entraîne notamment…', choices: ['l’urbanisation et une classe ouvrière', 'un retour à la campagne', 'la fin des villes', 'la disparition de la bourgeoisie'], answer: 0, explain: 'Urbanisation, bourgeoisie, ouvriers, tensions sociales.' },
          ],
        },
        {
          id: 'p1-hg-h2-vf', type: 'vraifaux', title: 'Vrai / Faux rapide', icon: '⚡',
          questions: [
            { statement: 'Le suffrage universel de 1848 incluait les femmes.', answer: false, explain: 'Faux : il était masculin.' },
            { statement: 'L’industrialisation a favorisé l’urbanisation.', answer: true, explain: 'Vrai : afflux vers les villes industrielles.' },
          ],
        },
      ],
    },
    {
      id: 'p1-hg-h3',
      name: 'Histoire — La IIIe République et la Grande Guerre',
      short: 'IIIe République & 1914-1918',
      keywords: 'Troisième République laïcité école Ferry 1905 séparation empire colonial Première Guerre mondiale guerre totale',
      intro: 'À partir de **1870**, la IIIe République s’enracine et associe la République à des valeurs concrètes, avant l’épreuve de la **Grande Guerre**.',
      cours: [
        {
          h: 'La IIIe République puis la guerre totale',
          blocks: [
            { t: 'p', c: 'La **IIIe République** (à partir de **1870**) installe la **laïcité**, l’**école gratuite et obligatoire** (lois Ferry) et les libertés fondamentales (presse, syndicats). La France se dote aussi d’un vaste **empire colonial**.' },
            { t: 'p', c: 'La **Première Guerre mondiale (1914-1918)** est une **guerre totale** : elle mobilise les sociétés entières (soldats, économie de guerre, civils, propagande).' },
            { t: 'table', head: ['Date', 'Repère'], rows: [
              ['1870-1871', 'Début de la IIIe République'],
              ['1905', 'Séparation des Églises et de l’État'],
              ['1914-1918', 'Première Guerre mondiale'],
            ] },
          ],
        },
      ],
      essentiel: ['**IIIe République** (dès 1870) : laïcité, école gratuite/obligatoire (**lois Ferry**), empire colonial.', '**1905** : séparation des Églises et de l’État.', '**1914-1918** : Première Guerre mondiale, une **guerre totale**.'],
      resources: [{ kind: 'video', label: 'IIIe République et Première Guerre mondiale', note: 'Vidéos — recherche YouTube', url: yt('IIIe République Première Guerre mondiale guerre totale première histoire') }],
      games: [
        {
          id: 'p1-hg-h3-qcm', type: 'qcm', title: 'QCM — IIIe République & Grande Guerre', icon: '❓',
          questions: [
            { q: 'Les lois Ferry instaurent…', choices: ['l’école gratuite et obligatoire', 'le suffrage des femmes', 'l’Empire', 'la monarchie'], answer: 0, explain: 'Laïcité et école gratuite/obligatoire sous la IIIe République.' },
            { q: 'La séparation des Églises et de l’État date de…', choices: ['1905', '1789', '1870', '1918'], answer: 0, explain: '1905, un pilier de la laïcité.' },
            { q: 'La Première Guerre mondiale est qualifiée de guerre…', choices: ['totale', 'éclair', 'froide', 'civile'], answer: 0, explain: 'Elle mobilise les sociétés entières (militaire, économique, morale).' },
          ],
        },
        {
          id: 'p1-hg-h3-flash', type: 'flashcard', title: 'Flashcards — Repères', icon: '🃏',
          cards: [
            { front: 'Lois Ferry', back: 'École gratuite, laïque et obligatoire (IIIe République).' },
            { front: '1905', back: 'Séparation des Églises et de l’État.' },
            { front: 'Guerre totale', back: 'Mobilisation militaire, économique et des esprits (1914-1918).' },
          ],
        },
      ],
    },
    {
      id: 'p1-hg-g1',
      name: 'Géographie — La métropolisation',
      short: 'La métropolisation',
      keywords: 'métropolisation métropoles fonctions de commandement inégalités processus différencié',
      intro: 'La **métropolisation** est la concentration croissante des populations, des activités et des pouvoirs dans les grandes villes.',
      cours: [
        {
          h: 'Un processus mondial différencié',
          blocks: [
            { t: 'p', c: 'Plus de la moitié de l’humanité vit en ville. Quelques **métropoles mondiales** (New York, Londres, Tokyo, Paris) concentrent richesse et **fonctions de commandement**, tandis que d’autres espaces restent en marge : le processus est **différencié** et accentue les **inégalités** entre territoires.' },
          ],
        },
      ],
      essentiel: ['**Métropolisation** = concentration des populations, activités et pouvoirs dans les métropoles.', 'Processus **différencié** : quelques métropoles dominent, d’autres espaces restent en marge.', 'Il accentue les **inégalités** territoriales (mondiale, nationale, locale).'],
      resources: [{ kind: 'video', label: 'La métropolisation', note: 'Vidéos — recherche YouTube', url: yt('métropolisation processus mondial différencié première géographie') }],
      games: [
        {
          id: 'p1-hg-g1-qcm', type: 'qcm', title: 'QCM — La métropolisation', icon: '❓',
          questions: [
            { q: 'La métropolisation désigne…', choices: ['la concentration des populations et activités dans les grandes villes', 'l’exode vers les campagnes', 'la disparition des villes', 'la fin de la mondialisation'], answer: 0, explain: 'Concentration des hommes, activités et fonctions de commandement.' },
            { q: 'On dit ce processus « différencié » car…', choices: ['il ne touche pas tous les territoires de la même façon', 'il est identique partout', 'il concerne seulement Paris', 'il ne crée aucune inégalité'], answer: 0, explain: 'Certaines métropoles dominent, d’autres espaces sont en marge.' },
            { q: 'La métropolisation tend à…', choices: ['accentuer les inégalités entre territoires', 'égaliser tous les territoires', 'vider les métropoles', 'supprimer les fonctions de commandement'], answer: 0, explain: 'Elle renforce les inégalités à toutes les échelles.' },
          ],
        },
        {
          id: 'p1-hg-g1-flash', type: 'flashcard', title: 'Flashcards — Métropolisation', icon: '🃏',
          cards: [
            { front: 'Métropolisation', back: 'Concentration des populations, activités et pouvoirs dans les métropoles.' },
            { front: 'Fonctions de commandement', back: 'Sièges, bourses, universités, aéroports internationaux.' },
            { front: 'Processus différencié', back: 'Touche inégalement les territoires → inégalités.' },
          ],
        },
      ],
    },
    {
      id: 'p1-hg-g2',
      name: 'Géographie — Espaces et acteurs de la production',
      short: 'Espaces productifs',
      keywords: 'espaces productifs mondialisation industrie services agriculture acteurs firmes multinationales État collectivités',
      intro: 'Les **espaces productifs** se recomposent sous l’effet de la **mondialisation** et du numérique.',
      cours: [
        {
          h: 'Une diversification des espaces et des acteurs',
          blocks: [
            { t: 'p', c: 'L’industrie se réorganise (délocalisations, **technopôles**), les **services** prennent une place croissante, l’agriculture se modernise. De nombreux **acteurs** interviennent : entreprises (dont les **firmes multinationales**), État, collectivités, acteurs locaux.' },
          ],
        },
      ],
      essentiel: ['Les **espaces productifs** se recomposent (mondialisation, numérique).', 'Montée des **services**, réorganisation de l’industrie (délocalisations, technopôles).', 'Acteurs multiples : **FMN**, État, collectivités, acteurs locaux.'],
      resources: [{ kind: 'video', label: 'Les espaces productifs', note: 'Vidéos — recherche YouTube', url: yt('espaces productifs acteurs mondialisation première géographie') }],
      games: [
        {
          id: 'p1-hg-g2-qcm', type: 'qcm', title: 'QCM — Espaces productifs', icon: '❓',
          questions: [
            { q: 'Les espaces productifs se recomposent surtout sous l’effet de…', choices: ['la mondialisation et du numérique', 'la météo', 'la monarchie', 'la démographie seule'], answer: 0, explain: 'Mondialisation et numérique réorganisent la production.' },
            { q: 'Parmi les acteurs de la production :', choices: ['les firmes multinationales et l’État', 'uniquement les touristes', 'seulement les agriculteurs', 'aucun acteur'], answer: 0, explain: 'FMN, État, collectivités, acteurs locaux.' },
            { q: 'Le secteur qui prend une place croissante est celui…', choices: ['des services', 'de la chasse', 'de l’artisanat médiéval', 'de la monarchie'], answer: 0, explain: 'Tertiarisation : montée des services.' },
          ],
        },
        {
          id: 'p1-hg-g2-flash', type: 'flashcard', title: 'Flashcards — Production', icon: '🃏',
          cards: [
            { front: 'Espaces productifs', back: 'Espaces où l’on produit biens et services.' },
            { front: 'Technopôle', back: 'Concentration d’activités de haute technologie et de recherche.' },
            { front: 'FMN', back: 'Firme multinationale, acteur clé de la production mondialisée.' },
          ],
        },
      ],
    },
    {
      id: 'p1-hg-g3',
      name: 'Géographie — Les espaces ruraux',
      short: 'Espaces ruraux',
      keywords: 'espaces ruraux multifonctionnalité périurbanisation résidentielle touristique tensions',
      intro: 'Les **espaces ruraux** ne sont plus seulement agricoles : ils remplissent désormais **plusieurs fonctions**.',
      cours: [
        {
          h: 'Une multifonctionnalité croissante',
          blocks: [
            { t: 'p', c: 'Les espaces ruraux ont des fonctions **résidentielle, touristique, écologique, économique**. Certains, proches des villes, se **périurbanisent** (habitat pavillonnaire) ; d’autres, isolés, déclinent ou se tournent vers le tourisme. Cette **multifonctionnalité** crée des **tensions** (usage des sols, cohabitation d’activités).' },
          ],
        },
      ],
      essentiel: ['Les espaces ruraux sont **multifonctionnels** (résidentiel, tourisme, écologie, économie).', '**Périurbanisation** près des villes ; déclin ou tourisme dans les espaces isolés.', 'La multifonctionnalité crée des **tensions** (usage des sols).'],
      resources: [{ kind: 'video', label: 'Les espaces ruraux', note: 'Vidéos — recherche YouTube', url: yt('espaces ruraux multifonctionnalité périurbanisation première géographie') }],
      games: [
        {
          id: 'p1-hg-g3-qcm', type: 'qcm', title: 'QCM — Espaces ruraux', icon: '❓',
          questions: [
            { q: 'Les espaces ruraux aujourd’hui sont…', choices: ['multifonctionnels', 'uniquement agricoles', 'tous abandonnés', 'sans habitants'], answer: 0, explain: 'Résidentiel, touristique, écologique, économique.' },
            { q: 'Le développement de l’habitat pavillonnaire autour des villes s’appelle…', choices: ['la périurbanisation', 'la métropolisation', 'la désertification', 'la littoralisation'], answer: 0, explain: 'La périurbanisation touche les espaces ruraux proches des villes.' },
            { q: 'La multifonctionnalité des espaces ruraux crée…', choices: ['des tensions (usage des sols)', 'aucune difficulté', 'la fin de l’agriculture', 'la disparition du tourisme'], answer: 0, explain: 'Cohabitation d’activités → tensions.' },
          ],
        },
        {
          id: 'p1-hg-g3-flash', type: 'flashcard', title: 'Flashcards — Ruralité', icon: '🃏',
          cards: [
            { front: 'Multifonctionnalité', back: 'Plusieurs fonctions : résidentielle, touristique, écologique, économique.' },
            { front: 'Périurbanisation', back: 'Extension de l’habitat autour des villes.' },
          ],
        },
      ],
    },
  ],
}

// ===========================================================================
// LANGUES (Anglais / Espagnol + 8 axes)
// ===========================================================================
const languesP = {
  id: 'p1-langues',
  name: 'Langues (Anglais / Espagnol)',
  short: 'Langues',
  icon: '🗣️',
  color: '#db2777',
  niveau: 'premiere',
  tagline: 'Consolider les bases grammaticales (contrôle continu).',
  chapters: [
    {
      id: 'p1-lng-en',
      name: 'Anglais — Grammaire essentielle',
      short: 'Anglais',
      keywords: 'present simple continuous preterit present perfect futur modaux conditionnels comparatifs connecteurs',
      intro: 'Quelques temps et structures reviennent sans cesse. La distinction **preterit / present perfect** est la difficulté majeure.',
      cours: [
        {
          h: 'Les temps',
          blocks: [
            { t: 'table', head: ['Temps', 'Emploi', 'Exemple'], rows: [
              ['Present simple', 'Habitude, vérité générale (+ -s à la 3e pers.)', 'She works in Paris'],
              ['Present continuous (be + -ing)', 'Action en cours', 'They are working now'],
              ['Preterit', 'Action passée datée et terminée', 'We went to London in 2019'],
              ['Present perfect (have/has + PP)', 'Lien passé-présent (for, since, ever…)', 'I have visited London'],
            ] },
            { t: 'tip', c: 'Une **date précise** (in 2019, yesterday) impose le **preterit** ; *for/since/ever/already/yet* appellent le **present perfect**.' },
          ],
        },
        {
          h: 'Modaux, conditionnels, comparatifs',
          blocks: [
            { t: 'list', c: [
              '**Modaux** (+ base verbale) : can/could, may/might, must, have to, should.',
              '**Conditionnels** : Type 1 *If + present, will + BV* ; Type 2 *If + preterit, would + BV*.',
              '**Comparatifs** : cheaper / more expensive ; irréguliers good→better→best.',
              '**Connecteurs** : however, therefore, because, although, moreover, for instance.',
            ] },
          ],
        },
      ],
      essentiel: [
        '**Preterit** (daté) vs **present perfect** (lien passé-présent, for/since).',
        'Modaux + **base verbale** ; conditionnel 2 : *If + preterit, would + BV*.',
        'Comparatifs : -er / more… ; good → better → the best.',
      ],
      resources: [{ kind: 'video', label: 'Present perfect vs preterit', note: 'Vidéos — recherche YouTube', url: yt('present perfect preterit anglais explication lycée') }],
      games: [
        {
          id: 'p1-lng-en-trou', type: 'trou', title: 'Texte à trous — Conjugaison', icon: '✏️',
          questions: [
            { text: 'She ____ (work) here since 2020.', answer: 'has worked', explain: 'Present perfect + since : « has worked ».' },
            { text: 'They ____ (watch) TV when I arrived.', answer: 'were watching', explain: 'Past continuous : action en cours interrompue.' },
            { text: 'If it ____ (rain), we will cancel.', answer: 'rains', explain: 'Conditionnel type 1 : If + present.' },
          ],
        },
        {
          id: 'p1-lng-en-qcm', type: 'qcm', title: 'QCM — Grammaire anglaise', icon: '❓',
          questions: [
            { q: '« We ___ to London in 2019 » (date précise) :', choices: ['went', 'have gone', 'go', 'are going'], answer: 0, explain: 'Date précise → preterit.' },
            { q: 'Conditionnel type 2 : « If I ___ rich, I would travel » :', choices: ['were', 'am', 'will be', 'have been'], answer: 0, explain: 'If + preterit → would + BV.' },
            { q: 'Comparatif irrégulier de « good » :', choices: ['better', 'gooder', 'more good', 'best'], answer: 0, explain: 'good → better → the best.' },
          ],
        },
        {
          id: 'p1-lng-en-flash', type: 'flashcard', title: 'Flashcards — Temps', icon: '🃏',
          cards: [
            { front: 'Present perfect', back: 'have/has + PP : lien passé-présent (for, since).' },
            { front: 'Preterit', back: 'Action passée datée et terminée.' },
            { front: 'Conditionnel type 2', back: 'If + preterit, would + base verbale.' },
          ],
        },
      ],
    },
    {
      id: 'p1-lng-es',
      name: 'Espagnol — Grammaire essentielle',
      short: 'Espagnol',
      keywords: 'ser estar indefinido imperfecto perfecto futuro subjonctif gérondif gustar obligación a personnel',
      intro: 'Deux difficultés majeures : **ser vs estar** et **indefinido vs imperfecto**.',
      cours: [
        {
          h: 'Ser / Estar et les passés',
          blocks: [
            { t: 'table', head: ['SER', 'ESTAR'], rows: [
              ['Caractéristique permanente, identité, profession, heure', 'État passager, lieu, situation'],
              ['Soy estudiante · Es alto', 'Estoy cansado · Madrid está en España'],
            ] },
            { t: 'p', c: '**Indefinido** = action passée **datée** (« Ayer comí ») ; **imperfecto** = **description/habitude** (« Cuando era niño, jugaba ») ; **pretérito perfecto** (he/has/ha + participe) = passé récent lié au présent (« Hoy he comido »).' },
          ],
        },
        {
          h: 'Autres points clés',
          blocks: [
            { t: 'list', c: [
              '**Futur** : infinitif + -é, -ás, -á, -emos, -éis, -án (hablaré). Irréguliers : tener→tendré.',
              '**Gustar** : « Me gusta el cine » / « Me gustan los libros » (accord avec la chose aimée).',
              '**Obligation** : *tener que* + inf. (personnelle) ; *hay que* + inf. (impersonnelle).',
              'Le **« a » personnel** devant un COD de personne (« Veo a María »).',
            ] },
          ],
        },
      ],
      essentiel: [
        '**Ser** = permanent ; **Estar** = état/lieu passager.',
        '**Indefinido** = action datée ; **imperfecto** = décor/habitude.',
        '**Gustar** : accord avec la chose aimée (gusta / gustan).',
      ],
      resources: [{ kind: 'video', label: 'Ser vs Estar ; indefinido vs imperfecto', note: 'Vidéos — recherche YouTube', url: yt('espagnol ser estar indefinido imperfecto lycée') }],
      games: [
        {
          id: 'p1-lng-es-tri', type: 'tri', title: 'Tri — Ser ou Estar ?', icon: '🗂️',
          instruction: 'Classe chaque phrase.',
          categories: [{ id: 'ser', label: 'SER' }, { id: 'estar', label: 'ESTAR' }],
          items: [
            { text: 'Soy ___ estudiante (profession)', cat: 'ser' },
            { text: 'Estoy ___ cansado (état)', cat: 'estar' },
            { text: 'Madrid ___ en España (lieu)', cat: 'estar' },
            { text: 'Es ___ alto (caractéristique)', cat: 'ser' },
            { text: 'Son ___ las tres (heure)', cat: 'ser' },
          ],
        },
        {
          id: 'p1-lng-es-trou', type: 'trou', title: 'Texte à trous — Passés & gustar', icon: '✏️',
          questions: [
            { text: 'Ayer nosotros ____ (ir) al cine.', answer: 'fuimos', alt: ['fuímos'], explain: 'Indefinido (action datée) : « fuimos ».' },
            { text: 'Cuando era niño, ____ (jugar) mucho.', answer: 'jugaba', explain: 'Imperfecto (habitude passée) : « jugaba ».' },
            { text: 'Me ____ (gustar) las películas de acción.', answer: 'gustan', explain: 'Accord avec le pluriel : « gustan ».' },
          ],
        },
        {
          id: 'p1-lng-es-qcm', type: 'qcm', title: 'QCM — Grammaire espagnole', icon: '❓',
          questions: [
            { q: '« Madrid ___ en España » :', choices: ['está', 'es', 'son', 'estar'], answer: 0, explain: 'Lieu → estar.' },
            { q: '« Il faut étudier » se dit…', choices: ['Hay que estudiar', 'Tengo estudiar', 'Es estudiar', 'Estar estudiar'], answer: 0, explain: 'Obligation impersonnelle : hay que + infinitif.' },
            { q: '« Ayer ___ (comer) » se met à l’…', choices: ['indefinido (comí)', 'imperfecto (comía)', 'futuro', 'présent'], answer: 0, explain: 'Action datée « ayer » → indefinido.' },
          ],
        },
      ],
    },
    {
      id: 'p1-lng-axes',
      name: 'Les 8 axes culturels',
      short: '8 axes culturels',
      keywords: 'axes culturels identités échanges espace privé public art pouvoir citoyenneté fictions innovations diversité mémoire médiation',
      intro: 'Le programme s’organise autour de **8 axes culturels** (« Gestes fondateurs et mondes en mouvement ») et de **6 activités langagières**.',
      cours: [
        {
          h: 'Les 8 axes',
          blocks: [
            { t: 'list', c: [
              '1. Identités et échanges — 2. Espace privé et espace public',
              '3. Art et pouvoir — 4. Citoyenneté et mondes virtuels',
              '5. Fictions et réalités — 6. Innovations scientifiques et responsabilité',
              '7. Diversité et inclusion — 8. Territoire et mémoire',
            ] },
            { t: 'p', c: '**6 activités langagières** : compréhension orale/écrite, expression orale (continu et interaction), expression écrite, et **médiation** (reformuler, traduire ou expliquer un document).' },
          ],
        },
      ],
      essentiel: ['**8 axes culturels** (thématique « Gestes fondateurs et mondes en mouvement »).', '6 activités langagières, dont la **médiation**.'],
      resources: [{ kind: 'video', label: 'Les axes du programme de langues', note: 'Vidéos — recherche YouTube', url: yt('axes programme langues lycée gestes fondateurs mondes en mouvement') }],
      games: [
        {
          id: 'p1-lng-axes-qcm', type: 'qcm', title: 'QCM — Les 8 axes', icon: '❓',
          questions: [
            { q: 'Combien d’axes culturels au programme ?', choices: ['8', '6', '4', '10'], answer: 0, explain: 'Le programme compte 8 axes culturels.' },
            { q: 'La « médiation » consiste à…', choices: ['reformuler / traduire / expliquer un document', 'apprendre par cœur', 'passer un test de grammaire', 'faire une dictée'], answer: 0, explain: 'Médiation = expliquer/traduire un document à quelqu’un.' },
            { q: '« Citoyenneté et mondes virtuels » couvre notamment…', choices: ['réseaux sociaux, fake news', 'la Guerre de Cent Ans', 'la TVA', 'la dérivation'], answer: 0, explain: 'C’est l’axe du numérique et de la citoyenneté.' },
          ],
        },
        {
          id: 'p1-lng-axes-ordre', type: 'ordre', title: 'Remise en ordre — Les 4 premiers axes', icon: '🔢',
          instruction: 'Remets les 4 premiers axes dans l’ordre officiel.',
          steps: ['Identités et échanges', 'Espace privé et espace public', 'Art et pouvoir', 'Citoyenneté et mondes virtuels'],
          explain: 'Les axes 1 à 4 dans l’ordre du programme.',
        },
      ],
    },
  ],
}

export const premiereSubjects = [sgn, managementP, droitP, economieP, mathsP, francaisP, histoireP, languesP]
