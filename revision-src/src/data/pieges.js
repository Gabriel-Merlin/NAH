// « Erreurs fréquentes / pièges » à éviter, par thème. Rédigés à la main, dans
// l'esprit des attendus du bac STMG. Affichés en encadré sur la page Thème.
export const PIEGES = {
  // ---- Gestion & Finance ----
  'gf-t1': [
    'Ne confonds pas **charge** (appauvrit l’entreprise, au compte de résultat) et **dépense/décaissement** (sortie de trésorerie) : une charge n’est pas toujours payée tout de suite.',
    'La **TVA n’est pas une charge** : l’entreprise la collecte pour l’État. Seule la TVA à décaisser est reversée.',
    'Le **bilan** est une photo à une date (patrimoine) ; le **compte de résultat** couvre une période (activité). On ne les confond pas.',
    'L’**amortissement** constate une perte de valeur : c’est une charge **sans décaissement**.',
  ],
  'gf-t2': [
    'Ne confonds pas **résultat** (comptable) et **trésorerie** : on peut être bénéficiaire et manquer de trésorerie (décalage encaissements/décaissements).',
    'Le **BFR** n’est pas une charge : c’est un besoin de financement lié au cycle d’exploitation.',
    'Une **trésorerie nette négative** ne veut pas dire « faillite » : elle signale un déséquilibre à financer (FRNG < BFR).',
    'Au seuil de rentabilité, le **résultat est nul**, pas la marge : la MCV couvre exactement les coûts fixes.',
  ],
  'gf-t3': [
    'Le **coût variable** varie avec les quantités, le **coût fixe** non — mais le coût fixe **unitaire** diminue quand on produit plus.',
    'Ne confonds pas **marge sur coût variable** (CA − CV) et **résultat** (après coûts fixes).',
    'Un produit peut avoir une **marge unitaire positive** et l’entreprise être en perte si le volume est trop faible (coûts fixes non couverts).',
  ],
  // ---- Mercatique ----
  'mkg-t1': [
    'La **motivation** pousse à l’achat, le **frein** le retient : ne les inverse pas.',
    'Besoin (Maslow) ≠ désir : le besoin est un manque, le désir est la forme culturelle qu’il prend.',
    'L’**élasticité-prix** est presque toujours **négative** (le prix monte → la demande baisse) : garde le signe.',
  ],
  'mkg-t2': [
    'Ne confonds pas **part de marché** (en % du marché) et **part de marché relative** (par rapport au leader).',
    'La **segmentation** découpe le marché ; le **ciblage** choisit les segments ; le **positionnement** est l’image voulue. Trois étapes distinctes.',
    'Un **marché** ne se limite pas aux clients actuels : pense aux non-consommateurs relatifs (à conquérir).',
  ],
  'mkg-t3': [
    'Les **4P** forment un tout cohérent : un prix « premium » avec une distribution « discount » est incohérent.',
    'Ne confonds pas **taux de marge** (sur le coût d’achat) et **taux de marque** (sur le prix de vente).',
    'Le **prix psychologique** n’est pas le prix de revient : c’est le prix acceptable pour le plus grand nombre.',
  ],
  'mkg-t4': [
    'La **mercatique responsable** n’est pas qu’un argument de vente : attention au **greenwashing** (écoblanchiment).',
    'Les **données personnelles** des clients sont encadrées (RGPD) : on ne les collecte pas sans base légale.',
  ],
  // ---- RH & Communication ----
  'rh-t1': [
    'Ne confonds pas **qualification** (diplômes/compétences de la personne) et **qualité du poste**.',
    'La **compétence** se démontre en situation ; le **savoir** est théorique. Compétence = savoir + savoir-faire + savoir-être.',
    'Motivation ≠ satisfaction : on peut être satisfait sans être motivé, et inversement (Herzberg).',
  ],
  'rh-t2': [
    'Un **conflit** n’est pas toujours négatif : bien géré, il peut être source de progrès.',
    'Ne confonds pas **groupe** (interactions, but commun) et simple **rassemblement** de personnes.',
  ],
  'rh-t3': [
    'La **communication** échoue souvent à cause du **bruit** (parasite) : identifie l’émetteur, le message, le canal, le récepteur.',
    'Communication **interne** ≠ **externe** : cible et objectifs différents.',
  ],
  'rh-t4': [
    'Le **coût employeur** est supérieur au salaire net : n’oublie pas les **charges patronales**.',
    'Le **climat social** ne se mesure pas qu’au turnover : absentéisme, conflits, enquêtes… plusieurs indicateurs.',
  ],
  // ---- Management ----
  'mgmt-t1': [
    'Ne confonds pas **finalité** (raison d’être, durable) et **objectif** (but précis, mesurable, daté).',
    'Une **entreprise** cherche le profit ; une **organisation publique** ou une **association** ont d’autres finalités (service, cause).',
  ],
  'mgmt-t2': [
    'Ne confonds pas **management stratégique** (long terme, direction) et **opérationnel** (court terme, exécution).',
    'Le **diagnostic interne** (forces/faiblesses) ≠ **externe** (opportunités/menaces) : c’est le SWOT.',
    'Une **ressource** devient un **avantage concurrentiel** seulement si elle est rare et difficile à imiter.',
  ],
  'mgmt-t3': [
    'La **RSE** n’est pas de la philanthropie : c’est l’intégration des enjeux sociaux/environnementaux à la stratégie.',
    'Le **numérique** est une opportunité **et** un risque (cybersécurité, dépendance) : nuance ta réponse.',
  ],
  // ---- Économie ----
  'eco-t6': [
    'L’**État** ne fait pas que « dépenser » : il régule, redistribue, produit des biens publics.',
    'Ne confonds pas **déficit** (flux annuel) et **dette** (stock accumulé).',
  ],
  'eco-t7': [
    'Un **chômeur** (au sens du BIT) est **sans emploi, disponible et en recherche active** : un inactif n’est pas un chômeur.',
    'Ne confonds pas **taux de chômage** (part de la population active) et **taux d’emploi**.',
  ],
  'eco-t8': [
    'Balance commerciale **déficitaire** = importations > exportations : le solde est **négatif**, garde le signe.',
    'Le **libre-échange** a des gagnants **et** des perdants : nuance (théorie vs réalité sociale).',
  ],
  'eco-t9': [
    'La **croissance** (quantitative, PIB) n’est pas le **développement** (qualitatif, IDH) ni la **soutenabilité**.',
    'Externalité **négative** (pollution) : le marché seul ne la corrige pas → intervention publique.',
  ],
  // ---- SIG ----
  'sig-t1': [
    'Un **PGI/ERP** repose sur une **base de données unique** : ne le confonds pas avec plusieurs logiciels séparés.',
    'Donnée ≠ information ≠ connaissance : la donnée est brute, l’information a du sens, la connaissance est mobilisable.',
  ],
  'sig-t2': [
    'En SQL, **WHERE** filtre des lignes **avant** regroupement, **HAVING** filtre **après** un GROUP BY : ne les inverse pas.',
    'Une **clé primaire** identifie de façon unique ; une **clé étrangère** référence une autre table.',
    'N’oublie pas la condition de **jointure** : sans elle, tu obtiens un produit cartésien (toutes les combinaisons).',
  ],
  'sig-t4': [
    'La **sécurité** du SI, ce n’est pas que l’antivirus : disponibilité, intégrité, confidentialité, traçabilité (DICT).',
    'Un **mot de passe fort** ne suffit pas : sauvegardes, droits d’accès et sensibilisation comptent aussi.',
  ],
  // ---- Droit (Terminale) ----
  'droit-t5': [
    'Un **contrat** suppose un accord de volontés : sans consentement libre et éclairé, il peut être annulé.',
    'Ne confonds pas **nullité** (le contrat est anéanti rétroactivement) et **résiliation** (fin pour l’avenir).',
    'Les **conditions de validité** : consentement, capacité, contenu licite et certain. Une seule manque → contrat fragilisé.',
  ],
  'droit-t6': [
    'Responsabilité **contractuelle** (un contrat existait) ≠ **délictuelle** (aucun contrat entre les parties).',
    'Pour engager la responsabilité, il faut réunir **fait générateur + dommage + lien de causalité** : les trois, pas un seul.',
    'Réparer le dommage ≠ punir : la responsabilité civile **indemnise**, elle ne sanctionne pas comme le pénal.',
  ],
  'droit-t7': [
    'CDI et CDD n’obéissent pas aux mêmes règles : le **CDD** est l’exception, encadrée et motivée.',
    'La **rupture** d’un contrat de travail suit des procédures strictes : un licenciement doit être **justifié** (cause réelle et sérieuse).',
    'Le **règlement intérieur** ne peut pas contredire la loi ni la convention collective.',
  ],
  'droit-t8': [
    'Choisir une **forme juridique** engage la **responsabilité** : distingue entreprise individuelle et société (patrimoine séparé).',
    'La **propriété industrielle** (brevet, marque) protège l’innovation : ne la confonds pas avec le droit d’auteur.',
  ],
  // ---- Histoire-Géographie (Terminale) ----
  'hg-h1': [
    'Ne confonds pas **régime totalitaire** (contrôle total : parti unique, idéologie, terreur) et simple **dictature** autoritaire.',
    'Attention aux **dates** : distingue clairement les étapes (montée des périls, 1939-1945, génocides).',
  ],
  'hg-h2': [
    'La **Guerre froide** est un affrontement **indirect** (pas de guerre ouverte URSS-USA) : parle de blocs, dissuasion, conflits périphériques.',
    'Bipolaire ≠ multipolaire : la chute de l’URSS (1991) ouvre un monde à plusieurs pôles, pas la paix universelle.',
  ],
  'hg-g1': [
    'Une **mer** n’est pas qu’un espace naturel : c’est un enjeu économique (ressources, routes) **et** géopolitique (tensions).',
    'Mondialisation ≠ uniformisation : les espaces maritimes révèlent de fortes **inégalités** d’intégration.',
  ],
  'hg-g2': [
    'La **métropolisation** concentre population, pouvoir et richesses : elle **accentue** les inégalités entre territoires.',
    'Un territoire « **en marge** » n’est pas « vide » : il a des dynamiques propres (à ne pas caricaturer).',
  ],
  // ---- Première — Sciences de gestion & numérique ----
  'p1-sgn-t1': [
    'Un **individu** devient **acteur** par son rôle dans l’organisation : ne réduis pas la personne à son statut.',
    'La **cohésion** d’un groupe ne supprime pas les tensions : elle se construit.',
  ],
  'p1-sgn-t3': [
    'La **valeur** ne se limite pas au prix : distingue valeur financière, perçue et sociale.',
    'Ne confonds pas **performance** (résultats atteints) et **moyens** engagés : efficacité ≠ efficience.',
  ],
  // ---- Première — Droit & Économie ----
  'p1-droit-t1': [
    'Le **droit** organise la vie en société par des règles **obligatoires et sanctionnées** : ne le confonds pas avec la morale.',
    'Distingue **droit objectif** (l’ensemble des règles) et **droits subjectifs** (les prérogatives d’une personne).',
  ],
  'p1-eco-t2': [
    'La **valeur ajoutée** mesure la richesse **créée** : production − consommations intermédiaires (pas le chiffre d’affaires).',
    'Croissance (variation du PIB) ≠ richesse totale (niveau du PIB) : ne confonds pas le flux et le stock.',
  ],
  'p1-eco-t5': [
    'Sur un **marché**, le prix d’équilibre résulte de la rencontre offre/demande : ce n’est pas l’État qui le fixe (marché concurrentiel).',
    'Élasticité de la demande : garde le **signe** et raisonne en **pourcentages**, pas en valeurs absolues.',
  ],
}
