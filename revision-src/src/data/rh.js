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
    {
      id: 'rh-t1',
      name: 'Thème 1 — Mobiliser les ressources humaines',
      short: 'De l’individu à l’acteur',
      keywords: 'compétence qualification GPEC rémunération salaire équité motivation implication Maslow Herzberg performance sociale',
      intro: 'Comment l’organisation transforme des individus en acteurs performants : reconnaître les compétences, rémunérer équitablement et motiver durablement.',
      cours: [
        {
          h: 'Compétences et qualification',
          blocks: [
            { t: 'p', c: 'La **compétence** est la capacité à réaliser une activité. Elle combine trois dimensions : les **savoirs** (connaissances), le **savoir-faire** (la pratique, l’expérience) et le **savoir-être** (les comportements, l’attitude).' },
            { t: 'table', head: ['Notion', 'Définition', 'Exemple'], rows: [
              ['Compétence', 'Ce que la personne **sait faire réellement**', 'Savoir accueillir un client mécontent'],
              ['Qualification', 'La **reconnaissance officielle** des compétences', 'Un BTS, une classification de la convention collective'],
            ] },
            { t: 'p', c: 'La **GPEC** (gestion prévisionnelle des emplois et des compétences) anticipe les besoins futurs de l’organisation : elle agit par le **recrutement**, la **formation** et la **mobilité** interne pour réduire l’écart entre compétences actuelles et compétences requises.' },
            { t: 'tip', c: 'Ne confonds pas : la **compétence** est ce qu’on sait faire ; la **qualification** est le diplôme/niveau qui la reconnaît. On peut être compétent sans diplôme, et diplômé sans être encore compétent.' },
          ],
        },
        {
          h: 'La rémunération',
          blocks: [
            { t: 'p', c: 'La **rémunération** est la contrepartie du travail. Elle ne se limite pas au salaire : elle comprend un **salaire de base**, des **primes** (ancienneté, objectifs) et des **périphériques** (avantages en nature, **intéressement**, **participation**).' },
            { t: 'table', head: ['Composante', 'Contenu'], rows: [
              ['Salaire de base', 'Fixe, lié au poste et à la qualification'],
              ['Primes', 'Variables : performance, objectifs, ancienneté'],
              ['Périphériques', 'Avantages en nature, tickets-restaurant, intéressement, participation'],
            ] },
            { t: 'p', c: 'Pour motiver, la rémunération doit être perçue comme **équitable** : **équité interne** (cohérence entre salariés d’une même organisation) et **équité externe** (comparaison avec le marché du travail).' },
            { t: 'warning', c: 'Un sentiment d’**iniquité** (« je suis moins payé qu’un collègue au même poste ») démotive fortement, même si le salaire est objectivement correct.' },
          ],
        },
        {
          h: 'Motivation et implication',
          blocks: [
            { t: 'p', c: 'La **motivation** est ce qui pousse un salarié à agir et à fournir des efforts. Deux théories clés du programme :' },
            { t: 'table', head: ['Théorie', 'Idée principale'], rows: [
              ['**Maslow** (pyramide des besoins)', 'On cherche à satisfaire un besoin supérieur une fois les besoins inférieurs comblés (physiologiques → sécurité → appartenance → estime → accomplissement)'],
              ['**Herzberg** (bi-factorielle)', 'Les **facteurs d’hygiène** (salaire, conditions) évitent l’insatisfaction ; les **facteurs de motivation** (reconnaissance, responsabilités, intérêt) motivent vraiment'],
            ] },
            { t: 'p', c: 'L’**implication** est l’engagement durable du salarié envers son organisation. Une forte implication améliore la **performance sociale** : baisse du **turnover** (départs) et de l’**absentéisme**.' },
            { t: 'example', h: 'À retenir', c: 'Augmenter le salaire (facteur d’hygiène) fait taire le mécontentement, mais c’est la **reconnaissance** et l’**intérêt du travail** (facteurs de motivation) qui déclenchent l’effort durable.' },
          ],
        },
      ],
      essentiel: [
        'Compétence = savoir-faire réel ; qualification = reconnaissance officielle.',
        'La GPEC anticipe les besoins (recrutement, formation, mobilité).',
        'Rémunération = salaire de base + primes + périphériques ; elle doit être équitable (interne et externe).',
        'Maslow = pyramide des besoins ; Herzberg = hygiène (évite l’insatisfaction) vs motivation (motive).',
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
          ],
        },
        {
          id: 'rh-t1-vf', type: 'vraifaux', title: 'Vrai / Faux rapide', icon: '⚡',
          questions: [
            { statement: 'Compétence et qualification sont synonymes.', answer: false, explain: 'Faux : la compétence est le savoir-faire réel, la qualification sa reconnaissance officielle.' },
            { statement: 'L’implication réduit le turnover.', answer: true, explain: 'Vrai : un salarié impliqué reste et s’engage.' },
            { statement: 'La rémunération se limite au salaire de base.', answer: false, explain: 'Faux : elle inclut primes et périphériques.' },
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
    {
      id: 'rh-t2',
      name: 'Thème 2 — Cohésion et conflits',
      short: 'Groupes & conflits',
      keywords: 'groupe statut rôle dynamique cohésion conformisme conflit latent ouvert négociation médiation arbitrage',
      intro: 'Dans un groupe, chacun tient une place. La cohésion renforce la performance, mais des tensions apparaissent : savoir les repérer et les résoudre.',
      cours: [
        {
          h: 'Le groupe et sa dynamique',
          blocks: [
            { t: 'p', c: 'Un **groupe** réunit des individus autour d’un **but commun** et qui interagissent. Chaque membre y occupe un **statut** (sa position : chef, délégué…) et joue un **rôle** (le comportement attendu de lui).' },
            { t: 'table', head: ['Notion', 'Définition', 'Exemple'], rows: [
              ['Statut', 'La **position** occupée dans le groupe', 'Être chef d’équipe'],
              ['Rôle', 'Le **comportement attendu** lié à ce statut', 'Animer, organiser, motiver l’équipe'],
            ] },
            { t: 'p', c: 'La **cohésion** est la force qui unit les membres. Elle améliore l’efficacité et le climat, mais un **excès** de cohésion peut produire du **conformisme** : les avis divergents ne s’expriment plus.' },
          ],
        },
        {
          h: 'Les conflits',
          blocks: [
            { t: 'p', c: 'Un **conflit** est une opposition d’intérêts, d’opinions ou de valeurs entre des acteurs.' },
            { t: 'table', head: ['Type de conflit', 'Caractéristique'], rows: [
              ['**Latent**', 'Larvé, non exprimé ouvertement (tensions sourdes)'],
              ['**Ouvert**', 'Déclaré, visible (dispute, grève, refus)'],
            ] },
            { t: 'p', c: 'Sources fréquentes : divergence d’**objectifs**, mauvaise **communication**, répartition des **ressources**, rivalités de personnes.' },
            { t: 'tip', c: 'Un conflit n’est pas forcément négatif : bien géré, il peut être **constructif** et faire évoluer les règles et l’organisation.' },
          ],
        },
        {
          h: 'La résolution des conflits',
          blocks: [
            { t: 'p', c: 'Plusieurs modes permettent de sortir d’un conflit, du plus autonome au plus imposé :' },
            { t: 'table', head: ['Mode', 'Qui décide ?'], rows: [
              ['**Négociation**', 'Les parties trouvent un accord direct'],
              ['**Recours hiérarchique**', 'Le supérieur tranche'],
              ['**Médiation**', 'Un tiers **aide** à trouver un accord (sans l’imposer)'],
              ['**Arbitrage**', 'Un tiers **impose** une décision'],
            ] },
            { t: 'warning', c: 'Médiation ≠ arbitrage : le **médiateur** rapproche mais ne décide pas ; l’**arbitre** tranche et impose la solution.' },
          ],
        },
      ],
      essentiel: [
        'Statut = position ; rôle = comportement attendu.',
        'La cohésion unit le groupe, mais son excès crée du conformisme.',
        'Conflit latent (larvé) vs ouvert (déclaré).',
        'Résolution : négociation, recours hiérarchique, médiation (aide), arbitrage (impose).',
      ],
      games: [
        {
          id: 'rh-t2-qcm', type: 'qcm', title: 'QCM — Cohésion & conflits', icon: '❓',
          questions: [
            { q: 'Le comportement attendu d’un membre du groupe est son…', choices: ['rôle', 'statut', 'salaire', 'conflit'], answer: 0, explain: 'Statut = position occupée ; rôle = comportements attendus.' },
            { q: 'Un conflit non déclaré, larvé, est dit…', choices: ['latent', 'ouvert', 'constructif', 'résolu'], answer: 0, explain: 'Le conflit latent n’est pas encore exprimé ouvertement.' },
            { q: 'Faire appel à un tiers neutre pour rapprocher les parties, c’est…', choices: ['la médiation', 'la sanction', 'le conformisme', 'la cohésion'], answer: 0, explain: 'La médiation (ou l’arbitrage) fait intervenir un tiers.' },
            { q: 'Un excès de cohésion peut entraîner…', choices: ['du conformisme', 'plus de créativité', 'moins d’absentéisme', 'une hausse des salaires'], answer: 0, explain: 'Le conformisme étouffe les avis divergents.' },
            { q: 'Un conflit peut aussi être…', choices: ['constructif', 'toujours néfaste', 'illégal', 'un statut'], answer: 0, explain: 'Bien géré, il fait progresser l’organisation.' },
          ],
        },
        {
          id: 'rh-t2-vf', type: 'vraifaux', title: 'Vrai / Faux rapide', icon: '⚡',
          questions: [
            { statement: 'Le statut est le comportement attendu d’un membre.', answer: false, explain: 'Faux : le statut est la position ; le rôle est le comportement attendu.' },
            { statement: 'Un conflit est toujours destructeur.', answer: false, explain: 'Faux : bien géré, il peut être constructif.' },
            { statement: 'La négociation est un mode de résolution des conflits.', answer: true, explain: 'Vrai, avec le recours hiérarchique, la médiation et l’arbitrage.' },
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
    {
      id: 'rh-t3',
      name: 'Thème 3 — La communication',
      short: 'Communiquer',
      keywords: 'communication émetteur récepteur message canal feedback bruit verbale non verbale écoute active argumentation influence',
      intro: 'Communiquer, c’est bien plus qu’émettre un message : c’est écouter, décoder le non-verbal et savoir convaincre.',
      cours: [
        {
          h: 'Le schéma de la communication',
          blocks: [
            { t: 'p', c: 'Communiquer, c’est transmettre un **message**. Un **émetteur** envoie un message par un **canal** (oral, écrit, e-mail…) à un **récepteur**, qui renvoie un **feedback** (rétroaction). Le **bruit** peut perturber la transmission.' },
            { t: 'table', head: ['Élément', 'Rôle'], rows: [
              ['Émetteur', 'Celui qui envoie le message'],
              ['Message', 'L’information transmise'],
              ['Canal', 'Le moyen utilisé (oral, écrit, téléphone…)'],
              ['Récepteur', 'Celui qui reçoit et décode'],
              ['Feedback', 'La réponse qui referme la boucle'],
              ['Bruit', 'Ce qui parasite (matériel ou sémantique)'],
            ] },
            { t: 'p', c: 'La communication est **verbale** (les mots) et **non verbale** (gestes, regard, posture, para-langage : ton et débit de la voix).' },
          ],
        },
        {
          h: 'Communication interpersonnelle et de groupe',
          blocks: [
            { t: 'p', c: 'La qualité de la relation repose sur l’**écoute active** : être attentif, faire preuve d’**empathie** et **reformuler** pour vérifier qu’on a bien compris.' },
            { t: 'p', c: 'Dans un groupe apparaissent des phénomènes relationnels : l’**influence**, le **leadership** (capacité à entraîner), le conformisme et l’ascendant de certains membres.' },
            { t: 'tip', c: 'Reformuler (« si je comprends bien, tu veux dire que… ») est la marque de l’écoute active : ça évite les malentendus et valorise l’interlocuteur.' },
          ],
        },
        {
          h: 'Argumenter et convaincre',
          blocks: [
            { t: 'p', c: 'Un **argument** appuie une affirmation par une **preuve** ou un **exemple**. On distingue deux registres :' },
            { t: 'table', head: ['Registre', 'S’appuie sur…', 'Exemple'], rows: [
              ['**Convaincre**', 'La **raison**, la logique, les faits', 'Des chiffres, une démonstration'],
              ['**Persuader**', 'L’**émotion**, les sentiments', 'Une histoire touchante, l’enthousiasme'],
            ] },
            { t: 'warning', c: 'Convaincre ≠ persuader : convaincre passe par la raison ; persuader joue sur l’émotion.' },
          ],
        },
      ],
      essentiel: [
        'Schéma : émetteur → message → canal → récepteur → feedback (le bruit parasite).',
        'Communication verbale (mots) et non verbale (gestes, regard, posture).',
        'Écoute active = attention + empathie + reformulation.',
        'Convaincre = raison ; persuader = émotion.',
      ],
      games: [
        {
          id: 'rh-t3-qcm', type: 'qcm', title: 'QCM — La communication', icon: '❓',
          questions: [
            { q: 'La réponse du récepteur à l’émetteur s’appelle le…', choices: ['feedback', 'bruit', 'canal', 'statut'], answer: 0, explain: 'Le feedback (rétroaction) referme la boucle de communication.' },
            { q: 'Un regard, une posture relèvent de la communication…', choices: ['non verbale', 'verbale', 'écrite', 'financière'], answer: 0, explain: 'Le non-verbal = gestes, regard, posture, para-langage.' },
            { q: 'Reformuler et se montrer attentif, c’est pratiquer…', choices: ['l’écoute active', 'le conformisme', 'un conflit', 'un feedback négatif'], answer: 0, explain: 'L’écoute active améliore la relation.' },
            { q: 'Ce qui perturbe la transmission du message est…', choices: ['le bruit', 'le canal', 'le feedback', 'l’émetteur'], answer: 0, explain: 'Le bruit (matériel ou sémantique) parasite le message.' },
            { q: 'Convaincre s’appuie surtout sur…', choices: ['la raison', 'l’émotion', 'la peur', 'le hasard'], answer: 0, explain: 'Convaincre = raison ; persuader = émotion.' },
          ],
        },
        {
          id: 'rh-t3-vf', type: 'vraifaux', title: 'Vrai / Faux rapide', icon: '⚡',
          questions: [
            { statement: 'Le canal est le moyen par lequel passe le message.', answer: true, explain: 'Vrai : oral, écrit, téléphone, e-mail…' },
            { statement: 'La communication non verbale n’a aucune importance.', answer: false, explain: 'Faux : gestes et posture transmettent beaucoup d’information.' },
            { statement: 'Persuader fait plutôt appel à l’émotion.', answer: true, explain: 'Vrai : persuader = émotion ; convaincre = raison.' },
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
      ],
    },
    {
      id: 'rh-t4',
      name: 'Thème 4 — Coordination et conditions de travail',
      short: 'Travail & climat social',
      keywords: 'organisation du travail Taylor OST autonomie conditions de travail QVT temps de travail télétravail climat social absentéisme dialogue social CSE',
      intro: 'La façon d’organiser le travail et de soigner les conditions influence directement le bien-être des salariés… et la performance de l’organisation.',
      cours: [
        {
          h: 'L’organisation du travail',
          blocks: [
            { t: 'p', c: 'L’**OST** (organisation scientifique du travail), théorisée par **Taylor**, repose sur la **division** et la **parcellisation** des tâches : chaque salarié répète une opération simple. Gain de productivité, mais travail répétitif et peu motivant.' },
            { t: 'table', head: ['Forme moderne', 'Principe'], rows: [
              ['Élargissement des tâches', 'Regrouper plusieurs tâches de même niveau'],
              ['Enrichissement des tâches', 'Ajouter des tâches plus qualifiées (contrôle, décision)'],
              ['Autonomie / équipes', 'Donner de la liberté et travailler en groupe'],
            ] },
            { t: 'tip', c: 'Les formes modernes cherchent à **dépasser le taylorisme** en redonnant du sens, de l’**autonomie** et de la variété au travail.' },
          ],
        },
        {
          h: 'Les conditions de travail',
          blocks: [
            { t: 'p', c: 'Les **conditions de travail** regroupent tout ce qui entoure l’activité :' },
            { t: 'table', head: ['Type', 'Exemples'], rows: [
              ['**Physiques**', 'Sécurité, ergonomie du poste, bruit, température'],
              ['**Psychologiques**', 'Charge de travail, stress, pression sur les délais'],
            ] },
            { t: 'p', c: 'La **QVT** (qualité de vie au travail) vise le **bien-être** des salariés (et donc la performance) : aménagement du **temps de travail**, **télétravail**, prévention des risques.' },
          ],
        },
        {
          h: 'Le climat social',
          blocks: [
            { t: 'p', c: 'Le **climat social** reflète l’ambiance et la qualité des relations dans l’organisation. On le mesure par des **indicateurs** : le **turnover** (départs), l’**absentéisme**, le nombre de conflits.' },
            { t: 'p', c: 'Le **dialogue social** — les échanges avec les **représentants du personnel** (le **CSE**, comité social et économique) — contribue à un bon climat en prévenant les tensions.' },
            { t: 'warning', c: 'Un **turnover** et un **absentéisme** élevés sont des signaux d’alerte d’un **climat social dégradé**.' },
          ],
        },
      ],
      essentiel: [
        'OST (Taylor) = division/parcellisation ; formes modernes = élargissement, enrichissement, autonomie.',
        'Conditions de travail physiques (sécurité, bruit) et psychologiques (stress, charge).',
        'La QVT vise le bien-être et la performance (télétravail, temps de travail).',
        'Climat social mesuré par turnover et absentéisme ; le dialogue social (CSE) l’améliore.',
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
          ],
        },
        {
          id: 'rh-t4-vf', type: 'vraifaux', title: 'Vrai / Faux rapide', icon: '⚡',
          questions: [
            { statement: 'Le télétravail est un aménagement des conditions de travail.', answer: true, explain: 'Vrai : il modifie le temps et le lieu de travail.' },
            { statement: 'Le climat social se mesure notamment par le turnover et l’absentéisme.', answer: true, explain: 'Vrai : ce sont des indicateurs clés.' },
            { statement: 'Le taylorisme donne beaucoup d’autonomie aux salariés.', answer: false, explain: 'Faux : l’OST parcellise et laisse peu d’autonomie.' },
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
