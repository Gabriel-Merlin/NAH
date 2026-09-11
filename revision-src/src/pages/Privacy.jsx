import { Link } from 'react-router-dom'

// Politique de confidentialité & RGPD. Rédigée en français : l'outil s'adresse à
// des lycées français. Accessible depuis « Mon espace », le pied de page et
// l'inscription. Dernière mise à jour : septembre 2026.
export default function Privacy() {
  return (
    <div className="animate-lux mx-auto max-w-2xl space-y-5">
      <header>
        <p className="kicker">RévizSTMG</p>
        <h1 className="font-display text-3xl font-medium leading-tight">Confidentialité &amp; protection des données</h1>
        <p className="mt-2 text-xs text-slate-400">Dernière mise à jour : septembre 2026 · Conforme au RGPD (règlement UE 2016/679) et à la loi « Informatique et Libertés »</p>
      </header>
      <hr className="rule-gold" />

      <p className="text-sm text-slate-600 dark:text-slate-300">
        RévizSTMG est un outil de révision gamifié pour les élèves de STMG. Nous appliquons le principe de
        <b> minimisation</b> : nous ne collectons que les données strictement nécessaires, jamais à des fins
        publicitaires. <b>Aucune donnée n'est vendue, louée ou cédée</b>, et il n'y a <b>ni publicité, ni
        traceur tiers, ni profilage commercial</b>. Cette page explique quelles données sont traitées, pourquoi,
        et comment tu gardes le contrôle.
      </p>

      <Section title="1. Responsable du traitement">
        <p>RévizSTMG est édité par <b>Matys DONAT</b> et <b>Gabriel MERLIN</b>, responsables conjoints du
        traitement. Pour toute question relative à tes données ou pour exercer tes droits, écris à{' '}
        <a href="mailto:revizstmg@gmail.com" className="font-semibold text-[#98761f] underline dark:text-[#d9bd77]">revizstmg@gmail.com</a>.</p>
      </Section>

      <Section title="2. Données traitées">
        <ul className="list-disc space-y-1 pl-5">
          <li><b>Identité &amp; compte</b> : prénom, nom, adresse e-mail, mot de passe (stocké <b>haché</b>, jamais en clair).</li>
          <li><b>Photo de profil</b> : facultative, réduite localement avant envoi.</li>
          <li><b>Scolarité</b> : niveau, spécialité, éventuel code de classe.</li>
          <li><b>Progression pédagogique</b> : XP, scores, badges, favoris, séries, temps de révision, historique.</li>
          <li><b>Contributions</b> : QCM créés, messages de classe, réponses partagées avec ta classe.</li>
          <li><b>Données techniques minimales</b> : celles nécessaires au bon fonctionnement et à la sécurité
          (journalisation technique par notre hébergeur). Nous n'utilisons <b>aucun cookie publicitaire</b>.</li>
        </ul>
      </Section>

      <Section title="3. Finalités &amp; bases légales">
        <ul className="list-disc space-y-1 pl-5">
          <li><b>Fournir le service</b> (compte, sauvegarde et synchronisation de la progression, espace classe) — base légale : <b>exécution du contrat</b> / mesures précontractuelles.</li>
          <li><b>Sécurité et prévention des abus</b> — base légale : <b>intérêt légitime</b>.</li>
          <li><b>Éléments facultatifs</b> (photo, rappels, notifications) — base légale : <b>ton consentement</b>, retirable à tout moment.</li>
        </ul>
      </Section>

      <Section title="4. Stockage local sur ton appareil">
        <p>Certaines préférences (thème, langue, réglages d'affichage, brouillons, paquets de flashcards
        téléchargés) sont conservées <b>uniquement sur ton appareil</b> (stockage local du navigateur). Elles ne
        sont pas transmises à nos serveurs et disparaissent si tu effaces les données du site.</p>
      </Section>

      <Section title="5. Hébergement, localisation &amp; sous-traitants">
        <p>Les données de compte et de progression sont hébergées chez <b>Supabase</b>, sur des serveurs situés
        dans l'<b>Union européenne</b> (région Paris). Un <b>prestataire d'envoi d'e-mails</b> est utilisé
        uniquement pour les messages du service (confirmation d'inscription, réinitialisation de mot de passe).
        Ces sous-traitants agissent sur nos instructions et sont soumis à des obligations de confidentialité.
        Aucun transfert de données hors UE n'est effectué sans garanties appropriées.</p>
      </Section>

      <Section title="6. Visibilité au sein de ta classe">
        <p>Si tu rejoins une classe, ton <b>prénom, ta photo et tes scores</b> sont visibles par les autres
        membres et par ton professeur (classement, entraide, QCM). Ton <b>adresse e-mail n'est jamais montrée</b>
        aux autres élèves. Tu peux quitter une classe à tout moment.</p>
      </Section>

      <Section title="7. Durée de conservation">
        <p>Tes données sont conservées <b>tant que ton compte existe</b>. Un compte resté <b>inactif plus de
        24 mois</b> peut être supprimé après information. À la suppression du compte, tes données personnelles
        sont <b>effacées</b> (des sauvegardes techniques transitoires peuvent subsister quelques jours avant
        rotation).</p>
      </Section>

      <Section title="8. Sécurité">
        <p>Les échanges sont <b>chiffrés en transit (HTTPS)</b>. L'accès aux données est protégé par des règles
        de sécurité au niveau des lignes (<i>Row Level Security</i>) : chaque élève n'accède qu'à ses propres
        données et à celles explicitement partagées avec sa classe. Les mots de passe sont <b>hachés</b>.</p>
      </Section>

      <Section title="9. Tes droits">
        <p>Conformément au RGPD, tu disposes des droits d'<b>accès</b>, de <b>rectification</b>, d'<b>effacement</b>,
        de <b>limitation</b>, de <b>portabilité</b> et d'<b>opposition</b>, ainsi que du droit de <b>retirer ton
        consentement</b> à tout moment. En pratique :</p>
        <ul className="list-disc space-y-1 pl-5">
          <li><b>Accéder / rectifier</b> tes informations depuis « Personnaliser mon profil ».</li>
          <li><b>Supprimer ton compte et tes données</b> depuis <Link to="/moi" className="font-semibold text-[#98761f] underline dark:text-[#d9bd77]">Mon espace</Link> (bouton « Supprimer mon compte »).</li>
          <li><b>Exporter</b> ta progression ou exercer un autre droit : écris à <a href="mailto:revizstmg@gmail.com" className="font-semibold text-[#98761f] underline dark:text-[#d9bd77]">revizstmg@gmail.com</a>.</li>
        </ul>
        <p>Nous répondons dans un délai maximal d'<b>un mois</b>. Tu peux aussi introduire une réclamation auprès
        de la <b>CNIL</b> (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#98761f] underline dark:text-[#d9bd77]">www.cnil.fr</a>).</p>
      </Section>

      <Section title="10. Élèves mineurs">
        <p>RévizSTMG s'utilise dans un <b>cadre scolaire</b>. Pour un élève mineur, l'utilisation suppose l'accord
        de l'<b>établissement</b> et/ou du <b>représentant légal</b>. L'inscription ne demande que les informations
        nécessaires, et un parent peut à tout moment demander l'accès ou la suppression des données de son enfant
        via l'adresse de contact.</p>
      </Section>

      <Section title="11. Modifications de cette politique">
        <p>Cette politique peut évoluer (nouvelle fonctionnalité, obligation légale). En cas de changement
        important, nous en informons les utilisateurs dans l'application. La date de dernière mise à jour figure
        en haut de cette page.</p>
      </Section>

      <Section title="12. Contact">
        <p>Une question, une demande, un doute ? Écris à{' '}
        <a href="mailto:revizstmg@gmail.com" className="font-semibold text-[#98761f] underline dark:text-[#d9bd77]">revizstmg@gmail.com</a>{' '}
        ou parles-en à ton professeur. RévizSTMG est créé par <b>Matys DONAT</b> et <b>Gabriel MERLIN</b>.</p>
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
