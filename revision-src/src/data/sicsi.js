// SIC & SI — Gestion-Finance (Terminale STMG)
// Réintègre au programme de GF deux chapitres de cours dédiés :
//   1) le système d'information comptable (SIC) — approfondi ;
//   2) le système d'information (SI) de l'organisation, dont le SIC est un
//      sous-système.
// Fusionné dans data/index.js et rattaché à la catégorie « 📘 Le cours »
// (sections sans « group » → première catégorie, ouverte par défaut).
const S = (h, blocks) => ({ h, blocks })

export const SICSI = {
  // #####################################################################
  // GESTION-FINANCE — Thème 1 (règles comptables)
  // #####################################################################
  'gf-t1': [
    // ------------------------------------------------------------------
    S('🗂️ Le système d’information comptable (SIC)', [
      { t: 'p', c: 'Chaque jour, une entreprise réalise des dizaines d’opérations : elle achète des matières, paie ses salariés, vend ses produits, encaisse ses clients, règle ses fournisseurs. Le **système d’information comptable (SIC)** est l’ensemble des **outils, des procédures et des personnes** qui permettent de **collecter, saisir, classer, enregistrer et restituer** ces opérations. Sa mission : donner une **image fidèle** du patrimoine, de la situation financière et du résultat de l’entreprise (art. 120-1 du **PCG**).' },
      { t: 'p', c: 'Le SIC n’est pas qu’une obligation administrative : c’est une **source d’information stratégique**. Il répond à deux logiques complémentaires — un usage **interne** (piloter, décider) et un usage **externe** (informer et prouver aux tiers).' },
      { t: 'table', head: ['Usage', 'À quoi il sert', 'Pour qui'], rows: [
        ['Interne', 'Piloter l’activité, mesurer le résultat, décider (investir, embaucher…)', 'Dirigeants, managers'],
        ['Externe', 'Prouver, calculer l’impôt, informer sur la santé de l’entreprise', 'État (fisc), banques, associés, salariés'],
      ] },
      { t: 'p', c: 'Pour remplir sa mission, le SIC enchaîne **cinq fonctions** dans un ordre précis. Chacune ajoute de la valeur à l’information brute de départ.' },
      { t: 'list', c: [
        '**Collecter** — réunir les **pièces justificatives** (factures, relevés bancaires, bulletins de paie) : ce sont les **preuves** de chaque opération.',
        '**Saisir** — enregistrer l’opération dans le logiciel, en respectant la **partie double** (débit = crédit).',
        '**Classer** — ranger les écritures dans les **journaux** puis les **comptes** (grand livre).',
        '**Traiter** — contrôler et regrouper (balance, lettrage, rapprochement bancaire).',
        '**Restituer** — produire les **documents de synthèse** : bilan, compte de résultat, annexe.',
      ] },
      { t: 'example', h: 'Le SIC à l’œuvre — une vente', c: 'Un client achète pour 240 € TTC.\n→ **Collecte** : la facture de vente est éditée (pièce justificative).\n→ **Saisie** : compte client (411) au débit, ventes (707) et TVA collectée (44571) au crédit.\n→ **Classement** : l’écriture part au journal des ventes puis au grand livre.\n→ **Traitement** : à l’encaissement, on lettre la facture avec le règlement.\n→ **Restitution** : la vente alimente le chiffre d’affaires du compte de résultat.' },
      { t: 'p', c: 'Le SIC s’appuie sur un **cadre normatif** strict, qui garantit que tous les comptes se lisent de la même façon d’une entreprise à l’autre.' },
      { t: 'table', head: ['Élément', 'Rôle'], rows: [
        ['PCG (Plan Comptable Général)', 'Liste et numérote tous les comptes, fixe les règles d’enregistrement'],
        ['ANC (Autorité des Normes Comptables)', 'Établit les normes comptables françaises'],
        ['Code de commerce', 'Impose l’obligation de tenir une comptabilité'],
        ['Expert-comptable / CAC', 'Établit ou contrôle et certifie les comptes'],
      ] },
      { t: 'p', c: 'Aujourd’hui, le SIC est largement **dématérialisé** et **automatisé**. Les factures électroniques, la **facturation électronique** obligatoire entre entreprises (déployée progressivement) et le **PGI/ERP** suppriment la ressaisie : une opération saisie une fois alimente automatiquement la comptabilité. L’humain se recentre sur le **contrôle** et la **validation** — la machine calcule, l’humain vérifie et décide.' },
      { t: 'warning', h: 'Automatisation ≠ absence de contrôle', c: 'Un logiciel qui enregistre une donnée **fausse** produira des comptes faux : « garbage in, garbage out ». Le comptable reste responsable de la **fiabilité** de l’information. La dématérialisation déplace le travail vers le contrôle, elle ne le supprime pas.' },
      { t: 'p', c: 'Enfin, l’information comptable doit être **protégée**. La **sécurité du SIC** repose sur quatre exigences, faciles à retenir par leurs initiales **D.I.C.T.**' },
      { t: 'table', head: ['Exigence', 'Ce qu’elle garantit'], rows: [
        ['Disponibilité', 'L’information est accessible quand on en a besoin'],
        ['Intégrité', 'L’information n’est pas altérée (pas d’erreur ni de fraude)'],
        ['Confidentialité', 'Seules les personnes autorisées y accèdent'],
        ['Traçabilité', 'On peut prouver qui a fait quoi, et quand (piste d’audit)'],
      ] },
      { t: 'tip', h: 'À retenir', c: 'Le **SIC** collecte → saisit → classe → traite → restitue les opérations pour donner une **image fidèle** (art. 120-1 PCG). Usage **interne** (décider) et **externe** (prouver, imposer). Il s’appuie sur le **PCG/ANC**, se **dématérialise**, et doit être **sécurisé** (D.I.C.T.).' },
    ]),
    // ------------------------------------------------------------------
    S('💾 Le système d’information (SI) de l’organisation', [
      { t: 'p', c: 'Le SIC ne fonctionne pas seul : il n’est qu’une **partie** d’un ensemble plus vaste, le **système d’information (SI)** de l’organisation. Comprendre le SI, c’est comprendre **où se situe la comptabilité** et **comment elle dialogue** avec les autres services (ventes, achats, stocks, paie).' },
      { t: 'p', c: 'Avant de définir le SI, il faut distinguer trois niveaux, du plus brut au plus utile.' },
      { t: 'table', head: ['Niveau', 'Définition', 'Exemple'], rows: [
        ['Donnée', 'Un élément brut, isolé, sans interprétation', '« 240 »'],
        ['Information', 'Une donnée mise en contexte, qui a un sens', '« Facture n°12 : 240 € TTC »'],
        ['Connaissance', 'De l’information analysée, qui guide l’action', '« Nos ventes montent de 10 %, réapprovisionnons »'],
      ] },
      { t: 'p', c: 'Le **système d’information** est l’**ensemble organisé de ressources** qui permet de collecter, stocker, traiter et diffuser l’information dans l’organisation. Il ne se réduit pas à l’informatique : il combine **cinq ressources**.' },
      { t: 'list', c: [
        '**Les personnes** (utilisateurs, comptables, informaticiens) ;',
        '**Le matériel** (ordinateurs, serveurs, réseau) ;',
        '**Les logiciels** (logiciel comptable, PGI, tableur) ;',
        '**Les données** (le patrimoine informationnel de l’entreprise) ;',
        '**Les procédures** (les règles qui organisent la circulation de l’information).',
      ] },
      { t: 'p', c: 'Le SI remplit **quatre grandes fonctions**. Le SIC en est une application spécialisée au domaine comptable.' },
      { t: 'table', head: ['Fonction du SI', 'Exemple côté comptable (SIC)'], rows: [
        ['Collecter', 'Récupérer les factures, relevés, pièces'],
        ['Stocker / mémoriser', 'Conserver les écritures dans une base de données'],
        ['Traiter', 'Calculer la TVA, éditer la balance'],
        ['Diffuser', 'Transmettre le bilan aux dirigeants, à la banque, au fisc'],
      ] },
      { t: 'p', c: 'L’outil qui **relie** tous les services autour d’une information commune est le **PGI (progiciel de gestion intégré)**, appelé **ERP** en anglais. C’est un **logiciel unique** reposant sur une **base de données unique** : une information saisie **une seule fois** est disponible partout, sans ressaisie.' },
      { t: 'example', h: 'L’effet d’un PGI', c: 'Une vente saisie en caisse met **automatiquement** à jour le stock, déclenche la facturation ET génère l’écriture comptable (le SIC). Une seule saisie, trois services servis (ventes, logistique, comptabilité), zéro ressaisie, une information **cohérente** et **en temps réel**.' },
      { t: 'table', head: ['Avantages du PGI', 'Limites du PGI'], rows: [
        ['Une seule saisie → gain de temps', 'Coût d’achat et d’installation élevé'],
        ['Information cohérente et à jour', 'Rigidité, conduite du changement'],
        ['Suppression des ressaisies et erreurs', 'Dépendance à un seul fournisseur / à la panne'],
      ] },
      { t: 'p', c: 'La finalité du SI est d’**aider à la décision** à tous les niveaux de l’organisation. Un bon SI fournit la **bonne information**, à la **bonne personne**, au **bon moment**, sous une forme **exploitable**.' },
      { t: 'list', c: [
        'Niveau **opérationnel** : suivre au quotidien stocks, commandes, encaissements.',
        'Niveau **tactique** : ajuster les moyens (budgets, plannings) sur quelques mois.',
        'Niveau **stratégique** : tableaux de bord et analyses financières pour les dirigeants.',
      ] },
      { t: 'p', c: 'Comme le SIC, le SI doit être **fiable** et **sécurisé**. Les données de gestion sont sensibles ; celles qui concernent des personnes (clients, salariés) sont en plus protégées par le **RGPD** : l’entreprise ne collecte que le nécessaire, informe les personnes et sécurise l’accès.' },
      { t: 'warning', h: 'Ne pas confondre SI et SIC', c: 'Le **SI** est l’ensemble du système d’information de l’organisation (tous les services). Le **SIC** est le **sous-système** dédié à la **comptabilité**. Le SIC « s’alimente » du SI (données de ventes, d’achats, de paie) et lui restitue une information financière fiable.' },
      { t: 'tip', h: 'À retenir', c: 'Donnée → information → connaissance. Le **SI** = ressources (personnes, matériel, logiciels, données, procédures) qui **collectent, stockent, traitent, diffusent** l’information. Le **PGI/ERP** centralise tout dans une **base unique**. Le **SIC est le sous-système comptable du SI** : c’est le lien à connaître entre les deux.' },
    ]),
  ],
}
