// ÉCONOMIE — thèmes 6 à 9.
export const economie = {
  id: 'economie',
  name: 'Économie',
  short: 'Économie',
  icon: '📈',
  color: '#dc2626',
  tagline: 'Exploiter des données chiffrées puis argumenter.',
  chapters: [
    {
      id: 'eco-t6',
      name: 'Thème 6 — Le rôle de l’État',
      short: 'Rôle de l’État',
      keywords: 'Musgrave allocation redistribution stabilisation défaillances marché externalités biens collectifs politique budgétaire monétaire',
      cours: [
        {
          h: 'Les fonctions de l’État (Musgrave)',
          points: [
            '**Allocation** : produire des biens collectifs, corriger le marché.',
            '**Redistribution** : réduire les inégalités (prélèvements et prestations).',
            '**Stabilisation** : agir sur la conjoncture.',
          ],
        },
        {
          h: 'Défaillances et politiques',
          points: [
            'Défaillances du marché : externalités, biens collectifs, asymétries d’information, monopole.',
            'Politiques : conjoncturelle (**budgétaire**, **monétaire**) et **structurelle**.',
            'Budget : dépenses publiques, prélèvements obligatoires, déficit, dette publique.',
          ],
        },
      ],
      formulas: ['Fonctions de l’État (Musgrave) : allocation · redistribution · stabilisation'],
      games: [
        {
          id: 'eco-t6-qcm',
          type: 'qcm',
          title: 'QCM — Le rôle de l’État',
          icon: '❓',
          questions: [
            {
              q: 'Réduire les inégalités par les impôts et les prestations, c’est la fonction de…',
              choices: ['redistribution', 'allocation', 'stabilisation', 'spéculation'],
              answer: 0,
              explain: 'La redistribution (Musgrave) réduit les inégalités.',
            },
            {
              q: 'La pollution est un exemple de…',
              choices: ['externalité (défaillance du marché)', 'bien collectif pur', 'redistribution', 'politique monétaire'],
              answer: 0,
              explain: 'La pollution est une externalité négative, une défaillance du marché.',
            },
            {
              q: 'Agir sur les taux d’intérêt relève de la politique…',
              choices: ['monétaire', 'structurelle', 'budgétaire', 'commerciale'],
              answer: 0,
              explain: 'La politique monétaire agit via la monnaie et les taux ; la budgétaire via dépenses/recettes.',
            },
            {
              q: 'Produire des biens collectifs correspond à la fonction d’…',
              choices: ['allocation', 'redistribution', 'stabilisation', 'exportation'],
              answer: 0,
              explain: 'L’allocation : produire des biens collectifs et corriger le marché.',
            },
          ],
        },
        {
          id: 'eco-t6-assoc',
          type: 'association',
          title: 'Association — Fonction ↔ objectif',
          icon: '🔗',
          pairs: [
            { left: 'Allocation', right: 'Produire des biens collectifs' },
            { left: 'Redistribution', right: 'Réduire les inégalités' },
            { left: 'Stabilisation', right: 'Agir sur la conjoncture' },
            { left: 'Politique monétaire', right: 'Agir sur la monnaie et les taux' },
          ],
        },
        {
          id: 'eco-t6-flash',
          type: 'flashcard',
          title: 'Flashcards — État & marché',
          icon: '🃏',
          cards: [
            { front: 'Bien collectif', back: 'Bien non rival et non excluable (ex. éclairage public).' },
            { front: 'Externalité', back: 'Effet d’une activité sur un tiers, non pris en compte par le marché.' },
            { front: 'Politique budgétaire', back: 'Utiliser dépenses et recettes publiques pour agir sur l’économie.' },
            { front: 'Dette publique', back: 'Ensemble des emprunts accumulés par l’État.' },
          ],
        },
        {
          id: 'eco-t6-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'Les asymétries d’information sont une défaillance du marché.', answer: true, explain: 'Vrai, au même titre que les externalités et les biens collectifs.' },
            { statement: 'La politique monétaire consiste à voter le budget de l’État.', answer: false, explain: 'Faux : c’est la politique budgétaire. La monétaire agit sur la monnaie et les taux.' },
            { statement: 'La stabilisation vise à agir sur la conjoncture.', answer: true, explain: 'Vrai : c’est l’une des trois fonctions de Musgrave.' },
          ],
        },
      ],
    },
    {
      id: 'eco-t7',
      name: 'Thème 7 — Emploi et chômage',
      short: 'Emploi & chômage',
      keywords: 'marché du travail population active taux d’activité taux d’emploi taux de chômage conjoncturel structurel frictionnel',
      cours: [
        {
          h: 'Le marché du travail',
          points: [
            'Offre de travail (ménages) / demande de travail (entreprises) ; salaire d’équilibre.',
            'Indicateurs : population active, taux d’activité, taux d’emploi, taux de chômage.',
          ],
        },
        {
          h: 'Chômage et politiques',
          points: [
            'Types de chômage : conjoncturel, structurel, frictionnel.',
            'Politiques de l’emploi : baisse du coût du travail, formation, flexibilité (actives/passives).',
          ],
        },
      ],
      formulas: [
        'Population active = personnes en emploi + chômeurs',
        'Taux d’activité = population active / population en âge de travailler',
        'Taux de chômage = chômeurs / population active',
      ],
      games: [
        {
          id: 'eco-t7-qcm',
          type: 'qcm',
          title: 'QCM — Emploi & chômage',
          icon: '❓',
          questions: [
            {
              q: 'Emploi = 24 M, chômeurs = 3 M. Population active ?',
              choices: ['27 millions', '21 millions', '3 millions', '40 millions'],
              answer: 0,
              explain: 'Population active = emploi + chômeurs = 24 + 3 = 27 millions.',
            },
            {
              q: 'Population active 27 M, chômeurs 3 M. Taux de chômage ?',
              choices: ['≈ 11,1 %', '≈ 7,5 %', '≈ 12,5 %', '≈ 3 %'],
              answer: 0,
              explain: 'Taux de chômage = chômeurs / population active = 3 / 27 ≈ 11,1 %.',
            },
            {
              q: 'Un chômeur « découragé » qui cesse de chercher…',
              choices: [
                'quitte la population active (baisse mécanique du taux de chômage)',
                'devient automatiquement salarié',
                'augmente le taux d’emploi',
                'reste compté comme chômeur',
              ],
              answer: 0,
              explain: 'En quittant la population active, il fait baisser mécaniquement le taux de chômage, sans amélioration réelle de l’emploi.',
            },
            {
              q: 'Le chômage lié à un ralentissement de l’activité est dit…',
              choices: ['conjoncturel', 'structurel', 'frictionnel', 'volontaire'],
              answer: 0,
              explain: 'Le chômage conjoncturel suit la conjoncture ; le structurel tient aux structures de l’économie.',
            },
          ],
        },
        {
          id: 'eco-t7-assoc',
          type: 'association',
          title: 'Association — Indicateur ↔ calcul',
          icon: '🔗',
          pairs: [
            { left: 'Population active', right: 'Emploi + chômeurs' },
            { left: 'Taux d’activité', right: 'Population active / population en âge de travailler' },
            { left: 'Taux de chômage', right: 'Chômeurs / population active' },
          ],
        },
        {
          id: 'eco-t7-flash',
          type: 'flashcard',
          title: 'Flashcards — Emploi',
          icon: '🃏',
          cards: [
            { front: 'Population active', back: 'Personnes en emploi + chômeurs (au sens du BIT).' },
            { front: 'Chômage frictionnel', back: 'Chômage de courte durée lié au passage d’un emploi à un autre.' },
            { front: 'Chômage structurel', back: 'Lié aux structures de l’économie (inadéquation compétences/emplois).' },
            { front: 'Politiques actives', back: 'Formation, aides à l’embauche, incitations au retour à l’emploi.' },
          ],
        },
        {
          id: 'eco-t7-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'Une baisse du taux de chômage traduit toujours une amélioration de l’emploi.', answer: false, explain: 'Faux : elle peut venir de découragés quittant la population active ; regarder aussi le taux d’emploi.' },
            { statement: 'Les chômeurs font partie de la population active.', answer: true, explain: 'Vrai : population active = emploi + chômeurs.' },
            { statement: 'La formation est une politique de l’emploi.', answer: true, explain: 'Vrai : c’est une politique active.' },
          ],
        },
        {
          id: 'eco-t7-calc',
          type: 'calcul',
          title: 'Calcul express — Taux d’évolution',
          icon: '⚡',
          gen: 'taux_evolution',
          count: 5,
        },
      ],
    },
    {
      id: 'eco-t8',
      name: 'Thème 8 — Le commerce international',
      short: 'Commerce international',
      keywords: 'avantages comparatifs Ricardo spécialisation DIT libre-échange protectionnisme droits de douane OMC mondialisation firmes multinationales',
      cours: [
        {
          h: 'Fondements et débats',
          points: [
            'Fondements : avantages comparatifs (**Ricardo**), spécialisation, DIT.',
            '**Libre-échange** vs **protectionnisme** (droits de douane, barrières non tarifaires).',
            'Firmes multinationales, délocalisations, mondialisation.',
          ],
        },
        {
          h: 'La régulation',
          points: [
            '**OMC**, accords commerciaux, intégration régionale (UE).',
          ],
        },
      ],
      formulas: ['Ricardo : chaque pays se spécialise selon son avantage comparatif'],
      games: [
        {
          id: 'eco-t8-qcm',
          type: 'qcm',
          title: 'QCM — Commerce international',
          icon: '❓',
          questions: [
            {
              q: 'La théorie des avantages comparatifs est due à…',
              choices: ['Ricardo', 'Musgrave', 'Likert', 'Maslow'],
              answer: 0,
              explain: 'David Ricardo : chaque pays se spécialise selon son avantage comparatif.',
            },
            {
              q: 'Instaurer des droits de douane relève du…',
              choices: ['protectionnisme', 'libre-échange', 'de la redistribution', 'du crédit de TVA'],
              answer: 0,
              explain: 'Les droits de douane sont un instrument protectionniste.',
            },
            {
              q: 'Quel organisme régule le commerce mondial ?',
              choices: ['L’OMC', 'La CAF', 'L’ANC', 'L’INSEE'],
              answer: 0,
              explain: 'L’Organisation Mondiale du Commerce (OMC) régule les échanges.',
            },
            {
              q: 'Un avantage du libre-échange est…',
              choices: [
                'la baisse des prix pour les consommateurs',
                'la disparition de toute concurrence',
                'l’augmentation automatique des salaires partout',
                'la fin des inégalités',
              ],
              answer: 0,
              explain: 'Le libre-échange élargit les marchés et fait baisser les prix, mais fait aussi des perdants.',
            },
          ],
        },
        {
          id: 'eco-t8-tri',
          type: 'tri',
          title: 'Tri — Libre-échange ou protectionnisme ?',
          icon: '🗂️',
          instruction: 'Classe chaque mesure ou effet.',
          categories: [
            { id: 'le', label: 'Libre-échange' },
            { id: 'pr', label: 'Protectionnisme' },
          ],
          items: [
            { text: 'Supprimer les droits de douane', cat: 'le' },
            { text: 'Instaurer des barrières non tarifaires', cat: 'pr' },
            { text: 'Ouvrir les marchés à la concurrence', cat: 'le' },
            { text: 'Taxer les produits importés', cat: 'pr' },
            { text: 'Se spécialiser selon ses avantages', cat: 'le' },
          ],
        },
        {
          id: 'eco-t8-flash',
          type: 'flashcard',
          title: 'Flashcards — Mondialisation',
          icon: '🃏',
          cards: [
            { front: 'Avantage comparatif', back: 'Un pays se spécialise là où il est relativement le plus efficace (Ricardo).' },
            { front: 'DIT', back: 'Division internationale du travail : répartition mondiale des productions.' },
            { front: 'Protectionnisme', back: 'Protéger la production nationale (droits de douane, quotas, normes).' },
            { front: 'FMN', back: 'Firme multinationale implantée dans plusieurs pays.' },
          ],
        },
        {
          id: 'eco-t8-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'Le libre-échange profite également à tous les pays.', answer: false, explain: 'Faux : il crée de la richesse globale mais fait aussi des perdants (secteurs, pays).' },
            { statement: 'L’OMC régule le commerce international.', answer: true, explain: 'Vrai : elle encadre les échanges et arbitre les différends.' },
            { statement: 'La spécialisation découle des avantages comparatifs.', answer: true, explain: 'Vrai, selon la théorie de Ricardo.' },
          ],
        },
      ],
    },
    {
      id: 'eco-t9',
      name: 'Thème 9 — Croissance et développement durable',
      short: 'Croissance durable',
      keywords: 'croissance PIB développement durable soutenabilité économie circulaire collaborative pauvreté inégalités grand oral',
      cours: [
        {
          h: 'Croissance et ses limites',
          points: [
            'Croissance (PIB) et ses limites comme indicateur de bien-être.',
            'Développement durable : économique + social + environnemental.',
            'Soutenabilité faible/forte, capital naturel.',
          ],
        },
        {
          h: 'Instruments et inégalités',
          points: [
            'Instruments : économie circulaire, collaborative, taxation, quotas.',
            'Pauvreté absolue/relative, inégalités.',
            'Remarque : ce thème n’est **pas évalué à l’écrit**, il alimente surtout le **grand oral**.',
          ],
        },
      ],
      formulas: ['Développement durable = économique + social + environnemental'],
      games: [
        {
          id: 'eco-t9-qcm',
          type: 'qcm',
          title: 'QCM — Croissance durable',
          icon: '❓',
          questions: [
            {
              q: 'La croissance se mesure surtout par…',
              choices: ['le PIB', 'le taux de TVA', 'le SWOT', 'le lien de subordination'],
              answer: 0,
              explain: 'La croissance se mesure par l’évolution du PIB, indicateur toutefois limité pour le bien-être.',
            },
            {
              q: 'Le développement durable concilie…',
              choices: [
                'économique, social et environnemental',
                'offre, demande et prix',
                'CDI, CDD et intérim',
                'allocation, dol et nullité',
              ],
              answer: 0,
              explain: 'Trois piliers : économique, social, environnemental.',
            },
            {
              q: 'Réutiliser, réparer et recycler relève de l’économie…',
              choices: ['circulaire', 'souterraine', 'informelle', 'planifiée'],
              answer: 0,
              explain: 'L’économie circulaire limite les déchets en bouclant les cycles de matières.',
            },
            {
              q: 'La pauvreté « relative » se définit par rapport…',
              choices: ['au niveau de vie médian d’un pays', 'à un seuil de survie universel', 'au PIB mondial', 'au taux de chômage'],
              answer: 0,
              explain: 'La pauvreté relative se mesure par rapport au niveau de vie médian ; l’absolue par un seuil de subsistance.',
            },
          ],
        },
        {
          id: 'eco-t9-flash',
          type: 'flashcard',
          title: 'Flashcards — Durabilité',
          icon: '🃏',
          cards: [
            { front: 'PIB', back: 'Produit intérieur brut : mesure la richesse produite (indicateur limité du bien-être).' },
            { front: 'Soutenabilité forte', back: 'Le capital naturel ne peut pas être remplacé par du capital produit.' },
            { front: 'Économie collaborative', back: 'Partage/mutualisation de biens et services entre particuliers.' },
            { front: 'Capital naturel', back: 'Ressources et services fournis par la nature.' },
          ],
        },
        {
          id: 'eco-t9-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'Le PIB mesure parfaitement le bien-être.', answer: false, explain: 'Faux : c’est un indicateur limité (n’intègre ni inégalités ni environnement).' },
            { statement: 'Le développement durable a trois dimensions.', answer: true, explain: 'Vrai : économique, social, environnemental.' },
            { statement: 'Le thème 9 est surtout utile pour le grand oral.', answer: true, explain: 'Vrai : il n’est pas évalué à l’écrit mais alimente le grand oral.' },
          ],
        },
      ],
    },
  ],
}
