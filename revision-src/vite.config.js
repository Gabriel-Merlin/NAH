import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// Build produit UN SEUL fichier HTML autonome (JS + CSS + données inlinés).
// `base: './'` + HashRouter => fonctionne depuis n'importe quelle URL
// (GitHub Pages, file://, sous-dossier) sans configuration de serveur.
export default defineConfig({
  base: './',
  plugins: [react(), viteSingleFile()],
  build: {
    outDir: '../revision',
    emptyOutDir: true,
    // Un seul fichier : pas de découpage.
    cssCodeSplit: false,
    assetsInlineLimit: 100000000,
    chunkSizeWarningLimit: 5000,
  },
})
