import { Link } from 'react-router-dom'

const CONTACT = 'revizstmg@gmail.com'

// Foire aux questions. Rédigée en français (public : lycées français).
export default function Faq() {
  const items = [
    ['Comment créer un compte ?', <>Sur l'écran d'accueil, choisis <b>« Créer un compte »</b>, puis <b>Élève</b> ou <b>Professeur</b>, et remplis tes informations. Le compte est nécessaire pour sauvegarder ta progression.</>],
    ['J\'ai oublié mon mot de passe.', <>Sur l'écran <b>« Se connecter »</b>, clique <b>« Mot de passe oublié ? »</b>, entre ton adresse e‑mail : tu reçois un <b>code par mail</b>, puis tu choisis un nouveau mot de passe.</>],
    ['Comment rejoindre la classe de mon professeur ?', <>Va dans l'onglet <b>« Classe »</b> et saisis le <b>code de classe</b> que ton professeur t'a communiqué.</>],
    ['Je suis professeur : comment créer une classe ?', <>Crée un compte <b>Professeur</b> : un <b>code de classe unique</b> est généré automatiquement. Tu le retrouves à tout moment dans l'onglet « Classe » (bouton copier) et tu le partages à tes élèves. Tu peux en créer d'autres, et exclure un élève si besoin.</>],
    ['Ma progression est‑elle sauvegardée ?', <>Oui. Elle est enregistrée sur <b>ton compte</b> : connecte‑toi et tu la retrouves sur <b>tous tes appareils</b> (téléphone, ordinateur…).</>],
    ['Comment changer ma photo ou l\'apparence du site ?', <>Clique sur <b>ton initiale en haut à droite</b> → <b>« Personnaliser mon profil »</b> (couleurs, police, avatar, photo…).</>],
    ['Qui voit mes informations ?', <>Dans ta classe, ton <b>prénom, ta photo et tes scores</b> sont visibles par tes camarades et ton professeur. Ton <b>e‑mail</b> sert uniquement à la connexion. Détails dans la <Link to="/confidentialite" className="font-semibold text-[#98761f] underline dark:text-[#d9bd77]">Politique de confidentialité</Link>.</>],
    ['Comment supprimer mon compte ?', <>Va dans <Link to="/moi" className="font-semibold text-[#98761f] underline dark:text-[#d9bd77]">« Mon espace »</Link> → tout en bas → <b>« Supprimer mon compte »</b>. Toutes tes données sont effacées.</>],
    ['Le site est‑il gratuit ?', <>Oui, RévizSTMG est entièrement gratuit.</>],
  ]
  return (
    <div className="animate-lux mx-auto max-w-2xl space-y-5">
      <header>
        <p className="kicker">RévizSTMG</p>
        <h1 className="font-display text-3xl font-medium leading-tight">Foire aux questions</h1>
      </header>
      <hr className="rule-gold" />
      {items.map(([q, a], i) => (
        <section key={i} className="card p-5">
          <h2 className="mb-2 font-display text-lg font-semibold">{q}</h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">{a}</p>
        </section>
      ))}
      <div className="card card-lux p-5 text-center">
        <h2 className="font-display text-lg font-semibold">Une autre question ?</h2>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Écris‑nous, on te répond :</p>
        <a href={`mailto:${CONTACT}`} className="mt-2 inline-block font-semibold text-[#98761f] underline dark:text-[#d9bd77]">{CONTACT}</a>
      </div>
      <div className="pt-1">
        <Link to="/accueil" className="btn-ghost !min-h-0 !py-2 text-sm">← Retour</Link>
      </div>
    </div>
  )
}
