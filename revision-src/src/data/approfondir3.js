// APPROFONDISSEMENT (3) — Histoire-Géographie (Terminale STMG).
// Chapitres développés ajoutés à chaque thème : notions clés, chronologies,
// analyses approfondies, méthode de l'épreuve (analyse de document) et études
// de cas. Fusionné dans data/index.js (ajout à la suite + catégorie repliable).
const S = (h, blocks) => ({ h, blocks })

export const APPROF3 = {
  // #####################################################################
  // HISTOIRE
  // #####################################################################

  // ---- Thème 1 — Totalitarismes et Seconde Guerre mondiale ----------
  'hg-h1': [
    S('📖 Les notions clés du totalitarisme', [
      { t: 'p', c: 'Un **régime totalitaire** ne se contente pas d’être une dictature : il cherche à contrôler **la totalité** de la vie des individus — la politique, l’économie, la culture, les loisirs, jusqu’aux pensées. L’historienne Hannah Arendt en a fait l’analyse de référence.' },
      { t: 'table', head: ['Caractéristique', 'Traduction concrète'], rows: [
        ['Parti unique', 'Un seul parti, fusionné avec l’État'],
        ['Chef charismatique', 'Culte du chef (Führer, Duce, « Petit Père des peuples »)'],
        ['Idéologie officielle', 'Une doctrine imposée à tous'],
        ['Terreur et police politique', 'Gestapo, NKVD, OVRA : arrestations, camps'],
        ['Propagande et embrigadement', 'Presse, radio, jeunesses, censure'],
        ['Économie dirigée', 'Au service de l’État et du réarmement'],
      ] },
      { t: 'p', c: 'Le but est de créer un « homme nouveau » entièrement dévoué au régime, et d’écraser toute **opposition**. L’individu n’existe plus que par et pour la masse encadrée par le parti.' },
      { t: 'tip', h: 'À retenir', c: 'Dictature = confiscation du pouvoir politique. **Totalitarisme** = contrôle **total** de la société **et** des consciences, par la propagande **et** la terreur.' },
    ]),
    S('⚖️ Trois totalitarismes comparés', [
      { t: 'p', c: 'Les trois grands régimes totalitaires de l’entre-deux-guerres partagent des méthodes, mais poursuivent des **idéologies** différentes. Les comparer est un classique de l’épreuve.' },
      { t: 'table', head: ['', 'Italie fasciste', 'Allemagne nazie', 'URSS stalinienne'], rows: [
        ['Chef', 'Mussolini (1922)', 'Hitler (1933)', 'Staline (fin années 1920)'],
        ['Idéologie', 'Nationalisme, État fort', 'Racisme, antisémitisme, espace vital', 'Communisme, lutte des classes'],
        ['Ennemi désigné', 'L’opposant politique', 'Les Juifs, les « races inférieures »', 'Les « ennemis du peuple », koulaks'],
        ['Police', 'OVRA', 'Gestapo, SS', 'NKVD'],
      ] },
      { t: 'p', c: 'Le nazisme se distingue par son **racisme** érigé en politique d’État : la « race aryenne » supérieure, l’antisémitisme au cœur du projet, la volonté d’un **espace vital** (Lebensraum) à conquérir à l’Est. Le stalinisme s’appuie sur la **lutte des classes** et la collectivisation forcée, au prix de famines (Holodomor) et des **purges** (Grande Terreur de 1937-1938).' },
      { t: 'warning', h: 'Piège', c: 'Ne pas mettre un signe « égal » entre les trois : mêmes **méthodes** totalitaires, mais **idéologies** et **victimes** différentes. Le nazisme mène au génocide.' },
    ]),
    S('🗓️ Chronologie : de la montée des périls à la guerre', [
      { t: 'p', c: 'La marche à la guerre s’explique par les échecs de la paix de 1919, la crise de 1929 et la **politique d’expansion** des régimes fascistes, face à des démocraties qui reculent (appeasement).' },
      { t: 'table', head: ['Date', 'Événement'], rows: [
        ['1933', 'Hitler chancelier ; l’Allemagne quitte la SDN'],
        ['1935-36', 'Réarmement, remilitarisation de la Rhénanie'],
        ['1938', 'Anschluss (Autriche) ; accords de Munich (Sudètes)'],
        ['août 1939', 'Pacte germano-soviétique'],
        ['1er sept. 1939', 'Invasion de la Pologne → début de la guerre'],
      ] },
      { t: 'p', c: 'Les **accords de Munich** (septembre 1938), où la France et le Royaume-Uni cèdent les Sudètes à Hitler pour « sauver la paix », symbolisent l’échec de la fermeté démocratique. Le **pacte germano-soviétique** (août 1939) libère Hitler à l’Ouest et scelle le partage de la Pologne.' },
      { t: 'tip', h: 'À retenir', c: 'Trois causes s’enchaînent : un traité de Versailles ressenti comme une humiliation, la **crise de 1929**, et l’**expansionnisme** nazi face au recul des démocraties.' },
    ]),
    S('🔥 Une guerre d’anéantissement et la Shoah', [
      { t: 'p', c: 'La Seconde Guerre mondiale (1939-1945) est une **guerre totale** (toutes les ressources mobilisées) et une **guerre d’anéantissement** : il ne s’agit plus seulement de vaincre l’armée ennemie, mais de détruire des populations. Les combats font environ **50 à 60 millions de morts**, en majorité des **civils**.' },
      { t: 'p', c: 'La **Shoah** est le génocide des Juifs d’Europe, planifié et industrialisé par le régime nazi. Après les persécutions (lois de Nuremberg 1935) et les ghettos, vient l’extermination : les fusillades de masse de la **Shoah par balles** (Einsatzgruppen), puis les **camps d’extermination** (Auschwitz-Birkenau, Treblinka…) décidés à la conférence de **Wannsee** (janvier 1942). Environ **6 millions** de Juifs sont assassinés, ainsi que les Tsiganes (génocide), et de nombreux autres groupes persécutés.' },
      { t: 'warning', h: 'Vocabulaire précis', c: 'Un **génocide** est la destruction planifiée et systématique d’un groupe en tant que tel. La Shoah en est l’exemple, mené à l’échelle industrielle — ce qui la distingue des autres massacres de la guerre.' },
      { t: 'tip', h: 'À retenir', c: 'Guerre **totale** + guerre **d’anéantissement** + **génocide** : trois notions à distinguer et à illustrer par des faits précis (Wannsee, Auschwitz, Einsatzgruppen).' },
    ]),
    S('🇫🇷 La France dans la guerre', [
      { t: 'p', c: 'En 1940, la France est vaincue en six semaines. Le maréchal **Pétain** signe l’armistice et instaure l’**État français** (régime de Vichy), autoritaire, qui pratique la **collaboration** avec l’Allemagne et participe à la persécution des Juifs (rafle du Vél d’Hiv, 1942).' },
      { t: 'p', c: 'Face à lui, la **Résistance** s’organise : à Londres, le général **de Gaulle** lance l’appel du **18 juin 1940** et incarne la France libre ; à l’intérieur, des réseaux et maquis agissent, unifiés par **Jean Moulin** (Conseil national de la Résistance, 1943). La Libération (débarquements de 1944) permet le rétablissement de la République.' },
      { t: 'tip', h: 'À retenir', c: 'Deux France s’opposent : **Vichy** (Pétain, collaboration) et la **Résistance** (de Gaulle, Jean Moulin). Bien situer l’appel du **18 juin 1940** et le rôle du **CNR**.' },
    ]),
    S('✍️ MÉTHODE — Analyser un document en histoire', [
      { t: 'p', c: 'L’épreuve de STMG repose souvent sur l’**analyse de document(s)**. La méthode compte autant que les connaissances : il faut **prélever** des informations dans le document **et** les **expliquer** avec le cours.' },
      { t: 'list', c: [
        '**1. Présenter le document** : nature (photo, affiche, texte, discours), auteur, date, contexte, destinataire.',
        '**2. Répondre aux questions** en **citant** le document (« comme le montre la ligne… ») puis en **expliquant** avec ses connaissances.',
        '**3. Prendre du recul** : quel est l’intérêt du document ? Ses **limites** (point de vue, propagande, source partielle) ?',
      ] },
      { t: 'warning', h: 'Les deux pièges', c: 'La **paraphrase** (recopier le document sans l’expliquer) et le **hors-sujet** (réciter le cours sans utiliser le document). Il faut **relier** les deux en permanence.' },
      { t: 'tip', h: 'Réflexe', c: 'Un document est toujours **daté** et **situé** : une affiche de propagande n’est pas une preuve neutre, c’est un point de vue à analyser **en tant que tel**.' },
    ]),
  ],

  // ---- Thème 2 — Du monde bipolaire au monde multipolaire -----------
  'hg-h2': [
    S('📖 La guerre froide : un monde coupé en deux', [
      { t: 'p', c: 'Après 1945, les deux vainqueurs, les **États-Unis** et l’**URSS**, deviennent rivaux : c’est la **guerre froide** (1947-1991), un affrontement idéologique, politique et militaire… **sans guerre directe** entre eux (d’où « froide »), par peur de l’arme nucléaire (« équilibre de la terreur »).' },
      { t: 'table', head: ['', 'Bloc de l’Ouest', 'Bloc de l’Est'], rows: [
        ['Leader', 'États-Unis', 'URSS'],
        ['Modèle', 'Démocratie libérale, capitalisme', 'Parti unique, communisme'],
        ['Alliance militaire', 'OTAN (1949)', 'Pacte de Varsovie (1955)'],
        ['Aide économique', 'Plan Marshall (1947)', 'Kominform / CAEM'],
      ] },
      { t: 'p', c: 'Le monde est **bipolaire** : chaque superpuissance impose son modèle à sa zone d’influence. Le **rideau de fer** (Churchill) coupe l’Europe ; **Berlin**, ville divisée, en devient le symbole (blocus de 1948, **mur** de 1961 à 1989).' },
      { t: 'tip', h: 'À retenir', c: 'Guerre froide = affrontement **indirect** de deux modèles, par pays interposés (Corée, Vietnam, Cuba…), sous la menace nucléaire.' },
    ]),
    S('🗓️ Chronologie de la guerre froide', [
      { t: 'p', c: 'La guerre froide alterne des phases de **tension** et de **détente**, jusqu’à l’effondrement du bloc soviétique.' },
      { t: 'table', head: ['Date', 'Événement'], rows: [
        ['1947', 'Doctrines Truman / Jdanov : le monde se divise'],
        ['1948-49', 'Blocus de Berlin ; création de l’OTAN'],
        ['1962', 'Crise des missiles de Cuba (au bord du nucléaire)'],
        ['1989', 'Chute du mur de Berlin'],
        ['1991', 'Dislocation de l’URSS → fin de la guerre froide'],
      ] },
      { t: 'p', c: 'La **crise de Cuba** (1962) est le moment où le monde frôle la guerre nucléaire : elle débouche paradoxalement sur une **détente**. La **chute du mur de Berlin** (9 novembre 1989) puis la **disparition de l’URSS** (1991) marquent la victoire du modèle occidental.' },
      { t: 'tip', h: 'À retenir', c: 'Trois bornes essentielles : **1947** (début), **1962** (Cuba, apogée de la tension), **1989-1991** (fin).' },
    ]),
    S('🌍 Décolonisation et émergence du Tiers-Monde', [
      { t: 'p', c: 'Après 1945, les empires coloniaux s’effondrent : c’est la **décolonisation**. Affaiblies par la guerre, contestées par des mouvements nationalistes, les puissances européennes se retirent — parfois pacifiquement (Inde, 1947), parfois au prix de guerres (Indochine, **Algérie** 1954-1962).' },
      { t: 'p', c: 'Les nouveaux États, souvent pauvres, forment le **Tiers-Monde**. À la conférence de **Bandung** (1955), ils affirment leur volonté de ne pas choisir entre les deux blocs : c’est le **non-alignement**. Mais le sous-développement et la dépendance économique persistent.' },
      { t: 'tip', h: 'À retenir', c: 'Décolonisation = accès à l’indépendance des colonies. **Bandung (1955)** = acte de naissance du Tiers-Monde et du **non-alignement**.' },
    ]),
    S('🌐 Vers un monde multipolaire', [
      { t: 'p', c: 'La disparition de l’URSS (1991) laisse les **États-Unis** seule superpuissance : un moment « **unipolaire** ». Mais cette domination est vite contestée. De nouvelles puissances **émergent** — la **Chine** au premier rang, mais aussi l’Inde, le Brésil, la Russie —, tandis que des acteurs non étatiques (firmes, ONG, groupes terroristes) pèsent de plus en plus.' },
      { t: 'p', c: 'Le monde devient **multipolaire** : plusieurs pôles de puissance coexistent et rivalisent (économie, technologie, influence). Les attentats du **11 septembre 2001** révèlent de nouvelles menaces ; la montée de la Chine redessine les équilibres.' },
      { t: 'tip', h: 'À retenir', c: 'Enchaînement : monde **bipolaire** (1947-1991) → moment **unipolaire** (années 1990, hyperpuissance américaine) → monde **multipolaire** (émergence de la Chine et d’autres pôles).' },
    ]),
    S('✍️ MÉTHODE — Construire une réponse structurée', [
      { t: 'p', c: 'Quand l’épreuve demande une **réponse développée** (paragraphe argumenté), la structure fait gagner des points : une idée, un exemple, à chaque fois.' },
      { t: 'list', c: [
        '**Introduction courte** : reformuler la question, annoncer le fil.',
        '**Développement** : 2 ou 3 idées, chacune **illustrée** par un fait précis (date, acteur, lieu).',
        '**Conclusion** : répondre clairement à la question posée.',
      ] },
      { t: 'example', h: 'Exemple d’idée + fait', c: '« La guerre froide oppose deux modèles sans conflit direct : ainsi, lors de la **crise de Cuba (1962)**, les deux Grands reculent au bord de la guerre nucléaire. »' },
      { t: 'tip', h: 'Réflexe', c: 'Une affirmation **sans date ni exemple** ne convainc pas. À chaque idée, colle un **fait précis** tiré du cours.' },
    ]),
  ],

  // ---- Thème 3 — La France depuis 1945 ------------------------------
  'hg-h3': [
    S('🏛️ De la IVe à la Ve République', [
      { t: 'p', c: 'À la Libération, la France rétablit la République (la **IVe**, 1946). Mais elle souffre d’une grande **instabilité** (gouvernements qui tombent sans cesse) et s’enlise dans les guerres coloniales. La crise algérienne de **1958** provoque son effondrement et le retour de **de Gaulle**.' },
      { t: 'p', c: 'De Gaulle fonde la **Ve République** (Constitution de 1958) : un régime à **exécutif fort**, avec un **président** puissant, élu au **suffrage universel direct** à partir de **1962**. C’est le régime actuel, marqué par des périodes de **cohabitation** et l’alternance gauche/droite.' },
      { t: 'tip', h: 'À retenir', c: 'IVe République = instabilité + guerres coloniales. **Ve République (1958)** = pouvoir présidentiel fort. Élection du président au suffrage universel direct depuis **1962**.' },
    ]),
    S('👥 Une société transformée', [
      { t: 'p', c: 'De 1945 aux années 1970, la France connaît les **Trente Glorieuses** : forte croissance, plein emploi, société de consommation, exode rural et urbanisation. La société se transforme en profondeur.' },
      { t: 'list', c: [
        '**Immigration** : main-d’œuvre étrangère pour reconstruire et produire.',
        '**Place des femmes** : droit de vote (1944), puis conquêtes des années 1960-70 (contraception 1967, IVG 1975), entrée massive sur le marché du travail.',
        '**État-providence** : la Sécurité sociale (1945) protège contre les risques (maladie, chômage, vieillesse).',
      ] },
      { t: 'p', c: 'Mai **1968** exprime une contestation sociale et culturelle. Après 1974, les **crises économiques** et la montée du chômage remettent en cause ce modèle, sans effacer les transformations sociales.' },
      { t: 'tip', h: 'À retenir', c: 'Trente Glorieuses (1945-1975) = croissance + consommation + transformations sociales (femmes, immigration, État-providence).' },
    ]),
    S('🇪🇺 La France, l’Europe et le monde', [
      { t: 'p', c: 'Après 1945, la France s’engage dans la **construction européenne** pour garantir la paix et la prospérité : CECA (1951), traité de **Rome** (1957, CEE), puis Union européenne (**Maastricht**, 1992) et l’**euro** (2002). Elle reste une puissance moyenne mais influente (siège permanent à l’ONU, dissuasion nucléaire, francophonie).' },
      { t: 'tip', h: 'À retenir', c: 'La France est un **membre fondateur** de la construction européenne. Repères : **1957** (traité de Rome), **1992** (Maastricht), **2002** (euro).' },
    ]),
    S('✍️ MÉTHODE — Situer et dater', [
      { t: 'p', c: 'En histoire, la **précision chronologique** distingue une bonne copie. Il faut **mémoriser** un petit nombre de dates-repères et savoir **situer** un événement dans son contexte.' },
      { t: 'table', head: ['Date clé', 'À associer'], rows: [
        ['1944', 'Droit de vote des femmes'],
        ['1958', 'Ve République'],
        ['1962', 'Fin de la guerre d’Algérie ; président au SUD'],
        ['1981', 'Alternance (Mitterrand)'],
      ] },
      { t: 'tip', h: 'Réflexe', c: 'Apprends les dates par **blocs de sens** (une date + un événement + sa portée), pas comme une liste vide. Une date bien placée vaut mieux que dix approximatives.' },
    ]),
  ],

  // #####################################################################
  // GÉOGRAPHIE
  // #####################################################################

  // ---- Thème G1 — Mers et océans au cœur de la mondialisation -------
  'hg-g1': [
    S('🌊 Des espaces essentiels à la mondialisation', [
      { t: 'p', c: 'Les **mers et océans** couvrent 71 % de la planète et sont devenus le **cœur de la mondialisation** : environ **80 % du commerce mondial** de marchandises transite par la mer, dans des porte-conteneurs géants. Ils fournissent aussi des ressources (pêche, énergie, minerais) et sont traversés par les **câbles sous-marins** qui portent l’essentiel d’Internet.' },
      { t: 'list', c: [
        '**Routes maritimes** : des axes majeurs relient les grandes façades (Asie ↔ Europe, transpacifique).',
        '**Points de passage stratégiques** : canaux de **Suez** et de **Panama**, détroits d’**Ormuz** et de **Malacca** — vulnérables (blocages, piraterie).',
        '**Ports mondiaux** (hubs) : Shanghai, Singapour, Rotterdam concentrent les flux.',
      ] },
      { t: 'tip', h: 'À retenir', c: 'La **maritimisation** (poids croissant de la mer dans l’économie) fait des océans des espaces **stratégiques**. Les points de passage (Suez, Ormuz, Malacca) sont des lieux clés à mémoriser.' },
    ]),
    S('⚔️ Des espaces convoités et à protéger', [
      { t: 'p', c: 'Parce qu’ils sont riches et stratégiques, les océans sont **convoités** : les États étendent leur contrôle grâce aux **ZEE** (zones économiques exclusives, 200 milles marins) définies par le droit de la mer. D’où des **tensions** (mer de Chine méridionale, Arctique qui s’ouvre avec la fonte des glaces).' },
      { t: 'p', c: 'Mais les océans sont aussi **menacés** : surpêche, **pollution plastique**, réchauffement, acidification. Leur **protection** devient un enjeu mondial (aires marines protégées, accords internationaux), difficile à faire respecter en haute mer.' },
      { t: 'tip', h: 'À retenir', c: 'Les océans sont à la fois **convoités** (ressources, ZEE, routes) et **fragiles** (pollution, surpêche) : concilier exploitation et protection est le grand défi.' },
    ]),
    S('✍️ MÉTHODE — Lire une carte et un croquis', [
      { t: 'p', c: 'En géographie, la **carte** est un document central. Il faut savoir la **lire** (titre, légende, échelle, source) et en **tirer** des informations pour répondre.' },
      { t: 'list', c: [
        '**Localiser** : où se situe le phénomène (continent, façade, détroit) ?',
        '**Décrire** : quels flux, quelles inégalités, quels pôles ?',
        '**Expliquer** : pourquoi ici ? (avec le cours)',
      ] },
      { t: 'tip', h: 'Réflexe croquis', c: 'Un bon croquis a **toujours** un **titre**, une **légende organisée** (par thèmes), une **orientation** et une **échelle**. Des figurés simples : points (villes), flèches (flux), aplats (zones).' },
    ]),
  ],

  // ---- Thème G2 — Des territoires inégalement intégrés --------------
  'hg-g2': [
    S('🏙️ La métropolisation, moteur de l’intégration', [
      { t: 'p', c: 'La mondialisation ne touche pas tous les territoires de la même façon : elle **sélectionne** les espaces les mieux connectés. Le phénomène majeur est la **métropolisation** : la concentration des hommes, des activités et du pouvoir dans les grandes **métropoles**.' },
      { t: 'p', c: 'Ces métropoles (Londres, New York, Tokyo, Shanghai…) sont reliées entre elles en un **archipel mondial** : elles échangent davantage entre elles qu’avec leur propre arrière-pays. On y trouve les fonctions de **commandement** (sièges sociaux, bourses, universités, aéroports).' },
      { t: 'tip', h: 'À retenir', c: 'La **métropolisation** concentre richesse et pouvoir dans quelques grandes villes mondiales, formant un **archipel** connecté — au risque de laisser des territoires « à l’écart ».' },
    ]),
    S('🌐 Nord/Sud : des inégalités persistantes', [
      { t: 'p', c: 'À l’échelle mondiale, de fortes **inégalités** demeurent entre des espaces **intégrés** (les pôles de la Triade — Amérique du Nord, Europe, Asie de l’Est), des pays **émergents** (Chine, Inde, Brésil) qui montent en puissance, et des espaces **en marge** (nombre de pays d’Afrique subsaharienne), peu connectés aux flux.' },
      { t: 'p', c: 'Ces inégalités se lisent aussi **à l’intérieur** des pays : des métropoles dynamiques côtoient des régions délaissées. La mondialisation crée donc partout des **gagnants** et des **perdants**.' },
      { t: 'tip', h: 'À retenir', c: 'Territoires **intégrés** (Triade), **émergents** (BRICS) et **en marge** : la mondialisation est **sélective** et creuse les inégalités, entre pays comme à l’intérieur des pays.' },
    ]),
    S('✍️ MÉTHODE — Analyser des documents géographiques', [
      { t: 'p', c: 'Face à plusieurs documents (carte, texte, graphique, photo), la clé est de les **confronter** : que disent-ils ensemble ? Se complètent-ils, se nuancent-ils ?' },
      { t: 'list', c: [
        '**Identifier** chaque document (nature, source, date, échelle).',
        '**Prélever** l’information utile dans chacun.',
        '**Croiser** : mettre en relation les documents pour répondre à la question.',
      ] },
      { t: 'tip', h: 'Réflexe', c: 'Un graphique se **décrit** (tendance générale, écarts, pics) avant d’être **expliqué**. Toujours donner des **chiffres** tirés du document.' },
    ]),
  ],

  // ---- Thème G3 — La France dans l'UE et la mondialisation ----------
  'hg-g3': [
    S('🇫🇷 Les atouts de la France', [
      { t: 'p', c: 'La France est une **puissance moyenne bien intégrée** à la mondialisation. Ses atouts : une grande **métropole mondiale**, **Paris** (fonctions de commandement, tourisme n°1 au monde), un vaste **domaine maritime** (2e ZEE mondiale grâce à l’outre-mer), des **firmes transnationales** (luxe, aéronautique, agroalimentaire), et son appartenance à l’**Union européenne**.' },
      { t: 'p', c: 'La France rayonne aussi par sa **culture** (francophonie, langue), sa **diplomatie** (siège à l’ONU) et son influence militaire. Ces atouts en font un acteur qui « compte » malgré une taille modeste.' },
      { t: 'tip', h: 'À retenir', c: 'Atouts : **Paris** (métropole mondiale), la **2e ZEE** du monde (outre-mer), ses **FTN**, l’**UE** et son influence culturelle (francophonie).' },
    ]),
    S('🗺️ Des territoires inégalement intégrés', [
      { t: 'p', c: 'À l’intérieur de la France, la mondialisation **sélectionne** aussi les territoires. Les **métropoles** dynamiques et les **façades maritimes** ouvertes sur le monde (Le Havre, Marseille) sont bien intégrées ; certaines zones rurales isolées ou d’anciennes régions industrielles (« France périphérique ») le sont moins.' },
      { t: 'p', c: 'L’**Union européenne** structure fortement le territoire : marché unique, aménagement, frontières ouvertes. La France est au **cœur** de l’UE (membre fondateur), reliée à ses voisins par des axes majeurs, mais l’intégration européenne alimente aussi des débats.' },
      { t: 'tip', h: 'À retenir', c: 'Comme à l’échelle mondiale, la France présente des territoires **inégalement intégrés** : métropoles et façades gagnantes, espaces périphériques plus fragiles.' },
    ]),
    S('✍️ MÉTHODE — Réviser la géographie efficacement', [
      { t: 'p', c: 'La géographie se révise avec des **repères** (cartes mentales) et un **vocabulaire** précis. Quelques réflexes rendent les révisions bien plus efficaces.' },
      { t: 'list', c: [
        '**Mémoriser les repères** : grandes métropoles, façades, points de passage, la Triade.',
        '**Maîtriser le vocabulaire** : mondialisation, métropolisation, ZEE, hub, FTN, archipel.',
        '**S’entraîner à décrire** une carte à l’oral, en localisant puis en expliquant.',
      ] },
      { t: 'tip', h: 'Réflexe', c: 'Associe **chaque notion à un exemple concret** (métropolisation → Paris ; point de passage → canal de Suez). Les exemples précis font la différence le jour de l’épreuve.' },
    ]),
  ],
}
