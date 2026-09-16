// PHILOSOPHIE — voie technologique.
// Programme de cette année : les 7 notions (l'art, la justice, la liberté, la
// nature, la religion, la technique, la vérité) + la méthode (dissertation,
// explication de texte, auteurs). Chaque notion est un THÈME à part entière,
// découpé en 3 chapitres :
//   1) Comprendre — la notion par un exemple réel + la distinction clé ;
//   2) Le problème — la problématique et deux thèses d'auteurs opposées ;
//   3) Approfondir & au bac — un second angle, une citation, un sujet type.
// Les définitions restent dans l'encadré « Définitions clés » (keyterms.js).

// Petit raccourci pour une section lisible { h, blocks }.
const S = (h, blocks) => ({ h, blocks })

export const philosophie = {
  id: 'philosophie',
  name: 'Philosophie',
  short: 'Philo',
  icon: '🦉',
  color: '#9333ea',
  tagline: 'Chaque notion expliquée par un exemple réel, puis problématisée.',
  chapters: [
    // =====================================================================
    // L'ART
    // =====================================================================
    {
      id: 'philo-art',
      name: 'L’art',
      short: 'L’art',
      keywords: 'art beau esthétique création imitation Duchamp Platon Hegel Kant œuvre artisanat goût',
      intro: 'Un urinoir industriel signé peut-il devenir une œuvre exposée dans les plus grands musées ? La notion d’art interroge ce qui fait une œuvre, ce à quoi elle sert, et si le beau vaut pour tous ou seulement pour moi.',
      cours: [
        S('🎨 Comprendre — l’art par l’exemple (la « Fontaine » de Duchamp)', [
          { t: 'example', h: 'Situation', c: 'En 1917, Marcel Duchamp expose un simple urinoir industriel, retourné et signé « R. Mutt », qu’il intitule « Fontaine ». Un objet ordinaire devient une œuvre discutée dans le monde entier.' },
          { t: 'list', c: [
            '**La distinction clé** : *art / artisanat*. L’artisan fabrique des objets **utiles** en suivant un modèle ; l’artiste crée une œuvre **singulière**, qui vaut pour elle-même et non pour son usage.',
            '**Beau / agréable** : l’agréable **plaît aux sens** (un plat, une température) ; le beau prétend, lui, valoir **au-delà** de mon plaisir immédiat.',
            'Avec Duchamp, ce n’est plus l’objet ni le savoir-faire qui font l’œuvre, mais le **geste** de l’artiste et le **regard** de l’institution (le musée).',
          ] },
          { t: 'tip', h: 'Réflexe', c: 'Face à un sujet sur l’art, demande-toi d’abord : de quoi parle-t-on — de l’objet, de l’activité de création, ou du jugement de goût ?' },
        ]),
        S('🤔 Le problème — l’art imite-t-il ou crée-t-il ?', [
          { t: 'p', c: 'On attend souvent de l’art qu’il **ressemble** au réel. Mais est-ce là sa vraie fonction ?' },
          { t: 'list', c: [
            '**Thèse 1 — l’art imite (et trompe)** : pour **Platon**, l’art n’est qu’une **copie de copie**, une illusion qui nous éloigne de la vérité.',
            '**Thèse 2 — l’art révèle** : pour **Hegel**, l’œuvre **manifeste l’esprit** ; elle dit une vérité sur l’homme que le réel brut ne montre pas.',
            '**Le beau est-il subjectif ?** Pour **Kant**, dire « c’est beau » n’est pas dire « ça me plaît » : le jugement de goût est **subjectif mais prétend valoir pour tous** (universalité sans concept).',
          ] },
          { t: 'tip', h: 'Citation utile', c: '« L’art ne reproduit pas le visible, il rend visible. » (Paul Klee)' },
        ]),
        S('🎓 Approfondir & au bac', [
          { t: 'list', c: [
            '**À quoi sert l’art ?** Émouvoir, faire penser, critiquer la société, donner forme à l’indicible — pas seulement décorer.',
            '**Piège** : « c’est beau » n’est pas un argument. Il faut **expliquer** ce que l’œuvre produit et pourquoi.',
          ] },
          { t: 'example', h: 'Sujet type', c: '« L’œuvre d’art n’a-t-elle pour but que d’être belle ? » → I. L’art vise le beau — II. Mais il dit aussi une vérité, il dérange — III. Sa valeur tient à ce qu’il **donne à penser**, pas seulement à plaire.' },
          { t: 'tip', h: 'Repères mobilisables', c: 'Beau / agréable · art / technique · objectif / subjectif.' },
        ]),
      ],
      essentiel: [
        'Distinction clé : **art / artisanat** (l’œuvre est singulière et vaut pour elle-même, pas pour son usage).',
        'Deux thèses : l’art **imite** et trompe (**Platon**) / l’art **révèle** une vérité (**Hegel**).',
        'Le **beau** n’est pas l’**agréable** : pour **Kant**, le goût est subjectif mais prétend valoir pour tous.',
      ],
      resources: [
        { label: 'France Culture — « Les chemins de la philosophie »', url: 'https://www.radiofrance.fr/franceculture/podcasts/les-chemins-de-la-philosophie', kind: 'link', note: 'Cherche des émissions sur l’art et le beau.' },
        { label: 'Lumni — Philosophie', url: 'https://www.lumni.fr/', kind: 'video', note: 'Cherche « l’art », « le beau ».' },
      ],
      games: [
        { id: 'philo-art-flash', type: 'flashcard', title: 'Flashcards — L’art', icon: '🃏', cards: [
          { front: 'Art / artisanat', back: 'L’artisan fait de l’utile en suivant un modèle ; l’artiste crée une œuvre singulière.' },
          { front: 'Platon et l’art', back: 'L’art n’est qu’une imitation trompeuse (copie de copie), il éloigne de la vérité.' },
          { front: 'Hegel et l’art', back: 'L’œuvre manifeste l’esprit : elle révèle une vérité sur l’homme.' },
          { front: 'Kant et le beau', back: 'Le jugement de goût est subjectif mais prétend valoir pour tous.' },
          { front: '« L’art rend visible »', back: 'Klee : l’art ne copie pas le réel, il fait voir autrement.' },
        ] },
        { id: 'philo-art-assoc', type: 'association', title: 'Association — Art', icon: '🔗', pairs: [
          { left: 'Platon', right: 'L’art imite (illusion)' },
          { left: 'Hegel', right: 'L’art révèle une vérité' },
          { left: 'Kant', right: 'Le beau : subjectif mais universel' },
          { left: 'Duchamp', right: 'L’objet consacré par l’artiste' },
        ] },
        { id: 'philo-art-qcm', type: 'qcm', title: 'QCM — L’art', icon: '❓', questions: [
          { q: 'La distinction « art / artisanat » oppose…', choices: ['une œuvre singulière / un objet utile reproduit', 'le beau / le laid', 'le vrai / le faux', 'la cause / la fin'], answer: 0, explain: 'L’artisan reproduit de l’utile ; l’artiste crée du singulier.' },
          { q: 'Pour Platon, l’art est…', choices: ['une imitation trompeuse du réel', 'la plus haute vérité', 'une technique utile', 'un savoir démontré'], answer: 0, explain: 'L’art est une copie de copie, une illusion.' },
          { q: 'Pour Kant, « c’est beau » signifie…', choices: ['un jugement subjectif qui prétend valoir pour tous', 'exactement « ça me plaît »', 'une vérité démontrable', 'une simple mode'], answer: 0, explain: 'Universalité sans concept du jugement de goût.' },
          { q: '« L’art ne reproduit pas le visible, il rend visible » est de…', choices: ['Paul Klee', 'Platon', 'Descartes', 'Rousseau'], answer: 0, explain: 'Formule de Klee sur le pouvoir de révélation de l’art.' },
        ] },
        { id: 'philo-art-vf', type: 'vraifaux', title: 'Vrai / Faux — L’art', icon: '⚡', questions: [
          { statement: 'Le beau et l’agréable sont la même chose.', answer: false, explain: 'Faux : l’agréable plaît aux sens ; le beau prétend valoir au-delà.' },
          { statement: 'Pour Hegel, l’œuvre d’art peut révéler une vérité.', answer: true, explain: 'Vrai : l’art manifeste l’esprit.' },
          { statement: 'Dire « c’est beau » suffit comme argument au bac.', answer: false, explain: 'Faux : il faut expliquer ce que l’œuvre produit.' },
        ] },
      ],
    },

    // =====================================================================
    // LA JUSTICE
    // =====================================================================
    {
      id: 'philo-justice',
      name: 'La justice',
      short: 'La justice',
      keywords: 'justice droit loi équité légal légitime égalité Rosa Parks Aristote Rousseau désobéissance',
      intro: 'En 1955, Rosa Parks enfreint une loi bien réelle en refusant de céder sa place… mais une loi que l’histoire jugera injuste. La justice interroge le rapport entre la loi, l’équité et ce qui est vraiment juste.',
      cours: [
        S('⚖️ Comprendre — la justice par l’exemple (Rosa Parks)', [
          { t: 'example', h: 'Situation', c: 'À Montgomery (États-Unis, 1955), Rosa Parks refuse de céder sa place à un passager blanc dans le bus. Elle enfreint la loi de ségrégation en vigueur.' },
          { t: 'list', c: [
            '**La distinction décisive** : *légal / légitime*. Est **légal** ce qui est conforme à la loi ; est **légitime** ce qui est conforme à la **justice**. La ségrégation était **légale** mais **illégitime**.',
            '**Justice = égalité ?** **Aristote** distingue l’égalité **arithmétique** (la même chose pour tous) et l’égalité **proportionnelle** (à chacun selon son mérite ou son besoin).',
            '**L’équité** corrige la loi générale quand elle devient injuste dans un cas particulier.',
          ] },
          { t: 'tip', h: 'À ne pas confondre', c: '**La justice** (idéal moral et politique) ≠ **la justice** au sens des tribunaux (l’institution).' },
        ]),
        S('🤔 Le problème — peut-il être juste de désobéir ?', [
          { t: 'list', c: [
            '**Thèse 1 — obéir à la loi** : la loi garantit l’ordre ; si chacun juge « sa » loi injuste, c’est l’anarchie.',
            '**Thèse 2 — désobéir à une loi injuste** : la **désobéissance civile** enfreint publiquement une loi au nom d’une justice supérieure (Rosa Parks, Gandhi, Thoreau).',
            '**La force fait-elle le droit ?** Pour **Rousseau**, non : « le plus fort n’est jamais assez fort pour être toujours le maître, s’il ne transforme sa force en droit ». Le droit doit **limiter** la force.',
          ] },
          { t: 'tip', h: 'Citation utile', c: '« Le plus fort n’est jamais assez fort pour être toujours le maître, s’il ne transforme sa force en droit. » (Rousseau)' },
        ]),
        S('🎓 Approfondir & au bac', [
          { t: 'list', c: [
            '**Égalité ou équité ?** Traiter tout le monde pareil peut être injuste (ex. un même impôt pour tous les revenus). L’équité **adapte** au cas.',
            '**Piège** : ne pas réduire la justice à la légalité — c’est justement l’écart entre les deux qui fait le sujet.',
          ] },
          { t: 'example', h: 'Sujet type', c: '« Est-il juste d’obéir à toutes les lois ? » → I. La loi rend la justice possible — II. Mais une loi peut être injuste (légal ≠ légitime) — III. La désobéissance civile, ou comment contester **au nom** de la justice.' },
          { t: 'tip', h: 'Repères mobilisables', c: 'Légal / légitime · égalité / équité · en théorie / en pratique.' },
        ]),
      ],
      essentiel: [
        'Distinction décisive : **légal / légitime** (conforme à la loi ≠ conforme à la justice).',
        '**Aristote** : égalité **arithmétique** (pareil pour tous) vs **proportionnelle** ; l’**équité** corrige la loi.',
        '**Rousseau** : la force seule ne fonde pas le droit ; désobéir peut être juste (désobéissance civile).',
      ],
      resources: [
        { label: 'France Culture — « Les chemins de la philosophie »', url: 'https://www.radiofrance.fr/franceculture/podcasts/les-chemins-de-la-philosophie', kind: 'link', note: 'Cherche « justice », « désobéissance civile ».' },
        { label: 'Lumni — Philosophie', url: 'https://www.lumni.fr/', kind: 'video', note: 'Cherche « la justice », « le droit ».' },
      ],
      games: [
        { id: 'philo-justice-flash', type: 'flashcard', title: 'Flashcards — La justice', icon: '🃏', cards: [
          { front: 'Légal / légitime', back: 'Conforme à la loi / conforme à la justice : une loi peut être l’un sans l’autre.' },
          { front: 'Égalité chez Aristote', back: 'Arithmétique (pareil pour tous) vs proportionnelle (à chacun selon…).' },
          { front: 'Équité', back: 'Corriger la loi générale quand elle est injuste dans un cas précis.' },
          { front: 'Désobéissance civile', back: 'Enfreindre publiquement une loi injuste au nom d’une justice supérieure.' },
          { front: 'Rousseau et la force', back: 'La force ne fait pas le droit : il faut transformer la force en droit.' },
        ] },
        { id: 'philo-justice-assoc', type: 'association', title: 'Association — Justice', icon: '🔗', pairs: [
          { left: 'Légal', right: 'Conforme à la loi' },
          { left: 'Légitime', right: 'Conforme à la justice' },
          { left: 'Aristote', right: 'Égalité proportionnelle / équité' },
          { left: 'Rousseau', right: 'La force ne fonde pas le droit' },
        ] },
        { id: 'philo-justice-qcm', type: 'qcm', title: 'QCM — La justice', icon: '❓', questions: [
          { q: '« Légal / légitime » oppose…', choices: ['conforme à la loi / conforme à la justice', 'le vrai / le faux', 'le beau / le laid', 'la cause / la fin'], answer: 0, explain: 'Une loi peut être légale sans être légitime.' },
          { q: 'L’équité consiste à…', choices: ['corriger la loi générale dans un cas particulier', 'appliquer la même règle à tous sans exception', 'supprimer toutes les lois', 'juger au hasard'], answer: 0, explain: 'L’équité adapte la justice au cas concret.' },
          { q: 'La désobéissance civile, c’est…', choices: ['enfreindre publiquement une loi jugée injuste', 'voler discrètement', 'ignorer toutes les règles', 'faire la loi soi-même'], answer: 0, explain: 'Un acte public au nom d’une justice supérieure.' },
          { q: 'Pour Rousseau, la force…', choices: ['ne suffit pas à fonder le droit', 'fait toujours le droit', 'est la justice même', 'n’existe pas'], answer: 0, explain: 'Le droit doit limiter la force, pas la servir.' },
        ] },
        { id: 'philo-justice-vf', type: 'vraifaux', title: 'Vrai / Faux — La justice', icon: '⚡', questions: [
          { statement: '« Légal » et « légitime » sont exactement synonymes.', answer: false, explain: 'Faux : une loi peut être légale sans être légitime.' },
          { statement: 'Traiter tout le monde à l’identique est toujours juste.', answer: false, explain: 'Faux : parfois l’équité impose d’adapter au cas.' },
          { statement: 'La désobéissance civile invoque une justice supérieure à la loi.', answer: true, explain: 'Vrai : c’est son principe même.' },
        ] },
      ],
    },

    // =====================================================================
    // LA LIBERTÉ
    // =====================================================================
    {
      id: 'philo-liberte',
      name: 'La liberté',
      short: 'La liberté',
      keywords: 'liberté autonomie licence déterminisme responsabilité Spinoza Sartre Kant Montesquieu libre arbitre',
      intro: '« Je suis libre de fumer si je veux » — mais le fumeur dépendant agit-il librement, ou son addiction décide-t-elle à sa place ? La liberté interroge ce que signifie vraiment agir par soi-même.',
      cours: [
        S('🕊️ Comprendre — la liberté par l’exemple (le fumeur)', [
          { t: 'example', h: 'Situation', c: '« Je suis libre de fumer si je veux. » Mais ce fumeur est dépendant à la nicotine : agit-il vraiment librement ?' },
          { t: 'list', c: [
            '**La distinction clé** : *liberté / licence*. La liberté n’est pas faire **n’importe quoi** au gré de ses envies (licence), mais l’**autonomie** : se donner à soi-même sa propre loi (**Kant**).',
            '**Liberté / déterminisme** : le déterminisme affirme que **tout a une cause**. Le fumeur « choisit »… ou est-il déterminé par son addiction ?',
            'Être libre suppose donc de ne pas être **esclave** de ses désirs immédiats.',
          ] },
          { t: 'tip', h: 'Réflexe', c: 'Distingue toujours « faire ce que je veux » (licence) et « être maître de moi » (autonomie).' },
        ]),
        S('🤔 Le problème — sommes-nous vraiment libres ?', [
          { t: 'list', c: [
            '**Thèse 1 — nous nous croyons libres à tort** : **Spinoza** : nous **ignorons les causes** qui nous déterminent, comme une pierre lancée qui se croirait libre de tomber.',
            '**Thèse 2 — nous sommes condamnés à être libres** : **Sartre** : il n’y a pas de nature humaine pour nous excuser ; nous sommes **responsables** de ce que nous faisons de nous-mêmes.',
            '**Liberté et loi** : la loi limite-t-elle ou **garantit**-elle la liberté ? « La liberté consiste à pouvoir faire tout ce que les lois permettent » (**Montesquieu**) — sans loi, règne la liberté du plus fort.',
          ] },
          { t: 'tip', h: 'Citation utile', c: '« L’homme est condamné à être libre. » (Sartre) — libre = responsable, sans excuse.' },
        ]),
        S('🎓 Approfondir & au bac', [
          { t: 'list', c: [
            '**Liberté et responsabilité** vont ensemble : si je suis libre, je réponds de mes actes.',
            '**Piège** : confondre liberté et absence totale de contrainte. Les règles que l’on se donne (autonomie) sont une forme supérieure de liberté.',
          ] },
          { t: 'example', h: 'Sujet type', c: '« Être libre, est-ce faire ce que l’on veut ? » → I. Oui, la liberté semble être l’absence de contrainte — II. Mais suivre ses désirs, c’est en être esclave (déterminisme) — III. La vraie liberté est l’**autonomie**, se donner sa propre loi.' },
          { t: 'tip', h: 'Repères mobilisables', c: 'Liberté / libre arbitre · contrainte / obligation · cause / fin.' },
        ]),
      ],
      essentiel: [
        'Distinction clé : **autonomie / licence** (se donner sa loi ≠ faire n’importe quoi).',
        '**Spinoza** : nous nous croyons libres car nous ignorons les causes ; **Sartre** : « condamnés à être libres », donc responsables.',
        '**Montesquieu** : la loi ne supprime pas la liberté, elle la **garantit**.',
      ],
      resources: [
        { label: 'France Culture — « Les chemins de la philosophie »', url: 'https://www.radiofrance.fr/franceculture/podcasts/les-chemins-de-la-philosophie', kind: 'link', note: 'Cherche « liberté », « déterminisme ».' },
        { label: 'Lumni — Philosophie', url: 'https://www.lumni.fr/', kind: 'video', note: 'Cherche « la liberté », « le libre arbitre ».' },
      ],
      games: [
        { id: 'philo-liberte-flash', type: 'flashcard', title: 'Flashcards — La liberté', icon: '🃏', cards: [
          { front: 'Autonomie / licence', back: 'Se donner sa propre loi (Kant) / faire n’importe quoi.' },
          { front: 'Déterminisme', back: 'Tout a une cause : interroge la réalité de notre liberté.' },
          { front: 'Spinoza', back: 'Nous nous croyons libres car nous ignorons les causes qui nous déterminent.' },
          { front: 'Sartre', back: '« L’homme est condamné à être libre » : responsable, sans excuse.' },
          { front: 'Montesquieu', back: 'La liberté, c’est pouvoir faire ce que les lois permettent.' },
        ] },
        { id: 'philo-liberte-assoc', type: 'association', title: 'Association — Liberté', icon: '🔗', pairs: [
          { left: 'Spinoza', right: 'On ignore les causes qui nous déterminent' },
          { left: 'Sartre', right: 'Condamné à être libre' },
          { left: 'Kant', right: 'Liberté = autonomie' },
          { left: 'Montesquieu', right: 'La loi garantit la liberté' },
        ] },
        { id: 'philo-liberte-qcm', type: 'qcm', title: 'QCM — La liberté', icon: '❓', questions: [
          { q: 'L’autonomie, c’est…', choices: ['se donner à soi-même sa propre loi', 'faire tout ce qui passe par la tête', 'obéir aveuglément', 'ne rien décider'], answer: 0, explain: 'Autonomie ≠ licence.' },
          { q: 'Spinoza explique que nous nous croyons libres parce que…', choices: ['nous ignorons les causes qui nous déterminent', 'nous sommes réellement sans cause', 'la liberté n’existe pas du tout', 'Dieu le veut'], answer: 0, explain: 'La pierre lancée se croirait libre de tomber.' },
          { q: '« L’homme est condamné à être libre » est de…', choices: ['Sartre', 'Platon', 'Descartes', 'Hegel'], answer: 0, explain: 'Formule de Sartre : liberté = responsabilité.' },
          { q: 'Pour Montesquieu, la liberté…', choices: ['consiste à faire ce que les lois permettent', 'est l’absence de toute loi', 'appartient au plus fort', 'est impossible'], answer: 0, explain: 'Sans loi, c’est la liberté du plus fort qui écrase les autres.' },
        ] },
        { id: 'philo-liberte-vf', type: 'vraifaux', title: 'Vrai / Faux — La liberté', icon: '⚡', questions: [
          { statement: 'Être libre, c’est nécessairement l’absence de toute règle.', answer: false, explain: 'Faux : l’autonomie (se donner sa loi) est une liberté supérieure.' },
          { statement: 'Pour Sartre, nous sommes responsables de ce que nous faisons de nous.', answer: true, explain: 'Vrai : pas de nature humaine pour nous excuser.' },
          { statement: 'La liberté peut être interrogée face au déterminisme.', answer: true, explain: 'Vrai : si tout a une cause, sommes-nous libres ?' },
        ] },
      ],
    },

    // =====================================================================
    // LA NATURE
    // =====================================================================
    {
      id: 'philo-nature',
      name: 'La nature',
      short: 'La nature',
      keywords: 'nature culture environnement Descartes Rousseau Jonas écologie inné acquis sophisme naturaliste',
      intro: 'Un barrage produit une électricité « propre » mais noie une vallée entière. Faut-il maîtriser la nature ou la respecter ? Et « c’est naturel » veut-il dire « c’est bien » ?',
      cours: [
        S('🌿 Comprendre — la nature par l’exemple (le barrage)', [
          { t: 'example', h: 'Situation', c: 'Un barrage hydroélectrique produit une énergie « propre »… mais détruit un écosystème entier. Faut-il « respecter la nature » ou la mettre à notre service ?' },
          { t: 'list', c: [
            '**Trois sens du mot « nature »** : ① ce qui n’est pas produit par l’homme (l’environnement) ; ② l’**essence** d’une chose (« la nature de… ») ; ③ l’**inné**, par opposition à l’**acquis** (par culture).',
            '**La distinction clé** : *nature / culture*. L’homme est un être de **culture** (langage, techniques, institutions) qui se distingue de l’animal.',
            '**Rousseau** oppose l’homme **naturel** et l’homme **social** (transformé par la vie en société).',
          ] },
          { t: 'tip', h: 'Réflexe', c: 'Précise toujours **quel sens** de « nature » est en jeu : l’environnement, l’essence, ou l’inné.' },
        ]),
        S('🤔 Le problème — maîtriser ou respecter la nature ?', [
          { t: 'list', c: [
            '**Thèse 1 — maîtriser** : **Descartes** veut nous rendre « comme **maîtres et possesseurs** de la nature » (pour la santé, le confort).',
            '**Thèse 2 — se responsabiliser** : **Hans Jonas** oppose un **principe responsabilité** : notre puissance technique menace la nature et les générations futures.',
            '**Piège du « naturel »** : passer du fait (naturel) à la valeur (bien) est un **sophisme naturaliste**. Beaucoup de comportements dits « naturels » sont en réalité **culturels**, donc modifiables.',
          ] },
          { t: 'tip', h: 'À retenir', c: '« C’est dans la nature humaine » sert souvent à justifier ce qui n’est qu’une **habitude culturelle**.' },
        ]),
        S('🎓 Approfondir & au bac', [
          { t: 'list', c: [
            '**Nature / culture** est le repère central : ce qui définit l’homme, c’est la culture (mais elle a une base naturelle).',
            '**Enjeu actuel** : l’écologie repose la question de notre rapport à la nature (maîtrise vs respect).',
          ] },
          { t: 'example', h: 'Sujet type', c: '« L’homme doit-il dominer la nature ? » → I. La technique nous invite à la maîtriser (Descartes) — II. Mais cette maîtrise crée des dangers — III. Une responsabilité nouvelle envers la nature (Jonas).' },
          { t: 'tip', h: 'Repères mobilisables', c: 'Nature / culture · cause / fin · en théorie / en pratique.' },
        ]),
      ],
      essentiel: [
        'Distinction clé : **nature / culture** (ce qui n’est pas de l’homme / ce qu’il produit et transmet).',
        '**Descartes** : maîtriser la nature ; **Jonas** : en être responsable (générations futures).',
        'Attention au **sophisme naturaliste** : « naturel » ne veut pas dire « juste ».',
      ],
      resources: [
        { label: 'France Culture — « Les chemins de la philosophie »', url: 'https://www.radiofrance.fr/franceculture/podcasts/les-chemins-de-la-philosophie', kind: 'link', note: 'Cherche « nature et culture », « écologie ».' },
        { label: 'Lumni — Philosophie', url: 'https://www.lumni.fr/', kind: 'video', note: 'Cherche « nature / culture ».' },
      ],
      games: [
        { id: 'philo-nature-flash', type: 'flashcard', title: 'Flashcards — La nature', icon: '🃏', cards: [
          { front: 'Nature / culture', back: 'Ce qui n’est pas produit par l’homme / ce qu’il produit et transmet.' },
          { front: 'Descartes', back: 'Nous rendre « comme maîtres et possesseurs de la nature ».' },
          { front: 'Jonas', back: 'Principe responsabilité : protéger la nature et les générations futures.' },
          { front: 'Sophisme naturaliste', back: 'Confondre le fait (naturel) et la valeur (bien).' },
          { front: 'Rousseau', back: 'Distingue l’homme naturel et l’homme social.' },
        ] },
        { id: 'philo-nature-assoc', type: 'association', title: 'Association — Nature', icon: '🔗', pairs: [
          { left: 'Descartes', right: 'Maîtres et possesseurs de la nature' },
          { left: 'Jonas', right: 'Principe responsabilité' },
          { left: 'Rousseau', right: 'Homme naturel / homme social' },
          { left: 'Sophisme naturaliste', right: 'Confondre fait et valeur' },
        ] },
        { id: 'philo-nature-qcm', type: 'qcm', title: 'QCM — La nature', icon: '❓', questions: [
          { q: 'La distinction centrale de la notion « nature » est…', choices: ['nature / culture', 'légal / légitime', 'croire / savoir', 'beau / agréable'], answer: 0, explain: 'C’est le repère clé pour définir l’homme.' },
          { q: '« Maîtres et possesseurs de la nature » est de…', choices: ['Descartes', 'Jonas', 'Sartre', 'Kant'], answer: 0, explain: 'Descartes assigne à la science une visée pratique.' },
          { q: 'Dire « c’est naturel donc c’est bien » est…', choices: ['un sophisme (confondre fait et valeur)', 'une démonstration valable', 'une loi scientifique', 'un repère'], answer: 0, explain: 'C’est le sophisme naturaliste.' },
          { q: 'Le principe responsabilité de Jonas concerne…', choices: ['les générations futures et l’environnement', 'les seuls contrats commerciaux', 'la logique pure', 'le beau'], answer: 0, explain: 'Notre puissance technique crée des devoirs nouveaux.' },
        ] },
        { id: 'philo-nature-vf', type: 'vraifaux', title: 'Vrai / Faux — La nature', icon: '⚡', questions: [
          { statement: 'Tout ce qui est « naturel » est forcément bon ou juste.', answer: false, explain: 'Faux : c’est le sophisme naturaliste.' },
          { statement: 'La culture distingue l’homme de l’animal.', answer: true, explain: 'Vrai : langage, techniques, institutions.' },
          { statement: 'Descartes proposait de renoncer à toute maîtrise de la nature.', answer: false, explain: 'Faux : il voulait au contraire nous en rendre maîtres.' },
        ] },
      ],
    },

    // =====================================================================
    // LA RELIGION
    // =====================================================================
    {
      id: 'philo-religion',
      name: 'La religion',
      short: 'La religion',
      keywords: 'religion foi raison sacré croire savoir Galilée Pascal Marx Freud Durkheim',
      intro: 'En 1633, Galilée est condamné pour avoir soutenu, preuves à l’appui, que la Terre tourne. Un cas d’école du rapport — parfois tendu — entre la foi et la raison.',
      cours: [
        S('✝️ Comprendre — la religion par l’exemple (Galilée)', [
          { t: 'example', h: 'Situation', c: 'En 1633, Galilée est condamné par l’Église pour avoir soutenu que la Terre tourne autour du Soleil. Conflit entre la foi et la raison scientifique.' },
          { t: 'list', c: [
            '**Définir** : la religion est un ensemble de **croyances et de pratiques** reliant l’homme au **sacré** (du latin *religare*, relier).',
            '**La distinction clé** : *croire / savoir*. **Croire**, c’est adhérer **sans preuve** (la foi) ; **savoir**, c’est tenir pour vrai **avec preuve** (démonstration, expérience).',
            'La foi n’est pas un savoir raté : c’est un **autre rapport** à la vérité.',
          ] },
          { t: 'tip', h: 'Réflexe', c: 'Ne réduis pas la religion à une « erreur » : distingue foi (croire) et science (savoir) sans les confondre.' },
        ]),
        S('🤔 Le problème — foi et raison s’opposent-elles ?', [
          { t: 'list', c: [
            '**Thèse 1 — elles se complètent** : **Pascal** : « le cœur a ses raisons que la raison ne connaît point » — la foi **dépasse** la raison sans la contredire.',
            '**Thèse 2 — regards critiques** : **Marx** (« opium du peuple » : une consolation qui endort la révolte) ; **Freud** (une **illusion** née d’un désir de protection).',
            '**Fonction sociale** : **Durkheim** montre que la religion est un puissant **lien social** qui soude le groupe.',
          ] },
          { t: 'tip', h: 'Citation utile', c: '« Le cœur a ses raisons que la raison ne connaît point. » (Pascal)' },
        ]),
        S('🎓 Approfondir & au bac', [
          { t: 'list', c: [
            '**Croire / savoir** est le repère central : il évite de juger la foi avec les critères de la science.',
            '**Piège** : opposer bêtement « religion = obscurantisme » et « science = vérité ». Le sujet demande de **nuancer**.',
          ] },
          { t: 'example', h: 'Sujet type', c: '« La foi est-elle contraire à la raison ? » → I. Elles semblent s’opposer (Galilée) — II. Mais elles n’ont pas le même objet (croire ≠ savoir) — III. La foi peut dépasser la raison (Pascal), la raison peut l’éclairer.' },
          { t: 'tip', h: 'Repères mobilisables', c: 'Croire / savoir · universel / particulier · objectif / subjectif.' },
        ]),
      ],
      essentiel: [
        'Distinction clé : **croire / savoir** (adhérer sans preuve / tenir pour vrai avec preuve).',
        '**Pascal** : la foi dépasse la raison sans la nier ; regards critiques de **Marx** et **Freud**.',
        '**Durkheim** : la religion est aussi un puissant **lien social**.',
      ],
      resources: [
        { label: 'France Culture — « Les chemins de la philosophie »', url: 'https://www.radiofrance.fr/franceculture/podcasts/les-chemins-de-la-philosophie', kind: 'link', note: 'Cherche « foi et raison », « religion ».' },
        { label: 'Lumni — Philosophie', url: 'https://www.lumni.fr/', kind: 'video', note: 'Cherche « la religion », « croire et savoir ».' },
      ],
      games: [
        { id: 'philo-religion-flash', type: 'flashcard', title: 'Flashcards — La religion', icon: '🃏', cards: [
          { front: 'Croire / savoir', back: 'Adhérer sans preuve (foi) / tenir pour vrai avec preuve.' },
          { front: 'Religion', back: 'Croyances et pratiques reliant l’homme au sacré (religare : relier).' },
          { front: 'Pascal', back: '« Le cœur a ses raisons que la raison ne connaît point. »' },
          { front: 'Marx', back: 'La religion, « opium du peuple » : une consolation qui endort.' },
          { front: 'Durkheim', back: 'La religion comme lien social, ciment du groupe.' },
        ] },
        { id: 'philo-religion-assoc', type: 'association', title: 'Association — Religion', icon: '🔗', pairs: [
          { left: 'Pascal', right: 'Les raisons du cœur' },
          { left: 'Marx', right: 'Opium du peuple' },
          { left: 'Freud', right: 'La religion comme illusion' },
          { left: 'Durkheim', right: 'La religion, lien social' },
        ] },
        { id: 'philo-religion-qcm', type: 'qcm', title: 'QCM — La religion', icon: '❓', questions: [
          { q: 'La distinction « croire / savoir » sépare…', choices: ['adhérer sans preuve / tenir pour vrai avec preuve', 'le beau / le laid', 'le légal / le légitime', 'la cause / la fin'], answer: 0, explain: 'Croire = foi ; savoir = preuve.' },
          { q: '« Le cœur a ses raisons… » est de…', choices: ['Pascal', 'Marx', 'Durkheim', 'Descartes'], answer: 0, explain: 'La foi dépasse la raison sans la nier.' },
          { q: 'Pour Marx, la religion est…', choices: ['« l’opium du peuple »', 'une science exacte', 'un simple loisir', 'une démonstration'], answer: 0, explain: 'Une consolation qui endort la révolte.' },
          { q: 'Durkheim insiste surtout sur la fonction…', choices: ['de lien social de la religion', 'purement individuelle', 'scientifique', 'esthétique'], answer: 0, explain: 'La religion soude le groupe.' },
        ] },
        { id: 'philo-religion-vf', type: 'vraifaux', title: 'Vrai / Faux — La religion', icon: '⚡', questions: [
          { statement: 'Croire et savoir, c’est exactement la même chose.', answer: false, explain: 'Faux : l’un est sans preuve, l’autre avec preuve.' },
          { statement: 'Pour Pascal, la foi peut dépasser la raison.', answer: true, explain: 'Vrai : « le cœur a ses raisons ».' },
          { statement: 'Durkheim voit dans la religion un lien social.', answer: true, explain: 'Vrai : elle soude le groupe.' },
        ] },
      ],
    },

    // =====================================================================
    // LA TECHNIQUE
    // =====================================================================
    {
      id: 'philo-technique',
      name: 'La technique',
      short: 'La technique',
      keywords: 'technique outil travail homo faber Bergson Heidegger Jonas Rousseau progrès moyen fin smartphone',
      intro: 'Le smartphone nous libère (tout savoir, partout) et nous asservit (dépendance, surveillance). Une seule technique, deux visages : nous libère-t-elle ou nous asservit-elle ?',
      cours: [
        S('🔧 Comprendre — la technique par l’exemple (le smartphone)', [
          { t: 'example', h: 'Situation', c: 'Le smartphone nous libère (accès à tout, joindre n’importe qui) et nous asservit (notifications, dépendance, surveillance des données).' },
          { t: 'list', c: [
            '**Définir** : la technique est l’ensemble des **procédés efficaces** par lesquels l’homme transforme la nature pour produire de l’**utile** (≠ l’art qui vise le beau, ≠ la science qui vise le vrai).',
            'L’homme est *homo faber*, l’animal qui **fabrique des outils** (**Bergson**).',
            '**La distinction clé** : *moyen / fin*. La technique est un **moyen** ; la question est **ce que nous en faisons**.',
          ] },
          { t: 'tip', h: 'Réflexe', c: 'La technique n’est ni bonne ni mauvaise en soi : interroge toujours son **usage** et sa **maîtrise**.' },
        ]),
        S('🤔 Le problème — nous libère-t-elle ou nous asservit-elle ?', [
          { t: 'list', c: [
            '**Thèse 1 — elle libère** : elle nous affranchit des contraintes naturelles (médecine, transports, moins de pénibilité).',
            '**Thèse 2 — elle asservit** : **Heidegger** : la technique moderne traite la nature (et l’homme) comme un simple **stock exploitable** ; **Jonas** alerte sur des risques inédits (nucléaire, climat).',
            '**Progrès technique = progrès moral ?** **Rousseau** en doute : les sciences et les arts n’ont pas rendu les hommes meilleurs.',
          ] },
          { t: 'tip', h: 'Citation utile', c: '« Maîtres et possesseurs de la nature » (Descartes) — l’ambition d’une technique qui libère.' },
        ]),
        S('🎓 Approfondir & au bac', [
          { t: 'list', c: [
            '**Moyen / fin** : un même outil (le couteau) **soigne ou tue** ; tout dépend de la fin poursuivie.',
            '**Piège** : croire que le progrès technique entraîne **automatiquement** le progrès humain.',
          ] },
          { t: 'example', h: 'Sujet type', c: '« La technique nous libère-t-elle ? » → I. Elle nous libère de la nature — II. Mais elle crée de nouvelles dépendances (Heidegger, Jonas) — III. Tout dépend de l’usage : rester maître de nos moyens.' },
          { t: 'tip', h: 'Repères mobilisables', c: 'Moyen / fin · cause / fin · en théorie / en pratique.' },
        ]),
      ],
      essentiel: [
        'Définir : la technique = procédés efficaces pour transformer la nature ; l’homme est *homo faber* (**Bergson**).',
        'Deux visages : elle **libère** de la nature / elle peut **asservir** (**Heidegger**, **Jonas**).',
        'Distinction **moyen / fin** : tout dépend de l’**usage** ; progrès technique ≠ progrès moral (**Rousseau**).',
      ],
      resources: [
        { label: 'France Culture — « Les chemins de la philosophie »', url: 'https://www.radiofrance.fr/franceculture/podcasts/les-chemins-de-la-philosophie', kind: 'link', note: 'Cherche « la technique », « progrès ».' },
        { label: 'Lumni — Philosophie', url: 'https://www.lumni.fr/', kind: 'video', note: 'Cherche « la technique », « le travail ».' },
      ],
      games: [
        { id: 'philo-technique-flash', type: 'flashcard', title: 'Flashcards — La technique', icon: '🃏', cards: [
          { front: 'Technique', back: 'Procédés efficaces pour transformer la nature et produire de l’utile.' },
          { front: 'Homo faber (Bergson)', back: 'L’homme, animal qui fabrique des outils.' },
          { front: 'Heidegger', back: 'La technique moderne traite tout comme un stock exploitable.' },
          { front: 'Jonas', back: 'La puissance technique crée des risques inédits → responsabilité.' },
          { front: 'Moyen / fin', back: 'La technique est un moyen : tout dépend de l’usage (le couteau soigne ou tue).' },
        ] },
        { id: 'philo-technique-assoc', type: 'association', title: 'Association — Technique', icon: '🔗', pairs: [
          { left: 'Bergson', right: 'Homo faber' },
          { left: 'Heidegger', right: 'La nature comme stock exploitable' },
          { left: 'Jonas', right: 'Responsabilité face aux risques' },
          { left: 'Rousseau', right: 'Le progrès ne rend pas meilleur' },
        ] },
        { id: 'philo-technique-qcm', type: 'qcm', title: 'QCM — La technique', icon: '❓', questions: [
          { q: 'La technique se définit d’abord comme…', choices: ['des procédés efficaces pour transformer la nature', 'la recherche du beau', 'la recherche du vrai', 'une croyance'], answer: 0, explain: 'Elle vise l’utile (≠ art, ≠ science).' },
          { q: '« Homo faber » (l’homme qui fabrique des outils) vient de…', choices: ['Bergson', 'Platon', 'Marx', 'Kant'], answer: 0, explain: 'Bergson caractérise l’intelligence par l’outil.' },
          { q: 'La distinction utile pour juger la technique est…', choices: ['moyen / fin', 'beau / laid', 'légal / légitime', 'inné / acquis'], answer: 0, explain: 'La technique est un moyen : tout dépend de la fin.' },
          { q: 'Que la technique nous asservisse est défendu notamment par…', choices: ['Heidegger et Jonas', 'Aristote seul', 'Kant', 'personne'], answer: 0, explain: 'Ils alertent sur l’exploitation et les risques.' },
        ] },
        { id: 'philo-technique-vf', type: 'vraifaux', title: 'Vrai / Faux — La technique', icon: '⚡', questions: [
          { statement: 'La technique est bonne ou mauvaise en elle-même.', answer: false, explain: 'Faux : tout dépend de l’usage (moyen / fin).' },
          { statement: 'Le progrès technique entraîne automatiquement le progrès moral.', answer: false, explain: 'Faux : Rousseau en doute.' },
          { statement: 'La technique peut nous libérer des contraintes naturelles.', answer: true, explain: 'Vrai : médecine, transports…' },
        ] },
      ],
    },

    // =====================================================================
    // LA VÉRITÉ
    // =====================================================================
    {
      id: 'philo-verite',
      name: 'La vérité',
      short: 'La vérité',
      keywords: 'vérité réalité opinion savoir démontrer doute Descartes Platon Leibniz caverne cogito',
      intro: '« La Terre est plate » fut longtemps une opinion répandue. Mais une vérité ne se décide pas à la majorité : elle se démontre ou se vérifie. Qu’est-ce donc que la vérité ?',
      cours: [
        S('🔍 Comprendre — la vérité par l’exemple (« la Terre est plate »)', [
          { t: 'example', h: 'Situation', c: '« La Terre est plate » fut longtemps une opinion partagée. Mais une vérité ne se décide pas au vote : elle se **démontre** ou se **vérifie**.' },
          { t: 'list', c: [
            '**Définir** : la vérité est l’**accord de la pensée avec son objet** (adéquation).',
            '**Vérité / réalité** : la réalité est ce qui **est** ; la vérité est une propriété de nos **jugements** sur le réel.',
            '**Opinion / savoir** : l’**opinion** (*doxa*) est une croyance non fondée ; le **savoir** est justifié.',
          ] },
          { t: 'tip', h: 'Réflexe', c: 'Distingue « c’est mon avis » (opinion) et « c’est démontré/vérifié » (savoir).' },
        ]),
        S('🤔 Le problème — peut-on tout démontrer ?', [
          { t: 'list', c: [
            '**Sortir de l’opinion** : **Platon** — l’allégorie de la **caverne** : passer des **ombres** (les apparences) à la **lumière** (les Idées, le vrai).',
            '**Les limites de la démonstration** : toute démonstration part d’**axiomes** indémontrables ; **Leibniz** distingue **vérités de raison** (logiques) et **vérités de fait** (vérifiées par l’expérience).',
            '**Le rôle du doute** : **Descartes** doute volontairement de tout (**doute méthodique**) pour trouver une première certitude : « je pense, donc je suis ».',
          ] },
          { t: 'tip', h: 'Citation utile', c: '« Je pense, donc je suis. » (Descartes) — la première vérité que le doute ne peut emporter.' },
        ]),
        S('🎓 Approfondir & au bac', [
          { t: 'list', c: [
            '**Opinion / savoir** est le repère central : une vérité ne dépend pas du nombre de gens qui y croient.',
            '**Piège** : « à chacun sa vérité » confond **goût** (subjectif) et **vérité** (qui prétend valoir pour tous).',
          ] },
          { t: 'example', h: 'Sujet type', c: '« Toutes les opinions se valent-elles ? » → I. Chacun a droit à son opinion — II. Mais l’opinion n’est pas le savoir (Platon) — III. La vérité se démontre ou se vérifie : toutes ne se valent pas.' },
          { t: 'tip', h: 'Repères mobilisables', c: 'Objectif / subjectif · croire / savoir · démontrer / prouver.' },
        ]),
      ],
      essentiel: [
        'Définir : vérité = **accord de la pensée avec son objet** ; à distinguer de la **réalité**.',
        '**Platon** (caverne) : sortir de l’**opinion** vers le **savoir** ; **Descartes** : doute méthodique → « je pense, donc je suis ».',
        '**Leibniz** : vérités de raison / vérités de fait ; on ne peut pas **tout** démontrer.',
      ],
      resources: [
        { label: 'France Culture — « Les chemins de la philosophie »', url: 'https://www.radiofrance.fr/franceculture/podcasts/les-chemins-de-la-philosophie', kind: 'link', note: 'Cherche « la vérité », « le doute ».' },
        { label: 'Lumni — Philosophie', url: 'https://www.lumni.fr/', kind: 'video', note: 'Cherche « la vérité », « l’allégorie de la caverne ».' },
      ],
      games: [
        { id: 'philo-verite-flash', type: 'flashcard', title: 'Flashcards — La vérité', icon: '🃏', cards: [
          { front: 'Vérité', back: 'Accord de la pensée avec son objet (adéquation).' },
          { front: 'Vérité / réalité', back: 'La réalité est ce qui est ; la vérité qualifie nos jugements.' },
          { front: 'Opinion / savoir', back: 'Croyance non fondée (doxa) / connaissance justifiée.' },
          { front: 'Platon (caverne)', back: 'Passer des ombres (apparences) à la lumière (le vrai).' },
          { front: 'Descartes', back: 'Doute méthodique → « je pense, donc je suis ».' },
        ] },
        { id: 'philo-verite-assoc', type: 'association', title: 'Association — Vérité', icon: '🔗', pairs: [
          { left: 'Platon', right: 'Allégorie de la caverne' },
          { left: 'Descartes', right: 'Doute méthodique / cogito' },
          { left: 'Leibniz', right: 'Vérités de raison / de fait' },
          { left: 'Opinion', right: 'Croyance non fondée (doxa)' },
        ] },
        { id: 'philo-verite-qcm', type: 'qcm', title: 'QCM — La vérité', icon: '❓', questions: [
          { q: 'La vérité se définit comme…', choices: ['l’accord de la pensée avec son objet', 'ce qui plaît au plus grand nombre', 'une simple opinion', 'ce qui est utile'], answer: 0, explain: 'Définition classique par adéquation.' },
          { q: 'L’allégorie de la caverne est de…', choices: ['Platon', 'Descartes', 'Leibniz', 'Kant'], answer: 0, explain: 'Sortir des ombres vers la lumière du vrai.' },
          { q: '« Je pense, donc je suis » vient de…', choices: ['Descartes', 'Platon', 'Pascal', 'Sartre'], answer: 0, explain: 'La première certitude après le doute méthodique.' },
          { q: 'Peut-on tout démontrer ?', choices: ['Non : toute démonstration part d’axiomes indémontrables', 'Oui, toujours', 'Seulement en histoire', 'Cela ne veut rien dire'], answer: 0, explain: 'Leibniz : vérités de raison / vérités de fait.' },
        ] },
        { id: 'philo-verite-vf', type: 'vraifaux', title: 'Vrai / Faux — La vérité', icon: '⚡', questions: [
          { statement: 'Une vérité dépend du nombre de gens qui y croient.', answer: false, explain: 'Faux : elle se démontre ou se vérifie.' },
          { statement: 'Le doute, chez Descartes, sert à atteindre une certitude.', answer: true, explain: 'Vrai : doute méthodique → cogito.' },
          { statement: 'Opinion et savoir sont synonymes.', answer: false, explain: 'Faux : l’opinion n’est pas justifiée, le savoir l’est.' },
        ] },
      ],
    },

    // =====================================================================
    // MÉTHODE & AUTEURS
    // =====================================================================
    {
      id: 'philo-methode',
      name: 'Méthode & auteurs',
      short: 'Méthode',
      keywords: 'dissertation explication de texte problématiser thèse antithèse dépassement auteurs citations Platon Descartes Kant Sartre',
      intro: 'Au bac, on choisit entre une dissertation et une explication de texte. Dans les deux cas, la note récompense la méthode et l’argumentation, pas la récitation. Voici comment structurer un devoir — et les auteurs à mobiliser.',
      cours: [
        S('✍️ La dissertation, étape par étape', [
          { t: 'p', c: 'La dissertation répond à **une question** par une argumentation **progressive**. On ne récite pas le cours : on **s’en sert** pour raisonner.' },
          { t: 'table', head: ['Étape', 'Ce qu’on fait'], rows: [
            ['1. Analyser', 'Décortiquer le sujet, **définir** chaque terme important'],
            ['2. Problématiser', 'Dégager le **paradoxe**, le vrai problème (la tension entre deux réponses)'],
            ['3. Plan', 'Construire un plan **progressif** (souvent thèse → antithèse → dépassement)'],
            ['4. Argumenter', 'Chaque partie = une idée + un **argument** + un **exemple** ou un **auteur**'],
            ['5. Conclure', 'Répondre **clairement** au problème, ouvrir sur une nouvelle question'],
          ] },
          { t: 'example', h: 'Introduction rédigée — « La technique nous libère-t-elle ? »', c: 'Chaque jour, le GPS ou la machine à laver nous épargnent mille efforts : la technique paraît libératrice. Pourtant, beaucoup se sentent esclaves de leurs écrans. La technique désigne les procédés efficaces par lesquels l’homme transforme la nature ; libérer, c’est affranchir d’une contrainte. Le problème : si la technique nous délivre des contraintes naturelles, ne crée-t-elle pas de nouvelles dépendances ? Nous verrons qu’elle libère de la nature, puis qu’elle peut asservir, enfin que tout dépend de l’usage.' },
          { t: 'warning', c: 'Les deux pièges qui plombent une copie : le **hors-sujet** (on n’a pas analysé le sujet) et la **récitation** (on déroule le cours sans problématiser). Reviens sans cesse à **la** question posée.' },
        ]),
        S('📖 L’explication de texte — l’exemple du « roseau pensant »', [
          { t: 'example', h: 'Le texte', c: '« L’homme n’est qu’un roseau, le plus faible de la nature ; mais c’est un roseau pensant. » (Pascal, Pensées)' },
          { t: 'list', c: [
            '**① Dégager la thèse** : la grandeur de l’homme ne tient pas à sa force, mais à sa **pensée**.',
            '**② Suivre les mouvements** : (a) « le plus faible de la nature » = la fragilité physique ; (b) le « **mais** » renverse tout : « roseau **pensant** » = la pensée fait sa dignité.',
            '**③ Expliquer** : Pascal oppose la faiblesse du **corps** à la puissance de l’**esprit** ; l’homme est supérieur à l’univers car il **le sait**.',
            '**④ Discuter** : où placer la dignité humaine ? Dans la conscience plutôt que dans la force.',
          ] },
          { t: 'tip', h: 'Réflexe', c: 'Repère les mots de liaison (« mais », « donc », « car ») : ils marquent les mouvements et la logique du texte.' },
        ]),
        S('👤 Les auteurs & les citations à mobiliser', [
          { t: 'table', head: ['Auteur', 'Idée clé', 'Notions'], rows: [
            ['Platon', 'Allégorie de la caverne : des apparences à la vérité', 'Vérité, art'],
            ['Aristote', 'La justice comme équité ; l’homme « animal politique »', 'Justice'],
            ['Descartes', 'Doute méthodique, cogito, maîtrise de la nature', 'Vérité, technique'],
            ['Pascal', 'Le « roseau pensant » ; les raisons du cœur', 'Religion, nature'],
            ['Rousseau', 'Nature / culture ; le contrat social', 'Justice, liberté'],
            ['Kant', 'L’autonomie ; le jugement de goût', 'Liberté, art'],
            ['Sartre', 'L’existence précède l’essence : liberté-responsabilité', 'Liberté'],
          ] },
          { t: 'tip', h: 'Stratégie', c: 'Mieux vaut **quelques auteurs bien maîtrisés** (une idée, un exemple chacun) que dix noms récités.' },
        ]),
      ],
      essentiel: [
        '**Dissertation** : analyser → problématiser → plan progressif (thèse / antithèse / dépassement) → argumenter → conclure.',
        '**Explication de texte** : dégager la **thèse**, suivre les **mouvements**, expliquer, puis discuter.',
        'Deux pièges : le **hors-sujet** et la **récitation**. On mobilise **quelques auteurs** bien maîtrisés.',
      ],
      resources: [
        { label: 'Éduscol — programme & sujets de philosophie (voie techno)', url: 'https://eduscol.education.fr/', kind: 'doc', note: 'Le programme officiel et des exemples de sujets.' },
        { label: 'France Culture — « Les chemins de la philosophie »', url: 'https://www.radiofrance.fr/franceculture/podcasts/les-chemins-de-la-philosophie', kind: 'link', note: 'Pour nourrir ses exemples et ses auteurs.' },
        { label: 'Lumni — méthode de la dissertation et du texte', url: 'https://www.lumni.fr/', kind: 'video', note: 'Cherche « dissertation philosophie », « explication de texte ».' },
      ],
      games: [
        { id: 'philo-methode-ordre', type: 'ordre', title: 'Remise en ordre — La dissertation', icon: '🔢', instruction: 'Remets les étapes de la dissertation dans l’ordre.', steps: [
          'Analyser le sujet',
          'Définir les termes',
          'Problématiser (dégager le paradoxe)',
          'Construire un plan progressif',
          'Argumenter (idée + argument + exemple/auteur)',
          'Conclure',
        ], explain: 'On analyse, on définit, on problématise, on planifie, on argumente, puis on conclut.' },
        { id: 'philo-methode-ordre2', type: 'ordre', title: 'Remise en ordre — L’explication de texte', icon: '🔢', instruction: 'Remets les étapes de l’explication de texte dans l’ordre.', steps: [
          'Dégager la thèse du texte',
          'Repérer les mouvements (parties)',
          'Expliquer le raisonnement de l’auteur',
          'Éclairer les mots et les exemples',
          'Discuter la portée et les enjeux',
        ], explain: 'Thèse → mouvements → explication → éclairage → discussion.' },
        { id: 'philo-methode-tri', type: 'tri', title: 'Tri — Auteurs par période', icon: '🗂️', instruction: 'Classe chaque auteur dans sa période.', categories: [
          { id: 'ant', label: 'Antiquité / Moyen Âge' },
          { id: 'mod', label: 'Moderne' },
          { id: 'con', label: 'Contemporaine' },
        ], items: [
          { text: 'Platon', cat: 'ant' },
          { text: 'Aristote', cat: 'ant' },
          { text: 'Descartes', cat: 'mod' },
          { text: 'Kant', cat: 'mod' },
          { text: 'Sartre', cat: 'con' },
          { text: 'Arendt', cat: 'con' },
        ] },
        { id: 'philo-methode-auteurs', type: 'association', title: 'Association — Auteur ↔ idée clé', icon: '🔗', pairs: [
          { left: 'Platon', right: 'Allégorie de la caverne' },
          { left: 'Descartes', right: 'Doute méthodique / cogito' },
          { left: 'Rousseau', right: 'Nature / culture ; contrat social' },
          { left: 'Kant', right: 'Autonomie ; jugement de goût' },
          { left: 'Sartre', right: 'L’existence précède l’essence' },
        ] },
        { id: 'philo-methode-cit', type: 'flashcard', title: 'Flashcards — Citations essentielles', icon: '🃏', cards: [
          { front: '« L’homme est condamné à être libre. »', back: 'Sartre — la liberté et la responsabilité.' },
          { front: '« Je pense, donc je suis. »', back: 'Descartes — la vérité et le cogito.' },
          { front: '« Maîtres et possesseurs de la nature. »', back: 'Descartes — la technique et la nature.' },
          { front: '« Le cœur a ses raisons… »', back: 'Pascal — la religion, foi et raison.' },
          { front: '« L’art ne reproduit pas le visible, il rend visible. »', back: 'Klee — l’art révèle.' },
        ] },
        { id: 'philo-methode-qcm', type: 'qcm', title: 'QCM — Méthode & auteurs', icon: '❓', questions: [
          { q: 'Le cœur de l’introduction d’une dissertation, c’est…', choices: ['problématiser (dégager le paradoxe)', 'donner la conclusion', 'réciter le cours', 'citer dix auteurs'], answer: 0, explain: 'Après avoir défini les termes, on problématise.' },
          { q: 'Un plan classique de dissertation est…', choices: ['thèse / antithèse / dépassement', 'intro / développement seulement', 'liste de définitions', 'résumé du texte'], answer: 0, explain: 'Plan progressif dialectique.' },
          { q: 'Pour l’explication de texte, on commence par…', choices: ['dégager la thèse du texte', 'donner son avis personnel', 'compter les lignes', 'résumer le programme'], answer: 0, explain: 'On suit d’abord la pensée de l’auteur.' },
          { q: 'Descartes appartient à la période…', choices: ['moderne', 'antique', 'contemporaine', 'médiévale'], answer: 0, explain: 'Avec Pascal, Rousseau, Kant.' },
          { q: 'Le « dépassement » (3ᵉ partie) consiste à…', choices: ['résoudre la tension par une idée plus juste', 'répéter la thèse', 'abandonner le sujet', 'donner un avis sans argument'], answer: 0, explain: 'Il articule thèse et antithèse.' },
        ] },
        { id: 'philo-methode-vf', type: 'vraifaux', title: 'Vrai / Faux — Méthode', icon: '⚡', questions: [
          { statement: 'La dissertation consiste à réciter le cours.', answer: false, explain: 'Faux : elle argumente pour répondre à un problème.' },
          { statement: 'Le hors-sujet et la récitation sont deux pièges majeurs.', answer: true, explain: 'Vrai : reviens toujours à la question posée.' },
          { statement: 'Il faut citer le plus d’auteurs possible.', answer: false, explain: 'Faux : quelques auteurs bien maîtrisés suffisent.' },
        ] },
      ],
    },
  ],
}
