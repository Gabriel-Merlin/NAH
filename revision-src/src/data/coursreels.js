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
        { t: 'p', c: 'Le contrat est défini par le Code civil comme un **accord de volontés** destiné à créer des **obligations**. Il repose sur deux piliers hérités de la Révolution : l’**autonomie de la volonté** (on ne s’engage que parce qu’on l’a voulu) et la **force obligatoire** (une fois conclu, il s’impose comme une loi privée).' },
        { t: 'p', c: 'Ce contrat te lie vraiment : tu dois payer, le vendeur doit te fournir la place. C’est la **force obligatoire** : « le contrat tient lieu de loi » à ceux qui l’ont conclu. On ne peut pas se rétracter sur un coup de tête (sauf droit de rétractation prévu, par ex. 14 jours pour un achat à distance).' },
        { t: 'table', head: ['Type de contrat', 'Ce qui le caractérise'], rows: [
          ['Synallagmatique', 'Obligations réciproques (vente)'],
          ['À titre onéreux', 'Chacun reçoit une contrepartie'],
          ['Consensuel', 'Le seul accord suffit, sans écrit'],
          ['D’adhésion', 'On accepte des clauses non négociées (abonnement)'],
        ] },
        { t: 'tip', h: 'L’idée à retenir', c: 'Un contrat, ce n’est pas forcément un gros document signé : c’est la rencontre de deux volontés (offre + acceptation). Un clic, une poignée de main, un ticket de caisse… peuvent suffire. L’écrit sert surtout de **preuve**.' },
      ],
    },
    {
      h: 'Quand on vous a trompé : le consentement vicié',
      blocks: [
        { t: 'example', h: 'Cas réel', c: 'Tu achètes sur une petite annonce une montre présentée comme une « Rolex authentique ». Une fois payée, tu découvres que c’est une contrefaçon. As-tu vraiment voulu acheter… une fausse ?' },
        { t: 'p', c: 'Non : tu as dit « oui », mais ton accord a été obtenu par une **tromperie**. Le droit considère alors que ton consentement est « vicié » : tu peux demander au juge d’**annuler** le contrat. Pour être valable, un contrat exige en effet un consentement **libre et éclairé** (art. 1128).' },
        { t: 'table', head: ['Vice', 'Définition', 'Exemple'], rows: [
          ['Erreur', 'Se tromper sur une qualité essentielle', 'Croire acheter un original'],
          ['Dol', 'Être trompé par des manœuvres', 'Le vendeur cache un défaut grave'],
          ['Violence', 'Consentir sous la contrainte', 'Signer sous la menace'],
        ] },
        { t: 'p', c: 'Ici, le vendeur a menti volontairement : c’est un **dol** (« une erreur provoquée »). Le dol est particulièrement sanctionné car il suppose une **intention de tromper** : il permet la **nullité** du contrat **et** des dommages-intérêts.' },
        { t: 'warning', h: 'Nullité ≠ résiliation', c: 'Annuler pour vice, c’est effacer le contrat depuis le début (comme s’il n’avait jamais existé). Ce n’est pas la même chose que « résilier » (arrêter pour l’avenir un contrat valable). Attention aussi : une simple erreur sur la **valeur** ne suffit pas.' },
      ],
    },
    {
      h: 'Pourquoi un ado ne peut pas tout signer',
      blocks: [
        { t: 'example', h: 'Cas', c: 'Un lycéen de 16 ans achète seul, à crédit, un scooter à 2 000 €. Ses parents découvrent la facture.' },
        { t: 'p', c: 'Le vendeur risque de ne jamais être payé : un mineur n’a pas la **capacité juridique** pour s’engager seul sur un tel achat. La **capacité** est la règle, l’**incapacité** l’exception (mineurs, majeurs sous tutelle/curatelle).' },
        { t: 'p', c: 'Un contrat n’est solide que si **trois conditions** sont réunies **en même temps** (art. 1128) : le **consentement**, la **capacité** et un **contenu licite et certain**. Il suffit qu’**une seule** manque (ici, la capacité) pour qu’un juge puisse l’**annuler**.' },
        { t: 'warning', h: 'Nuance', c: 'Un mineur peut valablement conclure les **actes de la vie courante** (acheter du pain, un ticket de bus) : tout n’est pas nul, seulement les engagements importants.' },
        { t: 'tip', h: 'Réflexe bac', c: 'Devant un cas, coche les 3 conditions : **Consentement – Capacité – Contenu licite**. Si une case manque, le contrat est **annulable**.' },
      ],
    },
  ],
  'droit-t6': [
    {
      h: 'Casser, c’est réparer',
      blocks: [
        { t: 'example', h: 'Cas', c: 'Le chien d’un voisin, mal tenu, mord un passant qui doit aller à l’hôpital. Qui paie les soins ?' },
        { t: 'p', c: 'Le maître du chien. Pour que sa **responsabilité civile** soit engagée, il faut réunir **trois éléments cumulatifs** : un **fait générateur** (le chien a mordu), un **dommage** (la blessure) et un **lien de causalité** entre les deux. Les trois ensemble → le maître doit **réparer**, c’est-à-dire indemniser la victime.' },
        { t: 'table', head: ['Condition', 'Ici'], rows: [
          ['Fait générateur', 'Le fait d’une chose/animal sous sa garde'],
          ['Dommage', 'La blessure (préjudice corporel)'],
          ['Lien de causalité', 'La morsure a causé la blessure'],
        ] },
        { t: 'p', c: 'Ici, le maître est le **gardien** de l’animal : il en répond même **sans faute** (responsabilité du fait des choses). C’est une protection forte pour la victime, qui n’a pas à prouver une négligence. La réparation vise à la **replacer** dans l’état où elle serait sans le dommage (réparation intégrale).' },
        { t: 'tip', h: 'La règle des 3', c: 'Fait générateur + dommage + lien de causalité. S’il en manque un seul (par ex. aucun dommage réel), il n’y a **pas** de responsabilité civile.' },
      ],
    },
    {
      h: 'Payer la victime OU être puni : deux logiques',
      blocks: [
        { t: 'example', h: 'Cas', c: 'Un conducteur ivre renverse un piéton. Il passe devant deux juges différents.' },
        { t: 'p', c: 'Devant le juge **pénal**, la société le sanctionne (amende, retrait de permis, voire prison) : le but est de **punir** un comportement interdit. Devant le juge **civil**, il doit **indemniser** le piéton pour ses blessures : le but est de **réparer** le préjudice d’une victime.' },
        { t: 'table', head: ['Critère', 'Civile', 'Pénale'], rows: [
          ['But', 'Réparer', 'Punir'],
          ['Qui agit', 'La victime', 'La société (ministère public)'],
          ['Sanction', 'Dommages-intérêts', 'Amende, prison'],
          ['Bénéficiaire', 'La victime', 'La société'],
        ] },
        { t: 'warning', h: 'Ne confonds pas', c: 'Responsabilité **civile** = réparer (de l’argent pour la victime). Responsabilité **pénale** = punir (une peine au nom de la société). Un même acte peut relever **des deux** en même temps.' },
      ],
    },
  ],
  'droit-t7': [
    {
      h: 'Chauffeur Uber : salarié ou indépendant ?',
      blocks: [
        { t: 'example', h: 'Cas réel', c: 'En 2020, la Cour de cassation a examiné la situation d’un chauffeur Uber. Officiellement « indépendant », il ne fixait pas ses prix, ne choisissait pas librement ses courses, et pouvait être déconnecté par la plateforme.' },
        { t: 'p', c: 'Les juges ont estimé qu’il travaillait en réalité sous les ordres d’Uber : il y avait un **lien de subordination**. Or c’est ce lien qui fait le **contrat de travail** — peu importe le nom écrit sur le papier. Résultat : le chauffeur a été reconnu **salarié**, avec les protections qui vont avec (congés, sécurité sociale…).' },
        { t: 'p', c: 'Le **contrat de travail** repose sur trois éléments : une **prestation de travail**, une **rémunération**, et surtout un **lien de subordination** — le pouvoir de l’employeur de donner des ordres, de contrôler et de sanctionner. C’est ce dernier qui fait toute la différence avec le travailleur **indépendant**, qui organise librement son activité.' },
        { t: 'tip', h: 'Le critère clé', c: 'Ce qui distingue un salarié d’un indépendant, ce n’est pas le **titre** du contrat mais la **réalité** : le **lien de subordination**. Le juge le recherche par un **faisceau d’indices** (ordres, contrôle, horaires imposés).' },
      ],
    },
    {
      h: 'CDI, CDD : la règle et l’exception',
      blocks: [
        { t: 'p', c: 'Quand une entreprise embauche, la norme est le **CDI** (durée indéterminée) : c’est la **règle**, la plus protectrice. Le **CDD** est une **exception** : on ne peut y recourir que pour un **motif précis** prévu par la loi (remplacer un salarié absent, faire face à un pic d’activité, emploi saisonnier) et pour une tâche **temporaire**.' },
        { t: 'p', c: 'Le CDD obéit à un **formalisme strict** : il doit être **écrit**, préciser son **motif** et son **terme**. À la fin, le salarié touche une **prime de précarité**. L’**intérim** suit la même logique de cas de recours limités, mais fait intervenir trois acteurs (salarié, agence, entreprise utilisatrice).' },
        { t: 'example', h: 'Cas', c: 'Un supermarché embauche en CDD « pour surcroît d’activité » pendant les fêtes : c’est justifié. Mais s’il enchaîne des CDD toute l’année sur le **même poste permanent**, un juge peut le **requalifier en CDI**.' },
        { t: 'warning', h: 'À retenir', c: 'Un CDD **sans motif légal** ou **sans écrit** est **requalifié en CDI** — une sanction très favorable au salarié.' },
      ],
    },
    {
      h: 'On ne licencie pas « parce que »',
      blocks: [
        { t: 'example', h: 'Cas', c: 'Un salarié est licencié au motif que « son chef ne l’apprécie pas ». Est-ce légal ?' },
        { t: 'p', c: 'Non. Un licenciement doit reposer sur une **cause réelle et sérieuse** : « réelle » = fondée sur des faits **exacts et vérifiables** ; « sérieuse » = assez **grave** pour justifier la rupture (fautes répétées, difficultés économiques réelles…). Une simple antipathie ne suffit pas.' },
        { t: 'p', c: 'L’employeur doit aussi respecter une **procédure** : convocation à un entretien préalable, entretien, puis notification écrite et **motivée**. Le non-respect du **fond** (la cause) **ou** de la **forme** (la procédure) rend le licenciement **abusif**.' },
        { t: 'tip', h: 'À retenir', c: 'Licenciement abusif → le salarié saisit le **conseil de prud’hommes** et obtient des **dommages-intérêts**. Il faut contrôler **deux niveaux** : le fond ET la forme.' },
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
        { t: 'p', c: 'Cela dépend de la **forme juridique**. En entreprise individuelle, l’entrepreneur et l’entreprise ne font (souvent) qu’un : le patrimoine personnel est plus exposé (même si, depuis 2022, la loi sépare de droit le patrimoine professionnel du personnel et protège la résidence principale). En créant une **société** (SARL, SAS), elle donne naissance à une **personne morale** distincte : les patrimoines sont séparés et sa responsabilité est en principe **limitée à ses apports**.' },
        { t: 'table', head: ['Forme', 'Responsabilité'], rows: [
          ['Entreprise individuelle', 'Patrimoine pro séparé du perso (2022)'],
          ['SARL / SAS', 'Limitée aux apports (personne morale)'],
        ] },
        { t: 'warning', h: 'La limite', c: 'La protection n’est jamais absolue : une **caution personnelle** demandée par la banque, ou une **faute de gestion** grave, peut faire tomber la barrière et engager les biens personnels du dirigeant.' },
        { t: 'tip', h: 'Le bon réflexe', c: 'Choisir une forme juridique, c’est d’abord choisir comment on **engage** (ou on **protège**) son patrimoine.' },
      ],
    },
    {
      h: 'Une idée, ça se protège',
      blocks: [
        { t: 'example', h: 'Cas', c: 'Léa crée un logo original et un nom de marque. Un concurrent les copie. Peut-elle réagir ?' },
        { t: 'p', c: 'Oui, si elle a **déposé sa marque** (à l’INPI). La **propriété industrielle** (marque, brevet, dessin) donne un **monopole d’exploitation** et permet d’attaquer les copieurs en **contrefaçon**. C’est différent du **droit d’auteur**, qui protège les œuvres (un texte, une musique, un site) **automatiquement**, sans dépôt.' },
        { t: 'table', head: ['On protège…', 'Par…', 'Durée'], rows: [
          ['Une invention technique', 'Brevet (INPI)', '20 ans'],
          ['Un nom, un logo', 'Marque (INPI)', '10 ans renouvelables'],
          ['Une œuvre (texte, musique)', 'Droit d’auteur (auto.)', 'Vie + 70 ans'],
        ] },
        { t: 'warning', h: 'Attention', c: 'Une **idée** seule ne se protège pas : c’est sa **mise en forme** (invention, marque, œuvre) qui est protégeable. Sans **dépôt**, un nom se défend beaucoup plus difficilement : protéger, c’est anticiper.' },
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
        { t: 'p', c: 'Cet épisode montre pourquoi l’État intervient : quand le marché seul ne suffit pas (crise, chômage), il peut **soutenir l’activité** pour amortir le choc. Le marché connaît en effet des **défaillances** : biens publics que personne ne veut payer, **externalités** (pollution), asymétries d’information, monopoles.' },
        { t: 'tip', h: 'À retenir', c: 'Même dans une économie de marché, l’État a un **rôle économique** car le marché **défaille** parfois. C’est l’une de ses grandes missions ; il en a d’autres, complémentaires.' },
      ],
    },
    {
      h: 'Trois missions, une même logique',
      blocks: [
        { t: 'p', c: 'L’économiste **Musgrave** résume l’action de l’État en **trois fonctions**. L’**allocation** : produire ce que le marché ne fournit pas seul (routes, écoles, sécurité — des biens utiles à tous). La **répartition** : prélever des impôts et verser des aides (allocations, retraites) pour réduire les inégalités. La **stabilisation** : face à une crise, relancer ; en cas de surchauffe, freiner.' },
        { t: 'table', head: ['Fonction', 'Objectif'], rows: [
          ['Allocation', 'Fournir les biens publics'],
          ['Répartition', 'Réduire les inégalités'],
          ['Stabilisation', 'Lisser les crises (emploi, prix)'],
        ] },
        { t: 'example', h: 'Illustration', c: 'Ton lycée (gratuit), la route devant chez toi, les allocations d’une famille modeste : trois formes différentes de l’intervention publique au quotidien.' },
      ],
    },
    {
      h: 'Mais à quel prix ?',
      blocks: [
        { t: 'p', c: 'Dépenser plus qu’on ne gagne creuse le **déficit** chaque année ; les déficits accumulés forment la **dette**. La France s’endette pour financer ces politiques, ce qui alimente un débat permanent : jusqu’où l’État peut-il intervenir sans fragiliser ses finances ?' },
        { t: 'p', c: 'Les limites sont réelles : le **poids de la dette** (les intérêts pèsent sur le budget), l’**effet d’éviction** (l’État emprunte tant qu’il évince l’investissement privé), les **règles européennes**. Le débat oppose les héritiers de **Keynes** (relancer en cas de crise) aux **libéraux** (attention à la dette et à l’efficacité).' },
        { t: 'warning', h: 'À ne pas confondre', c: 'Le **déficit** est un **flux** (le trou d’une année) ; la **dette** est un **stock** (tout ce qui reste à rembourser). On les rapporte au **PIB** (en %) pour comparer.' },
      ],
    },
  ],
  'eco-t7': [
    {
      h: 'Qui est vraiment « au chômage » ?',
      blocks: [
        { t: 'example', h: 'Cas', c: 'Trois personnes sans emploi : un étudiant de terminale, un retraité, et une femme de 30 ans qui postule activement. Laquelle est « au chômage » au sens officiel ?' },
        { t: 'p', c: 'Seulement la troisième. Pour être compté comme chômeur (au sens du BIT), il faut trois choses en même temps : être **sans emploi**, être **disponible** pour travailler, et **rechercher activement**. L’étudiant et le retraité sont **inactifs** : ils ne font pas partie de la population active.' },
        { t: 'p', c: 'On mesure la situation par le **taux de chômage** = chômeurs ÷ **population active** × 100 (la population active = actifs occupés + chômeurs). Attention : il ne se calcule **pas** sur toute la population.' },
        { t: 'tip', h: 'Pourquoi ça compte', c: 'Le **halo du chômage** regroupe des personnes sans emploi non comptées comme chômeurs (elles ne cherchent pas activement, ou ne sont pas disponibles) : le chiffre officiel **sous-estime** le sous-emploi réel.' },
      ],
    },
    {
      h: 'Quand une usine ferme',
      blocks: [
        { t: 'p', c: 'La fermeture d’une usine jette d’un coup des centaines de personnes sur le marché du travail. Certaines retrouveront vite un poste ; d’autres, dont le métier disparaît, devront se **reconvertir** (formation). Le chômage n’a donc pas une seule cause.' },
        { t: 'table', head: ['Type de chômage', 'Cause', 'Remède'], rows: [
          ['Conjoncturel', 'Ralentissement (crise)', 'Relance'],
          ['Structurel', 'Compétences inadaptées', 'Formation'],
          ['Frictionnel', 'Transition entre 2 emplois', 'Normal'],
        ] },
        { t: 'p', c: 'Les **politiques de l’emploi** se répartissent en deux familles : **actives** (agir sur les causes : formation, aides à l’embauche, allègements de charges) et **passives** (atténuer les conséquences : indemnisation). Une bonne politique **combine** les deux.' },
        { t: 'tip', h: 'Lien avec l’État', c: 'Le bon remède dépend du bon diagnostic : le chômage **conjoncturel** appelle une **relance**, le chômage **structurel** appelle la **formation**.' },
      ],
    },
  ],
  'eco-t8': [
    {
      h: 'Ton téléphone a fait le tour du monde',
      blocks: [
        { t: 'example', h: 'Cas réel', c: 'Un smartphone haut de gamme est conçu aux États-Unis, ses composants viennent de Corée, du Japon et de Taïwan, il est assemblé en Chine, puis vendu partout. Un seul objet, des dizaines de pays.' },
        { t: 'p', c: 'C’est la **mondialisation** : chaque pays se spécialise là où il est **relativement** le plus efficace (l’**avantage comparatif** de Ricardo), puis les biens s’échangent. Cette **division internationale du travail** rend les produits moins chers et plus variés… mais crée une forte **dépendance** entre économies (un blocage quelque part, et toute la chaîne s’enraye).' },
        { t: 'tip', h: 'À retenir', c: 'Avantage **absolu** (Smith) = être le meilleur ; avantage **comparatif** (Ricardo) = se spécialiser là où l’on est **relativement** le meilleur. C’est ce dernier qui fonde le gain à l’échange.' },
      ],
    },
    {
      h: 'Importer plus qu’on n’exporte',
      blocks: [
        { t: 'p', c: 'Un pays qui achète à l’étranger plus qu’il ne vend a une **balance commerciale déficitaire**. C’est le cas de la France sur les biens depuis des années : elle importe beaucoup (énergie, produits manufacturés) et le solde est négatif.' },
        { t: 'formula', c: 'Solde commercial = Exportations − Importations' },
        { t: 'p', c: 'Un déficit peut traduire un **manque de compétitivité** (nos produits se vendent mal) ou une **demande interne dynamique** (on consomme et on importe beaucoup) : ce n’est pas toujours un mauvais signe. La **balance commerciale** (les biens) n’est qu’une partie de la **balance des paiements** (tous les flux).' },
        { t: 'warning', h: 'Le signe compte', c: 'Négatif = **déficit** ; positif = **excédent**. Garde toujours le **signe** et l’**unité** dans ta réponse.' },
      ],
    },
    {
      h: 'Le libre-échange fait des gagnants… et des perdants',
      blocks: [
        { t: 'example', h: 'Illustration', c: 'Ouvrir les frontières permet d’acheter des vêtements bon marché (gagnant : le consommateur), mais peut fermer une usine textile locale incapable de s’aligner sur ces prix (perdant : ces salariés).' },
        { t: 'table', head: ['', 'Libre-échange', 'Protectionnisme'], rows: [
          ['Outils', 'Accords, OMC', 'Droits de douane, quotas'],
          ['Avantage', 'Prix bas, choix, croissance', 'Protège l’emploi local'],
          ['Risque', 'Délocalisations', 'Représailles, prix élevés'],
        ] },
        { t: 'tip', h: 'Nuance attendue', c: 'Au bac, ne présente jamais le libre-échange comme « tout bon » ou « tout mauvais » : montre les gains **et** les coûts sociaux, et propose un **accompagnement** des perdants (formation, reconversion).' },
      ],
    },
  ],
  'eco-t9': [
    {
      h: 'Le PIB ment-il ?',
      blocks: [
        { t: 'example', h: 'Cas', c: 'Un pays double son PIB en exploitant à fond ses forêts et ses mines, mais l’air devient irrespirable et les inégalités explosent. « Va-t-il mieux » ?' },
        { t: 'p', c: 'Pas sûr. Le **PIB** mesure la richesse marchande produite (la somme des **valeurs ajoutées**), pas le bien-être. On calcule sa croissance par : ((PIB_N − PIB_N-1) ÷ PIB_N-1) × 100.' },
        { t: 'list', c: [
          'Il **ignore** le travail bénévole et domestique.',
          'Il **ne dit rien** des inégalités ni de la pollution.',
          'Il compte même comme « richesse » la réparation d’une catastrophe.',
        ] },
        { t: 'tip', h: 'Mesurer autrement', c: 'On utilise aussi l’**IDH** (santé + éducation + revenu) pour parler de **développement**, et pas seulement de croissance. Croiser plusieurs indicateurs donne une image plus juste.' },
      ],
    },
    {
      h: 'La fast fashion et ses coûts cachés',
      blocks: [
        { t: 'example', h: 'Cas réel', c: 'Des enseignes de mode ultra-rapide (type Shein) sortent des milliers de nouveautés par jour à très bas prix. La croissance est réelle… mais elle s’accompagne de pollution, de déchets et de conditions de travail contestées.' },
        { t: 'p', c: 'Ces dégâts que le prix ne reflète pas sont des **externalités négatives** : le marché seul ne les corrige pas, d’où la nécessité d’une intervention. L’État dispose d’**instruments** : normes, **taxe** (principe pollueur-payeur, taxe carbone), **marché de quotas**, subventions vertes.' },
        { t: 'p', c: 'C’est tout l’enjeu du **développement durable** (rapport Brundtland) : concilier ses **trois piliers** — économique, social, environnemental. Le débat oppose la **soutenabilité faible** (le capital détruit est compensable) et **forte** (certaines ressources sont irremplaçables).' },
        { t: 'tip', h: 'Idée forte', c: 'Une croissance n’est durable que si elle préserve l’environnement et les générations futures : croître **sans** détruire. Croissance (quantité) ≠ développement (qualité durable).' },
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
        { t: 'p', c: 'Elles produisent toutes quelque chose, mais leur raison d’être diffère : le profit n’est qu’une finalité **parmi d’autres**. On distingue les entreprises **privées** (finalité lucrative), les organisations **publiques** (intérêt général) et les **associations/OSBL** (une cause, sans but lucratif). C’est la première chose à identifier face à une organisation.' },
        { t: 'tip', h: 'Caractériser', c: 'Toujours par : **type** (privée/publique/OSBL) · **finalité** · **taille** · **champ d’action** (local → international) · **ressources** · **statut juridique**.' },
      ],
    },
    {
      h: 'Ce qui fait tourner une organisation',
      blocks: [
        { t: 'p', c: 'Pour fonctionner, toute organisation combine des **ressources** : des personnes (salariés, bénévoles), de l’argent (ventes, subventions, dons) et des moyens matériels et immatériels (locaux, machines, savoir-faire, données). Bien les combiner, c’est déjà du management.' },
        { t: 'p', c: 'Le management a **deux niveaux** : le **stratégique** (les dirigeants fixent le cap à long terme) et l’**opérationnel** (l’encadrement pilote le quotidien). Sa réussite se mesure par la **performance**, qui croise l’**efficacité** (atteindre l’objectif) et l’**efficience** (au moindre coût).' },
        { t: 'tip', h: 'Piège fréquent', c: 'Ne confonds pas **finalité** (la raison d’être, durable) et **objectif** (un but précis, mesurable et daté, comme « ouvrir 10 magasins en 2 ans »). Ni **efficacité** (le résultat) et **efficience** (sans gaspiller).' },
      ],
    },
  ],
  'mgmt-t2': [
    {
      h: 'Netflix vs Blockbuster : la stratégie qui tue',
      blocks: [
        { t: 'example', h: 'Cas réel', c: 'En 2000, le géant de la location de DVD Blockbuster a refusé de racheter le petit Netflix. Dix ans plus tard, Blockbuster faisait faillite, tandis que Netflix, passé au streaming, devenait un leader mondial.' },
        { t: 'p', c: 'La différence ? La **stratégie** : Netflix a anticipé un changement (Internet) et bâti un **avantage concurrentiel** difficile à copier (technologie, données, catalogue). Blockbuster, prisonnier de ses magasins (coûts fixes), n’a pas su se réinventer. Une bonne stratégie engage l’organisation sur le **long terme**, au-delà des décisions du quotidien.' },
        { t: 'p', c: 'Michael **Porter** distingue deux grandes stratégies : la **domination par les coûts** (proposer le prix le plus bas grâce aux volumes) et la **différenciation** (une offre perçue comme unique, que le client paie plus cher). Vouloir « le prix le plus bas ET le plus haut de gamme » est intenable : il faut **choisir**.' },
      ],
    },
    {
      h: 'Regarder avant de sauter : le diagnostic',
      blocks: [
        { t: 'p', c: 'Avant de décider, on fait un **diagnostic** : à l’**intérieur**, ses **forces** et ses **faiblesses** (ce qu’on maîtrise) ; à l’**extérieur**, les **opportunités** et les **menaces** du marché (ce qu’on subit). Croiser les deux, c’est la matrice **SWOT**.' },
        { t: 'table', head: ['', 'Positif', 'Négatif'], rows: [
          ['Interne', 'Forces', 'Faiblesses'],
          ['Externe', 'Opportunités', 'Menaces'],
        ] },
        { t: 'example', h: 'Illustration', c: 'Une petite marque bio : force = image authentique ; faiblesse = peu de moyens ; opportunité = mode du « naturel » ; menace = l’arrivée des grands groupes.' },
        { t: 'tip', h: 'Avantage durable', c: 'Une ressource ne donne un avantage concurrentiel que si elle est **rare et difficile à imiter** (une réputation, un savoir-faire unique). Ne confonds pas interne (forces/faiblesses) et externe (opportunités/menaces).' },
      ],
    },
  ],
  'mgmt-t3': [
    {
      h: 'Patagonia offre son entreprise à la planète',
      blocks: [
        { t: 'example', h: 'Cas réel', c: 'En 2022, le fondateur de la marque de vêtements Patagonia a transféré la propriété de son entreprise à une structure dédiée à la lutte climatique : désormais, les bénéfices financent la protection de l’environnement.' },
        { t: 'p', c: 'C’est une forme forte de **RSE** (responsabilité sociétale) : intégrer **volontairement** les enjeux sociaux et écologiques **au cœur** de la stratégie, pas comme un simple habillage. Elle applique à l’entreprise le **développement durable** et ses **trois piliers** (économique, social, environnemental).' },
        { t: 'p', c: 'La RSE n’est pas de la charité : elle nourrit la **performance globale** (image, fidélité des clients et des salariés, réduction des risques) et peut devenir un **avantage concurrentiel**. Elle suppose de prendre au sérieux **toutes** les **parties prenantes** (salariés, clients, riverains, ONG…), pas seulement les actionnaires.' },
      ],
    },
    {
      h: 'Greenwashing : la RSE de façade',
      blocks: [
        { t: 'example', h: 'Cas', c: 'Une marque colle un logo « vert » et le mot « éco » sur ses produits, sans rien changer à sa production polluante.' },
        { t: 'p', c: 'C’est du **greenwashing** (écoblanchiment) : communiquer « responsable » sans l’être. Les consommateurs, les ONG et la loi y sont de plus en plus attentifs ; le risque, c’est une **perte de confiance durable**. La parade : des engagements **prouvés** (labels, reporting extra-financier, norme ISO 26000).' },
        { t: 'p', c: 'Les organisations font aussi face à de profondes **mutations** : transition **numérique**, transition **écologique**, nouvelles attentes sociales. Chacune est à la fois une **menace** (pour qui la subit) et une **opportunité** (pour qui l’anticipe) : d’où l’importance de l’**agilité**.' },
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
        { t: 'p', c: 'Leur achat ne répond pas qu’à un besoin fonctionnel (téléphoner) : il touche l’**image de soi**, l’envie d’appartenir, d’être reconnu. La **mercatique** (marketing) est justement l’ensemble des actions pour **détecter, analyser et satisfaire** les besoins des consommateurs — elle part du client, pas du produit.' },
        { t: 'p', c: 'La pyramide de **Maslow** hiérarchise les besoins : physiologiques, sécurité, appartenance, estime, accomplissement. Un même produit peut en toucher plusieurs à la fois (un smartphone : communiquer **et** afficher un statut).' },
        { t: 'tip', h: 'Renversement', c: 'La mercatique part du **client** (« qu’est-ce qu’il veut ? »), pas du produit (« j’ai fabriqué, je cherche à vendre »).' },
      ],
    },
    {
      h: 'Ce qui pousse, ce qui freine',
      blocks: [
        { t: 'p', c: 'Face à un achat, deux forces s’opposent : les **motivations** (ou mobiles) qui **poussent**, et les **freins** qui **retiennent**. Le rôle du marketing est d’**augmenter les mobiles** et de **lever les freins** — d’où les garanties, les facilités de paiement, les essais gratuits, les avis clients.' },
        { t: 'table', head: ['Mobiles (poussent)', 'Freins (retiennent)'], rows: [
          ['Hédoniste : se faire plaisir', 'Prix (frein financier)'],
          ['Oblatif : faire plaisir aux autres', 'Peur de se tromper (risque)'],
          ['Auto-expression : montrer qui l’on est', 'Culpabilité (inhibition)'],
        ] },
        { t: 'p', c: 'L’achat se fait aussi en **étapes** : reconnaissance du besoin → recherche d’informations → évaluation → décision → **évaluation post-achat** (satisfaction ou regret). Un client satisfait revient et recommande ; un client déçu part et « fait du bruit ».' },
        { t: 'warning', h: 'À ne pas inverser', c: 'La **motivation** pousse à l’achat, le **frein** le retient. Ce sont deux notions **opposées** à ne pas confondre.' },
      ],
    },
    {
      h: 'On n’achète pas tous de la même façon',
      blocks: [
        { t: 'p', c: 'Nos choix dépendent de facteurs **personnels** (perception, habitudes, personnalité, âge) et **socioculturels** (la culture, les proches, les groupes de référence, le milieu social). Deux personnes devant le même produit peuvent réagir de façon opposée : c’est pourquoi une marque doit connaître **qui** est en face.' },
        { t: 'p', c: 'On distingue aussi des **types d’achat** : **réfléchi** (une voiture, choix long), **impulsif** (en caisse, sans réflexion), **routinier** (les courses habituelles). Chaque type appelle une mercatique différente. Pour connaître tout cela, l’entreprise mène des **études** : **quantitatives** (combien ? par sondage) et **qualitatives** (pourquoi ? par entretiens).' },
        { t: 'tip', h: 'Vers la suite', c: 'Comprendre le consommateur mène naturellement à **découper** le marché en groupes homogènes : c’est la **segmentation**.' },
      ],
    },
  ],
  'mkg-t2': [
    {
      h: 'Vinted, Rolex, McDo : pas les mêmes clients',
      blocks: [
        { t: 'example', h: 'Cas', c: 'Une montre à 20 € sur Vinted, une Rolex à 10 000 €, un menu à 8 € : trois offres, trois publics totalement différents.' },
        { t: 'p', c: 'Aucune marque ne peut plaire à tout le monde. Elle **découpe** donc le marché en groupes homogènes (la **segmentation**), en **choisit** un ou plusieurs (le **ciblage**), puis construit une **image** qui la distingue des concurrents (le **positionnement**). Trois étapes, dans cet ordre : c’est la démarche **SCP**.' },
        { t: 'table', head: ['Étape', 'Question', 'Résultat'], rows: [
          ['Segmentation', 'Comment découper ?', 'Des segments homogènes'],
          ['Ciblage', 'Qui viser ?', 'La cible'],
          ['Positionnement', 'Quelle image ?', 'Une place dans l’esprit du client'],
        ] },
        { t: 'tip', h: 'Mémo', c: '**S**egmenter (découper) → **C**ibler (choisir) → **P**ositionner (image voulue). Un bon positionnement est **clair, distinctif et crédible**.' },
      ],
    },
    {
      h: 'Connaître son marché',
      blocks: [
        { t: 'p', c: 'Un marché est la rencontre d’une **offre** et d’une **demande**. Ce n’est pas que les clients actuels : il y a aussi les concurrents, et les **non-consommateurs relatifs** qu’on pourrait convaincre demain (le potentiel de croissance). Analyser tout cela (taille, tendances, parts de marché) évite de foncer à l’aveugle.' },
        { t: 'p', c: 'On situe sa position par la **part de marché** = ventes de l’entreprise ÷ ventes totales du marché × 100. Pour rester à jour, l’entreprise exerce une **veille** (surveillance continue de la concurrence et des tendances) et réalise des **études de marché** avant toute décision importante.' },
        { t: 'warning', h: 'Deux mesures à distinguer', c: 'La part de marché (en % du **marché total**) n’est pas la part de marché **relative** (comparée au **leader**).' },
      ],
    },
  ],
  'mkg-t3': [
    {
      h: 'Pourquoi une Rolex n’est pas vendue en supermarché',
      blocks: [
        { t: 'example', h: 'Cas', c: 'Imagine une Rolex à 10 000 € posée entre les paquets de pâtes, avec une pub criarde « −50 % ». Absurde, non ?' },
        { t: 'p', c: 'Parce que les quatre leviers du marketing — le **produit**, le **prix**, la **distribution**, la **communication** (les **4P**) — doivent former un tout **cohérent** avec le positionnement. Un produit de luxe → un prix élevé → des boutiques sélectives → une communication prestigieuse. Casser un seul de ces éléments détruit l’image.' },
        { t: 'table', head: ['P', 'Décisions'], rows: [
          ['Produit', 'Gamme, qualité, marque, design'],
          ['Prix', 'Niveau, stratégie, réductions'],
          ['Distribution (Place)', 'Circuits, points de vente'],
          ['Communication (Promotion)', 'Publicité, réseaux, promotions'],
        ] },
        { t: 'tip', h: 'Les 4P', c: 'Produit, Prix, Distribution (Place), Communication (Promotion) : c’est le plan de marchéage, et il se pense **ensemble**, jamais isolément.' },
      ],
    },
    {
      h: 'Le prix : bien plus qu’un chiffre',
      blocks: [
        { t: 'p', c: 'Le prix est le seul P qui **rapporte** de l’argent (les autres en coûtent) et il envoie un **signal** de qualité. Trop bas, il fait douter ; trop haut, il fait fuir. On le fixe en croisant trois éléments : le **coût** (il doit être couvert), la **demande** (ce que le client accepte de payer) et la **concurrence**.' },
        { t: 'p', c: 'Au lancement, trois stratégies : l’**écrémage** (prix élevé, image premium), la **pénétration** (prix bas pour conquérir vite un large marché) ou l’**alignement** (se caler sur le marché). L’**élasticité-prix** mesure la sensibilité de la demande au prix.' },
        { t: 'warning', h: 'Piège de calcul', c: 'Ne confonds pas le taux de **marge** (calculé sur le **coût d’achat**) et le taux de **marque** (calculé sur le **prix de vente**).' },
      ],
    },
  ],
  'mkg-t4': [
    {
      h: 'Amazon sait ce que tu veux avant toi',
      blocks: [
        { t: 'example', h: 'Cas', c: 'À peine connecté, un site te propose « pour toi » des produits étonnamment pertinents, en fonction de tes achats et de tes clics.' },
        { t: 'p', c: 'C’est le marketing **numérique** : les **données** des clients permettent de **personnaliser** l’offre et la publicité (recommandations, ciblage), et de **mesurer** en temps réel (taux de clic, de conversion). Mais elles ne s’utilisent pas librement : le **RGPD** impose le **consentement**, une base légale, et le droit de faire **effacer** ses données.' },
        { t: 'p', c: 'Le parcours d’achat est devenu **omnicanal** : le client passe du magasin au site à l’appli et aux réseaux sociaux. Il se renseigne en ligne, achète en boutique (ou l’inverse). Les **avis** et le **marketing d’influence** pèsent souvent plus que la publicité classique.' },
        { t: 'tip', h: 'Cadre', c: 'La donnée personnelle est protégée : la collecter **sans base légale** est interdit. Un usage **responsable** de la data renforce la **confiance**.' },
      ],
    },
    {
      h: 'Vert pour de vrai, ou greenwashing ?',
      blocks: [
        { t: 'p', c: 'La mercatique **responsable** (ou durable) intègre l’environnement et l’éthique dans l’offre : éco-conception, transparence, circuits courts. Elle répond à une attente forte des consommateurs et peut devenir un **avantage concurrentiel**.' },
        { t: 'p', c: 'Mais gare au **greenwashing** (écoblanchiment) : afficher un discours « écolo » sans changer ses pratiques. Les consommateurs, les ONG et la loi le repèrent de mieux en mieux, et la sanction est une **perte de confiance** durable. La **e-réputation** (avis, bad buzz) se surveille de près.' },
        { t: 'warning', h: 'Vigilance', c: 'Un argument écologique doit être **vrai et prouvé** (label, reporting), pas un simple habillage marketing.' },
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
        { t: 'p', c: 'Le salaire évite le mécontentement, mais il ne suffit pas à **motiver** durablement : c’est la distinction de **Herzberg** entre les **facteurs d’hygiène** (salaire, conditions — ils évitent l’insatisfaction) et les **facteurs de motivation** (reconnaissance, intérêt, responsabilités, évolution — ils donnent l’envie).' },
        { t: 'table', head: ['Facteurs d’hygiène', 'Facteurs de motivation'], rows: [
          ['Salaire, conditions, sécurité', 'Reconnaissance, autonomie'],
          ['Évitent le mécontentement', 'Donnent l’envie de s’investir'],
        ] },
        { t: 'warning', h: 'À distinguer', c: 'Motivation ≠ satisfaction : on peut être **satisfait** (bien payé) sans être **motivé**, et inversement. Un bon salaire seul ne motive pas.' },
      ],
    },
    {
      h: 'Être compétent, ça ne se résume pas à un diplôme',
      blocks: [
        { t: 'p', c: 'Un bon vendeur connaît ses produits (**savoir**), sait mener un entretien de vente (**savoir-faire**) et met le client à l’aise (**savoir-être**). La **compétence** se démontre **en situation** : c’est la combinaison des trois, pas seulement le diplôme.' },
        { t: 'p', c: 'L’entreprise **développe** les compétences par la formation, le tutorat, la mobilité. La **GPEC** (gestion prévisionnelle des emplois et des compétences) **anticipe** : quels métiers vont évoluer, quelles compétences faudra-t-il ? Elle permet de former **à l’avance** plutôt que de subir.' },
        { t: 'tip', h: 'Enjeu RH', c: 'Recruter, former, faire évoluer : tout part de l’identification des **compétences** dont l’organisation a besoin. Compétence = **savoir + savoir-faire + savoir-être**.' },
      ],
    },
  ],
  'rh-t2': [
    {
      h: 'Une équipe soudée gagne (mais attention)',
      blocks: [
        { t: 'example', h: 'Cas', c: 'Une équipe de sport très soudée enchaîne les victoires. Mais à force de penser pareil, personne n’ose dire que la tactique ne marche plus.' },
        { t: 'p', c: 'La **cohésion** renforce la performance : on se fait confiance, on coopère. Mais son excès crée du **conformisme** (la « pensée de groupe ») où plus personne ne remet en cause le groupe. Un bon manager entretient la cohésion **sans** étouffer les avis différents. La **culture d’entreprise** (valeurs, rites, histoire partagés) nourrit cette cohésion et le sentiment d’appartenance.' },
        { t: 'tip', h: 'Nuance', c: 'La cohésion est une **force** ; le conformisme aveugle, un **risque**. Une bonne équipe reste soudée **ET** critique.' },
      ],
    },
    {
      h: 'Un conflit n’est pas forcément une catastrophe',
      blocks: [
        { t: 'example', h: 'Cas', c: 'Deux collègues se disputent sans cesse sur « qui fait quoi ».' },
        { t: 'p', c: 'Souvent, la vraie cause n’est pas les personnes mais l’**organisation** (rôles mal définis). Les conflits ont des origines variées : d’**intérêts**, de **valeurs**, de **personnes**, de **pouvoir**. Bien géré, un conflit peut même être **constructif** : il oblige à clarifier.' },
        { t: 'table', head: ['Mode de résolution', 'Principe'], rows: [
          ['Recours hiérarchique', 'Le chef tranche'],
          ['Négociation', 'Les parties cherchent un accord'],
          ['Médiation', 'Un tiers neutre aide au dialogue'],
          ['Arbitrage', 'Un tiers impose la solution'],
        ] },
        { t: 'warning', h: 'À distinguer', c: 'Médiation = on **aide** à trouver un accord ; arbitrage = on **impose** la solution. La **négociation** gagnant-gagnant est souvent la plus durable.' },
      ],
    },
  ],
  'rh-t3': [
    {
      h: 'Le bad buzz : quand la communication dérape',
      blocks: [
        { t: 'example', h: 'Cas', c: 'Une marque publie un message maladroit ; en quelques heures, les réseaux s’enflamment et l’image en prend un coup.' },
        { t: 'p', c: 'La communication suit toujours le même schéma : un **émetteur** envoie un **message** (codé) par un **canal** à un **récepteur** (qui décode), en attendant un **retour** (feedback). Quand ça échoue, c’est souvent à cause d’un **bruit** (mot mal choisi, mauvais canal, contexte).' },
        { t: 'p', c: 'Face à une crise (bad buzz), la règle est : **réagir vite**, être **transparent et honnête**, **assumer** et agir, **parler d’une seule voix**. Le **silence** et le **mensonge** sont les pires réactions : sur les réseaux, l’e-réputation se joue en quelques heures.' },
        { t: 'tip', h: 'À retenir', c: 'Communiquer efficacement = message **clair**, **canal adapté** au sujet (une réunion pour un sujet sensible, pas un SMS), écoute du **feedback**, réduction des **bruits**.' },
      ],
    },
    {
      h: 'Parler à ses salariés ≠ parler à ses clients',
      blocks: [
        { t: 'p', c: 'La communication **interne** (vers les salariés : notes, réunions, intranet) n’a ni la même cible ni les mêmes objectifs que la communication **externe** (vers les clients et partenaires : publicité, site, réseaux). Confondre les deux, c’est risquer le contresens.' },
        { t: 'table', head: ['Critère', 'Types'], rows: [
          ['Destinataire', 'Interne (salariés) / Externe (public)'],
          ['Objet', 'Commerciale (vendre) / Institutionnelle (image)'],
          ['Cadre', 'Formelle (officielle) / Informelle (« radio couloir »)'],
        ] },
        { t: 'tip', h: 'Cohérence', c: 'La **communication globale** vise la **cohérence** de tous ces messages : ce qu’on dit en interne, aux clients et au public ne doit pas se contredire.' },
      ],
    },
  ],
  'rh-t4': [
    {
      h: '1 800 € sur la fiche de paie, combien pour l’employeur ?',
      blocks: [
        { t: 'example', h: 'Cas', c: 'Un salarié touche 1 800 € net. Pourtant, ce poste coûte bien plus cher à l’entreprise.' },
        { t: 'p', c: 'Entre le net perçu et le **coût pour l’employeur**, il y a les **cotisations** : les **salariales** (~22 %, retenues sur le brut) et surtout les **patronales** (~42 % du brut, payées en plus). Elles financent la protection sociale (retraite, maladie, chômage).' },
        { t: 'formula', c: 'Salaire net = brut − cotisations salariales\nCoût employeur = brut + cotisations patronales' },
        { t: 'p', c: 'Pour un net de 1 800 € (brut ≈ 2 300 €), le coût réel pour l’employeur avoisine **3 260 €**. L’écart est considérable : c’est un point essentiel pour toute décision d’embauche et le débat sur le « coût du travail ».' },
        { t: 'tip', h: 'À retenir', c: 'Coût employeur = salaire brut + cotisations **patronales**. N’oublie jamais les charges patronales : le coût dépasse largement le net.' },
      ],
    },
    {
      h: 'Le climat social, ça se mesure',
      blocks: [
        { t: 'p', c: 'Un bon **climat social** se **mesure** avec des **indicateurs** objectifs : le **turnover** (rotation, départs), l’**absentéisme**, le nombre de conflits/grèves, les accidents du travail, les enquêtes de satisfaction. Le manager les suit comme un tableau de bord.' },
        { t: 'p', c: 'De bonnes **conditions de travail** et une démarche de **QVT** (qualité de vie au travail) améliorent la performance : moins d’absentéisme, plus d’engagement. À l’inverse, un mauvais climat coûte cher (remplacements, perte de compétences). Le **télétravail** ajoute l’enjeu de l’équilibre vie pro/perso et du **droit à la déconnexion**.' },
        { t: 'warning', h: 'Piège', c: 'Le climat social ne se résume pas au **turnover** : c’est un **faisceau d’indicateurs**. Bien-être et performance sont liés.' },
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
        { t: 'p', c: 'Tout cela est géré par le **système d’information (SI)** : l’ensemble des ressources (humaines, matérielles, logicielles) qui **collectent, stockent, traitent et diffusent** l’information. C’est le « système nerveux » de l’entreprise.' },
        { t: 'table', head: ['Fonction du SI', 'Exemple'], rows: [
          ['Collecter', 'Saisir la commande'],
          ['Stocker', 'Base de données'],
          ['Traiter', 'Calculer, éditer la facture'],
          ['Diffuser', 'Envoyer l’info au bon service'],
        ] },
        { t: 'tip', h: 'Force du PGI', c: 'Avec un **PGI/ERP** (une seule base partagée), l’information saisie **une fois** est disponible partout : un logiciel unique, une base unique → **fiabilité** et **temps réel**.' },
      ],
    },
    {
      h: 'De la donnée à la décision',
      blocks: [
        { t: 'p', c: 'Une **donnée** brute (« 3 », « 12 € ») ne dit rien seule. Remise dans son contexte, elle devient une **information** (« on a vendu 3 menus à 12 € le samedi »). Analysée, elle devient une **connaissance** utile pour décider (« le samedi soir marche fort → renforcer l’équipe »).' },
        { t: 'p', c: 'La finalité du SI est d’**aider à décider**, à tous les niveaux (opérationnel : suivre les stocks ; stratégique : tableaux de bord des dirigeants). Encore faut-il des données **fiables, à jour et sécurisées** : « garbage in, garbage out » — une donnée fausse mène à une mauvaise décision.' },
        { t: 'tip', h: 'Chaîne', c: 'Donnée → information → connaissance : chaque étape **ajoute du sens**. La qualité des données conditionne la qualité des décisions.' },
      ],
    },
  ],
  'sig-t2': [
    {
      h: 'Comment Spotify retrouve ta playlist',
      blocks: [
        { t: 'example', h: 'Cas', c: 'Une appli musicale doit relier des millions d’utilisateurs, de titres et de playlists, et retrouver instantanément « les chansons de la playlist de Léa ».' },
        { t: 'p', c: 'Impossible avec un simple tableur. On utilise une **base de données relationnelle** : des **tables** (utilisateurs, titres, playlists) reliées entre elles par des **clés**. Chaque table a une **clé primaire** (un identifiant unique) ; une **clé étrangère** fait le lien vers une autre table. C’est ce qui évite de tout réécrire et garde les données cohérentes.' },
        { t: 'table', head: ['Terme', 'Signification'], rows: [
          ['Table', 'Un tableau de données (ex. CLIENTS)'],
          ['Enregistrement', 'Une ligne (un client précis)'],
          ['Champ', 'Une colonne (nom, ville…)'],
          ['Clé primaire', 'Identifiant unique de la ligne'],
          ['Clé étrangère', 'Lien vers une autre table'],
        ] },
        { t: 'tip', h: 'À retenir', c: 'Base relationnelle = **tables** liées par des **clés**. Clé **primaire** = identifiant unique ; clé **étrangère** = lien vers une autre table.' },
      ],
    },
    {
      h: 'Poser une question à la base : le SQL',
      blocks: [
        { t: 'p', c: 'Pour interroger la base, on écrit une **requête** en langage **SQL**. La structure de base : choisir les colonnes (**SELECT**), la table (**FROM**), filtrer (**WHERE**), trier (**ORDER BY**).' },
        { t: 'example', h: 'Requête', c: 'Nom et ville des clients de Lyon, triés par nom :\nSELECT nom, ville\nFROM CLIENTS\nWHERE ville = \'Lyon\'\nORDER BY nom ;' },
        { t: 'p', c: 'On peut aussi **calculer** avec les fonctions d’agrégation (COUNT, SUM, AVG…) et **croiser** deux tables par une **jointure** (égalité des clés). Ex. : `SELECT COUNT(*) FROM CLIENTS WHERE ville = \'Lyon\'` compte les clients lyonnais.' },
        { t: 'warning', h: 'Pièges classiques', c: 'WHERE filtre **avant** regroupement, HAVING **après** un GROUP BY. Et sans condition de **jointure** entre deux tables, on obtient toutes les combinaisons (produit cartésien). Ne pas oublier le **point-virgule** et les **guillemets** autour du texte.' },
      ],
    },
  ],
  'sig-t3': [
    {
      h: 'Wikipédia : écrit par des millions de mains',
      blocks: [
        { t: 'example', h: 'Cas', c: 'Un article de Wikipédia est modifié par des milliers de contributeurs, partout dans le monde, sans que le travail des uns efface celui des autres.' },
        { t: 'p', c: 'C’est possible grâce aux outils **collaboratifs** : un espace **partagé**, la **coédition** (plusieurs personnes modifient en même temps) et surtout un **historique des versions** qui garde la trace de chaque modification et permet de revenir en arrière. Ces outils reposent souvent sur le **cloud** (serveurs distants accessibles via Internet).' },
        { t: 'p', c: 'Ils rendent possible l’**intelligence collective** : un groupe produit, ensemble, **plus** que la somme des individus (Wikipédia en est l’exemple). Mais cela exige des **règles** et une **modération** pour rester fiable (risque de désinformation).' },
        { t: 'tip', h: 'Bon réflexe', c: 'Définir les **droits d’accès** (qui peut lire, qui peut modifier) est indispensable dès qu’on partage. Le cloud pose aussi des enjeux de **sécurité** et de **dépendance**.' },
      ],
    },
    {
      h: 'Le numérique transforme l’organisation',
      blocks: [
        { t: 'p', c: 'Messageries, cloud, visioconférence, **télétravail** : le numérique change la façon de travailler ensemble — plus vite, à distance, en continu. De nouvelles formes d’organisation apparaissent, plus **agiles** et flexibles.' },
        { t: 'table', head: ['Opportunités', 'Risques'], rows: [
          ['Flexibilité, gain de temps', 'Frontière vie pro/perso brouillée'],
          ['Collaboration à distance', 'Isolement, perte de lien'],
          ['Automatisation des tâches', 'Surcharge d’informations, sécurité'],
        ] },
        { t: 'tip', h: 'À retenir', c: 'La transformation numérique offre **flexibilité et efficacité** mais exige de nouvelles **compétences** et un **droit à la déconnexion** pour protéger les salariés.' },
      ],
    },
  ],
  'sig-t4': [
    {
      h: 'Quand un hôpital est pris en otage',
      blocks: [
        { t: 'example', h: 'Cas réel', c: 'Plusieurs hôpitaux français ont été paralysés par des rançongiciels (ransomwares) : des pirates chiffrent les données et exigent une rançon. Résultat : blocs opératoires ralentis, dossiers inaccessibles.' },
        { t: 'p', c: 'La sécurité d’un système d’information vise quatre objectifs (**DICP**) : que l’information reste **Disponible**, **Intègre** (non altérée), **Confidentielle** et **traçable** (Preuve). Une attaque peut viser n’importe lequel — et les conséquences sont parfois vitales.' },
        { t: 'table', head: ['Objectif', 'Signification'], rows: [
          ['Disponibilité', 'Accessible quand on en a besoin'],
          ['Intégrité', 'Non altérée, non falsifiée'],
          ['Confidentialité', 'Réservée aux personnes autorisées'],
          ['Preuve (traçabilité)', 'On sait qui a fait quoi'],
        ] },
        { t: 'tip', h: 'Bases de défense', c: 'Sauvegardes régulières (et hors ligne), mises à jour, pare-feu/antivirus, droits d’accès stricts, **sensibilisation** : les fondamentaux qui limitent les dégâts. Ne **jamais payer** la rançon : restaurer depuis les sauvegardes.' },
      ],
    },
    {
      h: 'Le phishing : la faille, c’est souvent l’humain',
      blocks: [
        { t: 'example', h: 'Cas', c: 'Un salarié reçoit un mail « urgent » imitant sa banque, lui demandant son mot de passe. Il clique…' },
        { t: 'p', c: 'C’est de l’**hameçonnage (phishing)** : la technique la plus courante, car elle vise l’**utilisateur**, pas la machine. C’est souvent la porte d’entrée d’un **ransomware**. Aucun antivirus ne remplace la vigilance : on ne communique **jamais** un mot de passe par mail, et on **vérifie l’expéditeur**.' },
        { t: 'p', c: 'La protection des **données personnelles** est aussi une obligation légale : le **RGPD** impose consentement, finalité, minimisation, sécurité et droits des personnes (accès, effacement). Son non-respect expose à de lourdes **sanctions** (CNIL).' },
        { t: 'warning', h: 'À retenir', c: 'La sécurité n’est pas que technique : le **comportement humain** est la **première protection**. La meilleure défense combine technique **et** vigilance.' },
      ],
    },
  ],
}
