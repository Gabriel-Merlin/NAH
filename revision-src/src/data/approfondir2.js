// APPROFONDISSEMENT (2) — chapitres supplémentaires pour le tronc STMG écrit :
// Management, Droit, Économie. Fusionné dans data/index.js après APPROF, avec le
// même mécanisme (ajout à la suite + catégorie repliable via courseGroupOf).
const S = (h, blocks) => ({ h, blocks })

export const APPROF2 = {
  // #####################################################################
  // MANAGEMENT
  // #####################################################################
  'mgmt-t1': [
    S('🧩 Ressources et compétences de l’organisation', [
      { t: 'p', c: 'Pour agir, une organisation mobilise des **ressources**. On les classe en plusieurs catégories, dont certaines sont **tangibles** (visibles, mesurables) et d’autres **intangibles** (immatérielles, souvent les plus précieuses).' },
      { t: 'table', head: ['Ressource', 'Exemples'], rows: [
        ['Humaines', 'Salariés, savoir-faire, motivation'],
        ['Matérielles', 'Machines, locaux, matières'],
        ['Financières', 'Capitaux, trésorerie, capacité d’emprunt'],
        ['Immatérielles', 'Marque, brevets, réputation, données, culture'],
      ] },
      { t: 'p', c: 'Les **compétences** sont la capacité à **combiner** ces ressources pour agir efficacement. Une **compétence distinctive** (rare, difficile à imiter) fonde un **avantage concurrentiel** durable. C’est souvent l’immatériel (une marque forte, un savoir-faire unique) qui fait la différence, car il ne s’achète pas.' },
      { t: 'tip', h: 'À retenir', c: 'Ressources **tangibles** (matériel, argent) vs **intangibles** (marque, savoir-faire, données). Ce sont surtout les ressources **rares et difficiles à imiter** qui créent l’avantage concurrentiel.' },
    ]),
    S('📊 Mesurer la performance', [
      { t: 'p', c: 'La **performance** se pilote avec des **indicateurs** rassemblés dans un **tableau de bord**. On distingue des indicateurs selon la dimension mesurée, car une performance purement financière peut cacher des faiblesses sociales ou environnementales.' },
      { t: 'table', head: ['Dimension', 'Indicateurs'], rows: [
        ['Commerciale', 'Chiffre d’affaires, part de marché, satisfaction client'],
        ['Financière', 'Rentabilité, marge, endettement'],
        ['Sociale', 'Turnover, absentéisme, climat social'],
        ['Environnementale', 'Émissions, déchets, consommation d’énergie'],
      ] },
      { t: 'p', c: 'Rappel essentiel : la performance croise **efficacité** (atteindre l’objectif) et **efficience** (au moindre coût). Un bon tableau de bord suit **quelques indicateurs clés** (KPI) pertinents, pas une masse de chiffres. Il permet de **comparer** (objectif vs réalisé, année N vs N-1, face aux concurrents).' },
      { t: 'tip', h: 'À retenir', c: 'La performance est **globale** : économique, sociale ET environnementale. On la pilote avec des **indicateurs** comparés à un objectif ou à une référence.' },
    ]),
    S('⚙️ Les structures organisationnelles', [
      { t: 'p', c: 'La **structure** définit comment le travail est **réparti** et **coordonné** : qui fait quoi, qui commande qui. Elle se représente par un **organigramme**. Plusieurs grands types existent, chacun avec ses forces et faiblesses.' },
      { t: 'table', head: ['Structure', 'Principe', 'Limite'], rows: [
        ['Fonctionnelle', 'Découpage par fonction (production, vente, RH)', 'Cloisonnement entre services'],
        ['Divisionnelle', 'Découpage par produit / zone / marché', 'Doublons, coûts'],
        ['Matricielle', 'Croise fonctions et projets', 'Double hiérarchie, conflits'],
      ] },
      { t: 'p', c: 'Le choix dépend de la taille, de l’activité et de la stratégie. Une petite entreprise a une structure **simple** (le dirigeant décide de tout) ; une grande entreprise diversifiée adopte une structure **divisionnelle**. Les organisations agiles tendent vers des structures **plates** (moins de niveaux hiérarchiques) pour décider plus vite.' },
      { t: 'tip', h: 'À retenir', c: 'Fonctionnelle = par **métier** ; divisionnelle = par **produit/marché** ; matricielle = **les deux** (souple mais source de conflits). La structure doit servir la **stratégie**.' },
    ]),
    S('🏭 Organiser la production', [
      { t: 'p', c: 'Produire suppose des choix d’**organisation**. Selon les quantités et la standardisation, la production est **unitaire** (sur mesure, à l’unité), en **série** (lots identiques) ou **en continu** (flux ininterrompu, ex. raffinerie).' },
      { t: 'p', c: 'On distingue aussi le pilotage des flux. En **flux poussé**, on produit d’abord puis on stocke en attendant les commandes (risque de sur-stock). En **flux tiré** (juste-à-temps), on ne produit qu’à la **commande** : moins de stocks, mais plus de tension sur les délais et les fournisseurs.' },
      { t: 'list', c: [
        '**Juste-à-temps (JAT)** : produire la bonne quantité, au bon moment → stocks minimaux, moins de gaspillage.',
        '**Qualité** : viser le « zéro défaut » (démarche qualité, amélioration continue) car un défaut coûte cher.',
        '**Productivité** : produire plus avec autant de ressources → compétitivité.',
      ] },
      { t: 'tip', h: 'À retenir', c: 'Flux **poussé** (produire puis vendre, on stocke) vs flux **tiré / juste-à-temps** (produire à la commande, peu de stocks). Le JAT réduit les coûts mais accroît la dépendance aux fournisseurs.' },
    ]),
    S('💼 Étude de cas guidée — performance et organisation', [
      { t: 'p', c: '**Énoncé.** Une entreprise industrielle veut réduire ses coûts et améliorer sa réactivité. Ses stocks sont élevés et sa structure très hiérarchique ralentit les décisions. Que recommander ?' },
      { t: 'example', h: 'Étape 1 — Diagnostic', c: 'Stocks élevés → coûts d’immobilisation et risque d’invendus (flux poussé). Structure très hiérarchique → décisions lentes, faible réactivité.' },
      { t: 'example', h: 'Étape 2 — Leviers', c: 'Passer en **flux tiré / juste-à-temps** pour réduire les stocks ; **aplatir** la structure (moins de niveaux) pour décider plus vite ; suivre des **indicateurs** de performance (rotation des stocks, délais).' },
      { t: 'p', c: '**Commentaire.** Ces choix améliorent l’**efficience** (moins de coûts) et l’**efficacité** (meilleure réactivité). Limites à anticiper : le JAT rend vulnérable à une rupture fournisseur ; l’aplatissement exige plus d’autonomie des équipes.' },
      { t: 'tip', h: 'Méthode', c: 'Diagnostiquer (ressources, structure, production) → proposer des leviers **cohérents** → peser **avantages et risques**. Toujours relier à la **performance globale**.' },
    ]),
  ],
  'mgmt-t2': [
    S('🧭 Les niveaux de décision', [
      { t: 'p', c: 'Toutes les décisions n’ont pas la même portée. **Igor Ansoff** distingue trois niveaux, du plus engageant au plus quotidien. Bien les repérer est essentiel au bac.' },
      { t: 'table', head: ['Niveau', 'Horizon', 'Exemple'], rows: [
        ['Stratégique', 'Long terme, engage toute l’organisation', 'Se lancer à l’international'],
        ['Tactique (administratif)', 'Moyen terme, organise les ressources', 'Recruter, réorganiser un service'],
        ['Opérationnel', 'Court terme, quotidien', 'Établir les plannings de la semaine'],
      ] },
      { t: 'p', c: 'La décision est rarement parfaitement **rationnelle** : Herbert **Simon** parle de **rationalité limitée** (temps, information et capacités de calcul limités) ; le décideur choisit une solution **satisfaisante**, pas optimale. Le **système d’information** aide à décider en fournissant les bonnes données.' },
      { t: 'tip', h: 'À retenir', c: 'Décision **stratégique** (rare, engageante, dirigeants) → **tactique** (organiser) → **opérationnelle** (quotidienne). La rationalité est **limitée** (Simon).' },
    ]),
    S('👑 Pouvoir et contre-pouvoirs', [
      { t: 'p', c: 'Le **pouvoir** est la capacité d’un acteur à **influencer** les décisions et le comportement des autres. Il peut être **formel** (lié à la position hiérarchique, au statut) ou **informel** (lié à l’expertise, au contrôle d’une information ou d’une ressource rare, au charisme).' },
      { t: 'p', c: 'Face au pouvoir de la direction s’exercent des **contre-pouvoirs** qui l’équilibrent : les **syndicats** et représentants du personnel (CSE), les **actionnaires**, l’**État** (lois), les **ONG** et l’opinion, les **clients**. Ils empêchent les abus et obligent à tenir compte des parties prenantes.' },
      { t: 'example', h: 'Illustration', c: 'Un expert informatique détient un pouvoir **informel** important s’il est le seul à maîtriser un système clé : il influence des décisions bien au-delà de sa position hiérarchique.' },
      { t: 'tip', h: 'À retenir', c: 'Pouvoir **formel** (hiérarchie) ≠ **informel** (expertise, information). Les **contre-pouvoirs** (syndicats, actionnaires, État, ONG) équilibrent le pouvoir des dirigeants.' },
    ]),
    S('♟️ Les modalités de développement', [
      { t: 'p', c: 'Pour croître, une organisation choisit une **modalité de développement**. Le choix dépend de ses moyens, de sa rapidité voulue et du risque accepté.' },
      { t: 'table', head: ['Modalité', 'Principe', 'Atout / risque'], rows: [
        ['Croissance interne', 'Se développer par ses propres moyens', 'Maîtrisée mais lente'],
        ['Croissance externe', 'Racheter / fusionner avec une autre', 'Rapide mais coûteuse et risquée'],
        ['Alliance / partenariat', 'Coopérer sans fusionner', 'Partage des risques mais dépendance'],
      ] },
      { t: 'p', c: 'On distingue aussi l’**intégration** (maîtriser la filière en amont — fournisseurs — ou en aval — distribution) et l’**externalisation** (confier une activité à un tiers pour se recentrer sur son métier). Chaque choix modifie le **périmètre** de l’organisation.' },
      { t: 'tip', h: 'À retenir', c: 'Croissance **interne** (soi-même, lent), **externe** (rachat, rapide/risqué) ou **alliance** (coopérer). L’**intégration** maîtrise la filière ; l’**externalisation** recentre sur le métier.' },
    ]),
    S('💼 Étude de cas guidée — décision et pouvoir', [
      { t: 'p', c: '**Énoncé.** Le dirigeant d’une PME veut racheter un concurrent pour grandir vite, mais les salariés et un actionnaire important s’y opposent. Analysez.' },
      { t: 'example', h: 'Étape 1 — Nature de la décision', c: 'Rachat d’un concurrent = décision **stratégique** (long terme, engage toute l’entreprise) et modalité de **croissance externe**.' },
      { t: 'example', h: 'Étape 2 — Les acteurs et le pouvoir', c: 'Le dirigeant a le pouvoir **formel**, mais l’**actionnaire** important (contre-pouvoir financier) et les **salariés** (contre-pouvoir social) peuvent bloquer ou freiner.' },
      { t: 'p', c: '**Commentaire.** La croissance externe est **rapide** mais **risquée** (coût, intégration des équipes, endettement). Le dirigeant doit **négocier** avec les contre-pouvoirs (rassurer l’actionnaire sur la rentabilité, les salariés sur l’emploi) pour faire aboutir sa décision. Ignorer les contre-pouvoirs expose à l’échec.' },
      { t: 'tip', h: 'Méthode', c: 'Qualifier la **décision** (niveau, modalité) → identifier les **acteurs et pouvoirs** → montrer l’arbitrage → conclure sur les **conditions de réussite**.' },
    ]),
  ],
  'mgmt-t3': [
    S('⚖️ La gouvernance de l’entreprise', [
      { t: 'p', c: 'La **gouvernance** désigne l’ensemble des mécanismes qui organisent la **direction** et le **contrôle** de l’entreprise : qui décide, au nom de qui, et qui vérifie. Deux grandes conceptions s’opposent.' },
      { t: 'table', head: ['Gouvernance', 'Priorité', 'Logique'], rows: [
        ['Actionnariale', 'Les actionnaires', 'Maximiser la valeur pour les propriétaires'],
        ['Partenariale', 'Toutes les parties prenantes', 'Équilibrer les intérêts (salariés, clients, société)'],
      ] },
      { t: 'p', c: 'La gouvernance **actionnariale** met la rentabilité et le dividende au premier plan. La gouvernance **partenariale** (cohérente avec la RSE) cherche à concilier les attentes de **toutes** les parties prenantes. De bons mécanismes (conseil d’administration, comités, transparence) **équilibrent les pouvoirs** et évitent les dérives.' },
      { t: 'tip', h: 'À retenir', c: 'Gouvernance **actionnariale** (priorité aux propriétaires) vs **partenariale** (toutes les parties prenantes). La seconde prolonge la logique **RSE**.' },
    ]),
    S('📜 Normes, labels et reporting RSE', [
      { t: 'p', c: 'Pour rendre la RSE **crédible** et **comparable**, il existe des **normes**, des **labels** et des obligations de **reporting** (rendre compte). Ils permettent de distinguer les engagements réels du **greenwashing**.' },
      { t: 'list', c: [
        '**ISO 26000** : norme internationale qui définit les lignes directrices de la responsabilité sociétale (mais elle ne se « certifie » pas).',
        '**Labels** (commerce équitable, bio, RSE sectoriels) : garantissent le respect d’un cahier des charges par un tiers.',
        '**Reporting extra-financier** : les grandes entreprises publient un rapport sur leurs impacts sociaux et environnementaux.',
      ] },
      { t: 'p', c: 'Ces dispositifs répondent à une exigence de **transparence** : les parties prenantes (clients, ONG, investisseurs) veulent des preuves, pas des slogans. Un label reconnu est un **avantage concurrentiel** ; un engagement non tenu, un **risque de réputation**.' },
      { t: 'tip', h: 'À retenir', c: 'Normes (**ISO 26000**), **labels** et **reporting** rendent la RSE vérifiable. Ils sont la parade au **greenwashing** et une source de confiance.' },
    ]),
    S('♻️ Nouveaux modèles : économie circulaire', [
      { t: 'p', c: 'Face aux limites écologiques, les organisations font évoluer leur **modèle économique**. L’**économie circulaire** s’oppose au modèle linéaire « extraire → produire → jeter » : elle vise à **réduire, réutiliser, réparer, recycler** pour limiter le gaspillage des ressources.' },
      { t: 'list', c: [
        '**Éco-conception** : concevoir des produits durables, réparables, recyclables.',
        '**Réemploi et réparation** : allonger la durée de vie (seconde main, pièces détachées).',
        '**Recyclage** : réintroduire la matière dans un nouveau cycle de production.',
        '**Économie de la fonctionnalité** : vendre l’usage plutôt que le bien (louer plutôt que posséder).',
      ] },
      { t: 'p', c: 'Ces modèles transforment la **création de valeur** : la performance environnementale devient un **avantage concurrentiel** et une réponse aux attentes des consommateurs et de la réglementation.' },
      { t: 'tip', h: 'À retenir', c: 'Économie **circulaire** (réduire, réutiliser, réparer, recycler) contre le modèle **linéaire** (jeter). Elle allie performance **économique** et **environnementale**.' },
    ]),
    S('💼 Étude de cas guidée — mutation et RSE', [
      { t: 'p', c: '**Énoncé.** Une entreprise de mode « fast fashion » subit des critiques sur son impact environnemental et social. Ses ventes stagnent. Proposez une évolution de son modèle.' },
      { t: 'example', h: 'Étape 1 — Le problème', c: 'Modèle **linéaire** très polluant + manquements sociaux → **risque de réputation** et perte de clients sensibles à la RSE. Gouvernance jusqu’ici purement **actionnariale**.' },
      { t: 'example', h: 'Étape 2 — Évolution proposée', c: 'Basculer vers l’**économie circulaire** (éco-conception, reprise et recyclage, seconde main), viser un **label**, publier un **reporting** sincère, et adopter une gouvernance plus **partenariale**.' },
      { t: 'p', c: '**Commentaire.** Ces choix transforment une **menace** (critiques, réglementation) en **opportunité** (différenciation, fidélité, nouveaux marchés). Attention au **greenwashing** : les engagements doivent être **prouvés**, sous peine d’aggraver la crise de réputation.' },
      { t: 'tip', h: 'Méthode', c: 'Relier problème → attentes des **parties prenantes** → **modèle** (économie circulaire) et **gouvernance** → preuves (labels, reporting) → effet sur la **performance globale**.' },
    ]),
  ],

  // #####################################################################
  // DROIT
  // #####################################################################
  'droit-t5': [
    S('🧾 Les clauses particulières du contrat', [
      { t: 'p', c: 'Au-delà des mentions de base, un contrat peut contenir des **clauses particulières** qui aménagent les droits et obligations des parties. En connaître les principales aide à analyser un contrat au bac.' },
      { t: 'table', head: ['Clause', 'Effet'], rows: [
        ['Clause pénale', 'Fixe à l’avance l’indemnité due en cas d’inexécution'],
        ['Clause résolutoire', 'Prévoit la rupture automatique en cas de manquement'],
        ['Clause limitative de responsabilité', 'Plafonne la réparation due'],
        ['Clause de confidentialité', 'Interdit de divulguer certaines informations'],
      ] },
      { t: 'p', c: 'Ces clauses sont valables tant qu’elles respectent l’**ordre public** et ne créent pas de **déséquilibre significatif** (surtout dans les contrats d’adhésion et de consommation, où une clause **abusive** est réputée non écrite). Le juge peut **réviser** une clause pénale manifestement excessive.' },
      { t: 'tip', h: 'À retenir', c: 'Les clauses aménagent le contrat mais ne peuvent pas violer l’**ordre public** ni être **abusives**. Une clause abusive est **réputée non écrite**.' },
    ]),
    S('🛒 Le contrat de consommation', [
      { t: 'p', c: 'Quand un **professionnel** contracte avec un **consommateur** (particulier), le droit protège la partie **faible**. Le Code de la consommation impose des règles supplémentaires par rapport au droit commun des contrats.' },
      { t: 'list', c: [
        '**Obligation d’information** précontractuelle : prix, caractéristiques, garanties.',
        '**Droit de rétractation** : 14 jours pour renoncer à un achat à distance (en ligne) ou hors établissement, sans motif.',
        '**Protection contre les clauses abusives** : celles qui créent un déséquilibre significatif sont écartées.',
        '**Garantie légale de conformité** : le bien doit être conforme et fonctionner.',
      ] },
      { t: 'p', c: 'Ces règles rééquilibrent une relation par nature inégale : le professionnel connaît le produit et rédige le contrat, le consommateur subit des conditions non négociées (contrat d’**adhésion**). Le **droit de rétractation** est la protection la plus emblématique.' },
      { t: 'tip', h: 'À retenir', c: 'Contrat pro/consommateur = **protection renforcée** : information, **14 jours de rétractation** (achat à distance), clauses abusives écartées, garantie de conformité.' },
    ]),
    S('🌐 Le contrat électronique', [
      { t: 'p', c: 'Le **contrat électronique** (achat en ligne) obéit au droit commun **et** à des règles propres, car le consentement se donne à distance, par écran interposé. La loi encadre sa **formation** pour protéger l’acheteur.' },
      { t: 'list', c: [
        '**Le « double clic »** : l’acheteur doit pouvoir vérifier sa commande et la corriger avant de confirmer (un premier clic pour commander, un second pour confirmer).',
        '**Information claire** sur le prix total, les frais, le droit de rétractation avant validation.',
        '**Confirmation** de la commande par le vendeur (récapitulatif).',
      ] },
      { t: 'p', c: 'Le contrat est **formé** dès la confirmation de la commande par l’acheteur (le second clic). L’écrit électronique a la **même valeur** qu’un écrit papier, et la **signature électronique** est reconnue juridiquement.' },
      { t: 'tip', h: 'À retenir', c: 'Contrat en ligne = règle du **double clic** (vérifier puis confirmer). L’écrit et la signature **électroniques** ont la même valeur que le papier.' },
    ]),
    S('⚖️ MÉTHODE — Résoudre un cas pratique (syllogisme)', [
      { t: 'p', c: 'Résoudre un cas pratique en droit suit une méthode rigoureuse : le **syllogisme juridique**. Ne jamais donner une réponse « au feeling » : il faut **fonder** la solution sur une règle.' },
      { t: 'list', c: [
        '**1. Les faits** : résumer les faits utiles, en écartant l’inutile.',
        '**2. La qualification juridique** : traduire les faits en termes de droit (« ceci est un dol », « ceci est un contrat de vente »).',
        '**3. Le problème de droit** : formuler la question juridique posée.',
        '**4. La majeure** : énoncer la règle applicable (article, principe).',
        '**5. La mineure** : appliquer la règle aux faits.',
        '**6. La conclusion** : répondre clairement au problème.',
      ] },
      { t: 'example', h: 'Exemple express', c: 'Faits : un vendeur cache un défaut grave. Qualification : **dol**. Règle (majeure) : le dol (art. 1137) vicie le consentement et rend le contrat **annulable**. Application (mineure) : le vendeur a dissimulé une info déterminante → dol caractérisé. Conclusion : l’acheteur peut demander la **nullité** + dommages-intérêts.' },
      { t: 'warning', h: 'Erreur fréquente', c: 'Donner la conclusion **sans** énoncer la règle de droit. Une réponse juridique doit toujours s’appuyer sur un **fondement** (article ou principe).' },
    ]),
    S('⚖️ Cas pratique guidé — l’inexécution du contrat', [
      { t: 'p', c: '**Énoncé.** Un prestataire livre un site internet avec deux mois de retard et de nombreux bugs, malgré les relances. Le client veut « tout arrêter » et être indemnisé. Que peut-il faire ?' },
      { t: 'example', h: 'Majeure — la règle', c: 'En cas d’**inexécution** (totale, partielle ou tardive), le créancier dispose de sanctions : exécution forcée, **résolution** du contrat, réduction du prix, et **dommages-intérêts** en réparation du préjudice (art. 1217). Il peut aussi opposer l’**exception d’inexécution**.' },
      { t: 'example', h: 'Mineure — les faits', c: 'Le prestataire n’a pas exécuté correctement (retard + bugs) malgré les relances : inexécution **caractérisée**, imputable au prestataire (pas de force majeure).' },
      { t: 'example', h: 'Conclusion', c: 'Le client peut demander la **résolution** du contrat (l’anéantir et se faire rembourser) et/ou des **dommages-intérêts** pour le préjudice subi (retard, perte d’exploitation). Il pouvait aussi suspendre son paiement (exception d’inexécution).' },
      { t: 'tip', h: 'Méthode', c: 'Cas pratique : **qualifier** l’inexécution → énoncer les **sanctions** possibles (règle) → **appliquer** aux faits → **conclure** sur le choix le plus adapté pour le client.' },
    ]),
  ],
  'droit-t6': [
    S('🧩 Responsabilité contractuelle et délictuelle', [
      { t: 'p', c: 'La responsabilité civile a **deux régimes**, selon qu’un contrat lie ou non les parties. Bien les distinguer est le premier réflexe d’un cas pratique sur la responsabilité.' },
      { t: 'table', head: ['', 'Contractuelle', 'Délictuelle (extra-contractuelle)'], rows: [
        ['Situation', 'Un contrat lie les parties', 'Aucun contrat entre elles'],
        ['Origine', 'Inexécution d’une obligation du contrat', 'Faute, chose, fait d’autrui'],
        ['Fondement', 'Art. 1231 et s.', 'Art. 1240 et s.'],
        ['Exemple', 'Un transporteur livre en retard', 'Un piéton renversé par un inconnu'],
      ] },
      { t: 'p', c: 'Dans les deux cas, il faut **un dommage, un fait générateur et un lien de causalité**. La différence tient à la **source** de l’obligation violée : le contrat (contractuelle) ou la loi générale « ne pas nuire à autrui » (délictuelle).' },
      { t: 'tip', h: 'À retenir', c: 'Contrat entre les parties → responsabilité **contractuelle**. Pas de contrat → responsabilité **délictuelle**. Toujours vérifier ce point **en premier**.' },
    ]),
    S('🏭 La responsabilité du fait des produits défectueux', [
      { t: 'p', c: 'Un régime spécial protège les victimes d’un **produit défectueux** (art. 1245 et s.). Un produit est **défectueux** lorsqu’il n’offre pas la **sécurité** à laquelle on peut légitimement s’attendre.' },
      { t: 'p', c: 'Le **producteur** est responsable **de plein droit** du dommage causé par un défaut de son produit, même **sans faute** de sa part. La victime doit seulement prouver le **dommage**, le **défaut** et le **lien de causalité** — pas une faute. C’est une protection très forte du consommateur.' },
      { t: 'example', h: 'Application', c: 'Un appareil électroménager prend feu à cause d’un défaut de fabrication et cause un incendie. Le fabricant est responsable **de plein droit** : la victime n’a pas à prouver une faute, seulement le défaut et le dommage.' },
      { t: 'tip', h: 'À retenir', c: 'Produit défectueux = manque de **sécurité** attendue. Le **producteur** est responsable **sans faute** (de plein droit). La victime prouve défaut + dommage + lien de causalité.' },
    ]),
    S('⚖️ MÉTHODE — Caractériser une responsabilité civile', [
      { t: 'p', c: 'Pour établir une responsabilité civile, il faut vérifier **méthodiquement** ses conditions. Procéder comme une **liste à cocher** évite d’oublier un élément.' },
      { t: 'list', c: [
        '**1. Quel régime ?** Contractuel (contrat) ou délictuel (pas de contrat) ?',
        '**2. Le fait générateur** : une faute ? le fait d’une chose (art. 1242) ? le fait d’autrui (parents, employeur) ?',
        '**3. Le dommage** : matériel, corporel ou moral ? Est-il **certain, direct et personnel** ?',
        '**4. Le lien de causalité** : le dommage découle-t-il bien du fait générateur ?',
        '**5. Une exonération ?** Force majeure, faute de la victime ?',
      ] },
      { t: 'example', h: 'Exemple express', c: 'Un chien mord un passant. Régime : délictuel. Fait générateur : **fait d’une chose/animal** sous la garde du maître (art. 1243). Dommage : corporel (morsure). Lien : la blessure vient de la morsure. → Le **gardien** (maître) est responsable, sauf force majeure.' },
      { t: 'tip', h: 'À retenir', c: 'Toujours vérifier les **3 conditions** (fait générateur, dommage, lien) après avoir identifié le **régime**, puis chercher une éventuelle **exonération**.' },
    ]),
    S('⚖️ Cas pratique guidé — la responsabilité de l’employeur', [
      { t: 'p', c: '**Énoncé.** Un livreur, salarié d’une entreprise, percute et endommage la voiture d’un tiers pendant sa tournée. Le tiers réclame réparation. Qui est responsable ?' },
      { t: 'example', h: 'Majeure — la règle', c: 'La responsabilité du **fait d’autrui** rend l’**employeur (commettant)** responsable des dommages causés par son **salarié (préposé)** dans l’exercice de ses fonctions (art. 1242 al. 5). C’est une responsabilité **sans faute** de l’employeur, qui facilite l’indemnisation de la victime.' },
      { t: 'example', h: 'Mineure — les faits', c: 'Le dommage a été causé par le salarié **pendant sa tournée** (dans l’exercice de ses fonctions). Le lien employeur/préposé et le rattachement au travail sont établis.' },
      { t: 'example', h: 'Conclusion', c: 'L’**employeur** est civilement responsable et doit **réparer** le préjudice du tiers (via son assurance). La victime est ainsi certaine d’être indemnisée, même si le salarié est insolvable.' },
      { t: 'tip', h: 'Méthode', c: 'Identifier le **régime** (fait d’autrui : employeur/salarié) → vérifier le rattachement aux **fonctions** → conclure sur la responsabilité de l’**employeur** et le rôle de l’**assurance**.' },
    ]),
  ],
  'droit-t7': [
    S('⏱️ Le temps de travail et sa réglementation', [
      { t: 'p', c: 'Le droit du travail encadre strictement le **temps de travail** pour protéger la santé du salarié. Les repères de base sont fixés par la loi, puis adaptés par les conventions collectives.' },
      { t: 'table', head: ['Notion', 'Repère'], rows: [
        ['Durée légale', '35 heures par semaine'],
        ['Heures supplémentaires', 'Au-delà de 35 h, majorées (25 % puis 50 %)'],
        ['Durée maximale', '10 h/jour, 48 h/semaine (plafonds)'],
        ['Repos', 'Minimum 11 h consécutives entre deux journées'],
      ] },
      { t: 'p', c: 'La durée **légale** (35 h) n’est pas un maximum : au-delà, ce sont des **heures supplémentaires** majorées. Le droit impose aussi des **repos** obligatoires (quotidien, hebdomadaire, congés payés) et un **droit à la déconnexion** à l’ère numérique.' },
      { t: 'tip', h: 'À retenir', c: 'Durée **légale** = 35 h (pas un maximum). Au-delà → **heures supplémentaires majorées**. La loi impose des **plafonds** et des **repos** pour protéger la santé.' },
    ]),
    S('🛡️ Santé et sécurité au travail', [
      { t: 'p', c: 'L’employeur a une **obligation de sécurité** envers ses salariés : il doit prendre les mesures nécessaires pour **protéger leur santé physique et mentale**. Ce n’est pas une simple recommandation, c’est une **obligation de résultat** renforcée.' },
      { t: 'list', c: [
        '**Prévention des risques** : évaluer les risques (document unique), former, équiper.',
        '**Risques psychosociaux** : prévenir le stress, le harcèlement, le burn-out.',
        '**Accidents du travail et maladies professionnelles** : indemnisés, et engagent la responsabilité de l’employeur en cas de faute.',
      ] },
      { t: 'p', c: 'Le salarié dispose d’un **droit de retrait** : il peut cesser le travail face à un **danger grave et imminent**, sans être sanctionné. La **médecine du travail** et le **CSE** veillent aussi à la sécurité.' },
      { t: 'tip', h: 'À retenir', c: 'L’employeur a une **obligation de sécurité** (santé physique ET mentale). Le salarié a un **droit de retrait** face à un danger grave et imminent.' },
    ]),
    S('⚖️ MÉTHODE — Analyser une rupture du contrat de travail', [
      { t: 'p', c: 'Face à un cas de rupture, procéder par étapes pour ne rien oublier : identifier **qui** rompt, **comment**, et si les **conditions** sont réunies.' },
      { t: 'list', c: [
        '**1. Qui prend l’initiative ?** Salarié (démission), employeur (licenciement), ou les deux (rupture conventionnelle) ?',
        '**2. Le motif** (si licenciement) : personnel (faute, insuffisance) ou économique ?',
        '**3. Le fond** : la cause est-elle **réelle et sérieuse** ?',
        '**4. La forme** : la **procédure** a-t-elle été respectée (convocation, entretien, notification écrite motivée) ?',
        '**5. La sanction** : si fond ou forme manquent → licenciement **abusif** → dommages-intérêts (prud’hommes).',
      ] },
      { t: 'example', h: 'Exemple express', c: 'Licenciement par SMS pour un motif vague. Fond : pas de cause réelle et sérieuse. Forme : procédure non respectée. → Licenciement **abusif**, saisine du **conseil de prud’hommes**, dommages-intérêts.' },
      { t: 'tip', h: 'À retenir', c: 'Contrôler **deux niveaux** : le **fond** (cause réelle et sérieuse) ET la **forme** (procédure). Tribunal compétent : les **prud’hommes**.' },
    ]),
    S('⚖️ Cas pratique guidé — la requalification d’un CDD', [
      { t: 'p', c: '**Énoncé.** Une salariée enchaîne depuis deux ans des CDD successifs pour occuper le même poste, lié à l’activité normale et permanente de l’entreprise. Peut-elle obtenir un CDI ?' },
      { t: 'example', h: 'Majeure — la règle', c: 'Le **CDI est la règle**, le **CDD l’exception**, réservé à une tâche **précise et temporaire** (remplacement, accroissement temporaire, saisonnier). Un CDD ne peut pourvoir durablement un emploi lié à l’**activité normale et permanente**. À défaut, il est **requalifié en CDI**.' },
      { t: 'example', h: 'Mineure — les faits', c: 'Ici, les CDD successifs occupent depuis deux ans un poste **permanent** : le recours au CDD est **détourné** de son objet légal.' },
      { t: 'example', h: 'Conclusion', c: 'La salariée peut demander au **conseil de prud’hommes** la **requalification en CDI** (avec une indemnité de requalification). La relation est réputée à durée indéterminée depuis le premier CDD irrégulier.' },
      { t: 'tip', h: 'Méthode', c: 'Vérifier si le CDD respecte un **cas de recours** légal et une **tâche temporaire**. S’il pourvoit un emploi **permanent** → **requalification en CDI**.' },
    ]),
  ],
  'droit-t8': [
    S('🏛️ La personnalité juridique', [
      { t: 'p', c: 'Le droit ne reconnaît de droits et d’obligations qu’aux **personnes juridiques**. Il en existe deux sortes, distinction fondamentale pour comprendre l’entreprise.' },
      { t: 'table', head: ['Personne', 'Définition', 'Exemple'], rows: [
        ['Physique', 'Un être humain', 'Un entrepreneur individuel'],
        ['Morale', 'Un groupement doté de la personnalité juridique', 'Une société, une association, une commune'],
      ] },
      { t: 'p', c: 'La **personne morale** (une société) a sa propre **identité** : un nom (dénomination sociale), un **patrimoine** distinct de celui de ses associés, un domicile (siège social), et la capacité d’agir en justice. C’est cette autonomie qui **protège** le patrimoine personnel des associés (responsabilité limitée aux apports).' },
      { t: 'p', c: 'Un **animal**, un **robot** ou une **idée** n’ont **pas** la personnalité juridique : ils ne peuvent ni posséder, ni hériter, ni être responsables (d’où la question « la chatte de Lagerfeld peut-elle hériter ? » : non).' },
      { t: 'tip', h: 'À retenir', c: 'Personne **physique** (humain) vs **morale** (société, association). La personne morale a un **patrimoine propre** → elle protège le patrimoine des associés.' },
    ]),
    S('📑 Les contrats de l’entreprise', [
      { t: 'p', c: 'Pour exercer, l’entreprise conclut de nombreux **contrats** spécifiques, encadrés par le droit des affaires. En connaître quelques-uns aide à analyser la vie d’une entreprise.' },
      { t: 'table', head: ['Contrat', 'Objet'], rows: [
        ['Bail commercial', 'Louer un local pour exploiter un fonds de commerce'],
        ['Contrat de vente commerciale', 'Vendre des marchandises entre professionnels'],
        ['Contrat de franchise', 'Exploiter une enseigne et un savoir-faire'],
        ['Contrat de sous-traitance', 'Confier une tâche à un tiers'],
      ] },
      { t: 'p', c: 'Le **bail commercial** offre une protection forte au commerçant (droit au renouvellement, durée minimale de 9 ans) car son **fonds de commerce** dépend de l’emplacement. Ces contrats obéissent au droit commun **et** à des règles spéciales du Code de commerce.' },
      { t: 'tip', h: 'À retenir', c: 'L’entreprise vit par ses **contrats** (bail commercial, vente, franchise, sous-traitance). Le **bail commercial** protège le commerçant (durée, renouvellement).' },
    ]),
    S('🔒 Le numérique et la protection des données (RGPD)', [
      { t: 'p', c: 'Toute entreprise qui traite des **données personnelles** (clients, salariés) doit respecter le **RGPD** (Règlement Général sur la Protection des Données). C’est une obligation juridique majeure, sanctionnée par la **CNIL**.' },
      { t: 'list', c: [
        '**Finalité** : ne collecter les données que pour un but précis et annoncé.',
        '**Minimisation** : ne recueillir que les données **nécessaires**.',
        '**Consentement** : obtenir l’accord de la personne (sauf autre base légale).',
        '**Sécurité** : protéger les données contre les fuites.',
        '**Droits des personnes** : accès, rectification, effacement (« droit à l’oubli »).',
      ] },
      { t: 'p', c: 'Le non-respect du RGPD expose à de **lourdes sanctions** financières et à une atteinte à la réputation. La protection des données est donc à la fois une **obligation légale** et un enjeu de **confiance**.' },
      { t: 'tip', h: 'À retenir', c: 'Traiter des données personnelles = respecter le **RGPD** : finalité, minimisation, consentement, sécurité, droits des personnes. Gendarme : la **CNIL**.' },
    ]),
    S('⚖️ Cas pratique guidé — protéger une création', [
      { t: 'p', c: '**Énoncé.** Une entrepreneure a inventé un procédé technique innovant, créé un nom de marque original et rédigé le contenu de son site. Un concurrent copie tout. Comment se protège-t-elle ?' },
      { t: 'example', h: 'Majeure — la règle', c: 'La **propriété intellectuelle** protège les créations. **Brevet** (INPI, 20 ans) pour une **invention technique** ; **marque** (INPI, 10 ans renouvelables) pour un **signe distinctif** ; **droit d’auteur** (automatique) pour une **œuvre** (texte, site). Copier sans autorisation = **contrefaçon** (délit).' },
      { t: 'example', h: 'Mineure — les faits', c: 'Procédé technique → protégeable par **brevet** (s’il a été déposé). Nom de marque → protégé par le **dépôt de marque**. Contenu du site → protégé d’office par le **droit d’auteur**.' },
      { t: 'example', h: 'Conclusion', c: 'Elle peut agir en **contrefaçon** contre le concurrent pour obtenir la cessation de la copie et des **dommages-intérêts** — à condition d’avoir **déposé** brevet et marque à l’INPI (le droit d’auteur, lui, est automatique).' },
      { t: 'tip', h: 'Méthode', c: 'Associer chaque création à son **titre** : invention → brevet, nom → marque, œuvre → droit d’auteur. Le **dépôt INPI** conditionne la propriété industrielle. Sanction de la copie : la **contrefaçon**.' },
    ]),
  ],

  // #####################################################################
  // ÉCONOMIE
  // #####################################################################
  'eco-t6': [
    S('🏦 La politique monétaire de la BCE', [
      { t: 'p', c: 'En zone euro, la **monnaie** n’est pas gérée par les États mais par la **Banque centrale européenne (BCE)**, une institution **indépendante**. Son objectif principal est la **stabilité des prix** (une inflation proche de 2 %).' },
      { t: 'p', c: 'La BCE agit surtout par les **taux d’intérêt directeurs**, qui influencent le coût du crédit dans toute l’économie.' },
      { t: 'list', c: [
        'La BCE **baisse ses taux** → le crédit devient moins cher → ménages et entreprises empruntent et dépensent plus → l’activité est **stimulée** (mais risque d’inflation).',
        'La BCE **relève ses taux** → le crédit se renchérit → la demande ralentit → l’inflation est **freinée** (mais risque de ralentir la croissance).',
      ] },
      { t: 'p', c: 'C’est un **arbitrage** permanent entre soutenir l’activité et maîtriser l’inflation. La politique monétaire est **conjoncturelle** (elle agit à court terme) et **commune** à toute la zone euro, ce qui limite la marge de chaque État.' },
      { t: 'tip', h: 'À retenir', c: 'La **BCE** (indépendante) vise la **stabilité des prix**. Baisser les taux **stimule** l’activité ; les relever **freine l’inflation**. C’est un outil **conjoncturel** commun à la zone euro.' },
    ]),
    S('🌡️ L’inflation : causes et conséquences', [
      { t: 'p', c: 'L’**inflation** est la **hausse générale et durable** des prix. On la mesure par l’indice des prix à la consommation (IPC). Une inflation modérée est normale ; une inflation forte ou une **déflation** (baisse des prix) sont dangereuses.' },
      { t: 'table', head: ['Cause', 'Mécanisme'], rows: [
        ['Par la demande', 'La demande dépasse l’offre → les prix montent'],
        ['Par les coûts', 'Hausse des coûts (énergie, salaires) répercutée sur les prix'],
        ['Monétaire', 'Trop de monnaie en circulation'],
      ] },
      { t: 'p', c: 'Conséquences : l’inflation **érode le pouvoir d’achat** (surtout des revenus fixes), crée de l’**incertitude**, et peut nuire à la **compétitivité**. Mais une inflation **modérée** accompagne la croissance ; à l’inverse, la **déflation** (baisse des prix) pousse à reporter les achats et peut enfoncer l’économie dans la récession.' },
      { t: 'tip', h: 'À retenir', c: 'Inflation = hausse **générale et durable** des prix. Causes : **demande**, **coûts**, **monnaie**. Elle érode le **pouvoir d’achat**. La BCE la combat en **relevant ses taux**.' },
    ]),
    S('💶 MÉTHODE — Lire un déficit et une dette', [
      { t: 'p', c: 'Les finances publiques se lisent avec deux notions à ne pas confondre : le **déficit** (un flux annuel) et la **dette** (un stock accumulé).' },
      { t: 'formula', c: 'Déficit public = Dépenses publiques − Recettes publiques (sur une année)\nDette publique = accumulation des déficits passés (moins les excédents)' },
      { t: 'p', c: 'On les rapporte souvent au **PIB** pour comparer les pays et juger de leur soutenabilité (un déficit de 50 Md€ ne pèse pas pareil dans une petite ou une grande économie).' },
      { t: 'formula', c: 'Ratio de déficit = Déficit ÷ PIB × 100\nRatio de dette = Dette ÷ PIB × 100' },
      { t: 'example', h: 'Exemple chiffré', c: 'PIB 2 500 Md€ ; dépenses 1 400 Md€ ; recettes 1 300 Md€.\nDéficit = 1 400 − 1 300 = **100 Md€**.\nRatio de déficit = 100 ÷ 2 500 × 100 = **4 % du PIB**.' },
      { t: 'tip', h: 'À retenir', c: 'Déficit = **flux** annuel (dépenses − recettes). Dette = **stock** (somme des déficits). On les rapporte au **PIB** (en %) pour comparer et juger de la soutenabilité.' },
    ]),
  ],
  'eco-t7': [
    S('🎓 Capital humain et employabilité', [
      { t: 'p', c: 'Le **capital humain** désigne l’ensemble des **connaissances, compétences et qualifications** d’une personne, qui accroissent sa productivité. La formation et l’expérience sont des **investissements** dans ce capital (théorie de Gary Becker).' },
      { t: 'p', c: 'Plus le capital humain est élevé, plus l’**employabilité** (capacité à trouver et garder un emploi) est forte. C’est pourquoi la **formation** est un levier majeur contre le **chômage structurel** : elle adapte les compétences aux emplois disponibles.' },
      { t: 'list', c: [
        'Investir dans le capital humain → productivité, salaires et employabilité plus élevés.',
        'Un déficit de qualification → chômage **structurel** (inadéquation offre/demande de travail).',
        'La **formation tout au long de la vie** répond aux mutations technologiques.',
      ] },
      { t: 'tip', h: 'À retenir', c: 'Le **capital humain** (savoirs, compétences) se construit par la **formation** : c’est un investissement qui augmente la productivité et l’**employabilité**, et combat le chômage **structurel**.' },
    ]),
    S('🤖 Numérisation et avenir du travail', [
      { t: 'p', c: 'L’**automatisation** et le **numérique** transforment le travail : certaines tâches disparaissent, d’autres se créent. Le débat oppose ceux qui craignent un chômage de masse (le « grand remplacement » par les machines) et ceux qui voient une **transformation** des emplois plutôt qu’une destruction nette.' },
      { t: 'p', c: 'Historiquement, le **progrès technique** détruit des emplois dans certains secteurs mais en crée dans d’autres (destruction créatrice de **Schumpeter**). Le vrai enjeu est la **transition** : former et reconvertir ceux dont le métier disparaît, pour éviter un chômage **structurel** durable.' },
      { t: 'list', c: [
        'Emplois **menacés** : tâches répétitives, automatisables.',
        'Emplois **créés** : numérique, données, services, métiers relationnels.',
        'Enjeu : **formation** et **reconversion** pour accompagner la transition.',
      ] },
      { t: 'tip', h: 'À retenir', c: 'Le numérique **transforme** le travail (destruction créatrice). Le risque n’est pas la fin du travail mais un chômage **structurel** si l’on ne **forme** pas aux nouveaux métiers.' },
    ]),
    S('💶 MÉTHODE — Calculer les taux du marché du travail', [
      { t: 'p', c: 'Trois taux mesurent le marché du travail. Attention à ne **pas** les confondre : ils n’ont pas la même base de calcul.' },
      { t: 'formula', c: 'Taux de chômage = Chômeurs ÷ Population active × 100\nTaux d’activité = Population active ÷ Population en âge de travailler × 100\nTaux d’emploi = Actifs occupés ÷ Population en âge de travailler × 100' },
      { t: 'p', c: 'Rappel : Population active = **actifs occupés + chômeurs**. Le **taux de chômage** se calcule sur la **population active** ; les taux d’**activité** et d’**emploi** se calculent sur la **population en âge de travailler** (15-64 ans).' },
      { t: 'example', h: 'Exemple chiffré', c: 'Population 15-64 ans = 40 M ; actifs occupés = 25 M ; chômeurs = 3 M.\nPopulation active = 25 + 3 = 28 M.\nTaux de chômage = 3 ÷ 28 × 100 ≈ **10,7 %**.\nTaux d’activité = 28 ÷ 40 × 100 = **70 %**.\nTaux d’emploi = 25 ÷ 40 × 100 = **62,5 %**.' },
      { t: 'warning', h: 'Piège', c: 'Le **taux de chômage** ne se calcule PAS sur la population totale ni sur les 15-64 ans, mais sur la **population active**. Les trois taux ont des dénominateurs différents.' },
    ]),
  ],
  'eco-t8': [
    S('💱 Taux de change et compétitivité', [
      { t: 'p', c: 'Le **taux de change** est le prix d’une monnaie exprimé dans une autre (ex. 1 € = 1,08 $). Il influence directement le **commerce international** en modifiant le prix des produits d’un pays à l’étranger.' },
      { t: 'list', c: [
        'Un euro **fort** (qui s’apprécie) → nos exportations coûtent **plus cher** à l’étranger (moins compétitives), mais nos importations coûtent **moins cher**.',
        'Un euro **faible** (qui se déprécie) → nos exportations deviennent **moins chères** (plus compétitives), mais les importations (énergie…) coûtent **plus cher**.',
      ] },
      { t: 'p', c: 'On distingue la **compétitivité-prix** (vendre moins cher, influencée par le taux de change, les coûts, les salaires) et la **compétitivité hors-prix** (qualité, innovation, image, délais). Un pays qui ne peut jouer sur les prix mise sur la compétitivité **hors-prix**.' },
      { t: 'tip', h: 'À retenir', c: 'Monnaie **faible** → exportations plus **compétitives** (mais importations chères). Compétitivité **prix** (le coût) vs **hors-prix** (qualité, innovation).' },
    ]),
    S('🏛️ Les institutions du commerce mondial', [
      { t: 'p', c: 'Le commerce international est **encadré** par des institutions qui fixent des règles et arbitrent les conflits, pour éviter le chaos et les guerres commerciales.' },
      { t: 'table', head: ['Institution', 'Rôle'], rows: [
        ['OMC', 'Organise et régule le commerce mondial, arbitre les litiges'],
        ['Union européenne', 'Marché unique, libre circulation entre États membres'],
        ['Zone euro / BCE', 'Monnaie unique, politique monétaire commune'],
        ['FMI', 'Stabilité financière, aide aux pays en difficulté'],
      ] },
      { t: 'p', c: 'L’**OMC** promeut le **libre-échange** en réduisant les barrières (droits de douane, quotas) et en arbitrant les différends. L’**Union européenne** va plus loin : un **marché unique** avec libre circulation des biens, services, capitaux et personnes. Ces institutions organisent l’**interdépendance** croissante des économies.' },
      { t: 'tip', h: 'À retenir', c: 'L’**OMC** régule le commerce mondial et arbitre les litiges. L’**UE** est un marché unique intégré. Ces institutions encadrent la **mondialisation**.' },
    ]),
    S('💶 MÉTHODE — Balance commerciale et taux d’ouverture', [
      { t: 'p', c: 'Deux calculs reviennent souvent sur le commerce international : le **solde commercial** et le **taux d’ouverture** (le degré d’insertion d’un pays dans le commerce mondial).' },
      { t: 'formula', c: 'Solde commercial = Exportations − Importations\nTaux de couverture = Exportations ÷ Importations × 100\nTaux d’ouverture = ((Exportations + Importations) ÷ 2) ÷ PIB × 100' },
      { t: 'example', h: 'Exemple chiffré', c: 'Exportations 500 Md€ ; importations 560 Md€ ; PIB 2 500 Md€.\nSolde = 500 − 560 = **− 60 Md€** (déficit).\nTaux de couverture = 500 ÷ 560 × 100 ≈ **89 %** (on couvre 89 % des importations par les exportations).\nTaux d’ouverture = ((500 + 560) ÷ 2) ÷ 2 500 × 100 = **21,2 %**.' },
      { t: 'tip', h: 'À retenir', c: 'Solde = Exp − Imp (excédent/déficit). Taux de **couverture** < 100 % = déficit. Taux d’**ouverture** = poids du commerce extérieur dans le PIB (insertion mondiale).' },
    ]),
  ],
  'eco-t9': [
    S('⚙️ Les sources de la croissance', [
      { t: 'p', c: 'D’où vient la **croissance** ? Elle provient d’abord de l’augmentation des **facteurs de production** (plus de travail, plus de capital), mais surtout de leur **meilleure utilisation** : c’est le **progrès technique** et l’**innovation**.' },
      { t: 'list', c: [
        '**Croissance extensive** : produire plus en utilisant **plus** de facteurs (main-d’œuvre, machines).',
        '**Croissance intensive** : produire plus grâce à des **gains de productivité** (mieux utiliser les facteurs) → c’est le moteur durable.',
        '**Le progrès technique** (Schumpeter) : l’innovation crée de nouveaux produits et procédés (« destruction créatrice »).',
      ] },
      { t: 'p', c: 'La **productivité globale des facteurs** (ce qui reste de la croissance non expliqué par la simple hausse des facteurs) mesure l’effet du progrès technique. L’**investissement**, la **recherche** et l’**éducation** (capital humain) sont donc au cœur de la croissance de long terme.' },
      { t: 'tip', h: 'À retenir', c: 'Croissance **extensive** (plus de facteurs) vs **intensive** (gains de productivité). Le moteur durable = **progrès technique et innovation** (Schumpeter), soutenus par l’investissement et l’éducation.' },
    ]),
    S('📊 Mesurer les inégalités', [
      { t: 'p', c: 'La croissance ne profite pas toujours à tous : il faut mesurer les **inégalités** de revenus et de richesses. Plusieurs outils existent pour les objectiver.' },
      { t: 'list', c: [
        '**Le rapport interdécile** (D9/D1) : compare les 10 % les plus riches aux 10 % les plus pauvres.',
        '**L’indice de Gini** : varie de 0 (égalité parfaite) à 1 (inégalité maximale). Plus il est élevé, plus les inégalités sont fortes.',
        '**La courbe de Lorenz** : représente graphiquement la répartition des revenus.',
      ] },
      { t: 'p', c: 'Des inégalités **excessives** peuvent freiner la croissance et la cohésion sociale ; c’est pourquoi l’**État** intervient par la **redistribution** (impôts progressifs, prestations). Mais un certain niveau d’inégalité est parfois vu comme une incitation à l’effort : c’est un **débat**.' },
      { t: 'tip', h: 'À retenir', c: 'Inégalités mesurées par le **rapport interdécile** et l’**indice de Gini** (0 = égalité, 1 = inégalité max). L’État les corrige par la **redistribution**.' },
    ]),
    S('♻️ Transition écologique et découplage', [
      { t: 'p', c: 'Concilier **croissance** et **environnement** est le grand défi contemporain. L’idéal serait le **découplage** : continuer à créer de la richesse tout en **réduisant** les émissions et la consommation de ressources.' },
      { t: 'list', c: [
        '**Découplage** : la croissance du PIB progresse plus vite que la pression environnementale (voire celle-ci diminue).',
        '**Soutenabilité faible** : le capital naturel détruit peut être compensé par du capital technique.',
        '**Soutenabilité forte** : certaines ressources sont **irremplaçables** et doivent être préservées.',
      ] },
      { t: 'p', c: 'Les **instruments** de la transition (taxe carbone, marché de quotas, normes, subventions vertes) visent à **internaliser** le coût environnemental (externalités négatives). Le débat oppose les partisans d’une **croissance verte** (découplage possible) et ceux de la **décroissance** ou de la sobriété.' },
      { t: 'tip', h: 'À retenir', c: 'Le **découplage** vise à séparer croissance et pollution. Soutenabilité **faible** (compensable) vs **forte** (préservation). Instruments : **taxe carbone, quotas, normes**.' },
    ]),
    S('💶 MÉTHODE — Croissance et PIB par habitant', [
      { t: 'p', c: 'Deux calculs clés : le **taux de croissance** du PIB et le **PIB par habitant** (un meilleur indicateur du niveau de vie que le PIB total).' },
      { t: 'formula', c: 'Taux de croissance = ((PIB_N − PIB_N-1) ÷ PIB_N-1) × 100\nPIB par habitant = PIB ÷ Population' },
      { t: 'example', h: 'Exemple chiffré', c: 'PIB : 500 Md€ (N-1) → 515 Md€ (N). Population : 10 M.\nTaux de croissance = ((515 − 500) ÷ 500) × 100 = **+ 3 %**.\nPIB par habitant (N) = 515 Md€ ÷ 10 M = **51 500 € / habitant**.' },
      { t: 'p', c: 'Attention : une croissance du PIB de +3 % avec une population qui augmente de +3 % laisse le PIB **par habitant** inchangé. Pour juger du niveau de vie, c’est le PIB **par habitant** qui compte — et il faut aussi tenir compte des **inégalités** et de la **soutenabilité** (le PIB ne mesure ni le bien-être ni l’environnement).' },
      { t: 'tip', h: 'À retenir', c: 'Taux de croissance = variation du PIB en %. **PIB par habitant** = PIB ÷ population (niveau de vie moyen). Toujours nuancer : le PIB **ignore** inégalités et environnement.' },
    ]),
  ],
}
