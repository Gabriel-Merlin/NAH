// Boutique virtuelle. On dépense des « pièces » 🪙 (gagnées en révisant et en se
// connectant) pour débloquer des thèmes de couleur, des avatars, ou des objets
// utiles (gel de série). Les pièces sont une monnaie séparée de l'XP : acheter
// ne fait jamais baisser le niveau.
//
// Types :
//  - 'palette'    : { theme:{bg,ink,accent,card} } → s'équipe (couleurs de l'appli)
//  - 'avatar'     : { avatar:'🦊' }                → s'équipe (monogramme)
//  - 'consumable' : { grant:'freeze' }             → s'utilise (ici : gel de série)

export const SHOP_ITEMS = [
  // ---- Objets utiles ----
  {
    id: 'freeze', type: 'consumable', grant: 'freeze', category: 'boost',
    name: 'Gel de série', icon: '🧊', price: 200,
    desc: 'Protège ta série si tu rates un jour. Utilisé automatiquement.',
  },

  // ---- Thèmes de couleur (palettes) ----
  { id: 'pal-ocean', type: 'palette', category: 'theme', name: 'Océan', icon: '🌊', price: 300,
    theme: { bg: '#f2f8fc', ink: '#0f2a3d', accent: '#1e88c7', card: '#ffffff' } },
  { id: 'pal-foret', type: 'palette', category: 'theme', name: 'Forêt', icon: '🌲', price: 300,
    theme: { bg: '#f2f8f2', ink: '#153021', accent: '#2f9e5f', card: '#ffffff' } },
  { id: 'pal-corail', type: 'palette', category: 'theme', name: 'Corail', icon: '🪸', price: 350,
    theme: { bg: '#fff5f3', ink: '#3d1a18', accent: '#e5573f', card: '#ffffff' } },
  { id: 'pal-lavande', type: 'palette', category: 'theme', name: 'Lavande', icon: '💜', price: 350,
    theme: { bg: '#f7f4fd', ink: '#26183f', accent: '#7c5cd6', card: '#ffffff' } },
  { id: 'pal-menthe', type: 'palette', category: 'theme', name: 'Menthe', icon: '🌿', price: 400,
    theme: { bg: '#f0faf6', ink: '#0f3028', accent: '#12a37a', card: '#ffffff' } },
  { id: 'pal-rose', type: 'palette', category: 'theme', name: 'Rose bonbon', icon: '🌸', price: 400,
    theme: { bg: '#fdf3f8', ink: '#3a1526', accent: '#db3f86', card: '#ffffff' } },
  { id: 'pal-or', type: 'palette', category: 'theme', name: 'Or royal', icon: '👑', price: 700,
    theme: { bg: '#fbf7ec', ink: '#2c2410', accent: '#c8a24e', card: '#fffdf7' } },
  { id: 'pal-nuit', type: 'palette', category: 'theme', name: 'Nuit néon', icon: '🌌', price: 800,
    theme: { bg: '#0f1220', ink: '#e8eaf7', accent: '#6d8bff', card: '#191d2e' } },

  // ---- Avatars (monogramme personnalisé) ----
  { id: 'av-fox', type: 'avatar', category: 'avatar', name: 'Renard', icon: '🦊', price: 150, avatar: '🦊' },
  { id: 'av-panda', type: 'avatar', category: 'avatar', name: 'Panda', icon: '🐼', price: 150, avatar: '🐼' },
  { id: 'av-owl', type: 'avatar', category: 'avatar', name: 'Chouette', icon: '🦉', price: 150, avatar: '🦉' },
  { id: 'av-cat', type: 'avatar', category: 'avatar', name: 'Chat', icon: '🐱', price: 150, avatar: '🐱' },
  { id: 'av-rocket', type: 'avatar', category: 'avatar', name: 'Fusée', icon: '🚀', price: 250, avatar: '🚀' },
  { id: 'av-brain', type: 'avatar', category: 'avatar', name: 'Cerveau', icon: '🧠', price: 250, avatar: '🧠' },
  { id: 'av-star', type: 'avatar', category: 'avatar', name: 'Étoile', icon: '⭐', price: 300, avatar: '⭐' },
  { id: 'av-dragon', type: 'avatar', category: 'avatar', name: 'Dragon', icon: '🐉', price: 500, avatar: '🐉' },
  { id: 'av-crown', type: 'avatar', category: 'avatar', name: 'Couronne', icon: '👑', price: 600, avatar: '👑' },
]

export const shopById = Object.fromEntries(SHOP_ITEMS.map((i) => [i.id, i]))
