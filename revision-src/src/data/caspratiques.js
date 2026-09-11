// Mini-cas d'entreprise CHIFFRÉS, rédigés à la main, dans l'esprit des sujets de
// bac STMG. Complément « humain » aux cas concrets générés automatiquement.
//
// Format : { [themeId]: [ { title, context, questions: [ { q, a, alt?, num?, tol?, e } ] } ] }
//  - a   : réponse attendue (chaîne). Pour un nombre, mets num:true.
//  - alt : autres réponses acceptées (arrondis, formulations).
//  - num : comparaison numérique tolérante (espaces, €, %, virgule gérés).
//  - tol : tolérance numérique absolue (défaut 0.05).
//  - e   : explication / corrigé affiché après la réponse.
//
// N'existe que pour les thèmes où un cas chiffré est authentique (gestion,
// mercatique, RH, éco, management, sciences de gestion). Les autres thèmes
// gardent les « cas concrets » générés.

export const CAS_PRATIQUES = {
  // ===================== GESTION ET FINANCE =====================
  'gf-t1': [
    {
      title: 'La TVA du mois',
      context: "L'entreprise MOBILIA (vente de meubles) a, sur le mois de mars, collecté 8 400 € de TVA sur ses ventes et payé 5 100 € de TVA déductible sur ses achats.",
      questions: [
        { q: 'Calcule la TVA à décaisser (en €).', a: '3300', num: true, e: 'TVA à décaisser = TVA collectée − TVA déductible = 8 400 − 5 100 = 3 300 €.' },
        { q: "Cette somme est-elle « due à l'État » ou « récupérable » ?", a: 'due', alt: ['due à l’état', 'à décaisser', 'a decaisser'], e: "La TVA collectée dépasse la déductible : MOBILIA doit 3 300 € à l'État." },
      ],
    },
    {
      title: 'Amortissement d’une machine',
      context: "MOBILIA achète une machine 24 000 € HT, amortie en linéaire sur 5 ans.",
      questions: [
        { q: "Quelle est l'annuité d'amortissement (en €) ?", a: '4800', num: true, e: 'Annuité = valeur / durée = 24 000 / 5 = 4 800 € par an.' },
        { q: "Quelle est la valeur nette comptable (VNC) après 2 ans (en €) ?", a: '14400', num: true, e: 'VNC = 24 000 − 2 × 4 800 = 24 000 − 9 600 = 14 400 €.' },
      ],
    },
    {
      title: 'Bénéfice ou perte ?',
      context: "Sur l'exercice, MOBILIA enregistre 150 000 € de produits et 138 000 € de charges.",
      questions: [
        { q: 'Calcule le résultat de l’exercice (en €).', a: '12000', num: true, e: 'Résultat = produits − charges = 150 000 − 138 000 = 12 000 €.' },
        { q: "S'agit-il d'un bénéfice ou d'une perte ?", a: 'bénéfice', alt: ['benefice'], e: 'Les produits dépassent les charges : c’est un bénéfice de 12 000 €.' },
      ],
    },
  ],
  'gf-t2': [
    {
      title: 'Des soldes intermédiaires de gestion',
      context: "L'entreprise ATELIER75 réalise 500 000 € de chiffre d'affaires. Ses consommations en provenance de tiers (matières, énergie…) s'élèvent à 300 000 €, ses charges de personnel à 120 000 € et ses impôts et taxes à 10 000 €.",
      questions: [
        { q: 'Calcule la valeur ajoutée (en €).', a: '200000', num: true, e: 'VA = production − consommations intermédiaires = 500 000 − 300 000 = 200 000 €.' },
        { q: "Calcule l'excédent brut d'exploitation (EBE, en €).", a: '70000', num: true, e: 'EBE = VA − charges de personnel − impôts et taxes = 200 000 − 120 000 − 10 000 = 70 000 €.' },
      ],
    },
    {
      title: 'Équilibre financier',
      context: "Au bilan d'ATELIER75 : ressources stables = 260 000 €, emplois stables = 200 000 €, et le besoin en fonds de roulement (BFR) est de 45 000 €.",
      questions: [
        { q: 'Calcule le fonds de roulement net global (FRNG, en €).', a: '60000', num: true, e: 'FRNG = ressources stables − emplois stables = 260 000 − 200 000 = 60 000 €.' },
        { q: 'Calcule la trésorerie nette (en €).', a: '15000', num: true, e: 'Trésorerie nette = FRNG − BFR = 60 000 − 45 000 = 15 000 €. Elle est positive : situation saine.' },
      ],
    },
    {
      title: 'Le seuil de rentabilité',
      context: "ATELIER75 : chiffre d'affaires 200 000 €, coûts variables 120 000 €, coûts fixes 50 000 €.",
      questions: [
        { q: 'Calcule la marge sur coût variable (en €).', a: '80000', num: true, e: 'MCV = CA − coûts variables = 200 000 − 120 000 = 80 000 €.' },
        { q: 'Calcule le taux de marge sur coût variable (en %).', a: '40', num: true, e: 'Taux de MCV = MCV / CA = 80 000 / 200 000 = 0,4 = 40 %.' },
        { q: 'Calcule le seuil de rentabilité (en €).', a: '125000', num: true, e: 'SR = coûts fixes / taux de MCV = 50 000 / 0,4 = 125 000 €.' },
      ],
    },
  ],
  'gf-t3': [
    {
      title: 'Combien produire pour être rentable ?',
      context: "PRINT+ vend un article 50 € l'unité. Le coût variable unitaire est de 30 €, et les coûts fixes s'élèvent à 40 000 €.",
      questions: [
        { q: 'Calcule la marge sur coût variable unitaire (en €).', a: '20', num: true, e: 'MCV unitaire = prix − coût variable unitaire = 50 − 30 = 20 €.' },
        { q: "Combien d'unités faut-il vendre pour atteindre le seuil de rentabilité ?", a: '2000', num: true, e: 'Quantité au seuil = coûts fixes / MCV unitaire = 40 000 / 20 = 2 000 unités.' },
      ],
    },
    {
      title: 'Coût complet et marge',
      context: "Pour un produit, PRINT+ supporte 18 € de charges directes et 7 € de charges indirectes. Il est vendu 40 €.",
      questions: [
        { q: 'Calcule le coût complet unitaire (en €).', a: '25', num: true, e: 'Coût complet = charges directes + indirectes = 18 + 7 = 25 €.' },
        { q: 'Calcule la marge unitaire (en €).', a: '15', num: true, e: 'Marge = prix − coût complet = 40 − 25 = 15 €.' },
      ],
    },
  ],

  // ===================== MERCATIQUE =====================
  'mkg-t1': [
    {
      title: 'Élasticité-prix de la demande',
      context: "Une enseigne augmente le prix d'un jus de fruits de 10 %. Elle observe alors une baisse des quantités vendues de 20 %.",
      questions: [
        { q: "Calcule l'élasticité-prix de la demande.", a: '-2', num: true, alt: ['−2', '-2.0'], e: 'e = variation % des quantités / variation % du prix = −20 / +10 = −2.' },
        { q: 'La demande est-elle « élastique » ou « inélastique » ?', a: 'élastique', alt: ['elastique'], e: '|e| = 2 > 1 : la demande est élastique (très sensible au prix).' },
      ],
    },
    {
      title: 'Taux de notoriété',
      context: "Sur 1 200 personnes interrogées, 900 déclarent connaître la marque.",
      questions: [
        { q: 'Calcule le taux de notoriété (en %).', a: '75', num: true, e: 'Notoriété = 900 / 1 200 = 0,75 = 75 %.' },
      ],
    },
  ],
  'mkg-t2': [
    {
      title: 'Parts de marché',
      context: "L'entreprise VÉLIA vend pour 3 M€ de vélos. Le marché total représente 20 M€. Le leader détient 30 % du marché.",
      questions: [
        { q: 'Calcule la part de marché de VÉLIA (en %).', a: '15', num: true, e: 'PDM = ventes de l’entreprise / ventes du marché = 3 / 20 = 15 %.' },
        { q: 'Calcule sa part de marché relative (par rapport au leader).', a: '0.5', num: true, alt: ['0,5', '50%', '50'], e: 'PDM relative = PDM entreprise / PDM leader = 15 / 30 = 0,5.' },
      ],
    },
    {
      title: 'Taux de pénétration',
      context: "VÉLIA compte 5 000 clients pour une cible estimée à 25 000 personnes.",
      questions: [
        { q: 'Calcule le taux de pénétration (en %).', a: '20', num: true, e: 'Pénétration = clients / cible = 5 000 / 25 000 = 20 %.' },
      ],
    },
  ],
  'mkg-t3': [
    {
      title: 'Taux de marge et taux de marque',
      context: "Un article est acheté 40 € HT et revendu 60 € HT.",
      questions: [
        { q: 'Calcule la marge commerciale unitaire (en €).', a: '20', num: true, e: 'Marge = prix de vente HT − coût d’achat HT = 60 − 40 = 20 €.' },
        { q: 'Calcule le taux de marge (en %).', a: '50', num: true, e: 'Taux de marge = marge / coût d’achat = 20 / 40 = 50 %.' },
        { q: 'Calcule le taux de marque (en %).', a: '33.33', num: true, tol: 0.7, alt: ['33.3', '33,3', '33'], e: 'Taux de marque = marge / prix de vente = 20 / 60 ≈ 33,3 %.' },
      ],
    },
    {
      title: 'Prix après remise',
      context: "Un produit affiché 80 € bénéficie d'une remise de 25 %.",
      questions: [
        { q: 'Calcule le prix soldé (en €).', a: '60', num: true, e: 'Prix soldé = 80 × (1 − 0,25) = 80 × 0,75 = 60 €.' },
      ],
    },
  ],
  'mkg-t4': [
    {
      title: "Performance d'un site marchand",
      context: "Un site e-commerce reçoit 10 000 visiteurs sur un mois, réalise 300 commandes pour un chiffre d'affaires de 12 000 €.",
      questions: [
        { q: 'Calcule le taux de conversion (en %).', a: '3', num: true, e: 'Conversion = commandes / visiteurs = 300 / 10 000 = 3 %.' },
        { q: 'Calcule le panier moyen (en €).', a: '40', num: true, e: 'Panier moyen = CA / nombre de commandes = 12 000 / 300 = 40 €.' },
      ],
    },
    {
      title: "Rentabilité d'une campagne",
      context: "Une campagne publicitaire a coûté 5 000 € et a généré 8 000 € de gain (marge supplémentaire).",
      questions: [
        { q: 'Calcule le retour sur investissement (ROI, en %).', a: '60', num: true, e: 'ROI = (gain − coût) / coût = (8 000 − 5 000) / 5 000 = 60 %.' },
      ],
    },
  ],

  // ===================== RESSOURCES HUMAINES & COMMUNICATION =====================
  'rh-t1': [
    {
      title: "Absentéisme d'un service",
      context: "Dans un service, on compte 320 heures d'absence pour 8 000 heures théoriques de travail sur le mois.",
      questions: [
        { q: "Calcule le taux d'absentéisme (en %).", a: '4', num: true, e: 'Absentéisme = heures d’absence / heures théoriques = 320 / 8 000 = 4 %.' },
      ],
    },
    {
      title: 'Rotation du personnel (turnover)',
      context: "Une entreprise a enregistré 6 départs sur l'année, pour un effectif moyen de 120 salariés.",
      questions: [
        { q: 'Calcule le taux de rotation du personnel (en %).', a: '5', num: true, e: 'Turnover = départs / effectif moyen = 6 / 120 = 5 %.' },
      ],
    },
  ],
  'rh-t4': [
    {
      title: 'Coût employeur d’un salarié',
      context: "Un salarié perçoit un salaire brut de 2 000 €. Les charges patronales représentent 42 % du brut.",
      questions: [
        { q: 'Calcule le coût total employeur (en €).', a: '2840', num: true, e: 'Coût employeur = brut × (1 + 42 %) = 2 000 × 1,42 = 2 840 €.' },
      ],
    },
    {
      title: 'Productivité du travail',
      context: "Un atelier produit 4 000 pièces en 500 heures de travail.",
      questions: [
        { q: 'Calcule la productivité horaire (en pièces/heure).', a: '8', num: true, e: 'Productivité = production / heures = 4 000 / 500 = 8 pièces par heure.' },
      ],
    },
  ],

  // ===================== MANAGEMENT =====================
  'mgmt-t2': [
    {
      title: 'Croissance du chiffre d’affaires',
      context: "Le chiffre d'affaires d'une PME passe de 800 000 € (année N−1) à 920 000 € (année N).",
      questions: [
        { q: 'Calcule le taux de croissance du CA (en %).', a: '15', num: true, e: 'Taux = (CA_N − CA_N−1) / CA_N−1 = (920 000 − 800 000) / 800 000 = 15 %.' },
      ],
    },
    {
      title: 'Dynamique d’un marché',
      context: "Un marché est passé de 500 000 unités vendues à 560 000 unités en un an.",
      questions: [
        { q: 'Calcule le taux de croissance du marché (en %).', a: '12', num: true, e: 'Taux = (560 000 − 500 000) / 500 000 = 60 000 / 500 000 = 12 %.' },
      ],
    },
  ],

  // ===================== ÉCONOMIE =====================
  'eco-t7': [
    {
      title: 'Mesurer le chômage',
      context: "Dans un pays, on dénombre 2,8 millions de chômeurs pour une population active de 28 millions. La population en âge de travailler est de 40 millions.",
      questions: [
        { q: 'Calcule le taux de chômage (en %).', a: '10', num: true, e: 'Taux de chômage = chômeurs / population active = 2,8 / 28 = 10 %.' },
        { q: "Calcule le taux d'activité (en %).", a: '70', num: true, e: 'Taux d’activité = population active / population en âge de travailler = 28 / 40 = 70 %.' },
      ],
    },
  ],
  'eco-t8': [
    {
      title: 'La balance commerciale',
      context: "Un pays exporte pour 480 milliards € et importe pour 550 milliards € de biens.",
      questions: [
        { q: 'Calcule le solde de la balance commerciale (en milliards €).', a: '-70', num: true, alt: ['−70'], e: 'Solde = exportations − importations = 480 − 550 = −70 Mds € : la balance est déficitaire.' },
        { q: 'Calcule le taux de couverture (en %).', a: '87.27', num: true, tol: 0.6, alt: ['87.3', '87,3', '87'], e: 'Taux de couverture = (exports / imports) × 100 = 480 / 550 ≈ 87,3 %.' },
      ],
    },
  ],

  // ===================== PREMIÈRE — SCIENCES DE GESTION & ÉCONOMIE =====================
  'p1-sgn-t3': [
    {
      title: 'Valeur créée et marge',
      context: "Un produit est vendu 120 €. Son coût de revient est de 90 €.",
      questions: [
        { q: 'Calcule la marge unitaire (en €).', a: '30', num: true, e: 'Marge = prix de vente − coût de revient = 120 − 90 = 30 €.' },
        { q: 'Calcule le taux de marque (en %).', a: '25', num: true, e: 'Taux de marque = marge / prix de vente = 30 / 120 = 25 %.' },
      ],
    },
  ],
  'p1-eco-t2': [
    {
      title: 'Créer et mesurer la richesse',
      context: "Une entreprise a une production de 300 000 € et des consommations intermédiaires de 110 000 €. Par ailleurs, le PIB du pays passe de 2 500 milliards € à 2 550 milliards €.",
      questions: [
        { q: 'Calcule la valeur ajoutée de l’entreprise (en €).', a: '190000', num: true, e: 'VA = production − consommations intermédiaires = 300 000 − 110 000 = 190 000 €.' },
        { q: 'Calcule le taux de croissance du PIB (en %).', a: '2', num: true, e: 'Taux = (2 550 − 2 500) / 2 500 = 50 / 2 500 = 2 %.' },
      ],
    },
  ],
  'p1-eco-t5': [
    {
      title: 'Le marché et l’élasticité',
      context: "Sur le marché d'un bien, le prix augmente de 5 %. On observe alors une baisse des quantités demandées de 15 %.",
      questions: [
        { q: "Calcule l'élasticité-prix de la demande.", a: '-3', num: true, alt: ['−3'], e: 'e = variation % des quantités / variation % du prix = −15 / +5 = −3.' },
        { q: 'La demande est-elle « élastique » ou « inélastique » ?', a: 'élastique', alt: ['elastique'], e: '|e| = 3 > 1 : la demande est très sensible au prix, donc élastique.' },
      ],
    },
  ],
  'eco-t6': [
    {
      title: 'Déficit et dette publics',
      context: "Un pays enregistre un déficit public de 90 milliards € pour un PIB de 3 000 milliards €. Sa dette publique atteint 3 300 milliards €.",
      questions: [
        { q: 'Calcule le déficit rapporté au PIB (en %).', a: '3', num: true, e: 'Déficit / PIB = 90 / 3 000 = 3 %.' },
        { q: 'Calcule le ratio dette / PIB (en %).', a: '110', num: true, e: 'Dette / PIB = 3 300 / 3 000 = 110 %.' },
      ],
    },
  ],
}
