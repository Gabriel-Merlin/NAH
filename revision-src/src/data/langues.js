// LANGUES VIVANTES — Anglais & Espagnol.
// Pas de « cours » rédigé : uniquement (1) toutes les CONJUGAISONS, temps par
// temps, sous forme de tableaux, et (2) une PANOPLIE de vocabulaire par thème.
// Le dictionnaire / traducteur intégré (icône 📖 en haut) complète le tout.
export const langues = {
  id: 'langues',
  name: 'Langues (Anglais / Espagnol)',
  short: 'Langues',
  icon: '🗣️',
  color: '#db2777',
  tagline: 'Toutes les conjugaisons + une panoplie de vocabulaire. Dictionnaire intégré.',
  chapters: [
    // ======================================================================
    // ANGLAIS — CONJUGAISON (tous les temps)
    // ======================================================================
    {
      id: 'lng-en-gram',
      name: 'Anglais — Toutes les conjugaisons',
      short: 'Anglais · conjugaison',
      keywords: 'present simple continuous preterit present perfect past perfect futur will going to modaux conditionnels passif verbes irréguliers anglais conjugaison temps',
      intro: 'Tous les temps anglais, à consulter et à réviser : présent, passé, futur, modaux, conditionnels, voix passive et la liste des verbes irréguliers.',
      cours: [
        {
          h: 'Le présent (simple & continu)',
          blocks: [
            { t: 'table', head: ['Present simple', 'Structure', 'Exemple'], rows: [
              ['Affirmative', 'sujet + base (+ **-s** à la 3ᵉ pers.)', 'She work**s** every day.'],
              ['Négative', "don't / doesn't + base", "He does**n't** work on Sundays."],
              ['Interrogative', 'Do / Does + sujet + base ?', 'Do you work here?'],
              ['Emploi', 'habitudes, vérités générales', 'Water boils at 100 °C.'],
            ] },
            { t: 'table', head: ['Present continuous', 'Structure', 'Exemple'], rows: [
              ['Affirmative', 'am / is / are + **V-ing**', 'They are work**ing** now.'],
              ['Négative', "am / is / are + not + V-ing", "I'm not working today."],
              ['Interrogative', 'Am / Is / Are + sujet + V-ing ?', 'Are you listening?'],
              ['Emploi', 'action en cours, temporaire', 'She is studying for her exam.'],
            ] },
          ],
        },
        {
          h: 'Le passé (preterit vs present perfect)',
          blocks: [
            { t: 'table', head: ['Preterit', 'Structure', 'Exemple'], rows: [
              ['Affirmative', 'base + **-ed** (ou verbe irrégulier)', 'We visit**ed** Rome. / I **went** home.'],
              ['Négative', "didn't + base", "They did**n't** come."],
              ['Interrogative', 'Did + sujet + base ?', 'Did you see it?'],
              ['Emploi', 'action passée **datée** et terminée', 'She was born in 2007.'],
            ] },
            { t: 'table', head: ['Present perfect', 'Structure', 'Exemple'], rows: [
              ['Affirmative', 'have / has + **participe passé**', 'I have finish**ed**.'],
              ['Négative', "haven't / hasn't + PP", "He has**n't** arrived."],
              ['Interrogative', 'Have / Has + sujet + PP ?', 'Have you eaten?'],
              ['Emploi', 'lien passé-présent (for, since, already, yet, ever)', "I've known her **for** years."],
            ] },
          ],
        },
        {
          h: 'Plus-que-parfait & le futur',
          blocks: [
            { t: 'table', head: ['Temps', 'Structure', 'Exemple'], rows: [
              ['Past perfect', 'had + **participe passé**', 'She **had left** before I arrived.'],
              ['Futur (will)', 'will + base', "I **will** call you. / I'll help."],
              ['Futur (be going to)', 'am / is / are going to + base', "It's **going to** rain."],
              ['Futur (projet)', 'be + V-ing', "I'm meeting him tomorrow."],
              ['Future perfect', 'will have + PP', 'By 2030, he **will have** graduated.'],
            ] },
          ],
        },
        {
          h: 'Les modaux',
          blocks: [
            { t: 'table', head: ['Modal', 'Sens', 'Exemple'], rows: [
              ['can / could', 'capacité, possibilité', 'I **can** swim. / **Could** you help?'],
              ['may / might', 'probabilité, permission', 'It **may** rain. / You **may** go.'],
              ['must', 'obligation forte, quasi-certitude', 'You **must** stop. / He **must** be tired.'],
              ['have to', 'obligation (extérieure)', 'I **have to** work tomorrow.'],
              ['should / ought to', 'conseil', 'You **should** rest.'],
              ['would', 'hypothèse, politesse', 'I **would** like a coffee.'],
            ] },
            { t: 'p', c: '**Règle** : un modal est toujours suivi de la **base verbale** (pas de « to », pas de « -s », pas de « -ed »).' },
          ],
        },
        {
          h: 'Conditionnels & voix passive',
          blocks: [
            { t: 'table', head: ['Conditionnel', 'Structure', 'Exemple'], rows: [
              ['Type 0 (général)', 'If + present, present', 'If you heat ice, it melts.'],
              ['Type 1 (réel)', 'If + present, **will** + base', 'If it rains, we **will** stay.'],
              ['Type 2 (irréel présent)', 'If + preterit, **would** + base', 'If I **were** rich, I **would** travel.'],
              ['Type 3 (irréel passé)', 'If + past perfect, **would have** + PP', 'If I had known, I **would have** come.'],
            ] },
            { t: 'table', head: ['Voix passive', 'Structure', 'Exemple'], rows: [
              ['Présent', 'am / is / are + PP', 'The office **is cleaned** every day.'],
              ['Preterit', 'was / were + PP', 'The report **was written** yesterday.'],
              ['Present perfect', 'has / have been + PP', 'It **has been** done.'],
              ['Futur', 'will be + PP', 'It **will be** finished soon.'],
              ['Modal', 'modal + be + PP', 'It **must be** checked.'],
            ] },
          ],
        },
        {
          h: 'Les verbes irréguliers (liste)',
          blocks: [
            { t: 'table', head: ['Base', 'Preterit', 'Participe passé', 'Sens'], rows: [
              ['be', 'was / were', 'been', 'être'],
              ['become', 'became', 'become', 'devenir'],
              ['begin', 'began', 'begun', 'commencer'],
              ['break', 'broke', 'broken', 'casser'],
              ['bring', 'brought', 'brought', 'apporter'],
              ['build', 'built', 'built', 'construire'],
              ['buy', 'bought', 'bought', 'acheter'],
              ['catch', 'caught', 'caught', 'attraper'],
              ['choose', 'chose', 'chosen', 'choisir'],
              ['come', 'came', 'come', 'venir'],
              ['cost', 'cost', 'cost', 'coûter'],
              ['cut', 'cut', 'cut', 'couper'],
              ['do', 'did', 'done', 'faire'],
              ['drink', 'drank', 'drunk', 'boire'],
              ['drive', 'drove', 'driven', 'conduire'],
              ['eat', 'ate', 'eaten', 'manger'],
              ['fall', 'fell', 'fallen', 'tomber'],
              ['feel', 'felt', 'felt', 'ressentir'],
              ['find', 'found', 'found', 'trouver'],
              ['fly', 'flew', 'flown', 'voler'],
              ['forget', 'forgot', 'forgotten', 'oublier'],
              ['get', 'got', 'got / gotten', 'obtenir'],
              ['give', 'gave', 'given', 'donner'],
              ['go', 'went', 'gone', 'aller'],
              ['grow', 'grew', 'grown', 'grandir'],
              ['have', 'had', 'had', 'avoir'],
              ['hear', 'heard', 'heard', 'entendre'],
              ['keep', 'kept', 'kept', 'garder'],
              ['know', 'knew', 'known', 'savoir'],
              ['leave', 'left', 'left', 'partir'],
              ['lose', 'lost', 'lost', 'perdre'],
              ['make', 'made', 'made', 'fabriquer'],
              ['meet', 'met', 'met', 'rencontrer'],
              ['pay', 'paid', 'paid', 'payer'],
              ['put', 'put', 'put', 'mettre'],
              ['read', 'read', 'read', 'lire'],
              ['run', 'ran', 'run', 'courir'],
              ['say', 'said', 'said', 'dire'],
              ['see', 'saw', 'seen', 'voir'],
              ['sell', 'sold', 'sold', 'vendre'],
              ['send', 'sent', 'sent', 'envoyer'],
              ['show', 'showed', 'shown', 'montrer'],
              ['sing', 'sang', 'sung', 'chanter'],
              ['sit', 'sat', 'sat', "s'asseoir"],
              ['sleep', 'slept', 'slept', 'dormir'],
              ['speak', 'spoke', 'spoken', 'parler'],
              ['spend', 'spent', 'spent', 'dépenser'],
              ['take', 'took', 'taken', 'prendre'],
              ['teach', 'taught', 'taught', 'enseigner'],
              ['tell', 'told', 'told', 'raconter'],
              ['think', 'thought', 'thought', 'penser'],
              ['understand', 'understood', 'understood', 'comprendre'],
              ['wear', 'wore', 'worn', 'porter (un vêtement)'],
              ['win', 'won', 'won', 'gagner'],
              ['write', 'wrote', 'written', 'écrire'],
            ] },
          ],
        },
      ],
      essentiel: [
        '**Present perfect** (have/has + PP) = lien passé-présent ; **preterit** = action passée datée et terminée.',
        '**Modal + base verbale** ; **conditionnels** : type 1 (present → will), type 2 (preterit → would), type 3 (past perfect → would have).',
        '**Passif** = *be* + participe passé. Les **verbes irréguliers** se mémorisent en trois colonnes (base / preterit / PP).',
      ],
      games: [
        {
          id: 'lng-en-present-trou', type: 'trou', title: 'Conjugue — le présent', icon: '✏️',
          questions: [
            { text: 'She usually ____ (go) to school by bus.', answer: 'goes', explain: 'Present simple, 3ᵉ personne : go → goes.' },
            { text: 'Look! They ____ (play) football right now.', answer: 'are playing', explain: 'Action en cours → present continuous : be + V-ing.' },
            { text: 'I ____ (not like) coffee.', answer: "don't like", alt: ['do not like'], explain: 'Négation au présent simple : don’t + base.' },
            { text: 'He ____ (watch) TV every evening.', answer: 'watches', explain: '3ᵉ pers. d’un verbe en -ch : watch → watches.' },
            { text: 'Water ____ (boil) at 100 degrees.', answer: 'boils', explain: 'Vérité générale → present simple : boils.' },
          ],
        },
        {
          id: 'lng-en-past-qcm', type: 'qcm', title: 'QCM — preterit vs present perfect', icon: '❓',
          questions: [
            { q: '« I ___ my keys yesterday. »', choices: ['lost', 'have lost', 'was losing', 'lose'], answer: 0, explain: 'Date précise (yesterday) → preterit : lost.' },
            { q: '« She ___ here since 2020. »', choices: ['has lived', 'lived', 'lives', 'is living'], answer: 0, explain: '« since » → present perfect : has lived.' },
            { q: 'Preterit de « to go » :', choices: ['went', 'goed', 'gone', 'going'], answer: 0, explain: 'go / went / gone.' },
            { q: '« Have you ever ___ sushi? »', choices: ['eaten', 'ate', 'eat', 'eating'], answer: 0, explain: 'Present perfect + ever → participe passé : eaten.' },
            { q: '« When I was young, I ___ in Spain. »', choices: ['lived', 'have lived', 'live', 'am living'], answer: 0, explain: 'Contexte passé daté → preterit : lived.' },
          ],
        },
        {
          id: 'lng-en-future-trou', type: 'trou', title: 'Conjugue — plus-que-parfait & futur', icon: '✏️',
          questions: [
            { text: 'I think it ____ (rain) tomorrow.', answer: 'will rain', explain: 'Prévision → will + base.' },
            { text: 'Look at those clouds, it ____ (rain).', answer: 'is going to rain', explain: 'Indice présent → be going to.' },
            { text: 'By 2030, she ____ (finish) her studies.', answer: 'will have finished', explain: 'Future perfect : will have + PP.' },
            { text: 'Before he arrived, they ____ (already / leave).', answer: 'had already left', explain: 'Plus-que-parfait : had + PP.' },
          ],
        },
        {
          id: 'lng-en-modal-qcm', type: 'qcm', title: 'QCM — les modaux', icon: '❓',
          questions: [
            { q: 'Obligation forte : « You ___ wear a seatbelt. »', choices: ['must', 'can', 'might', 'would'], answer: 0, explain: 'Obligation forte → must.' },
            { q: 'Conseil : « You ___ see a doctor. »', choices: ['should', 'must', 'can', 'will'], answer: 0, explain: 'Conseil → should.' },
            { q: 'Capacité : « She ___ speak three languages. »', choices: ['can', 'must', 'should', 'may'], answer: 0, explain: 'Capacité → can.' },
            { q: 'Après un modal, le verbe est :', choices: ['à la base verbale (sans to, sans -s)', "à l'infinitif avec to", 'en -ing', 'au participe passé'], answer: 0, explain: 'Modal + base verbale.' },
            { q: 'Permission polie : « ___ I open the window? »', choices: ['May', 'Must', 'Would', 'Should'], answer: 0, explain: 'Permission polie → May I…?' },
          ],
        },
        {
          id: 'lng-en-cond-trou', type: 'trou', title: 'Conjugue — conditionnels & passif', icon: '✏️',
          questions: [
            { text: 'If it rains, we ____ (stay) home.', answer: 'will stay', explain: 'Type 1 : if + present, will + base.' },
            { text: 'If I ____ (be) you, I would apologize.', answer: 'were', alt: ['was'], explain: 'Type 2 : if + preterit (were).' },
            { text: 'If I had studied, I ____ (pass) the exam.', answer: 'would have passed', explain: 'Type 3 : would have + PP.' },
            { text: 'The letter ____ (write) yesterday. [passif]', answer: 'was written', explain: 'Passif au preterit : was + PP.' },
            { text: 'English ____ (speak) all over the world. [passif]', answer: 'is spoken', explain: 'Passif présent : is + PP.' },
          ],
        },
        {
          id: 'lng-en-irr-memory', type: 'memory', title: 'Memory — base ↔ participe passé', icon: '🧠',
          pairs: [
            { a: 'go', b: 'gone' }, { a: 'see', b: 'seen' }, { a: 'take', b: 'taken' },
            { a: 'write', b: 'written' }, { a: 'speak', b: 'spoken' }, { a: 'break', b: 'broken' },
          ],
        },
        {
          id: 'lng-en-irr-trou', type: 'trou', title: 'Verbes irréguliers — complète', icon: '✏️',
          questions: [
            { text: 'eat → preterit = ____', answer: 'ate', explain: 'eat / ate / eaten.' },
            { text: 'buy → preterit = ____', answer: 'bought', explain: 'buy / bought / bought.' },
            { text: 'think → participe passé = ____', answer: 'thought', explain: 'think / thought / thought.' },
            { text: 'give → participe passé = ____', answer: 'given', explain: 'give / gave / given.' },
            { text: 'come → preterit = ____', answer: 'came', explain: 'come / came / come.' },
          ],
        },
      ],
    },

    // ======================================================================
    // ANGLAIS — VOCABULAIRE (panoplie par thème)
    // ======================================================================
    {
      id: 'lng-en-voc',
      name: 'Anglais — Vocabulaire',
      short: 'Anglais · vocabulaire',
      keywords: 'vocabulaire anglais vie quotidienne famille école travail entreprise société environnement technologie phrasal verbs connecteurs opinion',
      intro: 'Une panoplie de vocabulaire anglais, thème par thème (à réviser en flashcards). Astuce : le dictionnaire intégré 📖 traduit aussi les phrases.',
      cours: [
        {
          h: 'Vie quotidienne & famille',
          blocks: [{ t: 'table', head: ['Anglais', 'Français'], rows: [
            ['family', 'la famille'], ['parents', 'les parents'], ['siblings', 'les frères et sœurs'],
            ['brother', 'le frère'], ['sister', 'la sœur'], ['child', "l'enfant"], ['friend', "l'ami(e)"],
            ['neighbour', 'le voisin'], ['home', 'le foyer'], ['house', 'la maison'], ['flat', "l'appartement"],
            ['room', 'la pièce'], ['kitchen', 'la cuisine'], ['bedroom', 'la chambre'], ['meal', 'le repas'],
            ['breakfast', 'le petit-déjeuner'], ['to wake up', 'se réveiller'], ['to get dressed', "s'habiller"],
            ['chore', 'la corvée'], ['weekend', 'le week-end'], ['holidays', 'les vacances'], ['hobby', 'le loisir'],
            ['to spend time', 'passer du temps'], ['relationship', 'la relation'], ['together', 'ensemble'],
          ] }],
        },
        {
          h: 'École, études & travail',
          blocks: [{ t: 'table', head: ['Anglais', 'Français'], rows: [
            ['school', "l'école"], ['high school', 'le lycée'], ['student', "l'élève"], ['teacher', 'le professeur'],
            ['subject', 'la matière'], ['homework', 'les devoirs'], ['exam', "l'examen"], ['grade', 'la note'],
            ['degree', 'le diplôme'], ['university', "l'université"], ['to learn', 'apprendre'], ['to study', 'étudier'],
            ['to pass an exam', 'réussir un examen'], ['to fail', 'échouer'], ['skill', 'la compétence'],
            ['knowledge', 'les connaissances'], ['training', 'la formation'], ['job', "l'emploi"], ['career', 'la carrière'],
            ['internship', 'le stage'], ['to apply', 'postuler'], ['interview', "l'entretien"], ['colleague', 'le collègue'],
            ['workplace', 'le lieu de travail'], ['salary', 'le salaire'], ['to hire', 'embaucher'],
          ] }],
        },
        {
          h: 'Entreprise, gestion & finance (STMG / ETLV)',
          blocks: [{ t: 'table', head: ['Anglais', 'Français'], rows: [
            ['company', "l'entreprise"], ['business', 'les affaires'], ['turnover', "le chiffre d'affaires"],
            ['profit', 'le bénéfice'], ['loss', 'la perte'], ['balance sheet', 'le bilan'], ['cash flow', 'la trésorerie'],
            ['break-even point', 'le seuil de rentabilité'], ['cost', 'le coût'], ['revenue', 'le revenu'],
            ['budget', 'le budget'], ['investment', "l'investissement"], ['loan', "l'emprunt"], ['shareholder', "l'actionnaire"],
            ['stakeholder', 'la partie prenante'], ['market', 'le marché'], ['market share', 'la part de marché'],
            ['customer', 'le client'], ['supplier', 'le fournisseur'], ['brand', 'la marque'], ['growth', 'la croissance'],
            ['strategy', 'la stratégie'], ['competitor', 'le concurrent'], ['CSR', 'la RSE'], ['supply chain', "la chaîne d'approvisionnement"],
          ] }],
        },
        {
          h: 'Société, politique & médias',
          blocks: [{ t: 'table', head: ['Anglais', 'Français'], rows: [
            ['society', 'la société'], ['government', 'le gouvernement'], ['election', "l'élection"], ['to vote', 'voter'],
            ['citizen', 'le citoyen'], ['right', 'le droit'], ['law', 'la loi'], ['equality', "l'égalité"],
            ['freedom', 'la liberté'], ['discrimination', 'la discrimination'], ['poverty', 'la pauvreté'],
            ['wealth', 'la richesse'], ['immigration', "l'immigration"], ['border', 'la frontière'],
            ['protest', 'la manifestation'], ['news', 'les informations'], ['media', 'les médias'], ['newspaper', 'le journal'],
            ['fake news', 'les fausses informations'], ['to broadcast', 'diffuser'], ['advertising', 'la publicité'],
            ['public opinion', "l'opinion publique"], ['issue', "l'enjeu, le problème"], ['welfare', 'la protection sociale'], ['gap', "l'écart"],
          ] }],
        },
        {
          h: 'Environnement & sciences',
          blocks: [{ t: 'table', head: ['Anglais', 'Français'], rows: [
            ['environment', "l'environnement"], ['climate change', 'le changement climatique'],
            ['global warming', 'le réchauffement climatique'], ['pollution', 'la pollution'], ['waste', 'les déchets'],
            ['to recycle', 'recycler'], ['renewable energy', 'les énergies renouvelables'],
            ['greenhouse gas', 'le gaz à effet de serre'], ['carbon footprint', "l'empreinte carbone"],
            ['sustainable', 'durable'], ['to pollute', 'polluer'], ['endangered', 'en voie de disparition'],
            ['wildlife', 'la faune'], ['forest', 'la forêt'], ['drought', 'la sécheresse'], ['flood', "l'inondation"],
            ['research', 'la recherche'], ['discovery', 'la découverte'], ['to reduce', 'réduire'], ['resource', 'la ressource'],
            ['biodiversity', 'la biodiversité'], ['to protect', 'protéger'], ['energy', "l'énergie"], ['species', "l'espèce"],
          ] }],
        },
        {
          h: 'Numérique & technologies',
          blocks: [{ t: 'table', head: ['Anglais', 'Français'], rows: [
            ['technology', 'la technologie'], ['computer', "l'ordinateur"], ['smartphone', 'le smartphone'],
            ['screen', "l'écran"], ['network', 'le réseau'], ['social media', 'les réseaux sociaux'], ['website', 'le site web'],
            ['app', "l'application"], ['data', 'les données'], ['privacy', 'la vie privée'], ['password', 'le mot de passe'],
            ['to download', 'télécharger'], ['to upload', 'téléverser'], ['online', 'en ligne'], ['user', "l'utilisateur"],
            ['artificial intelligence', "l'intelligence artificielle"], ['software', 'le logiciel'], ['device', "l'appareil"],
            ['to browse', 'naviguer'], ['cybersecurity', 'la cybersécurité'], ['algorithm', "l'algorithme"],
            ['to update', 'mettre à jour'], ['digital', 'numérique'], ['addiction', 'la dépendance'],
          ] }],
        },
        {
          h: 'Verbes courants & phrasal verbs',
          blocks: [{ t: 'table', head: ['Anglais', 'Français'], rows: [
            ['to be', 'être'], ['to have', 'avoir'], ['to do', 'faire'], ['to make', 'fabriquer'], ['to go', 'aller'],
            ['to get', 'obtenir'], ['to give up', 'abandonner'], ['to look for', 'chercher'], ['to look after', "s'occuper de"],
            ['to find out', 'découvrir'], ['to give back', 'rendre'], ['to point out', 'souligner'], ['to carry out', 'réaliser'],
            ['to deal with', 'traiter, gérer'], ['to come up with', 'proposer'], ['to take part in', 'participer à'],
            ['to grow up', 'grandir'], ['to turn down', 'refuser'], ['to set up', 'créer, monter'], ['to put off', 'reporter'],
            ['to run out of', 'manquer de'], ['to bring up', 'évoquer'], ['to break down', 'tomber en panne'],
            ['to figure out', 'comprendre'], ['to rely on', 'compter sur'],
          ] }],
        },
        {
          h: 'Mots de liaison & exprimer son opinion',
          blocks: [{ t: 'table', head: ['Anglais', 'Français'], rows: [
            ['first', "d'abord"], ['then', 'ensuite'], ['finally', 'enfin'], ['moreover', 'de plus'], ['however', 'cependant'],
            ['therefore', 'donc'], ['because', 'parce que'], ['although', 'bien que'], ['in addition', 'en outre'],
            ['on the one hand', "d'une part"], ['on the other hand', "d'autre part"], ['for instance', 'par exemple'],
            ['in my opinion', 'à mon avis'], ['I think that', 'je pense que'], ['I agree', "je suis d'accord"],
            ['I disagree', "je ne suis pas d'accord"], ['to sum up', 'pour résumer'], ['in conclusion', 'en conclusion'],
            ['indeed', 'en effet'], ['nevertheless', 'néanmoins'], ['according to', 'selon'], ['whereas', 'tandis que'],
            ['as a result', 'par conséquent'], ['in fact', 'en fait'], ['on the whole', "dans l'ensemble"],
          ] }],
        },
      ],
      essentiel: [
        'Réviser le vocabulaire **par thème** et par petits blocs (10-15 min/jour) est plus efficace qu’une longue liste d’un coup.',
        'Vocabulaire **STMG / ETLV** utile : turnover (CA), balance sheet (bilan), cash flow (trésorerie), break-even point (seuil de rentabilité), shareholder (actionnaire).',
        'Les **phrasal verbs** (give up, look after, carry out…) se mémorisent comme un seul mot avec leur sens.',
      ],
      games: [
        {
          id: 'lng-en-voc-daily-memory', type: 'memory', title: 'Memory — vie quotidienne', icon: '🧠',
          pairs: [
            { a: 'family', b: 'la famille' }, { a: 'neighbour', b: 'le voisin' }, { a: 'meal', b: 'le repas' },
            { a: 'bedroom', b: 'la chambre' }, { a: 'weekend', b: 'le week-end' }, { a: 'friend', b: "l'ami" },
          ],
        },
        {
          id: 'lng-en-voc-biz-qcm', type: 'qcm', title: 'QCM — vocabulaire de l’entreprise', icon: '❓',
          questions: [
            { q: '« turnover » =', choices: ["le chiffre d'affaires", 'le bénéfice', "l'emprunt", 'la marque'], answer: 0, explain: 'turnover = chiffre d’affaires.' },
            { q: '« shareholder » =', choices: ["l'actionnaire", 'le fournisseur', 'le client', 'le concurrent'], answer: 0, explain: 'shareholder = actionnaire.' },
            { q: '« break-even point » =', choices: ['le seuil de rentabilité', 'le bilan', 'la trésorerie', 'la croissance'], answer: 0, explain: 'break-even point = seuil de rentabilité.' },
            { q: '« supplier » =', choices: ['le fournisseur', 'le client', 'le marché', 'le coût'], answer: 0, explain: 'supplier = fournisseur.' },
            { q: '« cash flow » =', choices: ['la trésorerie', 'le bénéfice', 'le budget', 'la perte'], answer: 0, explain: 'cash flow = trésorerie.' },
          ],
        },
        {
          id: 'lng-en-voc-env-assoc', type: 'association', title: 'Association — environnement', icon: '🔗',
          pairs: [
            { left: 'climate change', right: 'le changement climatique' }, { left: 'waste', right: 'les déchets' },
            { left: 'renewable energy', right: 'les énergies renouvelables' }, { left: 'drought', right: 'la sécheresse' },
            { left: 'carbon footprint', right: "l'empreinte carbone" },
          ],
        },
        {
          id: 'lng-en-voc-phrasal-qcm', type: 'qcm', title: 'QCM — phrasal verbs', icon: '❓',
          questions: [
            { q: '« to give up » =', choices: ['abandonner', 'donner', 'rendre', 'offrir'], answer: 0, explain: 'to give up = abandonner.' },
            { q: '« to look after » =', choices: ["s'occuper de", 'chercher', 'regarder', 'ressembler à'], answer: 0, explain: 'to look after = s’occuper de.' },
            { q: '« to carry out » =', choices: ['réaliser', 'porter', 'emporter', 'continuer'], answer: 0, explain: 'to carry out = réaliser, mener à bien.' },
            { q: '« to run out of » =', choices: ['manquer de', 'sortir', 'courir', 's’enfuir'], answer: 0, explain: 'to run out of = être à court de.' },
            { q: '« to deal with » =', choices: ['traiter, gérer', 'distribuer', 'vendre', 'négocier'], answer: 0, explain: 'to deal with = traiter, gérer.' },
          ],
        },
      ],
    },

    // ======================================================================
    // ESPAGNOL — CONJUGAISON (tous les temps)
    // ======================================================================
    {
      id: 'lng-es-gram',
      name: 'Espagnol — Toutes les conjugaisons',
      short: 'Espagnol · conjugaison',
      keywords: 'ser estar presente indefinido imperfecto perfecto pluscuamperfecto futuro condicional subjuntivo imperativo gerundio gustar verbes irréguliers espagnol conjugaison',
      intro: 'Toutes les conjugaisons espagnoles : ser/estar, présent, passés, futur, conditionnel, subjonctif, impératif, gérondif et les verbes irréguliers clés.',
      cours: [
        {
          h: 'Ser / Estar & le présent',
          blocks: [
            { t: 'table', head: ['SER (présent)', 'ESTAR (présent)', 'Emploi'], rows: [
              ['soy', 'estoy', 'SER = permanent · ESTAR = état/lieu'],
              ['eres', 'estás', 'identité, origine, heure / état passager'],
              ['es', 'está', 'profession / situation'],
              ['somos', 'estamos', 'Soy español · Estoy cansado'],
              ['sois', 'estáis', 'Son las tres · Está en Madrid'],
              ['son', 'están', ''],
            ] },
            { t: 'table', head: ['Présent régulier', '-ar (hablar)', '-er (comer) / -ir (vivir)'], rows: [
              ['yo', 'hablo', 'como / vivo'],
              ['tú', 'hablas', 'comes / vives'],
              ['él/ella', 'habla', 'come / vive'],
              ['nosotros', 'hablamos', 'comemos / vivimos'],
              ['vosotros', 'habláis', 'coméis / vivís'],
              ['ellos', 'hablan', 'comen / viven'],
            ] },
            { t: 'p', c: '**Irréguliers fréquents au présent** : tener → *tengo, tienes, tiene…* · ir → *voy, vas, va, vamos, vais, van* · hacer → *hago* · poder → *puedo, puedes…* · querer → *quiero…*' },
          ],
        },
        {
          h: 'Les passés (indefinido & imperfecto)',
          blocks: [
            { t: 'table', head: ['Indefinido', '-ar (hablar)', '-er/-ir (comer)'], rows: [
              ['yo', 'hablé', 'comí'], ['tú', 'hablaste', 'comiste'], ['él/ella', 'habló', 'comió'],
              ['nosotros', 'hablamos', 'comimos'], ['vosotros', 'hablasteis', 'comisteis'], ['ellos', 'hablaron', 'comieron'],
            ] },
            { t: 'table', head: ['Imperfecto', '-ar (hablar)', '-er/-ir (comer)'], rows: [
              ['yo', 'hablaba', 'comía'], ['tú', 'hablabas', 'comías'], ['él/ella', 'hablaba', 'comía'],
              ['nosotros', 'hablábamos', 'comíamos'], ['vosotros', 'hablabais', 'comíais'], ['ellos', 'hablaban', 'comían'],
            ] },
            { t: 'p', c: '**Emploi** : *indefinido* = action **datée et ponctuelle** ; *imperfecto* = **décor, description, habitude**. Indefinidos irréguliers : ser/ir → *fui*, tener → *tuve*, hacer → *hice*, estar → *estuve*, poder → *pude*, decir → *dije*.' },
          ],
        },
        {
          h: 'Passé composé & plus-que-parfait',
          blocks: [
            { t: 'table', head: ['Pretérito perfecto', 'haber + participio', 'Pluscuamperfecto'], rows: [
              ['yo', 'he hablado', 'había hablado'], ['tú', 'has hablado', 'habías hablado'],
              ['él/ella', 'ha hablado', 'había hablado'], ['nosotros', 'hemos hablado', 'habíamos hablado'],
              ['vosotros', 'habéis hablado', 'habíais hablado'], ['ellos', 'han hablado', 'habían hablado'],
            ] },
            { t: 'table', head: ['Participios irregulares', '', ''], rows: [
              ['hacer → hecho', 'decir → dicho', 'ver → visto'],
              ['escribir → escrito', 'poner → puesto', 'volver → vuelto'],
              ['abrir → abierto', 'romper → roto', 'morir → muerto'],
            ] },
          ],
        },
        {
          h: 'Futur & conditionnel',
          blocks: [
            { t: 'table', head: ['Personne', 'Futuro (hablar)', 'Condicional (hablar)'], rows: [
              ['yo', 'hablaré', 'hablaría'], ['tú', 'hablarás', 'hablarías'], ['él/ella', 'hablará', 'hablaría'],
              ['nosotros', 'hablaremos', 'hablaríamos'], ['vosotros', 'hablaréis', 'hablaríais'], ['ellos', 'hablarán', 'hablarían'],
            ] },
            { t: 'p', c: 'On ajoute les terminaisons à **l’infinitif**. **Radicaux irréguliers** (communs au futur et au conditionnel) : tener → *tendr-*, poder → *podr-*, hacer → *har-*, decir → *dir-*, poner → *pondr-*, salir → *saldr-*, venir → *vendr-*, querer → *querr-*, saber → *sabr-*, haber → *habr-*.' },
          ],
        },
        {
          h: 'Subjonctif présent & impératif',
          blocks: [
            { t: 'table', head: ['Subjuntivo presente', '-ar (hablar)', '-er/-ir (comer)'], rows: [
              ['yo', 'hable', 'coma'], ['tú', 'hables', 'comas'], ['él/ella', 'hable', 'coma'],
              ['nosotros', 'hablemos', 'comamos'], ['vosotros', 'habléis', 'comáis'], ['ellos', 'hablen', 'coman'],
            ] },
            { t: 'p', c: '**Emploi du subjonctif** : souhait, doute, nécessité, ordre négatif — après *que*, *ojalá*, *es necesario que*, *quiero que*… (les terminaisons « s’échangent » : -ar prend des -e, -er/-ir des -a).' },
            { t: 'table', head: ['Impératif', 'Affirmatif', 'Négatif'], rows: [
              ['tú', 'habla / come / vive', 'no hables / comas / vivas'],
              ['usted', 'hable / coma / viva', 'no hable / coma / viva'],
              ['vosotros', 'hablad / comed / vivid', 'no habléis / comáis / viváis'],
            ] },
          ],
        },
        {
          h: 'Gérondif, obligation & gustar',
          blocks: [
            { t: 'table', head: ['Gérondif', 'Formation', 'Emploi'], rows: [
              ['-ar → -ando', 'hablar → hablando', 'estar + gérondif = être en train de'],
              ['-er/-ir → -iendo', 'comer → comiendo, vivir → viviendo', 'Estoy comiendo (je suis en train de manger)'],
            ] },
            { t: 'table', head: ['Obligation', 'Structure', 'Exemple'], rows: [
              ['tener que + inf.', 'personnelle', 'Tengo que estudiar.'],
              ['hay que + inf.', 'impersonnelle', 'Hay que trabajar.'],
              ['deber + inf.', 'devoir', 'Debes descansar.'],
            ] },
            { t: 'p', c: '**Verbes type *gustar*** : le sujet est la chose aimée → *Me **gusta** el cine* (sing.) / *Me **gustan** los libros* (plur.). Même construction : *encantar, interesar, doler, faltar*.' },
          ],
        },
        {
          h: 'Verbes irréguliers clés (liste)',
          blocks: [
            { t: 'table', head: ['Infinitif', 'Présent (yo)', 'Indefinido (yo)', 'Participio'], rows: [
              ['ser', 'soy', 'fui', 'sido'], ['estar', 'estoy', 'estuve', 'estado'],
              ['tener', 'tengo', 'tuve', 'tenido'], ['haber', 'he', 'hube', 'habido'],
              ['hacer', 'hago', 'hice', 'hecho'], ['ir', 'voy', 'fui', 'ido'],
              ['ver', 'veo', 'vi', 'visto'], ['dar', 'doy', 'di', 'dado'],
              ['decir', 'digo', 'dije', 'dicho'], ['poder', 'puedo', 'pude', 'podido'],
              ['poner', 'pongo', 'puse', 'puesto'], ['querer', 'quiero', 'quise', 'querido'],
              ['saber', 'sé', 'supe', 'sabido'], ['venir', 'vengo', 'vine', 'venido'],
              ['salir', 'salgo', 'salí', 'salido'], ['traer', 'traigo', 'traje', 'traído'],
              ['leer', 'leo', 'leí', 'leído'], ['oír', 'oigo', 'oí', 'oído'],
              ['volver', 'vuelvo', 'volví', 'vuelto'], ['conducir', 'conduzco', 'conduje', 'conducido'],
            ] },
          ],
        },
      ],
      essentiel: [
        '**Ser** = permanent (identité, origine, heure, profession) ; **Estar** = état, lieu, situation temporaire.',
        '**Indefinido** = action datée et ponctuelle ; **Imperfecto** = décor, description, habitude.',
        '**Futur/conditionnel** : terminaisons sur l’infinitif (radicaux irréguliers : tendr-, podr-, har-…). **Gustar** s’accorde avec la chose aimée.',
      ],
      games: [
        {
          id: 'lng-es-serestar-tri', type: 'tri', title: 'Tri — Ser ou Estar ?', icon: '🗂️',
          instruction: 'Classe chaque phrase selon le bon auxiliaire.',
          categories: [{ id: 'ser', label: 'SER' }, { id: 'estar', label: 'ESTAR' }],
          items: [
            { text: 'María ___ profesora (profession)', cat: 'ser' },
            { text: 'Nosotros ___ en Madrid (lieu)', cat: 'estar' },
            { text: 'La sopa ___ muy caliente (état)', cat: 'estar' },
            { text: '___ las tres (heure)', cat: 'ser' },
            { text: 'Yo ___ cansado (état passager)', cat: 'estar' },
            { text: 'Ella ___ de España (origine)', cat: 'ser' },
          ],
        },
        {
          id: 'lng-es-presente-trou', type: 'trou', title: 'Conjugue — le présent', icon: '✏️',
          questions: [
            { text: 'Yo ____ (hablar) español.', answer: 'hablo', explain: '-ar : yo hablo.' },
            { text: 'Nosotros ____ (comer) a las dos.', answer: 'comemos', explain: '-er : nosotros comemos.' },
            { text: 'Ellos ____ (vivir) en Sevilla.', answer: 'viven', explain: '-ir : ellos viven.' },
            { text: 'Yo ____ (tener) dos hermanos.', answer: 'tengo', explain: 'tener irrégulier : tengo.' },
            { text: '¿Tú ____ (ir) al cine?', answer: 'vas', explain: 'ir : voy, vas, va…' },
          ],
        },
        {
          id: 'lng-es-pasado-tri', type: 'tri', title: 'Tri — Indefinido ou Imperfecto ?', icon: '🗂️',
          instruction: 'Classe selon le temps du passé approprié.',
          categories: [{ id: 'ind', label: 'Indefinido (daté)' }, { id: 'imp', label: 'Imperfecto (décor/habitude)' }],
          items: [
            { text: 'Ayer comí en un restaurante', cat: 'ind' },
            { text: 'Cuando era niño, jugaba al fútbol', cat: 'imp' },
            { text: 'Ella habló por teléfono a las 8', cat: 'ind' },
            { text: 'Todos los días iba a la escuela', cat: 'imp' },
            { text: 'Llegó y saludó a todos', cat: 'ind' },
            { text: 'Hacía sol y los pájaros cantaban', cat: 'imp' },
          ],
        },
        {
          id: 'lng-es-perfecto-trou', type: 'trou', title: 'Conjugue — perfecto & participes', icon: '✏️',
          questions: [
            { text: 'Hoy yo ____ (comer) paella. [perfecto]', answer: 'he comido', explain: 'Perfecto : he + participio (comido).' },
            { text: 'Participio de « hacer » = ____', answer: 'hecho', explain: 'hacer → hecho.' },
            { text: 'Participio de « escribir » = ____', answer: 'escrito', explain: 'escribir → escrito.' },
            { text: 'Nosotros ____ (ver) esa película. [perfecto]', answer: 'hemos visto', explain: 'ver → visto : hemos visto.' },
            { text: 'Cuando llegué, ellos ya ____ (salir). [pluscuamperfecto]', answer: 'habían salido', explain: 'Pluscuamperfecto : habían + participio.' },
          ],
        },
        {
          id: 'lng-es-futuro-trou', type: 'trou', title: 'Conjugue — futur & conditionnel', icon: '✏️',
          questions: [
            { text: 'Mañana yo ____ (hablar) con el jefe. [futuro]', answer: 'hablaré', explain: 'Futuro : hablaré.' },
            { text: 'Ellos ____ (tener) que estudiar. [futuro]', answer: 'tendrán', explain: 'Radical irrégulier tendr- : tendrán.' },
            { text: 'Yo ____ (hacer) los deberes esta noche. [futuro]', answer: 'haré', explain: 'Radical har- : haré.' },
            { text: 'Si tuviera dinero, ____ (viajar, yo). [condicional]', answer: 'viajaría', explain: 'Condicional : viajaría.' },
            { text: '¿____ (poder, tú) ayudarme? [condicional]', answer: 'podrías', explain: 'Radical podr- : podrías.' },
          ],
        },
        {
          id: 'lng-es-subj-qcm', type: 'qcm', title: 'QCM — subjonctif & impératif', icon: '❓',
          questions: [
            { q: '« Quiero que tú ___ aquí. »', choices: ['estés', 'estás', 'estar', 'estarás'], answer: 0, explain: 'Après « quiero que » → subjonctif : estés.' },
            { q: '« Ojalá ___ sol mañana. »', choices: ['haga', 'hace', 'hará', 'hacer'], answer: 0, explain: 'ojalá + subjonctif : haga.' },
            { q: 'Impératif négatif (tú) : « No ___ eso. »', choices: ['hagas', 'haces', 'haz', 'hagáis'], answer: 0, explain: 'Impératif négatif = subjonctif : no hagas.' },
            { q: 'On utilise le subjonctif après :', choices: ['es necesario que', 'porque', 'es verdad que', 'siempre'], answer: 0, explain: 'es necesario que + subjonctif.' },
            { q: 'Impératif affirmatif (tú) de « comer » :', choices: ['come', 'comes', 'coma', 'comed'], answer: 0, explain: 'Impératif tú : come.' },
          ],
        },
        {
          id: 'lng-es-gustar-qcm', type: 'qcm', title: 'QCM — gérondif, obligation & gustar', icon: '❓',
          questions: [
            { q: '« Me ___ los libros. »', choices: ['gustan', 'gusta', 'gusto', 'gustar'], answer: 0, explain: 'Accord avec la chose aimée (pluriel) : gustan.' },
            { q: '« A ella le ___ el chocolate. »', choices: ['gusta', 'gustan', 'gusto', 'gustas'], answer: 0, explain: 'Singulier (el chocolate) : gusta.' },
            { q: '« Il faut étudier » se dit :', choices: ['Hay que estudiar', 'Tengo estudiar', 'Es estudiar', 'Estar estudiar'], answer: 0, explain: 'Obligation impersonnelle : hay que + infinitif.' },
            { q: 'Gérondif de « hablar » :', choices: ['hablando', 'hablado', 'hablar', 'hablo'], answer: 0, explain: '-ar → -ando : hablando.' },
            { q: '« Estoy ___ (comer) ahora. »', choices: ['comiendo', 'comido', 'comer', 'como'], answer: 0, explain: 'estar + gérondif : comiendo.' },
          ],
        },
        {
          id: 'lng-es-irr-memory', type: 'memory', title: 'Memory — infinitif ↔ indefinido (yo)', icon: '🧠',
          pairs: [
            { a: 'ser / ir', b: 'fui' }, { a: 'tener', b: 'tuve' }, { a: 'hacer', b: 'hice' },
            { a: 'estar', b: 'estuve' }, { a: 'poder', b: 'pude' }, { a: 'decir', b: 'dije' },
          ],
        },
      ],
    },

    // ======================================================================
    // ESPAGNOL — VOCABULAIRE (panoplie par thème)
    // ======================================================================
    {
      id: 'lng-es-voc',
      name: 'Espagnol — Vocabulaire',
      short: 'Espagnol · vocabulaire',
      keywords: 'vocabulario español vida cotidiana familia estudios trabajo empresa economía sociedad memoria medio ambiente tecnología verbos conectores opinión',
      intro: 'Une panoplie de vocabulaire espagnol, thème par thème (à réviser en flashcards). Le dictionnaire intégré 📖 traduit aussi les phrases.',
      cours: [
        {
          h: 'La vida cotidiana y la familia',
          blocks: [{ t: 'table', head: ['Español', 'Français'], rows: [
            ['la familia', 'la famille'], ['los padres', 'les parents'], ['el hermano', 'le frère'], ['la hermana', 'la sœur'],
            ['el hijo', 'le fils'], ['la hija', 'la fille'], ['el amigo', "l'ami"], ['el vecino', 'le voisin'],
            ['la casa', 'la maison'], ['el piso', "l'appartement"], ['la habitación', 'la chambre'], ['la cocina', 'la cuisine'],
            ['la comida', 'le repas'], ['el desayuno', 'le petit-déjeuner'], ['despertarse', 'se réveiller'], ['vestirse', "s'habiller"],
            ['la tarea', 'la tâche'], ['el fin de semana', 'le week-end'], ['las vacaciones', 'les vacances'], ['el ocio', 'les loisirs'],
            ['pasar tiempo', 'passer du temps'], ['la vida cotidiana', 'la vie quotidienne'], ['juntos', 'ensemble'], ['la relación', 'la relation'],
          ] }],
        },
        {
          h: 'Estudios y trabajo',
          blocks: [{ t: 'table', head: ['Español', 'Français'], rows: [
            ['el colegio', "l'école"], ['el instituto', 'le lycée'], ['el alumno', "l'élève"], ['el profesor', 'le professeur'],
            ['la asignatura', 'la matière'], ['los deberes', 'les devoirs'], ['el examen', "l'examen"], ['la nota', 'la note'],
            ['el título', 'le diplôme'], ['la universidad', "l'université"], ['aprender', 'apprendre'], ['estudiar', 'étudier'],
            ['aprobar', 'réussir (un examen)'], ['suspender', 'échouer'], ['la competencia', 'la compétence'], ['los conocimientos', 'les connaissances'],
            ['la formación', 'la formation'], ['el empleo', "l'emploi"], ['el trabajo', 'le travail'], ['la carrera', 'la carrière'],
            ['las prácticas', 'le stage'], ['la entrevista', "l'entretien"], ['el compañero', 'le collègue'], ['el sueldo', 'le salaire'],
            ['contratar', 'embaucher'], ['el paro', 'le chômage'],
          ] }],
        },
        {
          h: 'La empresa y la economía (STMG)',
          blocks: [{ t: 'table', head: ['Español', 'Français'], rows: [
            ['la empresa', "l'entreprise"], ['los negocios', 'les affaires'], ['el volumen de negocio', "le chiffre d'affaires"],
            ['el beneficio', 'le bénéfice'], ['la pérdida', 'la perte'], ['el balance', 'le bilan'], ['la tesorería', 'la trésorerie'],
            ['el coste', 'le coût'], ['los ingresos', 'les revenus'], ['el presupuesto', 'le budget'], ['la inversión', "l'investissement"],
            ['el préstamo', "l'emprunt"], ['el accionista', "l'actionnaire"], ['el mercado', 'le marché'], ['la cuota de mercado', 'la part de marché'],
            ['el cliente', 'le client'], ['el proveedor', 'le fournisseur'], ['la marca', 'la marque'], ['el crecimiento', 'la croissance'],
            ['la estrategia', 'la stratégie'], ['la competencia', 'la concurrence'], ['el producto', 'le produit'], ['la venta', 'la vente'],
            ['la oferta', "l'offre"], ['la demanda', 'la demande'], ['el consumidor', 'le consommateur'],
          ] }],
        },
        {
          h: 'Sociedad, memoria y política',
          blocks: [{ t: 'table', head: ['Español', 'Français'], rows: [
            ['la sociedad', 'la société'], ['el gobierno', 'le gouvernement'], ['las elecciones', 'les élections'], ['votar', 'voter'],
            ['el ciudadano', 'le citoyen'], ['el derecho', 'le droit'], ['la ley', 'la loi'], ['la igualdad', "l'égalité"],
            ['la libertad', 'la liberté'], ['la desigualdad', "l'inégalité"], ['la pobreza', 'la pauvreté'], ['la inmigración', "l'immigration"],
            ['la frontera', 'la frontière'], ['la manifestación', 'la manifestation'], ['la dictadura', 'la dictature'], ['la democracia', 'la démocratie'],
            ['la memoria', 'la mémoire'], ['el exilio', "l'exil"], ['el patrimonio', 'le patrimoine'], ['la guerra', 'la guerre'],
            ['la paz', 'la paix'], ['los medios', 'les médias'], ['las noticias', 'les informations'], ['la huelga', 'la grève'],
          ] }],
        },
        {
          h: 'Medio ambiente y ciencia',
          blocks: [{ t: 'table', head: ['Español', 'Français'], rows: [
            ['el medio ambiente', "l'environnement"], ['el cambio climático', 'le changement climatique'],
            ['el calentamiento global', 'le réchauffement climatique'], ['la contaminación', 'la pollution'], ['los residuos', 'les déchets'],
            ['reciclar', 'recycler'], ['las energías renovables', 'les énergies renouvelables'], ['la huella de carbono', "l'empreinte carbone"],
            ['sostenible', 'durable'], ['contaminar', 'polluer'], ['la sequía', 'la sécheresse'], ['la inundación', "l'inondation"],
            ['el bosque', 'la forêt'], ['la naturaleza', 'la nature'], ['proteger', 'protéger'], ['reducir', 'réduire'],
            ['la energía', "l'énergie"], ['el recurso', 'la ressource'], ['la biodiversidad', 'la biodiversité'], ['la investigación', 'la recherche'],
            ['el descubrimiento', 'la découverte'], ['la ciencia', 'la science'], ['la especie', "l'espèce"], ['el planeta', 'la planète'],
          ] }],
        },
        {
          h: 'Tecnología e internet',
          blocks: [{ t: 'table', head: ['Español', 'Français'], rows: [
            ['la tecnología', 'la technologie'], ['el ordenador', "l'ordinateur"], ['el móvil', 'le portable'], ['la pantalla', "l'écran"],
            ['la red', 'le réseau'], ['las redes sociales', 'les réseaux sociaux'], ['la página web', 'le site web'], ['la aplicación', "l'application"],
            ['los datos', 'les données'], ['la privacidad', 'la vie privée'], ['la contraseña', 'le mot de passe'], ['descargar', 'télécharger'],
            ['en línea', 'en ligne'], ['el usuario', "l'utilisateur"], ['la inteligencia artificial', "l'intelligence artificielle"], ['el programa', 'le logiciel'],
            ['el aparato', "l'appareil"], ['navegar', 'naviguer'], ['la ciberseguridad', 'la cybersécurité'], ['actualizar', 'mettre à jour'],
            ['digital', 'numérique'], ['la adicción', 'la dépendance'], ['conectarse', 'se connecter'], ['compartir', 'partager'],
          ] }],
        },
        {
          h: 'Verbos frecuentes',
          blocks: [{ t: 'table', head: ['Español', 'Français'], rows: [
            ['ser', 'être'], ['estar', 'être'], ['tener', 'avoir'], ['haber', 'avoir (auxiliaire)'], ['hacer', 'faire'],
            ['ir', 'aller'], ['poder', 'pouvoir'], ['querer', 'vouloir, aimer'], ['saber', 'savoir'], ['decir', 'dire'],
            ['ver', 'voir'], ['dar', 'donner'], ['poner', 'mettre'], ['salir', 'sortir'], ['venir', 'venir'],
            ['llegar', 'arriver'], ['hablar', 'parler'], ['comer', 'manger'], ['vivir', 'vivre'], ['trabajar', 'travailler'],
            ['comprar', 'acheter'], ['vender', 'vendre'], ['empezar', 'commencer'], ['terminar', 'finir'], ['pensar', 'penser'],
            ['entender', 'comprendre'],
          ] }],
        },
        {
          h: 'Conectores y expresar la opinión',
          blocks: [{ t: 'table', head: ['Español', 'Français'], rows: [
            ['primero', "d'abord"], ['luego', 'ensuite'], ['después', 'après'], ['por fin', 'enfin'], ['además', 'de plus'],
            ['sin embargo', 'cependant'], ['por lo tanto', 'donc'], ['porque', 'parce que'], ['aunque', 'bien que'],
            ['por un lado', "d'une part"], ['por otro lado', "d'autre part"], ['por ejemplo', 'par exemple'], ['en mi opinión', 'à mon avis'],
            ['creo que', 'je pense que'], ['estoy de acuerdo', "je suis d'accord"], ['no estoy de acuerdo', "je ne suis pas d'accord"],
            ['en resumen', 'en résumé'], ['en conclusión', 'en conclusion'], ['es decir', "c'est-à-dire"], ['mientras que', 'tandis que'],
            ['según', 'selon'], ['de hecho', 'en fait'], ['en cambio', 'en revanche'], ['es verdad que', "il est vrai que"],
          ] }],
        },
      ],
      essentiel: [
        'Réviser le vocabulaire **par thème** et le voir en **contexte** (le dictionnaire intégré traduit aussi les phrases).',
        'Vocabulaire **STMG** utile : la empresa (entreprise), el paro (chômage), el sueldo (salaire), el préstamo (emprunt), la cuota de mercado (part de marché).',
        'Bien distinguer les **faux-amis** : *el paro* = le chômage (pas « le pari »), *sensible* = sensible ≠ *sensato* = sensé.',
      ],
      games: [
        {
          id: 'lng-es-voc-daily-memory', type: 'memory', title: 'Memory — vida cotidiana', icon: '🧠',
          pairs: [
            { a: 'la familia', b: 'la famille' }, { a: 'el vecino', b: 'le voisin' }, { a: 'la comida', b: 'le repas' },
            { a: 'la habitación', b: 'la chambre' }, { a: 'el fin de semana', b: 'le week-end' }, { a: 'el amigo', b: "l'ami" },
          ],
        },
        {
          id: 'lng-es-voc-empresa-qcm', type: 'qcm', title: 'QCM — la empresa', icon: '❓',
          questions: [
            { q: '« el paro » =', choices: ['le chômage', 'le salaire', 'le marché', 'le client'], answer: 0, explain: 'el paro = le chômage.' },
            { q: '« la empresa » =', choices: ["l'entreprise", 'le produit', 'la vente', 'le patron'], answer: 0, explain: 'la empresa = l’entreprise.' },
            { q: '« el préstamo » =', choices: ["l'emprunt", 'le bénéfice', 'le budget', 'le prêt-à-porter'], answer: 0, explain: 'el préstamo = l’emprunt, le prêt.' },
            { q: '« la cuota de mercado » =', choices: ['la part de marché', 'le marché', 'la marque', 'la demande'], answer: 0, explain: 'la cuota de mercado = la part de marché.' },
            { q: '« el proveedor » =', choices: ['le fournisseur', 'le client', 'le concurrent', 'le vendeur'], answer: 0, explain: 'el proveedor = le fournisseur.' },
          ],
        },
        {
          id: 'lng-es-voc-medio-assoc', type: 'association', title: 'Association — medio ambiente', icon: '🔗',
          pairs: [
            { left: 'el cambio climático', right: 'le changement climatique' }, { left: 'los residuos', right: 'les déchets' },
            { left: 'la sequía', right: 'la sécheresse' }, { left: 'las energías renovables', right: 'les énergies renouvelables' },
            { left: 'el medio ambiente', right: "l'environnement" },
          ],
        },
        {
          id: 'lng-es-voc-verbos-memory', type: 'memory', title: 'Memory — verbes fréquents', icon: '🧠',
          pairs: [
            { a: 'tener', b: 'avoir' }, { a: 'hacer', b: 'faire' }, { a: 'poder', b: 'pouvoir' },
            { a: 'querer', b: 'vouloir' }, { a: 'saber', b: 'savoir' }, { a: 'decir', b: 'dire' },
          ],
        },
      ],
    },
  ],
}
