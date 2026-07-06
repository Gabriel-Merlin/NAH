import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Subject from './pages/Subject.jsx'
import Chapter from './pages/Chapter.jsx'
import Favoris from './pages/Favoris.jsx'
import Badges from './pages/Badges.jsx'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subject/:sid" element={<Subject />} />
        <Route path="/subject/:sid/chapter/:cid" element={<Chapter />} />
        <Route path="/favoris" element={<Favoris />} />
        <Route path="/badges" element={<Badges />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}
