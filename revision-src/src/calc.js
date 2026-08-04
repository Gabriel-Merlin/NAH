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
  optimisation: () => {
    const a = (ri(0, 1) ? 1 : -1) * ri(1, 4)
    const xv = ri(1, 5) * (ri(0, 1) ? 1 : -1)
    const b = -2 * a * xv
    const c = ri(-10, 10)
    const val = a * xv * xv + b * xv + c
    const kind = a > 0 ? 'minimum' : 'maximum'
    return {
      prompt: `Soit f(x) = ${poly(a, b, c)}.\nEn utilisant la dérivée, calcule la valeur du ${kind} de f (l'extremum).`,
      answer: val,
      unit: '',
      tolerance: 0.01,
      explain: `f'(x) = ${2 * a}x ${signc(b)} s'annule en x = −b/(2a) = ${xv}.\nf' change de signe en ${xv} : ${kind} atteint en x = ${xv}.\nExtremum : f(${xv}) = ${a}·(${xv})² ${signc(b)}·(${xv}) ${signc(c)} = ${val}.`,
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

  // --- Information chiffrée (compléments) ---------------------------------
  valeur_apres_evolution: () => {
    const v = ri(50, 500) * 10
    const t = ri(-30, 40) || 10
    const res = round(v * (1 + t / 100), 2)
    return {
      prompt: `Une valeur de ${fmt(v)} € évolue de ${t} %.\nCalcule la nouvelle valeur (arrondi au centime).`,
      answer: res, unit: '€', tolerance: 0.5,
      explain: `Nouvelle valeur = ${fmt(v)} × (1 ${t < 0 ? '−' : '+'} ${Math.abs(t)}/100) = ${fmt(v)} × ${round(1 + t / 100, 3)} = ${fmt(res)} €.`,
    }
  },
  indice_base100: () => {
    const ref = ri(80, 200) * 10
    const val = ri(60, 260) * 10
    const indice = round((val / ref) * 100, 1)
    return {
      prompt: `Valeur de référence (base 100) : ${fmt(ref)}.\nValeur observée : ${fmt(val)}.\nCalcule l'indice (base 100, arrondi à 0,1).`,
      answer: indice, unit: '', tolerance: 0.2,
      explain: `Indice = (valeur / référence) × 100 = (${fmt(val)} / ${fmt(ref)}) × 100 = ${indice}.`,
    }
  },
  taux_moyen: () => {
    const n = ri(2, 5)
    const tg = ri(10, 80)
    const cmG = 1 + tg / 100
    const cmM = cmG ** (1 / n)
    const tM = round((cmM - 1) * 100, 1)
    return {
      prompt: `Sur ${n} ans, une grandeur augmente globalement de ${tg} %.\nCalcule le taux d'évolution annuel moyen (en %, arrondi 0,1).`,
      answer: tM, unit: '%', tolerance: 0.2,
      explain: `CM global = 1 + ${tg}/100 = ${round(cmG, 3)}.\nCM moyen = (CM global)^(1/${n}) = ${round(cmM, 4)}.\nTaux moyen = (CM moyen − 1) × 100 ≈ ${tM} %.`,
    }
  },
  taux_reciproque: () => {
    const t = ri(5, 40)
    const cm = 1 + t / 100
    const rec = round((1 / cm - 1) * 100, 1)
    return {
      prompt: `Un prix augmente de ${t} %.\nQuel taux d'évolution (en %, arrondi 0,1) annulerait exactement cette hausse (retour au prix initial) ?`,
      answer: rec, unit: '%', tolerance: 0.2,
      explain: `CM = 1 + ${t}/100 = ${round(cm, 3)}.\nCM réciproque = 1/${round(cm, 3)} = ${round(1 / cm, 4)}.\nTaux réciproque = (1/CM − 1) × 100 ≈ ${rec} % (c'est une baisse).`,
    }
  },

  // --- Suites -------------------------------------------------------------
  suite_arith: () => {
    const u0 = ri(5, 50)
    const r = ri(-8, 12) || 3
    const n = ri(3, 12)
    const un = u0 + n * r
    return {
      prompt: `Suite arithmétique : u₀ = ${u0}, raison r = ${r}.\nCalcule le terme u_${n}.`,
      answer: un, unit: '', tolerance: 0.01,
      explain: `u_n = u₀ + n × r = ${u0} + ${n} × ${r} = ${un}.`,
    }
  },
  suite_geo_terme: () => {
    const u0 = ri(100, 2000)
    const hausse = ri(2, 12)
    const q = round(1 + hausse / 100, 2)
    const n = ri(2, 6)
    const un = u0 * q ** n
    return {
      prompt: `Suite géométrique : u₀ = ${fmt(u0)}, raison q = ${q} (soit +${hausse} %/an).\nCalcule u_${n} (arrondi à l'unité).`,
      answer: round(un, 0), unit: '', tolerance: 1,
      explain: `u_n = u₀ × qⁿ = ${fmt(u0)} × ${q}^${n} = ${fmt(round(un, 2))} ≈ ${fmt(round(un, 0))}.`,
    }
  },

  // --- Fonctions & dérivation --------------------------------------------
  image_fonction: () => {
    const a = ri(-4, 4) || 1
    const b = ri(-8, 8)
    const c = ri(-10, 10)
    const x0 = ri(-5, 5)
    const y = a * x0 * x0 + b * x0 + c
    return {
      prompt: `Soit f(x) = ${poly(a, b, c)}.\nCalcule f(${x0}).`,
      answer: y, unit: '', tolerance: 0.01,
      explain: `f(${x0}) = ${a}·(${x0})² ${signc(b)}·(${x0}) ${signc(c)} = ${y}.`,
    }
  },
  discriminant: () => {
    const a = ri(1, 4)
    const b = ri(-8, 8)
    const c = ri(-6, 6)
    const d = b * b - 4 * a * c
    return {
      prompt: `Soit f(x) = ${poly(a, b, c)}.\nCalcule le discriminant Δ = b² − 4ac.`,
      answer: d, unit: '', tolerance: 0.01,
      explain: `Δ = b² − 4ac = (${b})² − 4×${a}×(${c}) = ${b * b} − ${4 * a * c} = ${d}.`,
    }
  },
  sommet_abscisse: () => {
    const a = ri(1, 5)
    const b = ri(-8, 8) * 2
    const c = ri(-8, 8)
    const alpha = round(-b / (2 * a), 2)
    return {
      prompt: `Soit f(x) = ${poly(a, b, c)}.\nCalcule l'abscisse du sommet : α = −b/(2a) (arrondi 0,01).`,
      answer: alpha, unit: '', tolerance: 0.02,
      explain: `α = −b/(2a) = −(${b})/(2×${a}) = ${alpha}.`,
    }
  },
  lecture_graphique_affine: () => {
    const a = ri(1, 2)
    const b = ri(0, 4)
    const xmax = 6
    const x0 = ri(1, xmax)
    const y = a * x0 + b
    const ymax = Math.max(10, a * xmax + b + 1)
    return {
      prompt: `Lis graphiquement l'image de ${x0} par la fonction f représentée ci-dessus : f(${x0}) = ?`,
      answer: y, unit: '', tolerance: 0.01,
      figure: { type: 'grid', xmax, ymax, lines: [{ a, b }], markX: x0 },
      explain: `On lit sur le graphique : à l'abscisse x = ${x0}, la droite atteint l'ordonnée ${y}.\n(Vérification : f(x) = ${a}x ${signc(b)}, donc f(${x0}) = ${a}×${x0} ${signc(b)} = ${y}.)`,
    }
  },

  // --- Statistiques -------------------------------------------------------
  moyenne_serie: () => {
    const vals = Array.from({ length: 5 }, () => ri(2, 20))
    const somme = vals.reduce((s, x) => s + x, 0)
    const m = round(somme / vals.length, 2)
    return {
      prompt: `Série : ${vals.join(' ; ')}.\nCalcule la moyenne (arrondi 0,01).`,
      answer: m, unit: '', tolerance: 0.02,
      explain: `Moyenne = (${vals.join(' + ')}) / ${vals.length} = ${somme} / ${vals.length} = ${m}.`,
    }
  },
  mediane_serie: () => {
    const vals = Array.from({ length: 7 }, () => ri(2, 30)).sort((x, y) => x - y)
    const med = vals[3]
    return {
      prompt: `Série ordonnée : ${vals.join(' ; ')}.\nCalcule la médiane.`,
      answer: med, unit: '', tolerance: 0.01,
      explain: `7 valeurs → la médiane est la 4ᵉ valeur = ${med} (autant de valeurs avant qu'après).`,
    }
  },
  etendue_serie: () => {
    const vals = Array.from({ length: 6 }, () => ri(3, 40))
    const e = Math.max(...vals) - Math.min(...vals)
    return {
      prompt: `Série : ${vals.join(' ; ')}.\nCalcule l'étendue (max − min).`,
      answer: e, unit: '', tolerance: 0.01,
      explain: `Étendue = max − min = ${Math.max(...vals)} − ${Math.min(...vals)} = ${e}.`,
    }
  },
  ecart_interquartile: () => {
    const vals = Array.from({ length: 8 }, () => ri(2, 30)).sort((a, b) => a - b)
    const q1 = vals[1], q3 = vals[5]
    const eiq = q3 - q1
    return {
      prompt: `Série ordonnée de 8 valeurs : ${vals.join(' ; ')}.\nCalcule l'écart interquartile (Q3 − Q1).`,
      answer: eiq, unit: '', tolerance: 0.01,
      explain: `Pour n = 8 : Q1 = 2ᵉ valeur (rang n/4 = 2) = ${q1} ; Q3 = 6ᵉ valeur (rang 3n/4 = 6) = ${q3}.\nÉcart interquartile = Q3 − Q1 = ${q3} − ${q1} = ${eiq}.`,
    }
  },
  ecart_type: () => {
    const vals = Array.from({ length: 5 }, () => ri(4, 16))
    const m = vals.reduce((s, x) => s + x, 0) / vals.length
    const variance = vals.reduce((s, x) => s + (x - m) ** 2, 0) / vals.length
    const sigma = round(Math.sqrt(variance), 2)
    return {
      prompt: `Série : ${vals.join(' ; ')}.\nCalcule l'écart-type σ (à la calculatrice, arrondi 0,01).`,
      answer: sigma, unit: '', tolerance: 0.05,
      explain: `Moyenne = ${round(m, 2)}.\nVariance = moyenne des carrés des écarts à la moyenne = ${round(variance, 3)}.\nÉcart-type σ = √variance = ${sigma}.`,
    }
  },
  nuage_point_moyen: () => {
    const k = 5
    const points = Array.from({ length: k }, (_, i) => ({ x: 2 * (i + 1), y: ri(2, 10) }))
    const my = round(points.reduce((s, p) => s + p.y, 0) / k, 2)
    const mx = points.reduce((s, p) => s + p.x, 0) / k
    return {
      prompt: `Voici un nuage de ${k} points (ci-dessus).\nCalcule l'ordonnée ȳ du point moyen G (moyenne des y, arrondi 0,01).`,
      answer: my, unit: '', tolerance: 0.05,
      figure: { type: 'scatter', xmax: 12, ymax: 12, points },
      explain: `ȳ = (${points.map((p) => p.y).join(' + ')}) / ${k} = ${my}.\nLe point moyen est G(x̄ ; ȳ) = G(${mx} ; ${my}).`,
    }
  },

  // --- Probabilités -------------------------------------------------------
  proba_cond: () => {
    const pa = ri(30, 70) / 100
    const pab = round(ri(10, Math.round(pa * 100) - 5) / 100, 2)
    const res = round(pab / pa, 3)
    return {
      prompt: `P(A) = ${pa} et P(A∩B) = ${pab}.\nCalcule P_A(B) = P(A∩B) / P(A) (arrondi 0,001).`,
      answer: res, unit: '', tolerance: 0.005,
      explain: `P_A(B) = P(A∩B) / P(A) = ${pab} / ${pa} = ${res}.`,
    }
  },
  esperance_va: () => {
    const x = [ri(0, 3), ri(4, 7), ri(8, 12)]
    const p1 = ri(2, 5) / 10
    const p2 = ri(2, 4) / 10
    const p3 = round(1 - p1 - p2, 2)
    const e = round(x[0] * p1 + x[1] * p2 + x[2] * p3, 2)
    return {
      prompt: `Variable aléatoire X :\nvaleurs : ${x[0]} / ${x[1]} / ${x[2]}\nprobabilités : ${p1} / ${p2} / ${p3}.\nCalcule l'espérance E(X) (arrondi 0,01).`,
      answer: e, unit: '', tolerance: 0.02,
      explain: `E(X) = Σ xᵢ·pᵢ = ${x[0]}×${p1} + ${x[1]}×${p2} + ${x[2]}×${p3} = ${e}.`,
    }
  },
  variance_binomiale: () => {
    const n = ri(10, 50)
    const p = ri(20, 80) / 100
    const v = round(n * p * (1 - p), 2)
    return {
      prompt: `X suit la loi binomiale B(${n} ; ${p}).\nCalcule la variance V(X) = n·p·(1−p) (arrondi 0,01).`,
      answer: v, unit: '', tolerance: 0.05,
      explain: `V(X) = n·p·(1−p) = ${n} × ${p} × ${round(1 - p, 2)} = ${v}.`,
    }
  },

  // --- Loi normale & estimation ------------------------------------------
  amplitude_ic: () => {
    const n = ri(100, 2500)
    const amp = round(2 / Math.sqrt(n), 3)
    return {
      prompt: `Un sondage porte sur un échantillon de n = ${fmt(n)} personnes.\nCalcule l'amplitude de l'intervalle de confiance à 95 % : 2/√n (arrondi 0,001).`,
      answer: amp, unit: '', tolerance: 0.002,
      explain: `Amplitude = 2/√n = 2/√${fmt(n)} = 2/${round(Math.sqrt(n), 2)} = ${amp}.`,
    }
  },
  borne_ic: () => {
    const n = ri(100, 1000)
    const f = ri(30, 70) / 100
    const r = round(1 / Math.sqrt(n), 3)
    const low = round(f - r, 3)
    return {
      prompt: `Fréquence observée f = ${f} sur n = ${fmt(n)}.\nIntervalle de confiance : [f − 1/√n ; f + 1/√n].\nCalcule la borne inférieure (arrondi 0,001).`,
      answer: low, unit: '', tolerance: 0.003,
      explain: `1/√n = 1/√${fmt(n)} = ${r}.\nBorne inférieure = f − 1/√n = ${f} − ${r} = ${low}.`,
    }
  },

  // --- Algorithmique & Python --------------------------------------------
  trace_somme: () => {
    const n = ri(4, 12)
    const s = (n * (n + 1)) / 2
    return {
      prompt: `On exécute cet algorithme :\nS = 0\nPour i allant de 1 à ${n} :\n    S = S + i\nQue vaut S à la fin ?`,
      answer: s, unit: '', tolerance: 0.01,
      explain: `On additionne 1 + 2 + … + ${n} = ${n}×(${n}+1)/2 = ${s}.`,
    }
  },
  trace_produit: () => {
    const n = ri(2, 6)
    const k = ri(2, 4)
    let p = 1
    for (let i = 0; i < n; i++) p *= k
    return {
      prompt: `On exécute cet algorithme :\nP = 1\nPour i allant de 1 à ${n} :\n    P = P × ${k}\nQue vaut P à la fin ?`,
      answer: p, unit: '', tolerance: 0.01,
      explain: `On multiplie ${n} fois par ${k} : P = ${k}^${n} = ${p}.`,
    }
  },
  trace_compteur: () => {
    const start = ri(20, 60)
    const step = ri(3, 8)
    const times = ri(3, 6)
    const res = start - step * times
    return {
      prompt: `On exécute cet algorithme :\nN = ${start}\nRépéter ${times} fois :\n    N = N − ${step}\nQue vaut N à la fin ?`,
      answer: res, unit: '', tolerance: 0.01,
      explain: `On retire ${step}, ${times} fois : N = ${start} − ${step}×${times} = ${res}.`,
    }
  },
}

function fmt(n) {
  return Number(n).toLocaleString('fr-FR')
}

// Formate un polynôme du second degré « ax² + bx + c » proprement.
function poly(a, b, c) {
  const ax = a === 1 ? 'x²' : a === -1 ? '−x²' : a < 0 ? `−${-a}x²` : `${a}x²`
  const bx = b === 0 ? '' : b === 1 ? ' + x' : b === -1 ? ' − x' : b > 0 ? ` + ${b}x` : ` − ${-b}x`
  const cc = c === 0 ? '' : c > 0 ? ` + ${c}` : ` − ${-c}`
  return `${ax}${bx}${cc}`
}
// Signe explicite d'un nombre pour une substitution (« + 3 » / « − 3 »).
function signc(v) {
  return v >= 0 ? `+ ${v}` : `− ${-v}`
}

// Renvoie `count` exercices tirés du générateur `id`.
export function makeCalcSet(id, count = 5) {
  const gen = CALC[id]
  if (!gen) return []
  return Array.from({ length: count }, () => gen())
}
