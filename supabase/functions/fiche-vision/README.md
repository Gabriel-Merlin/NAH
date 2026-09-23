# Fiche par photo — analyse IA (vision)

Cette *Edge Function* Supabase lit une photo de cours / sujet STMG avec une **IA
de vision** et renvoie une fiche structurée (`questions`, `keyInfo`,
`definitions`). Contrairement à l'OCR embarqué, elle lit correctement les
**tableaux, le texte petit et l'écriture manuscrite**.

Deux fournisseurs possibles, choisis automatiquement selon la clé configurée :

| Fournisseur | Secret à définir | Coût |
|---|---|---|
| **Google Gemini** (recommandé) | `GEMINI_API_KEY` | **Gratuit** dans la limite du quota |
| Anthropic Claude | `ANTHROPIC_API_KEY` | Payant (~1 à 3 centimes/photo) |

Si les deux clés sont présentes, **Gemini** est utilisé.
La clé reste **côté serveur** (secret Supabase) : jamais dans l'application.

## Mise en place gratuite avec Gemini (une seule fois, ~5 min)

1. Crée une **clé API gratuite** sur Google AI Studio : https://aistudio.google.com/apikey
2. Installe le [CLI Supabase](https://supabase.com/docs/guides/cli), puis :

```bash
# à la racine du dépôt
supabase link --project-ref wyydagcjkbivtbuhbzon
supabase functions deploy fiche-vision --no-verify-jwt
supabase secrets set GEMINI_API_KEY=AIza...        # ta clé Google (gratuite)

# (facultatif) choisir le modèle Gemini — défaut : gemini-2.0-flash
supabase secrets set GEMINI_MODEL=gemini-2.0-flash
```

C'est tout : le bouton **« ✨ Analyser avec l'IA »** de la page *Fiche par photo*
fonctionne alors, **gratuitement**, pour tous les élèves.

## Bon à savoir sur le gratuit (Gemini)

- **Quota** : l'offre gratuite est limitée (nombre de requêtes par minute et par
  jour). Largement suffisant pour un usage personnel ; plus juste si toute une
  classe l'utilise en même temps. Les limites à jour :
  https://ai.google.dev/gemini-api/docs/rate-limits
- **Confidentialité** : sur l'offre **gratuite**, Google peut utiliser les
  contenus pour améliorer ses services. Pour des cours de STMG ce n'est pas
  sensible ; évite d'y envoyer des documents personnels. L'offre payante de
  Google, elle, n'utilise pas les données.

## Alternative payante mais privée (Anthropic Claude)

```bash
supabase secrets set ANTHROPIC_API_KEY=sk-ant-...   # console.anthropic.com
# (facultatif) modèle moins cher : supabase secrets set FICHE_MODEL=claude-haiku-4-5
```

Retire simplement `GEMINI_API_KEY` (ou ne le mets pas) pour forcer Claude.

## Sécurité / coûts

- La fonction est publique (`--no-verify-jwt`) pour que chaque élève puisse
  l'appeler avec la clé anonyme de l'appli. Pour maîtriser l'usage, tu pourras
  plus tard : exiger la connexion (JWT), ajouter une limite de débit, ou
  réserver l'IA à l'offre payante (paywall).
- Aucune donnée n'est stockée : la photo est envoyée à l'IA, la fiche est
  renvoyée, rien n'est conservé côté fonction.
- Changer un secret (`supabase secrets set ...`) est pris en compte
  immédiatement, sans redéployer.

## Test rapide

```bash
curl -s -X POST \
  "https://wyydagcjkbivtbuhbzon.supabase.co/functions/v1/fiche-vision" \
  -H "apikey: <clé anon>" -H "Content-Type: application/json" \
  -d '{"images":["data:image/jpeg;base64,/9j/..."]}'
```

Réponse attendue : `{ "fiche": { ... }, "provider": "gemini" }`.
Si aucune clé n'est configurée : `{ "error": "not_configured" }` (l'appli
bascule alors automatiquement sur la lecture OCR embarquée).
