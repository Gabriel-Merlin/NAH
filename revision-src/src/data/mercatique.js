// MERCATIQUE (spécialité de Terminale STMG).
// Programme : le consommateur, le marché et le ciblage, la mercatique
// opérationnelle (mix), la mercatique responsable.
export const mercatique = {
  id: 'mercatique',
  name: 'Mercatique (Marketing)',
  short: 'Mercatique',
  icon: '🛍️',
  color: '#f97316',
  tagline: 'Connaître, cibler et satisfaire le consommateur.',
  chapters: [
    {
      id: 'mkg-t1',
      name: 'Thème 1 — Mercatique et consommateurs',
      short: 'Le consommateur',
      keywords: 'mercatique besoin motivation frein perception attitude facteurs processus d’achat expérience satisfaction fidélisation',
      cours: [
        {
          h: 'Besoins, motivations et freins',
          points: [
            'La **mercatique** (marketing) est l’ensemble des actions visant à connaître, influencer et satisfaire le consommateur tout en atteignant les objectifs de l’organisation.',
            'Un **besoin** est un manque à combler ; **Maslow** les classe (physiologiques, sécurité, appartenance, estime, accomplissement).',
            'Les **motivations** poussent à l’achat : hédonistes (se faire plaisir), oblatives (faire plaisir aux autres), d’**auto-expression** (s’affirmer).',
            'Les **freins** retiennent l’achat : peurs, risque perçu, inhibitions.',
          ],
        },
        {
          h: 'Les facteurs explicatifs du comportement',
          points: [
            'Facteurs **individuels** : personnalité, **perception** (subjective et sélective), attitude, style de vie, expérience.',
            'Facteurs **sociologiques** : culture, **groupes** d’appartenance et de référence, famille, catégorie socioprofessionnelle (CSP), leaders d’opinion.',
          ],
        },
        {
          h: 'Le processus de décision d’achat',
          points: [
            'Étapes : reconnaissance du **besoin** → recherche d’**informations** → évaluation des solutions → **décision** d’achat → évaluation **post-achat**.',
            'Types d’achat : réfléchi, routinier, **impulsif** ; le degré d’**implication** dépend du risque perçu.',
            'Une bonne **expérience** de consommation crée la **satisfaction**, qui favorise la **fidélisation** (réachat, bouche-à-oreille).',
          ],
        },
      ],
      games: [
        {
          id: 'mkg-t1-qcm', type: 'qcm', title: 'QCM — Le consommateur', icon: '❓',
          questions: [
            { q: 'La mercatique cherche avant tout à…', choices: ['connaître et satisfaire le consommateur', 'produire au moindre coût', 'tenir la comptabilité', 'recruter du personnel'], answer: 0, explain: 'La mercatique vise à connaître, influencer et satisfaire le consommateur.' },
            { q: 'Acheter un cadeau pour un proche relève d’une motivation…', choices: ['oblative', 'hédoniste', 'un frein', 'sécuritaire'], answer: 0, explain: 'La motivation oblative = faire plaisir aux autres.' },
            { q: 'La peur de se tromper qui empêche l’achat est…', choices: ['un frein', 'une motivation', 'un besoin', 'une attitude'], answer: 0, explain: 'Les freins (peurs, risque perçu) retiennent l’achat.' },
            { q: 'La CSP et la famille sont des facteurs…', choices: ['sociologiques', 'individuels', 'financiers', 'juridiques'], answer: 0, explain: 'Culture, groupes, famille, CSP = facteurs sociologiques.' },
            { q: 'Après l’achat, le consommateur passe par une étape…', choices: ['d’évaluation post-achat', 'de segmentation', 'de production', 'd’amortissement'], answer: 0, explain: 'L’évaluation post-achat conditionne satisfaction et fidélisation.' },
          ],
        },
        {
          id: 'mkg-t1-vf', type: 'vraifaux', title: 'Vrai / Faux rapide', icon: '⚡',
          questions: [
            { statement: 'La perception est objective et identique pour tous.', answer: false, explain: 'Faux : la perception est subjective et sélective.' },
            { statement: 'La satisfaction favorise la fidélisation.', answer: true, explain: 'Vrai : un client satisfait rachète et recommande.' },
            { statement: 'Un achat impulsif suppose une longue réflexion.', answer: false, explain: 'Faux : l’achat impulsif est non prémédité, à faible réflexion.' },
          ],
        },
        {
          id: 'mkg-t1-ordre', type: 'ordre', title: 'Remise en ordre — Le processus d’achat', icon: '🔢',
          instruction: 'Remets les étapes de la décision d’achat dans l’ordre.',
          steps: ['Reconnaissance du besoin', 'Recherche d’informations', 'Évaluation des solutions', 'Décision d’achat', 'Évaluation post-achat'],
          explain: 'Besoin → information → évaluation → décision → après-achat.',
        },
        {
          id: 'mkg-t1-tri', type: 'tri', title: 'Tri — Motivation ou frein ?', icon: '🗂️',
          instruction: 'Classe chaque élément selon qu’il pousse ou retient l’achat.',
          categories: [{ id: 'mot', label: 'Motivation' }, { id: 'fre', label: 'Frein' }],
          items: [
            { text: 'Se faire plaisir', cat: 'mot' },
            { text: 'Peur de se tromper', cat: 'fre' },
            { text: 'Offrir à un proche', cat: 'mot' },
            { text: 'Risque perçu élevé', cat: 'fre' },
            { text: 'S’affirmer, exprimer sa personnalité', cat: 'mot' },
          ],
        },
        {
          id: 'mkg-t1-assoc', type: 'association', title: 'Association — Facteur ↔ exemple', icon: '🔗',
          pairs: [
            { left: 'Facteur individuel', right: 'La personnalité, le style de vie' },
            { left: 'Facteur sociologique', right: 'La culture, la CSP' },
            { left: 'Motivation hédoniste', right: 'Se faire plaisir' },
            { left: 'Frein', right: 'Le risque perçu' },
          ],
        },
      ],
    },
    {
      id: 'mkg-t2',
      name: 'Thème 2 — Mercatique et marchés',
      short: 'Marché & ciblage',
      keywords: 'marché demande offre prospect part de marché veille études quantitatives qualitatives segmentation ciblage positionnement SCP',
      cours: [
        {
          h: 'Le marché et la demande',
          points: [
            'Un **marché** confronte une **offre** et une **demande** ; ses acteurs : clients actuels, **prospects**, non-consommateurs relatifs (récupérables) et absolus.',
            'La demande se mesure en **volume** (quantités) et en **valeur** (chiffre d’affaires). La **part de marché** = ventes de l’entreprise / ventes totales du marché.',
            'Le marché s’étudie dans son **environnement** (micro : clients, concurrents, fournisseurs ; macro : PESTEL) ; la **veille** permet de le surveiller.',
          ],
        },
        {
          h: 'Les études de marché',
          points: [
            'Études **quantitatives** (mesurer, chiffrer) : **sondage**, panel, questionnaire.',
            'Études **qualitatives** (comprendre les motivations) : entretien, réunion de groupe.',
            'Sources **primaires** (recueillies pour l’étude) et **secondaires** (déjà existantes).',
          ],
        },
        {
          h: 'Segmentation, ciblage, positionnement (SCP)',
          points: [
            '**Segmenter** : découper le marché en groupes homogènes (critères géographiques, sociodémographiques, comportementaux).',
            '**Cibler** : choisir le(s) segment(s) visé(s) — marketing indifférencié (masse), différencié ou concentré.',
            '**Positionner** : donner au produit une place claire et distinctive dans l’esprit du consommateur, face aux concurrents.',
          ],
        },
      ],
      games: [
        {
          id: 'mkg-t2-qcm', type: 'qcm', title: 'QCM — Marché & ciblage', icon: '❓',
          questions: [
            { q: 'La part de marché se calcule…', choices: ['ventes de l’entreprise / ventes totales du marché', 'coûts / recettes', 'clients / salariés', 'prix / quantité'], answer: 0, explain: 'Part de marché = ventes de l’entreprise ÷ ventes totales du marché (×100).' },
            { q: 'Un sondage est une étude…', choices: ['quantitative', 'qualitative', 'comptable', 'juridique'], answer: 0, explain: 'Le sondage mesure/chiffre : étude quantitative.' },
            { q: 'Découper le marché en groupes homogènes, c’est…', choices: ['segmenter', 'cibler', 'positionner', 'fidéliser'], answer: 0, explain: 'La segmentation précède le ciblage puis le positionnement.' },
            { q: 'Un non-consommateur relatif est…', choices: ['récupérable (peut devenir client)', 'jamais client possible', 'un concurrent', 'un fournisseur'], answer: 0, explain: 'Le NCR peut devenir client ; le NCA ne le sera jamais.' },
            { q: 'Une réunion de groupe (focus group) est une étude…', choices: ['qualitative', 'quantitative', 'secondaire', 'documentaire'], answer: 0, explain: 'Elle explore les motivations en profondeur : qualitative.' },
          ],
        },
        {
          id: 'mkg-t2-vf', type: 'vraifaux', title: 'Vrai / Faux rapide', icon: '⚡',
          questions: [
            { statement: 'Le positionnement se fait avant la segmentation.', answer: false, explain: 'Faux : on segmente, on cible, puis on positionne (SCP).' },
            { statement: 'Une étude qualitative cherche à comprendre les motivations.', answer: true, explain: 'Vrai : le qualitatif explore le « pourquoi ».' },
            { statement: 'La veille sert à surveiller l’environnement du marché.', answer: true, explain: 'Vrai : veille concurrentielle, commerciale, technologique…' },
          ],
        },
        {
          id: 'mkg-t2-ordre', type: 'ordre', title: 'Remise en ordre — La démarche SCP', icon: '🔢',
          instruction: 'Remets la démarche mercatique dans l’ordre.',
          steps: ['Segmentation', 'Ciblage', 'Positionnement'],
          explain: 'On segmente le marché, on choisit une cible, puis on se positionne.',
        },
        {
          id: 'mkg-t2-tri', type: 'tri', title: 'Tri — Étude quali ou quanti ?', icon: '🗂️',
          instruction: 'Classe chaque étude dans la bonne catégorie.',
          categories: [{ id: 'quanti', label: 'Quantitative' }, { id: 'quali', label: 'Qualitative' }],
          items: [
            { text: 'Sondage sur 1 000 personnes', cat: 'quanti' },
            { text: 'Entretien individuel approfondi', cat: 'quali' },
            { text: 'Panel de distributeurs', cat: 'quanti' },
            { text: 'Réunion de groupe (focus group)', cat: 'quali' },
          ],
        },
        {
          id: 'mkg-t2-assoc', type: 'association', title: 'Association — Notion ↔ définition', icon: '🔗',
          pairs: [
            { left: 'Prospect', right: 'Client potentiel non encore acheteur' },
            { left: 'Part de marché', right: 'Poids des ventes de l’entreprise sur le marché' },
            { left: 'Segmentation', right: 'Découpage en groupes homogènes' },
            { left: 'Positionnement', right: 'Place occupée dans l’esprit du consommateur' },
          ],
        },
      ],
    },
    {
      id: 'mkg-t3',
      name: 'Thème 3 — La mercatique opérationnelle (le mix)',
      short: 'Le plan de marchéage (4P)',
      keywords: 'plan de marchéage mix produit gamme marque cycle de vie prix écrémage pénétration distribution circuit communication publicité promotion',
      cours: [
        {
          h: 'La politique de produit',
          points: [
            'Le **plan de marchéage** (**mix**) combine 4 leviers cohérents : **Produit, Prix, Distribution, Communication** (les 4P).',
            'Produit : caractéristiques, **gamme** (largeur/profondeur), **marque**, conditionnement (packaging).',
            'Le **cycle de vie** d’un produit : lancement → croissance → maturité → déclin.',
          ],
        },
        {
          h: 'La politique de prix',
          points: [
            'Le prix se fixe selon les **coûts**, la **demande** (élasticité, prix psychologique) et la **concurrence**.',
            'Stratégies : **écrémage** (prix élevé, image haut de gamme), **pénétration** (prix bas pour le volume), alignement.',
          ],
        },
        {
          h: 'Distribution et communication',
          points: [
            'Distribution : **canaux** et **circuits** (direct, court, long) ; commerce physique et **e-commerce** (stratégie **omnicanale**).',
            'Communication **média** (publicité TV, affichage, digital) et **hors-média** (promotion des ventes, relations publiques, marketing direct, réseaux sociaux).',
          ],
        },
      ],
      games: [
        {
          id: 'mkg-t3-qcm', type: 'qcm', title: 'QCM — Le mix mercatique', icon: '❓',
          questions: [
            { q: 'Le plan de marchéage combine…', choices: ['produit, prix, distribution, communication', 'forces, faiblesses, opportunités, menaces', 'actif, passif, charges, produits', 'salaire, prime, avantage'], answer: 0, explain: 'Le mix = les 4P.' },
            { q: 'Lancer un produit à prix élevé pour une image haut de gamme, c’est…', choices: ['l’écrémage', 'la pénétration', 'l’alignement', 'la gratuité'], answer: 0, explain: 'Écrémage = prix élevé, marges et image.' },
            { q: 'Un circuit « direct » signifie…', choices: ['sans intermédiaire', 'un seul intermédiaire', 'plusieurs intermédiaires', 'à l’export'], answer: 0, explain: 'Direct = du producteur au client, sans intermédiaire.' },
            { q: 'La promotion des ventes relève de la communication…', choices: ['hors-média', 'média', 'financière', 'interne'], answer: 0, explain: 'Média = publicité ; hors-média = promotion, RP, marketing direct…' },
            { q: 'Après la croissance, un produit entre en phase de…', choices: ['maturité', 'lancement', 'déclin', 'segmentation'], answer: 0, explain: 'Cycle : lancement → croissance → maturité → déclin.' },
          ],
        },
        {
          id: 'mkg-t3-vf', type: 'vraifaux', title: 'Vrai / Faux rapide', icon: '⚡',
          questions: [
            { statement: 'Les 4P doivent être cohérents entre eux.', answer: true, explain: 'Vrai : la cohérence du mix fait la force de l’offre.' },
            { statement: 'La pénétration consiste à fixer un prix très élevé.', answer: false, explain: 'Faux : la pénétration = prix bas pour conquérir du volume.' },
            { statement: 'Le e-commerce est un canal de distribution.', answer: true, explain: 'Vrai : la vente en ligne est un canal (souvent omnicanal).' },
          ],
        },
        {
          id: 'mkg-t3-tri', type: 'tri', title: 'Tri — Quel « P » ?', icon: '🗂️',
          instruction: 'Classe chaque action dans le bon levier du mix.',
          categories: [{ id: 'prod', label: 'Produit' }, { id: 'prix', label: 'Prix' }, { id: 'dist', label: 'Distribution' }, { id: 'com', label: 'Communication' }],
          items: [
            { text: 'Créer un nouveau packaging', cat: 'prod' },
            { text: 'Lancer une offre de lancement à -30 %', cat: 'prix' },
            { text: 'Ouvrir une boutique en ligne', cat: 'dist' },
            { text: 'Diffuser une publicité sur les réseaux', cat: 'com' },
            { text: 'Élargir la gamme', cat: 'prod' },
            { text: 'Référencer en grande surface', cat: 'dist' },
          ],
        },
        {
          id: 'mkg-t3-ordre', type: 'ordre', title: 'Remise en ordre — Cycle de vie du produit', icon: '🔢',
          instruction: 'Remets les phases du cycle de vie dans l’ordre.',
          steps: ['Lancement', 'Croissance', 'Maturité', 'Déclin'],
          explain: 'Un produit naît, croît, atteint sa maturité, puis décline.',
        },
        {
          id: 'mkg-t3-assoc', type: 'association', title: 'Association — Stratégie de prix ↔ idée', icon: '🔗',
          pairs: [
            { left: 'Écrémage', right: 'Prix élevé, image et marge' },
            { left: 'Pénétration', right: 'Prix bas pour le volume' },
            { left: 'Prix psychologique', right: 'Prix accepté par le plus grand nombre' },
            { left: 'Alignement', right: 'Prix proche des concurrents' },
          ],
        },
      ],
    },
    {
      id: 'mkg-t4',
      name: 'Thème 4 — Mercatique et société',
      short: 'Mercatique responsable',
      keywords: 'dérives surconsommation obsolescence greenwashing données RGPD mercatique responsable durable éthique consommation responsable',
      cours: [
        {
          h: 'Les dérives de la mercatique',
          points: [
            'Dérives possibles : incitation à la **surconsommation**, obsolescence programmée, publicité mensongère, **greenwashing** (éco-blanchiment).',
            'Exploitation abusive des **données** personnelles et atteinte à la vie privée.',
          ],
        },
        {
          h: 'La mercatique responsable',
          points: [
            'La **mercatique responsable** (durable) concilie satisfaction du client, rentabilité et respect de la société et de l’environnement.',
            'Elle suppose la transparence, la protection des **données** (**RGPD**), l’éco-conception et une **consommation responsable**.',
          ],
        },
      ],
      games: [
        {
          id: 'mkg-t4-qcm', type: 'qcm', title: 'QCM — Mercatique responsable', icon: '❓',
          questions: [
            { q: 'Faire croire qu’un produit est écologique sans preuve, c’est…', choices: ['du greenwashing', 'de l’écrémage', 'de la veille', 'du positionnement'], answer: 0, explain: 'Le greenwashing (éco-blanchiment) est une dérive.' },
            { q: 'La mercatique responsable concilie…', choices: ['client, rentabilité et environnement', 'coûts et bénéfices seulement', 'prix et publicité', 'offre et demande uniquement'], answer: 0, explain: 'Elle intègre la dimension sociale et environnementale.' },
            { q: 'La protection des données personnelles est encadrée par…', choices: ['le RGPD', 'le SWOT', 'le mix', 'la CAF'], answer: 0, explain: 'Le RGPD protège les données personnelles depuis 2018.' },
            { q: 'Concevoir un produit en limitant son impact, c’est…', choices: ['l’éco-conception', 'l’obsolescence', 'l’écrémage', 'la pénétration'], answer: 0, explain: 'L’éco-conception réduit l’impact environnemental du produit.' },
          ],
        },
        {
          id: 'mkg-t4-vf', type: 'vraifaux', title: 'Vrai / Faux rapide', icon: '⚡',
          questions: [
            { statement: 'La mercatique responsable renonce à toute rentabilité.', answer: false, explain: 'Faux : elle concilie rentabilité et responsabilité.' },
            { statement: 'L’obsolescence programmée est une dérive de la mercatique.', answer: true, explain: 'Vrai : elle pousse au renouvellement et à la surconsommation.' },
            { statement: 'Le RGPD encadre l’usage des données personnelles.', answer: true, explain: 'Vrai : transparence et consentement sont exigés.' },
          ],
        },
        {
          id: 'mkg-t4-tri', type: 'tri', title: 'Tri — Dérive ou pratique responsable ?', icon: '🗂️',
          instruction: 'Classe chaque pratique.',
          categories: [{ id: 'der', label: 'Dérive' }, { id: 'resp', label: 'Responsable' }],
          items: [
            { text: 'Greenwashing', cat: 'der' },
            { text: 'Éco-conception', cat: 'resp' },
            { text: 'Obsolescence programmée', cat: 'der' },
            { text: 'Transparence et respect du RGPD', cat: 'resp' },
            { text: 'Publicité mensongère', cat: 'der' },
          ],
        },
      ],
    },
  ],
}
