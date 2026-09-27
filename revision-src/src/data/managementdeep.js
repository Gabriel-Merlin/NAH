// MANAGEMENT (Terminale STMG) — cours complet, chapitres très développés.
// Couvre tout le programme en 3 thèmes, avec toutes les notions attendues.
// Rattaché à la catégorie principale « 📘 Le cours » (sections sans « group »),
// placé EN TÊTE de chaque thème. Fusionné dans data/index.js.
const S = (h, blocks) => ({ h, blocks })

export const MGMT_DEEP = {
  // #####################################################################
  // THÈME 1 — LES ORGANISATIONS ET L’ACTIVITÉ DE PRODUCTION
  // #####################################################################
  'mgmt-t1': [
    S('🏢 Qu’est-ce qu’une organisation ? Types et finalités', [
      { t: 'p', c: 'Le management est l’art de **conduire une organisation** : fixer des objectifs, mobiliser des ressources et coordonner les acteurs pour atteindre un but. Avant de manager, il faut comprendre **ce qu’est une organisation** et **pourquoi elle existe**.' },
      { t: 'p', c: 'Une **organisation** est un **groupe de personnes** qui met en commun des **moyens** (humains, financiers, matériels) et coordonne ses actions pour atteindre des **objectifs communs**. Toute organisation a une **frontière** (qui en fait partie ou non), des **règles** et une **finalité**.' },
      { t: 'p', c: 'On distingue traditionnellement **trois grands types d’organisations**, selon qui les crée et dans quel but.' },
      { t: 'table', head: ['Type d’organisation', 'Exemples', 'Finalité dominante'], rows: [
        ['Entreprise privée', 'PME, multinationale, artisan', 'Réaliser un **profit** (finalité lucrative)'],
        ['Organisation publique', 'Mairie, hôpital public, école, État', 'Rendre un **service public** d’intérêt général'],
        ['Organisation de la société civile', 'Association, ONG, syndicat, fondation', 'Défendre une **cause**, un intérêt collectif (non lucratif)'],
      ] },
      { t: 'p', c: 'La **finalité** est la **raison d’être** de l’organisation, sa vocation profonde et durable. Il ne faut pas la confondre avec les **objectifs**, qui sont des buts précis, chiffrés et datés au service de cette finalité.' },
      { t: 'list', c: [
        'Finalité **lucrative** : réaliser et pérenniser un **profit** (la plupart des entreprises privées).',
        'Finalité **non lucrative** : rendre un **service** sans rechercher le profit (organisations publiques, associations).',
        'Finalité **sociétale** : intégrer des préoccupations **sociales et environnementales** (RSE) — de plus en plus présente dans tous les types.',
      ] },
      { t: 'example', h: 'Une même activité, des finalités différentes', c: 'Une **clinique privée** (entreprise) cherche à être rentable ; un **hôpital public** vise l’accès aux soins pour tous ; une **association** de santé défend une cause. Même secteur, trois finalités différentes qui orientent tout le management.' },
      { t: 'p', c: 'Chaque organisation poursuit aussi une **mission** (ce qu’elle fait, pour qui) et se fixe des **objectifs** mesurables. Le rôle du dirigeant est de traduire la finalité en objectifs concrets, puis en actions.' },
      { t: 'warning', h: 'Piège fréquent', c: 'Ne confonds pas **finalité** (raison d’être, durable et générale) et **objectif** (but précis, chiffré, daté). Exemple : finalité = « offrir une mobilité durable » ; objectif = « vendre 5 000 vélos cette année ».' },
      { t: 'tip', h: 'À retenir', c: 'Une **organisation** = des personnes + des moyens + des objectifs communs. Trois types : **entreprise privée** (lucrative), **organisation publique** (service public), **société civile** (associations, ONG…). La **finalité** est la raison d’être ; les **objectifs** en découlent.' },
    ]),

    S('🎯 La performance : efficacité, efficience, création de valeur', [
      { t: 'p', c: 'Une organisation doit être **performante** pour durer. La performance mesure sa capacité à **atteindre ses objectifs** en **utilisant bien ses ressources**. C’est une notion centrale du management, qui repose sur deux piliers à ne jamais confondre.' },
      { t: 'table', head: ['Notion', 'Définition', 'Question posée'], rows: [
        ['Efficacité', 'Atteindre l’objectif fixé', '« A-t-on atteint le but ? »'],
        ['Efficience', 'Atteindre l’objectif au moindre coût (bon usage des moyens)', '« À quel prix / avec quels moyens ? »'],
      ] },
      { t: 'example', h: 'Efficace mais pas efficient', c: 'Une entreprise livre ses 1 000 commandes dans les délais (**efficace**) mais en payant énormément d’heures supplémentaires et en gaspillant des matières. Elle a atteint l’objectif, mais **au prix fort** : elle n’est pas **efficiente**. La performance vise les deux à la fois.' },
      { t: 'p', c: 'La performance ne se réduit pas à l’aspect financier. On parle aujourd’hui de **performance globale**, qui combine trois dimensions complémentaires.' },
      { t: 'table', head: ['Dimension de la performance', 'Ce qu’elle mesure'], rows: [
        ['Économique / financière', 'Rentabilité, chiffre d’affaires, profit, part de marché'],
        ['Sociale', 'Conditions de travail, motivation, faible turnover, climat social'],
        ['Environnementale', 'Empreinte écologique, économies d’énergie, éco-conception'],
      ] },
      { t: 'p', c: 'La performance passe par la **création de valeur** : l’organisation transforme des ressources en biens ou services qui ont **plus de valeur** pour le client que ce qu’ils ont coûté. La différence est la **valeur ajoutée**.' },
      { t: 'p', c: 'Michael **Porter** a modélisé cette logique avec la **chaîne de valeur** : l’ensemble des **activités** (approvisionnement, production, logistique, marketing, service…) qui, mises bout à bout, créent de la valeur pour le client. Analyser sa chaîne de valeur permet de repérer les activités les plus créatrices de valeur et celles à améliorer ou externaliser.' },
      { t: 'example', h: 'La chaîne de valeur d’un fabricant de vélos', c: 'Achat des composants → assemblage → contrôle qualité → distribution → service après-vente. Chaque maillon ajoute de la valeur. Si le SAV est excellent, il crée un avantage que le client est prêt à payer plus cher.' },
      { t: 'tip', h: 'À retenir', c: '**Efficacité** = atteindre l’objectif ; **efficience** = l’atteindre au moindre coût. La **performance globale** combine l’économique, le social et l’environnemental. L’organisation **crée de la valeur** le long de sa **chaîne de valeur** (Porter).' },
    ]),

    S('🧩 Les ressources et les compétences de l’organisation', [
      { t: 'p', c: 'Pour produire, une organisation mobilise des **ressources** et développe des **compétences**. Bien les identifier et les combiner est au cœur du management : c’est ce qui permet de créer de la valeur et de se distinguer des concurrents.' },
      { t: 'p', c: 'Les **ressources** sont les **moyens** dont dispose l’organisation. On les classe en grandes catégories.' },
      { t: 'table', head: ['Ressource', 'Exemples'], rows: [
        ['Humaines', 'Salariés, dirigeants, bénévoles — leur nombre et leurs qualifications'],
        ['Financières', 'Capitaux, trésorerie, capacité d’emprunt'],
        ['Matérielles', 'Locaux, machines, matières premières, équipements'],
        ['Immatérielles', 'Marque, image, brevets, savoir-faire, réputation, données'],
        ['Technologiques', 'Outils numériques, procédés, innovations'],
      ] },
      { t: 'p', c: 'Les ressources **immatérielles** prennent une importance croissante : une **marque** forte, des **brevets** ou un **savoir-faire** unique valent parfois plus que les usines. Elles sont difficiles à copier et constituent un atout durable.' },
      { t: 'p', c: 'Une **compétence** est la capacité à **combiner et utiliser** des ressources pour agir efficacement. Une organisation peut posséder de bonnes ressources mais mal les exploiter : ce sont les **compétences** qui font la différence.' },
      { t: 'p', c: 'Certaines compétences sont **stratégiques** (on parle de **compétences distinctives** ou « cœur de compétence ») : rares, difficiles à imiter, elles fondent l’**avantage concurrentiel** de l’organisation.' },
      { t: 'example', h: 'Ressource vs compétence', c: 'Deux restaurants ont la même cuisine équipée (ressource matérielle identique). L’un a un chef talentueux capable de créer des plats uniques (**compétence distinctive**) : c’est lui qui fait la réussite, pas le four.' },
      { t: 'warning', h: 'Piège à éviter', c: 'Ne confonds pas **ressource** (le moyen : une machine, un salarié, un capital) et **compétence** (le savoir-faire qui permet d’en tirer parti). Le management consiste justement à transformer des ressources en performance grâce aux compétences.' },
      { t: 'tip', h: 'À retenir', c: 'Ressources = moyens (**humaines, financières, matérielles, immatérielles, technologiques**). Les **immatérielles** (marque, savoir-faire, brevets) sont clés. Les **compétences** combinent les ressources ; les **compétences distinctives** fondent l’**avantage concurrentiel**.' },
    ]),

    S('🗺️ Le périmètre d’activité : métier, mission et DAS', [
      { t: 'p', c: 'Pour se développer, une organisation doit définir **ce qu’elle fait** et **jusqu’où** elle veut aller. C’est la question du **périmètre d’activité** : sur quels marchés, avec quels produits, pour quels clients ?' },
      { t: 'p', c: 'Le **métier** désigne le **savoir-faire principal** de l’organisation, ce qu’elle sait faire de mieux. La **mission** exprime **à qui** et **à quels besoins** elle répond. Ensemble, ils délimitent son identité.' },
      { t: 'example', h: 'Métier et mission', c: 'Le métier de Decathlon : concevoir et vendre des articles de sport accessibles. Sa mission : rendre le sport accessible au plus grand nombre. Tout choix stratégique se juge à l’aune de ce métier et de cette mission.' },
      { t: 'p', c: 'Quand une organisation exerce plusieurs activités différentes, on les découpe en **Domaines d’Activité Stratégique (DAS)**. Un DAS regroupe des activités qui partagent les **mêmes marchés, concurrents et facteurs clés de succès**. Chaque DAS peut avoir sa propre stratégie.' },
      { t: 'example', h: 'Les DAS d’un grand groupe', c: 'Un groupe comme Bic a plusieurs DAS : les **stylos**, les **briquets**, les **rasoirs**. Chaque domaine a ses concurrents et sa stratégie propre, même si le savoir-faire (production de masse d’objets simples) est commun.' },
      { t: 'p', c: 'Découper l’activité en DAS permet d’**allouer les ressources** au bon endroit : investir dans les domaines porteurs, se retirer de ceux en déclin. C’est un outil de pilotage stratégique.' },
      { t: 'p', c: 'À partir de là, l’organisation choisit son **périmètre** : rester concentrée sur un seul métier (**spécialisation**) ou en ajouter d’autres (**diversification**). Ce choix, développé dans le thème 2, dépend des ressources, des risques et des opportunités.' },
      { t: 'warning', h: 'Piège de vocabulaire', c: 'Un **DAS** n’est pas un simple produit : c’est un **ensemble homogène d’activités** avec les mêmes concurrents et facteurs clés de succès. Deux produits très différents (marchés et concurrents distincts) relèvent de **deux DAS**.' },
      { t: 'p', c: 'Le périmètre d’activité n’est pas figé : une organisation peut l’**élargir** (ajouter des DAS) ou le **recentrer** sur son cœur de métier en cédant des activités devenues peu rentables ou éloignées de sa mission.' },
      { t: 'example', h: 'Recentrage sur le cœur de métier', c: 'Un groupe qui possédait un DAS « hôtellerie » peu performant le **cède** pour se concentrer sur son métier d’origine. En recentrant son périmètre, il libère des ressources et gagne en efficacité.' },
      { t: 'tip', h: 'À retenir', c: 'Le **métier** = savoir-faire principal ; la **mission** = à qui/à quel besoin on répond. Les **DAS** découpent l’activité en ensembles homogènes (mêmes marchés/concurrents) pour piloter la stratégie et allouer les ressources. Le périmètre peut s’**élargir** ou se **recentrer**.' },
    ]),

    S('⚔️ La compétitivité et l’avantage concurrentiel', [
      { t: 'p', c: 'Sur un marché, l’organisation affronte des **concurrents**. Pour durer, elle doit être **compétitive** : proposer une offre que les clients préfèrent. La **compétitivité** est la capacité à faire face à la concurrence et à conserver ou gagner des parts de marché.' },
      { t: 'p', c: 'On distingue **deux grandes formes** de compétitivité, qui correspondent à deux façons de séduire le client.' },
      { t: 'table', head: ['Compétitivité', 'Sur quoi elle joue', 'Exemples'], rows: [
        ['Compétitivité-prix', 'Proposer un **prix plus bas** que les concurrents', 'Hard discount, low cost, production en grande série'],
        ['Compétitivité hors-prix', 'Se démarquer autrement que par le prix', 'Qualité, innovation, image de marque, délais, service, design'],
      ] },
      { t: 'p', c: 'La compétitivité-**prix** suppose de **maîtriser ses coûts** (économies d’échelle, productivité, achats). La compétitivité **hors-prix** repose sur la **différenciation** : offrir quelque chose que le client valorise et qu’il ne trouve pas ailleurs.' },
      { t: 'p', c: 'Quand une organisation dispose d’un atout que les concurrents ne peuvent pas (facilement) copier, elle bénéficie d’un **avantage concurrentiel** : une supériorité durable qui explique sa réussite. Selon **Porter**, il vient soit des **coûts** (être moins cher), soit de la **différenciation** (être unique).' },
      { t: 'example', h: 'Deux stratégies gagnantes', c: 'Lidl gagne par les **coûts** (prix bas, gammes courtes) : avantage par les coûts. Apple gagne par la **différenciation** (design, image, écosystème) et fait payer plus cher. Deux avantages concurrentiels opposés, tous deux efficaces.' },
      { t: 'p', c: 'Un avantage concurrentiel n’est jamais définitif : les concurrents imitent, la technologie évolue. L’organisation doit donc **innover** et **s’adapter** en permanence pour le préserver.' },
      { t: 'p', c: 'Une organisation peut aussi choisir de ne pas affronter tout le marché mais de se **concentrer sur un segment précis** : c’est la stratégie de **focalisation** (ou de niche). Elle domine alors une petite partie du marché que les grands concurrents négligent.' },
      { t: 'example', h: 'La stratégie de niche', c: 'Un fabricant qui ne vise que les **cyclistes urbains haut de gamme** occupe une **niche** rentable : trop petite pour intéresser les géants, mais où il devient la référence grâce à une offre très spécialisée.' },
      { t: 'tip', h: 'À retenir', c: 'La **compétitivité** = capacité à résister à la concurrence. Deux formes : **prix** (coûts maîtrisés, prix bas) et **hors-prix** (qualité, innovation, image). L’**avantage concurrentiel** (Porter) vient des **coûts**, de la **différenciation** ou de la **focalisation** (niche) ; il faut l’entretenir par l’innovation.' },
    ]),

    S('🔧 Produire durablement : contraintes, innovation, adaptation', [
      { t: 'p', c: 'Produire des biens et des services ne se fait pas dans un monde figé. L’organisation doit composer avec des **contraintes**, **innover** et **s’adapter** en permanence pour continuer à créer de la valeur — et le faire de façon **durable**.' },
      { t: 'p', c: 'L’organisation subit de nombreuses **contraintes** qui pèsent sur sa production et ses choix.' },
      { t: 'table', head: ['Type de contrainte', 'Exemples'], rows: [
        ['Économiques', 'Coûts, concurrence, pouvoir d’achat des clients'],
        ['Juridiques', 'Réglementation, normes, droit du travail'],
        ['Technologiques', 'Rythme de l’innovation, obsolescence'],
        ['Environnementales et sociales', 'Limiter la pollution, attentes des salariés et de la société'],
      ] },
      { t: 'p', c: 'Face à ces contraintes, l’**innovation** est un levier essentiel. Innover, c’est introduire une **nouveauté** : un nouveau produit (**innovation de produit**), une nouvelle façon de produire (**innovation de procédé**), un nouveau modèle économique ou une nouvelle organisation. L’innovation crée de la valeur et renouvelle l’avantage concurrentiel.' },
      { t: 'p', c: 'L’organisation doit aussi choisir **comment** elle produit : tout faire elle-même (**intégration**) ou confier certaines activités à d’autres (**externalisation / sous-traitance**). C’est l’arbitrage « **faire ou faire faire** ».' },
      { t: 'table', head: ['Choix', 'Avantages', 'Limites'], rows: [
        ['Intégrer (faire soi-même)', 'Contrôle, maîtrise de la qualité et du savoir-faire', 'Coût, rigidité, investissements lourds'],
        ['Externaliser (faire faire)', 'Souplesse, coûts réduits, recentrage sur le cœur de métier', 'Dépendance, perte de contrôle, risque social'],
      ] },
      { t: 'example', h: 'Produire durablement', c: 'Un fabricant de vélos choisit l’**éco-conception** (matériaux recyclables), relocalise une partie de sa production pour réduire les transports et met en place le **réemploi** des batteries. Il concilie production et respect de l’environnement : c’est une production **durable**.' },
      { t: 'p', c: 'Enfin, l’organisation doit **s’adapter** aux évolutions de son environnement (attentes des clients, numérique, transition écologique). L’**adaptation** et l’**agilité** deviennent des compétences clés pour durer.' },
      { t: 'tip', h: 'À retenir', c: 'L’organisation produit sous **contraintes** (économiques, juridiques, technologiques, environnementales). Elle **innove** (produit / procédé) et arbitre entre **intégrer** et **externaliser** (« faire ou faire faire »). Produire **durablement** = concilier production, société et environnement.' },
    ]),
  ],

  // #####################################################################
  // THÈME 2 — LES ORGANISATIONS ET LES ACTEURS
  // #####################################################################
  'mgmt-t2': [
    S('🧭 Décider dans l’organisation : niveaux et processus', [
      { t: 'p', c: 'Manager, c’est avant tout **décider**. Une organisation prend en permanence des décisions, des plus stratégiques (ouvrir une usine) aux plus quotidiennes (commander des fournitures). Comprendre **comment** on décide est essentiel.' },
      { t: 'p', c: 'On distingue **trois niveaux de décision**, selon leur portée et leur horizon de temps.' },
      { t: 'table', head: ['Niveau', 'Qui décide', 'Horizon', 'Exemple'], rows: [
        ['Stratégique', 'Direction générale', 'Long terme (années)', 'Lancer un nouveau marché, racheter un concurrent'],
        ['Tactique / de gestion', 'Encadrement intermédiaire', 'Moyen terme (mois)', 'Fixer un budget, recruter une équipe'],
        ['Opérationnel', 'Personnel d’exécution', 'Court terme (jour)', 'Planifier une tournée, passer une commande'],
      ] },
      { t: 'p', c: 'Les décisions **stratégiques** engagent l’avenir et sont difficiles à revenir en arrière ; les décisions **opérationnelles** sont répétitives et réversibles. Le management répartit ces décisions aux bons niveaux.' },
      { t: 'p', c: 'Herbert **Simon** a modélisé le **processus de décision** en trois étapes, résumées par le sigle **IMC**.' },
      { t: 'list', c: [
        '**I — Intelligence** : identifier et comprendre le problème, recueillir l’information.',
        '**M — Modélisation** : imaginer les solutions possibles et évaluer leurs conséquences.',
        '**C — Choix** : sélectionner la solution retenue, puis la mettre en œuvre et la contrôler.',
      ] },
      { t: 'p', c: 'Simon montre aussi que le décideur agit avec une **rationalité limitée** : il ne dispose jamais de **toute** l’information ni du temps nécessaire pour trouver la solution **parfaite**. Il choisit donc une solution **satisfaisante**, pas forcément optimale.' },
      { t: 'example', h: 'La rationalité limitée', c: 'Un dirigeant doit choisir un fournisseur en une semaine. Il ne peut pas comparer les 300 fournisseurs du monde : il en étudie 5, et retient celui qui convient « assez bien ». Décision **satisfaisante**, pas optimale — c’est la rationalité limitée.' },
      { t: 'warning', h: 'Piège fréquent', c: 'Ne dis pas qu’une bonne décision est forcément « la meilleure possible ». Selon Simon, à cause de la **rationalité limitée**, le décideur vise une solution **satisfaisante** compte tenu de l’information et du temps disponibles.' },
      { t: 'tip', h: 'À retenir', c: 'Trois niveaux de décision : **stratégique** (LT, direction), **tactique** (MT, encadrement), **opérationnel** (CT, exécution). Processus de **Simon (IMC)** : Intelligence → Modélisation → Choix. Le décideur a une **rationalité limitée** → il choisit une solution **satisfaisante**.' },
    ]),

    S('🔍 Le diagnostic stratégique : SWOT et PESTEL', [
      { t: 'p', c: 'Avant de décider d’une stratégie, l’organisation réalise un **diagnostic stratégique** : elle analyse sa situation, en interne comme en externe. C’est l’étape indispensable pour choisir la bonne direction.' },
      { t: 'p', c: 'Le diagnostic a **deux volets** complémentaires : le diagnostic **interne** (ce que l’organisation possède) et le diagnostic **externe** (ce qui l’entoure).' },
      { t: 'table', head: ['Diagnostic', 'On analyse', 'On cherche'], rows: [
        ['Interne', 'Ressources et compétences de l’organisation', 'Ses **forces** et ses **faiblesses**'],
        ['Externe', 'Marché, concurrence, environnement', 'Les **opportunités** et les **menaces**'],
      ] },
      { t: 'p', c: 'Ces quatre éléments se synthétisent dans la matrice **SWOT** (de l’anglais Strengths, Weaknesses, Opportunities, Threats), l’outil de diagnostic le plus courant.' },
      { t: 'table', head: ['', 'Positif', 'Négatif'], rows: [
        ['Interne', 'Forces (Strengths)', 'Faiblesses (Weaknesses)'],
        ['Externe', 'Opportunités (Opportunities)', 'Menaces (Threats)'],
      ] },
      { t: 'p', c: 'Pour analyser l’environnement **externe** de façon complète, on utilise souvent l’outil **PESTEL**, qui passe en revue six grandes familles de facteurs.' },
      { t: 'list', c: [
        '**P**olitique (stabilité, politiques publiques) · **É**conomique (croissance, pouvoir d’achat)',
        '**S**ocioculturel (modes de vie, démographie) · **T**echnologique (innovations)',
        '**E**nvironnemental (écologie, climat) · **L**égal (réglementation, normes)',
      ] },
      { t: 'example', h: 'Un diagnostic complet', c: 'Pour un fabricant de vélos électriques : **force** = savoir-faire et image ; **faiblesse** = dépendance à un seul produit ; **opportunité** (PESTEL) = essor de la mobilité douce et aides publiques ; **menace** = concurrence asiatique et hausse du prix des batteries.' },
      { t: 'p', c: 'Le diagnostic débouche sur l’identification des **facteurs clés de succès (FCS)** : les éléments qu’il faut absolument maîtriser pour réussir sur un marché (ex. l’innovation, les délais, le prix). La stratégie consistera à s’appuyer sur ses forces pour saisir les opportunités.' },
      { t: 'tip', h: 'À retenir', c: '**Diagnostic interne** → forces / faiblesses ; **diagnostic externe** → opportunités / menaces. Synthèse = **SWOT**. L’environnement externe s’analyse avec **PESTEL** (6 facteurs). Objectif : repérer les **facteurs clés de succès** pour bâtir la stratégie.' },
    ]),

    S('♟️ Les choix stratégiques', [
      { t: 'p', c: 'Une fois le diagnostic posé, l’organisation fait des **choix stratégiques** : elle décide **sur quels domaines** se développer et **comment**. Ces choix engagent son avenir sur le long terme.' },
      { t: 'p', c: 'Premier choix : **spécialisation** ou **diversification** — combien de métiers exercer ?' },
      { t: 'table', head: ['Stratégie', 'Principe', 'Avantages / Risques'], rows: [
        ['Spécialisation', 'Se concentrer sur un seul métier', 'Expertise, économies d’échelle / dépendance à un marché'],
        ['Diversification', 'Ajouter de nouveaux produits/marchés', 'Répartit le risque, croissance / dispersion des ressources'],
      ] },
      { t: 'p', c: 'Deuxième choix, au sein d’un domaine, l’organisation cherche un **avantage concurrentiel**. Selon **Porter**, deux grandes stratégies s’offrent à elle.' },
      { t: 'list', c: [
        '**Domination par les coûts** : produire moins cher que les concurrents pour proposer un prix bas.',
        '**Différenciation** : proposer une offre unique (qualité, innovation, image) que le client valorise et paie plus cher.',
      ] },
      { t: 'p', c: 'Troisième choix : **faire ou faire faire** — l’organisation peut **intégrer** des activités (les réaliser elle-même) ou les **externaliser** (les confier à des sous-traitants) pour se recentrer sur son cœur de métier.' },
      { t: 'p', c: 'Enfin, pour **grandir**, l’organisation choisit un **mode de développement**.' },
      { t: 'table', head: ['Mode de croissance', 'Comment', 'Exemple'], rows: [
        ['Croissance interne (organique)', 'Par ses propres moyens', 'Ouvrir de nouveaux magasins, embaucher'],
        ['Croissance externe', 'Par rachat / fusion', 'Racheter un concurrent'],
        ['Internationalisation', 'S’implanter à l’étranger', 'Exporter, ouvrir des filiales'],
      ] },
      { t: 'example', h: 'Enchaîner les choix', c: 'Un fabricant de vélos décide de **se spécialiser** (rester sur le vélo), de se **différencier** par le haut de gamme, d’**externaliser** l’assemblage des pièces standard, et de croître par **croissance externe** en rachetant une marque étrangère. Une stratégie cohérente combine ces choix.' },
      { t: 'tip', h: 'À retenir', c: 'Choix stratégiques : **spécialisation / diversification** ; avantage concurrentiel par les **coûts** ou la **différenciation** (Porter) ; **intégration / externalisation** (faire ou faire faire) ; croissance **interne / externe / internationalisation**.' },
    ]),

    S('👑 Le pouvoir, la gouvernance et les parties prenantes', [
      { t: 'p', c: 'Décider suppose d’avoir du **pouvoir**. Dans une organisation, la question « **qui commande, et au nom de quoi ?** » est centrale, car de nombreux acteurs cherchent à influencer les décisions.' },
      { t: 'p', c: 'Le **pouvoir** est la capacité d’un acteur à **imposer sa volonté** et à influencer le comportement des autres. Il ne faut pas le confondre avec l’**autorité**, qui est un pouvoir **reconnu comme légitime** (par le statut, la compétence ou le charisme).' },
      { t: 'example', h: 'Pouvoir et autorité', c: 'Un chef d’équipe a de l’**autorité** grâce à sa fonction (autorité statutaire). Mais un collègue expérimenté, sans titre, peut avoir un vrai **pouvoir** d’influence grâce à sa compétence reconnue. Pouvoir et autorité ne se superposent pas toujours.' },
      { t: 'p', c: 'La **gouvernance** désigne l’ensemble des **règles et mécanismes** qui organisent la direction et le contrôle de l’organisation : qui dirige, comment les dirigeants sont contrôlés, comment sont prises les grandes décisions (conseil d’administration, assemblée des actionnaires…).' },
      { t: 'p', c: 'Autour de l’organisation gravitent de nombreux acteurs aux intérêts variés : les **parties prenantes** (stakeholders). Chacune attend quelque chose de l’organisation et peut exercer une influence.' },
      { t: 'table', head: ['Parties prenantes internes', 'Parties prenantes externes'], rows: [
        ['Dirigeants, salariés, actionnaires', 'Clients, fournisseurs, banques'],
        ['Représentants du personnel', 'État, collectivités, associations, riverains'],
      ] },
      { t: 'p', c: 'Les intérêts des parties prenantes sont souvent **divergents** : les actionnaires veulent du profit, les salariés de meilleures conditions, les clients des prix bas, la société le respect de l’environnement. Le management doit **arbitrer** entre ces attentes et gérer les **contre-pouvoirs** (syndicats, associations, médias) qui limitent le pouvoir des dirigeants.' },
      { t: 'warning', h: 'Piège à éviter', c: 'Ne réduis pas les parties prenantes aux seuls actionnaires. Ce sont **tous** les acteurs concernés par l’organisation, internes **et** externes. Leur diversité explique les **conflits d’intérêts** que le management doit arbitrer.' },
      { t: 'tip', h: 'À retenir', c: '**Pouvoir** = imposer sa volonté ; **autorité** = pouvoir légitime. La **gouvernance** = règles de direction et de contrôle. Les **parties prenantes** (internes/externes) ont des intérêts **divergents** ; les **contre-pouvoirs** encadrent les dirigeants.' },
    ]),

    S('🗣️ Styles de direction et motivation des acteurs', [
      { t: 'p', c: 'Diriger des hommes, c’est adopter un **style de direction** et savoir **motiver**. Ces deux dimensions déterminent l’implication des salariés, donc la **performance sociale** de l’organisation.' },
      { t: 'p', c: 'Rensis **Likert** a distingué **quatre styles de direction**, selon le degré de participation laissé aux salariés.' },
      { t: 'table', head: ['Style', 'Caractéristique'], rows: [
        ['Autoritaire', 'Le dirigeant décide seul, impose, contrôle'],
        ['Paternaliste', 'Autorité forte mais bienveillante, récompenses et sanctions'],
        ['Consultatif', 'Le dirigeant consulte avant de décider'],
        ['Participatif', 'Les décisions sont prises en groupe, forte implication'],
      ] },
      { t: 'p', c: 'Le style dépend du dirigeant, de la situation et de la culture. Il est lié au degré de **centralisation** (décisions concentrées au sommet) ou de **décentralisation** (décisions déléguées aux équipes).' },
      { t: 'p', c: 'La **motivation** est ce qui pousse un individu à agir et à s’impliquer. Plusieurs théories l’expliquent.' },
      { t: 'table', head: ['Auteur', 'Idée clé'], rows: [
        ['Maslow', 'Pyramide des besoins : on cherche à satisfaire des besoins du plus vital (physiologique) au plus élevé (accomplissement)'],
        ['Herzberg', 'Facteurs d’hygiène (salaire, conditions) évitent l’insatisfaction ; facteurs de motivation (reconnaissance, responsabilités) motivent vraiment'],
        ['McGregor', 'Théorie X (l’individu fuit le travail → contrôle) vs théorie Y (l’individu aime se réaliser → autonomie)'],
      ] },
      { t: 'example', h: 'Motiver au-delà du salaire', c: 'Une entreprise augmente les salaires (facteur d’**hygiène** selon Herzberg) : les salariés cessent de se plaindre, mais restent peu motivés. En donnant plus de **responsabilités** et de **reconnaissance** (facteurs de motivation), elle relance vraiment l’implication.' },
      { t: 'p', c: 'Un salarié motivé et impliqué est plus productif, plus fidèle et de meilleure humeur : la motivation nourrit la **cohésion** et la **performance sociale**. C’est pourquoi le management des ressources humaines est stratégique.' },
      { t: 'tip', h: 'À retenir', c: '**Likert** : 4 styles (autoritaire, paternaliste, consultatif, participatif), liés à la (dé)centralisation. Motivation : **Maslow** (besoins), **Herzberg** (hygiène / motivation), **McGregor** (X / Y). La motivation nourrit la **performance sociale**.' },
    ]),

    S('🏗️ Structurer et coordonner l’action collective', [
      { t: 'p', c: 'Pour agir ensemble efficacement, une organisation doit se **structurer** (répartir les tâches et les responsabilités) et **coordonner** l’action de ses membres. Sans structure ni coordination, l’action collective devient chaotique.' },
      { t: 'p', c: 'La **structure** est la façon dont l’organisation **divise le travail** et **répartit le pouvoir**. On la représente par un **organigramme**. Il existe plusieurs grands types de structures.' },
      { t: 'table', head: ['Structure', 'Principe', 'Quand l’utiliser'], rows: [
        ['Fonctionnelle', 'Découpage par grandes fonctions (production, vente, RH…)', 'Petites et moyennes organisations'],
        ['Divisionnelle', 'Découpage par produits, marchés ou zones', 'Grandes organisations diversifiées'],
        ['Matricielle', 'Croisement fonctions × projets', 'Organisations complexes, gestion par projet'],
      ] },
      { t: 'p', c: 'Henry **Mintzberg** a montré que toute organisation combine des **mécanismes de coordination** pour faire travailler ses membres ensemble : l’**ajustement mutuel** (communication directe), la **supervision directe** (un chef donne des ordres) et la **standardisation** (des procédés, des résultats ou des qualifications).' },
      { t: 'p', c: 'Au-delà des règles, ce qui soude une organisation, c’est sa **culture** : l’ensemble des **valeurs, croyances et pratiques partagées** par ses membres. Une culture forte renforce la **cohésion**, le sentiment d’appartenance et facilite la coordination.' },
      { t: 'example', h: 'La culture qui fédère', c: 'Chez Decathlon, la culture du sport et de la responsabilité (les employés sont autonomes, appelés « coéquipiers ») crée une forte cohésion. Cette culture partagée coordonne les comportements mieux que de longues procédures.' },
      { t: 'p', c: 'Malgré tout, des **conflits** apparaissent (intérêts divergents, mauvaise communication). Bien gérés (négociation, médiation), ils peuvent même être **constructifs** et faire progresser l’organisation ; mal gérés, ils la paralysent.' },
      { t: 'p', c: 'La structure n’est pas figée : elle **évolue avec la stratégie**. L’historien Alfred **Chandler** a résumé cela par une formule célèbre : « **la structure suit la stratégie** ». Quand une organisation grandit, se diversifie ou s’internationalise, elle doit adapter sa structure.' },
      { t: 'example', h: 'Une structure qui évolue', c: 'Une start-up démarre en structure **fonctionnelle** (une équipe par métier). En grandissant et en se diversifiant, elle passe en structure **divisionnelle** (une division par produit ou par marché) pour rester pilotable. La structure s’adapte à la stratégie.' },
      { t: 'tip', h: 'À retenir', c: 'La **structure** divise le travail (fonctionnelle, divisionnelle, matricielle — l’**organigramme**). **Mintzberg** : coordination par **ajustement mutuel**, **supervision directe** ou **standardisation**. La **culture** (valeurs partagées) fédère ; les **conflits** se gèrent (négociation, médiation). Selon **Chandler**, « la structure suit la stratégie ».' },
    ]),
  ],

  // #####################################################################
  // THÈME 3 — LES ORGANISATIONS ET LA SOCIÉTÉ
  // #####################################################################
  'mgmt-t3': [
    S('🌍 La RSE et le développement durable', [
      { t: 'p', c: 'Les organisations ne vivent pas isolées : leur activité a des effets sur la **société** et l’**environnement**. On attend aujourd’hui d’elles qu’elles soient **responsables**. C’est tout l’enjeu de la **Responsabilité Sociétale des Entreprises (RSE)**.' },
      { t: 'p', c: 'La **RSE** est l’intégration **volontaire**, par une organisation, des préoccupations **sociales** et **environnementales** dans son activité et ses relations avec ses parties prenantes. C’est la mise en pratique, à l’échelle de l’organisation, du **développement durable**.' },
      { t: 'p', c: 'Le **développement durable** est un développement qui « **répond aux besoins du présent sans compromettre la capacité des générations futures à répondre aux leurs** » (rapport Brundtland, 1987). Il repose sur **trois piliers** à concilier.' },
      { t: 'table', head: ['Pilier', 'Objectif', 'Exemples d’actions'], rows: [
        ['Économique', 'Assurer la rentabilité et la pérennité', 'Rester rentable, investir, créer des emplois'],
        ['Social', 'Prendre soin des personnes', 'Bonnes conditions de travail, égalité, formation'],
        ['Environnemental', 'Préserver la planète', 'Réduire les émissions, recycler, éco-concevoir'],
      ] },
      { t: 'p', c: 'La RSE dépasse le simple respect de la loi : c’est une démarche **volontaire**. Des référentiels comme la norme **ISO 26000** guident les organisations, et beaucoup publient un **rapport RSE** pour rendre compte de leurs engagements.' },
      { t: 'example', h: 'Une démarche RSE concrète', c: 'Un fabricant de vélos critiqué pour l’empreinte carbone de ses batteries met en place le **recyclage** et le **réemploi** des batteries, choisit des fournisseurs responsables et communique de façon transparente. Il concilie ainsi économique, social et environnemental.' },
      { t: 'warning', h: 'Piège à éviter', c: 'La RSE ne se limite **pas** à l’environnement. Elle concilie **trois** dimensions (économique, sociale, environnementale). Attention aussi au **greenwashing** : afficher une image « verte » sans agir réellement.' },
      { t: 'p', c: 'La RSE est de plus en plus **encadrée par la loi** : les grandes entreprises doivent publier une **déclaration de performance extra-financière** (leurs impacts sociaux et environnementaux). Elle n’est donc plus seulement volontaire.' },
      { t: 'example', h: 'La RSE, un atout et pas seulement un coût', c: 'Une marque engagée (produits durables, transparence, conditions de travail exemplaires) attire des **clients** et des **talents** sensibles à ces valeurs. La responsabilité devient un levier de **compétitivité hors-prix** et d’attractivité.' },
      { t: 'tip', h: 'À retenir', c: '**RSE** = intégration volontaire (et de plus en plus encadrée) des enjeux **sociaux et environnementaux** dans l’activité. Elle applique le **développement durable** et ses **3 piliers** (économique, social, environnemental). Référentiel : **ISO 26000**. Elle peut être un **atout** (image, talents). Attention au **greenwashing**.' },
    ]),

    S('⚖️ Performance globale, éthique et intérêt collectif', [
      { t: 'p', c: 'Longtemps, on a jugé une organisation uniquement à sa **performance financière**. Aujourd’hui, on lui demande d’être performante **globalement** : la réussite économique ne doit pas se faire au détriment de la société ni de la planète.' },
      { t: 'p', c: 'La **performance globale** combine trois performances indissociables, en écho aux piliers du développement durable.' },
      { t: 'table', head: ['Performance', 'On mesure'], rows: [
        ['Économique', 'Rentabilité, profit, pérennité'],
        ['Sociale', 'Bien-être des salariés, égalité, faible turnover'],
        ['Environnementale', 'Réduction de l’empreinte écologique'],
      ] },
      { t: 'p', c: 'L’activité d’une organisation produit aussi des **externalités** : des effets, positifs ou négatifs, sur des tiers qui ne sont pas dans l’échange marchand. Une usine qui pollue crée une externalité **négative** (supportée par la collectivité) ; une entreprise qui forme des jeunes crée une externalité **positive**.' },
      { t: 'p', c: 'Se pose alors la question centrale du thème : la recherche de l’**intérêt individuel** (le profit) est-elle compatible avec l’**intérêt collectif** (le bien commun) ? La RSE et la performance globale sont une réponse : concilier les deux plutôt que les opposer.' },
      { t: 'p', c: 'Cela suppose une **éthique** : l’ensemble des **valeurs morales** qui guident les comportements (honnêteté, respect, équité). Chaque profession se dote aussi d’une **déontologie** : des règles de bonne conduite propres à un métier (ex. le secret professionnel).' },
      { t: 'example', h: 'Éthique et déontologie', c: 'Un expert-comptable doit respecter une **déontologie** (indépendance, secret professionnel) : ce sont les règles de sa profession. Au-delà, refuser de maquiller des comptes relève de l’**éthique** personnelle. Les deux protègent l’intérêt collectif.' },
      { t: 'p', c: 'Concilier les attentes des différentes **parties prenantes** est un exercice d’**arbitrage** permanent pour le management : ce qui satisfait les uns peut mécontenter les autres.' },
      { t: 'table', head: ['Partie prenante', 'Ce qu’elle attend'], rows: [
        ['Actionnaires', 'Rentabilité, dividendes'],
        ['Salariés', 'Salaire, bonnes conditions, sens du travail'],
        ['Clients', 'Qualité, prix, service'],
        ['Société et planète', 'Emplois locaux, respect de l’environnement'],
      ] },
      { t: 'tip', h: 'À retenir', c: 'La **performance globale** = économique + sociale + environnementale. L’activité génère des **externalités** (positives ou négatives). Enjeu : concilier **intérêt individuel** et **intérêt collectif** en **arbitrant** entre parties prenantes, grâce à l’**éthique** (valeurs) et à la **déontologie** (règles d’un métier).' },
    ]),

    S('🤝 L’économie sociale et solidaire (ESS)', [
      { t: 'p', c: 'Toutes les organisations ne cherchent pas d’abord le profit. Un ensemble d’organisations place l’**humain et la solidarité** au cœur de leur projet : c’est l’**économie sociale et solidaire (ESS)**, un pan important de la société.' },
      { t: 'p', c: 'L’**ESS** regroupe les organisations qui exercent une activité économique mais avec une **finalité sociale** prioritaire sur le profit. Elles réinvestissent leurs excédents dans le projet plutôt que de les distribuer, et fonctionnent souvent de façon **démocratique** (une personne = une voix).' },
      { t: 'table', head: ['Forme de l’ESS', 'Caractéristique'], rows: [
        ['Associations', 'But non lucratif, souvent d’intérêt général'],
        ['Coopératives', 'Détenues et gérées par leurs membres (salariés, clients…)'],
        ['Mutuelles', 'Solidarité entre adhérents (santé, assurance)'],
        ['Fondations', 'Financement d’une cause d’intérêt général'],
      ] },
      { t: 'p', c: 'L’ESS repose sur des **principes** communs : une **finalité sociale** (l’utilité plutôt que le profit), une **gouvernance démocratique**, une **lucrativité limitée** et une **gestion autonome**.' },
      { t: 'example', h: 'Une coopérative', c: 'Dans une coopérative agricole, ce sont les **agriculteurs adhérents** qui possèdent et dirigent l’organisation : ils décident ensemble (une voix chacun) et se partagent les services, pas seulement des dividendes. La finalité est l’intérêt de ses membres.' },
      { t: 'p', c: 'L’ESS montre qu’une organisation peut être **économiquement viable** tout en poursuivant un **but social** : elle illustre concrètement la conciliation entre intérêt individuel et intérêt collectif abordée dans le chapitre précédent.' },
      { t: 'p', c: 'L’ESS pèse un **poids réel** dans l’économie française : environ **10 % de l’emploi**, dans des secteurs variés (banque, assurance, santé, culture, sport, aide à la personne). Ce n’est pas un phénomène marginal.' },
      { t: 'example', h: 'Une mutuelle', c: 'Une **mutuelle santé** appartient à ses **adhérents** : ses excédents servent à améliorer les remboursements et les services, pas à rémunérer des actionnaires. La solidarité entre membres passe avant le profit.' },
      { t: 'tip', h: 'À retenir', c: 'L’**ESS** = organisations à **finalité sociale** prioritaire sur le profit : **associations, coopératives, mutuelles, fondations** (≈ 10 % de l’emploi). Principes : utilité sociale, **gouvernance démocratique** (1 personne = 1 voix), **lucrativité limitée**. Elle concilie économie et solidarité.' },
    ]),

    S('💻 La transformation numérique des organisations', [
      { t: 'p', c: 'Le **numérique** bouleverse en profondeur le fonctionnement des organisations et leurs relations avec la société. Cette **transformation numérique** est l’un des grands enjeux du management contemporain.' },
      { t: 'p', c: 'Le numérique fait apparaître de **nouveaux modèles économiques** : plateformes (mise en relation), abonnement, gratuité financée par la publicité, économie collaborative. Il modifie la façon de produire, de vendre et de communiquer.' },
      { t: 'table', head: ['Avant', 'Avec le numérique'], rows: [
        ['Vente en magasin uniquement', 'E-commerce, vente en ligne, phygital'],
        ['Communication descendante', 'Réseaux sociaux, interaction, avis clients'],
        ['Décisions à l’intuition', 'Décisions guidées par les données (data)'],
      ] },
      { t: 'p', c: 'Au cœur de cette transformation : les **données (data)**. Les organisations collectent d’énormes quantités d’informations (sur les clients, les ventes, les comportements) qu’elles analysent pour **mieux décider**, personnaliser l’offre et gagner en efficacité. La donnée devient une **ressource stratégique**.' },
      { t: 'p', c: 'Le numérique transforme aussi la **relation client** : personnalisation, service en continu, communautés en ligne, co-création. Le client devient acteur (avis, partages) et l’organisation doit soigner sa **e-réputation**.' },
      { t: 'example', h: 'La donnée au service de la décision', c: 'Un site de vente analyse les achats de ses clients pour recommander des produits, ajuster ses stocks et cibler ses promotions. Grâce aux **données**, il décide plus finement et vend davantage. La data crée de la valeur.' },
      { t: 'p', c: 'Cette transformation exige d’**investir** (outils, formation) et de **conduire le changement** : accompagner les salariés, faire évoluer les métiers et l’organisation. Toutes les organisations ne partent pas à égalité face au numérique.' },
      { t: 'p', c: 'Le numérique abaisse aussi les **barrières à l’entrée** : une petite structure peut toucher le monde entier via une plateforme. Mais l’inverse est vrai — la concurrence devient **mondiale** et de nouveaux acteurs peuvent bousculer un marché très vite.' },
      { t: 'example', h: 'Un nouveau modèle économique', c: 'Une marque vend en **direct en ligne** (sans intermédiaire), récolte les **données** de ses clients et ajuste son offre en temps réel. Le numérique lui permet de capter plus de valeur — mais l’expose à une concurrence venue du monde entier.' },
      { t: 'tip', h: 'À retenir', c: 'La **transformation numérique** crée de **nouveaux modèles** (plateformes, abonnement, vente directe…), place la **donnée (data)** au centre des décisions et transforme la **relation client**. Elle ouvre des marchés mais **mondialise la concurrence** ; elle exige d’investir et d’**accompagner le changement**.' },
    ]),

    S('🔐 Numérique : enjeux, risques et responsabilité', [
      { t: 'p', c: 'La transformation numérique n’apporte pas que des opportunités : elle crée aussi des **risques** et des **responsabilités** nouvelles. Une organisation responsable doit maîtriser les enjeux du numérique.' },
      { t: 'p', c: 'Premier enjeu : la **cybersécurité**. En dépendant de systèmes d’information, les organisations deviennent vulnérables aux **cyberattaques** (piratage, rançongiciels, vol de données). Protéger ses systèmes et ses données est devenu vital.' },
      { t: 'p', c: 'Deuxième enjeu : la **protection des données personnelles**. Le **RGPD** (Règlement général sur la protection des données) impose aux organisations de collecter les données de façon **loyale**, avec le **consentement** des personnes, pour une **finalité précise**, et de les **sécuriser**. La **CNIL** veille au respect de ces règles.' },
      { t: 'table', head: ['Enjeu numérique', 'Réponse de l’organisation'], rows: [
        ['Cyberattaques', 'Sécuriser les systèmes, sauvegarder, former le personnel'],
        ['Données personnelles', 'Respecter le RGPD (consentement, finalité, sécurité)'],
        ['Automatisation / IA', 'Accompagner les salariés, faire évoluer les métiers'],
        ['Fracture numérique', 'Ne pas exclure les publics éloignés du numérique'],
      ] },
      { t: 'p', c: 'Troisième enjeu : l’**automatisation** et l’**intelligence artificielle** transforment les emplois. Certaines tâches disparaissent, d’autres apparaissent : l’organisation doit **former** et **reconvertir**, ce qui rejoint sa responsabilité **sociale**.' },
      { t: 'p', c: 'Enfin, le numérique pose des questions d’**éthique** : usage des données, transparence des algorithmes, respect de la vie privée, impact environnemental du numérique (pollution numérique). La **responsabilité** de l’organisation s’étend à ces sujets.' },
      { t: 'warning', h: 'Piège à éviter', c: 'Le numérique n’est pas que positif : il crée des **risques** (cyberattaques, atteintes à la vie privée, exclusion). Une bonne copie montre **et** les opportunités **et** les enjeux/risques, et relie ces derniers à la **RSE**.' },
      { t: 'p', c: 'La sécurité n’est pas seulement un problème **technique** : la principale faille est souvent **humaine** (mot de passe faible, hameçonnage, clé USB piégée). D’où l’importance de **former** et de sensibiliser les salariés, autant que d’installer des logiciels de protection.' },
      { t: 'example', h: 'Une cyberattaque', c: 'Une entreprise victime d’un **rançongiciel** voit ses données chiffrées et son activité paralysée plusieurs jours, jusqu’à payer une rançon. Des **sauvegardes** régulières et la **formation** du personnel auraient fortement limité les dégâts.' },
      { t: 'tip', h: 'À retenir', c: 'Enjeux du numérique : **cybersécurité** (la faille est souvent **humaine**), **protection des données** (RGPD, CNIL), **automatisation/IA** (évolution des emplois), **fracture numérique** et **éthique**. La maîtrise de ces risques fait partie de la **responsabilité** de l’organisation.' },
    ]),

    S('🧑‍💻 Les mutations du travail et des modes de vie', [
      { t: 'p', c: 'Le numérique et les nouvelles attentes sociales transforment aussi le **travail** lui-même et les **modes de vie**. Le management doit accompagner ces mutations pour rester attractif et performant.' },
      { t: 'p', c: 'Le **télétravail** s’est fortement développé grâce aux outils numériques. Il offre de l’**autonomie** et une meilleure conciliation vie privée / vie professionnelle, mais comporte des **risques** (isolement, perte de cohésion, difficulté à déconnecter) que l’organisation doit gérer.' },
      { t: 'table', head: ['Atouts du télétravail', 'Risques du télétravail'], rows: [
        ['Autonomie, flexibilité', 'Isolement, perte de lien social'],
        ['Moins de trajets, gain de temps', 'Frontière vie pro / perso floue'],
        ['Économies de locaux', 'Cohésion d’équipe plus difficile'],
      ] },
      { t: 'p', c: 'De nouvelles **formes d’organisation du travail** apparaissent : équipes autonomes, management par projet, horaires flexibles, espaces de coworking. On cherche à donner plus de **sens** et d’**autonomie**, en réponse aux attentes des salariés.' },
      { t: 'p', c: 'La **qualité de vie au travail (QVT)** devient un enjeu majeur : bien-être, prévention des risques psychosociaux (stress, burn-out), reconnaissance. Un salarié épanoui est plus impliqué : la QVT rejoint la **performance sociale** et la **RSE**.' },
      { t: 'p', c: 'Le numérique fait aussi émerger de nouvelles réalités comme l’**ubérisation** (travail à la demande via des plateformes), qui interroge le statut des travailleurs et la protection sociale. Les modes de **consommation** évoluent en parallèle (consommation responsable, seconde main, économie du partage).' },
      { t: 'example', h: 'Accompagner la mutation', c: 'Une entreprise met en place le télétravail deux jours par semaine, des horaires souples et un droit à la déconnexion. Elle répond aux attentes des salariés tout en préservant la cohésion : elle transforme une contrainte en atout d’attractivité.' },
      { t: 'p', c: 'Ces mutations obligent le management à **repenser son attractivité** : le sens du travail, l’autonomie et l’équilibre des temps de vie sont devenus des critères de choix décisifs, en particulier pour les jeunes diplômés.' },
      { t: 'example', h: 'La marque employeur', c: 'Pour attirer les talents, une entreprise met en avant sa **flexibilité** (télétravail, horaires souples), ses **valeurs** et sa **QVT**. Le management des ressources humaines devient un véritable **argument de recrutement** face à la concurrence.' },
      { t: 'tip', h: 'À retenir', c: 'Le travail se transforme : **télétravail** (autonomie mais isolement), nouvelles **organisations** (autonomie, projet), **qualité de vie au travail (QVT)**, **ubérisation**. Bien accompagnées, ces mutations servent la **performance sociale** et l’**attractivité** (marque employeur) de l’organisation.' },
    ]),
  ],
}
