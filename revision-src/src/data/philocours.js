// PHILOSOPHIE — cours « longue durée ». Sections supplémentaires (définitions
// approfondies, thèses en débat, textes commentés, prolongements, secondes
// dissertations) fusionnées après les chapitres de base et d'enrichissement,
// pour des cours de plusieurs pages par notion. Fusionné dans data/index.js.
const S = (h, blocks) => ({ h, blocks })

export const PHILO_LONG = {
  // =====================================================================
  // L'ART
  // =====================================================================
  'philo-art': [
    S('🔎 Définitions & distinctions approfondies', [
      { t: 'p', c: 'Avant toute dissertation sur l’art, il faut maîtriser un réseau de distinctions. La première oppose le **beau** et l’**agréable** : l’agréable dépend de ma sensibilité (un plat, une température) et n’engage que moi ; le beau, lui, **prétend** valoir pour autrui — quand je dis « ce tableau est beau », j’attends que tu partages mon jugement. C’est le paradoxe kantien : un jugement **subjectif** (il ne repose sur aucun concept, aucune règle) mais qui vise l’**universel**.' },
      { t: 'p', c: 'La deuxième distinction sépare l’**art** de la **technique** (et de l’artisanat). L’artisan produit un objet **utile** en suivant un modèle reproductible ; l’artiste crée une œuvre **unique** dont la fin est en elle-même. Une troisième distinction, plus subtile, oppose le **beau** au **sublime** : le beau apaise et plaît par sa forme harmonieuse ; le sublime (une tempête, la haute montagne, l’immensité du ciel) nous dépasse, mêle plaisir et effroi, et révèle en nous une grandeur morale — c’est la thèse de Kant dans la *Critique de la faculté de juger*.' },
      { t: 'table', head: ['Distinction', 'Un côté', 'L’autre côté'], rows: [
        ['Beau / agréable', 'Prétend valoir pour tous', 'Ne vaut que pour moi'],
        ['Art / artisanat', 'Œuvre singulière, fin en soi', 'Objet utile, reproductible'],
        ['Beau / sublime', 'Harmonie, plaisir paisible', 'Démesure, plaisir mêlé d’effroi'],
        ['Imiter / créer', 'Reproduire le réel', 'Révéler, transfigurer'],
      ] },
      { t: 'tip', h: 'Au bac', c: 'Ouvrir une copie sur une **distinction précise** (beau/agréable, art/technique) montre immédiatement que l’on ne confond pas les termes du sujet.' },
    ]),
    S('⚔️ Les grandes thèses en débat', [
      { t: 'p', c: '**Thèse 1 — l’art imite (et il faut s’en méfier).** Pour **Platon** (*La République*, livre X), l’artiste ne fait que copier les apparences sensibles, elles-mêmes copies des Idées : l’art est donc à la troisième place, éloigné du vrai, et dangereux car il flatte la partie irrationnelle de l’âme. Le poète est banni de la cité idéale.' },
      { t: 'p', c: '**Thèse 2 — l’art imite pour instruire et purifier.** **Aristote** (*Poétique*) réhabilite l’imitation : l’homme apprend d’abord en imitant, et la tragédie, en représentant la pitié et la terreur, produit une **catharsis**, une purgation bienfaisante des passions. L’art n’éloigne pas du réel, il en révèle le sens universel.' },
      { t: 'p', c: '**Thèse 3 — l’art manifeste une vérité spirituelle.** Pour **Hegel**, l’art est un moment par lequel l’Esprit se donne une forme sensible : il ne copie pas, il **exprime** l’intériorité, l’époque, l’humain. **Thèse 4 — l’art est pur jeu de la forme et du génie.** Le romantisme (Baudelaire, la théorie de « l’art pour l’art ») affirme l’autonomie de l’œuvre : elle ne doit être ni utile, ni morale, ni imitative — seulement belle.' },
      { t: 'warning', h: 'Piège', c: 'Ne pas réduire le débat à « l’art copie / l’art ne copie pas ». La vraie question est : **que fait** l’œuvre ? Plaît-elle, instruit-elle, révèle-t-elle, dérange-t-elle ?' },
    ]),
    S('📜 Textes clés commentés', [
      { t: 'example', h: 'Texte 1 — Platon, la condamnation de l’imitation', c: '« L’imitateur est bien loin du vrai. » Platon range le peintre après le menuisier (qui fabrique un vrai lit) et après le dieu (qui crée l’Idée de lit).' },
      { t: 'p', c: '**Commentaire.** Platon hiérarchise trois niveaux : l’Idée (le vrai lit intelligible), l’objet fabriqué (le lit sensible), l’image peinte (la copie de l’objet). L’art, doublement éloigné, ne produit que des **apparences d’apparences**. L’enjeu est moral et politique : une cité juste doit se méfier de ce qui charme sans instruire.' },
      { t: 'example', h: 'Texte 2 — Klee, l’art qui rend visible', c: '« L’art ne reproduit pas le visible, il rend visible. » (Paul Klee)' },
      { t: 'p', c: '**Commentaire.** Renversement complet de Platon : l’art ne vaut pas parce qu’il ressemble, mais parce qu’il **fait apparaître** ce que l’œil ordinaire ne perçoit pas — une émotion, une structure, une vérité cachée. *Guernica* ne « ressemble » pas à un bombardement : il en rend visible l’horreur.' },
      { t: 'tip', h: 'Méthode', c: 'Un texte se commente en 3 temps : la **thèse**, les **mouvements** (le « donc », le « mais »), les **enjeux**. Toujours relier au reste du programme.' },
    ]),
    S('🌍 Prolongements — l’art aujourd’hui', [
      { t: 'p', c: 'Les questions classiques se rejouent à l’ère contemporaine. La **reproductibilité technique** (Walter Benjamin) : une photo, un film, un fichier numérique existent en d’innombrables copies — l’œuvre perd son « aura », son ici-et-maintenant unique. Cela change-t-il sa valeur ? Le **marché de l’art** : quand une œuvre se vend des millions, est-ce sa beauté ou sa cote financière que l’on achète ? L’**art numérique** et l’**IA générative** relancent la question de la création : une image produite par une machine est-elle une œuvre, et qui en est l’auteur ?' },
      { t: 'p', c: 'Ces débats ne sont pas nouveaux : ils prolongent Duchamp (qu’est-ce qui fait qu’une chose est de l’art ?) et Platon (l’image nous éloigne-t-elle du réel ?). Savoir les rattacher aux notions classiques est très valorisé.' },
      { t: 'tip', h: 'Exemple mobilisable', c: 'Le *ready-made* (l’objet ordinaire promu œuvre) est l’exemple parfait pour discuter la définition de l’art : c’est le regard et l’institution, non l’objet, qui font l’œuvre.' },
    ]),
    S('✍️ Deuxième dissertation guidée — « L’art nous détourne-t-il de la réalité ? »', [
      { t: 'p', c: '**Analyse & problématique.** « Détourner » suppose que l’art nous éloignerait du réel, comme une évasion ou une illusion. Mais l’art ne nous fait-il pas, au contraire, mieux **voir** le réel ? Le problème : l’art est-il fuite du réel ou dévoilement du réel ?' },
      { t: 'list', c: [
        '**I. Oui, l’art peut détourner du réel.** Il produit des illusions (Platon), offre une évasion, un divertissement (Pascal), voire une consolation qui endort — l’art « décoratif » qui masque la laideur du monde.',
        '**II. Mais l’art révèle le réel autrement.** Il rend visible l’invisible (Klee), dit une vérité sur l’homme (Hegel), dénonce (Guernica, la littérature engagée). Loin de fuir, il **intensifie** notre présence au monde (Proust).',
        '**III. Dépassement.** L’art nous « détourne » du réel utilitaire et quotidien, non pour nous en éloigner, mais pour nous le faire **redécouvrir** avec un regard neuf. Il suspend l’habitude et l’intérêt — c’est ce détour qui nous rend au réel.',
      ] },
      { t: 'example', h: 'Conclusion', c: 'L’art nous détourne du réel banal pour mieux nous en rapprocher : son « inutilité » est une manière supérieure de nous rendre au monde et à nous-mêmes.' },
    ]),
  ],

  // =====================================================================
  // LA JUSTICE
  // =====================================================================
  'philo-justice': [
    S('🔎 Définitions & distinctions approfondies', [
      { t: 'p', c: 'La justice se dit en plusieurs sens qu’il faut soigneusement distinguer. Comme **vertu**, elle est la disposition à rendre à chacun son dû (Aristote). Comme **institution**, elle est l’appareil qui tranche les litiges (les tribunaux). Comme **idéal**, elle est ce vers quoi tend le droit : l’équité. Confondre ces sens conduit à des contresens (« la justice a condamné X » ne dit rien de la justice de la décision).' },
      { t: 'p', c: 'La distinction reine est celle du **légal** et du **légitime** : est légal ce qui est conforme à la loi positive en vigueur ; est légitime ce qui est conforme à la justice, à ce qui **devrait** être le droit. Tout l’espace de la critique politique tient dans cet écart. S’ajoute la distinction du **droit** (les règles) et du **fait** (la force) : « la force fait-elle le droit ? » — non, répond Rousseau, sinon « le plus fort » n’aurait jamais qu’une puissance, jamais une autorité légitime.' },
      { t: 'table', head: ['Distinction', 'Sens', 'Exemple'], rows: [
        ['Légal / légitime', 'Conforme à la loi / à la justice', 'Une loi injuste est légale mais illégitime'],
        ['Égalité / équité', 'La même chose pour tous / adapter au cas', 'Même impôt vs impôt proportionnel'],
        ['Droit / fait', 'Ce qui doit être / ce qui est (la force)', 'Le vol réussit (fait) mais reste injuste (droit)'],
        ['Justice commutative / distributive', 'Échanges égaux / répartition selon le mérite', 'Un contrat équitable / une récompense méritée'],
      ] },
      { t: 'tip', h: 'À retenir', c: 'L’**équité** (Aristote) corrige la loi générale quand son application mécanique produirait, dans un cas particulier, une injustice.' },
    ]),
    S('⚔️ Les grandes thèses — de quoi la justice est-elle faite ?', [
      { t: 'p', c: '**Thèse cynique (Calliclès, Thrasymaque).** La justice n’est qu’un mot : dans les faits, règne la loi du plus fort ; les lois sont faites par les puissants pour servir leurs intérêts. C’est la thèse que toute la philosophie va combattre.' },
      { t: 'p', c: '**Thèse du contrat (Hobbes, Rousseau).** La justice naît d’un **pacte** : pour sortir de la violence de l’état de nature, les hommes conviennent de règles communes. Chez Hobbes, ils se soumettent à un souverain absolu par peur de la mort ; chez Rousseau, ils forment une « volonté générale » et n’obéissent qu’à eux-mêmes — d’où une justice qui **fonde** la liberté au lieu de la supprimer.' },
      { t: 'p', c: '**Thèse de l’équité (Rawls).** Derrière un « voile d’ignorance » (j’ignore quelle sera ma place dans la société), quelles règles choisir ? Rawls soutient qu’on choisirait des institutions qui garantissent à tous des libertés de base **et** qui n’admettent d’inégalités que si elles profitent aux plus défavorisés. La justice devient « équité ».' },
      { t: 'warning', h: 'Piège fréquent', c: 'Confondre **égalité** et **justice**. Traiter identiquement des situations inégales peut être **injuste** : la justice exige parfois l’inégalité (proportionnalité, équité).' },
    ]),
    S('📜 Textes & cas commentés', [
      { t: 'example', h: 'Rousseau — le droit du plus fort', c: '« Le plus fort n’est jamais assez fort pour être toujours le maître, s’il ne transforme sa force en droit et l’obéissance en devoir. » (*Du contrat social*, I, 3)' },
      { t: 'p', c: '**Commentaire.** La force peut contraindre (je cède au voleur armé), mais elle n’**oblige** pas moralement : dès qu’elle faiblit, l’obéissance cesse. Une autorité durable a besoin de **légitimité**, non de simple puissance. Rousseau démonte ainsi l’idée que « la force fait le droit ».' },
      { t: 'example', h: 'Cas — Rosa Parks (1955)', c: 'En refusant de céder sa place dans le bus, Rosa Parks enfreint une loi **légale** (la ségrégation) au nom d’une justice **légitime**.' },
      { t: 'p', c: '**Commentaire.** Ce cas illustre la **désobéissance civile** : enfreindre publiquement une loi injuste, sans violence, en acceptant la sanction, pour en appeler à une loi meilleure. Ce n’est pas de l’anarchie (on respecte l’idée de loi), mais un acte politique au nom de la justice.' },
    ]),
    S('🌍 Prolongements — justice sociale et mondiale', [
      { t: 'p', c: 'Les débats contemporains prolongent ces questions. La **justice sociale** interroge la répartition des richesses (Rawls, Amartya Sen et les « capabilités »). La **justice pénale** oppose des finalités : punir pour **rétribuer** (rendre le mal pour le mal), pour **dissuader**, ou pour **réinsérer** ? La **justice mondiale** pose la question des inégalités entre pays et de la responsabilité envers les générations futures.' },
      { t: 'p', c: 'La pensée d’**Hannah Arendt** est ici précieuse : jugeant Eichmann, elle forge l’idée de « **banalité du mal** » — le fonctionnaire qui obéit aux ordres sans penser. Obéir à la loi ne suffit donc pas : la justice exige de **penser** par soi-même ce que l’on fait.' },
      { t: 'tip', h: 'Ouverture', c: 'Relier justice et liberté : sans justice, la liberté du plus fort écrase celle des autres ; la loi juste est la condition de la liberté de tous.' },
    ]),
    S('✍️ Deuxième dissertation guidée — « La justice se réduit-elle au respect des lois ? »', [
      { t: 'list', c: [
        '**I. Oui, être juste, c’est respecter les lois.** La loi, égale pour tous, arrache à l’arbitraire ; sans respect des lois, chacun se fait juge et c’est le chaos (Hobbes). Le juste semble donc coïncider avec le légal.',
        '**II. Mais une loi peut être injuste.** Légal ≠ légitime : l’histoire regorge de lois iniques. Réduire la justice au respect des lois interdirait de les critiquer — et rendrait complice (Arendt).',
        '**III. Dépassement.** La justice est l’**idéal** au nom duquel on juge et, au besoin, on réforme les lois. Respecter les lois est nécessaire, mais la justice les **dépasse** : elle est ce qui donne aux lois leur autorité — ou les condamne.',
      ] },
      { t: 'example', h: 'Conclusion', c: 'Le respect des lois est la forme ordinaire de la justice, non son essence : c’est parce qu’il existe une idée de justice supérieure aux lois que l’on peut les vouloir plus justes.' },
    ]),
  ],

  // =====================================================================
  // LA LIBERTÉ
  // =====================================================================
  'philo-liberte': [
    S('🔎 Définitions & distinctions approfondies', [
      { t: 'p', c: 'La liberté se décline en plusieurs figures. La **liberté d’action** est l’absence d’obstacles extérieurs (je peux marcher, parler). La **liberté de la volonté** ou **libre arbitre** est le pouvoir de choisir entre plusieurs possibles. L’**autonomie** (du grec *autos*, soi-même, et *nomos*, loi) est le pouvoir de se donner à soi-même sa propre loi — figure supérieure, morale, de la liberté (Kant).' },
      { t: 'p', c: 'Il faut distinguer la liberté de la **licence** (faire n’importe quoi selon ses caprices) : suivre tous ses désirs, c’est souvent en être l’esclave. Il faut aussi distinguer **contrainte** (obstacle extérieur qui empêche) et **obligation** (devoir intérieur qui engage) : la loi juste n’est pas une contrainte mais une obligation qui garantit la liberté de tous. Enfin, le débat central oppose **liberté** et **déterminisme** (tout a une cause) : le déterminisme rend-il la liberté impossible ?' },
      { t: 'table', head: ['Distinction', 'Un côté', 'L’autre côté'], rows: [
        ['Autonomie / licence', 'Se donner sa loi', 'Faire n’importe quoi'],
        ['Contrainte / obligation', 'Obstacle extérieur', 'Devoir intérieur'],
        ['Liberté / libre arbitre', 'Pouvoir agir', 'Pouvoir choisir'],
        ['Libre / déterminé', 'Cause en soi', 'Effet de causes antérieures'],
      ] },
      { t: 'tip', h: 'À retenir', c: 'On peut être **déterminé** et pourtant **responsable** : reconnaître les causes qui nous poussent (éducation, désirs) n’efface pas notre pouvoir de délibérer et de choisir.' },
    ]),
    S('⚔️ Les grandes thèses — sommes-nous libres ?', [
      { t: 'p', c: '**Thèse 1 — nous sommes évidemment libres (Descartes).** Le libre arbitre est une évidence intérieure, « la plus haute perfection de l’homme » ; je fais l’expérience directe de pouvoir dire oui ou non. **Thèse 2 — cette liberté est une illusion (Spinoza).** Nous nous croyons libres parce que nous avons conscience de nos désirs, mais nous **ignorons les causes** qui les produisent. La pierre lancée, si elle pensait, se croirait libre de tomber.' },
      { t: 'p', c: '**Thèse 3 — la liberté est morale (Kant).** La liberté n’est pas dans le monde des phénomènes (déterminé) mais dans l’ordre moral : être libre, c’est obéir à la loi que la raison se donne (l’autonomie), agir par devoir. **Thèse 4 — nous sommes condamnés à être libres (Sartre).** Sans nature humaine ni Dieu pour décider à notre place, « l’existence précède l’essence » : nous sommes ce que nous faisons de nous, et donc entièrement responsables — d’où l’angoisse et la tentation de la « mauvaise foi ».' },
      { t: 'warning', h: 'Piège', c: 'Confondre liberté et **toute-puissance**. Être libre n’est pas tout pouvoir (les stoïciens) : c’est bien user du pouvoir de choisir dont on dispose, y compris intérieurement.' },
    ]),
    S('📜 Textes clés commentés', [
      { t: 'example', h: 'Spinoza — l’illusion du libre arbitre', c: '« Les hommes se croient libres parce qu’ils ont conscience de leurs actions, et ignorent les causes qui les déterminent. » (*Éthique*)' },
      { t: 'p', c: '**Commentaire.** Spinoza ne nie pas que nous choisissions : il nie que nos choix soient **sans cause**. La conscience du désir masque son origine. Être vraiment libre, pour lui, ce n’est pas échapper aux causes, mais les **comprendre** — la liberté est une connaissance.' },
      { t: 'example', h: 'Sartre — la condamnation à la liberté', c: '« L’homme est condamné à être libre : condamné, parce qu’il ne s’est pas créé lui-même, et par ailleurs cependant libre, parce qu’une fois jeté dans le monde, il est responsable de tout ce qu’il fait. »' },
      { t: 'p', c: '**Commentaire.** Le paradoxe (« condamné » à être « libre ») dit que la liberté n’est pas un privilège confortable mais une **charge** : nous ne pouvons pas ne pas choisir, et aucune excuse (nature, société) ne nous décharge de la responsabilité de nos actes.' },
    ]),
    S('🌍 Prolongements — liberté, société, neurosciences', [
      { t: 'p', c: 'La question de la liberté se rejoue aujourd’hui sur plusieurs fronts. Les **neurosciences** (expériences de Libet) semblent montrer que le cerveau « décide » avant que nous en ayons conscience : cela ruine-t-il le libre arbitre, ou montre-t-il seulement que la conscience arrive après ? Le **conditionnement social** (publicité, algorithmes, « économie de l’attention ») fabrique nos désirs : sommes-nous libres de vouloir ce qu’on nous a appris à désirer ?' },
      { t: 'p', c: 'La **liberté politique**, elle, se pense avec Montesquieu (« la liberté est le droit de faire tout ce que les lois permettent ») et Tocqueville (le risque d’un « despotisme doux » où le confort endort la vigilance des citoyens). Là encore : la vraie liberté suppose des lois et une conscience éveillée.' },
      { t: 'tip', h: 'Exemple', c: 'L’addiction (au tabac, aux écrans) est l’exemple parfait d’une liberté minée de l’intérieur : la conscience du choix n’en garantit pas la liberté.' },
    ]),
    S('✍️ Deuxième dissertation guidée — « Sommes-nous responsables de ce que nous sommes ? »', [
      { t: 'list', c: [
        '**I. Non : nous sommes le produit de causes.** Hérédité, éducation, milieu social, inconscient (Freud) : nous n’avons choisi ni notre naissance ni nos premiers déterminismes. Il semble injuste d’être tenu responsable de ce qu’on n’a pas choisi.',
        '**II. Mais nous nous faisons par nos choix.** Sartre : au-delà de ce qui nous est donné, nous **décidons** de ce que nous en faisons ; se dire « déterminé » est souvent une excuse (mauvaise foi). La responsabilité est le prix de la liberté.',
        '**III. Dépassement.** Nous ne sommes pas responsables de nos **conditions**, mais de ce que nous en faisons ; reconnaître nos déterminismes (les comprendre, à la manière de Spinoza) est même la condition pour commencer à s’en libérer.',
      ] },
      { t: 'example', h: 'Conclusion', c: 'Nous ne choisissons pas notre point de départ, mais nous répondons de notre trajet : la responsabilité ne suppose pas une liberté absolue, seulement le pouvoir réel de délibérer et d’agir.' },
    ]),
  ],

  // =====================================================================
  // LA NATURE
  // =====================================================================
  'philo-nature': [
    S('🔎 Définitions & distinctions approfondies', [
      { t: 'p', c: 'Le mot « nature » est l’un des plus polysémiques de la langue philosophique. ① La **nature** peut désigner l’ensemble des êtres non produits par l’homme (l’environnement, le cosmos, le vivant). ② Elle peut désigner l’**essence** d’une chose, ce qui la fait être ce qu’elle est (« la nature humaine », « la nature du triangle »). ③ Elle peut enfin désigner l’**inné**, ce avec quoi l’on naît, par opposition à l’**acquis** (ce que l’on tient de l’éducation et de la culture).' },
      { t: 'p', c: 'La grande opposition anthropologique est **nature / culture**. La culture, c’est tout ce que l’homme ajoute à la nature : le langage, les techniques, les lois, les arts, les mœurs. Elle varie d’une société à l’autre (ce qui est « bien élevé » ici ne l’est pas ailleurs), tandis que la nature est universelle. Attention : beaucoup de comportements qu’on croit « naturels » (les rôles, les goûts) sont en réalité **culturels**, donc appris et modifiables.' },
      { t: 'table', head: ['Sens de « nature »', 'S’oppose à', 'Exemple'], rows: [
        ['L’environnement, le monde donné', 'L’artificiel, la technique', 'Une forêt / une autoroute'],
        ['L’essence d’une chose', 'L’accidentel', '« La nature de l’homme »'],
        ['L’inné', 'L’acquis (la culture)', 'Un réflexe / une politesse apprise'],
      ] },
      { t: 'warning', h: 'Sophisme naturaliste', c: 'Passer du **fait** (« c’est naturel ») à la **valeur** (« c’est donc bien ») est une erreur logique. La nature décrit ce qui est, non ce qui doit être.' },
    ]),
    S('⚔️ Les grandes thèses — l’homme, la nature et la culture', [
      { t: 'p', c: '**Thèse 1 — l’homme se distingue de la nature par la culture (Rousseau, Lévi-Strauss).** Ce qui définit l’humain, c’est la **perfectibilité** : la capacité de se transformer, d’apprendre, d’inventer. L’interdit de l’inceste, universel mais partout réglé différemment, marque le passage même de la nature à la culture (Lévi-Strauss).' },
      { t: 'p', c: '**Thèse 2 — l’homme doit maîtriser la nature (Descartes).** La science a une visée pratique : nous rendre « comme maîtres et possesseurs de la nature », pour la santé et le bien-être. La nature est un domaine à connaître et à transformer. **Thèse 3 — l’homme doit respecter et protéger la nature (Jonas, écologie).** La démesure de notre puissance technique menace la biosphère : d’où un **principe responsabilité** envers le vivant et les générations futures.' },
      { t: 'p', c: '**Thèse 4 — l’homme est partie de la nature (Spinoza).** Se penser comme un « empire dans un empire », maître extérieur, est une illusion : l’homme est un mode de la Nature (*Deus sive Natura*), soumis à ses lois. Comprendre cela, c’est cesser de vouloir dominer pour apprendre à s’accorder.' },
      { t: 'tip', h: 'Débat vivant', c: 'Maîtrise (Descartes) contre responsabilité (Jonas) : c’est le cœur de tout sujet sur l’écologie.' },
    ]),
    S('📜 Textes & cas commentés', [
      { t: 'example', h: 'Descartes — maîtres et possesseurs de la nature', c: '« Nous rendre comme maîtres et possesseurs de la nature. » (*Discours de la méthode*, VI)' },
      { t: 'p', c: '**Commentaire.** Le « comme » est capital : Descartes ne prône pas une domination orgueilleuse, mais une maîtrise **au service** de l’homme (« la conservation de la santé »). C’est le programme de la science moderne — qu’Hans Jonas, trois siècles plus tard, jugera à réviser au vu de ses conséquences.' },
      { t: 'example', h: 'Cas — le barrage', c: 'Un barrage produit une énergie « propre » mais noie une vallée et un écosystème.' },
      { t: 'p', c: '**Commentaire.** Le cas oblige à peser deux biens (l’énergie décarbonée, la préservation du vivant) : il n’y a pas de « nature » à préserver d’un côté et de « progrès » de l’autre, mais des **choix** à arbitrer avec responsabilité. La nature n’est ni un simple stock, ni un sanctuaire intouchable.' },
    ]),
    S('🌍 Prolongements — l’âge écologique', [
      { t: 'p', c: 'Notre époque a fait de la nature une question **politique et morale** urgente. L’« **anthropocène** » désigne l’ère où l’activité humaine est devenue une force géologique (climat, extinctions). La philosophie environnementale se divise : l’**écologie superficielle** protège la nature pour l’homme (ressources, cadre de vie) ; l’**écologie profonde** (Arne Næss) reconnaît une valeur au vivant **en soi**, indépendamment de son utilité.' },
      { t: 'p', c: 'Le principe responsabilité de **Jonas** fournit une boussole : « agis de telle sorte que les effets de ton action soient compatibles avec la permanence d’une vie authentiquement humaine sur terre ». La nouveauté : notre responsabilité s’étend désormais à ceux qui **ne sont pas encore nés**.' },
      { t: 'tip', h: 'Ouverture', c: 'Relier nature et technique : c’est la puissance technique qui a rendu possible la domination — et la destruction — de la nature.' },
    ]),
    S('✍️ Deuxième dissertation guidée — « La culture dénature-t-elle l’homme ? »', [
      { t: 'list', c: [
        '**I. La culture éloigne l’homme de sa nature.** Rousseau : la société a corrompu l’homme, créé des besoins artificiels, des inégalités, de l’amour-propre. La culture serait un vernis qui masque et déforme la nature.',
        '**II. Mais la culture est la nature même de l’homme.** Sans langage, sans techniques, sans éducation, il n’y a pas d’humanité : l’homme est par nature un être de culture. « Dénaturer » n’a alors pas de sens, puisque sa nature est de se cultiver.',
        '**III. Dépassement.** La culture ne dénature pas l’homme : elle l’**accomplit** ou le **pervertit** selon l’usage. Le problème n’est pas la culture en soi, mais une culture qui trahit ce qu’il y a de meilleur dans l’humain.',
      ] },
      { t: 'example', h: 'Conclusion', c: 'La culture ne s’oppose pas à la nature de l’homme : elle en est la réalisation. Reste à la vouloir digne de ce qu’elle prétend cultiver — l’humanité en l’homme.' },
    ]),
  ],

  // =====================================================================
  // LA RELIGION
  // =====================================================================
  'philo-religion': [
    S('🔎 Définitions & distinctions approfondies', [
      { t: 'p', c: 'La religion articule des **croyances** (sur le sacré, le divin, l’au-delà) et des **pratiques** (rites, prières, fêtes) au sein d’une **communauté**. Étymologiquement, *religare* signifie relier (l’homme au divin, les hommes entre eux) et *relegere*, recueillir, observer scrupuleusement. Le cœur en est le **sacré** : ce qui est mis à part, entouré de respect et d’interdits, par opposition au **profane** (l’ordinaire).' },
      { t: 'p', c: 'La distinction philosophique décisive oppose **croire** et **savoir**. **Croire**, c’est tenir pour vrai **sans preuve** suffisante — soit par confiance (la foi religieuse), soit par simple opinion. **Savoir**, c’est tenir pour vrai **avec preuve** (démonstration, expérience vérifiable). La foi n’est donc pas un savoir raté : c’est un autre rapport à la vérité, qui engage la personne entière. À ne pas confondre non plus : la **foi** (adhésion vécue) et la **religion** (institution, dogme) ; on peut avoir l’une sans l’autre.' },
      { t: 'table', head: ['Distinction', 'Un côté', 'L’autre côté'], rows: [
        ['Croire / savoir', 'Sans preuve (foi, opinion)', 'Avec preuve (science)'],
        ['Sacré / profane', 'Mis à part, objet de respect', 'Ordinaire, usuel'],
        ['Foi / religion', 'Adhésion personnelle', 'Institution, dogme, rite'],
        ['Croyance / superstition', 'Adhésion réfléchie', 'Crainte irrationnelle'],
      ] },
      { t: 'tip', h: 'À retenir', c: 'La **laïcité** n’est pas l’athéisme : c’est la neutralité de l’État, qui garantit à chacun la liberté de croire ou de ne pas croire.' },
    ]),
    S('⚔️ Les grandes thèses — foi, raison et critique', [
      { t: 'p', c: '**Thèse 1 — la foi dépasse la raison sans la nier (Pascal).** « Le cœur a ses raisons que la raison ne connaît point » : il existe un ordre du cœur, une évidence intérieure, que la démonstration ne peut ni fonder ni détruire. Le **pari** de Pascal invite même le sceptique à parier sur Dieu, l’enjeu infini valant le risque fini.' },
      { t: 'p', c: '**Thèse 2 — la religion est une illusion utile (critique moderne).** **Marx** : « l’opium du peuple », une consolation qui apaise la souffrance des opprimés mais les détourne de changer leur condition réelle. **Freud** : une **illusion**, la projection d’un désir infantile de protection paternelle. **Nietzsche** : une morale du ressentiment qui invente des « arrière-mondes » pour dévaloriser la vie terrestre.' },
      { t: 'p', c: '**Thèse 3 — la religion est un fait social (Durkheim).** Indépendamment de la question de sa vérité, la religion remplit une fonction : elle **soude** le groupe, crée du lien, de l’identité, du rituel partagé. Le sacré, c’est la société qui se vénère elle-même sans le savoir.' },
      { t: 'warning', h: 'Piège', c: 'Traiter la religion comme une « science fausse ». Croire et savoir ne jouent pas sur le même terrain : la foi ne prétend pas démontrer, elle engage une confiance.' },
    ]),
    S('📜 Textes & cas commentés', [
      { t: 'example', h: 'Pascal — les deux ordres', c: '« Le cœur a ses raisons que la raison ne connaît point. » (*Pensées*)' },
      { t: 'p', c: '**Commentaire.** Pascal ne dénigre pas la raison : il distingue **deux ordres** de connaissance. Le cœur (l’intuition, la foi) saisit des vérités que la raison démonstrative ne peut atteindre. La foi n’est donc pas déraisonnable : elle est d’un autre ordre que la démonstration.' },
      { t: 'example', h: 'Cas — Galilée (1633)', c: 'Condamné par l’Église pour avoir soutenu, preuves à l’appui, que la Terre tourne.' },
      { t: 'p', c: '**Commentaire.** Le conflit naît d’une **confusion des ordres** : l’autorité religieuse tranche une question de **fait** (astronomique) qui relève du **savoir**. La leçon n’est pas « religion contre science », mais qu’il faut distinguer les domaines : la science dit *comment* est le monde, la religion prétend dire un *sens*.' },
    ]),
    S('🌍 Prolongements — croire à l’âge de la science', [
      { t: 'p', c: 'La modernité a connu ce que Max Weber appelle le « **désenchantement du monde** » : la science explique par des causes ce qu’on attribuait au sacré. Pourtant la question religieuse ne disparaît pas ; elle se déplace. Les débats contemporains portent sur la **tolérance** (Voltaire) contre le **fanatisme**, sur la **laïcité**, sur le rapport entre convictions personnelles et espace public.' },
      { t: 'p', c: 'Philosophiquement, l’essentiel reste de ne pas confondre les plans : on peut être croyant et rationnel (Pascal, Descartes), athée et respectueux, sans réduire la foi à de la crédulité ni la raison à de la froideur. Le véritable adversaire commun, c’est le **dogmatisme** — la pensée qui refuse d’être interrogée.' },
      { t: 'tip', h: 'Ouverture', c: 'Relier religion et vérité : la question « peut-on prouver Dieu ? » éclaire la distinction croire/savoir et les limites de la démonstration.' },
    ]),
    S('✍️ Deuxième dissertation guidée — « Croire, est-ce renoncer à la raison ? »', [
      { t: 'list', c: [
        '**I. Croire semble renoncer à la raison.** Adhérer sans preuve, c’est suspendre l’exigence de démonstration ; la foi peut sembler crédulité, voire fanatisme quand elle refuse tout examen.',
        '**II. Mais croire n’est pas déraisonner.** Croire et savoir n’ont pas le même objet (Pascal) : la foi porte sur un sens, une espérance, non sur des faits mesurables. On peut croire **et** raisonner (théologie, Descartes).',
        '**III. Dépassement.** Ce n’est pas la croyance qui s’oppose à la raison, mais la croyance **qui refuse de se penser** (le fanatisme). Une foi qui accepte le doute et le dialogue n’est pas un renoncement à la raison : elle en est une autre forme.',
      ] },
      { t: 'example', h: 'Conclusion', c: 'Croire n’est renoncer à la raison que lorsque la croyance se fait dogme intouchable. Distinguées et humbles, foi et raison peuvent cohabiter dans un même esprit.' },
    ]),
  ],

  // =====================================================================
  // LA TECHNIQUE
  // =====================================================================
  'philo-technique': [
    S('🔎 Définitions & distinctions approfondies', [
      { t: 'p', c: 'La technique désigne l’ensemble des **procédés efficaces**, appris et transmissibles, par lesquels l’homme transforme la nature pour satisfaire ses besoins. Elle se distingue de la **science** (qui vise le vrai, la connaissance désintéressée) et de l’**art** (qui vise le beau). Longtemps, science et technique furent séparées ; la modernité les a nouées en une **technoscience** où la théorie sert l’application et l’application relance la théorie.' },
      { t: 'p', c: 'La distinction décisive pour juger la technique est celle du **moyen** et de la **fin** : la technique est un **moyen**, neutre en soi ; sa valeur dépend de la **fin** poursuivie et de l’**usage**. Un même savoir (la chimie, le nucléaire, l’informatique) peut soigner ou détruire. S’ajoutent la distinction **outil / machine** (l’outil prolonge la main, la machine remplace le geste et rend l’homme surveillant) et la notion d’**aliénation** (être dépossédé du sens de son activité).' },
      { t: 'table', head: ['Distinction', 'Un côté', 'L’autre côté'], rows: [
        ['Technique / science', 'Vise l’efficace, l’utile', 'Vise le vrai, la connaissance'],
        ['Moyen / fin', 'La technique (neutre)', 'L’usage, le but (jugés)'],
        ['Outil / machine', 'Prolonge le geste humain', 'Remplace le geste, l’automatise'],
        ['Travail / aliénation', 'Se réaliser en produisant', 'Se perdre dans un travail vidé de sens'],
      ] },
      { t: 'tip', h: 'À retenir', c: 'L’homme est *homo faber* (Bergson) : la technique n’est pas un accessoire de l’humanité, elle en est **constitutive**.' },
    ]),
    S('⚔️ Les grandes thèses — la technique libère-t-elle ?', [
      { t: 'p', c: '**Thèse 1 — la technique libère et humanise.** Elle affranchit des contraintes naturelles (Descartes), réduit la pénibilité, prolonge la vie. Chez **Hegel**, c’est par le **travail** que l’esclave, façonnant le monde, accède à la conscience de soi : transformer la nature, c’est se transformer soi-même.' },
      { t: 'p', c: '**Thèse 2 — la technique peut asservir.** **Marx** : le travail industriel **aliène** l’ouvrier, dépossédé du produit et du sens de son geste. **Heidegger** : la technique moderne réduit tout — la nature, l’homme — à un « **fonds** » (*Bestand*), une réserve disponible et calculable ; le fleuve n’est plus contemplé, il est « sommé » de fournir de l’énergie.' },
      { t: 'p', c: '**Thèse 3 — la technique appelle une éthique nouvelle.** **Jonas** : notre puissance est devenue si grande qu’elle engage l’existence de l’humanité future ; il faut un **principe responsabilité**. **Rousseau**, enfin, avertit : le progrès technique n’entraîne pas le progrès **moral** ; sciences et arts n’ont pas rendu les hommes meilleurs.' },
      { t: 'warning', h: 'Piège', c: 'Le **déterminisme technique** : croire que la technique évolue seule et nous impose ses effets. En réalité, ce sont des **choix** (politiques, économiques, éthiques) qui décident de ses usages.' },
    ]),
    S('📜 Textes & cas commentés', [
      { t: 'example', h: 'Bergson — homo faber', c: '« L’intelligence, envisagée dans ce qui en paraît être la démarche originelle, est la faculté de fabriquer des objets artificiels, en particulier des outils à faire des outils. » (*L’Évolution créatrice*)' },
      { t: 'p', c: '**Commentaire.** Bergson définit l’homme moins par la pensée abstraite (*sapiens*) que par la **fabrication** (*faber*) : l’outil qui fait d’autres outils marque un saut décisif. La technique n’est pas extérieure à l’intelligence : elle en est l’expression première.' },
      { t: 'example', h: 'Cas — le smartphone', c: 'Il nous relie au monde entier… et nous soumet aux notifications, à la surveillance des données, à l’économie de l’attention.' },
      { t: 'p', c: '**Commentaire.** Une seule technique, deux visages : libération (accès au savoir, aux autres) et servitude (dépendance, captation du temps). Le cas illustre parfaitement que **tout dépend de l’usage** et de la maîtrise que nous en gardons — la question n’est jamais « pour ou contre », mais « comment ».' },
    ]),
    S('🌍 Prolongements — IA, bioéthique, écologie', [
      { t: 'p', c: 'La technique contemporaine pose des questions inédites. L’**intelligence artificielle** : une machine qui « décide » nous déresponsabilise-t-elle ? Peut-elle créer, penser ? La **bioéthique** : jusqu’où modifier le vivant, l’humain (génétique, procréation) ? L’**écologie** : la puissance technique, qui a permis de dominer la nature, menace aujourd’hui la biosphère.' },
      { t: 'p', c: 'Toutes ces questions reconduisent les thèses classiques : la neutralité (moyen/fin), la maîtrise (Descartes), l’aliénation (Marx), l’arraisonnement du monde (Heidegger), la responsabilité (Jonas). La littérature l’avait anticipé : *Frankenstein* (la créature qui échappe au créateur), *Le Meilleur des mondes* (l’homme fabriqué et « heureux »).' },
      { t: 'tip', h: 'Ouverture', c: 'Relier technique et liberté : la technique promet de nous libérer, mais peut créer de nouvelles dépendances ; la vraie liberté est de rester maître de nos moyens.' },
    ]),
    S('✍️ Deuxième dissertation guidée — « Le progrès technique rend-il l’homme meilleur ? »', [
      { t: 'list', c: [
        '**I. Le progrès technique améliore la condition humaine.** Santé, confort, savoirs, communication : la technique recule la souffrance et élargit nos possibles. Elle libère du temps pour la culture et la vie de l’esprit.',
        '**II. Mais progrès technique ≠ progrès moral.** Rousseau en doute ; le XXᵉ siècle l’a prouvé tragiquement (la technique au service de la barbarie). Plus de pouvoir n’implique pas plus de sagesse ; la technique peut aliéner et déshumaniser (Marx, Heidegger).',
        '**III. Dépassement.** La technique donne des **moyens** ; elle ne fixe pas les **fins**. Elle ne rend pas meilleur par elle-même : tout dépend de l’usage, qui relève de la morale et de la politique, non de la technique.',
      ] },
      { t: 'example', h: 'Conclusion', c: 'Le progrès technique augmente notre puissance, non notre bonté. Il rend l’homme meilleur seulement si une conscience éthique en gouverne l’usage : le vrai progrès est d’abord celui de la responsabilité.' },
    ]),
  ],

  // =====================================================================
  // LA VÉRITÉ
  // =====================================================================
  'philo-verite': [
    S('🔎 Définitions & distinctions approfondies', [
      { t: 'p', c: 'La vérité se définit classiquement comme l’**accord de la pensée avec son objet** (théorie de l’adéquation). Il faut aussitôt la distinguer de la **réalité** : la réalité est ce qui **est** ; la vérité qualifie nos **jugements** sur le réel. Une chose n’est ni vraie ni fausse ; c’est ce que j’en **affirme** qui peut l’être. On distingue aussi la vérité de la **certitude** (état subjectif de conviction : on peut être certain et se tromper) et de la **vraisemblance** (ce qui a l’air vrai).' },
      { t: 'p', c: 'Deux distinctions structurent la notion. D’abord **opinion / savoir** : l’opinion (*doxa*) est une croyance non fondée, même partagée ; le savoir (*épistémè*) est justifié. Ensuite, avec **Leibniz**, **vérités de raison** (nécessaires, universelles, comme les mathématiques : leur contraire est impossible) et **vérités de fait** (contingentes, vérifiées par l’expérience : « César a franchi le Rubicon » — cela aurait pu ne pas être). On ne prouve pas les secondes comme les premières.' },
      { t: 'table', head: ['Distinction', 'Un côté', 'L’autre côté'], rows: [
        ['Vérité / réalité', 'Propriété du jugement', 'Ce qui est'],
        ['Vérité / certitude', 'Accord avec l’objet', 'Conviction subjective (faillible)'],
        ['Opinion / savoir', 'Croyance non fondée', 'Connaissance justifiée'],
        ['Vérités de raison / de fait', 'Nécessaires (logique)', 'Contingentes (expérience)'],
      ] },
      { t: 'warning', h: 'Relativisme', c: '« À chacun sa vérité » confond le **goût** (subjectif, légitime) et la **vérité** (qui prétend valoir pour tous). Sur un fait, toutes les opinions ne se valent pas.' },
    ]),
    S('⚔️ Les grandes thèses — comment atteindre le vrai ?', [
      { t: 'p', c: '**Thèse 1 — par la conversion du regard (Platon).** L’allégorie de la caverne : enchaînés, nous prenons les **ombres** pour la réalité ; philosopher, c’est se retourner, sortir, contempler le soleil (l’Idée du Bien). La vérité se conquiert contre les apparences et l’opinion.' },
      { t: 'p', c: '**Thèse 2 — par le doute méthodique (Descartes).** Douter volontairement de tout — sens, raisonnements, monde — jusqu’à une première certitude que le doute ne peut emporter : « je pense, donc je suis ». La vérité se fonde sur l’évidence claire et distincte. **Thèse 3 — par l’expérience et la réfutation (empirisme, Popper).** Les vérités de fait se vérifient par l’expérience ; et une théorie n’est **scientifique** que si elle est **réfutable** (falsifiable) : ce qu’aucune expérience ne pourrait contredire n’est pas une science.' },
      { t: 'p', c: '**Thèse 4 — la vérité est conquise contre l’erreur (Bachelard).** La connaissance scientifique progresse en franchissant des « **obstacles épistémologiques** » : nos évidences premières, nos images spontanées sont d’abord des obstacles à dépasser. La vérité n’est jamais donnée, toujours construite et rectifiée.' },
      { t: 'tip', h: 'À retenir', c: 'Le **doute** cartésien n’est pas le scepticisme : c’est un **outil** pour atteindre le certain, non une fin en soi.' },
    ]),
    S('📜 Textes & cas commentés', [
      { t: 'example', h: 'Descartes — le cogito', c: '« Je pense, donc je suis. » (*Discours de la méthode*, IV)' },
      { t: 'p', c: '**Commentaire.** Même en doutant de tout, une chose résiste : pour douter, il faut penser, et pour penser, il faut exister. Le cogito est la première **certitude indubitable**, le socle sur lequel Descartes va reconstruire le savoir. Le doute, poussé à l’extrême, se retourne en fondement.' },
      { t: 'example', h: 'Cas — « la Terre est plate »', c: 'Longtemps évidence partagée, aujourd’hui fausse : une croyance majoritaire n’est pas une vérité.' },
      { t: 'p', c: '**Commentaire.** Le cas montre que la vérité ne se **décide pas au vote** : elle se démontre ou se vérifie. Il montre aussi que la vérité scientifique est **révisable** — non par faiblesse, mais parce qu’une pensée qui se corrige est plus fiable qu’une pensée qui se croit définitive.' },
    ]),
    S('🌍 Prolongements — vérité, sciences et post-vérité', [
      { t: 'p', c: 'À l’ère des réseaux, la question de la vérité devient brûlante : « **fake news** », théories du complot, « **post-vérité** » où l’émotion l’emporte sur les faits. La distinction opinion/savoir n’a jamais été aussi nécessaire : la liberté d’exprimer une opinion n’implique pas que toutes les opinions se valent devant les faits.' },
      { t: 'p', c: 'Du côté des sciences, la vérité se pense comme **provisoire et rectifiable** (Popper : une théorie tient tant qu’elle n’est pas réfutée) sans pour autant sombrer dans le relativisme : c’est justement parce qu’elle se soumet à l’épreuve que la science est fiable. **Orwell** (*1984*, le « Ministère de la Vérité ») rappelle l’enjeu politique : abolir l’idée d’une vérité indépendante, c’est le rêve de tout pouvoir totalitaire.' },
      { t: 'tip', h: 'Ouverture', c: 'Relier vérité et liberté : sans vérité partagée, plus de débat possible ; la démocratie suppose que l’on cherche ensemble le vrai.' },
    ]),
    S('✍️ Deuxième dissertation guidée — « Peut-on douter de tout ? »', [
      { t: 'list', c: [
        '**I. Oui, on peut douter de tout (doute radical).** Les sens trompent, les raisonnements peuvent errer, un « malin génie » pourrait me tromper (Descartes). Rien ne semble à l’abri du doute — c’est la force du scepticisme.',
        '**II. Mais le doute rencontre une limite.** En doutant, je pense ; en pensant, j’existe : le cogito résiste au doute. Douter de tout absolument est impossible, car le doute lui-même suppose un sujet qui doute.',
        '**III. Dépassement.** Le doute n’est fécond que s’il est **méthodique** (un outil pour trouver le certain), non **sceptique** (une fin qui paralyse). Douter de tout, ce n’est pas ne croire à rien : c’est se donner les moyens de savoir.',
      ] },
      { t: 'example', h: 'Conclusion', c: 'On peut mettre tout en doute, sauf l’acte même de douter : le doute, loin de ruiner la vérité, en est le chemin, à condition de viser, au bout, une certitude.' },
    ]),
  ],

  // =====================================================================
  // MÉTHODE & AUTEURS
  // =====================================================================
  'philo-methode': [
    S('🧩 Le vocabulaire et les connecteurs de la dissertation', [
      { t: 'p', c: 'Une copie de philosophie se reconnaît à sa **langue**. Quelques réflexes de vocabulaire font gagner des points : « **problématiser** » (montrer la tension), « **une distinction** » (préciser deux sens d’un mot), « **un présupposé** » (ce que le sujet tient pour acquis), « **une objection** », « **une nuance** ». On évite « je pense que », « de nos jours », « depuis la nuit des temps », les généralités et le « bla-bla ».' },
      { t: 'table', head: ['Pour…', 'Connecteurs à utiliser'], rows: [
        ['Ajouter un argument', 'de plus, en outre, par ailleurs'],
        ['Opposer (antithèse)', 'mais, cependant, toutefois, or'],
        ['Conclure une étape', 'donc, ainsi, par conséquent'],
        ['Nuancer', 'certes… mais, dans une certaine mesure'],
        ['Illustrer', 'par exemple, ainsi, comme le montre'],
        ['Dépasser', 'en réalité, plus profondément, il faut alors distinguer'],
      ] },
      { t: 'tip', h: 'Structure d’un paragraphe', c: 'Une **idée** (la phrase-clé) + un **argument** (pourquoi c’est vrai) + un **exemple ou un auteur** (qui l’illustre) + une **transition** vers la suite. Toujours dans cet ordre.' },
    ]),
    S('🎯 Trouver la problématique : la méthode pas à pas', [
      { t: 'p', c: 'Problématiser, c’est transformer un sujet en un **problème** : montrer que la réponse spontanée (« oui, évidemment » ou « non, bien sûr ») se heurte à une objection sérieuse. La technique : formuler la **réponse évidente**, puis l’**objection** qui la fragilise, et faire jaillir la **tension** entre les deux.' },
      { t: 'list', c: [
        '**Repérer les mots** du sujet et leurs sens possibles (un mot = souvent plusieurs sens).',
        '**Formuler la thèse spontanée** : ce que « tout le monde » répondrait.',
        '**Chercher l’objection** : dans quel cas cette réponse est-elle fausse ou insuffisante ?',
        '**Énoncer le problème** : « Faut-il donc… ou au contraire… ? » — c’est votre problématique.',
      ] },
      { t: 'example', h: 'Exemple', c: 'Sujet : « Faut-il toujours dire la vérité ? » — Réponse spontanée : oui, mentir est mal. Objection : mais un mensonge peut protéger (le « mensonge charitable »). Problématique : la vérité est-elle un devoir **absolu**, ou doit-elle se plier à d’autres exigences (le bien d’autrui) ?' },
      { t: 'tip', h: 'Réflexe', c: 'Une bonne problématique tient en **une question précise**, pas en une reformulation du sujet. Elle annonce déjà le plan.' },
    ]),
    S('🗂️ Banque de sujets par notion (avec problématiques)', [
      { t: 'table', head: ['Notion', 'Sujet possible', 'Tension à dégager'], rows: [
        ['L’art', 'L’art n’a-t-il pour but que le beau ?', 'Plaire / dire une vérité, déranger'],
        ['La justice', 'Est-il toujours juste d’obéir à la loi ?', 'Légal / légitime'],
        ['La liberté', 'Être libre, est-ce faire ce que l’on veut ?', 'Licence / autonomie'],
        ['La nature', 'L’homme doit-il dominer la nature ?', 'Maîtrise / responsabilité'],
        ['La religion', 'La foi est-elle contraire à la raison ?', 'Croire / savoir'],
        ['La technique', 'La technique nous libère-t-elle ?', 'Moyen / fin, libération / aliénation'],
        ['La vérité', 'Toutes les opinions se valent-elles ?', 'Opinion / savoir'],
      ] },
      { t: 'tip', h: 'Entraînement', c: 'Pour chaque sujet, entraîne-toi à écrire **seulement l’introduction** (amener → définir → problématiser → annoncer). C’est l’exercice le plus rentable.' },
    ]),
    S('🚫 Les erreurs qui coûtent le plus au bac', [
      { t: 'list', c: [
        '**Le hors-sujet** : on répond à une autre question que celle posée. Remède : recopier le sujet en tête de brouillon et y revenir sans cesse.',
        '**La récitation** : on déroule le cours sans problématiser. Remède : chaque paragraphe doit **répondre** au problème, pas exposer un savoir.',
        '**La juxtaposition d’avis** : « certains pensent… d’autres pensent… ». Remède : un plan **progressif**, où chaque partie dépasse la précédente.',
        '**Les exemples plaqués** : citer un auteur sans l’expliquer. Remède : montrer **ce que l’exemple apporte** à l’argument.',
        '**La conclusion molle** (« ça dépend », « chacun voit »). Remède : **trancher** clairement le problème posé.',
      ] },
      { t: 'warning', h: 'À bannir', c: 'Le « je pense que… » sans argument, les généralités (« de tout temps l’homme… »), et le mélange dissertation / explication de texte : lisez bien la consigne.' },
    ]),
  ],
}
