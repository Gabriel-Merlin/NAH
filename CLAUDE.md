# CLAUDE.md

Ce dépôt contient deux projets distincts :

- **NAH** (racine) : site du lycée Marceau contre le harcèlement. HTML, CSS et JS
  sans framework. Documentation : `README.md`.
- **RévizSTMG** : application de révision du bac STMG. Le code est dans `revision-src/`
  et la version compilée dans `revision/`. Documentation : `revision-src/README.md`.

Ne mélangez pas les deux. Une demande sur « le site », les cours ou les exercices
concerne presque toujours RévizSTMG.

## RévizSTMG : commandes

```bash
cd revision-src
npm install
npm run dev      # http://localhost:5173, routes sous /#/
npm run build    # vide puis régénère ../revision/ (fichier unique + PWA)
```

- `revision/` est généré : ne le modifiez jamais à la main, relancez le build.
- Il n'y a pas de tests automatiques. Après une modification, vérifiez dans un
  navigateur le parcours concerné.

## RévizSTMG : contenu

- Le contenu est dans `revision-src/src/data/`, avec un fichier par matière.
- `data/index.js` assemble les matières, applique les couches d'enrichissement et
  génère les exercices et les flashcards à partir du texte des cours.
- Les cours de Terminale ne contiennent que des notions de Terminale. Les notions de
  Première servent seulement à formuler des exercices.
- N'inventez aucune notion : tout doit correspondre au programme officiel de STMG.
- L'interface et le contenu sont en français.

## Supabase

- NAH et RévizSTMG partagent le projet `wyydagcjkbivtbuhbzon`.
- La clé « anon » est publique : chaque table doit avoir des règles RLS.
- `supabase/schema.sql` est incomplet. Avant de modifier la base, vérifiez son état
  réel sur Supabase.

## Mise en ligne

- Développez sur une branche de travail.
- La production est la branche `main`. Quand `revision/` change sur `main`, le
  workflow `sync-revizstmg.yml` publie l'application sur https://revizstmg.github.io.
