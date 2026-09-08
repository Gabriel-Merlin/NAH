// SYSTÈMES D'INFORMATION DE GESTION (spécialité de Terminale STMG).
// Programme : le système d'information dans l'organisation, les bases de
// données et le langage SQL, le travail collaboratif et l'intelligence
// collective, les réseaux, la sécurité et les applications.
export const sig = {
  id: 'sig',
  name: 'Systèmes d’information de gestion',
  short: 'SIG',
  icon: '💻',
  color: '#0ea5e9',
  tagline: 'Collecter, stocker, traiter et diffuser l’information de gestion.',
  chapters: [
    // ===================================================================== T1
    {
      id: 'sig-t1',
      name: 'Thème 1 — Le système d’information dans l’organisation',
      short: 'SI & PGI',
      keywords: 'donnée information connaissance système information SI collecter mémoriser traiter diffuser PGI ERP processus acteur matériel logiciel',
      intro: 'Une organisation ne peut décider sans information. Le système d’information la collecte, la mémorise, la traite et la diffuse à ceux qui en ont besoin. Le PGI unifie ces flux autour d’une base unique.',
      cours: [
        {
          h: 'Donnée, information, connaissance',
          blocks: [
            { t: 'p', c: 'Tout part de la **donnée** : un élément brut, isolé, sans interprétation (un nombre, une date, un nom). Traitée et mise en contexte, elle devient une **information** utile à la décision. Réutilisée et intégrée à l’expérience, elle se transforme en **connaissance**.' },
            { t: 'table', head: ['Niveau', 'Définition', 'Exemple'], rows: [
              ['Donnée', 'Élément **brut**, non interprété', '« 1250 »'],
              ['Information', 'Donnée **mise en contexte**, porteuse de sens', '« Chiffre d’affaires de mars : 1250 € »'],
              ['Connaissance', 'Information **assimilée** et réutilisable', '« Nos ventes baissent chaque mars, il faut agir »'],
            ] },
            { t: 'p', c: 'Une information de qualité doit être **fiable** (exacte), **pertinente** (utile à la décision), **disponible** (accessible au bon moment) et **actuelle** (à jour).' },
            { t: 'tip', c: 'Retiens la chaîne : **donnée → information → connaissance**. On collecte des données, on produit de l’information, on capitalise de la connaissance.' },
          ],
        },
        {
          h: 'Les quatre fonctions du système d’information',
          blocks: [
            { t: 'p', c: 'Le **système d’information** (SI) est l’ensemble organisé des ressources (matériel, logiciels, données, procédures, **acteurs**) qui permet de gérer l’information dans l’organisation. Il remplit **quatre fonctions**.' },
            { t: 'table', head: ['Fonction', 'Rôle', 'Exemple'], rows: [
              ['**Collecter**', 'Saisir / acquérir les données', 'Scanner un code-barres en caisse'],
              ['**Mémoriser**', 'Stocker et conserver les données', 'Enregistrer la vente dans une base de données'],
              ['**Traiter**', 'Transformer les données (calculs, tris)', 'Calculer le chiffre d’affaires du jour'],
              ['**Diffuser**', 'Mettre l’information à disposition', 'Afficher un tableau de bord au responsable'],
            ] },
            { t: 'p', c: 'Attention à ne pas confondre le SI et le **système informatique** : le système informatique (ordinateurs, réseaux, logiciels) n’est que le **support technique** du SI. Le SI inclut aussi les **acteurs** (les personnes) et les **procédures**.' },
            { t: 'warning', c: 'Le SI ne se limite pas à l’informatique : un cahier ou un échange oral font aussi partie du système d’information. L’informatique en est l’**outil**, pas la totalité.' },
          ],
        },
        {
          h: 'Le PGI (ERP) et l’intégration des processus',
          blocks: [
            { t: 'p', c: 'Un **PGI** (progiciel de gestion intégré, en anglais **ERP**) est un logiciel unique composé de **modules** (ventes, achats, stocks, comptabilité, paie…) qui partagent une **base de données unique**. Une donnée saisie une seule fois est aussitôt disponible pour tous les modules.' },
            { t: 'table', head: ['Avantages du PGI', 'Limites du PGI'], rows: [
              ['Données **cohérentes** (saisie unique, pas de doublon)', 'Coût d’achat et de mise en place **élevé**'],
              ['**Gain de temps** et automatisation des processus', 'Projet long, **formation** des utilisateurs nécessaire'],
              ['**Traçabilité** et pilotage facilités', 'Forte **dépendance** au fournisseur du logiciel'],
            ] },
            { t: 'example', h: 'Exemple concret', c: 'Une commande client saisie dans le module « Ventes » diminue automatiquement le **stock**, déclenche la **facturation** et alimente la **comptabilité**, sans ressaisie. C’est l’**intégration** des processus.' },
            { t: 'tip', c: 'PGI = **une seule base, plusieurs modules**. Le maître-mot est l’**intégration** : la donnée circule sans être ressaisie.' },
          ],
        },
      ],
      essentiel: [
        'Chaîne de valeur de l’information : donnée (brute) → information (en contexte) → connaissance (assimilée).',
        'Le SI remplit 4 fonctions : collecter, mémoriser, traiter, diffuser.',
        'Le SI ≠ le système informatique : le SI inclut aussi les acteurs et les procédures.',
        'Un PGI (ERP) = une base de données unique + des modules ; il évite les doublons et intègre les processus.',
      ],
      games: [
        {
          id: 'sig-t1-qcm', type: 'qcm', title: 'QCM — Le système d’information', icon: '❓',
          questions: [
            { q: 'Un élément brut et non interprété est…', choices: ['une donnée', 'une information', 'une connaissance', 'un traitement'], answer: 0, explain: 'La donnée est brute ; mise en contexte, elle devient information.' },
            { q: 'Enregistrer une vente dans une base relève de quelle fonction du SI ?', choices: ['Mémoriser', 'Collecter', 'Diffuser', 'Décider'], answer: 0, explain: 'Mémoriser = stocker/conserver les données.' },
            { q: 'Un PGI repose sur…', choices: ['une base de données unique partagée par les modules', 'un logiciel par service sans lien entre eux', 'des fichiers papier', 'un tableur isolé'], answer: 0, explain: 'Le PGI intègre les modules autour d’une base unique.' },
            { q: 'Le système informatique est…', choices: ['le support technique du SI', 'la totalité du SI', 'sans rapport avec le SI', 'un synonyme exact de SI'], answer: 0, explain: 'Le SI inclut aussi acteurs et procédures ; l’informatique n’est que son support.' },
            { q: 'Une information « à jour » est dite…', choices: ['actuelle', 'fiable', 'pertinente', 'disponible'], answer: 0, explain: 'Actualité = l’information est récente/à jour.' },
          ],
        },
        {
          id: 'sig-t1-vf', type: 'vraifaux', title: 'Vrai / Faux rapide', icon: '⚡',
          questions: [
            { statement: 'Le système d’information se limite aux ordinateurs.', answer: false, explain: 'Faux : il comprend aussi les acteurs, les données et les procédures.' },
            { statement: 'Dans un PGI, une donnée est saisie une seule fois pour tous les modules.', answer: true, explain: 'Vrai : c’est le principe d’intégration (base unique).' },
            { statement: 'Une connaissance est une donnée brute.', answer: false, explain: 'Faux : la connaissance est une information assimilée et réutilisable.' },
            { statement: 'Diffuser, c’est mettre l’information à disposition des utilisateurs.', answer: true, explain: 'Vrai : c’est la quatrième fonction du SI.' },
          ],
        },
        {
          id: 'sig-t1-tri', type: 'tri', title: 'Tri — Les 4 fonctions du SI', icon: '🗂️',
          instruction: 'Classe chaque tâche selon la fonction du SI concernée.',
          categories: [
            { id: 'col', label: 'Collecter' },
            { id: 'mem', label: 'Mémoriser' },
            { id: 'tra', label: 'Traiter' },
            { id: 'dif', label: 'Diffuser' },
          ],
          items: [
            { text: 'Scanner un article en caisse', cat: 'col' },
            { text: 'Enregistrer la commande dans la base', cat: 'mem' },
            { text: 'Calculer le total des ventes du mois', cat: 'tra' },
            { text: 'Envoyer le tableau de bord au directeur', cat: 'dif' },
            { text: 'Remplir un formulaire en ligne', cat: 'col' },
            { text: 'Archiver les factures des 10 dernières années', cat: 'mem' },
          ],
        },
        {
          id: 'sig-t1-ordre', type: 'ordre', title: 'Remise en ordre — De la donnée à la décision', icon: '🔢',
          instruction: 'Remets dans l’ordre la transformation de l’information.',
          steps: ['Collecter les données', 'Mémoriser dans la base', 'Traiter (calculs, tris)', 'Diffuser l’information', 'Décider'],
          explain: 'Le SI transforme des données brutes en information utile à la décision.',
        },
        {
          id: 'sig-t1-trou', type: 'trou', title: 'Texte à trous — Le système d’information', icon: '✏️',
          questions: [
            { text: 'Une donnée brute mise en contexte devient une ____ .', answer: 'information', alt: ['une information'], explain: 'Donnée → information → connaissance.' },
            { text: 'Le logiciel unique à base de données partagée est un ____ .', answer: 'PGI', alt: ['pgi', 'ERP', 'erp'], explain: 'PGI (ERP) : modules intégrés, base unique.' },
            { text: 'Saisir les données à la source relève de la fonction ____ du SI.', answer: 'collecter', alt: ['collecte', 'de collecte'], explain: 'Les 4 fonctions : collecter, mémoriser, traiter, diffuser.' },
            { text: 'Le support technique du SI (matériel + logiciels) est le système ____ .', answer: 'informatique', alt: ['informatique'], explain: 'Le SI inclut aussi acteurs et procédures.' },
          ],
        },
        {
          id: 'sig-t1-assoc', type: 'association', title: 'Association — Notion ↔ définition', icon: '🔗',
          pairs: [
            { left: 'Donnée', right: 'Élément brut, non interprété' },
            { left: 'Information', right: 'Donnée mise en contexte, porteuse de sens' },
            { left: 'PGI (ERP)', right: 'Logiciel intégré à base de données unique' },
            { left: 'Système informatique', right: 'Support technique du SI (matériel + logiciels)' },
          ],
        },
      ],
    },
    // ===================================================================== T2
    {
      id: 'sig-t2',
      name: 'Thème 2 — Les bases de données et le langage SQL',
      short: 'Bases de données & SQL',
      keywords: 'base de données relationnelle table enregistrement champ attribut clé primaire clé étrangère SGBD SQL requête SELECT FROM WHERE ORDER BY jointure',
      intro: 'Pour mémoriser durablement l’information, l’organisation utilise une base de données relationnelle, interrogée grâce au langage SQL. Savoir lire une requête est au cœur de la spécialité.',
      cours: [
        {
          h: 'Le modèle relationnel',
          blocks: [
            { t: 'p', c: 'Une **base de données** relationnelle organise l’information dans des **tables** (relations). Chaque **ligne** est un **enregistrement** (un client, un produit…) ; chaque **colonne** est un **champ** (ou **attribut**), qui décrit une caractéristique.' },
            { t: 'table', head: ['Terme', 'Définition'], rows: [
              ['Table (relation)', 'Ensemble structuré de données de même nature (ex. CLIENT)'],
              ['Enregistrement (ligne)', 'Une occurrence : un client précis, un article précis'],
              ['Champ / attribut (colonne)', 'Une propriété : nom, prix, date…'],
              ['**Clé primaire**', 'Champ qui **identifie de façon unique** chaque enregistrement'],
              ['**Clé étrangère**', 'Champ qui **référence la clé primaire** d’une autre table (le lien)'],
            ] },
            { t: 'example', h: 'Exemple', c: 'Table CLIENT(**numCli**, nom, ville) et table COMMANDE(**numCom**, date, #numCli). Ici **numCli** est la clé primaire de CLIENT et **#numCli** est une clé étrangère dans COMMANDE : elle relie chaque commande à son client.' },
            { t: 'p', c: 'Le logiciel qui gère la base s’appelle un **SGBD** (système de gestion de base de données) : MySQL, PostgreSQL, Access… Il garantit l’**intégrité** et évite les **doublons**.' },
            { t: 'tip', c: 'Clé **primaire** = identifiant unique d’une table. Clé **étrangère** = pointeur vers la clé primaire d’une autre table. C’est ce qui crée les **relations**.' },
          ],
        },
        {
          h: 'Interroger la base : la requête SELECT',
          blocks: [
            { t: 'p', c: 'Le langage **SQL** (Structured Query Language) permet d’interroger la base. La requête la plus courante est le **SELECT**, qui affiche des données sans les modifier.' },
            { t: 'formula', c: 'SELECT champs FROM table WHERE condition ORDER BY champ ;' },
            { t: 'table', head: ['Clause', 'Rôle'], rows: [
              ['**SELECT**', 'Choisit les **colonnes** à afficher (`*` = toutes)'],
              ['**FROM**', 'Indique la ou les **tables** concernées'],
              ['**WHERE**', 'Filtre les lignes selon une **condition**'],
              ['**ORDER BY**', 'Trie le résultat (ASC = croissant, DESC = décroissant)'],
            ] },
            { t: 'example', h: 'Exemple lu pas à pas', c: '`SELECT nom, ville FROM CLIENT WHERE ville = "Lyon" ORDER BY nom ;` → affiche le **nom** et la **ville** des clients **de Lyon**, triés **par nom** croissant.' },
            { t: 'p', c: 'Les conditions du WHERE utilisent les opérateurs `=`, `<`, `>`, `<=`, `>=`, `<>` (différent), et se combinent avec **AND** / **OR**. Pour une recherche partielle, on emploie **LIKE** (ex. `LIKE "A%"` = commence par A).' },
            { t: 'warning', c: 'En SQL, on entoure le **texte** de guillemets (`"Lyon"`), jamais les **nombres**. Et n’oublie pas le **point-virgule** final qui termine la requête.' },
          ],
        },
        {
          h: 'Calculs, regroupements et mise à jour',
          blocks: [
            { t: 'p', c: 'SQL sait aussi **calculer** grâce aux fonctions d’agrégat : **COUNT** (compter), **SUM** (additionner), **AVG** (moyenne), **MIN**, **MAX**. On regroupe les lignes avec **GROUP BY**.' },
            { t: 'example', h: 'Exemple', c: '`SELECT ville, COUNT(*) FROM CLIENT GROUP BY ville ;` → compte le **nombre de clients par ville**.' },
            { t: 'p', c: 'Relier deux tables se fait par une **jointure** : on rapproche la clé étrangère de la clé primaire correspondante (`WHERE COMMANDE.numCli = CLIENT.numCli`).' },
            { t: 'table', head: ['Requête', 'Effet (culture générale)'], rows: [
              ['**SELECT**', 'Lire / afficher des données'],
              ['**INSERT INTO**', 'Ajouter un nouvel enregistrement'],
              ['**UPDATE**', 'Modifier des enregistrements existants'],
              ['**DELETE**', 'Supprimer des enregistrements'],
            ] },
            { t: 'tip', c: 'Au bac, on te demande surtout de **lire** et **compléter** un SELECT. Repère toujours : *quelles colonnes ?* (SELECT), *quelle table ?* (FROM), *quel filtre ?* (WHERE), *quel tri ?* (ORDER BY).' },
          ],
        },
      ],
      essentiel: [
        'Base relationnelle = tables (lignes = enregistrements, colonnes = champs).',
        'Clé primaire = identifiant unique ; clé étrangère = lien vers une autre table.',
        'Requête type : SELECT colonnes FROM table WHERE condition ORDER BY champ ;',
        'Fonctions de calcul : COUNT, SUM, AVG, MIN, MAX (+ GROUP BY pour regrouper).',
      ],
      games: [
        {
          id: 'sig-t2-qcm', type: 'qcm', title: 'QCM — Bases de données & SQL', icon: '❓',
          questions: [
            { q: 'Le champ qui identifie de façon unique chaque ligne est…', choices: ['la clé primaire', 'la clé étrangère', 'un attribut simple', 'une jointure'], answer: 0, explain: 'La clé primaire identifie de manière unique un enregistrement.' },
            { q: 'Quelle clause SQL filtre les lignes ?', choices: ['WHERE', 'SELECT', 'ORDER BY', 'FROM'], answer: 0, explain: 'WHERE pose la condition de filtrage.' },
            { q: 'Pour trier un résultat par nom croissant, on écrit…', choices: ['ORDER BY nom ASC', 'GROUP BY nom', 'WHERE nom', 'SELECT nom DESC'], answer: 0, explain: 'ORDER BY … ASC trie en ordre croissant.' },
            { q: 'La fonction qui compte le nombre de lignes est…', choices: ['COUNT', 'SUM', 'AVG', 'MAX'], answer: 0, explain: 'COUNT(*) compte les enregistrements.' },
            { q: 'Une clé étrangère sert à…', choices: ['relier deux tables', 'trier les données', 'supprimer un doublon', 'calculer une moyenne'], answer: 0, explain: 'Elle référence la clé primaire d’une autre table (le lien).' },
            { q: 'Dans SELECT * FROM PRODUIT, le symbole * signifie…', choices: ['toutes les colonnes', 'toutes les lignes filtrées', 'une multiplication', 'un tri décroissant'], answer: 0, explain: '`*` sélectionne l’ensemble des colonnes.' },
          ],
        },
        {
          id: 'sig-t2-vf', type: 'vraifaux', title: 'Vrai / Faux rapide', icon: '⚡',
          questions: [
            { statement: 'Une requête SELECT modifie les données de la table.', answer: false, explain: 'Faux : SELECT lit/affiche seulement. Ce sont UPDATE/DELETE/INSERT qui modifient.' },
            { statement: 'La clé primaire peut être en double dans une table.', answer: false, explain: 'Faux : par définition elle est unique.' },
            { statement: 'GROUP BY permet de regrouper les lignes pour un calcul.', answer: true, explain: 'Vrai : il regroupe avant COUNT, SUM, AVG…' },
            { statement: 'Le texte doit être entouré de guillemets dans une condition SQL.', answer: true, explain: 'Vrai : ex. WHERE ville = "Lyon".' },
          ],
        },
        {
          id: 'sig-t2-trou', type: 'trou', title: 'Texte à trous — Compléter une requête', icon: '✏️',
          questions: [
            { text: 'On choisit les colonnes à afficher avec la clause ____ .', answer: 'SELECT', alt: ['select'], explain: 'SELECT indique les colonnes.' },
            { text: 'La table interrogée est précisée après le mot-clé ____ .', answer: 'FROM', alt: ['from'], explain: 'FROM désigne la table.' },
            { text: 'Pour ne garder que les clients de Lyon, on ajoute une condition avec ____ .', answer: 'WHERE', alt: ['where'], explain: 'WHERE filtre les lignes.' },
            { text: 'Pour trier le résultat, on utilise ____ BY.', answer: 'ORDER', alt: ['order'], explain: 'ORDER BY trie le résultat.' },
            { text: 'La fonction ____(*) permet de compter les enregistrements.', answer: 'COUNT', alt: ['count'], explain: 'COUNT compte les lignes.' },
          ],
        },
        {
          id: 'sig-t2-sql', type: 'sql', title: 'Écris la requête SQL', icon: '⌨️',
          schema: [
            { name: 'CLIENT', cols: ['🔑 numCli', 'nom', 'ville'], legend: true },
            { name: 'COMMANDE', cols: ['🔑 numCom', 'date', 'montant', '🔗 numCli'], legend: true },
          ],
          questions: [
            {
              ask: 'Affiche le nom et la ville de tous les clients.',
              answer: 'SELECT nom, ville FROM CLIENT',
              alt: ['SELECT ville, nom FROM CLIENT'],
              explain: 'SELECT choisit les colonnes (nom, ville), FROM indique la table (CLIENT). Pas de filtre : tous les clients.',
            },
            {
              ask: 'Affiche le nom des clients qui habitent à Lyon.',
              answer: "SELECT nom FROM CLIENT WHERE ville = 'Lyon'",
              alt: ['SELECT nom FROM CLIENT WHERE ville = "Lyon"'],
              explain: 'On filtre les lignes avec WHERE ville = "Lyon". Le texte est entre guillemets.',
            },
            {
              ask: 'Affiche toutes les colonnes des commandes dont le montant dépasse 100.',
              answer: 'SELECT * FROM COMMANDE WHERE montant > 100',
              alt: [],
              explain: '`*` = toutes les colonnes ; la condition WHERE montant > 100 ne garde que les grosses commandes. Un nombre ne prend pas de guillemets.',
            },
            {
              ask: 'Affiche le nom de tous les clients, triés par ordre alphabétique.',
              answer: 'SELECT nom FROM CLIENT ORDER BY nom',
              alt: ['SELECT nom FROM CLIENT ORDER BY nom ASC'],
              explain: 'ORDER BY nom trie le résultat par ordre croissant (ASC est la valeur par défaut).',
            },
            {
              ask: 'Compte le nombre total de clients.',
              answer: 'SELECT COUNT(*) FROM CLIENT',
              alt: [],
              explain: 'La fonction COUNT(*) compte les enregistrements de la table CLIENT.',
            },
          ],
        },
        {
          id: 'sig-t2-tri', type: 'tri', title: 'Tri — Clé primaire, étrangère ou attribut ?', icon: '🗂️',
          instruction: 'Classe chaque élément de la base CLIENT / COMMANDE.',
          categories: [
            { id: 'pk', label: 'Clé primaire' },
            { id: 'fk', label: 'Clé étrangère' },
            { id: 'at', label: 'Attribut simple' },
          ],
          items: [
            { text: 'numCli (dans la table CLIENT)', cat: 'pk' },
            { text: 'numCom (dans la table COMMANDE)', cat: 'pk' },
            { text: '#numCli (dans la table COMMANDE)', cat: 'fk' },
            { text: 'nomClient', cat: 'at' },
            { text: 'dateCommande', cat: 'at' },
          ],
        },
        {
          id: 'sig-t2-assoc', type: 'association', title: 'Association — Mot-clé SQL ↔ rôle', icon: '🔗',
          pairs: [
            { left: 'SELECT', right: 'Choisit les colonnes à afficher' },
            { left: 'FROM', right: 'Indique la table concernée' },
            { left: 'WHERE', right: 'Filtre les lignes (condition)' },
            { left: 'ORDER BY', right: 'Trie le résultat' },
          ],
        },
      ],
    },
    // ===================================================================== T3
    {
      id: 'sig-t3',
      name: 'Thème 3 — Travail collaboratif et intelligence collective',
      short: 'Collaboration & numérique',
      keywords: 'travail collaboratif cloud GED workflow dématérialisation numérisation partage co-édition wiki intelligence collective synchrone asynchrone',
      intro: 'Le numérique transforme la façon de travailler ensemble : partager des documents, coéditer en temps réel, automatiser les circuits de validation et faire émerger une intelligence collective.',
      cours: [
        {
          h: 'Les outils du travail collaboratif',
          blocks: [
            { t: 'p', c: 'Le **travail collaboratif** consiste à produire ensemble, à distance ou non, grâce à des outils numériques partagés. On distingue la collaboration **synchrone** (en même temps : visioconférence, co-édition en direct) et **asynchrone** (en différé : messagerie, espace partagé).' },
            { t: 'table', head: ['Outil', 'Usage'], rows: [
              ['**Cloud** (informatique en nuage)', 'Stocker et partager des fichiers accessibles partout, sur tout appareil'],
              ['Suite collaborative (agenda, docs partagés)', 'Coéditer un document, planifier des réunions'],
              ['**Messagerie / tchat**', 'Communiquer en équipe (asynchrone ou instantané)'],
              ['**Visioconférence**', 'Réunion à distance (synchrone)'],
            ] },
            { t: 'p', c: 'Le **cloud** évite d’envoyer des versions par mail : chacun travaille sur le **même fichier**, toujours à jour. Cela réduit les erreurs de version et facilite la **mobilité**.' },
            { t: 'warning', c: 'Le cloud suppose une **connexion Internet** et pose la question de la **confidentialité** : où sont hébergées les données ? Qui y a accès ?' },
          ],
        },
        {
          h: 'Dématérialisation et gestion des documents',
          blocks: [
            { t: 'p', c: 'La **dématérialisation** (ou **numérisation**) consiste à remplacer les documents papier par des fichiers numériques. Elle s’appuie sur une **GED** (gestion électronique des documents) qui classe, indexe et retrouve les documents.' },
            { t: 'table', head: ['Avantages', 'Points de vigilance'], rows: [
              ['Gain de **place** et de **temps** de recherche', 'Sécurité et **sauvegarde** des fichiers'],
              ['Partage et accès **simultané**', 'Respect du **RGPD** (données personnelles)'],
              ['Réduction du **papier** (écologie)', 'Valeur **juridique** (signature électronique)'],
            ] },
            { t: 'p', c: 'Un **workflow** (flux de travail) automatise le circuit d’un document : par exemple une note de frais qui passe automatiquement du salarié → au responsable (validation) → à la comptabilité (remboursement).' },
            { t: 'example', h: 'Exemple', c: 'Une facture numérisée est indexée par la GED (fournisseur, date, montant). Le workflow l’envoie au bon valideur, puis l’archive. Plus besoin de la chercher dans un classeur.' },
            { t: 'tip', c: 'Dématérialiser ≠ juste « scanner » : c’est **organiser** le document numérique (GED) et **automatiser** son circuit (workflow).' },
          ],
        },
        {
          h: 'L’intelligence collective',
          blocks: [
            { t: 'p', c: 'L’**intelligence collective** est la capacité d’un groupe à produire, grâce au partage, un résultat supérieur à la somme des contributions individuelles. Le numérique la démultiplie en reliant de nombreux contributeurs.' },
            { t: 'list', c: [
              '**Wiki** : des pages coécrites et corrigées par une communauté (ex. une base de connaissances interne).',
              '**Forums / réseaux internes** : on pose une question, la communauté répond et capitalise les réponses.',
              '**Co-édition** : plusieurs personnes modifient le même document en temps réel.',
              '**Crowdsourcing** : faire appel à un grand nombre de contributeurs externes.',
            ] },
            { t: 'p', c: 'L’enjeu pour l’organisation est de **capitaliser la connaissance** : ce qui est appris par un salarié devient accessible à tous, et ne disparaît pas quand il part (**gestion des connaissances**).' },
            { t: 'warning', c: 'L’intelligence collective suppose une culture du **partage** et de la **confiance**. Sans participation, l’outil reste vide ; avec trop peu de contrôle, l’information peut devenir peu fiable.' },
          ],
        },
      ],
      essentiel: [
        'Collaboration synchrone (en même temps) vs asynchrone (en différé).',
        'Le cloud permet de travailler sur le même fichier, toujours à jour, partout.',
        'Dématérialisation = GED (classer/retrouver) + workflow (automatiser le circuit).',
        'Intelligence collective : le partage produit un résultat supérieur à la somme des individus (wiki, co-édition, forums).',
      ],
      games: [
        {
          id: 'sig-t3-qcm', type: 'qcm', title: 'QCM — Collaboration & numérique', icon: '❓',
          questions: [
            { q: 'Une réunion en visioconférence est une collaboration…', choices: ['synchrone', 'asynchrone', 'dématérialisée', 'automatisée'], answer: 0, explain: 'Synchrone = les participants sont présents en même temps.' },
            { q: 'La GED sert à…', choices: ['classer et retrouver les documents numériques', 'trier une base SQL', 'coder une application', 'sécuriser un réseau'], answer: 0, explain: 'GED = gestion électronique des documents.' },
            { q: 'Automatiser le circuit de validation d’un document, c’est un…', choices: ['workflow', 'wiki', 'cloud', 'SGBD'], answer: 0, explain: 'Le workflow gère le flux/circuit du document.' },
            { q: 'Le principal atout du cloud pour une équipe est…', choices: ['travailler sur le même fichier à jour', 'supprimer Internet', 'éviter toute sauvegarde', 'coder plus vite'], answer: 0, explain: 'Un fichier unique partagé, accessible partout.' },
            { q: 'Un wiki repose sur…', choices: ['la coécriture par une communauté', 'une base fermée', 'un seul auteur', 'un tableur privé'], answer: 0, explain: 'Le wiki est coécrit et corrigé collectivement.' },
          ],
        },
        {
          id: 'sig-t3-vf', type: 'vraifaux', title: 'Vrai / Faux rapide', icon: '⚡',
          questions: [
            { statement: 'Dématérialiser un document, c’est le remplacer par un fichier numérique.', answer: true, explain: 'Vrai : on passe du papier au numérique.' },
            { statement: 'La collaboration asynchrone impose d’être connectés en même temps.', answer: false, explain: 'Faux : l’asynchrone se fait en différé (ex. messagerie).' },
            { statement: 'L’intelligence collective produit un résultat supérieur à la somme des individus.', answer: true, explain: 'Vrai : c’est sa définition même.' },
            { statement: 'Le cloud dispense de se soucier de la confidentialité des données.', answer: false, explain: 'Faux : l’hébergement pose justement des questions de sécurité et de RGPD.' },
          ],
        },
        {
          id: 'sig-t3-tri', type: 'tri', title: 'Tri — Synchrone ou asynchrone ?', icon: '🗂️',
          instruction: 'Classe chaque outil selon le mode de collaboration.',
          categories: [
            { id: 'syn', label: 'Synchrone (en même temps)' },
            { id: 'asy', label: 'Asynchrone (en différé)' },
          ],
          items: [
            { text: 'Visioconférence en direct', cat: 'syn' },
            { text: 'Co-édition d’un document en temps réel', cat: 'syn' },
            { text: 'Courriel (e-mail)', cat: 'asy' },
            { text: 'Forum interne', cat: 'asy' },
            { text: 'Tchat instantané pendant une réunion', cat: 'syn' },
            { text: 'Dépôt d’un fichier dans un espace partagé', cat: 'asy' },
          ],
        },
        {
          id: 'sig-t3-trou', type: 'trou', title: 'Texte à trous — Collaboration & numérique', icon: '✏️',
          questions: [
            { text: 'Le stockage et le partage de fichiers en ligne s’appellent le ____ .', answer: 'cloud', alt: ['le cloud', 'nuage'], explain: 'Le cloud : mêmes fichiers, à jour, accessibles partout.' },
            { text: 'La gestion électronique des documents se note ____ .', answer: 'GED', alt: ['ged'], explain: 'La GED classe, indexe et retrouve les documents.' },
            { text: 'Automatiser le circuit de validation d’un document, c’est un ____ .', answer: 'workflow', alt: ['un workflow'], explain: 'Le workflow gère le flux du document.' },
            { text: 'Une collaboration en différé (courriel, forum) est dite ____ .', answer: 'asynchrone', alt: ['asynchrone'], explain: 'Synchrone = en même temps ; asynchrone = en différé.' },
          ],
        },
        {
          id: 'sig-t3-assoc', type: 'association', title: 'Association — Notion ↔ définition', icon: '🔗',
          pairs: [
            { left: 'Cloud', right: 'Stockage et partage de fichiers en ligne' },
            { left: 'GED', right: 'Classer, indexer et retrouver les documents' },
            { left: 'Workflow', right: 'Circuit automatisé de validation' },
            { left: 'Intelligence collective', right: 'Résultat du groupe > somme des individus' },
          ],
        },
      ],
    },
    // ===================================================================== T4
    {
      id: 'sig-t4',
      name: 'Thème 4 — Réseaux, sécurité et applications',
      short: 'Réseaux & sécurité',
      keywords: 'réseau client serveur internet protocole TCP IP HTTP adresse IP URL sécurité confidentialité intégrité disponibilité CID sauvegarde RGPD pare-feu chiffrement application web HTML CSS responsive',
      intro: 'Les informations circulent sur des réseaux. Il faut comprendre comment (client-serveur, protocoles), les protéger (confidentialité, intégrité, disponibilité) et savoir comment sont construites les applications qui les exploitent.',
      cours: [
        {
          h: 'Les réseaux et l’architecture client-serveur',
          blocks: [
            { t: 'p', c: 'Un **réseau** relie des ordinateurs pour qu’ils échangent des données. Sur Internet, le modèle dominant est **client-serveur** : le **client** (ton navigateur) envoie une **requête** ; le **serveur** traite et renvoie une **réponse** (la page).' },
            { t: 'table', head: ['Notion', 'Définition'], rows: [
              ['**Client**', 'Machine/logiciel qui **demande** un service (navigateur, appli)'],
              ['**Serveur**', 'Machine qui **fournit** le service (héberge le site, la base)'],
              ['**Protocole**', 'Règles communes d’échange (ex. **TCP/IP**, **HTTP/HTTPS**)'],
              ['**Adresse IP**', 'Numéro qui **identifie** chaque machine sur le réseau'],
              ['**URL**', 'Adresse d’une ressource web (ex. https://site.fr/page)'],
            ] },
            { t: 'p', c: 'Pour retenir une adresse plus facilement, le **DNS** traduit un **nom de domaine** (revizstmg.fr) en **adresse IP**. Le **HTTPS** (le « S ») indique un échange **chiffré**, plus sûr que le HTTP simple.' },
            { t: 'example', h: 'Exemple pas à pas', c: 'Tu tapes une adresse → le navigateur (**client**) envoie une requête **HTTP** → le **serveur** renvoie la page → elle s’affiche. Le tout voyage grâce au protocole **TCP/IP**.' },
          ],
        },
        {
          h: 'La sécurité du système d’information',
          blocks: [
            { t: 'p', c: 'Protéger le SI, c’est garantir trois principes, souvent résumés par **CID** (ou DIC).' },
            { t: 'table', head: ['Principe', 'Signification', 'Exemple de protection'], rows: [
              ['**Confidentialité**', 'Seules les personnes autorisées accèdent à l’information', 'Mot de passe, droits d’accès, **chiffrement**'],
              ['**Intégrité**', 'L’information n’est pas altérée / modifiée à tort', 'Contrôles, sauvegardes, traçabilité'],
              ['**Disponibilité**', 'L’information est accessible quand on en a besoin', '**Sauvegardes**, redondance, maintenance'],
            ] },
            { t: 'list', c: [
              '**Menaces** : virus et **malwares**, **phishing** (hameçonnage), **rançongiciel**, vol de mot de passe, panne matérielle.',
              '**Parades** : mot de passe **fort**, mises à jour, **antivirus** et **pare-feu**, **sauvegardes** régulières, sensibilisation des utilisateurs.',
              '**Chiffrement** : rendre les données illisibles sans la clé (protège la confidentialité, ex. HTTPS).',
            ] },
            { t: 'p', c: 'Le **RGPD** (Règlement général sur la protection des données) encadre l’usage des **données personnelles** : consentement, droit d’accès, de rectification et d’effacement. Une organisation doit protéger et ne collecter que le **nécessaire** (minimisation).' },
            { t: 'warning', c: 'La première faille de sécurité reste **humaine** : un mot de passe faible ou un clic sur un lien de phishing suffit. La technique ne remplace pas la vigilance.' },
          ],
        },
        {
          h: 'Les applications qui exploitent l’information',
          blocks: [
            { t: 'p', c: 'Une **application web** s’exécute dans un navigateur, sans installation. Sa page est décrite par le **HTML** (la **structure** : titres, textes, liens) et mise en forme par le **CSS** (les **styles** : couleurs, polices, disposition).' },
            { t: 'table', head: ['Langage / partie', 'Rôle'], rows: [
              ['**HTML**', 'Structure et contenu de la page'],
              ['**CSS**', 'Mise en forme (couleurs, polices, mise en page)'],
              ['**Front-end**', 'Ce que voit l’utilisateur (côté client, dans le navigateur)'],
              ['**Back-end**', 'Le serveur, la base de données (côté serveur)'],
            ] },
            { t: 'p', c: 'Une application est **responsive** quand elle s’adapte automatiquement à la **taille de l’écran** (ordinateur, tablette, mobile). C’est aujourd’hui indispensable, la majorité des accès se faisant sur mobile.' },
            { t: 'p', c: 'On distingue l’**application web** (dans le navigateur) de l’**application mobile native** (installée depuis un store, adaptée au système du téléphone). Beaucoup de services proposent les deux.' },
            { t: 'tip', c: 'Moyen mnémotechnique : **HTML = le squelette**, **CSS = les vêtements**. Le **front** est visible, le **back** travaille dans l’ombre.' },
          ],
        },
      ],
      essentiel: [
        'Architecture client-serveur : le client envoie une requête, le serveur renvoie une réponse (via TCP/IP, HTTP/HTTPS).',
        'Sécurité = CID : Confidentialité, Intégrité, Disponibilité.',
        'Parades : mots de passe forts, mises à jour, antivirus/pare-feu, sauvegardes, chiffrement.',
        'HTML = structure, CSS = mise en forme ; une appli responsive s’adapte à la taille de l’écran.',
      ],
      games: [
        {
          id: 'sig-t4-qcm', type: 'qcm', title: 'QCM — Réseaux & sécurité', icon: '❓',
          questions: [
            { q: 'Dans le modèle client-serveur, le navigateur est…', choices: ['le client', 'le serveur', 'le protocole', 'l’adresse IP'], answer: 0, explain: 'Le client envoie la requête ; le serveur renvoie la réponse.' },
            { q: 'Le « S » de HTTPS indique que l’échange est…', choices: ['chiffré (sécurisé)', 'plus rapide', 'gratuit', 'hors ligne'], answer: 0, explain: 'HTTPS = échange chiffré, plus sûr.' },
            { q: 'Garantir que seules les personnes autorisées accèdent à l’info, c’est…', choices: ['la confidentialité', 'l’intégrité', 'la disponibilité', 'la redondance'], answer: 0, explain: 'C’est le principe de confidentialité (le C de CID).' },
            { q: 'Le langage qui structure une page web est…', choices: ['le HTML', 'le CSS', 'le SQL', 'le TCP'], answer: 0, explain: 'HTML = structure ; CSS = mise en forme.' },
            { q: 'Une application « responsive » est une application qui…', choices: ['s’adapte à la taille de l’écran', 'répond aux e-mails', 'fonctionne sans serveur', 'se met à jour seule'], answer: 0, explain: 'Responsive = adaptation à l’écran (mobile, tablette, ordinateur).' },
            { q: 'Le RGPD protège avant tout…', choices: ['les données personnelles', 'la vitesse du réseau', 'le code HTML', 'les serveurs physiques'], answer: 0, explain: 'Le RGPD encadre l’usage des données personnelles.' },
          ],
        },
        {
          id: 'sig-t4-vf', type: 'vraifaux', title: 'Vrai / Faux rapide', icon: '⚡',
          questions: [
            { statement: 'L’adresse IP identifie une machine sur le réseau.', answer: true, explain: 'Vrai : c’est son numéro d’identification.' },
            { statement: 'Une sauvegarde régulière protège la disponibilité des données.', answer: true, explain: 'Vrai : en cas de panne ou d’attaque, on restaure les données.' },
            { statement: 'Le CSS sert à structurer le contenu d’une page.', answer: false, explain: 'Faux : le CSS met en forme ; c’est le HTML qui structure.' },
            { statement: 'Le phishing est une menace purement matérielle.', answer: false, explain: 'Faux : c’est une attaque qui trompe l’utilisateur (hameçonnage).' },
          ],
        },
        {
          id: 'sig-t4-tri', type: 'tri', title: 'Tri — Confidentialité, intégrité ou disponibilité ?', icon: '🗂️',
          instruction: 'Classe chaque mesure selon le principe de sécurité (CID) qu’elle protège en priorité.',
          categories: [
            { id: 'conf', label: 'Confidentialité' },
            { id: 'integ', label: 'Intégrité' },
            { id: 'dispo', label: 'Disponibilité' },
          ],
          items: [
            { text: 'Chiffrer les données sensibles', cat: 'conf' },
            { text: 'Exiger un mot de passe et des droits d’accès', cat: 'conf' },
            { text: 'Contrôler qu’un fichier n’a pas été modifié à tort', cat: 'integ' },
            { text: 'Tracer les modifications (qui a changé quoi)', cat: 'integ' },
            { text: 'Faire des sauvegardes régulières', cat: 'dispo' },
            { text: 'Prévoir un serveur de secours (redondance)', cat: 'dispo' },
          ],
        },
        {
          id: 'sig-t4-ordre', type: 'ordre', title: 'Remise en ordre — L’affichage d’une page web', icon: '🔢',
          instruction: 'Remets dans l’ordre les étapes d’une requête web.',
          steps: [
            'Le client (navigateur) saisit une URL',
            'Le DNS traduit le nom de domaine en adresse IP',
            'Le client envoie une requête HTTP au serveur',
            'Le serveur traite la requête',
            'Le serveur renvoie la page (réponse)',
            'Le navigateur affiche la page',
          ],
          explain: 'Client-serveur : requête → traitement → réponse → affichage.',
        },
        {
          id: 'sig-t4-trou', type: 'trou', title: 'Texte à trous — Réseaux & sécurité', icon: '✏️',
          questions: [
            { text: 'Le langage qui structure une page web est le ____ .', answer: 'HTML', alt: ['html'], explain: 'HTML = structure ; CSS = mise en forme.' },
            { text: 'La mise en forme d’une page web se fait avec le ____ .', answer: 'CSS', alt: ['css'], explain: 'CSS : couleurs, polices, disposition.' },
            { text: 'Le numéro qui identifie une machine sur le réseau est l’adresse ____ .', answer: 'IP', alt: ['ip'], explain: 'L’adresse IP identifie chaque machine.' },
            { text: 'Rendre des données illisibles sans la clé, c’est le ____ .', answer: 'chiffrement', alt: ['le chiffrement'], explain: 'Le chiffrement protège la confidentialité (ex. HTTPS).' },
          ],
        },
        {
          id: 'sig-t4-assoc', type: 'association', title: 'Association — Terme ↔ définition', icon: '🔗',
          pairs: [
            { left: 'Serveur', right: 'Machine qui fournit le service' },
            { left: 'Protocole', right: 'Règles communes d’échange (TCP/IP, HTTP)' },
            { left: 'Pare-feu', right: 'Filtre les connexions pour protéger le réseau' },
            { left: 'HTML', right: 'Structure et contenu d’une page web' },
          ],
        },
      ],
    },
  ],
}
