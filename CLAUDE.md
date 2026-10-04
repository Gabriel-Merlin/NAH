# CLAUDE.md

Ce dépôt contient **NAH**, le site du lycée Marceau contre le harcèlement : HTML, CSS
et JS sans framework, servi par GitHub Pages depuis `main`. Documentation :
`README.md`.

**RévizSTMG n'est plus ici.** L'application de révision du bac STMG vit dans le
dépôt `revizstmg/revizstmg.github.io`. Toute demande sur les cours, les exercices ou
l'app de révision se traite dans ce dépôt-là. Ici, il ne reste que
`revision/index.html`, une page qui redirige l'ancienne adresse vers
https://revizstmg.github.io.

## Supabase

- NAH partage le projet `wyydagcjkbivtbuhbzon` avec RévizSTMG. Ne touchez pas aux
  tables de RévizSTMG (`profiles`, `leaderboard`, `friend_*`, `class_*`,
  `child_stats`).
- La clé « anon » est publique : chaque table doit avoir des règles RLS.
- `supabase/schema.sql` est incomplet. Avant de modifier la base, vérifiez son état
  réel sur Supabase.
