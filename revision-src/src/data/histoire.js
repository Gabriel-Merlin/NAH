// HISTOIRE-GÉOGRAPHIE — 3 thèmes d'histoire + 3 de géographie (contrôle continu).
export const histoire = {
  id: 'histoire-geo',
  name: 'Histoire-Géographie',
  short: 'Histoire-Géo',
  icon: '🗺️',
  color: '#0891b2',
  tagline: 'Repères, analyse de documents, réponses organisées.',
  chapters: [
    {
      id: 'hg-h1',
      name: 'Histoire — Totalitarismes et Seconde Guerre mondiale',
      short: 'Totalitarismes & 2de GM',
      keywords: 'totalitarisme nazisme stalinisme guerre d’anéantissement Shoah génocide Vichy Résistance 1939 1945',
      cours: [
        {
          h: 'Une guerre d’anéantissement (1939-1945)',
          points: [
            'Idéologies totalitaires : nazisme, stalinisme.',
            '**Guerre d’anéantissement** : violence de masse visant aussi les civils (bombardements, famines).',
            '**Génocide des Juifs et des Tsiganes (Shoah)** : extermination planifiée et industrialisée.',
            'La France dans la guerre : Vichy, Résistance, Libération.',
            'Bilan humain sans précédent (~50-60 millions de morts) ; usage de l’arme nucléaire (Hiroshima, Nagasaki).',
          ],
        },
      ],
      formulas: ['Repère : 1939-1945 · Shoah = génocide planifié et industrialisé'],
      games: [
        {
          id: 'hg-h1-qcm',
          type: 'qcm',
          title: 'QCM — Totalitarismes & 2de GM',
          icon: '❓',
          questions: [
            {
              q: 'La Seconde Guerre mondiale se déroule…',
              choices: ['de 1939 à 1945', 'de 1914 à 1918', 'de 1945 à 1991', 'de 1929 à 1939'],
              answer: 0,
              explain: 'La Seconde Guerre mondiale : 1939-1945.',
            },
            {
              q: 'La Shoah désigne…',
              choices: [
                'le génocide des Juifs (et des Tsiganes)',
                'une bataille navale',
                'un traité de paix',
                'une crise économique',
              ],
              answer: 0,
              explain: 'La Shoah est le génocide des Juifs et des Tsiganes, planifié et industrialisé.',
            },
            {
              q: 'Une « guerre d’anéantissement » vise…',
              choices: [
                'à détruire des populations entières, pas seulement des armées',
                'uniquement les soldats ennemis',
                'à conclure vite un armistice',
                'à protéger les civils',
              ],
              answer: 0,
              explain: 'Elle confond front et arrière et prend pour cible les civils (violence de masse).',
            },
            {
              q: 'En France, le régime qui collabore est…',
              choices: ['le régime de Vichy', 'la IIIe République restaurée', 'la Résistance', 'la Commune'],
              answer: 0,
              explain: 'Le régime de Vichy collabore ; la Résistance combat l’occupant.',
            },
          ],
        },
        {
          id: 'hg-h1-flash',
          type: 'flashcard',
          title: 'Flashcards — Repères',
          icon: '🃏',
          cards: [
            { front: 'Totalitarisme', back: 'Régime qui contrôle tous les aspects de la société (nazisme, stalinisme).' },
            { front: 'Guerre d’anéantissement', back: 'Guerre visant la destruction de populations entières.' },
            { front: 'Shoah', back: 'Génocide des Juifs (et des Tsiganes) planifié et industrialisé.' },
            { front: 'Vichy / Résistance', back: 'Vichy collabore ; la Résistance lutte contre l’occupant.' },
          ],
        },
        {
          id: 'hg-h1-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'La Shoah est un génocide planifié et industrialisé.', answer: true, explain: 'Vrai : ghettos, Einsatzgruppen, camps d’extermination.' },
            { statement: 'La guerre d’anéantissement épargne les civils.', answer: false, explain: 'Faux : elle vise justement les populations civiles.' },
            { statement: 'L’arme nucléaire a été utilisée (Hiroshima, Nagasaki).', answer: true, explain: 'Vrai, en 1945, marquant la fin de la guerre dans le Pacifique.' },
          ],
        },
      ],
    },
    {
      id: 'hg-h2',
      name: 'Histoire — Du monde bipolaire au monde multipolaire',
      short: 'Bipolaire → multipolaire',
      keywords: 'guerre froide blocs dissuasion décolonisation URSS 1991 multipolaire',
      cours: [
        {
          h: '1945 à nos jours',
          points: [
            'Guerre froide : deux blocs, dissuasion, crises.',
            'Décolonisation.',
            'Fin de l’URSS (**1991**), passage à un monde multipolaire.',
          ],
        },
      ],
      formulas: ['Repère : fin de l’URSS en 1991'],
      games: [
        {
          id: 'hg-h2-qcm',
          type: 'qcm',
          title: 'QCM — Guerre froide & après',
          icon: '❓',
          questions: [
            {
              q: 'La Guerre froide oppose…',
              choices: ['deux blocs (Est/Ouest)', 'la France et l’Allemagne', 'trois empires coloniaux', 'l’OMC et l’ONU'],
              answer: 0,
              explain: 'Elle oppose le bloc de l’Ouest et le bloc de l’Est.',
            },
            {
              q: 'L’URSS disparaît en…',
              choices: ['1991', '1945', '1962', '1989'],
              answer: 0,
              explain: 'La fin de l’URSS date de 1991.',
            },
            {
              q: 'Le processus par lequel les colonies accèdent à l’indépendance s’appelle…',
              choices: ['la décolonisation', 'la mondialisation', 'la dissuasion', 'la métropolisation'],
              answer: 0,
              explain: 'La décolonisation marque l’indépendance des anciennes colonies.',
            },
            {
              q: 'Après 1991, le monde devient…',
              choices: ['multipolaire', 'bipolaire', 'unipolaire figé', 'sans États'],
              answer: 0,
              explain: 'On passe d’un monde bipolaire à un monde multipolaire.',
            },
          ],
        },
        {
          id: 'hg-h2-flash',
          type: 'flashcard',
          title: 'Flashcards — Repères',
          icon: '🃏',
          cards: [
            { front: 'Guerre froide', back: 'Affrontement indirect Est/Ouest (blocs, dissuasion, crises).' },
            { front: 'Dissuasion', back: 'Stratégie d’équilibre par la menace (nucléaire).' },
            { front: 'Décolonisation', back: 'Accès à l’indépendance des anciennes colonies.' },
            { front: '1991', back: 'Fin de l’URSS → monde multipolaire.' },
          ],
        },
        {
          id: 'hg-h2-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'La Guerre froide est un affrontement direct entre les deux Grands.', answer: false, explain: 'Faux : c’est un affrontement surtout indirect (par blocs interposés).' },
            { statement: 'La fin de l’URSS ouvre un monde multipolaire.', answer: true, explain: 'Vrai : après 1991.' },
          ],
        },
      ],
    },
    {
      id: 'hg-h3',
      name: 'Histoire — La France depuis 1945',
      short: 'La France depuis 1945',
      keywords: 'reconstruction construction européenne rôle international France 1945',
      cours: [
        {
          h: 'Une nouvelle place dans le monde',
          points: [
            'Reconstruction après-guerre.',
            'Construction européenne.',
            'Rôle international de la France.',
          ],
        },
      ],
      formulas: ['Thème conclusif : la France, une nouvelle place dans le monde (1945 → nos jours)'],
      games: [
        {
          id: 'hg-h3-qcm',
          type: 'qcm',
          title: 'QCM — La France depuis 1945',
          icon: '❓',
          questions: [
            {
              q: 'Après 1945, la France connaît d’abord une phase de…',
              choices: ['reconstruction', 'décolonisation achevée', 'récession totale', 'guerre civile'],
              answer: 0,
              explain: 'L’après-guerre est marqué par la reconstruction.',
            },
            {
              q: 'La France participe activement à…',
              choices: ['la construction européenne', 'la création de l’URSS', 'la colonisation de l’Amérique', 'la Guerre de Cent Ans'],
              answer: 0,
              explain: 'La France est un moteur de la construction européenne.',
            },
            {
              q: 'Ce thème est qualifié de…',
              choices: ['thème conclusif', 'thème introductif', 'hors-programme', 'sujet d’étude facultatif'],
              answer: 0,
              explain: 'C’est le thème conclusif de la partie histoire.',
            },
          ],
        },
        {
          id: 'hg-h3-flash',
          type: 'flashcard',
          title: 'Flashcards — Repères',
          icon: '🃏',
          cards: [
            { front: 'Reconstruction', back: 'Redressement économique et matériel de la France après 1945.' },
            { front: 'Construction européenne', back: 'Processus d’intégration auquel la France participe activement.' },
            { front: 'Rôle international', back: 'La France cherche une nouvelle place dans le monde depuis 1945.' },
          ],
        },
        {
          id: 'hg-h3-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'La France a participé à la construction européenne.', answer: true, explain: 'Vrai : elle en est l’un des moteurs.' },
            { statement: 'L’après-1945 commence par une phase de reconstruction.', answer: true, explain: 'Vrai : reconstruction économique et matérielle.' },
          ],
        },
      ],
    },
    {
      id: 'hg-g1',
      name: 'Géographie — Mers et océans au cœur de la mondialisation',
      short: 'Mers et océans',
      keywords: 'maritimisation routes maritimes façades interfaces Suez Panama Malacca ressources tensions conteneurisation',
      cours: [
        {
          h: 'Support des échanges',
          points: [
            'Environ **80 % du commerce mondial** transite par voie maritime.',
            'Conteneurisation ; grandes routes (Suez, Panama, Malacca) ; façades maritimes majeures.',
            'C’est la **maritimisation** des économies.',
          ],
        },
        {
          h: 'Espaces d’enjeux et de tensions',
          points: [
            'Ressources (halieutiques, énergétiques, minérales), câbles sous-marins (données).',
            'Zones de piraterie et de rivalités (mer de Chine méridionale).',
            'Enjeux environnementaux (pollution, surpêche).',
          ],
        },
      ],
      formulas: ['≈ 80 % du commerce mondial par voie maritime'],
      games: [
        {
          id: 'hg-g1-qcm',
          type: 'qcm',
          title: 'QCM — Mers et océans',
          icon: '❓',
          questions: [
            {
              q: 'Quelle part du commerce mondial transite par la mer ?',
              choices: ['environ 80 %', 'environ 20 %', 'environ 50 %', 'moins de 5 %'],
              answer: 0,
              explain: 'Environ 80 % du commerce mondial transite par voie maritime.',
            },
            {
              q: 'Le fait que les économies dépendent de plus en plus de la mer s’appelle…',
              choices: ['la maritimisation', 'la métropolisation', 'la désindustrialisation', 'la dissuasion'],
              answer: 0,
              explain: 'La maritimisation : rôle croissant de la mer dans les économies.',
            },
            {
              q: 'Suez, Panama et Malacca sont des…',
              choices: ['passages/routes maritimes stratégiques', 'façades atlantiques', 'câbles sous-marins', 'ports de pêche mineurs'],
              answer: 0,
              explain: 'Ce sont de grands passages stratégiques du commerce maritime.',
            },
            {
              q: 'Une zone de fortes rivalités géopolitiques maritimes est…',
              choices: ['la mer de Chine méridionale', 'le lac Léman', 'la mer d’Aral', 'la mer Morte'],
              answer: 0,
              explain: 'La mer de Chine méridionale concentre tensions et rivalités.',
            },
          ],
        },
        {
          id: 'hg-g1-flash',
          type: 'flashcard',
          title: 'Flashcards — Mers et océans',
          icon: '🃏',
          cards: [
            { front: 'Maritimisation', back: 'Dépendance croissante des économies vis-à-vis de la mer.' },
            { front: 'Conteneurisation', back: 'Transport standardisé par conteneurs qui a massifié les échanges.' },
            { front: 'Façade maritime', back: 'Littoral équipé de ports ouvrant sur les échanges mondiaux.' },
            { front: 'Câbles sous-marins', back: 'Infrastructures qui font transiter les données mondiales.' },
          ],
        },
        {
          id: 'hg-g1-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'Les mers concentrent des enjeux de ressources et de données.', answer: true, explain: 'Vrai : pêche, énergie, minerais, câbles sous-marins.' },
            { statement: 'La surpêche est un enjeu environnemental des océans.', answer: true, explain: 'Vrai, avec la pollution.' },
            { statement: 'Le commerce maritime est marginal dans la mondialisation.', answer: false, explain: 'Faux : ~80 % du commerce mondial passe par la mer.' },
          ],
        },
      ],
    },
    {
      id: 'hg-g2',
      name: 'Géographie — Des territoires inégalement intégrés',
      short: 'Territoires & mondialisation',
      keywords: 'métropolisation aires de puissance territoires en marge acteurs mondialisation',
      cours: [
        {
          h: 'Intégration inégale',
          points: [
            '**Métropolisation** : concentration des activités dans les grandes villes.',
            'Aires de puissance vs territoires en marge.',
            'Rôle des acteurs (États, firmes, organisations).',
          ],
        },
      ],
      formulas: ['Métropolisation = concentration des hommes et des activités dans les métropoles'],
      games: [
        {
          id: 'hg-g2-qcm',
          type: 'qcm',
          title: 'QCM — Territoires & mondialisation',
          icon: '❓',
          questions: [
            {
              q: 'La métropolisation désigne…',
              choices: [
                'la concentration des activités dans les grandes villes',
                'la disparition des villes',
                'l’exode vers les campagnes',
                'la fermeture des ports',
              ],
              answer: 0,
              explain: 'La métropolisation concentre hommes et activités dans les métropoles.',
            },
            {
              q: 'Les territoires « en marge » sont…',
              choices: [
                'faiblement intégrés à la mondialisation',
                'les mieux connectés',
                'toujours les plus riches',
                'sans population',
              ],
              answer: 0,
              explain: 'Ils sont peu intégrés, à l’écart des flux mondiaux.',
            },
            {
              q: 'Parmi les acteurs de la mondialisation :',
              choices: ['les firmes multinationales et les États', 'uniquement les touristes', 'seulement les agriculteurs', 'aucun acteur humain'],
              answer: 0,
              explain: 'États, firmes multinationales et organisations structurent la mondialisation.',
            },
          ],
        },
        {
          id: 'hg-g2-flash',
          type: 'flashcard',
          title: 'Flashcards — Territoires',
          icon: '🃏',
          cards: [
            { front: 'Métropolisation', back: 'Concentration des hommes et des activités dans les métropoles.' },
            { front: 'Aire de puissance', back: 'Espace majeur qui domine l’économie mondiale.' },
            { front: 'Territoire en marge', back: 'Espace faiblement intégré aux flux mondiaux.' },
          ],
        },
        {
          id: 'hg-g2-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'Tous les territoires sont intégrés de la même façon à la mondialisation.', answer: false, explain: 'Faux : l’intégration est très inégale (métropoles vs marges).' },
            { statement: 'Les firmes multinationales sont des acteurs de la mondialisation.', answer: true, explain: 'Vrai, aux côtés des États et des organisations.' },
          ],
        },
      ],
    },
    {
      id: 'hg-g3',
      name: 'Géographie — La France dans l’UE et la mondialisation',
      short: 'La France dans l’UE',
      keywords: 'France UE régions rayonnement Kourou inégalités régionales atouts contrastes',
      cours: [
        {
          h: 'Atouts et contrastes',
          points: [
            'Atouts et contrastes des territoires français.',
            'Rayonnement (ex. : centre spatial de **Kourou**).',
            'Inégalités régionales.',
          ],
        },
      ],
      formulas: ['Thème conclusif : la France et ses régions dans l’UE et la mondialisation'],
      games: [
        {
          id: 'hg-g3-qcm',
          type: 'qcm',
          title: 'QCM — La France dans l’UE',
          icon: '❓',
          questions: [
            {
              q: 'Kourou est un exemple de rayonnement français grâce à…',
              choices: ['son centre spatial', 'sa production de vin', 'son port pétrolier', 'sa station de ski'],
              answer: 0,
              explain: 'Le centre spatial de Kourou (Guyane) illustre le rayonnement de la France.',
            },
            {
              q: 'Les territoires français présentent…',
              choices: ['des atouts mais aussi des inégalités régionales', 'une parfaite égalité partout', 'aucun atout', 'aucune ville'],
              answer: 0,
              explain: 'Le territoire combine atouts, contrastes et inégalités régionales.',
            },
            {
              q: 'La France s’inscrit dans…',
              choices: ["l'Union européenne et la mondialisation", 'un isolement complet', 'le seul continent américain', 'aucune organisation'],
              answer: 0,
              explain: 'Elle est intégrée à l’UE et à la mondialisation.',
            },
          ],
        },
        {
          id: 'hg-g3-flash',
          type: 'flashcard',
          title: 'Flashcards — France & UE',
          icon: '🃏',
          cards: [
            { front: 'Kourou', back: 'Centre spatial guyanais, vitrine du rayonnement français.' },
            { front: 'Inégalités régionales', back: 'Écarts de développement entre les régions françaises.' },
            { front: 'Rayonnement', back: 'Influence de la France (culturelle, scientifique, économique).' },
          ],
        },
        {
          id: 'hg-g3-vf',
          type: 'vraifaux',
          title: 'Vrai / Faux rapide',
          icon: '⚡',
          questions: [
            { statement: 'La France ne connaît aucune inégalité entre ses régions.', answer: false, explain: 'Faux : les inégalités régionales existent bel et bien.' },
            { statement: 'Kourou illustre le rayonnement scientifique de la France.', answer: true, explain: 'Vrai : centre spatial européen en Guyane.' },
          ],
        },
      ],
    },
  ],
}
