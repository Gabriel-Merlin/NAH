import { Routes, Route, Navigate, useParams } from 'react-router-dom'
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

// Rétro-compatibilité : les anciens liens /subject/:sid/chapter/:cid
// (où le chapitre était en fait un thème) redirigent vers la page Thème.
function OldChapterRedirect() {
  const { sid, cid } = useParams()
  return <Navigate to={`/subject/${sid}/theme/${cid}`} replace />
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/subject/:sid" element={<Subject />} />
        <Route path="/subject/:sid/theme/:tid" element={<Theme />} />
        <Route path="/subject/:sid/theme/:tid/chapter/:cidx" element={<Chapter />} />
        <Route path="/subject/:sid/chapter/:cid" element={<OldChapterRedirect />} />
        <Route path="/favoris" element={<Favoris />} />
        <Route path="/badges" element={<Badges />} />
        <Route path="/classe" element={<Classe />} />
        <Route path="/classement" element={<Leaderboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}
