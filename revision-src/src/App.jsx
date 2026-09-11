import { Routes, Route, Navigate, useParams } from 'react-router-dom'
import { useStore } from './store.jsx'
import Layout from './components/Layout.jsx'
import Landing from './pages/Landing.jsx'
import Home from './pages/Home.jsx'
import Subject from './pages/Subject.jsx'
import Theme from './pages/Theme.jsx'
import Chapter from './pages/Chapter.jsx'
import Favoris from './pages/Favoris.jsx'
import Badges from './pages/Badges.jsx'
import Leaderboard from './pages/Leaderboard.jsx'
import Classe from './pages/Classe.jsx'
import Profile from './pages/Profile.jsx'
import Coach from './pages/Coach.jsx'
import Revise from './pages/Revise.jsx'
import BacBlanc from './pages/BacBlanc.jsx'
import Programme from './pages/Programme.jsx'
import GrandOral from './pages/GrandOral.jsx'
import CoachAI from './pages/CoachAI.jsx'
import DailyChallenge from './pages/DailyChallenge.jsx'
import Shop from './pages/Shop.jsx'
import Privacy from './pages/Privacy.jsx'
import Faq from './pages/Faq.jsx'
import Guide from './pages/Guide.jsx'
import Friends from './pages/Friends.jsx'

// Rétro-compatibilité : les anciens liens /subject/:sid/chapter/:cid
// (où le chapitre était en fait un thème) redirigent vers la page Thème.
function OldChapterRedirect() {
  const { sid, cid } = useParams()
  return <Navigate to={`/subject/${sid}/theme/${cid}`} replace />
}

// Entrée « / » : un utilisateur qui a déjà une filière va directement à son
// accueil (redirection synchrone au rendu = aucun écran « choisis ta matière »
// qui clignote à l'ouverture). Sinon on affiche l'écran de choix.
// Le changement de filière volontaire passe par la route « /changer ».
function RootEntry() {
  const { state } = useStore()
  if (state.track) return <Navigate to="/accueil" replace />
  return <Landing />
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<RootEntry />} />
        <Route path="/changer" element={<Landing />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/subject/:sid" element={<Subject />} />
        <Route path="/subject/:sid/theme/:tid" element={<Theme />} />
        <Route path="/subject/:sid/theme/:tid/chapter/:cidx" element={<Chapter />} />
        <Route path="/subject/:sid/chapter/:cid" element={<OldChapterRedirect />} />
        <Route path="/favoris" element={<Favoris />} />
        <Route path="/badges" element={<Badges />} />
        <Route path="/classe" element={<Classe />} />
        <Route path="/moi" element={<Profile />} />
        <Route path="/coach" element={<Coach />} />
        <Route path="/revision" element={<Revise />} />
        <Route path="/bac-blanc" element={<BacBlanc />} />
        <Route path="/programme" element={<Programme />} />
        <Route path="/grand-oral" element={<GrandOral />} />
        <Route path="/coach-ia" element={<CoachAI />} />
        <Route path="/defi" element={<DailyChallenge />} />
        <Route path="/boutique" element={<Shop />} />
        <Route path="/confidentialite" element={<Privacy />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/classement" element={<Leaderboard />} />
        <Route path="/amis" element={<Friends />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}
