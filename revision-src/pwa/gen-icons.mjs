import pw from '/opt/node22/lib/node_modules/playwright/index.js'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
const { chromium } = pw
const DIR = dirname(fileURLToPath(import.meta.url))
const CHROME = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome'

const SERIF = "'Liberation Serif','DejaVu Serif',Georgia,'Times New Roman',serif"

// SVG de l'icône. `bleed` = plein cadre (maskable/apple), sinon coins arrondis (transparent autour).
function svg(size, { bleed = false } = {}) {
  const r = bleed ? 0 : Math.round(size * 0.22)
  // Zone de sécurité : la lettre plus petite en mode maskable/bleed.
  const letterSize = Math.round(size * (bleed ? 0.5 : 0.56))
  const cx = size / 2
  const cy = size / 2
  const ruleW = Math.round(size * (bleed ? 0.26 : 0.3))
  const ruleY = Math.round(cy + letterSize * 0.52)
  const border = bleed ? '' : `<rect x="${size*0.045}" y="${size*0.045}" width="${size*0.91}" height="${size*0.91}" rx="${Math.max(0,r-Math.round(size*0.045))}" fill="none" stroke="url(#gold)" stroke-width="${Math.max(1,size*0.008)}" opacity="0.55"/>`
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#2c251b"/>
      <stop offset="0.55" stop-color="#1b1611"/>
      <stop offset="1" stop-color="#100d09"/>
    </linearGradient>
    <linearGradient id="gold" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#f6dc9c"/>
      <stop offset="0.5" stop-color="#e3bd6a"/>
      <stop offset="1" stop-color="#bb8c36"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.32" cy="0.26" r="0.8">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.10"/>
      <stop offset="0.6" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect x="0" y="0" width="${size}" height="${size}" rx="${r}" fill="url(#bg)"/>
  <rect x="0" y="0" width="${size}" height="${size}" rx="${r}" fill="url(#glow)"/>
  ${border}
  <text x="${cx}" y="${cy}" fill="url(#gold)" font-family="${SERIF}" font-weight="700"
        font-size="${letterSize}" text-anchor="middle" dominant-baseline="central"
        style="letter-spacing:${-size*0.01}px">R</text>
  <rect x="${cx - ruleW/2}" y="${ruleY}" width="${ruleW}" height="${Math.max(2,size*0.012)}" rx="${size*0.006}" fill="url(#gold)" opacity="0.9"/>
</svg>`
}

const targets = [
  { name: 'icon-192.png', size: 192, bleed: false, transparent: true },
  { name: 'icon-512.png', size: 512, bleed: false, transparent: true },
  { name: 'icon-maskable-512.png', size: 512, bleed: true, transparent: false },
  { name: 'apple-touch-icon.png', size: 180, bleed: true, transparent: false },
  { name: 'favicon.png', size: 48, bleed: true, transparent: false },
]

const browser = await chromium.launch({ executablePath: CHROME })
for (const t of targets) {
  const page = await browser.newPage({ viewport: { width: t.size, height: t.size }, deviceScaleFactor: 1 })
  const markup = svg(t.size, { bleed: t.bleed })
  await page.setContent(`<!doctype html><html><head><meta charset="utf-8"><style>*{margin:0;padding:0}html,body{width:${t.size}px;height:${t.size}px;background:transparent}svg{display:block}</style></head><body>${markup}</body></html>`, { waitUntil: 'networkidle' })
  await page.waitForTimeout(120)
  const el = await page.$('svg')
  await el.screenshot({ path: join(DIR, t.name), omitBackground: t.transparent })
  await page.close()
  console.log('OK', t.name, `${t.size}x${t.size}`)
}
await browser.close()
console.log('Icônes générées dans', DIR)
