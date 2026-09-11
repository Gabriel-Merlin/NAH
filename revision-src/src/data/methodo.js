// Méthodologie par type d'épreuve du bac STMG, avec un plan pas-à-pas et un
// corrigé-type (exemple rédigé). Affiché sur la page /methodo.
export const METHODO = [
  {
    id: 'etude-cas', title: 'Étude de cas (épreuve de spécialité)', icon: '🏢', color: '#0f766e',
    intro: "L'épreuve écrite de spécialité s'appuie sur une entreprise réelle et un dossier documentaire. On analyse une situation de gestion et on répond à des questions, parfois avec des calculs.",
    steps: [
      { h: 'Lire la question AVANT les documents', c: 'Repère précisément ce qu’on te demande : analyser, calculer, proposer, justifier.' },
      { h: 'Explorer le dossier', c: 'Chaque document a une utilité. Surligne les chiffres et les mots-clés, note à quelle question il se rattache.' },
      { h: 'Mobiliser le cours', c: 'Relie la situation aux notions du programme. Le correcteur attend le vocabulaire exact (VA, BFR, PDM…).' },
      { h: 'Rédiger une réponse structurée', c: 'Une idée = un paragraphe : affirmation, puis justification par le document ET la notion du cours.' },
      { h: 'Soigner les calculs', c: 'Pose la formule, remplace par les valeurs, donne le résultat AVEC l’unité, puis interprète-le.' },
    ],
    example: { h: 'Exemple — « L’entreprise doit-elle accepter cette commande ? »', c: '1) Calcule la marge sur coût variable dégagée par la commande. 2) Compare-la aux coûts fixes spécifiques éventuels. 3) Conclus : si la MCV additionnelle couvre ces coûts, la commande est rentable — sinon non. Termine par une recommandation claire.' },
  },
  {
    id: 'question-gestion', title: 'Question de gestion argumentée', icon: '✍️', color: '#7c3aed',
    intro: 'Certaines questions demandent une réponse rédigée et argumentée, pas seulement un calcul.',
    steps: [
      { h: 'Reformule la question', c: 'Montre que tu l’as comprise et délimite le sujet.' },
      { h: 'Annonce ta réponse (ta thèse)', c: 'En une phrase, dis où tu vas.' },
      { h: 'Développe 2 à 3 arguments', c: 'Chaque argument est illustré par un document ou un exemple concret.' },
      { h: 'Nuance', c: '« Cependant… » : montre ton esprit critique, les limites.' },
      { h: 'Conclus', c: 'Réponds clairement et directement à la question posée.' },
    ],
    example: { h: 'Exemple — « La fidélisation est-elle plus rentable que la conquête ? »', c: 'Thèse : oui, le plus souvent. Argument 1 : le coût d’acquisition d’un nouveau client est supérieur (chiffre du document). Argument 2 : un client fidèle achète plus et recommande la marque (valeur à vie). Nuance : la conquête reste nécessaire pour compenser l’attrition. Conclusion : un équilibre entre les deux, avec une priorité à la fidélisation.' },
  },
  {
    id: 'cas-droit', title: 'Cas pratique juridique (Droit)', icon: '⚖️', color: '#2b6cb0',
    intro: 'En droit, on résout un litige avec un raisonnement en syllogisme juridique.',
    steps: [
      { h: 'Les faits', c: 'Résume la situation en termes juridiques (qui, quoi, quel problème), sans recopier l’énoncé.' },
      { h: 'Le problème de droit', c: 'Formule-le sous forme de question juridique : « Un salarié peut-il… ? ».' },
      { h: 'La règle de droit (majeure)', c: 'Énonce la règle applicable : principe, article, jurisprudence.' },
      { h: 'L’application (mineure)', c: 'Applique la règle aux faits de l’espèce, point par point.' },
      { h: 'La conclusion', c: 'Réponds au problème de droit posé.' },
    ],
    example: { h: 'Exemple — rupture anticipée d’un CDD', c: 'Faits : un employeur rompt un CDD avant le terme, sans faute du salarié. Problème : la rupture anticipée d’un CDD est-elle possible ? Règle : un CDD ne peut être rompu par anticipation que dans des cas limités (faute grave, force majeure, accord des parties). Application : aucun de ces cas ici. Conclusion : la rupture est irrégulière ; le salarié peut obtenir des dommages-intérêts.' },
  },
  {
    id: 'raisonnement-eco', title: 'Raisonnement économique (A-E-I)', icon: '📈', color: '#ea580c',
    intro: 'Pour expliquer un mécanisme économique, structure ta réponse : Affirmation, Explication, Illustration.',
    steps: [
      { h: 'Affirmation', c: 'Énonce l’idée ou le lien de cause à effet.' },
      { h: 'Explication', c: 'Déroule le mécanisme étape par étape (« … ce qui entraîne… donc… »).' },
      { h: 'Illustration', c: 'Appuie-toi sur un exemple, un chiffre ou un document.' },
      { h: 'Nuance / limite', c: 'Rappelle la portée et les limites du raisonnement.' },
    ],
    example: { h: 'Exemple — effet d’une baisse des taux d’intérêt', c: 'Affirmation : une baisse des taux stimule l’activité. Explication : taux plus bas → crédit moins cher → plus d’investissement et de consommation → hausse de la demande → hausse de la production. Illustration : la politique de la BCE après 2015. Nuance : l’effet dépend de la confiance des agents.' },
  },
  {
    id: 'grand-oral', title: 'Grand Oral', icon: '🎓', color: '#c8a24e',
    intro: 'Un exposé de 5 minutes, debout et sans notes, clairement structuré.',
    steps: [
      { h: 'Accroche', c: 'Une phrase qui capte l’attention : un chiffre, une actualité, une anecdote.' },
      { h: 'Problématique', c: 'Transforme ta question en un vrai problème à résoudre.' },
      { h: 'Plan annoncé', c: '« Je répondrai en deux temps… » : le jury doit savoir où tu vas.' },
      { h: '2 à 3 parties', c: 'Une idée + un exemple concret par partie.' },
      { h: 'Conclusion + projet', c: 'Réponds, ouvre, puis relie la question à ton projet d’orientation.' },
    ],
    example: { h: 'Astuce', c: 'Entraîne-toi à voix haute avec l’enregistreur de la page Grand Oral : réécoute-toi pour corriger le débit, les « euh » et les silences.' },
  },
]
