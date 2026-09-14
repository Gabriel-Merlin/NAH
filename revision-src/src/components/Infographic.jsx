// Infographies : schémas SVG intégrés au cours. Responsive (viewBox + w-full),
// compatibles mode clair/sombre (classes Tailwind `fill-*`) et teintés par la
// couleur de la matière. On sélectionne un schéma par son `name`.
import { THEME_TERMS } from '../data/keyterms.js'
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

// PESTEL — le macro-environnement.
function Pestel() {
  const items = [
    ['P', 'Politique', '#6366f1'],
    ['E', 'Économique', '#0ea5e9'],
    ['S', 'Socioculturel', '#10b981'],
    ['T', 'Technologique', '#f59e0b'],
    ['E', 'Écologique', '#22c55e'],
    ['L', 'Légal', '#ef4444'],
  ]
  return (
    <Frame label="PESTEL : les 6 forces du macro-environnement" ratio="3 / 2">
      <svg viewBox="0 0 330 210" className="h-full w-full" role="img" aria-label="Méthode PESTEL">
        {items.map(([l, t, c], i) => {
          const x = 8 + (i % 3) * 106
          const y = 10 + Math.floor(i / 3) * 100
          return (
            <g key={i}>
              <rect x={x} y={y} width={98} height={88} rx={12} fill={c} opacity="0.14" />
              <circle cx={x + 22} cy={y + 26} r={15} fill={c} />
              <text x={x + 22} y={y + 31} textAnchor="middle" className="fill-white" fontSize="15" fontWeight="800">{l}</text>
              <text x={x + 44} y={y + 31} className={T} fontSize="11.5" fontWeight="700">{t}</text>
              <line x1={x + 10} y1={y + 48} x2={x + 88} y2={y + 48} stroke={c} strokeWidth="1.5" opacity="0.4" />
              <text x={x + 49} y={y + 68} textAnchor="middle" className={M} fontSize="9">opportunité</text>
              <text x={x + 49} y={y + 80} textAnchor="middle" className={M} fontSize="9">ou menace ?</text>
            </g>
          )
        })}
      </svg>
    </Frame>
  )
}

// Les 5 forces de Porter — le micro-environnement.
function Porter5({ color }) {
  const box = (x, y, w, label) => (
    <g>
      <rect x={x} y={y} width={w} height={38} rx={9} fill={color} opacity="0.16" />
      <foreignObject x={x + 3} y={y + 3} width={w - 6} height={32}>
        <div style={{ fontSize: 9.5, fontWeight: 700, textAlign: 'center', lineHeight: 1.1, color: 'currentColor' }} className={T}>{label}</div>
      </foreignObject>
    </g>
  )
  return (
    <Frame label="Les 5 forces de Porter : la pression concurrentielle (micro-environnement)" ratio="3 / 2">
      <svg viewBox="0 0 330 220" className="h-full w-full" role="img" aria-label="5 forces de Porter">
        {box(115, 8, 100, 'Nouveaux entrants')}
        {box(115, 174, 100, 'Produits de substitution')}
        {box(6, 91, 96, 'Pouvoir des fournisseurs')}
        {box(228, 91, 96, 'Pouvoir des clients')}
        <rect x={112} y={86} width={106} height={48} rx={10} fill={color} />
        <foreignObject x={115} y={90} width={100} height={40}>
          <div style={{ fontSize: 10.5, fontWeight: 800, textAlign: 'center', lineHeight: 1.1, color: '#fff' }}>Rivalité entre concurrents</div>
        </foreignObject>
        {/* flèches vers le centre */}
        <g stroke={color} strokeWidth="1.5" markerEnd="url(#p5)">
          <line x1="165" y1="46" x2="165" y2="84" />
          <line x1="165" y1="172" x2="165" y2="136" />
          <line x1="104" y1="110" x2="110" y2="110" />
          <line x1="226" y1="110" x2="220" y2="110" />
        </g>
        <defs>
          <marker id="p5" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
            <path d="M0,0 L7,3.5 L0,7 z" fill={color} />
          </marker>
        </defs>
      </svg>
    </Frame>
  )
}

// ===========================================================================
// Nouveaux schémas (économie, droit, maths, SIG, mercatique, communication).
// ===========================================================================

// Offre & demande : deux droites qui se croisent au prix d'équilibre.
function OffreDemande({ color }) {
  return (
    <Frame label="Le prix d’équilibre : rencontre de l’offre et de la demande" ratio="16 / 11">
      <svg viewBox="0 0 320 210" className="h-full w-full" role="img" aria-label="Courbes d’offre et de demande">
        <line x1="42" y1="176" x2="300" y2="176" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="2" />
        <line x1="42" y1="18" x2="42" y2="176" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="2" />
        <text x="10" y="20" className={M} fontSize="11" fontWeight="600">Prix</text>
        <text x="250" y="196" className={M} fontSize="11" fontWeight="600">Quantité</text>
        <line x1="58" y1="34" x2="294" y2="166" stroke={color} strokeWidth="3" />
        <text x="232" y="150" fill={color} fontSize="12" fontWeight="700">Demande</text>
        <line x1="58" y1="166" x2="294" y2="34" stroke="#f59e0b" strokeWidth="3" />
        <text x="242" y="52" fill="#f59e0b" fontSize="12" fontWeight="700">Offre</text>
        <line x1="176" y1="100" x2="176" y2="176" strokeDasharray="4 3" className="stroke-slate-400" strokeWidth="1.4" />
        <line x1="42" y1="100" x2="176" y2="100" strokeDasharray="4 3" className="stroke-slate-400" strokeWidth="1.4" />
        <circle cx="176" cy="100" r="5" className="fill-slate-800 dark:fill-slate-100" />
        <text x="150" y="92" className={T} fontSize="11" fontWeight="800">Équilibre</text>
      </svg>
    </Frame>
  )
}

// Arbre pondéré de probabilités (deux niveaux).
function ProbaArbre({ color }) {
  const leaf = (x, y, label) => (
    <g>
      <rect x={x} y={y - 13} width={54} height={26} rx={7} className="fill-white dark:fill-slate-800" stroke={color} strokeWidth="1.4" />
      <text x={x + 27} y={y + 4} textAnchor="middle" className={T} fontSize="11" fontWeight="700">{label}</text>
    </g>
  )
  const br = (x1, y1, x2, y2, p) => (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="1.6" opacity="0.55" />
      <text x={(x1 + x2) / 2} y={(y1 + y2) / 2 - 4} textAnchor="middle" className={M} fontSize="10" fontWeight="700">{p}</text>
    </g>
  )
  return (
    <Frame label="Arbre pondéré : on multiplie le long des branches" ratio="16 / 10">
      <svg viewBox="0 0 340 210" className="h-full w-full" role="img" aria-label="Arbre pondéré de probabilités">
        <circle cx="26" cy="105" r="5" fill={color} />
        {br(31, 105, 120, 55, 'p')}
        {br(31, 105, 120, 155, '1−p')}
        {leaf(120, 55, 'A')}
        {leaf(120, 155, 'Ā')}
        {br(174, 55, 270, 30, 'p(B|A)')}
        {br(174, 55, 270, 82, '')}
        {br(174, 155, 270, 130, '')}
        {br(174, 155, 270, 182, '')}
        {leaf(270, 30, 'B')}
        {leaf(270, 82, 'B̄')}
        {leaf(270, 130, 'B')}
        {leaf(270, 182, 'B̄')}
      </svg>
    </Frame>
  )
}

// Loi normale : la courbe en cloche autour de la moyenne μ.
function Cloche({ color }) {
  return (
    <Frame label="Loi normale : courbe en cloche symétrique autour de μ" ratio="16 / 9">
      <svg viewBox="0 0 320 170" className="h-full w-full" role="img" aria-label="Courbe en cloche de la loi normale">
        <line x1="20" y1="140" x2="300" y2="140" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="2" />
        <path d="M20 140 C 95 140 120 34 160 34 C 200 34 225 140 300 140" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="3" />
        <line x1="160" y1="34" x2="160" y2="140" strokeDasharray="4 3" className="stroke-slate-400" strokeWidth="1.5" />
        <text x="160" y="158" textAnchor="middle" className={T} fontSize="13" fontWeight="800">μ</text>
        <text x="112" y="158" textAnchor="middle" className={M} fontSize="11">μ−σ</text>
        <text x="208" y="158" textAnchor="middle" className={M} fontSize="11">μ+σ</text>
        <line x1="112" y1="140" x2="112" y2="132" className="stroke-slate-400" strokeWidth="1.5" />
        <line x1="208" y1="140" x2="208" y2="132" className="stroke-slate-400" strokeWidth="1.5" />
      </svg>
    </Frame>
  )
}

// Suites : croissance linéaire (arithmétique) vs exponentielle (géométrique).
function Suites({ color }) {
  return (
    <Frame label="Arithmétique (droite) vs géométrique (exponentielle)" ratio="16 / 10">
      <svg viewBox="0 0 320 200" className="h-full w-full" role="img" aria-label="Comparaison suite arithmétique et géométrique">
        <line x1="38" y1="168" x2="300" y2="168" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="2" />
        <line x1="38" y1="16" x2="38" y2="168" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="2" />
        <line x1="42" y1="150" x2="296" y2="52" stroke="#f59e0b" strokeWidth="3" />
        <text x="196" y="96" fill="#f59e0b" fontSize="11" fontWeight="700">Arithmétique (+r)</text>
        <path d="M42 162 C 160 158 220 150 296 24" fill="none" stroke={color} strokeWidth="3" />
        <text x="150" y="150" fill={color} fontSize="11" fontWeight="700">Géométrique (×q)</text>
        <text x="16" y="20" className={M} fontSize="11" fontWeight="600">uₙ</text>
        <text x="278" y="186" className={M} fontSize="11" fontWeight="600">n</text>
      </svg>
    </Frame>
  )
}

// Nuage de points + droite d'ajustement + point moyen G.
function Nuage({ color }) {
  const pts = [[60, 150], [90, 138], [110, 128], [140, 120], [165, 104], [195, 96], [220, 82], [250, 66]]
  return (
    <Frame label="Ajustement affine (moindres carrés) et point moyen G" ratio="16 / 10">
      <svg viewBox="0 0 300 200" className="h-full w-full" role="img" aria-label="Nuage de points et droite d’ajustement">
        <line x1="40" y1="168" x2="286" y2="168" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="2" />
        <line x1="40" y1="16" x2="40" y2="168" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="2" />
        <line x1="48" y1="156" x2="274" y2="58" stroke={color} strokeWidth="2.5" />
        {pts.map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r="3.6" className="fill-slate-500 dark:fill-slate-300" />)}
        <circle cx="155" cy="107" r="5.5" fill={color} stroke="#fff" strokeWidth="1.5" />
        <text x="163" y="104" className={T} fontSize="12" fontWeight="800">G</text>
        <text x="196" y="150" fill={color} fontSize="11" fontWeight="700">y = ax + b</text>
      </svg>
    </Frame>
  )
}

// Circuit économique simplifié : ménages ↔ entreprises.
function CircuitEco({ color }) {
  const Box = (x, label) => (
    <g>
      <rect x={x} y={70} width={104} height={64} rx={12} fill={color} />
      <text x={x + 52} y={106} textAnchor="middle" className="fill-white" fontSize="13" fontWeight="800">{label}</text>
    </g>
  )
  return (
    <Frame label="Le circuit économique : deux flux entre agents" ratio="16 / 10">
      <svg viewBox="0 0 340 200" className="h-full w-full" role="img" aria-label="Circuit économique ménages entreprises">
        {Box(14, 'Ménages')}
        {Box(222, 'Entreprises')}
        <path d="M120 88 H222" stroke={color} strokeWidth="2.4" markerEnd="url(#ar)" fill="none" />
        <path d="M222 118 H120" stroke="#f59e0b" strokeWidth="2.4" markerEnd="url(#ar2)" fill="none" />
        <defs>
          <marker id="ar" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill={color} /></marker>
          <marker id="ar2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#f59e0b" /></marker>
        </defs>
        <text x="171" y="58" textAnchor="middle" className={M} fontSize="10.5" fontWeight="700">Travail · capital →</text>
        <text x="171" y="150" textAnchor="middle" className={M} fontSize="10.5" fontWeight="700">← Biens & services</text>
        <text x="171" y="80" textAnchor="middle" className={M} fontSize="9.5">(salaires ←)</text>
        <text x="171" y="132" textAnchor="middle" className={M} fontSize="9.5">(dépenses →)</text>
      </svg>
    </Frame>
  )
}

// Schéma de la communication : émetteur → message (canal) → récepteur + bruit.
function Communication({ color }) {
  const Box = (x, label) => (
    <g>
      <rect x={x} y={58} width={96} height={50} rx={11} fill={color} />
      <text x={x + 48} y={88} textAnchor="middle" className="fill-white" fontSize="12" fontWeight="800">{label}</text>
    </g>
  )
  return (
    <Frame label="Émetteur → message (canal) → récepteur (attention au bruit)" ratio="16 / 8">
      <svg viewBox="0 0 340 160" className="h-full w-full" role="img" aria-label="Schéma de la communication">
        {Box(14, 'Émetteur')}
        {Box(230, 'Récepteur')}
        <path d="M112 83 H228" stroke={color} strokeWidth="2.4" markerEnd="url(#c1)" fill="none" />
        <text x="170" y="76" textAnchor="middle" className={M} fontSize="10.5" fontWeight="700">Message · canal</text>
        <path d="M228 104 C 170 130 170 130 112 104" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#c2)" fill="none" />
        <text x="170" y="138" textAnchor="middle" className={M} fontSize="10">Rétroaction (feedback)</text>
        <text x="170" y="30" textAnchor="middle" fill="#ef4444" fontSize="11" fontWeight="800">⚡ Bruit</text>
        <defs>
          <marker id="c1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill={color} /></marker>
          <marker id="c2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#f59e0b" /></marker>
        </defs>
      </svg>
    </Frame>
  )
}

// Base de données relationnelle : deux tables reliées par clé primaire/étrangère.
function Bdd({ color }) {
  const Table = (x, title, rows) => (
    <g>
      <rect x={x} y={20} width={120} height={26 + rows.length * 22} rx={8} className="fill-white dark:fill-slate-800" stroke={color} strokeWidth="1.6" />
      <rect x={x} y={20} width={120} height={26} rx={8} fill={color} />
      <text x={x + 60} y={38} textAnchor="middle" className="fill-white" fontSize="12" fontWeight="800">{title}</text>
      {rows.map((r, i) => (
        <text key={i} x={x + 8} y={62 + i * 22} className={T} fontSize="10.5" fontWeight={r[1] ? '800' : '500'}>{r[1] ? r[1] + ' ' : ''}{r[0]}</text>
      ))}
    </g>
  )
  return (
    <Frame label="Base relationnelle : clé primaire (🔑) et clé étrangère (⇢)" ratio="16 / 10">
      <svg viewBox="0 0 340 200" className="h-full w-full" role="img" aria-label="Deux tables reliées par une clé étrangère">
        {Table(16, 'Client', [['id_client', '🔑'], ['nom'], ['ville']])}
        {Table(204, 'Commande', [['id_cmd', '🔑'], ['id_client', '⇢'], ['date']])}
        <path d="M136 51 C 175 51 175 95 204 95" stroke="#f59e0b" strokeWidth="2" fill="none" markerEnd="url(#fk)" />
        <defs><marker id="fk" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#f59e0b" /></marker></defs>
      </svg>
    </Frame>
  )
}

// Pyramide des normes (hiérarchie du droit).
function PyramideNormes({ color }) {
  const bands = ['Constitution', 'Traités / UE', 'Lois', 'Règlements']
  return (
    <Frame label="La hiérarchie des normes : chaque niveau respecte le supérieur" ratio="16 / 11">
      <svg viewBox="0 0 320 210" className="h-full w-full" role="img" aria-label="Pyramide des normes">
        {bands.map((b, i) => {
          const yTop = 18 + i * 46, yBot = yTop + 42
          const hT = 22 + i * 40, hB = 22 + (i + 1) * 40
          const cx = 160
          return (
            <g key={i}>
              <polygon points={`${cx - hT},${yTop} ${cx + hT},${yTop} ${cx + hB},${yBot} ${cx - hB},${yBot}`} fill={color} opacity={1 - i * 0.16} />
              <text x={cx} y={yTop + 28} textAnchor="middle" className="fill-white" fontSize="12.5" fontWeight="800">{b}</text>
            </g>
          )
        })}
      </svg>
    </Frame>
  )
}

// Responsabilité civile : trois conditions cumulatives → réparation.
function Responsabilite({ color }) {
  const Box = (x, t1, t2) => (
    <g>
      <rect x={x} y={44} width={82} height={58} rx={10} fill={color} />
      <text x={x + 41} y={70} textAnchor="middle" className="fill-white" fontSize="11" fontWeight="800">{t1}</text>
      <text x={x + 41} y={87} textAnchor="middle" className="fill-white" fontSize="9" opacity="0.9">{t2}</text>
    </g>
  )
  return (
    <Frame label="Fait générateur + dommage + lien de causalité → réparation" ratio="16 / 6">
      <svg viewBox="0 0 384 140" className="h-full w-full" role="img" aria-label="Conditions de la responsabilité civile">
        {Box(6, 'Fait', 'générateur')}
        <text x="97" y="80" textAnchor="middle" className={T} fontSize="18" fontWeight="800">+</text>
        {Box(106, 'Dommage', 'préjudice')}
        <text x="197" y="80" textAnchor="middle" className={T} fontSize="18" fontWeight="800">+</text>
        {Box(206, 'Lien de', 'causalité')}
        <text x="297" y="80" textAnchor="middle" className={T} fontSize="16" fontWeight="800">→</text>
        <rect x={308} y={52} width={72} height={42} rx={9} fill="#0f766e" />
        <text x={344} y={77} textAnchor="middle" className="fill-white" fontSize="10" fontWeight="800">Réparation</text>
      </svg>
    </Frame>
  )
}

// Conditions de validité du contrat.
function Contrat({ color }) {
  const Box = (y, label) => (
    <g>
      <rect x={12} y={y} width={150} height={34} rx={9} className="fill-white dark:fill-slate-800" stroke={color} strokeWidth="1.6" />
      <text x={87} y={y + 22} textAnchor="middle" className={T} fontSize="11" fontWeight="700">{label}</text>
    </g>
  )
  return (
    <Frame label="Les conditions de validité d’un contrat" ratio="16 / 9">
      <svg viewBox="0 0 340 180" className="h-full w-full" role="img" aria-label="Conditions de validité du contrat">
        {Box(18, 'Consentement libre')}
        {Box(62, 'Capacité juridique')}
        {Box(106, 'Contenu licite et certain')}
        <path d="M162 79 H228" stroke={color} strokeWidth="2.4" markerEnd="url(#ct)" fill="none" />
        <rect x={228} y={54} width={104} height={54} rx={12} fill={color} />
        <text x={280} y={78} textAnchor="middle" className="fill-white" fontSize="12" fontWeight="800">Contrat</text>
        <text x={280} y={94} textAnchor="middle" className="fill-white" fontSize="11" fontWeight="800">valable</text>
        <defs><marker id="ct" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill={color} /></marker></defs>
      </svg>
    </Frame>
  )
}

// Le plan de marchéage : les 4P.
function Mix4P({ color }) {
  const Q = (x, y, p, label) => (
    <g>
      <rect x={x} y={y} width={116} height={84} rx={12} fill={color} opacity="0.92" />
      <text x={x + 58} y={y + 42} textAnchor="middle" className="fill-white" fontSize="13" fontWeight="900">{p}</text>
      <text x={x + 58} y={y + 60} textAnchor="middle" className="fill-white" fontSize="10.5" opacity="0.95">{label}</text>
    </g>
  )
  return (
    <Frame label="Le plan de marchéage : 4 leviers cohérents (les 4P)" ratio="1 / 1">
      <svg viewBox="0 0 280 244" className="h-full w-full" role="img" aria-label="Les 4P du plan de marchéage">
        {Q(10, 10, 'Produit', 'Product')}
        {Q(154, 10, 'Prix', 'Price')}
        {Q(10, 150, 'Distribution', 'Place')}
        {Q(154, 150, 'Communication', 'Promotion')}
        <rect x={108} y={107} width={64} height={30} rx={9} className="fill-white dark:fill-slate-900" stroke={color} strokeWidth="2" />
        <text x={140} y={121} textAnchor="middle" className={T} fontSize="10.5" fontWeight="800">Mix</text>
        <text x={140} y={132} textAnchor="middle" className={M} fontSize="8">marketing</text>
      </svg>
    </Frame>
  )
}

// Carte mentale générée à partir des définitions clés vérifiées du thème.
export function ConceptMap({ title, terms, color }) {
  const items = (terms || []).slice(0, 6)
  const n = items.length
  if (n < 3) return null
  const cx = 200, cy = 150, rx = 140, ry = 106
  const wrap = (s) => {
    const words = String(s || '').split(/\s+/)
    const lines = []; let cur = ''
    for (const w of words) {
      if ((cur + ' ' + w).trim().length <= 15) cur = (cur + ' ' + w).trim()
      else { if (cur) lines.push(cur); cur = w }
      if (lines.length >= 2) break
    }
    if (cur && lines.length < 2) lines.push(cur)
    const out = lines.slice(0, 2)
    if (out.length && out.join(' ').length < String(s || '').length) out[out.length - 1] = out[out.length - 1].slice(0, 14) + '…'
    return out
  }
  const pos = items.map((_, i) => {
    const a = (-90 + i * (360 / n)) * Math.PI / 180
    return [cx + rx * Math.cos(a), cy + ry * Math.sin(a)]
  })
  const centerLines = wrap(title)
  return (
    <Frame label={`Carte mentale — ${title}`} ratio="4 / 3">
      <svg viewBox="0 0 400 300" className="h-full w-full" role="img" aria-label={`Carte mentale : ${title}`}>
        {pos.map((p, i) => <line key={'l' + i} x1={cx} y1={cy} x2={p[0]} y2={p[1]} stroke={color} strokeWidth="1.6" opacity="0.35" />)}
        {items.map((term, i) => {
          const [x, y] = pos[i]
          const lines = wrap(term)
          return (
            <g key={'n' + i}>
              <rect x={x - 56} y={y - 17} width={112} height={34} rx={9} className="fill-white dark:fill-slate-800" stroke={color} strokeWidth="1.5" />
              {lines.map((ln, k) => (
                <text key={k} x={x} y={y - (lines.length === 2 ? 3 : 0) + k * 13 + 4} textAnchor="middle" className={T} fontSize="10.5" fontWeight="600">{ln}</text>
              ))}
            </g>
          )
        })}
        <rect x={cx - 76} y={cy - 27} width={152} height={54} rx={14} fill={color} />
        {centerLines.map((ln, k) => (
          <text key={k} x={cx} y={cy - (centerLines.length === 2 ? 6 : 0) + k * 15 + 5} textAnchor="middle" className="fill-white" fontSize="12.5" fontWeight="800">{ln}</text>
        ))}
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
  pestel: Pestel,
  porter5: Porter5,
  'offre-demande': OffreDemande,
  'proba-arbre': ProbaArbre,
  cloche: Cloche,
  suites: Suites,
  nuage: Nuage,
  'circuit-eco': CircuitEco,
  communication: Communication,
  bdd: Bdd,
  'pyramide-normes': PyramideNormes,
  responsabilite: Responsabilite,
  contrat: Contrat,
  'mix-4p': Mix4P,
}

// Schéma bespoke choisi par thème (quand aucune figure n'est déjà dans le cours).
const THEME_FIGURE = {
  'gf-t1': 'tva', 'gf-t3': 'seuil',
  'gf-t2': 'sig-cascade',
  'mkg-t1': 'maslow', 'mkg-t3': 'mix-4p',
  'rh-t3': 'communication',
  'sig-t1': 'communication', 'sig-t2': 'bdd', 'sig-t4': 'bdd', 'sig-t3': 'communication',
  'mgmt-t2': 'swot', 'mgmt-t3': 'pestel',
  'p1-mgmt-t2': 'swot', 'p1-mgmt-t3': 'porter5',
  'droit-t5': 'contrat', 'droit-t6': 'responsabilite', 'droit-t8': 'pyramide-normes',
  'p1-droit-t1': 'pyramide-normes', 'p1-droit-t2': 'pyramide-normes',
  'eco-t6': 'circuit-eco', 'eco-t7': 'offre-demande', 'eco-t8': 'offre-demande',
  'p1-eco-t1': 'circuit-eco', 'p1-eco-t2': 'circuit-eco', 'p1-eco-t3': 'circuit-eco',
  'p1-eco-t4': 'circuit-eco', 'p1-eco-t5': 'offre-demande',
  'math-c2': 'suites', 'math-c3': 'derivee', 'math-c4': 'nuage', 'math-c5': 'proba-arbre',
  'math-c6': 'proba-arbre', 'math-c7': 'cloche',
  'p1-math-c2': 'suites', 'p1-math-c4': 'derivee', 'p1-math-c5': 'nuage', 'p1-math-c6': 'proba-arbre',
}

// Un schéma par thème : figure déjà présente dans le cours → on ne double pas ;
// sinon un schéma bespoke adapté ; à défaut, une carte mentale des notions clés.
export function ThemeSchema({ theme, color }) {
  if (!theme) return null
  const name = THEME_FIGURE[theme.id]
  if (name && MAP[name]) { const C = MAP[name]; return <C color={color} /> }
  const terms = (THEME_TERMS[theme.id] || []).map((e) => e[0])
  return <ConceptMap title={theme.short || theme.name} terms={terms} color={color} />
}

export default function Infographic({ name, color }) {
  const Comp = MAP[name]
  if (!Comp) return null
  return <Comp color={color} />
}
