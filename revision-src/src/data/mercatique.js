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
      intro: 'Avant de vendre, il faut comprendre : quels besoins, quelles motivations, quels freins guident le consommateur, et comment il décide d’acheter.',
      cours: [
        {
          h: 'Besoins, motivations et freins',
          blocks: [
            { t: 'p', c: 'La **mercatique** (marketing) est l’ensemble des actions visant à **connaître**, **influencer** et **satisfaire** le consommateur, tout en atteignant les objectifs de l’organisation.' },
            { t: 'p', c: 'Un **besoin** est un sentiment de manque à combler ; **Maslow** les hiérarchise (physiologiques, sécurité, appartenance, estime, accomplissement).' },
            { t: 'table', head: ['Force', 'Définition', 'Exemple'], rows: [
              ['Motivation **hédoniste**', 'Se faire **plaisir** à soi-même', 'S’offrir un dessert'],
              ['Motivation **oblative**', 'Faire **plaisir aux autres**', 'Offrir un cadeau'],
              ['Motivation d’**auto-expression**', 'S’affirmer, montrer qui l’on est', 'Acheter une marque « signature »'],
              ['**Frein**', 'Ce qui **retient** l’achat', 'Peur de se tromper, risque perçu'],
            ] },
            { t: 'tip', c: 'Motivation = ce qui **pousse** à acheter ; frein = ce qui **retient**. L’achat a lieu quand les motivations l’emportent sur les freins.' },
          ],
        },
        {
          h: 'Les facteurs explicatifs du comportement',
          blocks: [
            { t: 'p', c: 'Le comportement d’achat s’explique par deux grandes familles de facteurs :' },
            { t: 'table', head: ['Facteurs', 'Exemples'], rows: [
              ['**Individuels**', 'Personnalité, **perception**, attitude, style de vie, expérience'],
              ['**Sociologiques**', 'Culture, **groupes** d’appartenance et de référence, famille, **CSP**, leaders d’opinion'],
            ] },
            { t: 'warning', c: 'La **perception** est **subjective** et **sélective** : deux personnes ne perçoivent pas la même publicité de la même façon.' },
          ],
        },
        {
          h: 'Le processus de décision d’achat',
          blocks: [
            { t: 'p', c: 'La décision d’achat suit un **processus** en cinq étapes : reconnaissance du **besoin** → recherche d’**informations** → évaluation des solutions → **décision** d’achat → évaluation **post-achat**.' },
            { t: 'p', c: 'Le type d’achat varie : **réfléchi**, **routinier** ou **impulsif** ; le degré d’**implication** dépend du **risque perçu** (un achat cher et engageant est plus réfléchi).' },
            { t: 'example', h: 'Pourquoi ça compte', c: 'Une bonne **expérience** de consommation crée la **satisfaction**, qui favorise la **fidélisation** : réachat et bouche-à-oreille positif.' },
          ],
        },
      ],
      essentiel: [
        'Mercatique = connaître, influencer et satisfaire le consommateur.',
        'Motivations (hédoniste, oblative, auto-expression) vs freins (peurs, risque perçu).',
        'Facteurs individuels (perception, personnalité) et sociologiques (culture, CSP, groupes).',
        'Processus : besoin → information → évaluation → décision → post-achat ; satisfaction → fidélisation.',
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
      intro: 'Pour agir efficacement, l’entreprise étudie son marché, mesure sa place, puis segmente, cible et se positionne (démarche SCP).',
      cours: [
        {
          h: 'Le marché et la demande',
          blocks: [
            { t: 'p', c: 'Un **marché** confronte une **offre** et une **demande**. On distingue les clients actuels, les **prospects** (clients potentiels), les **non-consommateurs relatifs** (récupérables) et **absolus** (jamais clients).' },
            { t: 'table', head: ['Notion', 'Définition'], rows: [
              ['Demande en **volume**', 'Les quantités vendues'],
              ['Demande en **valeur**', 'Le chiffre d’affaires (quantités × prix)'],
              ['**Part de marché**', 'Ventes de l’entreprise ÷ ventes totales du marché (×100)'],
            ] },
            { t: 'p', c: 'Le marché s’analyse dans son **environnement** : **micro** (clients, concurrents, fournisseurs) et **macro** (**PESTEL**). La **veille** permet de le surveiller en continu.' },
          ],
        },
        {
          h: 'Les études de marché',
          blocks: [
            { t: 'p', c: 'Pour connaître le marché, l’entreprise mène des **études** :' },
            { t: 'table', head: ['Type', 'Objectif', 'Outils'], rows: [
              ['**Quantitative**', 'Mesurer, **chiffrer** (« combien ? »)', 'Sondage, panel, questionnaire'],
              ['**Qualitative**', 'Comprendre les **motivations** (« pourquoi ? »)', 'Entretien, réunion de groupe'],
            ] },
            { t: 'tip', c: 'Sources **primaires** = recueillies exprès pour l’étude ; sources **secondaires** = déjà existantes (INSEE, rapports internes).' },
          ],
        },
        {
          h: 'Segmentation, ciblage, positionnement (SCP)',
          blocks: [
            { t: 'p', c: 'La démarche mercatique se fait dans l’ordre : **Segmenter → Cibler → Positionner**.' },
            { t: 'table', head: ['Étape', 'Ce qu’on fait'], rows: [
              ['**Segmenter**', 'Découper le marché en groupes **homogènes** (critères géo, socio-démo, comportementaux)'],
              ['**Cibler**', 'Choisir le(s) segment(s) : marketing indifférencié (masse), **différencié** ou **concentré**'],
              ['**Positionner**', 'Donner au produit une place **claire et distinctive** dans l’esprit du consommateur'],
            ] },
            { t: 'warning', c: 'Piège classique : le **positionnement** vient en **dernier** (S → C → P), jamais avant la segmentation.' },
          ],
        },
      ],
      essentiel: [
        'Marché = offre + demande ; acteurs : clients, prospects, NCR (récupérables), NCA.',
        'Part de marché = ventes entreprise ÷ ventes du marché.',
        'Études quantitatives (chiffrer) vs qualitatives (comprendre).',
        'Démarche SCP : segmenter → cibler → positionner.',
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
      intro: 'Le plan de marchéage (mix) met en musique quatre leviers cohérents — Produit, Prix, Distribution, Communication — pour concrétiser la stratégie.',
      cours: [
        {
          h: 'La politique de produit',
          blocks: [
            { t: 'p', c: 'Le **plan de marchéage** (**mix**) combine 4 leviers **cohérents** : **Produit, Prix, Distribution, Communication** (les 4P).' },
            { t: 'p', c: 'La politique de **produit** porte sur ses caractéristiques, la **gamme** (largeur et profondeur), la **marque** et le conditionnement (**packaging**).' },
            { t: 'table', head: ['Phase du cycle de vie', 'Ce qui se passe'], rows: [
              ['**Lancement**', 'Le produit arrive, ventes faibles, fort investissement'],
              ['**Croissance**', 'Les ventes décollent'],
              ['**Maturité**', 'Ventes au sommet, concurrence forte'],
              ['**Déclin**', 'Les ventes baissent, retrait à préparer'],
            ] },
          ],
        },
        {
          h: 'La politique de prix',
          blocks: [
            { t: 'p', c: 'Le **prix** se fixe selon trois repères : les **coûts** (prix plancher), la **demande** (élasticité, **prix psychologique**) et la **concurrence**.' },
            { t: 'table', head: ['Stratégie', 'Principe'], rows: [
              ['**Écrémage**', 'Prix **élevé** : image haut de gamme et forte marge'],
              ['**Pénétration**', 'Prix **bas** : conquérir vite du **volume**'],
              ['**Alignement**', 'Se caler sur le prix des concurrents'],
            ] },
            { t: 'warning', c: 'Ne confonds pas écrémage (prix haut) et pénétration (prix bas) : ce sont deux stratégies **opposées**.' },
          ],
        },
        {
          h: 'Distribution et communication',
          blocks: [
            { t: 'p', c: 'La **distribution** achemine le produit vers le client via des **canaux** et **circuits** : **direct** (sans intermédiaire), **court** (un intermédiaire), **long** (plusieurs). Le commerce physique et l’**e-commerce** se combinent (stratégie **omnicanale**).' },
            { t: 'table', head: ['Communication', 'Exemples'], rows: [
              ['**Média**', 'Publicité TV, radio, affichage, presse, digital'],
              ['**Hors-média**', 'Promotion des ventes, relations publiques, marketing direct, réseaux sociaux'],
            ] },
            { t: 'tip', c: 'La force du mix vient de la **cohérence** des 4P : un produit haut de gamme (écrémage) se vend en boutique sélective, pas au rabais.' },
          ],
        },
      ],
      essentiel: [
        'Mix = 4P cohérents : Produit, Prix, Distribution, Communication.',
        'Cycle de vie : lancement → croissance → maturité → déclin.',
        'Écrémage (prix haut) vs pénétration (prix bas).',
        'Circuits direct/court/long ; communication média vs hors-média.',
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
      keywords: 'dérives surconsommation obsolescence greenwashing données RGPD mercatique responsable durable éthique consommation responsable éco-conception',
      intro: 'La mercatique peut déraper (surconsommation, greenwashing). La mercatique responsable cherche à concilier performance, société et environnement.',
      cours: [
        {
          h: 'Les dérives de la mercatique',
          blocks: [
            { t: 'p', c: 'Poussée à l’excès, la mercatique peut entraîner des **dérives** :' },
            { t: 'table', head: ['Dérive', 'Description'], rows: [
              ['**Surconsommation**', 'Inciter à acheter au-delà des besoins réels'],
              ['**Obsolescence programmée**', 'Réduire volontairement la durée de vie d’un produit'],
              ['**Publicité mensongère**', 'Tromper le consommateur sur le produit'],
              ['**Greenwashing**', 'Se dire écologique **sans preuve** (éco-blanchiment)'],
            ] },
            { t: 'warning', c: 'L’exploitation abusive des **données** personnelles porte atteinte à la vie privée : c’est encadré par la loi (RGPD).' },
          ],
        },
        {
          h: 'La mercatique responsable',
          blocks: [
            { t: 'p', c: 'La **mercatique responsable** (ou durable) concilie la **satisfaction** du client, la **rentabilité** de l’entreprise et le respect de la **société** et de l’**environnement**.' },
            { t: 'p', c: 'Elle suppose la **transparence**, la protection des **données** (**RGPD**), l’**éco-conception** des produits et l’encouragement d’une **consommation responsable**.' },
            { t: 'tip', c: 'Responsable ne veut pas dire non rentable : bien menée, elle renforce l’**image** et la **fidélité** — donc la performance à long terme.' },
          ],
        },
      ],
      essentiel: [
        'Dérives : surconsommation, obsolescence programmée, publicité mensongère, greenwashing.',
        'Mercatique responsable = concilier client, rentabilité, société et environnement.',
        'Outils : transparence, RGPD (données), éco-conception, consommation responsable.',
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
      ],
    },
  ],
}
