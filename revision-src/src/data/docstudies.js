// ÉTUDES DE DOCUMENTS (Droit & Économie).
// Chaque entrée est un « jeu » de type `doc` : un dossier de documents suivi
// de 8 questions (QCM auto-corrigées ou questions à rédiger) qui s'appuient
// sur ces documents. Rattaché à un thème par son id, et fusionné dans les
// jeux du thème par data/index.js.
//
// Format : { id, type:'doc', title, icon, intro, documents:[{id,title,text,source}],
//            questions:[{doc, q, choices, answer, explain} | {doc, type:'redac', q, answer}] }

export const DOC_STUDIES = {
  // ======================================================================
  // ÉCONOMIE — Première · Thème 5 : Les marchés sont-ils concurrentiels ?
  // Le paradoxe de l'eau et du diamant (valeur, rareté, utilité marginale).
  // ======================================================================
  'p1-eco-t5': {
    id: 'p1-eco-t5-doc',
    type: 'doc',
    title: 'Étude de documents — Le paradoxe de l’eau et du diamant',
    icon: '📑',
    intro: 'Un grand classique de l’économie : pourquoi l’eau, vitale, coûte-t-elle si peu, alors que le diamant, inutile à la survie, coûte si cher ? Lis les documents puis réponds.',
    documents: [
      { id: 1, title: 'Document 1 — L’énigme d’Adam Smith', text: '« Rien n’est plus utile que l’eau : mais elle ne peut presque rien acheter ; à peine peut-on avoir quoi que ce soit en échange. Un diamant, au contraire, n’a presque aucune valeur d’usage ; mais on peut souvent obtenir en échange une très grande quantité d’autres biens. »', source: 'D’après A. Smith, Recherches sur la nature et les causes de la richesse des nations, 1776.' },
      { id: 2, title: 'Document 2 — Deux sortes de valeur', text: 'Les économistes distinguent deux valeurs pour un bien :\n• la **valeur d’usage** : l’utilité qu’il procure, ce à quoi il sert (l’eau permet de vivre) ;\n• la **valeur d’échange** : ce que l’on peut obtenir contre lui sur le marché, c’est-à-dire son **prix**.\nUn bien peut avoir une forte valeur d’usage et une faible valeur d’échange, et inversement.' },
      { id: 3, title: 'Document 3 — Le rôle de la rareté', text: 'Sur un marché, le prix résulte de la confrontation de l’**offre** et de la **demande**. L’eau est très **abondante** (offre élevée) : son prix est bas. Le diamant est **rare** (offre limitée) alors que beaucoup le désirent : son prix est élevé. La **rareté relative** d’un bien pèse donc fortement sur sa valeur d’échange.' },
      { id: 4, title: 'Document 4 — L’utilité marginale (résolution du paradoxe)', text: 'À partir de 1870, les économistes montrent que la valeur ne dépend pas de l’utilité totale d’un bien, mais de son **utilité marginale** : l’utilité de la **dernière unité** consommée. L’eau étant abondante, la dernière unité consommée (arroser, laver) apporte peu : son utilité marginale — donc son prix — est faible. Le diamant étant rare, chaque unité supplémentaire a une forte utilité marginale : son prix est élevé.' },
      { id: 5, title: 'Document 5 — Un verre d’eau dans le désert', text: 'Le contexte change tout. En ville, l’eau du robinet est quasi gratuite. En plein désert, un voyageur assoiffé paierait très cher un simple verre d’eau : l’eau y est **rare** et son **utilité marginale** immédiate est énorme. La valeur d’échange d’un même bien dépend donc de sa rareté dans une situation donnée.' },
    ],
    questions: [
      { doc: 1, q: 'Selon Adam Smith, l’eau possède surtout une grande…', choices: ['valeur d’usage', 'valeur d’échange', 'rareté', 'utilité marginale'], answer: 0, explain: 'L’eau est très utile (forte valeur d’usage) mais « n’achète presque rien » (faible valeur d’échange).' },
      { doc: 2, q: 'La valeur d’échange d’un bien correspond à…', choices: ['ce que l’on obtient contre lui : son prix', 'l’usage auquel il sert', 'sa durée de vie', 'son poids'], answer: 0, explain: 'Valeur d’échange = prix sur le marché ; valeur d’usage = utilité.' },
      { doc: 3, q: 'D’après le document 3, le prix élevé du diamant s’explique d’abord par…', choices: ['sa rareté (offre limitée, forte demande)', 'son utilité vitale', 'son abondance', 'son faible coût de transport'], answer: 0, explain: 'Le prix naît de l’offre et de la demande ; la rareté relative du diamant tire son prix vers le haut.' },
      { doc: 4, q: 'L’utilité marginale est l’utilité…', choices: ['de la dernière unité consommée', 'de toutes les unités additionnées', 'du premier acheteur', 'du producteur'], answer: 0, explain: 'C’est l’apport de la dernière unité consommée — la clé de la résolution du paradoxe.' },
      { doc: 4, q: 'Pourquoi l’eau a-t-elle une faible valeur d’échange selon le document 4 ?', choices: ['son abondance rend l’utilité marginale de la dernière unité faible', 'elle est inutile', 'personne n’en veut', 'elle est interdite à la vente'], answer: 0, explain: 'Abondante, la dernière unité consommée apporte peu : utilité marginale faible → prix bas.' },
      { doc: [1, 2], type: 'redac', q: 'Explique, avec tes mots, en quoi consiste le « paradoxe de l’eau et du diamant ».', answer: 'Le paradoxe oppose deux biens : l’eau, indispensable à la vie, a une très grande **valeur d’usage** mais une faible **valeur d’échange** (elle coûte presque rien) ; le diamant, quasi inutile à la survie, a une faible valeur d’usage mais une très forte valeur d’échange (il coûte cher). Autrement dit, l’utilité d’un bien ne détermine pas directement son prix.' },
      { doc: [3, 4], type: 'redac', q: 'Comment la rareté et l’utilité marginale permettent-elles de résoudre ce paradoxe ?', answer: 'Le prix dépend de la **rareté** (offre/demande) et de l’**utilité marginale** (utilité de la dernière unité). L’eau est abondante : l’utilité de la dernière unité consommée est faible, donc son prix est bas. Le diamant est rare : chaque unité a une forte utilité marginale, donc son prix est élevé. Ce n’est donc pas l’utilité totale, mais l’utilité de la dernière unité (liée à la rareté), qui fixe la valeur d’échange.' },
      { doc: 5, type: 'redac', q: 'En plein désert, un verre d’eau vaut très cher. Explique ce changement à l’aide des notions du dossier.', answer: 'Dans le désert, l’eau devient **rare** et le besoin est vital : l’**utilité marginale** du verre d’eau est énorme et l’offre très limitée. Sa **valeur d’échange** (son prix) grimpe donc fortement, alors qu’en ville, abondante, elle est quasi gratuite. Un même bien change de valeur selon sa rareté dans le contexte.' },
    ],
  },

  // ======================================================================
  // ÉCONOMIE — Terminale · Thème 6 : Le rôle de l'État
  // ======================================================================
  'eco-t6': {
    id: 'eco-t6-doc',
    type: 'doc',
    title: 'Étude de documents — L’intervention de l’État dans l’économie',
    icon: '📑',
    intro: 'Pourquoi et comment l’État intervient-il quand le marché ne suffit pas ? Lis les documents puis réponds.',
    documents: [
      { id: 1, title: 'Document 1 — Les fonctions de l’État (R. Musgrave)', text: 'L’économiste Richard Musgrave distingue trois fonctions de l’État :\n• **allocation** : produire ce que le marché ne fournit pas (biens collectifs comme l’éclairage public, la défense) ;\n• **redistribution** : réduire les inégalités par les prélèvements et les prestations ;\n• **stabilisation** : agir sur l’activité (croissance, emploi, prix).' },
      { id: 2, title: 'Document 2 — Les défaillances du marché', text: 'Le marché ne règle pas tout. On parle de **défaillances** : les **externalités** (une usine qui pollue fait subir un coût à autrui), les **biens collectifs** (non rivaux, non excluables), les **asymétries d’information**, ou encore les situations de **monopole**. L’État intervient alors pour corriger ces défaillances.' },
      { id: 3, title: 'Document 3 — Politique conjoncturelle', text: 'À court terme, l’État mène une **politique conjoncturelle** :\n• la **politique budgétaire** (dépenses publiques, impôts) ;\n• la **politique monétaire** (taux d’intérêt, pilotée par la banque centrale).\nUne politique de **relance** stimule la demande (hausse des dépenses, baisse des taux) ; une politique de **rigueur** freine l’activité pour lutter contre l’inflation ou les déficits.' },
      { id: 4, title: 'Document 4 — Politique structurelle', text: 'À long terme, la **politique structurelle** transforme les structures de l’économie : investir dans l’éducation, la recherche, les infrastructures, soutenir l’innovation, encadrer la concurrence. Objectif : améliorer la croissance potentielle et la compétitivité du pays.' },
    ],
    questions: [
      { doc: 1, q: 'Selon Musgrave, produire des biens collectifs (défense, éclairage public) relève de la fonction d’…', choices: ['allocation', 'redistribution', 'stabilisation', 'spéculation'], answer: 0, explain: 'La fonction d’allocation fournit ce que le marché ne produit pas.' },
      { doc: 1, q: 'Réduire les inégalités par impôts et prestations, c’est la fonction de…', choices: ['redistribution', 'allocation', 'stabilisation', 'production'], answer: 0, explain: 'La redistribution corrige la répartition primaire des revenus.' },
      { doc: 2, q: 'Une usine qui pollue et fait subir un coût aux riverains est un exemple d’…', choices: ['externalité (négative)', 'bien collectif', 'monopole', 'inflation'], answer: 0, explain: 'Une externalité est un effet, ici négatif, non pris en compte par le marché.' },
      { doc: 3, q: 'La politique monétaire est pilotée par…', choices: ['la banque centrale', 'les entreprises', 'les ménages', 'les syndicats'], answer: 0, explain: 'La banque centrale agit sur les taux d’intérêt ; le budget relève de l’État.' },
      { doc: 3, q: 'Baisser les taux d’intérêt et augmenter les dépenses publiques, c’est une politique de…', choices: ['relance', 'rigueur', 'austérité', 'privatisation'], answer: 0, explain: 'La relance stimule la demande à court terme.' },
      { doc: [1, 2], type: 'redac', q: 'À l’aide des documents 1 et 2, explique pourquoi l’État intervient dans l’économie.', answer: 'L’État intervient parce que le marché connaît des **défaillances** (externalités, biens collectifs, asymétries d’information, monopoles) qu’il ne corrige pas seul. Selon Musgrave, il remplit alors trois fonctions : **allouer** les ressources (produire les biens collectifs), **redistribuer** les revenus pour réduire les inégalités, et **stabiliser** l’activité économique.' },
      { doc: [3, 4], type: 'redac', q: 'Distingue politique conjoncturelle et politique structurelle en donnant un exemple de chacune.', answer: 'La politique **conjoncturelle** agit à **court terme** sur l’activité : ex. une relance budgétaire (hausse des dépenses) ou une baisse des taux d’intérêt. La politique **structurelle** agit à **long terme** sur les structures de l’économie : ex. investir dans l’éducation, la recherche ou les infrastructures pour élever la croissance potentielle.' },
      { doc: 2, type: 'redac', q: 'Qu’est-ce qu’un « bien collectif » ? Donne un exemple et explique pourquoi le marché ne le produit pas spontanément.', answer: 'Un **bien collectif** est **non rival** (l’usage par l’un n’empêche pas celui de l’autre) et **non excluable** (on ne peut pas empêcher quelqu’un d’en profiter), par exemple l’éclairage public ou la défense nationale. Comme personne ne peut être exclu, chacun est tenté de profiter du bien sans payer : le marché ne le produit pas spontanément, c’est donc à l’État de le financer.' },
    ],
  },

  // ======================================================================
  // ÉCONOMIE — Terminale · Thème 7 : Emploi et chômage
  // ======================================================================
  'eco-t7': {
    id: 'eco-t7-doc',
    type: 'doc',
    title: 'Étude de documents — Emploi, chômage et politiques de l’emploi',
    icon: '📑',
    intro: 'Comment mesure-t-on le chômage et comment le combat-on ? Lis les documents puis réponds.',
    documents: [
      { id: 1, title: 'Document 1 — Qui est chômeur ? (définition du BIT)', text: 'Selon le Bureau international du travail (BIT), est **chômeur** toute personne qui, simultanément : est **sans emploi**, est **disponible** pour travailler, et **recherche activement** un emploi. Le **taux de chômage** = nombre de chômeurs / population active (actifs occupés + chômeurs).' },
      { id: 2, title: 'Document 2 — Différents types de chômage', text: 'On distingue plusieurs formes :\n• **conjoncturel** : lié au ralentissement de l’activité (baisse de la demande) ;\n• **structurel** : lié à l’inadéquation entre les qualifications offertes et demandées, ou au fonctionnement du marché du travail ;\n• **frictionnel** : le temps normal de transition entre deux emplois.' },
      { id: 3, title: 'Document 3 — Agir sur la demande de travail', text: 'Pour réduire le chômage, l’État peut agir sur le **coût du travail** (allègements de cotisations pour inciter les entreprises à embaucher), soutenir l’**activité** (politique de relance), ou créer des **emplois aidés**. Ces politiques visent à augmenter la **demande de travail** des entreprises.' },
      { id: 4, title: 'Document 4 — Agir sur l’offre de travail et l’appariement', text: 'D’autres politiques améliorent l’**employabilité** des actifs : **formation professionnelle**, accompagnement des demandeurs d’emploi, aide à la mobilité. Elles cherchent à mieux **apparier** l’offre et la demande de travail et à réduire le chômage structurel.' },
    ],
    questions: [
      { doc: 1, q: 'Au sens du BIT, un chômeur doit à la fois être sans emploi, disponible et…', choices: ['rechercher activement un emploi', 'avoir plus de 50 ans', 'toucher une allocation', 'être diplômé'], answer: 0, explain: 'Les trois critères du BIT : sans emploi, disponible, en recherche active.' },
      { doc: 1, q: 'Le taux de chômage se calcule en rapportant les chômeurs à…', choices: ['la population active', 'la population totale', 'les seuls salariés', 'les retraités'], answer: 0, explain: 'Taux = chômeurs / population active (occupés + chômeurs).' },
      { doc: 2, q: 'Un chômage dû à un ralentissement de l’activité est qualifié de…', choices: ['conjoncturel', 'structurel', 'frictionnel', 'volontaire'], answer: 0, explain: 'Le chômage conjoncturel suit la baisse de la demande.' },
      { doc: 2, q: 'L’inadéquation entre qualifications offertes et demandées relève d’un chômage…', choices: ['structurel', 'conjoncturel', 'frictionnel', 'saisonnier'], answer: 0, explain: 'Le chômage structurel tient au fonctionnement du marché du travail.' },
      { doc: 3, q: 'Alléger les cotisations sociales sur les bas salaires vise à…', choices: ['réduire le coût du travail pour favoriser l’embauche', 'augmenter les impôts', 'réduire l’offre de travail', 'fermer des entreprises'], answer: 0, explain: 'On agit sur le coût du travail pour stimuler la demande de travail.' },
      { doc: 2, type: 'redac', q: 'Distingue le chômage conjoncturel du chômage structurel.', answer: 'Le chômage **conjoncturel** est lié à la **baisse temporaire de l’activité** (moindre demande adressée aux entreprises) : il recule quand la croissance repart. Le chômage **structurel** tient au **fonctionnement durable** du marché du travail — inadéquation entre les qualifications, rigidités, évolutions technologiques — et ne disparaît pas avec une simple reprise.' },
      { doc: [3, 4], type: 'redac', q: 'Présente deux types de politiques de l’emploi en expliquant sur quoi chacune agit.', answer: 'Une première catégorie agit sur la **demande de travail** des entreprises : baisse du **coût du travail** (allègements de cotisations), soutien de l’activité, emplois aidés. Une seconde agit sur l’**offre de travail** et l’**appariement** : **formation professionnelle**, accompagnement des demandeurs d’emploi, aide à la mobilité, pour améliorer l’employabilité et réduire le chômage structurel.' },
      { doc: 1, type: 'redac', q: 'Un étudiant qui cherche un stage mais n’est pas disponible avant six mois est-il chômeur au sens du BIT ? Justifie.', answer: 'Non : au sens du BIT, il faut être **sans emploi**, **en recherche active** ET **disponible immédiatement** (sous deux semaines). Comme l’étudiant n’est pas disponible avant six mois, l’un des trois critères manque : il n’est pas comptabilisé comme chômeur au sens du BIT.' },
    ],
  },

  // ======================================================================
  // ÉCONOMIE — Terminale · Thème 8 : Le commerce international
  // ======================================================================
  'eco-t8': {
    id: 'eco-t8-doc',
    type: 'doc',
    title: 'Étude de documents — Les échanges internationaux',
    icon: '📑',
    intro: 'Pourquoi les pays commercent-ils ? Quels sont les effets du libre-échange ? Lis les documents puis réponds.',
    documents: [
      { id: 1, title: 'Document 1 — L’avantage comparatif (D. Ricardo)', text: 'David Ricardo montre au XIXᵉ siècle qu’un pays a intérêt à se **spécialiser** dans la production pour laquelle il est **relativement le plus efficace** (son **avantage comparatif**), puis à échanger. Même un pays désavantagé partout gagne à se spécialiser là où son désavantage est le plus faible.' },
      { id: 2, title: 'Document 2 — Libre-échange et protectionnisme', text: 'Le **libre-échange** supprime les obstacles aux échanges (droits de douane, quotas) : il élargit les débouchés, fait baisser les prix et stimule la concurrence. Le **protectionnisme** protège au contraire les producteurs nationaux par des **droits de douane**, des **quotas** ou des normes, notamment pour défendre une industrie naissante ou des emplois.' },
      { id: 3, title: 'Document 3 — La firme multinationale (FMN)', text: 'Une **firme multinationale** implante des unités de production dans plusieurs pays. Elle organise une **division internationale du travail** : conception ici, fabrication là où les coûts sont faibles. Ces choix expliquent une part importante du commerce mondial (échanges intra-firmes) et les **délocalisations**.' },
      { id: 4, title: 'Document 4 — Gagnants et perdants', text: 'Le libre-échange profite globalement (prix plus bas, choix élargi, spécialisation), mais fait des **perdants** : certaines industries et emplois disparaissent face à la concurrence. D’où des politiques d’accompagnement (formation, reconversion) et des débats sur un commerce plus **régulé** et plus **durable**.' },
    ],
    questions: [
      { doc: 1, q: 'Selon Ricardo, un pays a intérêt à se spécialiser là où il détient…', choices: ['un avantage comparatif', 'le plus de population', 'le climat le plus chaud', 'le moins de ressources'], answer: 0, explain: 'L’avantage comparatif : se spécialiser là où l’on est relativement le plus efficace.' },
      { doc: 2, q: 'Un droit de douane est un instrument…', choices: ['protectionniste', 'de libre-échange', 'monétaire', 'social'], answer: 0, explain: 'Les droits de douane et quotas relèvent du protectionnisme.' },
      { doc: 2, q: 'Le libre-échange tend, pour les consommateurs, à…', choices: ['faire baisser les prix et élargir le choix', 'augmenter tous les prix', 'supprimer la concurrence', 'interdire les importations'], answer: 0, explain: 'Ouverture = plus de concurrence, prix plus bas, choix élargi.' },
      { doc: 3, q: 'Une FMN qui répartit ses activités entre plusieurs pays organise…', choices: ['une division internationale du travail', 'un monopole d’État', 'une autarcie', 'un quota'], answer: 0, explain: 'La DIT : chaque étape est réalisée là où c’est le plus avantageux.' },
      { doc: 4, q: 'Le document 4 rappelle que le libre-échange…', choices: ['fait aussi des perdants (emplois, industries)', 'ne profite à personne', 'supprime tout chômage', 'n’a aucun effet'], answer: 0, explain: 'Gains globaux mais perdants sectoriels : d’où les politiques d’accompagnement.' },
      { doc: 1, type: 'redac', q: 'Explique la théorie de l’avantage comparatif avec tes mots.', answer: 'Un pays a intérêt à se **spécialiser** dans la production où il est **relativement le plus efficace** (ou le moins désavantagé), puis à **échanger** le reste. Même un pays moins performant partout gagne à se concentrer là où son désavantage est le plus faible : la spécialisation et l’échange augmentent la production totale et profitent à tous les partenaires.' },
      { doc: 2, type: 'redac', q: 'Oppose libre-échange et protectionnisme en donnant un argument pour chacun.', answer: 'Le **libre-échange** supprime les barrières : il élargit les débouchés, fait baisser les prix et stimule la concurrence et l’innovation. Le **protectionnisme** (droits de douane, quotas, normes) protège les producteurs nationaux : il peut défendre une **industrie naissante** ou préserver des **emplois** menacés par la concurrence étrangère.' },
      { doc: [3, 4], type: 'redac', q: 'À l’aide des documents 3 et 4, montre que la mondialisation a des effets contrastés.', answer: 'Les **FMN** organisent une division internationale du travail et des **délocalisations** qui baissent les coûts et développent le commerce (doc 3). Mais ces choix font des **perdants** : industries et emplois disparaissent dans certains territoires face à la concurrence (doc 4). La mondialisation crée donc des gains globaux (prix, choix) tout en produisant des pertes locales, ce qui appelle des politiques d’accompagnement.' },
    ],
  },

  // ======================================================================
  // ÉCONOMIE — Terminale · Thème 9 : Croissance et développement durable
  // ======================================================================
  'eco-t9': {
    id: 'eco-t9-doc',
    type: 'doc',
    title: 'Étude de documents — Croissance et développement durable',
    icon: '📑',
    intro: 'La croissance peut-elle durer sans épuiser la planète ? Lis les documents puis réponds.',
    documents: [
      { id: 1, title: 'Document 1 — Mesurer la croissance : le PIB', text: 'La **croissance économique** est l’augmentation durable de la production, mesurée par le **PIB** (produit intérieur brut = somme des valeurs ajoutées). Le **taux de croissance** compare le PIB d’une année à l’autre. Le PIB par habitant sert d’indicateur de niveau de vie.' },
      { id: 2, title: 'Document 2 — Les limites du PIB', text: 'Le PIB ne mesure ni le **bien-être**, ni les **inégalités**, ni la **qualité de l’environnement**. Il ignore le travail bénévole et domestique et compte parfois positivement des dépenses « défensives » (réparer une pollution). D’autres indicateurs le complètent : l’**IDH** (santé, éducation, revenu) ou l’**empreinte écologique**.' },
      { id: 3, title: 'Document 3 — Le développement durable', text: 'Le **développement durable** répond « aux besoins du présent sans compromettre la capacité des générations futures à répondre aux leurs » (rapport Brundtland, 1987). Il repose sur trois piliers : **économique**, **social** et **environnemental**.' },
      { id: 4, title: 'Document 4 — Croissance et environnement', text: 'La croissance s’accompagne d’**externalités négatives** : pollution, épuisement des ressources, émissions de gaz à effet de serre. Pour les limiter, les pouvoirs publics utilisent la **réglementation**, la **taxation** (taxe carbone), ou des **marchés de quotas d’émission**. On parle de croissance « **verte** » lorsqu’elle intègre ces contraintes.' },
    ],
    questions: [
      { doc: 1, q: 'Le PIB additionne principalement…', choices: ['les valeurs ajoutées produites', 'les salaires seulement', 'les importations', 'les impôts'], answer: 0, explain: 'PIB = somme des valeurs ajoutées.' },
      { doc: 2, q: 'Parmi les limites du PIB citées, il ignore…', choices: ['la qualité de l’environnement et les inégalités', 'la production des entreprises', 'les exportations', 'la consommation'], answer: 0, explain: 'Le PIB ne dit rien du bien-être, des inégalités ni de l’environnement.' },
      { doc: 2, q: 'L’IDH prend notamment en compte…', choices: ['la santé, l’éducation et le revenu', 'le seul PIB', 'la Bourse', 'la dette publique'], answer: 0, explain: 'L’IDH combine espérance de vie, éducation et revenu.' },
      { doc: 3, q: 'La définition du développement durable (Brundtland) insiste sur…', choices: ['les besoins des générations futures', 'la seule croissance du PIB', 'la baisse des salaires', 'la fin du commerce'], answer: 0, explain: '« Sans compromettre la capacité des générations futures ».' },
      { doc: 4, q: 'La taxe carbone est un instrument qui vise à…', choices: ['réduire les émissions de gaz à effet de serre', 'augmenter la production polluante', 'supprimer l’impôt sur le revenu', 'financer les exportations'], answer: 0, explain: 'Elle renchérit les activités émettrices pour les décourager.' },
      { doc: 2, type: 'redac', q: 'Pourquoi le PIB est-il un indicateur insuffisant du bien-être d’un pays ?', answer: 'Le PIB mesure la **production**, pas le **bien-être**. Il ignore les **inégalités** de revenus, la **qualité de l’environnement**, le travail **bénévole et domestique**, et peut compter positivement des dépenses « défensives » (réparer une pollution). Il faut donc le compléter par d’autres indicateurs comme l’**IDH** ou l’**empreinte écologique**.' },
      { doc: 3, type: 'redac', q: 'Qu’est-ce que le développement durable ? Cite ses trois piliers.', answer: 'Le développement durable répond **aux besoins du présent sans compromettre ceux des générations futures**. Il repose sur trois piliers : **économique** (une activité viable), **social** (équité, satisfaction des besoins) et **environnemental** (préserver les ressources et les écosystèmes).' },
      { doc: 4, type: 'redac', q: 'Comment les pouvoirs publics peuvent-ils concilier croissance et protection de l’environnement ?', answer: 'Ils peuvent **réglementer** (normes, interdictions), **taxer** les activités polluantes (taxe carbone) pour intégrer le coût des **externalités négatives**, ou créer des **marchés de quotas d’émission**. En orientant ainsi les comportements vers des productions moins polluantes, ils cherchent une croissance « **verte** », compatible avec le développement durable.' },
    ],
  },

  // ======================================================================
  // DROIT — Terminale · Thème 5 : Le contrat
  // ======================================================================
  'droit-t5': {
    id: 'droit-t5-doc',
    type: 'doc',
    title: 'Étude de documents — La formation et l’exécution du contrat',
    icon: '📑',
    intro: 'À partir d’un cas et de textes de loi, applique les règles du contrat (méthode du syllogisme). Lis les documents puis réponds.',
    documents: [
      { id: 1, title: 'Document 1 — Les conditions de validité (Code civil)', text: 'Article 1128 du Code civil : « Sont nécessaires à la validité d’un contrat : 1° le consentement des parties ; 2° leur capacité de contracter ; 3° un contenu licite et certain. » Le consentement doit être libre et éclairé, c’est-à-dire exempt de vices (erreur, dol, violence).' },
      { id: 2, title: 'Document 2 — La force obligatoire', text: 'Article 1103 du Code civil : « Les contrats légalement formés tiennent lieu de loi à ceux qui les ont faits. » Une fois valablement conclu, le contrat s’impose aux parties : chacune doit exécuter ses obligations de bonne foi.' },
      { id: 3, title: 'Document 3 — Le dol (tromperie)', text: 'Le **dol** est le fait, pour une partie, d’obtenir le consentement de l’autre par des **manœuvres, un mensonge ou la dissimulation** d’une information déterminante. Le dol est un **vice du consentement** : il peut entraîner la **nullité** du contrat et l’octroi de dommages et intérêts.' },
      { id: 4, title: 'Document 4 — La situation de Marc', text: 'Marc, majeur, achète une voiture d’occasion à un garage professionnel. Le vendeur affirme par écrit que le véhicule « n’a jamais eu d’accident ». Après l’achat, Marc découvre que la voiture a en réalité été gravement accidentée, ce que le garagiste savait et lui a caché.' },
    ],
    questions: [
      { doc: 1, q: 'D’après l’article 1128, quelle condition n’est PAS exigée pour la validité d’un contrat ?', choices: ['la présence obligatoire d’un notaire', 'le consentement', 'la capacité', 'un contenu licite et certain'], answer: 0, explain: 'Les trois conditions sont consentement, capacité, contenu licite et certain — pas un notaire.' },
      { doc: 2, q: '« Les contrats légalement formés tiennent lieu de loi » exprime…', choices: ['la force obligatoire du contrat', 'la nullité', 'la liberté de ne pas exécuter', 'l’effet relatif'], answer: 0, explain: 'Art. 1103 : force obligatoire — le contrat s’impose aux parties.' },
      { doc: 3, q: 'Le dol se définit comme…', choices: ['une tromperie déterminante du consentement', 'une erreur involontaire du vendeur', 'un retard de paiement', 'une clause abusive'], answer: 0, explain: 'Dol = manœuvre, mensonge ou réticence dolosive.' },
      { doc: [3, 4], q: 'Dans la situation de Marc, le comportement du garagiste caractérise…', choices: ['un dol (dissimulation d’une information déterminante)', 'une simple erreur de Marc', 'une violence', 'un cas de force majeure'], answer: 0, explain: 'Le garagiste a sciemment caché l’accident : c’est un dol.' },
      { doc: [3, 4], q: 'Quelle sanction Marc peut-il demander ?', choices: ['la nullité du contrat et des dommages et intérêts', 'une peine de prison pour le garagiste', 'une amende pénale automatique', 'rien, la vente est définitive'], answer: 0, explain: 'Le dol, vice du consentement, permet la nullité + dommages et intérêts.' },
      { doc: 1, type: 'redac', q: 'Rappelle les trois conditions de validité d’un contrat (art. 1128) et explique brièvement chacune.', answer: 'Les trois conditions sont : le **consentement** des parties (libre et éclairé, sans vice) ; la **capacité** de contracter (être juridiquement apte à s’engager, ex. majeur non protégé) ; et un **contenu licite et certain** (un objet légal et déterminé). Si l’une manque, le contrat peut être annulé.' },
      { doc: [3, 4], type: 'redac', q: 'En raisonnant par syllogisme, montre que Marc peut obtenir l’annulation de la vente.', answer: '**Règle (majeure)** : le dol — tromperie déterminante du consentement — est un vice qui entraîne la nullité du contrat (art. 1128, doc 3). **Faits (mineure)** : le garagiste a affirmé faussement, par écrit, que la voiture n’avait pas eu d’accident, alors qu’il savait le contraire ; cette information était déterminante pour Marc (doc 4). **Conclusion** : le dol est caractérisé ; Marc peut demander la **nullité** de la vente et des **dommages et intérêts**.' },
      { doc: 2, type: 'redac', q: 'Que signifie la « force obligatoire » du contrat ? Quelle en est la limite dans le cas de Marc ?', answer: 'La **force obligatoire** (art. 1103) signifie que le contrat valablement formé s’impose aux parties comme une loi : chacune doit exécuter ses obligations de bonne foi. Mais elle suppose un contrat **valable** : ici, le consentement de Marc a été vicié par le dol, donc le contrat n’est pas valablement formé et peut être annulé. La force obligatoire ne protège pas un contrat obtenu par tromperie.' },
    ],
  },

  // ======================================================================
  // DROIT — Terminale · Thème 6 : La responsabilité
  // ======================================================================
  'droit-t6': {
    id: 'droit-t6-doc',
    type: 'doc',
    title: 'Étude de documents — La responsabilité civile',
    icon: '📑',
    intro: 'À partir d’un cas et des règles de la responsabilité, identifie les conditions de la réparation. Lis les documents puis réponds.',
    documents: [
      { id: 1, title: 'Document 1 — Réparer ou sanctionner', text: 'La **responsabilité civile** a pour but de **réparer** le dommage causé à autrui (versement de dommages et intérêts). La **responsabilité pénale** a pour but de **sanctionner** l’auteur d’une **infraction** (peine), au nom de la société. Un même fait peut engager les deux.' },
      { id: 2, title: 'Document 2 — Les trois conditions', text: 'La responsabilité civile suppose la réunion de trois éléments : un **fait générateur** (une faute, le fait d’une chose…), un **dommage** (ou préjudice) et un **lien de causalité** entre les deux. Le dommage réparable doit être **certain, direct et personnel**.' },
      { id: 3, title: 'Document 3 — Les moyens d’exonération', text: 'Le responsable peut s’exonérer, totalement ou partiellement, en prouvant une **cause étrangère** : la **force majeure** (événement imprévisible, irrésistible et extérieur), le **fait d’un tiers** ou la **faute de la victime**.' },
      { id: 4, title: 'Document 4 — La chute au supermarché', text: 'Un supermarché laisse le sol d’un rayon mouillé, sans aucune signalisation. Une cliente glisse, chute et se fracture le poignet ; elle doit être opérée et arrêtée trois semaines. Aucune consigne de sécurité n’avait été affichée.' },
    ],
    questions: [
      { doc: 1, q: 'La responsabilité civile vise avant tout à…', choices: ['réparer le dommage de la victime', 'emprisonner l’auteur', 'percevoir un impôt', 'annuler un contrat'], answer: 0, explain: 'La civile répare ; la pénale sanctionne.' },
      { doc: 2, q: 'Les trois conditions de la responsabilité civile sont…', choices: ['fait générateur, dommage, lien de causalité', 'faute, amende, peine', 'offre, acceptation, prix', 'salaire, contrat, subordination'], answer: 0, explain: 'Il faut un fait générateur, un dommage et un lien de causalité.' },
      { doc: 2, q: 'Pour être réparable, le dommage doit notamment être…', choices: ['certain, direct et personnel', 'ancien et oublié', 'ressenti par tous', 'sans gravité'], answer: 0, explain: 'Caractères du dommage réparable : certain, direct, personnel.' },
      { doc: 3, q: 'La force majeure est un événement…', choices: ['imprévisible, irrésistible et extérieur', 'prévu par le contrat', 'causé volontairement', 'sans conséquence'], answer: 0, explain: 'C’est une cause étrangère exonératoire.' },
      { doc: [2, 4], q: 'Dans le cas du supermarché, le fait générateur est…', choices: ['le sol mouillé laissé sans signalisation', 'la fracture du poignet', 'l’opération', 'l’arrêt de travail'], answer: 0, explain: 'Le fait générateur (la faute) est l’absence de signalisation ; la fracture est le dommage.' },
      { doc: [2, 4], type: 'redac', q: 'Montre que les trois conditions de la responsabilité civile sont réunies dans le cas de la cliente.', answer: '**Fait générateur** : le supermarché a laissé le sol mouillé sans signalisation (une faute de négligence). **Dommage** : la cliente subit une fracture du poignet, une opération et trois semaines d’arrêt (préjudice corporel certain, direct et personnel). **Lien de causalité** : la chute — et donc le dommage — résulte directement de l’absence de signalisation. Les trois conditions étant réunies, la cliente peut être **indemnisée**.' },
      { doc: 1, type: 'redac', q: 'Distingue responsabilité civile et responsabilité pénale.', answer: 'La responsabilité **civile** vise à **réparer** le dommage subi par la victime (dommages et intérêts), au profit de celle-ci. La responsabilité **pénale** vise à **sanctionner** l’auteur d’une **infraction** par une peine, au nom de la société. Un même fait (ex. une agression) peut engager les deux : une peine ET des dommages et intérêts.' },
      { doc: 3, type: 'redac', q: 'Le supermarché pourrait-il s’exonérer en invoquant la force majeure ? Justifie.', answer: 'Difficilement. La **force majeure** suppose un événement **imprévisible, irrésistible et extérieur**. Or un sol mouillé dans un magasin est un risque **prévisible** et **évitable** (il suffisait de signaler ou de nettoyer) : il n’est ni extérieur ni irrésistible. Le supermarché ne peut donc pas s’exonérer par la force majeure ; il pourrait tout au plus invoquer une éventuelle **faute de la victime** (ex. course imprudente), ce qui n’apparaît pas ici.' },
    ],
  },

  // ======================================================================
  // DROIT — Terminale · Thème 7 : Le travail salarié
  // ======================================================================
  'droit-t7': {
    id: 'droit-t7-doc',
    type: 'doc',
    title: 'Étude de documents — Le contrat de travail et sa rupture',
    icon: '📑',
    intro: 'Qualifier une relation de travail et vérifier la validité d’un licenciement. Lis les documents puis réponds.',
    documents: [
      { id: 1, title: 'Document 1 — Le lien de subordination', text: 'Le **contrat de travail** existe dès qu’une personne fournit une **prestation de travail** contre une **rémunération**, sous l’**autorité** d’un employeur. Ce **lien de subordination** — pouvoir de donner des ordres, d’en contrôler l’exécution et de sanctionner — est le **critère déterminant** du contrat de travail.' },
      { id: 2, title: 'Document 2 — CDI et CDD', text: 'Le **CDI** (contrat à durée indéterminée) est la forme **normale** de la relation de travail. Le **CDD** est l’exception : il doit être **établi par écrit** et reposer sur un **cas de recours** prévu par la loi (remplacement, accroissement temporaire d’activité…). À défaut, il peut être **requalifié en CDI**.' },
      { id: 3, title: 'Document 3 — Le licenciement', text: 'Le licenciement à l’initiative de l’employeur n’est valable que s’il repose sur une **cause réelle et sérieuse** (objective et vérifiable) et respecte une **procédure** (entretien préalable, notification). À défaut, il est **abusif** et le juge peut accorder des indemnités au salarié.' },
      { id: 4, title: 'Document 4 — Le cas de Karim', text: 'Karim travaille depuis deux ans pour une entreprise, avec des horaires imposés, un salaire mensuel et sous les ordres d’un responsable, mais sans contrat écrit. Un matin, son responsable lui annonce oralement qu’il est licencié « parce qu’il ne l’apprécie pas », sans entretien préalable.' },
    ],
    questions: [
      { doc: 1, q: 'Le critère déterminant du contrat de travail est…', choices: ['le lien de subordination', 'le lieu de travail', 'la durée du contrat', 'le montant du salaire'], answer: 0, explain: 'C’est la subordination juridique (ordres, contrôle, sanction).' },
      { doc: 2, q: 'La forme normale de la relation de travail est…', choices: ['le CDI', 'le CDD', 'l’intérim', 'le stage'], answer: 0, explain: 'Le CDI est le droit commun ; le CDD est l’exception écrite et motivée.' },
      { doc: 2, q: 'Un CDD sans écrit ni cas de recours valable peut être…', choices: ['requalifié en CDI', 'annulé sans conséquence', 'transformé en stage', 'prolongé automatiquement'], answer: 0, explain: 'La requalification en CDI sanctionne l’irrégularité.' },
      { doc: [1, 4], q: 'La relation de Karim, malgré l’absence d’écrit, est…', choices: ['un contrat de travail (subordination présente)', 'du bénévolat', 'un contrat commercial', 'nulle faute d’écrit'], answer: 0, explain: 'Prestation + rémunération + subordination = contrat de travail (un CDI, faute d’écrit fixant un terme).' },
      { doc: [3, 4], q: 'Le licenciement de Karim est irrégulier car…', choices: ['il n’a ni cause réelle et sérieuse ni procédure respectée', 'l’employeur a le droit de licencier sans motif', 'Karim a démissionné', 'le CDD est arrivé à terme'], answer: 0, explain: '« Ne pas l’apprécier » n’est pas une cause réelle et sérieuse ; la procédure n’a pas été suivie.' },
      { doc: [1, 4], type: 'redac', q: 'Qualifie juridiquement la relation de travail de Karim malgré l’absence de contrat écrit.', answer: 'Karim fournit une **prestation de travail** (il travaille), reçoit une **rémunération** (salaire mensuel) et agit sous l’**autorité** d’un responsable qui lui impose des horaires et lui donne des ordres : le **lien de subordination** est caractérisé. La relation est donc un **contrat de travail**, présumé à durée indéterminée (**CDI**) faute d’écrit fixant un terme. Karim bénéficie de toute la protection du droit du travail.' },
      { doc: [3, 4], type: 'redac', q: 'Le licenciement de Karim est-il valable ? Justifie en droit.', answer: 'Non. Un licenciement n’est valable que s’il repose sur une **cause réelle et sérieuse** (objective et vérifiable) et respecte une **procédure** (entretien préalable, notification écrite). Or le motif « je ne l’apprécie pas » n’est **ni réel ni sérieux**, et aucune procédure n’a été suivie (annonce orale, sans entretien). Le licenciement est donc **abusif** : saisi, le conseil de prud’hommes peut condamner l’employeur à verser des indemnités.' },
      { doc: 3, type: 'redac', q: 'Qu’est-ce qu’une « cause réelle et sérieuse » de licenciement ?', answer: 'C’est un motif à la fois **réel** (existant, objectif, vérifiable, et non un prétexte) et **sérieux** (suffisamment important pour justifier la rupture). Il peut être **personnel** (lié au salarié : faute, insuffisance) ou **économique** (lié à l’entreprise). Le juge en contrôle l’existence : à défaut, le licenciement est abusif.' },
    ],
  },

  // ======================================================================
  // DROIT — Terminale · Thème 8 : Entreprendre
  // ======================================================================
  'droit-t8': {
    id: 'droit-t8-doc',
    type: 'doc',
    title: 'Étude de documents — Choisir sa structure et respecter la concurrence',
    icon: '📑',
    intro: 'Comparer entreprise individuelle et société, et repérer une concurrence déloyale. Lis les documents puis réponds.',
    documents: [
      { id: 1, title: 'Document 1 — L’entreprise individuelle', text: 'Dans l’**entreprise individuelle**, il n’y a pas de personne morale nouvelle. Par le **principe d’unicité du patrimoine**, l’entrepreneur répond des dettes de son activité sur **l’ensemble de son patrimoine personnel**. Des protections existent : **déclaration d’insaisissabilité**, **patrimoine d’affectation**.' },
      { id: 2, title: 'Document 2 — La société (art. 1832)', text: 'Article 1832 du Code civil : la société naît d’un **contrat** par lequel des associés « affectent à une entreprise commune des biens ou leur industrie en vue de partager le bénéfice ». Trois éléments : des **apports**, l’**affectio societatis** (volonté de collaborer) et le partage des **bénéfices**. La société est une **personne morale** dont la responsabilité des associés est en principe **limitée aux apports**.' },
      { id: 3, title: 'Document 3 — La concurrence déloyale', text: 'La **libre concurrence** est encadrée. La **concurrence déloyale** (dénigrement, imitation créant la confusion, parasitisme, désorganisation) engage la **responsabilité civile** de son auteur : la victime doit prouver un **fait générateur** (le comportement déloyal), un **préjudice** et un **lien de causalité**.' },
      { id: 4, title: 'Document 4 — Deux situations', text: 'A) Léa ouvre seule un salon de coiffure et emprunte 40 000 €. Elle hésite entre l’entreprise individuelle et la création d’une EURL.\nB) Un concurrent de Léa diffuse de fausses rumeurs affirmant que son salon « ne respecte pas l’hygiène » et copie son enseigne pour créer la confusion.' },
    ],
    questions: [
      { doc: 1, q: 'Dans l’entreprise individuelle, l’entrepreneur répond des dettes…', choices: ['sur l’ensemble de son patrimoine personnel', 'seulement sur ses apports', 'jamais', 'à la place de l’État'], answer: 0, explain: 'Principe d’unicité du patrimoine.' },
      { doc: 2, q: 'Selon l’article 1832, la société suppose des apports, le partage des bénéfices et…', choices: ['l’affectio societatis', 'un lien de subordination', 'un brevet', 'une clause pénale'], answer: 0, explain: 'L’affectio societatis = volonté commune de collaborer.' },
      { doc: 2, q: 'Dans une société, la responsabilité des associés est en principe…', choices: ['limitée à leurs apports', 'illimitée sur tout leur patrimoine', 'inexistante', 'reportée sur les clients'], answer: 0, explain: 'La personnalité morale limite en principe la responsabilité aux apports.' },
      { doc: 3, q: 'La concurrence déloyale se sanctionne par…', choices: ['une action en responsabilité civile', 'une peine de prison automatique', 'la dissolution de l’État', 'un brevet'], answer: 0, explain: 'Il faut prouver fait générateur + préjudice + lien de causalité.' },
      { doc: [3, 4], q: 'Diffuser de fausses rumeurs sur l’hygiène d’un concurrent constitue…', choices: ['un dénigrement (concurrence déloyale)', 'une pratique loyale', 'une entente légale', 'un apport en société'], answer: 0, explain: 'Le dénigrement est un acte de concurrence déloyale.' },
      { doc: [1, 2, 4], type: 'redac', q: 'Léa hésite entre entreprise individuelle et EURL : quelles conséquences sur son patrimoine ? Conseille-la.', answer: 'En **entreprise individuelle**, par l’unicité du patrimoine, ses **biens personnels** (voiture, épargne) peuvent servir à payer les dettes du salon en cas de difficulté — sauf déclaration d’insaisissabilité ou patrimoine d’affectation. En **EURL** (société à associé unique), une **personne morale** distincte est créée : la responsabilité de Léa est en principe **limitée à ses apports**, ce qui **protège mieux** son patrimoine personnel. Compte tenu de l’emprunt de 40 000 €, l’EURL est plus prudente.' },
      { doc: [3, 4], type: 'redac', q: 'Montre que Léa peut agir contre son concurrent en concurrence déloyale.', answer: 'La concurrence déloyale engage la **responsabilité civile** de son auteur. **Fait générateur** : le concurrent diffuse de **fausses rumeurs** (dénigrement) et **copie l’enseigne** pour créer la confusion (imitation). **Préjudice** : perte de clientèle et atteinte à la réputation de Léa. **Lien de causalité** : ces agissements détournent la clientèle. Léa peut donc engager une **action en concurrence déloyale** pour faire cesser ces pratiques et obtenir des dommages et intérêts.' },
      { doc: 2, type: 'redac', q: 'Rappelle les trois éléments du contrat de société (art. 1832).', answer: 'Le contrat de société suppose : des **apports** (en argent, en nature ou en industrie) faits par les associés ; l’**affectio societatis**, c’est-à-dire la **volonté commune de collaborer** à l’entreprise ; et la vocation à **partager les bénéfices** (et à contribuer aux pertes). La société ainsi créée est une **personne morale**.' },
    ],
  },

  // ======================================================================
  // DROIT — Première · Thème 2 : Le litige et la preuve
  // ======================================================================
  'p1-droit-t2': {
    id: 'p1-droit-t2-doc',
    type: 'doc',
    title: 'Étude de documents — Le litige, la preuve et le procès',
    icon: '📑',
    intro: 'Comprendre à qui incombe la preuve et comment se déroule un procès. Lis les documents puis réponds.',
    documents: [
      { id: 1, title: 'Document 1 — La charge de la preuve', text: 'En principe, c’est au **demandeur** — celui qui réclame l’exécution d’une obligation — d’en apporter la **preuve** : « Celui qui réclame l’exécution d’une obligation doit la prouver. » La preuve doit être obtenue **loyalement**.' },
      { id: 2, title: 'Document 2 — Preuves parfaites et imparfaites', text: 'Les modes de preuve se classent selon leur force :\n• les **preuves parfaites**, dont la valeur est **fixée par la loi** et qui **s’imposent au juge** : l’**acte authentique** (reçu par un officier public, ex. un notaire), l’**acte sous signature privée** (écrit signé par les parties), l’**aveu** et le **serment** ;\n• les **preuves imparfaites**, laissées à la **libre appréciation** du juge : le **témoignage**, l’**indice**, la **présomption**.' },
      { id: 3, title: 'Document 3 — Le déroulement d’une instance', text: 'En matière civile, le procès s’ouvre souvent par une **assignation** (acte convoquant le défendeur). L’affaire est examinée lors d’une **audience**, puis les juges se retirent en **délibéré**. La décision s’appelle un **jugement** (tribunal) ou un **arrêt** (cour d’appel, Cour de cassation).' },
      { id: 4, title: 'Document 4 — Le litige de Sophie', text: 'Sophie a prêté 3 000 € à un ami. Elle possède une **reconnaissance de dette écrite et signée** par lui. L’ami refuse de rembourser et prétend que « c’était un cadeau ». Sophie décide de saisir le tribunal.' },
    ],
    questions: [
      { doc: 1, q: 'En principe, la charge de la preuve pèse sur…', choices: ['le demandeur', 'le juge', 'le témoin', 'le défendeur'], answer: 0, explain: 'C’est à celui qui réclame de prouver.' },
      { doc: 2, q: 'Un acte notarié (acte authentique) est une preuve…', choices: ['parfaite', 'imparfaite', 'interdite', 'orale'], answer: 0, explain: 'Sa valeur est fixée par la loi et s’impose au juge.' },
      { doc: 2, q: 'Un témoignage est une preuve…', choices: ['imparfaite (libre appréciation du juge)', 'parfaite', 'qui s’impose au juge', 'authentique'], answer: 0, explain: 'Les preuves imparfaites sont librement appréciées.' },
      { doc: 3, q: 'Une décision rendue par une cour d’appel s’appelle…', choices: ['un arrêt', 'un jugement', 'une assignation', 'un délibéré'], answer: 0, explain: 'Tribunal → jugement ; cour d’appel / Cour de cassation → arrêt.' },
      { doc: [1, 2, 4], q: 'Grâce à sa reconnaissance de dette signée, Sophie dispose…', choices: ['d’une preuve parfaite (acte sous signature privée)', 'd’un simple témoignage', 'd’aucune preuve', 'd’un aveu de sa part'], answer: 0, explain: 'Un écrit signé par le débiteur est un acte sous signature privée : preuve parfaite.' },
      { doc: 1, type: 'redac', q: 'Explique sur qui pèse la charge de la preuve et pourquoi c’est important.', answer: 'La charge de la preuve pèse sur le **demandeur** : celui qui **réclame** l’exécution d’une obligation doit prouver qu’elle existe. C’est important car, faute de preuve, le demandeur perd son procès même s’il a raison sur le fond : « ne pas pouvoir prouver son droit, c’est comme ne pas l’avoir ». D’où l’intérêt de conserver des écrits.' },
      { doc: [2, 4], type: 'redac', q: 'La reconnaissance de dette de Sophie a-t-elle plus de valeur que la parole de l’ami ? Justifie.', answer: 'Oui. La reconnaissance de dette est un **écrit signé** par le débiteur : c’est un **acte sous signature privée**, donc une **preuve parfaite** dont la valeur est fixée par la loi et **s’impose au juge**. La simple affirmation de l’ami (« c’était un cadeau ») n’est pas prouvée et ne suffit pas à écarter cet écrit. Sophie est donc en position favorable pour obtenir le remboursement.' },
      { doc: 3, type: 'redac', q: 'Décris brièvement les étapes du procès civil que va suivre l’affaire de Sophie.', answer: 'Sophie va d’abord faire **assigner** son ami (acte qui l’informe du procès et le convoque). L’affaire sera ensuite examinée lors d’une **audience**, où chacun présente ses arguments et ses preuves. Les juges se retireront en **délibéré**, puis rendront un **jugement**. Si l’une des parties n’est pas satisfaite, elle pourra faire **appel**, la cour d’appel rendant alors un **arrêt**.' },
    ],
  },

  // ======================================================================
  // DROIT — Première · Thème 1 : Qu'est-ce que le droit ?
  // ======================================================================
  'p1-droit-t1': {
    id: 'p1-droit-t1-doc',
    type: 'doc',
    title: 'Étude de documents — La règle de droit et ses sources',
    icon: '📑',
    intro: 'Qu’est-ce qui distingue une règle de droit des autres règles, et comment s’organisent les sources ? Lis les documents puis réponds.',
    documents: [
      { id: 1, title: 'Document 1 — Les caractères de la règle de droit', text: 'La règle de droit présente quatre caractères : elle est **générale** (elle s’applique à tous), **impersonnelle** (elle ne vise personne nommément), **obligatoire** et **sanctionnée par l’État**. Ses fonctions : organiser la société, pacifier les relations, protéger les personnes et sanctionner les manquements.' },
      { id: 2, title: 'Document 2 — Règle de droit et règle morale', text: 'La règle **morale** relève de la conscience individuelle ; la règle **religieuse** relève de la croyance. Ni l’une ni l’autre n’est **sanctionnée par l’État**. C’est précisément la **sanction étatique** qui distingue la règle de droit de ces autres règles de conduite.' },
      { id: 3, title: 'Document 3 — La hiérarchie des normes', text: 'Les sources du droit sont hiérarchisées : au sommet la **Constitution** (bloc de constitutionnalité), puis les **traités internationaux et le droit de l’Union européenne**, puis les **lois** (votées par le Parlement), enfin les **règlements** (décrets, arrêtés). Une norme inférieure doit respecter les normes supérieures. Le **Conseil constitutionnel** en contrôle le respect ; depuis 2010, la **QPC** permet à un justiciable de contester une loi en vigueur.' },
      { id: 4, title: 'Document 4 — L’arrêté du maire', text: 'Un maire prend un **arrêté** (un règlement municipal) interdisant totalement et en toute circonstance de manifester dans sa commune. Un habitant conteste cet arrêté, estimant qu’il porte atteinte à la liberté de manifester garantie par la Constitution.' },
    ],
    questions: [
      { doc: 1, q: 'La règle de droit est générale, impersonnelle, obligatoire et…', choices: ['sanctionnée par l’État', 'facultative', 'secrète', 'religieuse'], answer: 0, explain: 'La sanction étatique est le 4ᵉ caractère.' },
      { doc: 2, q: 'Ce qui distingue une règle de droit d’une règle morale, c’est…', choices: ['la sanction par l’État', 'sa longueur', 'son ancienneté', 'sa langue'], answer: 0, explain: 'La morale relève de la conscience, non sanctionnée par l’État.' },
      { doc: 3, q: 'Au sommet de la hiérarchie des normes se trouve…', choices: ['la Constitution', 'un arrêté municipal', 'une loi ordinaire', 'un contrat'], answer: 0, explain: 'La Constitution prime sur toutes les autres normes.' },
      { doc: 3, q: 'La QPC permet à un justiciable de…', choices: ['contester une loi qu’il juge contraire à la Constitution', 'écrire une nouvelle loi', 'juger un crime', 'signer un contrat'], answer: 0, explain: 'Question Prioritaire de Constitutionnalité (depuis 2010).' },
      { doc: [3, 4], q: 'L’arrêté du maire est illégal car…', choices: ['une norme inférieure doit respecter la loi et la Constitution', 'un maire ne peut jamais prendre d’arrêté', 'la manifestation est interdite partout', 'l’arrêté est trop court'], answer: 0, explain: 'L’arrêté (règlement) ne peut contredire la Constitution, norme supérieure.' },
      { doc: [1, 2], type: 'redac', q: 'Qu’est-ce qui distingue la règle de droit d’une simple règle morale ?', answer: 'La règle de droit partage certains caractères avec la règle morale (elle guide les conduites), mais elle est **générale, impersonnelle, obligatoire** et surtout **sanctionnée par l’État**. La règle **morale**, elle, relève de la **conscience** et n’est pas sanctionnée par la puissance publique. C’est donc la **sanction étatique** qui distingue le droit de la morale.' },
      { doc: [3, 4], type: 'redac', q: 'En t’appuyant sur la hiérarchie des normes, explique pourquoi l’arrêté du maire peut être annulé.', answer: 'La **hiérarchie des normes** impose qu’une norme inférieure respecte les normes supérieures. L’**arrêté** du maire est un **règlement**, tout en bas de la pyramide : il doit respecter la **loi** et la **Constitution**, qui garantissent la liberté de manifester. Une interdiction **générale et absolue** est disproportionnée et **contraire** à ces normes supérieures : le juge administratif peut donc **annuler** l’arrêté. La hiérarchie des normes protège ainsi les libertés.' },
      { doc: 1, type: 'redac', q: 'Cite et explique deux fonctions du droit.', answer: 'Le droit **organise** la société et l’activité économique (il fixe des règles communes) et **pacifie** les relations en évitant la loi du plus fort (il permet de régler les conflits par le juge plutôt que par la force). On peut aussi citer sa fonction de **protection** des personnes et de leurs droits, et sa fonction de **sanction** des manquements.' },
    ],
  },

  // ======================================================================
  // DROIT — Première · Thème 3 : Les personnes
  // ======================================================================
  'p1-droit-t3': {
    id: 'p1-droit-t3-doc',
    type: 'doc',
    title: 'Étude de documents — Les personnes et leur capacité',
    icon: '📑',
    intro: 'Qui est sujet de droit et dans quelle mesure peut-on agir seul ? Lis les documents puis réponds.',
    documents: [
      { id: 1, title: 'Document 1 — La personnalité juridique', text: 'La **personnalité juridique** est l’aptitude à être **titulaire de droits et d’obligations**. Elle est reconnue aux **personnes physiques** (les êtres humains, de la naissance à la mort, identifiés par un nom et un domicile) et aux **personnes morales** (groupements — société, association déclarée, État — dotés d’un patrimoine propre distinct de celui de leurs membres).' },
      { id: 2, title: 'Document 2 — La capacité juridique', text: 'On distingue la **capacité de jouissance** (avoir des droits) de la **capacité d’exercice** (pouvoir les exercer seul). Certaines personnes sont **incapables** et doivent être **représentées** ou **assistées** : les **mineurs** non émancipés (représentés par leurs parents) et les **majeurs protégés** (sauvegarde de justice, curatelle, tutelle).' },
      { id: 3, title: 'Document 3 — Le patrimoine', text: 'Le **patrimoine** est l’ensemble des **droits et obligations** d’une personne **évaluables en argent** : un **actif** (les biens) et un **passif** (les dettes). Principe d’**unicité** : toute personne a un patrimoine, et un seul. On distingue les droits **patrimoniaux** (cessibles, saisissables) des droits **extrapatrimoniaux** (vie privée, image, nom).' },
      { id: 4, title: 'Document 4 — Le scooter de Tom', text: 'Tom, **16 ans** (mineur non émancipé), achète seul un scooter d’occasion à 1 500 € auprès d’un particulier, sans en parler à ses parents. Ceux-ci, mécontents, souhaitent revenir sur cette opération.' },
    ],
    questions: [
      { doc: 1, q: 'La personnalité juridique est l’aptitude à…', choices: ['être titulaire de droits et d’obligations', 'voter une loi', 'juger un litige', 'produire des biens'], answer: 0, explain: 'Elle fait de l’être un sujet de droit.' },
      { doc: 1, q: 'Une association déclarée est une personne…', choices: ['morale', 'physique', 'sans patrimoine', 'incapable'], answer: 0, explain: 'Elle a un patrimoine propre, distinct de celui de ses membres.' },
      { doc: 2, q: 'Pouvoir exercer soi-même ses droits, c’est la capacité…', choices: ['d’exercice', 'de jouissance', 'de propriété', 'd’ester'], answer: 0, explain: 'Jouissance = avoir des droits ; exercice = les exercer seul.' },
      { doc: 3, q: 'Le droit à l’image est un droit…', choices: ['extrapatrimonial', 'patrimonial', 'cessible', 'saisissable'], answer: 0, explain: 'Les droits de la personnalité sont extrapatrimoniaux.' },
      { doc: [2, 4], q: 'L’achat du scooter par Tom peut être remis en cause car…', choices: ['mineur, il n’a pas la pleine capacité d’exercice pour un tel acte', 'un mineur n’a aucun droit', 'le scooter est trop cher pour exister', 'les parents sont incapables'], answer: 0, explain: 'Le mineur doit être représenté pour les actes importants.' },
      { doc: 1, type: 'redac', q: 'Distingue la personne physique de la personne morale.', answer: 'La **personne physique** est un **être humain**, sujet de droit de la **naissance à la mort**, identifié par un nom et un domicile. La **personne morale** est un **groupement** (société, association déclarée, État) auquel la loi reconnaît la personnalité juridique : elle a un **nom**, un **siège** et surtout un **patrimoine propre**, distinct de celui de ses membres, et peut agir en justice.' },
      { doc: [2, 4], type: 'redac', q: 'Les parents de Tom peuvent-ils faire annuler l’achat du scooter ? Justifie.', answer: 'Oui, en principe. Tom, **mineur non émancipé**, a la **capacité de jouissance** (il peut être propriétaire) mais pas la pleine **capacité d’exercice** : l’achat d’un scooter à 1 500 € est un **acte de disposition** qui dépasse la gestion courante d’un mineur. Ses **parents**, qui le **représentent**, peuvent donc demander l’**annulation** de la vente. En revanche, un acte de la vie courante (acheter une place de cinéma) resterait valable.' },
      { doc: 3, type: 'redac', q: 'Qu’est-ce que le patrimoine ? Explique le principe d’unicité.', answer: 'Le **patrimoine** est l’ensemble des **droits et obligations** d’une personne **évaluables en argent** : un **actif** (ses biens) et un **passif** (ses dettes). Le principe d’**unicité** signifie que **toute personne a un patrimoine, et un seul** : ses biens répondent de ses dettes. La loi admet toutefois des exceptions (patrimoine d’affectation) pour protéger le patrimoine personnel de l’entrepreneur.' },
    ],
  },

  // ======================================================================
  // DROIT — Première · Thème 4 : Les droits reconnus aux personnes
  // ======================================================================
  'p1-droit-t4': {
    id: 'p1-droit-t4-doc',
    type: 'doc',
    title: 'Étude de documents — Propriété, création et vie privée',
    icon: '📑',
    intro: 'Comment le droit protège-t-il les biens, les créations et la personne ? Lis les documents puis réponds.',
    documents: [
      { id: 1, title: 'Document 1 — Le droit de propriété', text: 'Le droit de propriété comporte trois attributs : l’**usus** (utiliser le bien), le **fructus** (en percevoir les revenus, ex. un loyer) et l’**abusus** (en disposer : vendre, détruire). On lui reconnaît trois caractères : **absolu, exclusif et perpétuel**. Il connaît toutefois des **limites** : intérêt général et respect du voisinage.' },
      { id: 2, title: 'Document 2 — Le trouble anormal du voisinage', text: 'Nul ne doit causer à autrui un **trouble anormal du voisinage**. Des nuisances excessives (bruit, odeurs, fumées) qui dépassent les inconvénients normaux de la vie en collectivité engagent la **responsabilité** de leur auteur, même s’il ne commet aucune faute : c’est une **limite** au droit de propriété.' },
      { id: 3, title: 'Document 3 — La propriété intellectuelle', text: 'Les créations sont protégées. La **propriété industrielle** protège la **marque** (signe distinctif) et le **brevet** (invention), en conférant un **monopole d’exploitation** ; toute copie constitue une **contrefaçon**, sanctionnée par une **action en contrefaçon**. Le **droit d’auteur** protège les œuvres et comprend un **droit moral** (respect de l’œuvre) et des **droits patrimoniaux** (en tirer des revenus).' },
      { id: 4, title: 'Document 4 — La photo de Sarah', text: 'Un ami publie sur un réseau social une photo de Sarah, prise en soirée, **sans lui demander son accord**. Sarah, gênée, veut obtenir le retrait de la photo. Le droit au respect de la **vie privée** et le **droit à l’image** sont des droits de la personnalité ; le **RGPD** encadre l’usage des données personnelles, sous le contrôle de la **CNIL**.' },
    ],
    questions: [
      { doc: 1, q: 'Le droit de percevoir les revenus d’un bien (ex. un loyer) est…', choices: ['le fructus', 'l’usus', 'l’abusus', 'l’usufruit'], answer: 0, explain: 'Usus = utiliser ; fructus = revenus ; abusus = disposer.' },
      { doc: 1, q: 'Les caractères du droit de propriété sont…', choices: ['absolu, exclusif, perpétuel', 'général, impersonnel, obligatoire', 'certain, direct, personnel', 'oral, écrit, tacite'], answer: 0, explain: 'Trois caractères, avec toutefois des limites.' },
      { doc: 3, q: 'Reproduire une marque sans autorisation constitue…', choices: ['une contrefaçon', 'un trouble du voisinage', 'un acte authentique', 'une preuve parfaite'], answer: 0, explain: 'La contrefaçon est sanctionnée par une action en contrefaçon.' },
      { doc: 4, q: 'En France, l’organisme qui veille à la protection des données personnelles est…', choices: ['la CNIL', 'la Cour de cassation', 'l’INSEE', 'l’Autorité de la concurrence'], answer: 0, explain: 'La CNIL applique le RGPD.' },
      { doc: [2, 1], q: 'Un voisin qui cause un bruit excessif et permanent…', choices: ['dépasse les limites du droit de propriété (trouble anormal)', 'exerce normalement sa propriété', 'commet une contrefaçon', 'exerce son fructus'], answer: 0, explain: 'Le trouble anormal du voisinage est une limite au droit de propriété.' },
      { doc: 1, type: 'redac', q: 'Présente les trois attributs du droit de propriété avec un exemple pour chacun.', answer: 'Le droit de propriété comporte : l’**usus** — le droit d’**utiliser** le bien (habiter sa maison) ; le **fructus** — le droit d’en **percevoir les revenus** (louer la maison et encaisser le loyer) ; l’**abusus** — le droit d’en **disposer** (vendre ou détruire le bien). Réunis, ces trois attributs font du propriétaire le maître le plus complet de son bien, sous réserve des limites (voisinage, intérêt général).' },
      { doc: [3], type: 'redac', q: 'Distingue la propriété industrielle du droit d’auteur.', answer: 'La **propriété industrielle** protège les créations utiles à l’activité économique — la **marque** (signe distinctif) et le **brevet** (invention) — en conférant un **monopole d’exploitation**, et suppose un dépôt. Le **droit d’auteur** protège les **œuvres de l’esprit** (livre, musique, logiciel) **dès leur création**, sans formalité ; il comprend un **droit moral** (perpétuel, respect de l’œuvre et du nom) et des **droits patrimoniaux** (exploiter l’œuvre et en tirer des revenus).' },
      { doc: 4, type: 'redac', q: 'Sarah peut-elle exiger le retrait de la photo publiée sans son accord ? Justifie.', answer: 'Oui. Le **droit à l’image** et le droit au respect de la **vie privée** sont des **droits de la personnalité**, **inaliénables** : publier l’image d’une personne suppose son **accord**. Comme Sarah n’a pas consenti, elle peut exiger le **retrait** de la photo et, en cas de préjudice, une réparation. Le **RGPD** lui donne en outre un droit à l’**effacement** de ses données, dont la **CNIL** garantit le respect.' },
    ],
  },

  // ======================================================================
  // ÉCONOMIE — Première · Thème 1 : Les grandes questions économiques
  // ======================================================================
  'p1-eco-t1': {
    id: 'p1-eco-t1-doc',
    type: 'doc',
    title: 'Étude de documents — Rareté, choix et agents économiques',
    icon: '📑',
    intro: 'Pourquoi doit-on faire des choix, et qui sont les acteurs de l’économie ? Lis les documents puis réponds.',
    documents: [
      { id: 1, title: 'Document 1 — La rareté et les choix', text: 'Les **besoins** des individus sont illimités, mais les **ressources** pour les satisfaire sont **limitées** : c’est la **rareté**. Elle oblige à faire des **choix** et à renoncer à d’autres emplois des ressources. L’économie répond à trois grandes questions : **que produire ?**, **comment produire ?**, **pour qui produire ?**.' },
      { id: 2, title: 'Document 2 — Le coût d’opportunité', text: 'Choisir, c’est renoncer. Le **coût d’opportunité** d’un choix est la valeur de la **meilleure option à laquelle on renonce**. Exemple : consacrer une soirée à réviser, c’est renoncer à la soirée de loisir que l’on aurait pu passer à la place.' },
      { id: 3, title: 'Document 3 — Les agents économiques', text: 'L’économie est animée par des **agents** aux rôles différents : les **ménages** (consomment, épargnent, offrent du travail), les **entreprises** (produisent des biens et services), les **administrations publiques** (fournissent des services non marchands, prélèvent, redistribuent), les **banques** (financent), et le **reste du monde** (échanges extérieurs).' },
      { id: 4, title: 'Document 4 — Le circuit économique', text: 'Les agents sont reliés par un **circuit** : à un **flux réel** (biens, services, travail) correspond un **flux monétaire** en sens inverse. Ainsi, un ménage fournit du travail à une entreprise (flux réel) et reçoit un salaire (flux monétaire) ; il achète des biens (flux réel) et paie un prix (flux monétaire).' },
    ],
    questions: [
      { doc: 1, q: 'La rareté vient du fait que les besoins sont… et les ressources…', choices: ['illimités / limitées', 'limités / illimitées', 'nuls / infinies', 'égaux / égales'], answer: 0, explain: 'Besoins illimités face à des ressources limitées → nécessité de choisir.' },
      { doc: 1, q: '« Pour qui produire ? » est…', choices: ['l’une des trois grandes questions économiques', 'une loi fiscale', 'un agent économique', 'un flux monétaire'], answer: 0, explain: 'Que / comment / pour qui produire.' },
      { doc: 2, q: 'Le coût d’opportunité d’un choix est…', choices: ['la valeur de la meilleure option à laquelle on renonce', 'le prix d’achat en euros', 'un impôt', 'un salaire'], answer: 0, explain: 'Choisir, c’est renoncer : le coût est l’option abandonnée.' },
      { doc: 3, q: 'Les administrations publiques ont notamment pour rôle de…', choices: ['fournir des services non marchands et redistribuer', 'produire uniquement pour l’export', 'fixer les prix de tous les biens', 'remplacer les ménages'], answer: 0, explain: 'Services non marchands, prélèvements, redistribution.' },
      { doc: 4, q: 'Dans le circuit économique, à un flux réel correspond…', choices: ['un flux monétaire en sens inverse', 'un autre flux réel identique', 'aucun échange', 'un impôt uniquement'], answer: 0, explain: 'Flux réel (travail, biens) ↔ flux monétaire (salaire, prix).' },
      { doc: 2, type: 'redac', q: 'Explique la notion de coût d’opportunité à l’aide d’un exemple.', answer: 'Le **coût d’opportunité** d’un choix est la valeur de la **meilleure option sacrifiée**. Comme les ressources (temps, argent) sont **rares**, choisir une chose, c’est **renoncer** à une autre. Exemple : un élève qui passe sa soirée à réviser renonce à la soirée entre amis qu’il aurait pu vivre à la place ; cette soirée perdue est le coût d’opportunité de sa révision.' },
      { doc: 3, type: 'redac', q: 'Cite trois agents économiques et précise leur rôle principal.', answer: 'Les **ménages** consomment, épargnent et offrent leur travail. Les **entreprises** produisent des biens et des services marchands. Les **administrations publiques** fournissent des services non marchands, prélèvent des impôts et redistribuent les revenus. On peut ajouter les **banques** (qui financent) et le **reste du monde** (échanges extérieurs).' },
      { doc: 4, type: 'redac', q: 'À l’aide du circuit économique, montre la relation entre un ménage et une entreprise.', answer: 'Le **circuit économique** relie les agents par des flux de sens opposés. Un **ménage** fournit son **travail** à l’**entreprise** (flux réel) et reçoit en retour un **salaire** (flux monétaire). Avec ce revenu, il **achète** des biens et services produits par l’entreprise (flux réel) et paie un **prix** (flux monétaire). À chaque flux réel correspond donc un flux monétaire inverse.' },
    ],
  },

  // ======================================================================
  // ÉCONOMIE — Première · Thème 2 : Créer et mesurer la richesse
  // ======================================================================
  'p1-eco-t2': {
    id: 'p1-eco-t2-doc',
    type: 'doc',
    title: 'Étude de documents — Créer et mesurer la richesse',
    icon: '📑',
    intro: 'Comment mesure-t-on la richesse réellement créée par une entreprise et par un pays ? Lis les documents puis réponds.',
    documents: [
      { id: 1, title: 'Document 1 — Production marchande et non marchande', text: 'La **production marchande** est vendue sur un marché à un prix couvrant les coûts (une baguette, une coupe de cheveux). La **production non marchande** est fournie gratuitement ou quasi gratuitement, financée par l’impôt (l’école publique, la justice). La production combine deux **facteurs** : le **travail** et le **capital**.' },
      { id: 2, title: 'Document 2 — La valeur ajoutée', text: 'La richesse réellement créée par une entreprise se mesure par sa **valeur ajoutée** : la valeur de sa **production** diminuée des **consommations intermédiaires** (biens et services achetés à d’autres et détruits dans la production).', source: 'VA = Production − Consommations intermédiaires' },
      { id: 3, title: 'Document 3 — Le PIB et la croissance', text: 'Le **PIB** (produit intérieur brut) mesure la richesse créée dans un pays sur une année : c’est la **somme des valeurs ajoutées**. La **croissance économique** est l’augmentation durable du PIB, mesurée par un **taux de croissance** d’une année sur l’autre.' },
      { id: 4, title: 'Document 4 — La boulangerie de M. Léon', text: 'Sur un mois, la boulangerie de M. Léon vend pour **20 000 €** de pains et viennoiseries. Pour produire, elle a acheté pour **7 000 €** de farine, d’œufs, d’électricité et d’emballages (consommations intermédiaires).' },
    ],
    questions: [
      { doc: 1, q: 'L’école publique gratuite relève de la production…', choices: ['non marchande', 'marchande', 'industrielle exportée', 'intermédiaire'], answer: 0, explain: 'Fournie gratuitement, financée par l’impôt.' },
      { doc: 1, q: 'Les deux facteurs de production sont…', choices: ['le travail et le capital', 'l’offre et la demande', 'l’impôt et l’épargne', 'le prix et le salaire'], answer: 0, explain: 'Travail + capital.' },
      { doc: 2, q: 'La valeur ajoutée se calcule…', choices: ['production − consommations intermédiaires', 'production + salaires', 'chiffre d’affaires + impôts', 'production × prix'], answer: 0, explain: 'VA = production − consommations intermédiaires.' },
      { doc: 3, q: 'Le PIB d’un pays est…', choices: ['la somme des valeurs ajoutées', 'le total des salaires seulement', 'la somme des importations', 'le montant des impôts'], answer: 0, explain: 'PIB = somme des VA.' },
      { doc: [2, 4], q: 'La valeur ajoutée de la boulangerie de M. Léon est de…', choices: ['13 000 €', '20 000 €', '7 000 €', '27 000 €'], answer: 0, explain: 'VA = 20 000 − 7 000 = 13 000 €.' },
      { doc: 1, type: 'redac', q: 'Distingue production marchande et production non marchande, avec un exemple de chacune.', answer: 'La production **marchande** est **vendue sur un marché** à un prix destiné à couvrir les coûts : par exemple une baguette de pain ou une coupe de cheveux. La production **non marchande** est fournie **gratuitement ou quasi gratuitement** et financée par l’**impôt** : par exemple l’enseignement public ou la justice. Les deux créent de la richesse mais ne se vendent pas de la même façon.' },
      { doc: [2, 4], type: 'redac', q: 'Calcule la valeur ajoutée de la boulangerie et explique ce qu’elle représente.', answer: 'La **valeur ajoutée** = **production − consommations intermédiaires** = 20 000 − 7 000 = **13 000 €**. Elle représente la **richesse réellement créée** par la boulangerie : ce n’est pas tout le chiffre d’affaires (20 000 €), car une partie (7 000 €) correspond à des biens achetés à d’autres et « consommés » dans la production. La VA servira notamment à rémunérer le travail et le capital.' },
      { doc: 3, type: 'redac', q: 'Qu’est-ce que la croissance économique et comment la mesure-t-on ?', answer: 'La **croissance économique** est l’**augmentation durable de la production** d’un pays. On la mesure par l’évolution du **PIB** (somme des valeurs ajoutées) d’une année sur l’autre : le **taux de croissance** indique de combien de pour cent le PIB a augmenté. Une croissance positive signifie que le pays a créé plus de richesses que l’année précédente.' },
    ],
  },

  // ======================================================================
  // ÉCONOMIE — Première · Thème 3 : Répartir les revenus et la richesse
  // ======================================================================
  'p1-eco-t3': {
    id: 'p1-eco-t3-doc',
    type: 'doc',
    title: 'Étude de documents — La répartition des revenus',
    icon: '📑',
    intro: 'Comment la richesse créée est-elle partagée, puis corrigée par l’État ? Lis les documents puis réponds.',
    documents: [
      { id: 1, title: 'Document 1 — La répartition primaire', text: 'La valeur ajoutée est d’abord partagée entre ceux qui ont participé à la production : c’est la **répartition primaire**. On distingue les **revenus du travail** (salaires), les **revenus du capital** (intérêts, loyers, dividendes) et les **revenus mixtes** (indépendants, qui rémunèrent à la fois travail et capital).' },
      { id: 2, title: 'Document 2 — La redistribution', text: 'L’État corrige ensuite cette répartition pour réduire les inégalités : c’est la **redistribution**. Il opère des **prélèvements obligatoires** (impôts, cotisations sociales) et verse des **revenus de transfert** (allocations, retraites, aides). On obtient alors le **revenu disponible** des ménages.', source: 'Revenu disponible = Revenus primaires − Prélèvements obligatoires + Revenus de transfert' },
      { id: 3, title: 'Document 3 — Consommer ou épargner', text: 'Avec son revenu disponible, le ménage arbitre entre **consommer** (dépenser) et **épargner** (mettre de côté). Le **taux d’épargne** = épargne / revenu disponible. Notions liées : le **pouvoir d’achat** (ce que le revenu permet réellement d’acheter compte tenu des prix) et le **patrimoine** (accumulation de l’épargne).' },
      { id: 4, title: 'Document 4 — Le budget de la famille Diallo', text: 'La famille Diallo perçoit **2 800 €** de revenus primaires (salaires). Elle paie **600 €** de prélèvements obligatoires et reçoit **200 €** d’allocations. Ce mois-ci, elle consomme **2 100 €**.' },
    ],
    questions: [
      { doc: 1, q: 'Les salaires sont des revenus…', choices: ['du travail', 'du capital', 'mixtes', 'de transfert'], answer: 0, explain: 'Travail = salaires ; capital = intérêts, loyers, dividendes.' },
      { doc: 2, q: 'La redistribution consiste à…', choices: ['prélever des prélèvements obligatoires et verser des revenus de transfert', 'produire des biens', 'fixer les prix', 'créer de la monnaie'], answer: 0, explain: 'Elle corrige la répartition primaire.' },
      { doc: 2, q: 'La formule du revenu disponible est…', choices: ['revenus primaires − prélèvements obligatoires + revenus de transfert', 'revenus primaires + prélèvements obligatoires', 'salaires − TVA', 'consommation + épargne'], answer: 0, explain: 'On retranche les prélèvements et on ajoute les transferts.' },
      { doc: 3, q: 'Le taux d’épargne se calcule…', choices: ['épargne / revenu disponible', 'consommation / revenu', 'revenu / dépenses', 'épargne × prix'], answer: 0, explain: 'Taux d’épargne = épargne / revenu disponible.' },
      { doc: [2, 4], q: 'Le revenu disponible de la famille Diallo est de…', choices: ['2 400 €', '2 800 €', '3 600 €', '2 000 €'], answer: 0, explain: '2 800 − 600 + 200 = 2 400 €.' },
      { doc: 1, type: 'redac', q: 'Présente les trois types de revenus de la répartition primaire.', answer: 'La **répartition primaire** partage la valeur ajoutée entre : les **revenus du travail** (les **salaires** des salariés) ; les **revenus du capital** (les **intérêts, loyers et dividendes** perçus par ceux qui détiennent du capital) ; et les **revenus mixtes** (ceux des **indépendants**, qui rémunèrent à la fois leur travail et leur capital).' },
      { doc: [2, 4], type: 'redac', q: 'Calcule le revenu disponible de la famille Diallo, puis son taux d’épargne.', answer: '**Revenu disponible** = revenus primaires − prélèvements obligatoires + revenus de transfert = 2 800 − 600 + 200 = **2 400 €**. L’**épargne** = revenu disponible − consommation = 2 400 − 2 100 = **300 €**. Le **taux d’épargne** = épargne / revenu disponible = 300 / 2 400 = **12,5 %**.' },
      { doc: 3, type: 'redac', q: 'Explique la différence entre revenu disponible et pouvoir d’achat.', answer: 'Le **revenu disponible** est la somme d’argent dont dispose réellement le ménage pour consommer ou épargner (après prélèvements et transferts). Le **pouvoir d’achat** est ce que ce revenu permet **réellement d’acheter**, compte tenu du **niveau des prix** : si les prix augmentent plus vite que le revenu, le pouvoir d’achat baisse même si le revenu disponible progresse.' },
    ],
  },

  // ======================================================================
  // ÉCONOMIE — Première · Thème 4 : Le financement des agents
  // ======================================================================
  'p1-eco-t4': {
    id: 'p1-eco-t4-doc',
    type: 'doc',
    title: 'Étude de documents — Le financement de l’économie',
    icon: '📑',
    intro: 'Comment les agents qui ont besoin d’argent trouvent-ils leur financement ? Lis les documents puis réponds.',
    documents: [
      { id: 1, title: 'Document 1 — Besoin et capacité de financement', text: 'Un agent a un **besoin de financement** lorsque ses dépenses (notamment d’investissement) dépassent ses ressources : il doit se financer. À l’inverse, un agent dont les ressources excèdent les dépenses a une **capacité de financement** : il peut prêter ou placer son épargne. Le système financier met en relation les deux.' },
      { id: 2, title: 'Document 2 — Financement interne ou externe', text: 'Une entreprise peut se financer par ses **ressources propres** : l’**autofinancement** (financement interne, à partir de ses bénéfices). Quand cela ne suffit pas, elle recourt à un **financement externe** : emprunter ou faire appel à des investisseurs.' },
      { id: 3, title: 'Document 3 — Financement direct ou indirect', text: 'Le financement externe prend deux formes. Le **financement direct** : l’agent se procure des fonds **directement sur les marchés financiers** en émettant des **actions** (parts de propriété) ou des **obligations** (titres de dette). Le **financement indirect** : l’agent emprunte auprès d’une **banque**, qui joue un rôle d’**intermédiaire** ; l’emprunt est remboursé avec des **intérêts**.' },
      { id: 4, title: 'Document 4 — L’investissement de l’entreprise Novéo', text: 'L’entreprise Novéo veut investir **500 000 €** dans une nouvelle machine. Ses bénéfices mis en réserve ne couvrent que **150 000 €**. Pour le reste, elle hésite entre émettre des titres sur les marchés financiers et solliciter un prêt auprès de sa banque.' },
    ],
    questions: [
      { doc: 1, q: 'Un agent dont les dépenses dépassent les ressources a…', choices: ['un besoin de financement', 'une capacité de financement', 'un excédent', 'un patrimoine'], answer: 0, explain: 'Besoin de financement = dépenses > ressources.' },
      { doc: 2, q: 'L’autofinancement est un financement…', choices: ['interne (ressources propres)', 'externe direct', 'externe indirect', 'public'], answer: 0, explain: 'L’entreprise se finance sur ses propres bénéfices.' },
      { doc: 3, q: 'Emprunter auprès d’une banque est un financement…', choices: ['indirect', 'direct', 'interne', 'gratuit'], answer: 0, explain: 'La banque sert d’intermédiaire : financement indirect.' },
      { doc: 3, q: 'Une action est…', choices: ['une part de propriété de l’entreprise', 'un titre de dette', 'un crédit bancaire', 'un impôt'], answer: 0, explain: 'Action = propriété ; obligation = dette.' },
      { doc: [1, 4], q: 'Novéo, dont l’investissement dépasse ses ressources propres, se trouve en situation de…', choices: ['besoin de financement', 'capacité de financement', 'autofinancement total', 'épargne excédentaire'], answer: 0, explain: '500 000 € à financer, 150 000 € disponibles → besoin de financement.' },
      { doc: [1], type: 'redac', q: 'Distingue besoin de financement et capacité de financement.', answer: 'Un agent a un **besoin de financement** quand ses **dépenses dépassent ses ressources** (par exemple une entreprise qui investit plus qu’elle ne dégage de bénéfices) : il doit trouver des fonds. Un agent a une **capacité de financement** quand ses **ressources dépassent ses dépenses** : il dispose d’une épargne qu’il peut **prêter ou placer**. Le système financier met en relation ceux qui ont un besoin et ceux qui ont une capacité.' },
      { doc: 3, type: 'redac', q: 'Distingue financement direct et financement indirect.', answer: 'Le financement **direct** se fait **sur les marchés financiers** : l’agent se procure des fonds directement auprès des investisseurs en émettant des **actions** (parts de propriété) ou des **obligations** (titres de dette). Le financement **indirect** passe par un **intermédiaire**, la **banque**, qui accorde un **crédit** remboursé avec des **intérêts**. Dans le premier cas prêteur et emprunteur se rencontrent directement, dans le second la banque s’interpose.' },
      { doc: [2, 4], type: 'redac', q: 'Quelles solutions de financement s’offrent à Novéo pour son investissement ?', answer: 'Novéo peut d’abord utiliser son **autofinancement** (150 000 € de bénéfices mis en réserve) : c’est un financement **interne**. Comme cela ne suffit pas (besoin de 500 000 €), elle doit recourir à un **financement externe** : soit **direct**, en émettant des **actions** ou des **obligations** sur les marchés financiers, soit **indirect**, en sollicitant un **prêt bancaire** remboursable avec intérêts. Le choix dépendra du coût et de sa volonté d’ouvrir ou non son capital.' },
    ],
  },
}
