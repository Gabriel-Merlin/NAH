// LANGUES VIVANTES — Anglais (LVA), Espagnol (LVB) + les 8 axes culturels.
export const langues = {
  id: 'langues',
  name: 'Langues (Anglais / Espagnol)',
  short: 'Langues',
  icon: '🗣️',
  color: '#db2777',
  tagline: 'Régularité avant tout — grammaire, vocabulaire, oral.',
  chapters: [
    // ---------------------------- ANGLAIS ----------------------------
    {
      id: 'lng-en-gram',
      name: 'Anglais — Grammaire essentielle',
      short: 'Anglais · grammaire',
      keywords: 'present perfect preterit modals conditionnels passive comparatifs reported speech tenses',
      cours: [
        {
          h: 'Les temps',
          points: [
            'Present perfect (have/has + participe passé) : lien passé-présent (for, since, ever, already, yet).',
            'Preterit : action passée datée et terminée (« We went there in 2019 »).',
            'Present continuous : action en cours (« They are working now »).',
            'Past perfect (had + participe passé) : antériorité dans le passé.',
            'Futur : will (prévision) / be going to (intention).',
          ],
        },
        {
          h: 'Modaux, conditionnels, passif',
          points: [
            'Modaux (+ base verbale) : can/could, may/might, must, have to, should, would.',
            'Conditionnel type 1 : If + present, will + BV. Type 2 : If + preterit, would + BV. Type 3 : If + past perfect, would have + PP.',
            'Voix passive : be (au temps voulu) + participe passé (« The report was written by the manager »).',
            'Comparatifs : cheaper / more expensive ; irréguliers good→better→best, bad→worse→worst.',
          ],
        },
      ],
      formulas: [
        'Present perfect = have/has + participe passé',
        'Conditionnel 2 : If + preterit, would + base verbale',
        'Passif = be + participe passé',
      ],
      essentiel: [
        '**Present perfect** (have/has + PP) = lien passé-présent (for, since, yet) ; **preterit** = action passée datée et terminée.',
        '**Modaux** + base verbale ; **conditionnels** : type 1 (present → will), type 2 (preterit → would), type 3 (past perfect → would have).',
        '**Passif** = be + participe passé ; **comparatifs** (cheaper / more expensive ; good → better → best).',
      ],
      games: [
        {
          id: 'lng-en-gram-trou',
          type: 'trou',
          title: 'Texte à trous — Conjugaison',
          icon: '✏️',
          questions: [
            { text: 'I ____ (live) in this city since 2015.', answer: 'have lived', explain: 'Present perfect + since : « I have lived ».' },
            { text: 'Yesterday, they ____ (go) to the cinema.', answer: 'went', explain: 'Preterit (action datée) : « went ».' },
            { text: 'If she ____ (study) more, she would pass.', answer: 'studied', explain: 'Conditionnel type 2 : if + preterit → « studied ».' },
            { text: 'The email ____ (send) by the assistant this morning.', answer: 'was sent', explain: 'Passif au preterit : « was sent ».' },
          ],
        },
        {
          id: 'lng-en-gram-qcm',
          type: 'qcm',
          title: 'QCM — Grammaire anglaise',
          icon: '❓',
          questions: [
            {
              q: 'Which tense: "I ___ London." (bilan / expérience, avec already)',
              choices: ['have already visited', 'visited', 'am visiting', 'will visit'],
              answer: 0,
              explain: 'Le present perfect (have + PP) exprime un bilan/une expérience (already, ever, yet).',
            },
            {
              q: 'Conditionnel type 2 : "If I ___ rich, I would travel."',
              choices: ['were', 'am', 'will be', 'had been'],
              answer: 0,
              explain: 'Type 2 (irréel du présent) : If + preterit → « were ».',
            },
            {
              q: 'Passif : "The report ___ by the manager."',
              choices: ['was written', 'wrote', 'has write', 'is writing'],
              answer: 0,
              explain: 'Passif = be + participe passé : « was written ».',
            },
            {
              q: 'Discours rapporté de « I will call you tomorrow » :',
              choices: [
                'He said he would call me the following day',
                'He said he will call me tomorrow',
                'He says he calls me tomorrow',
                'He told will call tomorrow',
              ],
              answer: 0,
              explain: 'Recul d’un temps : will → would ; tomorrow → the following/next day.',
            },
            {
              q: 'Comparatif irrégulier de "good" :',
              choices: ['better', 'gooder', 'more good', 'best'],
              answer: 0,
              explain: 'good → better → the best.',
            },
          ],
        },
        {
          id: 'lng-en-gram-assoc',
          type: 'association',
          title: 'Association — Temps ↔ emploi',
          icon: '🔗',
          pairs: [
            { left: 'Present perfect', right: 'Lien passé-présent (for, since, already)' },
            { left: 'Preterit', right: 'Action passée datée et terminée' },
            { left: 'Past perfect', right: 'Antériorité dans le passé (had + PP)' },
            { left: 'Be going to', right: 'Intention, projet' },
          ],
        },
        {
          id: 'lng-en-gram-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'Après un modal, on met la base verbale (sans « to »).', answer: true, explain: 'Vrai : can go, must go… (pas de « to », pas de « -s »).' },
            { statement: 'Le present perfect se forme avec « had + participe passé ».', answer: false, explain: 'Faux : c’est « have/has + participe passé » (had = past perfect).' },
            { statement: 'Le passif se construit avec « be + participe passé ».', answer: true, explain: 'Vrai : The report was written…' },
          ],
        },
      ],
    },
    {
      id: 'lng-en-voc',
      name: 'Anglais — Vocabulaire (axes & ETLV / management)',
      short: 'Anglais · vocabulaire',
      keywords: 'vocabulaire axes ETLV management turnover balance sheet cash flow break-even shareholders CSR',
      cours: [
        {
          h: 'Vocabulaire ETLV / management',
          points: [
            'turnover = chiffre d’affaires ; balance sheet = bilan ; cash flow = trésorerie.',
            'break-even point = seuil de rentabilité ; shareholders = actionnaires ; loan = emprunt.',
            'stakeholders = parties prenantes ; CSR = RSE ; carbon footprint = empreinte carbone.',
          ],
        },
        {
          h: 'Vocabulaire par axes',
          points: [
            'Identités & échanges : migration, border, diversity, discrimination, equality.',
            'Innovations & responsabilité : technology, data, privacy, sustainability, ethics.',
            'Citoyenneté & mondes virtuels : social media, fake news, surveillance, digital footprint.',
          ],
        },
      ],
      formulas: ['Astuce : ficher le vocabulaire par axe et le réviser en flashcards.'],
      essentiel: [
        'Vocabulaire **management / ETLV** : turnover = CA, balance sheet = bilan, cash flow = trésorerie, break-even = seuil de rentabilité, shareholders = actionnaires, CSR = RSE.',
        'Vocabulaire **par axe** : identités & échanges, innovations & responsabilité, citoyenneté & mondes virtuels.',
        '**Méthode** : ficher le vocabulaire par axe et le mémoriser en flashcards.',
      ],
      games: [
        {
          id: 'lng-en-voc-memory',
          type: 'memory',
          title: 'Memory — Anglais ↔ français (management)',
          icon: '🧠',
          pairs: [
            { a: 'turnover', b: 'chiffre d’affaires' },
            { a: 'balance sheet', b: 'bilan' },
            { a: 'cash flow', b: 'trésorerie' },
            { a: 'break-even point', b: 'seuil de rentabilité' },
            { a: 'shareholders', b: 'actionnaires' },
            { a: 'loan', b: 'emprunt' },
          ],
        },
        {
          id: 'lng-en-voc-flash',
          type: 'flashcard',
          title: 'Flashcards — Vocabulaire ETLV',
          icon: '🃏',
          cards: [
            { front: 'stakeholders', back: 'parties prenantes' },
            { front: 'CSR (Corporate Social Responsibility)', back: 'RSE' },
            { front: 'carbon footprint', back: 'empreinte carbone' },
            { front: 'break-even point', back: 'seuil de rentabilité' },
            { front: 'market share', back: 'part de marché' },
            { front: 'sustainable development', back: 'développement durable' },
          ],
        },
        {
          id: 'lng-en-voc-qcm',
          type: 'qcm',
          title: 'QCM — Vocabulaire',
          icon: '❓',
          questions: [
            {
              q: '« turnover » se traduit par…',
              choices: ['chiffre d’affaires', 'bénéfice net', 'emprunt', 'actionnaire'],
              answer: 0,
              explain: 'turnover = chiffre d’affaires.',
            },
            {
              q: '« balance sheet » signifie…',
              choices: ['bilan', 'compte en banque', 'trésorerie', 'budget'],
              answer: 0,
              explain: 'balance sheet = bilan.',
            },
            {
              q: '« break-even point » correspond à…',
              choices: ['seuil de rentabilité', 'point de vente', 'marge brute', 'coût fixe'],
              answer: 0,
              explain: 'break-even point = seuil de rentabilité.',
            },
            {
              q: '« stakeholders » désigne…',
              choices: ['les parties prenantes', 'les actionnaires seulement', 'les fournisseurs', 'les clients'],
              answer: 0,
              explain: 'stakeholders = parties prenantes (plus large que shareholders).',
            },
          ],
        },
        {
          id: 'lng-en-voc-assoc',
          type: 'association',
          title: 'Association — EN ↔ FR',
          icon: '🔗',
          pairs: [
            { left: 'cash flow', right: 'trésorerie' },
            { left: 'shareholders', right: 'actionnaires' },
            { left: 'loan', right: 'emprunt' },
            { left: 'profit / loss', right: 'bénéfice / perte' },
            { left: 'growth', right: 'croissance' },
          ],
        },
      ],
    },
    // ---------------------------- ESPAGNOL ----------------------------
    {
      id: 'lng-es-gram',
      name: 'Espagnol — Grammaire essentielle',
      short: 'Espagnol · grammaire',
      keywords: 'ser estar indefinido imperfecto futuro subjuntivo gerundio obligación gustar',
      cours: [
        {
          h: 'Ser / Estar & les passés',
          points: [
            'Ser = caractéristique permanente, identité, heure, origine, profession.',
            'Estar = état, lieu, situation temporaire.',
            'Indefinido = action passée ponctuelle et datée ; Imperfecto = description, habitude, arrière-plan.',
          ],
        },
        {
          h: 'Futur, obligation, gustar',
          points: [
            'Futur : infinitif + -é, -ás, -á, -emos, -éis, -án (irréguliers : tener→tendré, hacer→haré).',
            'Obligation : tener que + inf. (personnelle) ; hay que + inf. (impersonnelle) ; deber + inf.',
            'Tournures type gustar : « Me gusta el cine / Me gustan los libros » (accord avec la chose aimée).',
          ],
        },
      ],
      formulas: [
        'Ser = permanent · Estar = état/lieu temporaire',
        'Indefinido = action datée · Imperfecto = décor/habitude',
      ],
      essentiel: [
        '**Ser** = permanent (identité, origine, heure, profession) ; **Estar** = état, lieu, situation temporaire.',
        '**Indefinido** = action passée datée et ponctuelle ; **Imperfecto** = description, habitude, arrière-plan.',
        '**Futur** (infinitif + terminaisons) ; **obligation** : tener que / hay que / deber ; tournures en **gustar** (accord avec la chose aimée).',
      ],
      games: [
        {
          id: 'lng-es-gram-tri-serestar',
          type: 'tri',
          title: 'Tri — Ser ou Estar ?',
          icon: '🗂️',
          instruction: 'Classe chaque phrase selon le bon auxiliaire.',
          categories: [
            { id: 'ser', label: 'SER' },
            { id: 'estar', label: 'ESTAR' },
          ],
          items: [
            { text: 'María ___ profesora (profession)', cat: 'ser' },
            { text: 'Nosotros ___ en Madrid (lieu)', cat: 'estar' },
            { text: 'La sopa ___ muy caliente (état)', cat: 'estar' },
            { text: 'Son ___ las tres (heure)', cat: 'ser' },
            { text: 'Estoy ___ cansado (état passager)', cat: 'estar' },
            { text: 'Es ___ de España (origine)', cat: 'ser' },
          ],
        },
        {
          id: 'lng-es-gram-tri-pasado',
          type: 'tri',
          title: 'Tri — Indefinido ou Imperfecto ?',
          icon: '🗂️',
          instruction: 'Classe selon le temps du passé approprié.',
          categories: [
            { id: 'ind', label: 'Indefinido (action datée)' },
            { id: 'imp', label: 'Imperfecto (décor / habitude)' },
          ],
          items: [
            { text: 'Ayer comí en un restaurante', cat: 'ind' },
            { text: 'Cuando era niño, jugaba al fútbol', cat: 'imp' },
            { text: 'Ella habló por teléfono a las 8', cat: 'ind' },
            { text: 'Todos los días comía a mediodía', cat: 'imp' },
            { text: 'Llegó y saludó a todos', cat: 'ind' },
          ],
        },
        {
          id: 'lng-es-gram-trou',
          type: 'trou',
          title: 'Texte à trous — Ser/Estar & passés',
          icon: '✏️',
          questions: [
            { text: 'María ____ profesora.', answer: 'es', explain: 'Profession → ser : « es ».' },
            { text: 'La sopa ____ muy caliente.', answer: 'está', alt: ['esta'], explain: 'État temporaire → estar : « está ».' },
            { text: 'Ayer ____ (comer, yo) en un restaurante.', answer: 'comí', alt: ['comi'], explain: 'Action datée → indefinido : « comí ».' },
            { text: 'Mañana ____ (hablar, yo) con el director.', answer: 'hablaré', alt: ['hablare'], explain: 'Futur : « hablaré ».' },
          ],
        },
        {
          id: 'lng-es-gram-qcm',
          type: 'qcm',
          title: 'QCM — Grammaire espagnole',
          icon: '❓',
          questions: [
            {
              q: '« Nosotros ___ en Madrid esta semana. »',
              choices: ['estamos', 'somos', 'estar', 'seremos'],
              answer: 0,
              explain: 'Lieu / situation temporaire → estar : « estamos ».',
            },
            {
              q: '« Il faut étudier » se dit…',
              choices: ['Hay que estudiar', 'Tengo estudiar', 'Es estudiar', 'Estar estudiar'],
              answer: 0,
              explain: 'Obligation impersonnelle : hay que + infinitif.',
            },
            {
              q: '« J’aime les langues » :',
              choices: ['Me gustan las lenguas', 'Me gusta las lenguas', 'Yo gusto las lenguas', 'Me gustar lenguas'],
              answer: 0,
              explain: 'Accord avec la chose aimée (pluriel) : « Me gustan ».',
            },
            {
              q: 'L’imperfecto sert surtout à…',
              choices: ['décrire / exprimer une habitude', 'dater une action ponctuelle', 'donner un ordre', 'poser une question'],
              answer: 0,
              explain: 'Imperfecto = décor, description, habitude ; indefinido = action datée.',
            },
          ],
        },
      ],
    },
    {
      id: 'lng-es-voc',
      name: 'Espagnol — Vocabulaire',
      short: 'Espagnol · vocabulaire',
      keywords: 'vocabulario migración memoria trabajo empresa paro sueldo medio ambiente',
      cours: [
        {
          h: 'Vocabulaire par axes',
          points: [
            'Identités & échanges : la migración, la frontera, el exilio, la integración, las raíces.',
            'Territoire & mémoire : la memoria, la dictadura, la democracia, el patrimonio.',
            'Monde du travail (utile en STMG) : la empresa, el trabajo, el paro (chômage), el sueldo (salaire), el cliente.',
          ],
        },
      ],
      formulas: ['Astuce : WordReference / Linguee pour voir les mots en contexte.'],
      essentiel: [
        'Vocabulaire par **axes** : migration & échanges, territoire & mémoire, monde du travail.',
        'Utile en STMG : **la empresa** (entreprise), **el trabajo**, **el paro** (chômage), **el sueldo** (salaire), **el cliente**.',
        '**Méthode** : voir les mots en contexte (WordReference / Linguee) et les fixer en flashcards.',
      ],
      games: [
        {
          id: 'lng-es-voc-memory',
          type: 'memory',
          title: 'Memory — Espagnol ↔ français',
          icon: '🧠',
          pairs: [
            { a: 'el paro', b: 'le chômage' },
            { a: 'el sueldo', b: 'le salaire' },
            { a: 'la empresa', b: "l'entreprise" },
            { a: 'el cliente', b: 'le client' },
            { a: 'la frontera', b: 'la frontière' },
            { a: 'el medio ambiente', b: "l'environnement" },
          ],
        },
        {
          id: 'lng-es-voc-flash',
          type: 'flashcard',
          title: 'Flashcards — Vocabulaire',
          icon: '🃏',
          cards: [
            { front: 'la migración', back: 'la migration' },
            { front: 'la memoria', back: 'la mémoire' },
            { front: 'la democracia', back: 'la démocratie' },
            { front: 'el cambio climático', back: 'le changement climatique' },
            { front: 'las raíces', back: 'les racines' },
            { front: 'el mercado', back: 'le marché' },
          ],
        },
        {
          id: 'lng-es-voc-qcm',
          type: 'qcm',
          title: 'QCM — Vocabulaire espagnol',
          icon: '❓',
          questions: [
            {
              q: '« el paro » signifie…',
              choices: ['le chômage', 'le salaire', 'le marché', 'le client'],
              answer: 0,
              explain: 'el paro = le chômage ; el sueldo = le salaire.',
            },
            {
              q: '« la empresa » se traduit par…',
              choices: ["l'entreprise", 'le patron', 'le produit', 'la vente'],
              answer: 0,
              explain: 'la empresa = l’entreprise.',
            },
            {
              q: '« el medio ambiente » désigne…',
              choices: ["l'environnement", 'le milieu social', 'la moitié', 'le climat froid'],
              answer: 0,
              explain: 'el medio ambiente = l’environnement.',
            },
            {
              q: '« la memoria » se rapporte à l’axe…',
              choices: ['Territoire et mémoire', 'Innovations scientifiques', 'Art et pouvoir', 'Sport'],
              answer: 0,
              explain: 'Vocabulaire de l’axe « Territoire et mémoire » (memoria, dictadura, patrimonio).',
            },
          ],
        },
        {
          id: 'lng-es-voc-assoc',
          type: 'association',
          title: 'Association — ES ↔ FR',
          icon: '🔗',
          pairs: [
            { left: 'el trabajo', right: 'le travail' },
            { left: 'la dictadura', right: 'la dictature' },
            { left: 'el patrimonio', right: 'le patrimoine' },
            { left: 'la integración', right: "l'intégration" },
            { left: 'las energías renovables', right: 'les énergies renouvelables' },
          ],
        },
      ],
    },
    // ---------------------------- LES 8 AXES ----------------------------
    {
      id: 'lng-axes',
      name: 'Les 8 axes culturels',
      short: '8 axes culturels',
      keywords: 'axes culturels identités échanges espace privé public art pouvoir citoyenneté fictions innovations diversité mémoire',
      cours: [
        {
          h: 'Programme « Gestes fondateurs et mondes en mouvement »',
          points: [
            '1. Identités et échanges — 2. Espace privé et espace public.',
            '3. Art et pouvoir — 4. Citoyenneté et mondes virtuels.',
            '5. Fictions et réalités — 6. Innovations scientifiques et responsabilité.',
            '7. Diversité et inclusion — 8. Territoire et mémoire.',
          ],
        },
        {
          h: 'Oral & activités langagières',
          points: [
            '6 activités : CO, CE, EO en continu, EO en interaction, EE, et médiation.',
            'Oral (référence) : 20 min dont 10 de préparation ; choix entre 3 axes.',
          ],
        },
      ],
      formulas: ['Session 2026 : le programme à 8 axes fait foi.'],
      essentiel: [
        '**8 axes culturels** : identités & échanges · espace privé/public · art & pouvoir · citoyenneté & mondes virtuels · fictions & réalités · innovations & responsabilité · diversité & inclusion · territoire & mémoire.',
        '**6 activités langagières** : CO, CE, EO en continu, EO en interaction, EE, médiation.',
        '**Oral** : 20 min dont 10 de préparation ; choix entre 3 axes.',
      ],
      games: [
        {
          id: 'lng-axes-qcm',
          type: 'qcm',
          title: 'QCM — Les 8 axes',
          icon: '❓',
          questions: [
            {
              q: 'Combien d’axes culturels pour la session 2026 ?',
              choices: ['8', '6', '4', '10'],
              answer: 0,
              explain: 'Le programme en vigueur pour 2026 compte 8 axes culturels.',
            },
            {
              q: 'La « médiation » consiste à…',
              choices: [
                'reformuler / traduire / expliquer un document à quelqu’un',
                'écrire une dissertation',
                'apprendre une liste par cœur',
                'passer un test de grammaire',
              ],
              answer: 0,
              explain: 'La médiation = reformuler, traduire ou expliquer un document à autrui.',
            },
            {
              q: '« Fake news » et « surveillance » relèvent surtout de l’axe…',
              choices: ['Citoyenneté et mondes virtuels', 'Art et pouvoir', 'Territoire et mémoire', 'Espace privé et public'],
              answer: 0,
              explain: 'Ces notions relèvent de « Citoyenneté et mondes virtuels ».',
            },
            {
              q: 'L’ETLV en STMG se fait en…',
              choices: ['anglais (LVA)', 'espagnol (LVB)', 'français', 'allemand uniquement'],
              answer: 0,
              explain: 'L’ETLV se déroule en LVA (anglais), à partir d’une organisation.',
            },
          ],
        },
        {
          id: 'lng-axes-flash',
          type: 'flashcard',
          title: 'Flashcards — Les 8 axes',
          icon: '🃏',
          cards: [
            { front: 'Axe 1', back: 'Identités et échanges' },
            { front: 'Axe 3', back: 'Art et pouvoir' },
            { front: 'Axe 4', back: 'Citoyenneté et mondes virtuels' },
            { front: 'Axe 6', back: 'Innovations scientifiques et responsabilité' },
            { front: 'Axe 7', back: 'Diversité et inclusion' },
            { front: 'Axe 8', back: 'Territoire et mémoire' },
          ],
        },
        {
          id: 'lng-axes-ordre',
          type: 'ordre',
          title: 'Remise en ordre — Les 4 premiers axes',
          icon: '🔢',
          instruction: 'Remets les quatre premiers axes dans l’ordre du programme.',
          steps: [
            'Identités et échanges',
            'Espace privé et espace public',
            'Art et pouvoir',
            'Citoyenneté et mondes virtuels',
          ],
          explain: 'Les axes 1 à 4 dans l’ordre officiel.',
        },
      ],
    },
  ],
}
