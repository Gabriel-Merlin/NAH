// PREMIÈRE STMG — contenu fidèle au cours « Premiere_STMG_Cours_Complet.md ».
// Cours détaillés (format blocs), exemples chiffrés, fiches mémo et jeux.
// Spécialités : Sciences de gestion et numérique, Management, Droit, Économie.
// Tronc commun : Mathématiques, Français (EAF), Histoire-Géographie, Langues.
const yt = (q) => 'https://www.youtube.com/results?search_query=' + encodeURIComponent(q)

// ===========================================================================
// SCIENCES DE GESTION ET NUMÉRIQUE (4 thèmes)
// ===========================================================================
const sgn = {
  id: 'p1-sgn',
  name: 'Sciences de gestion et numérique',
  short: 'Sciences de gestion',
  icon: '💡',
  color: '#0d9488',
  niveau: 'premiere',
  tagline: 'Comment une organisation fonctionne concrètement au quotidien.',
  chapters: [
    {
      id: 'p1-sgn-t1',
      name: 'Thème 1 — De l’individu à l’acteur',
      short: 'De l’individu à l’acteur',
      keywords: 'individu acteur personnalité perception sélective stéréotype émotion attitude comportement statut rôle socialisation communication interpersonnelle verbale non verbale para-verbale schéma émetteur récepteur canal message feedback code référent bruit écoute active formelle informelle réseau activité de travail travail prescrit réel compétence savoir savoir-faire savoir-être qualification classification expérience potentiel compétence collective rémunération salaire prime périphériques rétribution reconnaissance ressource charge coût du travail investissement immatériel capital humain formation GPEC motivation Maslow besoins Herzberg facteurs hygiène satisfaction implication QVT groupe formel informel dynamique cohésion norme conflit coopération décision leadership styles Lewin autoritaire démocratique',
      intro:
        'C’est **le thème le plus important de l’année** en sciences de gestion. Une organisation n’est pas qu’un organigramme : c’est avant tout un **collectif humain**. On y étudie comment un **individu** — avec sa personnalité, ses perceptions, ses émotions et ses compétences — **devient un acteur** qui communique, agit et interagit, jusqu’à influencer l’organisation autant qu’il en est influencé. Trois grandes questions de gestion structurent le thème : **① Comment un individu devient-il acteur ? ② L’activité humaine est-elle une ressource ou une charge ? ③ Le groupe et les relations font-ils la force de l’organisation ?**',
      cours: [
        {
          h: 'L’organisation, un collectif humain',
          blocks: [
            { t: 'p', c: 'Une **organisation** (entreprise, association, administration) n’est pas seulement un organigramme, des machines ou des capitaux : c’est d’abord un **ensemble d’êtres humains** qui coopèrent pour atteindre un **but commun**. Sans les femmes et les hommes qui la composent, une organisation ne produit rien.' },
            { t: 'p', c: 'Or, chaque être humain est **unique** et **complexe** : il arrive avec une histoire, une personnalité, des émotions, des compétences et des attentes. Le management doit donc **connaître et comprendre l’individu** pour transformer ce potentiel en **performance collective**.' },
            { t: 'p', c: 'Tout le thème répond à trois grandes **questions de gestion** :' },
            { t: 'list', c: [
              '**① Comment un individu devient-il acteur** au sein d’une organisation ? (personnalité, perception, communication, statut et rôle)',
              '**② L’activité humaine est-elle une ressource ou une charge** pour l’organisation ? (compétences, qualification, rémunération, coût, motivation)',
              '**③ Comment les relations et le groupe** contribuent-ils à la dynamique de l’organisation ? (cohésion, conflits, coopération, leadership)',
            ] },
            { t: 'tip', c: 'Fil directeur à garder en tête tout le thème : on part de l’**individu** (ce qu’il est), on le voit devenir **acteur** (ce qu’il fait et les relations qu’il noue), pour comprendre comment il crée de la **valeur** au sein d’un **collectif**.' },
          ],
        },
        {
          h: 'La personnalité de l’individu',
          blocks: [
            { t: 'p', c: 'La **personnalité** est l’ensemble **stable et propre** des manières de penser, de ressentir et d’agir qui caractérisent un individu et le distinguent des autres. Elle explique pourquoi, face à une même situation, deux personnes réagissent différemment.' },
            { t: 'p', c: 'Elle se compose de plusieurs éléments :' },
            { t: 'table', head: ['Élément', 'Définition', 'Exemple'], rows: [
              ['Traits de caractère', 'Des dispositions durables', 'Être calme, sociable, rigoureux, anxieux'],
              ['Tempérament', 'La part liée au « naturel », à la sensibilité', 'Être plutôt réservé ou plutôt expansif'],
              ['Valeurs', 'Ce qui compte pour la personne, ses priorités', 'L’honnêteté, la réussite, la solidarité, la sécurité'],
              ['Besoins', 'Ce que la personne cherche à satisfaire', 'Être reconnu, être autonome, appartenir à un groupe'],
            ] },
            { t: 'p', c: 'La personnalité **se construit tout au long de la vie** par la **socialisation** : la **socialisation primaire** (famille, école, dans l’enfance) puis la **socialisation secondaire** (travail, groupes fréquentés, expériences à l’âge adulte). On n’a donc pas une personnalité « figée » : le milieu professionnel lui-même façonne l’individu.' },
            { t: 'warning', c: 'Connaître la personnalité des collaborateurs n’est **pas** un moyen de les « ranger dans des cases » définitives. C’est un outil pour mieux **communiquer**, **confier les bonnes missions** et **anticiper les tensions**. Réduire quelqu’un à une étiquette est une erreur de management.' },
            { t: 'example', h: 'Personnalité et poste de travail', c: 'Pour un poste d’accueil, un manager recherche une personnalité **sociable, patiente et à l’écoute**. Pour un poste de contrôle qualité, il privilégie la **rigueur** et le sens du détail. \n→ Le même individu très sociable mais peu minutieux sera excellent à l’accueil et en difficulté au contrôle : il n’y a pas de « bonne » ou de « mauvaise » personnalité en soi, mais une adéquation avec le poste.' },
          ],
        },
        {
          h: 'La perception : un filtre subjectif',
          blocks: [
            { t: 'p', c: 'La **perception** est le processus par lequel un individu **sélectionne, organise et interprète** les informations qu’il reçoit de son environnement pour lui donner un sens. C’est notre « fenêtre » sur la réalité — mais une fenêtre **déformante**.' },
            { t: 'p', c: 'La perception se déroule en trois étapes :' },
            { t: 'list', c: [
              '**Sélection** : on ne retient qu’une **partie** des informations (on ne peut pas tout traiter) ;',
              '**Organisation** : le cerveau **classe** et relie ces informations entre elles ;',
              '**Interprétation** : on leur donne un **sens**, en fonction de qui l’on est.',
            ] },
            { t: 'p', c: 'La perception est donc **subjective** : elle dépend de facteurs propres à la personne (**expériences passées, valeurs, humeur, attentes**), au message (**intensité, nouveauté**) et au **contexte**. Deux individus vivant exactement la même scène en gardent des souvenirs différents.' },
            { t: 'example', h: 'Même fait, deux perceptions', c: 'Un manager réunit son équipe un vendredi soir sans prévenir. \n→ Un salarié le **perçoit** comme une marque de considération (« il nous fait confiance pour régler un problème important »). \n→ Un autre le **perçoit** comme un manque de respect (« il empiète sur ma vie personnelle »). \nLe fait est identique ; la **perception** — donc la réaction — diffère selon les valeurs de chacun.' },
          ],
        },
        {
          h: 'Les biais de perception',
          blocks: [
            { t: 'p', c: 'Parce qu’elle est subjective, la perception produit des **biais** : des **erreurs de jugement** systématiques dont il faut se méfier, surtout en management (recrutement, évaluation, relation client).' },
            { t: 'table', head: ['Biais', 'Mécanisme'], rows: [
              ['Stéréotype', 'Attribuer à une personne les caractéristiques supposées de son groupe (âge, origine, sexe…)'],
              ['Effet de halo', 'Se fier à un seul trait (une bonne présentation) pour juger toute la personne'],
              ['Première impression', 'Se forger un avis dès les premières secondes et ne plus en changer'],
              ['Projection', 'Prêter à l’autre ses propres pensées ou intentions'],
              ['Effet de contexte', 'Juger différemment selon l’ambiance ou l’ordre des informations'],
            ] },
            { t: 'p', c: 'Ces biais peuvent conduire à des **discriminations** (à l’embauche par exemple) et à des **injustices**. Les connaître permet de **prendre du recul** et d’objectiver ses décisions (grilles d’évaluation, plusieurs évaluateurs, faits plutôt qu’impressions).' },
            { t: 'warning', c: 'Un stéréotype n’est pas neutre : « les jeunes ne sont pas fiables », « les seniors ne savent pas utiliser le numérique »… sont des jugements **faux et discriminatoires** qui privent l’organisation de talents et sont **interdits par la loi**.' },
          ],
        },
        {
          h: 'Les émotions et le stress au travail',
          blocks: [
            { t: 'p', c: 'Une **émotion** est une réaction **courte et intense** face à un événement (joie, peur, colère, tristesse, surprise, dégoût). Contrairement à ce qu’on pense parfois, les émotions ne s’arrêtent pas à la porte de l’entreprise : elles **influencent directement** la concentration, les relations et les décisions.' },
            { t: 'list', c: [
              'Des émotions **positives** (satisfaction, enthousiasme) favorisent l’engagement, la créativité et la coopération ;',
              'des émotions **négatives** (stress, colère, peur) peuvent dégrader la communication, augmenter les erreurs et l’absentéisme.',
            ] },
            { t: 'p', c: 'Le **stress** est une réaction de l’organisme face à une pression perçue. Un stress **ponctuel** peut être mobilisateur ; un stress **chronique** (surcharge, manque de reconnaissance, conflits) nuit à la santé et à la performance : on parle de **risques psychosociaux (RPS)**.' },
            { t: 'p', c: 'L’**intelligence émotionnelle** est la capacité à **identifier et gérer** ses propres émotions et celles des autres. C’est aujourd’hui une compétence très recherchée, en particulier chez les managers.' },
            { t: 'example', h: 'Le coût des émotions négatives', c: 'Un salarié régulièrement stressé par des délais intenables communique mal, s’isole et fait des erreurs. \n→ Résultat : baisse de qualité, tensions dans l’équipe, arrêt maladie. \nComprendre et **réguler les émotions** (charge réaliste, écoute, reconnaissance) n’est donc pas « du confort » : c’est un enjeu de **performance**.' },
          ],
        },
        {
          h: 'Attitudes et comportements',
          blocks: [
            { t: 'p', c: 'L’**attitude** est une **disposition intérieure** stable : une manière de penser, de juger ou de se préparer à agir face à quelque chose ou quelqu’un (« je trouve cette tâche intéressante »). Elle ne se voit pas directement.' },
            { t: 'p', c: 'Le **comportement** est l’**action observable** qui découle de l’attitude (« je m’implique dans la tâche, j’arrive en avance »). C’est ce que l’on peut réellement **constater**.' },
            { t: 'table', head: ['', 'Attitude', 'Comportement'], rows: [
              ['Nature', 'Intérieure, cachée', 'Extérieure, observable'],
              ['Exemple', 'Aimer le travail en équipe', 'Proposer son aide à un collègue'],
              ['Se mesure par', 'Ce que la personne ressent / pense', 'Ce que la personne fait'],
            ] },
            { t: 'p', c: 'Attitude et comportement sont **liés** mais pas identiques : une même attitude peut donner des comportements différents selon la situation (on peut aimer une tâche mais mal la réaliser un jour de fatigue). Parfois, il y a même une **contradiction** entre ce que l’on pense et ce que l’on fait.' },
            { t: 'warning', c: 'Erreur classique en devoir : écrire « attitude » à la place de « comportement ». Retiens : **attitude = intérieur** (opinion, intention) ; **comportement = extérieur** (action visible).' },
          ],
        },
        {
          h: 'De l’individu à l’acteur : statut et rôle',
          blocks: [
            { t: 'p', c: 'Un individu ne reste pas passif : dès qu’il **agit, communique et interagit** dans l’organisation, il en devient un **acteur** — une personne qui **influence** le fonctionnement de l’organisation autant qu’elle en est influencée. On passe ainsi « de l’individu à l’acteur ».' },
            { t: 'table', head: ['Notion', 'Définition', 'Exemple'], rows: [
              ['Statut', 'La **position** occupée dans l’organisation (fonction, place hiérarchique, reconnaissance)', 'Chef de rayon, comptable, apprenti, délégué du personnel'],
              ['Rôle', 'L’ensemble des **comportements attendus** de celui qui occupe ce statut', 'On attend d’un chef de rayon qu’il anime, organise et contrôle son équipe'],
            ] },
            { t: 'p', c: 'À chaque **statut** correspondent un ou plusieurs **rôles**. Un même individu occupe souvent **plusieurs statuts** en même temps (salarié, tuteur d’un apprenti, représentant syndical, membre d’un club sportif de l’entreprise…) et joue donc **plusieurs rôles**.' },
            { t: 'p', c: 'Ces rôles peuvent entrer en **conflit** : un chef d’équipe apprécié de ses collègues (rôle de « copain ») doit aussi les évaluer et parfois les sanctionner (rôle de « responsable »). C’est un **conflit de rôles**, source de tension pour l’individu.' },
            { t: 'tip', c: 'L’individu devient acteur par les **compétences** qu’il mobilise et par les **relations** (formelles et informelles) qu’il noue. La performance de l’organisation dépend donc largement de la **qualité des relations humaines**, pas seulement des procédures écrites.' },
          ],
        },
        {
          h: 'La communication interpersonnelle : le schéma',
          blocks: [
            { t: 'p', c: 'La **communication** est l’**échange d’informations** entre des personnes. C’est elle qui fait « tenir » le collectif : sans communication, pas de coordination ni de relations. La **communication interpersonnelle** (entre deux individus) obéit à un **schéma** que l’on doit savoir décrire et repérer sur un cas.' },
            { t: 'table', head: ['Élément', 'Rôle'], rows: [
              ['Émetteur', 'Celui qui **envoie** le message (l’expéditeur)'],
              ['Récepteur', 'Celui qui **reçoit** le message (le destinataire)'],
              ['Message', 'L’**information** transmise (le contenu)'],
              ['Code', 'Le système de signes commun : langue, symboles, jargon'],
              ['Canal', 'Le **support** : voix, téléphone, mail, affichage, visioconférence'],
              ['Feedback', 'La **rétroaction** : la réponse du récepteur, qui devient à son tour émetteur'],
              ['Référent', 'Le **sujet**, le contexte de l’échange'],
              ['Bruit', 'Tout ce qui **gêne** ou déforme le message (bruit réel, stress, malentendu)'],
            ] },
            { t: 'p', c: 'Le **feedback** est essentiel : sans retour du récepteur, l’émetteur ne sait pas si son message a été **compris**. Une communication réussie est une communication où le message **reçu** correspond au message **voulu**.' },
            { t: 'warning', c: 'Communiquer ≠ informer. **Informer**, c’est envoyer un message dans un seul sens (une note de service). **Communiquer**, c’est un **échange** avec du feedback : le récepteur réagit et l’émetteur ajuste.' },
          ],
        },
        {
          h: 'Les registres : verbal, non verbal, para-verbal',
          blocks: [
            { t: 'p', c: 'Quand on communique, on utilise **trois registres en même temps**, et le message perçu dépend surtout de leur **cohérence**.' },
            { t: 'table', head: ['Registre', 'De quoi s’agit-il ?', 'Exemples'], rows: [
              ['Verbal', 'Les **mots**, ce que l’on dit ou écrit', 'Le vocabulaire, les phrases, le message écrit'],
              ['Non verbal', 'Le **corps**', 'Gestes, regard, posture, expressions du visage, tenue, distance'],
              ['Para-verbal', 'La **voix**', 'Ton, débit, volume, intonation, silences'],
            ] },
            { t: 'p', c: 'La **proxémie** (la distance physique que l’on met entre soi et l’autre) fait partie du non-verbal : trop proche, on met mal à l’aise ; trop loin, on paraît distant.' },
            { t: 'p', c: 'Le non-verbal et le para-verbal représentent une **très grande part** du message perçu. Quand les mots disent une chose et le corps une autre, c’est le **non-verbal** qui l’emporte dans la perception du récepteur.' },
            { t: 'example', h: 'Quand le non-verbal contredit les mots', c: 'Un manager dit « je vous fais totalement confiance » (verbal), mais regarde sa montre, croise les bras (non-verbal) et parle d’un ton sec (para-verbal). \n→ Le récepteur retient surtout le **non-verbal** et le **para-verbal** : il perçoit de la méfiance. Le message réellement reçu est l’inverse du message voulu.' },
          ],
        },
        {
          h: 'Les obstacles à la communication et l’écoute active',
          blocks: [
            { t: 'p', c: 'De nombreux **obstacles (« bruits »)** peuvent perturber la communication et créer des **malentendus** :' },
            { t: 'list', c: [
              'des bruits **matériels** : un environnement bruyant, une mauvaise connexion ;',
              'des bruits **liés au code** : un jargon incompris, une langue mal maîtrisée ;',
              'des bruits **psychologiques** : le stress, les émotions, les préjugés, la fatigue ;',
              'des bruits **liés au canal** : un mail ambigu, sans le ton de la voix ni le visage.',
            ] },
            { t: 'p', c: 'Pour communiquer efficacement, on pratique l’**écoute active** : montrer de l’attention, **reformuler** (« si je comprends bien, tu veux dire que… »), **questionner**, ne pas couper la parole, tenir compte du non-verbal de l’autre. L’écoute active **réduit les malentendus** et renforce la relation.' },
            { t: 'tip', c: 'Méthode pour limiter les bruits : choisir le **bon canal** (un sujet sensible se traite en face-à-face, pas par mail), un **code partagé** (éviter le jargon), un **moment adapté**, et **vérifier la compréhension** par le feedback.' },
          ],
        },
        {
          h: 'Communication formelle, informelle et réseaux',
          blocks: [
            { t: 'p', c: 'Dans une organisation, la communication circule de deux façons **complémentaires** :' },
            { t: 'table', head: ['Communication formelle', 'Communication informelle'], rows: [
              ['Officielle, **organisée** par l’entreprise', 'Spontanée, **non prévue**'],
              ['Réunions, notes de service, mails pros, affichage', 'Discussions à la pause, messages entre collègues, « bruits de couloir »'],
              ['Suit les **canaux hiérarchiques**', 'Suit les **affinités** et les réseaux personnels'],
              ['Assure la **coordination** et la traçabilité', 'Crée du **lien**, fait circuler vite l’information, renforce la cohésion'],
            ] },
            { t: 'p', c: 'La communication formelle a plusieurs **sens** : **descendante** (de la direction vers les salariés : consignes), **ascendante** (des salariés vers la direction : remontées, propositions) et **transversale** (entre services de même niveau).' },
            { t: 'p', c: 'On classe aussi la communication selon le **nombre de personnes** : **interpersonnelle** (2 personnes), de **groupe** (une équipe, une réunion) ou de **masse** (vers un large public, ex. une campagne interne).' },
            { t: 'p', c: 'Enfin, les échanges dessinent des **réseaux de communication** : **centralisés** (tout passe par un chef — rapide mais dépendant d’une seule personne, peu motivant) ou **décentralisés** (chacun échange avec chacun — plus lent mais plus riche, plus motivant).' },
            { t: 'warning', c: 'La communication informelle n’est **pas inutile** : elle fait circuler énormément d’informations et soude le groupe. Mais mal maîtrisée, elle diffuse aussi des **rumeurs** qui déforment les messages : le manager a intérêt à bien informer pour éviter que la rumeur ne remplace l’information officielle.' },
          ],
        },
        {
          h: 'L’activité de travail : prescrit et réel',
          blocks: [
            { t: 'p', c: 'L’**activité de travail** est l’ensemble des **tâches** réalisées par un individu pour l’organisation, en mobilisant ses compétences. On distingue deux niveaux essentiels :' },
            { t: 'table', head: ['Travail prescrit', 'Travail réel'], rows: [
              ['Ce qui est **demandé** : la consigne, la procédure officielle, la fiche de poste', 'Ce que la personne **fait vraiment** pour atteindre le résultat'],
              ['Défini à l’avance par l’organisation', 'S’adapte aux imprévus, aux clients, aux pannes'],
              ['« Ce qu’il faudrait faire »', '« Ce qu’on fait réellement »'],
            ] },
            { t: 'p', c: 'Il existe presque toujours un **écart** entre le prescrit et le réel : la réalité ne se laisse pas enfermer dans une procédure. Cet écart n’est pas un défaut — au contraire, il révèle l’**intelligence**, l’**expérience** et les **compétences** du salarié, qui bricole, ajuste et invente des solutions.' },
            { t: 'example', h: 'L’écart prescrit / réel', c: 'La procédure prescrit à un vendeur de suivre un script de vente précis. \n→ Face à un client pressé, le vendeur **raccourcit** le script et va à l’essentiel ; face à un client hésitant, il **développe** et rassure. \nCe **travail réel**, adapté à chaque situation, fait la différence — et n’apparaît nulle part dans la fiche de poste.' },
          ],
        },
        {
          h: 'Les compétences : savoirs, savoir-faire, savoir-être',
          blocks: [
            { t: 'p', c: 'Une **compétence** est la capacité à **combiner et mobiliser des ressources** (connaissances, expérience, moyens) pour réaliser une tâche **avec succès** dans une situation donnée. Elle ne se voit vraiment qu’**en action**.' },
            { t: 'p', c: 'On la décompose classiquement en **trois savoirs** :' },
            { t: 'table', head: ['Composante', 'Signification', 'Exemple (un vendeur)'], rows: [
              ['**Savoirs**', 'Les **connaissances** théoriques', 'Connaître les produits, les prix, la réglementation'],
              ['**Savoir-faire**', 'La **pratique**, les gestes techniques, la méthode', 'Utiliser le logiciel de caisse, présenter un produit, encaisser'],
              ['**Savoir-être**', 'Le **comportement**, les attitudes relationnelles', 'Être souriant, patient, à l’écoute, ponctuel'],
            ] },
            { t: 'p', c: 'À ces trois savoirs on ajoute souvent le **potentiel** (les compétences qu’un individu **pourrait** développer) et l’**expérience** (les compétences acquises par la pratique et le temps).' },
            { t: 'p', c: 'Les compétences **se construisent** : par la **formation** (initiale et continue), par l’**expérience** de terrain, et par l’**organisation elle-même** (tutorat, échanges entre collègues, missions confiées). Elles peuvent aussi se **perdre** si elles ne sont pas entretenues.' },
            { t: 'warning', c: 'Une compétence n’est pas une simple connaissance : **connaître** le code de la route (savoir) ne rend pas **capable de conduire** en ville (savoir-faire + savoir-être). C’est la **mise en action** qui fait la compétence.' },
          ],
        },
        {
          h: 'De la compétence individuelle à la compétence collective',
          blocks: [
            { t: 'p', c: 'Une organisation ne se contente pas d’additionner des compétences individuelles. Quand des individus **travaillent ensemble**, échangent et se coordonnent, il émerge une **compétence collective** : l’équipe devient capable de réaliser ce qu’aucun de ses membres ne pourrait faire seul.' },
            { t: 'p', c: 'La compétence collective repose sur :' },
            { t: 'list', c: [
              'un **langage commun** et une bonne **communication** ;',
              'la **coordination** et l’**entraide** entre les membres ;',
              'le **partage des connaissances** (chacun apprend des autres) ;',
              'une **mémoire collective** (les façons de faire de l’équipe).',
            ] },
            { t: 'p', c: 'On dit que « **le tout est supérieur à la somme des parties** » : c’est l’effet de **synergie**. Développer la compétence collective est un enjeu majeur pour l’organisation, car elle est **difficile à copier** par les concurrents.' },
            { t: 'example', h: 'La compétence collective', c: 'Dans un restaurant, le cuisinier, le serveur et le responsable de salle ont chacun leurs compétences individuelles. \n→ C’est leur **coordination** (communication, anticipation, coup de feu géré ensemble) qui crée la **compétence collective** : servir 80 couverts en une heure sans erreur. \nRetirez la coordination et chacun, pris isolément, n’y arriverait pas.' },
          ],
        },
        {
          h: 'La qualification et sa reconnaissance',
          blocks: [
            { t: 'p', c: 'La **qualification** est la **reconnaissance officielle** du niveau de compétences d’un individu. Alors que la compétence est ce que l’on **sait faire** (réel), la qualification est la **reconnaissance** de ce niveau par l’organisation et la société.' },
            { t: 'p', c: 'Elle repose sur plusieurs éléments :' },
            { t: 'list', c: [
              'les **diplômes** et **certifications** obtenus ;',
              'l’**expérience professionnelle** acquise ;',
              'la **classification** prévue par la **convention collective** (grille qui situe chaque poste et fixe un **salaire minimum**).',
            ] },
            { t: 'p', c: 'La qualification **situe l’individu dans l’organigramme** (sa place dans la hiérarchie) et sert de base à sa **rémunération**. La **VAE** (validation des acquis de l’expérience) permet même de faire reconnaître par un diplôme des compétences acquises sans formation initiale.' },
            { t: 'warning', c: 'Ne confonds pas **compétence** et **qualification** : on peut être très **compétent sans être qualifié** (un autodidacte doué mais sans diplôme), ou **qualifié sans être compétent** dans une situation précise (un diplômé qui débute et manque de pratique). Compétence = réel ; qualification = reconnaissance.' },
          ],
        },
        {
          h: 'La rémunération et la rétribution globale',
          blocks: [
            { t: 'p', c: 'En échange de son activité, l’individu reçoit une **contrepartie**. La **rémunération** en est la partie **financière**, mais la **rétribution** est bien plus large.' },
            { t: 'p', c: 'La **rémunération** se compose de plusieurs éléments :' },
            { t: 'table', head: ['Élément', 'Description'], rows: [
              ['Salaire de base', 'La partie **fixe**, prévue au contrat (souvent liée à la qualification)'],
              ['Primes / part variable', 'Liées à la **performance**, aux résultats, à l’ancienneté'],
              ['Périphériques', 'Mutuelle, tickets restaurant, **intéressement**, participation, avantages en nature'],
            ] },
            { t: 'p', c: 'La **rétribution** (ou rétribution globale) est **tout ce que l’individu retire de son travail** : la rémunération **plus** des éléments **non financiers** — la **reconnaissance**, les **perspectives de carrière**, la **formation**, l’**autonomie**, l’**ambiance** et les **conditions de travail**.' },
            { t: 'p', c: 'Un salarié compare en permanence sa **rétribution** (ce qu’il reçoit) à sa **contribution** (ce qu’il apporte) : c’est le **sentiment d’équité**. S’il se sent traité **équitablement** (par rapport à ses efforts et aux autres), il s’implique davantage ; sinon, il se démotive.' },
            { t: 'example', h: 'Rétribution et équité', c: 'Deux salariés font le même travail avec les mêmes résultats, mais l’un est mieux payé sans raison apparente. \n→ Le second ressent un **sentiment d’injustice** (iniquité) : sa motivation baisse, même si son salaire n’a pas changé. \nLa **perception d’équité** compte parfois autant que le montant lui-même.' },
          ],
        },
        {
          h: 'L’activité humaine : ressource ou charge ?',
          blocks: [
            { t: 'p', c: 'C’est la **deuxième grande question** du thème. L’activité humaine peut être vue de deux façons opposées… qui sont en réalité **complémentaires**.' },
            { t: 'table', head: ['Le travail vu comme une CHARGE', 'Le travail vu comme une RESSOURCE'], rows: [
              ['Une **charge de personnel** à payer (coût du travail)', 'Un **capital humain**, source de valeur et de performance'],
              ['Vision **comptable**, à court terme', 'Vision **stratégique**, à long terme'],
              ['On cherche à **réduire** le coût', 'On cherche à **développer** et à fidéliser'],
            ] },
            { t: 'p', c: 'Le **coût du travail** ne se limite pas au salaire net : il comprend le salaire brut **plus** les **cotisations sociales** (part salariale et **part patronale**). C’est une **charge** importante et bien réelle pour l’organisation.' },
            { t: 'p', c: 'Mais dépenser pour les salariés est aussi un **investissement immatériel** : la **formation**, l’amélioration des **conditions de travail** et la **fidélisation** développent les compétences et la motivation, donc la **performance future**. La **GPEC** (gestion prévisionnelle des emplois et des compétences) sert à **anticiper** les besoins futurs en compétences.' },
            { t: 'example', h: 'Charge ou investissement ?', c: 'Une entreprise dépense 3 000 € pour former un salarié à un nouveau logiciel. \n→ **À court terme**, c’est une **charge** (coût de la formation + temps non travaillé). \n→ **À long terme**, c’est un **investissement** : le salarié est plus efficace, fait moins d’erreurs, forme ses collègues et reste dans l’entreprise. \nConsidérer l’humain comme une simple charge à réduire est souvent **contre-productif**.' },
          ],
        },
        {
          h: 'La motivation et ses théories (Maslow, Herzberg)',
          blocks: [
            { t: 'p', c: 'La **motivation** est ce qui **pousse un individu à agir et à s’investir** dans son travail, et à y **persévérer**. Un salarié motivé est plus **performant**, plus **fidèle** et de meilleure humeur. Deux grandes théories sont au programme.' },
            { t: 'p', c: '**Abraham Maslow** classe les besoins humains dans une **pyramide** : on ne cherche à satisfaire un besoin **supérieur** qu’une fois les besoins **inférieurs** globalement comblés.' },
            { t: 'table', head: ['Niveau (de la base au sommet)', 'Besoin', 'Au travail'], rows: [
              ['1. Physiologiques', 'Manger, dormir, vivre', 'Salaire suffisant, pauses, cantine'],
              ['2. Sécurité', 'Se protéger', 'CDI, sécurité de l’emploi, conditions sûres'],
              ['3. Appartenance', 'Faire partie d’un groupe', 'Bonne ambiance, esprit d’équipe, intégration'],
              ['4. Estime', 'Être reconnu, respecté', 'Reconnaissance, responsabilités, statut, titres'],
              ['5. Accomplissement', 'Se réaliser, se dépasser', 'Autonomie, projets, développement personnel'],
            ] },
            { t: 'p', c: '**Frederick Herzberg** distingue deux catégories de facteurs, ce qui complète Maslow :' },
            { t: 'list', c: [
              'les **facteurs d’hygiène** (salaire, conditions de travail, relations, sécurité) : s’ils sont **mauvais**, ils créent de l’**insatisfaction** ; mais s’ils sont bons, ils ne motivent pas vraiment — ils **évitent seulement le mécontentement** ;',
              'les **facteurs de motivation** (intérêt du travail, reconnaissance, responsabilités, évolution, accomplissement) : ce sont eux qui **motivent réellement** et durablement.',
            ] },
            { t: 'p', c: 'On distingue aussi la motivation **intrinsèque** (le plaisir de l’activité elle-même, l’intérêt de la tâche) et la motivation **extrinsèque** (les récompenses externes : salaire, prime, statut).' },
            { t: 'warning', c: 'Conséquence de Herzberg à bien comprendre : **augmenter le salaire** supprime l’insatisfaction mais **ne motive pas durablement**. La vraie motivation vient surtout de l’**intérêt du travail** et de la **reconnaissance**.' },
          ],
        },
        {
          h: 'Reconnaissance, implication et qualité de vie au travail',
          blocks: [
            { t: 'p', c: 'Au-delà des théories, plusieurs **leviers concrets** entretiennent la motivation au quotidien.' },
            { t: 'table', head: ['Notion', 'Définition'], rows: [
              ['Reconnaissance', 'Le fait de **valoriser** l’individu et son travail (remerciements, feedback positif, promotion)'],
              ['Implication', 'Le **degré d’attachement** et d’engagement du salarié envers son organisation'],
              ['Satisfaction', 'Le sentiment de **contentement** tiré du travail et de ses conditions'],
              ['QVT', 'La **qualité de vie au travail** : conditions, ambiance, équilibre vie pro / perso, sens'],
            ] },
            { t: 'p', c: 'Un salarié **reconnu** et **impliqué** est plus productif, plus créatif et **reste** dans l’entreprise (moins de turnover). À l’inverse, le manque de reconnaissance est l’une des premières causes de **démotivation** et de **départ**.' },
            { t: 'p', c: 'Améliorer la **QVT** (télétravail, aménagement des horaires, écoute, prévention des risques psychosociaux, sens donné au travail) est devenu un enjeu stratégique : c’est bon pour les salariés **et** pour la performance.' },
            { t: 'tip', c: 'La reconnaissance ne coûte pas forcément de l’argent : un **merci sincère**, un **feedback constructif**, de l’**autonomie** ou une **responsabilité** confiée sont des marques de reconnaissance puissantes (facteurs de motivation au sens de Herzberg).' },
          ],
        },
        {
          h: 'Le groupe et sa dynamique',
          blocks: [
            { t: 'p', c: 'Un **groupe** est un ensemble d’individus **en interaction**, qui poursuivent un **but commun** et partagent un **sentiment d’appartenance**. On travaille rarement seul : l’organisation est faite de multiples groupes.' },
            { t: 'table', head: ['Groupe formel', 'Groupe informel'], rows: [
              ['**Créé par l’organisation**', 'Né **spontanément** des affinités'],
              ['Un service, une équipe projet, un comité', 'Des collègues qui déjeunent ensemble, un groupe d’amis au travail'],
              ['A un objectif officiel et des règles écrites', 'A des règles implicites, fondées sur la sympathie'],
            ] },
            { t: 'p', c: 'La vie du groupe crée une **dynamique de groupe** : des **relations**, des **rôles** (le meneur, le médiateur, l’expert…), des **normes** (règles de fonctionnement, souvent implicites) et une **cohésion** — le **sentiment d’appartenance** qui **soude** l’équipe.' },
            { t: 'p', c: 'Une forte **cohésion** améliore en général la **performance**, l’entraide et le bien-être. Mais une cohésion trop forte peut aussi pousser au **conformisme** (ne plus oser exprimer un avis différent).' },
            { t: 'example', h: 'La force du groupe', c: 'Une équipe soudée où chacun connaît son rôle et se fait confiance encaisse mieux les coups durs (surcharge, imprévu) qu’un ensemble d’individus talentueux mais isolés. \n→ La **cohésion** transforme un groupe en véritable **équipe** : c’est un atout que le management cherche à construire (intégration, projets communs, moments d’échange).' },
          ],
        },
        {
          h: 'Conflits, coopération et décision de groupe',
          blocks: [
            { t: 'p', c: 'La vie de groupe fait naître des **conflits**. Un conflit est une **opposition** entre des personnes ou des groupes. Il peut porter sur les **objectifs**, les **méthodes**, les **personnes**, les **ressources** ou les **valeurs**.' },
            { t: 'p', c: 'Le conflit **n’est pas forcément négatif** :' },
            { t: 'table', head: ['Conflit mal géré', 'Conflit bien géré'], rows: [
              ['Dégrade l’ambiance et la performance', 'Fait **émerger des idées**, clarifie les désaccords'],
              ['Blocage, démotivation, départs', 'Débouche sur une **solution nouvelle** ou un compromis'],
            ] },
            { t: 'p', c: 'Il existe plusieurs **modes de résolution** :' },
            { t: 'list', c: [
              '**l’évitement** : on ignore le conflit (il ressurgit souvent plus tard) ;',
              '**l’imposition** (rapport de force) : l’un gagne, l’autre perd ;',
              '**le compromis** : chacun fait une concession ;',
              '**la coopération** : on cherche **ensemble** une solution qui satisfait tout le monde — la plus **constructive** (gagnant-gagnant) ;',
              '**le recours à un tiers** : médiation, arbitrage.',
            ] },
            { t: 'p', c: 'Le groupe doit aussi **décider**. La **décision de groupe** est souvent **plus riche** qu’une décision individuelle (plusieurs points de vue, meilleure adhésion), mais elle est plus **lente** et exposée au **conformisme** (chacun se rallie à l’avis dominant, on n’ose plus contredire).' },
            { t: 'tip', c: 'Un bon manager ne cherche pas à **supprimer** tous les conflits (impossible et parfois nuisible), mais à les **réguler** et à favoriser la **coopération** pour en tirer du positif.' },
          ],
        },
        {
          h: 'Le leadership et les styles de direction',
          blocks: [
            { t: 'p', c: 'Un groupe est souvent animé par un **leadership** : l’**influence** exercée par une personne sur le groupe. Le **leader** est celui dont l’influence est **reconnue** par les membres — ce n’est **pas toujours le chef officiel** ! On peut être chef sans être leader, et leader sans être chef.' },
            { t: 'p', c: 'Le psychologue **Kurt Lewin** distingue **trois styles** de leadership :' },
            { t: 'table', head: ['Style', 'Fonctionnement', 'Effets'], rows: [
              ['Autoritaire (directif)', 'Le leader **décide seul** et donne des ordres', 'Efficace dans l’urgence, mais **démotivant** sur la durée'],
              ['Démocratique (participatif)', 'Le leader **associe** le groupe aux décisions', 'Le plus favorable à la **motivation** et à la **cohésion**'],
              ['Laisser-faire (délégatif)', 'Le leader laisse une **grande autonomie**', 'Efficace avec une équipe **experte**, risqué (flou) sinon'],
            ] },
            { t: 'p', c: 'Il n’y a pas **un** bon style dans l’absolu : le style efficace dépend de la **situation**, de l’**urgence** et de la **maturité** de l’équipe. Un bon manager sait **adapter** son style (on parle de **management situationnel**).' },
            { t: 'tip', c: 'Bilan du thème : l’**individu** (personnalité, perception, émotions) **devient acteur** en communiquant, en mobilisant ses **compétences** et en nouant des **relations** au sein d’un **groupe**. Bien managée (motivation, reconnaissance, cohésion, gestion des conflits, leadership adapté), l’activité humaine est la **première ressource** de l’organisation.' },
          ],
        },
      ],
      essentiel: [
        '**Individu** = personnalité + **perception** (subjective, sélective) + **émotions** ; l’**attitude** (intérieure) ≠ le **comportement** (observable).',
        'L’individu devient **acteur** : il agit, communique, interagit. **Statut** = position occupée ; **rôle** = comportements attendus.',
        '**Communication interpersonnelle** : émetteur, message, code, canal, récepteur, **feedback**, bruits ; registres **verbal / non verbal / para-verbal** ; **écoute active**.',
        'Communication **formelle** (officielle, coordination) vs **informelle** (spontanée, lien) ; interpersonnelle / de groupe / de masse ; **réseaux**.',
        '**Compétence** = **savoirs** + **savoir-faire** + **savoir-être** ; travail **prescrit** ≠ **réel** ; les compétences partagées créent une **compétence collective**.',
        '**Qualification** = reconnaissance officielle (diplôme, expérience, classification) ≠ compétence (savoir-faire réel).',
        '**Rétribution** = **rémunération** (salaire + primes + périphériques) **+** reconnaissance, carrière, conditions ; l’**équité** motive.',
        'Le travail est à la fois une **charge** (coût du travail : salaires + cotisations) et une **ressource** (capital humain, **investissement** en formation, GPEC).',
        '**Motivation** : **Maslow** (pyramide des besoins), **Herzberg** (facteurs d’hygiène ≠ facteurs de motivation) ; reconnaissance, implication, QVT.',
        '**Groupe** (formel/informel) : **dynamique**, **cohésion**, **normes** ; **conflit** (constructif si bien géré), **coopération**, **décision de groupe** ; **leadership** (Lewin : autoritaire / démocratique / laisser-faire).',
      ],
      resources: [
        { kind: 'video', label: 'De l’individu à l’acteur — le thème en entier', note: 'Vidéos — recherche YouTube', url: yt('sciences de gestion de l individu à l acteur première STMG') },
        { kind: 'video', label: 'Compétences, qualification, motivation', note: 'Vidéos — recherche YouTube', url: yt('compétence qualification motivation Maslow Herzberg première STMG sciences de gestion') },
        { kind: 'video', label: 'Communication & dynamique de groupe', note: 'Vidéos — recherche YouTube', url: yt('communication formelle informelle dynamique de groupe cohésion conflit première STMG') },
      ],
      games: [
        {
          id: 'p1-sgn-t1-qcm',
          type: 'qcm',
          title: 'QCM — De l’individu à l’acteur',
          icon: '❓',
          questions: [
            { q: 'La **perception** d’une situation est…', choices: ['subjective et sélective (propre à chacun)', 'toujours identique pour tous', 'une donnée comptable', 'un contrat'], answer: 0, explain: 'La perception sélectionne et interprète : deux personnes perçoivent différemment un même événement.' },
            { q: 'Une **attitude** se distingue d’un **comportement** car…', choices: ['l’attitude est intérieure, le comportement est observable', 'ce sont des synonymes', 'l’attitude est une action, le comportement une opinion', 'seul le comportement existe'], answer: 0, explain: 'L’attitude est une disposition intérieure ; le comportement est l’action visible qui en découle.' },
            { q: 'Le **statut** d’un individu désigne…', choices: ['la position qu’il occupe dans l’organisation', 'les comportements attendus de lui', 'son salaire', 'sa personnalité'], answer: 0, explain: 'Statut = position occupée ; le rôle = comportements attendus de celui qui occupe ce statut.' },
            { q: 'Dans le schéma de la communication, la réponse du récepteur s’appelle…', choices: ['le feedback (rétroaction)', 'le canal', 'le code', 'le bruit'], answer: 0, explain: 'Le feedback est la rétroaction : le récepteur devient à son tour émetteur.' },
            { q: 'Le ton, le débit et le volume de la voix relèvent de la communication…', choices: ['para-verbale', 'verbale', 'non verbale', 'écrite'], answer: 0, explain: 'Para-verbal = la voix ; verbal = les mots ; non verbal = le corps (gestes, regard).' },
            { q: 'Une réunion hebdomadaire officielle relève de la communication…', choices: ['formelle', 'informelle', 'de masse', 'publicitaire'], answer: 0, explain: 'La communication formelle est officielle et organisée ; l’informelle est spontanée.' },
            { q: 'La **compétence** d’un individu combine…', choices: ['savoirs, savoir-faire et savoir-être', 'salaire, prime et statut', 'perception, émotion et humeur', 'offre, demande et prix'], answer: 0, explain: 'Compétence = connaissances (savoirs) + pratique (savoir-faire) + comportement (savoir-être).' },
            { q: 'Le **travail réel** désigne…', choices: ['ce que le salarié fait vraiment, en s’adaptant', 'la consigne officielle donnée', 'le salaire versé', 'l’organigramme'], answer: 0, explain: 'Travail prescrit = ce qui est demandé ; travail réel = ce qui est réellement fait.' },
            { q: 'La **qualification** se distingue de la compétence car elle est…', choices: ['la reconnaissance officielle (diplôme, classification)', 'le savoir-faire réel', 'une émotion', 'un canal de communication'], answer: 0, explain: 'On peut être compétent sans être qualifié : la qualification reconnaît officiellement le niveau.' },
            { q: 'La **rétribution** est plus large que la rémunération car elle inclut…', choices: ['la reconnaissance et les conditions de travail', 'seulement le salaire de base', 'uniquement les primes', 'les cotisations sociales'], answer: 0, explain: 'Rétribution = rémunération (argent) + éléments non financiers (reconnaissance, carrière, ambiance).' },
            { q: 'Considérer la formation comme un **investissement** signifie…', choices: ['qu’elle développe des compétences utiles à long terme', 'qu’il faut la supprimer pour réduire les coûts', 'qu’elle ne sert à rien', 'qu’elle est une cotisation'], answer: 0, explain: 'À court terme c’est une charge, mais à long terme un investissement immatériel (capital humain).' },
            { q: 'Selon **Herzberg**, augmenter le salaire…', choices: ['évite l’insatisfaction mais ne motive pas durablement', 'suffit toujours à motiver', 'démotive systématiquement', 'n’a aucun effet'], answer: 0, explain: 'Le salaire est un facteur d’hygiène ; la vraie motivation vient de l’intérêt du travail et de la reconnaissance.' },
            { q: 'À la base de la **pyramide de Maslow** se trouvent les besoins…', choices: ['physiologiques', 'd’estime', 'd’accomplissement', 'd’appartenance'], answer: 0, explain: 'Ordre : physiologiques → sécurité → appartenance → estime → accomplissement.' },
            { q: 'Le **sentiment d’appartenance** qui soude une équipe s’appelle…', choices: ['la cohésion', 'la qualification', 'la perception', 'la marge'], answer: 0, explain: 'La cohésion renforce la coopération et la performance du groupe.' },
            { q: 'Le mode de résolution de conflit le plus **constructif** est…', choices: ['la coopération (solution qui satisfait tout le monde)', 'l’évitement', 'l’imposition par la force', 'le silence'], answer: 0, explain: 'La coopération cherche ensemble une solution gagnant-gagnant.' },
            { q: 'Selon **Lewin**, le style de leadership le plus favorable à la motivation est…', choices: ['démocratique (participatif)', 'autoritaire', 'laisser-faire', 'aucun'], answer: 0, explain: 'Le style démocratique associe le groupe aux décisions : meilleur pour la cohésion et la motivation.' },
          ],
        },
        {
          id: 'p1-sgn-t1-tri-comm',
          type: 'tri',
          title: 'Tri — Communication formelle ou informelle ?',
          icon: '🗂️',
          instruction: 'Classe chaque situation.',
          categories: [
            { id: 'form', label: 'Formelle' },
            { id: 'inf', label: 'Informelle' },
          ],
          items: [
            { text: 'Une note de service affichée', cat: 'form' },
            { text: 'Une discussion à la machine à café', cat: 'inf' },
            { text: 'Un mail professionnel de la direction', cat: 'form' },
            { text: 'Un « bruit de couloir » entre collègues', cat: 'inf' },
            { text: 'Une réunion d’équipe planifiée', cat: 'form' },
            { text: 'Un entretien annuel d’évaluation', cat: 'form' },
            { text: 'Un déjeuner improvisé entre services', cat: 'inf' },
          ],
        },
        {
          id: 'p1-sgn-t1-tri-comp',
          type: 'tri',
          title: 'Tri — Savoir, savoir-faire ou savoir-être ?',
          icon: '🗂️',
          instruction: 'Classe chaque élément de compétence.',
          categories: [
            { id: 'sav', label: 'Savoir' },
            { id: 'sf', label: 'Savoir-faire' },
            { id: 'se', label: 'Savoir-être' },
          ],
          items: [
            { text: 'Connaître la réglementation d’hygiène', cat: 'sav' },
            { text: 'Savoir utiliser le logiciel de caisse', cat: 'sf' },
            { text: 'Être souriant et à l’écoute du client', cat: 'se' },
            { text: 'Maîtriser les tables de conjugaison comptable (débit/crédit)', cat: 'sav' },
            { text: 'Rédiger une facture sans erreur', cat: 'sf' },
            { text: 'Rester calme face à un client mécontent', cat: 'se' },
          ],
        },
        {
          id: 'p1-sgn-t1-tri-rc',
          type: 'tri',
          title: 'Tri — Le travail : ressource ou charge ?',
          icon: '🗂️',
          instruction: 'Classe chaque affirmation selon la vision du travail.',
          categories: [
            { id: 'res', label: 'Ressource' },
            { id: 'cha', label: 'Charge' },
          ],
          items: [
            { text: 'Le capital humain, source de performance', cat: 'res' },
            { text: 'Les salaires et cotisations à payer', cat: 'cha' },
            { text: 'Un investissement en formation', cat: 'res' },
            { text: 'Un coût du travail à réduire', cat: 'cha' },
            { text: 'Des compétences à développer et fidéliser', cat: 'res' },
          ],
        },
        {
          id: 'p1-sgn-t1-ordre',
          type: 'ordre',
          title: 'Remise en ordre — La pyramide de Maslow',
          icon: '🔢',
          instruction: 'Classe les besoins de la base de la pyramide vers le sommet.',
          steps: ['Besoins physiologiques', 'Besoin de sécurité', 'Besoin d’appartenance', 'Besoin d’estime', 'Besoin d’accomplissement'],
          explain: 'Maslow : on cherche à satisfaire un besoin supérieur une fois les besoins inférieurs comblés.',
        },
        {
          id: 'p1-sgn-t1-assoc',
          type: 'association',
          title: 'Association — Notion ↔ définition',
          icon: '🔗',
          pairs: [
            { left: 'Statut', right: 'La position occupée dans l’organisation' },
            { left: 'Rôle', right: 'Les comportements attendus d’une personne' },
            { left: 'Feedback', right: 'La réponse du récepteur dans la communication' },
            { left: 'Qualification', right: 'La reconnaissance officielle des compétences' },
            { left: 'Compétence collective', right: 'Ce que l’équipe sait faire ensemble, au-delà des individus' },
            { left: 'Leadership', right: 'L’influence reconnue par le groupe' },
          ],
        },
        {
          id: 'p1-sgn-t1-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'La perception est objective : tout le monde voit la même chose.', answer: false, explain: 'Faux : la perception est subjective et sélective, filtrée par nos expériences.' },
            { statement: 'Le savoir-être fait partie des compétences.', answer: true, explain: 'Vrai : savoirs + savoir-faire + savoir-être.' },
            { statement: 'La communication informelle est inutile à l’organisation.', answer: false, explain: 'Faux : elle crée du lien et fait circuler des informations utiles (mais peut diffuser des rumeurs).' },
            { statement: 'On peut être compétent sans être qualifié.', answer: true, explain: 'Vrai : la qualification est la reconnaissance officielle, distincte du savoir-faire réel.' },
            { statement: 'Pour Herzberg, le salaire est le principal facteur de motivation durable.', answer: false, explain: 'Faux : c’est un facteur d’hygiène ; la motivation vient de l’intérêt du travail et de la reconnaissance.' },
            { statement: 'Un conflit bien géré peut être constructif pour le groupe.', answer: true, explain: 'Vrai : il peut clarifier les désaccords et faire émerger des solutions nouvelles.' },
            { statement: 'Le leader d’un groupe est toujours le chef officiel.', answer: false, explain: 'Faux : le leadership est une influence reconnue par le groupe, pas forcément le statut hiérarchique.' },
          ],
        },
        {
          id: 'p1-sgn-t1-trou',
          type: 'trou',
          title: 'Texte à trous — Vocabulaire du thème',
          icon: '✏️',
          questions: [
            { text: 'La ____ est le processus subjectif par lequel on interprète l’information.', answer: 'perception', explain: 'La perception est sélective et propre à chacun.' },
            { text: 'Le ____ est la position occupée dans l’organisation ; le rôle en est le comportement attendu.', answer: 'statut', explain: 'Statut = position ; rôle = comportements attendus.' },
            { text: 'Dans la communication, la réponse du récepteur s’appelle le ____.', answer: 'feedback', alt: ['retour', 'rétroaction'], explain: 'Le feedback (rétroaction) referme la boucle de communication.' },
            { text: 'La compétence combine savoirs, ____ et savoir-être.', answer: 'savoir-faire', explain: 'Savoirs (connaissances) + savoir-faire (pratique) + savoir-être (comportement).' },
            { text: 'La ____ est la reconnaissance officielle des compétences (diplôme, classification).', answer: 'qualification', explain: 'À distinguer de la compétence, qui est le savoir-faire réel.' },
            { text: 'Pour Herzberg, le salaire est un facteur d’____ : il évite l’insatisfaction sans motiver durablement.', answer: 'hygiène', explain: 'Les facteurs de motivation sont l’intérêt du travail et la reconnaissance.' },
          ],
        },
        {
          id: 'p1-sgn-t1-flash',
          type: 'flashcard',
          title: 'Flashcards — Toutes les notions',
          icon: '🃏',
          cards: [
            { front: 'Perception', back: 'Processus subjectif et sélectif par lequel on interprète l’information.' },
            { front: 'Attitude vs comportement', back: 'Attitude = disposition intérieure ; comportement = action observable.' },
            { front: 'Statut / rôle', back: 'Statut = position occupée ; rôle = comportements attendus.' },
            { front: 'Schéma de communication', back: 'Émetteur, message, code, canal, récepteur, feedback, bruits.' },
            { front: 'Verbal / non verbal / para-verbal', back: 'Les mots / le corps (gestes, regard) / la voix (ton, débit).' },
            { front: 'Communication formelle / informelle', back: 'Officielle et organisée / spontanée et non prévue.' },
            { front: 'Compétence', back: 'Savoirs + savoir-faire + savoir-être mobilisés au travail.' },
            { front: 'Travail prescrit / réel', back: 'Ce qui est demandé / ce qui est réellement fait en s’adaptant.' },
            { front: 'Qualification', back: 'Reconnaissance officielle des compétences (diplôme, expérience, classification).' },
            { front: 'Rétribution', back: 'Rémunération (salaire + primes + périphériques) + reconnaissance et conditions.' },
            { front: 'Ressource ou charge ?', back: 'Charge = coût du travail ; ressource = capital humain, investissement en formation.' },
            { front: 'Maslow', back: 'Pyramide : physiologiques → sécurité → appartenance → estime → accomplissement.' },
            { front: 'Herzberg', back: 'Facteurs d’hygiène (évitent l’insatisfaction) ≠ facteurs de motivation.' },
            { front: 'Cohésion', back: 'Sentiment d’appartenance qui soude le groupe.' },
            { front: 'Leadership (Lewin)', back: 'Autoritaire / démocratique / laisser-faire.' },
          ],
        },
      ],
    },
    {
      id: 'p1-sgn-t2',
      name: 'Thème 2 — Numérique et intelligence collective',
      short: 'Numérique & données',
      keywords: 'donnée information connaissance système d’information PGI ERP collaboratif intelligence collective sécurité RGPD',
      intro:
        'Les technologies numériques transforment l’**information** en véritable **ressource** stratégique et permettent de travailler collectivement mieux et plus vite.',
      cours: [
        {
          h: 'De la donnée à la connaissance',
          blocks: [
            { t: 'p', c: 'Le numérique manipule d’abord des **données**, qui deviennent utiles lorsqu’elles sont mises en sens. Trois niveaux à bien distinguer :' },
            { t: 'table', head: ['Niveau', 'Définition', 'Exemple'], rows: [
              ['**Donnée**', 'Élément **brut**, isolé, sans interprétation', '« 35 »'],
              ['**Information**', 'Donnée **mise en contexte**, qui a du sens', '« Le projet X a nécessité 35 heures »'],
              ['**Connaissance**', 'Information **assimilée et mobilisable** pour agir', '« Nos projets de ce type prennent ~35 h : il faut les facturer au moins tel montant »'],
            ] },
            { t: 'p', c: 'La **connaissance** appartient aux personnes et à l’organisation : c’est elle qui permet de **décider** et d’**agir**. Tout l’enjeu du numérique est de faire circuler la donnée jusqu’à la connaissance.' },
          ],
        },
        {
          h: 'Les caractéristiques et la qualité de l’information',
          blocks: [
            { t: 'p', c: 'Une information n’a de valeur que si elle est de **qualité**. On juge sa qualité selon plusieurs critères :' },
            { t: 'list', c: [
              '**exacte / fiable** : elle correspond à la réalité ;',
              '**pertinente** : elle est utile à la décision à prendre ;',
              '**disponible à temps** : une information juste mais trop tardive est inutile ;',
              '**complète** et **compréhensible** par son destinataire.',
            ] },
            { t: 'p', c: 'On distingue aussi l’information selon son **origine** (interne / externe) et sa **nature** (formelle, écrite / informelle, orale).' },
            { t: 'warning', c: 'Une information de **mauvaise qualité** (fausse, incomplète, en retard) conduit à de **mauvaises décisions**. « Garbage in, garbage out » : des données pourries en entrée donnent des résultats pourris en sortie.' },
          ],
        },
        {
          h: 'L’information, une ressource stratégique',
          blocks: [
            { t: 'p', c: 'Aujourd’hui, l’**information** est une **ressource** au même titre que les hommes, les machines ou le capital. Bien exploitée, elle procure un **avantage** : mieux connaître ses clients, anticiper le marché, piloter l’activité.' },
            { t: 'p', c: 'Les organisations collectent d’énormes volumes de données (**big data**) qu’elles analysent pour aider la décision. La donnée est parfois qualifiée d’« **or noir** » du XXIᵉ siècle.' },
            { t: 'example', h: 'La donnée qui crée de la valeur', c: 'Un site e-commerce enregistre les achats et la navigation de ses clients. \n→ En **analysant** ces données, il recommande des produits pertinents, ajuste ses stocks et ses prix : l’information brute est transformée en **valeur** et en performance commerciale.' },
          ],
        },
        {
          h: 'Le système d’information (SI) : définition et rôles',
          blocks: [
            { t: 'p', c: 'Le **système d’information (SI)** est l’ensemble **organisé** des ressources — **matériels, logiciels, données, procédures et personnes** — qui gère l’information dans l’organisation. Attention : le SI ne se réduit **pas** à l’informatique ; il inclut les humains et les procédures.' },
            { t: 'p', c: 'Le SI remplit **quatre fonctions** principales :' },
            { t: 'table', head: ['Fonction', 'Rôle'], rows: [
              ['**Collecter**', 'Saisir / acquérir les données (ventes, stocks…)'],
              ['**Stocker**', 'Conserver durablement et en sécurité (bases de données)'],
              ['**Traiter**', 'Trier, calculer, croiser les données'],
              ['**Diffuser**', 'Mettre l’information à disposition des bonnes personnes'],
            ] },
            { t: 'p', c: 'Le SI **structure** l’organisation, **relie les services** entre eux et sert de support à la **prise de décision** à tous les niveaux.' },
          ],
        },
        {
          h: 'Les bases de données',
          blocks: [
            { t: 'p', c: 'Le cœur d’un SI est souvent une **base de données** : un ensemble de données **organisées** et **structurées**, stockées de façon à être facilement **recherchées** et **mises à jour**.' },
            { t: 'p', c: 'Elle évite la **redondance** (une même information stockée en double, source d’erreurs) et garantit la **cohérence** : l’information est saisie **une seule fois** et partagée.' },
            { t: 'tip', c: 'Une base de données bien conçue, c’est comme un classeur parfaitement rangé : chaque information a **une place unique**, on la retrouve vite et on est sûr qu’elle est à jour partout.' },
          ],
        },
        {
          h: 'Le PGI (ERP) : un système intégré',
          blocks: [
            { t: 'p', c: 'Le **PGI** (Progiciel de Gestion Intégré, en anglais **ERP**) est un **logiciel unique** qui gère toutes les fonctions de l’entreprise (ventes, achats, stocks, comptabilité, paie…) en s’appuyant sur une **base de données unique** partagée.' },
            { t: 'table', head: ['Avantages du PGI', 'Limites du PGI'], rows: [
              ['Une **seule saisie** (pas de double saisie)', 'Coût d’achat et d’installation élevé'],
              ['Information **cohérente** et à jour partout', 'Projet long et complexe à déployer'],
              ['Meilleure **coordination** entre services', 'Rigidité, forte dépendance au logiciel'],
            ] },
            { t: 'example', h: 'L’effet d’un PGI', c: 'Une vente saisie en caisse met **automatiquement** à jour le stock, déclenche la facturation et l’écriture comptable. \n→ Plus de **double saisie**, information **fiabilisée** et disponible en temps réel pour tous les services.' },
          ],
        },
        {
          h: 'Le travail collaboratif',
          blocks: [
            { t: 'p', c: 'Le **travail collaboratif** consiste à travailler **ensemble** sur un même objectif grâce à des **outils numériques** partagés : messagerie, **agendas partagés**, **cloud** (documents en ligne), visioconférence, outils de gestion de projet.' },
            { t: 'list', c: [
              'on travaille à **plusieurs sur un même document**, en même temps ;',
              'l’information est **centralisée** et accessible partout, à distance ;',
              'la **coordination** est plus rapide (notifications, historique des versions).',
            ] },
            { t: 'p', c: 'Ces outils permettent aussi le **télétravail** et le travail entre équipes éloignées géographiquement.' },
          ],
        },
        {
          h: 'L’intelligence collective',
          blocks: [
            { t: 'p', c: 'L’**intelligence collective** est la capacité d’un groupe à produire, en **partageant** idées et connaissances, un résultat **supérieur à la somme des contributions individuelles**. Le numérique la démultiplie.' },
            { t: 'p', c: 'Elle repose sur le **partage des connaissances**, la **coopération** et des outils qui gardent la **mémoire** collective (wikis, forums internes, réseaux sociaux d’entreprise).' },
            { t: 'example', h: 'Intelligence collective en action', c: 'Sur un forum interne, un technicien pose une question ; trois collègues de sites différents répondent, un quatrième complète. \n→ La solution, meilleure que ce que chacun aurait trouvé seul, reste **archivée** et profite à toute l’entreprise plus tard.' },
          ],
        },
        {
          h: 'La sécurité du système d’information',
          blocks: [
            { t: 'p', c: 'Concentrer l’information crée des **risques** : panne, piratage, virus, vol ou perte de données, erreur humaine. Protéger le SI, c’est garantir **trois exigences** (le triptyque **DIC**) :' },
            { t: 'table', head: ['Exigence', 'Signification'], rows: [
              ['**Disponibilité**', 'L’information est accessible **quand on en a besoin**'],
              ['**Intégrité**', 'L’information est **exacte** et non modifiée par erreur ou malveillance'],
              ['**Confidentialité**', 'Seules les **personnes autorisées** y ont accès'],
            ] },
            { t: 'p', c: 'Moyens de protection : **mots de passe** et droits d’accès, **antivirus** et pare-feu, **sauvegardes** régulières, **chiffrement**, sensibilisation des salariés.' },
          ],
        },
        {
          h: 'Données personnelles, RGPD et éthique',
          blocks: [
            { t: 'p', c: 'Une **donnée personnelle** est toute information permettant d’identifier une personne (nom, e-mail, adresse IP, photo…). Leur usage est strictement encadré.' },
            { t: 'p', c: 'Le **RGPD** (Règlement Général sur la Protection des Données, 2018) impose notamment : le **consentement** de la personne, le droit d’**accès**, de **rectification** et à l’**oubli**, la **minimisation** (ne collecter que le nécessaire). En France, la **CNIL** veille à son respect et peut sanctionner.' },
            { t: 'warning', c: 'Chaque personne laisse une **identité numérique** (traces, publications) qui la suit durablement. Enjeux **éthiques** : respect de la **vie privée**, lutte contre la **surveillance** abusive et contre les usages discriminatoires des données.' },
          ],
        },
      ],
      essentiel: [
        '**Donnée** (brute) → **information** (mise en sens) → **connaissance** (mobilisable pour agir).',
        'Une information utile est de **qualité** : fiable, pertinente, disponible à temps ; c’est une **ressource** stratégique (big data).',
        'Le **SI** (matériels + logiciels + données + procédures + **personnes**) **collecte, stocke, traite, diffuse** l’information ; il s’appuie sur des **bases de données**.',
        'Le **PGI (ERP)** = logiciel unique à **base de données unique** : une seule saisie, information cohérente (mais coûteux, rigide).',
        '**Travail collaboratif** et **intelligence collective** : produire mieux ensemble grâce aux outils partagés (cloud, agendas, réseaux).',
        'Sécurité = **Disponibilité, Intégrité, Confidentialité** (DIC) ; **données personnelles** protégées par le **RGPD** (CNIL, consentement, droit à l’oubli).',
      ],
      resources: [
        { kind: 'video', label: 'Donnée, information, connaissance', note: 'Vidéos — recherche YouTube', url: yt('donnée information connaissance système information PGI première STMG') },
      ],
      games: [
        {
          id: 'p1-sgn-t2-qcm',
          type: 'qcm',
          title: 'QCM — Numérique et données',
          icon: '❓',
          questions: [
            { q: 'Un élément brut, isolé et sans interprétation est…', choices: ['une donnée', 'une information', 'une connaissance', 'une décision'], answer: 0, explain: 'La donnée est brute ; mise en contexte, elle devient information.' },
            { q: 'Le PGI (ERP) repose sur…', choices: ['une base de données unique partagée', 'plusieurs logiciels indépendants', 'des fichiers papier', 'un tableur isolé'], answer: 0, explain: 'La base unique évite les doubles saisies et fiabilise l’information.' },
            { q: 'Produire ensemble mieux que la somme des individus isolés, c’est…', choices: ['l’intelligence collective', 'la double saisie', 'la coutume', 'l’oligopole'], answer: 0, explain: 'L’intelligence collective naît du partage via les outils collaboratifs.' },
            { q: 'Protéger la vie privée et les données personnelles renvoie notamment au…', choices: ['RGPD', 'PIB', 'SWOT', 'CDI'], answer: 0, explain: 'Le RGPD encadre la protection des données personnelles.' },
          ],
        },
        {
          id: 'p1-sgn-t2-ordre',
          type: 'ordre',
          title: 'Remise en ordre — De la donnée à la décision',
          icon: '🔢',
          instruction: 'Remets la transformation de l’information dans l’ordre.',
          steps: ['Donnée (brute)', 'Information (mise en contexte)', 'Connaissance (mobilisable)', 'Décision'],
          explain: 'La donnée devient information, puis connaissance, pour éclairer la décision.',
        },
        {
          id: 'p1-sgn-t2-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'Une information est une donnée mise en contexte.', answer: true, explain: 'Vrai : elle a du sens, contrairement à la donnée brute.' },
            { statement: 'Le PGI oblige à saisir plusieurs fois la même information.', answer: false, explain: 'Faux : la base unique évite justement les doubles saisies.' },
            { statement: 'La confidentialité est un enjeu de sécurité du SI.', answer: true, explain: 'Vrai : avec la disponibilité et l’intégrité.' },
          ],
        },
        {
          id: 'p1-sgn-t2-tri',
          type: 'tri',
          title: 'Tri — Donnée, information ou connaissance ?',
          icon: '🗂️',
          instruction: 'Classe chaque élément.',
          categories: [
            { id: 'd', label: 'Donnée' },
            { id: 'i', label: 'Information' },
            { id: 'c', label: 'Connaissance' },
          ],
          items: [
            { text: '« 35 »', cat: 'd' },
            { text: '« Le projet X a nécessité 35 heures »', cat: 'i' },
            { text: '« Nos projets de ce type prennent ~35 h, facturons en conséquence »', cat: 'c' },
            { text: 'Une température : « 8 »', cat: 'd' },
            { text: '« Il fait 8 °C ce matin à l’entrepôt »', cat: 'i' },
          ],
        },
        {
          id: 'p1-sgn-t2-assoc',
          type: 'association',
          title: 'Association — Notion ↔ définition',
          icon: '🔗',
          pairs: [
            { left: 'Système d’information', right: 'Collecte, stocke, traite et diffuse l’information' },
            { left: 'Base de données', right: 'Données structurées, saisies une seule fois' },
            { left: 'PGI / ERP', right: 'Logiciel unique à base de données unique' },
            { left: 'RGPD', right: 'Protège les données personnelles' },
            { left: 'Intelligence collective', right: 'Produire mieux ensemble en partageant' },
          ],
        },
        {
          id: 'p1-sgn-t2-trou',
          type: 'trou',
          title: 'Texte à trous — Sécurité & données',
          icon: '✏️',
          questions: [
            { text: 'La sécurité du SI protège la disponibilité, l’intégrité et la ____.', answer: 'confidentialité', explain: 'Le triptyque DIC : Disponibilité, Intégrité, Confidentialité.' },
            { text: 'Le ____ encadre l’usage des données personnelles depuis 2018.', answer: 'RGPD', explain: 'Règlement Général sur la Protection des Données ; la CNIL veille à son respect.' },
            { text: 'Le PGI repose sur une base de données ____.', answer: 'unique', explain: 'Une base unique évite les doubles saisies et fiabilise l’information.' },
          ],
        },
        {
          id: 'p1-sgn-t2-flash',
          type: 'flashcard',
          title: 'Flashcards — Numérique',
          icon: '🃏',
          cards: [
            { front: 'Système d’information (SI)', back: 'Collecte, stocke, traite et diffuse l’information ; structure l’organisation.' },
            { front: 'PGI / ERP', back: 'Logiciel unique à base de données unique.' },
            { front: 'Intelligence collective', back: 'Produire mieux ensemble grâce au partage et aux outils collaboratifs.' },
            { front: 'RGPD', back: 'Cadre de protection des données personnelles.' },
          ],
        },
      ],
    },
    {
      id: 'p1-sgn-t3',
      name: 'Thème 3 — Création de valeur et performance',
      short: 'Valeur & performance',
      keywords: 'valeur marchande perçue partenariale prix coût marge charges efficacité efficience indicateurs tableau de bord',
      intro:
        'Toute organisation cherche à **créer de la valeur** et à mesurer sa **performance**, c’est-à-dire à vérifier qu’elle atteint bien ses objectifs.',
      cours: [
        {
          h: 'Qu’est-ce que la valeur ?',
          blocks: [
            { t: 'p', c: 'Toute organisation existe pour **créer de la valeur** : produire quelque chose d’**utile** pour lequel quelqu’un est prêt à payer ou qui rend un service. Mais « la valeur » n’a pas un seul sens — elle se regarde sous plusieurs angles.' },
            { t: 'p', c: 'On distingue notamment la valeur **du point de vue du marché** (le prix), **du point de vue du client** (ce qu’il ressent) et **du point de vue de tous les acteurs** (la valeur partagée). Les trois se complètent.' },
          ],
        },
        {
          h: 'La valeur marchande et le prix',
          blocks: [
            { t: 'p', c: 'La **valeur marchande** est le **prix** qu’un client accepte de payer pour un bien ou un service. Sur un marché, ce prix résulte de la rencontre entre l’**offre** et la **demande**.' },
            { t: 'p', c: 'Le prix envoie un signal : trop élevé, il fait fuir les clients ; trop bas, il réduit la marge et peut faire douter de la qualité. Le fixer est un **arbitrage** stratégique.' },
          ],
        },
        {
          h: 'La valeur perçue par le client',
          blocks: [
            { t: 'p', c: 'La **valeur perçue** est la valeur que le client **croit** obtenir : elle dépend de l’**image**, de la **marque**, de la **qualité ressentie**, du service, de l’expérience d’achat. Elle est **subjective** et peut être très supérieure au coût réel.' },
            { t: 'example', h: 'La force de la valeur perçue', c: 'Deux tee-shirts de qualité identique : l’un sans marque à 8 €, l’autre floqué d’un logo réputé à 45 €. \n→ La différence de prix ne vient pas du coût de production mais de la **valeur perçue** (image, statut). Travailler cette valeur perçue permet de vendre plus cher.' },
          ],
        },
        {
          h: 'La valeur ajoutée',
          blocks: [
            { t: 'p', c: 'La **valeur ajoutée** mesure la **richesse réellement créée** par l’organisation : c’est la différence entre ce qu’elle produit et ce qu’elle a dû acheter à d’autres pour le produire (les consommations intermédiaires).' },
            { t: 'formula', c: 'Valeur ajoutée = production − consommations intermédiaires' },
            { t: 'p', c: 'Cette valeur ajoutée est ensuite **répartie** entre ceux qui ont contribué : salariés (salaires), État (impôts), banques (intérêts), propriétaires (bénéfices), et l’entreprise elle-même (autofinancement).' },
          ],
        },
        {
          h: 'La valeur partenariale et les parties prenantes',
          blocks: [
            { t: 'p', c: 'La **valeur partenariale** est la valeur créée puis **partagée** entre toutes les **parties prenantes** de l’organisation, et pas seulement les propriétaires.' },
            { t: 'p', c: 'Une **partie prenante** est tout acteur concerné par l’activité de l’organisation :' },
            { t: 'table', head: ['Parties prenantes internes', 'Parties prenantes externes'], rows: [
              ['Salariés, dirigeants, actionnaires', 'Clients, fournisseurs, banques'],
              ['', 'État, collectivités, associations, riverains'],
            ] },
            { t: 'p', c: 'Chaque partie prenante attend sa part : salaire, dividende, impôt, produit de qualité… Créer de la valeur **partenariale**, c’est chercher à satisfaire durablement cet ensemble d’acteurs.' },
          ],
        },
        {
          h: 'Coût, prix et marge',
          blocks: [
            { t: 'p', c: 'Le **coût** est ce que l’organisation **dépense** pour produire (l’ensemble des **charges** : matières, salaires, énergie…). Le **prix** est ce que **paie le client**, largement fixé par le marché.' },
            { t: 'formula', c: 'Marge = prix de vente − coût' },
            { t: 'example', h: 'L’arbitrage prix / marge', c: 'Un site vitrine vendu 900 € qui coûte 560 € dégage une marge de **340 €**. \n→ Baisser le prix à 750 € pour être plus compétitif réduit la marge à **190 €**. \nC’est un **arbitrage** permanent entre compétitivité (attirer le client) et rentabilité (gagner de l’argent).' },
          ],
        },
        {
          h: 'La performance : efficacité et efficience',
          blocks: [
            { t: 'p', c: 'La **performance**, c’est atteindre ses **objectifs**. Mais bien piloter suppose de distinguer deux notions souvent confondues :' },
            { t: 'table', head: ['Efficacité', 'Efficience'], rows: [
              ['**Atteindre l’objectif** fixé', 'Atteindre l’objectif **au moindre coût** (moins de moyens)'],
              ['« Ai-je réussi ? »', '« À quel prix / avec quels moyens ai-je réussi ? »'],
            ] },
            { t: 'p', c: 'Une organisation **performante** est à la fois **efficace** ET **efficiente** : elle atteint ses buts en utilisant au mieux ses ressources.' },
            { t: 'warning', c: 'On peut être **efficace sans être efficient** : livrer à temps (efficace) mais en gaspillant énormément de moyens (peu efficient). La vraie performance combine les deux.' },
          ],
        },
        {
          h: 'Mesurer la performance : indicateurs et tableau de bord',
          blocks: [
            { t: 'p', c: 'Pour piloter, on utilise des **indicateurs** : des mesures chiffrées (**quantitatifs** : CA, part de marché) ou d’appréciation (**qualitatifs** : satisfaction). On compare le **réalisé** à l’**objectif**.' },
            { t: 'p', c: 'Ces indicateurs sont réunis dans un **tableau de bord** : un outil de **pilotage** synthétique qui permet, d’un coup d’œil, de voir si l’organisation va dans la bonne direction et de **réagir** vite.' },
            { t: 'tip', c: 'Un bon indicateur est **utile** (lié à un objectif), **fiable** et **disponible à temps**. Trop d’indicateurs noient l’information : mieux vaut quelques indicateurs bien choisis.' },
          ],
        },
        {
          h: 'Les dimensions de la performance (dont la RSE)',
          blocks: [
            { t: 'p', c: 'La performance n’est pas que financière : elle est **globale** et se mesure sur plusieurs dimensions.' },
            { t: 'table', head: ['Dimension', 'Exemples d’indicateurs'], rows: [
              ['Commerciale', 'Clients, part de marché, satisfaction, fidélité'],
              ['Financière', 'Résultat, marge, chiffre d’affaires, rentabilité'],
              ['Sociale', 'Satisfaction des salariés, turnover, formation, climat'],
              ['Environnementale', 'Énergie, déchets, empreinte carbone'],
            ] },
            { t: 'p', c: 'Prendre en compte les dimensions **sociale** et **environnementale** relève de la **RSE** (Responsabilité Sociétale des Entreprises) : l’organisation intègre volontairement des préoccupations sociales et écologiques, au-delà du seul profit. C’est un axe de **valeur partenariale** durable.' },
          ],
        },
      ],
      essentiel: [
        'La **valeur** se regarde sous plusieurs angles : **marchande** (prix payé), **perçue** (crue par le client : image, marque), **ajoutée** (richesse créée), **partenariale** (partagée entre parties prenantes).',
        '**Valeur ajoutée = production − consommations intermédiaires** ; elle est répartie entre salariés, État, banques, propriétaires.',
        '**Parties prenantes** : internes (salariés, actionnaires) et externes (clients, fournisseurs, État…).',
        '**Marge = prix de vente − coût** ; le prix est largement fixé par le marché (arbitrage compétitivité / rentabilité).',
        '**Efficacité** (atteindre l’objectif) vs **efficience** (au moindre coût) : la performance combine les deux.',
        'On pilote avec des **indicateurs** (quantitatifs / qualitatifs) réunis dans un **tableau de bord** ; performance **globale** : commerciale, financière, **sociale**, **environnementale** (**RSE**).',
      ],
      resources: [
        { kind: 'video', label: 'Création de valeur et performance', note: 'Vidéos — recherche YouTube', url: yt('création de valeur performance efficacité efficience première STMG') },
      ],
      games: [
        {
          id: 'p1-sgn-t3-qcm',
          type: 'qcm',
          title: 'QCM — Valeur et performance',
          icon: '❓',
          questions: [
            { q: 'La valeur partagée entre toutes les parties prenantes est la valeur…', choices: ['partenariale', 'marchande', 'perçue', 'boursière'], answer: 0, explain: 'La valeur partenariale est redistribuée aux salariés, actionnaires, État…' },
            { q: 'Un produit vendu 50 € qui coûte 30 € dégage une marge de…', choices: ['20 €', '30 €', '50 €', '80 €'], answer: 0, explain: 'Marge = prix − coût = 50 − 30 = 20 €.' },
            { q: 'Atteindre son objectif au moindre coût, c’est être…', choices: ['efficient', 'efficace seulement', 'partenarial', 'marchand'], answer: 0, explain: 'Efficience = objectif atteint au moindre coût ; efficacité = objectif atteint.' },
            { q: 'Le turnover est un indicateur de performance…', choices: ['sociale', 'commerciale', 'financière', 'environnementale'], answer: 0, explain: 'Il mesure la performance sociale (climat, fidélisation).' },
            { q: 'L’outil qui réunit les indicateurs pour piloter est…', choices: ['le tableau de bord', 'le RGPD', 'le PIB', 'la coutume'], answer: 0, explain: 'Le tableau de bord permet de suivre l’organisation d’un coup d’œil.' },
          ],
        },
        {
          id: 'p1-sgn-t3-tri',
          type: 'tri',
          title: 'Tri — Dimension de la performance',
          icon: '🗂️',
          instruction: 'Classe chaque indicateur.',
          categories: [
            { id: 'com', label: 'Commerciale' },
            { id: 'fin', label: 'Financière' },
            { id: 'soc', label: 'Sociale' },
          ],
          items: [
            { text: 'Part de marché', cat: 'com' },
            { text: 'Chiffre d’affaires', cat: 'fin' },
            { text: 'Turnover', cat: 'soc' },
            { text: 'Satisfaction client', cat: 'com' },
            { text: 'Marge', cat: 'fin' },
            { text: 'Nombre de formations suivies', cat: 'soc' },
          ],
        },
        {
          id: 'p1-sgn-t3-flash',
          type: 'flashcard',
          title: 'Flashcards — Valeur & performance',
          icon: '🃏',
          cards: [
            { front: 'Valeur perçue', back: 'Valeur que le client croit obtenir (image, qualité ressentie).' },
            { front: 'Marge', back: 'Prix de vente − coût.' },
            { front: 'Efficacité / efficience', back: 'Atteindre l’objectif / l’atteindre au moindre coût.' },
            { front: 'Tableau de bord', back: 'Outil de pilotage réunissant les indicateurs.' },
          ],
        },
      ],
    },
    {
      id: 'p1-sgn-t4',
      name: 'Thème 4 — Temps et risque',
      short: 'Temps & risque',
      keywords: 'temps ressource contrainte délais cycles échéances risque financier commercial humain numérique anticiper',
      intro:
        'Gérer, c’est agir dans un monde incertain. Deux contraintes s’imposent toujours : le **temps** et le **risque**. Les ignorer, c’est s’exposer à l’échec.',
      cours: [
        {
          h: 'Le temps, ressource et contrainte',
          blocks: [
            { t: 'p', c: 'Gérer, c’est agir **dans le temps**. Le temps a une double nature :' },
            { t: 'table', head: ['Le temps comme RESSOURCE', 'Le temps comme CONTRAINTE'], rows: [
              ['On peut l’**organiser** et le **planifier**', 'Les **délais** s’imposent à nous'],
              ['« De combien de temps je dispose ? »', '« La commande doit partir vendredi »'],
            ] },
            { t: 'p', c: 'Le temps intervient partout : **délais** de réaction et de livraison, **cycles** (production, vie d’un produit), **échéances** (paiement, déclaration). Bien le gérer, c’est un **avantage concurrentiel** (livrer plus vite, réagir avant les autres).' },
          ],
        },
        {
          h: 'Les horizons de décision : court, moyen, long terme',
          blocks: [
            { t: 'p', c: 'Une décision ne se raisonne pas sur la même durée selon son importance. On distingue trois **horizons** :' },
            { t: 'table', head: ['Horizon', 'Durée', 'Exemple de décision'], rows: [
              ['Court terme', 'Jours à un an', 'Gérer les stocks, planifier la semaine'],
              ['Moyen terme', 'De 1 à ~3 ans', 'Recruter, lancer un produit'],
              ['Long terme', 'Plusieurs années', 'Ouvrir une usine, changer de stratégie'],
            ] },
            { t: 'p', c: 'Plus l’horizon est **lointain**, plus l’avenir est **incertain** — donc plus la décision comporte de **risque**. C’est le lien entre les deux notions du thème.' },
          ],
        },
        {
          h: 'Planifier et organiser le temps',
          blocks: [
            { t: 'p', c: 'La **planification** consiste à **prévoir** les actions dans le temps : quoi faire, quand, avec quels moyens. Elle évite l’improvisation et les retards.' },
            { t: 'p', c: 'Des outils aident à visualiser le temps : le **planning**, le **rétroplanning** (partir de la date finale et remonter), le **diagramme de Gantt** (les tâches sur une frise), les **agendas partagés**.' },
            { t: 'tip', c: 'Anticiper, c’est planifier les commandes pour ne **jamais être en rupture**, et étaler les paiements pour préserver la **trésorerie**. « Un bon gestionnaire ne subit pas le temps, il l’organise. »' },
          ],
        },
        {
          h: 'Les cycles et le cycle de vie',
          blocks: [
            { t: 'p', c: 'Beaucoup de phénomènes se répètent dans le temps : ce sont des **cycles**. En gestion, on suit notamment le **cycle d’exploitation** (acheter → produire → vendre → encaisser) et le **cycle de vie d’un produit**.' },
            { t: 'table', head: ['Phase du cycle de vie', 'Enjeu'], rows: [
              ['Lancement', 'Faire connaître, investir'],
              ['Croissance', 'Augmenter les ventes, la capacité'],
              ['Maturité', 'Défendre sa position, optimiser'],
              ['Déclin', 'Retirer ou relancer le produit'],
            ] },
            { t: 'p', c: 'Connaître la phase permet d’**anticiper** : préparer un nouveau produit **avant** que l’actuel ne décline.' },
          ],
        },
        {
          h: 'Qu’est-ce qu’un risque ?',
          blocks: [
            { t: 'p', c: 'Un **risque** est un **événement incertain aux conséquences négatives possibles**. Il combine une **probabilité** (chances qu’il survienne) et un **impact** (gravité s’il survient).' },
            { t: 'p', c: 'Le risque naît de l’**incertitude** : comme on décide pour l’avenir, on ne connaît jamais toutes les conséquences. **Gérer, c’est nécessairement prendre des risques** — ne rien risquer, c’est aussi renoncer à toute opportunité.' },
            { t: 'warning', c: 'Ne confonds pas **risque** et **incertitude subie** : le risque peut être **identifié, évalué et géré**. Le nier ne le fait pas disparaître ; l’anticiper permet de le maîtriser.' },
          ],
        },
        {
          h: 'Les types de risques',
          blocks: [
            { t: 'p', c: 'Une organisation est exposée à de nombreux risques, qu’on classe par nature :' },
            { t: 'table', head: ['Type de risque', 'Exemples'], rows: [
              ['Financier', 'Client qui ne paie pas (impayé), manque de trésorerie'],
              ['Commercial', 'Produit qui ne se vend pas, perte d’un gros client'],
              ['Humain / social', 'Accident du travail, départ d’un salarié clé, conflit, grève'],
              ['Numérique', 'Perte de données, cyberattaque, panne informatique'],
              ['Environnemental / juridique', 'Pollution, procès, changement de réglementation'],
            ] },
          ],
        },
        {
          h: 'Risque et opportunité',
          blocks: [
            { t: 'p', c: 'Le risque n’a pas qu’une face négative. Toute prise de risque maîtrisée est aussi une **opportunité** : lancer un nouveau produit, c’est risqué, mais c’est aussi la chance de **gagner un marché**.' },
            { t: 'p', c: 'La question n’est donc pas « faut-il prendre des risques ? » (il le faut) mais « **quels risques**, pour **quelle espérance de gain**, et **suis-je prêt à les assumer** ? ». C’est l’arbitrage **risque / rendement**.' },
            { t: 'example', h: 'Prendre un risque calculé', c: 'Une entreprise hésite à ouvrir une boutique en ligne : investissement, risque d’échec. \n→ Mais ne rien faire est aussi un risque (être dépassé par les concurrents). \nElle décide d’un **test à petite échelle** : elle prend un **risque calculé** pour saisir une **opportunité** de croissance.' },
          ],
        },
        {
          h: 'Anticiper et prévenir les risques',
          blocks: [
            { t: 'p', c: 'On ne **supprime** jamais totalement un risque, mais on peut le **réduire** en agissant **avant** qu’il ne survienne. La démarche : **identifier** les risques → les **évaluer** (probabilité × impact) → décider comment les **traiter**.' },
            { t: 'list', c: [
              '**Prévenir / réduire** : sauvegardes informatiques, contrôles qualité, sécurité au travail ;',
              '**Éviter** : renoncer à une activité trop dangereuse ;',
              '**Réduire l’exposition** : demander un **acompte**, **diversifier** ses clients et fournisseurs.',
            ] },
          ],
        },
        {
          h: 'Transférer et couvrir le risque',
          blocks: [
            { t: 'p', c: 'Certains risques ne peuvent qu’être **transférés** ou **couverts** financièrement :' },
            { t: 'list', c: [
              '**l’assurance** : contre un accident, un incendie, un impayé (assurance-crédit) ;',
              '**la diversification** : ne pas dépendre d’un seul client, produit ou marché ;',
              '**la constitution de réserves** (trésorerie de précaution) pour absorber un coup dur.',
            ] },
            { t: 'tip', c: 'À retenir : la bonne gestion du risque, c’est **prévoir** l’imprévisible autant que possible et **préparer des réponses à l’avance** — comme on installe un détecteur de fumée avant l’incendie, pas après.' },
          ],
        },
      ],
      essentiel: [
        'Le **temps** est une **ressource** (à planifier) et une **contrainte** (délais, cycles, échéances) ; il s’organise (planning, rétroplanning, Gantt).',
        'Trois **horizons** de décision : **court, moyen, long terme** ; plus c’est lointain, plus c’est **incertain** (donc risqué).',
        'Le **cycle de vie** d’un produit (lancement, croissance, maturité, déclin) s’anticipe.',
        'Un **risque** = événement **incertain** aux conséquences négatives (probabilité × impact) : financier, commercial, humain, numérique, juridique.',
        'Le risque est aussi une **opportunité** : arbitrage **risque / rendement**.',
        'On **anticipe** : prévention, **acompte**, **diversification**, **sauvegardes**, **assurances**, planification.',
      ],
      resources: [
        { kind: 'video', label: 'Temps et risque en gestion', note: 'Vidéos — recherche YouTube', url: yt('sciences de gestion temps et risque première STMG') },
      ],
      games: [
        {
          id: 'p1-sgn-t4-qcm',
          type: 'qcm',
          title: 'QCM — Temps et risque',
          icon: '❓',
          questions: [
            { q: 'Le risque d’un client qui ne paie pas est un risque…', choices: ['financier', 'humain', 'numérique', 'commercial'], answer: 0, explain: 'Un impayé/manque de trésorerie est un risque financier.' },
            { q: 'Une cyberattaque relève du risque…', choices: ['numérique', 'financier', 'commercial', 'humain'], answer: 0, explain: 'Perte de données, panne, cyberattaque = risque numérique.' },
            { q: 'Pour limiter le risque d’impayé, on peut…', choices: ['demander un acompte', 'ignorer le client', 'supprimer les factures', 'baisser la qualité'], answer: 0, explain: 'L’acompte réduit le risque financier ; on peut aussi suivre les règlements.' },
            { q: 'Dépendre d’un seul gros client est un risque…', choices: ['commercial', 'numérique', 'humain', 'nul'], answer: 0, explain: 'La perte de ce client menacerait l’activité : risque commercial, réduit par la diversification.' },
          ],
        },
        {
          id: 'p1-sgn-t4-tri',
          type: 'tri',
          title: 'Tri — Type de risque',
          icon: '🗂️',
          instruction: 'Classe chaque risque.',
          categories: [
            { id: 'fin', label: 'Financier' },
            { id: 'com', label: 'Commercial' },
            { id: 'num', label: 'Numérique' },
          ],
          items: [
            { text: 'Un client insolvable', cat: 'fin' },
            { text: 'Une panne informatique', cat: 'num' },
            { text: 'La perte d’un gros client', cat: 'com' },
            { text: 'Un manque de trésorerie', cat: 'fin' },
            { text: 'Une fuite de données', cat: 'num' },
          ],
        },
        {
          id: 'p1-sgn-t4-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'On peut supprimer totalement le risque d’une décision.', answer: false, explain: 'Faux : on peut le réduire, pas le supprimer.' },
            { statement: 'Le temps est à la fois une ressource et une contrainte.', answer: true, explain: 'Vrai : on l’organise mais les délais s’imposent.' },
            { statement: 'Diversifier ses clients réduit un risque commercial.', answer: true, explain: 'Vrai : on ne dépend plus d’un seul client.' },
          ],
        },
        {
          id: 'p1-sgn-t4-flash',
          type: 'flashcard',
          title: 'Flashcards — Temps & risque',
          icon: '🃏',
          cards: [
            { front: 'Risque', back: 'Événement incertain aux conséquences négatives possibles.' },
            { front: 'Types de risques', back: 'Financier, commercial, humain, numérique.' },
            { front: 'Anticiper', back: 'Acompte, diversification, sauvegardes, assurances, planification.' },
            { front: 'Échéance', back: 'Date imposée (livraison, paiement).' },
          ],
        },
      ],
    },
  ],
}

// ===========================================================================
// MANAGEMENT (3 thèmes)
// ===========================================================================
const managementP = {
  id: 'p1-management',
  name: 'Management',
  short: 'Management',
  icon: '🏢',
  color: '#4f46e5',
  niveau: 'premiere',
  tagline: 'Conduire une organisation : diagnostiquer, décider, piloter.',
  chapters: [
    {
      id: 'p1-mgmt-t1',
      name: 'Thème 1 — À la rencontre du management des organisations',
      short: 'Management & organisations',
      keywords: 'organisation groupe individus ressources structure hiérarchie statut juridique but commun pérennité management performance stratégique opérationnel entreprise privée organisation publique société civile finalité lucrative intérêt général non lucrative parties prenantes RSE',
      intro:
        'Une **organisation** naît du besoin de **structurer une action collective**. Le **management** est l’art de la **conduire** pour qu’elle atteigne ses buts et **dure**. On découvre aussi les grandes **formes** d’organisations et leurs **finalités**.',
      cours: [
        {
          h: 'Qu’est-ce qu’une organisation ?',
          blocks: [
            { t: 'p', c: 'Une organisation est un **groupe d’individus** qui met en commun et **pilote des ressources**, autour d’un **but commun**, et qui est **voué à durer** dans le temps. On la reconnaît à plusieurs caractéristiques :' },
            { t: 'list', c: [
              'un **but commun** (le projet collectif qui réunit les membres),',
              'des **ressources pilotées** (humaines, matérielles, financières, immatérielles),',
              'une **structure hiérarchisée** (répartition des rôles, des pouvoirs et des responsabilités),',
              'un **statut juridique** (entreprise, association, administration…),',
              'la volonté de **durer** dans le temps (la **pérennité**).',
            ] },
            { t: 'tip', c: 'À retenir : une organisation, ce sont des **individus** qui **coordonnent des ressources** vers un **but commun**, dans une **structure** dotée d’un **statut juridique**.' },
          ],
        },
        {
          h: 'Qu’est-ce que le management ?',
          blocks: [
            { t: 'p', c: 'Le management est la **conduite de l’action collective** dans un environnement en perpétuel changement (numérique, écologie, attentes sociales). Manager, c’est **fixer des objectifs**, **organiser les ressources**, **animer les équipes** et **contrôler les résultats**, pour assurer :' },
            { t: 'list', c: [
              'la **performance** : atteindre les objectifs fixés (efficacité + efficience) ;',
              'la **pérennité** : permettre à l’organisation de durer.',
            ] },
          ],
        },
        {
          h: 'Deux niveaux de management',
          blocks: [
            { t: 'table', head: ['Management stratégique', 'Management opérationnel'], rows: [
              ['Long terme', 'Court terme'],
              ['Direction générale', 'Encadrement intermédiaire'],
              ['Ouvrir une filiale, lancer une activité', 'Organiser les plannings, gérer un stock'],
            ] },
            { t: 'tip', c: 'Les deux sont complémentaires : la **stratégie fixe le cap**, l’**opérationnel le met en pratique**.' },
          ],
        },
        {
          h: 'Les différentes formes d’organisations',
          blocks: [
            { t: 'p', c: 'Les organisations se distinguent surtout par leur **finalité** (leur raison d’être). On en distingue **trois grandes formes** :' },
            { t: 'table', head: ['Type', 'Finalité', 'Exemples'], rows: [
              ['Entreprise privée', 'Lucrative (profit) + dimension sociétale (RSE)', 'Boulangerie, start-up, multinationale'],
              ['Organisation publique', 'Intérêt général (service public, non marchand)', 'Mairie, hôpital, lycée, police'],
              ['Organisation de la société civile', 'Non lucrative (objet social)', 'Association, ONG, syndicat, mutuelle'],
            ] },
            { t: 'p', c: 'Les **entreprises privées** cherchent le **profit** tout en intégrant des enjeux sociaux et environnementaux (**RSE**). Les **organisations publiques** rendent un **service public** financé par l’**impôt**. Les **organisations de la société civile** poursuivent un **objet social** sans but de profit ; leur enjeu est de **pérenniser leurs ressources** (bénévoles, cotisations, subventions, dons).' },
            { t: 'list', c: [
              '**Parties prenantes** : tous ceux qui ont un intérêt dans l’organisation (salariés, clients, actionnaires, État, fournisseurs, riverains…).',
              '**Champ d’action** : local, national ou international ; **marchand** ou **non marchand**.',
              'La **performance** se mesure selon la **finalité** : un profit pour l’entreprise, un service rendu pour l’organisation publique.',
            ] },
          ],
        },
      ],
      essentiel: [
        'Une **organisation** = des **individus** + des **ressources pilotées** + une **structure hiérarchisée** + un **statut juridique** + un **but commun**, **vouée à durer**.',
        'Le **management** conduit l’action collective pour assurer **performance** et **pérennité**.',
        'Management **stratégique** (long terme, direction) vs **opérationnel** (court terme, encadrement).',
        'Trois formes : **entreprise privée** (lucrative + RSE), **organisation publique** (intérêt général), **société civile** (non lucrative).',
      ],
      resources: [
        { kind: 'video', label: 'À la rencontre du management des organisations', note: 'Vidéos — recherche YouTube', url: yt('à la rencontre du management des organisations première STMG') },
        { kind: 'video', label: 'Types et finalités des organisations', note: 'Vidéos — recherche YouTube', url: yt('finalités organisations entreprise publique association première STMG management') },
      ],
      games: [
        {
          id: 'p1-mgmt-t1-qcm',
          type: 'qcm',
          title: 'QCM — Management et organisations',
          icon: '❓',
          questions: [
            { q: 'Une organisation se définit comme…', choices: ['un groupe d’individus pilotant des ressources vers un but commun, voué à durer', 'un logo, un slogan et une couleur', 'un impôt, une TVA et une marge', 'un juge, une loi et une preuve'], answer: 0, explain: 'Des individus coordonnent des ressources, dans une structure dotée d’un statut juridique, vers un but commun et dans la durée.' },
            { q: 'Le management vise deux grands objectifs :', choices: ['la performance et la pérennité', 'le profit et l’impôt', 'la publicité et la vente', 'le risque et le temps'], answer: 0, explain: 'Atteindre les objectifs (performance) et durer (pérennité).' },
            { q: 'Ouvrir une filiale à l’étranger est une décision de management…', choices: ['stratégique', 'opérationnel', 'quotidien', 'comptable'], answer: 0, explain: 'Décision de long terme prise par la direction générale.' },
            { q: 'La finalité d’une organisation publique est…', choices: ['l’intérêt général (service public)', 'le profit', 'la spéculation', 'la publicité'], answer: 0, explain: 'Les organisations publiques rendent un service public, financé par l’impôt.' },
            { q: 'Une association relève des organisations…', choices: ['de la société civile (non lucratives)', 'privées lucratives', 'publiques', 'multinationales'], answer: 0, explain: 'Associations, ONG, syndicats, mutuelles = société civile, non lucratives.' },
            { q: 'Salariés, clients, actionnaires et État sont des…', choices: ['parties prenantes', 'concurrents', 'indicateurs', 'ressources matérielles'], answer: 0, explain: 'Ce sont les parties prenantes de l’organisation.' },
          ],
        },
        {
          id: 'p1-mgmt-t1-tri',
          type: 'tri',
          title: 'Tri — Type d’organisation',
          icon: '🗂️',
          instruction: 'Classe chaque organisation selon sa forme.',
          categories: [
            { id: 'priv', label: 'Entreprise privée' },
            { id: 'pub', label: 'Organisation publique' },
            { id: 'civ', label: 'Société civile' },
          ],
          items: [
            { text: 'Une start-up', cat: 'priv' },
            { text: 'Un hôpital public', cat: 'pub' },
            { text: 'Une ONG humanitaire', cat: 'civ' },
            { text: 'Une multinationale', cat: 'priv' },
            { text: 'Un syndicat', cat: 'civ' },
            { text: 'Une mairie', cat: 'pub' },
          ],
        },
        {
          id: 'p1-mgmt-t1-tri2',
          type: 'tri',
          title: 'Tri — Stratégique ou opérationnel ?',
          icon: '🎯',
          instruction: 'Classe chaque décision.',
          categories: [
            { id: 'str', label: 'Stratégique' },
            { id: 'ope', label: 'Opérationnel' },
          ],
          items: [
            { text: 'Racheter un concurrent', cat: 'str' },
            { text: 'Gérer un stock cette semaine', cat: 'ope' },
            { text: 'Lancer une nouvelle activité', cat: 'str' },
            { text: 'Résoudre un problème client', cat: 'ope' },
            { text: 'S’implanter à l’international', cat: 'str' },
          ],
        },
        {
          id: 'p1-mgmt-t1-flash',
          type: 'flashcard',
          title: 'Flashcards — Management & organisations',
          icon: '🃏',
          cards: [
            { front: 'Organisation', back: 'Groupe d’individus pilotant des ressources vers un but commun, structuré, doté d’un statut juridique, voué à durer.' },
            { front: 'Management', back: 'Conduire l’action collective (performance + pérennité).' },
            { front: 'Stratégique / opérationnel', back: 'Long terme (direction) / court terme (encadrement).' },
            { front: 'Entreprise privée', back: 'Finalité lucrative (profit) + dimension sociétale (RSE).' },
            { front: 'Organisation publique', back: 'Finalité d’intérêt général (service public).' },
            { front: 'Société civile', back: 'Non lucrative (association, ONG, syndicat, mutuelle).' },
          ],
        },
      ],
    },
    {
      id: 'p1-mgmt-t2',
      name: 'Thème 2 — Le management stratégique, du diagnostic à la fixation des objectifs',
      short: 'Diagnostic stratégique',
      keywords: 'stratégie diagnostic externe interne PESTEL macro-environnement micro-environnement opportunités menaces ressources compétences distinctives forces faiblesses SWOT finalité objectifs stratégiques',
      intro:
        'Pour atteindre ses finalités, une organisation met en place une **stratégie**. Avant de décider, elle réalise un **diagnostic stratégique** : se connaître (interne) et connaître son environnement (externe). Ce diagnostic débouche sur la **fixation des objectifs**.',
      cours: [
        {
          h: 'La démarche stratégique',
          blocks: [
            { t: 'p', c: 'La démarche stratégique enchaîne plusieurs étapes : (1) **diagnostic stratégique** (interne + externe), (2) **fixation des objectifs** en cohérence avec les **finalités**, (3) **mise en œuvre**, (4) **contrôle** des résultats et **ajustement**. C’est un processus permanent.' },
          ],
        },
        {
          h: 'Le diagnostic externe : l’environnement de l’organisation',
          blocks: [
            { t: 'p', c: 'Le **macro-environnement** regroupe les grandes forces générales qui s’imposent à **toutes** les organisations et sur lesquelles une entreprise seule **n’a pas de prise**. On l’analyse avec la méthode **PESTEL** :' },
            { t: 'figure', name: 'pestel' },
            { t: 'list', c: [
              '**P** olitique · **E** conomique · **S** ocioculturel · **T** echnologique · **E** cologique · **L** égal.',
            ] },
            { t: 'p', c: 'Le **micro-environnement** regroupe les **acteurs proches** en relation directe avec l’organisation : les **concurrents** actuels, les **clients**, les **fournisseurs**, les **nouveaux entrants** potentiels et les **produits de substitution**. Le diagnostic externe fait ressortir des **opportunités** (favorables) et des **menaces** (défavorables).' },
          ],
        },
        {
          h: 'Le diagnostic interne',
          blocks: [
            { t: 'p', c: 'Le **diagnostic interne** analyse ce que l’organisation possède et sait faire :' },
            { t: 'list', c: [
              'ses **ressources** : financières, humaines, matérielles et immatérielles (marque, savoir-faire, brevets…) ;',
              'ses **compétences distinctives** : ce qu’elle sait faire **mieux** que ses concurrents.',
            ] },
            { t: 'p', c: 'Il révèle les **forces** (atouts) et les **faiblesses** (points faibles) de l’organisation.' },
          ],
        },
        {
          h: 'La synthèse : la matrice SWOT',
          blocks: [
            { t: 'p', c: 'On réunit les résultats des deux diagnostics dans une matrice **SWOT** : **Forces / Faiblesses** (issues du diagnostic **interne**) et **Opportunités / Menaces** (issues du diagnostic **externe**).' },
            { t: 'figure', name: 'swot' },
          ],
        },
        {
          h: 'Des finalités aux objectifs stratégiques',
          blocks: [
            { t: 'p', c: 'Le diagnostic permet de fixer des **objectifs stratégiques** cohérents avec la **finalité** de l’organisation (ex. conquérir un nouveau marché, améliorer un service public, développer l’action d’une association). Ces objectifs guideront ensuite les **choix stratégiques** (thème 3).' },
            { t: 'tip', c: 'Un bon objectif s’appuie sur les **forces** de l’organisation pour saisir une **opportunité**, ou pour réduire une **faiblesse** face à une **menace**.' },
          ],
        },
      ],
      essentiel: [
        'Démarche : **diagnostic → objectifs → mise en œuvre → contrôle** (ajustement permanent).',
        'Diagnostic **externe** : **PESTEL** (macro) + acteurs du **micro-environnement** → **opportunités / menaces**.',
        'Diagnostic **interne** : **ressources** + **compétences distinctives** → **forces / faiblesses**.',
        'Synthèse = **SWOT** ; le diagnostic débouche sur les **objectifs stratégiques** liés à la **finalité**.',
      ],
      resources: [
        { kind: 'video', label: 'Le diagnostic stratégique : PESTEL et SWOT', note: 'Vidéos — recherche YouTube', url: yt('diagnostic stratégique PESTEL SWOT interne externe première STMG') },
      ],
      games: [
        {
          id: 'p1-mgmt-t2-qcm',
          type: 'qcm',
          title: 'QCM — Diagnostic stratégique',
          icon: '❓',
          questions: [
            { q: 'La méthode PESTEL analyse…', choices: ['le macro-environnement', 'les ressources internes', 'la comptabilité', 'les salariés'], answer: 0, explain: 'PESTEL = Politique, Économique, Socioculturel, Technologique, Écologique, Légal (macro-environnement).' },
            { q: 'Le « L » de PESTEL correspond à la dimension…', choices: ['Légale', 'Logistique', 'Locale', 'Libérale'], answer: 0, explain: 'L = Légal (lois, réglementations, RGPD).' },
            { q: 'Une compétence distinctive est ce que l’organisation sait faire…', choices: ['mieux que ses concurrents', 'comme tout le monde', 'sans ressources', 'à perte'], answer: 0, explain: 'C’est une force du diagnostic interne, source d’avantage concurrentiel.' },
            { q: 'Les forces et les faiblesses relèvent du diagnostic…', choices: ['interne', 'externe', 'macro-économique', 'légal'], answer: 0, explain: 'Interne = forces/faiblesses ; externe = opportunités/menaces.' },
            { q: 'Une nouvelle réglementation favorable est, pour l’organisation, une…', choices: ['opportunité', 'faiblesse', 'ressource', 'compétence'], answer: 0, explain: 'C’est un élément externe favorable : une opportunité.' },
            { q: 'La matrice SWOT réunit…', choices: ['forces/faiblesses (interne) et opportunités/menaces (externe)', 'seulement les forces', 'les seules données comptables', 'les concurrents uniquement'], answer: 0, explain: 'SWOT = synthèse du diagnostic interne et externe.' },
          ],
        },
        {
          id: 'p1-mgmt-t2-tri',
          type: 'tri',
          title: 'Tri — Diagnostic interne ou externe ?',
          icon: '🗂️',
          instruction: 'Classe chaque élément du diagnostic.',
          categories: [
            { id: 'int', label: 'Interne (forces/faiblesses)' },
            { id: 'ext', label: 'Externe (opportunités/menaces)' },
          ],
          items: [
            { text: 'Un savoir-faire unique', cat: 'int' },
            { text: 'Une nouvelle réglementation', cat: 'ext' },
            { text: 'Une trésorerie fragile', cat: 'int' },
            { text: 'Un marché en croissance', cat: 'ext' },
            { text: 'L’arrivée d’un concurrent', cat: 'ext' },
            { text: 'Une équipe très compétente', cat: 'int' },
          ],
        },
        {
          id: 'p1-mgmt-t2-ordre',
          type: 'ordre',
          title: 'Remise en ordre — La démarche stratégique',
          icon: '🔢',
          instruction: 'Remets les étapes dans l’ordre.',
          steps: ['Diagnostic stratégique (interne + externe)', 'Fixation des objectifs', 'Mise en œuvre', 'Contrôle et ajustement'],
          explain: 'On diagnostique, on fixe des objectifs, on met en œuvre, puis on contrôle et on ajuste.',
        },
        {
          id: 'p1-mgmt-t2-flash',
          type: 'flashcard',
          title: 'Flashcards — Diagnostic',
          icon: '🃏',
          cards: [
            { front: 'PESTEL', back: 'Diagnostic du macro-environnement (P, E, S, T, E, L).' },
            { front: 'Micro-environnement', back: 'Acteurs proches : concurrents, clients, fournisseurs, entrants, substituts.' },
            { front: 'Diagnostic interne', back: 'Ressources + compétences distinctives → forces/faiblesses.' },
            { front: 'SWOT', back: 'Forces/Faiblesses (interne) + Opportunités/Menaces (externe).' },
            { front: 'Compétence distinctive', back: 'Ce que l’organisation sait faire mieux que les concurrents.' },
          ],
        },
      ],
    },
    {
      id: 'p1-mgmt-t3',
      name: 'Thème 3 — Les choix stratégiques des organisations',
      short: 'Choix stratégiques',
      keywords: 'avantage concurrentiel stratégie domination par les coûts différenciation spécialisation diversification intégration externalisation sous-traitance DAS domaine d’activité stratégique organisation publique société civile',
      intro:
        'Une fois le diagnostic posé et les objectifs fixés, l’organisation doit faire des **choix stratégiques** pour se donner un **avantage concurrentiel** durable. Ces choix diffèrent selon la **finalité** de l’organisation.',
      cours: [
        {
          h: 'Rechercher un avantage concurrentiel',
          blocks: [
            { t: 'p', c: 'L’objectif d’une stratégie est d’obtenir un **avantage concurrentiel** : un atout qui permet à l’organisation de se distinguer **durablement** de ses concurrents et d’être préférée par les clients. Il repose souvent sur une **compétence distinctive** identifiée lors du diagnostic interne.' },
          ],
        },
        {
          h: 'Les stratégies de domaine : coûts ou différenciation',
          blocks: [
            { t: 'p', c: 'Pour un domaine d’activité donné, l’organisation choisit **comment** affronter la concurrence :' },
            { t: 'table', head: ['Domination par les coûts', 'Différenciation'], rows: [
              ['Prix plus bas que les concurrents', 'Offre perçue comme unique'],
              ['Économies d’échelle, productivité', 'Qualité, image, innovation, service'],
              ['Ex. enseigne discount', 'Ex. marque de luxe / haut de gamme'],
            ] },
            { t: 'warning', c: 'On choisit son terrain : il est difficile d’être à la fois **le moins cher** et **le plus différencié**.' },
          ],
        },
        {
          h: 'Les stratégies globales : spécialisation ou diversification',
          blocks: [
            { t: 'p', c: 'À l’échelle de toute l’organisation, deux grandes orientations :' },
            { t: 'list', c: [
              '**Spécialisation** : se concentrer sur **un seul métier / marché** pour y devenir performant.',
              '**Diversification** : se développer sur **de nouveaux métiers ou marchés** pour répartir les risques et saisir des opportunités.',
            ] },
            { t: 'p', c: 'Un **DAS** (Domaine d’Activité Stratégique) est un sous-ensemble homogène d’activités pour lequel on peut définir une stratégie propre.' },
          ],
        },
        {
          h: 'Faire seul ou avec d’autres : intégration ou externalisation',
          blocks: [
            { t: 'list', c: [
              '**Intégration** : réaliser soi-même une activité (la « faire »), pour la maîtriser.',
              '**Externalisation** : confier une activité à un partenaire extérieur (la « faire faire », ex. **sous-traitance**), pour se recentrer sur son cœur de métier.',
            ] },
          ],
        },
        {
          h: 'Les choix des organisations publiques et de la société civile',
          blocks: [
            { t: 'p', c: 'Les **organisations publiques** et de la **société civile** font elles aussi des choix stratégiques, mais tournés vers leur **finalité** (intérêt général, objet social) : développer de **nouveaux services**, **mutualiser** des moyens, nouer des **partenariats**, moderniser leur fonctionnement. La logique n’est pas le profit mais le **service rendu**.' },
          ],
        },
      ],
      essentiel: [
        'But d’une stratégie : obtenir un **avantage concurrentiel** durable.',
        'Stratégies de domaine : **domination par les coûts** OU **différenciation**.',
        'Stratégies globales : **spécialisation** OU **diversification** (+ notion de **DAS**).',
        'Modalités : **intégration** (faire) vs **externalisation** (faire faire, sous-traitance).',
        'Les organisations publiques et de la société civile choisissent selon leur **finalité** (service rendu).',
      ],
      resources: [
        { kind: 'video', label: 'Les choix stratégiques : coûts, différenciation, diversification', note: 'Vidéos — recherche YouTube', url: yt('choix stratégiques domination coûts différenciation spécialisation diversification première STMG') },
      ],
      games: [
        {
          id: 'p1-mgmt-t3-qcm',
          type: 'qcm',
          title: 'QCM — Choix stratégiques',
          icon: '❓',
          questions: [
            { q: 'Un avantage concurrentiel est un atout qui permet…', choices: ['de se distinguer durablement des concurrents', 'de payer moins d’impôts', 'd’éviter tout contrat', 'de fixer la loi'], answer: 0, explain: 'Il rend l’organisation préférable aux yeux des clients, dans la durée.' },
            { q: 'Proposer une offre unique justifiant un prix élevé, c’est une stratégie de…', choices: ['différenciation', 'domination par les coûts', 'diversification', 'externalisation'], answer: 0, explain: 'Différenciation : qualité, image, innovation, service.' },
            { q: 'Vendre moins cher que les concurrents grâce à des économies d’échelle, c’est…', choices: ['la domination par les coûts', 'la différenciation', 'la spécialisation', 'l’intégration'], answer: 0, explain: 'On mise sur la productivité et les volumes pour baisser les prix.' },
            { q: 'Se développer sur de nouveaux métiers ou marchés, c’est une stratégie de…', choices: ['diversification', 'spécialisation', 'domination par les coûts', 'externalisation'], answer: 0, explain: 'Diversification : on répartit les risques sur plusieurs activités.' },
            { q: 'Confier une activité à un partenaire extérieur (sous-traitance), c’est…', choices: ['l’externalisation', 'l’intégration', 'la spécialisation', 'la différenciation'], answer: 0, explain: 'Externaliser = « faire faire » pour se recentrer sur son cœur de métier.' },
            { q: 'Un DAS (Domaine d’Activité Stratégique) est…', choices: ['un sous-ensemble homogène d’activités avec une stratégie propre', 'un impôt sur les sociétés', 'un service public', 'un type de contrat'], answer: 0, explain: 'On peut définir une stratégie spécifique pour chaque DAS.' },
          ],
        },
        {
          id: 'p1-mgmt-t3-tri',
          type: 'tri',
          title: 'Tri — Coûts ou différenciation ?',
          icon: '🗂️',
          instruction: 'Classe chaque situation selon la stratégie de domaine.',
          categories: [
            { id: 'cout', label: 'Domination par les coûts' },
            { id: 'diff', label: 'Différenciation' },
          ],
          items: [
            { text: 'Une enseigne discount aux prix cassés', cat: 'cout' },
            { text: 'Une marque de luxe haut de gamme', cat: 'diff' },
            { text: 'Produire en très grande quantité pour baisser le coût unitaire', cat: 'cout' },
            { text: 'Un produit innovant à l’image forte', cat: 'diff' },
            { text: 'Un service client très personnalisé', cat: 'diff' },
          ],
        },
        {
          id: 'p1-mgmt-t3-flash',
          type: 'flashcard',
          title: 'Flashcards — Choix stratégiques',
          icon: '🃏',
          cards: [
            { front: 'Avantage concurrentiel', back: 'Atout qui permet de se distinguer durablement des concurrents.' },
            { front: 'Domination par les coûts', back: 'Prix plus bas grâce aux économies d’échelle et à la productivité.' },
            { front: 'Différenciation', back: 'Offre unique (qualité, image, innovation) justifiant un prix plus élevé.' },
            { front: 'Spécialisation / diversification', back: 'Un seul métier / plusieurs métiers et marchés.' },
            { front: 'Intégration / externalisation', back: 'Faire soi-même / faire faire (sous-traitance).' },
          ],
        },
      ],
    },
  ],
}

// ===========================================================================
// DROIT (4 thèmes)
// ===========================================================================
const droitP = {
  id: 'p1-droit',
  name: 'Droit',
  short: 'Droit',
  icon: '⚖️',
  color: '#d97706',
  niveau: 'premiere',
  tagline: 'Les fondamentaux : la règle, le litige, les personnes, les droits.',
  chapters: [
    {
      id: 'p1-droit-t1',
      name: 'Thème 1 — Qu’est-ce que le droit ?',
      short: 'Qu’est-ce que le droit ?',
      keywords: 'droit fonctions État de droit laïcité ordre public règle de droit générale impersonnelle obligatoire coercitive contrainte sanction étatique règle morale religieuse sources hiérarchie des normes Constitution traités UE lois règlements jurisprudence coutume Cour de cassation Conseil constitutionnel QPC contrôle de constitutionnalité droit privé public',
      intro:
        'Le droit, ce sont les **règles qui organisent la vie en société** et que l’État fait respecter. Sans droit, ce serait la loi du plus fort. On découvre ses **fonctions**, les **caractères** de la règle et les **sources** qui la produisent.',
      cours: [
        {
          h: 'Les fonctions du droit et l’État de droit',
          blocks: [
            { t: 'p', c: 'Le droit est l’ensemble des **règles générales et obligatoires** qui régissent les rapports entre les personnes, dont le respect est **garanti par la puissance publique** (l’État). Ses **fonctions** :' },
            { t: 'list', c: [
              '**organiser** la société et l’activité économique,',
              '**pacifier** et **sécuriser** les relations (éviter la loi du plus fort),',
              '**protéger** les personnes et leurs droits,',
              '**arbitrer** les conflits et **sanctionner** les manquements.',
            ] },
            { t: 'p', c: 'Dans un **État de droit**, la puissance publique elle-même est **soumise au droit** : personne n’est au-dessus de la loi. Deux principes structurants s’y rattachent :' },
            { t: 'list', c: [
              'la **laïcité** : l’État est neutre en matière religieuse et garantit la liberté de conscience ;',
              'l’**ordre public** : l’ensemble des règles essentielles (sécurité, salubrité, tranquillité, dignité) auxquelles on ne peut pas déroger par contrat.',
            ] },
          ],
        },
        {
          h: 'Les caractères de la règle de droit',
          blocks: [
            { t: 'p', c: 'Une règle de droit est **générale** (elle s’applique à tous), **impersonnelle** (elle ne vise personne nommément), **obligatoire** et **coercitive** (assortie de la **contrainte / sanction de l’État** en cas de non-respect).' },
            { t: 'warning', c: 'C’est ce caractère **coercitif** (la **contrainte étatique**) qui la distingue d’une **règle morale** (qui relève de la conscience) ou **religieuse** (qui relève de la croyance) : celles-ci ne sont pas sanctionnées par l’État.' },
          ],
        },
        {
          h: 'Les sources du droit et la hiérarchie des normes',
          blocks: [
            { t: 'p', c: 'Les règles proviennent de plusieurs **sources**, hiérarchisées : une norme inférieure doit **respecter** les normes supérieures.' },
            { t: 'table', head: ['Niveau', 'Source'], rows: [
              ['1', 'Bloc de constitutionnalité (la Constitution, la DDHC…)'],
              ['2', 'Traités internationaux et droit de l’Union européenne'],
              ['3', 'La loi (votée par le Parlement)'],
              ['4', 'Les règlements (décrets, arrêtés)'],
            ] },
            { t: 'p', c: 'Le **droit de l’Union européenne** occupe une place importante : ses **règlements** et **directives** s’imposent aux États membres. S’ajoutent des sources **non écrites** : la **jurisprudence** (décisions des tribunaux qui interprètent la règle) et la **coutume** (usages anciens et acceptés).' },
            { t: 'p', c: 'Le respect de la hiérarchie est contrôlé : le **Conseil constitutionnel** vérifie qu’une loi est conforme à la Constitution. Depuis 2010, tout justiciable peut soulever une **QPC** (Question Prioritaire de Constitutionnalité) pour contester une loi déjà en vigueur. Au sommet de l’ordre judiciaire, la **Cour de cassation** unifie l’interprétation du droit.' },
            { t: 'example', h: 'Un maire face à la hiérarchie des normes', c: 'Un maire prend un **arrêté** (un règlement) interdisant totalement de manifester dans sa commune. Un habitant le conteste. \n→ L’arrêté est une **norme inférieure** : il doit respecter la **loi** et la **Constitution**, qui garantissent la liberté de manifester. Une interdiction générale et absolue est donc **illégale** : le juge administratif peut l’annuler. La **hiérarchie des normes** protège ainsi les libertés.' },
          ],
        },
        {
          h: 'Droit privé et droit public',
          blocks: [
            { t: 'p', c: 'Grande distinction : le **droit privé** régit les rapports entre **particuliers** (droit civil, commercial, du travail) ; le **droit public** régit l’**État** et ses rapports avec les citoyens (droit constitutionnel, administratif).' },
          ],
        },
      ],
      essentiel: [
        'Fonctions du droit : **organiser, pacifier, protéger, sanctionner** ; dans l’**État de droit**, l’État est soumis au droit (+ **laïcité**, **ordre public**).',
        'Règle de droit = **générale, impersonnelle, obligatoire, coercitive** (contrainte / sanction de l’État) (≠ règle morale/religieuse).',
        'Sources : **Constitution > traités/UE > lois > règlements** (+ jurisprudence, coutume) ; contrôle par le **Conseil constitutionnel** et la **QPC**.',
        '**Droit privé** (particuliers) vs **droit public** (État).',
      ],
      resources: [
        { kind: 'video', label: 'Qu’est-ce que le droit ? Fonctions et sources', note: 'Vidéos — recherche YouTube', url: yt('qu est ce que le droit fonctions règle sources hiérarchie des normes première STMG') },
        { kind: 'video', label: 'État de droit, hiérarchie des normes, QPC', note: 'Vidéos — recherche YouTube', url: yt('État de droit hiérarchie des normes QPC Conseil constitutionnel première STMG') },
      ],
      games: [
        {
          id: 'p1-droit-t1-qcm',
          type: 'qcm',
          title: 'QCM — La règle de droit',
          icon: '❓',
          questions: [
            { q: 'La règle de droit est générale, impersonnelle, obligatoire et…', choices: ['coercitive', 'facultative', 'religieuse', 'secrète'], answer: 0, explain: 'Coercitive : elle est assortie de la contrainte / sanction de l’État en cas de non-respect. C’est le 4ᵉ caractère.' },
            { q: 'Ce qui distingue une règle de droit d’une règle morale, c’est…', choices: ['son caractère coercitif (la sanction de l’État)', 'sa longueur', 'son ancienneté', 'sa langue'], answer: 0, explain: 'La règle morale relève de la conscience : elle n’est pas assortie de la contrainte étatique.' },
            { q: 'Dans un État de droit…', choices: ['l’État lui-même est soumis au droit', 'l’État est au-dessus des lois', 'seuls les citoyens obéissent au droit', 'le droit n’existe pas'], answer: 0, explain: 'Personne n’est au-dessus de la loi, pas même la puissance publique.' },
            { q: 'La neutralité de l’État en matière religieuse s’appelle…', choices: ['la laïcité', 'l’ordre public', 'la jurisprudence', 'la coutume'], answer: 0, explain: 'La laïcité garantit la liberté de conscience et la neutralité de l’État.' },
            { q: 'Au sommet de la hiérarchie des normes :', choices: ['la Constitution', 'un arrêté municipal', 'un contrat', 'un règlement intérieur'], answer: 0, explain: 'La Constitution (bloc de constitutionnalité) prime sur toutes les autres normes.' },
            { q: 'La QPC permet à un justiciable de…', choices: ['contester une loi qu’il juge contraire à la Constitution', 'écrire une nouvelle loi', 'juger un crime', 'signer un contrat'], answer: 0, explain: 'La Question Prioritaire de Constitutionnalité conduit au Conseil constitutionnel.' },
            { q: 'L’ensemble des décisions des tribunaux qui interprètent la règle s’appelle…', choices: ['la jurisprudence', 'la coutume', 'la doctrine', 'la loi'], answer: 0, explain: 'La jurisprudence précise et interprète la règle de droit.' },
            { q: 'Le droit du travail relève du droit…', choices: ['privé', 'public', 'constitutionnel', 'international'], answer: 0, explain: 'Le droit privé régit les rapports entre particuliers (dont employeur/salarié).' },
          ],
        },
        {
          id: 'p1-droit-t1-ordre',
          type: 'ordre',
          title: 'Remise en ordre — Hiérarchie des normes',
          icon: '🔢',
          instruction: 'Classe les sources **écrites** de la plus élevée à la plus basse.',
          steps: ['Constitution', 'Traités et droit de l’UE', 'Lois', 'Règlements (décrets, arrêtés)'],
          explain: 'Constitution > traités/UE > lois > règlements. La **jurisprudence** et la **coutume** sont aussi des sources du droit, mais **non écrites** : elles n’apparaissent pas dans cette hiérarchie des normes écrites (d’où leur absence ici), ce qui n’enlève rien à leur valeur de source.',
        },
        {
          id: 'p1-droit-t1-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'Une règle de droit vise une personne en particulier.', answer: false, explain: 'Faux : elle est générale et impersonnelle.' },
            { statement: 'Dans un État de droit, l’État est soumis au droit.', answer: true, explain: 'Vrai : nul n’est au-dessus de la loi.' },
            { statement: 'La jurisprudence est une source du droit.', answer: true, explain: 'Vrai : les décisions des tribunaux interprètent la règle. C’est une source **non écrite** (comme la coutume) : elle ne figure pas dans la hiérarchie des normes écrites, mais reste bien une source du droit.' },
            { statement: 'Une loi peut être contraire à la Constitution.', answer: false, explain: 'Faux : elle doit respecter la norme supérieure (contrôle du Conseil constitutionnel).' },
          ],
        },
        {
          id: 'p1-droit-t1-flash',
          type: 'flashcard',
          title: 'Flashcards — La règle de droit',
          icon: '🃏',
          cards: [
            { front: 'Fonctions du droit', back: 'Organiser, pacifier/sécuriser, protéger, arbitrer et sanctionner.' },
            { front: 'État de droit', back: 'La puissance publique est elle-même soumise au droit.' },
            { front: 'Laïcité / ordre public', back: 'Neutralité religieuse de l’État / règles essentielles auxquelles on ne peut déroger.' },
            { front: 'Caractères de la règle de droit', back: 'Générale, impersonnelle, obligatoire, coercitive (contrainte / sanction de l’État).' },
            { front: 'Hiérarchie des normes', back: 'Constitution > traités/UE > lois > règlements.' },
            { front: 'QPC', back: 'Question Prioritaire de Constitutionnalité : contester une loi en vigueur.' },
          ],
        },
      ],
    },
    {
      id: 'p1-droit-t2',
      name: 'Thème 2 — Comment le droit permet-il de régler un litige ?',
      short: 'Le litige',
      keywords: 'litige demandeur défendeur prétentions acte juridique fait juridique preuve charge de la preuve objet preuve parfaite imparfaite acte authentique acte sous signature privée aveu serment témoignage présomption preuve électronique organisation judiciaire ordre judiciaire administratif juridictions civiles pénales procès civil pénal instance assignation audience délibéré jugement arrêt mise en examen partie civile premier degré appel pourvoi cassation accord amiable CJUE CEDH',
      intro:
        'Quand un désaccord dégénère, il devient un **litige**. Le droit offre des moyens de le résoudre : d’abord en **prouvant** son droit, puis, si besoin, en **saisissant le juge** — dont les décisions peuvent faire l’objet de **voies de recours**.',
      cours: [
        {
          h: 'Le litige et les parties',
          blocks: [
            { t: 'p', c: 'Un **litige** est un **désaccord juridique** entre deux parties aux **prétentions** opposées. Devant le juge, celui qui saisit la justice pour réclamer un droit est le **demandeur** ; celui contre qui l’action est dirigée est le **défendeur**.' },
            { t: 'p', c: 'À l’origine des droits et obligations, on distingue :' },
            { t: 'table', head: ['Acte juridique', 'Fait juridique'], rows: [
              ['Volonté de produire des effets de droit', 'Événement qui produit des effets de droit sans les avoir voulus'],
              ['Ex. un contrat, un testament', 'Ex. un accident, un dommage, une naissance'],
            ] },
          ],
        },
        {
          h: 'La preuve : charge, objet et modes',
          blocks: [
            { t: 'p', c: 'Pour faire valoir un droit, il faut le **prouver**. La **charge de la preuve** pèse sur le **demandeur** : c’est à celui qui réclame l’exécution d’une obligation d’en apporter la preuve. La preuve doit porter sur l’**objet** du litige et être obtenue **loyalement**.' },
            { t: 'p', c: 'On classe les modes de preuve en deux catégories selon leur **force probante** :' },
            { t: 'table', head: ['Preuves parfaites', 'Preuves imparfaites'], rows: [
              ['Valeur fixée par la loi : elles s’imposent au juge, qui doit les admettre', 'Laissées à la libre appréciation du juge (intime conviction)'],
              ['Acte authentique, acte sous signature privée, aveu judiciaire, serment', 'Témoignage, indice, présomption'],
            ] },
            { t: 'warning', c: 'Attention : une preuve parfaite n’est pas « n’importe quel écrit ». C’est un mode de preuve dont la **valeur est déterminée par la loi**. L’**acte authentique** est reçu par un **officier public** (ex. un notaire) ; l’**acte sous signature privée** est un écrit **signé par les parties**. La **preuve électronique** est admise si l’on peut identifier son auteur et en garantir l’intégrité.' },
            { t: 'tip', c: 'D’où l’importance de conserver des **écrits** (contrats, reçus, factures), surtout pour les engagements importants.' },
          ],
        },
        {
          h: 'Le recours au juge : l’organisation judiciaire',
          blocks: [
            { t: 'p', c: 'La justice est organisée en **deux ordres** :' },
            { t: 'list', c: [
              '**Ordre judiciaire** : litiges entre particuliers (**juridictions civiles**) et infractions (**juridictions pénales**).',
              '**Ordre administratif** : litiges impliquant l’**administration**.',
            ] },
            { t: 'p', c: 'Il faut distinguer le **procès civil** (il oppose des particuliers et vise à **réparer** : dommages et intérêts) du **procès pénal** (il vise à **sanctionner** une infraction au nom de la société).' },
          ],
        },
        {
          h: 'Le déroulement d’une instance',
          blocks: [
            { t: 'p', c: 'Une fois le tribunal saisi, l’affaire suit une **instance** (la procédure en cours). En matière civile, le procès débute souvent par une **assignation** : l’acte par lequel le demandeur informe le défendeur qu’un procès est engagé et le convoque devant le juge. L’affaire est examinée lors d’une **audience** (où les parties, souvent par leurs avocats, présentent leurs arguments), puis les juges se retirent en **délibéré** pour rendre leur décision.' },
            { t: 'p', c: 'La décision s’appelle un **jugement** (rendu par un tribunal) ou un **arrêt** (rendu par une cour d’appel ou la Cour de cassation). En matière pénale, une personne soupçonnée peut être **mise en examen** lorsqu’il existe contre elle des indices graves ou concordants ; la victime peut se constituer **partie civile** pour demander, au cours du procès pénal, la réparation de son préjudice.' },
            { t: 'example', h: 'Un litige de voisinage', c: 'Léa (la **demanderesse**) reproche à son voisin (le **défendeur**) un dégât des eaux. Elle le fait **assigner** devant le tribunal judiciaire : l’**instance** est ouverte. Lors de l’**audience**, chacun présente ses **preuves**. Après le **délibéré**, le tribunal rend un **jugement** condamnant le voisin à l’indemniser. Mécontent, celui-ci fait **appel** : la cour d’appel rejugera l’affaire et rendra un **arrêt**.' },
          ],
        },
        {
          h: 'Les voies de recours et l’accord amiable',
          blocks: [
            { t: 'p', c: 'Une décision de justice peut être contestée par les **voies de recours** :' },
            { t: 'list', c: [
              '**premier degré** : le tribunal juge l’affaire (les faits et le droit) ;',
              '**appel** : une **cour d’appel** rejuge entièrement l’affaire (faits + droit) ;',
              '**pourvoi en cassation** : la **Cour de cassation** vérifie seulement la **bonne application du droit**, sans rejuger les faits.',
            ] },
            { t: 'p', c: 'Un litige peut aussi se terminer par un **accord amiable** entre les parties, sans aller jusqu’au jugement. Enfin, deux **juridictions européennes** peuvent intervenir : la **CJUE** (Cour de justice de l’Union européenne, respect du droit de l’UE) et la **CEDH** (Cour européenne des droits de l’homme, respect des libertés fondamentales).' },
          ],
        },
      ],
      essentiel: [
        '**Litige** = désaccord aux prétentions opposées ; **demandeur** (qui réclame) vs **défendeur**.',
        '**Acte juridique** (volonté, ex. contrat) vs **fait juridique** (événement non voulu, ex. accident).',
        '**Charge de la preuve** sur le **demandeur** ; **preuves parfaites** (valeur fixée par la loi : acte authentique, acte sous signature privée, aveu, serment) vs **imparfaites** (témoignage, indice, présomption).',
        'Deux ordres (**judiciaire** civil/pénal, **administratif**) ; voies de recours : **1er degré → appel → pourvoi en cassation** (+ CJUE, CEDH).',
      ],
      resources: [
        { kind: 'video', label: 'Le litige et la preuve', note: 'Vidéos — recherche YouTube', url: yt('litige charge de la preuve preuve parfaite imparfaite première STMG droit') },
        { kind: 'video', label: 'Organisation judiciaire et voies de recours', note: 'Vidéos — recherche YouTube', url: yt('organisation judiciaire ordre judiciaire administratif appel cassation première STMG') },
      ],
      games: [
        {
          id: 'p1-droit-t2-qcm',
          type: 'qcm',
          title: 'QCM — Le litige',
          icon: '❓',
          questions: [
            { q: 'La charge de la preuve pèse en principe sur…', choices: ['le demandeur', 'le juge', 'le témoin', 'le défendeur'], answer: 0, explain: 'C’est au demandeur, celui qui réclame l’exécution d’une obligation, de prouver.' },
            { q: 'Un contrat, conclu volontairement pour produire des effets de droit, est un…', choices: ['acte juridique', 'fait juridique', 'témoignage', 'pourvoi'], answer: 0, explain: 'Acte juridique = manifestation de volonté ; le fait juridique (ex. accident) n’est pas voulu.' },
            { q: 'Une preuve parfaite se définit par le fait que…', choices: ['sa valeur est fixée par la loi et s’impose au juge', 'c’est n’importe quel écrit', 'c’est un simple témoignage', 'le juge peut l’ignorer'], answer: 0, explain: 'Acte authentique, acte sous signature privée, aveu, serment : le juge doit les admettre.' },
            { q: 'Un témoignage ou un indice est une preuve…', choices: ['imparfaite (libre appréciation du juge)', 'parfaite', 'interdite', 'authentique'], answer: 0, explain: 'Les preuves imparfaites sont appréciées librement par le juge (intime conviction).' },
            { q: 'Un litige avec l’administration relève de l’ordre…', choices: ['administratif', 'judiciaire', 'pénal', 'européen'], answer: 0, explain: 'L’ordre administratif juge les litiges impliquant l’administration.' },
            { q: 'La Cour de cassation…', choices: ['vérifie la bonne application du droit (sans rejuger les faits)', 'rejuge entièrement l’affaire', 'écrit les lois', 'gère l’administration'], answer: 0, explain: 'Elle contrôle le droit ; l’appel, lui, rejuge les faits.' },
            { q: 'Le procès pénal vise à…', choices: ['sanctionner une infraction au nom de la société', 'réparer un dommage entre particuliers', 'signer un contrat', 'écrire une loi'], answer: 0, explain: 'Le procès civil répare ; le procès pénal sanctionne.' },
          ],
        },
        {
          id: 'p1-droit-t2-tri',
          type: 'tri',
          title: 'Tri — Preuve parfaite ou imparfaite ?',
          icon: '🗂️',
          instruction: 'Classe chaque mode de preuve.',
          categories: [
            { id: 'parf', label: 'Preuve parfaite' },
            { id: 'imp', label: 'Preuve imparfaite' },
          ],
          items: [
            { text: 'Un acte notarié (acte authentique)', cat: 'parf' },
            { text: 'Un contrat écrit signé par les parties', cat: 'parf' },
            { text: 'Le témoignage d’un voisin', cat: 'imp' },
            { text: 'Un aveu fait devant le juge', cat: 'parf' },
            { text: 'Un simple indice', cat: 'imp' },
          ],
        },
        {
          id: 'p1-droit-t2-flash',
          type: 'flashcard',
          title: 'Flashcards — Le litige',
          icon: '🃏',
          cards: [
            { front: 'Demandeur / défendeur', back: 'Celui qui réclame en justice / celui contre qui l’action est dirigée.' },
            { front: 'Acte / fait juridique', back: 'Manifestation de volonté (contrat) / événement non voulu (accident).' },
            { front: 'Charge de la preuve', back: 'Elle pèse sur le demandeur.' },
            { front: 'Preuve parfaite', back: 'Valeur fixée par la loi (acte authentique, acte sous signature privée, aveu, serment) : s’impose au juge.' },
            { front: 'Preuve imparfaite', back: 'Témoignage, indice, présomption : libre appréciation du juge.' },
            { front: 'Déroulement (civil)', back: 'Assignation → instance → audience → délibéré → jugement (ou arrêt en appel).' },
            { front: 'Mise en examen / partie civile', back: 'Indices graves contre une personne (pénal) / victime qui demande réparation au procès pénal.' },
            { front: 'Voies de recours', back: '1er degré → appel (rejuge) → pourvoi en cassation (droit seulement).' },
          ],
        },
      ],
    },
    {
      id: 'p1-droit-t3',
      name: 'Thème 3 — Qui peut faire valoir ses droits ?',
      short: 'Les personnes',
      keywords: 'personnalité juridique personne physique morale nom domicile statut de l’animal capacité jouissance exercice incapacité mineur majeur protégé tutelle curatelle sauvegarde de justice représentation acte de disposition administration patrimoine actif passif unicité universalité indivisibilité incessibilité patrimoine d’affectation droits patrimoniaux extrapatrimoniaux',
      intro:
        'Pour avoir des droits, il faut être un **sujet de droit**, c’est-à-dire disposer de la **personnalité juridique**. On étudie qui la possède, dans quelle mesure on peut agir seul (la **capacité**), et ce qu’est le **patrimoine**.',
      cours: [
        {
          h: 'La personnalité juridique',
          blocks: [
            { t: 'p', c: 'C’est l’**aptitude à être titulaire de droits et d’obligations**. Elle est reconnue à deux catégories :' },
            { t: 'table', head: ['Personne physique', 'Personne morale'], rows: [
              ['Un être humain', 'Un groupement (société, association déclarée, État)'],
              ['De la naissance à la mort', 'Créée par l’immatriculation / la déclaration'],
              ['Identifiée par un nom et un domicile', 'Identifiée par une dénomination et un siège'],
            ] },
            { t: 'p', c: 'Toute personne est identifiée par des **éléments d’état civil** : notamment un **nom** et un **domicile** (le lieu de son principal établissement). Une personne morale a un **patrimoine distinct** de celui de ses membres et peut agir en justice.' },
            { t: 'tip', c: 'Le **statut de l’animal** : depuis 2015, la loi reconnaît l’animal comme un **être vivant doué de sensibilité** ; il reste toutefois soumis, pour l’essentiel, au **régime des biens**.' },
          ],
        },
        {
          h: 'La capacité juridique',
          blocks: [
            { t: 'p', c: 'On distingue la **capacité de jouissance** (avoir des droits) et la **capacité d’exercice** (pouvoir les exercer soi-même). Certaines personnes sont **incapables** et doivent être **représentées** ou **assistées** :' },
            { t: 'list', c: [
              'les **mineurs** non émancipés (représentés par leurs parents, titulaires de l’autorité parentale) ;',
              'les **majeurs protégés**, selon la gravité : **sauvegarde de justice** (protection légère et temporaire), **curatelle** (le majeur est **assisté**), **tutelle** (le majeur est **représenté**).',
            ] },
            { t: 'p', c: 'On distingue aussi les **actes d’administration** (gestion courante, ex. encaisser un loyer) des **actes de disposition** (qui engagent le patrimoine, ex. vendre un bien), pour lesquels la protection est plus forte.' },
            { t: 'example', h: 'Le scooter de Tom, 16 ans', c: 'Tom, **mineur**, achète seul un scooter d’occasion à 1 500 €. \n→ Tom a la **capacité de jouissance** (il peut être propriétaire) mais pas la pleine **capacité d’exercice** : cet **acte de disposition** dépasse la gestion courante d’un mineur. Ses **parents** (ses représentants) peuvent demander l’**annulation** de la vente. En revanche, acheter une place de cinéma (acte de la vie courante) resterait valable.' },
          ],
        },
        {
          h: 'Le patrimoine',
          blocks: [
            { t: 'p', c: 'Le **patrimoine** est l’ensemble des **droits et obligations** d’une personne **évaluables en argent** : un **actif** (les biens) et un **passif** (les dettes). Il obéit à des **principes** :' },
            { t: 'list', c: [
              '**unicité** : toute personne a un patrimoine et un seul ;',
              '**universalité** : l’actif répond du passif (les biens garantissent les dettes) ;',
              '**indivisibilité** : le patrimoine forme un tout ;',
              '**incessibilité** : on ne peut céder son patrimoine de son vivant (il se transmet à la mort).',
            ] },
            { t: 'p', c: 'Par exception, la loi admet un **patrimoine d’affectation** : une personne peut isoler certains biens pour une activité (ex. l’entrepreneur individuel), afin de **protéger son patrimoine personnel**. Enfin, on distingue les droits **patrimoniaux** des droits **extrapatrimoniaux** :' },
            { t: 'table', head: ['Droits patrimoniaux', 'Droits extrapatrimoniaux'], rows: [
              ['Valeur monétaire, cessibles, saisissables', 'Hors commerce, attachés à la personne, non cessibles'],
              ['Ex. droit de propriété, créances', 'Ex. vie privée, image, nom'],
            ] },
          ],
        },
      ],
      essentiel: [
        '**Personnalité juridique** = aptitude à être titulaire de droits et d’obligations ; **personne physique** (naissance→mort, nom, domicile) vs **personne morale** (patrimoine propre).',
        'Animal = **être vivant doué de sensibilité**, mais soumis au régime des biens.',
        '**Capacité de jouissance** vs **d’exercice** ; incapables : mineurs, majeurs protégés (**sauvegarde / curatelle / tutelle**).',
        '**Patrimoine** = actif + passif ; principes **unicité, universalité, indivisibilité, incessibilité** (+ **patrimoine d’affectation**).',
      ],
      resources: [
        { kind: 'video', label: 'La personnalité juridique et la capacité', note: 'Vidéos — recherche YouTube', url: yt('personnalité juridique personne physique morale capacité mineur majeur protégé première STMG') },
        { kind: 'video', label: 'Le patrimoine et ses principes', note: 'Vidéos — recherche YouTube', url: yt('patrimoine actif passif unicité patrimoine d’affectation première STMG droit') },
      ],
      games: [
        {
          id: 'p1-droit-t3-qcm',
          type: 'qcm',
          title: 'QCM — Les personnes',
          icon: '❓',
          questions: [
            { q: 'La personnalité juridique est l’aptitude à…', choices: ['être titulaire de droits et d’obligations', 'voter une loi', 'juger un litige', 'produire des biens'], answer: 0, explain: 'Elle fait de l’être un sujet de droit.' },
            { q: 'Une association déclarée est une personne…', choices: ['morale', 'physique', 'publique par nature', 'sans patrimoine'], answer: 0, explain: 'Elle a un patrimoine propre, distinct de celui de ses membres.' },
            { q: 'Un majeur placé sous tutelle est…', choices: ['représenté par son tuteur', 'totalement libre de tout acte', 'privé de personnalité juridique', 'un mineur'], answer: 0, explain: 'La tutelle représente le majeur ; la curatelle, elle, l’assiste.' },
            { q: 'Vendre un bien important est un acte…', choices: ['de disposition', 'd’administration', 'de jouissance', 'de procédure'], answer: 0, explain: 'Les actes de disposition engagent le patrimoine ; les actes d’administration sont la gestion courante.' },
            { q: 'Depuis 2015, l’animal est reconnu comme…', choices: ['un être vivant doué de sensibilité', 'une personne morale', 'une personne physique', 'un majeur protégé'], answer: 0, explain: 'Il reste néanmoins soumis pour l’essentiel au régime des biens.' },
            { q: 'Le principe selon lequel chaque personne n’a qu’un seul patrimoine est…', choices: ['l’unicité', 'l’universalité', 'l’indivisibilité', 'l’incessibilité'], answer: 0, explain: 'Unicité = un seul patrimoine par personne (sauf patrimoine d’affectation).' },
            { q: 'Le patrimoine comprend…', choices: ['les droits et obligations évaluables en argent (actif et passif)', 'seulement les revenus', 'les opinions', 'la nationalité'], answer: 0, explain: 'Actif (biens) + passif (dettes), évaluables en argent.' },
          ],
        },
        {
          id: 'p1-droit-t3-tri',
          type: 'tri',
          title: 'Tri — Patrimonial ou extrapatrimonial ?',
          icon: '🗂️',
          instruction: 'Classe chaque droit.',
          categories: [
            { id: 'pat', label: 'Patrimonial' },
            { id: 'ext', label: 'Extrapatrimonial' },
          ],
          items: [
            { text: 'Le droit de propriété', cat: 'pat' },
            { text: 'Le droit à la vie privée', cat: 'ext' },
            { text: 'Une créance (somme due)', cat: 'pat' },
            { text: 'Le droit à l’image', cat: 'ext' },
            { text: 'Le droit au nom', cat: 'ext' },
          ],
        },
        {
          id: 'p1-droit-t3-flash',
          type: 'flashcard',
          title: 'Flashcards — Les personnes',
          icon: '🃏',
          cards: [
            { front: 'Personnalité juridique', back: 'Aptitude à être titulaire de droits et d’obligations.' },
            { front: 'Personne morale', back: 'Groupement au patrimoine propre distinct de ses membres.' },
            { front: 'Capacité de jouissance / d’exercice', back: 'Avoir des droits / pouvoir les exercer soi-même.' },
            { front: 'Majeurs protégés', back: 'Sauvegarde de justice, curatelle (assistance), tutelle (représentation).' },
            { front: 'Patrimoine (principes)', back: 'Unicité, universalité, indivisibilité, incessibilité (+ patrimoine d’affectation).' },
          ],
        },
      ],
    },
    {
      id: 'p1-droit-t4',
      name: 'Thème 4 — Quels sont les droits reconnus aux personnes ?',
      short: 'Les droits des personnes',
      keywords: 'droit de propriété usus fructus abusus caractères absolu exclusif perpétuel bien corporel incorporel trouble anormal du voisinage propriété intellectuelle industrielle marque brevet monopole d’exploitation action en contrefaçon droit d’auteur droit moral patrimonial droits de la personnalité vie privée image dignité protection des données RGPD CNIL inaliénable insaisissable imprescriptible',
      intro:
        'Les personnes disposent de **droits**. On étudie ici le **droit de propriété** (y compris la **propriété intellectuelle**) et les **droits de la personnalité**, essentiels à l’ère numérique (**données personnelles**).',
      cours: [
        {
          h: 'Le droit de propriété',
          blocks: [
            { t: 'p', c: 'Le droit de propriété est le droit le plus complet sur un **bien** (qui peut être **corporel** — une maison, une voiture — ou **incorporel** — une créance, une marque). Il comporte **trois attributs** :' },
            { t: 'list', c: [
              '**Usus** : le droit d’**utiliser** le bien.',
              '**Fructus** : le droit d’en **percevoir les revenus** (ex. un loyer).',
              '**Abusus** : le droit d’en **disposer** (vendre, détruire).',
            ] },
            { t: 'p', c: 'On lui reconnaît trois **caractères** : **absolu** (le plus large possible), **exclusif** (le propriétaire est seul à en jouir) et **perpétuel** (il dure tant que le bien existe).' },
            { t: 'warning', c: 'Ces caractères connaissent des **limites** : respect de l’**intérêt général** (expropriation, urbanisme) et du voisinage. Ainsi, un **trouble anormal du voisinage** (bruit, nuisances excessives) engage la responsabilité de son auteur.' },
          ],
        },
        {
          h: 'La propriété intellectuelle',
          blocks: [
            { t: 'p', c: 'Les **créations de l’esprit** sont protégées. On distingue deux ensembles :' },
            { t: 'table', head: ['Propriété industrielle', 'Droit d’auteur'], rows: [
              ['Protège les créations utiles à l’activité économique', 'Protège les œuvres de l’esprit (livre, musique, logiciel)'],
              ['Marque (signe distinctif), brevet (invention)', 'Naît sans formalité, dès la création'],
              ['Confère un monopole d’exploitation', 'Droit moral (perpétuel) + droits patrimoniaux (limités dans le temps)'],
            ] },
            { t: 'p', c: 'La **marque** et le **brevet** confèrent à leur titulaire un **monopole d’exploitation**. Toute atteinte (copie, reproduction sans autorisation) constitue une **contrefaçon**, sanctionnée par une **action en contrefaçon**. Le **droit d’auteur** comprend un **droit moral** (respect du nom et de l’œuvre, inaliénable et perpétuel) et des **droits patrimoniaux** (exploiter l’œuvre et en tirer des revenus).' },
          { t: 'example', h: 'Le faux sac de marque', c: 'Une boutique vend des sacs imitant le **logo** et le **nom** d’une grande marque. \n→ La marque est protégée par un **monopole d’exploitation** : reproduire son signe distinctif sans autorisation est une **contrefaçon**. Le titulaire peut engager une **action en contrefaçon** pour faire cesser la vente et obtenir des dommages et intérêts.' },
          ],
        },
        {
          h: 'Les droits de la personnalité et la protection des données',
          blocks: [
            { t: 'p', c: 'Les **droits de la personnalité** protègent la personne elle-même : droit au respect de la **vie privée**, droit à l’**image**, droit à la **dignité** et au **nom**. Ce sont des droits **extrapatrimoniaux**, aux caractères particuliers : **inaliénables** (on ne peut les vendre), **insaisissables** et **imprescriptibles**.' },
            { t: 'p', c: 'À l’ère numérique, la **protection des données personnelles** est renforcée. Le **RGPD** (règlement européen) encadre la collecte et l’usage des données ; en France, la **CNIL** veille à leur respect et peut sanctionner les manquements.' },
          { t: 'example', h: 'La photo publiée sans accord', c: 'Un ami publie sur un réseau social une photo de Sarah, prise en soirée, sans lui demander. \n→ Le **droit à l’image** (droit de la personnalité, **inaliénable**) suppose l’**accord** de la personne. Sarah peut exiger le **retrait** de la photo et, en cas de préjudice, une réparation. Si le site conserve ses données, le **RGPD** lui donne aussi un droit d’**effacement**, dont la **CNIL** garantit le respect.' },
          ],
        },
      ],
      essentiel: [
        'Droit de propriété = **usus** + **fructus** + **abusus** ; caractères **absolu, exclusif, perpétuel** (avec des **limites** : trouble anormal du voisinage, intérêt général).',
        'Biens **corporels** vs **incorporels**.',
        'Propriété intellectuelle : **marque / brevet** (propriété industrielle, monopole d’exploitation, **action en contrefaçon**) et **droit d’auteur** (droit **moral** + droits **patrimoniaux**).',
        '**Droits de la personnalité** (vie privée, image, dignité) = extrapatrimoniaux, **inaliénables, insaisissables, imprescriptibles** ; données protégées par le **RGPD** et la **CNIL**.',
      ],
      resources: [
        { kind: 'video', label: 'Le droit de propriété (usus, fructus, abusus)', note: 'Vidéos — recherche YouTube', url: yt('droit de propriété usus fructus abusus caractères absolu exclusif perpétuel première STMG') },
        { kind: 'video', label: 'Propriété intellectuelle, RGPD et données personnelles', note: 'Vidéos — recherche YouTube', url: yt('propriété intellectuelle marque brevet contrefaçon RGPD CNIL première STMG droit') },
      ],
      games: [
        {
          id: 'p1-droit-t4-qcm',
          type: 'qcm',
          title: 'QCM — Les droits des personnes',
          icon: '❓',
          questions: [
            { q: 'Le droit de percevoir les revenus d’un bien (ex. un loyer) est…', choices: ['le fructus', 'l’usus', 'l’abusus', 'l’usufruit du voisin'], answer: 0, explain: 'Usus = utiliser ; fructus = revenus ; abusus = disposer.' },
            { q: 'Vendre ou détruire un bien correspond à…', choices: ['l’abusus', 'l’usus', 'le fructus', 'la médiation'], answer: 0, explain: 'L’abusus est le droit de disposer du bien.' },
            { q: 'Les caractères du droit de propriété sont…', choices: ['absolu, exclusif, perpétuel', 'général, impersonnel, obligatoire', 'certain, direct, personnel', 'oral, écrit, tacite'], answer: 0, explain: 'Absolu (le plus large), exclusif (seul à en jouir), perpétuel (dure tant que le bien existe).' },
            { q: 'Une marque protège…', choices: ['un signe distinctif, avec un monopole d’exploitation', 'une invention technique uniquement', 'une œuvre littéraire', 'un salaire'], answer: 0, explain: 'La marque (propriété industrielle) donne un monopole d’exploitation ; le brevet protège l’invention.' },
            { q: 'Reproduire une œuvre sans autorisation constitue…', choices: ['une contrefaçon', 'un acte authentique', 'un trouble du voisinage', 'une preuve parfaite'], answer: 0, explain: 'La contrefaçon est sanctionnée par une action en contrefaçon.' },
            { q: 'Le droit d’auteur comprend…', choices: ['un droit moral et des droits patrimoniaux', 'seulement un droit à réparation', 'un monopole d’État', 'une preuve imparfaite'], answer: 0, explain: 'Droit moral (respect de l’œuvre, perpétuel) + droits patrimoniaux (exploiter, tirer des revenus).' },
            { q: 'En France, l’organisme qui veille à la protection des données personnelles est…', choices: ['la CNIL', 'la Cour de cassation', 'l’INSEE', 'l’Autorité de la concurrence'], answer: 0, explain: 'La CNIL applique le RGPD et peut sanctionner les manquements.' },
          ],
        },
        {
          id: 'p1-droit-t4-assoc',
          type: 'association',
          title: 'Association — Notion ↔ sens',
          icon: '🔗',
          pairs: [
            { left: 'Usus', right: 'Utiliser le bien' },
            { left: 'Fructus', right: 'Percevoir les revenus (loyer)' },
            { left: 'Abusus', right: 'Disposer (vendre, détruire)' },
            { left: 'Brevet', right: 'Protège une invention (monopole d’exploitation)' },
            { left: 'RGPD / CNIL', right: 'Protection des données personnelles' },
          ],
        },
        {
          id: 'p1-droit-t4-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'Le droit de propriété autorise à causer un trouble anormal du voisinage.', answer: false, explain: 'Faux : c’est une limite au droit de propriété.' },
            { statement: 'La marque et le brevet confèrent un monopole d’exploitation.', answer: true, explain: 'Vrai : leur titulaire est seul à pouvoir les exploiter.' },
            { statement: 'Le droit à la vie privée est un droit de la personnalité, inaliénable.', answer: true, explain: 'Vrai : extrapatrimonial, inaliénable, insaisissable, imprescriptible.' },
            { statement: 'Une donnée personnelle peut être collectée et utilisée sans aucune règle.', answer: false, explain: 'Faux : le RGPD encadre la collecte et l’usage ; la CNIL veille.' },
          ],
        },
        {
          id: 'p1-droit-t4-flash',
          type: 'flashcard',
          title: 'Flashcards — Les droits',
          icon: '🃏',
          cards: [
            { front: 'Usus / fructus / abusus', back: 'Utiliser / percevoir les revenus / disposer.' },
            { front: 'Caractères de la propriété', back: 'Absolu, exclusif, perpétuel (avec des limites).' },
            { front: 'Propriété industrielle', back: 'Marque et brevet : monopole d’exploitation, protégé par l’action en contrefaçon.' },
            { front: 'Droit d’auteur', back: 'Droit moral (perpétuel) + droits patrimoniaux (exploitation).' },
            { front: 'Droits de la personnalité', back: 'Vie privée, image, dignité : inaliénables, insaisissables, imprescriptibles.' },
            { front: 'RGPD / CNIL', back: 'Cadre européen des données / autorité française de contrôle.' },
          ],
        },
      ],
    },
  ],
}

// ===========================================================================
// ÉCONOMIE (5 thèmes)
// ===========================================================================
const economieP = {
  id: 'p1-economie',
  name: 'Économie',
  short: 'Économie',
  icon: '📈',
  color: '#dc2626',
  niveau: 'premiere',
  tagline: 'Produire, mesurer, répartir et financer la richesse.',
  chapters: [
    {
      id: 'p1-eco-t1',
      name: 'Thème 1 — Les grandes questions économiques',
      short: 'Grandes questions',
      keywords: 'besoin rareté choix coût agents économiques ménages entreprises administrations bien service utilité décroissante',
      intro:
        'Les **besoins** sont quasi illimités mais les **ressources** sont **rares** : la rareté oblige à faire des **choix**. C’est le cœur de la science économique.',
      cours: [
        {
          h: 'Les besoins, les biens et les services',
          blocks: [
            { t: 'p', c: 'Un **besoin** est une sensation de manque que l’on cherche à satisfaire. On distingue les besoins **primaires** (vitaux : manger, se loger) et **secondaires** (loisirs, culture). Les besoins sont **quasi illimités** et se renouvellent sans cesse.' },
            { t: 'p', c: 'Pour les satisfaire, on utilise des **biens** et des **services** :' },
            { t: 'table', head: ['Bien', 'Service'], rows: [
              ['**Matériel**, on peut le toucher, le stocker', '**Immatériel**, consommé au moment où il est produit'],
              ['Un pain, un ordinateur, une voiture', 'Une coupe de cheveux, un cours, un trajet en bus'],
            ] },
            { t: 'p', c: 'Un bien peut être **libre** (gratuit et abondant, comme l’air) ou **économique** (rare, il a un prix). L’économie ne s’intéresse qu’aux biens **économiques**.' },
          ],
        },
        {
          h: 'La rareté et les choix',
          blocks: [
            { t: 'p', c: 'Le **problème économique** fondamental : les besoins sont **illimités** mais les **ressources** (temps, argent, matières) sont **rares**. La **rareté** est le point de départ de toute la science économique.' },
            { t: 'p', c: 'Parce que les ressources sont rares, chaque agent doit **choisir** : un ménage avec un budget limité, une entreprise avec des moyens limités, l’État avec un budget contraint. **Faire de l’économie, c’est arbitrer.**' },
            { t: 'tip', c: 'Retiens la formule : « des besoins illimités, des ressources limitées → il faut **choisir** ». C’est la définition même de l’économie.' },
          ],
        },
        {
          h: 'Le coût d’opportunité',
          blocks: [
            { t: 'p', c: 'Tout choix a un **coût** : le **coût d’opportunité** est la valeur de **ce à quoi on renonce** en choisissant autre chose. Choisir, c’est toujours renoncer.' },
            { t: 'example', h: 'Le coût d’opportunité', c: 'Avec 1 000 € d’économies, tu peux partir en voyage **ou** acheter un ordinateur. \n→ Si tu choisis le voyage, le **coût d’opportunité** est l’ordinateur auquel tu renonces. \nDe même, une heure passée à travailler est une heure qu’on ne passe pas à se reposer : le temps aussi a un coût d’opportunité.' },
          ],
        },
        {
          h: 'L’utilité et le comportement du consommateur',
          blocks: [
            { t: 'p', c: 'Le **consommateur** cherche à maximiser son **utilité** : la **satisfaction** que lui procure la consommation, compte tenu de son **budget**. Il compare l’utilité qu’il retire d’un bien à son **prix**.' },
            { t: 'p', c: 'L’utilité est **décroissante** : chaque unité supplémentaire d’un même bien procure **moins** de satisfaction que la précédente. Le premier verre d’eau dans le désert procure une énorme satisfaction, le dixième beaucoup moins.' },
            { t: 'warning', c: 'C’est ce qui explique qu’on ne consomme pas une quantité infinie d’un même bien, même s’il est bon marché : passé un certain point, l’utilité supplémentaire devient trop faible.' },
          ],
        },
        {
          h: 'Le producteur et le profit',
          blocks: [
            { t: 'p', c: 'Le **producteur** (l’entreprise) décide **quoi produire**, **comment** et **en quelle quantité**. Son objectif principal est de dégager un **profit** = recettes − coûts.' },
            { t: 'p', c: 'Il combine des **facteurs de production** : le **travail** (les salariés) et le **capital** (machines, locaux). Il cherche la combinaison la plus **efficiente** (le meilleur résultat au moindre coût).' },
          ],
        },
        {
          h: 'Les agents économiques',
          blocks: [
            { t: 'p', c: 'Un **agent économique** est un acteur qui prend des décisions économiques. On les regroupe en grandes catégories selon leur **fonction principale** :' },
            { t: 'table', head: ['Agent', 'Rôle principal'], rows: [
              ['Ménages', 'Consomment, fournissent du travail, épargnent'],
              ['Entreprises', 'Produisent des biens et services marchands'],
              ['Institutions financières (banques)', 'Financent l’économie (crédits, placements)'],
              ['Administrations publiques', 'Produisent des services non marchands, redistribuent'],
              ['Reste du monde', 'Réalise les échanges avec l’étranger (import/export)'],
            ] },
          ],
        },
        {
          h: 'Le circuit économique',
          blocks: [
            { t: 'p', c: 'Les agents sont **interdépendants** : ils échangent en permanence des **flux**. Le **circuit économique** représente ces échanges. Par exemple, entre ménages et entreprises :' },
            { t: 'list', c: [
              'les ménages fournissent du **travail** aux entreprises et reçoivent des **revenus** (salaires) ;',
              'avec ces revenus, ils **consomment** les biens et services produits par les entreprises ;',
              'les entreprises reçoivent ainsi des **recettes**, qui financent la production… et le cycle recommence.',
            ] },
            { t: 'p', c: 'À chaque **flux réel** (bien, service, travail) correspond un **flux monétaire** de sens inverse (paiement). Le circuit montre que l’économie est un **système** où tout est lié.' },
          ],
        },
      ],
      essentiel: [
        'Un **besoin** (primaire/secondaire) se satisfait par des **biens** (matériels) ou **services** (immatériels) ; un bien économique est **rare** (≠ bien libre).',
        'Le problème économique : besoins **illimités** / ressources **rares** → il faut **choisir**.',
        '**Coût d’opportunité** = valeur de ce à quoi on renonce en choisissant.',
        'Le **consommateur** maximise son **utilité** (décroissante) sous contrainte de **budget** ; le **producteur** vise le **profit** (recettes − coûts) en combinant travail et capital.',
        'Agents : **ménages, entreprises, institutions financières, administrations, reste du monde**.',
        'Le **circuit économique** relie les agents par des **flux réels** et **monétaires** (de sens inverse).',
      ],
      resources: [
        { kind: 'video', label: 'Les grandes questions économiques', note: 'Vidéos — recherche YouTube', url: yt('grandes questions économiques rareté agents économiques première STMG') },
      ],
      games: [
        {
          id: 'p1-eco-t1-qcm',
          type: 'qcm',
          title: 'QCM — Grandes questions',
          icon: '❓',
          questions: [
            { q: 'Le problème économique de base vient de ce que les besoins sont illimités et les ressources…', choices: ['rares', 'infinies', 'gratuites', 'interdites'], answer: 0, explain: 'La rareté oblige à faire des choix.' },
            { q: 'L’utilité procurée par la consommation est…', choices: ['décroissante', 'toujours croissante', 'constante', 'nulle'], answer: 0, explain: 'Chaque unité supplémentaire procure moins de satisfaction.' },
            { q: 'Les ménages, dans le circuit économique…', choices: ['consomment et fournissent du travail', 'produisent tous les biens', 'votent les lois', 'fixent les taux'], answer: 0, explain: 'Rôle des ménages : consommation et offre de travail.' },
            { q: 'Un service se distingue d’un bien car il est…', choices: ['immatériel', 'toujours gratuit', 'toujours importé', 'stockable'], answer: 0, explain: 'Le service est immatériel, le bien est matériel.' },
          ],
        },
        {
          id: 'p1-eco-t1-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'Tout choix économique implique un coût (renoncement).', answer: true, explain: 'Vrai : choisir, c’est renoncer.' },
            { statement: 'Les banques sont des agents qui financent l’économie.', answer: true, explain: 'Vrai : ce sont les institutions financières.' },
            { statement: 'L’utilité d’un bien augmente à chaque unité consommée.', answer: false, explain: 'Faux : l’utilité est décroissante.' },
          ],
        },
        {
          id: 'p1-eco-t1-flash',
          type: 'flashcard',
          title: 'Flashcards — Bases',
          icon: '🃏',
          cards: [
            { front: 'Rareté', back: 'Ressources limitées face à des besoins illimités.' },
            { front: 'Coût (d’un choix)', back: 'Ce à quoi on renonce en choisissant.' },
            { front: 'Utilité décroissante', back: 'Chaque unité supplémentaire procure moins de satisfaction.' },
            { front: 'Agents économiques', back: 'Ménages, entreprises, banques, administrations, reste du monde.' },
          ],
        },
      ],
    },
    {
      id: 'p1-eco-t2',
      name: 'Thème 2 — Comment crée-t-on des richesses et comment les mesure-t-on ?',
      short: 'Créer & mesurer la richesse',
      keywords: 'production valeur ajoutée consommations intermédiaires PIB croissance limites facteurs travail capital productivité',
      intro:
        'Produire, c’est créer des biens et services. Pour mesurer la richesse **réellement créée**, on utilise la **valeur ajoutée**, puis le **PIB**.',
      cours: [
        {
          h: 'Produire : production marchande et non marchande',
          blocks: [
            { t: 'p', c: '**Produire**, c’est créer des **biens** et des **services** pour satisfaire des besoins. On distingue deux types de production :' },
            { t: 'table', head: ['Production marchande', 'Production non marchande'], rows: [
              ['Vendue sur un **marché** à un prix', 'Fournie **gratuitement** ou quasi gratuitement'],
              ['Couvre ses coûts par les recettes', 'Financée par les **impôts** et cotisations'],
              ['Une baguette, une place de cinéma', 'L’école publique, la justice, l’éclairage public'],
            ] },
            { t: 'p', c: 'La production non marchande (assurée surtout par les **administrations publiques**) est essentielle mais ne se vend pas : on la mesure par son **coût** de production.' },
          ],
        },
        {
          h: 'Les facteurs de production',
          blocks: [
            { t: 'p', c: 'Pour produire, on combine deux **facteurs de production** :' },
            { t: 'table', head: ['Facteur travail', 'Facteur capital'], rows: [
              ['La **main-d’œuvre** (les salariés)', 'Les moyens matériels durables'],
              ['Heures travaillées, qualification', 'Machines, bâtiments, outils, logiciels'],
            ] },
            { t: 'p', c: 'On distingue le **capital fixe** (machines, bâtiments, qui durent plusieurs cycles) du **capital circulant** (matières premières, consommées dans la production). Augmenter le stock de capital, c’est **investir**.' },
          ],
        },
        {
          h: 'La productivité et le progrès technique',
          blocks: [
            { t: 'p', c: 'La **productivité** mesure l’**efficacité** de la production : c’est le rapport entre ce qui est produit et les moyens utilisés.' },
            { t: 'formula', c: 'Productivité du travail = production / nombre d’heures (ou de travailleurs)' },
            { t: 'p', c: 'Gagner en productivité, c’est produire **plus avec autant** (ou autant avec moins). Les gains de productivité viennent surtout du **progrès technique** (nouvelles machines, automatisation, numérique) et de la **qualification** de la main-d’œuvre. C’est un moteur essentiel de la **croissance**.' },
          ],
        },
        {
          h: 'La valeur ajoutée',
          blocks: [
            { t: 'p', c: 'Pour mesurer la richesse **réellement créée** par un producteur, on ne prend pas toute sa production : il faut retirer ce qu’il a acheté à d’autres pour produire (les **consommations intermédiaires** : matières, énergie, transformées ou détruites dans la production).' },
            { t: 'formula', c: 'Valeur ajoutée = valeur de la production − consommations intermédiaires' },
            { t: 'example', h: 'Calcul de la valeur ajoutée', c: 'Un menuisier vend **100 €** de meubles en utilisant **30 €** de bois. \n→ VA = 100 − 30 = **70 €**. \nC’est cette VA de 70 € qui représente la richesse qu’il a vraiment créée (pas les 100 €, car 30 € existaient déjà).' },
          ],
        },
        {
          h: 'La répartition de la valeur ajoutée',
          blocks: [
            { t: 'p', c: 'La valeur ajoutée est ensuite **partagée** (répartie) entre ceux qui ont contribué à la production :' },
            { t: 'list', c: [
              'les **salariés** reçoivent les **salaires** (rémunération du travail) ;',
              'l’**État** perçoit les **impôts** et cotisations ;',
              'les **banques** perçoivent les **intérêts** (sur les prêts) ;',
              'les **propriétaires** reçoivent les **bénéfices** ; une partie reste dans l’entreprise (**autofinancement**).',
            ] },
            { t: 'warning', c: 'Le **partage de la valeur ajoutée** entre salaires et profits est un enjeu majeur : c’est un arbitrage sensible, source de débats sociaux (« qui doit toucher quelle part ? »).' },
          ],
        },
        {
          h: 'Le PIB : mesurer la richesse d’un pays',
          blocks: [
            { t: 'p', c: 'Le **PIB** (Produit Intérieur Brut) mesure la richesse créée dans un **pays** pendant un **an**. C’est la **somme de toutes les valeurs ajoutées** produites sur le territoire.' },
            { t: 'formula', c: 'PIB = somme des valeurs ajoutées (produites sur un territoire, sur un an)' },
            { t: 'p', c: 'On additionne les VA plutôt que les productions pour **éviter de compter deux fois** la même richesse (le bois du menuisier serait compté à la fois chez le scieur et chez le menuisier).' },
          ],
        },
        {
          h: 'La croissance économique',
          blocks: [
            { t: 'p', c: 'La **croissance économique** est l’**augmentation du PIB** dans le temps. On la mesure par le **taux de croissance** (variation du PIB en %).' },
            { t: 'p', c: 'Ses moteurs : les **gains de productivité**, le **progrès technique**, l’**investissement**, l’augmentation de la population active. La croissance permet de créer des emplois et d’améliorer le niveau de vie… mais pas automatiquement de façon **équitable** ni **durable**.' },
          ],
        },
        {
          h: 'Les limites du PIB',
          blocks: [
            { t: 'p', c: 'Le PIB est utile mais **imparfait** comme indicateur de richesse et de bien-être :' },
            { t: 'list', c: [
              'il ignore le **travail non rémunéré** (bénévolat, tâches domestiques) et l’**économie souterraine** ;',
              'il ne dit rien des **inégalités** de répartition (un PIB élevé peut cacher de fortes inégalités) ;',
              'il ne mesure pas le **bien-être** ni la qualité de vie ;',
              'il **ignore les dégâts environnementaux** (une marée noire peut même faire monter le PIB via les dépenses de nettoyage !).',
            ] },
            { t: 'p', c: 'D’autres indicateurs complètent le PIB : l’**IDH** (Indice de Développement Humain : santé, éducation, niveau de vie) et des indicateurs de **développement durable**.' },
          ],
        },
      ],
      essentiel: [
        'Produire = créer biens/services ; production **marchande** (vendue) vs **non marchande** (gratuite, financée par l’impôt).',
        'Deux **facteurs de production** : **travail** + **capital** (fixe / circulant) ; investir = augmenter le capital.',
        'La **productivité** (production / moyens) et le **progrès technique** sont les moteurs de la croissance.',
        '**Valeur ajoutée = production − consommations intermédiaires** ; elle est **répartie** entre salariés, État, banques, propriétaires.',
        '**PIB = somme des valeurs ajoutées** d’un territoire sur un an ; la **croissance** = hausse du PIB.',
        'Le PIB est **limité** : ni bien-être, ni inégalités, ni environnement, ni travail non rémunéré → **IDH**, développement durable.',
      ],
      resources: [
        { kind: 'video', label: 'Valeur ajoutée, PIB, croissance', note: 'Vidéos — recherche YouTube', url: yt('valeur ajoutée PIB croissance facteurs de production première STMG économie') },
      ],
      games: [
        {
          id: 'p1-eco-t2-qcm',
          type: 'qcm',
          title: 'QCM — Créer et mesurer la richesse',
          icon: '❓',
          questions: [
            { q: 'La valeur ajoutée se calcule…', choices: ['production − consommations intermédiaires', 'production + impôts', 'salaires + profit', 'CA − TVA'], answer: 0, explain: 'VA = valeur de la production − consommations intermédiaires.' },
            { q: 'Une boulangerie produit 300 000 € en consommant 90 000 €. Sa VA est…', choices: ['210 000 €', '390 000 €', '90 000 €', '300 000 €'], answer: 0, explain: 'VA = 300 000 − 90 000 = 210 000 €.' },
            { q: 'Le PIB est…', choices: ['la somme des valeurs ajoutées d’un territoire sur un an', 'le total des salaires', 'le montant des impôts', 'le chiffre d’affaires mondial'], answer: 0, explain: 'Le PIB agrège les VA produites sur un territoire.' },
            { q: 'Une limite du PIB est qu’il ne mesure pas…', choices: ['le bien-être ni les inégalités', 'la production', 'la croissance', 'les échanges'], answer: 0, explain: 'Il ignore bien-être, inégalités, environnement, travail non rémunéré.' },
            { q: 'Les deux facteurs de production sont…', choices: ['le travail et le capital', 'l’offre et la demande', 'le prix et la quantité', 'l’actif et le passif'], answer: 0, explain: 'On combine travail (main-d’œuvre) et capital (équipements).' },
          ],
        },
        {
          id: 'p1-eco-t2-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'Le PIB est la somme des valeurs ajoutées.', answer: true, explain: 'Vrai, sur un territoire et une année.' },
            { statement: 'Le PIB mesure parfaitement le bien-être.', answer: false, explain: 'Faux : c’est un indicateur limité.' },
            { statement: 'Gagner en productivité peut être source de croissance.', answer: true, explain: 'Vrai : produire plus avec autant de facteurs.' },
          ],
        },
        {
          id: 'p1-eco-t2-flash',
          type: 'flashcard',
          title: 'Flashcards — Richesse',
          icon: '🃏',
          cards: [
            { front: 'Valeur ajoutée', back: 'Production − consommations intermédiaires.' },
            { front: 'PIB', back: 'Somme des valeurs ajoutées d’un territoire sur un an.' },
            { front: 'Limites du PIB', back: 'N’intègre ni bien-être, ni inégalités, ni environnement.' },
            { front: 'Productivité', back: 'Efficacité de la production (source de croissance).' },
          ],
        },
      ],
    },
    {
      id: 'p1-eco-t3',
      name: 'Thème 3 — Comment répartir les revenus et la richesse ?',
      short: 'Répartition des revenus',
      keywords: 'répartition primaire revenus travail capital mixtes redistribution prélèvements prestations revenu disponible consommation épargne taux d’épargne pouvoir d’achat patrimoine',
      intro:
        'La richesse créée (la VA) est **répartie**, d’abord entre ceux qui ont produit, puis **corrigée** par l’État pour réduire les inégalités.',
      cours: [
        {
          h: 'La répartition primaire des revenus',
          blocks: [
            { t: 'p', c: 'La richesse créée (la **valeur ajoutée**) est d’abord partagée entre ceux qui ont **participé à la production** : c’est la **répartition primaire**, qui donne les **revenus primaires**.' },
            { t: 'p', c: 'Ces revenus rémunèrent la contribution de chacun à la production, **avant** toute intervention de l’État.' },
          ],
        },
        {
          h: 'Les types de revenus primaires',
          blocks: [
            { t: 'table', head: ['Type de revenu', 'Rémunère…', 'Exemples'], rows: [
              ['Revenus du **travail**', 'Le facteur travail', 'Salaires, traitements'],
              ['Revenus du **capital**', 'Le facteur capital / propriété', 'Intérêts, loyers, dividendes'],
              ['Revenus **mixtes**', 'Travail **et** capital ensemble', 'Bénéfices des indépendants (artisan, médecin)'],
            ] },
            { t: 'p', c: 'Les revenus **mixtes** concernent les **indépendants** : leur bénéfice rémunère à la fois leur travail et le capital qu’ils ont investi — impossible de séparer les deux.' },
          ],
        },
        {
          h: 'La redistribution et le rôle de l’État',
          blocks: [
            { t: 'p', c: 'La répartition primaire laisse de fortes **inégalités**. L’État intervient donc pour les **corriger** : c’est la **redistribution**. Elle fonctionne en deux temps :' },
            { t: 'list', c: [
              'il **prélève** : les **prélèvements obligatoires** (impôts + cotisations sociales) ;',
              'il **verse** : les **revenus de transfert** (prestations sociales : allocations familiales, retraites, aides au logement, minima sociaux).',
            ] },
            { t: 'p', c: 'La redistribution finance aussi la **protection sociale** (maladie, chômage, vieillesse) : c’est la **solidarité** organisée entre les citoyens.' },
          ],
        },
        {
          h: 'Le revenu disponible',
          blocks: [
            { t: 'p', c: 'Après la redistribution, le ménage obtient son **revenu disponible** : ce qui lui reste réellement pour **consommer** ou **épargner**.' },
            { t: 'formula', c: 'Revenu disponible = Revenus primaires − Prélèvements obligatoires + Revenus de transfert' },
            { t: 'example', h: 'Calcul du revenu disponible', c: 'Un ménage a 3 000 € de revenus primaires, paie 800 € de prélèvements et reçoit 200 € de prestations. \n→ Revenu disponible = 3 000 − 800 + 200 = **2 400 €**.' },
          ],
        },
        {
          h: 'Consommer ou épargner',
          blocks: [
            { t: 'p', c: 'Avec son revenu disponible, le ménage **arbitre** : **consommer** (dépenser maintenant) ou **épargner** (mettre de côté pour plus tard).' },
            { t: 'formula', c: 'Taux d’épargne = épargne / revenu disponible' },
            { t: 'example', h: 'Calcul du taux d’épargne', c: 'Revenu disponible **2 500 €**, consommation **2 100 €** → épargne = 400 € → taux d’épargne = 400 / 2 500 = **16 %**.' },
            { t: 'p', c: 'Le partage consommation / épargne dépend du revenu, de l’âge, de la confiance dans l’avenir : plus le revenu est élevé, plus la part épargnée tend à être grande.' },
          ],
        },
        {
          h: 'Pouvoir d’achat et patrimoine',
          blocks: [
            { t: 'p', c: 'Le **pouvoir d’achat** est ce que le revenu permet **réellement d’acheter**, compte tenu des **prix**. Si les prix (inflation) augmentent plus vite que le revenu, le pouvoir d’achat **baisse**, même si le revenu en euros augmente.' },
            { t: 'p', c: 'Le **patrimoine** est l’ensemble de ce que possède un ménage (logement, épargne, placements) : c’est un **stock** accumulé, à distinguer du **revenu** qui est un **flux** (ce qu’on gagne sur une période).' },
            { t: 'warning', c: 'Ne confonds pas **revenu** (un flux, ce qu’on gagne chaque mois) et **patrimoine** (un stock, ce qu’on possède). On peut avoir un gros patrimoine et un faible revenu, et inversement.' },
          ],
        },
        {
          h: 'Inégalités et justice sociale',
          blocks: [
            { t: 'p', c: 'Les revenus et les patrimoines sont **inégalement répartis**. La **justice sociale** cherche à rendre cette répartition plus **équitable**, mais il existe plusieurs conceptions de ce qui est « juste ».' },
            { t: 'p', c: 'La redistribution vise à réduire ces inégalités. Mais elle fait débat : trop de prélèvements peut **décourager** l’effort et l’investissement ; trop peu laisse se creuser les inégalités. C’est un **arbitrage** politique permanent entre **efficacité** et **équité**.' },
          ],
        },
      ],
      essentiel: [
        'Répartition **primaire** : **revenus primaires** = revenus du **travail** (salaires) + du **capital** (intérêts, loyers, dividendes) + **mixtes** (indépendants).',
        '**Redistribution** de l’État : **prélèvements obligatoires** (impôts, cotisations) → **revenus de transfert** (prestations) ; finance la **protection sociale**.',
        '**Revenu disponible = revenus primaires − prélèvements obligatoires + revenus de transfert**.',
        '**Taux d’épargne = épargne / revenu disponible** ; arbitrage consommer / épargner.',
        '**Pouvoir d’achat** = ce que le revenu permet d’acheter (selon les prix) ; **patrimoine** (stock) ≠ **revenu** (flux).',
        'La **redistribution** réduit les **inégalités** : arbitrage entre **équité** et **efficacité** (justice sociale).',
      ],
      resources: [
        { kind: 'video', label: 'Répartition et redistribution des revenus', note: 'Vidéos — recherche YouTube', url: yt('répartition primaire redistribution revenu disponible taux épargne première STMG') },
      ],
      games: [
        {
          id: 'p1-eco-t3-qcm',
          type: 'qcm',
          title: 'QCM — Répartition des revenus',
          icon: '❓',
          questions: [
            { q: 'Les salaires sont des revenus…', choices: ['du travail', 'du capital', 'mixtes', 'de transfert'], answer: 0, explain: 'Travail = salaires ; capital = intérêts, loyers, dividendes ; mixtes = indépendants.' },
            { q: 'La redistribution consiste à…', choices: ['prélever des prélèvements obligatoires et verser des revenus de transfert', 'produire des biens', 'fixer les prix', 'créer de la monnaie'], answer: 0, explain: 'Elle corrige la répartition primaire pour réduire les inégalités.' },
            { q: 'La formule du revenu disponible est…', choices: ['revenus primaires − prélèvements obligatoires + revenus de transfert', 'revenus primaires + prélèvements obligatoires', 'salaires − TVA', 'consommation + épargne − impôts'], answer: 0, explain: 'Revenu disponible = revenus primaires − prélèvements obligatoires (impôts, cotisations) + revenus de transfert (prestations).' },
            { q: 'Revenu disponible 2 500 €, consommation 2 100 €. Taux d’épargne ?', choices: ['16 %', '84 %', '40 %', '4 %'], answer: 0, explain: 'Épargne = 400 ; 400/2 500 = 0,16 = 16 %.' },
          ],
        },
        {
          id: 'p1-eco-t3-tri',
          type: 'tri',
          title: 'Tri — Type de revenu',
          icon: '🗂️',
          instruction: 'Classe chaque revenu.',
          categories: [
            { id: 'trav', label: 'Revenu du travail' },
            { id: 'cap', label: 'Revenu du capital' },
          ],
          items: [
            { text: 'Un salaire', cat: 'trav' },
            { text: 'Un loyer perçu', cat: 'cap' },
            { text: 'Des dividendes', cat: 'cap' },
            { text: 'Un traitement de fonctionnaire', cat: 'trav' },
            { text: 'Des intérêts d’un placement', cat: 'cap' },
          ],
        },
        {
          id: 'p1-eco-t3-flash',
          type: 'flashcard',
          title: 'Flashcards — Revenus',
          icon: '🃏',
          cards: [
            { front: 'Répartition primaire', back: 'Partage de la VA en revenus primaires : travail, capital, mixtes.' },
            { front: 'Redistribution', back: 'Prélèvements obligatoires + revenus de transfert pour réduire les inégalités.' },
            { front: 'Revenu disponible', back: 'Revenus primaires − prélèvements obligatoires + revenus de transfert.' },
            { front: 'Pouvoir d’achat', back: 'Ce que le revenu permet réellement d’acheter.' },
          ],
        },
      ],
    },
    {
      id: 'p1-eco-t4',
      name: 'Thème 4 — Comment les agents économiques se financent-ils ?',
      short: 'Le financement',
      keywords: 'besoin capacité de financement direct indirect marché financier actions obligations banque crédit banque centrale taux directeurs',
      intro:
        'Certains agents dépensent plus qu’ils ne gagnent (**besoin de financement**), d’autres épargnent (**capacité de financement**). Le système financier met les deux en relation.',
      cours: [
        {
          h: 'Besoin et capacité de financement',
          blocks: [
            { t: 'p', c: 'Sur une période, un agent économique peut être dans deux situations opposées selon que ses **dépenses** dépassent ou non ses **ressources** :' },
            { t: 'table', head: ['Besoin de financement', 'Capacité de financement'], rows: [
              ['Dépenses **>** ressources', 'Ressources **>** dépenses'],
              ['Il faut **trouver** des fonds', 'Il reste de l’**épargne** à placer'],
              ['Souvent : entreprises, État', 'Souvent : ménages'],
            ] },
            { t: 'p', c: 'Le **système financier** a pour rôle de **mettre en relation** ceux qui ont un besoin de financement avec ceux qui ont une capacité de financement (les épargnants).' },
          ],
        },
        {
          h: 'Financement interne et externe',
          blocks: [
            { t: 'p', c: 'Pour se financer, un agent (surtout une entreprise) a d’abord un choix de base :' },
            { t: 'list', c: [
              'le **financement interne** (**autofinancement**) : utiliser sa **propre épargne**, ses bénéfices mis en réserve — pas de dette, mais des moyens limités ;',
              'le **financement externe** : trouver des fonds **à l’extérieur**, soit sur le **marché financier** (direct), soit auprès d’une **banque** (indirect).',
            ] },
          ],
        },
        {
          h: 'Le financement direct (le marché financier)',
          blocks: [
            { t: 'p', c: 'Dans le financement **direct** (ou désintermédié), l’agent obtient des fonds **directement** des épargnants, sur le **marché financier** (la **Bourse**), en **émettant des titres**. Il n’y a pas d’intermédiaire qui prête son propre argent.' },
            { t: 'p', c: 'La **Bourse** est le lieu (aujourd’hui électronique) où s’échangent ces titres : elle permet aux entreprises de lever des fonds et aux épargnants de placer leur argent.' },
          ],
        },
        {
          h: 'Actions et obligations',
          blocks: [
            { t: 'p', c: 'Sur le marché financier, on émet deux grands types de titres, très différents :' },
            { t: 'table', head: ['Action', 'Obligation'], rows: [
              ['Titre de **propriété** (part de l’entreprise)', 'Titre de **dette** (un prêt)'],
              ['Rapporte un **dividende** (variable)', 'Rapporte un **intérêt** (fixé d’avance)'],
              ['L’actionnaire est **copropriétaire**', 'L’obligataire est **créancier**'],
              ['Risqué (pas de garantie)', 'Plus sûr (remboursement prévu)'],
            ] },
            { t: 'warning', c: 'Piège classique : **action = propriété**, **obligation = dette**. Acheter une action, c’est devenir **copropriétaire** ; acheter une obligation, c’est **prêter** de l’argent.' },
          ],
        },
        {
          h: 'Le financement indirect (les banques)',
          blocks: [
            { t: 'p', c: 'Dans le financement **indirect** (ou intermédié), l’agent passe par un **intermédiaire** : la **banque**. Elle **collecte** l’épargne des uns et accorde des **crédits** aux autres, remboursés **avec intérêts**.' },
            { t: 'p', c: 'C’est le mode de financement le plus courant pour les **ménages** (crédit immobilier, crédit conso) et les **petites entreprises**, qui n’ont pas accès facilement à la Bourse.' },
          ],
        },
        {
          h: 'La création monétaire',
          blocks: [
            { t: 'p', c: 'Fait surprenant : quand une banque accorde un **crédit**, elle **crée de la monnaie**. Elle n’a pas besoin de posséder au préalable tout l’argent prêté : elle inscrit simplement la somme sur le compte de l’emprunteur. « **Les crédits font les dépôts.** »' },
            { t: 'p', c: 'Quand le crédit est **remboursé**, cette monnaie est **détruite**. La création monétaire soutient l’activité, mais si elle est excessive, elle peut alimenter l’**inflation** (hausse des prix).' },
          ],
        },
        {
          h: 'La banque centrale et les taux directeurs',
          blocks: [
            { t: 'p', c: 'La **banque centrale** (la **BCE**, Banque Centrale Européenne, pour la zone euro) supervise les banques et pilote la **politique monétaire**. Son principal outil : les **taux directeurs**, le taux auquel les banques se refinancent auprès d’elle.' },
            { t: 'table', head: ['La BCE baisse ses taux', 'La BCE augmente ses taux'], rows: [
              ['Le crédit devient **moins cher**', 'Le crédit devient **plus cher**'],
              ['On emprunte plus → activité **stimulée**', 'On emprunte moins → activité **freinée**'],
              ['Objectif : relancer l’économie', 'Objectif : **freiner l’inflation**'],
            ] },
            { t: 'p', c: 'La mission principale de la BCE est de **maintenir la stabilité des prix** (une inflation faible et maîtrisée).' },
          ],
        },
      ],
      essentiel: [
        '**Besoin** de financement (dépenses > ressources) vs **capacité** de financement (épargne) ; le système financier les met en relation.',
        'Financement **interne** (autofinancement) vs **externe** ; externe = **direct** (marché) ou **indirect** (banque).',
        'Financement **direct** sur le **marché financier** (Bourse) : **actions** (propriété, dividende) vs **obligations** (dette, intérêt).',
        'Financement **indirect** = **crédit bancaire** (avec intérêts), le plus courant pour ménages et petites entreprises.',
        'Les banques **créent de la monnaie** par le crédit (« les crédits font les dépôts ») ; excès → **inflation**.',
        'La **BCE** pilote la politique monétaire via ses **taux directeurs** (baisse = relance, hausse = freine l’inflation) ; objectif : **stabilité des prix**.',
      ],
      resources: [
        { kind: 'video', label: 'Le financement de l’économie', note: 'Vidéos — recherche YouTube', url: yt('financement direct indirect actions obligations banque première STMG économie') },
      ],
      games: [
        {
          id: 'p1-eco-t4-qcm',
          type: 'qcm',
          title: 'QCM — Le financement',
          icon: '❓',
          questions: [
            { q: 'Un agent qui épargne a une…', choices: ['capacité de financement', 'besoin de financement', 'dette obligatoire', 'obligation légale'], answer: 0, explain: 'Capacité de financement = épargne disponible ; besoin = dépenses > ressources.' },
            { q: 'Emprunter auprès d’une banque est un financement…', choices: ['indirect (intermédié)', 'direct', 'interne', 'gratuit'], answer: 0, explain: 'La banque est l’intermédiaire ; le marché financier = direct.' },
            { q: 'Une action est…', choices: ['un titre de propriété d’une entreprise', 'un titre de dette', 'un crédit bancaire', 'un impôt'], answer: 0, explain: 'Action = part de propriété ; obligation = titre de dette.' },
            { q: 'La BCE agit sur l’économie via…', choices: ['ses taux directeurs', 'la TVA', 'le SWOT', 'les cotisations'], answer: 0, explain: 'Baisser les taux stimule le crédit ; les monter freine l’inflation.' },
          ],
        },
        {
          id: 'p1-eco-t4-tri',
          type: 'tri',
          title: 'Tri — Financement direct ou indirect ?',
          icon: '🗂️',
          instruction: 'Classe chaque mode de financement.',
          categories: [
            { id: 'dir', label: 'Direct (marché)' },
            { id: 'ind', label: 'Indirect (banque)' },
          ],
          items: [
            { text: 'Émettre des actions en Bourse', cat: 'dir' },
            { text: 'Un crédit bancaire', cat: 'ind' },
            { text: 'Émettre des obligations', cat: 'dir' },
            { text: 'Un emprunt auprès de sa banque', cat: 'ind' },
          ],
        },
        {
          id: 'p1-eco-t4-flash',
          type: 'flashcard',
          title: 'Flashcards — Financement',
          icon: '🃏',
          cards: [
            { front: 'Besoin / capacité de financement', back: 'Dépenser plus que gagner / épargner.' },
            { front: 'Financement direct', back: 'Marché financier : actions et obligations.' },
            { front: 'Financement indirect', back: 'Crédit accordé par une banque.' },
            { front: 'Taux directeurs (BCE)', back: 'Outil pour stimuler l’économie ou freiner l’inflation.' },
          ],
        },
      ],
    },
    {
      id: 'p1-eco-t5',
      name: 'Thème 5 — Les marchés sont-ils concurrentiels ?',
      short: 'Le marché',
      keywords: 'marché offre demande prix d’équilibre élasticité-prix coût marginal concurrence parfaite imparfaite monopole oligopole barrières à l’entrée',
      intro:
        'Un **marché** est le lieu de rencontre de l’**offre** et de la **demande**. De leur confrontation naît le **prix d’équilibre**. Mais la concurrence est souvent **imparfaite**.',
      cours: [
        {
          h: 'Qu’est-ce qu’un marché ?',
          blocks: [
            { t: 'p', c: 'Un **marché** est le lieu (physique ou non) de **rencontre** entre une **offre** et une **demande**, où s’échange un bien ou un service à un **prix**. Il peut être très concret (un marché de fruits) ou totalement dématérialisé (le marché des actions, une plateforme en ligne).' },
            { t: 'p', c: 'Il existe des marchés de **biens et services**, du **travail**, des **capitaux**… Sur chacun, c’est la confrontation offre/demande qui détermine le **prix** et les **quantités** échangées.' },
          ],
        },
        {
          h: 'L’offre et la demande',
          blocks: [
            { t: 'p', c: 'L’**offre** et la **demande** réagissent au **prix**, mais en sens **opposé** :' },
            { t: 'table', head: ['Quand le prix augmente…', 'Effet'], rows: [
              ['La **demande**', 'diminue (les acheteurs renoncent)'],
              ['L’**offre**', 'augmente (produire devient plus rentable)'],
            ] },
            { t: 'p', c: 'C’est la **loi de l’offre et de la demande** : la demande est **décroissante** avec le prix, l’offre est **croissante** avec le prix.' },
          ],
        },
        {
          h: 'Le prix d’équilibre',
          blocks: [
            { t: 'p', c: 'Le **prix d’équilibre** est le prix pour lequel la **quantité offerte = la quantité demandée**. Le marché tend naturellement vers ce prix :' },
            { t: 'list', c: [
              'si le prix est **trop haut** : l’offre dépasse la demande → **surplus** → les prix baissent ;',
              'si le prix est **trop bas** : la demande dépasse l’offre → **pénurie** → les prix montent.',
            ] },
            { t: 'example', h: 'Rareté et prix', c: 'Une gelée détruit une partie de la récolte de fraises. \n→ L’**offre** chute alors que la **demande** reste forte : le **prix d’équilibre augmente**. Le prix joue son rôle de signal (la rareté se paie plus cher).' },
          ],
        },
        {
          h: 'L’élasticité-prix de la demande',
          blocks: [
            { t: 'p', c: 'L’**élasticité-prix de la demande** mesure la **sensibilité de la demande à une variation de prix** : « de combien la demande baisse-t-elle quand le prix augmente ? »' },
            { t: 'table', head: ['Demande élastique', 'Demande peu élastique'], rows: [
              ['**Très sensible** au prix', 'Peu sensible au prix'],
              ['Une hausse fait **beaucoup** baisser la demande', 'La demande change peu'],
              ['Produits non essentiels, avec substituts', 'Produits de **première nécessité** (pain, essence, médicaments)'],
            ] },
            { t: 'p', c: 'C’est une notion clé pour fixer les prix : sur un produit à demande **peu élastique**, une hausse de prix fait peu fuir les clients.' },
          ],
        },
        {
          h: 'Le coût marginal et la décision du producteur',
          blocks: [
            { t: 'p', c: 'Le **coût marginal** est le coût de production d’**une unité supplémentaire**. C’est un repère essentiel de la décision de produire.' },
            { t: 'p', c: 'Le producteur a intérêt à produire **une unité de plus tant que son prix de vente couvre le coût marginal**. Au-delà, produire davantage lui coûterait plus que ça ne lui rapporte.' },
          ],
        },
        {
          h: 'La concurrence pure et parfaite',
          blocks: [
            { t: 'p', c: 'La **concurrence pure et parfaite** est un **modèle théorique** qui suppose **cinq conditions** réunies :' },
            { t: 'list', c: [
              '**atomicité** : de très nombreux vendeurs et acheteurs, aucun assez gros pour influencer le prix ;',
              '**homogénéité** : les produits sont **identiques** ;',
              '**libre entrée et sortie** du marché ;',
              '**transparence** : information parfaite de tous ;',
              '**libre circulation** des facteurs de production.',
            ] },
            { t: 'p', c: 'Dans ce modèle, aucun acteur n’a de **pouvoir de marché** : tous « subissent » le prix. C’est un idéal théorique, rarement observé en réalité.' },
          ],
        },
        {
          h: 'La concurrence imparfaite : monopole et oligopole',
          blocks: [
            { t: 'p', c: 'En pratique, la concurrence est souvent **imparfaite** : certains acteurs ont un **pouvoir de marché** (capacité à influencer le prix).' },
            { t: 'table', head: ['Structure', 'Nombre de vendeurs', 'Exemple'], rows: [
              ['**Monopole**', 'Un **seul** vendeur', 'La distribution d’eau d’une commune'],
              ['**Oligopole**', '**Quelques** vendeurs', 'Téléphonie mobile, carburants'],
              ['Concurrence monopolistique', 'Beaucoup, mais produits **différenciés**', 'Restaurants, vêtements de marque'],
            ] },
            { t: 'p', c: 'Moins il y a de vendeurs, plus ils ont de **pouvoir sur les prix** — au détriment, souvent, du consommateur.' },
          ],
        },
        {
          h: 'Barrières à l’entrée et asymétries d’information',
          blocks: [
            { t: 'p', c: 'Deux phénomènes expliquent que la concurrence reste imparfaite :' },
            { t: 'list', c: [
              'les **barrières à l’entrée** : obstacles qui empêchent de nouveaux concurrents d’arriver (coûts d’investissement très élevés, **brevets**, réglementation, notoriété d’une marque) — elles **protègent** les acteurs en place ;',
              'les **asymétries d’information** : une partie en sait plus que l’autre (le vendeur d’une voiture d’occasion connaît mieux ses défauts que l’acheteur), ce qui fausse l’échange.',
            ] },
            { t: 'p', c: 'Pour préserver une concurrence saine, l’**État** (et l’**Autorité de la concurrence**) surveille et sanctionne les abus (ententes, abus de position dominante).' },
          ],
        },
      ],
      essentiel: [
        'Un **marché** = rencontre d’une **offre** et d’une **demande** ; loi de l’offre et de la demande (demande décroissante, offre croissante avec le prix).',
        'Le **prix d’équilibre** égalise quantité offerte et demandée (trop haut → surplus ; trop bas → pénurie).',
        '**Élasticité-prix** = sensibilité de la demande au prix (élastique / peu élastique pour les biens de première nécessité).',
        '**Coût marginal** = coût d’une unité supplémentaire ; on produit tant que le prix le couvre.',
        '**Concurrence pure et parfaite** = 5 conditions (atomicité, homogénéité, libre entrée/sortie, transparence, mobilité) : un modèle théorique.',
        'Concurrence **imparfaite** : **monopole**, **oligopole**, **barrières à l’entrée**, **asymétries d’information** → pouvoir de marché.',
      ],
      resources: [
        { kind: 'video', label: 'Marché, offre, demande, concurrence', note: 'Vidéos — recherche YouTube', url: yt('marché offre demande prix équilibre concurrence imparfaite première STMG') },
      ],
      games: [
        {
          id: 'p1-eco-t5-qcm',
          type: 'qcm',
          title: 'QCM — Le marché',
          icon: '❓',
          questions: [
            { q: 'Le prix d’équilibre est celui pour lequel…', choices: ['la quantité offerte = la quantité demandée', 'l’offre est nulle', 'la demande est infinie', 'le vendeur perd de l’argent'], answer: 0, explain: 'À l’équilibre, offre et demande s’égalisent.' },
            { q: 'Si un produit devient rare, son prix a tendance à…', choices: ['augmenter', 'baisser', 'rester identique', 'disparaître'], answer: 0, explain: 'L’offre baisse alors que la demande reste forte → hausse du prix.' },
            { q: 'L’élasticité-prix de la demande mesure…', choices: ['la sensibilité de la demande au prix', 'le coût d’une unité', 'le nombre de vendeurs', 'la marge'], answer: 0, explain: 'Forte sensibilité = demande élastique ; faible = peu élastique.' },
            { q: 'Un marché avec un seul vendeur est un…', choices: ['monopole', 'oligopole', 'marché parfait', 'marché libre'], answer: 0, explain: 'Monopole = un vendeur ; oligopole = quelques-uns.' },
            { q: 'Les barrières à l’entrée…', choices: ['freinent l’arrivée de nouveaux concurrents', 'garantissent la concurrence parfaite', 'baissent les prix', 'suppriment les monopoles'], answer: 0, explain: 'Coûts, brevets, réglementation protègent les acteurs en place.' },
          ],
        },
        {
          id: 'p1-eco-t5-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'En concurrence pure et parfaite, les produits sont identiques.', answer: true, explain: 'Vrai : c’est l’une des hypothèses (homogénéité).' },
            { statement: 'Un produit de première nécessité a une demande très élastique.', answer: false, explain: 'Faux : elle est peu élastique (on l’achète quel que soit le prix).' },
            { statement: 'Le coût marginal est le coût d’une unité supplémentaire.', answer: true, explain: 'Vrai : on produit tant que le prix le couvre.' },
          ],
        },
        {
          id: 'p1-eco-t5-flash',
          type: 'flashcard',
          title: 'Flashcards — Le marché',
          icon: '🃏',
          cards: [
            { front: 'Prix d’équilibre', back: 'Prix où quantité offerte = quantité demandée.' },
            { front: 'Élasticité-prix', back: 'Sensibilité de la demande à une variation de prix.' },
            { front: 'Coût marginal', back: 'Coût de production d’une unité supplémentaire.' },
            { front: 'Monopole / oligopole', back: 'Un seul / quelques vendeurs (concurrence imparfaite).' },
          ],
        },
      ],
    },
  ],
}

// ===========================================================================
// MATHÉMATIQUES (7 chapitres)
// ===========================================================================
const mathsP = {
  id: 'p1-maths',
  name: 'Mathématiques',
  short: 'Maths',
  icon: '🧮',
  color: '#2563eb',
  niveau: 'premiere',
  tagline: 'Maths appliquées à la gestion (contrôle continu).',
  chapters: [
    {
      id: 'p1-math-c1',
      name: 'Chapitre 1 — Information chiffrée',
      short: 'Information chiffrée',
      keywords: 'proportion pourcentage taux d’évolution coefficient multiplicateur évolutions successives réciproque',
      intro:
        'Proportions et évolutions sont partout en gestion. Ce chapitre apprend à les manier sans se tromper.',
      cours: [
        {
          h: 'Proportion et taux d’évolution',
          blocks: [
            { t: 'p', c: 'Une **proportion** = partie / tout (× 100 pour un pourcentage). Ex. 15 filles sur 30 → 50 %.' },
            { t: 'formula', c: 't = (Valeur d’arrivée − Valeur de départ) / Valeur de départ · CM = 1 + t' },
            { t: 'example', h: 'Exemple', c: 'Un prix passe de 200 € à 250 € → t = 50/200 = **+25 %** (CM = 1,25).' },
          ],
        },
        {
          h: 'Évolutions successives et réciproque',
          blocks: [
            { t: 'p', c: 'Pour enchaîner des évolutions, on **multiplie les CM** (jamais additionner les taux !). Ex. +20 % puis −10 % → 1,20 × 0,90 = 1,08 = **+8 %**.' },
            { t: 'warning', c: 'Évolution réciproque : après +25 % (×1,25), pour revenir il faut ×(1/1,25) = 0,80, soit **−20 %** (et non −25 %).' },
          ],
        },
      ],
      essentiel: [
        't = (arrivée − départ) / départ ; **CM = 1 + t**.',
        'Évolutions successives : on **multiplie les CM** (on n’additionne pas les taux).',
        'Réciproque : CM réciproque = 1 / CM.',
      ],
      resources: [{ kind: 'video', label: 'Taux d’évolution et coefficient multiplicateur', note: 'Vidéos — recherche YouTube', url: yt('taux évolution coefficient multiplicateur première STMG maths') }],
      games: [
        { id: 'p1-math-c1-calc', type: 'calcul', title: 'Calcul express — Taux d’évolution', icon: '⚡', gen: 'taux_evolution', count: 5 },
        { id: 'p1-math-c1-calc2', type: 'calcul', title: 'Calcul express — Évolutions successives', icon: '⚡', gen: 'cm_successif', count: 5 },
        {
          id: 'p1-math-c1-qcm', type: 'qcm', title: 'QCM — Information chiffrée', icon: '❓',
          questions: [
            { q: 'Un prix passe de 200 € à 250 €. Taux d’évolution ?', choices: ['+25 %', '+50 %', '+20 %', '+5 %'], answer: 0, explain: 't = 50/200 = 0,25 = +25 %.' },
            { q: 'Le CM d’une baisse de 10 % est…', choices: ['0,90', '1,10', '0,10', '10'], answer: 0, explain: 'CM = 1 − 0,10 = 0,90.' },
            { q: '+20 % puis −10 % donne au total…', choices: ['+8 %', '+10 %', '−8 %', '+30 %'], answer: 0, explain: '1,20 × 0,90 = 1,08 → +8 %.' },
          ],
        },
      ],
    },
    {
      id: 'p1-math-c2',
      name: 'Chapitre 2 — Suites numériques',
      short: 'Suites',
      keywords: 'suite arithmétique géométrique raison linéaire exponentielle',
      intro: 'Une **suite** est une liste ordonnée de nombres. Deux modèles clés en gestion : arithmétique et géométrique.',
      cours: [
        {
          h: 'La suite arithmétique',
          blocks: [
            { t: 'p', c: 'Dans une suite **arithmétique**, on passe d’un terme au suivant en **ajoutant** toujours le même nombre, la **raison r** : u_{n+1} = u_n + r.' },
            { t: 'formula', c: 'Terme général : u_n = u_0 + n × r — croissance **linéaire**.' },
            { t: 'example', h: 'Exemple', c: 'Un salaire de 1 500 € augmente de 50 €/an : c’est arithmétique (r = 50). Au bout de 4 ans : u_4 = 1 500 + 4 × 50 = **1 700 €**.' },
          ],
        },
        {
          h: 'La suite géométrique',
          blocks: [
            { t: 'p', c: 'Dans une suite **géométrique**, on passe d’un terme au suivant en **multipliant** toujours par le même nombre, la **raison q** : u_{n+1} = u_n × q.' },
            { t: 'formula', c: 'Terme général : u_n = u_0 × q^n — croissance **exponentielle**.' },
            { t: 'example', h: 'Exemple', c: 'Capital de 1 000 € placé à 3 %/an → q = 1,03 : u_5 = 1 000 × 1,03⁵ ≈ **1 159 €**. Astuce : toute évolution en **% fixe** donne une suite **géométrique** (q = 1 + t).' },
          ],
        },
      ],
      essentiel: ['Arithmétique : **u_n = u_0 + n·r** (linéaire).', 'Géométrique : **u_n = u_0 × q^n** (exponentielle).', 'Évolution en % constant → suite **géométrique** (q = 1 + t).'],
      resources: [{ kind: 'video', label: 'Suites arithmétiques et géométriques', note: 'Vidéos — recherche YouTube', url: yt('suites arithmétiques géométriques première STMG maths') }],
      games: [
        { id: 'p1-math-c2-calc', type: 'calcul', title: 'Calcul express — Suite géométrique', icon: '⚡', gen: 'suite_geo', count: 5 },
        {
          id: 'p1-math-c2-qcm', type: 'qcm', title: 'QCM — Suites', icon: '❓',
          questions: [
            { q: 'Un capital placé à taux fixe forme une suite…', choices: ['géométrique', 'arithmétique', 'constante', 'aléatoire'], answer: 0, explain: 'Évolution en % constant → géométrique (q = 1 + t).' },
            { q: 'Pour une suite arithmétique, u_n = …', choices: ['u_0 + n·r', 'u_0 × q^n', 'u_0 − r', 'n × q'], answer: 0, explain: 'Suite arithmétique : on ajoute la raison r.' },
            { q: 'Un salaire de 1 500 € + 50 €/an au bout de 4 ans :', choices: ['1 700 €', '1 650 €', '2 000 €', '1 550 €'], answer: 0, explain: 'u_4 = 1 500 + 4×50 = 1 700 €.' },
          ],
        },
        {
          id: 'p1-math-c2-flash', type: 'flashcard', title: 'Flashcards — Suites', icon: '🃏',
          cards: [
            { front: 'Suite arithmétique', back: 'On ajoute la raison r : u_n = u_0 + n·r.' },
            { front: 'Suite géométrique', back: 'On multiplie par la raison q : u_n = u_0 × q^n.' },
            { front: 'Placement à t %', back: 'Suite géométrique de raison q = 1 + t.' },
          ],
        },
      ],
    },
    {
      id: 'p1-math-c3',
      name: 'Chapitre 3 — Second degré et fonctions',
      short: 'Second degré',
      keywords: 'polynôme second degré parabole sommet maximum minimum fonction inverse hyperbole',
      intro: 'La fonction du **second degré** modélise beaucoup de situations d’optimisation (bénéfice max, coût min).',
      cours: [
        {
          h: 'La parabole et le sens de la concavité',
          blocks: [
            { t: 'p', c: 'La fonction du **second degré** s’écrit f(x) = ax² + bx + c (avec a ≠ 0) et sa courbe est une **parabole**.' },
            { t: 'list', c: [
              'Si **a > 0** : parabole tournée vers le haut (∪), la fonction admet un **minimum**.',
              'Si **a < 0** : parabole tournée vers le bas (∩), la fonction admet un **maximum**.',
            ] },
            { t: 'p', c: 'La courbe est **symétrique** par rapport à l’axe vertical qui passe par le sommet.' },
          ],
        },
        {
          h: 'Le sommet et l’optimisation',
          blocks: [
            { t: 'p', c: 'Le **sommet** de la parabole est le point où la fonction atteint son **extremum** (maximum si a < 0, minimum si a > 0).' },
            { t: 'p', c: 'C’est ce qui rend le second degré très utile en gestion : il modélise un **bénéfice à maximiser** ou un **coût à minimiser**.' },
            { t: 'example', h: 'Exemple', c: 'Un bénéfice B(x) = −2x² + 12x (en centaines d’€) est maximal au sommet, en x = 3 : B(3) = **18** → 1 800 € pour 3 unités.' },
          ],
        },
      ],
      essentiel: ['f(x) = ax² + bx + c → **parabole**.', '**a > 0** : minimum (∪) ; **a < 0** : maximum (∩).', 'Le **sommet** donne l’extremum ; sert à l’**optimisation**.'],
      resources: [{ kind: 'video', label: 'Fonctions du second degré', note: 'Vidéos — recherche YouTube', url: yt('fonction second degré parabole sommet première STMG maths') }],
      games: [
        {
          id: 'p1-math-c3-qcm', type: 'qcm', title: 'QCM — Second degré', icon: '❓',
          questions: [
            { q: 'La courbe de f(x) = ax² + bx + c est…', choices: ['une parabole', 'une droite', 'un cercle', 'une hyperbole'], answer: 0, explain: 'Le second degré donne une parabole.' },
            { q: 'Si a < 0, la fonction du second degré a un…', choices: ['maximum', 'minimum', 'ni max ni min', 'point d’inflexion'], answer: 0, explain: 'a < 0 : parabole vers le bas (∩) → maximum.' },
            { q: 'Le point qui donne l’extremum de la parabole est…', choices: ['le sommet', 'l’origine', 'l’axe des x', 'le foyer'], answer: 0, explain: 'Le sommet donne le minimum ou le maximum.' },
          ],
        },
        {
          id: 'p1-math-c3-vf', type: 'vraifaux', title: 'Vrai / Faux rapide', icon: '⚡',
          questions: [
            { statement: 'Si a > 0, la parabole est tournée vers le haut.', answer: true, explain: 'Vrai : ∪, la fonction a un minimum.' },
            { statement: 'La parabole n’a aucun axe de symétrie.', answer: false, explain: 'Faux : elle est symétrique par rapport à la verticale passant par le sommet.' },
          ],
        },
        {
          id: 'p1-math-c3-flash', type: 'flashcard', title: 'Flashcards — Second degré', icon: '🃏',
          cards: [
            { front: 'f(x) = ax² + bx + c', back: 'Sa courbe est une parabole.' },
            { front: 'Signe de a', back: 'a > 0 : minimum (∪) ; a < 0 : maximum (∩).' },
            { front: 'Sommet', back: 'Donne l’extremum ; axe de symétrie vertical passant par lui.' },
          ],
        },
      ],
    },
    {
      id: 'p1-math-c4',
      name: 'Chapitre 4 — Dérivation',
      short: 'Dérivation',
      keywords: 'nombre dérivé tangente dérivées signe variations extremum optimisation',
      intro: 'La **dérivée** mesure comment une fonction varie. C’est l’outil de l’**optimisation**.',
      cours: [
        {
          h: 'Le nombre dérivé et la tangente',
          blocks: [
            { t: 'p', c: 'Le **nombre dérivé** f’(a) est le **coefficient directeur de la tangente** à la courbe au point d’abscisse a : il mesure la « pente » de la courbe en ce point.' },
            { t: 'formula', c: 'Équation de la tangente en a : y = f’(a)(x − a) + f(a).' },
            { t: 'p', c: 'Dérivées à connaître : (constante)’ = 0 ; (x²)’ = 2x ; **(ax² + bx + c)’ = 2ax + b**.' },
            { t: 'figure', name: 'derivee' },
          ],
        },
        {
          h: 'Signe de la dérivée, variations et extremum',
          blocks: [
            { t: 'list', c: [
              'f’(x) > 0 sur un intervalle → f est **croissante** ;',
              'f’(x) < 0 sur un intervalle → f est **décroissante** ;',
              'f’(x) = 0 en **changeant de signe** → la fonction atteint un **extremum** (max ou min).',
            ] },
            { t: 'p', c: 'C’est l’outil de l’**optimisation** : on cherche où la dérivée s’annule pour trouver un maximum (bénéfice) ou un minimum (coût).' },
            { t: 'example', h: 'Exemple', c: 'f(x) = −2x² + 12x → f’(x) = −4x + 12, qui s’annule en x = 3. La dérivée passe du + au −, donc **maximum** : f(3) = **18**.' },
          ],
        },
      ],
      essentiel: ['f’(a) = pente de la **tangente** en a ; tangente : y = f’(a)(x − a) + f(a).', '(ax² + bx + c)’ = **2ax + b**.', 'f’ > 0 croissante · f’ < 0 décroissante · f’ = 0 (change de signe) → extremum.'],
      resources: [{ kind: 'video', label: 'Dérivation et variations', note: 'Vidéos — recherche YouTube', url: yt('dérivation nombre dérivé signe variations première STMG maths') }],
      games: [
        { id: 'p1-math-c4-calc', type: 'calcul', title: 'Calcul express — Nombre dérivé', icon: '⚡', gen: 'derivee_affine', count: 5 },
        {
          id: 'p1-math-c4-qcm', type: 'qcm', title: 'QCM — Dérivation', icon: '❓',
          questions: [
            { q: 'La dérivée de ax² + bx + c est…', choices: ['2ax + b', 'ax + b', '2ax', 'a x² + b'], answer: 0, explain: '(ax² + bx + c)’ = 2ax + b.' },
            { q: 'Si f’(x) > 0 sur un intervalle, alors f est…', choices: ['croissante', 'décroissante', 'constante', 'négative'], answer: 0, explain: 'f’ > 0 ⇒ f croissante.' },
            { q: 'f(x) = −2x² + 12x. f’(x) s’annule en…', choices: ['x = 3', 'x = 6', 'x = 12', 'x = 0'], answer: 0, explain: '−4x + 12 = 0 ⇔ x = 3 (maximum).' },
          ],
        },
        {
          id: 'p1-math-c4-vf', type: 'vraifaux', title: 'Vrai / Faux rapide', icon: '⚡',
          questions: [
            { statement: 'La dérivée de ax² + bx + c est 2ax + b.', answer: true, explain: 'Vrai.' },
            { statement: 'Si f’(x) < 0, la fonction est croissante.', answer: false, explain: 'Faux : f’ < 0 ⇒ décroissante.' },
            { statement: 'Un extremum est atteint là où f’ s’annule en changeant de signe.', answer: true, explain: 'Vrai : max ou min.' },
          ],
        },
      ],
    },
    {
      id: 'p1-math-c5',
      name: 'Chapitre 5 — Statistiques à une variable',
      short: 'Statistiques',
      keywords: 'moyenne médiane quartiles étendue écart interquartile écart-type boîte à moustaches dispersion',
      intro: 'On résume une série de données par des **indicateurs** de position et de dispersion.',
      cours: [
        {
          h: 'Les indicateurs de position',
          blocks: [
            { t: 'p', c: 'Les indicateurs de **position** résument « où se situe » la série :' },
            { t: 'list', c: [
              'la **moyenne** = somme des valeurs / effectif ;',
              'la **médiane** partage la série ordonnée en **deux moitiés** (50 % en dessous, 50 % au-dessus) ;',
              'les **quartiles** Q1 et Q3 délimitent les 25 % les plus bas et les 25 % les plus hauts.',
            ] },
          ],
        },
        {
          h: 'Les indicateurs de dispersion et la boîte à moustaches',
          blocks: [
            { t: 'p', c: 'Les indicateurs de **dispersion** mesurent à quel point les valeurs sont **étalées** :' },
            { t: 'list', c: [
              'l’**étendue** = max − min ;',
              'l’**écart interquartile** = Q3 − Q1 (dispersion des 50 % centraux) ;',
              'l’**écart-type** mesure la dispersion autour de la moyenne.',
            ] },
            { t: 'p', c: 'Le **diagramme en boîte** (boîte à moustaches) visualise min, Q1, médiane, Q3, max. Deux séries de même moyenne mais d’écarts-types différents n’ont pas la même **homogénéité**.' },
          ],
        },
      ],
      essentiel: ['Position : **moyenne**, **médiane**, **quartiles** Q1/Q3.', 'Dispersion : **étendue**, **écart interquartile** (Q3 − Q1), **écart-type**.', 'La **boîte à moustaches** visualise min, Q1, médiane, Q3, max.'],
      resources: [{ kind: 'video', label: 'Statistiques : médiane, quartiles, écart-type', note: 'Vidéos — recherche YouTube', url: yt('statistiques médiane quartiles écart type boîte à moustaches première STMG') }],
      games: [
        {
          id: 'p1-math-c5-qcm', type: 'qcm', title: 'QCM — Statistiques', icon: '❓',
          questions: [
            { q: 'La valeur qui partage une série en deux moitiés est…', choices: ['la médiane', 'la moyenne', 'l’étendue', 'le maximum'], answer: 0, explain: '50 % des valeurs sont en dessous de la médiane.' },
            { q: 'L’écart interquartile est…', choices: ['Q3 − Q1', 'max − min', 'la moyenne', 'Q1 + Q3'], answer: 0, explain: 'Il mesure la dispersion des 50 % centraux.' },
            { q: 'Plus l’écart-type est grand, plus les valeurs sont…', choices: ['dispersées', 'égales', 'proches', 'nulles'], answer: 0, explain: 'L’écart-type mesure la dispersion autour de la moyenne.' },
            { q: 'La boîte à moustaches visualise…', choices: ['min, Q1, médiane, Q3, max', 'seulement la moyenne', 'l’écart-type seul', 'la somme'], answer: 0, explain: 'Ce sont ses cinq repères.' },
          ],
        },
        {
          id: 'p1-math-c5-flash', type: 'flashcard', title: 'Flashcards — Statistiques', icon: '🃏',
          cards: [
            { front: 'Médiane', back: 'Valeur qui partage la série en deux moitiés.' },
            { front: 'Écart interquartile', back: 'Q3 − Q1 (dispersion des 50 % centraux).' },
            { front: 'Écart-type', back: 'Mesure la dispersion autour de la moyenne.' },
          ],
        },
        {
          id: 'p1-math-c5-vf', type: 'vraifaux', title: 'Vrai / Faux rapide', icon: '⚡',
          questions: [
            { statement: 'La médiane partage la série en deux moitiés.', answer: true, explain: 'Vrai : 50 % de part et d’autre.' },
            { statement: 'L’étendue vaut Q3 − Q1.', answer: false, explain: 'Faux : étendue = max − min ; Q3 − Q1 = écart interquartile.' },
            { statement: 'Un écart-type plus grand signifie des valeurs plus dispersées.', answer: true, explain: 'Vrai.' },
          ],
        },
      ],
    },
    {
      id: 'p1-math-c6',
      name: 'Chapitre 6 — Probabilités',
      short: 'Probabilités',
      keywords: 'probabilité conditionnelle arbre pondéré indépendance variable aléatoire espérance',
      intro: 'Les probabilités mesurent le **hasard**. Outils clés : la probabilité conditionnelle et l’espérance.',
      cours: [
        {
          h: 'Probabilité conditionnelle et arbre pondéré',
          blocks: [
            { t: 'formula', c: 'Probabilité de B sachant A : P_A(B) = P(A ∩ B) / P(A).' },
            { t: 'p', c: 'On visualise la situation avec un **arbre pondéré** : on **multiplie** les probabilités le long des branches, et la **somme** des branches partant d’un même nœud vaut **1**.' },
            { t: 'example', h: 'Exemple', c: '60 % des élèves font anglais ; parmi eux, 30 % font aussi espagnol → P(anglais ∩ espagnol) = 0,60 × 0,30 = **0,18**.' },
          ],
        },
        {
          h: 'Indépendance et espérance',
          blocks: [
            { t: 'formula', c: 'A et B indépendants ⇔ P(A ∩ B) = P(A) × P(B).' },
            { t: 'p', c: 'Deux événements sont **indépendants** quand la réalisation de l’un ne change pas la probabilité de l’autre. Une **variable aléatoire** prend des valeurs selon le hasard ; son **espérance** E(X) = somme des (valeur × probabilité) est la « moyenne » attendue sur un grand nombre de répétitions.' },
          ],
        },
      ],
      essentiel: ['**P_A(B) = P(A ∩ B) / P(A)** ; sur un arbre, on multiplie le long des branches.', 'Indépendance : **P(A ∩ B) = P(A) × P(B)**.', '**E(X)** = somme des (valeur × probabilité) : la moyenne attendue.'],
      resources: [{ kind: 'video', label: 'Probabilités conditionnelles', note: 'Vidéos — recherche YouTube', url: yt('probabilités conditionnelles arbre espérance première STMG') }],
      games: [
        { id: 'p1-math-c6-calc', type: 'calcul', title: 'Calcul express — Probabilités totales', icon: '⚡', gen: 'proba_totale', count: 5 },
        {
          id: 'p1-math-c6-qcm', type: 'qcm', title: 'QCM — Probabilités', icon: '❓',
          questions: [
            { q: 'La probabilité conditionnelle P_A(B) vaut…', choices: ['P(A ∩ B) / P(A)', 'P(A) × P(B)', 'P(A) + P(B)', 'P(B) − P(A)'], answer: 0, explain: 'Probabilité de B sachant A.' },
            { q: '60 % font anglais, dont 30 % font espagnol. P(anglais et espagnol) ?', choices: ['0,18', '0,90', '0,30', '0,50'], answer: 0, explain: '0,60 × 0,30 = 0,18.' },
            { q: 'A et B sont indépendants si…', choices: ['P(A ∩ B) = P(A) × P(B)', 'P(A) = P(B)', 'P(A ∩ B) = 0', 'P(A) + P(B) = 1'], answer: 0, explain: 'Définition de l’indépendance.' },
          ],
        },
        {
          id: 'p1-math-c6-flash', type: 'flashcard', title: 'Flashcards — Probabilités', icon: '🃏',
          cards: [
            { front: 'Probabilité conditionnelle', back: 'P_A(B) = P(A ∩ B) / P(A).' },
            { front: 'Indépendance', back: 'P(A ∩ B) = P(A) × P(B).' },
            { front: 'Espérance E(X)', back: 'Somme des (valeur × probabilité) : la moyenne attendue.' },
          ],
        },
      ],
    },
    {
      id: 'p1-math-c7',
      name: 'Chapitre 7 — Algorithmique et Python',
      short: 'Python',
      keywords: 'algorithme Python variable condition if else boucle for while fonction liste',
      intro: 'On consolide les bases de la **programmation** en Python, pour automatiser des calculs et simuler le hasard.',
      cours: [
        {
          h: 'Variables, conditions et boucles',
          blocks: [
            { t: 'list', c: [
              'Les **variables** stockent une valeur (`x = 5`) ;',
              'les **conditions** (`if / else`) permettent de faire un **choix** selon qu’une condition est vraie ou fausse ;',
              'les **boucles** répètent des instructions : `for` (nombre de répétitions **connu**), `while` (tant qu’une condition reste vraie).',
            ] },
          ],
        },
        {
          h: 'Fonctions, listes et applications',
          blocks: [
            { t: 'list', c: [
              'les **fonctions** (`def`) regroupent des instructions réutilisables ;',
              'les **listes** stockent plusieurs valeurs dans une seule variable.',
            ] },
            { t: 'p', c: 'Applications concrètes : **simuler** une expérience aléatoire, calculer les termes d’une **suite**, automatiser un **calcul répétitif**.' },
          ],
        },
      ],
      essentiel: ['**Variables**, **conditions** (if/else), **boucles** (for/while), **fonctions**, **listes**.', 'Applications : simuler le hasard, calculer des suites, automatiser.'],
      resources: [{ kind: 'video', label: 'Python : bases (variables, boucles, conditions)', note: 'Vidéos — recherche YouTube', url: yt('python bases variables boucles conditions première STMG maths') }],
      games: [
        {
          id: 'p1-math-c7-qcm', type: 'qcm', title: 'QCM — Python', icon: '❓',
          questions: [
            { q: 'Pour répéter des instructions un nombre connu de fois, on utilise…', choices: ['une boucle for', 'un if', 'une variable', 'une liste'], answer: 0, explain: 'La boucle for répète ; while répète tant qu’une condition est vraie.' },
            { q: '`if / else` sert à…', choices: ['faire un choix selon une condition', 'répéter à l’infini', 'stocker plusieurs valeurs', 'afficher une image'], answer: 0, explain: 'C’est l’instruction conditionnelle.' },
            { q: 'Une **liste** permet de…', choices: ['stocker plusieurs valeurs', 'faire un seul calcul', 'créer une condition', 'arrêter le programme'], answer: 0, explain: 'La liste regroupe plusieurs valeurs.' },
          ],
        },
        {
          id: 'p1-math-c7-flash', type: 'flashcard', title: 'Flashcards — Python', icon: '🃏',
          cards: [
            { front: 'Variable', back: 'Stocke une valeur.' },
            { front: 'Boucle (for / while)', back: 'Répète des instructions.' },
            { front: 'Condition (if / else)', back: 'Fait un choix selon une condition.' },
            { front: 'Liste', back: 'Stocke plusieurs valeurs.' },
          ],
        },
        {
          id: 'p1-math-c7-vf', type: 'vraifaux', title: 'Vrai / Faux rapide', icon: '⚡',
          questions: [
            { statement: 'La boucle for sert à répéter des instructions.', answer: true, explain: 'Vrai (nombre de répétitions connu).' },
            { statement: 'if / else sert à répéter à l’infini.', answer: false, explain: 'Faux : if/else fait un choix ; c’est la boucle qui répète.' },
            { statement: 'Une liste peut stocker plusieurs valeurs.', answer: true, explain: 'Vrai.' },
          ],
        },
      ],
    },
  ],
}

// ===========================================================================
// FRANÇAIS — Épreuves anticipées (EAF)
// ===========================================================================
const francaisP = {
  id: 'p1-francais',
  name: 'Français (EAF)',
  short: 'Français',
  icon: '📚',
  color: '#7c3aed',
  niveau: 'premiere',
  tagline: 'La seule épreuve du bac dès la première (écrit + oral).',
  chapters: [
    {
      id: 'p1-fr-1',
      name: 'Méthode — Le commentaire littéraire',
      short: 'Le commentaire',
      keywords: 'commentaire littéraire méthode analyse procédé effet problématique plan axe paragraphe introduction conclusion citation transition rédaction paraphrase interprétation brouillon',
      intro:
        'Le **commentaire littéraire** est l’un des deux sujets possibles à l’écrit. Objectif : montrer, de façon **organisée**, **comment** un texte produit du sens et des effets sur le lecteur. Ce n’est **ni un résumé, ni une paraphrase** : on **analyse** (le « comment ») et on **interprète** (le « pourquoi »).',
      cours: [
        {
          h: 'Comprendre l’épreuve du commentaire',
          blocks: [
            { t: 'p', c: 'Le commentaire porte sur un **texte littéraire** court, accompagné d’une **consigne** (**deux axes donnés**). On dispose de **4 heures** ; le commentaire vaut la note de l’écrit (**coef. 5**).' },
            { t: 'p', c: 'On attend une **analyse organisée** : un devoir en **plusieurs parties** (souvent **2 ou trois parties de 2-5 paragraphes**), chaque **paragraphe** doit contenir des **citations** du texte et l’analyse de **procédés**.' },
            { t: 'warning', c: 'Le piège n°1 est la **paraphrase** : redire le texte avec d’autres mots (« l’auteur dit que… »). Ce n’est pas commenter. Commenter, c’est expliquer **comment** c’est écrit et **quel effet** cela produit.' },
          ],
        },
        {
          h: 'Étape 1 — Analyser le texte au brouillon',
          blocks: [
            { t: 'p', c: 'Avant de rédiger, on passe du temps à **lire et annoter** le texte. On repère et on **surligne** :' },
            { t: 'list', c: [
              'le **thème** et le **ton** général (registre : lyrique, tragique, comique, polémique…) ;',
              'les **procédés d’écriture** : figures de style, champs lexicaux, ponctuation, rythme, temps verbaux ;',
              'la **construction** du texte (mouvements, progression) et le **point de vue**.',
            ] },
            { t: 'tip', c: 'Méthode efficace : trace un **tableau à deux colonnes** — à gauche le **procédé relevé + la citation**, à droite son **effet / interprétation**. C’est la matière première de tout le commentaire.' },
          ],
        },
        {
          h: 'Étape 2 — Problématique et plan',
          blocks: [
            { t: 'p', c: 'La **problématique** est la **question centrale** à laquelle tout le commentaire répond (ex. : « En quoi ce poème transforme-t-il la douleur en beauté ? »). Elle donne une **direction** au devoir.' },
            { t: 'p', c: 'Le **plan** regroupe tes remarques en **2 ou 3 axes** (grandes parties), chacun divisé en **sous-parties**. Un axe = une **grande idée** qui répond à la problématique.' },
            { t: 'table', head: ['Bon axe', 'Mauvais axe'], rows: [
              ['Une **idée d’interprétation** (« un éloge paradoxal »)', 'Un simple thème (« la nature »)'],
              ['Se prouve par des procédés variés', 'Se contente de lister le texte'],
            ] },
            { t: 'warning', c: 'Évite le plan « procédés / puis effets » ou « forme / puis fond » : mélange toujours **le fond et la forme** dans chaque partie.' },
          ],
        },
        {
          h: 'Étape 3 — L’introduction et la conclusion',
          blocks: [
            { t: 'p', c: 'L’**introduction** (un paragraphe) suit 4 mouvements :' },
            { t: 'list', c: [
              '**amorce** : une phrase de contexte (auteur, époque, mouvement, genre) ;',
              '**présentation** du texte (titre, situation dans l’œuvre) ;',
              '**problématique** clairement formulée ;',
              '**annonce du plan** (les axes, dans l’ordre).',
            ] },
            { t: 'p', c: 'La **conclusion** fait le **bilan** (réponse à la problématique en reprenant les axes) puis propose une **ouverture** (rapprochement avec une autre œuvre, un autre texte, une portée plus large).' },
          ],
        },
        {
          h: 'Étape 4 — Rédiger les paragraphes',
          blocks: [
            { t: 'p', c: 'Chaque **paragraphe** de développement suit la structure **AIE** :' },
            { t: 'table', head: ['Étape', 'Contenu'], rows: [
              ['**A — Affirmation**', 'L’idée que je vais prouver (phrase claire)'],
              ['**I — Illustration**', 'La **citation** exacte du texte (entre guillemets)'],
              ['**E — Explication**', 'Le **procédé** repéré + l’**effet** produit / l’interprétation'],
            ] },
            { t: 'p', c: 'On soigne les **transitions** entre les parties (une phrase qui relie l’axe qui s’achève à celui qui commence) et on **saute des lignes** entre les grandes parties.' },
            { t: 'tip', c: 'Cite **court et exact** : quelques mots entre guillemets suffisent. Toute citation doit être **analysée** (jamais posée seule).' },
          ],
        },
        {
          h: 'Exemple guidé + erreurs à éviter',
          blocks: [
            { t: 'example', h: 'Un paragraphe modèle (structure AIE)', c: 'Idée : le poète rend la ville menaçante. \n→ « La rue assourdissante autour de moi hurlait » : la **personnification** (« la rue… hurlait ») et l’**hyperbole** sonore transforment la ville en monstre agressif, traduisant l’angoisse du poète face à la modernité. \n(Affirmation → citation → procédé + effet.)' },
            { t: 'warning', c: 'Les erreurs les plus sanctionnées : **paraphraser** (redire le texte), citer **sans analyser**, faire un plan **forme/fond**, oublier la **problématique**, employer le **« je »** (on préfère « on », « le lecteur », « le texte »).' },
          ],
        },
      ],
      essentiel: [
        'Le **commentaire** = analyse **organisée** de **comment** un texte fait sens (≠ résumé, ≠ **paraphrase**).',
        'Au brouillon : repérer **procédé + effet** (tableau 2 colonnes), le **ton**, la construction.',
        '**Problématique** (question centrale) + **plan** en 2-3 **axes** (idées, pas de simples thèmes ; mêler fond et forme).',
        'Intro = amorce + présentation + problématique + annonce ; conclusion = bilan + **ouverture**.',
        'Chaque paragraphe suit **AIE** : Affirmation → Illustration (citation) → Explication (procédé + effet) ; soigner les **transitions**.',
      ],
      resources: [{ kind: 'video', label: 'Méthode du commentaire littéraire', note: 'Vidéos — recherche YouTube', url: yt('méthode commentaire littéraire première français problématique plan') }],
      games: [
        {
          id: 'p1-fr-1-qcm', type: 'qcm', title: 'QCM — Le commentaire', icon: '❓',
          questions: [
            { q: 'Commenter un texte, ce n’est pas…', choices: ['le paraphraser (le redire)', 'analyser les procédés', 'expliquer les effets', 'l’interpréter'], answer: 0, explain: 'La paraphrase (redire le texte) est l’erreur n°1 à éviter.' },
            { q: 'La problématique du commentaire est…', choices: ['la question centrale à laquelle il répond', 'le résumé du texte', 'la biographie de l’auteur', 'la liste des figures'], answer: 0, explain: 'Elle donne une direction à tout le devoir.' },
            { q: 'Un bon axe de commentaire est…', choices: ['une idée d’interprétation', 'un simple thème', 'une citation', 'un procédé isolé'], answer: 0, explain: 'Un axe est une grande idée qui répond à la problématique.' },
            { q: 'La structure d’un paragraphe (AIE) est…', choices: ['Affirmation, Illustration, Explication', 'Analyse, Introduction, Exemple', 'Amorce, Idée, Écriture', 'Argument, Image, Effet'], answer: 0, explain: 'Idée → citation → procédé + effet.' },
            { q: 'Dans un commentaire, on évite d’écrire…', choices: ['« je »', '« on »', '« le texte »', '« le lecteur »'], answer: 0, explain: 'On préfère « on », « le lecteur », « le texte ».' },
            { q: 'Au brouillon, la méthode efficace consiste à noter…', choices: ['le procédé + la citation + son effet', 'seulement le résumé', 'la biographie de l’auteur', 'la date de publication'], answer: 0, explain: 'Tableau à deux colonnes : procédé/citation à gauche, effet/interprétation à droite.' },
            { q: 'L’introduction se compose, dans l’ordre, de…', choices: ['amorce, présentation, problématique, annonce du plan', 'plan, problématique, amorce', 'citation, résumé, avis', 'thèse, arguments, exemples'], answer: 0, explain: 'Les 4 mouvements de l’introduction du commentaire.' },
            { q: 'Un plan à éviter absolument est le plan…', choices: ['« forme / fond » (ou « procédés / effets »)', 'en deux axes', 'en trois axes', 'progressif'], answer: 0, explain: 'On mêle toujours le fond et la forme dans chaque partie.' },
            { q: 'Une citation, dans un paragraphe, doit toujours être…', choices: ['analysée (procédé + effet)', 'longue', 'laissée seule', 'recopiée sans guillemets'], answer: 0, explain: 'On cite court et exact, puis on analyse.' },
            { q: 'La conclusion d’un commentaire se termine par…', choices: ['une ouverture', 'une citation nouvelle', 'la problématique', 'un résumé du texte'], answer: 0, explain: 'Bilan (réponse à la problématique) puis ouverture.' },
          ],
        },
        {
          id: 'p1-fr-1-vf', type: 'vraifaux', title: 'Vrai / Faux rapide', icon: '⚡',
          questions: [
            { statement: 'Le commentaire consiste à résumer le texte.', answer: false, explain: 'Faux : on analyse comment le texte fait sens (≠ résumé, ≠ paraphrase).' },
            { statement: 'La problématique donne une direction à tout le commentaire.', answer: true, explain: 'Vrai : c’est la question centrale à laquelle il répond.' },
            { statement: 'On peut employer le « je » dans un commentaire.', answer: false, explain: 'Faux : on préfère « on », « le lecteur », « le texte ».' },
            { statement: 'Chaque paragraphe doit contenir au moins une citation analysée.', answer: true, explain: 'Vrai : structure AIE (Affirmation, Illustration, Explication).' },
            { statement: 'Le plan « forme puis fond » est recommandé.', answer: false, explain: 'Faux : il faut mêler fond et forme dans chaque partie.' },
            { statement: 'La conclusion se termine par une ouverture.', answer: true, explain: 'Vrai : bilan puis ouverture.' },
          ],
        },
        {
          id: 'p1-fr-1-ordre', type: 'ordre', title: 'Remise en ordre — Les étapes du commentaire', icon: '🔢',
          instruction: 'Remets les étapes dans l’ordre.',
          steps: ['Lire et analyser le texte au brouillon', 'Dégager une problématique', 'Bâtir un plan en axes', 'Rédiger l’introduction', 'Rédiger les paragraphes (AIE)', 'Rédiger la conclusion et l’ouverture'],
          explain: 'On analyse, on problématise, on planifie, puis on rédige (intro → développement → conclusion).',
        },
        {
          id: 'p1-fr-1-ordre-intro', type: 'ordre', title: 'Remise en ordre — L’introduction', icon: '🔢',
          instruction: 'Remets les 4 mouvements de l’introduction.',
          steps: ['Amorce (contexte)', 'Présentation du texte', 'Problématique', 'Annonce du plan'],
          explain: 'Amorce → présentation → problématique → annonce du plan.',
        },
        {
          id: 'p1-fr-1-flash', type: 'flashcard', title: 'Flashcards — Méthode du commentaire', icon: '🃏',
          cards: [
            { front: 'Paraphrase', back: 'Redire le texte avec d’autres mots : l’erreur à éviter absolument.' },
            { front: 'Problématique', back: 'La question centrale à laquelle répond tout le commentaire.' },
            { front: 'Axe', back: 'Une grande partie = une idée d’interprétation à prouver.' },
            { front: 'AIE', back: 'Affirmation → Illustration (citation) → Explication (procédé + effet).' },
            { front: 'Ouverture', back: 'Élargissement en fin de conclusion (autre œuvre, portée plus large).' },
          ],
        },
      ],
    },
    {
      id: 'p1-fr-2',
      name: 'Méthode — Contraction de texte & essai',
      short: 'Contraction & essai',
      keywords: 'contraction de texte résumé quart fidélité reformulation essai argumentation thèse arguments exemples plan dialectique introduction conclusion connecteurs EAF écrit',
      intro:
        'Le deuxième sujet possible à l’écrit associe une **contraction de texte** (résumer fidèlement au **quart**) et un **essai** (une réflexion **argumentée** sur une question liée au texte). Deux exercices très **codifiés** : la note récompense la **méthode** et la **rigueur**.',
      cours: [
        {
          h: 'La contraction de texte : principe et règles',
          blocks: [
            { t: 'p', c: 'La **contraction** consiste à **réduire un texte au quart** (¼) de sa longueur, **sans le trahir**. On garde **les idées essentielles** et leur **enchaînement**, on supprime les exemples, les répétitions et les détails.' },
            { t: 'table', head: ['On GARDE', 'On SUPPRIME'], rows: [
              ['La **thèse** et les idées principales', 'Les exemples et illustrations'],
              ['L’**ordre** et la logique du texte', 'Les répétitions, les digressions'],
              ['Le système de **l’auteur** (le « je » de l’auteur)', 'Ses propres commentaires / avis'],
            ] },
            { t: 'warning', c: 'Règles d’or : rester **fidèle** (ne rien ajouter, ne rien commenter), **reformuler avec ses propres mots** (pas de copié-collé de phrases), respecter le **nombre de mots** imposé (± 10 %) et l’**indiquer** à la fin.' },
          ],
        },
        {
          h: 'La contraction : méthode pas à pas',
          blocks: [
            { t: 'p', c: 'Une démarche efficace en plusieurs temps :' },
            { t: 'list', c: [
              '**Lire** le texte deux fois pour saisir la **thèse** et le **plan** de l’auteur ;',
              '**découper** le texte en **paragraphes / mouvements** et donner à chacun un titre (l’idée) ;',
              'pour chaque partie, **reformuler l’idée essentielle** en une ou deux phrases ;',
              '**relier** ces idées avec des **connecteurs logiques** (donc, cependant, en effet…).',
            ] },
            { t: 'tip', c: 'Astuce : compte tes mots par tranches (barre tous les 20 mots). Vise le quart : un texte de 800 mots se contracte en **~200 mots** (± 20).' },
          ],
        },
        {
          h: 'La contraction : rédiger et respecter le quart',
          blocks: [
            { t: 'p', c: 'On rédige un texte **suivi et cohérent** (pas une liste), qui « sonne » comme un mini-texte autonome. On **respecte le point de vue de l’auteur** : s’il écrit « je pense que », on garde ce « je » (celui de l’auteur, pas le tien).' },
            { t: 'example', h: 'Contracter une phrase', c: 'Texte : « De nos jours, force est de constater que les écrans, qu’il s’agisse des téléphones, des tablettes ou des ordinateurs, occupent une place absolument démesurée dans le quotidien des adolescents. » (30 mots) \n→ Contraction : « Aujourd’hui, les écrans envahissent le quotidien des adolescents. » (8 mots) — on garde l’idée, on supprime l’énumération et l’insistance.' },
          ],
        },
        {
          h: 'L’essai : analyser le sujet',
          blocks: [
            { t: 'p', c: 'L’**essai** est une **réflexion argumentée** qui répond à une **question** en lien avec le thème du texte contracté. Ce n’est pas un avis « au fil de la plume » : c’est un devoir **organisé** avec une **thèse** défendue et **nuancée**.' },
            { t: 'p', c: 'Premier réflexe : **analyser la question**. Repère les **mots-clés**, le type de question (« Pensez-vous que… ? » appelle une réponse **nuancée**), et **reformule-la** pour être sûr de la comprendre.' },
            { t: 'warning', c: 'Ne réponds pas seulement « oui » ou « non » : la plupart des sujets attendent une réflexion **nuancée** (des arguments pour, des arguments contre, puis un dépassement).' },
          ],
        },
        {
          h: 'L’essai : bâtir l’argumentation',
          blocks: [
            { t: 'p', c: 'On construit un **plan** (souvent en **2 parties**, parfois dialectique). Chaque partie contient des **arguments**, et chaque argument est **appuyé par un exemple** précis :' },
            { t: 'table', head: ['Élément', 'Rôle'], rows: [
              ['**Thèse**', 'L’idée générale que tu défends'],
              ['**Argument**', 'Une raison qui soutient la thèse'],
              ['**Exemple**', 'Un fait précis : œuvre, actualité, expérience, histoire'],
            ] },
            { t: 'p', c: 'Les **exemples** peuvent venir de la **littérature**, de l’**actualité**, de l’**histoire**, de ta **culture personnelle**. Plus ils sont précis, plus l’argument est convaincant.' },
          ],
        },
        {
          h: 'L’essai : rédiger + erreurs à éviter',
          blocks: [
            { t: 'p', c: 'L’**introduction** amène le sujet, **reformule la question** et **annonce le plan**. Le **développement** enchaîne les paragraphes argumentés (un argument + un exemple par paragraphe), reliés par des **connecteurs**. La **conclusion** répond clairement à la question, de façon **nuancée**, et peut ouvrir.' },
            { t: 'warning', c: 'Erreurs fréquentes : rédiger un essai **désorganisé** (idées en vrac), **sans exemples** (arguments abstraits), oublier de **reformuler la question**, ou faire une contraction qui **commente** au lieu de résumer. Soigne aussi l’**orthographe** et les **connecteurs logiques**.' },
          ],
        },
      ],
      essentiel: [
        '**Contraction** = réduire le texte au **quart**, **fidèlement**, avec ses **propres mots**, en gardant l’**ordre** et le « je » de **l’auteur** (jamais de commentaire) ; indiquer le **nombre de mots**.',
        'Méthode contraction : repérer la **thèse** et le **plan**, reformuler l’idée de chaque partie, relier par des **connecteurs**.',
        '**Essai** = réflexion **argumentée** et **nuancée** sur une question ; d’abord **analyser** et **reformuler** le sujet.',
        'Argumenter = **thèse** → **arguments** → **exemples** précis (littérature, actualité, histoire, expérience).',
        'Essai : intro (reformuler + annoncer) → développement (argument + exemple par § + connecteurs) → conclusion nuancée.',
      ],
      resources: [{ kind: 'video', label: 'Méthode de la contraction et de l’essai', note: 'Vidéos — recherche YouTube', url: yt('méthode contraction de texte essai EAF première voie technologique') }],
      games: [
        {
          id: 'p1-fr-2-qcm', type: 'qcm', title: 'QCM — Contraction & essai', icon: '❓',
          questions: [
            { q: 'La contraction réduit le texte à environ…', choices: ['un quart', 'la moitié', 'un dixième', 'trois quarts'], answer: 0, explain: 'Environ ¼, fidèlement, avec ses propres mots.' },
            { q: 'Dans une contraction, on doit…', choices: ['garder l’ordre et le « je » de l’auteur', 'donner son avis', 'ajouter des exemples', 'commenter le texte'], answer: 0, explain: 'Fidélité totale : on ne commente pas, on reformule.' },
            { q: 'Un texte de 800 mots se contracte en environ…', choices: ['200 mots', '400 mots', '80 mots', '600 mots'], answer: 0, explain: '¼ de 800 = 200 mots (± 10 %).' },
            { q: 'L’essai est…', choices: ['une réflexion argumentée et nuancée', 'un résumé', 'une dictée', 'une biographie'], answer: 0, explain: 'On défend une thèse avec arguments et exemples.' },
            { q: 'Dans l’essai, chaque argument doit être…', choices: ['appuyé par un exemple précis', 'laissé abstrait', 'répété', 'illustré par le texte seulement'], answer: 0, explain: 'Argument + exemple (littérature, actualité, histoire…).' },
          ],
        },
        {
          id: 'p1-fr-2-ordre', type: 'ordre', title: 'Remise en ordre — Méthode de la contraction', icon: '🔢',
          instruction: 'Remets les étapes de la contraction.',
          steps: ['Lire le texte et saisir la thèse', 'Découper en parties (une idée par partie)', 'Reformuler l’idée de chaque partie', 'Relier avec des connecteurs', 'Vérifier le nombre de mots (¼)'],
          explain: 'On repère la thèse et le plan, on reformule, on relie, on compte les mots.',
        },
        {
          id: 'p1-fr-2-tri', type: 'tri', title: 'Tri — Contraction : garder ou supprimer ?', icon: '🗂️',
          instruction: 'Dans une contraction, faut-il le garder ou le supprimer ?',
          categories: [{ id: 'g', label: 'Garder' }, { id: 's', label: 'Supprimer' }],
          items: [
            { text: 'La thèse de l’auteur', cat: 'g' },
            { text: 'Un exemple qui illustre une idée', cat: 's' },
            { text: 'L’enchaînement logique des idées', cat: 'g' },
            { text: 'Une répétition', cat: 's' },
            { text: 'Ton avis personnel', cat: 's' },
            { text: 'Le point de vue de l’auteur (« je »)', cat: 'g' },
          ],
        },
        {
          id: 'p1-fr-2-vf', type: 'vraifaux', title: 'Vrai / Faux rapide', icon: '⚡',
          questions: [
            { statement: 'La contraction consiste à donner son avis sur le texte.', answer: false, explain: 'Faux : on résume fidèlement au quart, sans commenter.' },
            { statement: 'L’essai attend souvent une réponse nuancée.', answer: true, explain: 'Vrai : arguments pour, contre, puis dépassement.' },
            { statement: 'Dans la contraction, on peut recopier des phrases entières du texte.', answer: false, explain: 'Faux : on reformule avec ses propres mots.' },
            { statement: 'Un bon argument d’essai s’appuie sur un exemple précis.', answer: true, explain: 'Vrai : littérature, actualité, histoire, expérience.' },
          ],
        },
        {
          id: 'p1-fr-2-flash', type: 'flashcard', title: 'Flashcards — Contraction & essai', icon: '🃏',
          cards: [
            { front: 'Contraction', back: 'Résumer au ¼, fidèlement, avec ses mots, sans commenter.' },
            { front: 'Fidélité', back: 'Garder les idées, l’ordre et le point de vue de l’auteur.' },
            { front: 'Essai', back: 'Réflexion argumentée et nuancée répondant à une question.' },
            { front: 'Argument / exemple', back: 'Une raison + un fait précis qui la prouve.' },
            { front: 'Connecteurs logiques', back: 'Donc, cependant, en effet, or… : ils structurent le propos.' },
          ],
        },
      ],
    },
    {
      id: 'p1-fr-3',
      name: 'Les genres & leur vocabulaire',
      short: 'Genres & vocabulaire',
      keywords: 'roman récit narrateur point de vue focalisation théâtre réplique tirade monologue didascalie stichomythie poésie vers strophe rime mètre alexandrin sonnet allitération assonance littérature d’idées argumentation apologue essai humanisme Lumières figures de style registres',
      intro:
        'Les **4 objets d’étude** (roman, théâtre, poésie, littérature d’idées) ont chacun leur **vocabulaire technique**. Le connaître est indispensable pour **analyser** un texte au commentaire comme à l’oral. Voici la « boîte à outils » complète, genre par genre.',
      cours: [
        {
          h: 'Le roman et le récit : le vocabulaire de la narration',
          blocks: [
            { t: 'p', c: 'Le **roman** (et plus largement le **récit**, du Moyen Âge au XXIᵉ) est l’art de **raconter une histoire**. Vocabulaire de base :' },
            { t: 'table', head: ['Terme', 'Définition'], rows: [
              ['Narrateur', 'Celui qui **raconte** (≠ l’auteur !)'],
              ['Intrigue', 'L’enchaînement des événements de l’histoire'],
              ['Péripétie', 'Un rebondissement de l’action'],
              ['Incipit', 'Le **début** du roman'],
              ['Dénouement', 'La **fin**, la résolution'],
              ['Récit cadre / enchâssé', 'Une histoire racontée à l’intérieur d’une autre'],
            ] },
            { t: 'warning', c: 'Ne confonds jamais l’**auteur** (la personne réelle qui écrit) et le **narrateur** (la voix qui raconte, qui peut être un personnage inventé).' },
          ],
        },
        {
          h: 'Le roman : narrateur, points de vue et rythme',
          blocks: [
            { t: 'p', c: 'Le **point de vue** (ou **focalisation**) désigne « par quels yeux » on voit l’histoire :' },
            { t: 'table', head: ['Point de vue', 'Ce qu’on sait'], rows: [
              ['Focalisation **interne**', 'On suit **un personnage**, on connaît ses pensées'],
              ['Focalisation **externe**', 'On voit de l’extérieur, comme une caméra (pas les pensées)'],
              ['Focalisation **zéro** (omnisciente)', 'Le narrateur **sait tout** de tous les personnages'],
            ] },
            { t: 'p', c: 'On distingue aussi le **narrateur interne** (« je », un personnage raconte) du **narrateur externe** (« il/elle », extérieur à l’histoire). Le **rythme** du récit varie : **sommaire** (on résume), **scène** (temps réel, dialogue), **ellipse** (on saute une période), **pause** (description).' },
          ],
        },
        {
          h: 'Le théâtre : le vocabulaire du texte théâtral',
          blocks: [
            { t: 'p', c: 'Le **théâtre** (XVIIᵉ-XXIᵉ) est un texte fait pour être **joué**. Vocabulaire spécifique :' },
            { t: 'table', head: ['Terme', 'Définition'], rows: [
              ['Réplique', 'Ce que dit un personnage (sa prise de parole)'],
              ['Tirade', 'Une **longue** réplique ininterrompue'],
              ['Monologue', 'Un personnage **seul** se parle à lui-même'],
              ['Aparté', 'Des mots dits **à part**, entendus du public seul'],
              ['Stichomythie', 'Échange de répliques **très courtes** (dialogue rapide, tension)'],
              ['Didascalie', 'Les **indications scéniques** (décor, gestes, ton) en italique'],
              ['Acte / scène', 'Les grandes divisions de la pièce'],
            ] },
            { t: 'tip', c: 'La **double énonciation** est propre au théâtre : un personnage parle à un autre personnage **et**, en même temps, à travers lui, l’auteur parle au **public**.' },
          ],
        },
        {
          h: 'Le théâtre : registres, mise en scène et représentation',
          blocks: [
            { t: 'p', c: 'Un texte théâtral n’existe pleinement qu’à la **représentation** : la **mise en scène** (décor, jeu des acteurs, lumières, costumes) **interprète** le texte.' },
            { t: 'list', c: [
              'le **quiproquo** : un malentendu (un personnage pris pour un autre) — ressort du **comique** ;',
              'le **coup de théâtre** : un rebondissement brutal ;',
              'le **nœud** (le cœur du conflit) et le **dénouement** (la résolution).',
            ] },
            { t: 'p', c: 'Registres fréquents : le **comique** (comédie : farce, satire) et le **tragique** (tragédie : fatalité, mort, dilemme). On parle de **tragi-comédie** quand les deux se mêlent.' },
          ],
        },
        {
          h: 'La poésie : la versification',
          blocks: [
            { t: 'p', c: 'La **poésie** (XIXᵉ-XXIᵉ) travaille le **langage** : sa musique, ses images, sa forme. La **versification** est la technique du vers.' },
            { t: 'table', head: ['Terme', 'Définition'], rows: [
              ['Vers', 'Une ligne de poème'],
              ['Strophe', 'Un groupe de vers (tercet = 3, quatrain = 4)'],
              ['Mètre', 'Le nombre de **syllabes** d’un vers'],
              ['Octosyllabe / décasyllabe / alexandrin', 'Vers de **8 / 10 / 12** syllabes'],
              ['Rime', 'Retour du même son en fin de vers'],
              ['Césure / hémistiche', 'La coupe / la moitié de l’alexandrin (6+6)'],
              ['Enjambement / rejet', 'La phrase déborde d’un vers sur le suivant'],
            ] },
            { t: 'tip', c: 'Attention au **e muet** : il se compte s’il est suivi d’une consonne (« une rose épanouie »). C’est essentiel pour compter les syllabes d’un alexandrin.' },
          ],
        },
        {
          h: 'La poésie : sonorités, images et formes fixes',
          blocks: [
            { t: 'p', c: 'La poésie joue sur les **sons** :' },
            { t: 'list', c: [
              '**allitération** : répétition d’une **consonne** (« Pour qui sont ces serpents qui sifflent sur vos têtes ? ») ;',
              '**assonance** : répétition d’une **voyelle** ;',
              'les **rimes** (riches, suffisantes, pauvres) et leur disposition : **plates** (AABB), **croisées** (ABAB), **embrassées** (ABBA).',
            ] },
            { t: 'p', c: 'Elle crée des **images** (métaphore, comparaison, symbole) et prend des **formes fixes** : le **sonnet** (2 quatrains + 2 tercets), l’**ode**, ou au contraire le **vers libre** et le **poème en prose** (sans mètre ni rime).' },
            { t: 'p', c: 'Registre dominant : le **lyrisme** (expression des sentiments personnels, souvent avec le « je »).' },
          ],
        },
        {
          h: 'La littérature d’idées : le vocabulaire de l’argumentation',
          blocks: [
            { t: 'p', c: 'La **littérature d’idées** (XVIᵉ-XVIIIᵉ) regroupe les textes qui **défendent des idées** et cherchent à **convaincre** ou **persuader**.' },
            { t: 'table', head: ['Terme', 'Définition'], rows: [
              ['Thèse', 'L’idée défendue par l’auteur'],
              ['Argument', 'Une raison qui appuie la thèse'],
              ['Convaincre', 'Emporter l’adhésion par la **raison** (logique, preuves)'],
              ['Persuader', 'Emporter l’adhésion par les **émotions**'],
              ['Réfuter', 'Démonter la thèse adverse'],
              ['Argumentation directe / indirecte', 'Idées énoncées clairement / passant par une fiction'],
            ] },
            { t: 'p', c: 'L’argumentation **indirecte** passe par une **fiction** : l’**apologue** (récit à visée morale), la **fable**, le **conte philosophique** (Voltaire), l’**utopie**.' },
          ],
        },
        {
          h: 'La littérature d’idées : formes et mouvements',
          blocks: [
            { t: 'p', c: 'Les grandes **formes** de la littérature d’idées : l’**essai** (Montaigne), le **dialogue**, la **lettre** (les *Lettres persanes*), le **pamphlet**, la **maxime**, l’**article** (l’*Encyclopédie*).' },
            { t: 'table', head: ['Mouvement', 'Idées clés'], rows: [
              ['**Humanisme** (XVIᵉ)', 'Confiance en l’homme, savoir, tolérance, retour à l’Antiquité'],
              ['**Lumières** (XVIIIᵉ)', 'Raison, progrès, liberté, critique des injustices et du fanatisme'],
            ] },
            { t: 'p', c: 'Registres associés : **polémique** (attaque violente), **satirique** (critique par le rire), **didactique** (qui cherche à instruire).' },
          ],
        },
        {
          h: 'Les figures de style (boîte à outils)',
          blocks: [
            { t: 'p', c: 'Les **figures de style** sont des procédés qui donnent de la force et du sens. À connaître et à savoir **nommer** :' },
            { t: 'table', head: ['Figure', 'Définition'], rows: [
              ['Comparaison', 'Rapproche deux éléments avec un **outil** (« comme »)'],
              ['Métaphore', 'Rapprochement **sans** outil (« une mer de larmes »)'],
              ['Personnification', 'Traits humains à une chose (« le vent murmure »)'],
              ['Hyperbole', 'Exagération (« mourir de faim »)'],
              ['Litote', 'Dire peu pour suggérer beaucoup (« ce n’est pas mauvais »)'],
              ['Euphémisme', 'Atténuer une réalité dure (« il nous a quittés »)'],
              ['Anaphore', 'Répétition en début de vers/phrase (insistance)'],
              ['Antithèse / oxymore', 'Opposition d’idées / deux mots contradictoires (« soleil noir »)'],
              ['Gradation', 'Énumération d’intensité croissante'],
              ['Ironie', 'Dire le contraire de ce qu’on pense pour critiquer'],
            ] },
            { t: 'tip', c: 'Règle absolue en analyse : associer **le procédé + son effet**. Ex. : « l’**anaphore** de “je me souviens” insiste sur l’obsession du souvenir ». Nommer sans expliquer ne rapporte rien.' },
          ],
        },
      ],
      essentiel: [
        '**Roman/récit** : narrateur (≠ auteur), intrigue, incipit/dénouement ; **points de vue** : interne, externe, omniscient (zéro) ; rythme (scène, sommaire, ellipse, pause).',
        '**Théâtre** : réplique, tirade, monologue, aparté, stichomythie, **didascalie** ; **double énonciation** ; comique / tragique ; le texte se réalise à la **représentation**.',
        '**Poésie** : vers, strophe, **mètre** (alexandrin = 12 syll.), rime (plates/croisées/embrassées), césure, enjambement ; **allitération** (consonnes) / **assonance** (voyelles) ; sonnet, vers libre ; **lyrisme**.',
        '**Littérature d’idées** : thèse, argument, **convaincre** (raison) / **persuader** (émotion) ; argumentation directe / indirecte (**apologue**, conte philosophique) ; **Humanisme** & **Lumières**.',
        '**Figures de style** : toujours **nommer le procédé + expliquer son effet** (métaphore, personnification, anaphore, antithèse, ironie, litote…).',
      ],
      resources: [
        { kind: 'video', label: 'Vocabulaire du théâtre et de la poésie', note: 'Vidéos — recherche YouTube', url: yt('vocabulaire théâtre poésie versification première français') },
        { kind: 'video', label: 'Roman : points de vue ; littérature d’idées', note: 'Vidéos — recherche YouTube', url: yt('point de vue focalisation roman argumentation littérature d idées première français') },
      ],
      games: [
        {
          id: 'p1-fr-3-qcm', type: 'qcm', title: 'QCM — Vocabulaire des genres', icon: '❓',
          questions: [
            { q: 'Une **tirade** est…', choices: ['une longue réplique ininterrompue', 'un personnage seul qui se parle', 'une indication scénique', 'un échange rapide'], answer: 0, explain: 'Le monologue = seul ; l’aparté = à part ; la stichomythie = répliques courtes.' },
            { q: 'Les **didascalies** sont…', choices: ['les indications scéniques', 'les répliques', 'les rimes', 'les strophes'], answer: 0, explain: 'Elles indiquent décor, gestes, ton (en italique).' },
            { q: 'Un **alexandrin** compte…', choices: ['12 syllabes', '8 syllabes', '10 syllabes', '14 syllabes'], answer: 0, explain: 'Octosyllabe = 8, décasyllabe = 10, alexandrin = 12.' },
            { q: 'La répétition d’une **consonne** est une…', choices: ['allitération', 'assonance', 'anaphore', 'césure'], answer: 0, explain: 'Allitération = consonne ; assonance = voyelle.' },
            { q: 'Emporter l’adhésion par les **émotions**, c’est…', choices: ['persuader', 'convaincre', 'réfuter', 'résumer'], answer: 0, explain: 'Convaincre = par la raison ; persuader = par les émotions.' },
            { q: 'Le récit à visée morale passant par une fiction est…', choices: ['l’apologue', 'l’incipit', 'la didascalie', 'la césure'], answer: 0, explain: 'Fable, conte philosophique… = argumentation indirecte.' },
            { q: 'Voir l’histoire à travers les pensées d’un seul personnage, c’est la focalisation…', choices: ['interne', 'externe', 'zéro', 'omnisciente'], answer: 0, explain: 'Interne = on suit un personnage et ses pensées.' },
          ],
        },
        {
          id: 'p1-fr-3-tri', type: 'tri', title: 'Tri — À quel genre appartient ce mot ?', icon: '🗂️',
          instruction: 'Classe chaque terme technique.',
          categories: [
            { id: 'th', label: 'Théâtre' },
            { id: 'po', label: 'Poésie' },
            { id: 'ro', label: 'Roman' },
          ],
          items: [
            { text: 'Didascalie', cat: 'th' },
            { text: 'Alexandrin', cat: 'po' },
            { text: 'Focalisation', cat: 'ro' },
            { text: 'Tirade', cat: 'th' },
            { text: 'Strophe', cat: 'po' },
            { text: 'Incipit', cat: 'ro' },
            { text: 'Stichomythie', cat: 'th' },
            { text: 'Enjambement', cat: 'po' },
          ],
        },
        {
          id: 'p1-fr-3-assoc', type: 'association', title: 'Association — Terme ↔ définition', icon: '🔗',
          pairs: [
            { left: 'Monologue', right: 'Un personnage seul se parle à lui-même' },
            { left: 'Enjambement', right: 'La phrase déborde d’un vers sur le suivant' },
            { left: 'Narrateur', right: 'La voix qui raconte (≠ l’auteur)' },
            { left: 'Apologue', right: 'Récit à visée morale (fable, conte)' },
            { left: 'Litote', right: 'Dire peu pour suggérer beaucoup' },
            { left: 'Double énonciation', right: 'Le personnage parle à l’autre et au public' },
          ],
        },
        {
          id: 'p1-fr-3-trou', type: 'trou', title: 'Texte à trous — Vocabulaire littéraire', icon: '✏️',
          questions: [
            { text: 'Un vers de 12 syllabes s’appelle un ____.', answer: 'alexandrin', explain: '8 = octosyllabe, 10 = décasyllabe, 12 = alexandrin.' },
            { text: 'La répétition d’une voyelle est une ____.', answer: 'assonance', explain: 'Assonance = voyelle ; allitération = consonne.' },
            { text: 'Les indications scéniques d’une pièce sont les ____.', answer: 'didascalies', alt: ['didascalie'], explain: 'Elles précisent décor, gestes, ton.' },
            { text: 'Convaincre s’adresse à la raison ; ____ s’adresse aux émotions.', answer: 'persuader', explain: 'Deux stratégies argumentatives.' },
            { text: 'Le début d’un roman est l’____.', answer: 'incipit', explain: 'La fin = le dénouement.' },
          ],
        },
        {
          id: 'p1-fr-3-flash', type: 'flashcard', title: 'Flashcards — Genres & vocabulaire', icon: '🃏',
          cards: [
            { front: 'Narrateur ≠ auteur', back: 'L’auteur écrit ; le narrateur raconte (parfois un personnage).' },
            { front: 'Focalisation interne / externe / zéro', back: 'Pensées d’un perso / vue extérieure / narrateur omniscient.' },
            { front: 'Tirade / monologue / aparté', back: 'Longue réplique / seul se parle / dit à part (public).' },
            { front: 'Didascalie', back: 'Indication scénique (décor, geste, ton).' },
            { front: 'Alexandrin', back: 'Vers de 12 syllabes (césure à l’hémistiche, 6+6).' },
            { front: 'Allitération / assonance', back: 'Répétition de consonne / de voyelle.' },
            { front: 'Convaincre / persuader', back: 'Par la raison / par les émotions.' },
            { front: 'Apologue', back: 'Récit à visée morale (argumentation indirecte).' },
            { front: 'Humanisme / Lumières', back: 'XVIᵉ (savoir, tolérance) / XVIIIᵉ (raison, progrès, liberté).' },
          ],
        },
      ],
    },
    {
      id: 'p1-fr-4',
      name: 'L’oral & les repères',
      short: 'Oral & repères',
      keywords: 'oral EAF explication linéaire question de grammaire présentation œuvre entretien registres lyrique tragique comique pathétique épique polémique mouvements littéraires humanisme baroque classicisme Lumières romantisme réalisme symbolisme surréalisme',
      intro:
        'L’oral (**coef. 5**) et les **repères culturels** complètent la préparation. On y révise le **déroulé de l’épreuve**, la méthode de l’**explication linéaire**, la **question de grammaire**, l’**entretien**, ainsi que les **registres** et **mouvements** littéraires à connaître.',
      cours: [
        {
          h: 'L’oral : déroulé de l’épreuve',
          blocks: [
            { t: 'p', c: 'L’oral dure environ **20 minutes** (après **30 min de préparation**) et se déroule en deux parties :' },
            { t: 'table', head: ['Partie', 'Contenu', 'Durée'], rows: [
              ['**Partie 1**', 'Lecture + **explication linéaire** d’un texte du descriptif, puis **question de grammaire**', '~12 min'],
              ['**Partie 2**', 'Présentation d’une **œuvre** choisie, puis **entretien** avec l’examinateur', '~8 min'],
            ] },
            { t: 'p', c: 'On apporte son **descriptif** (la liste des textes étudiés) et les **œuvres**. L’examinateur choisit le texte de la partie 1.' },
          ],
        },
        {
          h: 'L’explication linéaire (méthode)',
          blocks: [
            { t: 'p', c: 'L’**explication linéaire** consiste à expliquer le texte **dans l’ordre**, **au fil de la lecture**, sans plaquer un plan thématique. On suit les **mouvements** du texte.' },
            { t: 'list', c: [
              'commencer par une **introduction** (situer le texte, lecture à voix haute, **problématique**, annonce des mouvements) ;',
              'expliquer le texte **mouvement par mouvement**, en analysant les **procédés + effets** au fur et à mesure ;',
              'terminer par une **conclusion** (bilan + réponse à la problématique).',
            ] },
            { t: 'warning', c: 'Erreur fréquente : la **paraphrase** (raconter le texte). Comme à l’écrit, on **analyse** le « comment » : chaque remarque associe une **citation**, un **procédé** et un **effet**.' },
          ],
        },
        {
          h: 'La question de grammaire',
          blocks: [
            { t: 'p', c: 'Après l’explication, l’examinateur pose une **question de grammaire** sur une phrase du texte. On distingue d’abord trois types de **propositions** : **indépendante** (elle se suffit à elle-même), **principale** (elle commande une subordonnée) et **subordonnée** (elle dépend d’une autre).' },
            { t: 'p', c: 'Voici, pour **chaque cas**, un **exemple** et la **phrase type à dire** à l’oral (à adapter au texte donné).' },
            { t: 'p', c: '**① L’interrogation**' },
            { t: 'table', head: ['Type', 'Exemple', 'Phrase type à dire à l’oral'], rows: [
              ['Interrogation **totale**', '« Viendras-tu à la fête ? »', 'C’est une interrogation **totale** : elle porte sur **toute la phrase** et appelle une réponse par **oui ou par non** ; elle est marquée par l’**inversion du sujet** (« viendras-tu »).'],
              ['Interrogation **partielle**', '« **Où** vas-tu ? »', 'C’est une interrogation **partielle** : elle porte sur **un seul élément** (ici le lieu) et est introduite par le **mot interrogatif** « où ».'],
              ['Interrogation **directe**', '« Que veux-tu ? »', 'C’est une interrogation **directe** : la question est posée telle quelle, avec un **point d’interrogation** et l’**inversion du sujet**.'],
              ['Interrogation **indirecte**', '« Je me demande **ce que** tu veux. »', 'C’est une interrogation **indirecte** : la question est **enchâssée dans une subordonnée**, **sans** point d’interrogation ni inversion (introduite par « ce que »).'],
            ] },
            { t: 'p', c: '**② La négation**' },
            { t: 'table', head: ['Type', 'Exemple', 'Phrase type à dire à l’oral'], rows: [
              ['Négation **totale**', '« Il **ne** viendra **pas**. »', 'C’est une négation **totale** : elle nie **toute la phrase**, marquée par l’adverbe de négation « **ne… pas** ».'],
              ['Négation **partielle**', '« Il **ne** voit **personne**. »', 'C’est une négation **partielle** : elle ne nie qu’**une partie** de la phrase, marquée ici par « ne… **personne** » (on pourrait avoir *jamais, rien, aucun, plus*).'],
              ['Négation **restrictive**', '« Il **ne** mange **que** des fruits. »', 'Ce n’est pas une vraie négation mais une **restriction** : « ne… **que** » signifie « **seulement** ».'],
              ['Négation **lexicale**', '« Ce projet est **irréalisable**. »', 'La négation est **lexicale** : elle est portée par un **mot** (le préfixe « ir- »), et non par une tournure grammaticale.'],
            ] },
            { t: 'p', c: '**③ Les propositions subordonnées** (chaque type, avec sa fonction)' },
            { t: 'table', head: ['Type de subordonnée', 'Exemple', 'Phrase type à dire à l’oral'], rows: [
              ['**Relative**', '« Le livre **que** je lis est passionnant. »', 'C’est une subordonnée **relative** : introduite par le **pronom relatif** « que », elle complète le nom « livre » (son **antécédent**) ; fonction : **complément de l’antécédent** (comme un adjectif épithète).'],
              ['**Conjonctive complétive**', '« Je pense **que** tu as raison. »', 'C’est une subordonnée **conjonctive complétive** : introduite par la conjonction « que », elle est **COD** du verbe « pense ».'],
              ['**Interrogative indirecte**', '« Je me demande **si** tu viendras. »', 'C’est une subordonnée **interrogative indirecte** : introduite par « si » (ou un mot interrogatif), elle est **COD** du verbe « me demande ».'],
              ['Circonstancielle de **temps**', '« **Quand** le jour se lève, les oiseaux chantent. »', 'C’est une subordonnée circonstancielle de **temps** : introduite par « quand », elle indique le **moment** de l’action (**CC de temps**).'],
              ['Circonstancielle de **cause**', '« Il reste chez lui **parce qu’**il est malade. »', 'C’est une circonstancielle de **cause** : introduite par « parce que », elle exprime la **raison** de l’action (**CC de cause**).'],
              ['Circonstancielle de **conséquence**', '« Il pleut **si** fort **qu’**il inonde la rue. »', 'C’est une circonstancielle de **conséquence** : introduite par « si… que / si bien que », elle exprime le **résultat** (**CC de conséquence**).'],
              ['Circonstancielle de **but**', '« Il travaille **afin qu’**elle réussisse. »', 'C’est une circonstancielle de **but** : introduite par « afin que / pour que » (+ **subjonctif**), elle exprime l’**objectif** visé (**CC de but**).'],
              ['Circonstancielle de **condition**', '« **Si** tu viens, je serai content. »', 'C’est une circonstancielle de **condition** : introduite par « si / à condition que », elle pose une **hypothèse** (**CC de condition**).'],
              ['Circonstancielle de **concession**', '« **Bien qu’**il pleuve, il sort. »', 'C’est une circonstancielle de **concession** (opposition) : introduite par « bien que / quoique » (+ **subjonctif**), elle exprime un **obstacle** qui n’empêche pas l’action.'],
              ['Circonstancielle de **comparaison**', '« Il agit **comme** son père agissait. »', 'C’est une circonstancielle de **comparaison** : introduite par « comme / ainsi que », elle établit une **comparaison** (**CC de comparaison**).'],
            ] },
            { t: 'tip', c: 'Méthode : **repérer les verbes conjugués** (autant de verbes conjugués = autant de propositions), puis, pour chaque proposition, **nommer sa nature** (à l’aide du tableau) et **donner sa fonction** en citant le **mot qui l’introduit**.' },
          ],
        },
        {
          h: 'La présentation d’œuvre & l’entretien',
          blocks: [
            { t: 'p', c: 'Dans la **partie 2**, tu présentes une **œuvre lue** dans l’année (ou en lecture cursive) : tu expliques **pourquoi tu l’as choisie**, ce qu’elle raconte et ce qu’elle t’a apporté. Puis l’examinateur **dialogue** avec toi (l’**entretien**).' },
            { t: 'tip', c: 'Prépare : un **résumé** clair, **2-3 passages** marquants, un **avis argumenté** (pas seulement « j’ai aimé »), et des liens avec le **parcours**. Montre que tu as **vraiment lu** et **réfléchi**.' },
          ],
        },
        {
          h: 'Les registres littéraires',
          blocks: [
            { t: 'p', c: 'Un **registre** est la **tonalité** d’un texte, l’émotion qu’il cherche à produire. À savoir reconnaître :' },
            { t: 'table', head: ['Registre', 'Effet recherché'], rows: [
              ['Lyrique', 'Exprimer des **sentiments** personnels (amour, mélancolie)'],
              ['Tragique', 'Fatalité, souffrance, mort inévitable'],
              ['Comique', 'Faire **rire** (farce, satire, ironie)'],
              ['Pathétique', 'Émouvoir, susciter la **pitié**'],
              ['Épique', 'Amplifier, célébrer un exploit (souffle héroïque)'],
              ['Polémique / satirique', '**Attaquer**, critiquer (par la violence ou le rire)'],
              ['Fantastique', 'Faire naître le **doute**, l’inquiétude'],
            ] },
          ],
        },
        {
          h: 'Les mouvements littéraires (repères)',
          blocks: [
            { t: 'p', c: 'Situer un texte dans son **mouvement** aide à l’interpréter. Grands repères du XVIᵉ au XXᵉ :' },
            { t: 'table', head: ['Mouvement', 'Siècle', 'Idées clés'], rows: [
              ['Humanisme', 'XVIᵉ', 'Confiance en l’homme, savoir, tolérance'],
              ['Baroque', 'fin XVIᵉ-XVIIᵉ', 'Mouvement, instabilité, illusion, démesure'],
              ['Classicisme', 'XVIIᵉ', 'Mesure, raison, règles, équilibre'],
              ['Lumières', 'XVIIIᵉ', 'Raison, progrès, liberté, critique'],
              ['Romantisme', 'XIXᵉ', 'Sentiments, « je », nature, mélancolie'],
              ['Réalisme / Naturalisme', 'XIXᵉ', 'Peindre le réel, la société, avec précision'],
              ['Symbolisme', 'fin XIXᵉ', 'Suggérer, musique du langage, symboles'],
              ['Surréalisme', 'XXᵉ', 'Rêve, inconscient, écriture automatique'],
            ] },
          ],
        },
      ],
      essentiel: [
        'Oral (coef. 5, ~20 min après 30 min de prépa) : **partie 1** = explication linéaire + **question de grammaire** ; **partie 2** = présentation d’**œuvre** + **entretien**.',
        '**Explication linéaire** : expliquer **dans l’ordre**, mouvement par mouvement (citation + procédé + effet), **jamais paraphraser**.',
        '**Question de grammaire** : repérer les verbes conjugués → identifier les **propositions** (subordonnées, négation, interrogation).',
        'Présentation d’**œuvre** : résumé, passages marquants, **avis argumenté** ; puis entretien.',
        '**Registres** : lyrique, tragique, comique, pathétique, épique, polémique, fantastique.',
        '**Mouvements** : Humanisme, Baroque, Classicisme, Lumières, Romantisme, Réalisme/Naturalisme, Symbolisme, Surréalisme.',
      ],
      resources: [
        { kind: 'video', label: 'Méthode de l’explication linéaire', note: 'Vidéos — recherche YouTube', url: yt('explication linéaire méthode oral EAF première français') },
        { kind: 'video', label: 'Registres et mouvements littéraires', note: 'Vidéos — recherche YouTube', url: yt('registres littéraires mouvements littéraires première français') },
      ],
      games: [
        {
          id: 'p1-fr-4-qcm', type: 'qcm', title: 'QCM — Oral & repères', icon: '❓',
          questions: [
            { q: 'La partie 1 de l’oral comprend…', choices: ['l’explication linéaire + une question de grammaire', 'la présentation d’œuvre', 'un débat', 'une dictée'], answer: 0, explain: 'La partie 2 = présentation d’œuvre + entretien.' },
            { q: 'L’explication linéaire suit le texte…', choices: ['dans l’ordre, au fil de la lecture', 'par un plan thématique', 'en le résumant', 'à l’envers'], answer: 0, explain: 'Mouvement par mouvement, sans plaquer de plan.' },
            { q: 'Le registre qui exprime les sentiments personnels est…', choices: ['lyrique', 'épique', 'comique', 'polémique'], answer: 0, explain: 'Lyrique = sentiments (amour, mélancolie).' },
            { q: 'Le mouvement du XVIIIᵉ centré sur la raison et le progrès est…', choices: ['les Lumières', 'le Romantisme', 'le Baroque', 'le Réalisme'], answer: 0, explain: 'Lumières : raison, progrès, liberté, critique.' },
            { q: 'Pour la question de grammaire, on repère d’abord…', choices: ['les verbes conjugués', 'les rimes', 'les didascalies', 'les strophes'], answer: 0, explain: 'Autant de verbes conjugués = autant de propositions.' },
            { q: 'Le registre qui cherche à émouvoir et susciter la pitié est…', choices: ['pathétique', 'comique', 'épique', 'satirique'], answer: 0, explain: 'Pathétique = émotion, pitié.' },
          ],
        },
        {
          id: 'p1-fr-4-ordre', type: 'ordre', title: 'Remise en ordre — Déroulé de l’oral', icon: '🔢',
          instruction: 'Remets les étapes de l’oral dans l’ordre.',
          steps: ['30 min de préparation', 'Lecture du texte à voix haute', 'Explication linéaire', 'Question de grammaire', 'Présentation de l’œuvre choisie', 'Entretien'],
          explain: 'Partie 1 (explication linéaire + grammaire) puis partie 2 (œuvre + entretien).',
        },
        {
          id: 'p1-fr-4-assoc', type: 'association', title: 'Association — Mouvement ↔ idée clé', icon: '🔗',
          pairs: [
            { left: 'Humanisme', right: 'Confiance en l’homme, savoir, tolérance (XVIᵉ)' },
            { left: 'Classicisme', right: 'Mesure, raison, règles (XVIIᵉ)' },
            { left: 'Lumières', right: 'Raison, progrès, liberté (XVIIIᵉ)' },
            { left: 'Romantisme', right: 'Sentiments, « je », nature (XIXᵉ)' },
            { left: 'Réalisme', right: 'Peindre le réel et la société (XIXᵉ)' },
            { left: 'Surréalisme', right: 'Rêve, inconscient, écriture automatique (XXᵉ)' },
          ],
        },
        {
          id: 'p1-fr-4-tri', type: 'tri', title: 'Tri — Quel registre ?', icon: '🗂️',
          instruction: 'Classe chaque effet recherché.',
          categories: [
            { id: 'ly', label: 'Lyrique' },
            { id: 'tr', label: 'Tragique' },
            { id: 'co', label: 'Comique' },
          ],
          items: [
            { text: 'Exprimer son amour et sa mélancolie', cat: 'ly' },
            { text: 'Montrer une fatalité qui mène à la mort', cat: 'tr' },
            { text: 'Faire rire par un quiproquo', cat: 'co' },
            { text: 'Chanter ses sentiments avec le « je »', cat: 'ly' },
            { text: 'Un dilemme sans issue heureuse', cat: 'tr' },
            { text: 'Une satire moqueuse', cat: 'co' },
          ],
        },
        {
          id: 'p1-fr-4-flash', type: 'flashcard', title: 'Flashcards — Oral & repères', icon: '🃏',
          cards: [
            { front: 'Explication linéaire', back: 'Expliquer le texte dans l’ordre, mouvement par mouvement.' },
            { front: 'Question de grammaire', back: 'Repérer les verbes conjugués → analyser les propositions.' },
            { front: 'Entretien', back: 'Dialogue sur l’œuvre présentée (avis argumenté).' },
            { front: 'Registre lyrique / tragique', back: 'Sentiments personnels / fatalité et mort.' },
            { front: 'Lumières', back: 'XVIIIᵉ : raison, progrès, liberté, critique.' },
            { front: 'Romantisme', back: 'XIXᵉ : sentiments, « je », nature, mélancolie.' },
          ],
        },
      ],
    },
  ],
}

// ===========================================================================
// HISTOIRE-GÉOGRAPHIE (Le long XIXe + recompositions du territoire)
// ===========================================================================
const histoireP = {
  id: 'p1-histoire-geo',
  name: 'Histoire-Géographie',
  short: 'Histoire-Géo',
  icon: '🗺️',
  color: '#0891b2',
  niveau: 'premiere',
  tagline: 'Le long XIXe siècle · les recompositions du territoire.',
  chapters: [
    {
      id: 'p1-hg-h1',
      name: 'Histoire — La Révolution française et l’Empire (1789-1815)',
      short: 'Révolution & Empire',
      keywords: 'Révolution française 1789 monarchie absolue DDHC République Napoléon Empire 1804 1815 Code civil',
      intro: 'En 1789, la Révolution met fin à la **monarchie absolue** et proclame des principes nouveaux qui bouleversent l’Europe.',
      cours: [
        {
          h: 'La Révolution française (1789)',
          blocks: [
            { t: 'p', c: 'La **Révolution française (1789)** met fin à la **monarchie absolue** et proclame des principes nouveaux : **liberté, égalité, souveraineté de la nation** (Déclaration des droits de l’homme et du citoyen).' },
            { t: 'p', c: 'Elle passe par plusieurs **phases** : monarchie constitutionnelle, proclamation de la **Ire République (1792)**, puis la **Terreur**.' },
          ],
        },
        {
          h: 'L’Empire napoléonien (1804-1815)',
          blocks: [
            { t: 'p', c: '**Napoléon Bonaparte** bâtit ensuite un **Empire (1804-1815)** qui réorganise la France (**Code civil**, administration centralisée) et diffuse — par la guerre — certains principes révolutionnaires en Europe.' },
            { t: 'table', head: ['Date', 'Repère'], rows: [
              ['1789', 'Révolution française (DDHC)'],
              ['1792', 'Proclamation de la Ire République'],
              ['1804', 'Napoléon empereur (Empire)'],
              ['1815', 'Chute de Napoléon'],
            ] },
          ],
        },
      ],
      essentiel: ['**1789** : Révolution, DDHC (liberté, égalité, souveraineté de la nation).', '**Napoléon** : Empire **1804-1815**, Code civil.', 'Repères : 1789 · 1792 · 1804 · 1815.'],
      resources: [{ kind: 'video', label: 'Révolution française et Empire', note: 'Vidéos — recherche YouTube', url: yt('Révolution française Empire Napoléon 1789 1815 première histoire') }],
      games: [
        {
          id: 'p1-hg-h1-qcm', type: 'qcm', title: 'QCM — Révolution & Empire', icon: '❓',
          questions: [
            { q: 'La Révolution française éclate en…', choices: ['1789', '1815', '1848', '1870'], answer: 0, explain: '1789 : fin de la monarchie absolue, DDHC.' },
            { q: 'Le texte proclamant liberté et égalité en 1789 est…', choices: ['la Déclaration des droits de l’homme et du citoyen', 'le Code civil', 'la Constitution de 1958', 'le traité de Rome'], answer: 0, explain: 'La DDHC de 1789.' },
            { q: 'Napoléon devient empereur en…', choices: ['1804', '1789', '1848', '1815'], answer: 0, explain: 'L’Empire : 1804-1815.' },
            { q: 'Le grand code juridique napoléonien est…', choices: ['le Code civil', 'le Code du travail', 'le Code pénal européen', 'le RGPD'], answer: 0, explain: 'Le Code civil (1804) réorganise le droit.' },
          ],
        },
        {
          id: 'p1-hg-h1-flash', type: 'flashcard', title: 'Flashcards — Repères', icon: '🃏',
          cards: [
            { front: '1789', back: 'Révolution française, DDHC.' },
            { front: '1792', back: 'Ire République.' },
            { front: '1804-1815', back: 'Empire de Napoléon (Code civil).' },
          ],
        },
        {
          id: 'p1-hg-h1-vf', type: 'vraifaux', title: 'Vrai / Faux rapide', icon: '⚡',
          questions: [
            { statement: 'La Révolution française commence en 1789.', answer: true, explain: 'Vrai : fin de la monarchie absolue, DDHC.' },
            { statement: 'Napoléon devient empereur en 1789.', answer: false, explain: 'Faux : en 1804 (Empire 1804-1815).' },
            { statement: 'Le Code civil est une œuvre napoléonienne.', answer: true, explain: 'Vrai : 1804.' },
          ],
        },
      ],
    },
    {
      id: 'p1-hg-h2',
      name: 'Histoire — La France au XIXe siècle',
      short: 'La France au XIXe',
      keywords: 'instabilité révolutions 1830 1848 IIe République suffrage universel masculin abolition esclavage industrialisation urbanisation',
      intro: 'Après 1815, la France connaît une grande **instabilité politique** et une profonde **transformation sociale** liée à l’industrialisation.',
      cours: [
        {
          h: 'Une grande instabilité politique',
          blocks: [
            { t: 'p', c: 'Après 1815, la France alterne les régimes : retour de la **monarchie**, puis **révolutions (1830, 1848)**.' },
            { t: 'p', c: 'En **1848**, la **IIe République** marque une avancée majeure : elle instaure le **suffrage universel masculin** et **abolit l’esclavage**.' },
          ],
        },
        {
          h: 'L’industrialisation et ses transformations sociales',
          blocks: [
            { t: 'p', c: 'Parallèlement, l’**industrialisation** transforme profondément la société : **urbanisation** (afflux vers les villes industrielles), essor de la **bourgeoisie** d’affaires et d’une **classe ouvrière**.' },
            { t: 'p', c: 'Cette nouvelle organisation fait naître de fortes **tensions sociales** (conditions de travail, premières revendications ouvrières).' },
          ],
        },
      ],
      essentiel: ['Après 1815 : **instabilité** (révolutions de 1830 et 1848).', '**1848** : suffrage universel **masculin** + **abolition de l’esclavage**.', '**Industrialisation** → urbanisation, bourgeoisie, classe ouvrière, tensions sociales.'],
      resources: [{ kind: 'video', label: 'La France au XIXe siècle', note: 'Vidéos — recherche YouTube', url: yt('France XIXe siècle 1848 industrialisation première histoire') }],
      games: [
        {
          id: 'p1-hg-h2-qcm', type: 'qcm', title: 'QCM — La France au XIXe', icon: '❓',
          questions: [
            { q: 'En 1848, la IIe République instaure…', choices: ['le suffrage universel masculin', 'le suffrage des femmes', 'la monarchie absolue', 'l’Empire'], answer: 0, explain: '1848 : suffrage universel masculin et abolition de l’esclavage.' },
            { q: 'Quel événement de 1848 concerne l’esclavage ?', choices: ['son abolition', 'son rétablissement', 'son extension', 'aucun'], answer: 0, explain: 'L’esclavage est aboli en 1848.' },
            { q: 'L’industrialisation entraîne notamment…', choices: ['l’urbanisation et une classe ouvrière', 'un retour à la campagne', 'la fin des villes', 'la disparition de la bourgeoisie'], answer: 0, explain: 'Urbanisation, bourgeoisie, ouvriers, tensions sociales.' },
          ],
        },
        {
          id: 'p1-hg-h2-vf', type: 'vraifaux', title: 'Vrai / Faux rapide', icon: '⚡',
          questions: [
            { statement: 'Le suffrage universel de 1848 incluait les femmes.', answer: false, explain: 'Faux : il était masculin.' },
            { statement: 'L’industrialisation a favorisé l’urbanisation.', answer: true, explain: 'Vrai : afflux vers les villes industrielles.' },
          ],
        },
        {
          id: 'p1-hg-h2-flash', type: 'flashcard', title: 'Flashcards — Repères', icon: '🃏',
          cards: [
            { front: '1848', back: 'IIe République : suffrage universel masculin, abolition de l’esclavage.' },
            { front: 'Industrialisation', back: 'Urbanisation, bourgeoisie, classe ouvrière, tensions sociales.' },
            { front: 'Révolutions de 1830 et 1848', back: 'Instabilité politique de la France après 1815.' },
          ],
        },
      ],
    },
    {
      id: 'p1-hg-h3',
      name: 'Histoire — La IIIe République et la Grande Guerre',
      short: 'IIIe République & 1914-1918',
      keywords: 'Troisième République laïcité école Ferry 1905 séparation empire colonial Première Guerre mondiale guerre totale',
      intro: 'À partir de **1870**, la IIIe République s’enracine et associe la République à des valeurs concrètes, avant l’épreuve de la **Grande Guerre**.',
      cours: [
        {
          h: 'La IIIe République s’enracine',
          blocks: [
            { t: 'p', c: 'La **IIIe République** (à partir de **1870**) installe durablement la République : **laïcité**, **école gratuite et obligatoire** (lois **Ferry**), libertés fondamentales (presse, syndicats).' },
            { t: 'p', c: 'La **loi de 1905** consacre la **séparation des Églises et de l’État**, pilier de la laïcité. La France se dote aussi d’un vaste **empire colonial**.' },
          ],
        },
        {
          h: 'La Première Guerre mondiale, une guerre totale',
          blocks: [
            { t: 'p', c: 'La **Première Guerre mondiale (1914-1918)** est une **guerre totale** : elle mobilise les sociétés entières — soldats au front, **économie de guerre**, civils à l’arrière, **propagande**.' },
            { t: 'table', head: ['Date', 'Repère'], rows: [
              ['1870-1871', 'Début de la IIIe République'],
              ['1905', 'Séparation des Églises et de l’État'],
              ['1914-1918', 'Première Guerre mondiale'],
            ] },
          ],
        },
      ],
      essentiel: ['**IIIe République** (dès 1870) : laïcité, école gratuite/obligatoire (**lois Ferry**), empire colonial.', '**1905** : séparation des Églises et de l’État.', '**1914-1918** : Première Guerre mondiale, une **guerre totale**.'],
      resources: [{ kind: 'video', label: 'IIIe République et Première Guerre mondiale', note: 'Vidéos — recherche YouTube', url: yt('IIIe République Première Guerre mondiale guerre totale première histoire') }],
      games: [
        {
          id: 'p1-hg-h3-qcm', type: 'qcm', title: 'QCM — IIIe République & Grande Guerre', icon: '❓',
          questions: [
            { q: 'Les lois Ferry instaurent…', choices: ['l’école gratuite et obligatoire', 'le suffrage des femmes', 'l’Empire', 'la monarchie'], answer: 0, explain: 'Laïcité et école gratuite/obligatoire sous la IIIe République.' },
            { q: 'La séparation des Églises et de l’État date de…', choices: ['1905', '1789', '1870', '1918'], answer: 0, explain: '1905, un pilier de la laïcité.' },
            { q: 'La Première Guerre mondiale est qualifiée de guerre…', choices: ['totale', 'éclair', 'froide', 'civile'], answer: 0, explain: 'Elle mobilise les sociétés entières (militaire, économique, morale).' },
          ],
        },
        {
          id: 'p1-hg-h3-flash', type: 'flashcard', title: 'Flashcards — Repères', icon: '🃏',
          cards: [
            { front: 'Lois Ferry', back: 'École gratuite, laïque et obligatoire (IIIe République).' },
            { front: '1905', back: 'Séparation des Églises et de l’État.' },
            { front: 'Guerre totale', back: 'Mobilisation militaire, économique et des esprits (1914-1918).' },
          ],
        },
        {
          id: 'p1-hg-h3-vf', type: 'vraifaux', title: 'Vrai / Faux rapide', icon: '⚡',
          questions: [
            { statement: 'Les lois Ferry rendent l’école gratuite et obligatoire.', answer: true, explain: 'Vrai (IIIe République).' },
            { statement: 'La séparation des Églises et de l’État date de 1789.', answer: false, explain: 'Faux : 1905.' },
            { statement: 'La Première Guerre mondiale est une guerre totale.', answer: true, explain: 'Vrai : mobilisation des sociétés entières.' },
          ],
        },
      ],
    },
    {
      id: 'p1-hg-g1',
      name: 'Géographie — La métropolisation',
      short: 'La métropolisation',
      keywords: 'métropolisation métropoles fonctions de commandement inégalités processus différencié',
      intro: 'La **métropolisation** est la concentration croissante des populations, des activités et des pouvoirs dans les grandes villes.',
      cours: [
        {
          h: 'Des métropoles qui concentrent hommes et pouvoirs',
          blocks: [
            { t: 'p', c: 'Plus de la moitié de l’humanité vit désormais **en ville**. La **métropolisation** concentre les populations, les activités et les pouvoirs dans les grandes villes.' },
            { t: 'p', c: 'Quelques **métropoles mondiales** (New York, Londres, Tokyo, Paris) concentrent la richesse et les **fonctions de commandement** : sièges sociaux, bourses, universités, aéroports internationaux.' },
          ],
        },
        {
          h: 'Un processus différencié et inégalitaire',
          blocks: [
            { t: 'p', c: 'Toutes les villes ne sont pas touchées de la même façon : le processus est **différencié**. Certaines métropoles dominent, tandis que d’autres espaces restent **en marge**.' },
            { t: 'p', c: 'La métropolisation accentue donc les **inégalités** entre territoires, à toutes les échelles (mondiale, nationale, locale).' },
          ],
        },
      ],
      essentiel: ['**Métropolisation** = concentration des populations, activités et pouvoirs dans les métropoles.', 'Processus **différencié** : quelques métropoles dominent, d’autres espaces restent en marge.', 'Il accentue les **inégalités** territoriales (mondiale, nationale, locale).'],
      resources: [{ kind: 'video', label: 'La métropolisation', note: 'Vidéos — recherche YouTube', url: yt('métropolisation processus mondial différencié première géographie') }],
      games: [
        {
          id: 'p1-hg-g1-qcm', type: 'qcm', title: 'QCM — La métropolisation', icon: '❓',
          questions: [
            { q: 'La métropolisation désigne…', choices: ['la concentration des populations et activités dans les grandes villes', 'l’exode vers les campagnes', 'la disparition des villes', 'la fin de la mondialisation'], answer: 0, explain: 'Concentration des hommes, activités et fonctions de commandement.' },
            { q: 'On dit ce processus « différencié » car…', choices: ['il ne touche pas tous les territoires de la même façon', 'il est identique partout', 'il concerne seulement Paris', 'il ne crée aucune inégalité'], answer: 0, explain: 'Certaines métropoles dominent, d’autres espaces sont en marge.' },
            { q: 'La métropolisation tend à…', choices: ['accentuer les inégalités entre territoires', 'égaliser tous les territoires', 'vider les métropoles', 'supprimer les fonctions de commandement'], answer: 0, explain: 'Elle renforce les inégalités à toutes les échelles.' },
          ],
        },
        {
          id: 'p1-hg-g1-flash', type: 'flashcard', title: 'Flashcards — Métropolisation', icon: '🃏',
          cards: [
            { front: 'Métropolisation', back: 'Concentration des populations, activités et pouvoirs dans les métropoles.' },
            { front: 'Fonctions de commandement', back: 'Sièges, bourses, universités, aéroports internationaux.' },
            { front: 'Processus différencié', back: 'Touche inégalement les territoires → inégalités.' },
          ],
        },
        {
          id: 'p1-hg-g1-vf', type: 'vraifaux', title: 'Vrai / Faux rapide', icon: '⚡',
          questions: [
            { statement: 'La métropolisation concentre hommes, activités et pouvoirs dans les grandes villes.', answer: true, explain: 'Vrai.' },
            { statement: 'La métropolisation touche tous les territoires de la même façon.', answer: false, explain: 'Faux : processus différencié, source d’inégalités.' },
            { statement: 'Les fonctions de commandement se concentrent dans les métropoles.', answer: true, explain: 'Vrai : sièges, bourses, aéroports internationaux.' },
          ],
        },
      ],
    },
    {
      id: 'p1-hg-g2',
      name: 'Géographie — Espaces et acteurs de la production',
      short: 'Espaces productifs',
      keywords: 'espaces productifs mondialisation industrie services agriculture acteurs firmes multinationales État collectivités',
      intro: 'Les **espaces productifs** se recomposent sous l’effet de la **mondialisation** et du numérique.',
      cours: [
        {
          h: 'Des espaces productifs qui se recomposent',
          blocks: [
            { t: 'p', c: 'Sous l’effet de la **mondialisation** et du **numérique**, les espaces productifs se transforment : l’**industrie** se réorganise (délocalisations, **technopôles**), les **services** prennent une place croissante (**tertiarisation**), l’**agriculture** se modernise.' },
          ],
        },
        {
          h: 'Une multiplicité d’acteurs',
          blocks: [
            { t: 'p', c: 'De nombreux **acteurs** interviennent dans la production et son organisation : les **entreprises** (dont les **firmes multinationales**, acteurs clés de la mondialisation), l’**État**, les **collectivités** territoriales et les **acteurs locaux**.' },
          ],
        },
      ],
      essentiel: ['Les **espaces productifs** se recomposent (mondialisation, numérique).', 'Montée des **services**, réorganisation de l’industrie (délocalisations, technopôles).', 'Acteurs multiples : **FMN**, État, collectivités, acteurs locaux.'],
      resources: [{ kind: 'video', label: 'Les espaces productifs', note: 'Vidéos — recherche YouTube', url: yt('espaces productifs acteurs mondialisation première géographie') }],
      games: [
        {
          id: 'p1-hg-g2-qcm', type: 'qcm', title: 'QCM — Espaces productifs', icon: '❓',
          questions: [
            { q: 'Les espaces productifs se recomposent surtout sous l’effet de…', choices: ['la mondialisation et du numérique', 'la météo', 'la monarchie', 'la démographie seule'], answer: 0, explain: 'Mondialisation et numérique réorganisent la production.' },
            { q: 'Parmi les acteurs de la production :', choices: ['les firmes multinationales et l’État', 'uniquement les touristes', 'seulement les agriculteurs', 'aucun acteur'], answer: 0, explain: 'FMN, État, collectivités, acteurs locaux.' },
            { q: 'Le secteur qui prend une place croissante est celui…', choices: ['des services', 'de la chasse', 'de l’artisanat médiéval', 'de la monarchie'], answer: 0, explain: 'Tertiarisation : montée des services.' },
          ],
        },
        {
          id: 'p1-hg-g2-flash', type: 'flashcard', title: 'Flashcards — Production', icon: '🃏',
          cards: [
            { front: 'Espaces productifs', back: 'Espaces où l’on produit biens et services.' },
            { front: 'Technopôle', back: 'Concentration d’activités de haute technologie et de recherche.' },
            { front: 'FMN', back: 'Firme multinationale, acteur clé de la production mondialisée.' },
          ],
        },
        {
          id: 'p1-hg-g2-vf', type: 'vraifaux', title: 'Vrai / Faux rapide', icon: '⚡',
          questions: [
            { statement: 'Les services prennent une place croissante dans la production.', answer: true, explain: 'Vrai : tertiarisation.' },
            { statement: 'Les firmes multinationales ne jouent aucun rôle dans la production.', answer: false, explain: 'Faux : ce sont des acteurs clés.' },
            { statement: 'Un technopôle concentre des activités de haute technologie.', answer: true, explain: 'Vrai : technologie et recherche.' },
          ],
        },
      ],
    },
    {
      id: 'p1-hg-g3',
      name: 'Géographie — Les espaces ruraux',
      short: 'Espaces ruraux',
      keywords: 'espaces ruraux multifonctionnalité périurbanisation résidentielle touristique tensions',
      intro: 'Les **espaces ruraux** ne sont plus seulement agricoles : ils remplissent désormais **plusieurs fonctions**.',
      cours: [
        {
          h: 'Une multifonctionnalité croissante',
          blocks: [
            { t: 'p', c: 'Les espaces ruraux ne sont plus seulement agricoles : ils remplissent aujourd’hui **plusieurs fonctions** — **résidentielle**, **touristique**, **écologique** et **économique**.' },
            { t: 'p', c: 'Certains, proches des villes, se **périurbanisent** (extension de l’habitat pavillonnaire) ; d’autres, isolés, **déclinent** ou se tournent vers le **tourisme**.' },
          ],
        },
        {
          h: 'Des tensions dans l’usage des sols',
          blocks: [
            { t: 'p', c: 'Cette **multifonctionnalité** fait cohabiter des usages parfois concurrents (agriculture, logement, loisirs, protection de la nature).' },
            { t: 'p', c: 'Elle crée donc des **tensions** : conflits d’usage des sols, pression foncière près des villes, difficulté à maintenir les services dans les espaces isolés.' },
          ],
        },
      ],
      essentiel: ['Les espaces ruraux sont **multifonctionnels** (résidentiel, tourisme, écologie, économie).', '**Périurbanisation** près des villes ; déclin ou tourisme dans les espaces isolés.', 'La multifonctionnalité crée des **tensions** (usage des sols).'],
      resources: [{ kind: 'video', label: 'Les espaces ruraux', note: 'Vidéos — recherche YouTube', url: yt('espaces ruraux multifonctionnalité périurbanisation première géographie') }],
      games: [
        {
          id: 'p1-hg-g3-qcm', type: 'qcm', title: 'QCM — Espaces ruraux', icon: '❓',
          questions: [
            { q: 'Les espaces ruraux aujourd’hui sont…', choices: ['multifonctionnels', 'uniquement agricoles', 'tous abandonnés', 'sans habitants'], answer: 0, explain: 'Résidentiel, touristique, écologique, économique.' },
            { q: 'Le développement de l’habitat pavillonnaire autour des villes s’appelle…', choices: ['la périurbanisation', 'la métropolisation', 'la désertification', 'la littoralisation'], answer: 0, explain: 'La périurbanisation touche les espaces ruraux proches des villes.' },
            { q: 'La multifonctionnalité des espaces ruraux crée…', choices: ['des tensions (usage des sols)', 'aucune difficulté', 'la fin de l’agriculture', 'la disparition du tourisme'], answer: 0, explain: 'Cohabitation d’activités → tensions.' },
          ],
        },
        {
          id: 'p1-hg-g3-flash', type: 'flashcard', title: 'Flashcards — Ruralité', icon: '🃏',
          cards: [
            { front: 'Multifonctionnalité', back: 'Plusieurs fonctions : résidentielle, touristique, écologique, économique.' },
            { front: 'Périurbanisation', back: 'Extension de l’habitat autour des villes.' },
          ],
        },
        {
          id: 'p1-hg-g3-vf', type: 'vraifaux', title: 'Vrai / Faux rapide', icon: '⚡',
          questions: [
            { statement: 'Les espaces ruraux sont aujourd’hui multifonctionnels.', answer: true, explain: 'Vrai : résidentiel, tourisme, écologie, économie.' },
            { statement: 'La périurbanisation est l’extension de l’habitat autour des villes.', answer: true, explain: 'Vrai.' },
            { statement: 'La multifonctionnalité des espaces ruraux ne crée aucune tension.', answer: false, explain: 'Faux : tensions sur l’usage des sols.' },
          ],
        },
      ],
    },
  ],
}

// ===========================================================================
// LANGUES (Anglais / Espagnol + 8 axes)
// ===========================================================================
const languesP = {
  id: 'p1-langues',
  name: 'Langues (Anglais / Espagnol)',
  short: 'Langues',
  icon: '🗣️',
  color: '#db2777',
  niveau: 'premiere',
  tagline: 'Consolider les bases grammaticales (contrôle continu).',
  chapters: [
    {
      id: 'p1-lng-en',
      name: 'Anglais — Grammaire essentielle',
      short: 'Anglais',
      keywords: 'present simple continuous preterit present perfect futur modaux conditionnels comparatifs connecteurs',
      intro: 'Quelques temps et structures reviennent sans cesse. La distinction **preterit / present perfect** est la difficulté majeure.',
      cours: [
        {
          h: 'Les temps',
          blocks: [
            { t: 'table', head: ['Temps', 'Emploi', 'Exemple'], rows: [
              ['Present simple', 'Habitude, vérité générale (+ -s à la 3e pers.)', 'She works in Paris'],
              ['Present continuous (be + -ing)', 'Action en cours', 'They are working now'],
              ['Preterit', 'Action passée datée et terminée', 'We went to London in 2019'],
              ['Present perfect (have/has + PP)', 'Lien passé-présent (for, since, ever…)', 'I have visited London'],
            ] },
            { t: 'tip', c: 'Une **date précise** (in 2019, yesterday) impose le **preterit** ; *for/since/ever/already/yet* appellent le **present perfect**.' },
          ],
        },
        {
          h: 'Modaux, conditionnels, comparatifs',
          blocks: [
            { t: 'list', c: [
              '**Modaux** (+ base verbale) : can/could, may/might, must, have to, should.',
              '**Conditionnels** : Type 1 *If + present, will + BV* ; Type 2 *If + preterit, would + BV*.',
              '**Comparatifs** : cheaper / more expensive ; irréguliers good→better→best.',
              '**Connecteurs** : however, therefore, because, although, moreover, for instance.',
            ] },
          ],
        },
      ],
      essentiel: [
        '**Preterit** (daté) vs **present perfect** (lien passé-présent, for/since).',
        'Modaux + **base verbale** ; conditionnel 2 : *If + preterit, would + BV*.',
        'Comparatifs : -er / more… ; good → better → the best.',
      ],
      resources: [{ kind: 'video', label: 'Present perfect vs preterit', note: 'Vidéos — recherche YouTube', url: yt('present perfect preterit anglais explication lycée') }],
      games: [
        {
          id: 'p1-lng-en-trou', type: 'trou', title: 'Texte à trous — Conjugaison', icon: '✏️',
          questions: [
            { text: 'She ____ (work) here since 2020.', answer: 'has worked', explain: 'Present perfect + since : « has worked ».' },
            { text: 'They ____ (watch) TV when I arrived.', answer: 'were watching', explain: 'Past continuous : action en cours interrompue.' },
            { text: 'If it ____ (rain), we will cancel.', answer: 'rains', explain: 'Conditionnel type 1 : If + present.' },
          ],
        },
        {
          id: 'p1-lng-en-qcm', type: 'qcm', title: 'QCM — Grammaire anglaise', icon: '❓',
          questions: [
            { q: '« We ___ to London in 2019 » (date précise) :', choices: ['went', 'have gone', 'go', 'are going'], answer: 0, explain: 'Date précise → preterit.' },
            { q: 'Conditionnel type 2 : « If I ___ rich, I would travel » :', choices: ['were', 'am', 'will be', 'have been'], answer: 0, explain: 'If + preterit → would + BV.' },
            { q: 'Comparatif irrégulier de « good » :', choices: ['better', 'gooder', 'more good', 'best'], answer: 0, explain: 'good → better → the best.' },
          ],
        },
        {
          id: 'p1-lng-en-flash', type: 'flashcard', title: 'Flashcards — Temps', icon: '🃏',
          cards: [
            { front: 'Present perfect', back: 'have/has + PP : lien passé-présent (for, since).' },
            { front: 'Preterit', back: 'Action passée datée et terminée.' },
            { front: 'Conditionnel type 2', back: 'If + preterit, would + base verbale.' },
          ],
        },
      ],
    },
    {
      id: 'p1-lng-es',
      name: 'Espagnol — Grammaire essentielle',
      short: 'Espagnol',
      keywords: 'ser estar indefinido imperfecto perfecto futuro subjonctif gérondif gustar obligación a personnel',
      intro: 'Deux difficultés majeures : **ser vs estar** et **indefinido vs imperfecto**.',
      cours: [
        {
          h: 'Ser / Estar et les passés',
          blocks: [
            { t: 'table', head: ['SER', 'ESTAR'], rows: [
              ['Caractéristique permanente, identité, profession, heure', 'État passager, lieu, situation'],
              ['Soy estudiante · Es alto', 'Estoy cansado · Madrid está en España'],
            ] },
            { t: 'p', c: '**Indefinido** = action passée **datée** (« Ayer comí ») ; **imperfecto** = **description/habitude** (« Cuando era niño, jugaba ») ; **pretérito perfecto** (he/has/ha + participe) = passé récent lié au présent (« Hoy he comido »).' },
          ],
        },
        {
          h: 'Autres points clés',
          blocks: [
            { t: 'list', c: [
              '**Futur** : infinitif + -é, -ás, -á, -emos, -éis, -án (hablaré). Irréguliers : tener→tendré.',
              '**Gustar** : « Me gusta el cine » / « Me gustan los libros » (accord avec la chose aimée).',
              '**Obligation** : *tener que* + inf. (personnelle) ; *hay que* + inf. (impersonnelle).',
              'Le **« a » personnel** devant un COD de personne (« Veo a María »).',
            ] },
          ],
        },
      ],
      essentiel: [
        '**Ser** = permanent ; **Estar** = état/lieu passager.',
        '**Indefinido** = action datée ; **imperfecto** = décor/habitude.',
        '**Gustar** : accord avec la chose aimée (gusta / gustan).',
      ],
      resources: [{ kind: 'video', label: 'Ser vs Estar ; indefinido vs imperfecto', note: 'Vidéos — recherche YouTube', url: yt('espagnol ser estar indefinido imperfecto lycée') }],
      games: [
        {
          id: 'p1-lng-es-tri', type: 'tri', title: 'Tri — Ser ou Estar ?', icon: '🗂️',
          instruction: 'Classe chaque phrase.',
          categories: [{ id: 'ser', label: 'SER' }, { id: 'estar', label: 'ESTAR' }],
          items: [
            { text: 'Soy ___ estudiante (profession)', cat: 'ser' },
            { text: 'Estoy ___ cansado (état)', cat: 'estar' },
            { text: 'Madrid ___ en España (lieu)', cat: 'estar' },
            { text: 'Es ___ alto (caractéristique)', cat: 'ser' },
            { text: 'Son ___ las tres (heure)', cat: 'ser' },
          ],
        },
        {
          id: 'p1-lng-es-trou', type: 'trou', title: 'Texte à trous — Passés & gustar', icon: '✏️',
          questions: [
            { text: 'Ayer nosotros ____ (ir) al cine.', answer: 'fuimos', alt: ['fuímos'], explain: 'Indefinido (action datée) : « fuimos ».' },
            { text: 'Cuando era niño, ____ (jugar) mucho.', answer: 'jugaba', explain: 'Imperfecto (habitude passée) : « jugaba ».' },
            { text: 'Me ____ (gustar) las películas de acción.', answer: 'gustan', explain: 'Accord avec le pluriel : « gustan ».' },
          ],
        },
        {
          id: 'p1-lng-es-qcm', type: 'qcm', title: 'QCM — Grammaire espagnole', icon: '❓',
          questions: [
            { q: '« Madrid ___ en España » :', choices: ['está', 'es', 'son', 'estar'], answer: 0, explain: 'Lieu → estar.' },
            { q: '« Il faut étudier » se dit…', choices: ['Hay que estudiar', 'Tengo estudiar', 'Es estudiar', 'Estar estudiar'], answer: 0, explain: 'Obligation impersonnelle : hay que + infinitif.' },
            { q: '« Ayer ___ (comer) » se met à l’…', choices: ['indefinido (comí)', 'imperfecto (comía)', 'futuro', 'présent'], answer: 0, explain: 'Action datée « ayer » → indefinido.' },
          ],
        },
      ],
    },
    {
      id: 'p1-lng-axes',
      name: 'Les 8 axes culturels',
      short: '8 axes culturels',
      keywords: 'axes culturels identités échanges espace privé public art pouvoir citoyenneté fictions innovations diversité mémoire médiation',
      intro: 'Le programme s’organise autour de **8 axes culturels** (« Gestes fondateurs et mondes en mouvement ») et de **6 activités langagières**.',
      cours: [
        {
          h: 'Les 8 axes culturels',
          blocks: [
            { t: 'p', c: 'Le programme s’organise autour de la thématique « **Gestes fondateurs et mondes en mouvement** », déclinée en **8 axes culturels** :' },
            { t: 'list', c: [
              '1. Identités et échanges — 2. Espace privé et espace public',
              '3. Art et pouvoir — 4. Citoyenneté et mondes virtuels',
              '5. Fictions et réalités — 6. Innovations scientifiques et responsabilité',
              '7. Diversité et inclusion — 8. Territoire et mémoire',
            ] },
          ],
        },
        {
          h: 'Les 6 activités langagières',
          blocks: [
            { t: 'p', c: 'On est évalué sur **6 activités langagières** :' },
            { t: 'list', c: [
              'la **compréhension** de l’oral et de l’écrit ;',
              'l’**expression orale** en continu et en interaction ;',
              'l’**expression écrite** ;',
              'la **médiation** : reformuler, traduire ou expliquer un document à quelqu’un.',
            ] },
          ],
        },
      ],
      essentiel: ['**8 axes culturels** (thématique « Gestes fondateurs et mondes en mouvement »).', '6 activités langagières, dont la **médiation**.'],
      resources: [{ kind: 'video', label: 'Les axes du programme de langues', note: 'Vidéos — recherche YouTube', url: yt('axes programme langues lycée gestes fondateurs mondes en mouvement') }],
      games: [
        {
          id: 'p1-lng-axes-qcm', type: 'qcm', title: 'QCM — Les 8 axes', icon: '❓',
          questions: [
            { q: 'Combien d’axes culturels au programme ?', choices: ['8', '6', '4', '10'], answer: 0, explain: 'Le programme compte 8 axes culturels.' },
            { q: 'La « médiation » consiste à…', choices: ['reformuler / traduire / expliquer un document', 'apprendre par cœur', 'passer un test de grammaire', 'faire une dictée'], answer: 0, explain: 'Médiation = expliquer/traduire un document à quelqu’un.' },
            { q: '« Citoyenneté et mondes virtuels » couvre notamment…', choices: ['réseaux sociaux, fake news', 'la Guerre de Cent Ans', 'la TVA', 'la dérivation'], answer: 0, explain: 'C’est l’axe du numérique et de la citoyenneté.' },
          ],
        },
        {
          id: 'p1-lng-axes-ordre', type: 'ordre', title: 'Remise en ordre — Les 4 premiers axes', icon: '🔢',
          instruction: 'Remets les 4 premiers axes dans l’ordre officiel.',
          steps: ['Identités et échanges', 'Espace privé et espace public', 'Art et pouvoir', 'Citoyenneté et mondes virtuels'],
          explain: 'Les axes 1 à 4 dans l’ordre du programme.',
        },
        {
          id: 'p1-lng-axes-flash', type: 'flashcard', title: 'Flashcards — Axes & activités', icon: '🃏',
          cards: [
            { front: 'Nombre d’axes', back: '8 axes culturels (« Gestes fondateurs et mondes en mouvement »).' },
            { front: 'Médiation', back: 'Reformuler, traduire ou expliquer un document à quelqu’un.' },
            { front: '6 activités langagières', back: 'CO, CE, EO (continu + interaction), EE, médiation.' },
          ],
        },
      ],
    },
  ],
}

export const premiereSubjects = [sgn, managementP, droitP, economieP, mathsP, francaisP, histoireP, languesP]
