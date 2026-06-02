(function () {
  'use strict';

  const params = new URLSearchParams(location.search);
  const inviteToken = params.get('token');

  const formSection = document.getElementById('formulaire-transfert');
  const invalidSection = document.getElementById('lien-invalide');

  if (!inviteToken) {
    formSection.hidden = true;
    invalidSection.removeAttribute('hidden');
    return;
  }

  const form = document.getElementById('transfert-form');
  const feedback = form.querySelector('.feedback');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const nom = form.querySelector('[name="nom"]').value.trim();
    const prenom = form.querySelector('[name="prenom"]').value.trim();
    const classe = form.querySelector('[name="classe"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const password = form.querySelector('[name="password"]').value;
    const passwordConfirm = form.querySelector('[name="password_confirm"]').value;

    if (!nom || !prenom || !classe || !email) {
      showFeedback(feedback, 'Merci de remplir tous les champs.', false);
      return;
    }
    if (!password || password.length < 6) {
      showFeedback(feedback, 'Le mot de passe doit faire au moins 6 caractères.', false);
      return;
    }
    if (password !== passwordConfirm) {
      showFeedback(feedback, 'Les deux mots de passe ne correspondent pas.', false);
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    showFeedback(feedback, 'Création du compte en cours…', true);

    try {
      // 1. Créer le compte Supabase Auth (ignoré si l'email a déjà un compte)
      try {
        await window.nahAuth.signUpWithPassword(email, password);
      } catch (e) { /* compte existant : on continue */ }

      // 2. S'authentifier AVANT de consommer le lien.
      //    Si l'email a déjà un compte avec un autre mot de passe, on s'arrête ici :
      //    le lien n'est PAS consommé et l'ancien admin garde ses droits (il peut
      //    régénérer un lien autant de fois que nécessaire).
      let signedIn = false;
      try {
        await window.nahAuth.signInWithPassword(email, password);
        signedIn = true;
      } catch (e) { signedIn = false; }

      if (!signedIn) {
        showFeedback(feedback,
          'Un compte existe déjà avec cette adresse e-mail, mais le mot de passe saisi ne correspond pas. ' +
          'Saisis le mot de passe habituel de ce compte, ou demande un nouveau lien à l\'administrateur actuel.', false);
        submitBtn.disabled = false;
        return;
      }

      // 3. Utiliser le lien d'invitation (promotion admin + démission de l'ancien admin)
      const result = await window.nahDB.rpc('use_admin_invite', {
        p_invite_token: inviteToken,
        p_nom: nom,
        p_prenom: prenom,
        p_classe: classe,
        p_email: email
      });

      if (!result || !result.ok) {
        throw new Error(result && result.error || 'Lien invalide ou expiré.');
      }

      // 4. Rediriger vers l'administration
      showFeedback(feedback, 'Compte validé ! Redirection vers l\'administration…', true);
      setTimeout(function () { location.href = 'admin.html'; }, 1500);

    } catch (err) {
      showFeedback(feedback, err.message || 'Une erreur est survenue.', false);
      submitBtn.disabled = false;
    }
  });

  function showFeedback(el, text, ok) {
    if (!el) return;
    el.textContent = text;
    el.className = 'feedback ' + (ok ? 'feedback--ok' : 'feedback--err');
    el.removeAttribute('hidden');
  }
})();
