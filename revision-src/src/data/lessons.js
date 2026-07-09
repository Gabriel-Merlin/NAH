// COURS COMPLETS (facultatifs) qui enrichissent les chapitres : introduction,
// sections développées, exemples travaillés, encadrés méthode / piège, tableaux
// et ressources vidéos. Un chapitre présent ici remplace ses fiches courtes par
// une vraie leçon multi-angles. Format des blocs (champ `t`) :
//   p (paragraphe) · list (puces) · formula (encadré) · example · tip · warning · table
//
// ⚠️ Rédigé avec l'aide de l'IA à partir du programme STMG : à recouper avec le
// cours officiel en cas de doute.
const yt = (q) => 'https://www.youtube.com/results?search_query=' + encodeURIComponent(q)

export const LESSONS = {
  // ======================================================================
  // GESTION ET FINANCE
  // ======================================================================
  'gf-t1': {
    intro:
      "Tout part d'une idée simple : une entreprise doit **garder la trace de tout ce qu'elle achète, vend, possède et doit**. La comptabilité est le langage qui traduit chaque opération en chiffres, pour savoir si l'entreprise gagne de l'argent et si elle est en bonne santé. Ce premier thème pose les **règles du jeu** : comment enregistrer une opération, comment fonctionne la TVA, comment tenir compte de l'usure du matériel (l'amortissement) et quels grands principes garantissent une information honnête.",
    cours: [
      {
        h: "À quoi sert la comptabilité ? Le système d'information comptable (SIC)",
        blocks: [
          { t: 'p', c: "Chaque jour, une entreprise réalise des dizaines d'opérations : elle achète des matières, paie ses salariés, vend ses produits, règle des factures. Le **système d'information comptable (SIC)** est l'ensemble des outils et procédures qui **saisissent, classent et enregistrent** ces opérations afin d'en donner une **image fidèle** du patrimoine, de la situation financière et du résultat (article 120-1 du PCG)." },
          { t: 'p', c: "Cette information a **deux usages**. *En interne*, elle aide les dirigeants à piloter et décider (Faut-il investir ? Embaucher ? Baisser les prix ?). *En externe*, elle sert de **preuve** vis-à-vis de l'administration fiscale, des banques et des associés, et de **base au calcul des impôts**." },
          { t: 'list', c: [
            "**PGI / ERP** : un progiciel de gestion intégré est un logiciel unique reposant sur une **base de données unique**. Une information saisie une seule fois circule partout (compta, stocks, paie) → moins d'erreurs, plus de fiabilité.",
            "**Dématérialisation** : les factures deviennent électroniques, les traitements s'automatisent. L'humain ne disparaît pas : il **contrôle et valide**.",
            "**Sécurité du SI** : quatre exigences — **D**isponibilité, **I**ntégrité, **C**onfidentialité, traçabilité.",
            "**Cadre normatif** : l'**ANC** (Autorité des Normes Comptables) fixe les règles, réunies dans le **PCG** (Plan Comptable Général).",
          ] },
          { t: 'tip', c: "La comptabilité n'est pas qu'une contrainte administrative : c'est un **outil de décision**. Derrière chaque chiffre se cache une opération réelle." },
        ],
      },
      {
        h: 'La partie double et la chaîne comptable',
        blocks: [
          { t: 'p', c: "Règle d'or de la comptabilité : la **partie double**. Toute opération est enregistrée sur **au moins deux comptes**, une fois au **débit**, une fois au **crédit**, pour un **montant total égal**. Autrement dit : **débit = crédit**, toujours." },
          { t: 'example', h: 'Un achat payé par banque', c: "Boisdéco achète du bois pour 1 000 € réglé par virement.\n→ Le compte **Achats (601)** augmente de 1 000 € au **débit**.\n→ Le compte **Banque (512)** diminue de 1 000 € au **crédit**.\nDébit = crédit : l'équilibre est respecté." },
          { t: 'p', c: "Quelques comptes à connaître : **Achats (classe 6)**, **Ventes (classe 7)**, **Clients (411)**, **Fournisseurs (401)**, **Banque (512)**, **immobilisations (classe 2)**." },
          { t: 'p', c: "Une opération suit une **chaîne** jusqu'aux comptes annuels :" },
          { t: 'formula', c: 'Pièce justificative → Journal → Grand livre → Balance → Documents de synthèse (bilan, compte de résultat, annexe)' },
          { t: 'list', c: [
            "**Lettrage** : on relie une facture à son règlement pour vérifier que les clients ont bien payé.",
            "**Rapprochement bancaire** : on compare le compte « Banque » de l'entreprise au **relevé** envoyé par la banque.",
          ] },
        ],
      },
      {
        h: "La TVA : l'entreprise, simple collecteur pour l'État",
        blocks: [
          { t: 'p', c: "La **TVA** (taxe sur la valeur ajoutée) est un impôt payé par le **consommateur final**. L'entreprise ne fait que la **collecter** sur ses ventes puis la **reverser** à l'État, après avoir déduit la TVA qu'elle a elle-même payée sur ses achats." },
          { t: 'formula', c: 'TVA à décaisser = TVA collectée (sur ventes) − TVA déductible (sur achats + immobilisations)' },
          { t: 'example', h: 'Mois de mars (Boisdéco, taux 20 %)', c: "Ventes HT = 90 000 € ; achats de matières HT = 40 000 € ; achat d'une machine HT = 15 000 €.\n• TVA collectée = 90 000 × 20 % = **18 000 €**\n• TVA déductible = (40 000 + 15 000) × 20 % = **11 000 €**\n• TVA à décaisser = 18 000 − 11 000 = **7 000 €**\n→ L'entreprise **doit 7 000 €** à l'État." },
          { t: 'warning', c: "La TVA n'est **ni une charge ni un produit** : elle ne fait que transiter par l'entreprise, ce n'est pas un bénéfice. Si la TVA déductible **dépasse** la collectée, on obtient un **crédit de TVA** : c'est l'État qui doit de l'argent à l'entreprise." },
          { t: 'p', c: "Sur une **facture de doit**, on applique les **réductions commerciales** (rabais, remise, ristourne) puis on ajoute la TVA. Une **facture d'avoir** corrige ou annule une facture (retour de marchandise, geste commercial)." },
        ],
      },
      {
        h: "Investir et amortir : le coût de l'usure",
        blocks: [
          { t: 'p', c: "Quand l'entreprise achète un bien **durable** (machine, véhicule, ordinateur), ce n'est pas une charge de l'année mais une **immobilisation** (classe 2), inscrite à l'**actif**. Une dépense **consommée** dans l'année (électricité, fournitures) est au contraire une **charge** (classe 6)." },
          { t: 'p', c: "L'**amortissement** répartit le coût de l'immobilisation sur sa **durée d'utilisation**, pour refléter sa perte de valeur (usure, obsolescence)." },
          { t: 'formula', c: "Taux linéaire = 1 / durée · Annuité = valeur × taux · VNC = valeur d'origine − amortissements cumulés" },
          { t: 'example', h: 'Une machine amortie en linéaire', c: "Machine : 15 000 € HT, durée 5 ans, mise en service le **01/04/N**.\n• Taux = 1/5 = **20 %** → annuité pleine = 15 000 × 20 % = **3 000 €**\n• 1re année, **prorata temporis** (9 mois sur 12) : 3 000 × 9/12 = **2 250 €**\n• VNC au 31/12/N = 15 000 − 2 250 = **12 750 €**" },
          { t: 'tip', c: "La 1re année, n'oublie jamais le **prorata temporis** : on ne compte que les mois d'utilisation, à partir de la **date de mise en service**." },
        ],
      },
      {
        h: "Communiquer une information fidèle : principes et inventaire",
        blocks: [
          { t: 'p', c: "À la clôture de l'exercice (12 mois), on réalise l'**inventaire** : on recense et valorise ce que possède l'entreprise, ce qui donne lieu à des **écritures d'ajustement** (stocks, amortissements, dépréciations, cessions)." },
          { t: 'p', c: "Quatre **principes comptables** garantissent une information honnête :" },
          { t: 'table', head: ['Principe', 'Ce qu\'il impose'], rows: [
            ['Prudence', "Ne pas surévaluer l'actif ni le résultat ; anticiper les pertes probables."],
            ['Indépendance des exercices', 'Rattacher chaque charge et produit au bon exercice.'],
            ["Continuité de l'exploitation", "Comptabiliser en supposant que l'entreprise poursuivra son activité."],
            ['Permanence des méthodes', "Garder les mêmes méthodes d'un exercice à l'autre pour pouvoir comparer."],
          ] },
          { t: 'warning', c: "Ne confonds pas **amortissement** (perte de valeur **définitive**, ex. l'usure d'une machine) et **dépréciation** (perte de valeur **réversible**, ex. un stock qui pourrait se revendre plus tard)." },
          { t: 'p', c: "Enfin, l'**annexe** est un document de synthèse qui **explicite** le bilan et le compte de résultat (méthodes retenues, détails utiles à la compréhension)." },
        ],
      },
    ],
    resources: [
      { kind: 'video', label: 'Le mécanisme de la TVA expliqué', note: 'Vidéos — recherche YouTube', url: yt('mécanisme TVA collectée déductible à décaisser terminale STMG') },
      { kind: 'video', label: "L'amortissement linéaire (méthode + calcul)", note: 'Vidéos — recherche YouTube', url: yt('amortissement linéaire annuité VNC prorata temporis STMG') },
      { kind: 'video', label: 'La partie double et la chaîne comptable', note: 'Vidéos — recherche YouTube', url: yt('partie double débit crédit journal grand livre STMG gestion finance') },
    ],
  },

  'gf-t2': {
    intro:
      "Après avoir enregistré les opérations, on passe à l'**analyse** : l'entreprise est-elle **performante** ? est-elle **solide** ? Ce thème, le plus fréquent au bac, apprend à lire les résultats (les SIG, l'EBE, la CAF), à mesurer la **rentabilité** et à diagnostiquer la **structure financière** grâce au bilan fonctionnel (FRNG, BFR, trésorerie). L'objectif n'est pas de calculer pour calculer, mais d'**interpréter** ce que disent les chiffres.",
    cours: [
      {
        h: 'Mesurer la performance : les Soldes Intermédiaires de Gestion (SIG)',
        blocks: [
          { t: 'p', c: "Le compte de résultat peut être « découpé » en plusieurs **paliers** : les **SIG**. On part du chiffre d'affaires et, étage par étage, on retire des charges pour comprendre **d'où vient le résultat**." },
          { t: 'formula', c: 'Marge commerciale → Valeur ajoutée → EBE → Résultat d\'exploitation → RCAI → Résultat net' },
          { t: 'list', c: [
            "**Valeur ajoutée (VA)** = ce que l'entreprise crée réellement = marge commerciale + production − consommations en provenance des tiers.",
            "**EBE (excédent brut d'exploitation)** = VA + subventions d'exploitation − impôts et taxes − charges de personnel. C'est la **richesse dégagée par l'activité seule**, avant amortissements et financement.",
            "**Résultat d'exploitation** = EBE − dotations (+ autres produits/charges).",
            "**Résultat net** = ce qui reste vraiment, après le financier, l'exceptionnel et l'impôt.",
          ] },
          { t: 'example', h: 'De la VA au résultat net', c: "Production vendue 520 000 € ; consommations 210 000 € ; subventions 5 000 € ; impôts et taxes 8 000 € ; charges de personnel 190 000 € ; dotations 40 000 € ; résultat financier −6 000 € ; IS 15 000 €.\n• VA = 520 000 − 210 000 = **310 000 €**\n• EBE = 310 000 + 5 000 − 8 000 − 190 000 = **117 000 €**\n• Résultat d'exploitation = 117 000 − 40 000 = **77 000 €**\n• Résultat net = 77 000 − 6 000 − 15 000 = **56 000 €**" },
        ],
      },
      {
        h: "La CAF : la ressource dégagée par l'activité",
        blocks: [
          { t: 'p', c: "La **capacité d'autofinancement (CAF)** mesure l'argent que l'entreprise **génère par son activité** et qu'elle pourra utiliser pour **investir, rembourser ses emprunts ou verser des dividendes**." },
          { t: 'formula', c: 'CAF (méthode additive) = Résultat net + dotations − reprises + VNC des éléments cédés − produits de cession' },
          { t: 'example', h: 'Calcul rapide', c: "Résultat net = 56 000 € ; dotations = 40 000 € ; pas de reprise ni de cession.\nCAF = 56 000 + 40 000 = **96 000 €**." },
          { t: 'tip', c: "Les **dotations aux amortissements** sont des charges **calculées** (pas de sortie d'argent) : on les **rajoute** au résultat pour retrouver la trésorerie potentielle générée." },
        ],
      },
      {
        h: 'Profitabilité, rentabilité et effet de levier',
        blocks: [
          { t: 'p', c: "Attention à ne pas tout mélanger : **profitabilité** et **rentabilité** ne mesurent pas la même chose." },
          { t: 'table', head: ['Indicateur', 'Formule', 'Ce qu\'il mesure'], rows: [
            ['Profitabilité', 'Résultat / Chiffre d\'affaires', 'Combien rapporte 1 € de vente'],
            ['Rentabilité économique', "Résultat d'exploitation / capitaux investis", "L'efficacité de l'outil (vision du dirigeant)"],
            ['Rentabilité financière', 'Résultat net / capitaux propres', "Le rendement pour l'associé"],
          ] },
          { t: 'p', c: "**L'effet de levier** explique l'intérêt de s'endetter. Si la **rentabilité économique** est **supérieure au coût de la dette**, emprunter **augmente** la rentabilité financière : l'argent emprunté rapporte plus qu'il ne coûte." },
          { t: 'warning', c: "L'effet peut se retourner : si la rentabilité économique passe **sous** le taux d'intérêt, la dette **détruit** de la rentabilité — c'est l'**effet de massue**." },
        ],
      },
      {
        h: 'La structure financière : le bilan fonctionnel',
        blocks: [
          { t: 'p', c: "Le bilan fonctionnel classe les ressources et les emplois selon qu'ils sont **stables** (long terme) ou liés au **cycle d'exploitation** (court terme). Trois indicateurs clés en découlent." },
          { t: 'formula', c: 'FRNG = Ressources stables − Emplois stables' },
          { t: 'formula', c: 'BFR = Actif circulant d\'exploitation − Passif circulant d\'exploitation' },
          { t: 'formula', c: 'Trésorerie nette = FRNG − BFR = Trésorerie active − Trésorerie passive' },
          { t: 'example', h: 'Lire l\'équilibre financier', c: "Ressources stables 380 000 ; emplois stables 300 000 ; actif circ. d'exploit. 160 000 ; passif circ. d'exploit. 70 000.\n• FRNG = 380 000 − 300 000 = **80 000 €**\n• BFR = 160 000 − 70 000 = **90 000 €**\n• Trésorerie nette = 80 000 − 90 000 = **− 10 000 €**\n→ Le FRNG ne couvre pas tout le BFR : la trésorerie est **négative** (découvert). Il faudrait **réduire le BFR** ou **augmenter le FRNG**." },
          { t: 'tip', c: "Bonne santé = **FRNG > BFR** → trésorerie positive. Le **BFR** représente l'argent « immobilisé » dans les stocks et les créances clients, en attendant d'être encaissé." },
        ],
      },
      {
        h: 'Les ratios et leurs limites',
        blocks: [
          { t: 'list', c: [
            "**Rotation des stocks** = (stock moyen / coût d'achat des marchandises vendues) × 360.",
            "**Délai clients** = (créances clients TTC / CA TTC) × 360 — combien de jours pour être payé.",
            "**Délai fournisseurs** = (dettes fournisseurs TTC / achats TTC) × 360.",
            "**Indépendance financière** = dettes financières / capitaux propres.",
            "**Capacité de remboursement** = dettes financières / CAF (idéalement < 3-4 ans).",
          ] },
          { t: 'warning', c: "Un ratio seul ne veut rien dire : l'analyse est **statique** et sensible aux choix comptables. Il faut **comparer dans le temps** (évolution) et **dans l'espace** (concurrents, secteur)." },
        ],
      },
    ],
    resources: [
      { kind: 'video', label: 'Les SIG, l\'EBE et la CAF', note: 'Vidéos — recherche YouTube', url: yt('SIG EBE CAF soldes intermédiaires de gestion terminale STMG') },
      { kind: 'video', label: 'Bilan fonctionnel : FRNG, BFR, trésorerie', note: 'Vidéos — recherche YouTube', url: yt('bilan fonctionnel FRNG BFR trésorerie nette STMG') },
      { kind: 'video', label: 'Rentabilité et effet de levier', note: 'Vidéos — recherche YouTube', url: yt('rentabilité économique financière effet de levier STMG') },
    ],
  },

  'gf-t3': {
    intro:
      "Dernière étape : la comptabilité au service de la **décision**. Comment **financer** un projet ? Comment garder une **trésorerie** saine ? Que faire du **bénéfice** ? Et surtout, à partir de quel niveau de ventes l'entreprise devient-elle **rentable** ? Ce thème mobilise les **coûts** et le célèbre **seuil de rentabilité**.",
    cours: [
      {
        h: 'Financer l\'activité et les investissements',
        blocks: [
          { t: 'p', c: "Pour investir, une entreprise dispose de deux grandes sources de financement." },
          { t: 'table', head: ['Financements internes', 'Financements externes'], rows: [
            ['Autofinancement (la CAF)', 'Emprunt bancaire'],
            ["Apports en compte courant d'associés", 'Augmentation de capital'],
            ['—', 'Crowdfunding, subventions'],
          ] },
          { t: 'p', c: "Le choix se fait selon plusieurs **critères** : le coût, le niveau d'endettement déjà atteint, le **pouvoir** laissé aux associés (une augmentation de capital dilue le contrôle) et l'attractivité du projet." },
        ],
      },
      {
        h: 'Optimiser la trésorerie',
        blocks: [
          { t: 'p', c: "La **trésorerie** est le nerf de la guerre : une entreprise rentable peut faire faillite si elle manque de liquidités au mauvais moment." },
          { t: 'list', c: [
            "Le **budget de trésorerie** prévoit, **mois par mois**, les encaissements et les décaissements.",
            "Pour l'améliorer : **réduire le BFR** (encaisser plus vite, négocier les délais fournisseurs, alléger les stocks), recourir au découvert, **placer les excédents**.",
          ] },
        ],
      },
      {
        h: 'Affecter le résultat',
        blocks: [
          { t: 'p', c: "Quand l'exercice dégage un bénéfice, les associés décident de sa **répartition**." },
          { t: 'list', c: [
            "**Réserve légale** : obligatoire, 5 % du bénéfice jusqu'à atteindre 10 % du capital.",
            "**Réserves** statutaires ou facultatives (mises de côté pour l'entreprise).",
            "**Dividendes** : la part distribuée aux associés.",
            "**Report à nouveau** : la part non affectée, reportée sur l'exercice suivant.",
          ] },
          { t: 'tip', c: "Tout l'arbitrage tient en une phrase : **garder** pour financer l'entreprise (réserves = autofinancement) ou **distribuer** pour rémunérer les associés (dividendes)." },
        ],
      },
      {
        h: 'Analyser les coûts et trouver le seuil de rentabilité',
        blocks: [
          { t: 'p', c: "On distingue les **charges variables** (qui dépendent de l'activité : matières, énergie de production) des **charges fixes** (indépendantes du volume : loyer, assurance)." },
          { t: 'formula', c: 'MCV (marge sur coût variable) = CA − charges variables · Taux de MCV = MCV / CA' },
          { t: 'formula', c: 'Seuil de rentabilité = charges fixes / taux de MCV' },
          { t: 'example', h: 'Le seuil de rentabilité de Boisdéco', c: "CA = 300 000 € ; charges variables = 180 000 € ; charges fixes = 96 000 €.\n• MCV = 300 000 − 180 000 = **120 000 €** ; taux de MCV = 120 000 / 300 000 = **0,40**\n• Seuil = 96 000 / 0,40 = **240 000 €** de CA\n• Résultat = 120 000 − 96 000 = **24 000 €** (bénéfice)\n• Marge de sécurité = 300 000 − 240 000 = **60 000 €** : le CA peut baisser de 20 % avant les pertes." },
          { t: 'warning', c: "Au **seuil de rentabilité**, le résultat est **nul** (ni perte ni bénéfice). Le **point mort** est la **date** à laquelle ce seuil est atteint dans l'année." },
        ],
      },
    ],
    resources: [
      { kind: 'video', label: 'Le seuil de rentabilité (méthode + exemple)', note: 'Vidéos — recherche YouTube', url: yt('seuil de rentabilité marge sur coût variable point mort STMG') },
      { kind: 'video', label: 'Les modes de financement de l\'entreprise', note: 'Vidéos — recherche YouTube', url: yt('financement interne externe entreprise terminale STMG gestion finance') },
      { kind: 'video', label: 'L\'affectation du résultat', note: 'Vidéos — recherche YouTube', url: yt('affectation du résultat réserve légale dividendes STMG') },
    ],
  },

  // ======================================================================
  // MANAGEMENT (MSGN)
  // ======================================================================
  'mgmt-t1': {
    intro:
      'Le management, c’est l’art de **piloter une organisation** pour qu’elle atteigne ses objectifs. Avant de savoir diriger, il faut comprendre : qu’est-ce qu’une organisation, quelle est sa **finalité**, avec quelles **ressources** crée-t-elle de la valeur, et comment reste-t-elle **compétitive** face aux autres ?',
    cours: [
      {
        h: 'Qu’est-ce qu’une organisation ? Types et finalités',
        blocks: [
          { t: 'p', c: 'Une **organisation** est un groupe humain structuré (des moyens, une division du travail, des règles) réuni pour atteindre un **but commun**. On en distingue trois grandes familles, selon leur **finalité**.' },
          { t: 'table', head: ['Type', 'Finalité', 'Exemples'], rows: [
            ['Entreprise privée', 'Lucrative (réaliser un profit)', 'PME, multinationale'],
            ['Organisation publique', "Non lucrative (intérêt général, service public)", 'Mairie, hôpital public'],
            ['Société civile', 'Non lucrative (défendre une cause)', 'Association, ONG, syndicat'],
          ] },
          { t: 'p', c: 'Au-delà du profit, une entreprise peut aussi poursuivre une finalité **sociétale** (prise en compte des enjeux sociaux et environnementaux : la **RSE**).' },
        ],
      },
      {
        h: 'Efficacité et efficience : deux mesures de la performance',
        blocks: [
          { t: 'p', c: 'La **performance** se juge sur deux plans. L’**efficacité**, c’est **atteindre l’objectif** fixé. L’**efficience**, c’est l’atteindre **au moindre coût**, en utilisant au mieux les ressources.' },
          { t: 'example', h: 'Efficace ≠ efficient', c: 'Deux équipes atteignent l’objectif de 100 ventes : les deux sont **efficaces**.\nMais l’équipe B l’a fait avec deux fois moins de budget : elle est plus **efficiente**.' },
          { t: 'tip', c: 'Moyen mnémotechnique : efficac**ité** = le résult**at** ; effici**ence** = les moy**ens**.' },
        ],
      },
      {
        h: 'Les ressources et la création de valeur',
        blocks: [
          { t: 'list', c: [
            '**Ressources financières** : capitaux, trésorerie.',
            '**Ressources humaines** : les salariés, leurs compétences.',
            '**Ressources matérielles** : locaux, machines, matières.',
            '**Ressources immatérielles** : savoir-faire, marque, image, brevets — souvent les plus difficiles à copier.',
          ] },
          { t: 'p', c: 'En combinant ces ressources tout au long de sa **chaîne de valeur** (l’enchaînement des activités), l’organisation **crée de la valeur** pour ses clients — et, si elle est efficiente, un profit pour elle-même.' },
        ],
      },
      {
        h: 'Être compétitif : par les prix ou hors-prix',
        blocks: [
          { t: 'p', c: 'La **compétitivité** est la capacité à s’imposer face à la concurrence. Deux stratégies :' },
          { t: 'list', c: [
            '**Compétitivité-prix** : proposer un **prix plus bas** (grâce à des coûts maîtrisés).',
            '**Compétitivité hors-prix** : se démarquer par la **qualité, l’innovation, l’image, les délais**.',
          ] },
          { t: 'example', h: 'Vél’Oc', c: 'En se positionnant « haut de gamme », le fabricant de vélos électriques Vél’Oc mise sur la compétitivité **hors-prix** (qualité, image) plutôt que sur le prix le plus bas.' },
        ],
      },
    ],
    resources: [
      { kind: 'video', label: 'Organisation, finalités et types', note: 'Vidéos — recherche YouTube', url: yt('organisation entreprise finalité type management terminale STMG') },
      { kind: 'video', label: 'Efficacité et efficience', note: 'Vidéos — recherche YouTube', url: yt('efficacité efficience performance organisation management STMG') },
    ],
  },

  'mgmt-t2': {
    intro:
      'Une organisation, ce sont des **acteurs** aux intérêts parfois divergents, qu’il faut **diagnostiquer**, **décider** et **mobiliser**. Ce thème réunit les outils stars du bac : le **SWOT**, les **choix stratégiques** et les théories de la **motivation**.',
    cours: [
      {
        h: 'Management stratégique et management opérationnel',
        blocks: [
          { t: 'table', head: ['', 'Stratégique', 'Opérationnel'], rows: [
            ['Horizon', 'Long terme', 'Court terme'],
            ['Qui ?', 'Direction générale', 'Encadrement, équipes'],
            ['Exemple', 'Se diversifier vers les trottinettes', 'Organiser le planning de la semaine'],
          ] },
          { t: 'p', c: 'Les deux niveaux sont **complémentaires** : la stratégie fixe le cap, l’opérationnel le met en œuvre au quotidien.' },
        ],
      },
      {
        h: 'Le diagnostic stratégique : le SWOT',
        blocks: [
          { t: 'p', c: 'Le **SWOT** croise un diagnostic **interne** (ce que l’entreprise maîtrise) et **externe** (ce qu’elle subit).' },
          { t: 'table', head: ['Interne', 'Externe'], rows: [
            ['**Forces** (Strengths)', '**Opportunités** (Opportunities)'],
            ['**Faiblesses** (Weaknesses)', '**Menaces** (Threats)'],
          ] },
          { t: 'example', h: 'SWOT de Vél’Oc', c: 'Forces : savoir-faire, image haut de gamme.\nFaiblesses : turnover élevé, dépendance à un seul produit.\nOpportunités : marché de la mobilité douce en expansion, aides publiques.\nMenaces : concurrence, critiques environnementales.' },
          { t: 'warning', c: 'Erreur classique : ranger un élément **externe** (ex. une aide de l’État) dans les forces. Forces/faiblesses = **interne** ; opportunités/menaces = **externe**.' },
        ],
      },
      {
        h: 'Les choix stratégiques',
        blocks: [
          { t: 'list', c: [
            '**Spécialisation** (un seul métier) vs **diversification** (élargir l’offre) : la spécialisation donne de l’expertise mais crée une dépendance ; la diversification répartit le risque mais disperse les ressources.',
            '**Croissance interne** (par ses propres moyens) vs **croissance externe** (rachat, fusion).',
            '**Domination par les coûts** vs **différenciation** (Porter) : être le moins cher, ou proposer une offre unique.',
          ] },
        ],
      },
      {
        h: 'Motiver et mobiliser les acteurs',
        blocks: [
          { t: 'p', c: 'Fédérer les salariés améliore la **performance sociale** et la cohésion. Plusieurs théories l’expliquent :' },
          { t: 'table', head: ['Auteur', 'Idée clé'], rows: [
            ['Maslow', 'Pyramide des besoins (physiologiques → estime → accomplissement)'],
            ['Herzberg', 'Facteurs d’**hygiène** (salaire, conditions : leur absence démotive) vs facteurs de **motivation** (reconnaissance, responsabilités : ils motivent)'],
            ['Likert', 'Styles de direction : autoritaire, paternaliste, consultatif, participatif'],
          ] },
          { t: 'tip', c: 'Face à un turnover élevé, on cherche d’abord les facteurs de **motivation** manquants (reconnaissance, perspectives d’évolution), pas seulement le salaire.' },
        ],
      },
    ],
    resources: [
      { kind: 'video', label: 'Le diagnostic SWOT expliqué', note: 'Vidéos — recherche YouTube', url: yt('matrice SWOT diagnostic stratégique management terminale STMG') },
      { kind: 'video', label: 'Les théories de la motivation (Maslow, Herzberg)', note: 'Vidéos — recherche YouTube', url: yt('Maslow Herzberg motivation au travail management STMG') },
    ],
  },

  'mgmt-t3': {
    intro:
      'Une organisation n’évolue pas dans le vide : elle est **responsable** de son impact sur la société et l’environnement (la **RSE**) et bouleversée par le **numérique**. Deux thèmes quasi systématiques au bac.',
    cours: [
      {
        h: 'La responsabilité sociétale des entreprises (RSE)',
        blocks: [
          { t: 'p', c: 'La **RSE** consiste, pour une organisation, à assumer l’**impact de ses décisions** sur la société et l’environnement, au-delà de la seule recherche du profit. Elle concilie **trois piliers** (le développement durable).' },
          { t: 'table', head: ['Pilier', 'Exemples d’actions'], rows: [
            ['Économique', 'Assurer la rentabilité et la pérennité'],
            ['Social', 'Conditions de travail, égalité, formation'],
            ['Environnemental', 'Réduire l’empreinte carbone, recycler, éco-concevoir'],
          ] },
          { t: 'example', h: 'Le cas des batteries de Vél’Oc', c: 'La critique sur l’empreinte carbone des batteries relève du pilier **environnemental**. Réponses possibles : recyclage/réemploi des batteries, filière plus durable, communication transparente.' },
        ],
      },
      {
        h: 'La transformation numérique',
        blocks: [
          { t: 'p', c: 'Le numérique bouleverse les organisations : nouveaux **modèles économiques**, relation client repensée, exploitation des **données**.' },
          { t: 'list', c: [
            '**Données (data)** : ressource stratégique, mais à protéger.',
            '**Cybersécurité** : protéger les systèmes contre les menaces.',
            '**Automatisation**, **télétravail** : nouvelles façons de travailler.',
          ] },
          { t: 'tip', c: 'Éthique et **déontologie**, transparence et protection des données personnelles font partie intégrante d’une démarche RSE à l’ère numérique.' },
        ],
      },
    ],
    resources: [
      { kind: 'video', label: 'La RSE et le développement durable', note: 'Vidéos — recherche YouTube', url: yt('RSE responsabilité sociétale entreprise développement durable STMG') },
      { kind: 'video', label: 'La transformation numérique des organisations', note: 'Vidéos — recherche YouTube', url: yt('transformation numérique organisation données management STMG') },
    ],
  },

  // ======================================================================
  // DROIT
  // ======================================================================
  'droit-t5': {
    intro:
      'Le **contrat** est au cœur de la vie économique : acheter, louer, travailler, tout passe par des accords. Ce thème explique quand un contrat est **valable**, ce qui se passe s’il n’est pas respecté, et comment **raisonner en droit** (le syllogisme juridique).',
    cours: [
      {
        h: 'Qu’est-ce qu’un contrat ? Ses conditions de validité',
        blocks: [
          { t: 'p', c: 'Un **contrat** est un **accord de volontés** qui crée des **obligations** entre les parties. Pour être valable, il doit réunir trois conditions.' },
          { t: 'list', c: [
            '**Le consentement** : libre et éclairé, c’est-à-dire sans « vice ».',
            '**La capacité** : être juridiquement apte à s’engager (ex. être majeur).',
            '**Un contenu licite et certain** : l’objet du contrat doit être légal et déterminé.',
          ] },
        ],
      },
      {
        h: 'Les vices du consentement',
        blocks: [
          { t: 'p', c: 'Si le consentement a été faussé, le contrat peut être **annulé**. Trois vices :' },
          { t: 'table', head: ['Vice', 'Définition'], rows: [
            ['Erreur', 'Se tromper sur une qualité essentielle du bien'],
            ['Dol', 'Être trompé par un mensonge ou une manœuvre de l’autre partie'],
            ['Violence', 'Consentement extorqué par la contrainte (physique ou morale)'],
          ] },
        ],
      },
      {
        h: 'Force obligatoire et inexécution',
        blocks: [
          { t: 'p', c: 'Une fois formé, « **le contrat fait la loi des parties** » : chacun doit respecter ses engagements (c’est la **force obligatoire**). En cas d’**inexécution**, la victime peut demander : l’**exécution forcée**, la **résolution** (annulation) du contrat, ou des **dommages et intérêts**.' },
        ],
      },
      {
        h: 'Méthode : le syllogisme juridique',
        blocks: [
          { t: 'p', c: 'En droit, on raisonne en trois temps : la **règle** (majeure), les **faits qualifiés** (mineure), puis la **conclusion**.' },
          { t: 'example', h: 'Marc et la voiture accidentée', c: '**Règle** : le dol (mensonge déterminant) est une cause de nullité du contrat.\n**Faits** : le garagiste a affirmé par écrit, faussement, que la voiture n’avait jamais eu d’accident — information déterminante pour Marc.\n**Conclusion** : le dol est caractérisé ; Marc peut obtenir la **nullité de la vente** et des dommages et intérêts.' },
          { t: 'tip', c: 'Au bac, on attend toujours : **qualifier** juridiquement la situation, puis **appliquer la règle** aux faits pour conclure.' },
        ],
      },
    ],
    resources: [
      { kind: 'video', label: 'La formation du contrat et sa validité', note: 'Vidéos — recherche YouTube', url: yt('contrat conditions de validité consentement vices droit terminale STMG') },
      { kind: 'video', label: 'Le syllogisme juridique (méthode)', note: 'Vidéos — recherche YouTube', url: yt('syllogisme juridique méthode cas pratique droit STMG') },
    ],
  },

  'droit-t6': {
    intro:
      'Quand un dommage est causé à autrui, le droit organise sa **réparation** (responsabilité civile) ou sa **sanction** (responsabilité pénale). Savoir distinguer les deux et vérifier les conditions est essentiel.',
    cours: [
      {
        h: 'La responsabilité civile : réparer un dommage',
        blocks: [
          { t: 'p', c: 'La **responsabilité civile** vise à **réparer** un dommage causé à autrui, sous forme de **dommages et intérêts**. Elle est **contractuelle** (le dommage vient de l’inexécution d’un contrat) ou **délictuelle** (hors de tout contrat).' },
          { t: 'p', c: 'Elle suppose la réunion de **trois conditions** :' },
          { t: 'formula', c: 'Fait générateur + Dommage (préjudice) + Lien de causalité' },
        ],
      },
      {
        h: 'Un exemple concret',
        blocks: [
          { t: 'example', h: 'La chute au supermarché', c: 'Une entreprise laisse le sol mouillé sans signalisation ; une cliente glisse et se fracture le poignet.\n• **Fait générateur** : le sol mouillé non signalé (la faute).\n• **Dommage** : la fracture, l’opération.\n• **Lien de causalité** : la chute résulte directement de l’absence de signalisation.\n→ Les trois conditions sont réunies : la cliente peut être **indemnisée**. (Aucun contrat entre elle et l’entreprise → responsabilité **délictuelle**.)' },
        ],
      },
      {
        h: 'La responsabilité pénale : sanctionner une infraction',
        blocks: [
          { t: 'p', c: 'La **responsabilité pénale** ne cherche pas à réparer mais à **sanctionner** l’auteur d’une **infraction**, classée en trois niveaux de gravité : **contravention**, **délit**, **crime**.' },
          { t: 'warning', c: 'Ne pas confondre : la responsabilité **civile répare** (au profit de la victime) ; la responsabilité **pénale sanctionne** (au nom de la société). Un même fait peut engager les deux.' },
        ],
      },
    ],
    resources: [
      { kind: 'video', label: 'La responsabilité civile (conditions)', note: 'Vidéos — recherche YouTube', url: yt('responsabilité civile fait générateur dommage lien de causalité droit STMG') },
      { kind: 'video', label: 'Responsabilité civile et pénale', note: 'Vidéos — recherche YouTube', url: yt('différence responsabilité civile pénale droit terminale STMG') },
    ],
  },

  'droit-t7': {
    intro:
      'Le droit du travail encadre la relation entre l’employeur et le salarié. Un critère décisif structure tout le thème : le **lien de subordination**.',
    cours: [
      {
        h: 'Le contrat de travail et le lien de subordination',
        blocks: [
          { t: 'p', c: 'Le **contrat de travail** existe dès lors qu’une personne **travaille** contre une **rémunération** sous l’**autorité** d’un employeur. Ce dernier élément — le **lien de subordination juridique** (donner des ordres, en contrôler l’exécution, sanctionner) — est le **critère décisif**.' },
          { t: 'example', h: 'Le cas de Sonia', c: 'Sonia suit les consignes du chef, a des horaires imposés et un salaire, mais aucun écrit. L’employeur la dit « indépendante ».\n→ La **subordination** est bien présente : la relation est un **contrat de travail** (un **CDI**, faute d’écrit prévoyant un terme). Sonia bénéficie donc de toute la protection du droit du travail.' },
        ],
      },
      {
        h: 'Types de contrats et sources du droit',
        blocks: [
          { t: 'list', c: [
            '**CDI** : le contrat à durée indéterminée, la **norme** (forme normale et générale de la relation de travail).',
            '**CDD** et **intérim** : l’exception, encadrée par des **cas de recours** prévus par la loi ; le CDD doit être **établi par écrit** (à défaut, il peut être requalifié en CDI).',
          ] },
          { t: 'p', c: 'Les règles viennent de plusieurs **sources** : le **Code du travail**, les **conventions collectives** (par branche), les accords d’entreprise, le règlement intérieur et le contrat lui-même.' },
        ],
      },
      {
        h: 'La rupture du contrat',
        blocks: [
          { t: 'table', head: ['Mode de rupture', 'À l’initiative de…'], rows: [
            ['Démission', 'Le salarié'],
            ['Licenciement', "L’employeur (motif réel et sérieux + procédure)"],
            ['Rupture conventionnelle', 'Un commun accord'],
          ] },
          { t: 'warning', c: 'Un licenciement sans **motif réel et sérieux** ou sans respect de la **procédure** est abusif.' },
        ],
      },
    ],
    resources: [
      { kind: 'video', label: 'Le contrat de travail et la subordination', note: 'Vidéos — recherche YouTube', url: yt('contrat de travail lien de subordination CDI CDD droit terminale STMG') },
      { kind: 'video', label: 'La rupture du contrat de travail', note: 'Vidéos — recherche YouTube', url: yt('rupture contrat de travail licenciement rupture conventionnelle STMG') },
    ],
  },

  'droit-t8': {
    intro:
      'Entreprendre est une **liberté**, mais elle s’exerce dans un cadre juridique. Le choix de la **structure** a des conséquences majeures sur la responsabilité, et l’activité doit être **protégée**.',
    cours: [
      {
        h: 'La liberté d’entreprendre et le choix de la structure',
        blocks: [
          { t: 'p', c: 'La **liberté d’entreprendre** (reconnue à **valeur constitutionnelle**) et la liberté du commerce et de l’industrie permettent à chacun de créer et d’exercer une activité économique, dans le respect de la loi. Reste à choisir une **structure juridique**.' },
          { t: 'table', head: ['', 'Entreprise individuelle', 'Société'], rows: [
            ['Nature juridique', 'Personne **physique**', 'Personne **morale**'],
            ['Patrimoine', "Celui de l'entrepreneur", 'Distinct de celui des associés'],
          ] },
          { t: 'p', c: 'Ce choix conditionne la **responsabilité** de l’entrepreneur et la séparation (ou non) des **patrimoines**.' },
        ],
      },
      {
        h: 'Protéger l’activité',
        blocks: [
          { t: 'list', c: [
            '**Propriété industrielle** : le **brevet** protège une invention technique ; la **marque** protège un signe distinctif (nom, logo).',
            '**Concurrence** : elle doit rester **loyale**. Le dénigrement, l’imitation trompeuse ou le parasitisme relèvent de la **concurrence déloyale**, sanctionnée.',
          ] },
        ],
      },
    ],
    resources: [
      { kind: 'video', label: 'Entreprise individuelle ou société ?', note: 'Vidéos — recherche YouTube', url: yt('entreprise individuelle société personne physique morale droit STMG') },
      { kind: 'video', label: 'Protéger l’entreprise : marques et brevets', note: 'Vidéos — recherche YouTube', url: yt('propriété industrielle marque brevet concurrence déloyale STMG') },
    ],
  },

  // ======================================================================
  // ÉCONOMIE
  // ======================================================================
  'eco-t6': {
    intro:
      'Le marché ne règle pas tout : l’**État** intervient pour produire ce que le marché ne fournit pas, réduire les inégalités et stabiliser l’économie. Comprendre **pourquoi** et **comment** il agit est la base de ce thème.',
    cours: [
      {
        h: 'Les trois fonctions de l’État (Musgrave)',
        blocks: [
          { t: 'table', head: ['Fonction', 'Objectif'], rows: [
            ['Allocation', 'Produire des biens collectifs, corriger le marché'],
            ['Redistribution', 'Réduire les inégalités (prélèvements et prestations)'],
            ['Stabilisation', 'Agir sur la conjoncture (croissance, emploi, prix)'],
          ] },
        ],
      },
      {
        h: 'Pourquoi intervenir ? Les défaillances du marché',
        blocks: [
          { t: 'p', c: 'Le marché **défaille** dans plusieurs cas qui justifient l’intervention publique :' },
          { t: 'list', c: [
            '**Externalités** : effet d’une activité sur un tiers, non pris en compte par le prix (ex. la pollution).',
            '**Biens collectifs** : biens non rivaux et non excluables (ex. l’éclairage public), que le marché ne produit pas spontanément.',
            '**Asymétries d’information** entre acheteur et vendeur.',
            '**Situations de monopole**.',
          ] },
        ],
      },
      {
        h: 'Comment intervenir ? Les politiques économiques',
        blocks: [
          { t: 'list', c: [
            '**Politique conjoncturelle** (agir à court terme) : **budgétaire** (dépenses et recettes de l’État) et **monétaire** (monnaie, taux d’intérêt).',
            '**Politique structurelle** (transformer l’économie à long terme).',
          ] },
          { t: 'p', c: 'Le **budget de l’État** repose sur les **dépenses publiques** et les **prélèvements obligatoires**. Un déficit répété nourrit la **dette publique**.' },
        ],
      },
    ],
    resources: [
      { kind: 'video', label: 'Les fonctions de l’État (Musgrave)', note: 'Vidéos — recherche YouTube', url: yt('fonctions de l État allocation redistribution stabilisation Musgrave STMG') },
      { kind: 'video', label: 'Les défaillances du marché', note: 'Vidéos — recherche YouTube', url: yt('défaillances du marché externalités biens collectifs économie STMG') },
    ],
  },

  'eco-t7': {
    intro:
      'Le **chômage** est au cœur du débat économique. Pour en parler juste, il faut d’abord maîtriser le **vocabulaire** (population active, taux de chômage) et savoir **lire les chiffres** sans se tromper.',
    cours: [
      {
        h: 'Le marché du travail',
        blocks: [
          { t: 'p', c: 'Sur le marché du travail se rencontrent l’**offre de travail** (les ménages qui cherchent un emploi) et la **demande de travail** (les entreprises qui embauchent). Leur rencontre détermine un **salaire d’équilibre**.' },
        ],
      },
      {
        h: 'Les indicateurs à connaître',
        blocks: [
          { t: 'formula', c: 'Population active = personnes en emploi + chômeurs' },
          { t: 'formula', c: 'Taux d’activité = population active / population en âge de travailler' },
          { t: 'formula', c: 'Taux de chômage = chômeurs / population active' },
          { t: 'example', h: 'Lecture de données', c: 'Population en âge de travailler = 40 M ; emploi = 24 M ; chômeurs = 3 M.\n• Population active = 24 + 3 = **27 M**\n• Taux d’activité = 27 / 40 = **67,5 %**\n• Taux de chômage = 3 / 27 ≈ **11,1 %**' },
        ],
      },
      {
        h: 'Types de chômage et politiques de l’emploi',
        blocks: [
          { t: 'list', c: [
            '**Conjoncturel** : lié au ralentissement de l’activité.',
            '**Structurel** : lié aux structures de l’économie (inadéquation compétences/emplois).',
            '**Frictionnel** : lié au temps de passage d’un emploi à un autre.',
          ] },
          { t: 'warning', c: 'Une baisse du taux de chômage ne signifie pas toujours une amélioration : si des **chômeurs découragés** quittent la population active, le taux baisse **mécaniquement** sans qu’un seul emploi ait été créé. Il faut aussi regarder le **taux d’emploi**.' },
        ],
      },
    ],
    resources: [
      { kind: 'video', label: 'Population active, taux de chômage', note: 'Vidéos — recherche YouTube', url: yt('population active taux chômage taux emploi calcul économie STMG') },
      { kind: 'video', label: 'Les types de chômage', note: 'Vidéos — recherche YouTube', url: yt('types de chômage conjoncturel structurel frictionnel économie STMG') },
    ],
  },

  'eco-t8': {
    intro:
      'Pourquoi les pays échangent-ils ? Le **commerce international** repose sur la **spécialisation**, mais oppose partisans du **libre-échange** et du **protectionnisme**. Un classique de la question de réflexion.',
    cours: [
      {
        h: 'Les fondements : les avantages comparatifs (Ricardo)',
        blocks: [
          { t: 'p', c: 'Selon **David Ricardo**, chaque pays a intérêt à se **spécialiser** dans la production pour laquelle il est **relativement le plus efficace** (son **avantage comparatif**), puis à échanger. Cette **division internationale du travail (DIT)** augmente la richesse globale.' },
        ],
      },
      {
        h: 'Libre-échange ou protectionnisme ?',
        blocks: [
          { t: 'table', head: ['Libre-échange', 'Protectionnisme'], rows: [
            ['Ouvrir les marchés, supprimer les barrières', 'Protéger la production nationale'],
            ['Baisse des prix, marchés élargis, croissance', 'Droits de douane, quotas, barrières non tarifaires'],
            ['Risque : perdants (industries non compétitives)', 'Risque : représailles, prix plus élevés'],
          ] },
          { t: 'warning', c: 'Le libre-échange **crée de la richesse globale** mais **ne profite pas également à tous** : il fait des **perdants** (secteurs, régions, pays spécialisés dans des productions peu rémunératrices).' },
        ],
      },
      {
        h: 'La régulation du commerce mondial',
        blocks: [
          { t: 'p', c: 'Le commerce international est encadré par l’**OMC** (Organisation mondiale du commerce), des **accords commerciaux** et des **intégrations régionales** comme l’**Union européenne**. Les **firmes multinationales** et les **délocalisations** sont des acteurs majeurs de la mondialisation.' },
        ],
      },
    ],
    resources: [
      { kind: 'video', label: 'Les avantages comparatifs (Ricardo)', note: 'Vidéos — recherche YouTube', url: yt('avantages comparatifs Ricardo spécialisation commerce international STMG') },
      { kind: 'video', label: 'Libre-échange et protectionnisme', note: 'Vidéos — recherche YouTube', url: yt('libre échange protectionnisme avantages limites économie STMG') },
    ],
  },

  'eco-t9': {
    intro:
      'La **croissance** est-elle toujours souhaitable ? Ce thème confronte le PIB à ses **limites** et introduit le **développement durable**. Il n’est pas évalué à l’écrit mais alimente le **grand oral**.',
    cours: [
      {
        h: 'La croissance et ses limites',
        blocks: [
          { t: 'p', c: 'La **croissance** est mesurée par l’évolution du **PIB**. Mais le PIB est un indicateur **limité du bien-être** : il n’intègre ni les **inégalités**, ni la dégradation de l’**environnement**, ni le travail non marchand.' },
        ],
      },
      {
        h: 'Le développement durable',
        blocks: [
          { t: 'p', c: 'Le **développement durable** cherche à concilier **trois dimensions** : **économique**, **sociale** et **environnementale** — répondre aux besoins présents sans compromettre ceux des générations futures.' },
          { t: 'list', c: [
            '**Soutenabilité faible** : le capital naturel peut être remplacé par du capital produit.',
            '**Soutenabilité forte** : le **capital naturel** est irremplaçable et doit être préservé.',
          ] },
        ],
      },
      {
        h: 'Instruments et inégalités',
        blocks: [
          { t: 'list', c: [
            '**Économie circulaire** : réduire, réutiliser, recycler pour boucler les cycles de matières.',
            '**Économie collaborative** : partage et mutualisation entre particuliers.',
            '**Taxation** et **quotas** pour limiter les externalités négatives.',
          ] },
          { t: 'p', c: 'On distingue la **pauvreté absolue** (sous un seuil de subsistance) de la **pauvreté relative** (par rapport au niveau de vie médian d’un pays).' },
        ],
      },
    ],
    resources: [
      { kind: 'video', label: 'PIB, croissance et ses limites', note: 'Vidéos — recherche YouTube', url: yt('PIB croissance limites bien-être développement durable STMG') },
      { kind: 'video', label: 'Le développement durable', note: 'Vidéos — recherche YouTube', url: yt('développement durable soutenabilité économie circulaire STMG') },
    ],
  },

  // ======================================================================
  // MATHÉMATIQUES
  // ======================================================================
  'math-c1': {
    intro:
      'En gestion, presque tout se mesure en **variations** : un chiffre d’affaires qui augmente, un prix qui baisse, un effectif qui évolue. Ce chapitre te donne les outils pour manier ces variations sans te tromper : **taux d’évolution**, **coefficient multiplicateur**, évolutions **successives** et **moyennes**.',
    cours: [
      {
        h: 'Taux d’évolution et coefficient multiplicateur',
        blocks: [
          { t: 'p', c: 'Le **taux d’évolution** mesure une variation en pourcentage entre une valeur de départ et une valeur d’arrivée.' },
          { t: 'formula', c: 't = (V arrivée − V départ) / V départ · Coefficient multiplicateur : CM = 1 + t' },
          { t: 'example', h: 'Un CA qui progresse', c: 'Le CA passe de 250 000 € à 280 000 €.\nt = (280 000 − 250 000) / 250 000 = 0,12 = **+12 %**.\nLe coefficient multiplicateur associé est CM = 1,12.' },
          { t: 'tip', c: 'Une **hausse** de t % ⇒ CM = 1 + t/100. Une **baisse** de t % ⇒ CM = 1 − t/100. (Ex. : −8 % ⇒ CM = 0,92.)' },
        ],
      },
      {
        h: 'Évolutions successives et taux moyen',
        blocks: [
          { t: 'p', c: 'Pour enchaîner plusieurs évolutions, on **multiplie** les coefficients (on n’additionne surtout pas les taux !).' },
          { t: 'formula', c: 'CM global = produit des CM · CM moyen = (CM global)^(1/n) · t moyen = CM moyen − 1' },
          { t: 'example', h: 'Deux années de suite', c: '+12 % puis +5 %.\nCM global = 1,12 × 1,05 = 1,176 → **+17,6 %** au total.\nTaux moyen annuel : CM = √1,176 ≈ 1,0845 → environ **+8,45 % par an**.' },
          { t: 'warning', c: 'Piège classique : +12 % puis +5 % ne fait **pas** +17 %. On multiplie les coefficients (1,12 × 1,05), on n’additionne pas les pourcentages.' },
        ],
      },
      {
        h: 'Évolution réciproque et indice base 100',
        blocks: [
          { t: 'list', c: [
            '**Évolution réciproque** : pour « annuler » une évolution, on prend le coefficient inverse. CM réciproque = 1 / CM.',
            '**Indice base 100** : Indice = (valeur / valeur de référence) × 100. Pratique pour comparer des évolutions.',
          ] },
        ],
      },
    ],
    resources: [
      { kind: 'video', label: 'Taux d’évolution et coefficient multiplicateur', note: 'Vidéos — recherche YouTube', url: yt('taux évolution coefficient multiplicateur terminale STMG maths') },
      { kind: 'video', label: 'Taux moyen et évolutions successives', note: 'Vidéos — recherche YouTube', url: yt('taux moyen évolutions successives coefficient multiplicateur STMG') },
    ],
  },

  'math-c2': {
    intro:
      'Une **suite** est une liste de nombres qui se suivent selon une règle. En STMG, elles modélisent des évolutions : un capital qui grossit, une machine qui perd de la valeur. Deux modèles à distinguer absolument : **arithmétique** et **géométrique**.',
    cours: [
      {
        h: 'Deux types de suites',
        blocks: [
          { t: 'table', head: ['', 'Arithmétique', 'Géométrique'], rows: [
            ['On passe d’un terme à l’autre en…', 'ajoutant la raison r', 'multipliant par la raison q'],
            ['Formule', 'u_n = u_0 + n × r', 'u_n = u_0 × q^n'],
            ['Type de croissance', 'linéaire', 'exponentielle'],
          ] },
        ],
      },
      {
        h: 'Reconnaître et calculer',
        blocks: [
          { t: 'p', c: 'Une évolution en **pourcentage constant** donne une suite **géométrique** : la raison est le coefficient multiplicateur.' },
          { t: 'example', h: 'Une machine qui se déprécie', c: 'Une machine de 20 000 € perd 8 % par an.\n→ Suite géométrique de raison q = 1 − 0,08 = **0,92**, avec u_0 = 20 000.\nu_n = 20 000 × 0,92^n.\nAu bout de 3 ans : u_3 = 20 000 × 0,92³ ≈ **15 574 €**.' },
        ],
      },
    ],
    resources: [
      { kind: 'video', label: 'Suites arithmétiques et géométriques', note: 'Vidéos — recherche YouTube', url: yt('suites arithmétiques géométriques terminale STMG maths') },
    ],
  },

  'math-c3': {
    intro:
      'La **dérivation** est l’outil pour étudier comment une fonction **varie** et trouver ses **maximums** (bénéfice maximal) ou **minimums** (coût minimal). C’est l’application phare des maths en gestion : l’**optimisation**.',
    cours: [
      {
        h: 'Nombre dérivé et tangente',
        blocks: [
          { t: 'p', c: 'Le **nombre dérivé** f’(a) est le **coefficient directeur de la tangente** à la courbe au point d’abscisse a. Il indique la « pente » de la courbe en ce point.' },
          { t: 'formula', c: 'Équation de la tangente en a : y = f’(a)(x − a) + f(a)' },
        ],
      },
      {
        h: 'Du signe de la dérivée aux variations',
        blocks: [
          { t: 'list', c: [
            'Si f’(x) > 0 sur un intervalle → f est **croissante**.',
            'Si f’(x) < 0 → f est **décroissante**.',
            'Un **extremum** (maximum ou minimum) apparaît là où f’ **s’annule en changeant de signe**.',
          ] },
          { t: 'example', h: 'Maximiser un bénéfice', c: 'f(x) = −x² + 40x − 100 (bénéfice pour x articles).\nf’(x) = −2x + 40.\nf’(x) = 0 ⇔ x = 20 ; f’ passe de + à − : c’est un **maximum**.\nBénéfice maximal : f(20) = −400 + 800 − 100 = **300 €** pour **20 articles**.' },
          { t: 'tip', c: 'Méthode d’optimisation : (1) calculer f’, (2) étudier son signe, (3) dresser le tableau de variation, (4) conclure sur le maximum/minimum.' },
        ],
      },
    ],
    resources: [
      { kind: 'video', label: 'Dérivation et tangente', note: 'Vidéos — recherche YouTube', url: yt('dérivation nombre dérivé tangente terminale STMG') },
      { kind: 'video', label: 'Signe de la dérivée et variations', note: 'Vidéos — recherche YouTube', url: yt('signe dérivée tableau de variation optimisation STMG maths') },
    ],
  },

  'math-c4': {
    intro:
      'Quand deux grandeurs semblent liées (le budget pub et les ventes, par exemple), on cherche une **droite** qui résume le nuage de points, pour ensuite **faire des prévisions**.',
    cours: [
      {
        h: 'Nuage de points et ajustement',
        blocks: [
          { t: 'p', c: 'On représente les couples (x ; y) par un **nuage de points**. Son centre est le **point moyen G**, de coordonnées (moyenne des x ; moyenne des y).' },
          { t: 'p', c: 'La **méthode des moindres carrés** (à la calculatrice) donne la **droite d’ajustement** y = ax + b qui passe au plus près des points (et par G).' },
        ],
      },
      {
        h: 'Interpoler et extrapoler',
        blocks: [
          { t: 'list', c: [
            '**Interpoler** : estimer une valeur **à l’intérieur** de l’intervalle des données.',
            '**Extrapoler** : prévoir une valeur **au-delà** des données connues (avec prudence : la tendance peut ne pas se poursuivre).',
          ] },
        ],
      },
    ],
    resources: [
      { kind: 'video', label: 'Ajustement affine (moindres carrés)', note: 'Vidéos — recherche YouTube', url: yt('ajustement affine moindres carrés statistiques deux variables STMG') },
    ],
  },

  'math-c5': {
    intro:
      'Les **probabilités conditionnelles** répondent à : « sachant qu’un événement s’est produit, quelle est la probabilité d’un autre ? ». L’outil visuel indispensable est l’**arbre pondéré**.',
    cours: [
      {
        h: 'Probabilité conditionnelle et arbre pondéré',
        blocks: [
          { t: 'formula', c: 'P_A(B) = P(A ∩ B) / P(A)' },
          { t: 'p', c: 'Sur un **arbre pondéré** : la somme des branches issues d’un même nœud vaut **1**, et on **multiplie** les probabilités le long d’un chemin.' },
          { t: 'example', h: 'Pièces défectueuses', c: 'Machine A (60 %) : 2 % de défauts. Machine B (40 %) : 5 % de défauts.\nP(défectueuse) = 0,60 × 0,02 + 0,40 × 0,05 = 0,012 + 0,020 = **0,032**.\nSachant qu’une pièce est défectueuse, vient-elle de B ?\nP = 0,020 / 0,032 = **0,625** (soit 62,5 %).' },
        ],
      },
      {
        h: 'Indépendance',
        blocks: [
          { t: 'p', c: 'Deux événements A et B sont **indépendants** si la réalisation de l’un ne change pas la probabilité de l’autre :' },
          { t: 'formula', c: 'A et B indépendants ⇔ P(A ∩ B) = P(A) × P(B)' },
        ],
      },
    ],
    resources: [
      { kind: 'video', label: 'Probabilités conditionnelles et arbres', note: 'Vidéos — recherche YouTube', url: yt('probabilités conditionnelles arbre pondéré terminale STMG') },
    ],
  },

  'math-c6': {
    intro:
      'La **loi binomiale** modélise une expérience répétée un certain nombre de fois, où l’on compte les **succès** (ex. : nombre de pièces défectueuses sur 20). C’est un incontournable, à maîtriser à la calculatrice.',
    cours: [
      {
        h: 'De l’épreuve de Bernoulli à la loi binomiale',
        blocks: [
          { t: 'list', c: [
            'Une **épreuve de Bernoulli** n’a que deux issues : **succès** (probabilité p) ou **échec** (1 − p).',
            'Répéter n fois cette épreuve, de façon **identique et indépendante**, et compter les succès, donne la **loi binomiale B(n ; p)**.',
          ] },
          { t: 'formula', c: 'Espérance : E(X) = n × p' },
          { t: 'example', h: 'Espérance', c: 'X suit B(20 ; 0,3). En moyenne, on attend E(X) = 20 × 0,3 = **6** succès.' },
        ],
      },
    ],
    resources: [
      { kind: 'video', label: 'La loi binomiale (calculatrice)', note: 'Vidéos — recherche YouTube', url: yt('loi binomiale Bernoulli espérance calculatrice terminale STMG') },
    ],
  },

  'math-c7': {
    intro:
      'La **loi normale** décrit une multitude de phénomènes « en cloche » (tailles, mesures, erreurs). Associée à l’**estimation**, elle permet d’interpréter les sondages et le contrôle qualité.',
    cours: [
      {
        h: 'La courbe en cloche',
        blocks: [
          { t: 'p', c: 'La **loi normale** a une courbe **en cloche**, **symétrique** autour de la moyenne **μ**. L’**écart-type σ** règle la **dispersion** : plus σ est grand, plus la cloche est étalée.' },
        ],
      },
      {
        h: 'Estimation et intervalle de confiance',
        blocks: [
          { t: 'p', c: 'À partir d’un échantillon, l’**intervalle de confiance** encadre une **proportion** inconnue avec un certain **niveau** (souvent ~95 %). Applications : **sondages**, contrôle de **qualité**.' },
          { t: 'warning', c: 'Un intervalle de confiance ne donne pas une valeur exacte : il fournit une **fourchette** avec un niveau de confiance.' },
        ],
      },
    ],
    resources: [
      { kind: 'video', label: 'La loi normale', note: 'Vidéos — recherche YouTube', url: yt('loi normale courbe cloche moyenne écart type terminale STMG') },
      { kind: 'video', label: 'Intervalle de confiance', note: 'Vidéos — recherche YouTube', url: yt('intervalle de confiance estimation proportion STMG maths') },
    ],
  },

  // ======================================================================
  // PHILOSOPHIE
  // ======================================================================
  'philo-notions': {
    intro:
      'La philosophie ne se récite pas : elle se **pense**. On n’apprend pas des définitions par cœur, on apprend à **problématiser** — à voir qu’une question évidente cache un vrai problème. Ce chapitre présente les **7 notions** du programme et les **repères** qui servent à raisonner.',
    cours: [
      {
        h: 'Les 7 notions et leurs problématiques',
        blocks: [
          { t: 'p', c: 'Chaque notion s’aborde par des **questions** (des problématiques), pas par une définition figée.' },
          { t: 'list', c: [
            '**L’art** : imitation ou création ? À quoi sert l’art ? Le beau est-il subjectif ?',
            '**La justice** : se réduit-elle à la loi ? Peut-il être juste de désobéir ?',
            '**La liberté** : sommes-nous vraiment libres ? Liberté et déterminisme.',
            '**La nature** : l’homme en fait-il partie ? Faut-il la respecter ?',
            '**La religion** : foi et raison s’opposent-elles ?',
            '**La technique** : nous libère-t-elle ou nous asservit-elle ?',
            '**La vérité** : peut-on tout démontrer ? Vérité et opinion.',
          ] },
        ],
      },
      {
        h: 'Les repères : des distinctions pour raisonner',
        blocks: [
          { t: 'p', c: 'Les **repères** sont des couples de concepts qui aiguisent l’analyse. Les connaître permet de nuancer un devoir.' },
          { t: 'table', head: ['Repère', 'Distinction'], rows: [
            ['Légal / Légitime', 'Conforme à la loi / conforme à la justice'],
            ['Objectif / Subjectif', 'Indépendant de moi / propre à chacun'],
            ['Croire / Savoir', 'Tenir pour vrai sans preuve / avec preuve'],
            ['En théorie / En pratique', 'Dans l’idée / dans les faits'],
          ] },
          { t: 'tip', c: 'Une loi peut être **légale** sans être jugée **légitime** : ce simple écart nourrit à lui seul une dissertation sur la justice.' },
        ],
      },
    ],
    resources: [
      { kind: 'video', label: 'Méthode : problématiser en philo', note: 'Vidéos — recherche YouTube', url: yt('philosophie méthode problématiser notion terminale technologique') },
    ],
  },

  'philo-methode': {
    intro:
      'Au bac, on choisit entre une **dissertation** et une **explication de texte**. Dans les deux cas, la note récompense la **méthode** et la capacité à **argumenter**, pas la récitation. Voici comment structurer un devoir.',
    cours: [
      {
        h: 'La dissertation, étape par étape',
        blocks: [
          { t: 'list', c: [
            '**Analyser** le sujet et **définir** les termes.',
            '**Problématiser** : dégager le paradoxe, le vrai problème.',
            'Construire un **plan progressif** (souvent thèse / antithèse / dépassement).',
            '**Argumenter** avec notions, repères, auteurs et exemples concrets.',
            '**Conclure** en répondant clairement au problème.',
          ] },
          { t: 'example', h: 'Introduction rédigée (extrait)', c: '« La technique nous éloigne-t-elle de la nature ? »\nOn oppose spontanément technique (les outils par lesquels l’homme agit) et nature (ce qui existe sans lui). Mais la technique n’est-elle pas, justement, la manière proprement **humaine** d’habiter la nature ? Le vrai problème n’est peut-être pas la distance, mais le **rapport** que la technique instaure avec la nature.' },
        ],
      },
      {
        h: 'L’explication de texte et les auteurs',
        blocks: [
          { t: 'p', c: 'Pour l’**explication de texte** : dégager la **thèse**, suivre les **mouvements** du texte, expliquer le raisonnement, puis en discuter la portée.' },
          { t: 'table', head: ['Période', 'Auteurs'], rows: [
            ['Antiquité / Moyen Âge', 'Platon, Aristote, Épicure'],
            ['Moderne', 'Descartes, Pascal, Rousseau, Kant'],
            ['Contemporaine', 'Nietzsche, Freud, Bergson, Arendt, Sartre, Beauvoir, Foucault'],
          ] },
        ],
      },
    ],
    resources: [
      { kind: 'video', label: 'Méthode de la dissertation de philo', note: 'Vidéos — recherche YouTube', url: yt('méthode dissertation philosophie bac technologique introduction plan') },
      { kind: 'video', label: 'Méthode de l’explication de texte', note: 'Vidéos — recherche YouTube', url: yt('méthode explication de texte philosophie bac') },
    ],
  },

  // ======================================================================
  // HISTOIRE-GÉOGRAPHIE
  // ======================================================================
  'hg-h1': {
    intro:
      'Entre 1939 et 1945, le monde bascule dans une guerre d’un genre nouveau : une **guerre d’anéantissement** qui vise les populations elles-mêmes, et qui culmine avec un projet d’extermination, la **Shoah**. Comprendre ce basculement est essentiel.',
    cours: [
      {
        h: 'Des régimes totalitaires à la guerre',
        blocks: [
          { t: 'p', c: 'Dans l’entre-deux-guerres s’imposent des **régimes totalitaires** (nazisme, stalinisme) qui contrôlent tous les aspects de la société : parti unique, propagande, terreur, culte du chef.' },
          { t: 'p', c: 'La **Seconde Guerre mondiale** (1939-1945) oppose l’Axe aux Alliés et devient un conflit **total** et **mondial**.' },
        ],
      },
      {
        h: 'Une guerre d’anéantissement',
        blocks: [
          { t: 'p', c: 'Elle se distingue par une **violence de masse** qui ne vise plus seulement les armées, mais les **civils** : bombardements de villes, famines organisées, exactions. Le front et l’arrière se confondent.' },
          { t: 'p', c: 'À l’Est notamment, la guerre est menée comme une guerre d’**extermination**. Elle s’achève avec l’usage de l’**arme nucléaire** (Hiroshima, Nagasaki, 1945).' },
        ],
      },
      {
        h: 'La Shoah, un génocide planifié',
        blocks: [
          { t: 'p', c: 'La **Shoah** est le **génocide des Juifs** (et des Tsiganes) : une volonté de destruction **totale** d’un groupe, **planifiée et industrialisée** (ghettos, Einsatzgruppen, camps d’extermination).' },
          { t: 'warning', c: 'Un génocide n’est pas une « bavure » de guerre : c’est un projet **délibéré et organisé** d’extermination d’un groupe humain.' },
        ],
      },
      {
        h: 'La France dans la guerre',
        blocks: [
          { t: 'p', c: 'Après la défaite de 1940, le **régime de Vichy** collabore avec l’occupant, tandis que la **Résistance** s’organise jusqu’à la **Libération**. Bilan du conflit : sans précédent (~50-60 millions de morts).' },
        ],
      },
    ],
    resources: [
      { kind: 'video', label: 'Totalitarismes et Seconde Guerre mondiale', note: 'Vidéos — recherche YouTube', url: yt('totalitarismes seconde guerre mondiale guerre anéantissement terminale') },
      { kind: 'video', label: 'La Shoah', note: 'Vidéos — recherche YouTube', url: yt('Shoah génocide juifs seconde guerre mondiale histoire terminale') },
    ],
  },

  'hg-h2': {
    intro:
      'De 1945 à nos jours, l’ordre mondial change deux fois : d’abord figé par la **Guerre froide** (deux blocs), il s’ouvre avec la **décolonisation** puis bascule, après 1991, vers un monde **multipolaire**.',
    cours: [
      {
        h: 'La Guerre froide : un monde bipolaire (1947-1991)',
        blocks: [
          { t: 'p', c: 'Après 1945, les deux vainqueurs — les **États-Unis** et l’**URSS** — deviennent rivaux. Le monde se divise en **deux blocs** aux idéologies opposées (capitalisme/démocratie libérale contre communisme). Ils ne s’affrontent **jamais directement** (risque nucléaire) mais **indirectement** : course aux armements, propagande, espionnage, guerres « par procuration » (Corée, Vietnam).' },
          { t: 'p', c: 'Chaque bloc s’organise militairement : l’**OTAN** (1949) à l’Ouest, le **pacte de Varsovie** (1955) à l’Est. La menace de destruction mutuelle instaure un « **équilibre de la terreur** » (dissuasion nucléaire).' },
          { t: 'table', head: ['Date', 'Événement clé'], rows: [
            ['1947', 'Début de la Guerre froide (doctrine Truman, plan Marshall)'],
            ['1948-1949', 'Blocus de Berlin ; l’Allemagne est divisée (RFA / RDA)'],
            ['1961', 'Construction du mur de Berlin'],
            ['1962', 'Crise des missiles de Cuba (point de tension maximal)'],
            ['1989', 'Chute du mur de Berlin'],
            ['1991', 'Éclatement de l’URSS : fin de la Guerre froide'],
          ] },
        ],
      },
      {
        h: 'La décolonisation',
        blocks: [
          { t: 'p', c: 'En parallèle, les anciennes **colonies** accèdent à l’**indépendance** : c’est la **décolonisation** (années 1945-1960 surtout). Elle est parfois pacifique (Inde, 1947), parfois violente (guerre d’Algérie, 1954-1962).' },
          { t: 'p', c: 'De nombreux pays nouvellement indépendants refusent de choisir un camp : c’est le mouvement des **non-alignés** (conférence de Bandung, 1955), à l’origine de l’idée de « **tiers-monde** ».' },
        ],
      },
      {
        h: 'Vers un monde multipolaire',
        blocks: [
          { t: 'p', c: 'La disparition de l’URSS en **1991** met fin au monde **bipolaire**. Les États-Unis restent un temps la seule superpuissance, mais de **nouvelles puissances** émergent (Chine, Inde, Union européenne, etc.) : on parle d’un monde **multipolaire**.' },
          { t: 'tip', c: 'Repères à mémoriser : **1947** (début) et **1991** (fin) de la Guerre froide ; **1962** (Cuba) et **1989** (chute du mur) comme tournants.' },
        ],
      },
    ],
    resources: [
      { kind: 'video', label: 'La Guerre froide expliquée', note: 'Vidéos — recherche YouTube', url: yt('guerre froide monde bipolaire multipolaire terminale histoire') },
      { kind: 'video', label: 'La décolonisation', note: 'Vidéos — recherche YouTube', url: yt('décolonisation Inde Algérie tiers monde terminale histoire') },
    ],
  },

  'hg-h3': {
    intro:
      'Depuis 1945, la France cherche une **nouvelle place dans le monde** : elle se reconstruit, participe à la **construction européenne** et affirme un rôle international.',
    cours: [
      {
        h: 'La reconstruction et les Trente Glorieuses',
        blocks: [
          { t: 'p', c: 'Au sortir de la guerre, la France se **reconstruit** (aidée notamment par le **plan Marshall**, 1948) et connaît une longue période de forte croissance, les **Trente Glorieuses** (≈ 1945-1975) : modernisation, plein emploi, société de consommation.' },
          { t: 'p', c: 'Sur le plan politique, la **IVe République** (1946) laisse place à la **Ve République** (**1958**, retour du général de Gaulle), qui renforce le pouvoir présidentiel.' },
        ],
      },
      {
        h: 'La construction européenne',
        blocks: [
          { t: 'p', c: 'La France est un **moteur de la construction européenne**, pensée pour garantir la paix et la prospérité.' },
          { t: 'table', head: ['Date', 'Étape'], rows: [
            ['1957', 'Traité de Rome : création de la CEE'],
            ['1992', 'Traité de Maastricht : naissance de l’Union européenne'],
            ['2002', 'Mise en circulation de l’euro'],
          ] },
        ],
      },
      {
        h: 'Une puissance à rayonnement mondial',
        blocks: [
          { t: 'p', c: 'La France affirme un **rôle international** : membre permanent du **Conseil de sécurité de l’ONU**, dotée de l’**arme nucléaire** (depuis 1960) et d’une importante **influence culturelle** (francophonie). C’est le **thème conclusif** de la partie histoire.' },
          { t: 'tip', c: 'Repères : **1958** (Ve République), **1957** (traité de Rome), **2002** (euro).' },
        ],
      },
    ],
    resources: [
      { kind: 'video', label: 'La France depuis 1945', note: 'Vidéos — recherche YouTube', url: yt('France depuis 1945 reconstruction Trente Glorieuses Ve République terminale') },
      { kind: 'video', label: 'La construction européenne', note: 'Vidéos — recherche YouTube', url: yt('construction européenne traité de Rome Maastricht euro terminale') },
    ],
  },

  'hg-g1': {
    intro:
      'Les **mers et océans** sont le grand théâtre de la mondialisation : par eux transite l’essentiel des marchandises, mais ils concentrent aussi des **ressources** et des **tensions**.',
    cours: [
      {
        h: 'Le support des échanges mondiaux',
        blocks: [
          { t: 'p', c: 'Environ **80 % du commerce mondial** transite par voie **maritime**. La **conteneurisation** a massifié les échanges ; de grandes **routes** (Suez, Panama, Malacca) et de puissantes **façades maritimes** structurent le commerce. C’est la **maritimisation** des économies.' },
        ],
      },
      {
        h: 'Des espaces d’enjeux et de tensions',
        blocks: [
          { t: 'list', c: [
            '**Ressources** : halieutiques (pêche), énergétiques, minérales.',
            '**Câbles sous-marins** : ils font transiter les **données** mondiales.',
            '**Tensions** : piraterie, rivalités géopolitiques (mer de Chine méridionale).',
            '**Enjeux environnementaux** : pollution, surpêche.',
          ] },
        ],
      },
    ],
    resources: [
      { kind: 'video', label: 'Mers et océans dans la mondialisation', note: 'Vidéos — recherche YouTube', url: yt('mers océans mondialisation maritimisation terminale géographie') },
    ],
  },

  'hg-g2': {
    intro:
      'La mondialisation n’intègre pas les territoires de la même façon : certains concentrent la richesse (**métropolisation**), d’autres restent en **marge**.',
    cours: [
      {
        h: 'La métropolisation et les aires de puissance',
        blocks: [
          { t: 'p', c: 'La **métropolisation** est la concentration des hommes, des activités et des pouvoirs (économique, politique, culturel) dans les grandes **métropoles**. Ces villes, connectées entre elles, commandent l’économie mondiale et forment des **aires de puissance** (Amérique du Nord, Europe, Asie de l’Est).' },
          { t: 'p', c: 'Ces métropoles concentrent les **fonctions de commandement** : sièges sociaux, bourses, universités, aéroports internationaux (les « hubs »).' },
        ],
      },
      {
        h: 'Des territoires inégalement intégrés',
        blocks: [
          { t: 'p', c: 'La mondialisation crée des **gagnants** et des **perdants**. À l’opposé des métropoles, des **territoires en marge** (espaces ruraux isolés, régions industrielles en déclin, pays les moins avancés) restent faiblement connectés aux flux mondiaux.' },
          { t: 'p', c: 'Différents **acteurs** façonnent ces inégalités : les **États**, les **firmes multinationales (FMN)** qui choisissent où s’implanter, et les **organisations internationales**.' },
          { t: 'tip', c: 'Idée clé : la mondialisation **hiérarchise** les territoires ; l’intégration est une question de **degré**, du cœur (métropoles) aux marges.' },
        ],
      },
    ],
    resources: [
      { kind: 'video', label: 'Territoires et mondialisation', note: 'Vidéos — recherche YouTube', url: yt('territoires inégalement intégrés mondialisation métropolisation terminale') },
    ],
  },

  'hg-g3': {
    intro:
      'Dernier thème : la **France** et ses régions dans l’**Union européenne** et la mondialisation — un territoire aux **atouts** réels mais aux **contrastes** marqués.',
    cours: [
      {
        h: 'Les atouts et les contrastes du territoire français',
        blocks: [
          { t: 'p', c: 'La France dispose de nombreux **atouts** : une **position** de carrefour en Europe, de grandes **métropoles** (Paris, ville mondiale), des **façades maritimes**, un vaste domaine grâce à ses territoires **ultramarins**, de bons réseaux de transport.' },
          { t: 'p', c: 'Mais le territoire est **contrasté** : **inégalités régionales**, opposition entre métropoles dynamiques et espaces ruraux ou industriels en difficulté.' },
        ],
      },
      {
        h: 'Le rayonnement de la France dans l’UE et le monde',
        blocks: [
          { t: 'p', c: 'Intégrée à l’**Union européenne** et à la mondialisation, la France **rayonne** sur les plans économique, scientifique et culturel.' },
          { t: 'example', h: 'Kourou', c: 'Le centre spatial de **Kourou** (Guyane) illustre le rayonnement **scientifique et technologique** de la France, au service de l’Europe spatiale — un atout majeur situé dans un territoire ultramarin.' },
        ],
      },
    ],
    resources: [
      { kind: 'video', label: 'La France dans l’UE et la mondialisation', note: 'Vidéos — recherche YouTube', url: yt('France UE mondialisation régions rayonnement terminale géographie') },
    ],
  },

  // ======================================================================
  // LANGUES
  // ======================================================================
  'lng-en-gram': {
    intro:
      'En anglais, quelques **temps** et structures reviennent sans cesse. Bien les distinguer (surtout **present perfect** vs **preterit**) fait la différence à l’écrit comme à l’oral.',
    cours: [
      {
        h: 'Les temps : present perfect vs preterit',
        blocks: [
          { t: 'table', head: ['Temps', 'Emploi', 'Exemple'], rows: [
            ['Present perfect (have/has + PP)', 'Lien passé-présent, bilan, expérience', 'I **have visited** London.'],
            ['Preterit', 'Action passée **datée** et terminée', 'We **went** there in 2019.'],
            ['Past perfect (had + PP)', 'Antériorité dans le passé', 'She **had left** before I arrived.'],
          ] },
          { t: 'tip', c: 'Le present perfect va souvent avec *for*, *since*, *ever*, *already*, *yet*. Une date précise (*yesterday*, *in 2019*) impose le **preterit**.' },
        ],
      },
      {
        h: 'Modaux, conditionnels et passif',
        blocks: [
          { t: 'list', c: [
            '**Modaux** (+ base verbale) : *can/could*, *may/might*, *must*, *have to*, *should*, *would*.',
            '**Conditionnels** : Type 1 (réel) *If + present, will* ; Type 2 (irréel présent) *If + preterit, would* ; Type 3 (irréel passé) *If + past perfect, would have + PP*.',
            '**Passif** : *be* (au temps voulu) + participe passé — « The report **was written** by the manager. »',
          ] },
          { t: 'example', h: 'Discours rapporté', c: '« I will call you tomorrow », he said.\n→ He said he **would** call me **the following day** (recul d’un temps).' },
        ],
      },
    ],
    resources: [
      { kind: 'video', label: 'Present perfect vs preterit', note: 'Vidéos — recherche YouTube', url: yt('present perfect vs preterit anglais explication lycée') },
      { kind: 'video', label: 'Les conditionnels en anglais', note: 'Vidéos — recherche YouTube', url: yt('conditionnels anglais if type 1 2 3 lycée') },
    ],
  },

  'lng-en-voc': {
    intro:
      'Le vocabulaire s’organise par **axes culturels** et, en STMG, par le lexique du **management** (utile aussi pour l’ETLV). Le mémoriser régulièrement, par petits blocs, est plus efficace qu’une longue liste.',
    cours: [
      {
        h: 'Vocabulaire du management (ETLV)',
        blocks: [
          { t: 'table', head: ['Anglais', 'Français'], rows: [
            ['turnover', "chiffre d'affaires"],
            ['balance sheet', 'bilan'],
            ['cash flow', 'trésorerie'],
            ['break-even point', 'seuil de rentabilité'],
            ['shareholders / stakeholders', 'actionnaires / parties prenantes'],
            ['CSR', 'RSE'],
          ] },
        ],
      },
      {
        h: 'Vocabulaire par axes',
        blocks: [
          { t: 'list', c: [
            '*Identités et échanges* : migration, border, diversity, equality.',
            '*Innovations et responsabilité* : technology, data, privacy, sustainability, ethics.',
            '*Citoyenneté et mondes virtuels* : social media, fake news, surveillance.',
          ] },
          { t: 'tip', c: 'Fais une **fiche par axe** et révise-la en flashcards : 10-15 min par jour valent mieux qu’une longue liste une fois par mois.' },
        ],
      },
    ],
    resources: [
      { kind: 'video', label: 'Vocabulaire du management (anglais)', note: 'Vidéos — recherche YouTube', url: yt('anglais vocabulaire management entreprise ETLV STMG') },
    ],
  },

  'lng-es-gram': {
    intro:
      'En espagnol, deux difficultés reviennent tout le temps : le choix entre **ser** et **estar**, et entre **indefinido** et **imperfecto**. Les maîtriser change tout.',
    cours: [
      {
        h: 'Ser ou Estar ?',
        blocks: [
          { t: 'table', head: ['SER', 'ESTAR'], rows: [
            ['Caractéristique permanente, identité', 'État, situation temporaire'],
            ['Heure, origine, profession', 'Lieu'],
            ['*Soy* estudiante. / *Es* las tres.', '*Estoy* cansado. / El libro *está* en la mesa.'],
          ] },
        ],
      },
      {
        h: 'Les passés : indefinido ou imperfecto ?',
        blocks: [
          { t: 'p', c: '**Règle d’or** : *indefinido* = action **précise et terminée** (datée) ; *imperfecto* = **décor, habitude, arrière-plan**.' },
          { t: 'example', h: 'Les deux ensemble', c: 'Cuando **era** niño (décor → imperfecto), **jugaba** al fútbol todos los días (habitude → imperfecto).\nAyer **comí** en un restaurante (action datée → indefinido).' },
        ],
      },
      {
        h: 'Autres points clés',
        blocks: [
          { t: 'list', c: [
            '**Futur** : infinitif + -é, -ás, -á, -emos, -éis, -án (*hablaré*). Irréguliers : tener→tendré, hacer→haré.',
            '**Obligation** : *tener que* + inf. (personnelle) ; *hay que* + inf. (impersonnelle).',
            '**Gustar** : le sujet est la chose aimée — *Me **gusta** el cine* / *Me **gustan** los libros*.',
          ] },
        ],
      },
    ],
    resources: [
      { kind: 'video', label: 'Ser vs Estar', note: 'Vidéos — recherche YouTube', url: yt('espagnol ser estar différence explication lycée') },
      { kind: 'video', label: 'Indefinido vs Imperfecto', note: 'Vidéos — recherche YouTube', url: yt('espagnol indefinido imperfecto différence lycée') },
    ],
  },

  'lng-es-voc': {
    intro:
      'Comme en anglais, le vocabulaire espagnol se travaille par **axes**, avec un lexique **du travail** très utile en STMG.',
    cours: [
      {
        h: 'Vocabulaire par axes',
        blocks: [
          { t: 'table', head: ['Espagnol', 'Français'], rows: [
            ['el paro', 'le chômage'],
            ['el sueldo', 'le salaire'],
            ['la empresa', "l'entreprise"],
            ['la migración', 'la migration'],
            ['la memoria', 'la mémoire'],
            ['el medio ambiente', "l'environnement"],
          ] },
          { t: 'tip', c: 'Utilise **WordReference** ou **Linguee** pour voir les mots **en contexte**, pas seulement traduits.' },
        ],
      },
    ],
    resources: [
      { kind: 'video', label: 'Vocabulaire espagnol (travail, société)', note: 'Vidéos — recherche YouTube', url: yt('espagnol vocabulaire travail entreprise société lycée') },
    ],
  },

  'lng-axes': {
    intro:
      'Le programme de langues s’organise autour de **8 axes culturels** (thématique « Gestes fondateurs et mondes en mouvement »). Les connaître aide à préparer l’oral et à classer son vocabulaire.',
    cours: [
      {
        h: 'Les 8 axes culturels',
        blocks: [
          { t: 'list', c: [
            '1. Identités et échanges — 2. Espace privé et espace public',
            '3. Art et pouvoir — 4. Citoyenneté et mondes virtuels',
            '5. Fictions et réalités — 6. Innovations scientifiques et responsabilité',
            '7. Diversité et inclusion — 8. Territoire et mémoire',
          ] },
        ],
      },
      {
        h: 'Les activités langagières et l’oral',
        blocks: [
          { t: 'p', c: 'Six **activités langagières** : compréhension orale/écrite, expression orale (en continu et en interaction), expression écrite, et **médiation** (reformuler, traduire ou expliquer un document à quelqu’un).' },
          { t: 'tip', c: 'À l’oral, structure ta présentation (*First… Then… Finally…*) et appuie-toi sur des mots-clés, sans lire.' },
        ],
      },
    ],
    resources: [
      { kind: 'video', label: 'Les axes du programme de langues', note: 'Vidéos — recherche YouTube', url: yt('axes programme langues lycée gestes fondateurs mondes en mouvement') },
    ],
  },
}
