// APPROFONDISSEMENT — cours « longue durée » pour les matières du tronc STMG
// (Gestion-Finance, Management, Droit, Économie, Mathématiques). Chaque entrée
// ajoute, à la suite des chapitres existants d'un thème, plusieurs sections
// développées (définitions, mécanismes détaillés, tableaux, exemples chiffrés,
// méthode, études de cas guidées). Chaque section devient un chapitre à part
// entière et se lit page par page dans le lecteur de cours.
//
// Fusionné dans data/index.js après ENRICH et PHILO_LONG (ajout, jamais écrasement).
const S = (h, blocks) => ({ h, blocks })

export const APPROF = {
  // #####################################################################
  // GESTION ET FINANCE (Terminale STMG — spécialité)
  // #####################################################################

  // ---- Thème 1 — Appliquer les règles comptables --------------------
  'gf-t1': [
    S('📒 La comptabilité : à quoi elle sert, comment elle est cadrée', [
      { t: 'p', c: 'La **comptabilité** est un système d’information qui enregistre, classe et résume en euros tous les **flux** de l’entreprise (achats, ventes, salaires, emprunts…). Elle répond à trois besoins : **rendre des comptes** (aux associés, à l’État, aux banques), **piloter** l’activité (savoir si l’on gagne de l’argent), et **prouver** en cas de litige. Ce n’est pas une simple formalité : c’est la mémoire chiffrée et la carte d’identité financière de l’entreprise.' },
      { t: 'p', c: 'La comptabilité française est **normalisée** : toutes les entreprises suivent le **Plan comptable général (PCG)**, un référentiel commun qui fixe la liste des **comptes** (numérotés par classes de 1 à 7) et les règles d’enregistrement. Cette normalisation garantit que le bilan de deux entreprises différentes se lit de la même façon — c’est la condition de la **comparabilité**.' },
      { t: 'table', head: ['Classe', 'Nature', 'Exemples de comptes'], rows: [
        ['1', 'Capitaux', '101 Capital · 164 Emprunts'],
        ['2', 'Immobilisations', '215 Matériel · 213 Constructions'],
        ['3', 'Stocks', '37 Stocks de marchandises'],
        ['4', 'Tiers', '401 Fournisseurs · 411 Clients · 44 État'],
        ['5', 'Financier', '512 Banque · 53 Caisse'],
        ['6', 'Charges', '607 Achats · 641 Salaires'],
        ['7', 'Produits', '707 Ventes de marchandises'],
      ] },
      { t: 'p', c: 'Le principe technique fondamental est la **partie double** : chaque opération est enregistrée **au moins deux fois**, une fois au **débit** d’un compte, une fois au **crédit** d’un autre, pour un **montant total identique** des deux côtés. Toute écriture est donc équilibrée : c’est ce qui rend la comptabilité vérifiable.' },
      { t: 'list', c: [
        '**Principe de prudence** : on n’anticipe jamais un gain, mais on enregistre immédiatement une perte probable (ex. un client qui risque de ne pas payer).',
        '**Principe du coût historique** : un bien est inscrit à sa **valeur d’achat**, pas à sa valeur actuelle du marché.',
        '**Principe d’indépendance des exercices** : chaque année comptable ne supporte que les charges et produits **qui la concernent** (d’où les amortissements et les régularisations).',
        '**Principe de continuité d’exploitation** : on tient les comptes en supposant que l’entreprise va poursuivre son activité.',
      ] },
      { t: 'tip', h: 'À retenir', c: 'Débit à gauche, crédit à droite. Pour un compte d’**actif** (ce que l’entreprise possède), une **augmentation** se met au **débit**. Pour un compte de **passif** ou de **produit**, une augmentation se met au **crédit**.' },
    ]),
    S('🧾 La TVA, mécanisme complet', [
      { t: 'p', c: 'La **TVA (taxe sur la valeur ajoutée)** est un impôt **indirect** sur la consommation, payé au final par le **consommateur**, mais **collecté** par les entreprises pour le compte de l’État. L’entreprise n’est qu’un **intermédiaire** : elle ne garde pas la TVA, elle la reverse.' },
      { t: 'list', c: [
        '**TVA collectée** : la TVA que l’entreprise **facture** à ses clients sur ses ventes (compte 44571). C’est une **dette** envers l’État.',
        '**TVA déductible** : la TVA que l’entreprise **paie** à ses fournisseurs sur ses achats (compte 44566). C’est une **créance** sur l’État.',
        '**TVA à décaisser** : ce que l’entreprise **reverse réellement** = TVA collectée − TVA déductible.',
      ] },
      { t: 'formula', c: 'TVA à décaisser = TVA collectée − TVA déductible' },
      { t: 'p', c: 'L’entreprise ne reverse donc la taxe **que sur la valeur qu’elle a ajoutée**. C’est là tout le génie du système : à chaque étape de la chaîne (producteur → grossiste → détaillant), chacun ne paie l’impôt que sur sa propre marge, et le poids total repose sur l’acheteur final.' },
      { t: 'table', head: ['Taux', 'S’applique à…'], rows: [
        ['20 % (normal)', 'La plupart des biens et services'],
        ['10 % (intermédiaire)', 'Restauration, transport, travaux de rénovation'],
        ['5,5 % (réduit)', 'Produits alimentaires, livres, énergie de base'],
        ['2,1 % (particulier)', 'Médicaments remboursés, presse'],
      ] },
      { t: 'example', h: 'Calcul de base', c: 'Prix HT = 100 € ; TVA à 20 % = 100 × 0,20 = 20 € ; Prix TTC = 120 €. Inversement : à partir du TTC, HT = TTC ÷ 1,20 ; ici 120 ÷ 1,20 = 100 €.' },
      { t: 'warning', h: 'Piège classique', c: 'Pour retrouver le HT à partir du TTC, on **divise par 1,20** (et non « on retire 20 % »). Retirer 20 % de 120 donnerait 96 €, ce qui est **faux**.' },
    ]),
    S('✍️ Enregistrer une opération au journal', [
      { t: 'p', c: 'Le **journal** est le registre où l’on inscrit, **jour après jour** et dans l’ordre chronologique, toutes les écritures. Chaque écriture comporte : une **date**, les **comptes débités** puis **crédités**, les **montants**, et un **libellé** (l’explication). Le total des débits est **toujours égal** au total des crédits.' },
      { t: 'example', h: 'Une vente de marchandises', c: 'Vente de 1 000 € HT, TVA 20 % → TTC 1 200 €, payée par le client à crédit.\n\n• 411 Clients …… 1 200 (débit)\n• 707 Ventes de marchandises …… 1 000 (crédit)\n• 44571 TVA collectée …… 200 (crédit)' },
      { t: 'p', c: 'Lecture de l’écriture : le client nous **doit** 1 200 € (créance → actif → débit) ; ces 1 200 € se décomposent en un **produit** de 1 000 € (la vente) et une **dette de TVA** de 200 € envers l’État. Débit = 1 200 ; crédit = 1 000 + 200 = 1 200. L’écriture est équilibrée.' },
      { t: 'example', h: 'Un achat de marchandises', c: 'Achat de 500 € HT, TVA 20 % → TTC 600 €, à crédit.\n\n• 607 Achats de marchandises …… 500 (débit)\n• 44566 TVA déductible …… 100 (débit)\n• 401 Fournisseurs …… 600 (crédit)' },
      { t: 'tip', h: 'Méthode en 4 étapes', c: '1) Identifier les comptes concernés. 2) Classer chacun (actif/passif/charge/produit). 3) Placer chaque montant au débit ou au crédit selon sa nature. 4) **Vérifier l’équilibre** débit = crédit avant de valider.' },
    ]),
    S('🏭 Amortissements et dépréciations', [
      { t: 'p', c: 'Une **immobilisation** (machine, véhicule, ordinateur) sert plusieurs années : il serait faux de compter tout son coût sur l’année d’achat. On répartit donc sa valeur sur sa **durée d’utilisation** grâce à l’**amortissement**. C’est une application directe du principe d’indépendance des exercices : chaque année « supporte » l’usure qui lui revient.' },
      { t: 'p', c: 'L’amortissement constate la **perte de valeur** irréversible d’un bien due à l’usage, au temps ou à l’obsolescence. C’est une **charge** (compte 6811) qui **ne correspond à aucune sortie d’argent** : c’est une charge dite **calculée** ou **non décaissée** (elle jouera un rôle clé dans le calcul de la CAF, thème 2).' },
      { t: 'formula', c: 'Amortissement linéaire annuel = Valeur d’origine ÷ Durée d’utilisation' },
      { t: 'example', h: 'Plan d’amortissement', c: 'Machine achetée 20 000 €, durée 5 ans (amortissement linéaire).\nAnnuité = 20 000 ÷ 5 = 4 000 € par an.\nAprès 2 ans : cumul = 8 000 € ; valeur nette comptable (VNC) = 20 000 − 8 000 = 12 000 €.' },
      { t: 'table', head: ['Année', 'Annuité', 'Cumul', 'VNC'], rows: [
        ['1', '4 000', '4 000', '16 000'],
        ['2', '4 000', '8 000', '12 000'],
        ['3', '4 000', '12 000', '8 000'],
        ['5', '4 000', '20 000', '0'],
      ] },
      { t: 'warning', h: 'Ne pas confondre', c: 'L’**amortissement** est une perte **définitive et prévisible** (usure). La **dépréciation** est une perte **réversible** (ex. un stock invendu qui perd de la valeur mais pourrait se revendre). Toutes deux respectent le principe de **prudence**.' },
    ]),
    S('📊 Lire le bilan et le compte de résultat', [
      { t: 'p', c: 'À la clôture de l’exercice, la comptabilité produit deux **documents de synthèse**. Le **bilan** est une **photographie** du patrimoine à un instant donné ; le **compte de résultat** est un **film** de l’activité sur toute l’année.' },
      { t: 'p', c: 'Le **bilan** a deux colonnes toujours égales. À gauche, l’**actif** : ce que l’entreprise **possède et utilise** (immobilisations, stocks, créances, banque). À droite, le **passif** : d’**où vient l’argent** (capitaux propres apportés par les associés + résultat, dettes financières, dettes fournisseurs).' },
      { t: 'formula', c: 'Total Actif = Total Passif (toujours)' },
      { t: 'table', head: ['ACTIF (emplois)', 'PASSIF (ressources)'], rows: [
        ['Actif immobilisé (machines, bâtiments)', 'Capitaux propres (capital, résultat)'],
        ['Actif circulant (stocks, créances)', 'Dettes financières (emprunts)'],
        ['Trésorerie (banque, caisse)', 'Dettes d’exploitation (fournisseurs, État)'],
      ] },
      { t: 'p', c: 'Le **compte de résultat** oppose les **produits** (classe 7 : ce que l’activité rapporte) aux **charges** (classe 6 : ce qu’elle coûte). Sa différence donne le **résultat de l’exercice** : **bénéfice** si produits > charges, **perte** sinon.' },
      { t: 'formula', c: 'Résultat = Total des produits − Total des charges' },
      { t: 'tip', h: 'Le lien entre les deux', c: 'Le **résultat** calculé dans le compte de résultat se **reporte au passif** du bilan (dans les capitaux propres). Un bénéfice enrichit l’entreprise ; une perte l’appauvrit. Les deux documents sont donc reliés.' },
    ]),
    S('🧮 Étude de cas guidée + méthode', [
      { t: 'p', c: '**Énoncé.** La société *Bonnétable* a réalisé en N : ventes 480 000 € ; achats consommés 210 000 € ; salaires 120 000 € ; autres charges 40 000 € ; dotation aux amortissements 20 000 €. On demande le résultat et un commentaire.' },
      { t: 'example', h: 'Étape 1 — Total des charges', c: '210 000 + 120 000 + 40 000 + 20 000 = 390 000 €.' },
      { t: 'example', h: 'Étape 2 — Résultat', c: 'Résultat = Produits − Charges = 480 000 − 390 000 = **90 000 €** → bénéfice.' },
      { t: 'p', c: '**Étape 3 — Commentaire.** L’entreprise est **bénéficiaire** : son activité couvre largement ses coûts. Les salaires (120 000 €) représentent le premier poste après les achats : c’est cohérent pour une entreprise de main-d’œuvre. La dotation aux amortissements (20 000 €) est une charge **non décaissée** : le bénéfice réel en trésorerie est donc supérieur au résultat comptable.' },
      { t: 'tip', h: 'Méthode d’une question de gestion au bac', c: '1) **Lire la question** et repérer ce qu’on demande (un calcul ? un commentaire ?). 2) **Extraire les données** utiles du document. 3) **Poser la formule** puis calculer avec l’**unité**. 4) **Interpréter** : le chiffre est-il bon ou mauvais, et pourquoi ? 5) **Proposer** une décision ou une piste d’amélioration.' },
      { t: 'warning', h: 'Erreurs qui coûtent des points', c: 'Oublier l’unité (€, %), confondre HT et TTC, oublier une charge dans le total, ou donner un résultat sans le **commenter**. Un chiffre juste mais non interprété ne rapporte que la moitié des points.' },
    ]),
  ],

  // ---- Thème 2 — Analyser la situation de l'entreprise --------------
  'gf-t2': [
    S('🏛️ Le bilan fonctionnel : reclasser pour analyser', [
      { t: 'p', c: 'Le bilan comptable classe les postes par **nature juridique**. Pour **analyser la santé financière**, on le réorganise en **bilan fonctionnel**, qui regroupe les postes par **fonction** : investir, financer, exploiter. L’idée est de vérifier une règle d’or : les emplois **durables** doivent être financés par des ressources **durables**.' },
      { t: 'table', head: ['Emplois (actif)', 'Ressources (passif)'], rows: [
        ['Emplois stables (immobilisations brutes)', 'Ressources stables (capitaux propres + amortissements + dettes financières)'],
        ['Actif circulant d’exploitation (stocks, créances clients)', 'Passif circulant d’exploitation (dettes fournisseurs, dettes fiscales)'],
        ['Trésorerie active (banque, caisse)', 'Trésorerie passive (découverts)'],
      ] },
      { t: 'p', c: 'On raisonne en **valeurs brutes** (avant amortissement) à l’actif, et l’on **ajoute les amortissements aux ressources stables** au passif : les amortissements sont en effet de l’argent « gardé » dans l’entreprise pour renouveler ses machines. C’est une ressource de financement interne.' },
      { t: 'tip', h: 'Logique à retenir', c: 'Haut du bilan = **long terme** (investissement + financement stable). Bas du bilan = **court terme** (exploitation quotidienne + trésorerie). L’équilibre financier se lit dans le rapport entre les deux.' },
    ]),
    S('⚖️ FRNG, BFR et Trésorerie : les trois piliers', [
      { t: 'p', c: 'Trois indicateurs, reliés entre eux, résument l’équilibre financier. Le **Fonds de Roulement Net Global (FRNG)** mesure le « matelas » de sécurité : l’excédent des ressources stables sur les emplois stables. Un FRNG **positif** signifie que le financement durable couvre les investissements et laisse même de quoi financer l’exploitation.' },
      { t: 'formula', c: 'FRNG = Ressources stables − Emplois stables' },
      { t: 'p', c: 'Le **Besoin en Fonds de Roulement (BFR)** mesure l’argent immobilisé par le **cycle d’exploitation** : l’entreprise paie ses fournisseurs et stocke **avant** d’être payée par ses clients. Ce décalage crée un besoin d’argent permanent.' },
      { t: 'formula', c: 'BFR = (Stocks + Créances clients) − Dettes fournisseurs' },
      { t: 'p', c: 'La **Trésorerie nette (TN)** est ce qui reste réellement disponible. Elle se calcule de deux façons, qui donnent le même résultat — c’est un excellent moyen de vérification.' },
      { t: 'formula', c: 'Trésorerie nette = FRNG − BFR = Trésorerie active − Trésorerie passive' },
      { t: 'tip', h: 'Le sens de la relation', c: 'Le FRNG (ressource stable) doit financer le BFR (besoin permanent). S’il y parvient, la trésorerie est positive. Sinon, l’entreprise doit combler le manque par des découverts coûteux.' },
    ]),
    S('💧 Rentable mais sans trésorerie : le paradoxe', [
      { t: 'p', c: 'Une entreprise peut être **rentable** (dégager un bénéfice) et pourtant **manquer d’argent** en caisse. C’est le cas le plus dangereux pour une jeune entreprise en croissance. La cause : un **BFR** qui gonfle plus vite que le FRNG.' },
      { t: 'example', h: 'Scénario', c: 'Une entreprise vend beaucoup, donc ses **stocks** et ses **créances clients** augmentent (clients qui paient à 60 jours). Elle doit acheter et produire **avant** d’encaisser : son BFR explose. Résultat : bénéfice au compte de résultat, mais trésorerie négative.' },
      { t: 'list', c: [
        '**Réduire les stocks** : produire au plus juste, éviter le sur-stockage.',
        '**Raccourcir le délai de paiement des clients** : facturer vite, relancer, proposer un escompte pour paiement comptant.',
        '**Allonger le délai fournisseurs** : négocier des paiements à 60 jours plutôt qu’à 30.',
        '**Renforcer le FRNG** : augmenter le capital, obtenir un emprunt long terme.',
      ] },
      { t: 'warning', h: 'Message clé', c: 'Le résultat mesure la **performance** ; la trésorerie mesure la **survie**. On peut mourir de croissance : « profit is an opinion, cash is a fact ».' },
    ]),
    S('📐 Les ratios financiers', [
      { t: 'p', c: 'Un **ratio** rapproche deux grandeurs pour rendre un chiffre **interprétable** et **comparable** (dans le temps, ou face à un concurrent). On distingue les ratios de **structure** (solidité), de **rotation** (rapidité du cycle) et de **rentabilité** (efficacité).' },
      { t: 'table', head: ['Ratio', 'Formule', 'Ce qu’il mesure'], rows: [
        ['Autonomie financière', 'Capitaux propres ÷ Total passif', 'Indépendance vis-à-vis des banques'],
        ['Taux d’endettement', 'Dettes financières ÷ Capitaux propres', 'Poids des dettes (idéal < 1)'],
        ['Rotation des stocks', 'Stock moyen ÷ Achats × 360', 'Durée de stockage (en jours)'],
        ['Délai clients', 'Créances ÷ CA TTC × 360', 'Délai moyen de paiement des clients'],
        ['Rentabilité commerciale', 'Résultat ÷ CA × 100', 'Marge nette (%)'],
      ] },
      { t: 'p', c: 'Un ratio n’a de sens que **comparé** : un délai clients de 45 jours est bon dans le BTP, mauvais dans la restauration (où l’on est payé comptant). Toujours situer le chiffre dans son **contexte sectoriel** et dans son **évolution**.' },
      { t: 'example', h: 'Interprétation', c: 'Taux d’endettement = 1,8 → l’entreprise doit 1,80 € pour chaque euro de capitaux propres : elle est **très dépendante** des banques, sa marge de manœuvre est faible et elle sera fragile en cas de hausse des taux.' },
      { t: 'tip', h: 'Au bac', c: 'On ne demande jamais un ratio « pour le calcul » : on demande de **conclure**. Structure : « Le ratio vaut X. Cela signifie que… C’est donc (bon/inquiétant) car… ».' },
    ]),
    S('🧮 Étude de cas guidée — équilibre financier', [
      { t: 'p', c: '**Énoncé.** Bilan fonctionnel simplifié (en k€) : Emplois stables 300 ; Ressources stables 360 ; Stocks 40 ; Créances clients 70 ; Dettes fournisseurs 50 ; Trésorerie active 0 ; Découvert 0. Analyser l’équilibre financier.' },
      { t: 'example', h: 'Étape 1 — FRNG', c: 'FRNG = Ressources stables − Emplois stables = 360 − 300 = **60 k€** (positif : bon signe).' },
      { t: 'example', h: 'Étape 2 — BFR', c: 'BFR = (Stocks + Créances) − Dettes fournisseurs = (40 + 70) − 50 = **60 k€**.' },
      { t: 'example', h: 'Étape 3 — Trésorerie nette', c: 'TN = FRNG − BFR = 60 − 60 = **0 k€**.' },
      { t: 'p', c: '**Commentaire.** Le FRNG est positif : le financement stable couvre les investissements. Mais il est **entièrement absorbé** par le BFR : la trésorerie est nulle, l’entreprise est « sur le fil ». Le moindre retard d’un gros client la ferait basculer en découvert. **Recommandation** : réduire le BFR (relancer les clients, alléger les stocks) ou renforcer le FRNG (emprunt long terme).' },
      { t: 'tip', h: 'Méthode', c: 'Toujours dans l’ordre : FRNG, puis BFR, puis TN — et **vérifier** avec TN = FRNG − BFR. Terminer par une **phrase de diagnostic** et une **recommandation** concrète.' },
    ]),
  ],

  // ---- Thème 3 — Accompagner la prise de décision -------------------
  'gf-t3': [
    S('🔀 Charges fixes et charges variables', [
      { t: 'p', c: 'Pour décider (baisser un prix ? accepter une commande ? ouvrir le samedi ?), on ne raisonne plus par nature de charge, mais selon leur **comportement face à l’activité**. On distingue deux familles.' },
      { t: 'list', c: [
        '**Charges variables** : elles **varient proportionnellement** au volume produit ou vendu (matières premières, marchandises, commissions sur ventes). Plus on produit, plus elles augmentent ; à zéro production, elles sont nulles.',
        '**Charges fixes** (ou de structure) : elles **restent stables** quel que soit le volume, dans une certaine limite (loyer, salaires fixes, assurances, amortissements). Il faut les payer même sans vendre.',
      ] },
      { t: 'table', head: ['Type', 'Si l’activité double', 'Exemples'], rows: [
        ['Variables', 'Elles doublent', 'Matières, marchandises, énergie machine'],
        ['Fixes', 'Elles ne bougent pas', 'Loyer, assurance, salaire du gérant'],
      ] },
      { t: 'warning', h: 'Attention', c: 'Une charge fixe est fixe **par période**, pas « par unité » : ramenée à une unité, elle **diminue** quand on produit plus (on répartit le loyer sur davantage de produits). C’est tout l’intérêt de produire en volume : diluer les charges fixes.' },
    ]),
    S('📈 Marge sur coût variable et taux de marge', [
      { t: 'p', c: 'La **marge sur coût variable (MCV)** est ce qui reste du chiffre d’affaires **après avoir payé les charges variables**. C’est la contribution de chaque vente à la couverture des charges fixes… puis au bénéfice.' },
      { t: 'formula', c: 'Marge sur coût variable = Chiffre d’affaires − Charges variables' },
      { t: 'p', c: 'Le **taux de marge sur coût variable** exprime cette marge en pourcentage du chiffre d’affaires. Il est stable tant que la structure des coûts ne change pas — ce qui le rend très pratique pour les prévisions.' },
      { t: 'formula', c: 'Taux de MCV = (Marge sur coût variable ÷ Chiffre d’affaires) × 100' },
      { t: 'example', h: 'Exemple', c: 'CA = 200 000 € ; charges variables = 120 000 €.\nMCV = 200 000 − 120 000 = 80 000 €.\nTaux de MCV = 80 000 ÷ 200 000 × 100 = **40 %**.\nInterprétation : chaque 100 € vendu dégage 40 € pour couvrir les charges fixes puis faire du bénéfice.' },
      { t: 'formula', c: 'Résultat = Marge sur coût variable − Charges fixes' },
      { t: 'tip', h: 'Vision « décision »', c: 'La MCV répond à : « cette vente supplémentaire rapporte-t-elle quelque chose ? ». Tant que le prix couvre le **coût variable**, la vente **contribue** aux charges fixes — même si, comptablement, elle semble peu rentable.' },
    ]),
    S('🎯 Le seuil de rentabilité et le point mort', [
      { t: 'p', c: 'Le **seuil de rentabilité (SR)** est le chiffre d’affaires **minimum** à réaliser pour que le résultat soit **nul** : ni bénéfice, ni perte. En dessous, l’entreprise perd de l’argent ; au-dessus, elle en gagne. C’est **le** repère de décision.' },
      { t: 'p', c: 'Au seuil, la marge sur coût variable couvre **exactement** les charges fixes. On en déduit sa formule à partir du taux de MCV.' },
      { t: 'formula', c: 'Seuil de rentabilité = Charges fixes ÷ Taux de marge sur coût variable' },
      { t: 'example', h: 'Calcul', c: 'Charges fixes = 60 000 € ; taux de MCV = 40 % (= 0,40).\nSR = 60 000 ÷ 0,40 = **150 000 €** de chiffre d’affaires.\nVérification : MCV au seuil = 150 000 × 0,40 = 60 000 € = charges fixes → résultat nul. ✓' },
      { t: 'p', c: 'Le **point mort** est la même idée exprimée **en temps** : à quelle **date** de l’année le seuil est-il atteint ? On suppose une activité régulière sur 360 (ou 12 mois).' },
      { t: 'formula', c: 'Point mort = (Seuil de rentabilité ÷ Chiffre d’affaires annuel) × 360' },
      { t: 'example', h: 'Point mort', c: 'CA annuel = 200 000 € ; SR = 150 000 €.\nPoint mort = 150 000 ÷ 200 000 × 360 = 270 jours ≈ **fin septembre**.\nL’entreprise couvre ses coûts fin septembre ; le bénéfice se fait sur le dernier trimestre.' },
      { t: 'warning', h: 'Piège', c: 'Le seuil se calcule avec le **taux** de MCV, pas avec la MCV en euros. Diviser les charges fixes par la marge en euros donne un **nombre d’unités**, pas un chiffre d’affaires — deux résultats différents à ne pas confondre.' },
    ]),
    S('🧩 Coûts complets ou coûts partiels ?', [
      { t: 'p', c: 'Selon la décision, on choisit une **méthode de calcul de coûts** différente. Il n’existe pas de « bon » coût universel : le coût pertinent dépend de la question posée.' },
      { t: 'list', c: [
        '**Coût complet** : on répartit **toutes** les charges (variables ET fixes) sur les produits. Utile pour **fixer un prix de vente** durable et vérifier qu’un produit est globalement rentable.',
        '**Coût partiel (coût variable)** : on ne retient que les charges **variables**. Utile pour une **décision ponctuelle** : accepter une commande exceptionnelle, un prix promotionnel, sous-traiter.',
      ] },
      { t: 'example', h: 'Décision d’une commande exceptionnelle', c: 'Une commande est proposée à 18 €/unité. Coût complet = 22 €, coût variable = 15 €. Faut-il refuser ? Non : à 18 €, chaque unité dégage 18 − 15 = **3 € de marge** qui couvrent les charges fixes déjà payées. Tant que la structure n’est pas saturée, **accepter** améliore le résultat.' },
      { t: 'warning', h: 'Nuance', c: 'Ce raisonnement vaut pour une commande **ponctuelle**. Vendre **durablement** en dessous du coût complet finirait par ne plus couvrir les charges fixes : l’entreprise y perdrait.' },
      { t: 'tip', h: 'Réflexe', c: 'Décision de long terme ou fixation d’un tarif → **coût complet**. Décision ponctuelle « en plus » → **coût variable** et raisonnement à la marge.' },
    ]),
    S('🧮 Étude de cas guidée — food-truck', [
      { t: 'p', c: '**Énoncé.** Un food-truck vend des burgers à 8 € l’unité. Coût variable unitaire = 3 € (pain, viande, sauce, emballage). Charges fixes mensuelles = 4 000 € (location, salaire, assurance). Questions : marge unitaire, seuil en nombre de burgers, et burgers à vendre pour 2 000 € de bénéfice.' },
      { t: 'example', h: 'Étape 1 — Marge sur coût variable unitaire', c: 'MCV unitaire = 8 − 3 = **5 € par burger**.' },
      { t: 'example', h: 'Étape 2 — Seuil de rentabilité (en quantité)', c: 'Q seuil = Charges fixes ÷ MCV unitaire = 4 000 ÷ 5 = **800 burgers/mois**.\nSoit environ 27 burgers par jour ouvré.' },
      { t: 'example', h: 'Étape 3 — Objectif de bénéfice', c: 'Q = (Charges fixes + Bénéfice visé) ÷ MCV unitaire = (4 000 + 2 000) ÷ 5 = **1 200 burgers**.' },
      { t: 'p', c: '**Commentaire.** Il faut vendre 800 burgers rien que pour ne pas perdre d’argent, et 1 200 pour gagner 2 000 €. **Leviers** : augmenter le prix (mais risque sur la demande), baisser le coût variable (négocier les achats), ou augmenter le volume (emplacement, communication). Baisser les charges fixes (loyer) ferait aussi chuter le seuil.' },
      { t: 'tip', h: 'Méthode « seuil en quantité »', c: 'Quand l’énoncé donne un **prix et un coût unitaires**, raisonner en **quantités** avec la MCV **unitaire**. Quand il donne des **totaux annuels**, raisonner en **euros** avec le **taux** de MCV.' },
    ]),
  ],

  // #####################################################################
  // MANAGEMENT (Terminale STMG)
  // #####################################################################

  // ---- Thème 1 — Les organisations et l'activité de production ------
  'mgmt-t1': [
    S('🏢 Qu’est-ce qu’une organisation ? Les trois types', [
      { t: 'p', c: 'Une **organisation** est un ensemble de personnes qui **coordonnent** leurs actions pour atteindre des **buts communs**, en partageant des moyens et en se répartissant les tâches. Toute organisation se caractérise par : un **but** (sa raison d’être), des **ressources** (humaines, matérielles, financières), une **structure** (qui fait quoi) et une **nationalité/champ d’action**.' },
      { t: 'table', head: ['Type', 'Finalité principale', 'Ressources', 'Exemples'], rows: [
        ['Entreprise privée', 'Réaliser un profit (finalité lucrative)', 'Ventes, capitaux privés', 'Decathlon, une boulangerie'],
        ['Organisation publique', 'Servir l’intérêt général', 'Impôts, redevances', 'Hôpital, mairie, Pôle emploi'],
        ['OSBL / association', 'Servir une cause (non lucratif)', 'Cotisations, dons, subventions, bénévolat', 'Restos du Cœur, un club sportif'],
      ] },
      { t: 'p', c: 'La **finalité** est le but ultime, durable, qui justifie l’existence de l’organisation. Pour l’entreprise privée, c’est le **profit** (nécessaire à sa survie et à sa croissance), mais rarement le **seul** but : s’y ajoutent des finalités sociales et sociétales (emploi, bien-être, environnement).' },
      { t: 'tip', h: 'Caractériser une organisation', c: 'Toujours par : **type** (privée/publique/OSBL) · **finalité** · **taille** (TPE, PME, ETI, grande entreprise) · **champ d’action** (local, national, international) · **ressources** · **statut juridique**.' },
    ]),
    S('⚙️ Management stratégique et management opérationnel', [
      { t: 'p', c: 'Manager, c’est **conduire** une organisation vers ses buts en mobilisant ses ressources. On distingue deux niveaux, complémentaires, qui n’engagent ni les mêmes personnes ni le même horizon de temps.' },
      { t: 'table', head: ['Critère', 'Management stratégique', 'Management opérationnel'], rows: [
        ['Horizon', 'Long terme (années)', 'Court terme (jour, mois)'],
        ['Qui', 'Dirigeants, direction générale', 'Encadrement intermédiaire, chefs d’équipe'],
        ['Portée', 'Engage toute l’organisation', 'Limitée à un service, une unité'],
        ['Réversibilité', 'Décisions difficiles à corriger', 'Décisions ajustables rapidement'],
        ['Exemple', 'Se lancer à l’international', 'Organiser les plannings de la semaine'],
      ] },
      { t: 'p', c: 'Le stratégique **fixe le cap** (quels marchés, quels produits, quelle croissance), l’opérationnel **tient la barre au quotidien** (gérer les stocks, animer les équipes, respecter les délais). Une bonne stratégie mal exécutée échoue ; une exécution parfaite sans cap se disperse. Les deux niveaux doivent être **cohérents**.' },
      { t: 'tip', h: 'Repère bac', c: 'Décision **rare, coûteuse, engageante, prise par les dirigeants** = stratégique. Décision **fréquente, quotidienne, réversible, prise par l’encadrement** = opérationnelle.' },
    ]),
    S('🎯 Finalité, performance et parties prenantes', [
      { t: 'p', c: 'La **performance** mesure l’atteinte des buts. Elle a deux visages complémentaires qu’il ne faut jamais confondre : l’**efficacité** (atteindre l’objectif) et l’**efficience** (l’atteindre en économisant les ressources).' },
      { t: 'list', c: [
        '**Efficacité** = atteindre le résultat visé. « Ai-je atteint mon objectif de ventes ? »',
        '**Efficience** = atteindre ce résultat au **moindre coût**. « L’ai-je fait sans gaspiller ? »',
        '**Performance globale** = efficacité + efficience, sur les plans **économique, social et environnemental**.',
      ] },
      { t: 'p', c: 'La performance ne se réduit pas au chiffre d’affaires. On distingue la performance **commerciale** (parts de marché, satisfaction client), **financière** (rentabilité), **sociale** (climat, turn-over, sécurité) et **sociétale/environnementale** (impact sur la société et la planète).' },
      { t: 'p', c: 'Les **parties prenantes** sont tous les acteurs qui **influencent** l’organisation ou sont **affectés** par elle : salariés, clients, fournisseurs, actionnaires, État, riverains, ONG. Elles ont des **attentes parfois contradictoires** (l’actionnaire veut du dividende, le salarié un meilleur salaire) : le manager doit **arbitrer**.' },
      { t: 'tip', h: 'À retenir', c: 'Un même résultat peut être efficace **sans** être efficient (objectif atteint mais en gaspillant). Au bac, distinguer les deux rapporte des points faciles.' },
    ]),
    S('🏭 Produire : facteurs et combinaison productive', [
      { t: 'p', c: 'Produire, c’est combiner des **facteurs de production** pour créer un bien ou un service qui a de la **valeur**. On en distingue traditionnellement deux, auxquels s’ajoutent des ressources immatérielles devenues décisives.' },
      { t: 'list', c: [
        '**Travail** : la main-d’œuvre, ses compétences et son organisation.',
        '**Capital technique** : les machines, bâtiments, outils, logiciels (le capital fixe) et les consommations (le capital circulant).',
        '**Ressources immatérielles** : savoir-faire, brevets, image de marque, données — souvent le vrai avantage aujourd’hui.',
      ] },
      { t: 'p', c: 'La **combinaison productive** est le dosage choisi entre ces facteurs. Une entreprise peut être **intensive en travail** (artisanat) ou **intensive en capital** (usine automatisée). Le choix dépend du coût relatif des facteurs et de la technologie disponible.' },
      { t: 'p', c: 'La **productivité** mesure l’efficience de la production : la richesse créée par unité de facteur utilisé. L’améliorer (par la formation, la mécanisation, une meilleure organisation) permet de produire plus avec autant — c’est un moteur de compétitivité.' },
      { t: 'formula', c: 'Productivité du travail = Production ÷ Nombre d’heures travaillées' },
      { t: 'tip', h: 'Lien avec la performance', c: 'Gagner en productivité, c’est gagner en **efficience** : c’est pourquoi les entreprises investissent (machines, numérique) et forment leurs salariés.' },
    ]),
    S('💼 Étude de cas guidée — caractériser et diagnostiquer', [
      { t: 'p', c: '**Énoncé.** « *Les Restos du Cœur* distribuent des repas aux plus démunis grâce à 70 000 bénévoles, financés par des dons et des subventions. » Caractérisez l’organisation, puis identifiez sa finalité et une partie prenante clé.' },
      { t: 'example', h: 'Étape 1 — Type', c: 'Association loi 1901 → **organisation à but non lucratif (OSBL)**.' },
      { t: 'example', h: 'Étape 2 — Finalité', c: 'Finalité **sociale / d’intérêt général** : aider les personnes en difficulté. Aucune recherche de profit.' },
      { t: 'example', h: 'Étape 3 — Ressources et parties prenantes', c: 'Ressources : **dons, subventions, bénévolat** (ressource humaine gratuite). Partie prenante clé : les **bénévoles**, sans qui l’activité s’arrête ; mais aussi les **donateurs** et l’**État** (subventions).' },
      { t: 'p', c: '**Commentaire.** La performance ne se mesure pas ici en profit, mais en **nombre de repas distribués** et en **efficience** (coût par repas). Le principal risque de gestion est la **dépendance** aux dons et à la disponibilité des bénévoles.' },
      { t: 'tip', h: 'Méthode', c: 'Pour toute étude de cas de management : 1) **identifier** l’organisation (type, finalité), 2) **repérer** le problème de management, 3) **mobiliser** une notion du cours, 4) **conclure** par une recommandation argumentée.' },
    ]),
  ],

  // ---- Thème 2 — Les organisations et les acteurs -------------------
  'mgmt-t2': [
    S('🔍 Le diagnostic stratégique : SWOT, PESTEL', [
      { t: 'p', c: 'Avant toute décision stratégique, l’organisation réalise un **diagnostic** : un état des lieux honnête de sa situation. Il croise un regard **interne** (l’entreprise elle-même) et un regard **externe** (son environnement). L’outil de synthèse est la matrice **SWOT** (FFOM en français).' },
      { t: 'table', head: ['', 'Positif', 'Négatif'], rows: [
        ['Interne', 'Forces (Strengths)', 'Faiblesses (Weaknesses)'],
        ['Externe', 'Opportunités (Opportunities)', 'Menaces (Threats)'],
      ] },
      { t: 'p', c: 'Le **diagnostic interne** inventorie les **ressources** (financières, humaines, techniques) et les **compétences** de l’organisation : que sait-elle faire mieux que les autres ? Le **diagnostic externe** analyse le marché et le macro-environnement, souvent avec l’outil **PESTEL**.' },
      { t: 'list', c: [
        '**P**olitique · **É**conomique · **S**ocioculturel · **T**echnologique · **E**nvironnemental · **L**égal.',
        'Il aide à repérer les **opportunités** (une nouvelle technologie, une tendance de consommation) et les **menaces** (une loi, une crise, un concurrent).',
      ] },
      { t: 'tip', h: 'Bien classer', c: 'Forces/faiblesses = **ce que l’entreprise maîtrise** (interne). Opportunités/menaces = **ce qui vient de dehors** (externe, subi). Confondre les deux est l’erreur la plus fréquente.' },
    ]),
    S('♟️ Les grandes stratégies', [
      { t: 'p', c: 'À partir du diagnostic, l’organisation choisit une **stratégie** : une orientation de long terme pour construire un **avantage concurrentiel** durable. Michael **Porter** a formalisé deux grandes stratégies « génériques ».' },
      { t: 'list', c: [
        '**Domination par les coûts** : proposer le prix le plus bas grâce à des coûts maîtrisés (volumes, productivité). Exemples : Lidl, Ryanair. Risque : la guerre des prix.',
        '**Différenciation** : proposer une offre **perçue comme unique** (qualité, image, innovation, service) que le client paie plus cher. Exemples : Apple, un restaurant étoilé. Risque : l’imitation.',
      ] },
      { t: 'p', c: 'À ces stratégies concurrentielles s’ajoutent des choix de **périmètre** : la **spécialisation** (se concentrer sur un seul métier, un seul marché) ou la **diversification** (se développer sur de nouveaux produits/marchés pour répartir les risques).' },
      { t: 'table', head: ['Choix', 'Avantage', 'Risque'], rows: [
        ['Spécialisation', 'Expertise, image forte', 'Tout repose sur un seul marché'],
        ['Diversification', 'Répartition des risques', 'Dispersion, perte de cohérence'],
        ['Intégration', 'Maîtriser la filière (amont/aval)', 'Lourdeur, coûts fixes'],
        ['Externalisation', 'Se recentrer, réduire les coûts', 'Dépendance aux sous-traitants'],
      ] },
      { t: 'warning', h: 'Piège', c: 'Vouloir « le prix le plus bas ET le plus haut de gamme » est en général intenable : c’est l’« enlisement dans la voie médiane » dénoncé par Porter. Il faut **choisir**.' },
    ]),
    S('👥 Décision, acteurs et pouvoir', [
      { t: 'p', c: 'Une décision engage des **acteurs** aux intérêts variés. Le **pouvoir** est la capacité d’un acteur à influencer les décisions. Il peut venir de la hiérarchie (pouvoir formel), mais aussi de l’expertise, du contrôle d’une information ou d’une ressource rare (pouvoir informel).' },
      { t: 'p', c: 'Le **style de direction** décrit la manière dont le dirigeant exerce ce pouvoir. Rensis **Likert** en a distingué quatre.' },
      { t: 'table', head: ['Style', 'Caractéristique'], rows: [
        ['Autoritaire', 'Décide seul, impose, ne consulte pas'],
        ['Paternaliste', 'Décide seul mais récompense la fidélité'],
        ['Consultatif', 'Demande l’avis avant de décider'],
        ['Participatif', 'Associe les équipes à la décision'],
      ] },
      { t: 'p', c: 'La décision est rarement parfaitement **rationnelle** : Herbert **Simon** parle de **rationalité limitée** — le décideur manque de temps, d’information et de capacités de calcul, et se contente d’une solution **satisfaisante** plutôt qu’optimale.' },
      { t: 'tip', h: 'À mobiliser', c: 'Face à un cas, relier le **style de direction** au **contexte** : l’autoritaire va vite en situation de crise ; le participatif mobilise et innove mais prend du temps.' },
    ]),
    S('💡 Construire un avantage concurrentiel durable', [
      { t: 'p', c: 'L’**avantage concurrentiel** est ce qui permet à une organisation de **surpasser durablement** ses rivales : soit un coût plus bas, soit une valeur supérieure perçue par le client. Pour être **durable**, il doit être difficile à imiter.' },
      { t: 'p', c: 'L’approche par les **ressources et compétences** explique qu’un avantage solide repose souvent sur des ressources **rares, précieuses, difficiles à copier et non substituables** : un savoir-faire unique, une marque puissante, un réseau, des données. Ce sont les **compétences distinctives**.' },
      { t: 'example', h: 'Illustration — Netflix vs Blockbuster', c: 'Blockbuster louait des DVD en magasin. Netflix a bâti un avantage sur le **streaming** et surtout sur ses **données** (algorithme de recommandation) et sa production propre. Blockbuster, prisonnier de son modèle de magasins (coûts fixes), n’a pas su se réinventer : il a disparu.' },
      { t: 'p', c: 'Un avantage n’est jamais **définitif** : les concurrents imitent, les technologies changent. L’organisation doit donc **innover en continu** et surveiller son environnement pour renouveler son avantage.' },
      { t: 'tip', h: 'Réflexe', c: 'Pour repérer un avantage concurrentiel : « Qu’est-ce que cette entreprise fait que les autres ne peuvent pas facilement copier ? »' },
    ]),
    S('💼 Étude de cas guidée — diagnostic et stratégie', [
      { t: 'p', c: '**Énoncé.** Une chaîne de cafés de spécialité connaît un fort succès (produits premium, clientèle fidèle) mais fait face à l’arrivée de grands groupes et à la hausse du prix du café. Réalisez un mini-SWOT et recommandez une stratégie.' },
      { t: 'example', h: 'Étape 1 — SWOT', c: 'Forces : qualité, image premium, clientèle fidèle. Faiblesses : coûts élevés, dépendance à un produit. Opportunités : engouement pour le « bien consommer ». Menaces : concurrence des grands groupes, flambée du prix des matières.' },
      { t: 'example', h: 'Étape 2 — Choix stratégique', c: 'La force est la **différenciation** (qualité, expérience). Se lancer dans une guerre des prix contre les grands groupes serait perdant. → Consolider la **différenciation** (traçabilité, service, ambiance).' },
      { t: 'p', c: '**Étape 3 — Recommandation argumentée.** Renforcer l’avantage difficile à imiter (relation client, origine du café), fidéliser (programme, communauté), et sécuriser l’approvisionnement (contrats longs avec les producteurs) face à la menace sur les prix. La spécialisation est cohérente avec l’image, mais impose de bien maîtriser le **risque de mono-produit**.' },
      { t: 'tip', h: 'Méthode', c: 'Toujours **relier** la stratégie recommandée aux forces du diagnostic. Une reco « hors-sol », non justifiée par le SWOT, ne rapporte pas de points.' },
    ]),
  ],

  // ---- Thème 3 — Les organisations et la société --------------------
  'mgmt-t3': [
    S('🌍 La RSE et le développement durable', [
      { t: 'p', c: 'La **Responsabilité Sociétale des Entreprises (RSE)** est l’intégration **volontaire** par l’organisation des préoccupations **sociales, environnementales et éthiques** dans son activité et ses relations avec ses parties prenantes. C’est l’application du **développement durable** à l’entreprise.' },
      { t: 'p', c: 'Le développement durable repose sur **trois piliers** qu’il faut concilier — c’est tout l’enjeu et toute la difficulté.' },
      { t: 'table', head: ['Pilier', 'Question posée'], rows: [
        ['Économique', 'L’activité est-elle viable et rentable ?'],
        ['Social', 'Est-elle juste pour les salariés et la société ?'],
        ['Environnemental', 'Préserve-t-elle la planète pour l’avenir ?'],
      ] },
      { t: 'p', c: 'La RSE dépasse le cadre légal : respecter la loi n’est pas de la RSE, c’est une obligation. La RSE commence là où l’entreprise fait **plus** que ce que la loi exige (réduire ses émissions au-delà des seuils, améliorer les conditions de travail, s’approvisionner de façon responsable).' },
      { t: 'tip', h: 'Lien avec la performance', c: 'La RSE nourrit la **performance globale** : image, fidélité des clients et des salariés, réduction des risques. Elle peut donc être un **avantage concurrentiel**, pas seulement un coût.' },
    ]),
    S('🤝 Les parties prenantes et leurs attentes', [
      { t: 'p', c: 'Une organisation est au centre d’un réseau de **parties prenantes** dont les attentes sont souvent **divergentes**. Les concilier est un exercice permanent d’arbitrage.' },
      { t: 'table', head: ['Partie prenante', 'Attente principale'], rows: [
        ['Actionnaires', 'Rentabilité, dividendes, valeur'],
        ['Salariés', 'Salaire, conditions de travail, sécurité de l’emploi'],
        ['Clients', 'Qualité, prix juste, service'],
        ['Fournisseurs', 'Paiement à temps, relation durable'],
        ['État / collectivités', 'Impôts, respect des lois, emploi local'],
        ['Riverains / ONG', 'Respect de l’environnement, transparence'],
      ] },
      { t: 'p', c: 'On distingue les parties prenantes **internes** (salariés, dirigeants, actionnaires) et **externes** (clients, fournisseurs, État, société civile). Un bon management **hiérarchise** les attentes selon leur **pouvoir** et leur **importance**, sans négliger celles qui semblent faibles mais peuvent nuire à la réputation (ONG, riverains).' },
      { t: 'example', h: 'Conflit d’attentes', c: 'Fermer une usine pour restaurer la rentabilité (attente des actionnaires) détruit des emplois (attente des salariés et de la collectivité). Le manager doit **arbitrer** et assumer un choix, souvent en cherchant un compromis (reclassement, plan social).' },
      { t: 'tip', h: 'À retenir', c: 'La RSE, c’est précisément prendre au sérieux les attentes de **toutes** les parties prenantes, pas seulement celles des actionnaires.' },
    ]),
    S('⚖️ Éthique, gouvernance et valeur partagée', [
      { t: 'p', c: 'L’**éthique** des affaires désigne les principes moraux qui guident les décisions au-delà de la loi : honnêteté, respect, responsabilité. Une **charte éthique** formalise ces engagements. Le manquement (corruption, greenwashing, conditions de travail indignes) expose à un lourd risque de **réputation**.' },
      { t: 'p', c: 'La **gouvernance** désigne l’ensemble des mécanismes qui encadrent la direction de l’organisation : qui décide, qui contrôle, au nom de qui ? Une bonne gouvernance vise à **équilibrer les pouvoirs** (conseil d’administration, assemblée des actionnaires, comités) et à rendre des comptes de façon **transparente**.' },
      { t: 'p', c: 'La **création de valeur partagée** (Porter et Kramer) affirme que l’entreprise peut être **rentable ET utile à la société** en même temps : en résolvant un problème social ou environnemental, elle crée de nouveaux marchés et réduit ses risques. La RSE n’est alors plus un coût mais une **source de valeur**.' },
      { t: 'example', h: 'Illustration', c: 'Une entreprise qui aide ses fournisseurs agricoles à mieux produire améliore la **qualité** de sa matière première (valeur pour elle) tout en augmentant les **revenus** des producteurs (valeur pour la société) : c’est de la valeur partagée.' },
      { t: 'tip', h: 'Nuance à connaître', c: 'Le **greenwashing** (écoblanchiment) est l’inverse de la RSE sincère : communiquer sur des engagements verts sans les tenir. C’est un risque **éthique et réputationnel** majeur.' },
    ]),
    S('🌱 Mutations : numérique, écologie, société', [
      { t: 'p', c: 'Les organisations font face à des **mutations** profondes qui bousculent leurs modèles. Les anticiper est un enjeu stratégique majeur ; les subir peut être fatal.' },
      { t: 'list', c: [
        '**Transition numérique** : automatisation, données, IA, plateformes. Elle transforme les métiers, les relations client et parfois le modèle économique entier.',
        '**Transition écologique** : réglementations, attentes des consommateurs, raréfaction des ressources. Elle impose de repenser la production (économie circulaire, sobriété).',
        '**Mutations sociales** : quête de sens au travail, télétravail, exigences de diversité et d’inclusion.',
      ] },
      { t: 'p', c: 'Face à ces mutations, l’organisation doit faire preuve d’**agilité** : capacité à s’adapter rapidement, à innover et à faire évoluer sa structure. Les organisations trop rigides (fortes hiérarchies, procédures lourdes) résistent mal au changement.' },
      { t: 'example', h: 'Illustration — Patagonia', c: 'La marque a fait de la protection de l’environnement le cœur de sa stratégie (produits durables, réparation, engagement du fondateur à « donner » l’entreprise à la cause climatique). L’écologie devient un **avantage concurrentiel** et une preuve de RSE sincère.' },
      { t: 'tip', h: 'Réflexe bac', c: 'Une mutation est à la fois une **menace** (pour qui la subit) et une **opportunité** (pour qui l’anticipe). Toujours montrer les deux faces.' },
    ]),
    S('💼 Étude de cas guidée — RSE et parties prenantes', [
      { t: 'p', c: '**Énoncé.** Une entreprise textile est accusée par une ONG de faire travailler des sous-traitants dans de mauvaises conditions. Ses ventes baissent. Analysez la situation et proposez une démarche RSE.' },
      { t: 'example', h: 'Étape 1 — Le problème', c: 'Un manquement **éthique et sociétal** (conditions de travail) devient un **risque de réputation** : l’ONG et les consommateurs (parties prenantes) sanctionnent l’entreprise par la baisse des ventes.' },
      { t: 'example', h: 'Étape 2 — Les parties prenantes en jeu', c: 'ONG (alerte), consommateurs (boycott), salariés des sous-traitants (victimes), actionnaires (baisse de valeur). Attentes contradictoires : coûts bas vs conditions dignes.' },
      { t: 'p', c: '**Étape 3 — Démarche RSE proposée.** Auditer et sélectionner les sous-traitants sur des critères sociaux, publier un **rapport RSE transparent**, obtenir un **label** (ex. commerce équitable), et communiquer honnêtement (sans greenwashing). Ces actions relèvent du **pilier social** du développement durable et visent à **restaurer la confiance** — donc, à terme, la performance commerciale.' },
      { t: 'tip', h: 'Méthode', c: 'Relier systématiquement : problème → parties prenantes concernées → notion (RSE, éthique, développement durable) → **actions concrètes** → effet attendu sur la performance globale.' },
    ]),
  ],

  // #####################################################################
  // DROIT (Terminale STMG)
  // #####################################################################

  // ---- Thème 5 — Quel est le rôle du contrat ? ---------------------
  'droit-t5': [
    S('📜 Le contrat : définition et classifications', [
      { t: 'p', c: 'Le **contrat** est un **accord de volontés** entre deux ou plusieurs personnes destiné à créer des **obligations** (article 1101 du Code civil). Dire « oui » à une offre suffit souvent à s’engager juridiquement : le contrat est la source d’obligations la plus courante de la vie économique (achat, location, travail, prêt).' },
      { t: 'p', c: 'Le droit des contrats repose sur deux grands principes hérités de la Révolution. L’**autonomie de la volonté** : on ne s’engage que parce qu’on l’a voulu. La **force obligatoire** (art. 1103) : « les contrats légalement formés tiennent lieu de loi à ceux qui les ont faits » — une fois conclu, le contrat s’impose comme une loi privée.' },
      { t: 'table', head: ['Classification', 'Un type', 'L’autre type'], rows: [
        ['Selon les obligations', 'Synallagmatique (obligations réciproques : vente)', 'Unilatéral (une seule partie s’oblige : donation)'],
        ['Selon le but', 'À titre onéreux (chacun reçoit une contrepartie)', 'À titre gratuit (sans contrepartie)'],
        ['Selon la forme', 'Consensuel (le seul accord suffit)', 'Solennel (un écrit est exigé : vente immobilière)'],
        ['Selon la négociation', 'De gré à gré (négocié)', 'D’adhésion (on accepte des clauses non négociables : abonnement)'],
      ] },
      { t: 'tip', h: 'À retenir', c: 'La plupart des contrats sont **consensuels** : ils se forment par le seul **échange des consentements**, sans écrit obligatoire. L’écrit sert alors surtout de **preuve**.' },
    ]),
    S('✅ Les conditions de validité du contrat', [
      { t: 'p', c: 'Depuis la réforme de 2016, l’article **1128** du Code civil pose **trois conditions** de validité. Si l’une manque, le contrat peut être **annulé** (nullité) : on considère qu’il n’a jamais existé, et chacun restitue ce qu’il a reçu.' },
      { t: 'list', c: [
        '**Le consentement** des parties : il doit être **libre et éclairé** (donné en connaissance de cause, sans contrainte).',
        '**La capacité** de contracter : être **majeur** et **non protégé** (les mineurs et majeurs sous tutelle/curatelle ont une capacité limitée).',
        '**Un contenu licite et certain** : l’objet du contrat doit être **possible, déterminé et conforme à la loi** et à l’ordre public (on ne peut pas vendre de la drogue ou un organe).',
      ] },
      { t: 'example', h: 'Application', c: 'Un contrat de vente d’un produit interdit à la vente est **nul** pour contenu **illicite**. Un contrat signé par un enfant de 12 ans pour un achat important est **annulable** pour incapacité.' },
      { t: 'warning', h: 'Piège fréquent', c: 'La **capacité** est la règle, l’**incapacité** l’exception. Un mineur peut valablement conclure les **actes de la vie courante** (acheter du pain, un ticket de bus) : tout n’est pas nul.' },
      { t: 'tip', h: 'Mémo', c: 'Les 3 conditions : **Consentement – Capacité – Contenu licite**. Si l’une manque → **nullité** du contrat.' },
    ]),
    S('⚠️ Les vices du consentement', [
      { t: 'p', c: 'Le consentement doit être **intègre**. S’il a été « faussé », on parle de **vice du consentement** : le contrat est alors **annulable** à la demande de la victime. Le Code civil en reconnaît trois (art. 1130 et suivants).' },
      { t: 'table', head: ['Vice', 'Définition', 'Exemple'], rows: [
        ['Erreur', 'Se tromper sur une qualité essentielle', 'Acheter une copie en croyant acheter un original'],
        ['Dol', 'Être trompé par des manœuvres de l’autre partie', 'Un vendeur cache un défaut grave (mensonge, rétention d’info)'],
        ['Violence', 'Consentir sous la contrainte (physique, morale, économique)', 'Signer sous la menace'],
      ] },
      { t: 'p', c: 'Pour entraîner la nullité, le vice doit être **déterminant** : sans lui, la victime **n’aurait pas contracté** (ou à d’autres conditions). Le **dol** est particulièrement sanctionné car il suppose une **intention de tromper** : il vicie le consentement **et** constitue une faute ouvrant droit à des dommages-intérêts.' },
      { t: 'example', h: 'Erreur vs dol', c: 'Si l’acheteur se trompe tout seul → **erreur**. Si le vendeur l’a **volontairement induit en erreur** (mensonge, dissimulation) → **dol**. Le dol est « une erreur provoquée ».' },
      { t: 'warning', h: 'Attention', c: 'Une simple **erreur sur la valeur** (avoir payé trop cher) ou sur un **motif personnel** n’est en principe pas une cause de nullité. Seule l’erreur sur une **qualité essentielle** compte.' },
    ]),
    S('🔗 Effets du contrat et sanctions de l’inexécution', [
      { t: 'p', c: 'Un contrat valablement formé produit des **effets** : il **oblige** les parties (force obligatoire) et **n’engage qu’elles** (effet relatif : il ne crée d’obligation ni ne nuit aux tiers). Les parties doivent l’exécuter **de bonne foi** (art. 1104).' },
      { t: 'p', c: 'Si une partie **n’exécute pas** son obligation (inexécution totale, partielle ou tardive), la victime dispose de plusieurs **sanctions**, qu’elle peut parfois cumuler.' },
      { t: 'list', c: [
        '**L’exécution forcée** : contraindre le débiteur à tenir son engagement.',
        '**La résolution** du contrat : l’anéantir et revenir à la situation antérieure.',
        '**La réduction du prix** : payer moins si la prestation est incomplète.',
        '**Les dommages-intérêts** : obtenir réparation du préjudice subi.',
        '**L’exception d’inexécution** : refuser d’exécuter tant que l’autre n’exécute pas.',
      ] },
      { t: 'p', c: 'Le débiteur peut s’exonérer en prouvant un cas de **force majeure** : un événement **imprévisible, irrésistible et extérieur** qui a rendu l’exécution impossible (art. 1218). Il est alors libéré sans devoir de dommages-intérêts.' },
      { t: 'tip', h: 'À retenir', c: 'Inexécution = choix de sanctions pour le créancier. Force majeure = cause d’**exonération** pour le débiteur. Ces deux notions structurent presque tous les cas pratiques sur le contrat.' },
    ]),
    S('⚖️ Cas pratique guidé — la méthode du syllogisme', [
      { t: 'p', c: '**Énoncé.** Léa achète en ligne un téléphone décrit comme « neuf, sous garantie ». À la réception, l’appareil est visiblement reconditionné et rayé. Le vendeur le savait. Léa peut-elle annuler la vente ?' },
      { t: 'p', c: 'La résolution d’un cas pratique en droit suit le **syllogisme juridique** en trois temps : la **majeure** (la règle de droit), la **mineure** (les faits), la **conclusion** (l’application).' },
      { t: 'example', h: 'Majeure — la règle', c: 'Le contrat exige un consentement **libre et éclairé** (art. 1128). Le **dol** (art. 1137) est une manœuvre ou une dissimulation volontaire d’une information déterminante par un contractant, qui provoque l’erreur de l’autre. Il rend le contrat **annulable** et ouvre droit à des dommages-intérêts.' },
      { t: 'example', h: 'Mineure — les faits', c: 'Le vendeur a décrit un appareil « neuf » alors qu’il le savait reconditionné et abîmé : il a **volontairement dissimulé** une information déterminante. Sans cette tromperie, Léa n’aurait pas acheté.' },
      { t: 'example', h: 'Conclusion', c: 'Les éléments du **dol** sont réunis (manœuvre + caractère déterminant + intention de tromper). Léa peut demander la **nullité** de la vente et la **restitution** du prix, ainsi que des **dommages-intérêts**.' },
      { t: 'tip', h: 'Méthode', c: 'Toujours : 1) **qualifier** juridiquement les faits, 2) énoncer la **règle** applicable (article, principe), 3) **appliquer** la règle aux faits, 4) **conclure** clairement. Ne jamais donner la conclusion sans la règle qui la fonde.' },
    ]),
  ],

  // ---- Thème 6 — Qu'est-ce qu'être responsable ? -------------------
  'droit-t6': [
    S('🎯 Responsabilité civile et responsabilité pénale', [
      { t: 'p', c: 'Être **responsable**, c’est devoir **répondre** de ses actes devant la justice. Le droit distingue deux grandes responsabilités, qui poursuivent des buts opposés et peuvent se cumuler pour un même fait.' },
      { t: 'table', head: ['Critère', 'Responsabilité civile', 'Responsabilité pénale'], rows: [
        ['But', 'Réparer le dommage de la victime', 'Punir l’auteur d’une infraction'],
        ['Qui agit', 'La victime (action en justice)', 'La société (le ministère public)'],
        ['Sanction', 'Dommages-intérêts (argent)', 'Amende, prison, peine'],
        ['Bénéficiaire', 'La victime', 'La société'],
        ['Tribunal', 'Civil (tribunal judiciaire)', 'Pénal (police, correctionnel, assises)'],
      ] },
      { t: 'p', c: 'Un même fait peut engager **les deux** responsabilités. Un conducteur qui blesse un piéton en grillant un feu rouge est **pénalement** responsable (il a commis une infraction, l’État le punit) **et civilement** responsable (il doit réparer le préjudice de la victime).' },
      { t: 'tip', h: 'À retenir', c: 'Civil = **réparer** (payer la victime). Pénal = **punir** (sanction au nom de la société). C’est la distinction fondamentale du thème.' },
    ]),
    S('🧩 Les conditions de la responsabilité civile', [
      { t: 'p', c: 'La responsabilité civile **délictuelle** (hors contrat) suppose la réunion de **trois conditions cumulatives** (art. 1240 : « tout fait quelconque de l’homme qui cause à autrui un dommage oblige celui par la faute duquel il est arrivé à le réparer »).' },
      { t: 'list', c: [
        '**Un fait générateur** : une **faute** (imprudence, négligence, acte volontaire), le fait d’une **chose** que l’on a sous sa garde, ou le fait d’**autrui**.',
        '**Un dommage** (ou préjudice) : matériel (un bien détruit), corporel (une blessure) ou moral (une souffrance).',
        '**Un lien de causalité** : le dommage doit être **la conséquence** du fait générateur.',
      ] },
      { t: 'p', c: 'Ces trois conditions sont **cumulatives** : s’il en manque une, la responsabilité n’est pas engagée. Sans dommage, pas de réparation ; sans lien de causalité, on ne peut imputer le dommage à la personne poursuivie.' },
      { t: 'example', h: 'Application', c: 'Un commerçant laisse le sol mouillé sans signalisation (fait/faute) ; un client glisse et se casse le poignet (dommage) ; la chute est due au sol glissant (lien de causalité). Les trois conditions sont réunies → responsabilité engagée.' },
      { t: 'tip', h: 'Mémo', c: 'Les 3 conditions : **Fait générateur – Dommage – Lien de causalité**. Un tableau à cocher pour chaque cas pratique.' },
    ]),
    S('🚗 Les régimes : fait personnel, des choses, d’autrui', [
      { t: 'p', c: 'Le fait générateur prend trois formes, correspondant à trois **régimes** de responsabilité civile.' },
      { t: 'table', head: ['Régime', 'Fondement', 'Exemple'], rows: [
        ['Fait personnel', 'Ma propre faute (art. 1240)', 'Je casse la vitrine du voisin'],
        ['Fait des choses', 'Une chose sous ma garde (art. 1242 al.1)', 'Mon chien mord un passant ; ma tuile tombe'],
        ['Fait d’autrui', 'Responsabilité pour une personne dont je réponds', 'Parents pour leur enfant mineur ; employeur pour son salarié'],
      ] },
      { t: 'p', c: 'La responsabilité du **fait des choses** et du **fait d’autrui** est souvent **sans faute** (dite objective) : la victime n’a pas à prouver une faute, seulement la garde de la chose ou le lien (parent/enfant, employeur/salarié). Cela **facilite** l’indemnisation de la victime.' },
      { t: 'example', h: 'Fait d’autrui', c: 'Un salarié livreur endommage un véhicule pendant son travail : l’**employeur** est civilement responsable (responsabilité du commettant du fait de son préposé) et devra indemniser, même sans faute de sa part.' },
      { t: 'warning', h: 'Nuance', c: 'La responsabilité **des parents** suppose que l’enfant soit **mineur** et **cohabite** avec eux. Elle est très difficile à écarter : c’est une protection forte pour les victimes.' },
    ]),
    S('💶 La réparation du dommage', [
      { t: 'p', c: 'La finalité de la responsabilité civile est la **réparation intégrale** : replacer la victime dans l’état où elle serait si le dommage ne s’était pas produit — ni plus, ni moins. La réparation prend le plus souvent la forme de **dommages-intérêts** (une somme d’argent).' },
      { t: 'p', c: 'Le dommage réparable doit être **certain** (pas seulement hypothétique), **direct** (conséquence du fait) et **personnel** (subi par celui qui demande réparation). On indemnise les préjudices **matériels**, **corporels** et **moraux**.' },
      { t: 'p', c: 'Le rôle de l’**assurance** est central : l’assurance de responsabilité (ex. responsabilité civile, obligatoire pour un véhicule) prend en charge l’indemnisation à la place de l’auteur. Elle **mutualise** le risque et garantit que la victime sera indemnisée même si l’auteur est insolvable.' },
      { t: 'example', h: 'Réparation', c: 'Après l’accident, la victime obtient : le remboursement des frais médicaux (matériel), l’indemnisation de son incapacité (corporel) et une somme pour la souffrance endurée (moral).' },
      { t: 'tip', h: 'À retenir', c: 'Objectif = **réparer intégralement**, pas enrichir la victime ni punir l’auteur (ça, c’est le pénal). L’assurance garantit l’effectivité de cette réparation.' },
    ]),
    S('⚖️ Cas pratique guidé — responsabilité civile', [
      { t: 'p', c: '**Énoncé.** Dans un supermarché, une bouteille explose sur le rayon et blesse un client au visage. Le client réclame réparation. Le supermarché est-il responsable ?' },
      { t: 'example', h: 'Majeure — la règle', c: 'La responsabilité du **fait des choses** (art. 1242 al.1) rend responsable le **gardien** d’une chose (celui qui en a l’usage, la direction et le contrôle) des dommages qu’elle cause. Trois conditions : fait de la chose, dommage, lien de causalité. Aucune faute n’a à être prouvée.' },
      { t: 'example', h: 'Mineure — les faits', c: 'La bouteille (chose) était sous la **garde** du supermarché ; elle a explosé (fait de la chose) ; le client a été blessé au visage (dommage corporel) ; la blessure résulte directement de l’explosion (lien de causalité).' },
      { t: 'example', h: 'Conclusion', c: 'Les conditions de la responsabilité du fait des choses sont réunies. Le supermarché, **gardien**, est **civilement responsable** et doit **réparer** le préjudice (via son assurance). Le client obtiendra des dommages-intérêts couvrant ses préjudices matériel, corporel et moral.' },
      { t: 'tip', h: 'Méthode', c: 'Identifier d’abord le **régime** (personnel ? des choses ? d’autrui ?), puis dérouler le **syllogisme** : règle → faits → conclusion. Vérifier les **trois conditions** systématiquement.' },
    ]),
  ],

  // ---- Thème 7 — Le travail salarié --------------------------------
  'droit-t7': [
    S('🤝 Le contrat de travail et le lien de subordination', [
      { t: 'p', c: 'Le **contrat de travail** est la convention par laquelle une personne (le **salarié**) met son activité au service d’une autre (l’**employeur**), sous sa **subordination**, en échange d’une **rémunération**. Il réunit donc trois éléments : une **prestation de travail**, une **rémunération** et un **lien de subordination**.' },
      { t: 'p', c: 'Le **lien de subordination** est le **critère décisif** : c’est le pouvoir de l’employeur de **donner des ordres**, d’en **contrôler** l’exécution et de **sanctionner** les manquements. C’est lui qui distingue le salarié du travailleur **indépendant**, qui organise librement son travail.' },
      { t: 'example', h: 'Salarié ou indépendant ? (l’affaire Uber)', c: 'La Cour de cassation a requalifié en contrat de travail la relation d’un chauffeur avec sa plateforme : celle-ci fixait les tarifs, imposait un itinéraire, contrôlait et pouvait désactiver le compte. Ce **faisceau d’indices** révélait un **lien de subordination** — donc un vrai salariat, malgré l’étiquette « indépendant ».' },
      { t: 'warning', h: 'Piège', c: 'Ce n’est **pas le nom** donné au contrat qui compte, mais la **réalité** de la relation. Le juge recherche le lien de subordination par un **faisceau d’indices**.' },
    ]),
    S('📄 CDI, CDD, intérim : la règle et l’exception', [
      { t: 'p', c: 'Le **CDI (contrat à durée indéterminée)** est le contrat **de droit commun** : c’est la **règle**. Il n’a pas de terme fixé et offre la plus grande stabilité au salarié. Toute embauche est présumée en CDI sauf preuve du recours légal à un autre contrat.' },
      { t: 'p', c: 'Le **CDD (contrat à durée déterminée)** est l’**exception** : il n’est possible que pour des **cas limités** prévus par la loi et pour une **tâche précise et temporaire**. Il ne peut avoir pour objet de pourvoir durablement un emploi lié à l’activité normale de l’entreprise.' },
      { t: 'list', c: [
        '**Cas de recours au CDD** : remplacement d’un salarié absent, accroissement temporaire d’activité, emploi saisonnier.',
        '**Formalisme strict** : le CDD doit être **écrit**, préciser son **motif** et son **terme**. À défaut d’écrit, il est **requalifié en CDI**.',
        '**Fin du CDD** : à son terme, le salarié perçoit une **indemnité de fin de contrat** (prime de précarité).',
      ] },
      { t: 'p', c: 'L’**intérim** (travail temporaire) fait intervenir **trois acteurs** : le salarié, l’entreprise de travail temporaire (son employeur) et l’entreprise utilisatrice (où il travaille). Il obéit aux mêmes logiques de **cas de recours limités** que le CDD.' },
      { t: 'tip', h: 'À retenir', c: 'CDI = **principe**, CDD/intérim = **exception encadrée**. Un CDD sans motif légal ou sans écrit est **requalifié en CDI** — une sanction très favorable au salarié.' },
    ]),
    S('🚪 La rupture du contrat de travail', [
      { t: 'p', c: 'Un CDI peut être rompu de plusieurs façons, selon qui prend l’initiative. La rupture est **encadrée** pour protéger le salarié : « on ne licencie pas parce que ».' },
      { t: 'table', head: ['Mode de rupture', 'À l’initiative de…', 'Condition clé'], rows: [
        ['Démission', 'Du salarié', 'Volonté claire et non équivoque'],
        ['Licenciement', 'De l’employeur', 'Cause réelle et sérieuse + procédure'],
        ['Rupture conventionnelle', 'Accord des deux', 'Convention homologuée par l’administration'],
      ] },
      { t: 'p', c: 'Le **licenciement** doit reposer sur une **cause réelle et sérieuse**. « Réelle » = fondée sur des faits **exacts et vérifiables** ; « sérieuse » = suffisamment **grave** pour justifier la rupture. On distingue le licenciement pour motif **personnel** (lié au salarié : faute, insuffisance) et pour motif **économique** (lié à l’entreprise : difficultés, mutation technologique).' },
      { t: 'p', c: 'L’employeur doit aussi respecter une **procédure** : convocation à un entretien préalable, entretien, puis notification écrite et motivée. Le non-respect du fond (cause) ou de la forme (procédure) rend le licenciement **abusif** et ouvre droit à des **dommages-intérêts**.' },
      { t: 'warning', h: 'Piège', c: 'Un licenciement sans **cause réelle et sérieuse** est **abusif**, même si la procédure a été respectée. Fond **et** forme doivent être réunis.' },
    ]),
    S('🛡️ Les droits collectifs du salarié', [
      { t: 'p', c: 'Le salarié n’est pas seul face à l’employeur : le droit du travail organise sa **protection collective**. Les sources de ses droits forment une **hiérarchie** (Constitution, lois, conventions collectives, contrat), avec un principe protecteur : la norme inférieure ne peut être **moins favorable** que la supérieure (principe de faveur, sauf exceptions).' },
      { t: 'list', c: [
        '**La convention collective** : accord négocié par branche ou entreprise qui adapte et **améliore** le Code du travail (salaires minima, congés, primes).',
        '**Les représentants du personnel** (CSE — Comité social et économique) : élus, ils défendent les intérêts des salariés et sont consultés sur les décisions importantes.',
        '**Les syndicats** : ils négocient, informent et peuvent appeler à la **grève**, droit à valeur constitutionnelle.',
      ] },
      { t: 'p', c: 'Ces mécanismes rééquilibrent une relation par nature **inégalitaire** (le salarié est subordonné). Ils incarnent la fonction protectrice du droit du travail : garantir des conditions de travail dignes et une voix collective.' },
      { t: 'tip', h: 'À retenir', c: 'Le droit du travail est un droit **protecteur** et **d’ordre public social** : on ne peut y déroger que dans un sens **plus favorable** au salarié.' },
    ]),
    S('⚖️ Cas pratique guidé — le licenciement', [
      { t: 'p', c: '**Énoncé.** Un employeur licencie une salariée par un simple SMS, sans entretien, au motif qu’« elle ne lui plaît plus ». La salariée conteste. Que dit le droit ?' },
      { t: 'example', h: 'Majeure — la règle', c: 'Tout licenciement exige une **cause réelle et sérieuse** (faits exacts, vérifiables et suffisamment graves) et le respect d’une **procédure** (convocation, entretien préalable, notification écrite et motivée). À défaut, le licenciement est **abusif** et donne lieu à des dommages-intérêts.' },
      { t: 'example', h: 'Mineure — les faits', c: 'Le motif (« elle ne me plaît plus ») n’est **ni réel ni sérieux** : il ne repose sur aucun fait objectif. De plus, la procédure n’a **pas** été respectée (SMS, pas d’entretien préalable, pas de notification motivée).' },
      { t: 'example', h: 'Conclusion', c: 'Le licenciement est **abusif** (absence de cause réelle et sérieuse **et** vice de procédure). La salariée peut saisir le **conseil de prud’hommes** et obtenir des **dommages-intérêts** pour licenciement sans cause réelle et sérieuse.' },
      { t: 'tip', h: 'Méthode', c: 'Contrôler **deux niveaux** : le **fond** (la cause existe-t-elle et est-elle sérieuse ?) et la **forme** (la procédure a-t-elle été suivie ?). Conclure sur le tribunal compétent (**prud’hommes**).' },
    ]),
  ],

  // ---- Thème 8 — Dans quel cadre et comment entreprendre ? ---------
  'droit-t8': [
    S('🏗️ Choisir une forme juridique', [
      { t: 'p', c: 'Entreprendre suppose de choisir un **cadre juridique**. La première grande distinction oppose l’**entreprise individuelle** (l’entrepreneur et l’entreprise ne font qu’un) et la **société** (une **personne morale** distincte, dotée de son propre patrimoine).' },
      { t: 'table', head: ['Forme', 'Associés', 'Responsabilité', 'Pour qui'], rows: [
        ['Entreprise individuelle (EI)', '1 (l’entrepreneur)', 'Limitée au patrimoine professionnel (depuis 2022)', 'Se lancer seul, simplement'],
        ['EURL', '1', 'Limitée aux apports', 'Seul, mais en société'],
        ['SARL', '2 à 100', 'Limitée aux apports', 'PME familiale'],
        ['SAS / SASU', '1 ou plusieurs', 'Limitée aux apports', 'Souplesse, levée de fonds'],
        ['SA', '2 (ou 7 si cotée)', 'Limitée aux apports', 'Grandes entreprises'],
      ] },
      { t: 'p', c: 'Le choix dépend de plusieurs critères : le **nombre d’associés**, le **capital** disponible, l’étendue de la **responsabilité** souhaitée, le **régime fiscal et social** du dirigeant, et les **perspectives de croissance** (une SAS facilite l’entrée d’investisseurs).' },
      { t: 'tip', h: 'À retenir', c: 'La **société** crée une **personne morale** distincte : elle a son nom, son patrimoine, sa responsabilité. C’est ce qui **protège** le patrimoine personnel des associés (responsabilité limitée aux apports).' },
    ]),
    S('🏠 Protéger le patrimoine de l’entrepreneur', [
      { t: 'p', c: 'Le grand risque de l’entrepreneur est que ses créanciers professionnels saisissent ses **biens personnels** (sa maison, ses comptes) en cas de dettes. Le droit a progressivement renforcé sa **protection**.' },
      { t: 'list', c: [
        '**La responsabilité limitée** en société : les associés ne perdent, au maximum, que leurs **apports**. Le patrimoine personnel est à l’abri (sauf faute de gestion ou caution personnelle).',
        '**La séparation des patrimoines** de l’entrepreneur individuel : depuis 2022, le patrimoine **personnel** de l’entrepreneur individuel est de droit **séparé** de son patrimoine **professionnel** et protégé des créanciers professionnels.',
        '**L’insaisissabilité de la résidence principale** de l’entrepreneur individuel, protégée de droit.',
      ] },
      { t: 'p', c: 'Cette protection n’est jamais absolue. Une **caution personnelle** demandée par la banque, ou une **faute de gestion** grave, peut faire tomber la barrière et engager le patrimoine personnel du dirigeant.' },
      { t: 'example', h: 'Illustration', c: 'Un gérant de SARL dont l’entreprise fait faillite ne perd en principe que son apport au capital ; mais s’il s’est porté **caution** d’un emprunt de la société, la banque pourra se retourner contre **ses biens personnels**.' },
      { t: 'tip', h: 'À retenir', c: 'La protection du patrimoine repose sur deux idées : la **personnalité morale** de la société et la **séparation des patrimoines**. Mais **caution** et **faute de gestion** en sont les limites.' },
    ]),
    S('💡 Protéger les créations : la propriété intellectuelle', [
      { t: 'p', c: 'Une idée seule ne se protège pas ; mais sa **mise en forme** (invention, marque, œuvre) peut faire l’objet d’un **droit de propriété intellectuelle**, qui confère à son titulaire un **monopole d’exploitation** temporaire.' },
      { t: 'table', head: ['Titre', 'Protège', 'Durée', 'Formalité'], rows: [
        ['Brevet', 'Une invention technique', '20 ans', 'Dépôt à l’INPI'],
        ['Marque', 'Un signe distinctif (nom, logo)', '10 ans renouvelables', 'Dépôt à l’INPI'],
        ['Droit d’auteur', 'Une œuvre de l’esprit (texte, musique, logiciel)', 'Vie de l’auteur + 70 ans', 'Aucune (protection automatique)'],
        ['Dessins et modèles', 'L’apparence d’un produit', '5 ans (renouvelable jusqu’à 25)', 'Dépôt à l’INPI'],
      ] },
      { t: 'p', c: 'La **propriété industrielle** (brevet, marque, dessins) nécessite un **dépôt** auprès de l’**INPI** pour être protégée. Le **droit d’auteur** est différent : il naît **automatiquement** dès la création de l’œuvre, sans formalité. La contrefaçon (copier sans autorisation) est un **délit** sanctionné civilement et pénalement.' },
      { t: 'example', h: 'Application', c: 'Une créatrice qui invente un procédé technique dépose un **brevet** (20 ans de monopole) ; elle protège le nom de sa marque par un dépôt à l’INPI (**marque**) ; le texte de son site est protégé d’office par le **droit d’auteur**.' },
      { t: 'tip', h: 'À retenir', c: 'Idée = non protégeable. **Invention → brevet ; nom/logo → marque ; œuvre → droit d’auteur (automatique)**. Le dépôt à l’INPI conditionne la propriété industrielle.' },
    ]),
    S('🔄 La transmission de l’entreprise', [
      { t: 'p', c: 'Une entreprise a une vie qui peut dépasser celle de son fondateur : elle peut être **transmise**, par vente, par donation ou par **succession** (au décès). Le droit organise cette continuité pour préserver l’activité et les emplois.' },
      { t: 'list', c: [
        '**La cession (vente)** : le fonds de commerce ou les parts sociales sont vendus à un repreneur. Elle obéit à un formalisme protecteur (information des salariés, publicité).',
        '**La donation** : transmission à titre gratuit, souvent aux enfants, avec des dispositifs fiscaux d’allègement (pacte Dutreil).',
        '**La succession** : au décès, l’entreprise entre dans le patrimoine transmis aux héritiers selon les règles du droit des successions.',
      ] },
      { t: 'p', c: 'La forme juridique influence la transmission : dans une **société**, on transmet des **parts** ou **actions** (plus simple, la personne morale continue) ; dans une **entreprise individuelle**, c’est le patrimoine professionnel lui-même qui est transmis.' },
      { t: 'example', h: 'Illustration (Lagerfeld)', c: 'La question « la chatte Choupette peut-elle hériter ? » illustre les règles de succession : en droit français, un **animal** ne peut pas être héritier (il n’a pas la personnalité juridique) ; on peut en revanche charger un héritier de s’en occuper via un **legs**.' },
      { t: 'tip', h: 'À retenir', c: 'Transmettre une **société** = céder des parts/actions (la personne morale survit). Anticiper la transmission (donation, pacte) évite qu’une succession subie ne mette en péril l’entreprise.' },
    ]),
    S('⚖️ Cas pratique guidé — choisir une forme juridique', [
      { t: 'p', c: '**Énoncé.** Trois amis veulent créer ensemble une start-up ambitieuse, espèrent lever des fonds auprès d’investisseurs, et veulent tous **protéger leur patrimoine personnel**. Quelle forme leur conseiller ?' },
      { t: 'example', h: 'Majeure — les critères', c: 'Le choix d’une forme juridique dépend du **nombre d’associés**, de la **responsabilité** (limitée ou non), de la **souplesse** de fonctionnement et de la capacité à **accueillir des investisseurs**.' },
      { t: 'example', h: 'Mineure — les faits', c: 'Ils sont **plusieurs** (exclut EI et EURL), veulent une **responsabilité limitée** (exclut certaines formes risquées), et surtout veulent **lever des fonds** et rester **souples** dans l’organisation.' },
      { t: 'example', h: 'Conclusion', c: 'La **SAS (société par actions simplifiée)** est la mieux adaptée : responsabilité **limitée aux apports** (patrimoine protégé), **grande souplesse** statutaire, et **facilité d’entrée d’investisseurs** au capital. La SARL, plus rigide, conviendrait moins à un projet cherchant des fonds.' },
      { t: 'tip', h: 'Méthode', c: 'Lister les **besoins** de l’entrepreneur → les **traduire** en critères juridiques → **comparer** les formes → **recommander** en justifiant par chaque critère. Ne jamais donner une forme sans expliquer **pourquoi**.' },
    ]),
  ],

  // #####################################################################
  // ÉCONOMIE (Terminale STMG)
  // #####################################################################

  // ---- Thème 6 — Le rôle de l'État ---------------------------------
  'eco-t6': [
    S('🏛️ Les trois fonctions de l’État (Musgrave)', [
      { t: 'p', c: 'Dans une économie de marché, l’**État** intervient pour corriger et compléter le marché. L’économiste Richard **Musgrave** a résumé son action économique en **trois fonctions** complémentaires.' },
      { t: 'table', head: ['Fonction', 'Objectif', 'Exemples d’outils'], rows: [
        ['Allocation', 'Produire ce que le marché ne fournit pas bien', 'Écoles, routes, défense, justice (biens publics)'],
        ['Répartition', 'Réduire les inégalités', 'Impôts progressifs, prestations sociales, redistribution'],
        ['Stabilisation', 'Lisser les crises (croissance, emploi, prix)', 'Politiques budgétaire et monétaire'],
      ] },
      { t: 'p', c: 'La fonction d’**allocation** répond aux **défaillances du marché** : certains biens (l’éclairage public, la défense) ne seraient pas produits par le privé car nul ne peut en être exclu ni facturé. La fonction de **répartition** corrige les inégalités que le marché génère spontanément. La fonction de **stabilisation** lutte contre le chômage et l’inflation.' },
      { t: 'tip', h: 'À retenir', c: 'Les 3 fonctions : **Allocation – Répartition – Stabilisation** (A.R.S.). Elles justifient pourquoi, même dans une économie de marché, l’État a un rôle économique.' },
    ]),
    S('⚖️ Pourquoi le marché « défaille »', [
      { t: 'p', c: 'Le marché est efficace, mais **pas toujours** : il connaît des **défaillances** qui justifient l’intervention publique. En comprendre les mécanismes est central pour ce thème.' },
      { t: 'list', c: [
        '**Les biens publics** : biens **non rivaux** (l’usage de l’un n’empêche pas celui de l’autre) et **non excluables** (on ne peut empêcher personne d’en profiter). Personne ne veut les payer (« passager clandestin ») → l’État les finance (éclairage, défense).',
        '**Les externalités** : effets d’une activité sur des tiers, non pris en compte par le prix. **Négative** (pollution d’une usine) ou **positive** (une vaccination qui protège tous). L’État taxe les premières, subventionne les secondes.',
        '**Les asymétries d’information** : une partie en sait plus que l’autre (le vendeur de voiture d’occasion) → l’État impose transparence et normes.',
        '**Les situations de monopole** : un seul offreur abuse de son pouvoir → l’État régule la concurrence.',
      ] },
      { t: 'example', h: 'Externalité négative', c: 'Une usine rejette des déchets dans une rivière : elle ne paie pas ce coût, supporté par les riverains et l’environnement. L’État corrige par une **taxe** (principe pollueur-payeur) ou une **norme**.' },
      { t: 'tip', h: 'À retenir', c: 'Défaillances de marché = **biens publics, externalités, asymétries d’information, monopoles**. Chacune justifie un type précis d’intervention de l’État.' },
    ]),
    S('💶 Les politiques économiques', [
      { t: 'p', c: 'Pour **stabiliser** l’économie, l’État conduit des **politiques économiques**. On les classe selon leur horizon : **conjoncturelles** (agir vite sur la situation présente) ou **structurelles** (transformer l’économie à long terme).' },
      { t: 'table', head: ['Politique', 'Outil', 'But'], rows: [
        ['Budgétaire', 'Dépenses publiques, impôts (budget de l’État)', 'Relancer ou freiner l’activité'],
        ['Monétaire', 'Taux d’intérêt, masse monétaire (BCE)', 'Maîtriser l’inflation, soutenir le crédit'],
        ['Structurelle', 'Réformes (formation, marché du travail, fiscalité)', 'Améliorer la compétitivité à long terme'],
      ] },
      { t: 'p', c: 'La **politique budgétaire** peut être de **relance** (augmenter les dépenses ou baisser les impôts pour soutenir la demande, quitte à creuser le déficit) ou de **rigueur** (réduire les dépenses pour maîtriser la dette). Le « **quoi qu’il en coûte** » de la crise Covid en est un exemple spectaculaire de relance.' },
      { t: 'p', c: 'La **politique monétaire**, en zone euro, est confiée à la **Banque centrale européenne (BCE)**, indépendante des États. En **baissant ses taux**, elle rend le crédit moins cher et stimule l’activité ; en les **relevant**, elle freine l’inflation.' },
      { t: 'tip', h: 'À retenir', c: 'Conjoncturel = court terme (budgétaire + monétaire) ; structurel = long terme (réformes). En zone euro, la **monnaie** est gérée par la **BCE**, pas par chaque État.' },
    ]),
    S('📉 Les limites de l’intervention', [
      { t: 'p', c: 'L’intervention de l’État a un **coût** et des **limites**. Les dépenses publiques se financent par l’**impôt** ou par l’**emprunt** ; ce dernier alimente le **déficit** (dépenses > recettes sur une année) puis la **dette publique** (accumulation des déficits passés).' },
      { t: 'formula', c: 'Déficit public = Dépenses publiques − Recettes publiques (sur une année)' },
      { t: 'list', c: [
        '**Le poids de la dette** : plus elle est élevée, plus les intérêts pèsent, réduisant les marges pour d’autres dépenses. La dette d’aujourd’hui est un impôt de demain.',
        '**L’effet d’éviction** : quand l’État emprunte beaucoup, il peut faire monter les taux et « évincer » l’investissement privé.',
        '**Les règles européennes** : le traité fixe des repères (déficit et dette encadrés) qui limitent la liberté budgétaire des États.',
        '**L’efficacité incertaine** : une relance peut « fuir » vers les importations plutôt que soutenir la production nationale.',
      ] },
      { t: 'p', c: 'Il existe donc un **débat** permanent : les partisans de l’intervention (inspirés de **Keynes**) défendent la relance en cas de crise ; les **libéraux** insistent sur les limites (dette, effet d’éviction, inefficacité) et préfèrent laisser jouer le marché.' },
      { t: 'tip', h: 'À retenir', c: 'Intervenir a un prix : **déficit → dette → intérêts**. Toute copie de bac équilibrée présente **les deux camps** du débat (Keynes vs libéraux).' },
    ]),
    S('💶 Exemple guidé — analyser une intervention', [
      { t: 'p', c: '**Énoncé.** Face à une hausse des prix de l’énergie, l’État instaure un « bouclier tarifaire » qui plafonne les prix, pour un coût de plusieurs milliards d’euros. Analysez cette mesure : fonction, justification, limites.' },
      { t: 'example', h: 'Étape 1 — Quelle fonction ?', c: 'Il s’agit surtout d’une fonction de **stabilisation** (soutenir le pouvoir d’achat et la demande) et de **répartition** (protéger les ménages les plus touchés).' },
      { t: 'example', h: 'Étape 2 — Justification', c: 'La flambée des prix (choc externe) menace le pouvoir d’achat et pourrait déclencher une baisse de la consommation. L’État corrige cet effet par une politique **budgétaire de soutien**.' },
      { t: 'p', c: '**Étape 3 — Limites.** Le coût (plusieurs milliards) **creuse le déficit** et donc la **dette**. La mesure peut aussi **retarder** les économies d’énergie (le prix ne joue plus son rôle de signal). Enfin, plafonner un prix est une entorse au marché qui peut créer des effets pervers. **Conclusion** : mesure utile à court terme pour la stabilisation, mais **coûteuse et à durée limitée**.' },
      { t: 'tip', h: 'Méthode', c: 'Analyser une intervention : 1) **quelle fonction** de l’État ? 2) **quelle défaillance** ou quel objectif ? 3) **quels outils** ? 4) **quelles limites** (coût, dette, effets pervers) ? Toujours peser **avantages ET limites**.' },
    ]),
  ],

  // ---- Thème 7 — Emploi et chômage ---------------------------------
  'eco-t7': [
    S('📊 Mesurer l’emploi et le chômage', [
      { t: 'p', c: 'Mesurer le chômage suppose d’abord des **définitions précises**. La **population active** regroupe les personnes qui travaillent (**actifs occupés**) et celles qui cherchent un emploi (**chômeurs**). Les autres (étudiants, retraités, personnes au foyer) sont **inactifs**.' },
      { t: 'formula', c: 'Population active = Actifs occupés + Chômeurs' },
      { t: 'p', c: 'Au sens du **BIT (Bureau International du Travail)**, est **chômeur** une personne qui, simultanément : est **sans emploi**, est **disponible** pour travailler, et **recherche activement** un emploi. Cette définition internationale permet de **comparer** les pays.' },
      { t: 'formula', c: 'Taux de chômage = (Nombre de chômeurs ÷ Population active) × 100' },
      { t: 'warning', h: 'Piège', c: 'Le taux de chômage se calcule sur la **population active**, **pas** sur la population totale ! Un étudiant ou un retraité n’entre pas dans le calcul.' },
      { t: 'tip', h: 'À distinguer', c: 'Le **halo du chômage** regroupe des personnes sans emploi qui ne sont **pas comptées** comme chômeurs au sens strict (elles ne cherchent pas activement, ou ne sont pas disponibles immédiatement). Le chômage « officiel » sous-estime donc le sous-emploi réel.' },
    ]),
    S('🔎 Les différents types de chômage', [
      { t: 'p', c: 'Le chômage n’a pas une cause unique : selon son origine, on en distingue plusieurs types, qui appellent des **remèdes différents**.' },
      { t: 'table', head: ['Type', 'Cause', 'Exemple / remède'], rows: [
        ['Conjoncturel', 'Ralentissement de l’activité (crise)', 'Récession → politique de relance'],
        ['Structurel', 'Inadéquation durable offre/demande de travail', 'Compétences obsolètes → formation'],
        ['Frictionnel', 'Temps de transition entre deux emplois', 'Normal et incompressible'],
        ['Technologique', 'Machines/automatisation remplacent des postes', 'Reconversion, montée en compétences'],
      ] },
      { t: 'p', c: 'Le **chômage conjoncturel** suit le cycle économique : il augmente en récession, recule en reprise. Le **chômage structurel** est plus profond : il tient à un décalage durable entre les emplois offerts et les qualifications disponibles, ou à des rigidités du marché du travail. C’est le plus difficile à résorber.' },
      { t: 'example', h: 'Illustration', c: 'La fermeture d’une usine sidérurgique crée du chômage **structurel** dans une région : les ouvriers ont des compétences qui ne correspondent plus aux emplois disponibles ailleurs. La solution passe par la **formation** et la **reconversion**, pas par une simple relance.' },
      { t: 'tip', h: 'À retenir', c: 'Conjoncturel → **relance** (agir sur la demande). Structurel → **formation et réformes** (agir sur l’offre de travail). Le bon remède dépend du bon diagnostic.' },
    ]),
    S('🛠️ Les politiques de l’emploi', [
      { t: 'p', c: 'Face au chômage, l’État mène des **politiques de l’emploi**, que l’on classe en deux grandes catégories selon leur logique.' },
      { t: 'list', c: [
        '**Politiques actives** : agir sur les **causes** pour ramener vers l’emploi — formation, accompagnement, aides à l’embauche, contrats aidés, soutien à la création d’entreprise.',
        '**Politiques passives** : atténuer les **conséquences** du chômage — indemnisation (allocations chômage), dispositifs de préretraite.',
      ] },
      { t: 'p', c: 'D’autres leviers agissent sur le **coût du travail** : allègements de charges sociales pour inciter à embaucher, notamment sur les bas salaires. L’idée est de rendre l’embauche plus attractive pour l’employeur, surtout pour les emplois peu qualifiés les plus exposés.' },
      { t: 'p', c: 'Ces politiques font débat. Trop d’indemnisation pourrait décourager la reprise d’emploi (débat sur les « trappes à inactivité ») ; mais une protection insuffisante fragilise les chômeurs et affaiblit la demande. L’enjeu est de **combiner** activation (former, accompagner) et **sécurité** (indemniser) — c’est la logique de la « flexisécurité ».' },
      { t: 'tip', h: 'À retenir', c: 'Actives = **s’attaquer aux causes** (formation, incitations). Passives = **soulager les conséquences** (indemnisation). Une bonne politique combine les deux.' },
    ]),
    S('💼 Le fonctionnement du marché du travail', [
      { t: 'p', c: 'Le **marché du travail** confronte une **offre de travail** (les personnes qui proposent leur travail) et une **demande de travail** (les entreprises qui recrutent). Attention au vocabulaire : ce sont les **salariés** qui « offrent » leur travail et les **entreprises** qui le « demandent ».' },
      { t: 'p', c: 'Selon l’analyse **néoclassique**, le **salaire** est le prix qui équilibre ce marché : s’il est trop élevé (par exemple à cause d’un salaire minimum jugé trop haut), la demande de travail des entreprises baisse et un **chômage** apparaît. Selon l’analyse **keynésienne**, le chômage vient surtout d’une **demande globale** insuffisante : sans débouchés, les entreprises n’embauchent pas, quel que soit le salaire.' },
      { t: 'example', h: 'Deux lectures d’un même fait', c: 'Face au chômage, un libéral propose d’**assouplir** le marché du travail et de modérer les salaires ; un keynésien propose de **soutenir la demande** (relance, hausse du pouvoir d’achat). Ce désaccord structure tout le débat de politique économique.' },
      { t: 'warning', h: 'Piège de vocabulaire', c: 'Sur le marché du travail, l’**offre** vient des **travailleurs** et la **demande** des **entreprises** — c’est l’inverse du marché des biens. Ne pas se tromper de sens le jour du bac.' },
    ]),
    S('💶 Exemple chiffré guidé — le taux de chômage', [
      { t: 'p', c: '**Énoncé.** Dans un pays : 25 millions d’actifs occupés, 2,5 millions de chômeurs, 15 millions d’inactifs. Calculez la population active et le taux de chômage, puis commentez.' },
      { t: 'example', h: 'Étape 1 — Population active', c: 'Population active = actifs occupés + chômeurs = 25 + 2,5 = **27,5 millions**.' },
      { t: 'example', h: 'Étape 2 — Taux de chômage', c: 'Taux = (chômeurs ÷ population active) × 100 = (2,5 ÷ 27,5) × 100 ≈ **9,1 %**.' },
      { t: 'p', c: '**Étape 3 — Commentaire.** Un taux d’environ 9 % est **élevé** : près d’un actif sur onze cherche un emploi sans en trouver. Il faut ensuite s’interroger sur sa **nature** (conjoncturel ? structurel ?) pour proposer le bon remède, et sur le **halo** du chômage (le chiffre officiel sous-estime le sous-emploi réel). Les 15 millions d’inactifs **n’entrent pas** dans le calcul.' },
      { t: 'tip', h: 'Méthode', c: '1) Bien identifier la **population active** (jamais la population totale). 2) Appliquer la formule. 3) **Interpréter** le niveau (élevé/faible) et s’interroger sur le **type** de chômage et le **halo**.' },
    ]),
  ],

  // ---- Thème 8 — Le commerce international --------------------------
  'eco-t8': [
    S('🌍 Pourquoi les pays échangent : l’avantage comparatif', [
      { t: 'p', c: 'Le **commerce international** est l’ensemble des échanges de biens et de services entre pays. Pourquoi les nations échangent-elles au lieu de tout produire elles-mêmes ? La réponse théorique majeure est la théorie de l’**avantage comparatif** de **David Ricardo** (1817).' },
      { t: 'p', c: 'L’idée est contre-intuitive : même un pays **plus performant en tout** a intérêt à se **spécialiser** dans ce qu’il produit **relativement** le mieux, et à **importer** le reste. Chaque pays se concentre sur sa spécialité, et l’échange **augmente la richesse totale** disponible.' },
      { t: 'example', h: 'Illustration simplifiée', c: 'Si le Portugal est très bon pour le vin et l’Angleterre pour le drap, chacun a intérêt à se spécialiser et à échanger, plutôt que de produire les deux médiocrement. Chacun obtient au final **plus** des deux biens.' },
      { t: 'p', c: 'Cette spécialisation conduit à la **division internationale du travail (DIT)** : chaque pays occupe une place dans une chaîne mondiale de production. C’est ce qui explique qu’un smartphone soit conçu dans un pays, ses composants fabriqués dans plusieurs autres, et l’assemblage réalisé ailleurs encore.' },
      { t: 'tip', h: 'À retenir', c: 'Avantage **absolu** (Adam Smith) = être le meilleur. Avantage **comparatif** (Ricardo) = se spécialiser là où l’on est **relativement** le meilleur. C’est ce dernier qui fonde le gain à l’échange.' },
    ]),
    S('📦 Balance commerciale et balance des paiements', [
      { t: 'p', c: 'Les échanges d’un pays avec le reste du monde se mesurent par des **soldes**. La **balance commerciale** compare les **exportations** (ventes à l’étranger) et les **importations** (achats à l’étranger) de **biens**.' },
      { t: 'formula', c: 'Solde commercial = Exportations − Importations' },
      { t: 'list', c: [
        'Solde **positif** → **excédent** commercial (on vend plus qu’on n’achète).',
        'Solde **négatif** → **déficit** commercial (on importe plus qu’on n’exporte).',
      ] },
      { t: 'p', c: 'La **balance des paiements** est plus large : elle enregistre **tous** les flux économiques et financiers d’un pays avec l’étranger (biens, services, revenus, capitaux). La balance commerciale n’en est qu’une partie.' },
      { t: 'p', c: 'Un déficit commercial durable peut traduire un **manque de compétitivité** (les produits nationaux se vendent mal), mais aussi une **demande interne dynamique** (le pays consomme et importe beaucoup). L’interprétation dépend du contexte : un déficit n’est pas toujours un mauvais signe.' },
      { t: 'tip', h: 'À retenir', c: 'Balance **commerciale** = biens (exportations − importations). Balance des **paiements** = tous les flux (biens, services, revenus, capitaux). Excédent = +, déficit = −.' },
    ]),
    S('⚔️ Libre-échange contre protectionnisme', [
      { t: 'p', c: 'Faut-il ouvrir totalement les frontières (**libre-échange**) ou protéger la production nationale (**protectionnisme**) ? C’est l’un des grands débats de l’économie internationale.' },
      { t: 'table', head: ['', 'Libre-échange', 'Protectionnisme'], rows: [
        ['Principe', 'Supprimer les barrières aux échanges', 'Protéger par des barrières'],
        ['Outils', 'Accords de libre-échange, OMC', 'Droits de douane, quotas, normes'],
        ['Avantages', 'Prix bas, choix, spécialisation, croissance', 'Protège l’emploi et les industries naissantes'],
        ['Risques', 'Concurrence dure, délocalisations, dépendance', 'Représailles, prix élevés, perte d’efficacité'],
      ] },
      { t: 'p', c: 'Le libre-échange fait des **gagnants** (consommateurs, secteurs exportateurs) **et des perdants** (secteurs concurrencés, emplois délocalisés). D’où la nécessité de politiques d’**accompagnement** (formation, reconversion) pour ceux qui subissent l’ouverture.' },
      { t: 'p', c: 'Le protectionnisme peut protéger temporairement une **industrie naissante** (argument de Friedrich List) ou un secteur stratégique, mais il expose à des **représailles** des partenaires et renchérit les prix pour les consommateurs. La plupart des économistes penchent pour un libre-échange **encadré**.' },
      { t: 'tip', h: 'À retenir', c: 'Le libre-échange **enrichit globalement** mais **redistribue les cartes** : il crée des gagnants et des perdants. Un bon devoir montre les **deux faces** et propose un accompagnement des perdants.' },
    ]),
    S('🏭 Firmes multinationales et mondialisation', [
      { t: 'p', c: 'La **mondialisation** est l’intégration croissante des économies par les échanges de biens, de services, de capitaux et d’informations. Ses acteurs majeurs sont les **firmes multinationales (FMN)** : des entreprises qui implantent des filiales dans plusieurs pays.' },
      { t: 'p', c: 'Les FMN organisent la production à l’échelle mondiale pour **optimiser leurs coûts** : elles localisent chaque étape là où c’est le plus avantageux (main-d’œuvre, fiscalité, proximité des marchés). C’est la logique des **chaînes de valeur mondiales**.' },
      { t: 'list', c: [
        '**Avantages pour les pays d’accueil** : emplois, transferts de technologie, investissements.',
        '**Risques** : dépendance, concurrence fiscale entre États, délocalisations, moindre pouvoir des États face à des géants mondiaux.',
      ] },
      { t: 'p', c: 'La mondialisation a **réduit les prix** et sorti des centaines de millions de personnes de la pauvreté, mais elle a aussi **accru certaines inégalités** et fragilisé des territoires touchés par les délocalisations. Elle pose enfin la question de la **souveraineté** (dépendance aux importations révélée par les crises récentes).' },
      { t: 'tip', h: 'À retenir', c: 'FMN = actrices centrales de la mondialisation, qui organisent des **chaînes de valeur mondiales**. Bilan **contrasté** : gains de prix et de croissance, mais inégalités, dépendances et concurrence fiscale.' },
    ]),
    S('💶 Exemple chiffré guidé — la balance commerciale', [
      { t: 'p', c: '**Énoncé.** Un pays exporte pour 480 milliards € de biens et en importe pour 540 milliards €. Calculez le solde commercial, dites s’il est excédentaire ou déficitaire, et proposez deux explications possibles.' },
      { t: 'example', h: 'Étape 1 — Solde commercial', c: 'Solde = Exportations − Importations = 480 − 540 = **− 60 milliards €**.' },
      { t: 'example', h: 'Étape 2 — Interprétation', c: 'Le solde est **négatif** : le pays est en **déficit** commercial (il importe plus qu’il n’exporte).' },
      { t: 'p', c: '**Étape 3 — Explications possibles.** (1) Un **manque de compétitivité** : les produits nationaux se vendent mal à l’export, ou coûtent plus cher que les produits importés. (2) Une **demande intérieure forte** qui tire les importations (le pays consomme beaucoup, y compris des produits étrangers). (3) Une **facture énergétique** élevée (importations de pétrole/gaz). Le déficit n’est pas nécessairement un signe de faiblesse : tout dépend de sa **cause** et de sa **durée**.' },
      { t: 'tip', h: 'Méthode', c: 'Toujours : 1) **calculer** le solde (Exp − Imp), 2) **qualifier** (excédent/déficit), 3) **expliquer** par la compétitivité, la demande interne ou des facteurs particuliers (énergie). Nuancer : un déficit n’est pas toujours « mauvais ».' },
    ]),
  ],

  // ---- Thème 9 — Croissance et développement durable ---------------
  'eco-t9': [
    S('📈 La croissance, le PIB et ses limites', [
      { t: 'p', c: 'La **croissance économique** est l’augmentation **durable** de la production de richesses d’un pays. On la mesure par la variation du **PIB (Produit Intérieur Brut)**, qui additionne toute la **valeur ajoutée** produite sur le territoire pendant une année.' },
      { t: 'formula', c: 'Taux de croissance = ((PIB année N − PIB année N-1) ÷ PIB année N-1) × 100' },
      { t: 'p', c: 'Le PIB est un indicateur **puissant mais imparfait**. Il mesure ce qui se **vend**, mais ignore beaucoup de choses essentielles au bien-être — et compte parfois comme « richesse » ce qui n’en est pas.' },
      { t: 'list', c: [
        'Il **ignore** le travail non marchand (bénévolat, travail domestique) et la production **gratuite**.',
        'Il **ne dit rien** des **inégalités** : un PIB qui augmente peut cacher une richesse captée par une minorité.',
        'Il **compte positivement** des activités néfastes : réparer les dégâts d’une catastrophe **augmente** le PIB.',
        'Il **ignore l’épuisement** des ressources et la **dégradation** de l’environnement.',
      ] },
      { t: 'warning', h: '« Le PIB ment-il ? »', c: 'Le PIB mesure une **quantité** produite, pas la **qualité de vie** ni la **soutenabilité**. Une croissance forte peut s’accompagner d’une baisse du bien-être si elle détruit l’environnement ou creuse les inégalités.' },
    ]),
    S('🌱 Le développement durable et ses trois piliers', [
      { t: 'p', c: 'Le **développement durable** est « un développement qui répond aux besoins du présent **sans compromettre** la capacité des générations futures à répondre aux leurs » (rapport **Brundtland**, 1987). Il cherche à concilier **trois piliers** indissociables.' },
      { t: 'table', head: ['Pilier', 'Enjeu'], rows: [
        ['Économique', 'Produire des richesses, assurer la viabilité'],
        ['Social', 'Réduire les inégalités, garantir des conditions de vie dignes'],
        ['Environnemental', 'Préserver les ressources et les écosystèmes'],
      ] },
      { t: 'p', c: 'Il faut distinguer **croissance** (quantitatif : plus de production) et **développement** (qualitatif : amélioration durable des conditions de vie — santé, éducation, environnement). Une croissance qui détruit l’environnement ou creuse les inégalités n’est pas un vrai développement.' },
      { t: 'p', c: 'Le débat oppose la **soutenabilité faible** (le capital naturel détruit peut être remplacé par du capital technique/humain — on peut « compenser ») et la **soutenabilité forte** (certaines ressources naturelles sont **irremplaçables** et doivent être **préservées** absolument).' },
      { t: 'tip', h: 'À retenir', c: '3 piliers : **économique, social, environnemental**. Croissance = quantité ; développement = qualité **durable**. Soutenabilité **faible** (compensable) vs **forte** (préservation).' },
    ]),
    S('🔄 Externalités et instruments pour la planète', [
      { t: 'p', c: 'Les atteintes à l’environnement sont typiquement des **externalités négatives** : une pollution dont le coût n’est pas supporté par celui qui la produit, mais par la société. Le marché seul ne les corrige pas ; l’action publique dispose de plusieurs **instruments**.' },
      { t: 'table', head: ['Instrument', 'Principe', 'Exemple'], rows: [
        ['Réglementation', 'Interdire ou fixer des normes', 'Normes anti-pollution, interdiction de produits'],
        ['Taxe (fiscalité verte)', 'Faire payer le pollueur (principe pollueur-payeur)', 'Taxe carbone'],
        ['Marché de quotas', 'Plafonner puis échanger des droits à polluer', 'Marché européen du carbone (ETS)'],
        ['Subvention', 'Encourager les comportements vertueux', 'Aide à la rénovation, au vélo'],
      ] },
      { t: 'p', c: 'La **taxe** (comme la taxe carbone) intègre le coût environnemental dans le prix : elle **incite** à moins polluer tout en dégageant des recettes. Le **marché de quotas** fixe un plafond global d’émissions et laisse les entreprises **échanger** des droits, ce qui oriente l’effort là où il coûte le moins cher. Ces instruments **économiques** complètent la **réglementation** classique.' },
      { t: 'example', h: 'Illustration — la fast fashion', c: 'Produire des vêtements très bon marché génère d’énormes coûts cachés (pollution, gaspillage d’eau, déchets) non payés par le vendeur ni l’acheteur : une **externalité négative** massive, que des taxes ou des normes pourraient internaliser.' },
      { t: 'tip', h: 'À retenir', c: 'Pollution = **externalité négative**. Instruments : **réglementation, taxe (pollueur-payeur), marché de quotas, subvention**. Les instruments économiques (taxe, quotas) agissent par le **prix**.' },
    ]),
    S('🧭 Mesurer autrement : IDH et indicateurs alternatifs', [
      { t: 'p', c: 'Puisque le PIB ne dit pas tout, des **indicateurs alternatifs** cherchent à mesurer le **développement** et le **bien-être** de façon plus complète.' },
      { t: 'p', c: 'Le plus connu est l’**IDH (Indice de Développement Humain)**, créé par le PNUD. Il combine **trois dimensions** pour donner une note entre 0 et 1.' },
      { t: 'list', c: [
        '**La santé**, mesurée par l’**espérance de vie**.',
        '**L’éducation**, mesurée par la durée de scolarisation.',
        '**Le niveau de vie**, mesuré par le **revenu** par habitant.',
      ] },
      { t: 'p', c: 'D’autres indicateurs vont plus loin : l’**empreinte écologique** (surface nécessaire pour soutenir un mode de vie), l’**indice de Gini** (mesure des inégalités), ou des indicateurs de **bien-être** subjectif. Aucun n’est parfait, mais **croiser plusieurs indicateurs** donne une image bien plus juste qu’un PIB seul.' },
      { t: 'example', h: 'Comparaison', c: 'Deux pays peuvent avoir un PIB par habitant proche mais un **IDH très différent** si l’un investit dans la santé et l’éducation et l’autre non. L’IDH révèle ce que le PIB masque.' },
      { t: 'tip', h: 'À retenir', c: 'IDH = **santé + éducation + revenu** (entre 0 et 1). Pour juger le développement, **croiser** PIB, IDH, empreinte écologique et inégalités.' },
    ]),
    S('💶 Exemple guidé — croissance et soutenabilité', [
      { t: 'p', c: '**Énoncé.** Le PIB d’un pays passe de 500 à 520 milliards € en un an, mais son empreinte écologique dépasse largement sa biocapacité et ses inégalités augmentent. Calculez la croissance et portez un jugement nuancé.' },
      { t: 'example', h: 'Étape 1 — Taux de croissance', c: 'Taux = ((520 − 500) ÷ 500) × 100 = (20 ÷ 500) × 100 = **+ 4 %**.' },
      { t: 'p', c: '**Étape 2 — Lecture économique.** Une croissance de +4 % est **soutenue** : la production de richesses augmente nettement, ce qui peut soutenir l’emploi et les recettes publiques.' },
      { t: 'p', c: '**Étape 3 — Jugement nuancé.** Mais cette croissance n’est **pas soutenable** : l’empreinte écologique dépasse la biocapacité (on épuise le capital naturel — logique de **soutenabilité forte** non respectée), et la hausse des **inégalités** signifie que la richesse profite inégalement. Le PIB progresse, mais le **développement durable**, lui, régresse. **Conclusion** : la croissance quantitative ne garantit ni le bien-être, ni l’avenir.' },
      { t: 'tip', h: 'Méthode', c: 'Calculer le taux, saluer l’aspect quantitatif, **puis** confronter aux **trois piliers** (social, environnemental) et à la **soutenabilité**. Un bon jugement est toujours **nuancé** : croissance ≠ développement durable.' },
    ]),
  ],

  // #####################################################################
  // MATHÉMATIQUES (Terminale STMG)
  // #####################################################################

  // ---- Chapitre 1 — Informations chiffrées -------------------------
  'math-c1': [
    S('📊 Taux d’évolution et coefficient multiplicateur', [
      { t: 'p', c: 'Un **taux d’évolution** mesure une variation **relative** (en pourcentage) entre une valeur de départ (**valeur initiale**, Vᵢ) et une valeur d’arrivée (**valeur finale**, V_f). C’est l’outil de base pour comparer des évolutions de tailles différentes.' },
      { t: 'formula', c: 'Taux d’évolution : t = (V_f − V_i) ÷ V_i   (à convertir en %)' },
      { t: 'p', c: 'À chaque taux correspond un **coefficient multiplicateur (CM)** : le nombre par lequel on multiplie la valeur initiale pour obtenir la valeur finale. C’est souvent **plus rapide et plus sûr** que de manipuler les pourcentages.' },
      { t: 'formula', c: 'CM = 1 + t   et   V_f = V_i × CM   donc   CM = V_f ÷ V_i' },
      { t: 'table', head: ['Évolution', 'Taux t', 'Coefficient multiplicateur'], rows: [
        ['+ 20 %', '+0,20', '1,20'],
        ['+ 5 %', '+0,05', '1,05'],
        ['− 30 %', '−0,30', '0,70'],
        ['− 100 %', '−1', '0'],
      ] },
      { t: 'example', h: 'Exemple', c: 'Un prix passe de 80 € à 100 €. CM = 100 ÷ 80 = 1,25 → t = 1,25 − 1 = 0,25 = **+ 25 %**.' },
      { t: 'warning', h: 'Piège', c: 'Une hausse de 20 % suivie d’une baisse de 20 % ne ramène **pas** au prix de départ : 1,20 × 0,80 = 0,96, soit **− 4 %** au total. Les pourcentages ne s’additionnent pas, les coefficients se **multiplient**.' },
    ]),
    S('🔁 Évolutions successives et taux moyen', [
      { t: 'p', c: 'Quand plusieurs évolutions **s’enchaînent**, on ne les additionne pas : on **multiplie leurs coefficients** pour obtenir le **coefficient global**.' },
      { t: 'formula', c: 'CM global = CM₁ × CM₂ × … × CMₙ' },
      { t: 'example', h: 'Évolutions successives', c: 'Un chiffre d’affaires augmente de 10 % puis de 30 %.\nCM global = 1,10 × 1,30 = 1,43 → soit une hausse **globale de + 43 %** (et non +40 %).' },
      { t: 'p', c: 'Le **taux moyen** répond à la question : « quelle évolution **identique**, répétée n fois, donnerait le même résultat global ? ». On cherche le coefficient moyen dont la puissance n-ième égale le coefficient global.' },
      { t: 'formula', c: 'CM moyen = (CM global)^(1/n)   puis   t moyen = CM moyen − 1' },
      { t: 'example', h: 'Taux moyen', c: 'Une population croît de 44 % en 2 ans. CM global = 1,44.\nCM moyen = 1,44^(1/2) = √1,44 = 1,20 → t moyen = **+ 20 % par an**.\nVérification : 1,20 × 1,20 = 1,44. ✓' },
      { t: 'warning', h: 'Piège', c: 'Le taux moyen n’est **pas** la moyenne arithmétique des taux ! Pour +10 % puis +30 %, le taux moyen n’est pas 20 % : c’est √(1,10×1,30) − 1 ≈ **+ 19,6 %**.' },
    ]),
    S('↩️ Taux réciproque et indice base 100', [
      { t: 'p', c: 'Le **taux réciproque** est l’évolution qui **annule** une évolution donnée (pour revenir à la valeur de départ). Son coefficient est l’**inverse** du coefficient de départ.' },
      { t: 'formula', c: 'CM réciproque = 1 ÷ CM   puis   t réciproque = CM réciproque − 1' },
      { t: 'example', h: 'Taux réciproque', c: 'Un prix a augmenté de 25 % (CM = 1,25). Pour revenir au prix initial, il faut le multiplier par 1 ÷ 1,25 = 0,80, soit une baisse de **− 20 %** (et non −25 %).' },
      { t: 'p', c: 'Les **indices** permettent de suivre et comparer des évolutions en fixant une valeur de référence à **100**. L’indice d’une valeur se calcule par proportionnalité avec la valeur de référence.' },
      { t: 'formula', c: 'Indice = (Valeur ÷ Valeur de référence) × 100' },
      { t: 'example', h: 'Indice base 100', c: 'Base 2020 : un prix de 40 € en 2020 (indice 100) passe à 46 € en 2024.\nIndice 2024 = (46 ÷ 40) × 100 = 115 → le prix a augmenté de **15 %** entre 2020 et 2024.' },
      { t: 'tip', h: 'À retenir', c: 'Un indice supérieur à 100 = hausse ; inférieur à 100 = baisse. L’écart de l’indice à 100 donne **directement** le pourcentage d’évolution depuis la base.' },
    ]),
    S('🧮 Exercice type guidé + méthode', [
      { t: 'p', c: '**Énoncé.** Le loyer d’un studio est de 500 € en 2022. Il augmente de 4 % en 2023, puis de 6 % en 2024. Calculer le loyer en 2024, l’évolution globale et le taux annuel moyen.' },
      { t: 'example', h: 'Étape 1 — Loyer 2024', c: 'CM = 1,04 × 1,06 = 1,1024.\nLoyer 2024 = 500 × 1,1024 = **551,20 €**.' },
      { t: 'example', h: 'Étape 2 — Évolution globale', c: 'CM global = 1,1024 → t global = 0,1024 = **+ 10,24 %** entre 2022 et 2024.' },
      { t: 'example', h: 'Étape 3 — Taux annuel moyen', c: 'CM moyen = 1,1024^(1/2) = √1,1024 ≈ 1,04995.\nt moyen ≈ **+ 5,0 % par an**.' },
      { t: 'tip', h: 'Méthode « informations chiffrées »', c: '1) Traduire chaque évolution en **coefficient** (1 + t). 2) **Multiplier** les coefficients pour l’évolution globale. 3) Pour le taux moyen, prendre la **racine n-ième** du coefficient global. 4) Toujours **vérifier** l’ordre de grandeur et convertir en %.' },
      { t: 'warning', h: 'Erreurs qui coûtent des points', c: 'Additionner les pourcentages, oublier de repasser du coefficient au taux (CM − 1), ou confondre taux moyen et moyenne des taux.' },
    ]),
  ],

  // ---- Chapitre 2 — Suites numériques ------------------------------
  'math-c2': [
    S('🔢 Deux types de suites : arithmétique et géométrique', [
      { t: 'p', c: 'Une **suite** (uₙ) est une liste ordonnée de nombres, où chaque terme porte un **rang** n. On la définit souvent par **récurrence** : on donne le premier terme et une règle pour passer d’un terme au suivant. Deux modèles reviennent partout : l’arithmétique et la géométrique.' },
      { t: 'table', head: ['', 'Arithmétique', 'Géométrique'], rows: [
        ['Passage au suivant', 'On ajoute une raison r', 'On multiplie par une raison q'],
        ['Récurrence', 'uₙ₊₁ = uₙ + r', 'uₙ₊₁ = uₙ × q'],
        ['Situation type', 'Évolution constante (+ 50 €/mois)', 'Évolution en pourcentage (+ 3 %/an)'],
      ] },
      { t: 'p', c: 'La différence fondamentale : dans une suite **arithmétique**, on **ajoute toujours le même nombre** (croissance **linéaire**) ; dans une suite **géométrique**, on **multiplie toujours par le même nombre** (croissance **exponentielle**). Une évolution en **pourcentage constant** est toujours **géométrique**.' },
      { t: 'tip', h: 'Reconnaître', c: 'Différence constante entre termes consécutifs → **arithmétique** (raison r = uₙ₊₁ − uₙ). Rapport constant entre termes consécutifs → **géométrique** (raison q = uₙ₊₁ ÷ uₙ).' },
    ]),
    S('📐 Terme général et somme', [
      { t: 'p', c: 'Le **terme général** donne uₙ **directement** en fonction de n, sans calculer tous les termes précédents. C’est indispensable pour trouver un terme lointain (le 20ᵉ, le 100ᵉ).' },
      { t: 'formula', c: 'Arithmétique : uₙ = u₀ + n × r   (ou uₙ = u₁ + (n−1) × r)' },
      { t: 'formula', c: 'Géométrique : uₙ = u₀ × qⁿ   (ou uₙ = u₁ × q^(n−1))' },
      { t: 'example', h: 'Calcul d’un terme', c: 'Arithmétique u₀ = 200, r = 15 : u₁₀ = 200 + 10 × 15 = **350**.\nGéométrique u₀ = 200, q = 1,05 : u₁₀ = 200 × 1,05¹⁰ ≈ **325,8**.' },
      { t: 'p', c: 'On sait aussi **additionner** les premiers termes. Pour une suite **géométrique** de raison q ≠ 1, la somme des n premiers termes suit une formule très utile (calcul d’un capital, d’un cumul de ventes).' },
      { t: 'formula', c: 'Somme géométrique : S = u₀ × (1 − q^(n)) ÷ (1 − q)   (n = nombre de termes)' },
      { t: 'warning', h: 'Attention aux rangs', c: 'Bien repérer si la suite commence à u₀ ou u₁ : cela change le « n » dans la formule du terme général. Compter le **nombre de pas** effectués depuis le premier terme.' },
    ]),
    S('🧮 Exercice type guidé — arithmétique vs géométrique', [
      { t: 'p', c: '**Énoncé.** Deux placements de 1 000 €. Placement A : + 60 € chaque année. Placement B : + 5 % chaque année. Comparer leur valeur au bout de 10 ans.' },
      { t: 'example', h: 'Étape 1 — Modéliser', c: 'Placement A → suite **arithmétique** : a₀ = 1000, r = 60.\nPlacement B → suite **géométrique** : b₀ = 1000, q = 1,05.' },
      { t: 'example', h: 'Étape 2 — Valeur à 10 ans', c: 'A : a₁₀ = 1000 + 10 × 60 = **1 600 €**.\nB : b₁₀ = 1000 × 1,05¹⁰ ≈ 1000 × 1,6289 ≈ **1 628,90 €**.' },
      { t: 'p', c: '**Étape 3 — Interprétation.** Sur 10 ans, le placement **géométrique** (B) dépasse légèrement l’arithmétique (A). Surtout, l’écart **s’accentue avec le temps** : la croissance en pourcentage (géométrique) finit toujours par l’emporter sur une croissance à montant fixe (arithmétique). C’est la puissance des **intérêts composés**.' },
      { t: 'tip', h: 'Méthode « suites »', c: '1) **Identifier** le type (différence constante ? rapport constant ?). 2) Écrire la **récurrence** et le **terme général**. 3) Calculer le terme demandé avec la formule (pas terme par terme). 4) **Comparer/interpréter** en une phrase.' },
    ]),
  ],

  // ---- Chapitre 3 — Fonctions et dérivation ------------------------
  'math-c3': [
    S('📈 Nombre dérivé et tangente', [
      { t: 'p', c: 'Le **nombre dérivé** de f en a, noté **f ′(a)**, est le **coefficient directeur de la tangente** à la courbe au point d’abscisse a. Autrement dit, il mesure la **pente** de la courbe à cet endroit : la vitesse à laquelle f varie autour de a.' },
      { t: 'p', c: 'La **tangente** est la droite qui « épouse » la courbe au point A(a ; f(a)). Son équation se déduit directement du nombre dérivé.' },
      { t: 'formula', c: 'Équation de la tangente en a : y = f ′(a) × (x − a) + f(a)' },
      { t: 'p', c: 'La **fonction dérivée** f ′ associe à chaque x le nombre dérivé en ce point. On la calcule avec des **formules** à connaître par cœur.' },
      { t: 'table', head: ['f(x)', 'f ′(x)'], rows: [
        ['k (constante)', '0'],
        ['x', '1'],
        ['x²', '2x'],
        ['xⁿ', 'n·xⁿ⁻¹'],
        ['1/x', '−1/x²'],
        ['k·u(x)', 'k·u ′(x)'],
      ] },
      { t: 'example', h: 'Calcul', c: 'f(x) = 3x² − 5x + 2. Alors f ′(x) = 6x − 5.\nEn a = 1 : f ′(1) = 1 (pente) et f(1) = 0 → tangente : y = 1(x − 1) + 0 = **x − 1**.' },
    ]),
    S('📉 Du signe de la dérivée aux variations', [
      { t: 'p', c: 'La dérivée est l’outil roi pour étudier les **variations** d’une fonction. La règle fondamentale relie le **signe de f ′** au sens de variation de f.' },
      { t: 'list', c: [
        'Si **f ′(x) > 0** sur un intervalle → f est **croissante** sur cet intervalle.',
        'Si **f ′(x) < 0** sur un intervalle → f est **décroissante** sur cet intervalle.',
        'Si **f ′(x) = 0** et que f ′ **change de signe** → f admet un **extremum** (maximum ou minimum) en ce point.',
      ] },
      { t: 'p', c: 'Étudier les variations, c’est donc : calculer f ′, **étudier son signe**, puis dresser le **tableau de variations**. Un maximum correspond à un passage de f ′ du **positif au négatif** ; un minimum, du **négatif au positif**.' },
      { t: 'example', h: 'Optimisation', c: 'f(x) = −x² + 4x (bénéfice selon la quantité x).\nf ′(x) = −2x + 4. f ′(x) = 0 pour x = 2. f ′ passe de + à − → **maximum** en x = 2.\nBénéfice maximal : f(2) = −4 + 8 = **4**.' },
      { t: 'tip', h: 'Lien avec la gestion', c: 'La dérivée sert à **optimiser** : trouver la quantité qui **maximise le bénéfice** ou **minimise le coût**. On cherche là où f ′ s’annule en changeant de signe.' },
    ]),
    S('🧮 Exercice type guidé — dérivée et optimisation', [
      { t: 'p', c: '**Énoncé.** Le bénéfice (en milliers €) d’une entreprise selon la quantité x (en centaines d’unités) est B(x) = −x² + 10x − 16, pour x ∈ [0 ; 10]. Déterminer la quantité qui maximise le bénéfice et ce bénéfice.' },
      { t: 'example', h: 'Étape 1 — Dérivée', c: 'B ′(x) = −2x + 10.' },
      { t: 'example', h: 'Étape 2 — Signe de la dérivée', c: 'B ′(x) = 0 ⇔ −2x + 10 = 0 ⇔ x = 5.\nB ′(x) > 0 pour x < 5 (croissant) ; B ′(x) < 0 pour x > 5 (décroissant).' },
      { t: 'example', h: 'Étape 3 — Maximum', c: 'B ′ passe de + à − en x = 5 → **maximum** en x = 5.\nB(5) = −25 + 50 − 16 = **9**, soit **9 000 €** pour **500 unités**.' },
      { t: 'tip', h: 'Méthode « étude de fonction »', c: '1) Calculer **f ′(x)**. 2) Résoudre **f ′(x) = 0** et étudier son **signe**. 3) Dresser le **tableau de variations**. 4) Répondre à la question concrète (extremum, tangente) avec **unités**.' },
    ]),
  ],

  // ---- Chapitre 4 — Statistiques à deux variables ------------------
  'math-c4': [
    S('☁️ Nuage de points et ajustement affine', [
      { t: 'p', c: 'On étudie ici le **lien entre deux variables** (par exemple : le budget publicitaire et le chiffre d’affaires). Chaque couple de valeurs (xᵢ ; yᵢ) donne un **point** ; l’ensemble forme un **nuage de points**.' },
      { t: 'p', c: 'Si les points sont **approximativement alignés**, on peut résumer le nuage par une **droite d’ajustement** (ou droite de régression) d’équation **y = a x + b**, obtenue par la méthode des **moindres carrés** (à la calculatrice en STMG). Elle permet de **modéliser** la relation et de **prévoir**.' },
      { t: 'p', c: 'Cette droite passe toujours par le **point moyen G** du nuage, de coordonnées les moyennes de x et de y.' },
      { t: 'formula', c: 'Point moyen : G ( x̄ ; ȳ )   où x̄ et ȳ sont les moyennes' },
      { t: 'tip', h: 'Avec la calculatrice', c: 'On saisit les données dans deux listes, puis on utilise la fonction de **régression linéaire** (a x + b) : la calculatrice donne directement **a** (pente) et **b** (ordonnée à l’origine).' },
    ]),
    S('🔮 Interpoler, extrapoler et interpréter', [
      { t: 'p', c: 'Une fois l’équation **y = a x + b** obtenue, on l’utilise pour **estimer** une valeur de y correspondant à une valeur de x. On distingue deux situations.' },
      { t: 'list', c: [
        '**Interpolation** : estimer une valeur **à l’intérieur** de la plage des données observées. Généralement **fiable**.',
        '**Extrapolation** : estimer une valeur **au-delà** des données observées (prévoir le futur). **Plus risquée** : on suppose que la tendance se poursuit, ce qui n’est pas garanti.',
      ] },
      { t: 'p', c: 'Le **coefficient a** s’interprète concrètement : c’est la variation de y quand x **augmente de 1**. Le **coefficient b** est la valeur de y quand x = 0. Toujours donner le **sens réel** de ces nombres dans le contexte de l’énoncé.' },
      { t: 'example', h: 'Prévision', c: 'Ajustement CA = 2,5 x + 40 (x = budget pub en k€, CA en k€).\nPour x = 20 : CA ≈ 2,5 × 20 + 40 = **90 k€**.\nInterprétation de a = 2,5 : chaque 1 000 € de pub supplémentaire rapporte **2 500 €** de CA.' },
      { t: 'warning', h: 'Piège', c: 'L’ajustement n’est valable **que si les points sont bien alignés**. Extrapoler très loin (x = 1000 alors que les données vont jusqu’à 30) donne un résultat **peu fiable** : à signaler dans la copie.' },
    ]),
    S('🧮 Exercice type guidé — ajustement et prévision', [
      { t: 'p', c: '**Énoncé.** On relève le nombre d’abonnés y (en milliers) d’un service selon l’année de rang x. La calculatrice donne l’ajustement affine y = 8x + 25. Prévoir le nombre d’abonnés pour x = 12 et interpréter la pente.' },
      { t: 'example', h: 'Étape 1 — Prévision', c: 'Pour x = 12 : y = 8 × 12 + 25 = 96 + 25 = **121 milliers d’abonnés**.' },
      { t: 'example', h: 'Étape 2 — Interprétation de a', c: 'a = 8 : chaque année, le service gagne en moyenne **8 000 abonnés** (la pente est le rythme de croissance annuel).' },
      { t: 'p', c: '**Étape 3 — Regard critique.** La prévision suppose que la **tendance linéaire se poursuit**. Si x = 12 dépasse largement les données observées, c’est une **extrapolation** à prendre avec prudence (saturation possible du marché). Une prévision n’est jamais une certitude.' },
      { t: 'tip', h: 'Méthode « stats 2 variables »', c: '1) (Éventuellement) tracer le nuage et vérifier l’**alignement**. 2) Obtenir **y = a x + b** à la calculatrice. 3) **Remplacer** x pour prévoir. 4) **Interpréter** a et b dans le contexte, et signaler si l’on **extrapole**.' },
    ]),
  ],

  // ---- Chapitre 5 — Probabilités conditionnelles -------------------
  'math-c5': [
    S('🌳 Probabilité conditionnelle et arbre pondéré', [
      { t: 'p', c: 'Une **probabilité conditionnelle** est la probabilité d’un événement B **sachant que** l’événement A est déjà réalisé. On la note **P_A(B)** (« probabilité de B sachant A »). Elle traduit l’idée qu’une information (A) modifie la probabilité de B.' },
      { t: 'formula', c: 'P_A(B) = P(A ∩ B) ÷ P(A)   (avec P(A) ≠ 0)' },
      { t: 'p', c: 'L’**arbre pondéré** est l’outil visuel central. Chaque **branche** porte une probabilité. Deux **règles d’or** permettent de tout calculer.' },
      { t: 'list', c: [
        '**Règle du produit** : la probabilité d’un **chemin** (une suite de branches) est le **produit** des probabilités rencontrées le long du chemin.',
        '**Règle de la somme** : la somme des probabilités des branches **partant d’un même nœud** vaut **1**.',
      ] },
      { t: 'example', h: 'Lecture d’un chemin', c: 'Si P(A) = 0,6 et P_A(B) = 0,3, alors P(A ∩ B) = P(A) × P_A(B) = 0,6 × 0,3 = **0,18** (produit le long du chemin A puis B).' },
      { t: 'tip', h: 'À retenir', c: 'Sur un arbre : on **multiplie** le long d’un chemin, on **additionne** les chemins qui mènent au même résultat. Les branches issues d’un nœud somment à 1.' },
    ]),
    S('➕ Formule des probabilités totales', [
      { t: 'p', c: 'Quand un événement B peut être atteint par **plusieurs chemins** (via A ou via son contraire Ā), sa probabilité est la **somme** des probabilités de ces chemins : c’est la **formule des probabilités totales**.' },
      { t: 'formula', c: 'P(B) = P(A ∩ B) + P(Ā ∩ B) = P(A)×P_A(B) + P(Ā)×P_Ā(B)' },
      { t: 'p', c: 'Concrètement, on **repère tous les chemins de l’arbre qui aboutissent à B**, on calcule la probabilité de chacun (produit), puis on les **additionne**. C’est la question la plus fréquente au bac sur ce chapitre.' },
      { t: 'example', h: 'Application', c: 'Une usine a 2 machines. A fabrique 60 % des pièces avec 2 % de défauts ; l’autre (Ā) 40 % avec 5 % de défauts.\nP(défaut) = 0,60 × 0,02 + 0,40 × 0,05 = 0,012 + 0,020 = **0,032** (soit 3,2 %).' },
      { t: 'p', c: 'On peut ensuite « **remonter** » l’arbre avec la formule conditionnelle : par exemple, sachant qu’une pièce est défectueuse, quelle est la probabilité qu’elle vienne de A ? P_défaut(A) = P(A ∩ défaut) ÷ P(défaut) = 0,012 ÷ 0,032 = **0,375**.' },
      { t: 'tip', h: 'À retenir', c: 'Probabilités totales = **somme de tous les chemins** menant à l’événement. Pour une « probabilité inversée » (remonter à la cause), utiliser P_B(A) = P(A ∩ B) ÷ P(B).' },
    ]),
    S('🔗 Indépendance de deux événements', [
      { t: 'p', c: 'Deux événements sont **indépendants** lorsque la réalisation de l’un **ne change pas** la probabilité de l’autre. Savoir que A s’est produit n’apporte alors aucune information sur B.' },
      { t: 'formula', c: 'A et B indépendants  ⇔  P(A ∩ B) = P(A) × P(B)   ⇔  P_A(B) = P(B)' },
      { t: 'example', h: 'Test d’indépendance', c: 'P(A) = 0,5 ; P(B) = 0,4 ; P(A ∩ B) = 0,2.\nP(A) × P(B) = 0,5 × 0,4 = 0,2 = P(A ∩ B) → A et B sont **indépendants**.\nSi l’on avait trouvé P(A ∩ B) ≠ 0,2, ils seraient **dépendants**.' },
      { t: 'warning', h: 'Ne pas confondre', c: '**Indépendants** (P(A∩B) = P(A)×P(B)) ≠ **incompatibles** (P(A∩B) = 0, ils ne peuvent se produire ensemble). Deux événements incompatibles de probabilités non nulles sont au contraire **dépendants** !' },
      { t: 'tip', h: 'À retenir', c: 'Pour prouver l’indépendance, **comparer** P(A ∩ B) avec le **produit** P(A) × P(B). Égalité → indépendants.' },
    ]),
    S('🧮 Exercice type guidé — arbre et probabilité conditionnelle', [
      { t: 'p', c: '**Énoncé.** 70 % des élèves d’une classe sont en spé Gestion (G), les autres en autre spé (Ḡ). 80 % des « G » sont inscrits à un tutorat, contre 40 % des « Ḡ ». On choisit un élève au hasard.' },
      { t: 'example', h: 'Étape 1 — Arbre', c: 'P(G) = 0,7 ; P_G(T) = 0,8 ; P(Ḡ) = 0,3 ; P_Ḡ(T) = 0,4 (T = « inscrit au tutorat »).' },
      { t: 'example', h: 'Étape 2 — Probabilité d’être en G ET au tutorat', c: 'P(G ∩ T) = 0,7 × 0,8 = **0,56** (produit le long du chemin).' },
      { t: 'example', h: 'Étape 3 — Probabilité d’être au tutorat (totales)', c: 'P(T) = 0,7 × 0,8 + 0,3 × 0,4 = 0,56 + 0,12 = **0,68**.' },
      { t: 'example', h: 'Étape 4 — Probabilité inversée', c: 'Sachant qu’un élève est au tutorat, probabilité qu’il soit en G :\nP_T(G) = P(G ∩ T) ÷ P(T) = 0,56 ÷ 0,68 ≈ **0,82**.' },
      { t: 'tip', h: 'Méthode « probas »', c: '1) **Construire l’arbre** avec toutes les probabilités. 2) **Produit** le long des chemins pour les intersections. 3) **Somme** des chemins pour un événement (probabilités totales). 4) Pour « remonter », diviser l’intersection par la probabilité totale.' },
    ]),
  ],

  // ---- Chapitre 6 — Loi binomiale ----------------------------------
  'math-c6': [
    S('🎯 L’épreuve et le schéma de Bernoulli', [
      { t: 'p', c: 'Une **épreuve de Bernoulli** est une expérience à **deux issues** seulement : le **succès** (de probabilité p) et l’**échec** (de probabilité 1 − p). Exemples : pile ou face, une pièce « conforme ou défectueuse », un client « qui achète ou non ».' },
      { t: 'p', c: 'Un **schéma de Bernoulli** consiste à **répéter n fois**, de façon **identique et indépendante**, la même épreuve de Bernoulli. C’est la situation modélisée par la loi binomiale.' },
      { t: 'list', c: [
        'Les **conditions** à vérifier : (1) chaque épreuve n’a que **deux issues** ; (2) les épreuves sont **indépendantes** ; (3) la probabilité de succès **p reste constante** ; (4) on répète **n fois**.',
        'La variable aléatoire **X** compte alors le **nombre de succès** parmi les n épreuves.',
      ] },
      { t: 'tip', h: 'À retenir', c: 'Avant d’utiliser la loi binomiale, **justifier** que l’on est bien dans un schéma de Bernoulli : n répétitions **indépendantes**, **deux issues**, **p constant**. C’est souvent la première question notée.' },
    ]),
    S('📊 La loi binomiale B(n ; p)', [
      { t: 'p', c: 'Si X compte le nombre de succès dans un schéma de Bernoulli à **n** épreuves de probabilité de succès **p**, alors X suit la **loi binomiale de paramètres n et p**, notée **X ~ B(n ; p)**.' },
      { t: 'formula', c: 'P(X = k) = C(n, k) × pᵏ × (1 − p)ⁿ⁻ᵏ   pour k = 0, 1, …, n' },
      { t: 'p', c: 'Le coefficient **C(n, k)** (« combinaison de k parmi n ») compte le nombre de façons d’obtenir k succès parmi n épreuves. En STMG, on calcule **P(X = k)**, **P(X ≤ k)** et **P(X ≥ k)** à la **calculatrice** (fonctions binomFdp / binomFRép).' },
      { t: 'p', c: 'L’**espérance** E(X) donne le nombre **moyen** de succès attendu sur un grand nombre de répétitions : c’est un résultat très intuitif et souvent demandé.' },
      { t: 'formula', c: 'Espérance : E(X) = n × p     Écart-type : σ(X) = √( n × p × (1 − p) )' },
      { t: 'example', h: 'Espérance', c: 'On lance 50 fois une pièce (p = 0,5). Nombre moyen de « face » : E(X) = 50 × 0,5 = **25**.' },
      { t: 'warning', h: 'Traduire les énoncés', c: '« au moins k succès » → P(X ≥ k) = 1 − P(X ≤ k − 1). « au plus k » → P(X ≤ k). « exactement k » → P(X = k). Bien traduire est la clé.' },
    ]),
    S('🧮 Exercice type guidé — loi binomiale', [
      { t: 'p', c: '**Énoncé.** Une machine produit des pièces dont **5 %** sont défectueuses. On prélève un échantillon de **n = 20** pièces (production assez grande pour supposer l’indépendance). X = nombre de pièces défectueuses.' },
      { t: 'example', h: 'Étape 1 — Modéliser', c: 'Deux issues (défectueuse/conforme), n = 20 répétitions indépendantes, p = 0,05 constant → **X ~ B(20 ; 0,05)**.' },
      { t: 'example', h: 'Étape 2 — Espérance', c: 'E(X) = n × p = 20 × 0,05 = **1** pièce défectueuse en moyenne par échantillon.' },
      { t: 'example', h: 'Étape 3 — Une probabilité (calculatrice)', c: 'P(X = 0) = 0,95²⁰ ≈ **0,358** : environ 36 % des échantillons ne contiennent **aucune** pièce défectueuse.\nP(X ≥ 1) = 1 − P(X = 0) ≈ 1 − 0,358 = **0,642**.' },
      { t: 'tip', h: 'Méthode « binomiale »', c: '1) **Vérifier** les conditions du schéma de Bernoulli et écrire **X ~ B(n ; p)**. 2) **Traduire** la question (=, ≤, ≥). 3) **Calculatrice** pour la probabilité. 4) Donner **E(X) = np** si demandé et **interpréter**.' },
    ]),
  ],

  // ---- Chapitre 7 — Loi normale et estimation ----------------------
  'math-c7': [
    S('🔔 La loi normale : la courbe en cloche', [
      { t: 'p', c: 'La **loi normale** modélise de nombreux phénomènes « naturels » qui se répartissent **autour d’une valeur centrale** : tailles, poids, erreurs de mesure, durées. Sa représentation est la célèbre **courbe en cloche**, symétrique autour de la moyenne.' },
      { t: 'p', c: 'Elle dépend de **deux paramètres** : la **moyenne μ** (centre de la cloche, axe de symétrie) et l’**écart-type σ** (dispersion : plus σ est grand, plus la cloche est **large et aplatie**). On note **X ~ N(μ ; σ)**.' },
      { t: 'p', c: 'Une probabilité **P(a ≤ X ≤ b)** correspond à l’**aire sous la courbe** entre a et b. En STMG, on la calcule à la **calculatrice** (fonction normalFRép). L’aire totale sous la courbe vaut **1**.' },
      { t: 'table', head: ['Intervalle autour de μ', 'Probabilité ≈'], rows: [
        ['[ μ − σ ; μ + σ ]', '0,68 (68 %)'],
        ['[ μ − 2σ ; μ + 2σ ]', '0,95 (95 %)'],
        ['[ μ − 3σ ; μ + 3σ ]', '0,997 (99,7 %)'],
      ] },
      { t: 'tip', h: 'À retenir', c: 'Courbe **symétrique** autour de μ : P(X ≤ μ) = P(X ≥ μ) = **0,5**. Les « plages » 68 % / 95 % / 99,7 % (règle empirique) sont à connaître.' },
    ]),
    S('📏 Estimation et intervalle de confiance', [
      { t: 'p', c: 'On veut souvent **estimer** une proportion **inconnue** dans une population (le vrai taux de votants, de clients satisfaits…) à partir d’un **échantillon**. La proportion observée dans l’échantillon, notée **f** (fréquence), est une **estimation** de cette proportion.' },
      { t: 'p', c: 'Comme un échantillon donne un résultat un peu différent à chaque fois, on ne donne pas une valeur unique mais un **intervalle de confiance** : une fourchette qui contient la vraie proportion avec un niveau de confiance de **95 %**.' },
      { t: 'formula', c: 'Intervalle de confiance à 95 % :  [ f − 1/√n  ;  f + 1/√n ]' },
      { t: 'p', c: 'Deux idées clés. D’une part, la **largeur** de l’intervalle est 2/√n : plus l’échantillon est **grand** (n élevé), plus l’intervalle est **étroit** et l’estimation **précise**. D’autre part, « 95 % de confiance » signifie que la méthode donne un intervalle **contenant la vraie valeur** dans 95 % des cas.' },
      { t: 'example', h: 'Calcul', c: 'Sur n = 400 clients, f = 0,60 se disent satisfaits.\n1/√400 = 1/20 = 0,05.\nIntervalle : [0,60 − 0,05 ; 0,60 + 0,05] = **[0,55 ; 0,65]**.\nOn estime le taux réel de satisfaction entre **55 % et 65 %** (confiance 95 %).' },
      { t: 'tip', h: 'À retenir', c: 'Intervalle = **f ± 1/√n**. Amplitude = **2/√n**. Pour **diviser l’amplitude par 2**, il faut **multiplier n par 4** (car √n au dénominateur).' },
    ]),
    S('🧮 Exercice type guidé — loi normale et estimation', [
      { t: 'p', c: '**Énoncé.** (A) La masse des paquets de café suit X ~ N(250 ; 4) (en grammes). Quelle proportion de paquets pèse entre 246 g et 254 g ? (B) Un sondage sur 625 personnes donne 52 % d’intentions favorables : donner l’intervalle de confiance à 95 %.' },
      { t: 'example', h: 'Partie A — loi normale', c: 'μ = 250, σ = 4. L’intervalle [246 ; 254] = [μ − σ ; μ + σ] → probabilité ≈ **0,68**.\nEnviron **68 %** des paquets pèsent entre 246 g et 254 g.' },
      { t: 'example', h: 'Partie B — intervalle de confiance', c: 'n = 625, f = 0,52. 1/√625 = 1/25 = 0,04.\nIntervalle : [0,52 − 0,04 ; 0,52 + 0,04] = **[0,48 ; 0,56]**.' },
      { t: 'p', c: '**Interprétation de B.** La vraie proportion d’intentions favorables est estimée entre **48 % et 56 %** avec 95 % de confiance. Comme l’intervalle **contient 50 %**, on ne peut pas affirmer que la majorité est favorable : le résultat n’est **pas significatif**.' },
      { t: 'tip', h: 'Méthode « normale / estimation »', c: 'Loi normale → identifier **μ et σ**, reconnaître les plages 68/95/99,7 % ou utiliser la **calculatrice**. Estimation → **f ± 1/√n**, puis **interpréter** l’intervalle (précision, franchissement d’un seuil comme 50 %).' },
    ]),
  ],
}
