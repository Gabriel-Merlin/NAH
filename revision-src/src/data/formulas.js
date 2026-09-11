// Aide-mémoire des formules clés du bac STMG (gestion, mercatique, économie,
// mathématiques, RH). Affiché dans le « Formulaire » avec la calculatrice.
export const FORMULAS = [
  {
    cat: 'Gestion & Finance', icon: '💶', color: '#0f766e',
    items: [
      { name: 'TVA à décaisser', f: 'TVA collectée − TVA déductible' },
      { name: 'Résultat', f: 'Produits − Charges' },
      { name: 'Valeur ajoutée (VA)', f: 'Production − Consommations intermédiaires' },
      { name: "Excédent brut d'exploitation", f: 'VA − Charges de personnel − Impôts et taxes' },
      { name: 'Fonds de roulement (FRNG)', f: 'Ressources stables − Emplois stables' },
      { name: 'Trésorerie nette', f: 'FRNG − BFR' },
      { name: 'Marge sur coût variable', f: 'CA − Coûts variables' },
      { name: 'Taux de marge sur CV', f: 'MCV ÷ CA × 100', note: 'en %' },
      { name: 'Seuil de rentabilité', f: 'Coûts fixes ÷ Taux de MCV' },
      { name: 'Taux de marge', f: 'Marge ÷ Coût d’achat × 100', note: 'en %' },
      { name: 'Taux de marque', f: 'Marge ÷ Prix de vente × 100', note: 'en %' },
      { name: 'Amortissement linéaire', f: 'Valeur d’origine ÷ Durée d’utilisation' },
    ],
  },
  {
    cat: 'Mercatique', icon: '🛍️', color: '#7c3aed',
    items: [
      { name: 'Part de marché', f: 'Ventes entreprise ÷ Ventes du marché × 100', note: 'en %' },
      { name: 'Part de marché relative', f: 'PDM entreprise ÷ PDM du leader' },
      { name: 'Taux de pénétration', f: 'Clients ÷ Cible × 100', note: 'en %' },
      { name: 'Élasticité-prix', f: '% variation des quantités ÷ % variation du prix' },
      { name: 'Taux de conversion', f: 'Achats ÷ Visiteurs × 100', note: 'en %' },
      { name: 'Panier moyen', f: 'Chiffre d’affaires ÷ Nombre de commandes' },
      { name: 'Retour sur investissement', f: '(Gain − Coût) ÷ Coût × 100', note: 'en %' },
    ],
  },
  {
    cat: 'Économie', icon: '📈', color: '#2b6cb0',
    items: [
      { name: 'Taux d’évolution', f: '(Valeur finale − Valeur initiale) ÷ Valeur initiale × 100', note: 'en %' },
      { name: 'Coefficient multiplicateur', f: '1 + (Taux ÷ 100)' },
      { name: 'Taux de chômage', f: 'Chômeurs ÷ Population active × 100', note: 'en %' },
      { name: 'Taux d’activité', f: 'Population active ÷ Population en âge de travailler × 100', note: 'en %' },
      { name: 'Balance commerciale', f: 'Exportations − Importations' },
      { name: 'Taux de couverture', f: 'Exportations ÷ Importations × 100', note: 'en %' },
    ],
  },
  {
    cat: 'Ressources humaines', icon: '👥', color: '#db2777',
    items: [
      { name: 'Taux d’absentéisme', f: 'Heures d’absence ÷ Heures théoriques × 100', note: 'en %' },
      { name: 'Taux de rotation (turnover)', f: 'Départs ÷ Effectif moyen × 100', note: 'en %' },
      { name: 'Coût employeur', f: 'Salaire brut × (1 + Taux de charges)', note: 'charges en décimal' },
      { name: 'Productivité horaire', f: 'Production ÷ Heures travaillées' },
    ],
  },
  {
    cat: 'Mathématiques', icon: '🔢', color: '#ea580c',
    items: [
      { name: 'Pourcentage d’une valeur', f: 'Valeur × (Pourcentage ÷ 100)' },
      { name: 'Taux d’évolution global', f: '(1 + t₁) × (1 + t₂) − 1', note: 'évolutions successives' },
      { name: 'Taux moyen', f: '(Coefficient global)^(1 ÷ n) − 1' },
      { name: 'Suite arithmétique', f: 'uₙ = u₀ + n × r' },
      { name: 'Suite géométrique', f: 'uₙ = u₀ × qⁿ' },
      { name: 'Moyenne', f: 'Somme des valeurs ÷ Nombre de valeurs' },
      { name: 'Probabilité conditionnelle', f: 'P_A(B) = P(A ∩ B) ÷ P(A)' },
      { name: 'Espérance (loi binomiale)', f: 'E(X) = n × p' },
    ],
  },
]
