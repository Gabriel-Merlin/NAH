import { Link } from 'react-router-dom'

// Politique de confidentialité (RGPD). Rédigée en français : l'outil s'adresse
// à des lycées français. Accessible depuis « Mon espace » et l'inscription.
export default function Privacy() {
  return (
    <div className="animate-lux mx-auto max-w-2xl space-y-5">
      <header>
        <p className="kicker">RévizSTMG</p>
        <h1 className="font-display text-3xl font-medium leading-tight">Confidentialité &amp; données personnelles</h1>
      </header>
      <hr className="rule-gold" />

      <p className="text-sm text-slate-600 dark:text-slate-300">
        RévizSTMG est un outil de révision gamifié pour les élèves de STMG. Cette page explique
        quelles données sont utilisées, pourquoi, et comment tu gardes le contrôle.
      </p>

      <Section title="1. Données utilisées">
        <ul className="list-disc space-y-1 pl-5">
          <li><b>Identité</b> : prénom, nom, adresse e-mail (pour ton compte et la connexion).</li>
          <li><b>Photo de profil</b> : facultative (tu peux ne pas en mettre).</li>
          <li><b>Scolarité</b> : niveau, spécialité, code de classe.</li>
          <li><b>Progression</b> : XP, scores, badges, favoris, séries.</li>
          <li><b>Contributions</b> : QCM créés, messages du mur, réponses de la classe.</li>
        </ul>
      </Section>

      <Section title="2. Pourquoi ces données">
        <p>Uniquement pour faire fonctionner l'application : ton espace personnel, la sauvegarde de
        ta progression (retrouvée sur tous tes appareils), et l'espace classe (classement, QCM,
        entraide). Aucune publicité, aucune revente de données.</p>
      </Section>

      <Section title="3. Où sont-elles stockées, qui les voit">
        <p>Les données sont hébergées chez <b>Supabase</b>, sur des serveurs situés dans l'<b>Union
        européenne</b> (région Paris). Au sein de ta classe, ton <b>prénom, ta photo et tes scores</b>
        sont visibles par les autres membres et ton professeur. Ton <b>adresse e-mail</b> sert
        seulement à la connexion et n'est pas montrée aux autres élèves.</p>
      </Section>

      <Section title="4. Durée de conservation">
        <p>Tes données sont conservées tant que ton compte existe. Elles sont supprimées lorsque tu
        supprimes ton compte (voir ci-dessous) ou sur demande.</p>
      </Section>

      <Section title="5. Tes droits">
        <p>Tu peux à tout moment :</p>
        <ul className="list-disc space-y-1 pl-5">
          <li><b>Accéder</b> à tes informations et les <b>modifier</b> (menu « Personnaliser mon profil »).</li>
          <li><b>Supprimer ton compte et tes données</b> depuis <Link to="/moi" className="font-semibold text-[#98761f] underline dark:text-[#d9bd77]">Mon espace</Link> (bouton « Supprimer mon compte »).</li>
        </ul>
      </Section>

      <Section title="6. Élèves mineurs">
        <p>Pour un élève mineur, l'utilisation de RévizSTMG suppose l'accord de l'établissement
        scolaire et/ou du représentant légal. L'inscription demande de ne fournir que les
        informations nécessaires.</p>
      </Section>

      <Section title="7. Contact">
        <p>Pour toute question ou demande relative à tes données, écris‑nous à{' '}
        <a href="mailto:revizstmg@gmail.com" className="font-semibold text-[#98761f] underline dark:text-[#d9bd77]">revizstmg@gmail.com</a>{' '}
        ou contacte ton professeur.</p>
      </Section>

      <Section title="Créateurs">
        <p>RévizSTMG est créé par <b>Matys DONAT</b> et <b>Gabriel MERLIN</b>.</p>
      </Section>

      <div className="pt-2">
        <Link to="/accueil" className="btn-ghost !min-h-0 !py-2 text-sm">← Retour</Link>
      </div>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <section className="card p-5">
      <h2 className="mb-2 font-display text-lg font-semibold">{title}</h2>
      <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300">{children}</div>
    </section>
  )
}
