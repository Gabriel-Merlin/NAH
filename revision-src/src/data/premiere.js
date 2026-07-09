// PREMIÈRE STMG — enseignements de spécialité : Sciences de gestion et numérique,
// Management, Droit, Économie. Cours détaillés (format blocs), exemples, fiches
// mémo et jeux. Bâti sur le programme officiel de 1re STMG.
// ⚠️ Contenu généré avec l'aide de l'IA : à recouper avec le cours de tes profs.
const yt = (q) => 'https://www.youtube.com/results?search_query=' + encodeURIComponent(q)

// ===========================================================================
// SCIENCES DE GESTION ET NUMÉRIQUE (SGN)
// ===========================================================================
const sgn = {
  id: 'p1-sgn',
  name: 'Sciences de gestion et numérique',
  short: 'Sciences de gestion',
  icon: '💡',
  color: '#0d9488',
  niveau: 'premiere',
  tagline: 'La spécialité de découverte : comment fonctionne une organisation.',
  chapters: [
    {
      id: 'p1-sgn-t1',
      name: 'Thème 1 — De l’individu à l’acteur',
      short: 'De l’individu à l’acteur',
      keywords: 'individu acteur organisation socialisation statut rôle communication groupe compétence qualification rémunération',
      intro:
        'Une organisation, ce sont d’abord des **personnes**. Ce thème explique comment un **individu** devient un **acteur** de l’organisation : comment il communique, s’intègre à un groupe, met ses **compétences** au service d’un objectif commun et se voit **rémunéré**.',
      cours: [
        {
          h: 'De l’individu à l’acteur de l’organisation',
          blocks: [
            { t: 'p', c: 'En intégrant une organisation, l’individu adopte un **statut** (sa position : salarié, stagiaire, manager…) et un **rôle** (les comportements attendus dans ce statut). C’est la **socialisation** : il apprend les règles, les valeurs et la **culture** de l’organisation.' },
            { t: 'p', c: 'Il devient un **acteur** lorsqu’il agit, prend des initiatives et influence le fonctionnement de l’organisation, au-delà de sa simple fonction.' },
            { t: 'tip', c: 'Statut = la **place** ; rôle = ce qu’on **attend** de cette place. Ex. : le statut de délégué de classe implique le rôle de représenter les élèves.' },
          ],
        },
        {
          h: 'Communiquer et travailler en groupe',
          blocks: [
            { t: 'p', c: 'La **communication** relie les acteurs : elle peut être **interpersonnelle** (entre deux personnes), de **groupe**, ou **de masse**. Elle suppose un émetteur, un message, un canal, un récepteur — et peut être perturbée par des **bruits**.' },
            { t: 'list', c: [
              'Un **groupe** peut être **formel** (prévu par l’organisation, ex. un service) ou **informel** (affinités, pauses café).',
              'La **cohésion** du groupe favorise la coopération et la performance.',
              'Des **conflits** peuvent surgir : ils se gèrent par le dialogue, la négociation, l’arbitrage.',
            ] },
          ],
        },
        {
          h: 'Compétences, qualification et rémunération',
          blocks: [
            { t: 'p', c: 'La **compétence** est la capacité à mobiliser des savoirs (connaissances), des savoir-faire (pratique) et des savoir-être (comportement) dans une situation de travail. La **qualification** reconnaît ces compétences (diplôme, expérience).' },
            { t: 'p', c: 'En contrepartie de son travail, l’individu perçoit une **rémunération** : un **salaire** (fixe et/ou variable) auquel s’ajoutent parfois des **primes** et des **avantages**.' },
          ],
        },
      ],
      essentiel: [
        '**Statut** = la position ; **rôle** = les comportements attendus.',
        '**Socialisation** : apprentissage des règles, valeurs et culture de l’organisation.',
        'Groupe **formel** (organisé) vs **informel** (affinités) ; la **cohésion** aide à la performance.',
        '**Compétence** = savoirs + savoir-faire + savoir-être ; **rémunération** = salaire + primes + avantages.',
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
            { q: 'Le « statut » d’un individu dans une organisation désigne…', choices: ['sa position (ex. salarié, manager)', 'son salaire net', 'son humeur du jour', 'son lieu de naissance'], answer: 0, explain: 'Le statut est la position occupée ; le rôle correspond aux comportements attendus.' },
            { q: 'L’apprentissage des règles et valeurs de l’organisation s’appelle…', choices: ['la socialisation', 'la rémunération', 'la production', 'la cotation'], answer: 0, explain: 'La socialisation permet à l’individu de s’intégrer à l’organisation.' },
            { q: 'Un groupe « informel » se caractérise par…', choices: ['des relations d’affinités non prévues par l’organisation', 'un organigramme officiel', 'un contrat de travail', 'un règlement intérieur'], answer: 0, explain: 'Le groupe informel naît des affinités ; le groupe formel est organisé par l’entreprise.' },
            { q: 'Une compétence combine…', choices: ['savoirs, savoir-faire et savoir-être', 'salaire, prime et avantage', 'statut, rôle et grade', 'offre, demande et prix'], answer: 0, explain: 'La compétence mobilise connaissances, pratique et comportement.' },
            { q: 'La contrepartie du travail fourni par le salarié est…', choices: ['la rémunération', 'la socialisation', 'la cohésion', 'la médiation'], answer: 0, explain: 'La rémunération (salaire, primes, avantages) rétribue le travail.' },
          ],
        },
        {
          id: 'p1-sgn-t1-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'Le rôle correspond aux comportements attendus d’un statut.', answer: true, explain: 'Vrai : le statut est la place, le rôle est ce qu’on en attend.' },
            { statement: 'Un groupe informel est créé officiellement par l’organisation.', answer: false, explain: 'Faux : c’est le groupe formel ; l’informel naît des affinités.' },
            { statement: 'La qualification reconnaît les compétences d’un individu.', answer: true, explain: 'Vrai : diplôme, expérience… reconnaissent les compétences.' },
          ],
        },
        {
          id: 'p1-sgn-t1-flash',
          type: 'flashcard',
          title: 'Flashcards — Notions clés',
          icon: '🃏',
          cards: [
            { front: 'Socialisation', back: 'Apprentissage des règles, valeurs et culture de l’organisation.' },
            { front: 'Statut / rôle', back: 'La position occupée / les comportements attendus.' },
            { front: 'Groupe formel / informel', back: 'Organisé par l’entreprise / né des affinités.' },
            { front: 'Compétence', back: 'Savoirs + savoir-faire + savoir-être mobilisés au travail.' },
            { front: 'Rémunération', back: 'Salaire (fixe/variable) + primes + avantages.' },
          ],
        },
        {
          id: 'p1-sgn-t1-assoc',
          type: 'association',
          title: 'Association — Notion ↔ définition',
          icon: '🔗',
          pairs: [
            { left: 'Savoir', right: 'Connaissances théoriques' },
            { left: 'Savoir-faire', right: 'Maîtrise pratique d’une tâche' },
            { left: 'Savoir-être', right: 'Comportement, attitude professionnelle' },
            { left: 'Cohésion', right: 'Force qui unit les membres d’un groupe' },
          ],
        },
      ],
    },
    {
      id: 'p1-sgn-t2',
      name: 'Thème 2 — Numérique et intelligence collective',
      short: 'Numérique & données',
      keywords: 'donnée information connaissance système d’information PGI collaboratif réseau big data sécurité',
      intro:
        'Le **numérique** transforme la façon dont les organisations travaillent. Ce thème montre comment une simple **donnée** devient de l’**information** puis de la **connaissance** utile à la décision, et comment les outils numériques favorisent le travail collectif.',
      cours: [
        {
          h: 'De la donnée à la connaissance',
          blocks: [
            { t: 'p', c: 'Une **donnée** est un élément brut (un chiffre, une date, un nom). Traitée et mise en contexte, elle devient une **information** (utile, porteuse de sens). Combinée à l’expérience, l’information devient une **connaissance** exploitable pour décider.' },
            { t: 'example', h: 'Exemple', c: 'Donnée : « 250 ». Information : « 250 clients ont acheté en janvier ». Connaissance : « les ventes progressent, il faut réassortir le stock ».' },
            { t: 'p', c: 'Le **système d’information (SI)** collecte, stocke, traite et diffuse l’information dans l’organisation. Un **PGI** (progiciel de gestion intégré) centralise ces données dans une base unique.' },
          ],
        },
        {
          h: 'Numérique et travail collaboratif',
          blocks: [
            { t: 'list', c: [
              'Les outils **collaboratifs** (agendas partagés, messageries, cloud) permettent l’**intelligence collective** : produire ensemble mieux que seul.',
              'Le **big data** désigne le traitement de très grands volumes de données.',
              'La **sécurité** du SI est essentielle : disponibilité, intégrité, **confidentialité**, traçabilité.',
            ] },
            { t: 'warning', c: 'Le numérique soulève des enjeux : protection des **données personnelles** (RGPD), cybersécurité, et dépendance aux outils.' },
          ],
        },
      ],
      essentiel: [
        '**Donnée** (brute) → **information** (mise en sens) → **connaissance** (utile à la décision).',
        'Le **système d’information** collecte, stocke, traite et diffuse l’information ; le **PGI** centralise tout.',
        '**Intelligence collective** grâce aux outils collaboratifs ; enjeux de **sécurité** et de **données personnelles**.',
      ],
      resources: [
        { kind: 'video', label: 'Donnée, information, connaissance', note: 'Vidéos — recherche YouTube', url: yt('donnée information connaissance système information première STMG') },
      ],
      games: [
        {
          id: 'p1-sgn-t2-qcm',
          type: 'qcm',
          title: 'QCM — Numérique et données',
          icon: '❓',
          questions: [
            { q: 'Un élément brut, non interprété, est…', choices: ['une donnée', 'une information', 'une connaissance', 'une décision'], answer: 0, explain: 'La donnée est brute ; traitée et mise en contexte, elle devient information.' },
            { q: 'Une donnée mise en contexte et porteuse de sens devient…', choices: ['une information', 'un bruit', 'un PGI', 'un réseau'], answer: 0, explain: 'L’information est une donnée utile et porteuse de sens.' },
            { q: 'Le progiciel qui centralise les données dans une base unique est…', choices: ['le PGI (ERP)', 'le big data', 'le RGPD', 'le cloud public'], answer: 0, explain: 'Le PGI/ERP repose sur une base de données unique.' },
            { q: 'Parmi les exigences de sécurité d’un système d’information :', choices: ['la confidentialité', 'la rentabilité', 'la publicité', 'la fidélité'], answer: 0, explain: 'Disponibilité, intégrité, confidentialité, traçabilité (DICT).' },
          ],
        },
        {
          id: 'p1-sgn-t2-ordre',
          type: 'ordre',
          title: 'Remise en ordre — De la donnée à la décision',
          icon: '🔢',
          instruction: 'Remets dans l’ordre la transformation de l’information.',
          steps: ['Donnée (brute)', 'Information (mise en sens)', 'Connaissance (utile)', 'Décision'],
          explain: 'La donnée devient information, puis connaissance, pour éclairer la décision.',
        },
        {
          id: 'p1-sgn-t2-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'Une donnée est déjà une information exploitable.', answer: false, explain: 'Faux : la donnée est brute ; il faut la traiter pour obtenir une information.' },
            { statement: 'Le PGI repose sur une base de données unique.', answer: true, explain: 'Vrai : d’où sa fiabilité (saisie unique).' },
            { statement: 'La protection des données personnelles est un enjeu du numérique.', answer: true, explain: 'Vrai : encadrée notamment par le RGPD.' },
          ],
        },
        {
          id: 'p1-sgn-t2-flash',
          type: 'flashcard',
          title: 'Flashcards — Numérique',
          icon: '🃏',
          cards: [
            { front: 'Système d’information (SI)', back: 'Collecte, stocke, traite et diffuse l’information.' },
            { front: 'PGI / ERP', back: 'Logiciel unique à base de données unique.' },
            { front: 'Big data', back: 'Traitement de très grands volumes de données.' },
            { front: 'Intelligence collective', back: 'Produire ensemble grâce aux outils collaboratifs.' },
          ],
        },
      ],
    },
    {
      id: 'p1-sgn-t3',
      name: 'Thème 3 — Création de valeur et performance',
      short: 'Valeur & performance',
      keywords: 'valeur perçue marchande financière performance indicateurs parties prenantes chaîne de valeur',
      intro:
        'Pourquoi une organisation existe-t-elle ? Pour **créer de la valeur**. Ce thème distingue les différentes formes de valeur et apprend à **mesurer la performance** avec des indicateurs.',
      cours: [
        {
          h: 'Les formes de valeur',
          blocks: [
            { t: 'list', c: [
              '**Valeur perçue** : ce que le client estime recevoir (qualité, image, satisfaction).',
              '**Valeur marchande** : le prix auquel un bien/service s’échange sur le marché.',
              '**Valeur financière** : la richesse créée pour l’organisation (profit, valeur ajoutée).',
            ] },
            { t: 'p', c: 'La **chaîne de valeur** décrit l’enchaînement des activités qui, ensemble, créent de la valeur pour le client.' },
          ],
        },
        {
          h: 'Mesurer la performance',
          blocks: [
            { t: 'p', c: 'La **performance** se mesure par des **indicateurs** de plusieurs natures :' },
            { t: 'table', head: ['Type de performance', 'Exemples d’indicateurs'], rows: [
              ['Commerciale', 'Chiffre d’affaires, part de marché, satisfaction client'],
              ['Financière', 'Résultat, rentabilité, valeur ajoutée'],
              ['Sociale', 'Turnover, absentéisme, climat social'],
              ['Environnementale', 'Empreinte carbone, déchets recyclés'],
            ] },
            { t: 'p', c: 'Les **parties prenantes** (clients, salariés, actionnaires, fournisseurs, État…) ont des attentes différentes vis-à-vis de cette performance.' },
          ],
        },
      ],
      essentiel: [
        'Trois valeurs : **perçue** (client), **marchande** (prix), **financière** (richesse créée).',
        'La **performance** se mesure par des indicateurs : commerciaux, financiers, **sociaux**, environnementaux.',
        'Les **parties prenantes** ont des attentes divergentes sur la performance.',
      ],
      resources: [
        { kind: 'video', label: 'Création de valeur et performance', note: 'Vidéos — recherche YouTube', url: yt('création de valeur performance parties prenantes première STMG') },
      ],
      games: [
        {
          id: 'p1-sgn-t3-qcm',
          type: 'qcm',
          title: 'QCM — Valeur et performance',
          icon: '❓',
          questions: [
            { q: 'Le prix auquel un bien s’échange sur le marché correspond à la valeur…', choices: ['marchande', 'perçue', 'sociale', 'ajoutée par le client'], answer: 0, explain: 'La valeur marchande est le prix d’échange.' },
            { q: 'La satisfaction et l’image ressenties par le client relèvent de la valeur…', choices: ['perçue', 'marchande', 'financière', 'comptable'], answer: 0, explain: 'La valeur perçue est celle que le client estime recevoir.' },
            { q: 'Le turnover et l’absentéisme sont des indicateurs de performance…', choices: ['sociale', 'commerciale', 'financière', 'environnementale'], answer: 0, explain: 'Ils mesurent le climat et la performance sociale.' },
            { q: 'Clients, salariés et actionnaires sont des…', choices: ['parties prenantes', 'concurrents', 'fournisseurs uniquement', 'indicateurs'], answer: 0, explain: 'Ce sont des parties prenantes aux attentes variées.' },
          ],
        },
        {
          id: 'p1-sgn-t3-tri',
          type: 'tri',
          title: 'Tri — Type de performance',
          icon: '🗂️',
          instruction: 'Classe chaque indicateur selon la performance qu’il mesure.',
          categories: [
            { id: 'com', label: 'Commerciale' },
            { id: 'fin', label: 'Financière' },
            { id: 'soc', label: 'Sociale' },
          ],
          items: [
            { text: 'Part de marché', cat: 'com' },
            { text: 'Rentabilité', cat: 'fin' },
            { text: 'Taux d’absentéisme', cat: 'soc' },
            { text: 'Satisfaction client', cat: 'com' },
            { text: 'Résultat net', cat: 'fin' },
            { text: 'Turnover', cat: 'soc' },
          ],
        },
        {
          id: 'p1-sgn-t3-flash',
          type: 'flashcard',
          title: 'Flashcards — Valeur & performance',
          icon: '🃏',
          cards: [
            { front: 'Valeur perçue', back: 'Ce que le client estime recevoir (qualité, image).' },
            { front: 'Valeur marchande', back: 'Prix d’échange sur le marché.' },
            { front: 'Chaîne de valeur', back: 'Enchaînement des activités qui créent de la valeur.' },
            { front: 'Parties prenantes', back: 'Acteurs concernés par l’organisation (clients, salariés, actionnaires…).' },
          ],
        },
      ],
    },
    {
      id: 'p1-sgn-t4',
      name: 'Thème 4 — Temps et risque',
      short: 'Temps & risque',
      keywords: 'décision temps risque stratégie planification incertitude prévision',
      intro:
        'Gérer une organisation, c’est **décider** en tenant compte du **temps** (court/long terme) et du **risque** (l’avenir est incertain). Ce thème relie décision, anticipation et prise de risque.',
      cours: [
        {
          h: 'Décider dans le temps',
          blocks: [
            { t: 'p', c: 'Toute organisation prend des **décisions**, du quotidien (opérationnelles) au long terme (**stratégiques**). Décider, c’est faire un **choix** entre plusieurs options, en s’appuyant sur de l’information.' },
            { t: 'p', c: 'Le **temps** est une ressource : il faut **planifier** les activités (prévisions, plannings) et arbitrer entre le **court terme** (réactivité) et le **long terme** (investissement, stratégie).' },
          ],
        },
        {
          h: 'Le risque, compagnon de la décision',
          blocks: [
            { t: 'p', c: 'Comme l’avenir est **incertain**, toute décision comporte un **risque** : un projet peut échouer, un marché se retourner. On cherche à **identifier**, **évaluer** puis **limiter** les risques (assurance, diversification, prévention).' },
            { t: 'tip', c: 'Pas de création de valeur sans une part de risque : bien géré, le risque est le moteur de l’initiative ; mal maîtrisé, il met l’organisation en danger.' },
          ],
        },
      ],
      essentiel: [
        'Décider = faire un **choix** entre options, du niveau **opérationnel** au **stratégique**.',
        'Le **temps** se gère : planification, arbitrage **court terme / long terme**.',
        'Toute décision comporte un **risque** (avenir incertain) : à identifier, évaluer et limiter.',
      ],
      resources: [
        { kind: 'video', label: 'Temps et risque (1re STMG)', note: 'Vidéos — recherche YouTube', url: yt('sciences de gestion temps et risque décision première STMG') },
      ],
      games: [
        {
          id: 'p1-sgn-t4-qcm',
          type: 'qcm',
          title: 'QCM — Temps et risque',
          icon: '❓',
          questions: [
            { q: 'Une décision qui engage l’organisation sur le long terme est dite…', choices: ['stratégique', 'opérationnelle', 'immédiate', 'réversible par nature'], answer: 0, explain: 'Les décisions stratégiques engagent l’avenir ; les opérationnelles sont quotidiennes.' },
            { q: 'Prévoir et organiser les activités dans le temps, c’est…', choices: ['planifier', 'produire', 'vendre', 'recruter'], answer: 0, explain: 'La planification anticipe et organise les activités.' },
            { q: 'Le risque découle principalement…', choices: ['de l’incertitude de l’avenir', 'du montant du capital', 'du nombre de salariés', 'de la couleur du logo'], answer: 0, explain: 'L’avenir étant incertain, toute décision comporte un risque.' },
            { q: 'Face à un risque, une organisation peut…', choices: ['l’identifier, l’évaluer et le limiter', 'l’ignorer totalement', 'le transformer en donnée', 'le confier au client'], answer: 0, explain: 'On identifie, évalue puis limite le risque (prévention, assurance, diversification).' },
          ],
        },
        {
          id: 'p1-sgn-t4-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'Décider, c’est choisir entre plusieurs options.', answer: true, explain: 'Vrai, à partir d’informations disponibles.' },
            { statement: 'Une décision stratégique concerne le court terme et le quotidien.', answer: false, explain: 'Faux : c’est la décision opérationnelle ; la stratégique engage le long terme.' },
            { statement: 'On peut totalement supprimer le risque d’une décision.', answer: false, explain: 'Faux : on peut le limiter, pas le supprimer (avenir incertain).' },
          ],
        },
        {
          id: 'p1-sgn-t4-flash',
          type: 'flashcard',
          title: 'Flashcards — Temps & risque',
          icon: '🃏',
          cards: [
            { front: 'Décision stratégique', back: 'Choix qui engage l’organisation sur le long terme.' },
            { front: 'Décision opérationnelle', back: 'Choix courant, de court terme.' },
            { front: 'Planification', back: 'Prévoir et organiser les activités dans le temps.' },
            { front: 'Risque', back: 'Conséquence possible de l’incertitude de l’avenir.' },
          ],
        },
      ],
    },
  ],
}

// ===========================================================================
// MANAGEMENT (Première)
// ===========================================================================
const managementP = {
  id: 'p1-management',
  name: 'Management',
  short: 'Management',
  icon: '🏢',
  color: '#4f46e5',
  niveau: 'premiere',
  tagline: 'Découvrir les organisations et la démarche stratégique.',
  chapters: [
    {
      id: 'p1-mgmt-t1',
      name: 'Thème 1 — À la rencontre du management des organisations',
      short: 'Découvrir le management',
      keywords: 'organisation management manager décision Simon programmée non programmée ressources',
      intro:
        'Qu’est-ce qu’une **organisation** et à quoi sert le **management** ? Ce premier thème pose les bases : réunir des ressources et coordonner des acteurs pour atteindre un **but commun**.',
      cours: [
        {
          h: 'Organisation et management',
          blocks: [
            { t: 'p', c: 'Une **organisation** est un ensemble de personnes qui mettent en commun des **ressources** (humaines, financières, matérielles) et coordonnent leurs actions pour atteindre un **but commun**.' },
            { t: 'p', c: 'Le **management** est l’ensemble des techniques pour **conduire** l’organisation : fixer des objectifs, organiser, animer les équipes et contrôler les résultats. Le **manager** décide, coordonne et mobilise.' },
          ],
        },
        {
          h: 'Décider, cœur du management',
          blocks: [
            { t: 'p', c: 'Selon **H. Simon**, on distingue les **décisions programmées** (répétitives, encadrées par des procédures) des **décisions non programmées** (nouvelles, complexes, engageant l’avenir).' },
            { t: 'tip', c: 'Le manager ne dispose jamais d’une information parfaite : il décide en **rationalité limitée** (Simon).' },
          ],
        },
      ],
      essentiel: [
        'Une **organisation** = des ressources + des acteurs coordonnés vers un **but commun**.',
        'Le **management** conduit l’organisation : fixer, organiser, animer, contrôler.',
        'Décisions **programmées** (procédures) vs **non programmées** (nouvelles) — rationalité limitée (Simon).',
      ],
      resources: [
        { kind: 'video', label: 'Le management des organisations (1re)', note: 'Vidéos — recherche YouTube', url: yt('management des organisations première STMG définition rôle') },
      ],
      games: [
        {
          id: 'p1-mgmt-t1-qcm',
          type: 'qcm',
          title: 'QCM — Découvrir le management',
          icon: '❓',
          questions: [
            { q: 'Une organisation réunit des acteurs et des ressources pour…', choices: ['atteindre un but commun', 'payer moins d’impôts', 'multiplier les conflits', 'éviter toute décision'], answer: 0, explain: 'L’organisation coordonne des moyens vers un but commun.' },
            { q: 'Le management consiste notamment à…', choices: ['fixer des objectifs et contrôler les résultats', 'produire soi-même toutes les pièces', 'supprimer les objectifs', 'ignorer les équipes'], answer: 0, explain: 'Le management fixe, organise, anime et contrôle.' },
            { q: 'Une décision « programmée » est…', choices: ['répétitive et encadrée par une procédure', 'toujours stratégique', 'unique et imprévisible', 'prise sans information'], answer: 0, explain: 'Les décisions programmées sont courantes et procédurées (Simon).' },
            { q: 'La « rationalité limitée » (Simon) signifie que le décideur…', choices: ['ne dispose pas d’une information parfaite', 'connaît l’avenir avec certitude', 'ne décide jamais', 'agit sans objectif'], answer: 0, explain: 'On décide avec une information incomplète et un temps limité.' },
          ],
        },
        {
          id: 'p1-mgmt-t1-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'Le manager coordonne des acteurs et mobilise des ressources.', answer: true, explain: 'Vrai : c’est le cœur du management.' },
            { statement: 'Une décision non programmée est répétitive et routinière.', answer: false, explain: 'Faux : c’est la décision programmée ; la non programmée est nouvelle et complexe.' },
            { statement: 'Selon Simon, le décideur a toujours une information parfaite.', answer: false, explain: 'Faux : il décide en rationalité limitée.' },
          ],
        },
        {
          id: 'p1-mgmt-t1-flash',
          type: 'flashcard',
          title: 'Flashcards — Management',
          icon: '🃏',
          cards: [
            { front: 'Organisation', back: 'Acteurs + ressources coordonnés vers un but commun.' },
            { front: 'Management', back: 'Conduire l’organisation : fixer, organiser, animer, contrôler.' },
            { front: 'Décision programmée', back: 'Répétitive, encadrée par une procédure.' },
            { front: 'Rationalité limitée', back: 'On décide avec une information incomplète (Simon).' },
          ],
        },
      ],
    },
    {
      id: 'p1-mgmt-t2',
      name: 'Thème 2 — Les critères de différenciation des organisations',
      short: 'Types d’organisations',
      keywords: 'entreprise organisation publique OSBL finalité taille ressources statut champ d’action',
      intro:
        'Toutes les organisations ne se ressemblent pas. Ce thème apprend à les **caractériser** selon plusieurs critères : leur type, leur **finalité**, leur taille, leurs ressources.',
      cours: [
        {
          h: 'Trois grands types d’organisations',
          blocks: [
            { t: 'table', head: ['Type', 'Finalité principale', 'Exemples'], rows: [
              ['Entreprise privée', 'Lucrative (profit)', 'PME, multinationale'],
              ['Organisation publique', 'Intérêt général (service public)', 'Mairie, hôpital'],
              ['Organisation à but non lucratif (OSBL)', 'Cause, entraide', 'Association, ONG'],
            ] },
          ],
        },
        {
          h: 'Caractériser une organisation',
          blocks: [
            { t: 'p', c: 'Pour caractériser une organisation, on l’analyse selon plusieurs **critères** :' },
            { t: 'list', c: [
              '**Finalité** (lucrative, sociale, service public),',
              '**Taille** (effectif, chiffre d’affaires),',
              '**Ressources** (humaines, financières, matérielles, immatérielles),',
              '**Statut juridique**, **champ d’action** (local, national, mondial) et **nationalité**.',
            ] },
          ],
        },
      ],
      essentiel: [
        'Trois types : **entreprise privée** (lucrative), **organisation publique** (intérêt général), **OSBL** (association/ONG).',
        'Critères de caractérisation : **finalité**, taille, ressources, statut, champ d’action, nationalité.',
      ],
      resources: [
        { kind: 'video', label: 'Les types d’organisations', note: 'Vidéos — recherche YouTube', url: yt('types organisations finalité entreprise publique association première STMG') },
      ],
      games: [
        {
          id: 'p1-mgmt-t2-qcm',
          type: 'qcm',
          title: 'QCM — Types d’organisations',
          icon: '❓',
          questions: [
            { q: 'La finalité principale d’une entreprise privée est…', choices: ['lucrative (réaliser un profit)', 'l’intérêt général', 'l’entraide bénévole', 'la production de lois'], answer: 0, explain: 'L’entreprise privée vise le profit ; l’organisation publique l’intérêt général.' },
            { q: 'Une association loi 1901 est une organisation…', choices: ['à but non lucratif', 'publique', 'privée lucrative', 'internationale par nature'], answer: 0, explain: 'Les associations et ONG sont des OSBL.' },
            { q: 'La finalité d’une mairie est…', choices: ['l’intérêt général (service public)', 'le profit', 'la spéculation', 'la publicité'], answer: 0, explain: 'Les organisations publiques poursuivent l’intérêt général.' },
            { q: 'Le « champ d’action » d’une organisation désigne…', choices: ['son étendue géographique (local, national, mondial)', 'son résultat net', 'son logo', 'son ancienneté'], answer: 0, explain: 'C’est le territoire sur lequel elle agit.' },
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
            { id: 'osbl', label: 'OSBL (association/ONG)' },
          ],
          items: [
            { text: 'Une start-up', cat: 'priv' },
            { text: 'Un hôpital public', cat: 'pub' },
            { text: 'Une association sportive', cat: 'osbl' },
            { text: 'Une multinationale', cat: 'priv' },
            { text: 'Une ONG humanitaire', cat: 'osbl' },
            { text: 'Une mairie', cat: 'pub' },
          ],
        },
        {
          id: 'p1-mgmt-t2-flash',
          type: 'flashcard',
          title: 'Flashcards — Organisations',
          icon: '🃏',
          cards: [
            { front: 'Entreprise privée', back: 'Finalité lucrative (profit).' },
            { front: 'Organisation publique', back: 'Finalité d’intérêt général (service public).' },
            { front: 'OSBL', back: 'Organisation à but non lucratif (association, ONG).' },
            { front: 'Finalité', back: 'La raison d’être de l’organisation.' },
          ],
        },
      ],
    },
    {
      id: 'p1-mgmt-t3',
      name: 'Thème 3 — Fixer des objectifs et contrôler les résultats',
      short: 'Objectifs & contrôle',
      keywords: 'management stratégique opérationnel objectifs SMART indicateur tableau de bord contrôle',
      intro:
        'Manager, c’est **fixer un cap** puis **vérifier** qu’on l’atteint. Ce thème distingue les niveaux de management et présente les outils de pilotage.',
      cours: [
        {
          h: 'Stratégique et opérationnel',
          blocks: [
            { t: 'p', c: 'Le **management stratégique** (direction, long terme) fixe les grandes orientations. Le **management opérationnel** (encadrement, court terme) met en œuvre au quotidien.' },
            { t: 'p', c: 'Les **objectifs** doivent être clairs. On les veut souvent **SMART** : Spécifiques, Mesurables, Atteignables, Réalistes, Temporellement définis.' },
          ],
        },
        {
          h: 'Contrôler les résultats',
          blocks: [
            { t: 'p', c: 'Pour vérifier l’atteinte des objectifs, on utilise des **indicateurs** réunis dans un **tableau de bord**. Le **contrôle** compare les résultats réels aux objectifs, puis on met en place des **actions correctrices**.' },
            { t: 'tip', c: 'Boucle du pilotage : **fixer un objectif → agir → mesurer → corriger**.' },
          ],
        },
      ],
      essentiel: [
        'Management **stratégique** (long terme, direction) vs **opérationnel** (court terme, encadrement).',
        'Objectifs **SMART** ; suivi par des **indicateurs** dans un **tableau de bord**.',
        'Le **contrôle** compare résultats et objectifs → actions correctrices.',
      ],
      resources: [
        { kind: 'video', label: 'Objectifs et contrôle de gestion', note: 'Vidéos — recherche YouTube', url: yt('management objectifs SMART indicateurs tableau de bord première STMG') },
      ],
      games: [
        {
          id: 'p1-mgmt-t3-qcm',
          type: 'qcm',
          title: 'QCM — Objectifs & contrôle',
          icon: '❓',
          questions: [
            { q: 'Les grandes orientations de long terme relèvent du management…', choices: ['stratégique', 'opérationnel', 'quotidien', 'comptable'], answer: 0, explain: 'Le stratégique fixe le cap ; l’opérationnel exécute.' },
            { q: 'Un objectif « SMART » est notamment…', choices: ['Mesurable et défini dans le temps', 'flou et sans échéance', 'secret', 'impossible à atteindre'], answer: 0, explain: 'SMART = Spécifique, Mesurable, Atteignable, Réaliste, Temporel.' },
            { q: 'Un tableau de bord réunit…', choices: ['des indicateurs de suivi', 'des factures fournisseurs', 'des contrats de travail', 'des publicités'], answer: 0, explain: 'Le tableau de bord regroupe les indicateurs clés.' },
            { q: 'Contrôler, c’est…', choices: ['comparer les résultats aux objectifs', 'fixer le logo', 'recruter au hasard', 'ignorer les écarts'], answer: 0, explain: 'Le contrôle mesure les écarts pour corriger.' },
          ],
        },
        {
          id: 'p1-mgmt-t3-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'Le management opérationnel agit sur le court terme.', answer: true, explain: 'Vrai : mise en œuvre au quotidien.' },
            { statement: 'Un objectif SMART peut être flou et sans échéance.', answer: false, explain: 'Faux : il doit être spécifique, mesurable et défini dans le temps.' },
            { statement: 'Le contrôle sert à comparer les résultats aux objectifs.', answer: true, explain: 'Vrai, pour déclencher des actions correctrices.' },
          ],
        },
        {
          id: 'p1-mgmt-t3-flash',
          type: 'flashcard',
          title: 'Flashcards — Pilotage',
          icon: '🃏',
          cards: [
            { front: 'Management stratégique', back: 'Long terme, grandes orientations (direction).' },
            { front: 'Management opérationnel', back: 'Court terme, mise en œuvre (encadrement).' },
            { front: 'Objectif SMART', back: 'Spécifique, Mesurable, Atteignable, Réaliste, Temporel.' },
            { front: 'Tableau de bord', back: 'Ensemble d’indicateurs pour piloter.' },
          ],
        },
      ],
    },
    {
      id: 'p1-mgmt-t4',
      name: 'Thème 4 — Le processus et le diagnostic stratégiques',
      short: 'Diagnostic stratégique',
      keywords: 'démarche stratégique diagnostic interne externe SWOT avantage concurrentiel',
      intro:
        'Avant de choisir une stratégie, l’organisation réalise un **diagnostic**. Ce thème présente la démarche stratégique et l’outil incontournable : le **SWOT**.',
      cours: [
        {
          h: 'La démarche stratégique',
          blocks: [
            { t: 'p', c: 'La **démarche stratégique** consiste à : réaliser un **diagnostic**, fixer des **objectifs**, choisir une **stratégie**, puis la mettre en œuvre et la contrôler.' },
            { t: 'p', c: 'Le **diagnostic** est double : **interne** (forces et faiblesses : ressources, compétences) et **externe** (opportunités et menaces : marché, concurrence, environnement).' },
          ],
        },
        {
          h: 'Le SWOT et l’avantage concurrentiel',
          blocks: [
            { t: 'figure', name: 'swot' },
            { t: 'p', c: 'Le **SWOT** synthétise ce diagnostic. L’objectif est de dégager un **avantage concurrentiel** : ce qui rend l’organisation meilleure ou différente de ses concurrents (coût, qualité, innovation, image).' },
            { t: 'warning', c: 'Ne confonds pas : forces/faiblesses = **interne** ; opportunités/menaces = **externe**.' },
          ],
        },
      ],
      essentiel: [
        'Démarche : **diagnostic → objectifs → choix stratégique → mise en œuvre → contrôle**.',
        'Diagnostic **interne** (forces/faiblesses) et **externe** (opportunités/menaces) = **SWOT**.',
        'But : dégager un **avantage concurrentiel** (coût, qualité, innovation, image).',
      ],
      resources: [
        { kind: 'video', label: 'Diagnostic stratégique et SWOT', note: 'Vidéos — recherche YouTube', url: yt('diagnostic stratégique interne externe SWOT première STMG management') },
      ],
      games: [
        {
          id: 'p1-mgmt-t4-qcm',
          type: 'qcm',
          title: 'QCM — Diagnostic stratégique',
          icon: '❓',
          questions: [
            { q: 'Le diagnostic interne analyse…', choices: ['les forces et faiblesses de l’organisation', 'les opportunités du marché', 'la météo', 'la concurrence uniquement'], answer: 0, explain: 'Interne = forces/faiblesses (ressources, compétences).' },
            { q: 'Les opportunités et menaces relèvent du diagnostic…', choices: ['externe', 'interne', 'comptable', 'social'], answer: 0, explain: 'Externe = opportunités/menaces (marché, concurrence).' },
            { q: 'Le SWOT sert à…', choices: ['synthétiser le diagnostic stratégique', 'calculer la TVA', 'rédiger un contrat', 'fixer les salaires'], answer: 0, explain: 'Le SWOT croise diagnostic interne et externe.' },
            { q: 'Un avantage concurrentiel, c’est…', choices: ['ce qui rend l’organisation meilleure/différente des concurrents', 'un impôt', 'un salarié', 'une dette'], answer: 0, explain: 'Coût, qualité, innovation, image… peuvent constituer un avantage concurrentiel.' },
          ],
        },
        {
          id: 'p1-mgmt-t4-tri',
          type: 'tri',
          title: 'Tri — SWOT',
          icon: '🗂️',
          instruction: 'Classe chaque élément dans la bonne case du SWOT.',
          categories: [
            { id: 'f', label: 'Forces' },
            { id: 'w', label: 'Faiblesses' },
            { id: 'o', label: 'Opportunités' },
            { id: 'm', label: 'Menaces' },
          ],
          items: [
            { text: 'Un savoir-faire reconnu', cat: 'f' },
            { text: 'Un endettement élevé', cat: 'w' },
            { text: 'Un marché en croissance', cat: 'o' },
            { text: 'L’arrivée d’un concurrent puissant', cat: 'm' },
            { text: 'Une équipe démotivée', cat: 'w' },
            { text: 'Une nouvelle aide publique', cat: 'o' },
          ],
        },
        {
          id: 'p1-mgmt-t4-flash',
          type: 'flashcard',
          title: 'Flashcards — Stratégie',
          icon: '🃏',
          cards: [
            { front: 'Diagnostic interne', back: 'Forces et faiblesses (ressources, compétences).' },
            { front: 'Diagnostic externe', back: 'Opportunités et menaces (marché, concurrence).' },
            { front: 'SWOT', back: 'Synthèse du diagnostic interne + externe.' },
            { front: 'Avantage concurrentiel', back: 'Ce qui distingue durablement des concurrents.' },
          ],
        },
      ],
    },
  ],
}

// ===========================================================================
// DROIT (Première)
// ===========================================================================
const droitP = {
  id: 'p1-droit',
  name: 'Droit',
  short: 'Droit',
  icon: '⚖️',
  color: '#d97706',
  niveau: 'premiere',
  tagline: 'Les bases : la règle de droit, le litige, les personnes.',
  chapters: [
    {
      id: 'p1-droit-t1',
      name: 'Thème 1 — Qu’est-ce que le droit ?',
      short: 'Qu’est-ce que le droit ?',
      keywords: 'règle de droit générale obligatoire sanctionnée sources hiérarchie des normes droit objectif subjectif privé public',
      intro:
        'Le **droit** organise la vie en société. Ce thème définit la **règle de droit**, ses caractères, ses **sources** et les grandes distinctions du droit.',
      cours: [
        {
          h: 'La règle de droit et ses caractères',
          blocks: [
            { t: 'p', c: 'La **règle de droit** est une règle de conduite dans une société. Elle a trois caractères : elle est **générale** (s’applique à tous), **obligatoire** (imposée) et **sanctionnée par l’État** (son non-respect entraîne une sanction).' },
            { t: 'p', c: 'On distingue le **droit objectif** (l’ensemble des règles) des **droits subjectifs** (les prérogatives reconnues à une personne, ex. le droit de propriété).' },
          ],
        },
        {
          h: 'Les sources du droit',
          blocks: [
            { t: 'p', c: 'Les règles proviennent de plusieurs **sources**, hiérarchisées (**hiérarchie des normes**) :' },
            { t: 'table', head: ['Niveau', 'Source'], rows: [
              ['1', 'Bloc constitutionnel (Constitution)'],
              ['2', 'Traités et droit de l’Union européenne'],
              ['3', 'La loi (votée par le Parlement)'],
              ['4', 'Les règlements (décrets, arrêtés)'],
            ] },
            { t: 'p', c: 'On oppose aussi le **droit privé** (rapports entre particuliers, ex. droit civil) au **droit public** (rapports avec l’État et les administrations).' },
          ],
        },
      ],
      essentiel: [
        'La règle de droit est **générale**, **obligatoire** et **sanctionnée par l’État**.',
        '**Droit objectif** (les règles) vs **droits subjectifs** (les prérogatives d’une personne).',
        'Sources hiérarchisées : Constitution > traités/UE > lois > règlements. Droit **privé** vs **public**.',
      ],
      resources: [
        { kind: 'video', label: 'Qu’est-ce que le droit ? (1re STMG)', note: 'Vidéos — recherche YouTube', url: yt('qu est ce que le droit règle de droit sources première STMG') },
      ],
      games: [
        {
          id: 'p1-droit-t1-qcm',
          type: 'qcm',
          title: 'QCM — La règle de droit',
          icon: '❓',
          questions: [
            { q: 'Les trois caractères de la règle de droit sont : générale, obligatoire et…', choices: ['sanctionnée par l’État', 'facultative', 'secrète', 'gratuite'], answer: 0, explain: 'La règle de droit est générale, obligatoire et sanctionnée par l’État.' },
            { q: 'L’ensemble des règles de droit constitue le droit…', choices: ['objectif', 'subjectif', 'pénal uniquement', 'international'], answer: 0, explain: 'Le droit objectif = l’ensemble des règles ; les droits subjectifs = les prérogatives.' },
            { q: 'Au sommet de la hiérarchie des normes, on trouve…', choices: ['la Constitution', 'un arrêté municipal', 'un contrat', 'un règlement intérieur'], answer: 0, explain: 'Le bloc constitutionnel prime sur les autres normes.' },
            { q: 'Le droit qui régit les rapports entre particuliers est le droit…', choices: ['privé', 'public', 'administratif', 'constitutionnel'], answer: 0, explain: 'Le droit privé régit les rapports entre particuliers ; le public, les rapports avec l’État.' },
          ],
        },
        {
          id: 'p1-droit-t1-ordre',
          type: 'ordre',
          title: 'Remise en ordre — Hiérarchie des normes',
          icon: '🔢',
          instruction: 'Classe les sources de la plus élevée à la plus basse.',
          steps: ['Constitution', 'Traités et droit de l’UE', 'Lois', 'Règlements (décrets, arrêtés)'],
          explain: 'La hiérarchie des normes : Constitution > traités/UE > lois > règlements.',
        },
        {
          id: 'p1-droit-t1-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'La règle de droit est facultative.', answer: false, explain: 'Faux : elle est obligatoire.' },
            { statement: 'Le droit de propriété est un droit subjectif.', answer: true, explain: 'Vrai : c’est une prérogative reconnue à une personne.' },
            { statement: 'Une loi est supérieure à la Constitution.', answer: false, explain: 'Faux : la Constitution est au sommet de la hiérarchie des normes.' },
          ],
        },
        {
          id: 'p1-droit-t1-flash',
          type: 'flashcard',
          title: 'Flashcards — La règle de droit',
          icon: '🃏',
          cards: [
            { front: 'Règle de droit', back: 'Règle générale, obligatoire et sanctionnée par l’État.' },
            { front: 'Droit objectif', back: 'L’ensemble des règles de droit.' },
            { front: 'Droits subjectifs', back: 'Les prérogatives reconnues à une personne.' },
            { front: 'Hiérarchie des normes', back: 'Constitution > traités/UE > lois > règlements.' },
          ],
        },
      ],
    },
    {
      id: 'p1-droit-t2',
      name: 'Thème 2 — Comment le droit règle-t-il un litige ?',
      short: 'Le litige',
      keywords: 'litige preuve charge modes de preuve résolution amiable juridictionnel organisation judiciaire appel cassation',
      intro:
        'Quand un désaccord dégénère, il devient un **litige**. Ce thème explique comment le prouver et comment le régler, à l’amiable ou devant un juge.',
      cours: [
        {
          h: 'Le litige et la preuve',
          blocks: [
            { t: 'p', c: 'Un **litige** est un désaccord juridique entre deux personnes qui font valoir des **prétentions** opposées. Pour l’emporter, il faut **prouver** ce que l’on avance.' },
            { t: 'p', c: 'La **charge de la preuve** pèse en principe sur celui qui réclame (le demandeur). Les **modes de preuve** sont notamment l’écrit, le témoignage, l’aveu, l’indice.' },
          ],
        },
        {
          h: 'Résoudre le litige',
          blocks: [
            { t: 'list', c: [
              '**Modes amiables** : négociation, **conciliation**, **médiation**, arbitrage (sans passer par un jugement).',
              '**Mode juridictionnel** : saisir un **tribunal** pour obtenir un jugement.',
            ] },
            { t: 'p', c: 'La justice est organisée en deux **ordres** : **judiciaire** (litiges entre particuliers et infractions) et **administratif** (litiges avec l’administration). Après un jugement de 1er degré, on peut faire **appel**, puis se pourvoir en **cassation**.' },
          ],
        },
      ],
      essentiel: [
        '**Litige** = désaccord juridique aux prétentions opposées ; il faut **prouver**.',
        '**Charge de la preuve** sur le demandeur ; preuves : écrit, témoignage, aveu, indice.',
        'Résolution **amiable** (conciliation, médiation) ou **juridictionnelle** ; **1er degré → appel → cassation**.',
      ],
      resources: [
        { kind: 'video', label: 'Le litige et sa résolution', note: 'Vidéos — recherche YouTube', url: yt('litige preuve résolution amiable juridictionnel première STMG droit') },
      ],
      games: [
        {
          id: 'p1-droit-t2-qcm',
          type: 'qcm',
          title: 'QCM — Le litige',
          icon: '❓',
          questions: [
            { q: 'Un litige est…', choices: ['un désaccord juridique aux prétentions opposées', 'un contrat signé', 'une loi votée', 'un impôt'], answer: 0, explain: 'Le litige oppose deux personnes qui font valoir des prétentions contraires.' },
            { q: 'En principe, la charge de la preuve pèse sur…', choices: ['celui qui réclame (le demandeur)', 'le juge', 'l’avocat adverse', 'le témoin'], answer: 0, explain: 'C’est au demandeur de prouver ce qu’il avance.' },
            { q: 'La médiation est un mode de résolution…', choices: ['amiable', 'juridictionnel', 'pénal', 'constitutionnel'], answer: 0, explain: 'Médiation et conciliation sont des modes amiables (sans jugement).' },
            { q: 'Après un jugement de premier degré, on peut…', choices: ['faire appel', 'voter une loi', 'signer un contrat de travail', 'créer une société'], answer: 0, explain: 'On peut faire appel, puis éventuellement se pourvoir en cassation.' },
          ],
        },
        {
          id: 'p1-droit-t2-tri',
          type: 'tri',
          title: 'Tri — Amiable ou juridictionnel ?',
          icon: '🗂️',
          instruction: 'Classe chaque mode de résolution du litige.',
          categories: [
            { id: 'am', label: 'Mode amiable' },
            { id: 'jur', label: 'Mode juridictionnel' },
          ],
          items: [
            { text: 'La médiation', cat: 'am' },
            { text: 'La conciliation', cat: 'am' },
            { text: 'Saisir un tribunal', cat: 'jur' },
            { text: 'Obtenir un jugement', cat: 'jur' },
            { text: 'La négociation directe', cat: 'am' },
          ],
        },
        {
          id: 'p1-droit-t2-flash',
          type: 'flashcard',
          title: 'Flashcards — Le litige',
          icon: '🃏',
          cards: [
            { front: 'Litige', back: 'Désaccord juridique aux prétentions opposées.' },
            { front: 'Charge de la preuve', back: 'Pèse en principe sur celui qui réclame (le demandeur).' },
            { front: 'Conciliation / médiation', back: 'Modes amiables de résolution (sans jugement).' },
            { front: 'Appel / cassation', back: 'Voies de recours après un jugement de 1er degré.' },
          ],
        },
      ],
    },
    {
      id: 'p1-droit-t3',
      name: 'Thème 3 — Qui peut faire valoir ses droits ?',
      short: 'Les personnes',
      keywords: 'personnalité juridique personne physique morale capacité patrimoine biens',
      intro:
        'Pour avoir des droits, il faut être un **sujet de droit**. Ce thème présente la **personnalité juridique** et distingue les personnes physiques des personnes morales.',
      cours: [
        {
          h: 'La personnalité juridique',
          blocks: [
            { t: 'p', c: 'La **personnalité juridique** est l’aptitude à être **titulaire de droits et d’obligations**. Elle fait de l’être un **sujet de droit**.' },
            { t: 'table', head: ['Personne physique', 'Personne morale'], rows: [
              ['Un être humain', 'Un groupement (société, association…)'],
              ['De la naissance à la mort', 'De l’immatriculation/déclaration à la dissolution'],
            ] },
          ],
        },
        {
          h: 'Capacité, patrimoine et biens',
          blocks: [
            { t: 'p', c: 'La **capacité juridique** est l’aptitude à exercer soi-même ses droits. Certaines personnes ont une capacité **limitée** (mineurs, majeurs protégés).' },
            { t: 'p', c: 'Chaque personne possède un **patrimoine** : l’ensemble de ses **biens** (actif) et de ses **dettes** (passif). Les biens peuvent être **meubles** (déplaçables) ou **immeubles** (terrains, bâtiments).' },
          ],
        },
      ],
      essentiel: [
        '**Personnalité juridique** = aptitude à être titulaire de droits et d’obligations (sujet de droit).',
        '**Personne physique** (être humain) vs **personne morale** (groupement).',
        '**Capacité** = exercer ses droits (limitée pour mineurs/majeurs protégés) ; **patrimoine** = biens + dettes.',
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
            { q: 'Une société est une personne…', choices: ['morale', 'physique', 'publique par nature', 'sans patrimoine'], answer: 0, explain: 'La société est une personne morale ; l’être humain une personne physique.' },
            { q: 'La capacité juridique est l’aptitude à…', choices: ['exercer soi-même ses droits', 'créer une loi', 'échapper à l’impôt', 'devenir juge'], answer: 0, explain: 'Les mineurs et majeurs protégés ont une capacité limitée.' },
            { q: 'Le patrimoine d’une personne comprend…', choices: ['ses biens (actif) et ses dettes (passif)', 'uniquement ses revenus', 'seulement ses dettes', 'ses opinions'], answer: 0, explain: 'Patrimoine = actif (biens) + passif (dettes).' },
          ],
        },
        {
          id: 'p1-droit-t3-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'Une association peut avoir la personnalité juridique.', answer: true, explain: 'Vrai : c’est une personne morale.' },
            { statement: 'Un mineur a une pleine capacité juridique d’exercice.', answer: false, explain: 'Faux : sa capacité est limitée (il est représenté).' },
            { statement: 'Un immeuble est un bien qui ne peut pas être déplacé.', answer: true, explain: 'Vrai : les immeubles (terrains, bâtiments) s’opposent aux meubles.' },
          ],
        },
        {
          id: 'p1-droit-t3-flash',
          type: 'flashcard',
          title: 'Flashcards — Les personnes',
          icon: '🃏',
          cards: [
            { front: 'Personnalité juridique', back: 'Aptitude à être titulaire de droits et d’obligations.' },
            { front: 'Personne physique / morale', back: 'Un être humain / un groupement (société, association).' },
            { front: 'Capacité juridique', back: 'Aptitude à exercer soi-même ses droits.' },
            { front: 'Patrimoine', back: 'Ensemble des biens (actif) et dettes (passif) d’une personne.' },
          ],
        },
      ],
    },
    {
      id: 'p1-droit-t4',
      name: 'Thème 4 — Quels sont les droits reconnus aux personnes ?',
      short: 'Les droits des personnes',
      keywords: 'droits patrimoniaux extrapatrimoniaux propriété droits de la personnalité vie privée image',
      intro:
        'Les personnes disposent de **droits**. Ce thème les classe : ceux qui ont une valeur économique (**patrimoniaux**) et ceux qui protègent la personne elle-même (**extrapatrimoniaux**).',
      cours: [
        {
          h: 'Droits patrimoniaux et extrapatrimoniaux',
          blocks: [
            { t: 'table', head: ['Droits patrimoniaux', 'Droits extrapatrimoniaux'], rows: [
              ['Ont une valeur en argent', 'N’ont pas de valeur marchande'],
              ['Cessibles, transmissibles', 'Incessibles, intransmissibles'],
              ['Ex. droit de propriété, créances', 'Ex. droit à la vie privée, à l’image'],
            ] },
          ],
        },
        {
          h: 'Le droit de propriété et les droits de la personnalité',
          blocks: [
            { t: 'p', c: 'Le **droit de propriété** est le droit d’**user**, de **jouir** et de **disposer** d’un bien de la manière la plus absolue (dans le respect de la loi).' },
            { t: 'p', c: 'Les **droits de la personnalité** protègent la personne : droit au respect de la **vie privée**, droit à l’**image**, droit au nom, à l’honneur. Ils sont **extrapatrimoniaux**.' },
          ],
        },
      ],
      essentiel: [
        'Droits **patrimoniaux** (valeur en argent, cessibles) vs **extrapatrimoniaux** (protègent la personne, incessibles).',
        '**Droit de propriété** = user, jouir, disposer d’un bien.',
        '**Droits de la personnalité** (vie privée, image, nom) = extrapatrimoniaux.',
      ],
      resources: [
        { kind: 'video', label: 'Les droits des personnes', note: 'Vidéos — recherche YouTube', url: yt('droits patrimoniaux extrapatrimoniaux propriété vie privée première STMG') },
      ],
      games: [
        {
          id: 'p1-droit-t4-qcm',
          type: 'qcm',
          title: 'QCM — Les droits des personnes',
          icon: '❓',
          questions: [
            { q: 'Un droit qui a une valeur en argent et se transmet est…', choices: ['patrimonial', 'extrapatrimonial', 'pénal', 'constitutionnel'], answer: 0, explain: 'Les droits patrimoniaux ont une valeur marchande et sont cessibles.' },
            { q: 'Le droit à l’image est un droit…', choices: ['extrapatrimonial', 'patrimonial', 'réel', 'de créance'], answer: 0, explain: 'Les droits de la personnalité sont extrapatrimoniaux.' },
            { q: 'Le droit de propriété permet d’…', choices: ['user, jouir et disposer d’un bien', 'échapper à l’impôt', 'juger autrui', 'créer une loi'], answer: 0, explain: 'User, jouir, disposer : les trois attributs du droit de propriété.' },
            { q: 'Les droits extrapatrimoniaux sont…', choices: ['incessibles et sans valeur marchande', 'toujours vendables', 'des dettes', 'des impôts'], answer: 0, explain: 'Ils protègent la personne et ne se vendent pas.' },
          ],
        },
        {
          id: 'p1-droit-t4-tri',
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
          id: 'p1-droit-t4-flash',
          type: 'flashcard',
          title: 'Flashcards — Les droits',
          icon: '🃏',
          cards: [
            { front: 'Droits patrimoniaux', back: 'Valeur en argent, cessibles (ex. propriété, créances).' },
            { front: 'Droits extrapatrimoniaux', back: 'Protègent la personne, incessibles (vie privée, image).' },
            { front: 'Droit de propriété', back: 'User, jouir et disposer d’un bien.' },
            { front: 'Droits de la personnalité', back: 'Vie privée, image, nom, honneur.' },
          ],
        },
      ],
    },
  ],
}

// ===========================================================================
// ÉCONOMIE (Première)
// ===========================================================================
const economieP = {
  id: 'p1-economie',
  name: 'Économie',
  short: 'Économie',
  icon: '📈',
  color: '#dc2626',
  niveau: 'premiere',
  tagline: 'Les bases : besoins, production, marché, monnaie.',
  chapters: [
    {
      id: 'p1-eco-t1',
      name: 'Thème 1 — Les grandes questions économiques',
      short: 'Grandes questions',
      keywords: 'besoin bien service rareté choix coût d’opportunité agents économiques circuit économique',
      intro:
        'L’économie étudie comment les hommes satisfont leurs **besoins** avec des ressources **limitées**. Ce thème pose les notions de base et présente les acteurs de l’économie.',
      cours: [
        {
          h: 'Besoins, rareté et choix',
          blocks: [
            { t: 'p', c: 'Les **besoins** sont illimités, mais les ressources sont **rares** (limitées). Il faut donc faire des **choix**. Choisir, c’est renoncer : le **coût d’opportunité** est ce à quoi on renonce en choisissant une option plutôt qu’une autre.' },
            { t: 'p', c: 'On satisfait les besoins avec des **biens** (matériels) et des **services** (immatériels).' },
          ],
        },
        {
          h: 'Les agents et le circuit économique',
          blocks: [
            { t: 'p', c: 'Les principaux **agents économiques** sont : les **ménages** (consomment, travaillent), les **entreprises** (produisent), les **administrations publiques** (services publics), les **banques** et le **reste du monde**.' },
            { t: 'p', c: 'Ils sont reliés par des **flux** (biens, services, monnaie, travail) : c’est le **circuit économique**.' },
          ],
        },
      ],
      essentiel: [
        'Besoins **illimités** + ressources **rares** = nécessité de **choisir** ; choisir = renoncer (**coût d’opportunité**).',
        'Biens (matériels) et services (immatériels) satisfont les besoins.',
        'Agents : **ménages, entreprises, administrations, banques, reste du monde**, reliés par le **circuit économique**.',
      ],
      resources: [
        { kind: 'video', label: 'Les grandes questions économiques', note: 'Vidéos — recherche YouTube', url: yt('grandes questions économiques besoins rareté agents économiques première STMG') },
      ],
      games: [
        {
          id: 'p1-eco-t1-qcm',
          type: 'qcm',
          title: 'QCM — Grandes questions',
          icon: '❓',
          questions: [
            { q: 'Le problème économique de base vient du fait que les besoins sont illimités et les ressources…', choices: ['rares (limitées)', 'infinies', 'gratuites', 'interdites'], answer: 0, explain: 'La rareté des ressources oblige à faire des choix.' },
            { q: 'Le coût d’opportunité est…', choices: ['ce à quoi on renonce en faisant un choix', 'le prix affiché en magasin', 'un impôt', 'un salaire'], answer: 0, explain: 'Choisir une option, c’est renoncer à une autre.' },
            { q: 'Les ménages, dans le circuit économique…', choices: ['consomment et fournissent du travail', 'produisent tous les biens', 'votent les lois', 'fixent les taux d’intérêt'], answer: 0, explain: 'Les ménages consomment et offrent leur travail.' },
            { q: 'Un service se distingue d’un bien car il est…', choices: ['immatériel', 'toujours gratuit', 'toujours importé', 'stockable indéfiniment'], answer: 0, explain: 'Le service est immatériel ; le bien est matériel.' },
          ],
        },
        {
          id: 'p1-eco-t1-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'La rareté des ressources oblige à faire des choix.', answer: true, explain: 'Vrai : c’est le fondement de l’économie.' },
            { statement: 'Les entreprises sont les agents qui produisent les biens et services.', answer: true, explain: 'Vrai : c’est leur rôle dans le circuit.' },
            { statement: 'Un besoin peut être totalement satisfait une fois pour toutes.', answer: false, explain: 'Faux : les besoins sont considérés comme illimités et renouvelés.' },
          ],
        },
        {
          id: 'p1-eco-t1-flash',
          type: 'flashcard',
          title: 'Flashcards — Bases de l’économie',
          icon: '🃏',
          cards: [
            { front: 'Rareté', back: 'Les ressources sont limitées face à des besoins illimités.' },
            { front: 'Coût d’opportunité', back: 'Ce à quoi on renonce en choisissant une option.' },
            { front: 'Agents économiques', back: 'Ménages, entreprises, administrations, banques, reste du monde.' },
            { front: 'Circuit économique', back: 'Les flux (biens, monnaie, travail) qui relient les agents.' },
          ],
        },
      ],
    },
    {
      id: 'p1-eco-t2',
      name: 'Thème 2 — La production dans l’entreprise',
      short: 'La production',
      keywords: 'facteurs de production travail capital combinaison productive productivité valeur ajoutée',
      intro:
        'Comment une entreprise **produit-elle** ? Ce thème présente les **facteurs de production**, leur combinaison, la **productivité** et la **valeur ajoutée**.',
      cours: [
        {
          h: 'Les facteurs de production',
          blocks: [
            { t: 'p', c: 'Pour produire, l’entreprise combine deux **facteurs de production** : le **travail** (la main-d’œuvre) et le **capital** (machines, locaux, équipements). Le choix de la **combinaison productive** dépend de leurs coûts.' },
            { t: 'p', c: 'La **productivité** mesure l’efficacité de la production : productivité du travail = production / nombre de travailleurs (ou d’heures).' },
          ],
        },
        {
          h: 'La valeur ajoutée',
          blocks: [
            { t: 'p', c: 'La **valeur ajoutée** mesure la richesse réellement créée par l’entreprise.' },
            { t: 'formula', c: 'Valeur ajoutée = valeur de la production − consommations intermédiaires' },
            { t: 'p', c: 'La valeur ajoutée est ensuite **répartie** entre les acteurs : salaires (travail), impôts (État), intérêts (prêteurs), bénéfice (entreprise/associés).' },
          ],
        },
      ],
      essentiel: [
        'Deux **facteurs de production** : **travail** et **capital**, combinés selon leurs coûts.',
        '**Productivité** = efficacité de la production (production / facteur utilisé).',
        '**Valeur ajoutée = production − consommations intermédiaires** ; elle est répartie (salaires, impôts, bénéfice…).',
      ],
      resources: [
        { kind: 'video', label: 'Facteurs de production et valeur ajoutée', note: 'Vidéos — recherche YouTube', url: yt('facteurs de production travail capital valeur ajoutée première STMG économie') },
      ],
      games: [
        {
          id: 'p1-eco-t2-qcm',
          type: 'qcm',
          title: 'QCM — La production',
          icon: '❓',
          questions: [
            { q: 'Les deux facteurs de production sont…', choices: ['le travail et le capital', 'l’offre et la demande', 'le prix et la quantité', 'l’actif et le passif'], answer: 0, explain: 'On combine travail (main-d’œuvre) et capital (équipements).' },
            { q: 'La productivité mesure…', choices: ['l’efficacité de la production', 'le montant des impôts', 'le nombre de clients', 'la valeur du logo'], answer: 0, explain: 'Ex. productivité du travail = production / nombre de travailleurs.' },
            { q: 'La valeur ajoutée se calcule…', choices: ['production − consommations intermédiaires', 'production + impôts', 'salaires + bénéfice', 'chiffre d’affaires − TVA'], answer: 0, explain: 'VA = valeur de la production − consommations intermédiaires.' },
            { q: 'La valeur ajoutée est ensuite…', choices: ['répartie entre les acteurs (salaires, impôts, bénéfice)', 'entièrement gardée en stock', 'reversée aux concurrents', 'détruite'], answer: 0, explain: 'Elle rémunère travail, État, prêteurs et associés.' },
          ],
        },
        {
          id: 'p1-eco-t2-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'Le capital désigne les machines, locaux et équipements.', answer: true, explain: 'Vrai : c’est le facteur capital.' },
            { statement: 'La valeur ajoutée mesure la richesse créée par l’entreprise.', answer: true, explain: 'Vrai : production − consommations intermédiaires.' },
            { statement: 'Augmenter la productivité, c’est produire moins avec plus de moyens.', answer: false, explain: 'Faux : c’est produire plus (ou autant) avec moins de moyens.' },
          ],
        },
        {
          id: 'p1-eco-t2-flash',
          type: 'flashcard',
          title: 'Flashcards — La production',
          icon: '🃏',
          cards: [
            { front: 'Facteur travail', back: 'La main-d’œuvre mobilisée pour produire.' },
            { front: 'Facteur capital', back: 'Machines, locaux, équipements.' },
            { front: 'Productivité', back: 'Efficacité de la production (production / facteur).' },
            { front: 'Valeur ajoutée', back: 'Production − consommations intermédiaires.' },
          ],
        },
      ],
    },
    {
      id: 'p1-eco-t3',
      name: 'Thème 3 — La coordination par le marché',
      short: 'Le marché',
      keywords: 'marché offre demande prix d’équilibre loi offre demande concurrence',
      intro:
        'Sur un **marché**, offreurs et demandeurs se rencontrent. Ce thème explique comment le **prix** s’ajuste pour équilibrer l’**offre** et la **demande**.',
      cours: [
        {
          h: 'Offre, demande et prix d’équilibre',
          blocks: [
            { t: 'p', c: 'Le **marché** est le lieu (réel ou virtuel) de rencontre entre l’**offre** (les vendeurs) et la **demande** (les acheteurs). Le **prix** s’ajuste jusqu’au **prix d’équilibre**, où la quantité offerte égale la quantité demandée.' },
            { t: 'list', c: [
              '**Loi de la demande** : quand le prix baisse, la demande augmente (et inversement).',
              '**Loi de l’offre** : quand le prix monte, l’offre augmente (et inversement).',
            ] },
          ],
        },
        {
          h: 'La concurrence',
          blocks: [
            { t: 'p', c: 'En **concurrence**, de nombreux offreurs et demandeurs s’affrontent : aucun ne peut imposer seul son prix. La concurrence pousse à baisser les prix et à innover, mais peut être **imparfaite** (monopole, entente).' },
          ],
        },
      ],
      essentiel: [
        'Le **marché** = rencontre de l’**offre** (vendeurs) et de la **demande** (acheteurs).',
        'Le **prix d’équilibre** égalise quantités offerte et demandée.',
        'Loi de la **demande** (prix ↓ → demande ↑) ; loi de l’**offre** (prix ↑ → offre ↑).',
      ],
      resources: [
        { kind: 'video', label: 'Offre, demande et prix d’équilibre', note: 'Vidéos — recherche YouTube', url: yt('marché offre demande prix équilibre première STMG économie') },
      ],
      games: [
        {
          id: 'p1-eco-t3-qcm',
          type: 'qcm',
          title: 'QCM — Le marché',
          icon: '❓',
          questions: [
            { q: 'Sur un marché, l’offre est le fait…', choices: ['des vendeurs', 'des acheteurs', 'de l’État seul', 'des banques'], answer: 0, explain: 'L’offre = les vendeurs ; la demande = les acheteurs.' },
            { q: 'Le prix d’équilibre est celui pour lequel…', choices: ['la quantité offerte = la quantité demandée', 'l’offre est nulle', 'la demande est infinie', 'le vendeur perd de l’argent'], answer: 0, explain: 'À l’équilibre, offre et demande s’égalisent.' },
            { q: 'Selon la loi de la demande, si le prix baisse, la demande…', choices: ['augmente', 'disparaît', 'reste identique', 'devient négative'], answer: 0, explain: 'Prix ↓ → demande ↑ (toutes choses égales par ailleurs).' },
            { q: 'Une situation de monopole est une concurrence…', choices: ['imparfaite', 'parfaite', 'idéale pour le client', 'interdite partout'], answer: 0, explain: 'Le monopole est une forme de concurrence imparfaite.' },
          ],
        },
        {
          id: 'p1-eco-t3-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'La demande émane des acheteurs.', answer: true, explain: 'Vrai : la demande = les acheteurs, l’offre = les vendeurs.' },
            { statement: 'Quand le prix augmente, l’offre a tendance à augmenter.', answer: true, explain: 'Vrai : c’est la loi de l’offre.' },
            { statement: 'En monopole, la concurrence est parfaite.', answer: false, explain: 'Faux : le monopole est une concurrence imparfaite.' },
          ],
        },
        {
          id: 'p1-eco-t3-flash',
          type: 'flashcard',
          title: 'Flashcards — Le marché',
          icon: '🃏',
          cards: [
            { front: 'Marché', back: 'Rencontre de l’offre (vendeurs) et de la demande (acheteurs).' },
            { front: 'Prix d’équilibre', back: 'Prix où quantité offerte = quantité demandée.' },
            { front: 'Loi de la demande', back: 'Prix ↓ → demande ↑ (et inversement).' },
            { front: 'Concurrence imparfaite', back: 'Monopole, entente… un acteur pèse sur le prix.' },
          ],
        },
      ],
    },
    {
      id: 'p1-eco-t4',
      name: 'Thème 4 — La monnaie et le financement',
      short: 'Monnaie & financement',
      keywords: 'monnaie fonctions formes financement interne externe direct indirect banque crédit',
      intro:
        'La **monnaie** facilite les échanges ; le **financement** permet aux agents de réaliser leurs projets. Ce thème présente ces deux notions clés.',
      cours: [
        {
          h: 'Les fonctions et formes de la monnaie',
          blocks: [
            { t: 'p', c: 'La **monnaie** remplit trois **fonctions** : **intermédiaire des échanges** (elle évite le troc), **unité de compte** (elle mesure la valeur) et **réserve de valeur** (elle se conserve).' },
            { t: 'p', c: 'Ses **formes** : la monnaie **fiduciaire** (billets et pièces) et la monnaie **scripturale** (les dépôts sur les comptes, la carte, le virement).' },
          ],
        },
        {
          h: 'Le financement de l’économie',
          blocks: [
            { t: 'list', c: [
              '**Financement interne** : l’agent utilise ses propres ressources (autofinancement).',
              '**Financement externe** : il fait appel à d’autres. Il peut être **direct** (marchés financiers : actions, obligations) ou **indirect** (crédit auprès d’une **banque**).',
            ] },
            { t: 'tip', c: 'Les **banques** jouent un rôle central : elles collectent l’épargne, accordent des **crédits** et créent de la monnaie.' },
          ],
        },
      ],
      essentiel: [
        'Trois fonctions de la monnaie : **intermédiaire des échanges**, **unité de compte**, **réserve de valeur**.',
        'Formes : **fiduciaire** (billets/pièces) et **scripturale** (dépôts, carte, virement).',
        'Financement **interne** (autofinancement) ou **externe** : **direct** (marchés) ou **indirect** (crédit bancaire).',
      ],
      resources: [
        { kind: 'video', label: 'La monnaie et le financement', note: 'Vidéos — recherche YouTube', url: yt('monnaie fonctions financement direct indirect banque première STMG économie') },
      ],
      games: [
        {
          id: 'p1-eco-t4-qcm',
          type: 'qcm',
          title: 'QCM — Monnaie & financement',
          icon: '❓',
          questions: [
            { q: 'Combien de fonctions principales la monnaie remplit-elle ?', choices: ['3', '1', '5', '10'], answer: 0, explain: 'Intermédiaire des échanges, unité de compte, réserve de valeur.' },
            { q: 'Les billets et pièces sont de la monnaie…', choices: ['fiduciaire', 'scripturale', 'virtuelle uniquement', 'électronique interdite'], answer: 0, explain: 'La monnaie fiduciaire = billets et pièces ; la scripturale = dépôts.' },
            { q: 'Financer un projet avec ses propres ressources, c’est un financement…', choices: ['interne', 'externe direct', 'externe indirect', 'public'], answer: 0, explain: 'Le financement interne = autofinancement.' },
            { q: 'Emprunter auprès d’une banque est un financement externe…', choices: ['indirect', 'direct', 'interne', 'gratuit'], answer: 0, explain: 'Le crédit bancaire est un financement externe indirect ; les marchés = direct.' },
          ],
        },
        {
          id: 'p1-eco-t4-tri',
          type: 'tri',
          title: 'Tri — Type de financement',
          icon: '🗂️',
          instruction: 'Classe chaque mode de financement.',
          categories: [
            { id: 'int', label: 'Interne' },
            { id: 'dir', label: 'Externe direct' },
            { id: 'ind', label: 'Externe indirect' },
          ],
          items: [
            { text: 'Autofinancement (ses réserves)', cat: 'int' },
            { text: 'Émettre des actions en Bourse', cat: 'dir' },
            { text: 'Un crédit bancaire', cat: 'ind' },
            { text: 'Émettre des obligations', cat: 'dir' },
          ],
        },
        {
          id: 'p1-eco-t4-flash',
          type: 'flashcard',
          title: 'Flashcards — Monnaie & financement',
          icon: '🃏',
          cards: [
            { front: 'Fonctions de la monnaie', back: 'Intermédiaire des échanges, unité de compte, réserve de valeur.' },
            { front: 'Monnaie fiduciaire', back: 'Billets et pièces.' },
            { front: 'Monnaie scripturale', back: 'Dépôts sur les comptes (carte, virement).' },
            { front: 'Financement direct / indirect', back: 'Marchés financiers / crédit bancaire.' },
          ],
        },
      ],
    },
  ],
}

export const premiereSubjects = [sgn, managementP, droitP, economieP]
