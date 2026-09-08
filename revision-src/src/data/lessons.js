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
    essentiel: [
      'La comptabilité en **partie double** : tout enregistrement respecte **débit = crédit**.',
      '**TVA à décaisser = TVA collectée − TVA déductible** ; si déductible > collectée → **crédit de TVA**.',
      '**Amortissement** (perte définitive) ≠ **dépréciation** (réversible) ; **VNC = valeur d’origine − amortissements cumulés**.',
      'Les **4 principes** comptables : prudence · indépendance des exercices · continuité · permanence des méthodes.',
    ],
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
          { t: 'figure', name: 'tva' },
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
    essentiel: [
      'Cascade des SIG : **Marge → VA → EBE → Résultat d’exploitation → RCAI → Résultat net**.',
      '**EBE = VA + subventions d’exploitation − impôts et taxes − charges de personnel**.',
      '**FRNG = ressources stables − emplois stables** ; **BFR = actif circ. − passif circ. d’exploitation** ; **Trésorerie nette = FRNG − BFR**.',
      'Rentabilité **économique** (Rés. expl. / capitaux investis) ≠ **financière** (Rés. net / capitaux propres) ; **effet de levier** favorable si rentabilité éco. > coût de la dette.',
    ],
    intro:
      "Après avoir enregistré les opérations, on passe à l'**analyse** : l'entreprise est-elle **performante** ? est-elle **solide** ? Ce thème, le plus fréquent au bac, apprend à lire les résultats (les SIG, l'EBE, la CAF), à mesurer la **rentabilité** et à diagnostiquer la **structure financière** grâce au bilan fonctionnel (FRNG, BFR, trésorerie). L'objectif n'est pas de calculer pour calculer, mais d'**interpréter** ce que disent les chiffres.",
    cours: [
      {
        h: 'Mesurer la performance : les Soldes Intermédiaires de Gestion (SIG)',
        blocks: [
          { t: 'p', c: "Le compte de résultat peut être « découpé » en plusieurs **paliers** : les **SIG**. On part du chiffre d'affaires et, étage par étage, on retire des charges pour comprendre **d'où vient le résultat**." },
          { t: 'formula', c: 'Marge commerciale → Valeur ajoutée → EBE → Résultat d\'exploitation → RCAI → Résultat net' },
          { t: 'figure', name: 'sig-cascade' },
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
          { t: 'figure', name: 'bilan' },
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
    essentiel: [
      'Financements **internes** (autofinancement/CAF) vs **externes** (emprunt, augmentation de capital, subventions).',
      '**MCV = CA − charges variables** ; **taux de MCV = MCV / CA**.',
      '**Seuil de rentabilité = charges fixes / taux de MCV** ; au seuil, le résultat est **nul** ; le **point mort** en est la date.',
      '**Réserve légale** : 5 % du bénéfice jusqu’à 10 % du capital.',
    ],
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
          { t: 'figure', name: 'seuil' },
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
    essentiel: [
      'Trois types d’organisations : **privée** (lucrative), **publique** (intérêt général), **société civile** (association, ONG).',
      '**Efficacité** = atteindre l’objectif ; **efficience** = l’atteindre au **moindre coût**.',
      'Ressources : financières, humaines, matérielles et **immatérielles** (marque, savoir-faire, brevets).',
      'Compétitivité **prix** (prix bas) vs **hors-prix** (qualité, innovation, image, délais).',
    ],
    intro:
      'Le management, c’est l’art de **piloter une organisation** pour qu’elle atteigne ses objectifs. Avant de savoir diriger, il faut comprendre : qu’est-ce qu’une organisation, quelle est sa **finalité**, avec quelles **ressources** crée-t-elle de la valeur, et comment reste-t-elle **compétitive** face aux autres ?',
    cours: [
      {
        h: 'Qu’est-ce qu’une organisation ? Types et finalités',
        blocks: [
          { t: 'p', c: 'Une **organisation** est un groupe humain **structuré** — elle réunit des **moyens** (humains, matériels, financiers), une **division du travail** (chacun sa mission), une **hiérarchie** et des **règles** communes — pour atteindre un **but commun** qu’un individu seul n’atteindrait pas. Une entreprise, une mairie, un club de sport ou une association sont toutes des organisations.' },
          { t: 'p', c: 'On les classe d’abord selon leur **finalité**, c’est-à-dire leur raison d’être profonde.' },
          { t: 'table', head: ['Type', 'Finalité', 'Ressources', 'Exemples'], rows: [
            ['Entreprise privée', 'Lucrative (réaliser un **profit**)', 'Capitaux privés, ventes', 'PME de meubles, multinationale'],
            ['Organisation publique', 'Non lucrative (**intérêt général**, service public)', 'Impôts, budget de l’État', 'Mairie, hôpital public, école'],
            ['Société civile (OSC)', 'Non lucrative (**défendre une cause**)', 'Cotisations, dons, bénévolat, subventions', 'Association, ONG, syndicat'],
          ] },
          { t: 'p', c: 'Attention : « non lucratif » ne veut pas dire « sans argent ». Une association peut vendre des services ; simplement, ses **excédents** sont **réinvestis** dans sa cause, jamais distribués à des propriétaires.' },
          { t: 'p', c: 'La finalité ne se réduit plus au seul profit. Beaucoup d’entreprises affichent aussi une finalité **sociétale** : prendre en compte les enjeux **sociaux** et **environnementaux** de leur activité (c’est la **RSE**, développée au thème 3). Une **entreprise à mission** inscrit même cette raison d’être dans ses statuts.' },
          { t: 'tip', c: 'Ne confonds pas **finalité** (la raison d’être, durable : « pourquoi j’existe ? ») et **objectif** (un but précis et mesurable, à atteindre : « vendre 100 vélos ce trimestre »). La finalité se décline en objectifs.' },
        ],
      },
      {
        h: 'Efficacité et efficience : deux mesures de la performance',
        blocks: [
          { t: 'p', c: 'La **performance** d’une organisation, c’est sa capacité à atteindre ses objectifs en utilisant bien ses ressources. On la juge sur **deux plans** qu’il ne faut jamais confondre.' },
          { t: 'table', head: ['Notion', 'Question posée', 'Définition'], rows: [
            ['**Efficacité**', 'Ai-je atteint mon objectif ?', 'Atteindre le **résultat** fixé, quel qu’en soit le coût'],
            ['**Efficience**', 'À quel coût l’ai-je atteint ?', 'Atteindre l’objectif au **moindre coût** (meilleur usage des ressources)'],
          ] },
          { t: 'example', h: 'Efficace n’est pas toujours efficient', c: 'Deux équipes atteignent l’objectif de **100 ventes** : les deux sont **efficaces**.\nMais l’équipe B l’a fait avec **deux fois moins de budget** : elle est plus **efficiente**.\n→ On peut être efficace sans être efficient (objectif atteint mais en gaspillant), et l’inverse est impossible.' },
          { t: 'p', c: 'La performance a **plusieurs dimensions** : **commerciale** (parts de marché, satisfaction client), **financière** (rentabilité), **sociale** (climat, faible turnover) et **environnementale**. Une organisation vise aujourd’hui une **performance globale**, qui concilie ces différents plans.' },
          { t: 'tip', c: 'Moyen mnémotechnique : efficac**ité** = le résult**at** ; effici**ence** = les moy**ens**. « Efficient » contient l’idée d’**économie** de ressources.' },
        ],
      },
      {
        h: 'Les ressources et la création de valeur',
        blocks: [
          { t: 'p', c: 'Pour agir, l’organisation combine **quatre types de ressources**. Les repérer dans un document est un classique du bac.' },
          { t: 'table', head: ['Ressource', 'Exemples', 'Particularité'], rows: [
            ['**Financières**', 'Capitaux, trésorerie, emprunts', 'Nécessaires pour investir et fonctionner'],
            ['**Humaines**', 'Salariés, compétences, savoir-faire', 'Au cœur de la performance sociale'],
            ['**Matérielles**', 'Locaux, machines, matières premières', 'Visibles au bilan (immobilisations, stocks)'],
            ['**Immatérielles**', 'Marque, image, brevets, réputation, données', 'Difficiles à copier → avantage durable'],
          ] },
          { t: 'p', c: 'En enchaînant ses activités (approvisionnement → production → commercialisation → service après-vente), l’organisation forme une **chaîne de valeur** : chaque maillon doit **ajouter de la valeur** pour le client. La performance vient de la **cohérence** de l’ensemble.' },
          { t: 'example', h: 'La valeur perçue', c: 'Un vélo Vél’Oc coûte 40 € de matières de plus qu’un vélo standard, mais son design et sa marque font que le client accepte de payer **300 € de plus** : la valeur **créée** dépasse largement le coût des ressources ajoutées.' },
          { t: 'tip', c: 'Les ressources **immatérielles** (marque, savoir-faire, brevets) sont souvent la vraie source d’un **avantage concurrentiel durable** : un concurrent peut racheter des machines, mais pas une réputation bâtie sur 20 ans.' },
        ],
      },
      {
        h: 'Être compétitif : par les prix ou hors-prix',
        blocks: [
          { t: 'p', c: 'La **compétitivité** est la capacité d’une organisation à **s’imposer face à la concurrence** et à conserver ou gagner des clients. On distingue deux grandes voies, souvent complémentaires.' },
          { t: 'table', head: ['Compétitivité', 'On agit sur…', 'Comment ?'], rows: [
            ['**Prix**', 'Le **prix de vente**', 'Baisser les coûts (productivité, achats, automatisation) pour vendre moins cher'],
            ['**Hors-prix**', 'La **valeur** de l’offre', 'Qualité, **innovation**, image de marque, délais, service, design'],
          ] },
          { t: 'example', h: 'Vél’Oc mise sur le hors-prix', c: 'En se positionnant « haut de gamme », Vél’Oc joue la compétitivité **hors-prix** (qualité, image, innovation) plutôt que le prix le plus bas. Un hard-discounter, lui, jouerait la compétitivité-**prix**.' },
          { t: 'warning', c: 'Piège fréquent : croire qu’il faut **toujours** baisser les prix. Pour une marque premium, casser les prix **détruirait** son image et sa marge. La bonne stratégie dépend du **positionnement** choisi.' },
          { t: 'p', c: 'Gagner en compétitivité passe souvent par des **gains de productivité** (produire plus avec autant de moyens) et par l’**innovation**, qui permet de se différencier durablement.' },
        ],
      },
    ],
    resources: [
      { kind: 'video', label: 'Organisation, finalités et types', note: 'Vidéos — recherche YouTube', url: yt('organisation entreprise finalité type management terminale STMG') },
      { kind: 'video', label: 'Efficacité et efficience', note: 'Vidéos — recherche YouTube', url: yt('efficacité efficience performance organisation management STMG') },
    ],
  },

  'mgmt-t2': {
    essentiel: [
      'Management **stratégique** (long terme, direction) vs **opérationnel** (court terme, encadrement).',
      '**SWOT** : Forces/Faiblesses = **interne** ; Opportunités/Menaces = **externe**.',
      'Choix stratégiques : spécialisation/diversification ; croissance **interne/externe** ; coûts/différenciation (**Porter**).',
      'Motivation : **Maslow** (pyramide) ; **Herzberg** (hygiène/motivation) ; styles de direction de **Likert**.',
    ],
    intro:
      'Une organisation, ce sont des **acteurs** aux intérêts parfois divergents, qu’il faut **diagnostiquer**, **décider** et **mobiliser**. Ce thème réunit les outils stars du bac : le **SWOT**, les **choix stratégiques** et les théories de la **motivation**.',
    cours: [
      {
        h: 'Management stratégique et management opérationnel',
        blocks: [
          { t: 'p', c: 'Manager, c’est **décider**. On distingue deux niveaux de décisions, selon leur **portée** et leur **horizon** de temps.' },
          { t: 'table', head: ['', 'Management stratégique', 'Management opérationnel'], rows: [
            ['Horizon', '**Long terme** (plusieurs années)', '**Court terme** (jour, semaine)'],
            ['Qui décide ?', 'Direction générale', 'Encadrement, chefs d’équipe'],
            ['Portée', 'Engage toute l’organisation', 'Concerne une activité, un service'],
            ['Exemple', 'Se diversifier vers les trottinettes', 'Organiser le planning de la semaine'],
          ] },
          { t: 'p', c: 'Les décisions **stratégiques** sont souvent **non programmées** (uniques, risquées, peu réversibles) ; les décisions **opérationnelles** sont plutôt **programmées** (répétitives, encadrées par des procédures). Les deux niveaux sont **complémentaires** : la stratégie fixe le cap, l’opérationnel le met en œuvre au quotidien.' },
          { t: 'tip', c: 'Repère l’horizon de temps et l’auteur de la décision : « long terme + direction » ⇒ stratégique ; « court terme + terrain » ⇒ opérationnel.' },
        ],
      },
      {
        h: 'Le diagnostic stratégique : le SWOT',
        blocks: [
          { t: 'p', c: 'Avant de décider, l’organisation réalise un **diagnostic stratégique** : elle fait le point sur elle-même et sur son environnement. L’outil-vedette est le **SWOT**, qui croise un diagnostic **interne** (ce que l’entreprise **maîtrise**) et **externe** (ce qu’elle **subit**).' },
          { t: 'figure', name: 'swot' },
          { t: 'table', head: ['', 'Positif', 'Négatif'], rows: [
            ['**Interne**', '**Forces** (Strengths)', '**Faiblesses** (Weaknesses)'],
            ['**Externe**', '**Opportunités** (Opportunities)', '**Menaces** (Threats)'],
          ] },
          { t: 'p', c: 'Le diagnostic **interne** analyse les **ressources** et **compétences** (ce que l’entreprise sait faire). Le diagnostic **externe** étudie le marché, la concurrence et le macro-environnement — souvent résumé par **PESTEL** (Politique, Économique, Socioculturel, Technologique, Écologique, Légal).' },
          { t: 'example', h: 'SWOT de Vél’Oc', c: 'Forces : savoir-faire, image haut de gamme.\nFaiblesses : turnover élevé, dépendance à un seul produit.\nOpportunités : marché de la mobilité douce en expansion, aides publiques.\nMenaces : concurrence, critiques environnementales.' },
          { t: 'warning', c: 'Erreur classique : ranger un élément **externe** (ex. une aide de l’État, une nouvelle réglementation) dans les forces/faiblesses. Forces/faiblesses = **interne** ; opportunités/menaces = **externe**. Demande-toi : « l’entreprise peut-elle agir dessus ? » Si non, c’est externe.' },
        ],
      },
      {
        h: 'Les choix stratégiques',
        blocks: [
          { t: 'p', c: 'À partir du diagnostic, la direction fait des **choix stratégiques**. Trois grandes questions structurent le programme.' },
          { t: 'table', head: ['Choix', 'Option A', 'Option B'], rows: [
            ['Périmètre d’activité', '**Spécialisation** (un seul métier) : expertise, mais **dépendance**', '**Diversification** (plusieurs métiers) : risque réparti, mais ressources dispersées'],
            ['Mode de croissance', '**Croissance interne** (par ses propres moyens) : maîtrisée mais lente', '**Croissance externe** (rachat, fusion) : rapide mais coûteuse et risquée'],
            ['Avantage concurrentiel (**Porter**)', '**Domination par les coûts** : être le moins cher', '**Différenciation** : proposer une offre unique (ou **focalisation** sur une niche)'],
          ] },
          { t: 'example', h: 'Deux stratégies opposées', c: 'Une chaîne de hard-discount choisit la **domination par les coûts** (prix bas). Une maison de luxe choisit la **différenciation** (produit unique, image forte). Les deux peuvent réussir — mais pas avec les mêmes moyens.' },
          { t: 'tip', c: 'Selon Porter, il faut **éviter d’être « coincé au milieu »** : ni le moins cher, ni vraiment différent. Une stratégie claire vaut mieux qu’un compromis mou.' },
        ],
      },
      {
        h: 'Mobiliser les acteurs et les parties prenantes',
        blocks: [
          { t: 'p', c: 'Une organisation réunit de nombreuses **parties prenantes** : des acteurs **internes** (dirigeants, salariés) et **externes** (clients, fournisseurs, banques, État, riverains) qui ont un intérêt dans son activité — avec des attentes **parfois divergentes** (un salarié veut un bon salaire, un actionnaire un fort dividende). Manager, c’est aussi **arbitrer** entre ces intérêts et prévenir les **conflits**.' },
          { t: 'p', c: 'Fédérer les salariés améliore la **performance sociale** (moins de turnover, moins d’absentéisme) et la **cohésion**. Plusieurs théories expliquent la **motivation** :' },
          { t: 'table', head: ['Auteur', 'Idée clé'], rows: [
            ['**Maslow**', 'Pyramide des besoins : on cherche à satisfaire un besoin supérieur (estime, accomplissement) une fois les besoins inférieurs (physiologiques, sécurité) comblés'],
            ['**Herzberg**', 'Facteurs d’**hygiène** (salaire, conditions : leur absence démotive, mais ils ne motivent pas) vs facteurs de **motivation** (reconnaissance, responsabilités, intérêt du travail : eux motivent vraiment)'],
            ['**Likert**', 'Quatre styles de direction : autoritaire, paternaliste, consultatif, **participatif**'],
          ] },
          { t: 'figure', name: 'maslow' },
          { t: 'p', c: 'Le **style de direction** influence l’implication : un management **participatif** (qui associe les équipes aux décisions) renforce souvent la motivation, là où un style autoritaire peut la brider. S’y ajoute la **culture d’entreprise** (valeurs et pratiques partagées) qui soude les acteurs.' },
          { t: 'tip', c: 'Face à un turnover élevé, on cherche d’abord les facteurs de **motivation** manquants (reconnaissance, perspectives d’évolution) : augmenter le salaire (facteur d’hygiène) calme le mécontentement mais ne suffit pas à motiver durablement.' },
        ],
      },
    ],
    resources: [
      { kind: 'video', label: 'Le diagnostic SWOT expliqué', note: 'Vidéos — recherche YouTube', url: yt('matrice SWOT diagnostic stratégique management terminale STMG') },
      { kind: 'video', label: 'Les théories de la motivation (Maslow, Herzberg)', note: 'Vidéos — recherche YouTube', url: yt('Maslow Herzberg motivation au travail management STMG') },
    ],
  },

  'mgmt-t3': {
    essentiel: [
      '**RSE** = concilier **économique + social + environnemental** (développement durable).',
      'La RSE = assumer l’**impact** des décisions de l’organisation sur la société et l’environnement.',
      'Transformation numérique : exploitation des **données**, **cybersécurité**, automatisation, télétravail.',
    ],
    intro:
      'Une organisation n’évolue pas dans le vide : elle est **responsable** de son impact sur la société et l’environnement (la **RSE**) et bouleversée par le **numérique**. Deux thèmes quasi systématiques au bac.',
    cours: [
      {
        h: 'La responsabilité sociétale des entreprises (RSE)',
        blocks: [
          { t: 'p', c: 'La **RSE** (responsabilité sociétale des entreprises) consiste, pour une organisation, à **assumer l’impact de ses décisions** sur la société et l’environnement, **au-delà** de la seule recherche du profit et de ses obligations légales. C’est l’application, dans l’entreprise, du **développement durable** : concilier **trois piliers** dans la durée.' },
          { t: 'table', head: ['Pilier', 'Objectif', 'Exemples d’actions'], rows: [
            ['**Économique**', 'Être viable et pérenne', 'Assurer la rentabilité, payer ses fournisseurs, investir'],
            ['**Social**', 'Être équitable', 'Conditions de travail, égalité femmes-hommes, formation, dialogue social'],
            ['**Environnemental**', 'Être vivable', 'Réduire l’empreinte carbone, recycler, éco-concevoir, économiser les ressources'],
          ] },
          { t: 'p', c: 'La RSE répond aussi à la **pression des parties prenantes** : clients attentifs à l’éthique, salariés en quête de sens, ONG, réglementations, investisseurs. Bien menée, elle devient un **atout** : meilleure **image**, **fidélité** des clients et des salariés, avantage concurrentiel durable.' },
          { t: 'example', h: 'Le cas des batteries de Vél’Oc', c: 'La critique sur l’empreinte carbone des batteries relève du pilier **environnemental**. Réponses RSE possibles : **recyclage/réemploi** des batteries, filière d’approvisionnement plus durable, éco-conception, communication transparente sur les progrès réalisés.' },
          { t: 'warning', c: 'Attention au **greenwashing** (éco-blanchiment) : afficher des engagements écologiques **sans preuve** ni action réelle. Le retour de bâton (perte de confiance) est sévère. La RSE n’a de valeur que si elle est **sincère et vérifiable**.' },
        ],
      },
      {
        h: 'La transformation numérique',
        blocks: [
          { t: 'p', c: 'Le numérique **bouleverse** les organisations : il fait naître de nouveaux **modèles économiques** (plateformes, abonnement, économie de la donnée), transforme la **relation client** (en ligne, personnalisée, permanente) et fait de la **donnée** une ressource stratégique majeure.' },
          { t: 'table', head: ['Enjeu', 'De quoi s’agit-il ?'], rows: [
            ['**Données (data)**', 'Ressource clé : mieux connaître et cibler, mais à collecter et protéger dans le respect du **RGPD**'],
            ['**Cybersécurité**', 'Protéger les systèmes d’information contre les attaques (virus, piratage, rançongiciels)'],
            ['**Automatisation / IA**', 'Confier des tâches à des machines : gains de productivité, mais évolution des métiers'],
            ['**Télétravail**', 'Travailler à distance : plus de souplesse, mais risques d’isolement et frontière vie pro/perso'],
          ] },
          { t: 'example', h: 'Un nouveau modèle', c: 'Une entreprise de vélos peut passer de la simple vente à un modèle d’**abonnement** (vélo + entretien + appli connectée), en exploitant les **données** d’usage pour améliorer son offre.' },
          { t: 'tip', c: 'L’**éthique** et la **déontologie** (transparence, protection des données personnelles, usage responsable de l’IA) font partie intégrante d’une démarche RSE à l’ère numérique : innovation et responsabilité vont de pair.' },
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
    essentiel: [
      'Contrat = **accord de volontés** créant des obligations ; parties : **consommateur / consommatrice** et **professionnel / professionnelle**, **débiteur / débitrice** et **créancier / créancière**.',
      'Formation : **offre + acceptation** (échange des consentements) + **consentement, capacité, objet** (art. 1128).',
      'Vices du consentement (**erreur, dol, violence**) → **nullité relative** ; contenu illicite → **nullité absolue**.',
      'Principes : **liberté contractuelle, force obligatoire, effet relatif, bonne foi** ; obligation de **moyens** vs de **résultat**.',
      'Inexécution → **mise en demeure**, **exécution forcée**, **exception d’inexécution**, **résolution/résiliation**, dommages et intérêts (+ **clause pénale**).',
    ],
    intro:
      'Le **contrat** est au cœur de la vie économique : acheter, louer, travailler, tout passe par des accords. Ce thème explique **comment un contrat se forme**, quand il est **valable**, quelles **obligations** il crée, et ce qui se passe **s’il n’est pas respecté**. Le consommateur y bénéficie d’une protection renforcée.',
    cours: [
      {
        h: 'Qu’est-ce qu’un contrat ? Les parties',
        blocks: [
          { t: 'p', c: 'Un **contrat** est un **accord de volontés** destiné à **créer, modifier, transmettre ou éteindre des obligations** entre deux ou plusieurs **parties**. Selon le contrat, les parties portent des qualifications différentes :' },
          { t: 'list', c: [
            'le **consommateur** (au féminin : la **consommatrice**), qui agit pour un usage personnel, et le **professionnel** (la **professionnelle**), qui agit dans le cadre de son activité ;',
            'le **débiteur** (la **débitrice**), celui ou celle qui doit une obligation, et le **créancier** (la **créancière**), celui ou celle à qui elle est due.',
          ] },
          { t: 'p', c: 'Avant même de conclure, chaque partie a une **obligation d’information** réciproque ; le professionnel a en plus une **obligation de conseil**, pour que le consentement soit **libre et éclairé**.' },
        ],
      },
      {
        h: 'La formation du contrat : offre, acceptation et validité',
        blocks: [
          { t: 'p', c: 'Le contrat se forme par la **rencontre d’une offre et d’une acceptation** : c’est l’**échange des consentements**. Pour être **valablement formé** (art. 1128 du Code civil), il doit réunir trois conditions :' },
          { t: 'list', c: [
            '**le consentement** des parties : libre et éclairé, donc sans « vice » ;',
            '**la capacité** de contracter (ex. être majeur et non protégé) ;',
            '**un contenu licite et certain** : un **objet** légal et déterminé.',
          ] },
          { t: 'tip', c: 'Pour certains contrats (à distance, hors établissement), le consommateur dispose en plus d’un **droit de rétractation** (souvent 14 jours) : il peut revenir sur son accord sans avoir à se justifier.' },
        ],
      },
      {
        h: 'Les vices du consentement et la nullité',
        blocks: [
          { t: 'p', c: 'Si le consentement a été faussé, le contrat peut être **annulé**. Trois **vices du consentement** :' },
          { t: 'table', head: ['Vice', 'Définition'], rows: [
            ['Erreur', 'Se tromper sur une qualité essentielle du bien ou de la personne'],
            ['Dol', 'Être trompé par un mensonge, une manœuvre ou un silence (réticence dolosive)'],
            ['Violence', 'Consentement extorqué par la contrainte (physique, morale ou économique)'],
          ] },
          { t: 'warning', c: 'On distingue deux sanctions : la **nullité relative** protège un intérêt privé (ex. une partie dont le consentement est vicié, ou un incapable) — seule la personne protégée peut la demander ; la **nullité absolue** sanctionne la violation d’une règle d’intérêt général (ex. un contenu illicite) — toute personne intéressée peut l’invoquer. Dans les deux cas, le contrat est **anéanti** et les parties doivent se **restituer** ce qu’elles ont reçu.' },
        ],
      },
      {
        h: 'Les grands principes du droit des contrats',
        blocks: [
          { t: 'p', c: 'Le droit des contrats repose sur quatre principes, hérités de la philosophie des Lumières et codifiés :' },
          { t: 'list', c: [
            '**Liberté contractuelle** : on est libre de contracter ou non, de choisir son cocontractant et le contenu (dans le respect de l’ordre public).',
            '**Force obligatoire** (art. 1103) : « le contrat fait la loi des parties » ; on ne peut le modifier ou le rompre unilatéralement.',
            '**Effet relatif des conventions** : le contrat ne produit d’effets qu’entre les parties, pas à l’égard des tiers.',
            '**Bonne foi** : le contrat doit être négocié, formé et exécuté loyalement.',
          ] },
        ],
      },
      {
        h: 'Les obligations et l’exécution du contrat',
        blocks: [
          { t: 'p', c: 'Le contrat met à la charge des parties des **obligations**, précisées par des **clauses**. On distingue deux intensités d’engagement :' },
          { t: 'table', head: ['Obligation de moyens', 'Obligation de résultat'], rows: [
            ['S’engager à mettre en œuvre tous les moyens', 'S’engager à atteindre un résultat précis'],
            ['Ex. le médecin doit soigner (pas guérir)', 'Ex. le transporteur doit livrer à bon port'],
            ['Le créancier doit prouver la faute', 'La seule absence de résultat suffit'],
          ] },
          { t: 'p', c: 'Cette distinction est essentielle pour la **responsabilité** (thème 6).' },
        ],
      },
      {
        h: 'L’inexécution du contrat et ses sanctions',
        blocks: [
          { t: 'p', c: 'Si une partie n’exécute pas ses obligations, le créancier peut réagir. Une **mise en demeure** (rappel formel d’exécuter) est le plus souvent nécessaire. Ensuite, plusieurs sanctions sont possibles :' },
          { t: 'list', c: [
            'l’**exécution forcée** (en nature ou par équivalent) ;',
            'l’**exception d’inexécution** : suspendre sa propre obligation tant que l’autre n’exécute pas (« je ne paie pas tant que tu ne livres pas ») ;',
            'la **résolution** (anéantissement rétroactif du contrat) ou la **résiliation** (fin du contrat pour l’avenir, pour les contrats à exécution successive) ;',
            'des **dommages et intérêts** ; les parties peuvent les fixer à l’avance par une **clause pénale**.',
          ] },
          { t: 'warning', c: 'Le consommateur est protégé contre les **clauses abusives** : celles qui créent un déséquilibre significatif à son détriment dans un contrat d’adhésion sont **réputées non écrites** (art. 1171 du Code civil).' },
          { t: 'example', h: 'La cuisine livrée non conforme', c: 'Un cuisiniste s’engage à installer une cuisine avant le 1er mars (obligation de **résultat**). Au 15 mars, rien n’est posé. \n→ Le client adresse une **mise en demeure**. Comme il devait verser le solde à la pose, il peut invoquer l’**exception d’inexécution** (« je ne paie pas tant que ce n’est pas installé »). Si le retard persiste, il demande la **résolution** du contrat (remboursement) et des **dommages et intérêts** — dont le montant peut être fixé d’avance par une **clause pénale**.' },
        ],
      },
      {
        h: 'Méthode : le syllogisme juridique',
        blocks: [
          { t: 'p', c: 'En droit, on raisonne en trois temps : la **règle** (majeure), les **faits qualifiés** (mineure), puis la **conclusion**.' },
          { t: 'example', h: 'Marc et la voiture accidentée', c: '**Règle** : le dol (mensonge déterminant) est une cause de nullité du contrat.\n**Faits** : le garagiste a affirmé par écrit, faussement, que la voiture n’avait jamais eu d’accident — information déterminante pour Marc.\n**Conclusion** : le dol est caractérisé ; Marc peut obtenir la **nullité (relative) de la vente** et des dommages et intérêts.' },
          { t: 'tip', c: 'Au bac, on attend toujours : **qualifier** juridiquement la situation, puis **appliquer la règle** aux faits pour conclure.' },
        ],
      },
    ],
    resources: [
      { kind: 'video', label: 'La formation du contrat et sa validité', note: 'Vidéos — recherche YouTube', url: yt('contrat formation offre acceptation conditions de validité vices droit terminale STMG') },
      { kind: 'video', label: 'L’exécution et l’inexécution du contrat', note: 'Vidéos — recherche YouTube', url: yt('exécution inexécution contrat mise en demeure résolution clause pénale droit terminale STMG') },
      { kind: 'video', label: 'Le syllogisme juridique (méthode)', note: 'Vidéos — recherche YouTube', url: yt('syllogisme juridique méthode cas pratique droit STMG') },
    ],
  },

  'droit-t6': {
    essentiel: [
      'Responsabilité **civile** = **réparer** un dommage ; **pénale** = **sanctionner** une infraction.',
      'Dommage réparable = **certain, direct, personnel et légitime** ; types : **corporel, matériel, moral** (+ **préjudice écologique**).',
      '3 conditions : **fait générateur + dommage + lien de causalité** ; la plupart des dommages sont pris en charge par l’**assurance** (mutualisation).',
      'Régimes : **contractuelle** (dont obligation de sécurité), **extracontractuelle** (fait personnel, des choses, d’autrui, des animaux, ruine des bâtiments) et **régimes spéciaux** (accident du travail/circulation, produits défectueux).',
      'Exonération : **force majeure**, **fait d’un tiers**, **faute de la victime**.',
    ],
    intro:
      'Quand un dommage est causé à autrui, le droit organise sa **réparation** (responsabilité civile) ou sa **sanction** (responsabilité pénale). Ce thème identifie **quel dommage** est réparable, **quel régime** s’applique et comment un responsable peut **s’exonérer**.',
    cours: [
      {
        h: 'Réparer ou sanctionner : civile ou pénale ?',
        blocks: [
          { t: 'p', c: 'Il faut distinguer deux grandes responsabilités :' },
          { t: 'table', head: ['Responsabilité civile', 'Responsabilité pénale'], rows: [
            ['But : réparer le dommage de la victime', 'But : sanctionner une infraction'],
            ['Au profit de la victime', 'Au nom de la société'],
            ['Dommages et intérêts', 'Peine (amende, prison…)'],
          ] },
          { t: 'p', c: 'Les **infractions** pénales sont classées par gravité croissante : **contravention**, **délit**, **crime**.' },
          { t: 'warning', c: 'Un même fait peut engager **les deux** responsabilités (ex. une agression : une peine + des dommages et intérêts à la victime).' },
        ],
      },
      {
        h: 'Le dommage réparable',
        blocks: [
          { t: 'p', c: 'La condition première de la responsabilité civile est l’existence d’un **dommage** (ou **préjudice**). On le qualifie selon deux classifications :' },
          { t: 'list', c: [
            'dommage **corporel** (atteinte au corps), **matériel** (atteinte aux biens) ou **moral** (souffrance, atteinte à la réputation) ;',
            'dommage **patrimonial** (évaluable en argent) ou **extrapatrimonial**.',
          ] },
          { t: 'p', c: 'Pour être **réparable**, le dommage doit présenter certains caractères : il doit être **certain**, **direct**, **personnel** et **légitime**. Le **préjudice écologique** (atteinte à l’environnement) est désormais reconnu et réparable.' },
        ],
      },
      {
        h: 'L’assurance et l’indemnisation des victimes',
        blocks: [
          { t: 'p', c: 'La plupart des dommages sont pris en charge par un **assureur** grâce à la **mutualisation des risques** : chacun cotise, et l’ensemble des cotisations indemnise ceux qui subissent un sinistre (Sécurité sociale et complémentaires pour le corporel, assureurs de biens et de responsabilité pour le matériel). Des **fonds de garantie**, fondés sur la solidarité, complètent ce système. La recherche de responsabilité intervient dans un **second temps**.' },
        ],
      },
      {
        h: 'Les conditions de la responsabilité',
        blocks: [
          { t: 'p', c: 'Points communs à tous les régimes, la victime doit établir **trois éléments** :' },
          { t: 'formula', c: 'Fait générateur (ou faute) + Dommage + Lien de causalité' },
          { t: 'example', h: 'La chute au supermarché', c: 'Une entreprise laisse le sol mouillé sans signalisation ; une cliente glisse et se fracture le poignet.\n• **Fait générateur** : le sol mouillé non signalé.\n• **Dommage** : la fracture, l’opération.\n• **Lien de causalité** : la chute résulte directement de l’absence de signalisation.\n→ Les trois conditions sont réunies : la cliente peut être **indemnisée**.' },
        ],
      },
      {
        h: 'Les différents régimes de responsabilité',
        blocks: [
          { t: 'p', c: 'Selon la situation, on applique un régime différent (on cherche dans cet ordre) :' },
          { t: 'list', c: [
            'Les **régimes spéciaux** : **accident du travail**, **accident de la circulation**, **produits défectueux**, **préjudice écologique** — chacun a ses propres règles d’indemnisation.',
            'La **responsabilité contractuelle** : si le dommage naît de l’**inexécution d’un contrat**. Les obligations peuvent être de **moyens** ou de **résultat** ; le juge peut ajouter une **obligation de sécurité**. Une **clause de limitation ou d’exonération** de responsabilité peut être prévue (mais elle est encadrée).',
            'La **responsabilité extracontractuelle** (hors contrat) : **fait personnel**, **fait des choses**, **fait d’autrui**, **fait des animaux**, **ruine des bâtiments**.',
          ] },
          { t: 'tip', c: 'Beaucoup de ces régimes sont des **responsabilités objectives** : la victime n’a **pas à prouver une faute**, seulement le **fait générateur**, le **dommage** et le **lien de causalité**.' },
        ],
      },
      {
        h: 'Les moyens d’exonération',
        blocks: [
          { t: 'p', c: 'Le responsable peut chercher à s’exonérer **totalement ou partiellement** en prouvant une **cause étrangère** :' },
          { t: 'list', c: [
            'la **force majeure** : un événement **imprévisible, irrésistible et extérieur** ;',
            'le **fait ou la faute d’un tiers** ;',
            'le **fait ou la faute de la victime** elle-même.',
          ] },
          { t: 'example', h: 'L’accident de la circulation', c: 'Un automobiliste renverse un piéton : c’est un **régime spécial** (accident de la circulation), une **responsabilité objective** — la victime n’a pas à prouver de **faute**, seulement le **fait générateur**, le **dommage** (corporel) et le **lien de causalité**. \n→ Le conducteur pourra difficilement s’**exonérer** ; il peut seulement invoquer une **faute de la victime** (ex. le piéton a traversé volontairement une autoroute). L’**assurance** indemnise la victime au titre de la mutualisation des risques.' },
        ],
      },
    ],
    resources: [
      { kind: 'video', label: 'Le dommage réparable et la responsabilité civile', note: 'Vidéos — recherche YouTube', url: yt('dommage réparable responsabilité civile fait générateur lien de causalité droit terminale STMG') },
      { kind: 'video', label: 'Les régimes de responsabilité et l’exonération', note: 'Vidéos — recherche YouTube', url: yt('régimes responsabilité contractuelle extracontractuelle exonération force majeure droit terminale STMG') },
    ],
  },

  'droit-t7': {
    essentiel: [
      'Contrat de travail = **prestation de travail + rémunération + lien de subordination** (critère déterminant) ≠ contrat d’entreprise.',
      'Pouvoirs de l’employeur : **direction**, **réglementaire** (règlement intérieur), **disciplinaire**.',
      '**CDI** = norme (clauses générales + spécifiques : mobilité, non-concurrence, télétravail) ; **CDD, chantier, saisonnier, intérim** = l’exception écrite.',
      'Rupture : **démission**, **licenciement** (motif personnel ou économique, **cause réelle et sérieuse** + procédure), **rupture conventionnelle** (individuelle/collective).',
      'Libertés du salarié : **vie privée**, **liberté d’expression** (+ devoir de loyauté), **droit de grève**, **liberté syndicale** ; représentants : **CSE**, **délégué syndical**.',
    ],
    intro:
      'Le droit du travail est un **droit protecteur du salarié**. Il organise la relation de travail autour d’un critère décisif — le **lien de subordination** — puis encadre le contrat, sa **rupture** et les **libertés** du salarié.',
    cours: [
      {
        h: 'Le contrat de travail et les pouvoirs de l’employeur',
        blocks: [
          { t: 'p', c: 'Le **contrat de travail** existe dès qu’une personne fournit une **prestation de travail** contre une **rémunération** sous l’**autorité** d’un employeur. Ce dernier élément — le **lien de subordination juridique** — est le **critère déterminant** : il se manifeste par les **pouvoirs de l’employeur** :' },
          { t: 'list', c: [
            'le **pouvoir de direction** : donner des ordres et des directives ;',
            'le **pouvoir réglementaire** : fixer des règles collectives dans le **règlement intérieur** ;',
            'le **pouvoir disciplinaire** : contrôler l’exécution et **sanctionner** les manquements.',
          ] },
          { t: 'p', c: 'Ce lien de subordination distingue le contrat de travail du **contrat d’entreprise** (ou contrat de prestation de service), conclu avec un **prestataire indépendant** qui n’est pas soumis à cette autorité.' },
          { t: 'example', h: 'Le cas de Sonia', c: 'Sonia suit les consignes du chef, a des horaires imposés et un salaire, mais aucun écrit. L’employeur la dit « indépendante ».\n→ La **subordination** est présente : c’est un **contrat de travail** (un **CDI**, faute d’écrit prévoyant un terme). Sonia bénéficie de toute la protection du droit du travail.' },
        ],
      },
      {
        h: 'Les formes du contrat de travail',
        blocks: [
          { t: 'p', c: 'Le **CDI** (contrat à durée indéterminée) est la **forme normale et générale** de la relation de travail. Il comporte :' },
          { t: 'list', c: [
            'des **clauses générales** : période d’essai, lieu, horaires et durée du travail, rémunération, qualification, missions ;',
            'des **clauses spécifiques**, qui individualisent la relation et dont la validité est encadrée : clause de **mobilité**, clause de **non-concurrence**, clause de **télétravail**.',
          ] },
          { t: 'p', c: 'À côté du CDI existent d’**autres formes**, adaptées à certains besoins et **établies par écrit** : le **CDD**, le **CDI de chantier**, le **contrat saisonnier** et le **contrat de travail temporaire (intérim)**. À défaut d’écrit ou de cas de recours valable, un CDD peut être **requalifié en CDI**.' },
        ],
      },
      {
        h: 'Les sources et la négociation collective',
        blocks: [
          { t: 'p', c: 'La relation de travail est régie par plusieurs **sources** : le **Code du travail**, les **conventions et accords collectifs** (négociés par branche ou par entreprise), le **règlement intérieur** et le **contrat**. La **négociation collective**, menée par les **partenaires sociaux** (syndicats de salariés et d’employeurs), joue un rôle croissant pour adapter les règles à chaque entreprise ou branche.' },
        ],
      },
      {
        h: 'La rupture du contrat de travail',
        blocks: [
          { t: 'table', head: ['Mode de rupture', 'À l’initiative de…'], rows: [
            ['Démission', 'Le salarié / la salariée'],
            ['Licenciement', 'L’employeur / l’employeuse (cause réelle et sérieuse + procédure)'],
            ['Rupture conventionnelle', 'Un commun accord (individuelle ou collective)'],
            ['Départ / mise à la retraite', 'Le salarié / la salariée ou l’employeur / l’employeuse'],
          ] },
          { t: 'p', c: 'Le **licenciement** doit reposer sur une **cause réelle et sérieuse** et respecter une **procédure**. On distingue le licenciement pour **motif personnel** (lié au salarié) du licenciement pour **motif économique** (lié à l’entreprise). Ses conséquences : indemnité de licenciement, préavis, solde de tout compte, droits à l’assurance chômage.' },
          { t: 'warning', c: 'Un licenciement sans **cause réelle et sérieuse** ou sans respect de la **procédure** est **abusif** : le juge peut le sanctionner.' },
          { t: 'example', h: 'Le licenciement contesté de Karim', c: 'Karim est licencié du jour au lendemain, sans entretien préalable, parce que son responsable « ne l’apprécie pas ». \n→ Ce **motif personnel** n’est pas une **cause réelle et sérieuse** (elle doit être objective et vérifiable) et la **procédure** n’a pas été respectée. Le licenciement est **abusif** : saisi, le conseil de prud’hommes peut condamner l’employeur à verser des indemnités. Une **rupture conventionnelle** (accord commun) aurait été une voie légale.' },
        ],
      },
      {
        h: 'Les libertés individuelles et collectives',
        blocks: [
          { t: 'p', c: 'Le salarié conserve ses **libertés fondamentales** au travail ; l’employeur ne peut les limiter que si c’est **justifié par la tâche et proportionné**.' },
          { t: 'list', c: [
            'le respect de la **vie privée** (y compris face aux outils numériques et aux réseaux sociaux) ;',
            'la **liberté d’expression**, tempérée par un **devoir de loyauté** envers l’employeur ;',
            'le **droit de grève** (reconnu par la Constitution) — mais une grève **illicite** ne protège pas le salarié ;',
            'la **liberté syndicale**.',
          ] },
          { t: 'p', c: 'Les salariés sont représentés par le **Comité social et économique (CSE)** — expression des salariés, organisation, santé et sécurité, droit d’alerte — et par les **délégués syndicaux**, qui négocient les accords.' },
        ],
      },
    ],
    resources: [
      { kind: 'video', label: 'Le contrat de travail et ses clauses', note: 'Vidéos — recherche YouTube', url: yt('contrat de travail lien de subordination clauses CDI CDD droit terminale STMG') },
      { kind: 'video', label: 'La rupture du contrat de travail', note: 'Vidéos — recherche YouTube', url: yt('rupture contrat de travail licenciement motif personnel économique rupture conventionnelle STMG') },
      { kind: 'video', label: 'Les libertés du salarié, la grève et le CSE', note: 'Vidéos — recherche YouTube', url: yt('libertés salarié droit de grève CSE délégué syndical droit terminale STMG') },
    ],
  },

  'droit-t8': {
    essentiel: [
      '**Liberté d’entreprendre** et **liberté du commerce et de l’industrie** ; choix : **entreprise individuelle** ou **société**.',
      'Entreprise individuelle : **depuis la réforme de 2022** (loi du 14 février 2022, statut unique en vigueur le 15 mai 2022), **séparation automatique** des patrimoines professionnel et personnel — le patrimoine personnel est en principe **protégé** (avant : **unicité du patrimoine**) ; l’**EURL** crée une personne morale à responsabilité limitée.',
      'Société = personne morale née d’un **contrat de société** (art. 1832) : **apports** + **affectio societatis** + partage des bénéfices ; **responsabilité limitée aux apports** ; forme coopérative = **SCOP**.',
      '**Concurrence déloyale** (parasitisme, dénigrement, imitation, désorganisation) → **action** fondée sur la responsabilité civile ; **entente** et **abus de position dominante** interdits (Autorité de la concurrence).',
      'Partenariats : **contrat d’entreprise (sous-traitance)**, **franchise** — sans lien de subordination.',
    ],
    intro:
      'Entreprendre est une **liberté**, mais elle s’exerce dans un cadre juridique. Le choix de la **structure** a des conséquences majeures sur le **patrimoine** et la **responsabilité** ; l’activité se développe dans le respect de la **concurrence** et peut s’organiser par des **partenariats**.',
    cours: [
      {
        h: 'La liberté d’entreprendre et l’entreprise individuelle',
        blocks: [
          { t: 'p', c: 'La **liberté d’entreprendre** (à valeur constitutionnelle) et la **liberté du commerce et de l’industrie** permettent à chacun de créer et d’exercer une activité économique. La forme la plus simple est l’**entreprise individuelle** : il n’y a **pas** de nouvelle personne juridique.' },
          { t: 'p', c: '**Depuis la réforme de 2022** (loi du **14 février 2022** en faveur de l’activité professionnelle indépendante, **statut unique** en vigueur le **15 mai 2022**), le **patrimoine professionnel** (les biens utiles à l’activité) et le **patrimoine personnel** sont **séparés de plein droit**. Le patrimoine personnel est ainsi, **par principe, protégé** des créanciers professionnels — sans démarche particulière.' },
          { t: 'warning', h: 'Évolution à connaître (2019 → 2022)', c: '**Avant 2022**, par le **principe d’unicité du patrimoine**, l’entrepreneur individuel répondait des dettes de son activité sur **tout son patrimoine personnel** ; il devait, pour se protéger, faire une **déclaration d’insaisissabilité** ou créer une **EIRL** (patrimoine d’affectation). **Depuis 2022, cette séparation est automatique** : c’est une évolution récente, souvent attendue dans les cas pratiques.' },
          { t: 'p', c: 'L’**EURL** (entreprise unipersonnelle à responsabilité limitée) reste une autre option : c’est une **société à associé unique**, donc une **personne morale** distincte, dont la **responsabilité est limitée aux apports**.' },
          { t: 'example', h: 'Léa hésite : entreprise individuelle ou EURL ?', c: 'Léa ouvre un salon de coiffure et emprunte 40 000 €. \n→ En **entreprise individuelle**, depuis la réforme de **2022**, son **patrimoine personnel** (voiture, épargne) est **en principe protégé** : les créanciers professionnels se paient d’abord sur le **patrimoine professionnel**. \n→ En **EURL**, une **personne morale** distincte est créée : sa responsabilité est **limitée à ses apports**. Les deux protègent son patrimoine personnel, mais l’EURL impose plus de formalisme (statuts, comptes).' },
        ],
      },
      {
        h: 'La société commerciale',
        blocks: [
          { t: 'p', c: 'La **société** naît d’un **contrat de société** (article **1832** du Code civil) : plusieurs associés **affectent à une entreprise commune des biens ou leur industrie en vue de partager le bénéfice** ou de profiter de l’économie qui en résulte. Trois éléments clés :' },
          { t: 'list', c: [
            'l’**apport** de chaque associé (en argent, en nature ou en industrie) ;',
            'l’**affectio societatis** : la volonté commune de collaborer ;',
            'la vocation à **partager les bénéfices** (au prorata des apports) et à **contribuer aux pertes**.',
          ] },
          { t: 'p', c: 'Généralement, la **responsabilité des associés est limitée à leurs apports**. Les décisions relèvent d’**organes de gestion courante** (dirigeants) ou d’**organes délibératifs** (assemblées). La **société coopérative (SCOP)** est une forme particulière, porteuse d’une **éthique coopérative** (économie sociale et solidaire).' },
        ],
      },
      {
        h: 'Le respect de la concurrence',
        blocks: [
          { t: 'p', c: 'La **libre concurrence** découle de la liberté du commerce et de l’industrie : produire et vendre librement, sans monopole. Elle est toutefois **encadrée** pour éviter les comportements déloyaux ou anti-concurrentiels.' },
          { t: 'p', c: 'La **concurrence déloyale** engage la **responsabilité civile** de son auteur. La victime doit établir : un **fait générateur** (comportement déloyal : **parasitisme, dénigrement, imitation, désorganisation**), un **préjudice** (perte de clientèle, baisse de notoriété) et un **lien de causalité** — c’est l’**action en concurrence déloyale**.' },
          { t: 'p', c: 'Certaines pratiques sont spécifiquement interdites : l’**entente** (accord faussant la concurrence) et l’**abus de position dominante**. L’**Autorité de la concurrence** veille au respect des règles en France ; au niveau européen, les **articles 101 et 102 du TFUE** s’appliquent.' },
          { t: 'example', h: 'Le concurrent dénigré', c: 'Un commerçant diffuse de fausses rumeurs affirmant que les produits d’un concurrent sont dangereux, et copie son enseigne pour semer la confusion. \n→ Ce sont des actes de **concurrence déloyale** (**dénigrement** et **imitation**). Le concurrent lésé engage une **action en concurrence déloyale** fondée sur la **responsabilité civile** : il doit prouver le **fait générateur** (le comportement déloyal), le **préjudice** (perte de clientèle) et le **lien de causalité**, pour obtenir réparation.' },
        ],
      },
      {
        h: 'Les partenariats contractuels',
        blocks: [
          { t: 'p', c: 'Une entreprise peut organiser son activité en contractant avec des **partenaires**, sans créer de lien de subordination :' },
          { t: 'list', c: [
            'le **contrat d’entreprise (sous-traitance)** : un **entrepreneur** / une **entrepreneuse** confie tout ou partie de son activité à un autre ;',
            'le **contrat de franchise** : un **franchisé** / une **franchisée** exploite le concept, la marque et le savoir-faire d’un **franchiseur** / d’une **franchiseuse**, en échange d’une redevance.',
          ] },
          { t: 'tip', c: 'Ces partenariats se distinguent du **contrat de travail** : il n’y a **pas de lien de subordination** entre les entreprises partenaires.' },
        ],
      },
    ],
    resources: [
      { kind: 'video', label: 'Entreprise individuelle, EURL et société', note: 'Vidéos — recherche YouTube', url: yt('entreprise individuelle EURL société contrat de société apports affectio societatis droit terminale STMG') },
      { kind: 'video', label: 'Concurrence déloyale et partenariats (franchise, sous-traitance)', note: 'Vidéos — recherche YouTube', url: yt('concurrence déloyale entente abus position dominante franchise sous-traitance droit terminale STMG') },
    ],
  },

  // ======================================================================
  // ÉCONOMIE
  // ======================================================================
  'eco-t6': {
    essentiel: [
      'Fonctions de l’État (**Musgrave**) : **allocation · redistribution · stabilisation**.',
      'Défaillances du marché : **externalités**, biens collectifs, asymétries d’information, monopole.',
      'Politiques : **budgétaire** et **monétaire** (conjoncturelles), **structurelle** (long terme).',
    ],
    intro:
      'Le marché ne règle pas tout : l’**État** intervient pour produire ce que le marché ne fournit pas, réduire les inégalités et stabiliser l’économie. Comprendre **pourquoi** et **comment** il agit est la base de ce thème.',
    cours: [
      {
        h: 'Les trois fonctions de l’État (Musgrave)',
        blocks: [
          { t: 'p', c: 'Livré à lui-même, le marché ne produit pas tout, laisse se creuser les inégalités et connaît des crises. L’**État** intervient donc dans l’économie. L’économiste **Richard Musgrave** a résumé son rôle en **trois grandes fonctions**.' },
          { t: 'table', head: ['Fonction', 'Objectif', 'Exemple'], rows: [
            ['**Allocation**', 'Produire des **biens collectifs** et corriger les défaillances du marché', 'Financer les routes, l’école, la justice, la défense'],
            ['**Redistribution**', 'Réduire les **inégalités** via prélèvements et prestations', 'Impôt progressif → RSA, allocations, retraites'],
            ['**Stabilisation**', 'Agir sur la **conjoncture** (croissance, emploi, prix)', 'Relancer l’activité en période de crise'],
          ] },
          { t: 'figure', name: 'etat-fonctions' },
          { t: 'example', h: 'La redistribution en action', c: 'L’État prélève davantage sur les hauts revenus (impôt **progressif**) et verse des **prestations** aux ménages modestes (allocations, RSA). Résultat : les écarts de niveau de vie après redistribution sont **plus faibles** qu’avant.' },
          { t: 'tip', c: 'Moyen mnémotechnique : **A-R-S** — **A**llouer les ressources, **R**edistribuer les revenus, **S**tabiliser l’économie.' },
        ],
      },
      {
        h: 'Pourquoi intervenir ? Les défaillances du marché',
        blocks: [
          { t: 'p', c: 'Le marché est efficace… **sauf** dans plusieurs situations où il **défaille** : il ne conduit pas à l’optimum pour la collectivité. Ces défaillances **justifient** l’intervention publique.' },
          { t: 'table', head: ['Défaillance', 'Définition', 'Exemple'], rows: [
            ['**Externalité**', 'Effet (positif ou négatif) d’une activité sur un tiers, non pris en compte par le prix', 'La **pollution** d’une usine subie par les riverains'],
            ['**Bien collectif**', 'Bien **non rival** (l’usage de l’un ne prive pas l’autre) et **non excluable** (on ne peut en priver personne)', 'L’**éclairage public**, la défense nationale'],
            ['**Asymétrie d’information**', 'Une partie en sait plus que l’autre', 'Le vendeur d’une voiture d’occasion connaît ses défauts, pas l’acheteur'],
            ['**Monopole**', 'Un seul offreur qui impose ses prix', 'Un réseau d’eau unique sur un territoire'],
          ] },
          { t: 'p', c: 'Face à une **externalité négative** comme la pollution, l’État peut **taxer** le pollueur (« pollueur-payeur »), fixer des **normes** ou instaurer des **quotas** pour internaliser ce coût.' },
          { t: 'warning', c: 'Un **bien collectif** n’est pas la même chose qu’un bien gratuit : le marché ne le produit pas spontanément car personne ne veut payer pour un bien dont on ne peut exclure les « **passagers clandestins** » — d’où le financement par l’**impôt**.' },
        ],
      },
      {
        h: 'Comment intervenir ? Les politiques économiques',
        blocks: [
          { t: 'p', c: 'Pour agir, l’État dispose de deux grands types de politiques, selon leur horizon.' },
          { t: 'table', head: ['Politique', 'Horizon', 'Leviers'], rows: [
            ['**Conjoncturelle — budgétaire**', 'Court terme', 'Dépenses publiques et **prélèvements** (le budget de l’État)'],
            ['**Conjoncturelle — monétaire**', 'Court terme', 'Monnaie et **taux d’intérêt** (menée par la BCE dans la zone euro)'],
            ['**Structurelle**', 'Long terme', 'Transformer l’économie : formation, concurrence, recherche, infrastructures'],
          ] },
          { t: 'p', c: 'Une politique de **relance** (hausse des dépenses, baisse des impôts ou des taux) soutient l’activité en cas de crise ; une politique de **rigueur** cherche au contraire à réduire le déficit et l’inflation.' },
          { t: 'example', h: 'Relance', c: 'En récession, l’État augmente ses dépenses (grands travaux, aides) : la demande repart, les entreprises produisent plus et embauchent. Revers : cela **creuse le déficit**.' },
          { t: 'warning', c: 'Quand les **dépenses** dépassent les **recettes**, le budget est en **déficit**. Répété année après année, ce déficit s’accumule en **dette publique** — qu’il faudra rembourser et qui pèse sur les marges de manœuvre futures.' },
        ],
      },
    ],
    resources: [
      { kind: 'video', label: 'Les fonctions de l’État (Musgrave)', note: 'Vidéos — recherche YouTube', url: yt('fonctions de l État allocation redistribution stabilisation Musgrave STMG') },
      { kind: 'video', label: 'Les défaillances du marché', note: 'Vidéos — recherche YouTube', url: yt('défaillances du marché externalités biens collectifs économie STMG') },
    ],
  },

  'eco-t7': {
    essentiel: [
      '**Population active = personnes en emploi + chômeurs** ; **taux de chômage = chômeurs / population active**.',
      'Types de chômage : **conjoncturel**, **structurel**, **frictionnel**.',
      'Piège : une baisse du taux de chômage peut venir de **chômeurs découragés** quittant la population active.',
    ],
    intro:
      'Le **chômage** est au cœur du débat économique. Pour en parler juste, il faut d’abord maîtriser le **vocabulaire** (population active, taux de chômage) et savoir **lire les chiffres** sans se tromper.',
    cours: [
      {
        h: 'Le marché du travail',
        blocks: [
          { t: 'p', c: 'Sur le **marché du travail** se rencontrent l’**offre de travail** (les ménages qui proposent leur force de travail) et la **demande de travail** (les entreprises qui cherchent à embaucher). Attention au vocabulaire : ici, ce sont les **ménages** qui offrent et les **entreprises** qui demandent — l’inverse du marché des biens.' },
          { t: 'p', c: 'La rencontre entre offre et demande détermine, en théorie, un **salaire d’équilibre**. Mais le marché du travail est **régulé** : le **SMIC** fixe un salaire minimum, les conventions collectives et le droit du travail encadrent les relations. Ces règles protègent les salariés mais peuvent, selon certains, freiner l’embauche.' },
          { t: 'tip', c: 'Ne confonds pas **offre** et **demande** de travail : sur ce marché, l’**offre** vient des travailleurs, la **demande** des employeurs.' },
        ],
      },
      {
        h: 'Les indicateurs à connaître',
        blocks: [
          { t: 'p', c: 'Pour parler juste du chômage, il faut d’abord définir **qui compte dans quoi**. Au sens du **BIT** (Bureau international du travail), un **chômeur** est une personne sans emploi, **disponible** et qui **recherche activement** du travail.' },
          { t: 'table', head: ['Catégorie', 'Définition'], rows: [
            ['**Actifs occupés**', 'Personnes qui ont un emploi'],
            ['**Chômeurs**', 'Sans emploi, disponibles et en recherche active'],
            ['**Inactifs**', 'Ni en emploi ni au chômage (étudiants, retraités, au foyer)'],
          ] },
          { t: 'formula', c: 'Population active = actifs occupés + chômeurs' },
          { t: 'formula', c: 'Taux de chômage = chômeurs / population active' },
          { t: 'formula', c: 'Taux d’activité = population active / population en âge de travailler' },
          { t: 'formula', c: 'Taux d’emploi = actifs occupés / population en âge de travailler' },
          { t: 'example', h: 'Lecture de données', c: 'Population en âge de travailler = 40 M ; emploi = 24 M ; chômeurs = 3 M.\n• Population active = 24 + 3 = **27 M**\n• Taux d’activité = 27 / 40 = **67,5 %**\n• Taux de chômage = 3 / 27 ≈ **11,1 %**\n• Taux d’emploi = 24 / 40 = **60 %**' },
        ],
      },
      {
        h: 'Types de chômage et politiques de l’emploi',
        blocks: [
          { t: 'p', c: 'Le chômage n’a pas une seule cause : on distingue trois grands types, qui n’appellent pas les mêmes remèdes.' },
          { t: 'table', head: ['Type', 'Cause', 'Remède privilégié'], rows: [
            ['**Conjoncturel**', 'Ralentissement de l’activité (crise, baisse de la demande)', 'Politique de **relance** (soutenir la demande)'],
            ['**Structurel**', 'Inadéquation durable entre compétences et emplois disponibles', '**Formation**, adaptation des qualifications'],
            ['**Frictionnel**', 'Temps normal de transition entre deux emplois', 'Meilleure **information** sur le marché du travail'],
          ] },
          { t: 'p', c: 'Les **politiques de l’emploi** combinent plusieurs leviers : baisser le **coût du travail** (allègements de charges), **former** les demandeurs d’emploi, favoriser la **flexibilité**, ou soutenir directement l’emploi (contrats aidés).' },
          { t: 'warning', c: 'Une baisse du taux de chômage ne signifie pas toujours une amélioration : si des **chômeurs découragés** cessent de chercher et quittent la population active, le taux baisse **mécaniquement** sans qu’un seul emploi ait été créé. C’est pourquoi on regarde aussi le **taux d’emploi**, plus robuste.' },
        ],
      },
    ],
    resources: [
      { kind: 'video', label: 'Population active, taux de chômage', note: 'Vidéos — recherche YouTube', url: yt('population active taux chômage taux emploi calcul économie STMG') },
      { kind: 'video', label: 'Les types de chômage', note: 'Vidéos — recherche YouTube', url: yt('types de chômage conjoncturel structurel frictionnel économie STMG') },
    ],
  },

  'eco-t8': {
    essentiel: [
      '**Avantages comparatifs** (Ricardo) → spécialisation puis échange = richesse globale.',
      '**Libre-échange** (ouverture) vs **protectionnisme** (droits de douane, barrières non tarifaires).',
      'Le libre-échange fait des **perdants** ; régulation par l’**OMC**.',
    ],
    intro:
      'Pourquoi les pays échangent-ils ? Le **commerce international** repose sur la **spécialisation**, mais oppose partisans du **libre-échange** et du **protectionnisme**. Un classique de la question de réflexion.',
    cours: [
      {
        h: 'Les fondements : les avantages comparatifs (Ricardo)',
        blocks: [
          { t: 'p', c: 'Pourquoi les pays échangent-ils, même quand l’un semble « meilleur » en tout ? La réponse tient à la théorie des **avantages comparatifs** de **David Ricardo** : chaque pays a intérêt à se **spécialiser** dans la production pour laquelle il est **relativement le plus efficace** (là où il est « le moins mauvais »), puis à **échanger** le reste.' },
          { t: 'example', h: 'L’intuition', c: 'Un pays très productif en électronique **et** en textile a intérêt à se concentrer sur l’électronique (où son avance est la plus grande) et à **importer** le textile : il gagne plus en électronique qu’il ne perd en abandonnant le textile.' },
          { t: 'p', c: 'Cette **division internationale du travail (DIT)** augmente la **richesse globale** : chaque pays produit ce qu’il fait de mieux, et tous accèdent à plus de biens à moindre coût.' },
          { t: 'tip', c: 'Ne confonds pas avantage **absolu** (produire avec moins de ressources que les autres) et avantage **comparatif** (produire en sacrifiant le moins d’autres productions). C’est le comparatif qui fonde l’échange chez Ricardo.' },
        ],
      },
      {
        h: 'Libre-échange ou protectionnisme ?',
        blocks: [
          { t: 'p', c: 'Le grand débat du commerce international oppose deux visions : **ouvrir** les frontières ou **protéger** la production nationale.' },
          { t: 'table', head: ['', 'Libre-échange', 'Protectionnisme'], rows: [
            ['Principe', 'Ouvrir les marchés, **supprimer** les barrières', '**Protéger** la production nationale'],
            ['Outils', 'Accords de libre-échange', 'Droits de **douane**, **quotas**, barrières non tarifaires (normes)'],
            ['Avantages', 'Baisse des prix, marchés élargis, croissance, choix pour le consommateur', 'Protège l’emploi et les industries « naissantes » ou stratégiques'],
            ['Risques', 'Fait des **perdants** (industries non compétitives), délocalisations', 'Représailles, prix plus élevés, moindre efficacité'],
          ] },
          { t: 'warning', c: 'Le libre-échange **crée de la richesse globale** mais **ne profite pas également à tous** : il fait des **perdants** (secteurs, régions ou pays spécialisés dans des productions peu rémunératrices). D’où la nécessité d’**accompagner** les perdants (formation, reconversion).' },
        ],
      },
      {
        h: 'La régulation du commerce mondial',
        blocks: [
          { t: 'p', c: 'Le commerce mondial n’est pas un far-west : il est **encadré**. L’**OMC** (Organisation mondiale du commerce) fixe des règles communes et arbitre les litiges commerciaux entre États.' },
          { t: 'list', c: [
            '**Accords commerciaux** bilatéraux ou multilatéraux (baisse des droits de douane).',
            '**Intégrations régionales** comme l’**Union européenne** (marché unique, libre circulation).',
            '**Firmes multinationales (FMN)** et **délocalisations** : acteurs majeurs qui organisent la production à l’échelle mondiale.',
          ] },
          { t: 'example', h: 'L’Union européenne', c: 'Au sein de l’UE, marchandises, services, capitaux et personnes circulent **librement** : c’est une zone de libre-échange **intégrée**, avec une monnaie commune (l’euro) pour une partie des pays.' },
          { t: 'tip', c: 'Un déséquilibre des échanges se lit dans la **balance commerciale** : **exportations − importations**. Positive = excédent ; négative = déficit.' },
        ],
      },
    ],
    resources: [
      { kind: 'video', label: 'Les avantages comparatifs (Ricardo)', note: 'Vidéos — recherche YouTube', url: yt('avantages comparatifs Ricardo spécialisation commerce international STMG') },
      { kind: 'video', label: 'Libre-échange et protectionnisme', note: 'Vidéos — recherche YouTube', url: yt('libre échange protectionnisme avantages limites économie STMG') },
    ],
  },

  'eco-t9': {
    essentiel: [
      'La croissance se mesure par le **PIB**, indicateur **limité** du bien-être.',
      '**Développement durable** = concilier **économique + social + environnemental**.',
      'Instruments : économie **circulaire**, **collaborative**, taxation, quotas. (Thème surtout utile au **grand oral**.)',
    ],
    intro:
      'La **croissance** est-elle toujours souhaitable ? Ce thème confronte le PIB à ses **limites** et introduit le **développement durable**. Il n’est pas évalué à l’écrit mais alimente le **grand oral**.',
    cours: [
      {
        h: 'La croissance et ses limites',
        blocks: [
          { t: 'p', c: 'La **croissance économique** est l’augmentation durable de la production d’un pays, mesurée par l’évolution du **PIB** (produit intérieur brut = valeur des richesses créées sur un territoire en un an). Un taux de croissance positif signifie « on produit plus que l’an dernier ».' },
          { t: 'p', c: 'Mais le PIB est un indicateur **limité du bien-être** : il ne dit rien des **inégalités** de répartition, ignore la dégradation de l’**environnement** (une marée noire peut même **augmenter** le PIB via les dépenses de dépollution !) et ne compte pas le **travail non marchand** (bénévolat, tâches domestiques).' },
          { t: 'example', h: 'Des indicateurs alternatifs', c: 'L’**IDH** (indice de développement humain) complète le PIB en intégrant la **santé** (espérance de vie) et l’**éducation**. D’autres indicateurs mesurent l’empreinte écologique ou le bien-être ressenti.' },
          { t: 'tip', c: 'Distingue **croissance** (quantitatif : plus de PIB) et **développement** (qualitatif : progrès de la santé, de l’éducation, du niveau de vie). Un pays peut croître sans se développer, et inversement.' },
        ],
      },
      {
        h: 'Le développement durable',
        blocks: [
          { t: 'p', c: 'Le **développement durable** vise à « répondre aux besoins du présent **sans compromettre** la capacité des générations futures à répondre aux leurs » (rapport Brundtland, 1987). Il cherche à concilier **trois dimensions** indissociables.' },
          { t: 'table', head: ['Dimension', 'Idée'], rows: [
            ['**Économique**', 'Une croissance viable et durable'],
            ['**Sociale**', 'L’équité, la réduction des inégalités, l’accès aux besoins essentiels'],
            ['**Environnementale**', 'La préservation des ressources et des écosystèmes'],
          ] },
          { t: 'p', c: 'Deux visions s’opposent sur la place du **capital naturel** (ressources, biodiversité) :' },
          { t: 'list', c: [
            '**Soutenabilité faible** : le capital naturel peut être **remplacé** par du capital produit (technologie, machines).',
            '**Soutenabilité forte** : le capital naturel est **irremplaçable** et doit être préservé en priorité.',
          ] },
          { t: 'tip', c: 'Ce thème n’est pas évalué à l’écrit du bac, mais c’est une **mine de sujets pour le Grand Oral** (croissance verte, sobriété, transition écologique…).' },
        ],
      },
      {
        h: 'Instruments et inégalités',
        blocks: [
          { t: 'p', c: 'Pour rendre l’économie plus durable, plusieurs leviers existent, publics et privés.' },
          { t: 'table', head: ['Instrument', 'Principe'], rows: [
            ['**Économie circulaire**', 'Réduire, réutiliser, réparer, **recycler** pour boucler les cycles de matières (vs le modèle « extraire-produire-jeter »)'],
            ['**Économie collaborative**', 'Partage et mutualisation entre particuliers (covoiturage, location entre pairs)'],
            ['**Taxation / quotas**', 'Renchérir ou plafonner les activités polluantes pour internaliser les **externalités négatives**'],
          ] },
          { t: 'p', c: 'Le développement durable a aussi une dimension **sociale** : lutter contre la pauvreté. On distingue la **pauvreté absolue** (vivre sous un seuil de subsistance) de la **pauvreté relative** (avoir un niveau de vie très inférieur au **niveau de vie médian** de son pays).' },
          { t: 'warning', c: 'Piège : la pauvreté **relative** dépend du pays. On peut être « pauvre » (au sens relatif) dans un pays riche tout en ayant un niveau de vie supérieur à la moyenne d’un pays pauvre. Les deux mesures se complètent.' },
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
          { t: 'figure', name: 'derivee' },
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
        h: 'L’épreuve de Bernoulli et le schéma de Bernoulli',
        blocks: [
          { t: 'p', c: 'Une **épreuve de Bernoulli** n’a que **deux issues** : le **succès** (probabilité p) et l’**échec** (probabilité 1 − p).' },
          { t: 'p', c: 'Quand on **répète n fois** cette même épreuve, de façon **identique** et **indépendante**, on obtient un **schéma de Bernoulli** (ex. : lancer 20 fois la même pièce).' },
        ],
      },
      {
        h: 'La loi binomiale B(n ; p) et son espérance',
        blocks: [
          { t: 'p', c: 'Si X compte le **nombre de succès** dans un schéma de n épreuves de Bernoulli, alors X suit la **loi binomiale B(n ; p)**. On calcule P(X = k) et P(X ⩽ k) à la **calculatrice**.' },
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
          { t: 'p', c: 'Philosopher, ce n’est pas donner son avis ni réciter des définitions : c’est **problématiser**, c’est-à-dire montrer qu’une question en apparence simple cache un **vrai problème** — souvent une tension entre deux réponses toutes deux défendables. Chaque notion du programme s’aborde ainsi par des **questions**, jamais par une définition figée.' },
          { t: 'table', head: ['Notion', 'Le problème', 'Une distinction utile'], rows: [
            ['**L’art**', 'Imitation ou création ? À quoi sert l’art ? Le beau est-il subjectif ?', 'Beau / agréable ; art / technique'],
            ['**La justice**', 'Se réduit-elle à la loi ? Peut-il être juste de désobéir ?', 'Légal / légitime ; égalité / équité'],
            ['**La liberté**', 'Sommes-nous vraiment libres ? Liberté ou déterminisme ?', 'Liberté / libre arbitre ; contrainte / obligation'],
            ['**La nature**', 'L’homme en fait-il partie ? Faut-il la respecter ?', 'Nature / culture'],
            ['**La religion**', 'Foi et raison s’opposent-elles ?', 'Croire / savoir'],
            ['**La technique**', 'Nous libère-t-elle ou nous asservit-elle ?', 'Moyen / fin'],
            ['**La vérité**', 'Peut-on tout démontrer ? Vérité ou opinion ?', 'Objectif / subjectif ; démontrer / prouver'],
          ] },
          { t: 'example', h: 'Problématiser « la technique »', c: 'On oppose spontanément la technique (froide, mécanique) et l’humain. Mais l’outil est justement le propre de l’homme… La technique **nous libère** (du travail pénible, de la maladie) autant qu’elle peut **nous asservir** (dépendance, surveillance). Le problème n’est pas de la rejeter, mais de savoir **qui la maîtrise**.' },
          { t: 'tip', c: 'Devant un sujet, cherche toujours la **tension** : « d’un côté… mais de l’autre… ». C’est là que naît la problématique — et donc les points au bac.' },
        ],
      },
      {
        h: 'Les repères : des distinctions pour raisonner',
        blocks: [
          { t: 'p', c: 'Les **repères** sont des couples de concepts que l’on doit savoir **distinguer**. Ils sont l’outil n°1 pour **nuancer** et **argumenter** : opposer deux termes proches fait avancer le raisonnement.' },
          { t: 'table', head: ['Repère', 'Distinction'], rows: [
            ['Légal / Légitime', 'Conforme à la **loi** / conforme à la **justice**'],
            ['Objectif / Subjectif', 'Indépendant de moi / propre à chacun'],
            ['Croire / Savoir', 'Tenir pour vrai **sans** preuve / **avec** preuve'],
            ['Universel / Particulier', 'Valable pour tous / propre à un cas'],
            ['Cause / Fin', 'Ce qui produit (le « parce que ») / ce en vue de quoi (le « pour »)'],
            ['En théorie / En pratique', 'Dans l’idée / dans les faits'],
          ] },
          { t: 'example', h: 'Un repère qui fait une dissertation', c: 'Une loi peut être **légale** sans être **légitime** (ex. une loi injuste votée dans les règles). Cet écart, à lui seul, ouvre tout le débat : faut-il obéir à une loi qu’on juge injuste ?' },
          { t: 'tip', c: 'Glisse **un ou deux repères** bien choisis dans ton devoir : c’est un réflexe très valorisé, qui montre que tu maîtrises les outils du raisonnement philosophique.' },
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
          { t: 'p', c: 'La dissertation répond à **une question** en construisant une **argumentation** progressive. On ne récite pas le cours : on **s’en sert** pour raisonner. Voici la marche à suivre.' },
          { t: 'table', head: ['Étape', 'Ce qu’on fait'], rows: [
            ['1. Analyser', 'Décortiquer le sujet, **définir** chaque terme important'],
            ['2. Problématiser', 'Dégager le **paradoxe**, le vrai problème (la tension entre deux réponses)'],
            ['3. Plan', 'Construire un plan **progressif** (souvent thèse → antithèse → dépassement)'],
            ['4. Argumenter', 'Chaque partie = une idée + un **argument** + un **exemple** ou un **auteur**'],
            ['5. Conclure', 'Répondre **clairement** au problème, ouvrir sur une nouvelle question'],
          ] },
          { t: 'example', h: 'Introduction rédigée (extrait)', c: '« La technique nous éloigne-t-elle de la nature ? »\nOn oppose spontanément la technique (les outils par lesquels l’homme agit) et la nature (ce qui existe sans lui). Mais la technique n’est-elle pas, justement, la manière proprement **humaine** d’habiter la nature ? Le vrai problème n’est peut-être pas la distance, mais le **rapport** que la technique instaure avec la nature.' },
          { t: 'warning', c: 'Les deux pièges qui plombent une copie : le **hors-sujet** (on répond à côté faute d’avoir analysé le sujet) et la **récitation** (on déroule le cours sans problématiser). Reviens sans cesse à **la** question posée.' },
        ],
      },
      {
        h: 'L’explication de texte et les auteurs',
        blocks: [
          { t: 'p', c: 'L’**explication de texte** consiste à **rendre compte** d’un texte philosophique et à en **discuter** la portée. On ne donne pas son avis d’emblée : on suit d’abord la pensée de l’auteur pas à pas.' },
          { t: 'list', c: [
            'Dégager la **thèse** : que veut prouver l’auteur ?',
            'Suivre les **mouvements** (les étapes) du texte et expliquer le **raisonnement**.',
            'Éclairer les **exemples** et les concepts employés.',
            '**Discuter** : la thèse est-elle convaincante ? Quelles limites ?',
          ] },
          { t: 'table', head: ['Période', 'Auteurs à connaître'], rows: [
            ['Antiquité / Moyen Âge', 'Platon, Aristote, Épicure'],
            ['Moderne', 'Descartes, Pascal, Rousseau, Kant'],
            ['Contemporaine', 'Nietzsche, Freud, Bergson, Arendt, Sartre, Beauvoir, Foucault'],
          ] },
          { t: 'tip', c: 'Pas besoin de tout connaître : **quelques auteurs bien maîtrisés** (une thèse, un exemple chacun) suffisent à nourrir tes devoirs. Mieux vaut citer juste que citer beaucoup.' },
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
        h: 'Les régimes totalitaires (fascisme, nazisme, stalinisme)',
        blocks: [
          { t: 'p', c: 'Dans l’entre-deux-guerres, sur fond de crise (traumatisme de 1914-1918, **krach de 1929**), s’imposent des **régimes totalitaires** qui veulent contrôler **tous** les aspects de la société : **parti unique**, **idéologie** officielle, **propagande** et culture de masse, **police politique** et **terreur**, **culte du chef**, **encadrement de la jeunesse**, économie dirigée.' },
          { t: 'table', head: ['Régime', 'Chef', 'Idéologie', 'Terreur / caractéristiques'], rows: [
            ['Italie fasciste (1922)', 'Mussolini (« Duce »)', 'Fascisme, nationalisme, corporatisme', 'Chemises noires, milice, parti unique'],
            ['URSS stalinienne', 'Staline', 'Communisme (marxisme-léninisme)', 'Grandes Purges, goulag, procès de Moscou, collectivisation forcée'],
            ['Allemagne nazie (1933)', 'Hitler (« Führer »)', 'Nazisme : racisme, antisémitisme, espace vital', 'Gestapo, SS, camps de concentration, lois de Nuremberg'],
          ] },
          { t: 'p', c: 'Le **nazisme** se distingue par un **racisme** biologique et un **antisémitisme** d’État qui mènera au génocide. Le régime **stalinien** repose sur la terreur de masse (Grandes Purges de 1936-1938, **goulag**).' },
        ],
      },
      {
        h: 'Chronologie : de la montée des périls à la guerre (1917-1939)',
        blocks: [
          { t: 'table', head: ['Date', 'Événement'], rows: [
            ['1917', 'Révolution russe : les bolcheviks (Lénine) prennent le pouvoir'],
            ['1922', 'Marche sur Rome : Mussolini au pouvoir en Italie ; création de l’URSS'],
            ['1924', 'Mort de Lénine ; Staline s’impose peu à peu'],
            ['24 oct. 1929', 'Krach de Wall Street (« jeudi noir ») → crise économique mondiale'],
            ['30 janv. 1933', 'Hitler chancelier ; ouverture du camp de Dachau'],
            ['1935', 'Lois de Nuremberg (privation des droits des Juifs allemands)'],
            ['1936', 'Réoccupation de la Rhénanie ; guerre d’Espagne ; procès de Moscou ; Front populaire en France'],
            ['mars 1938', 'Anschluss : annexion de l’Autriche par l’Allemagne'],
            ['sept. 1938', 'Accords de Munich (reculade des démocraties face à Hitler)'],
            ['9-10 nov. 1938', 'Nuit de Cristal (pogrom contre les Juifs allemands)'],
            ['23 août 1939', 'Pacte germano-soviétique (non-agression Hitler-Staline)'],
            ['1er sept. 1939', 'Invasion de la Pologne ; le 3 sept., France et Royaume-Uni déclarent la guerre'],
          ] },
        ],
      },
      {
        h: 'Une guerre mondiale et d’anéantissement (1939-1945)',
        blocks: [
          { t: 'p', c: 'La **Seconde Guerre mondiale** (1939-1945) oppose l’**Axe** (Allemagne, Italie, Japon) aux **Alliés** (Royaume-Uni, URSS, États-Unis, France libre…). C’est une **guerre totale** (économies, sociétés, sciences mobilisées) et **mondiale**.' },
          { t: 'p', c: 'C’est aussi une **guerre d’anéantissement** : la **violence de masse** ne vise plus seulement les armées mais les **civils** (bombardements de villes, famines, exactions). À l’Est, elle est menée comme une guerre d’**extermination**.' },
          { t: 'table', head: ['Date', 'Événement'], rows: [
            ['juin 1940', 'Défaite de la France ; appel du 18 juin (de Gaulle) ; régime de Vichy (Pétain)'],
            ['22 juin 1941', 'Opération Barbarossa : l’Allemagne envahit l’URSS'],
            ['7 déc. 1941', 'Pearl Harbor : le Japon attaque les États-Unis, qui entrent en guerre'],
            ['20 janv. 1942', 'Conférence de Wannsee : organisation de la « solution finale »'],
            ['16-17 juil. 1942', 'Rafle du Vél’ d’Hiv à Paris (avec la police française)'],
            ['févr. 1943', 'Capitulation allemande à Stalingrad : tournant de la guerre'],
            ['6 juin 1944', 'Débarquement allié en Normandie (D-Day)'],
            ['25 août 1944', 'Libération de Paris'],
            ['27 janv. 1945', 'Libération du camp d’Auschwitz par l’Armée rouge'],
            ['8 mai 1945', 'Capitulation de l’Allemagne (fin de la guerre en Europe)'],
            ['6 et 9 août 1945', 'Bombes atomiques américaines sur Hiroshima et Nagasaki'],
            ['2 sept. 1945', 'Capitulation du Japon : fin de la Seconde Guerre mondiale'],
          ] },
        ],
      },
      {
        h: 'La Shoah, un génocide planifié et industrialisé',
        blocks: [
          { t: 'p', c: 'La **Shoah** est le **génocide des Juifs** d’Europe (avec aussi le génocide des **Tsiganes**) : une volonté de destruction **totale** d’un groupe, **planifiée** et **industrialisée**. Elle passe par les **ghettos**, les fusillades de masse des **Einsatzgruppen** (à partir de 1941), puis les **camps d’extermination** (Auschwitz-Birkenau, Treblinka…) et les chambres à gaz après la conférence de **Wannsee** (1942).' },
          { t: 'p', c: 'Bilan : environ **6 millions de Juifs** assassinés. En France, le régime de **Vichy** participe aux arrestations et déportations.' },
          { t: 'warning', c: 'Un génocide n’est pas une « bavure » de guerre : c’est un projet **délibéré, planifié et organisé** d’extermination d’un groupe humain en raison de ce qu’il est.' },
        ],
      },
      {
        h: 'La France dans la guerre et le bilan',
        blocks: [
          { t: 'p', c: 'Après la défaite de **1940**, le **régime de Vichy** (Pétain) choisit la **collaboration** avec l’occupant (rencontre de Montoire, oct. 1940). Face à lui, la **Résistance** intérieure et la **France libre** (de Gaulle) s’organisent ; leur unification (Jean Moulin, **CNR**, 1943) prépare la **Libération** (1944).' },
          { t: 'table', head: ['Bilan de la guerre', 'Ordre de grandeur'], rows: [
            ['Morts (total)', '≈ 50 à 60 millions, en majorité des civils'],
            ['Victimes de la Shoah', '≈ 6 millions de Juifs'],
            ['Nouveauté', 'Arme nucléaire ; procès de Nuremberg (1945-1946)'],
          ] },
          { t: 'tip', c: 'Repères à retenir absolument : **1933** (Hitler), **1939** (début), **1940** (défaite française, Vichy, appel du 18 juin), **1942** (Wannsee, Stalingrad), **1944** (débarquements), **1945** (capitulations, Hiroshima/Nagasaki).' },
        ],
      },
      {
        h: 'Frise — Adolf Hitler (1889-1945)',
        blocks: [
          { t: 'p', c: 'Chronologie du dictateur nazi, à imprimer et mémoriser.' },
          { t: 'frise', title: 'Adolf Hitler (1889-1945)', events: [
            { date: '1889', label: 'Naissance à Braunau (Autriche-Hongrie)' },
            { date: '1914-1918', label: 'Soldat allemand pendant la Première Guerre mondiale' },
            { date: '1920', label: 'Adhère et prend la tête du parti nazi (**NSDAP**)' },
            { date: '1923', label: 'Putsch manqué de Munich → emprisonné' },
            { date: '1925', label: 'Publie *Mein Kampf* (programme raciste et antisémite)' },
            { date: '30 janv. 1933', label: 'Nommé **chancelier** du Reich' },
            { date: '1934', label: 'Devient **Führer** ; Nuit des Longs Couteaux' },
            { date: '1935', label: 'Lois de Nuremberg contre les Juifs' },
            { date: '1938', label: 'Anschluss (Autriche) ; accords de Munich' },
            { date: '1939', label: 'Pacte germano-soviétique ; invasion de la Pologne' },
            { date: '1941', label: 'Invasion de l’URSS (opération Barbarossa)' },
            { date: '1942', label: 'Conférence de Wannsee : la « solution finale »' },
            { date: '30 avr. 1945', label: 'Suicide à Berlin, face à la défaite' },
          ] },
        ],
      },
      {
        h: 'Frise — Joseph Staline (1878-1953)',
        blocks: [
          { t: 'p', c: 'Chronologie du dictateur soviétique.' },
          { t: 'frise', title: 'Joseph Staline (1878-1953)', events: [
            { date: '1878', label: 'Naissance à Gori (Géorgie)' },
            { date: '1917', label: 'Participe à la révolution bolchevique' },
            { date: '1922', label: 'Devient **secrétaire général** du Parti communiste' },
            { date: '1924', label: 'Mort de Lénine → il s’empare peu à peu du pouvoir' },
            { date: '1928', label: 'Collectivisation des terres ; plans quinquennaux' },
            { date: '1936-1938', label: 'Grandes Purges et procès de Moscou (terreur de masse)' },
            { date: '1939', label: 'Pacte germano-soviétique avec Hitler' },
            { date: '1941-1945', label: '« Grande Guerre patriotique » : l’URSS bat l’Allemagne' },
            { date: '1945', label: 'Conférences de Yalta et Potsdam (partage du monde)' },
            { date: '1953', label: 'Mort de Staline' },
          ] },
        ],
      },
      {
        h: 'Frise — Benito Mussolini (1883-1945)',
        blocks: [
          { t: 'p', c: 'Le fondateur du fascisme, premier régime totalitaire d’Europe.' },
          { t: 'frise', title: 'Benito Mussolini (1883-1945)', events: [
            { date: '1883', label: 'Naissance à Predappio (Italie)' },
            { date: '1919', label: 'Fonde les Faisceaux de combat (naissance du **fascisme**)' },
            { date: 'oct. 1922', label: '**Marche sur Rome** : il devient chef du gouvernement' },
            { date: '1925-1926', label: 'Instaure la dictature (« Duce », parti unique)' },
            { date: '1935', label: 'Invasion de l’Éthiopie' },
            { date: '1936', label: 'Axe Rome-Berlin avec Hitler' },
            { date: '1940', label: 'Entre en guerre aux côtés de l’Allemagne' },
            { date: '1943', label: 'Destitué et arrêté ; éphémère République de Salò' },
            { date: '28 avril 1945', label: 'Exécuté par des résistants italiens' },
          ] },
        ],
      },
      {
        h: 'Frise — Lénine (1870-1924)',
        blocks: [
          { t: 'p', c: 'Le fondateur de l’URSS et du régime communiste soviétique.' },
          { t: 'frise', title: 'Lénine (1870-1924)', events: [
            { date: '1870', label: 'Naissance à Simbirsk (Russie)' },
            { date: '1895', label: 'Militant marxiste, arrêté puis exilé en Sibérie' },
            { date: '1903', label: 'Fonde le courant **bolchevique**' },
            { date: 'oct. 1917', label: '**Révolution d’Octobre** : les bolcheviks prennent le pouvoir' },
            { date: '1918', label: 'Paix de Brest-Litovsk ; début de la guerre civile russe' },
            { date: '1921', label: 'NEP (nouvelle politique économique)' },
            { date: '1922', label: 'Création de l’**URSS**' },
            { date: '1924', label: 'Mort ; Staline lui succède' },
          ] },
        ],
      },
      {
        h: 'Frise — Philippe Pétain (1856-1951)',
        blocks: [
          { t: 'p', c: 'Du « héros de Verdun » au chef du régime de Vichy et à la collaboration.' },
          { t: 'frise', title: 'Philippe Pétain (1856-1951)', events: [
            { date: '1856', label: 'Naissance (Cauchy-à-la-Tour)' },
            { date: '1916', label: '« Vainqueur de Verdun » pendant la Première Guerre mondiale' },
            { date: '1918', label: 'Maréchal de France, héros national' },
            { date: 'juin 1940', label: 'Demande l’armistice après la défaite' },
            { date: '10 juil. 1940', label: 'Reçoit les pleins pouvoirs → **régime de Vichy**' },
            { date: 'oct. 1940', label: 'Poignée de main de Montoire : la **collaboration**' },
            { date: '1942', label: 'Vichy participe aux rafles de Juifs (Vél’ d’Hiv)' },
            { date: '1945', label: 'Jugé, condamné à mort (peine commuée en détention)' },
            { date: '1951', label: 'Mort à l’île d’Yeu' },
          ] },
        ],
      },
      {
        h: 'Frise — Jean Moulin (1899-1943)',
        blocks: [
          { t: 'p', c: 'Le grand unificateur de la Résistance intérieure française.' },
          { t: 'frise', title: 'Jean Moulin (1899-1943)', events: [
            { date: '1899', label: 'Naissance à Béziers' },
            { date: '1940', label: 'Préfet ; refuse de signer un faux document allemand' },
            { date: '1941', label: 'Rejoint le général de Gaulle à Londres' },
            { date: 'mai 1943', label: 'Unifie la Résistance : préside le premier **CNR**' },
            { date: '21 juin 1943', label: 'Arrêté à Caluire' },
            { date: 'juil. 1943', label: 'Meurt des suites de la torture ; au Panthéon depuis 1964' },
          ] },
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
        h: '1. Les origines de la Guerre froide (1945-1947)',
        blocks: [
          { t: 'p', c: 'En 1945, les **États-Unis** et l’**URSS**, alliés pour vaincre le nazisme, sortent seuls vainqueurs. Mais tout les oppose : la **démocratie libérale** et le **capitalisme** d’un côté, le **communisme** et le parti unique de l’autre. Dès 1945-1947, la méfiance devient rivalité ouverte.' },
          { t: 'p', c: 'Winston Churchill dénonce dès 1946 le « **rideau de fer** » qui coupe l’Europe en deux. En 1947, la rupture est consommée : les États-Unis proposent l’**endiguement** (containment) du communisme (doctrine Truman) et une aide économique (plan Marshall) ; l’URSS répond par la **doctrine Jdanov** et le **Kominform**.' },
          { t: 'table', head: ['Date', 'Événement'], rows: [
            ['4-11 févr. 1945', 'Conférence de Yalta (Roosevelt, Churchill, Staline) : organisation de l’après-guerre'],
            ['26 juin 1945', 'Signature de la Charte de l’ONU à San Francisco'],
            ['17 juil.-2 août 1945', 'Conférence de Potsdam (tensions déjà visibles)'],
            ['5 mars 1946', 'Discours de Fulton : Churchill dénonce le « rideau de fer »'],
            ['12 mars 1947', 'Doctrine Truman : politique d’endiguement (containment)'],
            ['5 juin 1947', 'Annonce du plan Marshall (aide économique à l’Europe)'],
            ['sept.-oct. 1947', 'Doctrine Jdanov et création du Kominform (réponse soviétique)'],
          ] },
        ],
      },
      {
        h: '2. La formation des blocs et les premières crises (1947-1953)',
        blocks: [
          { t: 'p', c: 'Chaque camp organise son **bloc**. À l’Ouest, l’**OTAN** (1949) fédère militairement les alliés des États-Unis ; à l’Est, l’URSS impose des « démocraties populaires ». **Berlin**, ville coupée en quatre au cœur de la zone soviétique, devient le premier point de crise.' },
          { t: 'p', c: 'La Guerre froide se **mondialise** : la victoire de **Mao** en Chine (1949) et la **guerre de Corée** (1950-1953) l’étendent à l’Asie. La course aux armements s’emballe (bombe A soviétique en 1949, bombe H).' },
          { t: 'table', head: ['Date', 'Événement'], rows: [
            ['24 juin 1948', 'Début du blocus de Berlin par l’URSS'],
            ['juin 1948-mai 1949', 'Pont aérien allié pour ravitailler Berlin-Ouest'],
            ['4 avril 1949', 'Création de l’OTAN'],
            ['mai / oct. 1949', 'Naissance de la RFA (Ouest) puis de la RDA (Est)'],
            ['29 août 1949', 'Première bombe atomique soviétique'],
            ['1er oct. 1949', 'Mao Zedong proclame la République populaire de Chine'],
            ['1950-1953', 'Guerre de Corée : première guerre « chaude » par procuration'],
            ['1952', 'Première bombe H (thermonucléaire) américaine'],
            ['5 mars 1953', 'Mort de Staline'],
          ] },
        ],
      },
      {
        h: '3. Coexistence pacifique et paroxysme des tensions (1953-1962)',
        blocks: [
          { t: 'p', c: 'Après la mort de Staline, **Khrouchtchev** prône la « **coexistence pacifique** » et amorce la **déstalinisation** (1956). Mais l’URSS réprime dans le sang toute contestation dans son bloc (**Budapest**, 1956), et la rivalité se déplace dans l’**espace** (course Spoutnik/Gagarine contre les États-Unis).' },
          { t: 'p', c: 'Les crises se multiplient jusqu’au **paroxysme** : le **mur de Berlin** (1961) fige la coupure, et la **crise des missiles de Cuba** (1962) amène le monde au bord de la guerre nucléaire.' },
          { t: 'table', head: ['Date', 'Événement'], rows: [
            ['1955', 'Pacte de Varsovie (alliance militaire de l’Est) ; conférence de Bandung'],
            ['1956', 'Rapport Khrouchtchev (déstalinisation) ; insurrection de Budapest écrasée ; crise de Suez'],
            ['4 oct. 1957', 'Lancement de Spoutnik (l’URSS ouvre la course à l’espace)'],
            ['12 avr. 1961', 'Gagarine, premier homme dans l’espace'],
            ['13 août 1961', 'Construction du mur de Berlin'],
            ['oct. 1962', 'Crise des missiles de Cuba : point de tension maximal (risque nucléaire)'],
          ] },
        ],
      },
      {
        h: '4. La Détente et ses limites (1962-1975)',
        blocks: [
          { t: 'p', c: 'Effrayés par Cuba, les deux Grands ouvrent un **dialogue** : c’est la **Détente**. On installe le « téléphone rouge », on signe des accords de **limitation des armements** (SALT) et de **non-prolifération**. Mais la rivalité continue : guerre du **Vietnam**, écrasement du **Printemps de Prague** (1968), course à la Lune.' },
          { t: 'table', head: ['Date', 'Événement'], rows: [
            ['1963', 'Téléphone rouge Washington-Moscou ; traité d’interdiction partielle des essais nucléaires'],
            ['1968', 'Printemps de Prague écrasé par l’URSS ; traité de non-prolifération (TNP)'],
            ['21 juil. 1969', 'Apollo 11 : les Américains sur la Lune'],
            ['1972', 'Accords SALT I ; visite de Nixon en Chine et à Moscou'],
            ['1973', 'Retrait américain du Vietnam'],
            ['1975', 'Chute de Saïgon (fin de la guerre du Vietnam) ; accords d’Helsinki'],
          ] },
        ],
      },
      {
        h: '5. La fin de la Guerre froide (1975-1991)',
        blocks: [
          { t: 'p', c: 'La tension repart (« **guerre fraîche** ») avec l’intervention soviétique en **Afghanistan** (1979) et la relance de la course aux armements par **Reagan**. Mais l’URSS, épuisée économiquement, ne peut plus suivre. **Gorbatchev** (1985) lance des réformes (**perestroïka**, **glasnost**) qui, en desserrant l’étau, précipitent l’**effondrement du bloc de l’Est**.' },
          { t: 'table', head: ['Date', 'Événement'], rows: [
            ['1979', 'Intervention soviétique en Afghanistan → « guerre fraîche »'],
            ['1983', 'Reagan lance le projet d’« guerre des étoiles » (IDS)'],
            ['1985', 'Gorbatchev au pouvoir : perestroïka et glasnost'],
            ['1986', 'Catastrophe de Tchernobyl ; sommet de Reykjavik'],
            ['1987', 'Traité FNI : destruction des missiles nucléaires intermédiaires'],
            ['9 nov. 1989', 'Chute du mur de Berlin ; révolutions dans les pays de l’Est'],
            ['3 oct. 1990', 'Réunification de l’Allemagne'],
            ['25 déc. 1991', 'Démission de Gorbatchev, éclatement de l’URSS : fin de la Guerre froide'],
          ] },
        ],
      },
      {
        h: '6. La décolonisation et l’émergence du tiers-monde',
        blocks: [
          { t: 'p', c: 'Affaiblies par la guerre, les puissances coloniales doivent céder : les **colonies** d’Asie puis d’Afrique accèdent à l’**indépendance** (surtout 1945-1965). La décolonisation est parfois **négociée** (Inde), parfois **violente** (Indochine, Algérie).' },
          { t: 'p', c: 'De nombreux nouveaux États refusent de choisir un camp : c’est le **non-alignement** (conférence de **Bandung**, 1955) et la naissance de l’idée de « **tiers-monde** », qui réclame un développement plus juste.' },
          { t: 'table', head: ['Date', 'Événement'], rows: [
            ['1945', 'Massacres de Sétif en Algérie'],
            ['15 août 1947', 'Indépendance de l’Inde et du Pakistan (Gandhi, Nehru)'],
            ['1949', 'Indépendance de l’Indonésie'],
            ['1954', 'Défaite de Diên Biên Phu ; indépendance de l’Indochine (Genève) ; début de la guerre d’Algérie'],
            ['1955', 'Conférence de Bandung : non-alignés, « tiers-monde »'],
            ['1956', 'Indépendance du Maroc et de la Tunisie'],
            ['1957', 'Indépendance du Ghana (1re colonie d’Afrique noire)'],
            ['1960', '« Année de l’Afrique » : 17 pays africains indépendants'],
            ['1962', 'Indépendance de l’Algérie (accords d’Évian)'],
          ] },
        ],
      },
      {
        h: '7. Un monde multipolaire (depuis 1991)',
        blocks: [
          { t: 'p', c: 'La disparition de l’URSS en **1991** laisse les **États-Unis** seule « **hyperpuissance** ». Mais ce moment est bref : de **nouvelles puissances** montent (la **Chine**, l’Inde, l’Union européenne, les pays émergents/BRICS). On parle d’un monde **multipolaire**, traversé par la **mondialisation** et par de nouvelles menaces (**terrorisme**).' },
          { t: 'table', head: ['Date', 'Événement'], rows: [
            ['1991', 'Fin de l’URSS ; guerre du Golfe ; « nouvel ordre mondial »'],
            ['1993', 'Création de l’Union européenne (Maastricht, 1992)'],
            ['11 sept. 2001', 'Attentats aux États-Unis → « guerre contre le terrorisme »'],
            ['2003', 'Guerre d’Irak'],
            ['2008', 'Crise financière mondiale'],
            ['depuis 2010', 'Affirmation de la Chine ; monde multipolaire et instable'],
          ] },
          { t: 'tip', c: 'Repères clés : **1947** (début) et **1991** (fin) de la Guerre froide ; **1949** (OTAN, RDA/RFA, Chine), **1962** (Cuba), **1975** (Helsinki), **1989** (chute du mur), **2001** (11 septembre).' },
        ],
      },
      {
        h: 'Frise — Gandhi (1869-1948)',
        blocks: [
          { t: 'p', c: 'Le père de l’indépendance de l’Inde, apôtre de la non-violence.' },
          { t: 'frise', title: 'Mahatma Gandhi (1869-1948)', events: [
            { date: '1869', label: 'Naissance à Porbandar (Inde)' },
            { date: '1893-1914', label: 'Avocat en Afrique du Sud : lutte contre les discriminations' },
            { date: '1915', label: 'Retour en Inde ; combat pour l’indépendance' },
            { date: 'années 1920', label: 'Désobéissance civile **non-violente** contre les Britanniques' },
            { date: '1930', label: 'Marche du sel' },
            { date: '15 août 1947', label: 'Indépendance de l’Inde (et du Pakistan)' },
            { date: '1948', label: 'Assassiné' },
          ] },
        ],
      },
      {
        h: 'Frise — Mikhaïl Gorbatchev (1931-2022)',
        blocks: [
          { t: 'p', c: 'Le dernier dirigeant de l’URSS, dont les réformes précipitent la fin de la Guerre froide.' },
          { t: 'frise', title: 'Mikhaïl Gorbatchev (1931-2022)', events: [
            { date: '1931', label: 'Naissance dans le sud de la Russie' },
            { date: '1985', label: 'Dirigeant de l’URSS : lance la **perestroïka** et la **glasnost**' },
            { date: '1986', label: 'Catastrophe nucléaire de Tchernobyl' },
            { date: '1987', label: 'Accords de désarmement avec les États-Unis' },
            { date: '1989', label: 'Chute du mur de Berlin : il n’intervient pas' },
            { date: '1990', label: 'Prix Nobel de la paix' },
            { date: '1991', label: 'Éclatement de l’URSS : il démissionne' },
            { date: '2022', label: 'Mort' },
          ] },
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
          { t: 'p', c: 'Au sortir de la guerre, la France se **reconstruit** (aidée par le **plan Marshall**, 1948) et connaît une longue période de forte croissance, les **Trente Glorieuses** (≈ 1945-1975) : modernisation, **plein emploi**, **société de consommation**, **État-providence**.' },
          { t: 'p', c: 'À la Libération, le **GPRF** (de Gaulle) applique le programme du **CNR** : **droit de vote des femmes** (1944), **Sécurité sociale** (1945), nationalisations (banques, énergie). La croissance prend fin avec le **choc pétrolier** de 1973.' },
          { t: 'table', head: ['Date', 'Repère économique et social'], rows: [
            ['1944', 'Gouvernement provisoire (GPRF) ; nationalisations, presse'],
            ['1945', 'Création de la Sécurité sociale ; nationalisation de Renault'],
            ['1946', 'Nationalisations (EDF-GDF, Banque de France) ; institution du SMIG (1950)'],
            ['1947', 'Début des Trente Glorieuses ; plan Marshall (1948)'],
            ['années 1950-60', 'Société de consommation (automobile, électroménager, télévision)'],
            ['1968', 'Accords de Grenelle : forte hausse des salaires'],
            ['1973', 'Premier choc pétrolier : fin des Trente Glorieuses, montée du chômage'],
          ] },
        ],
      },
      {
        h: 'Les mutations de la société française (femmes, jeunesse, immigration)',
        blocks: [
          { t: 'p', c: 'Les Trente Glorieuses transforment la société : émancipation des **femmes**, poids nouveau de la **jeunesse** (baby-boom), **immigration** de main-d’œuvre, exode rural. Mai **1968** cristallise ces aspirations à plus de liberté.' },
          { t: 'table', head: ['Date', 'Événement de société'], rows: [
            ['1944', 'Droit de vote des femmes'],
            ['1965', 'Les femmes peuvent travailler et ouvrir un compte sans l’accord du mari'],
            ['1967', 'Loi Neuwirth : autorisation de la contraception'],
            ['mai 1968', 'Contestation étudiante et ouvrière : grève générale, accords de Grenelle'],
            ['1974', 'Majorité civile abaissée à 18 ans ; arrêt de l’immigration de travail'],
            ['1975', 'Loi Veil : légalisation de l’avortement (IVG)'],
          ] },
        ],
      },
      {
        h: 'Chronologie politique : de la IVe à la Ve République',
        blocks: [
          { t: 'table', head: ['Date', 'Événement'], rows: [
            ['1944', 'Libération ; droit de vote accordé aux femmes (elles votent en 1945)'],
            ['1945', 'Création de la Sécurité sociale ; procès de Nuremberg'],
            ['1946', 'Proclamation de la IVe République'],
            ['1958', 'Crise algérienne : retour de De Gaulle ; fondation de la Ve République (pouvoir présidentiel renforcé)'],
            ['1962', 'Fin de la guerre d’Algérie ; élection du président au suffrage universel direct (référendum)'],
            ['mai 1968', 'Mai 68 : contestation étudiante et sociale, grève générale'],
            ['1969', 'Démission du général de Gaulle'],
            ['1974', 'Majorité à 18 ans ; Giscard d’Estaing président'],
            ['1981', 'François Mitterrand : première alternance (gauche) ; abolition de la peine de mort'],
            ['2000', 'Passage au quinquennat (mandat présidentiel de 5 ans)'],
          ] },
        ],
      },
      {
        h: 'La construction européenne',
        blocks: [
          { t: 'p', c: 'La France est un **moteur de la construction européenne**, pensée pour garantir la **paix** et la **prospérité** après 1945.' },
          { t: 'table', head: ['Date', 'Étape'], rows: [
            ['1950', 'Déclaration Schuman (9 mai) : projet d’une Europe unie'],
            ['1951', 'Traité de Paris : création de la CECA (charbon et acier)'],
            ['1957', 'Traité de Rome : création de la CEE (Marché commun) et de l’Euratom'],
            ['1979', 'Première élection du Parlement européen au suffrage universel'],
            ['1985', 'Accords de Schengen (libre circulation)'],
            ['1992', 'Traité de Maastricht : naissance de l’Union européenne'],
            ['2002', 'Mise en circulation de l’euro'],
            ['2016', 'Référendum du Brexit au Royaume-Uni'],
          ] },
        ],
      },
      {
        h: 'Une puissance à rayonnement mondial',
        blocks: [
          { t: 'p', c: 'La France affirme un **rôle international** : membre permanent du **Conseil de sécurité de l’ONU**, dotée de l’**arme nucléaire** (premier essai en **1960**), 2ᵉ domaine maritime du monde, importante **influence culturelle** (francophonie, aide au développement). C’est le **thème conclusif** de la partie histoire.' },
          { t: 'tip', c: 'Repères : **1944** (vote des femmes), **1945** (Sécu), **1958** (Ve République), **1962** (suffrage universel), **1950-1957** (CECA/Rome), **1992** (Maastricht), **2002** (euro).' },
        ],
      },
      {
        h: 'Frise — Charles de Gaulle (1890-1970)',
        blocks: [
          { t: 'p', c: 'Figure centrale de la France du XXe siècle : Résistance, fondation de la Ve République. À imprimer.' },
          { t: 'frise', title: 'Charles de Gaulle (1890-1970)', events: [
            { date: '1890', label: 'Naissance à Lille' },
            { date: '1916', label: 'Blessé et fait prisonnier à Verdun' },
            { date: '18 juin 1940', label: 'Appel de Londres : refus de la défaite, naissance de la **France libre**' },
            { date: '1944', label: 'Libération ; il dirige le Gouvernement provisoire (**GPRF**)' },
            { date: '1946', label: 'Démissionne ; discours de Bayeux (sa vision des institutions)' },
            { date: '1958', label: 'Rappelé au pouvoir (crise algérienne) → fonde la **Ve République**' },
            { date: '1959', label: 'Premier président de la Ve République' },
            { date: '1962', label: 'Fin de la guerre d’Algérie ; élection du président au suffrage universel' },
            { date: '1965', label: 'Réélu au premier suffrage universel direct' },
            { date: 'mai 1968', label: 'Crise de Mai 68' },
            { date: '1969', label: 'Démission après l’échec d’un référendum' },
            { date: '1970', label: 'Mort à Colombey-les-Deux-Églises' },
          ] },
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

}
