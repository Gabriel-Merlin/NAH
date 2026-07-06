// MANAGEMENT, SCIENCES DE GESTION ET NUMÉRIQUE (enseignement commun).
export const management = {
  id: 'management',
  name: 'Management (MSGN)',
  short: 'Management',
  icon: '🏢',
  color: '#4f46e5',
  tagline: 'Étude de cas : notion → document → conséquence.',
  chapters: [
    {
      id: 'mgmt-t1',
      name: 'Thème 1 — Les organisations et l’activité de production',
      short: 'Organisations & production',
      keywords: 'types organisations finalité performance efficacité efficience ressources chaîne de valeur compétitivité prix hors-prix',
      cours: [
        {
          h: 'Types et finalités',
          points: [
            'Types : entreprises privées ; organisations publiques (État, collectivités) ; organisations de la société civile (associations, ONG, syndicats).',
            'Finalités : lucrative (profit), non lucrative (intérêt général, service public), sociétale (**RSE**).',
          ],
        },
        {
          h: 'Performance et ressources',
          points: [
            '**Efficacité** = atteindre l’objectif ; **efficience** = l’atteindre au moindre coût.',
            'Ressources : financières, humaines, matérielles, immatérielles (compétences, savoir-faire, marque, image, brevets).',
            'Chaîne de valeur et création de valeur ; performance financière.',
          ],
        },
        {
          h: 'Compétitivité',
          points: [
            'Compétitivité-**prix** (proposer un prix plus bas).',
            'Compétitivité **hors-prix** (qualité, innovation, image, délais).',
          ],
        },
      ],
      formulas: ['Efficacité = atteindre l’objectif · Efficience = l’atteindre au moindre coût'],
      games: [
        {
          id: 'mgmt-t1-qcm',
          type: 'qcm',
          title: 'QCM — Organisations & performance',
          icon: '❓',
          questions: [
            {
              q: 'Une association loi 1901 relève des organisations…',
              choices: ['de la société civile', 'privées lucratives', 'publiques', 'multinationales'],
              answer: 0,
              explain: 'Les associations, ONG et syndicats sont des organisations de la société civile.',
            },
            {
              q: 'L’efficience, c’est…',
              choices: [
                'atteindre l’objectif au moindre coût',
                'atteindre l’objectif quel qu’en soit le coût',
                'augmenter le chiffre d’affaires',
                'embaucher davantage',
              ],
              answer: 0,
              explain: 'Efficacité = atteindre l’objectif ; efficience = l’atteindre au moindre coût.',
            },
            {
              q: 'La marque et l’image d’une entreprise sont des ressources…',
              choices: ['immatérielles', 'financières', 'matérielles', 'humaines'],
              answer: 0,
              explain: 'La marque, l’image, les brevets, le savoir-faire sont des ressources immatérielles.',
            },
            {
              q: 'Baisser ses prix pour être plus attractif relève de la compétitivité…',
              choices: ['prix', 'hors-prix', 'sociale', 'juridique'],
              answer: 0,
              explain: 'La compétitivité-prix joue sur le prix ; la hors-prix sur qualité, innovation, image, délais.',
            },
            {
              q: 'La finalité d’un service public est plutôt…',
              choices: ['non lucrative (intérêt général)', 'lucrative', 'spéculative', 'concurrentielle'],
              answer: 0,
              explain: 'Les organisations publiques ont une finalité non lucrative d’intérêt général.',
            },
          ],
        },
        {
          id: 'mgmt-t1-tri',
          type: 'tri',
          title: 'Tri — Type d’organisation',
          icon: '🗂️',
          instruction: 'Classe chaque organisation dans la bonne catégorie.',
          categories: [
            { id: 'priv', label: 'Entreprise privée' },
            { id: 'pub', label: 'Organisation publique' },
            { id: 'civ', label: 'Société civile' },
          ],
          items: [
            { text: 'Une PME de meubles', cat: 'priv' },
            { text: 'Une mairie', cat: 'pub' },
            { text: 'Une association caritative', cat: 'civ' },
            { text: 'Un hôpital public', cat: 'pub' },
            { text: 'Une multinationale du numérique', cat: 'priv' },
            { text: 'Une ONG humanitaire', cat: 'civ' },
          ],
        },
        {
          id: 'mgmt-t1-assoc',
          type: 'association',
          title: 'Association — Ressource ↔ exemple',
          icon: '🔗',
          pairs: [
            { left: 'Ressource humaine', right: 'Les 45 salariés' },
            { left: 'Ressource matérielle', right: 'L’atelier de production' },
            { left: 'Ressource financière', right: 'Les capitaux disponibles' },
            { left: 'Ressource immatérielle', right: 'L’image « haut de gamme »' },
          ],
        },
        {
          id: 'mgmt-t1-flash',
          type: 'flashcard',
          title: 'Flashcards — Notions clés',
          icon: '🃏',
          cards: [
            { front: 'Efficacité', back: 'Capacité à atteindre l’objectif fixé.' },
            { front: 'Efficience', back: 'Atteindre l’objectif au moindre coût (bon usage des ressources).' },
            { front: 'Compétitivité hors-prix', back: 'Se démarquer par la qualité, l’innovation, l’image, les délais.' },
            { front: 'Finalité sociétale', back: 'Prise en compte des enjeux sociaux et environnementaux (RSE).' },
            { front: 'Chaîne de valeur', back: 'Enchaînement des activités qui créent de la valeur pour le client.' },
          ],
        },
        {
          id: 'mgmt-t1-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'Une entreprise privée a toujours une finalité lucrative.', answer: false, explain: 'Souvent, mais elle peut aussi intégrer une dimension sociétale (RSE).' },
            { statement: 'Un brevet est une ressource immatérielle.', answer: true, explain: 'Vrai : brevets, marque, savoir-faire sont immatériels.' },
            { statement: 'Efficacité et efficience sont synonymes.', answer: false, explain: 'Faux : l’efficience ajoute la notion de coût minimal.' },
          ],
        },
      ],
    },
    {
      id: 'mgmt-t2',
      name: 'Thème 2 — Les organisations et les acteurs',
      short: 'Acteurs & stratégie',
      keywords: 'management stratégique opérationnel SWOT Likert styles de direction motivation Maslow Herzberg spécialisation diversification Porter parties prenantes',
      cours: [
        {
          h: 'Diagnostic et décision',
          points: [
            'Management **stratégique** (long terme, direction générale) vs **opérationnel** (court terme, encadrement).',
            'Diagnostic stratégique : **SWOT** (forces/faiblesses internes ; opportunités/menaces externes).',
            'Styles de direction (**Likert**) : autoritaire, paternaliste, consultatif, participatif ; centralisation/décentralisation.',
          ],
        },
        {
          h: 'Choix stratégiques',
          points: [
            'Spécialisation vs diversification ; croissance **interne** vs **externe**.',
            'Domination par les coûts vs différenciation (**Porter**).',
          ],
        },
        {
          h: 'Mobiliser les acteurs',
          points: [
            'Parties prenantes (internes/externes) aux intérêts parfois divergents → coopération et gestion des conflits.',
            'Motivation : **Maslow** (pyramide des besoins) ; **Herzberg** (facteurs d’hygiène / de motivation).',
            'Implication, culture d’entreprise → cohésion et performance sociale.',
          ],
        },
      ],
      formulas: ['SWOT : Forces / Faiblesses (interne) — Opportunités / Menaces (externe)'],
      games: [
        {
          id: 'mgmt-t2-qcm',
          type: 'qcm',
          title: 'QCM — Stratégie & motivation',
          icon: '❓',
          questions: [
            {
              q: 'Dans le SWOT, les opportunités et menaces concernent…',
              choices: ["l'environnement externe", "l'entreprise elle-même", 'le bilan comptable', 'les salariés uniquement'],
              answer: 0,
              explain: 'Forces/faiblesses = interne ; opportunités/menaces = externe.',
            },
            {
              q: 'Racheter un concurrent, c’est de la croissance…',
              choices: ['externe', 'interne', 'organique', 'défensive'],
              answer: 0,
              explain: 'La croissance externe passe par rachat/fusion ; l’interne par ses propres moyens.',
            },
            {
              q: 'Herzberg distingue les facteurs d’hygiène et les facteurs…',
              choices: ['de motivation', 'de production', 'de coût', 'de risque'],
              answer: 0,
              explain: 'Facteurs d’hygiène (salaire, conditions) vs facteurs de motivation (reconnaissance, responsabilités).',
            },
            {
              q: 'Le style de direction « participatif » a été théorisé par…',
              choices: ['Likert', 'Maslow', 'Porter', 'Ricardo'],
              answer: 0,
              explain: 'Rensis Likert distingue autoritaire, paternaliste, consultatif, participatif.',
            },
            {
              q: 'Se concentrer sur un seul métier, c’est une stratégie de…',
              choices: ['spécialisation', 'diversification', 'internationalisation', 'externalisation'],
              answer: 0,
              explain: 'Spécialisation = concentrer les ressources sur un seul métier.',
            },
          ],
        },
        {
          id: 'mgmt-t2-tri',
          type: 'tri',
          title: 'Tri — Analyse SWOT',
          icon: '🗂️',
          instruction: 'Classe ces éléments de Vél’Oc dans la bonne case du SWOT.',
          categories: [
            { id: 'f', label: 'Forces' },
            { id: 'w', label: 'Faiblesses' },
            { id: 'o', label: 'Opportunités' },
            { id: 'm', label: 'Menaces' },
          ],
          items: [
            { text: 'Positionnement haut de gamme, savoir-faire', cat: 'f' },
            { text: 'Turnover élevé (tensions RH)', cat: 'w' },
            { text: 'Marché de la mobilité douce en expansion', cat: 'o' },
            { text: 'Concurrence et critique environnementale', cat: 'm' },
            { text: 'Dépendance à un seul produit', cat: 'w' },
            { text: 'Aides publiques disponibles', cat: 'o' },
          ],
        },
        {
          id: 'mgmt-t2-assoc',
          type: 'association',
          title: 'Association — Auteur / notion',
          icon: '🔗',
          pairs: [
            { left: 'Maslow', right: 'Pyramide des besoins' },
            { left: 'Herzberg', right: 'Facteurs d’hygiène / de motivation' },
            { left: 'Likert', right: 'Styles de direction' },
            { left: 'Porter', right: 'Domination par les coûts / différenciation' },
          ],
        },
        {
          id: 'mgmt-t2-flash',
          type: 'flashcard',
          title: 'Flashcards — Acteurs & stratégie',
          icon: '🃏',
          cards: [
            { front: 'Management stratégique', back: 'Décisions de long terme prises par la direction générale.' },
            { front: 'Management opérationnel', back: 'Décisions de court terme, au niveau de l’encadrement.' },
            { front: 'Diversification', back: 'Élargir l’offre à de nouveaux produits/marchés (répartit le risque).' },
            { front: 'Parties prenantes', back: 'Acteurs internes/externes concernés par l’organisation, aux intérêts parfois divergents.' },
            { front: 'Culture d’entreprise', back: 'Valeurs et pratiques partagées qui renforcent la cohésion.' },
          ],
        },
        {
          id: 'mgmt-t2-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'Les forces et faiblesses du SWOT sont des facteurs internes.', answer: true, explain: 'Vrai : interne = forces/faiblesses ; externe = opportunités/menaces.' },
            { statement: 'La diversification supprime tout risque pour l’entreprise.', answer: false, explain: 'Faux : elle répartit le risque mais peut disperser les ressources.' },
            { statement: 'Selon Herzberg, le salaire est surtout un facteur d’hygiène.', answer: true, explain: 'Vrai : son absence démotive, mais il ne suffit pas à motiver durablement.' },
          ],
        },
      ],
    },
    {
      id: 'mgmt-t3',
      name: 'Thème 3 — Les organisations et la société',
      short: 'RSE & numérique',
      keywords: 'RSE développement durable éthique déontologie transformation numérique données cybersécurité télétravail',
      cours: [
        {
          h: 'La RSE',
          points: [
            '**RSE** : concilier les dimensions économique, sociale et environnementale (développement durable).',
            'Éthique et déontologie, transparence, protection des données, égalité, engagement civique.',
          ],
        },
        {
          h: 'Transformations numériques',
          points: [
            'Nouveaux modèles économiques, relation client/usager, exploitation des **données**.',
            'Cybersécurité, automatisation, télétravail, évolution des modes de vie et de consommation.',
          ],
        },
      ],
      formulas: ['RSE = concilier économique + social + environnemental'],
      games: [
        {
          id: 'mgmt-t3-qcm',
          type: 'qcm',
          title: 'QCM — RSE & numérique',
          icon: '❓',
          questions: [
            {
              q: 'La RSE concilie trois dimensions :',
              choices: [
                'économique, sociale, environnementale',
                'juridique, fiscale, sociale',
                'marketing, financière, commerciale',
                'locale, nationale, mondiale',
              ],
              answer: 0,
              explain: 'La RSE relève du développement durable : économique + social + environnemental.',
            },
            {
              q: 'La critique sur l’empreinte carbone des batteries relève de la dimension…',
              choices: ['environnementale de la RSE', 'financière', 'juridique', 'commerciale'],
              answer: 0,
              explain: 'C’est la dimension environnementale de la responsabilité sociétale.',
            },
            {
              q: 'Parmi ces éléments, lequel est un enjeu de la transformation numérique ?',
              choices: ['La cybersécurité', 'L’amortissement linéaire', 'Le seuil de rentabilité', 'La réserve légale'],
              answer: 0,
              explain: 'Cybersécurité, exploitation des données, automatisation, télétravail = transformation numérique.',
            },
            {
              q: 'Une réponse RSE à la critique environnementale pourrait être…',
              choices: [
                'le recyclage/réemploi des batteries',
                'l’augmentation des prix',
                'la réduction des salaires',
                'l’arrêt de toute communication',
              ],
              answer: 0,
              explain: 'Recyclage, éco-conception, filière durable, communication transparente sont des réponses RSE.',
            },
          ],
        },
        {
          id: 'mgmt-t3-flash',
          type: 'flashcard',
          title: 'Flashcards — Société & numérique',
          icon: '🃏',
          cards: [
            { front: 'RSE', back: 'Responsabilité de l’organisation face à l’impact de ses décisions sur la société et l’environnement.' },
            { front: 'Déontologie', back: 'Ensemble des règles de bonne conduite propres à une profession.' },
            { front: 'Données (data)', back: 'Ressource clé exploitée par les organisations à l’ère numérique.' },
            { front: 'Cybersécurité', back: 'Protection des systèmes d’information contre les menaces.' },
            { front: 'Éco-conception', back: 'Concevoir un produit en limitant son impact environnemental.' },
          ],
        },
        {
          id: 'mgmt-t3-tri',
          type: 'tri',
          title: 'Tri — Les 3 piliers de la RSE',
          icon: '🗂️',
          instruction: 'Classe chaque action dans le bon pilier du développement durable.',
          categories: [
            { id: 'eco', label: 'Économique' },
            { id: 'soc', label: 'Social' },
            { id: 'env', label: 'Environnemental' },
          ],
          items: [
            { text: 'Assurer la rentabilité et la pérennité', cat: 'eco' },
            { text: 'Améliorer les conditions de travail', cat: 'soc' },
            { text: 'Réduire l’empreinte carbone', cat: 'env' },
            { text: 'Recycler les batteries', cat: 'env' },
            { text: 'Favoriser l’égalité et la formation', cat: 'soc' },
          ],
        },
        {
          id: 'mgmt-t3-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'La RSE ne concerne que l’environnement.', answer: false, explain: 'Faux : elle concilie aussi l’économique et le social.' },
            { statement: 'Le télétravail est une conséquence de la transformation numérique.', answer: true, explain: 'Vrai : il découle des outils numériques et modifie l’organisation du travail.' },
            { statement: 'Protéger les données personnelles relève de l’éthique et de la RSE.', answer: true, explain: 'Vrai : transparence et protection des données font partie des enjeux RSE.' },
          ],
        },
      ],
    },
  ],
}
