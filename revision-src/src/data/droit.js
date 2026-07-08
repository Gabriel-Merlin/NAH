// DROIT — thèmes 5 à 8. Méthode : syllogisme juridique (règle → faits → conclusion).
export const droit = {
  id: 'droit',
  name: 'Droit',
  short: 'Droit',
  icon: '⚖️',
  color: '#d97706',
  tagline: 'Qualifier la situation puis résoudre le problème de droit.',
  chapters: [
    {
      id: 'droit-t5',
      name: 'Thème 5 — Quel est le rôle du contrat ?',
      short: 'Le contrat',
      keywords: 'contrat consentement vices erreur dol violence capacité force obligatoire nullité inexécution',
      cours: [
        {
          h: 'Définition et validité',
          points: [
            '**Contrat** : accord de volontés créant des obligations.',
            'Conditions de validité : **consentement** (libre et éclairé → absence de vices : erreur, dol, violence), **capacité**, contenu **licite et certain**.',
            'Force obligatoire : « **le contrat fait la loi des parties** ».',
          ],
        },
        {
          h: 'Inexécution',
          points: [
            'Inexécution → sanctions : exécution forcée, résolution, dommages et intérêts.',
            'Le **dol** (manœuvre ou mensonge déterminant) est une cause de **nullité** du contrat.',
          ],
        },
      ],
      formulas: ['Validité : consentement (sans vice) + capacité + contenu licite et certain'],
      games: [
        {
          id: 'droit-t5-qcm',
          type: 'qcm',
          title: 'QCM — Le contrat',
          icon: '❓',
          questions: [
            {
              q: 'Un contrat est valable si le consentement est…',
              choices: ['libre et éclairé (sans vice)', 'donné oralement uniquement', 'signé devant notaire', 'accompagné d’un paiement'],
              answer: 0,
              explain: 'Le consentement doit être libre et éclairé (sans erreur, dol ni violence). La validité suppose aussi la capacité et un contenu licite et certain (art. 1128 du Code civil).',
            },
            {
              q: 'Le garagiste ment sur l’absence d’accident du véhicule. Il s’agit d’un…',
              choices: ['dol', 'cas de force majeure', 'contrat licite', 'défaut de capacité'],
              answer: 0,
              explain: 'Le mensonge déterminant destiné à tromper est un dol, cause de nullité.',
            },
            {
              q: '« Le contrat fait la loi des parties » exprime…',
              choices: ['la force obligatoire du contrat', 'la nullité du contrat', 'la liberté de rompre à tout moment', "l'incapacité juridique"],
              answer: 0,
              explain: 'C’est la force obligatoire : les parties sont tenues de respecter leurs engagements.',
            },
            {
              q: 'Quelle sanction peut suivre l’inexécution d’un contrat ?',
              choices: ['Des dommages et intérêts', 'Une peine de prison automatique', 'La perte de la nationalité', 'Une amende pénale systématique'],
              answer: 0,
              explain: 'Inexécution → exécution forcée, résolution ou dommages et intérêts.',
            },
          ],
        },
        {
          id: 'droit-t5-ordre',
          type: 'ordre',
          title: 'Remise en ordre — Le syllogisme juridique',
          icon: '🔢',
          instruction: 'Remets les étapes du raisonnement juridique dans l’ordre.',
          steps: ['Majeure : la règle de droit', 'Mineure : les faits qualifiés', 'Conclusion : application au cas'],
          explain: 'Syllogisme : règle de droit (majeure) → faits (mineure) → conclusion.',
        },
        {
          id: 'droit-t5-flash',
          type: 'flashcard',
          title: 'Flashcards — Notions du contrat',
          icon: '🃏',
          cards: [
            { front: 'Contrat', back: 'Accord de volontés créant des obligations.' },
            { front: 'Dol', back: 'Manœuvre ou mensonge déterminant pour tromper le cocontractant (vice du consentement).' },
            { front: 'Erreur', back: 'Fausse représentation de la réalité au moment de contracter (vice du consentement).' },
            { front: 'Nullité', back: 'Sanction qui anéantit le contrat (restitution) en cas de vice.' },
            { front: 'Force obligatoire', back: '« Le contrat fait la loi des parties ».' },
          ],
        },
        {
          id: 'droit-t5-assoc',
          type: 'association',
          title: 'Association — Notion du contrat ↔ définition',
          icon: '🔗',
          pairs: [
            { left: 'Erreur (vice)', right: 'Se tromper sur une qualité essentielle' },
            { left: 'Dol (vice)', right: 'Être trompé par un mensonge ou une manœuvre' },
            { left: 'Violence (vice)', right: 'Consentement extorqué par la contrainte' },
            { left: 'Capacité (condition)', right: 'Aptitude juridique à s’engager' },
          ],
        },
        {
          id: 'droit-t5-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'Le dol peut entraîner la nullité du contrat.', answer: true, explain: 'Vrai : le dol vicie le consentement et permet d’annuler le contrat.' },
            { statement: 'Un contrat n’a aucune force obligatoire.', answer: false, explain: 'Faux : « le contrat fait la loi des parties ».' },
            { statement: 'Le contenu du contrat doit être licite et certain.', answer: true, explain: 'Vrai : c’est une condition de validité.' },
          ],
        },
      ],
    },
    {
      id: 'droit-t6',
      name: 'Thème 6 — Qu’est-ce qu’être responsable ?',
      short: 'Responsabilité',
      keywords: 'responsabilité civile délictuelle contractuelle fait générateur dommage préjudice lien de causalité pénale dommages et intérêts',
      cours: [
        {
          h: 'La responsabilité civile',
          points: [
            'But : **réparer un dommage** causé à autrui.',
            'Contractuelle (inexécution d’un contrat) vs délictuelle (fait juridique, hors contrat).',
            'Trois conditions : **fait générateur + dommage (préjudice) + lien de causalité**.',
            'Réparation = **dommages et intérêts**.',
          ],
        },
        {
          h: 'La responsabilité pénale',
          points: [
            'But : **sanctionner une infraction** (contravention, délit, crime).',
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
              q: 'Les trois conditions de la responsabilité civile sont :',
              choices: [
                'fait générateur, dommage, lien de causalité',
                'faute, prison, amende',
                'contrat, salaire, subordination',
                'offre, acceptation, prix',
              ],
              answer: 0,
              explain: 'Il faut un fait générateur, un dommage (préjudice) et un lien de causalité.',
            },
            {
              q: 'Une entreprise de nettoyage laisse un sol mouillé non signalé ; une cliente glisse. Aucun contrat ne lie l’entreprise et la cliente. C’est une responsabilité civile…',
              choices: ['délictuelle (extracontractuelle)', 'contractuelle', 'pénale uniquement', 'inexistante'],
              answer: 0,
              explain: 'Aucun contrat ne lie l’auteur du dommage (l’entreprise de nettoyage) à la victime : la responsabilité civile est donc délictuelle (extracontractuelle).',
            },
            {
              q: 'La responsabilité civile a pour but de…',
              choices: ['réparer le dommage', 'emprisonner l’auteur', 'annuler un contrat', 'percevoir un impôt'],
              answer: 0,
              explain: 'La responsabilité civile répare (dommages et intérêts) ; la pénale sanctionne.',
            },
            {
              q: 'La réparation d’un dommage prend la forme de…',
              choices: ['dommages et intérêts', 'une peine de prison', 'une nullité', 'une démission'],
              answer: 0,
              explain: 'La victime obtient réparation sous forme de dommages et intérêts.',
            },
          ],
        },
        {
          id: 'droit-t6-tri',
          type: 'tri',
          title: 'Tri — Civile ou pénale ?',
          icon: '🗂️',
          instruction: 'Classe selon la finalité de la responsabilité.',
          categories: [
            { id: 'civ', label: 'Responsabilité civile (réparer)' },
            { id: 'pen', label: 'Responsabilité pénale (sanctionner)' },
          ],
          items: [
            { text: 'Verser des dommages et intérêts à la victime', cat: 'civ' },
            { text: 'Condamner l’auteur d’un délit à une peine', cat: 'pen' },
            { text: 'Indemniser une cliente blessée', cat: 'civ' },
            { text: 'Sanctionner un crime ou une contravention', cat: 'pen' },
          ],
        },
        {
          id: 'droit-t6-assoc',
          type: 'association',
          title: 'Association — Condition ↔ exemple (cas du supermarché)',
          icon: '🔗',
          pairs: [
            { left: 'Fait générateur', right: 'Sol mouillé non signalé' },
            { left: 'Dommage', right: 'Fracture du poignet, opération' },
            { left: 'Lien de causalité', right: 'La chute résulte de l’absence de signalisation' },
          ],
        },
        {
          id: 'droit-t6-flash',
          type: 'flashcard',
          title: 'Flashcards — Responsabilité',
          icon: '🃏',
          cards: [
            { front: 'Responsabilité contractuelle', back: 'Découle de l’inexécution d’un contrat.' },
            { front: 'Responsabilité délictuelle', back: 'Découle d’un fait juridique, hors de tout contrat.' },
            { front: 'Préjudice', back: 'Le dommage subi par la victime (corporel, matériel, moral).' },
            { front: 'Lien de causalité', back: 'Rapport de cause à effet entre le fait générateur et le dommage.' },
          ],
        },
        {
          id: 'droit-t6-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'La responsabilité pénale vise à réparer le dommage de la victime.', answer: false, explain: 'Faux : la pénale sanctionne l’infraction ; c’est la civile qui répare.' },
            { statement: 'Sans lien de causalité, la responsabilité civile n’est pas engagée.', answer: true, explain: 'Vrai : les trois conditions doivent être réunies.' },
            { statement: 'Un contrat est nécessaire pour une responsabilité délictuelle.', answer: false, explain: 'Faux : justement, la délictuelle intervient hors contrat.' },
          ],
        },
      ],
    },
    {
      id: 'droit-t7',
      name: 'Thème 7 — Comment le droit encadre-t-il le travail salarié ?',
      short: 'Travail salarié',
      keywords: 'contrat de travail lien de subordination CDI CDD intérim convention collective licenciement rupture conventionnelle',
      cours: [
        {
          h: 'Le contrat de travail',
          points: [
            'Caractérisé par le **lien de subordination juridique** (critère décisif).',
            'Types : **CDI** (norme), CDD, intérim.',
            'Sources : Code du travail, **conventions collectives**, accords d’entreprise, règlement intérieur, contrat.',
          ],
        },
        {
          h: 'La rupture',
          points: [
            'Démission, licenciement (**motif réel et sérieux** + procédure), rupture conventionnelle.',
            'La négociation collective adapte les normes aux réalités de l’entreprise/branche.',
          ],
        },
      ],
      formulas: ['Contrat de travail = travail + rémunération + lien de subordination'],
      games: [
        {
          id: 'droit-t7-qcm',
          type: 'qcm',
          title: 'QCM — Le travail salarié',
          icon: '❓',
          questions: [
            {
              q: 'Le critère décisif du contrat de travail est…',
              choices: ['le lien de subordination juridique', 'la durée du contrat', 'le lieu de travail', 'le montant du salaire'],
              answer: 0,
              explain: 'Le lien de subordination (donner des ordres, contrôler, sanctionner) est décisif.',
            },
            {
              q: 'Sonia obéit au chef, a des horaires imposés et un salaire, mais aucun écrit. Sa relation est…',
              choices: ['un contrat de travail (souvent un CDI)', 'un contrat commercial', 'du bénévolat', 'une prestation indépendante'],
              answer: 0,
              explain: 'La subordination requalifie la relation en contrat de travail, un CDI faute d’écrit prévoyant un terme.',
            },
            {
              q: 'Quel est le contrat de travail « de droit commun » (la norme) ?',
              choices: ['Le CDI', 'Le CDD', "L'intérim", 'Le stage'],
              answer: 0,
              explain: 'Le CDI est la forme normale ; CDD et intérim sont encadrés par des conditions de recours.',
            },
            {
              q: 'Un licenciement doit reposer sur…',
              choices: ['un motif réel et sérieux', 'la seule volonté de l’employeur', 'une décision du salarié', 'un tirage au sort'],
              answer: 0,
              explain: 'Le licenciement exige un motif réel et sérieux et le respect d’une procédure.',
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
            { left: 'Licenciement', right: 'Rupture à l’initiative de l’employeur (motif réel et sérieux)' },
            { left: 'Rupture conventionnelle', right: 'Rupture d’un commun accord' },
            { left: 'Convention collective', right: 'Norme adaptée à une branche professionnelle' },
          ],
        },
        {
          id: 'droit-t7-flash',
          type: 'flashcard',
          title: 'Flashcards — Travail salarié',
          icon: '🃏',
          cards: [
            { front: 'Lien de subordination', back: 'L’employeur donne des ordres, en contrôle l’exécution et peut sanctionner.' },
            { front: 'CDI', back: 'Contrat à durée indéterminée : la forme normale du contrat de travail.' },
            { front: 'CDD', back: 'Contrat à durée déterminée, encadré par des conditions de recours.' },
            { front: 'Convention collective', back: 'Accord de branche qui complète le Code du travail.' },
          ],
        },
        {
          id: 'droit-t7-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'Sans écrit, il ne peut pas y avoir de contrat de travail.', answer: false, explain: 'Faux : la relation peut être requalifiée en contrat de travail (souvent CDI).' },
            { statement: 'Le CDI est la forme normale du contrat de travail.', answer: true, explain: 'Vrai : CDD et intérim sont l’exception encadrée.' },
            { statement: 'Le licenciement peut se faire sans aucun motif.', answer: false, explain: 'Faux : il faut un motif réel et sérieux et une procédure.' },
          ],
        },
      ],
    },
    {
      id: 'droit-t8',
      name: 'Thème 8 — Dans quel cadre et comment entreprendre ?',
      short: 'Entreprendre',
      keywords: 'liberté d’entreprendre entreprise individuelle société personne physique morale propriété industrielle concurrence',
      cours: [
        {
          h: 'Le cadre de l’entreprise',
          points: [
            '**Liberté d’entreprendre** et liberté du commerce et de l’industrie.',
            'Structure juridique : entreprise individuelle (**personne physique**) vs société (**personne morale**).',
            'Conséquences sur la responsabilité et le patrimoine.',
          ],
        },
        {
          h: 'Protéger l’activité',
          points: [
            'Propriété industrielle : **marques, brevets**.',
            'Concurrence **loyale** vs **déloyale**.',
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
              q: 'Une société est une…',
              choices: ['personne morale', 'personne physique', 'administration publique', 'association obligatoire'],
              answer: 0,
              explain: 'La société est une personne morale ; l’entreprise individuelle une personne physique.',
            },
            {
              q: 'Qu’est-ce qui protège une invention technique ?',
              choices: ['Le brevet', 'La marque', 'Le contrat de travail', 'La convention collective'],
              answer: 0,
              explain: 'Le brevet protège une invention ; la marque protège un signe distinctif.',
            },
            {
              q: 'Le choix entre entreprise individuelle et société a un impact sur…',
              choices: ['la responsabilité et le patrimoine', 'la météo', 'le taux de TVA', 'la langue de travail'],
              answer: 0,
              explain: 'La structure juridique conditionne la responsabilité et la séparation des patrimoines.',
            },
            {
              q: 'Dénigrer un concurrent par des propos mensongers relève de…',
              choices: ['la concurrence déloyale', 'la liberté d’expression protégée', 'la propriété industrielle', 'la force obligatoire'],
              answer: 0,
              explain: 'C’est un acte de concurrence déloyale, sanctionnable.',
            },
          ],
        },
        {
          id: 'droit-t8-assoc',
          type: 'association',
          title: 'Association — Notion ↔ définition',
          icon: '🔗',
          pairs: [
            { left: 'Personne morale', right: 'Une société dotée de sa propre personnalité juridique' },
            { left: 'Personne physique', right: 'Un individu (entrepreneur individuel)' },
            { left: 'Brevet', right: 'Protège une invention technique' },
            { left: 'Marque', right: 'Protège un signe distinctif (nom, logo)' },
          ],
        },
        {
          id: 'droit-t8-flash',
          type: 'flashcard',
          title: 'Flashcards — Entreprendre',
          icon: '🃏',
          cards: [
            { front: 'Liberté d’entreprendre', back: 'Liberté de créer et d’exercer une activité économique.' },
            { front: 'Entreprise individuelle', back: 'Exploitée par une personne physique.' },
            { front: 'Société', back: 'Personne morale distincte de ses associés.' },
            { front: 'Concurrence déloyale', back: 'Pratiques abusives (dénigrement, confusion, parasitisme) sanctionnées.' },
          ],
        },
        {
          id: 'droit-t8-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'Une société est une personne morale.', answer: true, explain: 'Vrai : elle a une personnalité juridique propre.' },
            { statement: 'La marque protège une invention technique.', answer: false, explain: 'Faux : c’est le brevet ; la marque protège un signe distinctif.' },
            { statement: 'La liberté d’entreprendre est un principe reconnu.', answer: true, explain: 'Vrai : liberté du commerce et de l’industrie.' },
          ],
        },
      ],
    },
  ],
}
