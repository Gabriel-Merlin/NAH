# NAH — Non Au Harcèlement · Lycée Marceau

Site web de sensibilisation et d'aide contre le harcèlement scolaire, porté par
un groupe d'élèves du **Lycée Marceau** à Chartres (28).

> Tu n'es pas seul·e. Voici ce que tu peux faire, dès maintenant.

**URL de production :** https://gabriel-merlin.github.io/NAH/

---

## ✨ Pages du site

| Page | Fichier | Description |
|---|---|---|
| Accueil | `index.html` | Bandeau, CTA, numéros d'urgence |
| Comprendre | `renseignement.html` | Cartes visuelles, types de harcèlement, réagir |
| Agir & Outils | `fonctionnalites.html` | Question anonyme, sondage, calendrier, signalement |
| Nous rejoindre | `rejoindre.html` | Candidature + formulaire de connexion email/mdp |
| Contact | `contact.html` | Email, réseaux, adresse lycée |
| Espace équipe | `equipe.html` | Réservé aux membres acceptés |
| Administration | `admin.html` | Tableau de bord admin (accès restreint) |
| Activation lien | `lien-equipe.html` | Page d'activation du lien de bienvenue (usage unique) |
| Transfert admin | `transfert.html` | Prise en main de l'administration via lien |
| Mentions légales | `mentions-legales.html` | |
| Confidentialité | `confidentialite.html` | RGPD |

---

## 🛠️ Stack technique

| Couche | Outil |
|---|---|
| Front | HTML / CSS / JS **vanilla** (sans framework) |
| Hébergement | **GitHub Pages** (branche `main`) |
| Base de données | **Supabase** — projet `NAH-Lycee-Marceau` (`wyydagcjkbivtbuhbzon`) |
| Authentification | **Supabase Auth** — Google OAuth + email/mot de passe |
| Emails | **Resend** (via Edge Function Supabase) |
| Sécurité | **Row Level Security** (RLS) + fonctions SECURITY DEFINER |
| Polices | Google Fonts — Playfair Display + Inter |

---

## 🗄️ Base de données Supabase

### Tables

| Table | Rôle |
|---|---|
| `candidatures` | Demandes de candidature + membres acceptés. Colonnes : `nom`, `prenom`, `classe`, `telephone`, `email`, `token` (uuid, clé d'accès), `acceptee`, `is_admin`, `link_claimed`, `created_at` |
| `questions_anonymes` | Questions soumises anonymement |
| `signalements` | Signalements (anonymes ou avec contact) |
| `sondages` | Sondages actifs (jsonb options + votes) |
| `events` | Événements du calendrier (`date`, `titre`, `description`, `lieu`) |
| `config` | Configuration globale — clé `max_membres` (nombre de places, défaut 16) |
| `admin_invites` | Liens de transfert d'administration (usage unique, expire 72h) |

### Fonctions RPC principales

| Fonction | Rôle |
|---|---|
| `get_my_membership()` | Retourne le statut de l'utilisateur connecté (is_member, is_admin) |
| `verify_member_token(p_token)` | Vérifie un token localStorage membre |
| `verify_admin_token(p_token)` | Vérifie un token admin |
| `accept_candidature(p_token)` | Accepte une candidature (idempotente) |
| `claim_member_link(p_token)` | Brûle le lien d'accès à la première utilisation |
| `get_admin_dashboard(p_token)` | Stats + membres + candidatures en attente |
| `get_admin_dashboard_g()` | Idem, mode Google Auth |
| `admin_set_role / _g` | Promouvoir/rétrograder un membre admin |
| `admin_remove_member / _g` | Retirer un membre (protège le dernier admin) |
| `admin_tirage_au_sort / _g` | Tirage au sort parmi les candidatures en attente |
| `admin_set_max_membres / _g` | Modifier le nombre de places |
| `admin_regenerate_member_link / _g` | Régénérer un lien d'accès membre |
| `admin_generate_invite / _g` | Générer un lien de transfert d'administration |
| `use_admin_invite(p_invite_token, ...)` | Utiliser un lien de transfert admin |

### Edge Functions

| Fonction | Rôle |
|---|---|
| `accept-member` | Accepte une candidature + envoie l'email de bienvenue via Resend |
| `notify-email` | Notifie `lou.ann.merlin@gmail.com` des nouvelles soumissions |

---

## 🔐 Authentification & accès

Le site propose deux modes d'authentification pour les membres :

1. **Google OAuth** — connexion avec le compte Google utilisé lors de la candidature
2. **Email / mot de passe** — créé lors de la soumission de la candidature

### Flux d'un nouveau membre

1. L'élève remplit le formulaire de candidature (`rejoindre.html`) avec nom, prénom, classe, email et mot de passe → un compte Supabase Auth est créé + candidature enregistrée
2. L'admin voit la candidature dans le tableau de bord (`admin.html`)
3. L'admin clique **Accepter** (ou lance un **tirage au sort**) → Edge Function `accept-member` → email de bienvenue envoyé avec un lien unique
4. L'élève clique le lien → `lien-equipe.html` → lien brûlé (usage unique) → token stocké en localStorage → accès `equipe.html`
5. Les visites suivantes : connexion via email/mdp ou Google → `equipe.html`

### Flux tirage au sort

1. L'admin définit le nombre de places (défaut 16) dans la section "Tirage au sort"
2. Clic **"Lancer le tirage au sort"** → N candidats sélectionnés aléatoirement → acceptés + emails de bienvenue envoyés automatiquement
3. Une fois le plafond atteint, les boutons "Accepter" manuels sont désactivés

### Flux transfert d'administration

1. L'admin génère un lien de transfert (`admin.html` → section "Transfert d'administration") — valable 72h, usage unique
2. Envoie le lien à la nouvelle personne responsable (CPE, etc.)
3. La personne ouvre `transfert.html?token=…`, crée son compte → elle est automatiquement acceptée et promue admin

### Protections

- Le **dernier admin** ne peut pas être rétrogradé ou supprimé (protection anti-lockout)
- Les **liens de bienvenue** sont à usage unique (`link_claimed`) — une fois activé, impossible de le réutiliser
- Les **liens de transfert admin** expirent après 72h et sont invalidés à l'utilisation

---

## 📁 Structure des fichiers JS

| Fichier | Rôle |
|---|---|
| `js/supabase.js` | Config Supabase + client REST minimal (`nahDB`) |
| `js/auth.js` | Supabase Auth — Google OAuth + email/mdp, expose `window.nahAuth` |
| `js/main.js` | Navigation, scroll mobile, affichage liens équipe/admin |
| `js/functionnalites.js` | Logique page Agir & Outils (question, sondage, calendrier, signalement, candidature, connexion) |
| `js/equipe.js` | Vérification accès espace équipe |
| `js/admin.js` | Tableau de bord administration complet |
| `js/lien-equipe.js` | Activation du lien de bienvenue (usage unique) |
| `js/transfert.js` | Prise en main de l'administration via lien |

---

## 🚀 Mise en route locale

```bash
python3 -m http.server 8000
# puis ouvre http://localhost:8000
```

> Sans configuration Supabase, les formulaires fonctionnent en **mode démo** (rien n'est envoyé).

---

## 📋 À compléter par l'équipe NAH

- [ ] Coordonnées des personnes-ressources dans `renseignement.html`
- [ ] Email dédié définitif (actuellement `lou.ann.merlin@gmail.com`)
- [ ] Comptes réseaux sociaux (`contact.html`)
- [ ] Photo du lycée (`assets/lycee-marceau.jpg`) — autorisation chef d'établissement requise
- [ ] Statut officiel du projet dans `mentions-legales.html`
- [ ] Valider les mentions légales avec un adulte référent

---

## 🔒 Confidentialité & éthique

- Aucun cookie de pistage, aucune analytics tierce.
- Questions et signalements **anonymes** — jamais reliés à une identité.
- Données conservées **6 mois maximum** puis suppression.
- Mots de passe gérés exclusivement par Supabase Auth (jamais stockés en clair).

---

Conçu bénévolement par Gabriel Merlin · Projet pilote 2026.
