// « Calcul express » : générateurs d'exercices chiffrés à nombres aléatoires,
// vérifiés automatiquement. Chaque générateur renvoie un énoncé, la réponse
// attendue, l'unité, une tolérance d'arrondi et une correction détaillée.
// Toutes les méthodes proviennent fidèlement du cours (TVA, seuil de
// rentabilité, taux d'évolution, dérivation, amortissement…).

const ri = (min, max, step = 1) =>
  (Math.floor(Math.random() * ((max - min) / step + 1)) * step + min)
const round = (n, d = 2) => Math.round(n * 10 ** d) / 10 ** d

export const CALC = {
  // --- Gestion et Finance -------------------------------------------------
  tva: () => {
    const ventes = ri(40, 120) * 1000
    const achats = ri(10, Math.floor(ventes / 1000 / 2)) * 1000
    const taux = 20
    const collectee = (ventes * taux) / 100
    const deductible = (achats * taux) / 100
    const adecaisser = collectee - deductible
    return {
      prompt: `Ventes HT = ${fmt(ventes)} € ; achats HT = ${fmt(
        achats,
      )} € ; TVA à 20 %.\nCalcule la TVA à décaisser.`,
      answer: adecaisser,
      unit: '€',
      tolerance: 1,
      explain: `TVA collectée = ${fmt(ventes)} × 20 % = ${fmt(
        collectee,
      )} €.\nTVA déductible = ${fmt(achats)} × 20 % = ${fmt(
        deductible,
      )} €.\nTVA à décaisser = ${fmt(collectee)} − ${fmt(deductible)} = ${fmt(
        adecaisser,
      )} €.`,
    }
  },
  seuil: () => {
    const ca = ri(200, 500) * 1000
    const tauxMcv = ri(30, 55) / 100
    const cv = round(ca * (1 - tauxMcv), 0)
    const cf = ri(60, Math.floor((ca * tauxMcv) / 1000)) * 1000
    const mcv = ca - cv
    const tmcv = mcv / ca
    const sr = cf / tmcv
    return {
      prompt: `CA = ${fmt(ca)} € ; charges variables = ${fmt(
        cv,
      )} € ; charges fixes = ${fmt(cf)} €.\nCalcule le seuil de rentabilité (en €).`,
      answer: sr,
      unit: '€',
      tolerance: 200,
      explain: `MCV = ${fmt(ca)} − ${fmt(cv)} = ${fmt(mcv)} €.\nTaux de MCV = ${fmt(
        mcv,
      )} / ${fmt(ca)} = ${round(tmcv, 3)}.\nSeuil = charges fixes / taux de MCV = ${fmt(
        cf,
      )} / ${round(tmcv, 3)} ≈ ${fmt(round(sr, 0))} €.`,
    }
  },
  amortissement: () => {
    const valeur = ri(8, 40) * 1000
    const duree = ri(4, 10)
    const annuite = valeur / duree
    return {
      prompt: `Machine : ${fmt(valeur)} € HT, durée d'utilisation ${duree} ans, amortissement linéaire.\nCalcule l'annuité « pleine ».`,
      answer: annuite,
      unit: '€',
      tolerance: 1,
      explain: `Taux linéaire = 1/${duree} = ${round((100 / duree), 2)} %.\nAnnuité = ${fmt(
        valeur,
      )} × 1/${duree} = ${fmt(round(annuite, 2))} €.`,
    }
  },
  caf: () => {
    const rn = ri(20, 90) * 1000
    const dot = ri(10, 60) * 1000
    const caf = rn + dot
    return {
      prompt: `Résultat net = ${fmt(rn)} € ; dotations aux amortissements = ${fmt(
        dot,
      )} € (ni reprise ni cession).\nCalcule la CAF (méthode additive).`,
      answer: caf,
      unit: '€',
      tolerance: 1,
      explain: `CAF = résultat net + dotations − reprises + VNC cédées − produits de cession.\nCAF = ${fmt(
        rn,
      )} + ${fmt(dot)} = ${fmt(caf)} €.`,
    }
  },
  frng: () => {
    const rs = ri(300, 600) * 1000
    const es = ri(200, rs / 1000 - 20) * 1000
    const frng = rs - es
    return {
      prompt: `Ressources stables = ${fmt(rs)} € ; emplois stables = ${fmt(
        es,
      )} €.\nCalcule le FRNG.`,
      answer: frng,
      unit: '€',
      tolerance: 1,
      explain: `FRNG = ressources stables − emplois stables = ${fmt(rs)} − ${fmt(
        es,
      )} = ${fmt(frng)} €.`,
    }
  },

  // --- Mathématiques ------------------------------------------------------
  taux_evolution: () => {
    const v1 = ri(100, 400) * 100
    const v2 = ri(100, 500) * 100
    const t = ((v2 - v1) / v1) * 100
    return {
      prompt: `Une valeur passe de ${fmt(v1)} à ${fmt(
        v2,
      )}.\nCalcule le taux d'évolution (en %, arrondi à 0,1).`,
      answer: round(t, 1),
      unit: '%',
      tolerance: 0.2,
      explain: `t = (V arrivée − V départ) / V départ = (${fmt(v2)} − ${fmt(
        v1,
      )}) / ${fmt(v1)} = ${round(t / 100, 4)} = ${round(t, 1)} %.`,
    }
  },
  cm_successif: () => {
    const t1 = ri(3, 20)
    const t2 = ri(-15, 20)
    const cm = (1 + t1 / 100) * (1 + t2 / 100)
    const tg = (cm - 1) * 100
    return {
      prompt: `Une grandeur augmente de ${t1} % puis évolue de ${t2} %.\nQuel est le taux d'évolution global (en %, arrondi à 0,1) ?`,
      answer: round(tg, 1),
      unit: '%',
      tolerance: 0.3,
      explain: `CM global = (1 + ${t1}/100) × (1 ${t2 < 0 ? '−' : '+'} ${Math.abs(
        t2,
      )}/100) = ${round(cm, 4)}.\nTaux global = (CM − 1) × 100 = ${round(tg, 1)} %.`,
    }
  },
  suite_geo: () => {
    const u0 = ri(10, 40) * 1000
    const baisse = ri(5, 15)
    const q = 1 - baisse / 100
    const n = ri(2, 5)
    const un = u0 * q ** n
    return {
      prompt: `Une valeur de ${fmt(
        u0,
      )} € perd ${baisse} % par an (suite géométrique).\nQuelle est sa valeur au bout de ${n} ans ? (arrondi à l'euro)`,
      answer: round(un, 0),
      unit: '€',
      tolerance: 2,
      explain: `q = 1 − ${baisse}/100 = ${q}.\nu_${n} = ${fmt(
        u0,
      )} × ${q}^${n} = ${fmt(round(un, 2))} ≈ ${fmt(round(un, 0))} €.`,
    }
  },
  derivee_affine: () => {
    const a = ri(-5, 5) || 2
    const b = ri(-20, 40)
    const x0 = ri(-6, 6)
    const d = 2 * a * x0 + b
    return {
      prompt: `Soit f(x) = ${a}x² ${b >= 0 ? '+ ' + b : '− ' + -b}x + ${ri(
        -10,
        10,
      )}.\nCalcule f'(${x0}).`,
      answer: d,
      unit: '',
      tolerance: 0.01,
      explain: `f'(x) = 2×${a}x ${b >= 0 ? '+ ' + b : '− ' + -b} = ${2 * a}x ${
        b >= 0 ? '+ ' + b : '− ' + -b
      }.\nf'(${x0}) = ${2 * a}×${x0} ${b >= 0 ? '+ ' + b : '− ' + -b} = ${d}.`,
    }
  },
  esperance_binomiale: () => {
    const n = ri(5, 40)
    const p = ri(10, 90) / 100
    const e = n * p
    return {
      prompt: `X suit la loi binomiale B(${n} ; ${p}).\nCalcule l'espérance E(X).`,
      answer: round(e, 2),
      unit: '',
      tolerance: 0.05,
      explain: `Pour une loi binomiale, E(X) = n × p = ${n} × ${p} = ${round(e, 2)}.`,
    }
  },
  proba_totale: () => {
    const pa = ri(40, 70) / 100
    const pb = round(1 - pa, 2)
    const da = ri(1, 6) / 100
    const db = ri(2, 9) / 100
    const res = pa * da + pb * db
    return {
      prompt: `Machine A (${Math.round(pa * 100)} %) : ${Math.round(
        da * 100,
      )} % de défauts ; machine B (${Math.round(pb * 100)} %) : ${Math.round(
        db * 100,
      )} % de défauts.\nProbabilité qu'une pièce prise au hasard soit défectueuse ? (en %, arrondi 0,1)`,
      answer: round(res * 100, 1),
      unit: '%',
      tolerance: 0.2,
      explain: `P(D) = P(A)×${da} + P(B)×${db} = ${pa}×${da} + ${pb}×${db} = ${round(
        res,
        4,
      )} = ${round(res * 100, 1)} %.`,
    }
  },
}

function fmt(n) {
  return Number(n).toLocaleString('fr-FR')
}

// Renvoie `count` exercices tirés du générateur `id`.
export function makeCalcSet(id, count = 5) {
  const gen = CALC[id]
  if (!gen) return []
  return Array.from({ length: count }, () => gen())
}
