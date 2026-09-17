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
    S('🧾 La facture : réductions et net à payer', [
      { t: 'p', c: 'La **facture** est le document commercial qui matérialise la vente et sert de **pièce justificative** à l’enregistrement comptable. Elle part du **prix brut** (quantité × prix unitaire) auquel s’appliquent, dans un ordre précis, des réductions puis la TVA.' },
      { t: 'p', c: 'On distingue les **réductions commerciales** (les « 3 R ») et la **réduction financière**. Les réductions commerciales se déduisent d’abord et **ne s’enregistrent pas séparément** : c’est le **net commercial** qui est comptabilisé. La réduction financière, elle, **s’enregistre à part**.' },
      { t: 'table', head: ['Réduction', 'Motif'], rows: [
        ['Rabais', 'Défaut de qualité, retard, non-conformité'],
        ['Remise', 'Importance de la commande, fidélité du client'],
        ['Ristourne', 'Sur le total des achats d’une période'],
        ['Escompte', 'Réduction financière pour paiement rapide (ou comptant)'],
      ] },
      { t: 'formula', c: 'Net commercial = Brut − (Rabais + Remise + Ristourne)\nNet financier = Net commercial − Escompte\nNet à payer TTC = Net financier + TVA' },
      { t: 'example', h: 'Calcul d’une facture', c: 'Brut 1 000 € ; remise 10 % ; escompte 2 % ; TVA 20 %.\nNet commercial = 1 000 − 100 = 900 €.\nEscompte = 900 × 2 % = 18 € → net financier = 882 €.\nTVA = 882 × 20 % = 176,40 € → **net à payer = 1 058,40 € TTC**.' },
      { t: 'tip', h: 'À retenir', c: 'La TVA se calcule **sur le net financier** (après toutes les réductions). L’escompte accordé est une **charge financière** (compte 665) pour le vendeur ; l’escompte obtenu est un **produit financier** (765) pour l’acheteur.' },
      { t: 'warning', h: 'Piège', c: 'Les réductions **commerciales** ne se comptabilisent pas dans un compte à part : on enregistre directement le **net commercial**. Seul l’**escompte** (réduction financière) a son propre compte.' },
    ]),
    S('💳 Enregistrer les règlements', [
      { t: 'p', c: 'Après la facture vient le **règlement** (le paiement). Il fait intervenir les comptes **financiers** : 512 Banque, 530 Caisse. Le règlement **solde** la créance client (411) ou la dette fournisseur (401).' },
      { t: 'example', h: 'Le client nous paie par virement', c: '• 512 Banque …… 1 200 (débit — la banque augmente)\n• 411 Clients …… 1 200 (crédit — la créance disparaît)' },
      { t: 'example', h: 'Nous payons un fournisseur par chèque', c: '• 401 Fournisseurs …… 600 (débit — la dette disparaît)\n• 512 Banque …… 600 (crédit — la banque diminue)' },
      { t: 'p', c: 'La logique est toujours la même : **encaisser** augmente un compte financier (au débit) et **fait disparaître une créance** (au crédit) ; **décaisser** diminue un compte financier (au crédit) et **fait disparaître une dette** (au débit).' },
      { t: 'table', head: ['Opération', 'Débit', 'Crédit'], rows: [
        ['Le client paie', '512 Banque', '411 Clients'],
        ['On paie le fournisseur', '401 Fournisseurs', '512 Banque'],
        ['Vente au comptant (espèces)', '530 Caisse', '707 + 44571'],
      ] },
      { t: 'tip', h: 'À retenir', c: 'Le règlement ne crée **ni charge ni produit** (sauf escompte) : il ne fait que **transformer** une créance ou une dette en mouvement de trésorerie. C’est pourquoi il n’apparaît pas au compte de résultat.' },
    ]),
    S('👷 Les charges de personnel et la paie', [
      { t: 'p', c: 'Les **charges de personnel** sont souvent le premier poste de coût d’une entreprise de services. Le salaire versé au salarié (le **net**) n’est qu’une partie du coût réel : s’y ajoutent les **cotisations sociales** (salariales et patronales).' },
      { t: 'formula', c: 'Salaire net = Salaire brut − Cotisations salariales\nCoût total employeur = Salaire brut + Cotisations patronales' },
      { t: 'list', c: [
        'Le **salaire brut** est la base de calcul. Les **cotisations salariales** (environ 22 %) sont retenues sur le brut : le salarié reçoit le **net**.',
        'Les **cotisations patronales** (environ 42 % du brut) sont payées **en plus** par l’employeur. Elles financent la protection sociale (retraite, maladie, chômage).',
        'L’employeur **reverse** l’ensemble des cotisations aux **organismes sociaux** (URSSAF, caisses de retraite).',
      ] },
      { t: 'example', h: 'D’un brut au coût réel', c: 'Salaire brut 2 000 €. Cotisations salariales 22 % = 440 € → **net = 1 560 €**. Cotisations patronales 42 % = 840 €. **Coût total pour l’employeur = 2 000 + 840 = 2 840 €**.' },
      { t: 'p', c: 'Comptablement : la **rémunération** est une charge (641), les **cotisations patronales** aussi (645) ; l’entreprise doit le net au **personnel** (421) et les cotisations aux **organismes sociaux** (43), jusqu’au versement.' },
      { t: 'tip', h: 'À retenir', c: 'Le coût du travail ≠ le net perçu. Pour ~1 560 € versés, l’entreprise dépense ~2 840 €. C’est un point clé pour comprendre les décisions d’embauche et le débat sur le « coût du travail ».' },
    ]),
    S('📦 Les stocks : suivi et enregistrement', [
      { t: 'p', c: 'Les **stocks** (marchandises, matières premières, produits finis) représentent de l’argent « immobilisé » : ni vendu, ni disponible en caisse. Leur bon suivi est essentiel pour éviter la rupture (perte de ventes) comme le sur-stockage (coût et risque d’invendus).' },
      { t: 'p', c: 'En comptabilité, dans la méthode dite de l’**inventaire intermittent** (au programme), les achats sont enregistrés en **charges** (607) tout au long de l’année. En fin d’exercice, on constate la **variation de stock** pour ne garder en charges que ce qui a été **réellement consommé**.' },
      { t: 'formula', c: 'Coût d’achat des marchandises vendues = Achats + Stock initial − Stock final' },
      { t: 'p', c: 'La **variation de stock** ajuste le résultat : si le stock **augmente**, on a acheté plus qu’on n’a vendu → on **retire** cette part des charges ; s’il **diminue**, on a puisé dans le stock → on l’**ajoute** aux charges consommées.' },
      { t: 'example', h: 'Consommation réelle', c: 'Stock initial 5 000 € ; achats de l’année 40 000 € ; stock final 8 000 €.\nMarchandises consommées = 40 000 + 5 000 − 8 000 = **37 000 €**. Le stock a augmenté de 3 000 € : ces 3 000 € ne sont pas une charge de l’exercice.' },
      { t: 'tip', h: 'À retenir', c: 'On ne compte en charge que ce qui a été **consommé/vendu**, pas ce qui a été **acheté**. C’est une application du principe d’**indépendance des exercices**.' },
    ]),
    S('🏢 L’acquisition d’une immobilisation', [
      { t: 'p', c: 'Acquérir une **immobilisation** (machine, véhicule, matériel) n’est pas une charge mais un **investissement** : le bien entre à l’**actif** du bilan (classe 2) et se répartira dans le temps par l’**amortissement**.' },
      { t: 'p', c: 'On l’enregistre à son **coût d’acquisition** : le prix d’achat HT **plus** tous les frais nécessaires à sa mise en service (transport, installation, mise en route). La TVA sur immobilisation est **déductible** (compte 44562).' },
      { t: 'formula', c: 'Coût d’acquisition = Prix d’achat HT + Frais accessoires (transport, installation…)' },
      { t: 'example', h: 'Calcul du coût', c: 'Machine 20 000 € HT + transport 500 € + installation 1 500 €.\nCoût d’acquisition = 20 000 + 500 + 1 500 = **22 000 €** (base de l’amortissement). TVA (20 %) déductible = 4 400 €.' },
      { t: 'warning', h: 'Piège', c: 'Une **immobilisation** (durée > 1 an, montant significatif) ne se met **jamais** en charge (compte 6) : elle entre à l’**actif** (compte 2). À l’inverse, une petite fourniture s’enregistre directement en charge. Confondre les deux fausse le résultat.' },
      { t: 'tip', h: 'À retenir', c: 'Investir ≠ dépenser une charge. L’immobilisation entre à l’actif, puis « se consomme » chaque année via la **dotation aux amortissements**.' },
    ]),
    S('🗓️ Les travaux d’inventaire', [
      { t: 'p', c: 'À la **clôture** de l’exercice, avant d’établir le bilan et le compte de résultat, l’entreprise réalise les **travaux d’inventaire** : des écritures de **régularisation** qui garantissent que les comptes donnent une **image fidèle** de la réalité. Elles appliquent les principes de **prudence** et d’**indépendance des exercices**.' },
      { t: 'list', c: [
        '**Les amortissements** : constater l’usure des immobilisations (dotation compte 6811 / amortissement 28).',
        '**Les dépréciations** : constater une perte de valeur probable et réversible (stocks, créances douteuses, titres).',
        '**La variation des stocks** : ajuster le stock à sa valeur réelle constatée à l’inventaire.',
        '**Les régularisations** de charges et produits : rattacher à l’exercice ce qui le concerne (charges à payer, produits à recevoir, charges constatées d’avance).',
      ] },
      { t: 'p', c: 'L’objectif est que chaque exercice ne supporte **que** ses propres charges et ne comptabilise **que** ses propres produits, même si le paiement intervient l’année suivante. C’est ce qui rend les résultats **comparables** d’une année à l’autre.' },
      { t: 'tip', h: 'À retenir', c: 'Sans travaux d’inventaire, le résultat serait faussé. Ils traduisent deux principes : **prudence** (anticiper les pertes probables) et **indépendance des exercices** (rattacher au bon exercice).' },
    ]),
    S('📉 Les créances douteuses et leur dépréciation', [
      { t: 'p', c: 'Quand un client risque de **ne pas payer** (difficultés, litige), le principe de **prudence** impose de constater cette perte **probable** sans attendre qu’elle soit certaine. On parle de **client douteux** et de **dépréciation** de la créance.' },
      { t: 'p', c: 'La créance est d’abord **reclassée** du compte 411 (Clients) vers le compte 416 (**Clients douteux**). Puis on calcule une **dépréciation** sur le montant **HT** (la TVA sera récupérée si la créance devient définitivement irrécouvrable), selon le pourcentage de perte estimé.' },
      { t: 'example', h: 'Calcul d’une dépréciation', c: 'Créance TTC 1 200 € (soit 1 000 € HT). On estime le risque de non-paiement à 40 %.\nDépréciation = 1 000 × 40 % = **400 €** (dotation compte 68174, dépréciation compte 491).' },
      { t: 'p', c: 'Deux issues possibles ensuite. Si le client **paie finalement**, on **reprend** la dépréciation (un produit). S’il ne paie **définitivement pas**, la créance devient une **perte** (créance irrécouvrable, compte 654) et la dépréciation est reprise.' },
      { t: 'tip', h: 'À retenir', c: 'Dépréciation = perte **probable et réversible** → on peut la reprendre. Créance irrécouvrable = perte **certaine et définitive**. La dépréciation se calcule toujours sur le montant **HT**.' },
    ]),
    S('🧾 La déclaration de TVA', [
      { t: 'p', c: 'Chaque mois (ou trimestre), l’entreprise établit sa **déclaration de TVA** (formulaire **CA3**). Elle y récapitule la TVA **collectée** sur ses ventes et la TVA **déductible** sur ses achats et ses immobilisations, puis calcule ce qu’elle doit reverser.' },
      { t: 'formula', c: 'TVA à décaisser = TVA collectée − TVA déductible (sur biens/services + sur immobilisations)' },
      { t: 'list', c: [
        'Si TVA collectée **>** TVA déductible → **TVA à décaisser** : l’entreprise **doit** de l’argent à l’État (compte 44551).',
        'Si TVA déductible **>** TVA collectée → **crédit de TVA** : c’est l’État qui doit à l’entreprise (compte 44567). Le crédit est **reporté** sur la déclaration suivante ou **remboursé**.',
      ] },
      { t: 'example', h: 'Déclaration du mois', c: 'TVA collectée 8 000 € ; TVA déductible sur achats 5 000 € ; TVA déductible sur une machine 1 500 €.\nTVA à décaisser = 8 000 − (5 000 + 1 500) = **1 500 €** à reverser à l’État.' },
      { t: 'tip', h: 'À retenir', c: 'La TVA déductible sur **immobilisations** (44562) se cumule avec celle sur les achats (44566). Un mois d’investissement important peut faire basculer l’entreprise en **crédit de TVA**.' },
    ]),
    S('📚 L’organisation comptable : du document au bilan', [
      { t: 'p', c: 'La comptabilité suit une **chaîne rigoureuse** qui va de la pièce justificative aux documents de synthèse. Chaque étape a un rôle précis et permet un **contrôle**.' },
      { t: 'table', head: ['Étape', 'Rôle'], rows: [
        ['Pièce justificative', 'Preuve de l’opération (facture, relevé, bulletin de paie)'],
        ['Journal', 'Enregistre les écritures dans l’ordre chronologique'],
        ['Grand livre', 'Regroupe les écritures compte par compte'],
        ['Balance', 'Liste tous les comptes avec débits/crédits/soldes (contrôle)'],
        ['Documents de synthèse', 'Bilan + compte de résultat (à la clôture)'],
      ] },
      { t: 'p', c: 'La **balance** joue un rôle de vérification capital : le **total des débits doit égaler le total des crédits**, et le total des soldes débiteurs doit égaler le total des soldes créditeurs. Si ce n’est pas le cas, il y a une **erreur** à corriger avant d’établir le bilan.' },
      { t: 'p', c: 'Aujourd’hui, un **logiciel comptable** ou un **PGI (progiciel de gestion intégré)** automatise cette chaîne : une seule saisie alimente journal, grand livre et balance, et sécurise les contrôles.' },
      { t: 'tip', h: 'À retenir', c: 'Ordre à connaître : **pièce → journal → grand livre → balance → documents de synthèse**. La balance est l’outil de **contrôle** de l’équilibre débit/crédit.' },
    ]),
    S('⚖️ Les grands principes comptables (approfondis)', [
      { t: 'p', c: 'La comptabilité obéit à des **principes** qui garantissent la **fiabilité** et la **comparabilité** des comptes. Les connaître permet de **justifier** presque toutes les règles d’enregistrement.' },
      { t: 'table', head: ['Principe', 'Ce qu’il impose'], rows: [
        ['Prudence', 'Anticiper les pertes probables, jamais les gains'],
        ['Coût historique', 'Enregistrer les biens à leur valeur d’achat'],
        ['Indépendance des exercices', 'Rattacher charges et produits au bon exercice'],
        ['Continuité d’exploitation', 'Supposer la poursuite de l’activité'],
        ['Permanence des méthodes', 'Garder les mêmes méthodes d’un an à l’autre'],
        ['Non-compensation', 'Ne pas compenser une dette avec une créance'],
      ] },
      { t: 'p', c: 'Ces principes servent un objectif supérieur : donner une **image fidèle** du patrimoine et du résultat de l’entreprise. Par exemple, la **permanence des méthodes** évite qu’une entreprise change de règles chaque année pour « embellir » ses comptes ; la **prudence** évite de présenter des bénéfices qui ne sont pas encore réalisés.' },
      { t: 'tip', h: 'À retenir', c: 'Chaque écriture d’inventaire s’explique par un principe : amortissements et dépréciations = **prudence** + **indépendance des exercices** ; maintien de la valeur d’achat = **coût historique**.' },
    ]),
    S('🧮 Étude de cas guidée — un cycle d’achat complet', [
      { t: 'p', c: '**Énoncé.** L’entreprise *Novéa* reçoit une facture d’achat de marchandises : brut 2 000 € HT, remise 5 %, escompte 1 %, TVA 20 %. Elle règle par virement 15 jours plus tard. Calculez le net à payer et décrivez les écritures.' },
      { t: 'example', h: 'Étape 1 — Net à payer', c: 'Net commercial = 2 000 − (2 000 × 5 %) = 1 900 €.\nEscompte = 1 900 × 1 % = 19 € → net financier = 1 881 €.\nTVA = 1 881 × 20 % = 376,20 € → **net à payer = 2 257,20 € TTC**.' },
      { t: 'example', h: 'Étape 2 — À la réception de la facture', c: '• 607 Achats …… 1 881 (débit)\n• 44566 TVA déductible …… 376,20 (débit)\n• 765 Escompte obtenu …… 19 (crédit — produit financier)\n• 401 Fournisseurs …… 2 257,20 (crédit)' },
      { t: 'example', h: 'Étape 3 — Au règlement', c: '• 401 Fournisseurs …… 2 257,20 (débit)\n• 512 Banque …… 2 257,20 (crédit)' },
      { t: 'p', c: '**Commentaire.** L’achat (charge) est enregistré pour le **net financier** ; l’escompte obtenu est un **produit financier** ; la TVA déductible est une **créance** sur l’État ; le règlement solde simplement la dette fournisseur sans créer de charge.' },
      { t: 'tip', h: 'Méthode', c: 'Toujours : 1) calculer le **net à payer** (réductions puis TVA), 2) écriture de **facture** (charges/produits + TVA + tiers), 3) écriture de **règlement** (tiers ↔ banque). Vérifier l’équilibre débit = crédit à chaque fois.' },
    ]),
    S('🧮 MÉTHODE — Comment calculer la TVA, pas à pas', [
      { t: 'p', c: 'Objectif de ce chapitre : savoir **calculer une TVA dans tous les sens**. C’est LA compétence de base de la gestion, et elle tombe à tous les sujets. Il n’y a en réalité que **trois formules** à connaître, et une règle : on part toujours du **HT** (hors taxes), on ajoute la TVA, on obtient le **TTC** (toutes taxes comprises).' },
      { t: 'formula', c: '① TVA = HT × taux\n② TTC = HT × (1 + taux)   →  ex. TTC = HT × 1,20 à 20 %\n③ HT = TTC ÷ (1 + taux)   →  ex. HT = TTC ÷ 1,20 à 20 %' },
      { t: 'p', c: 'Le **taux** s’écrit en nombre décimal dans les calculs : 20 % = 0,20 ; 10 % = 0,10 ; 5,5 % = 0,055. Le coefficient « 1 + taux » (1,20 ; 1,10 ; 1,055) sert à passer du HT au TTC **en une seule multiplication**.' },
      { t: 'example', h: 'Cas 1 — je connais le HT, je cherche la TVA et le TTC', c: 'Un article coûte **200 € HT**, TVA à 20 %.\nÉtape 1 — TVA = 200 × 0,20 = **40 €**.\nÉtape 2 — TTC = 200 + 40 = **240 €** (ou directement 200 × 1,20 = 240 €).' },
      { t: 'example', h: 'Cas 2 — je connais le TTC, je cherche le HT et la TVA', c: 'Une facture indique **240 € TTC**, TVA à 20 %.\nÉtape 1 — HT = 240 ÷ 1,20 = **200 €**.\nÉtape 2 — TVA = 240 − 200 = **40 €** (ou 200 × 0,20 = 40 €).' },
      { t: 'warning', h: 'LE piège à éviter absolument', c: 'Pour retrouver le HT à partir du TTC, on **DIVISE par 1,20** — on ne « retire pas 20 % ». Retirer 20 % de 240 donnerait 240 − 48 = 192 €, ce qui est **FAUX**. La bonne réponse est 240 ÷ 1,20 = 200 €.' },
      { t: 'p', c: 'Attention au **taux applicable** : il change selon le produit. On multiplie toujours par le **bon** coefficient.' },
      { t: 'table', head: ['Taux', 'Coefficient (1+taux)', 'Exemples'], rows: [
        ['20 %', '1,20', 'La plupart des biens et services'],
        ['10 %', '1,10', 'Restauration, transport'],
        ['5,5 %', '1,055', 'Alimentation, livres'],
        ['2,1 %', '1,021', 'Médicaments remboursés, presse'],
      ] },
      { t: 'example', h: 'Cas 3 — la TVA à reverser à l’État (TVA à décaisser)', c: 'Sur le mois : ventes 10 000 € HT → **TVA collectée** = 10 000 × 0,20 = 2 000 €.\nAchats 6 000 € HT → **TVA déductible** = 6 000 × 0,20 = 1 200 €.\nTVA à décaisser = collectée − déductible = 2 000 − 1 200 = **800 €** à reverser à l’État.' },
      { t: 'tip', h: 'Astuce calculatrice', c: 'HT → TTC : « × 1,20 ». TTC → HT : « ÷ 1,20 ». TTC → TVA seule : « × 20 ÷ 120 » (soit ÷ 6 à 20 %). Vérifie toujours : HT + TVA doit **redonner** le TTC.' },
    ]),
    S('🧮 MÉTHODE — Calculer le net à payer d’une facture', [
      { t: 'p', c: 'Une facture se calcule **dans un ordre précis** : d’abord les réductions commerciales, puis la réduction financière (escompte), puis la TVA. Suivre l’ordre garantit un résultat juste.' },
      { t: 'list', c: [
        '**Étape 1** — Net commercial = Brut HT − Rabais − Remise − Ristourne.',
        '**Étape 2** — Net financier = Net commercial − Escompte.',
        '**Étape 3** — TVA = Net financier × taux.',
        '**Étape 4** — Net à payer TTC = Net financier + TVA.',
      ] },
      { t: 'example', h: 'Exemple entièrement déroulé', c: 'Brut 1 000 € HT ; remise 10 % ; escompte 2 % ; TVA 20 %.\n① Net commercial = 1 000 − (1 000 × 10 %) = 1 000 − 100 = **900 €**.\n② Escompte = 900 × 2 % = 18 € → Net financier = 900 − 18 = **882 €**.\n③ TVA = 882 × 0,20 = **176,40 €**.\n④ Net à payer = 882 + 176,40 = **1 058,40 € TTC**.' },
      { t: 'warning', h: 'Ordre à respecter', c: 'La **remise se calcule sur le brut**, l’**escompte sur le net commercial**, et la **TVA sur le net financier** (après toutes les réductions). Calculer la TVA sur le brut donnerait un résultat faux.' },
      { t: 'tip', h: 'Contrôle', c: 'Le net à payer doit être **cohérent** : légèrement supérieur au net financier (à cause de la TVA), et inférieur au brut + TVA (à cause des réductions).' },
    ]),
    S('🧮 MÉTHODE — Calculer un amortissement', [
      { t: 'p', c: 'Amortir, c’est répartir le coût d’une immobilisation sur sa durée d’usage. En STMG, on utilise l’**amortissement linéaire** : la même somme (l’**annuité**) chaque année.' },
      { t: 'formula', c: 'Annuité = Valeur d’origine ÷ Durée d’utilisation\nVNC (valeur nette comptable) = Valeur d’origine − Cumul des amortissements' },
      { t: 'list', c: [
        '**Étape 1** — Déterminer la **valeur d’origine** (prix HT + frais accessoires : transport, installation).',
        '**Étape 2** — Calculer l’**annuité** = valeur d’origine ÷ durée.',
        '**Étape 3** — Dresser le **plan d’amortissement** (annuité, cumul, VNC année par année).',
      ] },
      { t: 'example', h: 'Exemple déroulé', c: 'Machine : 20 000 € + 2 000 € d’installation = **22 000 €** de valeur d’origine, durée 5 ans.\nAnnuité = 22 000 ÷ 5 = **4 400 €/an**.' },
      { t: 'table', head: ['Année', 'Annuité', 'Cumul', 'VNC'], rows: [
        ['1', '4 400', '4 400', '17 600'],
        ['2', '4 400', '8 800', '13 200'],
        ['3', '4 400', '13 200', '8 800'],
        ['4', '4 400', '17 600', '4 400'],
        ['5', '4 400', '22 000', '0'],
      ] },
      { t: 'tip', h: 'Contrôle', c: 'En fin de plan, le cumul des amortissements = valeur d’origine, et la **VNC = 0**. Si ce n’est pas le cas, il y a une erreur dans l’annuité ou la durée.' },
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
    S('📊 Les soldes intermédiaires de gestion (SIG)', [
      { t: 'p', c: 'Le résultat net ne dit pas **d’où vient** la performance. Les **soldes intermédiaires de gestion (SIG)** décomposent la formation du résultat, étage par étage, pour comprendre **comment** l’entreprise gagne (ou perd) de l’argent. On les lit « en cascade », du chiffre d’affaires jusqu’au résultat net.' },
      { t: 'table', head: ['Solde', 'Calcul (simplifié)', 'Ce qu’il montre'], rows: [
        ['Marge commerciale', 'Ventes de marchandises − Coût d’achat des marchandises vendues', 'Performance de l’activité de négoce'],
        ['Valeur ajoutée', 'Production − Consommations en provenance de tiers', 'Richesse créée par l’entreprise'],
        ['EBE', 'VA + subventions − impôts et taxes − charges de personnel', 'Performance d’exploitation « pure »'],
        ['Résultat d’exploitation', 'EBE − dotations + autres produits/charges', 'Performance du métier'],
        ['Résultat courant', 'Résultat d’exploitation ± résultat financier', 'Avant l’exceptionnel'],
        ['Résultat net', 'Résultat courant ± exceptionnel − impôt', 'Ce qui reste pour l’entreprise'],
      ] },
      { t: 'p', c: 'Chaque solde répond à une question. La **marge commerciale** juge l’activité de revente ; la **valeur ajoutée** mesure la richesse réellement créée ; l’**EBE (excédent brut d’exploitation)** isole la performance d’exploitation **avant** les choix de financement, d’amortissement et de fiscalité — c’est le solde préféré des analystes.' },
      { t: 'tip', h: 'À retenir', c: 'L’**EBE** est le solde le plus « pur » : il ne dépend ni de la politique d’amortissement, ni des dettes, ni des impôts. Deux entreprises se comparent d’abord sur leur EBE.' },
    ]),
    S('💠 La valeur ajoutée et sa répartition', [
      { t: 'p', c: 'La **valeur ajoutée (VA)** est la richesse **réellement créée** par l’entreprise : ce qu’elle produit **moins** ce qu’elle a dû acheter à d’autres (matières, énergie, services extérieurs). C’est un indicateur central, qui relie la comptabilité à l’économie (la somme des VA d’un pays forme son PIB).' },
      { t: 'formula', c: 'Valeur ajoutée = Production de l’exercice − Consommations en provenance de tiers' },
      { t: 'p', c: 'Cette richesse est ensuite **répartie** entre toutes les **parties prenantes** qui ont contribué à la créer. La façon dont elle se partage révèle les priorités et l’équilibre de l’entreprise.' },
      { t: 'list', c: [
        'Les **salariés** : rémunérations et charges sociales.',
        'L’**État** : impôts et taxes.',
        'Les **prêteurs** (banques) : intérêts des emprunts.',
        'Les **associés** : dividendes.',
        'L’**entreprise elle-même** : autofinancement (ce qu’elle garde pour investir).',
      ] },
      { t: 'example', h: 'Calcul', c: 'Production 500 000 € ; achats de matières 180 000 € ; services extérieurs 60 000 €.\nVA = 500 000 − (180 000 + 60 000) = **260 000 €**. C’est cette somme qui sera partagée entre salariés, État, banques, associés et l’entreprise.' },
      { t: 'tip', h: 'À retenir', c: 'La VA mesure la **création de richesse** ; son **partage** est un enjeu social et stratégique. Une part croissante vers les salariés ou les associés se fait au détriment de l’autofinancement — donc de l’investissement futur.' },
    ]),
    S('💰 La capacité d’autofinancement (CAF)', [
      { t: 'p', c: 'La **capacité d’autofinancement (CAF)** mesure les ressources que l’entreprise génère **par sa propre activité** et qu’elle peut consacrer à se financer : rembourser ses emprunts, investir, ou verser des dividendes. C’est un indicateur clé de son **autonomie**.' },
      { t: 'p', c: 'La CAF corrige le résultat net des charges et produits **calculés** (qui n’entraînent aucun mouvement de trésorerie), au premier rang desquels les **dotations aux amortissements**. Méthode additive simplifiée au programme :' },
      { t: 'formula', c: 'CAF = Résultat net + Dotations aux amortissements et provisions − Reprises' },
      { t: 'example', h: 'Calcul', c: 'Résultat net 40 000 € ; dotations aux amortissements 25 000 €.\nCAF = 40 000 + 25 000 = **65 000 €**. L’entreprise a donc dégagé 65 000 € de ressources internes, bien plus que son seul bénéfice comptable.' },
      { t: 'p', c: 'La CAF est le **carburant** de l’entreprise. Une CAF élevée permet d’investir sans trop s’endetter et rassure les banques (elle sert à mesurer la **capacité de remboursement** : dettes financières ÷ CAF).' },
      { t: 'tip', h: 'À retenir', c: 'La CAF ≠ le bénéfice : elle **ajoute** les charges non décaissées (amortissements). C’est pourquoi une entreprise peu bénéficiaire mais très « amortie » peut tout de même dégager une forte CAF.' },
    ]),
    S('📈 Rentabilité économique et rentabilité financière', [
      { t: 'p', c: 'La **rentabilité** rapporte un résultat aux **moyens** engagés pour l’obtenir : elle répond à « combien rapporte 1 € investi ? ». On en distingue deux, selon le point de vue.' },
      { t: 'formula', c: 'Rentabilité économique = Résultat d’exploitation ÷ Capitaux investis (× 100)\nRentabilité financière = Résultat net ÷ Capitaux propres (× 100)' },
      { t: 'list', c: [
        'La **rentabilité économique** mesure l’efficacité de l’**outil de production**, indépendamment de son mode de financement : elle intéresse le **dirigeant**.',
        'La **rentabilité financière** mesure ce que gagnent les **apporteurs de capitaux** (les associés) pour leur mise : elle intéresse l’**actionnaire**.',
      ] },
      { t: 'example', h: 'Calcul', c: 'Résultat d’exploitation 60 000 € ; capitaux investis 500 000 € → rentabilité économique = 12 %.\nRésultat net 40 000 € ; capitaux propres 250 000 € → rentabilité financière = 16 %.' },
      { t: 'p', c: 'Ici la rentabilité **financière (16 %)** dépasse la rentabilité **économique (12 %)** : c’est le signe d’un **effet de levier** positif de l’endettement (voir chapitre suivant). L’entreprise « fait travailler » l’argent emprunté au profit de ses associés.' },
      { t: 'tip', h: 'À retenir', c: 'Économique = point de vue de l’**entreprise** (résultat d’exploitation / actif). Financière = point de vue de l’**associé** (résultat net / capitaux propres).' },
    ]),
    S('⚡ L’effet de levier de l’endettement', [
      { t: 'p', c: 'L’**effet de levier** explique comment l’**endettement** peut **augmenter** la rentabilité financière des associés — mais aussi l’**aggraver** en cas de difficulté. C’est l’un des raisonnements les plus valorisés du thème.' },
      { t: 'p', c: 'Le principe : si l’entreprise emprunte à un **taux d’intérêt inférieur** à sa **rentabilité économique**, elle gagne plus avec l’argent emprunté qu’il ne lui coûte. La différence profite aux associés → la rentabilité **financière** grimpe au-dessus de la rentabilité **économique**.' },
      { t: 'list', c: [
        '**Effet de levier POSITIF** : rentabilité économique **>** coût de la dette → l’endettement **enrichit** les associés.',
        '**Effet de massue (levier négatif)** : rentabilité économique **<** coût de la dette → l’endettement **appauvrit** les associés et fragilise l’entreprise.',
      ] },
      { t: 'example', h: 'Illustration', c: 'Rentabilité économique 12 %, taux d’emprunt 4 %. Chaque euro emprunté rapporte 12 % mais ne coûte que 4 % : les 8 % d’écart profitent aux associés → la rentabilité financière **dépasse** 12 %. Mais si la rentabilité économique tombait à 3 %, l’écart deviendrait négatif : l’effet se retournerait.' },
      { t: 'warning', h: 'Piège', c: 'L’effet de levier n’est pas « magique » : il **amplifie** les résultats dans les deux sens. Plus on s’endette, plus on gagne **si tout va bien**, mais plus on perd **si l’activité se dégrade**. C’est un **risque**.' },
    ]),
    S('🏦 Les modes de financement', [
      { t: 'p', c: 'Pour financer ses investissements, l’entreprise dispose de plusieurs sources, à combiner selon leur coût, leur disponibilité et le niveau de risque acceptable. On les classe en financement **interne** et **externe**.' },
      { t: 'table', head: ['Source', 'Type', 'Avantage / limite'], rows: [
        ['Autofinancement (CAF)', 'Interne', 'Gratuit, autonome / limité par la CAF'],
        ['Augmentation de capital', 'Externe (fonds propres)', 'Pas de remboursement / dilue le pouvoir'],
        ['Emprunt bancaire', 'Externe (dette)', 'Effet de levier / coût + risque'],
        ['Crédit-bail (leasing)', 'Externe', 'Pas d’apport, souple / plus cher au total'],
      ] },
      { t: 'p', c: 'L’**autofinancement** (financer sur ses propres ressources, via la CAF) préserve l’autonomie mais est limité. L’**emprunt** permet l’effet de levier mais accroît le risque. L’**augmentation de capital** apporte des fonds propres sans dette, mais **dilue** le contrôle. Le **crédit-bail** permet d’utiliser un bien en le louant, sans l’acheter.' },
      { t: 'p', c: 'Une règle d’or de l’équilibre financier : financer les **emplois durables** (investissements) par des **ressources durables** (fonds propres, emprunts long terme), jamais par des découverts. C’est ce que traduit le **FRNG** positif vu plus haut.' },
      { t: 'tip', h: 'À retenir', c: 'Financement **interne** (CAF) = autonomie ; **fonds propres** (capital) = pas de remboursement mais dilution ; **dette** = effet de levier mais risque. Le bon choix **combine** les trois selon le projet.' },
    ]),
    S('📐 Liquidité et solvabilité (ratios approfondis)', [
      { t: 'p', c: 'Deux notions à ne pas confondre mesurent la **solidité** financière. La **liquidité** est la capacité à payer ses dettes **à court terme** (à l’échéance) ; la **solvabilité** est la capacité à rembourser **l’ensemble** de ses dettes, y compris en cas de cessation d’activité.' },
      { t: 'table', head: ['Ratio', 'Formule', 'Repère'], rows: [
        ['Liquidité générale', 'Actif circulant ÷ Dettes court terme', '> 1 souhaitable'],
        ['Autonomie financière', 'Capitaux propres ÷ Total du bilan', '> 30 % rassurant'],
        ['Capacité de remboursement', 'Dettes financières ÷ CAF', '< 4 ans recommandé'],
        ['Solvabilité générale', 'Total actif ÷ Total des dettes', '> 1 obligatoire'],
      ] },
      { t: 'p', c: 'Une entreprise peut être **solvable** (elle possède plus qu’elle ne doit) mais **peu liquide** (elle manque de trésorerie immédiate) : c’est le retour du paradoxe « rentable mais sans un sou ». Les banques regardent surtout la **capacité de remboursement** (dettes ÷ CAF) : au-delà de ~4 ans de CAF pour rembourser, le risque est jugé élevé.' },
      { t: 'example', h: 'Interprétation', c: 'Dettes financières 200 000 € ; CAF 40 000 €. Capacité de remboursement = 200 000 ÷ 40 000 = **5 ans**. C’est **élevé** : il faudrait 5 années de CAF pour tout rembourser → la banque sera prudente pour un nouveau prêt.' },
      { t: 'tip', h: 'À retenir', c: 'Liquidité = payer **à temps** (court terme) ; solvabilité = pouvoir **tout rembourser** (long terme). Toujours interpréter un ratio par rapport à un **repère** et à son **évolution**.' },
    ]),
    S('🧮 Étude de cas guidée — SIG, VA et CAF', [
      { t: 'p', c: '**Énoncé.** Entreprise *Delta* : production 600 000 € ; consommations en provenance de tiers 250 000 € ; charges de personnel 220 000 € ; impôts et taxes 10 000 € ; dotations aux amortissements 30 000 € ; résultat net 50 000 €. Calculez VA, EBE et CAF, puis commentez.' },
      { t: 'example', h: 'Étape 1 — Valeur ajoutée', c: 'VA = Production − Consommations en provenance de tiers = 600 000 − 250 000 = **350 000 €**.' },
      { t: 'example', h: 'Étape 2 — EBE', c: 'EBE = VA − impôts et taxes − charges de personnel = 350 000 − 10 000 − 220 000 = **120 000 €**.' },
      { t: 'example', h: 'Étape 3 — CAF', c: 'CAF = Résultat net + Dotations = 50 000 + 30 000 = **80 000 €**.' },
      { t: 'p', c: '**Commentaire.** La VA (350 000 €) est en grande partie absorbée par les **charges de personnel** (220 000 €, soit 63 % de la VA) : c’est cohérent pour une entreprise de main-d’œuvre. L’EBE positif (120 000 €) montre une exploitation **saine**. La CAF (80 000 €) dépasse largement le résultat net grâce aux amortissements : *Delta* dispose de **80 000 €** pour investir ou rembourser ses dettes.' },
      { t: 'tip', h: 'Méthode', c: 'Dérouler les SIG **dans l’ordre** (VA → EBE → …), puis calculer la CAF (résultat + dotations). Toujours **interpréter** : part des charges de personnel dans la VA, santé de l’EBE, marge de manœuvre offerte par la CAF.' },
    ]),
    S('🧮 MÉTHODE — Calculer FRNG, BFR et Trésorerie', [
      { t: 'p', c: 'Les trois indicateurs d’équilibre financier se calculent **dans l’ordre** : FRNG, puis BFR, puis Trésorerie nette (TN). Le dernier sert aussi de **vérification**.' },
      { t: 'formula', c: '① FRNG = Ressources stables − Emplois stables\n② BFR = (Stocks + Créances clients) − Dettes fournisseurs\n③ Trésorerie nette = FRNG − BFR' },
      { t: 'list', c: [
        '**Étape 1** — Repérer dans le bilan fonctionnel le **haut** (stable) et le **bas** (circulant).',
        '**Étape 2** — Calculer le **FRNG** (le « matelas » de financement durable).',
        '**Étape 3** — Calculer le **BFR** (l’argent immobilisé par l’exploitation).',
        '**Étape 4** — En déduire la **TN** et **vérifier** avec TN = Trésorerie active − Trésorerie passive.',
      ] },
      { t: 'example', h: 'Exemple entièrement déroulé (en k€)', c: 'Ressources stables 400 ; Emplois stables 320 ; Stocks 50 ; Créances clients 80 ; Dettes fournisseurs 60 ; Banque 30 ; Découvert 20.\n① FRNG = 400 − 320 = **80**.\n② BFR = (50 + 80) − 60 = **70**.\n③ TN = 80 − 70 = **10**.\nVérif : Banque − Découvert = 30 − 20 = **10** ✓.' },
      { t: 'tip', h: 'Interprétation', c: 'TN positive (ici +10) = l’entreprise a de la trésorerie disponible. TN négative = elle vit sur des découverts. Le FRNG doit **couvrir** le BFR.' },
      { t: 'warning', h: 'Contrôle indispensable', c: 'Les deux façons de calculer la TN doivent donner **le même nombre**. Si FRNG − BFR ≠ Trésorerie active − Trésorerie passive, il y a une erreur dans le classement des postes.' },
    ]),
    S('🧮 MÉTHODE — Calculer les SIG et la CAF', [
      { t: 'p', c: 'On calcule les soldes intermédiaires **en cascade**, chacun servant au suivant, jusqu’au résultat. Puis on en tire la CAF.' },
      { t: 'formula', c: 'Marge commerciale = Ventes − Coût d’achat des marchandises vendues\nValeur ajoutée = Production − Consommations en provenance de tiers\nEBE = VA + subventions − impôts et taxes − charges de personnel\nCAF = Résultat net + Dotations aux amortissements − Reprises' },
      { t: 'example', h: 'Exemple déroulé', c: 'Production 600 000 ; consommations tiers 250 000 ; impôts et taxes 10 000 ; charges de personnel 220 000 ; dotations 30 000 ; résultat net 50 000.\n① VA = 600 000 − 250 000 = **350 000 €**.\n② EBE = 350 000 − 10 000 − 220 000 = **120 000 €**.\n③ CAF = 50 000 + 30 000 = **80 000 €**.' },
      { t: 'list', c: [
        '**Étape 1** — Calculer la **VA** (richesse créée).',
        '**Étape 2** — Descendre à l’**EBE** (performance d’exploitation pure).',
        '**Étape 3** — Calculer la **CAF** (résultat net + charges non décaissées).',
        '**Étape 4** — Interpréter : part des salaires dans la VA, niveau de l’EBE, capacité à investir/rembourser (CAF).',
      ] },
      { t: 'tip', h: 'Astuce CAF', c: 'La CAF **ajoute** les amortissements au résultat car ce sont des charges « sur le papier » qui ne sortent pas de la caisse. Une entreprise peu bénéficiaire mais fortement amortie peut avoir une **grosse CAF**.' },
    ]),
    S('🧮 MÉTHODE — Calculer et interpréter un ratio', [
      { t: 'p', c: 'Un ratio ne « vaut » que si on l’**interprète**. La méthode : poser la formule, calculer, puis conclure par une phrase (« cela signifie que… donc c’est bon/inquiétant car… »).' },
      { t: 'table', head: ['Ratio', 'Formule', 'Bon repère'], rows: [
        ['Taux de marge nette', 'Résultat net ÷ CA × 100', 'Le plus élevé possible'],
        ['Autonomie financière', 'Capitaux propres ÷ Total bilan', '> 30 %'],
        ['Taux d’endettement', 'Dettes financières ÷ Capitaux propres', '< 1'],
        ['Délai clients', 'Créances ÷ CA TTC × 360', 'Le plus court possible'],
        ['Capacité de remboursement', 'Dettes financières ÷ CAF', '< 4 ans'],
      ] },
      { t: 'example', h: 'Exemple + interprétation', c: 'Créances clients 90 000 € ; CA TTC 720 000 €.\nDélai clients = 90 000 ÷ 720 000 × 360 = **45 jours**.\nInterprétation : les clients paient en moyenne à **45 jours**. C’est correct, mais le raccourcir libérerait de la trésorerie (réduction du BFR).' },
      { t: 'tip', h: 'À retenir', c: 'Toujours 3 temps : **formule → calcul (avec unité) → interprétation**. Un ratio calculé mais non commenté ne rapporte que la moitié des points.' },
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
    S('🧮 Le coût complet et les charges indirectes', [
      { t: 'p', c: 'Le **coût complet** d’un produit rassemble **toutes** les charges qu’il a occasionnées. On distingue les charges **directes** (affectées sans calcul à un produit : la matière première, la main-d’œuvre de fabrication) et les charges **indirectes** (communes à plusieurs produits : loyer, électricité, administration), qui demandent une **répartition**.' },
      { t: 'formula', c: 'Coût complet = Charges directes + Charges indirectes réparties' },
      { t: 'p', c: 'Les charges indirectes transitent par des **centres d’analyse** (approvisionnement, production, distribution). Chaque centre est mesuré par une **unité d’œuvre** (l’heure de main-d’œuvre, l’heure-machine, le nombre de produits) : on calcule un **coût d’unité d’œuvre**, puis on impute à chaque produit selon sa consommation.' },
      { t: 'formula', c: 'Coût d’unité d’œuvre = Total du centre ÷ Nombre d’unités d’œuvre' },
      { t: 'example', h: 'Répartition', c: 'Centre production : 30 000 € pour 1 500 heures-machine → coût de l’unité d’œuvre = 20 €/h. Un produit qui consomme 3 heures-machine supporte 3 × 20 = **60 €** de charges indirectes de production.' },
      { t: 'tip', h: 'À retenir', c: 'Le coût complet sert à **fixer un prix de vente** et à vérifier la rentabilité d’un produit. Sa difficulté vient de la **répartition** des charges indirectes via les centres d’analyse et les unités d’œuvre.' },
    ]),
    S('🔧 Le coût marginal et la décision', [
      { t: 'p', c: 'Le **coût marginal** est le coût de **la dernière unité** (ou de la dernière série) produite. Il répond à une question de décision très précise : « **combien me coûte de produire une unité de plus** ? ». C’est souvent bien moins que le coût complet moyen, car les charges fixes sont déjà couvertes.' },
      { t: 'p', c: 'Tant que la **structure n’est pas saturée** (pas besoin d’une nouvelle machine, d’un local supplémentaire), produire une unité de plus ne coûte essentiellement que ses **charges variables**. C’est ce qui justifie d’accepter certaines commandes à prix réduit.' },
      { t: 'example', h: 'Décision', c: 'Une entreprise reçoit une commande supplémentaire à 30 €/unité. Son coût complet est de 38 €, mais son coût marginal (variable) n’est que de 22 €. Chaque unité rapporte 30 − 22 = **8 € de marge** supplémentaire : la commande est **rentable** à la marge, même vendue « à perte » par rapport au coût complet.' },
      { t: 'warning', h: 'La limite', c: 'Si la commande impose de **franchir un palier** (nouvelle machine, heures supplémentaires majorées), une **charge fixe** supplémentaire apparaît : le coût marginal grimpe, et la décision peut s’inverser. Toujours vérifier si la capacité est suffisante.' },
      { t: 'tip', h: 'À retenir', c: 'Décision ponctuelle « une unité/commande de plus » → raisonner au **coût marginal** (surtout variable), pas au coût complet moyen. Comparer le **prix proposé** au **coût marginal**.' },
    ]),
    S('🏭 Faire ou faire faire (make or buy)', [
      { t: 'p', c: 'La décision « **faire ou faire faire** » consiste à choisir entre **produire soi-même** un composant/service ou l’**acheter à l’extérieur** (sous-traitance, externalisation). C’est un arbitrage classique de gestion, à la fois **chiffré** et **stratégique**.' },
      { t: 'p', c: 'Sur le plan chiffré, on compare le **coût de production interne** (pertinent) au **prix d’achat externe**. Le piège : les **charges fixes** internes existent souvent **que l’on produise ou non** (le loyer, une machine déjà là). Il faut donc comparer le prix externe au **coût que l’on économiserait réellement** en arrêtant de produire (surtout les charges variables + charges fixes **spécifiques** évitables).' },
      { t: 'example', h: 'Comparaison', c: 'Produire en interne : 12 €/unité de charges variables + 4 €/unité de charges fixes (dont 3 € resteront même si on arrête). Prix d’achat externe : 15 €.\nCoût réellement évité si on externalise = 12 + 1 = 13 € < 15 € → mieux vaut **continuer à produire**.' },
      { t: 'list', c: [
        '**Faire (produire)** : garder la maîtrise, la qualité, le savoir-faire ; mais mobiliser des ressources.',
        '**Faire faire (sous-traiter)** : se recentrer sur son métier, réduire les coûts fixes ; mais dépendre d’un tiers et risquer une perte de compétence.',
      ] },
      { t: 'tip', h: 'À retenir', c: 'Ne comparer que les coûts **réellement évitables** au prix externe. Ajouter toujours l’analyse **qualitative** : qualité, délais, dépendance, stratégie.' },
    ]),
    S('📊 Le compte de résultat différentiel', [
      { t: 'p', c: 'Le **compte de résultat différentiel** réorganise les charges par **comportement** (variables / fixes) plutôt que par nature, pour faire apparaître la **marge sur coût variable** et le **résultat**. C’est l’outil de synthèse du raisonnement « coûts pour décider ».' },
      { t: 'table', head: ['Élément', 'Montant', '% du CA'], rows: [
        ['Chiffre d’affaires', '200 000', '100 %'],
        ['− Charges variables', '120 000', '60 %'],
        ['= Marge sur coût variable', '80 000', '40 %'],
        ['− Charges fixes', '60 000', ''],
        ['= Résultat', '20 000', ''],
      ] },
      { t: 'p', c: 'Sa force : le **taux de MCV** (ici 40 %) reste **stable** quand l’activité varie, ce qui permet de **prévoir** le résultat pour tout niveau de chiffre d’affaires et de retrouver immédiatement le **seuil de rentabilité** (charges fixes ÷ taux de MCV = 60 000 ÷ 0,40 = 150 000 €).' },
      { t: 'example', h: 'Prévision', c: 'Si le CA passe à 250 000 € : MCV = 250 000 × 40 % = 100 000 € ; résultat = 100 000 − 60 000 = **40 000 €**. On double le résultat avec +25 % de CA : c’est l’effet de **levier d’exploitation** (les charges fixes ne bougent pas).' },
      { t: 'tip', h: 'À retenir', c: 'Le résultat différentiel met en évidence la **MCV** et son **taux**. Il relie directement coûts variables, seuil de rentabilité et prévision de résultat.' },
    ]),
    S('📅 La gestion budgétaire', [
      { t: 'p', c: 'La **gestion budgétaire** consiste à **prévoir** l’activité future en chiffres, sous forme de **budgets**, pour piloter et anticiper. Prévoir permet d’éviter les mauvaises surprises (rupture de trésorerie, sur-stock) et de fixer des **objectifs**.' },
      { t: 'p', c: 'Les budgets s’enchaînent logiquement : tout part des **ventes** prévues, qui déterminent la **production**, puis les **approvisionnements**, et enfin la **trésorerie**.' },
      { t: 'list', c: [
        '**Budget des ventes** : le point de départ (quantités × prix prévus).',
        '**Budget de production** : ce qu’il faut fabriquer pour servir les ventes (en tenant compte des stocks).',
        '**Budget des approvisionnements** : les achats de matières nécessaires.',
        '**Budget de trésorerie** : les encaissements et décaissements mois par mois, pour repérer à l’avance les périodes de tension.',
      ] },
      { t: 'example', h: 'Utilité du budget de trésorerie', c: 'Un commerce saisonnier prévoit de faibles ventes en janvier-février. Le budget de trésorerie révèle un **solde négatif** ces mois-là : le gérant peut négocier **à l’avance** un découvert ou décaler des paiements, plutôt que de subir la crise.' },
      { t: 'tip', h: 'À retenir', c: 'Les budgets s’enchaînent : **ventes → production → approvisionnements → trésorerie**. Le budget de **trésorerie** est le plus décisif pour la survie à court terme.' },
    ]),
    S('🎯 L’analyse des écarts', [
      { t: 'p', c: 'Après avoir prévu (budgets), on **compare** au réel : c’est l’**analyse des écarts**, cœur du **contrôle de gestion**. Un écart mesure la différence entre ce qui était prévu et ce qui s’est réellement passé, pour **comprendre** et **réagir**.' },
      { t: 'formula', c: 'Écart = Réel − Prévu' },
      { t: 'list', c: [
        'Écart **favorable** : le réel est meilleur que prévu (plus de ventes, moins de coûts).',
        'Écart **défavorable** : le réel est moins bon que prévu (moins de ventes, plus de coûts).',
      ] },
      { t: 'p', c: 'Un écart sur le chiffre d’affaires peut venir d’un effet **quantité** (on a vendu plus/moins d’unités) ou d’un effet **prix** (on a vendu plus/moins cher). Décomposer l’écart permet d’en **identifier la cause** et d’agir sur le bon levier.' },
      { t: 'example', h: 'Interprétation', c: 'Ventes prévues 100 000 € ; réelles 92 000 € → écart = −8 000 € (**défavorable**). En analysant : les quantités ont chuté (concurrence ?) alors que les prix ont tenu. La réaction portera sur la **demande** (promotion, communication), pas sur les prix.' },
      { t: 'tip', h: 'À retenir', c: 'Analyser un écart = le **calculer** (réel − prévu), le **qualifier** (favorable/défavorable), en **chercher la cause** (effet quantité ou prix), puis **décider** d’une action corrective.' },
    ]),
    S('💡 Choisir un investissement', [
      { t: 'p', c: 'Investir, c’est engager de l’argent **aujourd’hui** pour des gains **futurs**. Pour décider, on compare le **coût de l’investissement** aux **flux de trésorerie** qu’il va rapporter. Un critère simple et très utilisé : le **délai de récupération** (payback).' },
      { t: 'p', c: 'Le **délai de récupération** est le temps nécessaire pour que les gains cumulés **remboursent** le montant investi. Plus il est **court**, moins l’investissement est risqué (on récupère vite sa mise).' },
      { t: 'example', h: 'Délai de récupération', c: 'Investissement 60 000 €, gains nets de 20 000 €/an.\nAprès 3 ans : 3 × 20 000 = 60 000 € → le délai de récupération est de **3 ans**. Au-delà, l’investissement devient bénéficiaire.' },
      { t: 'p', c: 'Un investissement se juge aussi sur des critères **qualitatifs** : cohérence avec la stratégie, impact sur la qualité, sur l’emploi, sur l’environnement, et sur l’**image**. Un projet au délai un peu plus long peut être préférable s’il est stratégiquement décisif.' },
      { t: 'tip', h: 'À retenir', c: 'Délai de récupération = montant investi ÷ gain annuel (si les gains sont constants). Critère de **prudence** : un délai court = un risque plus faible. Toujours croiser avec l’analyse **qualitative**.' },
    ]),
    S('🧮 Étude de cas guidée — coût complet et prix de vente', [
      { t: 'p', c: '**Énoncé.** Un atelier fabrique un article. Charges directes : matières 14 €/unité, main-d’œuvre 10 €/unité. Charges indirectes : centre production 45 000 € pour 3 000 heures-machine ; chaque article consomme 0,5 heure-machine. Production : 2 000 articles. L’entreprise vise une marge de 25 % sur le coût de revient. Calculez le coût complet unitaire et le prix de vente.' },
      { t: 'example', h: 'Étape 1 — Charges indirectes par article', c: 'Coût de l’unité d’œuvre = 45 000 ÷ 3 000 = 15 €/heure-machine.\nPar article (0,5 h) : 15 × 0,5 = **7,50 €**.' },
      { t: 'example', h: 'Étape 2 — Coût complet unitaire', c: 'Coût complet = charges directes + indirectes = (14 + 10) + 7,50 = **31,50 €** par article.' },
      { t: 'example', h: 'Étape 3 — Prix de vente', c: 'Marge de 25 % : prix = 31,50 × 1,25 = **39,375 €**, arrondi à **39,38 €** HT.' },
      { t: 'p', c: '**Commentaire.** À 39,38 € HT, chaque article dégage 39,38 − 31,50 ≈ **7,88 €** de marge. Ce prix couvre **toutes** les charges (directes et indirectes) : il est **soutenable durablement**. Pour une commande ponctuelle en capacité disponible, l’entreprise pourrait toutefois accepter un prix plus bas, jusqu’au **coût marginal**.' },
      { t: 'tip', h: 'Méthode', c: '1) Calculer le **coût d’unité d’œuvre** et imputer les charges **indirectes**. 2) Ajouter les charges **directes** → coût complet. 3) Appliquer la **marge** pour le prix. 4) **Commenter** : prix durable (coût complet) vs décision ponctuelle (coût marginal).' },
    ]),
    S('🧮 MÉTHODE — Calculer un seuil de rentabilité', [
      { t: 'p', c: 'Le seuil de rentabilité est le chiffre d’affaires (ou le nombre d’unités) à atteindre pour un résultat **nul**. Deux façons de le calculer selon les données de l’énoncé.' },
      { t: 'formula', c: 'Taux de MCV = (CA − Charges variables) ÷ CA\nSeuil (en €) = Charges fixes ÷ Taux de MCV\nSeuil (en quantité) = Charges fixes ÷ Marge sur coût variable unitaire' },
      { t: 'list', c: [
        '**Si l’énoncé donne des totaux annuels** (CA, charges variables, charges fixes) → calculer le **taux de MCV**, puis le seuil **en euros**.',
        '**Si l’énoncé donne un prix et un coût unitaires** → calculer la **MCV unitaire**, puis le seuil **en quantité**.',
      ] },
      { t: 'example', h: 'Exemple en euros', c: 'CA 200 000 € ; charges variables 120 000 € ; charges fixes 60 000 €.\n① MCV = 200 000 − 120 000 = 80 000 € → taux = 80 000 ÷ 200 000 = **0,40**.\n② Seuil = 60 000 ÷ 0,40 = **150 000 €** de CA.\nVérif : 150 000 × 0,40 = 60 000 = charges fixes → résultat nul ✓.' },
      { t: 'example', h: 'Exemple en quantité', c: 'Prix 8 €/burger ; coût variable 3 €/burger ; charges fixes 4 000 €/mois.\n① MCV unitaire = 8 − 3 = **5 €**.\n② Seuil = 4 000 ÷ 5 = **800 burgers/mois**.' },
      { t: 'p', c: 'Bonus — le **point mort** (la date où le seuil est atteint) : Point mort = Seuil ÷ CA annuel × 360. Ex. 150 000 ÷ 200 000 × 360 = 270 jours ≈ **fin septembre**.' },
      { t: 'warning', h: 'Piège', c: 'Seuil **en euros** → diviser par le **taux** de MCV. Seuil **en quantité** → diviser par la **MCV unitaire**. Ne pas mélanger les deux.' },
    ]),
    S('🧮 MÉTHODE — Calculer marge, taux de marge et taux de marque', [
      { t: 'p', c: 'Trois notions **souvent confondues**. La **marge** est un montant en euros ; le **taux de marge** et le **taux de marque** sont des pourcentages, mais calculés sur une base différente.' },
      { t: 'formula', c: 'Marge commerciale = Prix de vente HT − Coût d’achat HT\nTaux de marge = Marge ÷ Coût d’achat × 100\nTaux de marque = Marge ÷ Prix de vente × 100' },
      { t: 'example', h: 'Exemple déroulé', c: 'Coût d’achat 60 € HT ; prix de vente 100 € HT.\nMarge = 100 − 60 = **40 €**.\nTaux de marge = 40 ÷ 60 × 100 = **66,7 %** (par rapport au coût d’achat).\nTaux de marque = 40 ÷ 100 × 100 = **40 %** (par rapport au prix de vente).' },
      { t: 'p', c: 'La différence de base explique tout : le **taux de marge** se rapporte au **coût** (« je gagne 66,7 % de ce que j’ai payé »), le **taux de marque** au **prix de vente** (« la marge représente 40 % du prix affiché »). Le taux de marge est **toujours supérieur** au taux de marque.' },
      { t: 'tip', h: 'Retrouver un prix', c: 'À partir du coût d’achat et d’un taux de marge : Prix de vente = Coût × (1 + taux de marge). Ex. 60 × 1,667 ≈ **100 €**.' },
      { t: 'warning', h: 'Piège classique', c: 'Ne pas confondre taux de **marge** (÷ coût d’achat) et taux de **marque** (÷ prix de vente). L’énoncé précise toujours lequel — lire attentivement.' },
    ]),
    S('🧮 MÉTHODE — Calculer un coût complet', [
      { t: 'p', c: 'Le coût complet additionne toutes les charges d’un produit : les **directes** (affectées sans calcul) et les **indirectes** (réparties via les centres d’analyse). Méthode en 3 temps.' },
      { t: 'list', c: [
        '**Étape 1** — Recenser les charges **directes** (matières, main-d’œuvre directe).',
        '**Étape 2** — Répartir les charges **indirectes** : coût d’unité d’œuvre = total du centre ÷ nombre d’unités d’œuvre, puis imputer selon la consommation du produit.',
        '**Étape 3** — Additionner : coût complet = directes + indirectes imputées.',
      ] },
      { t: 'example', h: 'Exemple déroulé', c: 'Directes : matières 14 €/u + main-d’œuvre 10 €/u = 24 €/u.\nIndirectes : centre production 45 000 € pour 3 000 h-machine → coût d’unité d’œuvre = 45 000 ÷ 3 000 = **15 €/h**. Le produit consomme 0,5 h → 15 × 0,5 = **7,50 €**.\nCoût complet = 24 + 7,50 = **31,50 €/u**.' },
      { t: 'p', c: 'Pour fixer le **prix de vente** : appliquer la marge visée. Ex. marge 25 % → 31,50 × 1,25 ≈ **39,38 € HT**.' },
      { t: 'tip', h: 'À retenir', c: 'La difficulté est la **répartition** des charges indirectes : toujours passer par le **coût d’unité d’œuvre**. Le coût complet sert à fixer un **prix durable** ; pour une décision ponctuelle, revenir au **coût marginal**.' },
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

  // #####################################################################
  // MERCATIQUE (Terminale STMG — spécialité)
  // #####################################################################

  // ---- Thème 1 — Mercatique et consommateurs -----------------------
  'mkg-t1': [
    S('🧠 Comprendre le consommateur : besoins et mobiles', [
      { t: 'p', c: 'La **mercatique** (ou marketing) est l’ensemble des actions destinées à **détecter, analyser et satisfaire les besoins** des consommateurs, dans le but d’atteindre les objectifs de l’entreprise (vendre, fidéliser, se différencier). Tout part donc de la compréhension du **consommateur**.' },
      { t: 'p', c: 'Un **besoin** est une sensation de manque. **Maslow** les hiérarchise en une pyramide : besoins physiologiques, de sécurité, d’appartenance, d’estime, d’accomplissement. Un produit peut répondre à plusieurs niveaux à la fois (une voiture = se déplacer, mais aussi statut social).' },
      { t: 'table', head: ['Notion', 'Définition'], rows: [
        ['Besoin', 'Sensation de manque (dormir, se nourrir, appartenir)'],
        ['Motivation / mobile', 'Force qui POUSSE à l’achat'],
        ['Frein', 'Force qui RETIENT (peur, risque, prix)'],
        ['Attente', 'Ce que le client espère précisément du produit'],
      ] },
      { t: 'p', c: 'Les **mobiles** d’achat sont classés : **hédonistes** (se faire plaisir), **oblatifs** (faire plaisir aux autres, offrir) et d’**auto-expression** (montrer qui l’on est). Les **freins** sont les **peurs** (risque perçu), les **inhibitions** (culpabilité) et les **risques** (financier, de performance).' },
      { t: 'tip', h: 'À retenir', c: 'Un achat = équilibre entre **mobiles** (qui poussent) et **freins** (qui retiennent). Le rôle de la mercatique est de **renforcer les mobiles** et de **lever les freins** (essai gratuit, garantie, avis clients).' },
    ]),
    S('🛒 Le processus et les facteurs d’achat', [
      { t: 'p', c: 'L’achat n’est pas instantané : c’est un **processus** en plusieurs étapes que la mercatique cherche à accompagner à chaque instant.' },
      { t: 'list', c: [
        '**1. Reconnaissance du besoin** : le consommateur prend conscience d’un manque.',
        '**2. Recherche d’informations** : avis, comparateurs, publicité, entourage.',
        '**3. Évaluation des solutions** : comparaison des offres selon des critères.',
        '**4. Décision d’achat** : le passage à l’acte.',
        '**5. Évaluation post-achat** : satisfaction ou regret → fidélité ou non.',
      ] },
      { t: 'p', c: 'La décision est influencée par des **facteurs** : **individuels** (âge, personnalité, style de vie), **psychologiques** (perception, apprentissage) et **socioculturels** (famille, groupes de référence, culture, effets de mode). D’où le fait qu’« on n’achète pas tous de la même façon ».' },
      { t: 'p', c: 'On distingue aussi les **types d’achat** : **réfléchi** (voiture, choix long), **impulsif** (en caisse, sans réflexion), **routinier** (courses habituelles). Chaque type appelle une mercatique différente.' },
      { t: 'tip', h: 'À retenir', c: 'La satisfaction **post-achat** est décisive : un client satisfait revient et recommande ; un client déçu part et « fait du bruit ». Fidéliser coûte moins cher que conquérir.' },
    ]),
    S('📊 Étudier le comportement : les études', [
      { t: 'p', c: 'Pour connaître les consommateurs, l’entreprise réalise des **études de marché**. On les classe en deux grandes familles complémentaires.' },
      { t: 'table', head: ['Étude', 'Question', 'Outils'], rows: [
        ['Quantitative', 'COMBIEN ? (mesurer)', 'Sondage, questionnaire sur grand échantillon'],
        ['Qualitative', 'POURQUOI ? (comprendre)', 'Entretiens, réunions de groupe (focus group)'],
      ] },
      { t: 'p', c: 'L’étude **quantitative** donne des chiffres représentatifs (part de marché, taux de notoriété) ; l’étude **qualitative** explore les motivations profondes et les freins. Les données peuvent être **primaires** (recueillies pour l’étude) ou **secondaires** (déjà existantes : INSEE, rapports).' },
      { t: 'p', c: 'Aujourd’hui, le **big data** et les traces numériques (historique d’achat, navigation) complètent ces études : l’entreprise connaît le consommateur « en temps réel ».' },
      { t: 'tip', h: 'À retenir', c: 'Quanti = **mesurer** (combien) ; quali = **comprendre** (pourquoi). Les deux se complètent : on explore en quali, on valide en quanti.' },
    ]),
    S('🛍️ Étude de cas guidée — comprendre un achat', [
      { t: 'p', c: '**Énoncé.** Des clients font la queue toute une nuit pour acheter le dernier smartphone d’une grande marque. Analysez les besoins, mobiles et freins en jeu.' },
      { t: 'example', h: 'Étape 1 — Besoins', c: 'Besoin fonctionnel (communiquer) mais surtout besoins d’**estime** et d’**appartenance** (posséder l’objet à la mode, appartenir à la communauté de la marque).' },
      { t: 'example', h: 'Étape 2 — Mobiles', c: 'Mobile **hédoniste** (plaisir de la nouveauté), mobile d’**auto-expression** (montrer son statut, son appartenance à une « tribu » de fans).' },
      { t: 'example', h: 'Étape 3 — Freins', c: 'Frein **financier** (prix élevé) et **risque** (attente, rupture de stock), largement compensés ici par la force des mobiles et l’effet de rareté organisé.' },
      { t: 'p', c: '**Commentaire.** La marque a transformé l’achat en **événement** : la file d’attente devient une preuve sociale qui renforce le désir. C’est une mercatique de la **désirabilité** qui joue sur l’image et l’appartenance bien plus que sur la fonction.' },
      { t: 'tip', h: 'Méthode', c: 'Pour analyser un achat : identifier le **besoin** (Maslow), les **mobiles**, les **freins**, puis montrer comment la mercatique **agit** dessus.' },
    ]),
  ],

  // ---- Thème 2 — Mercatique et marchés -----------------------------
  'mkg-t2': [
    S('🎯 Le marché : offre, demande, environnement', [
      { t: 'p', c: 'Le **marché** est le lieu (physique ou non) de rencontre entre une **offre** (les entreprises qui vendent) et une **demande** (les clients qui achètent). L’analyser, c’est mesurer sa taille, sa structure et son évolution.' },
      { t: 'list', c: [
        '**La demande** : clients actuels + non-consommateurs relatifs (qui pourraient acheter) ; on écarte les non-consommateurs absolus (qui n’achèteront jamais).',
        '**L’offre** : les concurrents (directs et indirects) et leur pouvoir de marché.',
        '**L’environnement** : facteurs PESTEL (politique, économique, socioculturel, technologique, écologique, légal) qui influencent le marché.',
      ] },
      { t: 'p', c: 'On mesure sa position par la **part de marché** : la place de l’entreprise sur son marché.' },
      { t: 'formula', c: 'Part de marché (%) = (Ventes de l’entreprise ÷ Ventes totales du marché) × 100' },
      { t: 'example', h: 'Calcul', c: 'Ventes de l’entreprise 3 M€ ; ventes totales du marché 25 M€.\nPart de marché = 3 ÷ 25 × 100 = **12 %**.' },
      { t: 'tip', h: 'À retenir', c: 'La demande ne se limite pas aux clients actuels : les **non-consommateurs relatifs** sont le potentiel de croissance. La **part de marché** situe l’entreprise face à ses concurrents.' },
    ]),
    S('✂️ Segmenter, cibler, positionner (SCP)', [
      { t: 'p', c: 'Une entreprise ne peut pas plaire à tout le monde. La démarche **SCP** structure son approche du marché en trois temps.' },
      { t: 'table', head: ['Étape', 'Question', 'Résultat'], rows: [
        ['Segmentation', 'Comment découper le marché ?', 'Des groupes homogènes (segments)'],
        ['Ciblage', 'Quel(s) segment(s) viser ?', 'La cible'],
        ['Positionnement', 'Quelle image donner ?', 'Une place claire dans l’esprit du client'],
      ] },
      { t: 'p', c: 'La **segmentation** découpe le marché en groupes homogènes selon des critères (âge, revenu, style de vie, usage). Le **ciblage** choisit le ou les segments à conquérir. Le **positionnement** définit l’image et la place que l’on veut occuper dans l’esprit du client, par rapport aux concurrents.' },
      { t: 'example', h: 'Illustration', c: 'Vinted (occasion, budget serré, éco-responsable), Rolex (luxe, statut), McDo (rapide, familial, prix bas) ne visent **pas la même cible** et ont chacun un **positionnement** très distinct. C’est ce qui évite qu’ils se concurrencent frontalement.' },
      { t: 'tip', h: 'À retenir', c: 'SCP = **Segmenter → Cibler → Positionner**. Un bon positionnement est **clair, distinctif et crédible** : il répond à « pourquoi me choisir plutôt qu’un autre ? ».' },
    ]),
    S('🔎 La veille et l’étude de marché', [
      { t: 'p', c: 'Le marché évolue en permanence : l’entreprise doit exercer une **veille** (surveillance continue de la concurrence, des tendances, des technologies) pour ne pas se faire dépasser. La veille alimente les décisions stratégiques.' },
      { t: 'p', c: 'Avant de lancer un produit ou d’entrer sur un marché, on réalise une **étude de marché** qui croise l’analyse de la **demande**, de l’**offre** et de l’**environnement**. Elle réduit le risque en vérifiant qu’il existe bien des clients prêts à acheter.' },
      { t: 'list', c: [
        'Analyser la **demande** : qui, combien, quels besoins, quel budget ?',
        'Analyser l’**offre** : quels concurrents, à quels prix, quelle différenciation possible ?',
        'Analyser l’**environnement** : réglementation, tendances, technologies.',
      ] },
      { t: 'tip', h: 'À retenir', c: 'La **veille** est continue ; l’**étude de marché** est ponctuelle (avant une décision). Toutes deux visent à **décider en connaissance de cause**, pas au hasard.' },
    ]),
    S('🛍️ Étude de cas guidée — segmenter et cibler', [
      { t: 'p', c: '**Énoncé.** Une marque de vêtements veut lancer une nouvelle ligne. Elle hésite entre viser « tout le monde » ou un segment précis. Que recommander ?' },
      { t: 'example', h: 'Étape 1 — Segmentation', c: 'Découper le marché : par âge (ados / jeunes actifs / seniors), par style (sportif / chic / éco-responsable), par budget. On obtient des **segments homogènes**.' },
      { t: 'example', h: 'Étape 2 — Ciblage', c: 'Viser « tout le monde » dilue le message et le budget. Mieux vaut **cibler** un segment porteur (ex. jeunes actifs sensibles à l’éco-responsabilité) où la marque peut se différencier.' },
      { t: 'p', c: '**Étape 3 — Positionnement.** Adopter un positionnement clair (« mode responsable et accessible ») et le décliner dans tout le mix (produit, prix, distribution, communication). **Recommandation** : cibler plutôt que s’éparpiller, car un positionnement fort attire une clientèle fidèle.' },
      { t: 'tip', h: 'Méthode', c: 'Toujours : **segmenter** (critères) → **cibler** (choix justifié) → **positionner** (image distinctive) → vérifier la **cohérence** avec le mix.' },
    ]),
  ],

  // ---- Thème 3 — La mercatique opérationnelle (le mix) -------------
  'mkg-t3': [
    S('🎁 Le marketing mix : les 4P', [
      { t: 'p', c: 'La **mercatique opérationnelle** met en œuvre la stratégie par des actions concrètes, résumées par le **marketing mix** ou les **4P** : Product, Price, Place, Promotion. La clé est leur **cohérence** : les 4P doivent « raconter la même histoire ».' },
      { t: 'table', head: ['P', 'En français', 'Décisions'], rows: [
        ['Product', 'Produit', 'Gamme, qualité, design, marque, services'],
        ['Price', 'Prix', 'Niveau, stratégie, réductions'],
        ['Place', 'Distribution', 'Circuits, points de vente, logistique'],
        ['Promotion', 'Communication', 'Publicité, promotions, réseaux sociaux'],
      ] },
      { t: 'p', c: 'La **cohérence** est essentielle : une Rolex (produit de luxe) doit avoir un **prix** élevé, une **distribution** sélective (boutiques exclusives) et une **communication** haut de gamme. La vendre en supermarché à prix cassé détruirait son image.' },
      { t: 'tip', h: 'À retenir', c: 'Les 4P = **Produit, Prix, Distribution (Place), Communication (Promotion)**. Ils doivent être **cohérents** entre eux et avec le **positionnement**.' },
    ]),
    S('🏷️ La politique de prix', [
      { t: 'p', c: 'Le **prix** est le seul P qui **rapporte** de l’argent (les autres en coûtent). Il envoie aussi un signal de **qualité** et de **positionnement**. Trois grandes stratégies existent au lancement.' },
      { t: 'table', head: ['Stratégie', 'Principe', 'Quand'], rows: [
        ['Écrémage', 'Prix élevé, cibler une clientèle prête à payer', 'Produit innovant, image premium'],
        ['Pénétration', 'Prix bas pour conquérir vite un large marché', 'Marché de masse, volumes'],
        ['Alignement', 'Se caler sur le prix du marché', 'Marché concurrentiel banalisé'],
      ] },
      { t: 'p', c: 'Le prix se fixe en tenant compte de trois éléments : le **coût** (il doit couvrir le coût de revient), la **demande** (ce que le client est prêt à payer), et la **concurrence**. L’**élasticité-prix** mesure la sensibilité de la demande : si une hausse de prix fait beaucoup chuter les ventes, la demande est **élastique**.' },
      { t: 'example', h: 'Écrémage vs pénétration', c: 'Un smartphone haut de gamme lancé cher = **écrémage** (marge élevée, image). Un abonnement streaming lancé à prix cassé pour capter vite des millions d’abonnés = **pénétration**.' },
      { t: 'tip', h: 'À retenir', c: 'Prix = coût + demande + concurrence. **Écrémage** (prix haut, image) vs **pénétration** (prix bas, volume). Le prix doit rester **cohérent** avec le positionnement.' },
    ]),
    S('📦 Produit, distribution et communication', [
      { t: 'p', c: 'La **politique de produit** gère la **gamme** (l’ensemble des produits), le **cycle de vie** (lancement → croissance → maturité → déclin) et la **marque** (nom, logo, image, promesse). La marque crée de la valeur et fidélise.' },
      { t: 'p', c: 'La **politique de distribution** choisit les **circuits** pour amener le produit au client : circuit **direct** (du producteur au client, sans intermédiaire), **court** (un intermédiaire), **long** (plusieurs). L’intensité peut être **intensive** (partout), **sélective** (points choisis) ou **exclusive** (rares distributeurs).' },
      { t: 'p', c: 'La **politique de communication** fait connaître et aimer le produit. On distingue les moyens **média** (TV, radio, presse, affichage, internet) et **hors-média** (promotion des ventes, relations publiques, marketing direct, réseaux sociaux).' },
      { t: 'table', head: ['Circuit', 'Intermédiaires', 'Exemple'], rows: [
        ['Direct', 'Aucun', 'Vente à la ferme, site du fabricant'],
        ['Court', 'Un', 'Producteur → détaillant'],
        ['Long', 'Plusieurs', 'Producteur → grossiste → détaillant'],
      ] },
      { t: 'tip', h: 'À retenir', c: 'Produit (gamme, cycle de vie, marque) + Distribution (circuits, intensité) + Communication (média/hors-média). Chaque choix doit rester **cohérent** avec les trois autres P.' },
    ]),
    S('🛍️ Étude de cas guidée — la cohérence du mix', [
      { t: 'p', c: '**Énoncé.** Une marque de café haut de gamme veut se lancer. Proposez un mix cohérent (4P).' },
      { t: 'list', c: [
        '**Produit** : café d’origine, torréfaction artisanale, packaging soigné, marque évocatrice.',
        '**Prix** : stratégie d’**écrémage** (prix élevé) cohérent avec le positionnement premium.',
        '**Distribution** : **sélective** (épiceries fines, boutique, site propre), pas la grande distribution discount.',
        '**Communication** : storytelling sur l’origine et le savoir-faire, réseaux sociaux esthétiques, dégustations.',
      ] },
      { t: 'p', c: '**Commentaire.** Les 4P « racontent la même histoire » : le premium. Un seul P incohérent (ex. vendre en hard-discount) suffirait à **détruire** le positionnement. La force d’un mix vient de sa **cohérence d’ensemble**.' },
      { t: 'tip', h: 'Méthode', c: 'Construire un mix = décliner les **4P** en veillant à leur **cohérence** avec le **positionnement** choisi. Justifier chaque choix.' },
    ]),
  ],

  // ---- Thème 4 — Mercatique et société -----------------------------
  'mkg-t4': [
    S('📱 La mercatique numérique et les données', [
      { t: 'p', c: 'Le numérique a **transformé** la mercatique. L’entreprise dispose désormais d’une masse de **données** (data) sur les consommateurs : historique d’achat, navigation, géolocalisation, réseaux sociaux. Elle peut personnaliser ses offres « one-to-one ».' },
      { t: 'list', c: [
        '**Personnalisation** : recommandations sur mesure (« vous aimerez aussi… »).',
        '**Ciblage publicitaire** : publicités adaptées à chaque profil.',
        '**Relation client** : réseaux sociaux, chatbots, e-mails ciblés.',
        '**Mesure en temps réel** : taux de clic, de conversion, panier moyen.',
      ] },
      { t: 'p', c: 'Cette puissance soulève des **enjeux** : protection de la **vie privée**, encadrée par le **RGPD** (consentement, droit à l’effacement), et risque de **manipulation** (« Amazon sait ce que tu veux avant toi »). La donnée est un atout **et** une responsabilité.' },
      { t: 'tip', h: 'À retenir', c: 'La data permet une mercatique **personnalisée et mesurable**, mais impose le respect du **RGPD** et de l’éthique. Le consentement du consommateur est obligatoire.' },
    ]),
    S('🌱 Mercatique durable et éthique', [
      { t: 'p', c: 'Les consommateurs attendent des entreprises qu’elles soient **responsables**. La **mercatique durable** intègre les préoccupations sociales et environnementales dans l’offre : produits éco-conçus, circuits courts, transparence.' },
      { t: 'p', c: 'Mais attention au **greenwashing** (écoblanchiment) : communiquer sur des engagements verts sans les tenir réellement. C’est un **risque majeur** de réputation : les consommateurs et les ONG le débusquent vite, et le retour de bâton peut être violent.' },
      { t: 'table', head: ['Démarche sincère', 'Greenwashing'], rows: [
        ['Engagements mesurés et prouvés', 'Slogans vagues (« éco », « vert »)'],
        ['Transparence sur les limites', 'On cache l’essentiel'],
        ['Cohérence sur toute l’activité', 'Une action verte, le reste polluant'],
      ] },
      { t: 'p', c: 'La **e-réputation** (image sur internet) est devenue centrale : avis clients, commentaires, bad buzz. Une entreprise doit la **surveiller** et y répondre. Un « bad buzz » peut détruire des années d’efforts en quelques heures.' },
      { t: 'tip', h: 'À retenir', c: 'Mercatique durable **sincère** = avantage concurrentiel ; **greenwashing** = risque de réputation. La e-réputation se **surveille** et se **cultive**.' },
    ]),
    S('🔗 Les nouveaux parcours d’achat', [
      { t: 'p', c: 'Le parcours d’achat est devenu **omnicanal** : le client passe sans cesse du magasin au site, à l’application, aux réseaux sociaux. Il se renseigne en ligne et achète en boutique (ou l’inverse). L’entreprise doit offrir une **expérience fluide** sur tous les canaux.' },
      { t: 'list', c: [
        '**Web-to-store** : chercher en ligne, acheter en magasin (click & collect).',
        '**Store-to-web** : voir en magasin, acheter en ligne.',
        '**Marketing d’influence** : des créateurs de contenu recommandent des produits à leur communauté.',
      ] },
      { t: 'p', c: 'Les **réseaux sociaux** sont à la fois un canal de **communication**, de **vente** (social commerce) et de **service client**. L’influence et les avis pèsent souvent plus que la publicité traditionnelle, jugée moins crédible.' },
      { t: 'tip', h: 'À retenir', c: 'Le consommateur est **omnicanal** : il faut une expérience **cohérente et fluide** en ligne et en magasin. L’**influence** et les **avis** sont devenus des leviers majeurs.' },
    ]),
    S('🛍️ Étude de cas guidée — data et éthique', [
      { t: 'p', c: '**Énoncé.** Un site e-commerce utilise les données de navigation pour recommander des produits et cibler ses publicités. Analysez les avantages et les limites.' },
      { t: 'example', h: 'Étape 1 — Avantages', c: 'Personnalisation (meilleure expérience client), efficacité publicitaire (moins de gaspillage), fidélisation, mesure en temps réel des performances.' },
      { t: 'example', h: 'Étape 2 — Limites et risques', c: 'Atteinte à la **vie privée**, sentiment de surveillance, dépendance aux algorithmes, risque juridique si le **RGPD** n’est pas respecté (consentement, sécurité des données).' },
      { t: 'p', c: '**Recommandation.** Exploiter la data **dans le respect du RGPD** : recueillir le consentement, être transparent, sécuriser les données, laisser le choix au client. Une exploitation éthique **renforce la confiance** — donc, à terme, la performance.' },
      { t: 'tip', h: 'Méthode', c: 'Pour tout sujet « numérique/data » : peser **avantages** (personnalisation, mesure) et **limites** (vie privée, RGPD, éthique), puis recommander un usage **responsable**.' },
    ]),
  ],

  // #####################################################################
  // RESSOURCES HUMAINES & COMMUNICATION (Terminale STMG — spécialité)
  // #####################################################################

  // ---- Thème 1 — Mobiliser les ressources humaines -----------------
  'rh-t1': [
    S('💪 La motivation au travail', [
      { t: 'p', c: 'Une entreprise ne vaut que par les femmes et les hommes qui la font vivre. **Mobiliser les ressources humaines**, c’est donner aux salariés l’envie et les moyens de s’investir. Au cœur : la **motivation**, ce qui pousse une personne à agir et à se dépasser.' },
      { t: 'table', head: ['Théorie', 'Idée clé'], rows: [
        ['Taylor (OST)', 'La motivation = le salaire (« l’homme au travail »)'],
        ['Maslow', 'On est motivé par des besoins hiérarchisés (pyramide)'],
        ['Herzberg', 'Facteurs d’hygiène (évitent l’insatisfaction) ≠ facteurs de motivation (donnent l’envie)'],
        ['Mayo', 'Les relations sociales et la reconnaissance motivent (effet Hawthorne)'],
      ] },
      { t: 'p', c: 'La distinction d’**Herzberg** est essentielle : les **facteurs d’hygiène** (salaire, conditions de travail, sécurité) évitent le mécontentement mais ne motivent pas durablement ; les **facteurs de motivation** (responsabilités, reconnaissance, intérêt du travail, évolution) sont les vrais moteurs de l’engagement.' },
      { t: 'p', c: 'Concrètement, l’entreprise dispose de **leviers** : rémunération (fixe, variable, primes, participation), reconnaissance, autonomie, perspectives d’évolution, ambiance et sens du travail.' },
      { t: 'tip', h: 'À retenir', c: 'Un bon salaire évite l’insatisfaction (facteur d’**hygiène**) mais ne suffit pas à **motiver** : la reconnaissance, l’intérêt du travail et l’évolution (facteurs de **motivation**) sont décisifs.' },
    ]),
    S('🎓 Les compétences et leur développement', [
      { t: 'p', c: 'La **compétence** est la capacité à mobiliser des ressources pour agir efficacement dans une situation de travail. Elle se décompose classiquement en trois dimensions.' },
      { t: 'list', c: [
        '**Savoir** : les connaissances théoriques (ce que je sais).',
        '**Savoir-faire** : la maîtrise pratique (ce que je sais faire).',
        '**Savoir-être** : les attitudes et comportements (rigueur, écoute, esprit d’équipe).',
      ] },
      { t: 'p', c: 'Une compétence ne se résume donc **pas** à un diplôme : elle se **construit** et s’**entretient**. L’entreprise développe les compétences par la **formation**, le **tutorat**, la **mobilité** interne et l’**expérience**.' },
      { t: 'p', c: 'La **GPEC** (Gestion Prévisionnelle des Emplois et des Compétences) anticipe les besoins futurs : quels métiers vont évoluer ou disparaître, quelles compétences faudra-t-il ? Elle permet d’adapter les effectifs et de former **à l’avance**, plutôt que de subir.' },
      { t: 'tip', h: 'À retenir', c: 'Compétence = **savoir + savoir-faire + savoir-être**. La **GPEC** anticipe les besoins ; la **formation** développe les compétences tout au long de la carrière.' },
    ]),
    S('💶 Rémunération et parcours professionnel', [
      { t: 'p', c: 'La **rémunération** est à la fois un coût pour l’entreprise, un revenu pour le salarié et un puissant outil de **motivation** et de **fidélisation**. Elle ne se limite pas au salaire de base.' },
      { t: 'table', head: ['Composante', 'Exemple'], rows: [
        ['Salaire fixe', 'Le salaire de base mensuel'],
        ['Part variable', 'Primes d’objectifs, commissions'],
        ['Périphériques', 'Participation, intéressement, avantages en nature'],
        ['Reconnaissance non monétaire', 'Évolution, autonomie, remerciements'],
      ] },
      { t: 'p', c: 'Une politique de rémunération doit être perçue comme **équitable** (en interne comme face au marché) : un sentiment d’injustice démotive fortement. Le **parcours professionnel** (évolution, promotions, mobilité) est également un levier majeur : il donne des perspectives et retient les talents.' },
      { t: 'tip', h: 'À retenir', c: 'La rémunération motive **si elle est perçue comme équitable**. La combiner avec des perspectives d’**évolution** (parcours) est bien plus efficace que le seul salaire.' },
    ]),
    S('🧑‍💼 Étude de cas guidée — motiver une équipe', [
      { t: 'p', c: '**Énoncé.** Dans une entreprise, le turnover est élevé et les salariés se disent démotivés malgré des salaires corrects. Analysez et proposez des solutions.' },
      { t: 'example', h: 'Étape 1 — Diagnostic', c: 'Salaires corrects = facteur d’**hygiène** satisfait, mais démotivation persistante → ce sont les **facteurs de motivation** (Herzberg) qui manquent : reconnaissance, intérêt du travail, perspectives.' },
      { t: 'example', h: 'Étape 2 — Solutions', c: 'Enrichir les tâches (plus de responsabilités), reconnaître les réussites, offrir des perspectives d’**évolution** (GPEC, formation), donner plus d’**autonomie** et de sens.' },
      { t: 'p', c: '**Commentaire.** Augmenter encore les salaires aurait peu d’effet (le facteur d’hygiène est déjà couvert). C’est en agissant sur les **facteurs de motivation** que l’entreprise réduira le turnover et remobilisera ses équipes.' },
      { t: 'tip', h: 'Méthode', c: 'Diagnostiquer avec **Herzberg/Maslow** (hygiène ou motivation ?), puis proposer des leviers **ciblés**. Toujours relier la solution au problème identifié.' },
    ]),
  ],

  // ---- Thème 2 — Cohésion et conflits ------------------------------
  'rh-t2': [
    S('🤝 Le groupe, l’équipe et la cohésion', [
      { t: 'p', c: 'Une organisation fonctionne par **groupes** et **équipes**. Un **groupe** est un ensemble de personnes en interaction ; une **équipe** est un groupe orienté vers un **objectif commun**, avec une complémentarité des rôles. La **cohésion** est la force qui unit ses membres.' },
      { t: 'p', c: 'Une équipe **cohésive** est plus performante : meilleure communication, entraide, motivation collective. Mais une cohésion **excessive** a ses dangers : le **conformisme** (on n’ose plus contredire) et la **pensée de groupe** (« groupthink »), qui étouffent l’esprit critique et mènent à de mauvaises décisions.' },
      { t: 'list', c: [
        'Facteurs de cohésion : objectif partagé, communication, reconnaissance, taille raisonnable, réussite commune.',
        'Risques d’une cohésion excessive : conformisme, rejet des avis divergents, prise de risque irrationnelle.',
      ] },
      { t: 'p', c: 'La **culture d’entreprise** (valeurs, rites, histoire, symboles partagés) renforce la cohésion et le sentiment d’appartenance. Elle donne une identité commune et guide les comportements.' },
      { t: 'tip', h: 'À retenir', c: 'La cohésion est un atout **jusqu’à un certain point** : trop de cohésion tue le débat (conformisme, pensée de groupe). Une équipe performante sait rester **soudée ET critique**.' },
    ]),
    S('⚔️ Comprendre et gérer les conflits', [
      { t: 'p', c: 'Le **conflit** est une opposition entre des personnes ou des groupes. Il n’est pas forcément négatif : un conflit bien géré peut **révéler des problèmes** et faire progresser. Mal géré, il dégrade le climat et la performance.' },
      { t: 'table', head: ['Type de conflit', 'Origine'], rows: [
        ['D’intérêts', 'Objectifs ou avantages incompatibles'],
        ['De valeurs', 'Visions ou principes opposés'],
        ['De personnes', 'Incompatibilités relationnelles'],
        ['De pouvoir', 'Lutte pour l’influence ou les ressources'],
      ] },
      { t: 'p', c: 'Plusieurs **modes de résolution** existent, du plus subi au plus constructif : le **recours hiérarchique** (le chef tranche), la **négociation** (les parties cherchent un accord), la **médiation** (un tiers neutre aide au dialogue), l’**arbitrage** (un tiers décide). La négociation « gagnant-gagnant » est souvent la plus durable.' },
      { t: 'example', h: 'Illustration', c: 'Deux services se disputent un budget (conflit d’intérêts). Le manager organise une **négociation** : chacun expose ses besoins, on cherche un compromis qui satisfait l’essentiel des deux → solution acceptée et durable, plutôt qu’une décision imposée mal vécue.' },
      { t: 'tip', h: 'À retenir', c: 'Un conflit peut être **constructif** s’il est géré. Privilégier la **négociation/médiation** (gagnant-gagnant) au recours hiérarchique, qui règle vite mais laisse des rancœurs.' },
    ]),
    S('🌐 La culture et le climat d’équipe', [
      { t: 'p', c: 'La **culture d’entreprise** est l’ensemble des **valeurs, croyances, rites et symboles** partagés par les membres. Elle se transmet (histoire du fondateur, héros internes, rituels) et façonne les comportements « ici, on fait comme ça ».' },
      { t: 'list', c: [
        '**Avantages** : sentiment d’appartenance, cohésion, repères communs, image externe.',
        '**Limites** : résistance au changement, exclusion de ceux qui ne « rentrent pas dans le moule ».',
      ] },
      { t: 'p', c: 'La culture influence directement la **cohésion** et la **gestion des conflits** : une culture du dialogue prévient les tensions ; une culture rigide les aggrave. Le manager est un **relais** de la culture, mais aussi celui qui doit la faire **évoluer** quand elle freine l’adaptation.' },
      { t: 'tip', h: 'À retenir', c: 'La culture d’entreprise **soude** mais peut **enfermer**. Une bonne culture favorise la cohésion **et** l’ouverture au changement.' },
    ]),
    S('🧑‍💼 Étude de cas guidée — gérer un conflit', [
      { t: 'p', c: '**Énoncé.** Deux salariés d’une même équipe sont en conflit ouvert, ce qui perturbe tout le service. Le manager doit intervenir. Que faire ?' },
      { t: 'example', h: 'Étape 1 — Identifier le conflit', c: 'Déterminer sa nature : conflit de **personnes** ? d’**intérêts** ? de **valeurs** ? Ici, tension relationnelle qui déborde sur le travail collectif.' },
      { t: 'example', h: 'Étape 2 — Choisir le mode de résolution', c: 'Plutôt que d’imposer une sanction (recours hiérarchique), organiser une **médiation** : réunir les deux parties, faire exprimer les griefs, chercher un terrain d’entente.' },
      { t: 'p', c: '**Étape 3 — Prévenir la rechute.** Clarifier les rôles, poser des règles de fonctionnement, restaurer la communication. **Commentaire** : un conflit traité par le dialogue renforce l’équipe ; ignoré ou mal tranché, il pourrit le climat et fait fuir les talents.' },
      { t: 'tip', h: 'Méthode', c: 'Conflit : 1) **identifier** sa nature, 2) choisir le **mode de résolution** adapté (négociation/médiation de préférence), 3) **prévenir** la rechute. Toujours viser un climat restauré.' },
    ]),
  ],

  // ---- Thème 3 — La communication ----------------------------------
  'rh-t3': [
    S('📣 Les formes de communication', [
      { t: 'p', c: 'La **communication** est l’ensemble des échanges d’informations au sein et autour de l’organisation. Bien communiquer est vital : cela mobilise les équipes, construit l’image et prévient les crises. On distingue plusieurs formes.' },
      { t: 'table', head: ['Critère', 'Type', 'Exemple'], rows: [
        ['Destinataire', 'Interne', 'Vers les salariés (note, intranet, réunion)'],
        ['Destinataire', 'Externe', 'Vers les clients, partenaires, public'],
        ['Objet', 'Commerciale', 'Vendre un produit (publicité)'],
        ['Objet', 'Institutionnelle', 'Valoriser l’image de l’organisation'],
        ['Cadre', 'Formelle', 'Officielle, écrite, hiérarchique'],
        ['Cadre', 'Informelle', 'Spontanée (« radio couloir »)'],
      ] },
      { t: 'p', c: 'La **communication globale** cherche la **cohérence** entre tous ces messages : ce que l’entreprise dit en interne, à ses clients et au public ne doit pas se contredire. Une incohérence détruit la crédibilité.' },
      { t: 'tip', h: 'À retenir', c: 'Interne (salariés) ≠ externe (public) ; commerciale (vendre) ≠ institutionnelle (image). La **communication globale** vise la **cohérence** de tous les messages.' },
    ]),
    S('🔄 Le processus et les canaux', [
      { t: 'p', c: 'Communiquer, c’est transmettre un **message** d’un **émetteur** à un **récepteur** via un **canal**, en attendant un **retour** (feed-back). À chaque étape, des **bruits** (parasites, malentendus) peuvent déformer le message.' },
      { t: 'list', c: [
        '**Émetteur** → **message** (codé) → **canal** → **récepteur** (qui décode) → **feed-back**.',
        '**Bruit** : tout ce qui perturbe (vocabulaire flou, mauvaise écoute, canal inadapté).',
      ] },
      { t: 'p', c: 'Le choix du **canal** est stratégique : un mail pour une info simple, une réunion pour un sujet sensible, l’affichage pour une consigne générale. Un canal inadapté (ex. annoncer un licenciement par SMS) peut ruiner le message et blesser.' },
      { t: 'p', c: 'Les **réseaux sociaux** ont bouleversé la communication externe : l’entreprise n’a plus le monopole de son image, les clients s’expriment, partagent, notent. La communication est devenue **interactive** et **immédiate**.' },
      { t: 'tip', h: 'À retenir', c: 'Communiquer efficacement = message **clair**, canal **adapté**, écoute du **feed-back**, et réduction des **bruits**. Le récepteur décode toujours à sa façon : vérifier qu’il a compris.' },
    ]),
    S('🚨 La communication de crise', [
      { t: 'p', c: 'Une **crise** (accident, scandale, bad buzz) peut frapper toute organisation. La **communication de crise** vise à **limiter les dégâts** sur l’image et à restaurer la confiance. Mal gérée, une crise peut être fatale à la réputation.' },
      { t: 'list', c: [
        '**Réagir vite** : le silence est interprété comme un aveu ou du mépris.',
        '**Être transparent et honnête** : reconnaître les faits, ne pas mentir (le mensonge, une fois découvert, aggrave tout).',
        '**Assumer et agir** : présenter des excuses si nécessaire, annoncer des mesures correctives.',
        '**Parler d’une seule voix** : un porte-parole identifié, un message cohérent.',
      ] },
      { t: 'example', h: 'Bad buzz', c: 'Une marque fait l’objet d’une vague de critiques sur les réseaux sociaux. Si elle **ignore** ou supprime les commentaires → la colère enfle. Si elle **répond vite, reconnaît** le problème et **agit** → elle peut retourner la situation et même renforcer sa crédibilité.' },
      { t: 'tip', h: 'À retenir', c: 'Communication de crise = **vitesse + transparence + cohérence**. Le silence et le mensonge sont les pires réactions. L’e-réputation se joue en quelques heures.' },
    ]),
    S('🧑‍💼 Étude de cas guidée — une communication efficace', [
      { t: 'p', c: '**Énoncé.** Une entreprise doit annoncer à ses salariés une réorganisation importante. Comment communiquer efficacement ?' },
      { t: 'example', h: 'Étape 1 — Type et objectif', c: 'Communication **interne**, **formelle**, sur un sujet **sensible** : objectif = informer clairement, rassurer, éviter les rumeurs (« radio couloir »).' },
      { t: 'example', h: 'Étape 2 — Canal et message', c: 'Privilégier une **réunion** (canal riche, permet le dialogue) plutôt qu’un simple mail. Message **clair, honnête**, expliquant le pourquoi et les conséquences concrètes.' },
      { t: 'p', c: '**Étape 3 — Feed-back.** Ouvrir un temps de **questions**, écouter les inquiétudes, prévoir un suivi. **Commentaire** : une réorganisation mal communiquée (par mail, sans explication) génère angoisse et rumeurs ; bien communiquée, elle limite la résistance au changement.' },
      { t: 'tip', h: 'Méthode', c: 'Identifier **type/objectif** → choisir le **canal adapté** (riche pour un sujet sensible) → soigner le **message** (clair, honnête) → organiser le **feed-back**.' },
    ]),
  ],

  // ---- Thème 4 — Coordination et conditions de travail -------------
  'rh-t4': [
    S('⚙️ Coordonner le travail', [
      { t: 'p', c: 'Dès qu’une organisation grandit, il faut **coordonner** le travail réparti entre les personnes et les services. **Mintzberg** a identifié plusieurs **mécanismes de coordination**.' },
      { t: 'table', head: ['Mécanisme', 'Principe'], rows: [
        ['Ajustement mutuel', 'On se coordonne en communiquant directement (petites équipes)'],
        ['Supervision directe', 'Un chef donne les ordres et contrôle'],
        ['Standardisation des procédés', 'Des procédures écrites (mode opératoire)'],
        ['Standardisation des résultats', 'On fixe des objectifs, libre à chacun de les atteindre'],
        ['Standardisation des qualifications', 'On recrute des experts formés (hôpital)'],
      ] },
      { t: 'p', c: 'Le bon mécanisme dépend du contexte : l’**ajustement mutuel** convient aux petites structures ou aux tâches complexes ; la **standardisation** aux grandes organisations et aux tâches répétitives. La **structure** de l’entreprise (fonctionnelle, divisionnelle, matricielle) organise cette coordination.' },
      { t: 'tip', h: 'À retenir', c: 'Coordonner = faire travailler ensemble. Petites équipes → **ajustement mutuel** ; grandes organisations → **supervision** et **standardisation**.' },
    ]),
    S('🏥 Conditions de travail et QVT', [
      { t: 'p', c: 'Les **conditions de travail** regroupent tout ce qui entoure l’activité : environnement physique (bruit, sécurité, ergonomie), rythme, horaires, charge mentale, relations. Elles influencent fortement la **santé**, la **motivation** et la **performance**.' },
      { t: 'p', c: 'La **QVT (qualité de vie au travail)** est une démarche visant à améliorer à la fois le **bien-être des salariés** et l’**efficacité** de l’organisation. Elle inclut l’équilibre vie pro/vie perso, le télétravail, la prévention des **risques psychosociaux** (stress, burn-out, harcèlement).' },
      { t: 'list', c: [
        'De bonnes conditions → moins d’absentéisme, moins d’accidents, plus d’engagement.',
        'De mauvaises conditions → stress, turnover, accidents, baisse de productivité.',
      ] },
      { t: 'tip', h: 'À retenir', c: 'La QVT n’est pas un « luxe » : de bonnes conditions de travail **améliorent la performance** (moins d’absentéisme, plus de motivation). Bien-être et efficacité vont de pair.' },
    ]),
    S('📊 Mesurer le climat social et le coût du travail', [
      { t: 'p', c: 'Le **climat social** est l’ambiance générale des relations dans l’entreprise. Il ne se « ressent » pas seulement : il se **mesure** avec des **indicateurs** objectifs, que le manager surveille comme un tableau de bord.' },
      { t: 'table', head: ['Indicateur', 'Ce qu’il révèle'], rows: [
        ['Taux d’absentéisme', 'Démotivation, mauvaises conditions'],
        ['Taux de turnover (rotation)', 'Départs fréquents = malaise, perte de talents'],
        ['Nombre de conflits / grèves', 'Tensions sociales'],
        ['Taux d’accidents du travail', 'Problèmes de sécurité/conditions'],
      ] },
      { t: 'p', c: 'Côté coûts, il faut distinguer le **salaire net** perçu et le **coût total** pour l’employeur (brut + cotisations patronales). Le **coût du travail** dépasse largement le net : c’est un enjeu de compétitivité et de décision d’embauche.' },
      { t: 'formula', c: 'Coût total employeur = Salaire brut + Cotisations patronales' },
      { t: 'example', h: 'Calcul', c: 'Fiche de paie : net 1 800 €. Le brut est d’environ 2 300 €, et le coût total pour l’employeur (avec ~42 % de charges patronales) d’environ **3 260 €**. L’écart net/coût total est considérable.' },
      { t: 'tip', h: 'À retenir', c: 'Un climat social se **pilote** avec des indicateurs (absentéisme, turnover). Le **coût du travail** (brut + charges patronales) est bien supérieur au net versé.' },
    ]),
    S('🧑‍💼 Étude de cas guidée — coût du travail & climat', [
      { t: 'p', c: '**Énoncé.** Une entreprise constate un absentéisme et un turnover en hausse. La direction envisage de « serrer » encore les coûts. Analysez.' },
      { t: 'example', h: 'Étape 1 — Lire les indicateurs', c: 'Absentéisme + turnover élevés = signaux d’un **climat social dégradé** : démotivation, mauvaises conditions, manque de reconnaissance.' },
      { t: 'example', h: 'Étape 2 — Le piège', c: 'Réduire encore les coûts (salaires, effectifs) risque d’**aggraver** le malaise → plus d’absences et de départs → coûts cachés (remplacements, formation, perte de compétences).' },
      { t: 'p', c: '**Étape 3 — Recommandation.** Investir dans la **QVT** et la reconnaissance pour restaurer le climat. Un climat sain réduit l’absentéisme et le turnover, donc **baisse les coûts cachés** — bien plus efficacement qu’une compression brutale. Bien-être et performance sont **liés**.' },
      { t: 'tip', h: 'Méthode', c: 'Lire les **indicateurs** du climat social → en déduire le problème → montrer les **coûts cachés** d’une mauvaise décision → recommander une action sur la **QVT/reconnaissance**.' },
    ]),
  ],

  // #####################################################################
  // SYSTÈMES D'INFORMATION DE GESTION — SIG (Terminale STMG — spécialité)
  // #####################################################################

  // ---- Thème 1 — Le système d'information dans l'organisation -------
  'sig-t1': [
    S('💻 Qu’est-ce qu’un système d’information ?', [
      { t: 'p', c: 'Le **système d’information (SI)** est l’ensemble des ressources (humaines, matérielles, logicielles) qui permettent de **collecter, stocker, traiter et diffuser** l’information dans une organisation. C’est le « système nerveux » de l’entreprise : sans lui, impossible de décider et de coordonner.' },
      { t: 'table', head: ['Fonction du SI', 'Exemple'], rows: [
        ['Collecter', 'Saisir une commande, scanner un produit'],
        ['Stocker', 'Enregistrer dans une base de données'],
        ['Traiter', 'Calculer un total, éditer une facture'],
        ['Diffuser', 'Envoyer l’info au bon service, au client'],
      ] },
      { t: 'p', c: 'Il faut distinguer **donnée**, **information** et **connaissance** : la **donnée** est un fait brut (« 42 »), l’**information** est une donnée mise en contexte (« 42 ventes aujourd’hui »), la **connaissance** est l’information interprétée pour décider (« les ventes montent, il faut réapprovisionner »).' },
      { t: 'tip', h: 'À retenir', c: 'Le SI = **collecter → stocker → traiter → diffuser** l’information. Il transforme des **données** brutes en **information** utile puis en **connaissance** pour décider.' },
    ]),
    S('📈 Le SI, outil d’aide à la décision', [
      { t: 'p', c: 'La finalité du SI est d’**aider à la décision** à tous les niveaux. Un bon SI fournit la **bonne information**, à la **bonne personne**, au **bon moment**, sous une forme **exploitable**.' },
      { t: 'list', c: [
        'Au niveau **opérationnel** : suivre les stocks, les commandes, la production au quotidien.',
        'Au niveau **stratégique** : tableaux de bord, analyses de tendances pour les dirigeants.',
      ] },
      { t: 'p', c: 'Le **PGI (progiciel de gestion intégré)**, ou ERP, est un logiciel unique qui gère toutes les fonctions de l’entreprise (ventes, achats, stocks, comptabilité, RH) autour d’une **base de données commune**. Avantage : une **seule saisie** met à jour tous les services → cohérence et gain de temps ; inconvénient : coût et rigidité.' },
      { t: 'p', c: 'Un SI de **qualité** repose sur des données **fiables, à jour, complètes et sécurisées**. Une donnée fausse (« garbage in, garbage out ») mène à une mauvaise décision.' },
      { t: 'tip', h: 'À retenir', c: 'Un **PGI/ERP** centralise l’information dans une **base commune** : une saisie, tous les services à jour. La **qualité des données** conditionne la qualité des décisions.' },
    ]),
    S('🔗 Processus et représentation du SI', [
      { t: 'p', c: 'Le fonctionnement de l’organisation s’analyse en **processus** : une suite d’activités qui transforment des entrées en sorties (ex. le processus « traiter une commande » : réception → vérification stock → préparation → facturation → expédition).' },
      { t: 'p', c: 'On **représente** ces processus par des schémas (diagrammes de flux) qui montrent qui fait quoi, dans quel ordre, et quelles informations circulent. Cette modélisation aide à **repérer les dysfonctionnements** (étapes inutiles, ressaisies, goulots) et à **améliorer** l’organisation.' },
      { t: 'example', h: 'Illustration — une commande', c: 'Une commande McDo : saisie sur la borne (collecte) → transmission en cuisine (diffusion) → suivi de préparation (traitement) → encaissement (traitement) → mise à jour des stocks (stockage). Le SI relie tous ces maillons en temps réel.' },
      { t: 'tip', h: 'À retenir', c: 'Un **processus** transforme des entrées en sorties via une suite d’activités. Le **modéliser** permet de repérer et corriger les dysfonctionnements.' },
    ]),
    S('💻 Étude de cas guidée — le SI à l’œuvre', [
      { t: 'p', c: '**Énoncé.** Un commerce constate des erreurs de stock (ruptures et sur-stocks) car chaque service (caisse, réserve, achats) tient ses propres tableaux. Analysez et proposez.' },
      { t: 'example', h: 'Étape 1 — Le problème', c: 'Des **données éclatées et non partagées** : chaque service a sa version, d’où des incohérences. Le SI ne remplit pas sa fonction de diffusion d’une information fiable et commune.' },
      { t: 'example', h: 'Étape 2 — Solution', c: 'Mettre en place un **PGI** (base de données commune) : une vente en caisse met à jour **automatiquement** le stock et alerte les achats. Une seule information, partagée, à jour.' },
      { t: 'p', c: '**Commentaire.** Le PGI supprime les ressaisies et les incohérences, fiabilise les stocks et aide à décider (réapprovisionnement au bon moment). Coût et conduite du changement sont les principales limites à anticiper.' },
      { t: 'tip', h: 'Méthode', c: 'Repérer le **dysfonctionnement du SI** (données non partagées, ressaisies) → proposer une solution (PGI, base commune) → peser **avantages et limites**.' },
    ]),
  ],

  // ---- Thème 2 — Les bases de données et le langage SQL ------------
  'sig-t2': [
    S('🗄️ Le modèle relationnel', [
      { t: 'p', c: 'Une **base de données** organise et stocke l’information de façon structurée pour la retrouver facilement. Le modèle le plus répandu est le **modèle relationnel** : les données sont rangées dans des **tables** (comme des tableaux).' },
      { t: 'table', head: ['Terme', 'Signification'], rows: [
        ['Table (relation)', 'Un tableau de données (ex. CLIENTS)'],
        ['Enregistrement (ligne)', 'Un élément (ex. un client précis)'],
        ['Champ (colonne)', 'Une caractéristique (nom, ville, email)'],
        ['Clé primaire', 'Identifiant unique de chaque enregistrement (ex. id_client)'],
        ['Clé étrangère', 'Champ qui référence la clé primaire d’une autre table (lien)'],
      ] },
      { t: 'p', c: 'La **clé primaire** identifie de façon **unique** chaque ligne (deux clients ne peuvent avoir le même id). La **clé étrangère** crée les **relations** entre tables : par exemple, une table COMMANDES contient l’id_client (clé étrangère) qui pointe vers la table CLIENTS. C’est ce qui évite de tout répéter.' },
      { t: 'tip', h: 'À retenir', c: 'Base relationnelle = **tables** liées par des **clés**. Clé **primaire** = identifiant unique ; clé **étrangère** = lien vers une autre table.' },
    ]),
    S('🔍 Le langage SQL : interroger la base', [
      { t: 'p', c: 'Le **SQL (Structured Query Language)** est le langage qui permet de **poser des questions** à une base de données (« requêtes »). La requête de base sélectionne des colonnes, dans une table, selon une condition.' },
      { t: 'formula', c: 'SELECT colonnes\nFROM table\nWHERE condition\nORDER BY colonne ;' },
      { t: 'list', c: [
        '**SELECT** : les colonnes à afficher (SELECT * = toutes).',
        '**FROM** : la table concernée.',
        '**WHERE** : la condition de filtrage (=, <, >, AND, OR, LIKE).',
        '**ORDER BY** : le tri (ASC croissant, DESC décroissant).',
      ] },
      { t: 'example', h: 'Requête simple', c: 'Afficher le nom et la ville des clients de Paris, triés par nom :\nSELECT nom, ville\nFROM CLIENTS\nWHERE ville = \'Paris\'\nORDER BY nom ;' },
      { t: 'tip', h: 'À retenir', c: 'Structure de base : **SELECT** (quoi) **FROM** (où) **WHERE** (quelle condition) **ORDER BY** (quel tri). Ne pas oublier le **point-virgule** final et les **guillemets** autour du texte.' },
    ]),
    S('🧮 Fonctions d’agrégation et jointures', [
      { t: 'p', c: 'Le SQL permet aussi de **calculer** sur des ensembles de lignes grâce aux **fonctions d’agrégation**, et de **croiser** plusieurs tables avec les **jointures**.' },
      { t: 'table', head: ['Fonction', 'Rôle'], rows: [
        ['COUNT()', 'Compter le nombre de lignes'],
        ['SUM()', 'Additionner une colonne'],
        ['AVG()', 'Calculer une moyenne'],
        ['MAX() / MIN()', 'Valeur maximale / minimale'],
      ] },
      { t: 'example', h: 'Agrégation', c: 'Chiffre d’affaires total des commandes :\nSELECT SUM(montant) FROM COMMANDES ;\nNombre de clients parisiens :\nSELECT COUNT(*) FROM CLIENTS WHERE ville = \'Paris\' ;' },
      { t: 'p', c: 'La **jointure** relie deux tables via leur clé commune pour combiner leurs informations. On précise l’égalité des clés dans le WHERE (ou avec JOIN … ON).' },
      { t: 'example', h: 'Jointure', c: 'Nom du client et montant de ses commandes :\nSELECT CLIENTS.nom, COMMANDES.montant\nFROM CLIENTS, COMMANDES\nWHERE CLIENTS.id_client = COMMANDES.id_client ;' },
      { t: 'tip', h: 'À retenir', c: 'Agrégation = **calculer** (COUNT, SUM, AVG…). Jointure = **croiser** deux tables via leur **clé commune**. Souvent combinées avec GROUP BY pour des totaux par catégorie.' },
    ]),
    S('💻 Étude de cas guidée — écrire une requête SQL', [
      { t: 'p', c: '**Énoncé.** Base avec une table PRODUITS(id_produit, nom, prix, categorie). Écrire les requêtes demandées.' },
      { t: 'example', h: 'Q1 — Produits de moins de 10 €, triés par prix', c: 'SELECT nom, prix\nFROM PRODUITS\nWHERE prix < 10\nORDER BY prix ASC ;' },
      { t: 'example', h: 'Q2 — Nombre de produits dans la catégorie « Boissons »', c: 'SELECT COUNT(*)\nFROM PRODUITS\nWHERE categorie = \'Boissons\' ;' },
      { t: 'example', h: 'Q3 — Prix moyen des produits par catégorie', c: 'SELECT categorie, AVG(prix)\nFROM PRODUITS\nGROUP BY categorie ;' },
      { t: 'tip', h: 'Méthode', c: 'Traduire la question en SQL : **quoi** afficher (SELECT), **où** (FROM), **quelle condition** (WHERE), **quel tri/regroupement** (ORDER BY / GROUP BY). Vérifier guillemets et point-virgule.' },
    ]),
  ],

  // ---- Thème 3 — Travail collaboratif et intelligence collective ---
  'sig-t3': [
    S('🤝 Le travail collaboratif et ses outils', [
      { t: 'p', c: 'Le **travail collaboratif** consiste à travailler **ensemble**, à plusieurs, sur un objectif commun, en s’appuyant sur des **outils numériques** qui permettent de partager, coéditer et communiquer à distance et en temps réel.' },
      { t: 'list', c: [
        '**Partage de fichiers** : cloud (Drive, espaces partagés) accessibles partout.',
        '**Coédition** : plusieurs personnes modifient le même document simultanément.',
        '**Communication** : messagerie, visioconférence, espaces de discussion.',
        '**Gestion de projet** : agendas partagés, tableaux de tâches, suivi.',
      ] },
      { t: 'p', c: 'Ces outils reposent souvent sur le **cloud** (informatique « en nuage ») : les données et applications sont hébergées sur des serveurs distants, accessibles via internet. Avantages : accessibilité, mise à jour automatique, pas d’installation ; limites : dépendance à la connexion et au prestataire, questions de **sécurité**.' },
      { t: 'tip', h: 'À retenir', c: 'Le travail collaboratif = **partager, coéditer, communiquer** grâce au numérique (souvent via le **cloud**). Il gagne en efficacité mais pose des enjeux de sécurité et de dépendance.' },
    ]),
    S('🧠 L’intelligence collective', [
      { t: 'p', c: 'L’**intelligence collective** est la capacité d’un groupe à produire, ensemble, plus et mieux que la somme des individus. Le numérique la démultiplie en connectant des contributeurs du monde entier.' },
      { t: 'example', h: 'Illustration — Wikipédia', c: 'Wikipédia est écrite et corrigée par des **millions de contributeurs** bénévoles. Aucun individu ne pourrait produire une telle encyclopédie : c’est l’**intelligence collective**, organisée par des outils numériques et des règles communes.' },
      { t: 'list', c: [
        '**Conditions de réussite** : objectif partagé, règles claires, outils adaptés, diversité des contributeurs, modération.',
        '**Risques** : désinformation, contributions de mauvaise qualité, conflits, besoin de **contrôle** et de **validation**.',
      ] },
      { t: 'p', c: 'Pour l’entreprise, l’intelligence collective se traduit par le **crowdsourcing** (faire appel à la foule), les plateformes d’idées internes, les communautés de clients. Bien encadrée, elle stimule l’**innovation**.' },
      { t: 'tip', h: 'À retenir', c: 'Intelligence collective = le groupe produit **plus que la somme** des individus, grâce au numérique. Elle exige des **règles** et une **modération** pour rester fiable.' },
    ]),
    S('🔄 La transformation numérique du travail', [
      { t: 'p', c: 'Le numérique **transforme** en profondeur l’organisation du travail. De nouvelles formes apparaissent : **télétravail**, flexibilité des horaires et des lieux, automatisation des tâches répétitives, nouveaux métiers.' },
      { t: 'table', head: ['Opportunités', 'Risques'], rows: [
        ['Flexibilité, gain de temps', 'Frontière vie pro/perso brouillée'],
        ['Collaboration à distance', 'Isolement, perte de lien social'],
        ['Automatisation des tâches pénibles', 'Disparition de certains emplois'],
        ['Accès à l’information partout', 'Surcharge informationnelle, sécurité'],
      ] },
      { t: 'p', c: 'Cette transformation appelle de nouvelles **compétences numériques** et une **conduite du changement** : accompagner les salariés, former, préserver le lien social et le **droit à la déconnexion**. Subie, elle fragilise ; anticipée, elle est une opportunité.' },
      { t: 'tip', h: 'À retenir', c: 'La transformation numérique offre **flexibilité et efficacité** mais brouille les frontières et exige de nouvelles compétences. Le **droit à la déconnexion** protège l’équilibre des salariés.' },
    ]),
    S('💻 Étude de cas guidée — le travail collaboratif', [
      { t: 'p', c: '**Énoncé.** Une PME dont les équipes sont réparties sur plusieurs sites peine à coordonner ses projets (versions de fichiers multiples, mails perdus). Que proposer ?' },
      { t: 'example', h: 'Étape 1 — Le problème', c: 'Absence d’outils collaboratifs : fichiers en plusieurs versions, information éparpillée, coordination difficile entre sites distants.' },
      { t: 'example', h: 'Étape 2 — Solution', c: 'Déployer une **plateforme collaborative** (cloud partagé + coédition + gestion de tâches + visioconférence) : un seul document à jour, un suivi de projet commun, une communication centralisée.' },
      { t: 'p', c: '**Commentaire.** Les gains : fin des versions multiples, collaboration en temps réel, meilleure coordination. À anticiper : la **formation** des équipes, la **sécurité** des données (cloud) et l’**accompagnement du changement**.' },
      { t: 'tip', h: 'Méthode', c: 'Repérer le **problème de coordination** → proposer des **outils collaboratifs** adaptés → peser **bénéfices** (temps réel, cohérence) et **limites** (sécurité, formation).' },
    ]),
  ],

  // ---- Thème 4 — Réseaux, sécurité et applications ------------------
  'sig-t4': [
    S('🌐 Réseaux et architecture', [
      { t: 'p', c: 'Un **réseau** relie des ordinateurs pour qu’ils **communiquent** et **partagent** des ressources (fichiers, imprimantes, accès internet). Sans réseau, pas de SI moderne, pas de travail collaboratif, pas d’internet.' },
      { t: 'p', c: 'L’architecture la plus courante est le modèle **client-serveur** : des postes **clients** (ordinateurs, téléphones) envoient des requêtes à un **serveur** (une machine puissante) qui les traite et renvoie les réponses. Internet en est l’exemple géant.' },
      { t: 'list', c: [
        '**Client** : demande un service (afficher une page, ouvrir un fichier).',
        '**Serveur** : fournit le service (héberge le site, la base, les fichiers).',
        '**Protocole** : les règles communes de communication (HTTP, IP…).',
      ] },
      { t: 'tip', h: 'À retenir', c: 'Modèle **client-serveur** : le client **demande**, le serveur **fournit**. Un réseau permet de **partager** ressources et informations — mais élargit aussi la **surface d’attaque**.' },
    ]),
    S('🔐 La sécurité du système d’information', [
      { t: 'p', c: 'Plus le SI est connecté, plus il est **vulnérable**. La sécurité vise trois objectifs, souvent résumés par le triangle **DIC** (ou CIA).' },
      { t: 'table', head: ['Objectif', 'Signification'], rows: [
        ['Disponibilité', 'L’information est accessible quand on en a besoin'],
        ['Intégrité', 'L’information n’est pas altérée ou falsifiée'],
        ['Confidentialité', 'Seules les personnes autorisées y accèdent'],
      ] },
      { t: 'p', c: 'Les **menaces** sont nombreuses : **phishing** (hameçonnage : faux message pour voler des identifiants), **ransomware** (rançongiciel : chiffre les données et exige une rançon), **malwares** (virus), vol de données, pannes. « La faille, c’est souvent l’**humain** » : un clic imprudent suffit.' },
      { t: 'example', h: 'Illustration', c: 'Un hôpital paralysé par un **ransomware** : ses données sont chiffrées, les soins perturbés. L’attaque a souvent commencé par un simple **e-mail de phishing** ouvert par un employé.' },
      { t: 'tip', h: 'À retenir', c: 'Sécurité = **Disponibilité + Intégrité + Confidentialité (DIC)**. Menaces phares : **phishing** et **ransomware**. Le maillon faible est souvent **humain**.' },
    ]),
    S('🛡️ Se protéger et le cadre légal (RGPD)', [
      { t: 'p', c: 'Face aux menaces, l’organisation met en place des **mesures de protection** techniques et humaines. Aucune n’est suffisante seule : c’est leur **combinaison** qui protège.' },
      { t: 'list', c: [
        '**Mots de passe forts** et authentification à deux facteurs.',
        '**Sauvegardes régulières** (pour restaurer après une attaque ou une panne).',
        '**Pare-feu** et **antivirus** à jour.',
        '**Mises à jour** des logiciels (corriger les failles).',
        '**Sensibilisation** des utilisateurs (reconnaître un phishing).',
        '**Gestion des droits d’accès** (chacun n’accède qu’à ce qui le concerne).',
      ] },
      { t: 'p', c: 'Le **RGPD (Règlement Général sur la Protection des Données)** encadre le traitement des **données personnelles** en Europe. Il impose : le **consentement**, la **finalité** (n’utiliser les données que dans le but annoncé), la **minimisation** (ne collecter que le nécessaire), la **sécurité**, et les **droits** des personnes (accès, rectification, effacement). Son non-respect expose à de lourdes **sanctions**.' },
      { t: 'tip', h: 'À retenir', c: 'Se protéger = **combiner** sauvegardes, mots de passe, pare-feu, mises à jour et **sensibilisation**. Le **RGPD** impose consentement, finalité, minimisation, sécurité et droits des personnes.' },
    ]),
    S('💻 Étude de cas guidée — sécuriser le SI', [
      { t: 'p', c: '**Énoncé.** Une entreprise a subi une attaque : un salarié a cliqué sur un lien frauduleux, des données ont été chiffrées et une rançon est réclamée. Analysez et proposez un plan de prévention.' },
      { t: 'example', h: 'Étape 1 — Identifier l’attaque', c: 'Un **ransomware**, déclenché par un **phishing** (le lien frauduleux). Les objectifs de sécurité touchés : **disponibilité** (données inaccessibles) et potentiellement **confidentialité**.' },
      { t: 'example', h: 'Étape 2 — Réagir', c: 'Isoler les machines infectées, ne pas payer la rançon (aucune garantie), **restaurer** à partir des **sauvegardes**, prévenir la CNIL si des données personnelles sont concernées (RGPD).' },
      { t: 'p', c: '**Étape 3 — Prévention.** Sauvegardes régulières et **hors ligne**, mises à jour, pare-feu/antivirus, mots de passe forts, gestion des droits, et surtout **sensibilisation** des salariés au phishing. **Commentaire** : la meilleure défense combine **technique** et **humain**, car la faille initiale est presque toujours humaine.' },
      { t: 'tip', h: 'Méthode', c: 'Identifier l’**attaque** et l’objectif DIC touché → **réagir** (isoler, restaurer, alerter) → **prévenir** par des mesures combinées (technique + humaine).' },
    ]),
  ],
}
