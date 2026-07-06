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
}
