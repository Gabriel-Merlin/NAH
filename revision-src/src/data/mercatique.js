// MERCATIQUE (spécialité de Terminale STMG).
// Programme : le consommateur, le marché et le ciblage, la mercatique
// opérationnelle (mix), la mercatique et la société (responsable & numérique).
export const mercatique = {
  id: 'mercatique',
  name: 'Mercatique (Marketing)',
  short: 'Mercatique',
  icon: '🛍️',
  color: '#f97316',
  tagline: 'Connaître, cibler et satisfaire le consommateur.',
  chapters: [
    // ===================================================================== T1
    {
      id: 'mkg-t1',
      name: 'Thème 1 — Mercatique et consommateurs',
      short: 'Le consommateur',
      keywords: 'mercatique besoin motivation frein perception attitude apprentissage facteurs individuels sociologiques processus d’achat implication risque perçu expérience satisfaction fidélisation',
      intro: 'On ne vend bien que ce que l’on comprend. Avant toute action commerciale, la mercatique cherche à savoir ce qui pousse — ou retient — le consommateur, et comment il prend sa décision d’achat.',
      cours: [
        {
          h: 'Besoins, motivations et freins',
          blocks: [
            { t: 'p', c: 'La **mercatique** (marketing) est l’ensemble des actions destinées à **connaître**, **influencer** et **satisfaire** le consommateur, dans le but d’atteindre les objectifs de l’organisation (vendre, fidéliser, rentabiliser). Elle part toujours du **marché** (le client d’abord), à l’inverse de l’ancienne logique de production (« je fabrique puis je cherche à vendre »).' },
            { t: 'p', c: 'Tout achat naît d’un **besoin** : un sentiment de manque que l’on cherche à combler. La **pyramide de Maslow** les hiérarchise : on cherche à satisfaire un besoin supérieur une fois les précédents comblés.' },
            { t: 'list', c: [
              '**Physiologiques** : manger, boire, dormir.',
              '**Sécurité** : se protéger, être assuré, avoir un emploi stable.',
              '**Appartenance** : être accepté dans un groupe, une communauté.',
              '**Estime** : être reconnu, respecté, valorisé.',
              '**Accomplissement** : se réaliser, se dépasser.',
            ] },
            { t: 'p', c: 'Le besoin se traduit en **motivations** (forces qui poussent à agir), freinées par des **freins** (forces qui retiennent).' },
            { t: 'table', head: ['Force', 'Définition', 'Exemple'], rows: [
              ['Motivation **hédoniste**', 'Se faire **plaisir** à soi-même', 'S’offrir un dessert, un parfum'],
              ['Motivation **oblative**', 'Faire **plaisir aux autres**', 'Offrir un cadeau, cuisiner pour ses proches'],
              ['Motivation d’**auto-expression**', 'S’affirmer, montrer qui l’on est', 'Acheter une marque « signature »'],
              ['**Frein — peur**', 'Risque perçu, crainte de se tromper', 'Peur qu’un appareil tombe vite en panne'],
              ['**Frein — inhibition**', 'Blocage psychologique, culpabilité', 'Se sentir coupable d’un achat « futile »'],
            ] },
            { t: 'example', h: 'Cas concret', c: 'Un client hésite devant un smartphone à 900 €. Sa motivation d’auto-expression (« avoir le dernier modèle ») est forte, mais le **frein-peur** (« et si je le casse ? ») le retient. La marque lève ce frein en offrant une **garantie casse** : l’achat se déclenche.' },
            { t: 'tip', c: 'Moyen mnémotechnique : **motivation = moteur** (ça pousse), **frein = frein** (ça retient). L’achat a lieu quand les motivations **l’emportent** sur les freins — le rôle de la mercatique est d’augmenter les unes et de lever les autres.' },
          ],
        },
        {
          h: 'Les facteurs explicatifs du comportement',
          blocks: [
            { t: 'p', c: 'Pourquoi deux personnes n’achètent-elles pas la même chose ? Parce que leur comportement est façonné par deux grandes familles de facteurs.' },
            { t: 'table', head: ['Facteurs', 'Contenu', 'Exemple'], rows: [
              ['**Individuels** (propres à la personne)', 'Personnalité, **perception**, **attitude**, **apprentissage**, style de vie, âge', 'Un sportif percevra une boisson énergisante autrement'],
              ['**Sociologiques** (l’entourage)', 'Culture, **groupes** d’appartenance et de référence, famille, **CSP**, leaders d’opinion', 'Suivre un influenceur, imiter un ami'],
            ] },
            { t: 'p', c: 'Trois notions individuelles reviennent souvent au bac : la **perception** (façon dont on interprète l’information), l’**attitude** (opinion favorable ou défavorable envers un produit) et l’**apprentissage** (l’expérience passée modifie les comportements futurs).' },
            { t: 'warning', c: 'Piège fréquent : la **perception est subjective et sélective**. Deux consommateurs exposés à la même publicité n’en retiennent pas la même chose ; chacun filtre selon ses attentes et son vécu. Une publicité « objectivement claire » peut donc être mal perçue.' },
            { t: 'tip', c: 'Distingue bien : la **CSP** (catégorie socio-professionnelle) et la **famille** sont des facteurs **sociologiques** (l’environnement), alors que la **personnalité** est un facteur **individuel**.' },
          ],
        },
        {
          h: 'Le processus de décision et la fidélisation',
          blocks: [
            { t: 'p', c: 'La décision d’achat n’est pas instantanée : elle suit un **processus** en cinq étapes.' },
            { t: 'list', c: [
              'Reconnaissance du **besoin** (je manque de quelque chose) ;',
              'Recherche d’**informations** (avis, comparateurs, magasins) ;',
              '**Évaluation** des solutions possibles (critères : prix, qualité…) ;',
              '**Décision** d’achat (choix final et passage à l’acte) ;',
              'Évaluation **post-achat** (suis-je satisfait ?).',
            ] },
            { t: 'p', c: 'L’intensité de ce processus dépend de l’**implication** du consommateur, elle-même liée au **risque perçu**. On distingue trois types d’achats :' },
            { t: 'table', head: ['Type d’achat', 'Réflexion', 'Exemple'], rows: [
              ['**Réfléchi**', 'Forte : achat cher, engageant', 'Voiture, ordinateur'],
              ['**Routinier**', 'Faible : habitude, réachat automatique', 'Pain, dentifrice'],
              ['**Impulsif**', 'Quasi nulle : coup de cœur non prémédité', 'Confiserie en caisse'],
            ] },
            { t: 'example', h: 'Pourquoi ça compte', c: 'La cinquième étape est décisive : une bonne **expérience** de consommation crée la **satisfaction**, qui débouche sur la **fidélisation** (réachat + bouche-à-oreille positif). Fidéliser un client coûte bien moins cher que d’en conquérir un nouveau.' },
            { t: 'tip', c: 'Retiens la chaîne gagnante : **expérience → satisfaction → fidélisation → recommandation**. Un client déçu, lui, parle en moyenne à bien plus de monde qu’un client satisfait.' },
            { t: 'p', c: '📖 **Définitions clés à mémoriser**' },
            { t: 'table', head: ['Terme', 'Définition'], rows: [
              ['Mercatique', 'Actions pour connaître, influencer et satisfaire le consommateur'],
              ['Besoin', 'Sentiment de manque à combler (hiérarchisé par Maslow)'],
              ['Motivation / Frein', 'Force qui pousse à l’achat / force qui le retient'],
              ['Perception', 'Façon subjective et sélective d’interpréter l’information'],
              ['Attitude', 'Opinion favorable ou défavorable envers un produit'],
              ['Satisfaction', 'Écart entre ce que le client attendait et ce qu’il a vécu'],
              ['Fidélisation', 'Amener le client à racheter et à recommander'],
            ] },
          ],
        },
      ],
      essentiel: [
        'Mercatique = connaître, influencer et satisfaire le consommateur (on part du marché, pas du produit).',
        'Besoins hiérarchisés (Maslow) ; motivations (hédoniste, oblative, auto-expression) vs freins (peur, inhibition).',
        'Facteurs individuels (perception, attitude, apprentissage) et sociologiques (culture, CSP, groupes).',
        'Processus : besoin → information → évaluation → décision → post-achat ; l’implication dépend du risque perçu.',
        'Satisfaction → fidélisation → recommandation : fidéliser coûte moins cher que conquérir.',
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
            { q: 'Un achat de pain quotidien est plutôt un achat…', choices: ['routinier', 'réfléchi', 'impulsif', 'à fort risque perçu'], answer: 0, explain: 'Achat routinier : faible implication, réachat par habitude.' },
            { q: 'L’attitude désigne…', choices: ['une opinion favorable ou défavorable envers un produit', 'la place en rayon', 'le prix psychologique', 'un canal de distribution'], answer: 0, explain: 'L’attitude est une prédisposition (positive/négative) envers le produit.' },
          ],
        },
        {
          id: 'mkg-t1-vf', type: 'vraifaux', title: 'Vrai / Faux rapide', icon: '⚡',
          questions: [
            { statement: 'La perception est objective et identique pour tous.', answer: false, explain: 'Faux : la perception est subjective et sélective.' },
            { statement: 'La satisfaction favorise la fidélisation.', answer: true, explain: 'Vrai : un client satisfait rachète et recommande.' },
            { statement: 'Un achat impulsif suppose une longue réflexion.', answer: false, explain: 'Faux : l’achat impulsif est non prémédité, à faible réflexion.' },
            { statement: 'Plus le risque perçu est élevé, plus l’implication est forte.', answer: true, explain: 'Vrai : un achat engageant est davantage réfléchi.' },
            { statement: 'Fidéliser un client coûte plus cher que d’en conquérir un nouveau.', answer: false, explain: 'Faux : la fidélisation coûte généralement bien moins cher que la conquête.' },
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
            { text: 'Culpabilité d’un achat futile (inhibition)', cat: 'fre' },
          ],
        },
        {
          id: 'mkg-t1-trou', type: 'trou', title: 'Texte à trous — Comportement du consommateur', icon: '✏️',
          questions: [
            { text: 'La façon subjective et sélective d’interpréter l’information s’appelle la ____ .', answer: 'perception', alt: ['la perception'], explain: 'La perception filtre l’information selon les attentes de chacun.' },
            { text: 'Une opinion favorable ou défavorable envers un produit est une ____ .', answer: 'attitude', alt: ['une attitude'], explain: 'L’attitude prédispose à l’achat ou au rejet.' },
            { text: 'La force qui pousse à l’achat est une ____ .', answer: 'motivation', alt: ['une motivation'], explain: 'La motivation pousse ; le frein retient.' },
            { text: 'Une bonne expérience crée la ____ , qui mène à la fidélisation.', answer: 'satisfaction', alt: ['la satisfaction'], explain: 'Satisfaction → fidélisation → recommandation.' },
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
    // ===================================================================== T2
    {
      id: 'mkg-t2',
      name: 'Thème 2 — Mercatique et marchés',
      short: 'Marché & ciblage',
      keywords: 'marché demande offre prospect non-consommateur part de marché taux de pénétration veille PESTEL études quantitatives qualitatives segmentation ciblage positionnement mapping SCP',
      intro: 'Pour agir juste, l’entreprise doit d’abord mesurer son terrain de jeu : la taille du marché, sa position, ses concurrents. Elle découpe ensuite le marché pour choisir qui viser et comment se distinguer (démarche SCP).',
      cours: [
        {
          h: 'Le marché et la demande',
          blocks: [
            { t: 'p', c: 'Un **marché** est le lieu (réel ou virtuel) de rencontre d’une **offre** (les vendeurs) et d’une **demande** (les acheteurs). La demande ne se limite pas aux clients actuels : elle inclut des clients à conquérir.' },
            { t: 'table', head: ['Acteur', 'Définition'], rows: [
              ['Clients **actuels**', 'Ceux qui achètent déjà le produit'],
              ['**Prospects**', 'Clients **potentiels** non encore acheteurs'],
              ['**Non-consommateurs relatifs (NCR)**', 'Ne consomment pas encore mais sont **récupérables**'],
              ['**Non-consommateurs absolus (NCA)**', 'Ne consommeront **jamais** (raison durable : allergie, interdiction…)'],
            ] },
            { t: 'p', c: 'On mesure la demande de deux façons : en **volume** (quantités vendues) et en **valeur** (chiffre d’affaires = quantités × prix). Deux indicateurs clés situent l’entreprise :' },
            { t: 'formula', c: 'Part de marché (%) = Ventes de l’entreprise ÷ Ventes totales du marché × 100' },
            { t: 'p', c: 'Le **taux de pénétration** mesure la part de la population qui consomme déjà le produit (utile pour repérer le potentiel de croissance auprès des NCR).' },
            { t: 'p', c: 'Le marché s’analyse dans son **environnement** : le **micro-environnement** (clients, concurrents, fournisseurs, distributeurs — proche et influençable) et le **macro-environnement**, résumé par **PESTEL** (Politique, Économique, Socioculturel, Technologique, Écologique, Légal). La **veille** permet de le surveiller en continu.' },
            { t: 'tip', c: 'Ne confonds pas **NCR** (récupérable, cible de croissance) et **NCA** (perdu d’avance). Toute la conquête se joue sur les NCR.' },
          ],
        },
        {
          h: 'Les études de marché',
          blocks: [
            { t: 'p', c: 'Pour décider sans se tromper, l’entreprise collecte de l’information par des **études de marché**. On les classe selon leur but.' },
            { t: 'table', head: ['Type', 'Question posée', 'Outils'], rows: [
              ['**Quantitative**', 'Mesurer, **chiffrer** (« combien ? »)', 'Sondage, panel, questionnaire fermé'],
              ['**Qualitative**', 'Comprendre les **motivations** (« pourquoi ? »)', 'Entretien individuel, réunion de groupe (focus group)'],
            ] },
            { t: 'p', c: 'On distingue aussi l’origine des données : les sources **primaires** sont recueillies **exprès** pour l’étude (on interroge soi-même) ; les sources **secondaires** existent **déjà** (données INSEE, rapports internes, études publiées) — plus rapides et moins coûteuses.' },
            { t: 'example', h: 'Bien choisir son étude', c: 'Une marque veut connaître le **prix acceptable** d’un nouveau yaourt → étude **quantitative** (chiffrer). Elle veut comprendre **pourquoi** les jeunes boudent le rayon → étude **qualitative** (explorer les motivations).' },
            { t: 'warning', c: 'Un échantillon mal construit fausse tout : il doit être **représentatif** de la population visée, sinon les résultats chiffrés sont trompeurs.' },
          ],
        },
        {
          h: 'Segmentation, ciblage, positionnement (SCP)',
          blocks: [
            { t: 'p', c: 'Un marché est trop hétérogène pour être traité d’un bloc. La démarche mercatique se déroule dans un ordre **strict** : **Segmenter → Cibler → Positionner**.' },
            { t: 'table', head: ['Étape', 'Ce qu’on fait', 'Critères / choix'], rows: [
              ['**Segmenter**', 'Découper le marché en groupes **homogènes**', 'Critères géographiques, socio-démographiques, comportementaux'],
              ['**Cibler**', 'Choisir le(s) segment(s) à servir', 'Marketing **indifférencié** (masse), **différencié** (plusieurs segments), **concentré** (un seul, niche)'],
              ['**Positionner**', 'Donner au produit une place **claire et distinctive** dans l’esprit du client', 'S’appuyer sur une carte de positionnement (**mapping** prix / qualité, par ex.)'],
            ] },
            { t: 'p', c: 'Un bon **positionnement** est **simple**, **crédible**, **distinctif** et **durable** : il répond à la question « pourquoi te choisir plutôt qu’un concurrent ? ».' },
            { t: 'warning', c: 'Piège classique : le **positionnement vient en dernier** (S → C → P), jamais avant la segmentation. On ne peut pas se distinguer avant de savoir à qui l’on s’adresse.' },
            { t: 'tip', c: 'Retiens l’ordre avec « **SCP** » : **S**egmenter, **C**ibler, **P**ositionner — toujours dans ce sens.' },
            { t: 'p', c: '📖 **Définitions clés à mémoriser**' },
            { t: 'table', head: ['Terme', 'Définition'], rows: [
              ['Marché', 'Lieu de rencontre d’une offre et d’une demande'],
              ['Prospect', 'Client potentiel non encore acheteur'],
              ['NCR / NCA', 'Non-consommateur relatif (récupérable) / absolu (jamais client)'],
              ['Part de marché', 'Ventes de l’entreprise ÷ ventes totales du marché'],
              ['Segmentation', 'Découper le marché en groupes homogènes'],
              ['Ciblage', 'Choisir le(s) segment(s) à servir'],
              ['Positionnement', 'Place claire et distinctive du produit dans l’esprit du client'],
            ] },
          ],
        },
      ],
      essentiel: [
        'Marché = offre + demande ; acteurs : clients, prospects, NCR (récupérables), NCA (jamais).',
        'Part de marché = ventes entreprise ÷ ventes du marché × 100 ; demande en volume vs valeur.',
        'Environnement : micro (proche) et macro (PESTEL) ; la veille surveille en continu.',
        'Études quantitatives (chiffrer) vs qualitatives (comprendre) ; sources primaires vs secondaires.',
        'Démarche SCP dans l’ordre : segmenter → cibler → positionner.',
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
            { q: 'Les données INSEE déjà publiées sont des sources…', choices: ['secondaires', 'primaires', 'qualitatives', 'internes exclusives'], answer: 0, explain: 'Secondaires = déjà existantes ; primaires = recueillies pour l’étude.' },
            { q: 'PESTEL sert à analyser…', choices: ['le macro-environnement', 'les seuls concurrents', 'la trésorerie', 'le bilan'], answer: 0, explain: 'PESTEL décrit le macro-environnement (Pol., Éco., Socio., Techno., Écolo., Légal).' },
          ],
        },
        {
          id: 'mkg-t2-vf', type: 'vraifaux', title: 'Vrai / Faux rapide', icon: '⚡',
          questions: [
            { statement: 'Le positionnement se fait avant la segmentation.', answer: false, explain: 'Faux : on segmente, on cible, puis on positionne (SCP).' },
            { statement: 'Une étude qualitative cherche à comprendre les motivations.', answer: true, explain: 'Vrai : le qualitatif explore le « pourquoi ».' },
            { statement: 'La veille sert à surveiller l’environnement du marché.', answer: true, explain: 'Vrai : veille concurrentielle, commerciale, technologique…' },
            { statement: 'Un non-consommateur absolu peut devenir client avec une bonne pub.', answer: false, explain: 'Faux : le NCA ne consommera jamais (raison durable) ; ce sont les NCR qu’on récupère.' },
            { statement: 'La demande en valeur correspond au chiffre d’affaires.', answer: true, explain: 'Vrai : valeur = quantités × prix = CA ; le volume = les quantités.' },
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
            { text: 'Questionnaire fermé en ligne', cat: 'quanti' },
          ],
        },
        {
          id: 'mkg-t2-trou', type: 'trou', title: 'Texte à trous — Le marché', icon: '✏️',
          questions: [
            { text: 'Un client potentiel non encore acheteur est un ____ .', answer: 'prospect', alt: ['un prospect'], explain: 'Le prospect est une cible de conquête.' },
            { text: 'Les non-consommateurs ____ sont récupérables et deviennent une cible de croissance.', answer: 'relatifs', alt: ['relatif'], explain: 'NCR = récupérables ; NCA = jamais clients.' },
            { text: 'La méthode qui analyse le macro-environnement se nomme ____ .', answer: 'PESTEL', alt: ['pestel'], explain: 'Politique, Économique, Socio., Techno., Écolo., Légal.' },
            { text: 'La demande en ____ correspond au chiffre d’affaires (quantités × prix).', answer: 'valeur', alt: ['la valeur'], explain: 'Valeur = CA ; volume = quantités.' },
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
    // ===================================================================== T3
    {
      id: 'mkg-t3',
      name: 'Thème 3 — La mercatique opérationnelle (le mix)',
      short: 'Le plan de marchéage (4P)',
      keywords: 'plan de marchéage mix produit gamme marque MDD packaging cycle de vie prix écrémage pénétration alignement prix psychologique élasticité distribution circuit direct court long omnicanal merchandising communication média hors-média',
      intro: 'Une fois la cible choisie, il faut agir. Le plan de marchéage (mix) met en musique quatre leviers cohérents — Produit, Prix, Distribution, Communication — pour transformer la stratégie en offre concrète.',
      cours: [
        {
          h: 'La politique de produit',
          blocks: [
            { t: 'p', c: 'Le **plan de marchéage** (**mix**) combine **quatre leviers cohérents**, les **4P** : **Produit** (Product), **Prix** (Price), **Distribution** (Place), **Communication** (Promotion).' },
            { t: 'p', c: 'La politique de **produit** dépasse le produit physique : elle englobe la **gamme** (largeur = nombre de lignes ; profondeur = nombre de produits par ligne), la **marque** (nom, logo, valeurs — y compris les **MDD**, marques de distributeur) et le **packaging** (conditionnement).' },
            { t: 'p', c: 'Le **packaging** remplit trois fonctions : **contenir/protéger**, **informer** (composition, mode d’emploi) et **séduire/vendre** (« vendeur muet » en rayon).' },
            { t: 'p', c: 'Tout produit suit un **cycle de vie** en quatre phases, qui guide les décisions du mix.' },
            { t: 'table', head: ['Phase', 'Ventes', 'Action mercatique typique'], rows: [
              ['**Lancement**', 'Faibles, fort investissement', 'Faire connaître, publicité intense'],
              ['**Croissance**', 'En forte hausse', 'Élargir la distribution, fidéliser'],
              ['**Maturité**', 'Au sommet, concurrence vive', 'Se différencier, relancer (promotions)'],
              ['**Déclin**', 'En baisse', 'Préparer le retrait ou relancer (innovation)'],
            ] },
            { t: 'tip', c: 'Largeur vs profondeur de gamme : la **largeur**, c’est le nombre de familles proposées (shampooings, gels douche…) ; la **profondeur**, c’est le nombre de variantes dans une famille (shampooing cheveux gras, secs, colorés…).' },
          ],
        },
        {
          h: 'La politique de prix',
          blocks: [
            { t: 'p', c: 'Le **prix** est le seul P qui **rapporte** de l’argent (les trois autres en coûtent). Il se fixe selon **trois repères** :' },
            { t: 'list', c: [
              'Les **coûts** : le prix doit couvrir le coût de revient (prix **plancher**) ;',
              'La **demande** : le **prix psychologique** est celui accepté par le plus grand nombre ; l’**élasticité** mesure la sensibilité des ventes au prix ;',
              'La **concurrence** : se situer par rapport aux prix pratiqués sur le marché.',
            ] },
            { t: 'table', head: ['Stratégie de prix', 'Principe', 'Quand l’utiliser'], rows: [
              ['**Écrémage**', 'Prix **élevé**', 'Image haut de gamme, innovation, forte marge'],
              ['**Pénétration**', 'Prix **bas**', 'Conquérir vite un gros **volume**, décourager la concurrence'],
              ['**Alignement**', 'Prix proche des concurrents', 'Marché concurrentiel, produit peu différencié'],
            ] },
            { t: 'warning', c: 'Ne confonds jamais **écrémage** (prix **haut**, on « écrème » la clientèle prête à payer) et **pénétration** (prix **bas**, on « pénètre » vite le marché) : ce sont deux stratégies **opposées**.' },
            { t: 'example', h: 'Astuce du prix magique', c: 'Afficher **9,99 €** plutôt que 10 € : le cerveau retient « 9 et quelques ». C’est un **prix psychologique** qui joue sur la perception, sans presque changer le prix réel.' },
          ],
        },
        {
          h: 'Distribution et communication',
          blocks: [
            { t: 'p', c: 'La **distribution** (Place) achemine le produit du producteur jusqu’au client. On la mesure par la **longueur du circuit** (nombre d’intermédiaires).' },
            { t: 'table', head: ['Circuit', 'Intermédiaires', 'Exemple'], rows: [
              ['**Direct**', 'Aucun', 'Vente à la ferme, site du fabricant'],
              ['**Court**', 'Un seul', 'Producteur → détaillant → client'],
              ['**Long**', 'Plusieurs', 'Producteur → grossiste → détaillant → client'],
            ] },
            { t: 'p', c: 'Le commerce physique et l’**e-commerce** se combinent désormais : c’est la stratégie **omnicanale** (le client passe d’un canal à l’autre sans rupture). En magasin, le **merchandising** optimise la présentation en rayon (« le bon produit, au bon endroit, en bonne quantité »).' },
            { t: 'p', c: 'La **communication** (Promotion) fait connaître, aimer et acheter. On distingue les moyens **média** et **hors-média**.' },
            { t: 'table', head: ['Communication', 'Exemples'], rows: [
              ['**Média**', 'Publicité TV, radio, affichage, presse, cinéma, display digital'],
              ['**Hors-média**', 'Promotion des ventes, relations publiques, marketing direct, événementiel, réseaux sociaux, influence'],
            ] },
            { t: 'p', c: 'Un message vise trois objectifs successifs : **cognitif** (faire connaître), **affectif** (faire aimer) et **conatif** (faire agir/acheter).' },
            { t: 'tip', c: 'La force du mix vient de la **cohérence** des 4P : un produit haut de gamme (écrémage) se vend en boutique **sélective** avec une communication soignée — jamais au rabais en hard-discount.' },
            { t: 'p', c: '📖 **Définitions clés à mémoriser**' },
            { t: 'table', head: ['Terme', 'Définition'], rows: [
              ['Plan de marchéage (mix)', 'Les 4P cohérents : Produit, Prix, Distribution, Communication'],
              ['Gamme', 'Ensemble des produits : largeur (lignes) × profondeur (variantes)'],
              ['Cycle de vie', 'Lancement → croissance → maturité → déclin'],
              ['Écrémage / Pénétration', 'Prix élevé (image, marge) / prix bas (volume)'],
              ['Prix psychologique', 'Prix accepté par le plus grand nombre de clients'],
              ['Circuit de distribution', 'Direct (0), court (1) ou long (plusieurs intermédiaires)'],
              ['Communication média / hors-média', 'Publicité / promotion, RP, marketing direct, réseaux sociaux'],
            ] },
          ],
        },
      ],
      essentiel: [
        'Mix = 4P cohérents : Produit, Prix, Distribution (Place), Communication (Promotion).',
        'Produit : gamme (largeur/profondeur), marque (dont MDD), packaging (protéger/informer/séduire).',
        'Cycle de vie : lancement → croissance → maturité → déclin.',
        'Prix fixé par coûts / demande (prix psychologique, élasticité) / concurrence ; écrémage (haut) vs pénétration (bas).',
        'Circuits direct/court/long ; omnicanal & merchandising ; communication média vs hors-média (cognitif→affectif→conatif).',
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
            { q: 'La largeur d’une gamme correspond…', choices: ['au nombre de lignes de produits', 'au nombre de variantes d’un produit', 'au prix moyen', 'au nombre de magasins'], answer: 0, explain: 'Largeur = nombre de lignes ; profondeur = variantes par ligne.' },
            { q: 'Faire connaître le produit est un objectif de communication…', choices: ['cognitif', 'affectif', 'conatif', 'financier'], answer: 0, explain: 'Cognitif (connaître) → affectif (aimer) → conatif (agir).' },
          ],
        },
        {
          id: 'mkg-t3-vf', type: 'vraifaux', title: 'Vrai / Faux rapide', icon: '⚡',
          questions: [
            { statement: 'Les 4P doivent être cohérents entre eux.', answer: true, explain: 'Vrai : la cohérence du mix fait la force de l’offre.' },
            { statement: 'La pénétration consiste à fixer un prix très élevé.', answer: false, explain: 'Faux : la pénétration = prix bas pour conquérir du volume.' },
            { statement: 'Le e-commerce est un canal de distribution.', answer: true, explain: 'Vrai : la vente en ligne est un canal (souvent omnicanal).' },
            { statement: 'Le packaging n’a qu’un rôle de protection.', answer: false, explain: 'Faux : il protège, informe ET séduit (vendeur muet).' },
            { statement: 'Le prix est le seul levier du mix qui génère des recettes.', answer: true, explain: 'Vrai : produit, distribution et communication coûtent ; seul le prix rapporte.' },
          ],
        },
        {
          id: 'mkg-t3-ordre', type: 'ordre', title: 'Remise en ordre — Cycle de vie du produit', icon: '🔢',
          instruction: 'Remets les phases du cycle de vie dans l’ordre.',
          steps: ['Lancement', 'Croissance', 'Maturité', 'Déclin'],
          explain: 'Un produit naît, croît, atteint sa maturité, puis décline.',
        },
        {
          id: 'mkg-t3-tri', type: 'tri', title: 'Tri — Communication média ou hors-média ?', icon: '🗂️',
          instruction: 'Classe chaque moyen de communication.',
          categories: [{ id: 'media', label: 'Média' }, { id: 'hors', label: 'Hors-média' }],
          items: [
            { text: 'Spot publicitaire à la télévision', cat: 'media' },
            { text: 'Affichage 4×3 dans la rue', cat: 'media' },
            { text: 'Promotion « 2 achetés = 1 offert »', cat: 'hors' },
            { text: 'Jeu-concours sur les réseaux sociaux', cat: 'hors' },
            { text: 'Encart dans un magazine', cat: 'media' },
            { text: 'Envoi d’un e-mailing ciblé', cat: 'hors' },
          ],
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
    // ===================================================================== T4
    {
      id: 'mkg-t4',
      name: 'Thème 4 — Mercatique et société',
      short: 'Numérique & mercatique responsable',
      keywords: 'dérives surconsommation obsolescence programmée greenwashing publicité mensongère données personnelles RGPD réseaux sociaux e-réputation consommateur acteur avis mercatique responsable durable éthique éco-conception consommation responsable',
      intro: 'La mercatique a un pouvoir d’influence énorme. Le numérique le décuple — pour le meilleur (relation client, personnalisation) comme pour le pire (dérives, données). La mercatique responsable cherche l’équilibre entre performance, société et environnement.',
      cours: [
        {
          h: 'Les dérives de la mercatique',
          blocks: [
            { t: 'p', c: 'Poussée à l’excès, la recherche de vente peut conduire à des **dérives** qui nuisent au consommateur, à la société ou à la planète.' },
            { t: 'table', head: ['Dérive', 'Description'], rows: [
              ['**Surconsommation**', 'Inciter à acheter au-delà des besoins réels (modes, séries limitées)'],
              ['**Obsolescence programmée**', 'Réduire volontairement la durée de vie d’un produit pour forcer le renouvellement'],
              ['**Publicité mensongère**', 'Tromper le consommateur sur les qualités réelles du produit'],
              ['**Greenwashing**', 'Se présenter comme écologique **sans preuve** (éco-blanchiment)'],
            ] },
            { t: 'p', c: 'Ces pratiques sont **encadrées par la loi** : la publicité mensongère et l’obsolescence programmée sont sanctionnées ; les associations de consommateurs et les autorités (DGCCRF) veillent.' },
            { t: 'warning', c: 'L’exploitation abusive des **données personnelles** (pistage, revente sans consentement) porte atteinte à la vie privée. Le **RGPD** (2018) l’encadre strictement.' },
          ],
        },
        {
          h: 'Le numérique et le consommateur-acteur',
          blocks: [
            { t: 'p', c: 'Le numérique a transformé la relation client : d’une communication **descendante** (la marque parle, le client écoute), on est passé à une relation **interactive**. Le consommateur est devenu **acteur** : il commente, note, partage, compare.' },
            { t: 'list', c: [
              '**Avis en ligne** : ils influencent fortement l’achat (preuve sociale) ; un mauvais avis se propage vite.',
              '**Réseaux sociaux & influenceurs** : nouveaux canaux de communication et de recommandation.',
              '**E-réputation** : l’image de la marque sur Internet, à surveiller et protéger.',
              '**Personnalisation** : grâce aux **données**, la marque adapte offres et messages (mais gare au RGPD).',
            ] },
            { t: 'example', h: 'Le pouvoir de l’avis client', c: 'Un restaurant très bien noté sur les plateformes attire de nouveaux clients sans publicité : c’est la **preuve sociale**. À l’inverse, un « bad buzz » sur les réseaux peut faire chuter les ventes en quelques heures.' },
            { t: 'tip', c: 'Le client n’est plus une cible passive mais un **acteur** : il peut faire — ou défaire — la réputation d’une marque. D’où l’importance de la **relation client** et de l’écoute.' },
          ],
        },
        {
          h: 'La mercatique responsable',
          blocks: [
            { t: 'p', c: 'La **mercatique responsable** (ou durable) cherche à concilier trois exigences : la **satisfaction** du client, la **rentabilité** de l’entreprise et le respect de la **société** et de l’**environnement** (les trois piliers du développement durable).' },
            { t: 'list', c: [
              '**Transparence** : informer honnêtement (composition, origine, impact).',
              '**Protection des données** : respect du **RGPD**, consentement, minimisation.',
              '**Éco-conception** : concevoir des produits durables, réparables, recyclables.',
              '**Consommation responsable** : encourager le réemploi, le local, le juste besoin.',
            ] },
            { t: 'p', c: 'Loin d’être un frein, une mercatique responsable **bien menée** renforce l’**image**, la **confiance** et la **fidélité** : elle crée un avantage concurrentiel durable.' },
            { t: 'warning', c: 'Attention à la sincérité : afficher des valeurs responsables **sans les tenir**, c’est du **greenwashing** — le retour de bâton (perte de confiance) est alors sévère.' },
            { t: 'p', c: '📖 **Définitions clés à mémoriser**' },
            { t: 'table', head: ['Terme', 'Définition'], rows: [
              ['Surconsommation', 'Inciter à acheter au-delà des besoins réels'],
              ['Obsolescence programmée', 'Réduire volontairement la durée de vie d’un produit'],
              ['Greenwashing', 'Se présenter comme écologique sans preuve (éco-blanchiment)'],
              ['E-réputation', 'Image de la marque sur Internet (avis, réseaux sociaux)'],
              ['Éco-conception', 'Concevoir un produit en limitant son impact environnemental'],
              ['Mercatique responsable', 'Concilier satisfaction client, rentabilité, société et environnement'],
              ['RGPD', 'Règlement qui protège les données personnelles'],
            ] },
          ],
        },
      ],
      essentiel: [
        'Dérives : surconsommation, obsolescence programmée, publicité mensongère, greenwashing.',
        'Le numérique rend le consommateur acteur : avis, réseaux sociaux, e-réputation, personnalisation.',
        'Les données personnelles sont encadrées par le RGPD (consentement, transparence).',
        'Mercatique responsable = concilier client, rentabilité, société et environnement.',
        'Outils : transparence, RGPD, éco-conception, consommation responsable — un atout d’image, pas un frein.',
      ],
      games: [
        {
          id: 'mkg-t4-qcm', type: 'qcm', title: 'QCM — Mercatique & société', icon: '❓',
          questions: [
            { q: 'Faire croire qu’un produit est écologique sans preuve, c’est…', choices: ['du greenwashing', 'de l’écrémage', 'de la veille', 'du positionnement'], answer: 0, explain: 'Le greenwashing (éco-blanchiment) est une dérive.' },
            { q: 'La mercatique responsable concilie…', choices: ['client, rentabilité et environnement', 'coûts et bénéfices seulement', 'prix et publicité', 'offre et demande uniquement'], answer: 0, explain: 'Elle intègre la dimension sociale et environnementale.' },
            { q: 'La protection des données personnelles est encadrée par…', choices: ['le RGPD', 'le SWOT', 'le mix', 'la CAF'], answer: 0, explain: 'Le RGPD protège les données personnelles depuis 2018.' },
            { q: 'Concevoir un produit en limitant son impact, c’est…', choices: ['l’éco-conception', 'l’obsolescence', 'l’écrémage', 'la pénétration'], answer: 0, explain: 'L’éco-conception réduit l’impact environnemental du produit.' },
            { q: 'Avec le numérique, le consommateur devient…', choices: ['acteur (avis, partages)', 'passif', 'invisible', 'un fournisseur'], answer: 0, explain: 'Il commente, note, partage : il influence la réputation de la marque.' },
            { q: 'L’image d’une marque sur Internet s’appelle…', choices: ['l’e-réputation', 'le merchandising', 'l’élasticité', 'le mapping'], answer: 0, explain: 'L’e-réputation se surveille et se protège.' },
          ],
        },
        {
          id: 'mkg-t4-vf', type: 'vraifaux', title: 'Vrai / Faux rapide', icon: '⚡',
          questions: [
            { statement: 'La mercatique responsable renonce à toute rentabilité.', answer: false, explain: 'Faux : elle concilie rentabilité et responsabilité.' },
            { statement: 'L’obsolescence programmée est une dérive de la mercatique.', answer: true, explain: 'Vrai : elle pousse au renouvellement et à la surconsommation.' },
            { statement: 'Le RGPD encadre l’usage des données personnelles.', answer: true, explain: 'Vrai : transparence et consentement sont exigés.' },
            { statement: 'Les avis en ligne n’ont aucun impact sur les ventes.', answer: false, explain: 'Faux : la preuve sociale influence fortement la décision d’achat.' },
            { statement: 'Une mercatique responsable bien menée peut renforcer l’image de marque.', answer: true, explain: 'Vrai : elle crée confiance et fidélité, donc un avantage durable.' },
          ],
        },
        {
          id: 'mkg-t4-tri', type: 'tri', title: 'Tri — Dérive ou pratique responsable ?', icon: '🗂️',
          instruction: 'Classe chaque pratique.',
          categories: [{ id: 'derive', label: 'Dérive' }, { id: 'resp', label: 'Pratique responsable' }],
          items: [
            { text: 'Réduire volontairement la durée de vie d’un produit', cat: 'derive' },
            { text: 'Concevoir un produit réparable et recyclable', cat: 'resp' },
            { text: 'Se dire « vert » sans aucune preuve', cat: 'derive' },
            { text: 'Informer honnêtement sur l’origine des produits', cat: 'resp' },
            { text: 'Revendre les données clients sans consentement', cat: 'derive' },
            { text: 'Demander le consentement avant de collecter des données', cat: 'resp' },
          ],
        },
        {
          id: 'mkg-t4-assoc', type: 'association', title: 'Association — Notion ↔ définition', icon: '🔗',
          pairs: [
            { left: 'Greenwashing', right: 'Se dire écologique sans preuve' },
            { left: 'E-réputation', right: 'Image de la marque sur Internet' },
            { left: 'Éco-conception', right: 'Concevoir en limitant l’impact' },
            { left: 'RGPD', right: 'Loi qui protège les données personnelles' },
          ],
        },
      ],
    },
  ],
}
