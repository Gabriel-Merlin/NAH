// RESSOURCES HUMAINES ET COMMUNICATION (spécialité de Terminale STMG).
// Programme : mobiliser les RH, cohésion & conflits, la communication,
// coordination & conditions de travail.
export const rh = {
  id: 'rh-communication',
  name: 'Ressources humaines & Communication',
  short: 'RH & Communication',
  icon: '🧑‍💼',
  color: '#db2777',
  tagline: 'Mobiliser, fédérer et faire communiquer les acteurs.',
  chapters: [
    // ===================================================================== T1
    {
      id: 'rh-t1',
      name: 'Thème 1 — Mobiliser les ressources humaines',
      short: 'De l’individu à l’acteur',
      keywords: 'compétence qualification savoir savoir-faire savoir-être GPEC rémunération salaire primes périphériques équité interne externe motivation implication Maslow Herzberg performance sociale turnover absentéisme',
      intro: 'Une organisation ne performe que si ses salariés s’engagent. Ce thème montre comment transformer des individus en acteurs performants : reconnaître leurs compétences, les rémunérer équitablement et les motiver durablement.',
      cours: [
        {
          h: 'Compétences et qualification',
          blocks: [
            { t: 'p', c: 'La **compétence** est la capacité à réaliser une activité en situation réelle. Elle combine trois dimensions : les **savoirs** (connaissances), le **savoir-faire** (la pratique, l’expérience) et le **savoir-être** (les comportements, l’attitude).' },
            { t: 'table', head: ['Notion', 'Définition', 'Exemple'], rows: [
              ['Compétence', 'Ce que la personne **sait faire réellement**', 'Savoir accueillir un client mécontent'],
              ['Qualification', 'La **reconnaissance officielle** des compétences', 'Un BTS, une classification de la convention collective'],
            ] },
            { t: 'p', c: 'Anticiper les besoins de l’organisation, c’est le rôle de la **GPEC** (gestion prévisionnelle des emplois et des compétences). Elle réduit l’écart entre les compétences **actuelles** et celles **requises** demain, en agissant sur trois leviers : le **recrutement**, la **formation** et la **mobilité** interne (changement de poste).' },
            { t: 'example', h: 'Cas concret', c: 'Une entreprise qui se digitalise a besoin de compétences numériques. Plutôt que de tout externaliser, sa GPEC **forme** ses salariés actuels et **recrute** quelques profils spécialisés : elle anticipe au lieu de subir.' },
            { t: 'tip', c: 'Ne confonds pas : la **compétence** est ce qu’on sait faire ; la **qualification** est le diplôme/niveau qui la reconnaît. On peut être compétent sans diplôme, et diplômé sans être (encore) compétent.' },
          ],
        },
        {
          h: 'La rémunération',
          blocks: [
            { t: 'p', c: 'La **rémunération** est la contrepartie du travail fourni. Elle ne se limite pas au salaire : elle comprend un **salaire de base**, des **primes** (ancienneté, objectifs) et des **périphériques** (avantages en nature, **intéressement**, **participation**).' },
            { t: 'table', head: ['Composante', 'Contenu'], rows: [
              ['Salaire de base', 'Fixe, lié au poste et à la qualification'],
              ['Primes', 'Variables : performance, objectifs, ancienneté'],
              ['Périphériques', 'Avantages en nature, tickets-restaurant, intéressement, participation'],
            ] },
            { t: 'p', c: 'Pour motiver, la rémunération doit être perçue comme **équitable**. On distingue l’**équité interne** (cohérence entre les salariés d’une même organisation, à poste comparable) et l’**équité externe** (comparaison avec ce que paie le marché du travail).' },
            { t: 'warning', c: 'Un sentiment d’**iniquité** (« je suis moins payé qu’un collègue au même poste ») démotive fortement, même si le salaire est objectivement correct : c’est la **comparaison** qui compte, pas seulement le montant.' },
          ],
        },
        {
          h: 'Motivation et implication',
          blocks: [
            { t: 'p', c: 'La **motivation** est ce qui pousse un salarié à agir et à fournir des efforts. Deux théories du programme l’expliquent :' },
            { t: 'table', head: ['Théorie', 'Idée principale'], rows: [
              ['**Maslow** (pyramide des besoins)', 'On cherche à satisfaire un besoin supérieur une fois les besoins inférieurs comblés (physiologiques → sécurité → appartenance → estime → accomplissement)'],
              ['**Herzberg** (bi-factorielle)', 'Les **facteurs d’hygiène** (salaire, conditions) évitent l’insatisfaction ; les **facteurs de motivation** (reconnaissance, responsabilités, intérêt) motivent vraiment'],
            ] },
            { t: 'p', c: 'L’**implication** est l’engagement durable du salarié envers son organisation. Une forte implication améliore la **performance sociale** : baisse du **turnover** (départs) et de l’**absentéisme**, meilleure qualité du travail.' },
            { t: 'example', h: 'À retenir (le piège de la prime)', c: 'Augmenter le salaire (facteur d’hygiène) fait taire le mécontentement, mais c’est la **reconnaissance** et l’**intérêt du travail** (facteurs de motivation) qui déclenchent l’effort durable. D’où l’erreur classique : croire qu’une prime suffit à motiver sur le long terme.' },
            { t: 'tip', c: 'Moyen mnémotechnique Herzberg : **hygiène = éviter le négatif** (pas de mécontentement) ; **motivation = créer du positif** (envie de se dépasser).' },
          ],
        },
      ],
      essentiel: [
        'Compétence = savoir + savoir-faire + savoir-être (ce qu’on sait faire) ; qualification = reconnaissance officielle.',
        'La GPEC anticipe les besoins par le recrutement, la formation et la mobilité interne.',
        'Rémunération = salaire de base + primes + périphériques ; elle doit être équitable (interne et externe).',
        'Maslow = pyramide des besoins ; Herzberg = hygiène (évite l’insatisfaction) vs motivation (motive vraiment).',
        'Implication → performance sociale : moins de turnover et d’absentéisme.',
      ],
      games: [
        {
          id: 'rh-t1-qcm', type: 'qcm', title: 'QCM — Mobiliser les RH', icon: '❓',
          questions: [
            { q: 'La reconnaissance officielle des compétences par un diplôme est…', choices: ['la qualification', 'la compétence', 'la motivation', 'la rémunération'], answer: 0, explain: 'Qualification = reconnaissance ; compétence = savoir-faire réel.' },
            { q: 'Selon Herzberg, le salaire est surtout un facteur…', choices: ['d’hygiène', 'de motivation', 'de production', 'de risque'], answer: 0, explain: 'Son absence démotive, mais il ne motive pas durablement à lui seul.' },
            { q: 'Anticiper les besoins futurs en compétences, c’est…', choices: ['la GPEC', 'la RSE', 'le SWOT', 'la CAF'], answer: 0, explain: 'La GPEC gère de façon prévisionnelle emplois et compétences.' },
            { q: 'L’intéressement et la participation sont des…', choices: ['périphériques de rémunération', 'impôts', 'sanctions', 'charges fixes'], answer: 0, explain: 'Ce sont des compléments (périphériques) au salaire de base.' },
            { q: 'Une rémunération jugée injuste risque de…', choices: ['démotiver', 'fidéliser', 'augmenter l’implication', 'réduire le turnover'], answer: 0, explain: 'Le sentiment d’iniquité démotive (équité interne/externe).' },
            { q: 'Les trois dimensions de la compétence sont…', choices: ['savoir, savoir-faire, savoir-être', 'lire, écrire, compter', 'primes, salaire, avantages', 'sécurité, estime, accomplissement'], answer: 0, explain: 'Connaissances + pratique + comportements.' },
            { q: 'Comparer son salaire à celui du marché relève de l’équité…', choices: ['externe', 'interne', 'salariale', 'fiscale'], answer: 0, explain: 'Équité externe = comparaison avec le marché ; interne = au sein de l’organisation.' },
          ],
        },
        {
          id: 'rh-t1-vf', type: 'vraifaux', title: 'Vrai / Faux rapide', icon: '⚡',
          questions: [
            { statement: 'Compétence et qualification sont synonymes.', answer: false, explain: 'Faux : la compétence est le savoir-faire réel, la qualification sa reconnaissance officielle.' },
            { statement: 'L’implication réduit le turnover.', answer: true, explain: 'Vrai : un salarié impliqué reste et s’engage.' },
            { statement: 'La rémunération se limite au salaire de base.', answer: false, explain: 'Faux : elle inclut primes et périphériques.' },
            { statement: 'Pour Herzberg, la reconnaissance est un facteur de motivation.', answer: true, explain: 'Vrai : reconnaissance, responsabilités et intérêt du travail motivent vraiment.' },
            { statement: 'La GPEC agit notamment par la formation.', answer: true, explain: 'Vrai : recrutement, formation et mobilité interne.' },
          ],
        },
        {
          id: 'rh-t1-ordre', type: 'ordre', title: 'Remise en ordre — La pyramide de Maslow', icon: '🔢',
          instruction: 'Classe les besoins de la base vers le sommet.',
          steps: ['Besoins physiologiques', 'Besoin de sécurité', 'Besoin d’appartenance', 'Besoin d’estime', 'Besoin d’accomplissement'],
          explain: 'On cherche un besoin supérieur une fois les besoins inférieurs satisfaits.',
        },
        {
          id: 'rh-t1-tri', type: 'tri', title: 'Tri — Herzberg : hygiène ou motivation ?', icon: '🗂️',
          instruction: 'Classe chaque facteur selon Herzberg.',
          categories: [{ id: 'hyg', label: 'Facteur d’hygiène' }, { id: 'mot', label: 'Facteur de motivation' }],
          items: [
            { text: 'Salaire et conditions de travail', cat: 'hyg' },
            { text: 'Reconnaissance', cat: 'mot' },
            { text: 'Responsabilités confiées', cat: 'mot' },
            { text: 'Relations avec la hiérarchie', cat: 'hyg' },
            { text: 'Intérêt du travail', cat: 'mot' },
          ],
        },
        {
          id: 'rh-t1-trou', type: 'trou', title: 'Texte à trous — Compétences & motivation', icon: '✏️',
          questions: [
            { text: 'La reconnaissance officielle des compétences est la ____ .', answer: 'qualification', alt: ['la qualification'], explain: 'Qualification = reconnaissance (diplôme, classification).' },
            { text: 'La gestion prévisionnelle des emplois et des compétences se nomme la ____ .', answer: 'GPEC', alt: ['gpec'], explain: 'Elle anticipe les besoins par recrutement, formation, mobilité.' },
            { text: 'Selon Herzberg, le salaire est un facteur d’____ .', answer: 'hygiène', alt: ['hygiene', 'l’hygiène'], explain: 'Il évite l’insatisfaction mais ne motive pas durablement.' },
            { text: 'L’engagement durable du salarié envers son organisation est l’____ .', answer: 'implication', alt: ['l’implication', 'implication'], explain: 'L’implication améliore la performance sociale.' },
          ],
        },
        {
          id: 'rh-t1-assoc', type: 'association', title: 'Association — Notion ↔ définition', icon: '🔗',
          pairs: [
            { left: 'Compétence', right: 'Savoirs + savoir-faire + savoir-être' },
            { left: 'Qualification', right: 'Reconnaissance officielle (diplôme, classification)' },
            { left: 'GPEC', right: 'Gestion prévisionnelle des emplois et compétences' },
            { left: 'Implication', right: 'Engagement durable du salarié' },
          ],
        },
      ],
    },
    // ===================================================================== T2
    {
      id: 'rh-t2',
      name: 'Thème 2 — Cohésion et conflits',
      short: 'Groupes & conflits',
      keywords: 'groupe but commun statut rôle dynamique cohésion conformisme leadership conflit latent ouvert source négociation recours hiérarchique médiation arbitrage constructif',
      intro: 'Dans un groupe, chacun tient une place et joue un rôle. La cohésion renforce la performance, mais des tensions apparaissent : savoir les repérer et les résoudre est une compétence clé du management.',
      cours: [
        {
          h: 'Le groupe et sa dynamique',
          blocks: [
            { t: 'p', c: 'Un **groupe** réunit des individus autour d’un **but commun** et qui **interagissent** régulièrement. Chaque membre y occupe un **statut** (sa position : chef, délégué…) et joue un **rôle** (le comportement attendu de lui).' },
            { t: 'table', head: ['Notion', 'Définition', 'Exemple'], rows: [
              ['Statut', 'La **position** occupée dans le groupe', 'Être chef d’équipe'],
              ['Rôle', 'Le **comportement attendu** lié à ce statut', 'Animer, organiser, motiver l’équipe'],
            ] },
            { t: 'p', c: 'La **cohésion** est la force qui unit les membres. Elle améliore l’efficacité, la solidarité et le climat. Certains membres exercent un **leadership** : une capacité à entraîner les autres, sans forcément détenir l’autorité officielle.' },
            { t: 'warning', c: 'Attention à l’excès : une cohésion **trop forte** peut produire du **conformisme** (« pensée de groupe ») — les avis divergents ne s’expriment plus, et le groupe prend de mauvaises décisions par peur de sortir du rang.' },
          ],
        },
        {
          h: 'Les conflits',
          blocks: [
            { t: 'p', c: 'Un **conflit** est une opposition d’intérêts, d’opinions ou de valeurs entre des acteurs. On le caractérise par son degré de visibilité.' },
            { t: 'table', head: ['Type de conflit', 'Caractéristique'], rows: [
              ['**Latent**', 'Larvé, non exprimé ouvertement (tensions sourdes, non-dits)'],
              ['**Ouvert**', 'Déclaré, visible (dispute, grève, refus de coopérer)'],
            ] },
            { t: 'p', c: 'Les **sources** de conflit sont multiples : divergence d’**objectifs**, mauvaise **communication** (malentendus), partage des **ressources** (budget, matériel), rivalités de **personnes** ou de pouvoir.' },
            { t: 'example', h: 'Repérer un conflit latent', c: 'Deux services se renvoient discrètement la responsabilité des retards, sans se le dire en face : c’est un conflit **latent**. Non traité, il peut dégénérer en conflit **ouvert** (clash en réunion).' },
            { t: 'tip', c: 'Un conflit n’est pas forcément négatif : bien géré, il peut être **constructif** et faire évoluer les règles, révéler un problème réel et améliorer l’organisation.' },
          ],
        },
        {
          h: 'La résolution des conflits',
          blocks: [
            { t: 'p', c: 'Plusieurs modes permettent de sortir d’un conflit, du plus **autonome** (les parties gèrent seules) au plus **imposé** (un tiers tranche).' },
            { t: 'table', head: ['Mode', 'Qui décide ?'], rows: [
              ['**Négociation**', 'Les parties trouvent un accord **direct**'],
              ['**Recours hiérarchique**', 'Le **supérieur** tranche'],
              ['**Médiation**', 'Un tiers **aide** à trouver un accord (sans l’imposer)'],
              ['**Arbitrage**', 'Un tiers **impose** une décision'],
            ] },
            { t: 'p', c: 'La **négociation** peut viser un compromis où chacun cède un peu, ou une solution « **gagnant-gagnant** » qui satisfait les deux parties (idéal pour préserver la relation).' },
            { t: 'warning', c: 'Piège classique : **médiation ≠ arbitrage**. Le **médiateur** rapproche les points de vue mais **ne décide pas** ; l’**arbitre** **tranche** et impose la solution aux parties.' },
          ],
        },
      ],
      essentiel: [
        'Statut = position ; rôle = comportement attendu ; le leadership entraîne sans autorité officielle.',
        'La cohésion unit le groupe, mais son excès crée du conformisme (pensée de groupe).',
        'Conflit latent (larvé) vs ouvert (déclaré) ; sources : objectifs, communication, ressources, personnes.',
        'Un conflit bien géré peut être constructif.',
        'Résolution : négociation, recours hiérarchique, médiation (aide), arbitrage (impose).',
      ],
      games: [
        {
          id: 'rh-t2-qcm', type: 'qcm', title: 'QCM — Cohésion & conflits', icon: '❓',
          questions: [
            { q: 'Le comportement attendu d’un membre du groupe est son…', choices: ['rôle', 'statut', 'salaire', 'conflit'], answer: 0, explain: 'Statut = position occupée ; rôle = comportements attendus.' },
            { q: 'Un conflit non déclaré, larvé, est dit…', choices: ['latent', 'ouvert', 'constructif', 'résolu'], answer: 0, explain: 'Le conflit latent n’est pas encore exprimé ouvertement.' },
            { q: 'Faire appel à un tiers neutre pour rapprocher les parties, c’est…', choices: ['la médiation', 'la sanction', 'le conformisme', 'la cohésion'], answer: 0, explain: 'La médiation fait intervenir un tiers qui aide (sans imposer).' },
            { q: 'Un excès de cohésion peut entraîner…', choices: ['du conformisme', 'plus de créativité', 'moins d’absentéisme', 'une hausse des salaires'], answer: 0, explain: 'Le conformisme étouffe les avis divergents.' },
            { q: 'Un conflit peut aussi être…', choices: ['constructif', 'toujours néfaste', 'illégal', 'un statut'], answer: 0, explain: 'Bien géré, il fait progresser l’organisation.' },
            { q: 'Quand le supérieur tranche le conflit, on parle de…', choices: ['recours hiérarchique', 'médiation', 'négociation', 'arbitrage externe'], answer: 0, explain: 'Le recours hiérarchique : c’est le supérieur qui décide.' },
            { q: 'La capacité à entraîner les autres sans autorité officielle, c’est…', choices: ['le leadership', 'le statut', 'le conformisme', 'l’arbitrage'], answer: 0, explain: 'Le leadership repose sur l’influence, pas sur le titre.' },
          ],
        },
        {
          id: 'rh-t2-vf', type: 'vraifaux', title: 'Vrai / Faux rapide', icon: '⚡',
          questions: [
            { statement: 'Le statut est le comportement attendu d’un membre.', answer: false, explain: 'Faux : le statut est la position ; le rôle est le comportement attendu.' },
            { statement: 'Un conflit est toujours destructeur.', answer: false, explain: 'Faux : bien géré, il peut être constructif.' },
            { statement: 'La négociation est un mode de résolution des conflits.', answer: true, explain: 'Vrai, avec le recours hiérarchique, la médiation et l’arbitrage.' },
            { statement: 'Le médiateur impose sa décision aux parties.', answer: false, explain: 'Faux : le médiateur aide à trouver un accord ; c’est l’arbitre qui impose.' },
            { statement: 'Une cohésion excessive peut nuire à la qualité des décisions.', answer: true, explain: 'Vrai : le conformisme fait taire les avis divergents.' },
          ],
        },
        {
          id: 'rh-t2-tri', type: 'tri', title: 'Tri — Statut ou rôle ?', icon: '🗂️',
          instruction: 'Classe chaque élément.',
          categories: [{ id: 'stat', label: 'Statut' }, { id: 'role', label: 'Rôle' }],
          items: [
            { text: 'Être chef d’équipe', cat: 'stat' },
            { text: 'Animer les réunions et motiver', cat: 'role' },
            { text: 'Être délégué du personnel', cat: 'stat' },
            { text: 'Représenter et défendre les salariés', cat: 'role' },
          ],
        },
        {
          id: 'rh-t2-trou', type: 'trou', title: 'Texte à trous — Conflits & résolution', icon: '✏️',
          questions: [
            { text: 'Un conflit larvé, non exprimé ouvertement, est ____ .', answer: 'latent', alt: ['latent'], explain: 'Latent = sourd ; ouvert = déclaré.' },
            { text: 'Quand un tiers aide sans imposer, c’est la ____ .', answer: 'médiation', alt: ['la médiation', 'mediation'], explain: 'Le médiateur rapproche ; l’arbitre impose.' },
            { text: 'Quand un tiers impose sa décision, c’est l’____ .', answer: 'arbitrage', alt: ['l’arbitrage', 'arbitrage'], explain: 'L’arbitre tranche et impose.' },
            { text: 'Un excès de cohésion crée du ____ .', answer: 'conformisme', alt: ['conformisme'], explain: 'Les avis divergents ne s’expriment plus.' },
          ],
        },
        {
          id: 'rh-t2-assoc', type: 'association', title: 'Association — Mode de résolution ↔ idée', icon: '🔗',
          pairs: [
            { left: 'Négociation', right: 'Accord direct entre les parties' },
            { left: 'Recours hiérarchique', right: 'Le supérieur tranche' },
            { left: 'Médiation', right: 'Un tiers aide à trouver un accord' },
            { left: 'Arbitrage', right: 'Un tiers impose une décision' },
          ],
        },
      ],
    },
    // ===================================================================== T3
    {
      id: 'rh-t3',
      name: 'Thème 3 — La communication',
      short: 'Communiquer',
      keywords: 'communication émetteur récepteur message canal feedback bruit verbale non verbale para-langage écoute active empathie reformulation argumentation convaincre persuader influence leadership',
      intro: 'Communiquer, c’est bien plus qu’émettre un message : c’est écouter, décoder le non-verbal et savoir convaincre. C’est le cœur des relations professionnelles.',
      cours: [
        {
          h: 'Le schéma de la communication',
          blocks: [
            { t: 'p', c: 'Communiquer, c’est transmettre un **message**. Un **émetteur** envoie un message par un **canal** (oral, écrit, e-mail…) à un **récepteur**, qui le **décode** et renvoie un **feedback** (rétroaction). Le **bruit** peut perturber la transmission.' },
            { t: 'table', head: ['Élément', 'Rôle'], rows: [
              ['Émetteur', 'Celui qui envoie le message'],
              ['Message', 'L’information transmise'],
              ['Canal', 'Le moyen utilisé (oral, écrit, téléphone…)'],
              ['Récepteur', 'Celui qui reçoit et décode'],
              ['Feedback', 'La réponse qui referme la boucle'],
              ['Bruit', 'Ce qui parasite (matériel ou sémantique)'],
            ] },
            { t: 'p', c: 'La communication est **verbale** (les mots) et **non verbale** (gestes, regard, posture). S’y ajoute le **para-langage** : le ton, le débit et le volume de la voix, qui colorent le sens.' },
            { t: 'warning', c: 'Le **bruit** n’est pas seulement sonore : un **bruit sémantique** (mot mal compris, jargon) parasite tout autant le message qu’un bruit **matériel** (mauvaise connexion, brouhaha).' },
          ],
        },
        {
          h: 'Écoute active et relations',
          blocks: [
            { t: 'p', c: 'La qualité d’une relation repose sur l’**écoute active** : être réellement attentif, faire preuve d’**empathie** (comprendre ce que ressent l’autre) et **reformuler** pour vérifier qu’on a bien compris.' },
            { t: 'p', c: 'Dans un groupe apparaissent des phénomènes relationnels : l’**influence** (modifier le comportement d’autrui), le **leadership** (capacité à entraîner), et l’**ascendant** de certains membres.' },
            { t: 'example', h: 'La reformulation en action', c: '« Si je comprends bien, tu trouves les délais trop courts et tu crains de ne pas y arriver ? » — cette reformulation montre qu’on a écouté, valorise l’interlocuteur et évite les malentendus.' },
            { t: 'tip', c: 'Retiens la formule de l’écoute active : **attention + empathie + reformulation**. C’est ce trio qui transforme un simple échange en vraie communication.' },
          ],
        },
        {
          h: 'Argumenter et convaincre',
          blocks: [
            { t: 'p', c: 'Un **argument** appuie une affirmation par une **preuve** ou un **exemple**. Pour faire adhérer, on combine deux registres complémentaires.' },
            { t: 'table', head: ['Registre', 'S’appuie sur…', 'Exemple'], rows: [
              ['**Convaincre**', 'La **raison**, la logique, les faits', 'Des chiffres, une démonstration'],
              ['**Persuader**', 'L’**émotion**, les sentiments', 'Une histoire touchante, l’enthousiasme'],
            ] },
            { t: 'p', c: 'Une argumentation efficace **structure** ses idées (annoncer, développer, illustrer, conclure) et **anticipe les objections** de l’interlocuteur pour mieux y répondre.' },
            { t: 'warning', c: 'Convaincre ≠ persuader : **convaincre** passe par la **raison** (on prouve) ; **persuader** joue sur l’**émotion** (on touche). Les meilleurs communicants dosent les deux.' },
          ],
        },
      ],
      essentiel: [
        'Schéma : émetteur → message → canal → récepteur → feedback (le bruit parasite).',
        'Communication verbale (mots), non verbale (gestes, regard) et para-langage (ton, débit).',
        'Le bruit peut être matériel (brouhaha) ou sémantique (mot mal compris).',
        'Écoute active = attention + empathie + reformulation.',
        'Convaincre = raison ; persuader = émotion.',
      ],
      games: [
        {
          id: 'rh-t3-qcm', type: 'qcm', title: 'QCM — La communication', icon: '❓',
          questions: [
            { q: 'La réponse du récepteur à l’émetteur s’appelle le…', choices: ['feedback', 'bruit', 'canal', 'statut'], answer: 0, explain: 'Le feedback (rétroaction) referme la boucle de communication.' },
            { q: 'Un regard, une posture relèvent de la communication…', choices: ['non verbale', 'verbale', 'écrite', 'financière'], answer: 0, explain: 'Le non-verbal = gestes, regard, posture.' },
            { q: 'Reformuler et se montrer attentif, c’est pratiquer…', choices: ['l’écoute active', 'le conformisme', 'un conflit', 'un feedback négatif'], answer: 0, explain: 'L’écoute active améliore la relation.' },
            { q: 'Ce qui perturbe la transmission du message est…', choices: ['le bruit', 'le canal', 'le feedback', 'l’émetteur'], answer: 0, explain: 'Le bruit (matériel ou sémantique) parasite le message.' },
            { q: 'Convaincre s’appuie surtout sur…', choices: ['la raison', 'l’émotion', 'la peur', 'le hasard'], answer: 0, explain: 'Convaincre = raison ; persuader = émotion.' },
            { q: 'Le ton et le débit de la voix constituent le…', choices: ['para-langage', 'canal écrit', 'feedback', 'bruit sémantique'], answer: 0, explain: 'Le para-langage colore le message oral.' },
            { q: 'Un mot technique incompris par le récepteur est un bruit…', choices: ['sémantique', 'matériel', 'visuel', 'positif'], answer: 0, explain: 'Bruit sémantique : lié au sens/vocabulaire.' },
          ],
        },
        {
          id: 'rh-t3-vf', type: 'vraifaux', title: 'Vrai / Faux rapide', icon: '⚡',
          questions: [
            { statement: 'Le canal est le moyen par lequel passe le message.', answer: true, explain: 'Vrai : oral, écrit, téléphone, e-mail…' },
            { statement: 'La communication non verbale n’a aucune importance.', answer: false, explain: 'Faux : gestes et posture transmettent beaucoup d’information.' },
            { statement: 'Persuader fait plutôt appel à l’émotion.', answer: true, explain: 'Vrai : persuader = émotion ; convaincre = raison.' },
            { statement: 'L’empathie fait partie de l’écoute active.', answer: true, explain: 'Vrai : attention + empathie + reformulation.' },
            { statement: 'Le bruit est uniquement sonore.', answer: false, explain: 'Faux : il peut être matériel OU sémantique (sens mal compris).' },
          ],
        },
        {
          id: 'rh-t3-ordre', type: 'ordre', title: 'Remise en ordre — Le schéma de communication', icon: '🔢',
          instruction: 'Remets les éléments dans l’ordre de la communication.',
          steps: ['Émetteur', 'Message', 'Canal', 'Récepteur', 'Feedback'],
          explain: 'Émetteur → message → canal → récepteur → feedback.',
        },
        {
          id: 'rh-t3-tri', type: 'tri', title: 'Tri — Verbal ou non verbal ?', icon: '🗂️',
          instruction: 'Classe chaque signe de communication.',
          categories: [{ id: 'v', label: 'Verbal' }, { id: 'nv', label: 'Non verbal' }],
          items: [
            { text: 'Les mots employés', cat: 'v' },
            { text: 'Le ton de la voix', cat: 'nv' },
            { text: 'Un sourire', cat: 'nv' },
            { text: 'Une phrase écrite', cat: 'v' },
            { text: 'La posture du corps', cat: 'nv' },
          ],
        },
        {
          id: 'rh-t3-trou', type: 'trou', title: 'Texte à trous — Communiquer', icon: '✏️',
          questions: [
            { text: 'La réponse qui referme la boucle de communication est le ____ .', answer: 'feedback', alt: ['le feedback'], explain: 'Le feedback est la rétroaction du récepteur.' },
            { text: 'Ce qui parasite le message (matériel ou sémantique) est le ____ .', answer: 'bruit', alt: ['le bruit'], explain: 'Bruit matériel (brouhaha) ou sémantique (sens).' },
            { text: 'Reformuler pour vérifier la compréhension relève de l’écoute ____ .', answer: 'active', alt: ['active'], explain: 'Attention + empathie + reformulation.' },
            { text: 'S’appuyer sur la raison et les faits, c’est ____ .', answer: 'convaincre', alt: ['convaincre'], explain: 'Convaincre = raison ; persuader = émotion.' },
          ],
        },
      ],
    },
    // ===================================================================== T4
    {
      id: 'rh-t4',
      name: 'Thème 4 — Coordination et conditions de travail',
      short: 'Travail & climat social',
      keywords: 'organisation du travail Taylor OST parcellisation élargissement enrichissement autonomie conditions de travail physiques psychologiques QVT temps de travail télétravail climat social turnover absentéisme dialogue social CSE représentants du personnel',
      intro: 'La façon d’organiser le travail et de soigner les conditions influence directement le bien-être des salariés… et la performance de l’organisation. Les deux vont de pair.',
      cours: [
        {
          h: 'L’organisation du travail',
          blocks: [
            { t: 'p', c: 'L’**OST** (organisation scientifique du travail), théorisée par **Taylor**, repose sur la **division** et la **parcellisation** des tâches : chaque salarié répète une opération simple et chronométrée. Résultat : de forts gains de **productivité**, mais un travail **répétitif**, peu qualifiant et démotivant.' },
            { t: 'p', c: 'Pour **dépasser le taylorisme** et redonner du sens au travail, les organisations modernes recourent à plusieurs leviers :' },
            { t: 'table', head: ['Forme moderne', 'Principe'], rows: [
              ['**Élargissement** des tâches', 'Regrouper plusieurs tâches de **même niveau** (horizontal)'],
              ['**Enrichissement** des tâches', 'Ajouter des tâches plus **qualifiées** (contrôle, décision) — vertical'],
              ['**Autonomie / équipes**', 'Donner de la liberté et travailler en groupe responsabilisé'],
            ] },
            { t: 'warning', c: 'Ne confonds pas **élargissement** (plus de tâches de **même** niveau) et **enrichissement** (des tâches de niveau **supérieur**, avec plus de responsabilités).' },
            { t: 'tip', c: 'Les formes modernes rejoignent Herzberg : donner de l’**autonomie** et des **responsabilités**, c’est agir sur les facteurs de **motivation**, pas seulement d’hygiène.' },
          ],
        },
        {
          h: 'Les conditions de travail',
          blocks: [
            { t: 'p', c: 'Les **conditions de travail** regroupent tout ce qui entoure l’activité et influence la santé et le bien-être.' },
            { t: 'table', head: ['Type', 'Exemples'], rows: [
              ['**Physiques**', 'Sécurité, ergonomie du poste, bruit, température, pénibilité'],
              ['**Psychologiques**', 'Charge de travail, stress, pression sur les délais, reconnaissance'],
            ] },
            { t: 'p', c: 'La **QVT** (qualité de vie au travail) vise le **bien-être** des salariés — et donc la performance de l’organisation. Elle passe par l’aménagement du **temps de travail**, le **télétravail**, la prévention des **risques psychosociaux** (stress, burn-out) et un meilleur équilibre vie pro / vie perso.' },
            { t: 'example', h: 'Le télétravail, à double tranchant', c: 'Le télétravail améliore l’autonomie et réduit les trajets (bonne QVT), mais peut créer de l’**isolement** et brouiller la frontière travail/vie privée. Bien encadré, c’est un atout ; mal géré, un risque.' },
          ],
        },
        {
          h: 'Le climat social',
          blocks: [
            { t: 'p', c: 'Le **climat social** reflète l’ambiance générale et la qualité des relations dans l’organisation. On l’évalue par des **indicateurs** chiffrés : le **turnover** (taux de départs), l’**absentéisme**, le nombre de **conflits** et de journées de grève.' },
            { t: 'p', c: 'Le **dialogue social** — les échanges entre la direction et les **représentants du personnel** (le **CSE**, comité social et économique) — contribue à un bon climat : il permet de prévenir les tensions, de négocier et d’associer les salariés aux décisions.' },
            { t: 'warning', c: 'Un **turnover** et un **absentéisme** élevés sont des **signaux d’alerte** d’un climat social dégradé : ils coûtent cher (recrutement, formation, perte de savoir-faire) et nuisent à la performance.' },
            { t: 'tip', c: 'Retiens le lien de cause à effet : **bonnes conditions + dialogue social → bon climat → performance**. À l’inverse, un climat dégradé se lit dans les chiffres (turnover, absentéisme).' },
          ],
        },
      ],
      essentiel: [
        'OST (Taylor) = division/parcellisation ; formes modernes = élargissement (même niveau), enrichissement (niveau supérieur), autonomie.',
        'Conditions de travail physiques (sécurité, bruit) et psychologiques (stress, charge).',
        'La QVT vise le bien-être et la performance (temps de travail, télétravail, prévention des risques).',
        'Climat social mesuré par le turnover et l’absentéisme ; le dialogue social (CSE) l’améliore.',
      ],
      games: [
        {
          id: 'rh-t4-qcm', type: 'qcm', title: 'QCM — Travail & climat social', icon: '❓',
          questions: [
            { q: 'L’OST (division du travail) a été théorisée par…', choices: ['Taylor', 'Maslow', 'Herzberg', 'Porter'], answer: 0, explain: 'Taylor : organisation scientifique du travail (parcellisation).' },
            { q: 'La QVT désigne…', choices: ['la qualité de vie au travail', 'la quantité de ventes', 'un type de contrat', 'un impôt'], answer: 0, explain: 'La QVT vise le bien-être et la performance au travail.' },
            { q: 'Un fort absentéisme est un signe de…', choices: ['mauvais climat social', 'bon climat social', 'forte rentabilité', 'bonne QVT'], answer: 0, explain: 'Turnover et absentéisme élevés signalent un climat dégradé.' },
            { q: 'Le CSE relève du…', choices: ['dialogue social', 'marketing', 'bilan comptable', 'mix produit'], answer: 0, explain: 'Le CSE représente le personnel (dialogue social).' },
            { q: 'Enrichir les tâches et donner de l’autonomie, c’est…', choices: ['dépasser l’OST', 'revenir au taylorisme', 'supprimer les équipes', 'baisser les salaires'], answer: 0, explain: 'Élargissement/enrichissement et autonomie dépassent l’OST.' },
            { q: 'Ajouter des tâches plus qualifiées (contrôle, décision), c’est…', choices: ['l’enrichissement des tâches', 'l’élargissement des tâches', 'la parcellisation', 'le turnover'], answer: 0, explain: 'Enrichissement = tâches de niveau supérieur (vertical).' },
            { q: 'Le taux de départs des salariés s’appelle le…', choices: ['turnover', 'absentéisme', 'dialogue social', 'para-langage'], answer: 0, explain: 'Le turnover mesure la rotation du personnel.' },
          ],
        },
        {
          id: 'rh-t4-vf', type: 'vraifaux', title: 'Vrai / Faux rapide', icon: '⚡',
          questions: [
            { statement: 'Le télétravail est un aménagement des conditions de travail.', answer: true, explain: 'Vrai : il modifie le temps et le lieu de travail.' },
            { statement: 'Le climat social se mesure notamment par le turnover et l’absentéisme.', answer: true, explain: 'Vrai : ce sont des indicateurs clés.' },
            { statement: 'Le taylorisme donne beaucoup d’autonomie aux salariés.', answer: false, explain: 'Faux : l’OST parcellise et laisse peu d’autonomie.' },
            { statement: 'L’enrichissement des tâches ajoute des responsabilités.', answer: true, explain: 'Vrai : c’est un enrichissement vertical (contrôle, décision).' },
            { statement: 'Le dialogue social se fait via les représentants du personnel (CSE).', answer: true, explain: 'Vrai : il prévient les tensions et associe les salariés.' },
          ],
        },
        {
          id: 'rh-t4-tri', type: 'tri', title: 'Tri — Condition physique ou psychologique ?', icon: '🗂️',
          instruction: 'Classe chaque condition de travail.',
          categories: [{ id: 'phy', label: 'Physique' }, { id: 'psy', label: 'Psychologique' }],
          items: [
            { text: 'Sécurité et ergonomie du poste', cat: 'phy' },
            { text: 'Charge de travail et stress', cat: 'psy' },
            { text: 'Niveau de bruit', cat: 'phy' },
            { text: 'Pression sur les délais', cat: 'psy' },
          ],
        },
        {
          id: 'rh-t4-trou', type: 'trou', title: 'Texte à trous — Travail & climat', icon: '✏️',
          questions: [
            { text: 'L’organisation scientifique du travail a été théorisée par ____ .', answer: 'Taylor', alt: ['taylor'], explain: 'Taylor : division et parcellisation des tâches.' },
            { text: 'La qualité de vie au travail se note ____ .', answer: 'QVT', alt: ['qvt'], explain: 'La QVT vise le bien-être et la performance.' },
            { text: 'Le taux de départs des salariés est le ____ .', answer: 'turnover', alt: ['le turnover'], explain: 'Turnover et absentéisme signalent le climat social.' },
            { text: 'Les échanges avec les représentants du personnel forment le ____ social.', answer: 'dialogue', alt: ['dialogue'], explain: 'Le dialogue social (CSE) améliore le climat.' },
          ],
        },
        {
          id: 'rh-t4-assoc', type: 'association', title: 'Association — Notion ↔ idée', icon: '🔗',
          pairs: [
            { left: 'OST (Taylor)', right: 'Division et parcellisation du travail' },
            { left: 'QVT', right: 'Bien-être au travail' },
            { left: 'Climat social', right: 'Ambiance et relations dans l’organisation' },
            { left: 'Dialogue social', right: 'Échanges via les représentants (CSE)' },
          ],
        },
      ],
    },
  ],
}
