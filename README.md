# NAH — Non Au Harcèlement · Lycée Marceau

Site web de sensibilisation et d'aide contre le harcèlement scolaire, porté par
un groupe d'élèves du **Lycée Marceau** à Chartres (28).

> Tu n'es pas seul·e. Voici ce que tu peux faire, dès maintenant.

## ✨ Ce que contient le site

- **Accueil** — bandeau dégradé bleu, 3 accès rapides (CTA), numéros d'urgence
  (les boutons « Appeler » n'apparaissent que sur mobile ; sur desktop les numéros
  sont seulement affichés), slogan.
- **Comprendre** — contenu présenté en **cartes visuelles** (et non en gros
  paragraphes) : c'est quoi le harcèlement, blague/conflit/harcèlement, les types
  (icônes), les 3 critères, réagir victime / témoin, numéros & applis, équipe NAH.
- **Agir & Outils** — grille des 4 outils en tête de page, puis :
  - **Quiz** interactif (10 situations) ;
  - **Question anonyme** avec, à côté, une colonne **« Réponses de l'équipe NAH »** ;
  - **Sondage** (vote anonyme, 1 vote/personne) ;
  - **Calendrier** d'événements (éditable via `data/events.json`) ;
  - **Signalement** (anonyme ou identifié) ;
  - **Rejoindre NAH** — formulaire de candidature (nom, prénom, classe, téléphone, e-mail).
- **Contact** — email dédié, réseaux sociaux, adresse + carte du lycée.
- Pages **Mentions légales** et **Confidentialité (RGPD)**.
- **Bouton flottant « Besoin d'aide ? »** présent sur toutes les pages.

## 🛠️ Stack technique

| Couche        | Outil                                  |
|---------------|----------------------------------------|
| Front         | HTML / CSS / JS **vanilla** (sans framework) |
| Hébergement   | **GitHub Pages** (gratuit)             |
| Base de données | **Supabase** (questions, sondages, signalements) |
| Sécurité      | **Row Level Security** (RLS)           |
| Polices       | Google Fonts — Playfair Display + Inter |

## 🚀 Mise en route

### 1. Aperçu local
Ouvre simplement `index.html` dans un navigateur, ou lance un petit serveur
(pour que le calendrier `data/events.json` se charge) :

```bash
python3 -m http.server 8000
# puis ouvre http://localhost:8000
```

> Sans configuration Supabase, les formulaires fonctionnent en **mode démo**
> (rien n'est envoyé, un message de confirmation est simulé).

### 2. Connecter Supabase
1. Crée un projet sur [supabase.com](https://supabase.com).
2. **SQL Editor** → colle le contenu de [`supabase/schema.sql`](supabase/schema.sql) → **Run**.
3. Récupère l'URL du projet et la clé **anon** (Settings → API).
4. Renseigne-les dans [`js/supabase.js`](js/supabase.js).
5. Crée un sondage actif (exemple commenté en bas du fichier SQL).

### 3. Ajouter la photo du lycée
Dépose `lycee-marceau.jpg` dans le dossier [`assets/`](assets/) (voir le README
de ce dossier). ⚠️ Autorisation du chef d'établissement nécessaire.

### 4. Publier sur GitHub Pages
Le site est déployé via **« Deploy from a branch »** sur la branche **`gh-pages`**
(`Settings → Pages → Source : Deploy from a branch → gh-pages → /root`).
Les branches `main` et `gh-pages` sont tenues identiques au contenu du site.

## 🔒 Confidentialité & éthique

- Aucun cookie de pistage, aucune analytics tierce.
- Les questions et signalements **anonymes** ne sont jamais reliés à une identité.
- Lecture des messages réservée à l'équipe NAH (clé `service_role`, jamais publiée).
- Conservation **6 mois max** puis suppression (cf. `pg_cron` dans le schéma).

## 📋 À compléter par l'équipe NAH

- [ ] Coordonnées des personnes-ressources (page Comprendre → organigramme).
- [ ] Email dédié définitif (placeholder : `contact@nah-marceau.fr`).
- [ ] Comptes réseaux sociaux.
- [ ] Photo du lycée.
- [ ] Statut du projet (associatif / officiel) dans les mentions légales.

---

Conçu bénévolement par Gabriel Merlin · Projet pilote 2026.
