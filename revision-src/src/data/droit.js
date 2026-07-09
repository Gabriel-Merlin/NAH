// DROIT — thèmes 5 à 8 du programme de Terminale STMG.
// Contenu relu pour la rigueur juridique (vocabulaire et solutions conformes
// au programme officiel). Méthode : syllogisme (règle → faits → conclusion).
export const droit = {
  id: 'droit',
  name: 'Droit',
  short: 'Droit',
  icon: '⚖️',
  color: '#d97706',
  tagline: 'Qualifier la situation puis résoudre le problème de droit.',
  chapters: [
    // ===================================================================
    {
      id: 'droit-t5',
      name: 'Thème 5 — Quel est le rôle du contrat ?',
      short: 'Le contrat',
      keywords: 'contrat consentement capacité contenu licite vices erreur dol violence force obligatoire nullité inexécution résolution',
      cours: [
        {
          h: 'Définition et validité',
          points: [
            'Le **contrat** est un accord de volontés destiné à **créer des obligations** entre les parties.',
            'Conditions de validité (art. 1128 du Code civil) : le **consentement**, la **capacité** et un **contenu licite et certain**.',
            'Le consentement doit être **libre et éclairé**, donc exempt de **vices** : **erreur, dol, violence**.',
            'Force obligatoire (art. 1103) : « le contrat fait la loi des parties ».',
          ],
        },
        {
          h: 'Vices du consentement et inexécution',
          points: [
            'Un **vice du consentement** entraîne la **nullité** du contrat (anéantissement + restitutions).',
            'Le **dol** est une tromperie (mensonge, manœuvre, voire silence) déterminante du consentement.',
            'En cas d’**inexécution**, le créancier peut demander l’**exécution forcée**, la **résolution** du contrat ou des **dommages et intérêts**.',
          ],
        },
      ],
      formulas: ['Validité (art. 1128) : consentement + capacité + contenu licite et certain'],
      games: [
        {
          id: 'droit-t5-qcm',
          type: 'qcm',
          title: 'QCM — Le contrat',
          icon: '❓',
          questions: [
            {
              q: 'Un contrat est un accord de volontés qui a pour effet de…',
              choices: [
                'créer des obligations entre les parties',
                'sanctionner une infraction pénale',
                'réparer un dommage causé à un tiers',
                'immatriculer une société',
              ],
              answer: 0,
              explain: 'Le contrat crée des obligations entre les parties (le contracter, payer, livrer…).',
            },
            {
              q: 'Selon l’article 1128 du Code civil, la validité d’un contrat suppose…',
              choices: [
                'le consentement, la capacité et un contenu licite et certain',
                'un écrit signé et enregistré',
                'la présence obligatoire d’un notaire',
                'le versement d’un acompte',
              ],
              answer: 0,
              explain: 'Les trois conditions de validité sont : le consentement, la capacité et un contenu licite et certain.',
            },
            {
              q: 'Un vendeur dissimule volontairement que la voiture a été accidentée pour décider l’acheteur. Ce comportement caractérise…',
              choices: ['un dol', 'une simple erreur de l’acheteur', 'une violence', 'un cas de force majeure'],
              answer: 0,
              explain: 'La tromperie (mensonge, manœuvre ou réticence) déterminante du consentement est un dol : vice du consentement pouvant entraîner la nullité.',
            },
            {
              q: 'La règle selon laquelle les parties sont tenues de respecter leurs engagements se nomme…',
              choices: [
                'la force obligatoire du contrat',
                'la liberté contractuelle',
                'la nullité du contrat',
                'la résolution du contrat',
              ],
              answer: 0,
              explain: '« Le contrat fait la loi des parties » (art. 1103) : c’est la force obligatoire.',
            },
            {
              q: 'La sanction d’un vice du consentement est…',
              choices: ['la nullité du contrat', 'une amende pénale', 'une contravention', 'un licenciement'],
              answer: 0,
              explain: 'Un vice du consentement (erreur, dol, violence) peut entraîner la nullité du contrat.',
            },
            {
              q: 'En cas d’inexécution du contrat, le créancier peut notamment demander…',
              choices: [
                'l’exécution forcée, la résolution ou des dommages et intérêts',
                'une peine d’emprisonnement du débiteur',
                'une amende pénale automatique',
                'la dissolution d’une société',
              ],
              answer: 0,
              explain: 'Les sanctions civiles de l’inexécution sont l’exécution forcée, la résolution et/ou les dommages et intérêts.',
            },
          ],
        },
        {
          id: 'droit-t5-ordre',
          type: 'ordre',
          title: 'Remise en ordre — Le syllogisme juridique',
          icon: '🔢',
          instruction: 'Remets les étapes du raisonnement juridique dans l’ordre.',
          steps: ['Majeure : la règle de droit', 'Mineure : les faits qualifiés', 'Conclusion : application de la règle aux faits'],
          explain: 'Syllogisme : règle de droit (majeure) → faits qualifiés (mineure) → conclusion.',
        },
        {
          id: 'droit-t5-flash',
          type: 'flashcard',
          title: 'Flashcards — Notions du contrat',
          icon: '🃏',
          cards: [
            { front: 'Contrat', back: 'Accord de volontés créant des obligations entre les parties.' },
            { front: 'Les 3 conditions de validité (art. 1128)', back: 'Consentement, capacité, contenu licite et certain.' },
            { front: 'Les 3 vices du consentement', back: 'Erreur, dol, violence.' },
            { front: 'Force obligatoire (art. 1103)', back: '« Le contrat fait la loi des parties ».' },
            { front: 'Sanctions de l’inexécution', back: 'Exécution forcée, résolution, dommages et intérêts.' },
          ],
        },
        {
          id: 'droit-t5-assoc',
          type: 'association',
          title: 'Association — Notion du contrat ↔ définition',
          icon: '🔗',
          pairs: [
            { left: 'Consentement', right: 'Accord de volonté libre et éclairé' },
            { left: 'Capacité', right: 'Aptitude juridique à s’engager' },
            { left: 'Dol', right: 'Tromperie qui vicie le consentement' },
            { left: 'Force obligatoire', right: '« Le contrat fait la loi des parties »' },
            { left: 'Nullité', right: 'Anéantissement du contrat (restitutions)' },
          ],
        },
        {
          id: 'droit-t5-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'La liberté contractuelle permet, en principe, de choisir de contracter ou non, et avec qui.', answer: true, explain: 'Vrai : c’est un principe, encadré par la loi et l’ordre public.' },
            { statement: 'Dans la plupart des cas, un contrat se forme par le seul accord des volontés, sans écrit obligatoire.', answer: true, explain: 'Vrai : c’est le principe du consensualisme (certains contrats exigent toutefois un écrit).' },
            { statement: 'Le dol peut entraîner la nullité du contrat.', answer: true, explain: 'Vrai : le dol vicie le consentement.' },
            { statement: 'Une fois conclu, un contrat peut être rompu librement par une seule partie, à tout moment.', answer: false, explain: 'Faux : la force obligatoire impose de respecter ses engagements.' },
            { statement: 'Le contenu du contrat doit être licite et certain.', answer: true, explain: 'Vrai : c’est l’une des conditions de validité (art. 1128).' },
          ],
        },
      ],
    },
    // ===================================================================
    {
      id: 'droit-t6',
      name: 'Thème 6 — Qu’est-ce qu’être responsable ?',
      short: 'Responsabilité',
      keywords: 'responsabilité civile délictuelle extracontractuelle contractuelle fait générateur dommage préjudice lien de causalité pénale infraction dommages et intérêts',
      cours: [
        {
          h: 'La responsabilité civile',
          points: [
            'But : **réparer** un dommage causé à autrui.',
            '**Contractuelle** (le dommage naît de l’inexécution d’un contrat) ou **délictuelle / extracontractuelle** (hors de tout contrat).',
            'Trois conditions : **fait générateur + dommage (préjudice) + lien de causalité**.',
            'Le préjudice réparable doit notamment être **certain, direct et personnel**.',
            'Réparation = **dommages et intérêts**.',
          ],
        },
        {
          h: 'La responsabilité pénale',
          points: [
            'But : **sanctionner** l’auteur d’une **infraction**.',
            'Infractions par gravité croissante : **contravention, délit, crime**.',
            'Un même fait peut engager **à la fois** la responsabilité civile et la responsabilité pénale.',
          ],
        },
      ],
      formulas: ['Responsabilité civile = fait générateur + dommage + lien de causalité'],
      games: [
        {
          id: 'droit-t6-qcm',
          type: 'qcm',
          title: 'QCM — La responsabilité',
          icon: '❓',
          questions: [
            {
              q: 'La responsabilité civile a pour but principal…',
              choices: [
                'de réparer le dommage causé à autrui',
                'de punir l’auteur par une peine',
                'de percevoir un impôt',
                'd’annuler un contrat',
              ],
              answer: 0,
              explain: 'La responsabilité civile répare (dommages et intérêts) ; c’est la pénale qui sanctionne.',
            },
            {
              q: 'Les trois conditions de la responsabilité civile sont…',
              choices: [
                'un fait générateur, un dommage et un lien de causalité',
                'une faute, une amende et une peine',
                'un contrat, un salaire et une subordination',
                'une offre, une acceptation et un prix',
              ],
              answer: 0,
              explain: 'Il faut un fait générateur, un dommage (préjudice) et un lien de causalité entre les deux.',
            },
            {
              q: 'Lorsque le dommage résulte de l’inexécution d’un contrat, la responsabilité civile est…',
              choices: ['contractuelle', 'délictuelle', 'pénale', 'administrative'],
              answer: 0,
              explain: 'Le dommage né de l’inexécution d’un contrat relève de la responsabilité contractuelle.',
            },
            {
              q: 'En l’absence de tout contrat entre l’auteur et la victime, la responsabilité civile est…',
              choices: ['délictuelle (extracontractuelle)', 'contractuelle', 'pénale', 'inexistante'],
              answer: 0,
              explain: 'Hors de tout contrat, la responsabilité civile est délictuelle (extracontractuelle).',
            },
            {
              q: 'La réparation du dommage en responsabilité civile prend le plus souvent la forme…',
              choices: ['de dommages et intérêts', 'd’une peine d’emprisonnement', 'd’une amende pénale', 'd’un simple avertissement'],
              answer: 0,
              explain: 'La victime obtient réparation sous forme de dommages et intérêts.',
            },
            {
              q: 'La responsabilité pénale a pour but…',
              choices: [
                'de sanctionner l’auteur d’une infraction',
                'de réparer le préjudice de la victime',
                'd’exécuter un contrat',
                'de fixer le prix d’une vente',
              ],
              answer: 0,
              explain: 'La responsabilité pénale sanctionne une infraction, au nom de la société.',
            },
            {
              q: 'Classées par gravité croissante, les infractions sont…',
              choices: [
                'contraventions, délits, crimes',
                'crimes, délits, contraventions',
                'délits, contraventions, crimes',
                'contraventions, crimes, délits',
              ],
              answer: 0,
              explain: 'De la moins grave à la plus grave : contravention, délit, crime.',
            },
          ],
        },
        {
          id: 'droit-t6-tri',
          type: 'tri',
          title: 'Tri — Responsabilité civile ou pénale ?',
          icon: '🗂️',
          instruction: 'Classe selon la finalité de la responsabilité.',
          categories: [
            { id: 'civ', label: 'Civile (réparer)' },
            { id: 'pen', label: 'Pénale (sanctionner)' },
          ],
          items: [
            { text: 'Verser des dommages et intérêts à la victime', cat: 'civ' },
            { text: 'Condamner l’auteur d’un délit à une peine', cat: 'pen' },
            { text: 'Indemniser une personne blessée', cat: 'civ' },
            { text: 'Sanctionner un crime ou une contravention', cat: 'pen' },
          ],
        },
        {
          id: 'droit-t6-assoc',
          type: 'association',
          title: 'Association — Condition ↔ exemple (cas du sol mouillé)',
          icon: '🔗',
          pairs: [
            { left: 'Fait générateur', right: 'Le sol laissé mouillé sans signalisation' },
            { left: 'Dommage (préjudice)', right: 'La fracture du poignet et l’opération' },
            { left: 'Lien de causalité', right: 'La chute résulte de l’absence de signalisation' },
          ],
        },
        {
          id: 'droit-t6-flash',
          type: 'flashcard',
          title: 'Flashcards — Responsabilité',
          icon: '🃏',
          cards: [
            { front: 'Responsabilité civile', back: 'Obligation de réparer le dommage causé à autrui.' },
            { front: 'Délictuelle / contractuelle', back: 'Hors contrat / née de l’inexécution d’un contrat.' },
            { front: 'Préjudice réparable', back: 'Doit être certain, direct et personnel.' },
            { front: 'Lien de causalité', back: 'Rapport de cause à effet entre le fait générateur et le dommage.' },
            { front: 'Responsabilité pénale', back: 'Sanctionne une infraction (contravention, délit, crime).' },
          ],
        },
        {
          id: 'droit-t6-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'La responsabilité civile vise à réparer, la responsabilité pénale à sanctionner.', answer: true, explain: 'Vrai : ce sont leurs finalités respectives.' },
            { statement: 'Un même fait peut engager à la fois la responsabilité civile et la responsabilité pénale.', answer: true, explain: 'Vrai : ex. une agression (peine + dommages et intérêts).' },
            { statement: 'Sans lien de causalité entre le fait générateur et le dommage, la responsabilité civile n’est pas engagée.', answer: true, explain: 'Vrai : les trois conditions doivent être réunies.' },
            { statement: 'La responsabilité délictuelle suppose un contrat entre les parties.', answer: false, explain: 'Faux : la délictuelle joue justement hors de tout contrat.' },
            { statement: 'Pour être réparable, le préjudice doit notamment être certain.', answer: true, explain: 'Vrai : certain, direct et personnel.' },
          ],
        },
      ],
    },
    // ===================================================================
    {
      id: 'droit-t7',
      name: 'Thème 7 — Comment le droit encadre-t-il le travail salarié ?',
      short: 'Travail salarié',
      keywords: 'contrat de travail lien de subordination CDI CDD intérim écrit convention collective sources licenciement motif réel et sérieux rupture conventionnelle',
      cours: [
        {
          h: 'Le contrat de travail',
          points: [
            'Trois éléments : une **prestation de travail**, une **rémunération** et un **lien de subordination juridique** (critère déterminant).',
            'Le **lien de subordination** = pouvoir de l’employeur de donner des ordres, d’en contrôler l’exécution et de sanctionner.',
            'Le **CDI** est la forme normale et générale de la relation de travail ; le **CDD** et l’**intérim** sont l’exception (cas de recours, **écrit obligatoire**).',
            'Sources : **Code du travail**, **conventions et accords collectifs**, règlement intérieur, contrat de travail.',
          ],
        },
        {
          h: 'La rupture du contrat',
          points: [
            '**Démission** (salarié), **licenciement** (employeur : **motif réel et sérieux** + procédure), **rupture conventionnelle** (accord homologué).',
            'Le licenciement peut être **pour motif personnel** ou **pour motif économique**.',
          ],
        },
      ],
      formulas: ['Contrat de travail = prestation de travail + rémunération + lien de subordination'],
      games: [
        {
          id: 'droit-t7-qcm',
          type: 'qcm',
          title: 'QCM — Le travail salarié',
          icon: '❓',
          questions: [
            {
              q: 'Le critère déterminant du contrat de travail est…',
              choices: ['le lien de subordination juridique', 'la durée du travail', 'le lieu de travail', 'le montant du salaire'],
              answer: 0,
              explain: 'C’est le lien de subordination (ordres, contrôle, sanction) qui caractérise le contrat de travail.',
            },
            {
              q: 'Une personne exécute un travail, est rémunérée et reçoit des ordres, sans contrat écrit. La relation est…',
              choices: [
                'un contrat de travail (présumé à durée indéterminée)',
                'nulle faute d’écrit',
                'un contrat commercial',
                'du bénévolat',
              ],
              answer: 0,
              explain: 'La subordination caractérise un contrat de travail ; sans écrit fixant un terme, il est présumé à durée indéterminée (CDI).',
            },
            {
              q: 'La forme normale et générale de la relation de travail est…',
              choices: ['le CDI', 'le CDD', 'l’intérim', 'le stage'],
              answer: 0,
              explain: 'Le CDI est le contrat de droit commun ; CDD et intérim sont l’exception.',
            },
            {
              q: 'Contrairement au CDI, le CDD doit obligatoirement…',
              choices: [
                'être établi par écrit et reposer sur un cas de recours prévu par la loi',
                'durer au moins deux ans',
                'être conclu sans aucun terme',
                'être renouvelé indéfiniment',
              ],
              answer: 0,
              explain: 'Le CDD est écrit et motivé (cas de recours) ; à défaut, il peut être requalifié en CDI.',
            },
            {
              q: 'Un licenciement n’est régulier que s’il repose sur…',
              choices: [
                'un motif réel et sérieux, avec respect d’une procédure',
                'la seule volonté de l’employeur',
                'une décision du salarié',
                'un tirage au sort',
              ],
              answer: 0,
              explain: 'Le licenciement exige un motif réel et sérieux (personnel ou économique) et une procédure.',
            },
            {
              q: 'Parmi les sources du droit du travail figurent notamment…',
              choices: [
                'le Code du travail et les conventions collectives',
                'le seul Code civil',
                'les statuts de la société',
                'le règlement européen sur la TVA',
              ],
              answer: 0,
              explain: 'Code du travail, conventions et accords collectifs, règlement intérieur et contrat encadrent la relation de travail.',
            },
          ],
        },
        {
          id: 'droit-t7-assoc',
          type: 'association',
          title: 'Association — Rupture ↔ définition',
          icon: '🔗',
          pairs: [
            { left: 'Démission', right: 'Rupture à l’initiative du salarié' },
            { left: 'Licenciement', right: 'Rupture par l’employeur (motif réel et sérieux)' },
            { left: 'Rupture conventionnelle', right: 'Rupture du CDI d’un commun accord (homologuée)' },
            { left: 'Convention collective', right: 'Accord négocié applicable à une branche' },
          ],
        },
        {
          id: 'droit-t7-flash',
          type: 'flashcard',
          title: 'Flashcards — Travail salarié',
          icon: '🃏',
          cards: [
            { front: 'Lien de subordination', back: 'Pouvoir de l’employeur de donner des ordres, contrôler, sanctionner.' },
            { front: 'CDI', back: 'Contrat à durée indéterminée : la forme normale du contrat de travail.' },
            { front: 'CDD', back: 'Contrat à durée déterminée : écrit et motivé par un cas de recours.' },
            { front: 'Rupture conventionnelle', back: 'Rupture du CDI d’un commun accord, soumise à homologation.' },
            { front: 'Sources du droit du travail', back: 'Code du travail, conventions/accords collectifs, règlement intérieur, contrat.' },
          ],
        },
        {
          id: 'droit-t7-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'Le lien de subordination caractérise le contrat de travail.', answer: true, explain: 'Vrai : c’est le critère déterminant.' },
            { statement: 'Un CDD doit obligatoirement être établi par écrit.', answer: true, explain: 'Vrai : à défaut, il peut être requalifié en CDI.' },
            { statement: 'Le CDI est la forme normale du contrat de travail.', answer: true, explain: 'Vrai : CDD et intérim sont l’exception encadrée.' },
            { statement: 'L’employeur peut licencier un salarié sans aucun motif.', answer: false, explain: 'Faux : il faut un motif réel et sérieux et une procédure.' },
            { statement: 'Une convention collective peut compléter le Code du travail pour une branche.', answer: true, explain: 'Vrai : elle adapte les règles à une profession.' },
          ],
        },
      ],
    },
    // ===================================================================
    {
      id: 'droit-t8',
      name: 'Thème 8 — Dans quel cadre et comment entreprendre ?',
      short: 'Entreprendre',
      keywords: 'liberté d’entreprendre entreprise individuelle société personne physique morale propriété industrielle brevet marque concurrence déloyale',
      cours: [
        {
          h: 'Le cadre juridique de l’entreprise',
          points: [
            '**Liberté d’entreprendre** (à valeur constitutionnelle) et liberté du commerce et de l’industrie.',
            'Choix de la structure : **entreprise individuelle** (personne **physique**) ou **société** (personne **morale**, distincte des associés).',
            'Ce choix a des conséquences sur la **responsabilité** et le **patrimoine**.',
          ],
        },
        {
          h: 'Protéger l’activité',
          points: [
            'Propriété industrielle : le **brevet** protège une **invention** ; la **marque** protège un **signe distinctif** (nom, logo).',
            'La concurrence doit rester **loyale** : le **dénigrement**, l’imitation trompeuse ou le parasitisme constituent une **concurrence déloyale**.',
            'La concurrence déloyale est sanctionnée par une **action en responsabilité civile** (dommages et intérêts).',
          ],
        },
      ],
      formulas: ['Entreprise individuelle = personne physique · Société = personne morale'],
      games: [
        {
          id: 'droit-t8-qcm',
          type: 'qcm',
          title: 'QCM — Entreprendre',
          icon: '❓',
          questions: [
            {
              q: 'La liberté d’entreprendre permet…',
              choices: [
                'de créer et d’exercer librement une activité économique',
                'de ne payer aucun impôt',
                'de fixer seul le droit du travail',
                'de contourner tout contrat',
              ],
              answer: 0,
              explain: 'La liberté d’entreprendre (à valeur constitutionnelle) permet de créer et d’exercer une activité, dans le respect de la loi.',
            },
            {
              q: 'Une société dotée de la personnalité juridique est…',
              choices: ['une personne morale', 'une personne physique', 'une administration de l’État', 'un simple contrat'],
              answer: 0,
              explain: 'La société est une personne morale, distincte de ses associés.',
            },
            {
              q: 'L’entrepreneur individuel est…',
              choices: ['une personne physique', 'une personne morale', 'une société anonyme', 'une association'],
              answer: 0,
              explain: 'L’entreprise individuelle est exploitée par une personne physique.',
            },
            {
              q: 'Le brevet protège…',
              choices: [
                'une invention technique',
                'un nom ou un logo',
                'un salarié',
                'un contrat de vente',
              ],
              answer: 0,
              explain: 'Le brevet protège une invention ; la marque, elle, protège un signe distinctif.',
            },
            {
              q: 'La marque protège…',
              choices: ['un signe distinctif (nom, logo)', 'une invention technique', 'un procédé de fabrication', 'un salaire'],
              answer: 0,
              explain: 'La marque protège un signe distinctif qui identifie les produits ou services.',
            },
            {
              q: 'Dénigrer publiquement un concurrent par des propos mensongers constitue…',
              choices: [
                'un acte de concurrence déloyale',
                'un exercice normal de la concurrence',
                'un droit garanti par la marque',
                'une clause du contrat',
              ],
              answer: 0,
              explain: 'Le dénigrement est un acte de concurrence déloyale, sanctionné par une action en responsabilité civile.',
            },
          ],
        },
        {
          id: 'droit-t8-assoc',
          type: 'association',
          title: 'Association — Notion ↔ définition',
          icon: '🔗',
          pairs: [
            { left: 'Personne morale', right: 'Société dotée de sa propre personnalité juridique' },
            { left: 'Personne physique', right: 'Un individu (ex. l’entrepreneur individuel)' },
            { left: 'Brevet', right: 'Protège une invention technique' },
            { left: 'Marque', right: 'Protège un signe distinctif (nom, logo)' },
            { left: 'Concurrence déloyale', right: 'Pratiques fautives (dénigrement, imitation, parasitisme)' },
          ],
        },
        {
          id: 'droit-t8-flash',
          type: 'flashcard',
          title: 'Flashcards — Entreprendre',
          icon: '🃏',
          cards: [
            { front: 'Liberté d’entreprendre', back: 'Liberté (à valeur constitutionnelle) de créer et d’exercer une activité économique.' },
            { front: 'Entreprise individuelle', back: 'Activité exploitée par une personne physique.' },
            { front: 'Société', back: 'Personne morale distincte de ses associés.' },
            { front: 'Brevet / marque', back: 'Le brevet protège une invention ; la marque, un signe distinctif.' },
            { front: 'Concurrence déloyale', back: 'Pratiques fautives sanctionnées par une action en responsabilité civile.' },
          ],
        },
        {
          id: 'droit-t8-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'La liberté d’entreprendre a une valeur constitutionnelle.', answer: true, explain: 'Vrai : elle est reconnue par le Conseil constitutionnel.' },
            { statement: 'Une société est une personne morale distincte de ses associés.', answer: true, explain: 'Vrai : elle a sa propre personnalité juridique.' },
            { statement: 'La marque protège une invention technique.', answer: false, explain: 'Faux : c’est le brevet ; la marque protège un signe distinctif.' },
            { statement: 'Le dénigrement d’un concurrent est un acte de concurrence déloyale.', answer: true, explain: 'Vrai : il engage la responsabilité civile de son auteur.' },
          ],
        },
      ],
    },
  ],
}
