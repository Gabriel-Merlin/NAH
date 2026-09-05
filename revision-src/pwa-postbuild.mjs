// Post-build PWA : rend l'app installable et hors-ligne.
// Le build Vite inline TOUT dans revision/index.html ; on garde donc le
// manifest, le service worker et les icônes en fichiers séparés (copiés ici),
// et on injecte les balises <head> + l'enregistrement du SW APRÈS le build
// pour que Vite ne les transforme pas en data:URI.
import { readdirSync, copyFileSync, readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const ROOT = dirname(fileURLToPath(import.meta.url))
const SRC = join(ROOT, 'pwa')
const OUT = join(ROOT, '..', 'revision')

// 1) Copier les fichiers PWA (tout sauf les scripts de génération).
const SKIP = new Set(['gen-icons.mjs'])
const copied = []
for (const f of readdirSync(SRC)) {
  if (SKIP.has(f)) continue
  copyFileSync(join(SRC, f), join(OUT, f))
  copied.push(f)
}

// 2) Injecter les balises PWA dans index.html.
const indexPath = join(OUT, 'index.html')
let html = readFileSync(indexPath, 'utf8')

const MARK = '<!-- pwa-head -->'
if (!html.includes(MARK)) {
  const head = `${MARK}
    <link rel="manifest" href="./manifest.webmanifest" />
    <link rel="icon" type="image/png" href="./favicon.png" />
    <link rel="apple-touch-icon" href="./apple-touch-icon.png" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="apple-mobile-web-app-title" content="RévizSTMG" />
  `
  html = html.replace('</head>', `${head}</head>`)

  const reg = `<script>
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', function () {
          navigator.serviceWorker.register('./sw.js').catch(function () {});
        });
      }
    </script>
  `
  html = html.replace('</body>', `${reg}</body>`)
  writeFileSync(indexPath, html)
}

console.log('[pwa-postbuild] fichiers copiés :', copied.join(', '))
console.log('[pwa-postbuild] balises PWA injectées dans revision/index.html')
