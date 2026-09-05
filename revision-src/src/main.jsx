import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { StoreProvider } from './store.jsx'
import App from './App.jsx'
import { initPwa } from './pwa.js'
import './index.css'

// Capture l'invite d'installation « Ajouter à l'écran d'accueil » dès le départ.
initPwa()

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* HashRouter : fonctionne sur GitHub Pages et en local sans configuration serveur. */}
    <HashRouter>
      <StoreProvider>
        <App />
      </StoreProvider>
    </HashRouter>
  </React.StrictMode>,
)
