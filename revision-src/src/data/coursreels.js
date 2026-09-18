// Cours « par l'exemple réel » : pour les matières de gestion STMG (spécialités +
// droit, économie, management), le cours ne récite plus des définitions — il
// EXPLIQUE chaque notion à travers un exemple concret et réel. Les définitions
// précises restent dans l'encadré « Définitions clés » (data/keyterms.js).
//
// Ce module REMPLACE le corps du cours (c.cours) des thèmes listés (fusion dans
// index.js). Les schémas, exemples résolus (enrich.js) et ressources sont
// conservés. Blocs : p, example{h,c}, tip{h,c}, warning{h,c}, table{head,rows}.
//
// Format : { [themeId]: [ { h, blocks:[...] }, … ] }

export const COURS_REELS = {
  // =========================================================================
  // DROIT (Terminale)
  // =========================================================================
  'droit-t5': [
    {
      h: 'Un « oui » qui vous engage',
      blocks: [
        { t: 'p', c: 'Quand tu réserves une place de concert en ligne et que tu cliques sur « J’accepte », il se passe quelque chose de juridique : le site te fait une **offre** (la place, à un prix), et tu l’**acceptes**. À cet instant précis, un **contrat** est né — sans notaire, sans signature manuscrite.' },
        { t: 'p', c: 'Ce contrat te lie vraiment : tu dois payer, le vendeur doit te fournir la place. C’est la **force obligatoire** : « le contrat tient lieu de loi » à ceux qui l’ont conclu. On ne peut pas se rétracter sur un coup de tête (sauf droit de rétractation prévu, par ex. 14 jours pour un achat à distance).' },
        { t: 'tip', h: 'L’idée à retenir', c: 'Un contrat, ce n’est pas forcément un gros document signé : c’est la rencontre de deux volontés (offre + acceptation). Un clic, une poignée de main, un ticket de caisse… peuvent suffire.' },
      ],
    },
    {
      h: 'Quand on vous a trompé : le consentement vicié',
      blocks: [
        { t: 'example', h: 'Cas réel', c: 'Tu achètes sur une petite annonce une montre présentée comme une « Rolex authentique ». Une fois payée, tu découvres que c’est une contrefaçon. As-tu vraiment voulu acheter… une fausse ?' },
        { t: 'p', c: 'Non : tu as dit « oui », mais ton accord a été obtenu par une **tromperie**. Le droit considère alors que ton consentement est « vicié » : tu peux demander au juge d’**annuler** le contrat. C’est pareil si tu t’es trompé toi-même sur une qualité essentielle, ou si on t’a forcé la main.' },
        { t: 'warning', h: 'Nullité ≠ résiliation', c: 'Annuler pour vice, c’est effacer le contrat depuis le début (comme s’il n’avait jamais existé). Ce n’est pas la même chose que « résilier » (arrêter pour l’avenir un contrat valable).' },
      ],
    },
    {
      h: 'Pourquoi un ado ne peut pas tout signer',
      blocks: [
        { t: 'example', h: 'Cas', c: 'Un lycéen de 16 ans achète seul, à crédit, un scooter à 2 000 €. Ses parents découvrent la facture.' },
        { t: 'p', c: 'Le vendeur risque de ne jamais être payé : un mineur n’a pas la **capacité juridique** pour s’engager seul sur un tel achat. Un contrat n’est solide que si plusieurs conditions sont réunies en même temps — et il suffit qu’**une seule** manque (ici, la capacité) pour qu’un juge puisse l’annuler.' },
        { t: 'tip', h: 'Réflexe bac', c: 'Devant un cas, demande-toi toujours : le consentement est-il libre et éclairé ? La personne est-elle capable ? Ce qui est vendu est-il licite ? Si une case manque, le contrat est fragile.' },
      ],
    },
  ],
  'droit-t6': [
    {
      h: 'Casser, c’est réparer',
      blocks: [
        { t: 'example', h: 'Cas', c: 'Le chien d’un voisin, mal tenu, mord un passant qui doit aller à l’hôpital. Qui paie les soins ?' },
        { t: 'p', c: 'Le maître du chien. Pour que sa **responsabilité** soit engagée, il faut réunir trois éléments : un **fait** (le chien a mordu), un **dommage** (la blessure) et un **lien** entre les deux (c’est bien cette morsure qui a causé la blessure). Les trois ensemble → le maître doit **réparer**, c’est-à-dire indemniser la victime.' },
        { t: 'tip', h: 'La règle des 3', c: 'Fait générateur + dommage + lien de causalité. S’il en manque un seul (par ex. aucun dommage réel), il n’y a pas de responsabilité civile.' },
      ],
    },
    {
      h: 'Payer la victime OU être puni : deux logiques',
      blocks: [
        { t: 'example', h: 'Cas', c: 'Un conducteur ivre renverse un piéton. Il passe devant deux juges différents.' },
        { t: 'p', c: 'Devant le juge **pénal**, la société le sanctionne (amende, retrait de permis, voire prison) : le but est de **punir** un comportement interdit. Devant le juge **civil**, il doit **indemniser** le piéton pour ses blessures : le but est de **réparer** le préjudice d’une victime.' },
        { t: 'warning', h: 'Ne confonds pas', c: 'Responsabilité **civile** = réparer (de l’argent pour la victime). Responsabilité **pénale** = punir (une peine au nom de la société). Un même acte peut relever des deux.' },
      ],
    },
  ],
  'droit-t7': [
    {
      h: 'Chauffeur Uber : salarié ou indépendant ?',
      blocks: [
        { t: 'example', h: 'Cas réel', c: 'En 2020, la Cour de cassation a examiné la situation d’un chauffeur Uber. Officiellement « indépendant », il ne fixait pas ses prix, ne choisissait pas librement ses courses, et pouvait être déconnecté par la plateforme.' },
        { t: 'p', c: 'Les juges ont estimé qu’il travaillait en réalité sous les ordres d’Uber : il y avait un **lien de subordination**. Or c’est ce lien qui fait le **contrat de travail** — peu importe le nom écrit sur le papier. Résultat : le chauffeur a été reconnu **salarié**, avec les protections qui vont avec (congés, sécurité sociale…).' },
        { t: 'tip', h: 'Le critère clé', c: 'Ce qui distingue un salarié d’un indépendant, ce n’est pas le titre du contrat : c’est le **lien de subordination** (recevoir des ordres, être contrôlé, être sanctionnable).' },
      ],
    },
    {
      h: 'CDI, CDD : la règle et l’exception',
      blocks: [
        { t: 'p', c: 'Quand une entreprise embauche, la norme est le **CDI** (durée indéterminée). Le **CDD** est une exception : on ne peut y recourir que pour un motif précis (remplacer un salarié absent, faire face à un pic d’activité…) et il doit être écrit et daté.' },
        { t: 'example', h: 'Cas', c: 'Un supermarché embauche en CDD « pour surcroît d’activité » pendant les fêtes : c’est justifié. Mais s’il enchaîne des CDD toute l’année sur le même poste permanent, un juge peut le requalifier en CDI.' },
      ],
    },
    {
      h: 'On ne licencie pas « parce que »',
      blocks: [
        { t: 'example', h: 'Cas', c: 'Un salarié est licencié au motif que « son chef ne l’apprécie pas ». Est-ce légal ?' },
        { t: 'p', c: 'Non. Un licenciement doit reposer sur une **cause réelle et sérieuse** : un motif objectif, vérifiable et assez grave (fautes répétées, difficultés économiques réelles…). Une simple antipathie ne suffit pas → le licenciement est abusif, et le salarié peut obtenir des indemnités.' },
        { t: 'tip', h: 'À retenir', c: 'La rupture d’un contrat de travail suit des règles strictes qui protègent le salarié : motif justifié, procédure respectée.' },
      ],
    },
  ],
  'droit-t8': [
    {
      h: 'Choupette peut-elle hériter ? (Karl Lagerfeld)',
      blocks: [
        { t: 'example', h: 'Cas réel', c: 'Le couturier Karl Lagerfeld adorait sa chatte Choupette et avait déclaré vouloir lui laisser une partie de sa fortune. Juridiquement… c’est impossible. Pourquoi ?' },
        { t: 'p', c: 'Parce qu’en droit, seule une **personne** peut posséder un **patrimoine** et hériter. Une personne peut être **physique** (un être humain) ou **morale** (une société, une association). Un animal, lui, n’est pas une personne juridique : c’est un **bien**. Un bien ne peut pas être propriétaire d’autres biens.' },
        { t: 'p', c: 'Concrètement, on ne peut donc pas léguer directement à un chat : on lègue à une **personne** (ou à une fondation) en la chargeant de s’occuper de l’animal. C’est ce type de montage qui permet à Choupette de vivre dans le luxe — grâce à des humains, pas en son nom propre.' },
        { t: 'tip', h: 'La notion cachée', c: 'Cette histoire illustre la **personnalité juridique** : avoir des droits (posséder, hériter, contracter) suppose d’être une personne, physique ou morale.' },
      ],
    },
    {
      h: 'Protéger sa maison quand on crée son entreprise',
      blocks: [
        { t: 'example', h: 'Cas', c: 'Léa lance sa marque de vêtements. Si l’affaire échoue et accumule des dettes, risque-t-elle de perdre sa maison personnelle ?' },
        { t: 'p', c: 'Cela dépend de la **forme juridique**. En entreprise individuelle, l’entrepreneur et l’entreprise ne font (souvent) qu’un : le patrimoine personnel est plus exposé. En créant une **société** (SARL, SAS), elle donne naissance à une **personne morale** distincte : les patrimoines sont séparés et sa responsabilité est en principe **limitée à ses apports**.' },
        { t: 'tip', h: 'Le bon réflexe', c: 'Choisir une forme juridique, c’est d’abord choisir comment on engage (ou on protège) son patrimoine.' },
      ],
    },
    {
      h: 'Une idée, ça se protège',
      blocks: [
        { t: 'example', h: 'Cas', c: 'Léa crée un logo original et un nom de marque. Un concurrent les copie. Peut-elle réagir ?' },
        { t: 'p', c: 'Oui, si elle a **déposé sa marque** (à l’INPI). La **propriété industrielle** (marque, brevet, dessin) donne un monopole d’exploitation et permet d’attaquer les copieurs. C’est différent du droit d’auteur, qui protège les œuvres (un texte, une musique) sans dépôt.' },
        { t: 'warning', h: 'Attention', c: 'Sans dépôt, une idée ou un nom se défendent beaucoup plus difficilement : protéger, c’est anticiper.' },
      ],
    },
  ],

  // =========================================================================
  // ÉCONOMIE (Terminale)
  // =========================================================================
  'eco-t6': [
    {
      h: '« Quoi qu’il en coûte » : l’État au secours de l’économie',
      blocks: [
        { t: 'example', h: 'Cas réel', c: 'Pendant la pandémie de Covid-19 (2020), des millions de salariés ne pouvaient plus travailler. L’État a payé une partie de leur salaire (chômage partiel) et aidé les entreprises, pour éviter l’effondrement.' },
        { t: 'p', c: 'Cet épisode montre pourquoi l’État intervient : quand le marché seul ne suffit pas (crise, chômage), il peut **soutenir l’activité** pour amortir le choc. C’est l’une de ses grandes missions ; il en a d’autres, complémentaires.' },
      ],
    },
    {
      h: 'Trois missions, une même logique',
      blocks: [
        { t: 'p', c: 'L’État **produit** ce que le marché ne fournit pas seul — routes, écoles, sécurité (des biens utiles à tous). Il **redistribue** : il prélève des impôts et verse des aides (allocations, retraites) pour réduire les inégalités. Et il **stabilise** : face à une crise, il relance ; en cas de surchauffe, il freine.' },
        { t: 'example', h: 'Illustration', c: 'Ton lycée (gratuit), la route devant chez toi, les allocations d’une famille modeste : trois formes différentes de l’intervention publique au quotidien.' },
      ],
    },
    {
      h: 'Mais à quel prix ?',
      blocks: [
        { t: 'p', c: 'Dépenser plus qu’on ne gagne creuse le **déficit** chaque année ; les déficits accumulés forment la **dette**. La France s’endette pour financer ces politiques, ce qui alimente un débat permanent : jusqu’où l’État peut-il intervenir sans fragiliser ses finances ?' },
        { t: 'warning', h: 'À ne pas confondre', c: 'Le déficit est un **flux** (le trou d’une année) ; la dette est un **stock** (tout ce qui reste à rembourser).' },
      ],
    },
  ],
  'eco-t7': [
    {
      h: 'Qui est vraiment « au chômage » ?',
      blocks: [
        { t: 'example', h: 'Cas', c: 'Trois personnes sans emploi : un étudiant de terminale, un retraité, et une femme de 30 ans qui postule activement. Laquelle est « au chômage » au sens officiel ?' },
        { t: 'p', c: 'Seulement la troisième. Pour être compté comme chômeur (au sens du BIT), il faut trois choses en même temps : être **sans emploi**, être **disponible** pour travailler, et **rechercher activement**. L’étudiant et le retraité sont **inactifs** : ils ne font pas partie de la population active.' },
        { t: 'tip', h: 'Pourquoi ça compte', c: 'Le taux de chômage se calcule sur la **population active** (ceux qui travaillent + ceux qui cherchent), pas sur toute la population.' },
      ],
    },
    {
      h: 'Quand une usine ferme',
      blocks: [
        { t: 'p', c: 'La fermeture d’une usine jette d’un coup des centaines de personnes sur le marché du travail. Certaines retrouveront vite un poste ; d’autres, dont le métier disparaît, devront se **reconvertir** (formation). Le chômage n’a donc pas une seule cause : ralentissement de l’activité, inadéquation entre les compétences et les emplois disponibles…' },
        { t: 'tip', h: 'Lien avec l’État', c: 'C’est pour cela que les politiques de l’emploi misent beaucoup sur la **formation** : rapprocher les compétences des besoins des entreprises.' },
      ],
    },
  ],
  'eco-t8': [
    {
      h: 'Ton téléphone a fait le tour du monde',
      blocks: [
        { t: 'example', h: 'Cas réel', c: 'Un smartphone haut de gamme est conçu aux États-Unis, ses composants viennent de Corée, du Japon et de Taïwan, il est assemblé en Chine, puis vendu partout. Un seul objet, des dizaines de pays.' },
        { t: 'p', c: 'C’est la **mondialisation** : chaque pays se spécialise là où il est le plus efficace, puis les biens s’échangent. Résultat : des produits moins chers et plus variés… mais une forte **dépendance** entre économies (un blocage quelque part, et toute la chaîne s’enraye).' },
      ],
    },
    {
      h: 'Importer plus qu’on n’exporte',
      blocks: [
        { t: 'p', c: 'Un pays qui achète à l’étranger plus qu’il ne vend a une **balance commerciale déficitaire**. C’est le cas de la France sur les biens depuis des années : elle importe beaucoup (énergie, produits manufacturés) et le solde est négatif.' },
        { t: 'warning', h: 'Le signe compte', c: 'Solde = exportations − importations. Négatif = déficit ; positif = excédent. Garde toujours le signe dans ta réponse.' },
      ],
    },
    {
      h: 'Le libre-échange fait des gagnants… et des perdants',
      blocks: [
        { t: 'example', h: 'Illustration', c: 'Ouvrir les frontières permet d’acheter des vêtements bon marché (gagnant : le consommateur), mais peut fermer une usine textile locale incapable de s’aligner sur ces prix (perdant : ces salariés).' },
        { t: 'tip', h: 'Nuance attendue', c: 'Au bac, ne présente jamais le libre-échange comme « tout bon » ou « tout mauvais » : montre les gains **et** les coûts sociaux.' },
      ],
    },
  ],
  'eco-t9': [
    {
      h: 'Le PIB ment-il ?',
      blocks: [
        { t: 'example', h: 'Cas', c: 'Un pays double son PIB en exploitant à fond ses forêts et ses mines, mais l’air devient irrespirable et les inégalités explosent. « Va-t-il mieux » ?' },
        { t: 'p', c: 'Pas sûr. Le **PIB** mesure la richesse marchande produite, pas le bien-être : il ignore les inégalités, la pollution, la santé, le travail bénévole. C’est pourquoi on utilise aussi l’**IDH** (qui ajoute santé et éducation) pour parler de **développement**, et pas seulement de croissance.' },
      ],
    },
    {
      h: 'La fast fashion et ses coûts cachés',
      blocks: [
        { t: 'example', h: 'Cas réel', c: 'Des enseignes de mode ultra-rapide (type Shein) sortent des milliers de nouveautés par jour à très bas prix. La croissance est réelle… mais elle s’accompagne de pollution, de déchets et de conditions de travail contestées.' },
        { t: 'p', c: 'Ces dégâts que le prix ne reflète pas sont des **externalités négatives** : le marché seul ne les corrige pas, d’où la nécessité d’une intervention (normes, taxes). C’est tout l’enjeu d’une croissance **soutenable**.' },
        { t: 'tip', h: 'Idée forte', c: 'Une croissance n’est durable que si elle préserve l’environnement et les générations futures : croître **sans** détruire.' },
      ],
    },
  ],

  // =========================================================================
  // MANAGEMENT (Terminale)
  // =========================================================================
  'mgmt-t1': [
    {
      h: 'Decathlon, les Restos du Cœur, un hôpital : trois logiques',
      blocks: [
        { t: 'example', h: 'Cas', c: 'Trois organisations très différentes : Decathlon vend du matériel de sport, les Restos du Cœur distribuent des repas gratuits, un hôpital public soigne.' },
        { t: 'table', head: ['Organisation', 'Finalité', 'Production'], rows: [
          ['Decathlon (entreprise)', 'Réaliser un **profit** durable', 'Biens marchands (vendus)'],
          ['Restos du Cœur (association)', 'Une **cause** (aider les plus démunis)', 'Services non marchands'],
          ['Hôpital public', 'Une **mission de service public**', 'Services non marchands'],
        ] },
        { t: 'p', c: 'Elles produisent toutes quelque chose, mais leur raison d’être diffère : le profit n’est qu’une finalité **parmi d’autres**. C’est la première chose à identifier face à une organisation.' },
      ],
    },
    {
      h: 'Ce qui fait tourner une organisation',
      blocks: [
        { t: 'p', c: 'Pour fonctionner, toute organisation combine des **ressources** : des personnes (salariés, bénévoles), de l’argent (ventes, subventions, dons) et des moyens matériels (locaux, machines, informatique). Bien les combiner, c’est déjà du management.' },
        { t: 'tip', h: 'Piège fréquent', c: 'Ne confonds pas **finalité** (la raison d’être, durable) et **objectif** (un but précis, mesurable et daté, comme « ouvrir 10 magasins en 2 ans »).' },
      ],
    },
  ],
  'mgmt-t2': [
    {
      h: 'Netflix vs Blockbuster : la stratégie qui tue',
      blocks: [
        { t: 'example', h: 'Cas réel', c: 'En 2000, le géant de la location de DVD Blockbuster a refusé de racheter le petit Netflix. Dix ans plus tard, Blockbuster faisait faillite, tandis que Netflix, passé au streaming, devenait un leader mondial.' },
        { t: 'p', c: 'La différence ? La **stratégie** : Netflix a anticipé un changement (Internet) et bâti un **avantage concurrentiel** difficile à copier (technologie, données, catalogue). Une bonne stratégie engage l’organisation sur le **long terme**, au-delà des décisions du quotidien.' },
      ],
    },
    {
      h: 'Regarder avant de sauter : le diagnostic',
      blocks: [
        { t: 'p', c: 'Avant de décider, on fait un **diagnostic** : à l’**intérieur**, ses forces et ses faiblesses ; à l’**extérieur**, les opportunités et les menaces du marché. Croiser les deux (le SWOT), c’est voir sur quoi s’appuyer et de quoi se protéger.' },
        { t: 'example', h: 'Illustration', c: 'Une petite marque bio : force = image authentique ; faiblesse = peu de moyens ; opportunité = mode du « naturel » ; menace = l’arrivée des grands groupes.' },
        { t: 'tip', h: 'Avantage durable', c: 'Une ressource ne donne un avantage concurrentiel que si elle est **rare et difficile à imiter** (une réputation, un savoir-faire unique).' },
      ],
    },
  ],
  'mgmt-t3': [
    {
      h: 'Patagonia offre son entreprise à la planète',
      blocks: [
        { t: 'example', h: 'Cas réel', c: 'En 2022, le fondateur de la marque de vêtements Patagonia a transféré la propriété de son entreprise à une structure dédiée à la lutte climatique : désormais, les bénéfices financent la protection de l’environnement.' },
        { t: 'p', c: 'C’est une forme forte de **RSE** (responsabilité sociétale) : intégrer les enjeux sociaux et écologiques **au cœur** de la stratégie, pas comme un simple habillage. La RSE n’est pas de la charité : c’est une manière de concilier performance et responsabilité.' },
      ],
    },
    {
      h: 'Greenwashing : la RSE de façade',
      blocks: [
        { t: 'example', h: 'Cas', c: 'Une marque colle un logo « vert » et le mot « éco » sur ses produits, sans rien changer à sa production polluante.' },
        { t: 'p', c: 'C’est du **greenwashing** (écoblanchiment) : communiquer « responsable » sans l’être. Les consommateurs et la loi y sont de plus en plus attentifs ; le risque, c’est une perte de confiance durable.' },
        { t: 'warning', h: 'Le numérique aussi', c: 'Le numérique est une **opportunité** (productivité, nouveaux services) **et** un risque (cyberattaques, dépendance, impact écologique des data centers) : à nuancer.' },
      ],
    },
  ],

  // =========================================================================
  // GESTION ET FINANCE (spécialité)
  // =========================================================================
  'gf-t1': [
    {
      h: 'Un café à 2,40 € : où passe la TVA ?',
      blocks: [
        { t: 'example', h: 'Cas', c: 'Tu paies ton café 2,40 € au comptoir. Sur ce montant, 0,40 € ne revient pas au commerçant : c’est de la TVA.' },
        { t: 'p', c: 'Décomposons ce prix. Le prix **hors taxes (HT)**, celui que garde vraiment le commerçant, est de **2,00 €**. On y ajoute la **TVA** (ici 0,40 €, soit 20 % de 2,00 €) pour obtenir le prix **toutes taxes comprises (TTC)** de **2,40 €** que tu paies. La TVA est donc un impôt sur la **consommation** : c’est **toi**, le client final, qui la supportes.' },
        { t: 'p', c: 'Le commerçant ne fait que **collecter** cette TVA pour l’État, puis la lui **reverse**. Il n’est qu’un **intermédiaire** : la TVA n’est donc **pas une charge** pour lui. Mieux : il **déduit** la TVA qu’il a lui-même payée sur ses achats (le café en grains, les gobelets…). Il ne reverse à l’État que la **différence**.' },
        { t: 'table', head: ['Les 3 TVA', 'Ce que c’est'], rows: [
          ['TVA collectée', 'Sur les ventes → dette envers l’État'],
          ['TVA déductible', 'Sur les achats → créance sur l’État'],
          ['TVA à décaisser', 'Collectée − déductible = ce qu’on reverse'],
        ] },
        { t: 'example', h: 'Sur un mois', c: 'Le bar encaisse 3 000 € de TVA sur ses ventes (collectée) et a payé 1 100 € de TVA sur ses achats (déductible). Il reverse à l’État : 3 000 − 1 100 = **1 900 €**. Il ne « perd » rien : cette TVA n’était jamais à lui.' },
        { t: 'tip', h: 'L’idée clé', c: 'L’entreprise est un simple **collecteur** : TVA à reverser = TVA **collectée** sur les ventes − TVA **déductible** sur les achats. Le poids final repose sur le consommateur.' },
        { t: 'warning', h: 'Le piège', c: 'Pour retrouver le HT à partir du TTC, on **divise par 1,20** (à 20 %) — on ne « retire pas 20 % ». 2,40 ÷ 1,20 = 2,00 € (juste) ; 2,40 − 20 % = 1,92 € (faux).' },
      ],
    },
    {
      h: 'La comptabilité, l’histoire chiffrée de l’entreprise',
      blocks: [
        { t: 'p', c: 'Chaque opération (un achat, une vente, un salaire) laisse une trace dans le **système d’information comptable**, qui la saisit, la classe et l’enregistre. Objectif : donner une **image fidèle** de la santé de l’entreprise, utile en interne (décider, piloter) et en externe (impôts, banques, associés).' },
        { t: 'p', c: 'Pour que tout le monde parle le même langage, la comptabilité est **normalisée** : toutes les entreprises suivent le **Plan comptable général (PCG)**, qui range les comptes par **classes** numérotées. C’est ce qui rend deux bilans **comparables**.' },
        { t: 'table', head: ['Classe', 'Contenu'], rows: [
          ['1', 'Capitaux (capital, emprunts)'],
          ['2', 'Immobilisations (machines, locaux)'],
          ['4', 'Tiers (clients 411, fournisseurs 401, État)'],
          ['5', 'Financier (banque 512, caisse 53)'],
          ['6 / 7', 'Charges / Produits'],
        ] },
        { t: 'p', c: 'Règle du jeu : la **partie double**. Toute opération est notée **deux fois**, une fois au **débit** d’un compte, une fois au **crédit** d’un autre, pour le même montant. Le total des débits égale donc **toujours** le total des crédits.' },
        { t: 'example', h: 'Une vente de 1 200 € TTC', c: '• 411 Clients … 1 200 (débit) — le client nous doit\n• 707 Ventes … 1 000 (crédit) — le produit\n• 44571 TVA collectée … 200 (crédit) — la dette de TVA\nDébit 1 200 = Crédit 1 200. ✓' },
        { t: 'tip', h: 'Réflexe', c: 'Débit = crédit, **toujours**. C’est le garde-fou de toute la comptabilité : si ça ne tombe pas juste, il y a une erreur.' },
      ],
    },
    {
      h: 'Une pizzeria, un four, et le temps qui passe',
      blocks: [
        { t: 'example', h: 'Cas', c: 'Une pizzeria achète un four professionnel 12 000 €, qu’elle utilisera 6 ans. Doit-elle passer 12 000 € de charges d’un coup ?' },
        { t: 'p', c: 'Non. Le four est un **investissement durable** (une **immobilisation**) : il sert plusieurs années. Le compter entièrement la première année **fausserait** le résultat (une énorme perte en année 1, puis un four « gratuit » ensuite). On **répartit** donc son coût sur sa durée d’usage grâce à l’**amortissement**.' },
        { t: 'formula', c: 'Amortissement annuel = Valeur ÷ Durée = 12 000 ÷ 6 = 2 000 € par an' },
        { t: 'p', c: 'Chaque année, on enregistre **2 000 €** de charge (« dotation aux amortissements »). Point important : c’est une charge **sans sortie d’argent** — l’argent est déjà parti à l’achat. L’amortissement ne fait que **constater la perte de valeur** du four qui vieillit. Sa **valeur nette comptable** baisse d’autant : 12 000 → 10 000 → 8 000… → 0 au bout de 6 ans.' },
        { t: 'table', head: ['Année', 'Dotation', 'Valeur nette'], rows: [
          ['1', '2 000', '10 000'],
          ['2', '2 000', '8 000'],
          ['6', '2 000', '0'],
        ] },
        { t: 'tip', h: 'À distinguer', c: 'Une **immobilisation** (durable, comme le four) s’**amortit** sur plusieurs années ; une **charge** (consommée dans l’année, comme la farine) passe **en une fois**. Confondre les deux fausse le résultat.' },
      ],
    },
  ],
  'gf-t2': [
    {
      h: 'Rentable… mais sans un sou en caisse',
      blocks: [
        { t: 'example', h: 'Cas', c: 'Une jeune entreprise qui grandit vite affiche un beau bénéfice, et pourtant elle n’arrive plus à payer ses fournisseurs. Comment est-ce possible ?' },
        { t: 'p', c: 'Parce que **résultat** et **trésorerie**, ce n’est pas la même chose. Le **résultat** mesure la performance (a-t-on vendu plus cher que ce que ça coûte ?) ; la **trésorerie** mesure l’argent réellement **disponible en banque**. On peut être rentable **sur le papier** et à sec **en caisse**.' },
        { t: 'p', c: 'L’explication tient dans un **décalage** : l’entreprise a vendu (donc un bénéfice), mais ses clients paient à **60 jours**, pendant qu’elle doit acheter son stock et payer ses salariés **tout de suite**. Cet argent immobilisé par le cycle d’exploitation, c’est le **besoin en fonds de roulement (BFR)**.' },
        { t: 'formula', c: 'BFR = (Stocks + Créances clients) − Dettes fournisseurs' },
        { t: 'p', c: 'Plus l’entreprise grandit vite, plus son BFR **gonfle** (plus de stocks, plus de créances). Si rien ne le finance, la trésorerie plonge : c’est le paradoxe de la **croissance non financée**. « Profit is an opinion, cash is a fact. »' },
        { t: 'list', c: [
          '**Réduire le BFR** : relancer les clients, alléger les stocks, négocier des délais fournisseurs plus longs.',
          '**Renforcer le financement** : augmenter le capital, obtenir un emprunt à long terme.',
        ] },
        { t: 'warning', h: 'Le piège', c: 'On peut être **bénéficiaire** et **manquer de trésorerie**. Une trésorerie négative n’est pas une faillite, mais un **déséquilibre à financer** d’urgence.' },
      ],
    },
    {
      h: 'Mesurer l’équilibre financier',
      blocks: [
        { t: 'p', c: 'Pour juger la solidité d’une entreprise, on utilise trois indicateurs reliés. Le **fonds de roulement net global (FRNG)** vérifie que les **ressources durables** (capitaux, emprunts longs) couvrent les **emplois durables** (les investissements) et laissent un « matelas ».' },
        { t: 'formula', c: 'FRNG = Ressources stables − Emplois stables' },
        { t: 'p', c: 'On compare ce FRNG au **BFR** (l’argent immobilisé par l’exploitation), et la différence donne la **trésorerie nette**. Ce petit calcul résume la santé financière : le FRNG doit **financer** le BFR.' },
        { t: 'formula', c: 'Trésorerie nette = FRNG − BFR' },
        { t: 'example', h: 'Lecture rapide', c: 'FRNG 80 k€, BFR 70 k€ → trésorerie = +10 k€ (ça va). Si le BFR montait à 95 k€ → trésorerie = −15 k€ (découvert à financer).' },
        { t: 'p', c: 'On mesure aussi la **richesse créée** : la **valeur ajoutée**, c’est ce que l’entreprise produit **moins** ce qu’elle a dû acheter à d’autres (matières, services). C’est le point de départ de tout le **partage** : salaires, impôts, intérêts des banques, dividendes des propriétaires, et autofinancement.' },
        { t: 'tip', h: 'Enchaînement', c: 'Trésorerie = **FRNG − BFR**. C’est l’équation clé de l’équilibre financier — à savoir refaire les yeux fermés.' },
      ],
    },
  ],
  'gf-t3': [
    {
      h: 'Le food-truck : à partir de combien de burgers je gagne ?',
      blocks: [
        { t: 'example', h: 'Cas', c: 'Un food-truck paie 1 500 €/mois de charges fixes (emplacement, assurance). Chaque burger lui rapporte 4 € une fois déduits les ingrédients. Combien doit-il en vendre pour ne pas perdre d’argent ?' },
        { t: 'p', c: 'Chaque burger vendu laisse **4 €** après avoir payé ses ingrédients : c’est la **marge sur coût variable (MCV)** unitaire. Cette marge sert d’abord à **couvrir les charges fixes**, puis à faire du bénéfice.' },
        { t: 'formula', c: 'Seuil (en quantité) = Charges fixes ÷ MCV unitaire = 1 500 ÷ 4 = 375 burgers' },
        { t: 'p', c: 'En dessous de **375 burgers/mois**, il **perd** de l’argent ; exactement à 375, il est à l’équilibre (résultat nul) ; au-delà, chaque burger rapporte **4 € de bénéfice net**. Ce point de bascule s’appelle le **seuil de rentabilité**.' },
        { t: 'example', h: 'Et pour gagner 800 € ?', c: 'Il faut couvrir les charges fixes **et** dégager 800 € : (1 500 + 800) ÷ 4 = **575 burgers**. Soit ~26 burgers par jour ouvré.' },
        { t: 'tip', h: 'À retenir', c: 'Au **seuil de rentabilité**, le résultat est **nul** : la marge sur coût variable couvre **exactement** les charges fixes. C’est le premier repère de toute décision.' },
      ],
    },
    {
      h: 'Fixe ou variable ? La décision en dépend',
      blocks: [
        { t: 'p', c: 'Pour décider, on ne classe plus les charges par nature, mais selon leur **comportement face à l’activité**. Les **charges variables** montent avec le volume (plus de burgers = plus de pain, de viande) ; les **charges fixes** ne bougent pas à court terme (le loyer est le même qu’on vende 10 ou 1 000 burgers).' },
        { t: 'table', head: ['Si l’activité double…', 'Exemples'], rows: [
          ['Charges variables → doublent', 'Matières, ingrédients, emballages'],
          ['Charges fixes → ne bougent pas', 'Loyer, assurance, salaire fixe'],
        ] },
        { t: 'p', c: 'Comprendre cette différence permet de **décider** : baisser un prix pour vendre plus ? accepter une grosse commande à prix réduit ? Tant que le prix couvre le **coût variable**, chaque vente **contribue** aux charges fixes — même si elle paraît peu rentable. C’est le raisonnement « à la marge ».' },
        { t: 'p', c: 'Autre effet clé : plus on produit, plus on **dilue** les charges fixes sur un grand nombre d’unités → le coût unitaire baisse. C’est pourquoi le **volume** est si important dans les activités à fortes charges fixes.' },
        { t: 'warning', h: 'Piège', c: 'Un produit peut avoir une **marge positive** et l’entreprise **perdre** quand même, si le volume ne suffit pas à couvrir les **charges fixes**. Marge ≠ bénéfice tant que le seuil n’est pas franchi.' },
      ],
    },
  ],

  // =========================================================================
  // MERCATIQUE (spécialité)
  // =========================================================================
  'mkg-t1': [
    {
      h: 'Pourquoi faire la queue toute une nuit pour un téléphone ?',
      blocks: [
        { t: 'example', h: 'Cas', c: 'À chaque sortie d’un nouvel iPhone, des clients campent devant les magasins et paient le prix fort, alors que leur ancien téléphone marche très bien.' },
        { t: 'p', c: 'Leur achat ne répond pas qu’à un besoin fonctionnel (téléphoner) : il touche l’**image de soi**, l’envie d’appartenir, d’être reconnu. La mercatique part justement de là — comprendre ce qui **pousse** vraiment à acheter — au lieu de partir du produit.' },
        { t: 'tip', h: 'Renversement', c: 'La mercatique part du **client** (« qu’est-ce qu’il veut ? »), pas du produit (« j’ai fabriqué, je cherche à vendre »).' },
      ],
    },
    {
      h: 'Ce qui pousse, ce qui freine',
      blocks: [
        { t: 'p', c: 'Face à un achat, deux forces s’opposent : les **motivations** (se faire plaisir, faire plaisir aux autres, s’affirmer) et les **freins** (le prix, la peur de se tromper, la culpabilité). Le rôle du marketing est d’augmenter les unes et de lever les autres — d’où les garanties, les facilités de paiement, les avis clients.' },
        { t: 'warning', h: 'À ne pas inverser', c: 'La motivation pousse à l’achat, le frein le retient. Ce sont deux notions opposées.' },
      ],
    },
    {
      h: 'On n’achète pas tous de la même façon',
      blocks: [
        { t: 'p', c: 'Nos choix dépendent de facteurs **personnels** (perception, habitudes, personnalité) et **sociaux** (la culture, les proches, le milieu social). Deux personnes devant le même produit peuvent réagir de façon opposée : c’est pourquoi une marque doit connaître **qui** est en face.' },
        { t: 'tip', h: 'Vers la suite', c: 'Comprendre le consommateur mène naturellement à découper le marché en groupes : c’est la segmentation.' },
      ],
    },
  ],
  'mkg-t2': [
    {
      h: 'Vinted, Rolex, McDo : pas les mêmes clients',
      blocks: [
        { t: 'example', h: 'Cas', c: 'Une montre à 20 € sur Vinted, une Rolex à 10 000 €, un menu à 8 € : trois offres, trois publics totalement différents.' },
        { t: 'p', c: 'Aucune marque ne peut plaire à tout le monde. Elle **découpe** donc le marché en groupes homogènes (la segmentation), en **choisit** un ou plusieurs (le ciblage), puis construit une **image** qui la distingue des concurrents (le positionnement). Trois étapes, dans cet ordre.' },
        { t: 'tip', h: 'Mémo', c: 'Segmenter (découper) → cibler (choisir) → positionner (image voulue).' },
      ],
    },
    {
      h: 'Connaître son marché',
      blocks: [
        { t: 'p', c: 'Un marché, ce n’est pas que les clients actuels : il y a aussi les concurrents, et les **non-consommateurs** qu’on pourrait convaincre demain. Analyser tout cela (taille, tendances, parts de marché) évite de foncer à l’aveugle.' },
        { t: 'warning', h: 'Deux mesures à distinguer', c: 'La part de marché (en % du marché total) n’est pas la part de marché **relative** (comparée au leader).' },
      ],
    },
  ],
  'mkg-t3': [
    {
      h: 'Pourquoi une Rolex n’est pas vendue en supermarché',
      blocks: [
        { t: 'example', h: 'Cas', c: 'Imagine une Rolex à 10 000 € posée entre les paquets de pâtes, avec une pub criarde « −50 % ». Absurde, non ?' },
        { t: 'p', c: 'Parce que les quatre leviers du marketing (le **produit**, le **prix**, la **distribution**, la **communication**) doivent former un tout **cohérent**. Un produit de luxe → un prix élevé → des boutiques sélectives → une communication prestigieuse. Casser un seul de ces éléments détruit l’image.' },
        { t: 'tip', h: 'Les 4P', c: 'Produit, Prix, Distribution (Place), Communication (Promotion) : c’est le plan de marchéage, et il se pense ensemble.' },
      ],
    },
    {
      h: 'Le prix : bien plus qu’un chiffre',
      blocks: [
        { t: 'p', c: 'Le prix envoie un signal. Trop bas, il fait douter de la qualité ; trop haut, il fait fuir. Les entreprises cherchent le **prix psychologique**, celui que le plus grand nombre est prêt à payer — qui n’a rien à voir avec le simple coût de revient.' },
        { t: 'warning', h: 'Piège de calcul', c: 'Ne confonds pas le taux de **marge** (calculé sur le coût d’achat) et le taux de **marque** (calculé sur le prix de vente).' },
      ],
    },
  ],
  'mkg-t4': [
    {
      h: 'Amazon sait ce que tu veux avant toi',
      blocks: [
        { t: 'example', h: 'Cas', c: 'À peine connecté, un site te propose « pour toi » des produits étonnamment pertinents, en fonction de tes achats et de tes clics.' },
        { t: 'p', c: 'C’est le marketing **numérique** : les **données** des clients permettent de personnaliser l’offre et la publicité. Mais elles ne s’utilisent pas librement : le **RGPD** impose le consentement, une base légale, et le droit de faire effacer ses données.' },
        { t: 'tip', h: 'Cadre', c: 'La donnée personnelle est protégée : la collecter sans base légale est interdit.' },
      ],
    },
    {
      h: 'Vert pour de vrai, ou greenwashing ?',
      blocks: [
        { t: 'p', c: 'La mercatique **responsable** intègre l’environnement et l’éthique. Mais gare au **greenwashing** : afficher un discours « écolo » sans changer ses pratiques. Les consommateurs — et la loi — le repèrent de mieux en mieux, et la sanction est une perte de confiance.' },
        { t: 'warning', h: 'Vigilance', c: 'Un argument écologique doit être **vrai et prouvé**, pas un simple habillage marketing.' },
      ],
    },
  ],

  // =========================================================================
  // RESSOURCES HUMAINES & COMMUNICATION (spécialité)
  // =========================================================================
  'rh-t1': [
    {
      h: 'Pourquoi certains adorent leur travail',
      blocks: [
        { t: 'example', h: 'Cas', c: 'Deux salariés, même salaire. L’un s’ennuie et compte les heures ; l’autre est passionné et force de proposition. D’où vient la différence ?' },
        { t: 'p', c: 'Le salaire évite le mécontentement, mais il ne suffit pas à **motiver** durablement. Ce qui motive vraiment, c’est la **reconnaissance**, l’intérêt des missions, les responsabilités, la perspective de progresser. C’est pourquoi les entreprises soignent l’ambiance, l’autonomie et le sens du travail.' },
        { t: 'warning', h: 'À distinguer', c: 'Motivation ≠ satisfaction : on peut être satisfait (bien payé) sans être motivé, et inversement.' },
      ],
    },
    {
      h: 'Être compétent, ça ne se résume pas à un diplôme',
      blocks: [
        { t: 'p', c: 'Un bon vendeur connaît ses produits (**savoir**), sait mener un entretien de vente (**savoir-faire**) et met le client à l’aise (**savoir-être**). La compétence se démontre **en situation** : c’est la combinaison des trois, pas seulement le diplôme.' },
        { t: 'tip', h: 'Enjeu RH', c: 'Recruter, former, faire évoluer : tout part de l’identification des compétences dont l’organisation a besoin.' },
      ],
    },
  ],
  'rh-t2': [
    {
      h: 'Une équipe soudée gagne (mais attention)',
      blocks: [
        { t: 'example', h: 'Cas', c: 'Une équipe de sport très soudée enchaîne les victoires. Mais à force de penser pareil, personne n’ose dire que la tactique ne marche plus.' },
        { t: 'p', c: 'La **cohésion** renforce la performance : on se fait confiance, on coopère. Mais son excès crée du **conformisme** (la « pensée de groupe ») où plus personne ne remet en cause le groupe. Un bon manager entretient la cohésion **sans** étouffer les avis différents.' },
        { t: 'tip', h: 'Nuance', c: 'La cohésion est une force ; le conformisme aveugle, un risque.' },
      ],
    },
    {
      h: 'Un conflit n’est pas forcément une catastrophe',
      blocks: [
        { t: 'example', h: 'Cas', c: 'Deux collègues se disputent sans cesse sur « qui fait quoi ».' },
        { t: 'p', c: 'Souvent, la vraie cause n’est pas les personnes mais l’**organisation** (rôles mal définis). Bien géré, un conflit peut même être **constructif** : il oblige à clarifier. Pour le résoudre : la négociation directe, puis la **médiation** (un tiers aide) ou l’**arbitrage** (un tiers tranche).' },
        { t: 'warning', h: 'À distinguer', c: 'Médiation = on **aide** à trouver un accord ; arbitrage = on **impose** la solution.' },
      ],
    },
  ],
  'rh-t3': [
    {
      h: 'Le bad buzz : quand la communication dérape',
      blocks: [
        { t: 'example', h: 'Cas', c: 'Une marque publie un message maladroit ; en quelques heures, les réseaux s’enflamment et l’image en prend un coup.' },
        { t: 'p', c: 'La communication suit toujours le même schéma : un **émetteur** envoie un **message** par un **canal** à un **récepteur**. Quand ça échoue, c’est souvent à cause d’un **bruit** (mot mal choisi, mauvais canal, contexte). D’où l’importance d’un message clair et d’un **retour** (feedback) pour vérifier qu’on a été compris.' },
        { t: 'tip', h: 'Voir le schéma', c: 'Le « Schéma du thème » illustre émetteur → message → canal → récepteur, et le bruit qui peut tout gâcher.' },
      ],
    },
    {
      h: 'Parler à ses salariés ≠ parler à ses clients',
      blocks: [
        { t: 'p', c: 'La communication **interne** (vers les salariés : notes, réunions, intranet) n’a ni la même cible ni les mêmes objectifs que la communication **externe** (vers les clients et partenaires : publicité, site, réseaux). Confondre les deux, c’est risquer le contresens.' },
      ],
    },
  ],
  'rh-t4': [
    {
      h: '1 800 € sur la fiche de paie, combien pour l’employeur ?',
      blocks: [
        { t: 'example', h: 'Cas', c: 'Un salarié touche 1 800 € net. Pourtant, ce poste coûte bien plus cher à l’entreprise.' },
        { t: 'p', c: 'Entre le net perçu et le **coût pour l’employeur**, il y a les **cotisations** (salariales et surtout **patronales**) qui financent la protection sociale. Le coût réel d’un salarié est donc nettement supérieur à son salaire net — un point essentiel pour toute décision d’embauche.' },
        { t: 'tip', h: 'À retenir', c: 'Coût employeur = salaire net + cotisations. N’oublie jamais les charges patronales.' },
      ],
    },
    {
      h: 'Le climat social, ça se mesure',
      blocks: [
        { t: 'p', c: 'Un bon climat social se voit à plusieurs signaux : peu de **turnover** (départs), peu d’**absentéisme**, peu de conflits, de bons résultats aux enquêtes de satisfaction. Depuis le développement du **télétravail**, les entreprises surveillent aussi l’équilibre vie pro / vie perso et le risque d’épuisement.' },
        { t: 'warning', h: 'Piège', c: 'Le climat social ne se résume pas au turnover : c’est un faisceau d’indicateurs.' },
      ],
    },
  ],

  // =========================================================================
  // SYSTÈMES D'INFORMATION DE GESTION (spécialité)
  // =========================================================================
  'sig-t1': [
    {
      h: 'Ta commande McDo dans le système',
      blocks: [
        { t: 'example', h: 'Cas', c: 'Tu commandes sur la borne : ta commande part en cuisine, décompte le stock d’ingrédients, alimente la caisse et la comptabilité, et remonte dans les statistiques du restaurant.' },
        { t: 'p', c: 'Tout cela est géré par le **système d’information** : il collecte, stocke, traite et **diffuse** l’information entre les services. Avec un **PGI** (une seule base de données partagée), l’information saisie une fois est disponible partout, sans ressaisie et sans incohérence.' },
        { t: 'tip', h: 'Force du PGI', c: 'Un logiciel unique, une base unique → fiabilité et temps réel.' },
      ],
    },
    {
      h: 'De la donnée à la décision',
      blocks: [
        { t: 'p', c: 'Une **donnée** brute (« 3 », « 12 € ») ne dit rien seule. Remise dans son contexte, elle devient une **information** (« on a vendu 3 menus à 12 € le samedi »). Analysée, elle devient une **connaissance** utile pour décider (« le samedi soir marche fort → renforcer l’équipe »).' },
        { t: 'tip', h: 'Chaîne', c: 'Donnée → information → connaissance : chaque étape ajoute du sens.' },
      ],
    },
  ],
  'sig-t2': [
    {
      h: 'Comment Spotify retrouve ta playlist',
      blocks: [
        { t: 'example', h: 'Cas', c: 'Une appli musicale doit relier des millions d’utilisateurs, de titres et de playlists, et retrouver instantanément « les chansons de la playlist de Léa ».' },
        { t: 'p', c: 'Impossible avec un simple tableur. On utilise une **base de données relationnelle** : des **tables** (utilisateurs, titres, playlists) reliées entre elles par des **clés**. Chaque table a une **clé primaire** (un identifiant unique) ; une **clé étrangère** fait le lien vers une autre table. C’est ce qui évite de tout réécrire et garde les données cohérentes.' },
        { t: 'tip', h: 'Voir le schéma', c: 'Le « Schéma du thème » montre deux tables reliées par une clé primaire et une clé étrangère.' },
      ],
    },
    {
      h: 'Poser une question à la base : le SQL',
      blocks: [
        { t: 'p', c: 'Pour interroger la base, on écrit une **requête** en langage SQL. Par exemple, obtenir le nom des clients de Lyon, triés par ordre alphabétique, se demande en quelques mots-clés : choisir les colonnes (SELECT), la table (FROM), filtrer (WHERE), trier (ORDER BY).' },
        { t: 'warning', h: 'Pièges classiques', c: 'WHERE filtre avant regroupement, HAVING après un GROUP BY. Et sans condition de jointure entre deux tables, on obtient toutes les combinaisons (produit cartésien).' },
      ],
    },
  ],
  'sig-t3': [
    {
      h: 'Wikipédia : écrit par des millions de mains',
      blocks: [
        { t: 'example', h: 'Cas', c: 'Un article de Wikipédia est modifié par des milliers de contributeurs, partout dans le monde, sans que le travail des uns efface celui des autres.' },
        { t: 'p', c: 'C’est possible grâce aux outils **collaboratifs** : un espace partagé et surtout un **historique des versions** qui garde la trace de chaque modification et permet de revenir en arrière. Les mêmes principes valent pour un Google Docs ou un dossier de classe rédigé à plusieurs.' },
        { t: 'tip', h: 'Bon réflexe', c: 'Définir les **droits d’accès** (qui peut lire, qui peut modifier) est indispensable dès qu’on partage.' },
      ],
    },
    {
      h: 'Le numérique transforme l’organisation',
      blocks: [
        { t: 'p', c: 'Messageries, cloud, visioconférence, télétravail : le numérique change la façon de travailler ensemble — plus vite, à distance, en continu. Mais il apporte aussi de nouveaux enjeux (surcharge d’informations, sécurité, frontière vie pro / vie perso).' },
      ],
    },
  ],
  'sig-t4': [
    {
      h: 'Quand un hôpital est pris en otage',
      blocks: [
        { t: 'example', h: 'Cas réel', c: 'Plusieurs hôpitaux français ont été paralysés par des rançongiciels (ransomwares) : des pirates chiffrent les données et exigent une rançon. Résultat : blocs opératoires ralentis, dossiers inaccessibles.' },
        { t: 'p', c: 'La sécurité d’un système d’information vise quatre objectifs (**DICP**) : que l’information reste **Disponible**, **Intègre** (non altérée), **Confidentielle** et **traçable** (Preuve). Une attaque peut viser n’importe lequel — et les conséquences sont parfois vitales.' },
        { t: 'tip', h: 'Bases de défense', c: 'Sauvegardes régulières, mises à jour, droits d’accès stricts : les fondamentaux qui limitent les dégâts.' },
      ],
    },
    {
      h: 'Le phishing : la faille, c’est souvent l’humain',
      blocks: [
        { t: 'example', h: 'Cas', c: 'Un salarié reçoit un mail « urgent » imitant sa banque, lui demandant son mot de passe. Il clique…' },
        { t: 'p', c: 'C’est de l’**hameçonnage (phishing)** : la technique la plus courante, car elle vise l’utilisateur, pas la machine. Aucun antivirus ne remplace la vigilance : on ne communique **jamais** un mot de passe par mail, et on vérifie l’expéditeur.' },
        { t: 'warning', h: 'À retenir', c: 'La sécurité n’est pas que technique : le comportement humain est la première protection.' },
      ],
    },
  ],
}
