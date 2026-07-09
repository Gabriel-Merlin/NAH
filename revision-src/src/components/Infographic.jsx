// Infographies : schémas SVG intégrés au cours. Responsive (viewBox + w-full),
// compatibles mode clair/sombre (classes Tailwind `fill-*`) et teintés par la
// couleur de la matière. On sélectionne un schéma par son `name`.
const T = 'fill-slate-800 dark:fill-slate-100' // texte principal
const M = 'fill-slate-500 dark:fill-slate-400' // texte secondaire

function Frame({ label, children, ratio = '16 / 9' }) {
  return (
    <figure className="my-3 overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900">
      <div style={{ aspectRatio: ratio }}>{children}</div>
      {label && <figcaption className="mt-2 text-center text-xs text-slate-500 dark:text-slate-400">{label}</figcaption>}
    </figure>
  )
}

// Cascade des Soldes Intermédiaires de Gestion.
function SigCascade({ color }) {
  const steps = ['Marge commerciale', 'Valeur ajoutée (VA)', 'Excédent brut d’exploitation', 'Résultat d’exploitation', 'Résultat courant avant impôt', 'Résultat net']
  return (
    <Frame label="La cascade des SIG : du chiffre d’affaires au résultat net" ratio="4 / 5">
      <svg viewBox="0 0 320 380" className="h-full w-full" role="img" aria-label="Cascade des soldes intermédiaires de gestion">
        {steps.map((s, i) => {
          const y = 12 + i * 60
          const w = 300 - i * 34
          return (
            <g key={i}>
              <rect x={12} y={y} width={w} height={42} rx={9} fill={color} opacity={1 - i * 0.11} />
              <text x={24} y={y + 26} className="fill-white" fontSize="13" fontWeight="700">{s}</text>
              {i < steps.length - 1 && <text x={26} y={y + 56} className={M} fontSize="15" fontWeight="700">↓</text>}
            </g>
          )
        })}
      </svg>
    </Frame>
  )
}

// Mécanisme de la TVA.
function Tva({ color }) {
  const Box = ({ x, title, sub, fill, txt = 'fill-white' }) => (
    <g>
      <rect x={x} y={40} width={92} height={70} rx={10} fill={fill} />
      <text x={x + 46} y={70} textAnchor="middle" className={txt} fontSize="12" fontWeight="700">{title}</text>
      <text x={x + 46} y={90} textAnchor="middle" className={txt} fontSize="10" opacity="0.9">{sub}</text>
    </g>
  )
  return (
    <Frame label="TVA à décaisser = TVA collectée − TVA déductible">
      <svg viewBox="0 0 340 150" className="h-full w-full" role="img" aria-label="Mécanisme de la TVA">
        <Box x={6} title="TVA collectée" sub="sur les ventes" fill={color} />
        <text x={104} y={82} textAnchor="middle" className={T} fontSize="22" fontWeight="800">−</text>
        <Box x={116} title="TVA déductible" sub="sur les achats" fill={color} txt="fill-white" />
        <text x={214} y={82} textAnchor="middle" className={T} fontSize="20" fontWeight="800">=</text>
        <Box x={226} title="À décaisser" sub="reversé à l’État" fill="#0f766e" />
      </svg>
    </Frame>
  )
}

// Bilan fonctionnel : FRNG − BFR = Trésorerie nette.
function Bilan({ color }) {
  const Box = ({ x, t1, t2, fill }) => (
    <g>
      <rect x={x} y={44} width={96} height={64} rx={10} fill={fill} />
      <text x={x + 48} y={72} textAnchor="middle" className="fill-white" fontSize="13" fontWeight="800">{t1}</text>
      <text x={x + 48} y={92} textAnchor="middle" className="fill-white" fontSize="9.5" opacity="0.9">{t2}</text>
    </g>
  )
  return (
    <Frame label="Trésorerie nette = FRNG − BFR (l’équilibre financier)">
      <svg viewBox="0 0 340 150" className="h-full w-full" role="img" aria-label="Bilan fonctionnel">
        <Box x={6} t1="FRNG" t2="ress. − emplois stables" fill={color} />
        <text x={108} y={82} textAnchor="middle" className={T} fontSize="22" fontWeight="800">−</text>
        <Box x={120} t1="BFR" t2="besoin d’exploitation" fill="#b45309" />
        <text x={222} y={82} textAnchor="middle" className={T} fontSize="20" fontWeight="800">=</text>
        <Box x={234} t1="Trésorerie" t2="nette" fill="#0f766e" />
      </svg>
    </Frame>
  )
}

// Seuil de rentabilité (CA vs charges totales).
function Seuil({ color }) {
  return (
    <Frame label="Le seuil de rentabilité : là où les recettes couvrent les coûts">
      <svg viewBox="0 0 320 220" className="h-full w-full" role="img" aria-label="Seuil de rentabilité">
        {/* axes */}
        <line x1="40" y1="185" x2="300" y2="185" className="stroke-slate-400" strokeWidth="1.5" />
        <line x1="40" y1="185" x2="40" y2="20" className="stroke-slate-400" strokeWidth="1.5" />
        <text x="288" y="205" className={M} fontSize="10">CA</text>
        {/* charges fixes */}
        <line x1="40" y1="140" x2="300" y2="140" className="stroke-slate-400" strokeDasharray="4 4" strokeWidth="1.5" />
        <text x="44" y="134" className={M} fontSize="9">Charges fixes</text>
        {/* coût total */}
        <line x1="40" y1="140" x2="300" y2="70" stroke="#b45309" strokeWidth="2.5" />
        <text x="250" y="60" fill="#b45309" fontSize="9" fontWeight="700">Coût total</text>
        {/* CA (recettes) */}
        <line x1="40" y1="185" x2="300" y2="30" stroke={color} strokeWidth="2.5" />
        <text x="255" y="30" fill={color} fontSize="9" fontWeight="700">Recettes</text>
        {/* point mort */}
        <circle cx="180" cy="107" r="5" className="fill-rose-500" />
        <line x1="180" y1="107" x2="180" y2="185" className="stroke-rose-400" strokeDasharray="3 3" />
        <text x="150" y="200" className="fill-rose-500" fontSize="9" fontWeight="700">Seuil</text>
      </svg>
    </Frame>
  )
}

// Matrice SWOT.
function Swot() {
  const cell = (x, y, t, sub, fill) => (
    <g>
      <rect x={x} y={y} width={148} height={80} rx={10} fill={fill} opacity="0.16" />
      <rect x={x} y={y} width={148} height={26} rx={10} fill={fill} />
      <text x={x + 10} y={y + 18} className="fill-white" fontSize="12" fontWeight="800">{t}</text>
      <text x={x + 10} y={y + 46} className={T} fontSize="9.5">{sub[0]}</text>
      <text x={x + 10} y={y + 62} className={T} fontSize="9.5">{sub[1]}</text>
    </g>
  )
  return (
    <Frame label="La matrice SWOT : interne (forces/faiblesses) vs externe (opportunités/menaces)">
      <svg viewBox="0 0 330 200" className="h-full w-full" role="img" aria-label="Matrice SWOT">
        {cell(8, 12, 'Forces', ['Atouts', 'internes'], '#059669')}
        {cell(172, 12, 'Faiblesses', ['Limites', 'internes'], '#dc2626')}
        {cell(8, 104, 'Opportunités', ['Chances', 'externes'], '#2563eb')}
        {cell(172, 104, 'Menaces', ['Risques', 'externes'], '#d97706')}
        <text x="165" y="196" textAnchor="middle" className={M} fontSize="8.5">Interne = l’entreprise · Externe = l’environnement</text>
      </svg>
    </Frame>
  )
}

// Pyramide de Maslow.
function Maslow({ color }) {
  const levels = ['Accomplissement', 'Estime', 'Appartenance', 'Sécurité', 'Physiologiques']
  return (
    <Frame label="La pyramide des besoins de Maslow (de la base au sommet)" ratio="4 / 3">
      <svg viewBox="0 0 320 240" className="h-full w-full" role="img" aria-label="Pyramide de Maslow">
        {levels.map((lvl, i) => {
          const idxFromBottom = levels.length - 1 - i
          const y = 20 + i * 42
          const half = 20 + idxFromBottom * 28
          const cx = 160
          return (
            <g key={i}>
              <polygon
                points={`${cx - half},${y + 40} ${cx + half},${y + 40} ${cx + half - 28},${y} ${cx - half + 28},${y}`}
                fill={color}
                opacity={0.45 + i * 0.11}
              />
              <text x={cx} y={y + 26} textAnchor="middle" className="fill-white" fontSize="12" fontWeight="700">{lvl}</text>
            </g>
          )
        })}
      </svg>
    </Frame>
  )
}

// Les 3 fonctions de l'État (Musgrave).
function EtatFonctions({ color }) {
  const items = [
    ['Allocation', 'produire des biens collectifs'],
    ['Redistribution', 'réduire les inégalités'],
    ['Stabilisation', 'agir sur la conjoncture'],
  ]
  return (
    <Frame label="Les trois fonctions de l’État (R. Musgrave)">
      <svg viewBox="0 0 330 130" className="h-full w-full" role="img" aria-label="Fonctions de l'État">
        {items.map(([t, s], i) => {
          const x = 8 + i * 108
          return (
            <g key={i}>
              <rect x={x} y={20} width={98} height={90} rx={12} fill={color} opacity={0.9 - i * 0.12} />
              <text x={x + 49} y={54} textAnchor="middle" className="fill-white" fontSize="12" fontWeight="800">{t}</text>
              <foreignObject x={x + 6} y={62} width={86} height={44}>
                <div style={{ color: '#fff', fontSize: 9.5, textAlign: 'center', lineHeight: 1.2 }}>{s}</div>
              </foreignObject>
            </g>
          )
        })}
      </svg>
    </Frame>
  )
}

// Signe de la dérivée → variations.
function Derivee({ color }) {
  return (
    <Frame label="Signe de f’ et sens de variation de f (exemple avec un maximum)">
      <svg viewBox="0 0 320 160" className="h-full w-full" role="img" aria-label="Signe de la dérivée et variations">
        <line x1="20" y1="40" x2="300" y2="40" className="stroke-slate-300" />
        <line x1="20" y1="95" x2="300" y2="95" className="stroke-slate-300" />
        <text x="24" y="30" className={M} fontSize="11" fontWeight="700">f’(x)</text>
        <text x="24" y="120" className={M} fontSize="11" fontWeight="700">f(x)</text>
        {/* signe f' */}
        <text x="110" y="66" textAnchor="middle" className="fill-emerald-500" fontSize="18" fontWeight="800">+</text>
        <text x="160" y="70" textAnchor="middle" className={M} fontSize="13">0</text>
        <text x="215" y="66" textAnchor="middle" className="fill-rose-500" fontSize="18" fontWeight="800">−</text>
        {/* variations */}
        <line x1="60" y1="140" x2="150" y2="105" stroke={color} strokeWidth="2.5" markerEnd="url(#ar)" />
        <line x1="170" y1="105" x2="260" y2="140" stroke={color} strokeWidth="2.5" markerEnd="url(#ar)" />
        <circle cx="160" cy="103" r="4" className="fill-amber-500" />
        <text x="160" y="96" textAnchor="middle" className="fill-amber-600" fontSize="9" fontWeight="700">max</text>
        <defs>
          <marker id="ar" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
            <path d="M0,0 L7,3.5 L0,7 z" fill={color} />
          </marker>
        </defs>
      </svg>
    </Frame>
  )
}

const MAP = {
  'sig-cascade': SigCascade,
  tva: Tva,
  bilan: Bilan,
  seuil: Seuil,
  swot: Swot,
  maslow: Maslow,
  'etat-fonctions': EtatFonctions,
  derivee: Derivee,
}

export default function Infographic({ name, color }) {
  const Comp = MAP[name]
  if (!Comp) return null
  return <Comp color={color} />
}
