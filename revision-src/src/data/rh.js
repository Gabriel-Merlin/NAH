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
      cours: [
        {
          h: 'Compétences et qualification',
          points: [
            'La **compétence** combine des savoirs (connaissances), un **savoir-faire** (pratique) et un savoir-être (comportement).',
            'La **qualification** est la reconnaissance officielle des compétences (diplôme, classification de la convention collective).',
            'La **GPEC** (gestion prévisionnelle des emplois et des compétences) anticipe les besoins futurs (recrutement, formation, mobilité).',
          ],
        },
        {
          h: 'La rémunération',
          points: [
            'La **rémunération** comprend le **salaire de base**, les primes et les **périphériques** (avantages en nature, intéressement, participation).',
            'Elle doit être perçue comme **équitable** (équité interne entre salariés, équité externe avec le marché) pour ne pas démotiver.',
          ],
        },
        {
          h: 'Motivation et implication',
          points: [
            'La **motivation** est ce qui pousse à agir : **Maslow** (pyramide des besoins), **Herzberg** (facteurs d’**hygiène** / facteurs de **motivation**).',
            'L’**implication** est l’engagement durable du salarié ; elle améliore la **performance sociale** (faible turnover et absentéisme).',
          ],
        },
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
      cours: [
        {
          h: 'Le groupe et sa dynamique',
          points: [
            'Un **groupe** réunit des membres autour d’un but commun ; chacun y a un **statut** (position) et un **rôle** (comportement attendu).',
            'La **cohésion** est la force qui unit les membres : elle améliore la performance, mais un excès peut créer du **conformisme**.',
          ],
        },
        {
          h: 'Les conflits',
          points: [
            'Un **conflit** est une opposition d’intérêts, d’opinions ou de valeurs. Il peut être **latent** (larvé) ou **ouvert** (déclaré).',
            'Sources fréquentes : divergence d’objectifs, mauvaise **communication**, répartition des ressources, rivalités.',
          ],
        },
        {
          h: 'La résolution des conflits',
          points: [
            'Modes de résolution : **négociation** entre les parties, recours **hiérarchique**, **médiation** ou **arbitrage** par un tiers.',
            'Un conflit bien géré peut être **constructif** : il fait évoluer les règles et l’organisation.',
          ],
        },
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
      cours: [
        {
          h: 'Le schéma de la communication',
          points: [
            'Communiquer : un **émetteur** transmet un **message** par un **canal** à un **récepteur**, qui renvoie un **feedback** (rétroaction).',
            'Le **bruit** (matériel, sémantique) peut perturber le message.',
            'La communication est **verbale** (mots) et **non verbale** (gestes, regard, posture, para-langage).',
          ],
        },
        {
          h: 'Communication interpersonnelle et de groupe',
          points: [
            'La qualité de la relation repose sur l’**écoute active**, l’empathie et la reformulation.',
            'Phénomènes relationnels : **influence**, **leadership**, conformisme, ascendant.',
          ],
        },
        {
          h: 'Argumenter et convaincre',
          points: [
            'L’**argumentation** vise à **convaincre** (par la raison) ou **persuader** (par l’émotion).',
            'Un **argument** appuie une affirmation par une preuve ou un exemple.',
          ],
        },
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
      keywords: 'organisation du travail Taylor OST autonomie conditions de travail QVT temps de travail télétravail climat social absentéisme dialogue social',
      cours: [
        {
          h: 'L’organisation du travail',
          points: [
            'De l’**OST** (Taylor : division et parcellisation du travail) aux formes modernes : élargissement, enrichissement des tâches, **autonomie**, travail en équipe.',
          ],
        },
        {
          h: 'Les conditions de travail',
          points: [
            'Conditions **physiques** (sécurité, ergonomie, bruit) et **psychologiques** (charge de travail, stress).',
            'La **QVT** (qualité de vie au travail) améliore le bien-être et la performance ; aménagements du **temps de travail**, **télétravail**.',
          ],
        },
        {
          h: 'Le climat social',
          points: [
            'Le **climat social** reflète l’ambiance et les relations dans l’organisation ; indicateurs : turnover, **absentéisme**, conflits.',
            'Le **dialogue social** (représentants du personnel, **CSE**) contribue à un bon climat.',
          ],
        },
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
