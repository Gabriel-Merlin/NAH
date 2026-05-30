/* =========================================================
   NAH — Configuration Supabase
   ---------------------------------------------------------
   1. Crée un projet sur https://supabase.com
   2. Récupère l'URL du projet + la clé "publishable" (anon)
   3. Renseigne-les ci-dessous.
   4. Exécute le script supabase/schema.sql dans l'éditeur SQL.

   La clé anon est PUBLIQUE par nature : la sécurité repose sur
   les politiques Row Level Security (RLS) définies dans schema.sql.
   ========================================================= */

window.NAH_CONFIG = {
  // À remplacer par les vraies valeurs du projet de ta sœur :
  SUPABASE_URL: 'https://wyydagcjkbivtbuhbzon.supabase.co',
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5eWRhZ2Nqa2JpdnRidWhiem9uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxNjUzNjgsImV4cCI6MjA5NTc0MTM2OH0.ZSfHT9Ki6_bZae9yeJm-rh9Nc7TrsJnX08q68KK0xfs',

  // Tant que ce n'est pas configuré, les formulaires fonctionnent
  // en mode "démo" (rien n'est envoyé, message de confirmation simulé).
  get isConfigured() {
    return this.SUPABASE_URL.indexOf('VOTRE-PROJET') === -1 &&
           this.SUPABASE_ANON_KEY.indexOf('VOTRE_CLE') === -1;
  }
};

/* Petit client REST minimal (pas de dépendance externe).
   Utilise l'API REST PostgREST exposée par Supabase. */
window.nahDB = {
  _headers: function () {
    return {
      'Content-Type': 'application/json',
      'apikey': window.NAH_CONFIG.SUPABASE_ANON_KEY,
      'Authorization': 'Bearer ' + window.NAH_CONFIG.SUPABASE_ANON_KEY,
      'Prefer': 'return=representation'
    };
  },

  // INSERT dans une table
  insert: async function (table, row) {
    if (!window.NAH_CONFIG.isConfigured) {
      await new Promise(function (r) { setTimeout(r, 400); }); // simulation
      return { demo: true };
    }
    const headers = this._headers();
    headers['Prefer'] = 'return=minimal'; // pas de SELECT après INSERT
    const res = await fetch(window.NAH_CONFIG.SUPABASE_URL + '/rest/v1/' + table, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(row)
    });
    if (!res.ok) { throw new Error('Erreur ' + res.status); }
    return {};
  },

  // SELECT avec query string PostgREST (ex: 'select=*&order=created_at.desc')
  select: async function (table, query) {
    if (!window.NAH_CONFIG.isConfigured) {
      await new Promise(function (r) { setTimeout(r, 200); });
      return null; // mode démo : pas de données
    }
    const url = window.NAH_CONFIG.SUPABASE_URL + '/rest/v1/' + table +
      (query ? '?' + query : '');
    const res = await fetch(url, { headers: this._headers() });
    if (!res.ok) { throw new Error('Erreur ' + res.status); }
    return res.json();
  },

  // Appel d'une fonction RPC (utilisée pour le vote au sondage)
  rpc: async function (fn, args) {
    if (!window.NAH_CONFIG.isConfigured) {
      await new Promise(function (r) { setTimeout(r, 300); });
      return { demo: true };
    }
    const res = await fetch(window.NAH_CONFIG.SUPABASE_URL + '/rest/v1/rpc/' + fn, {
      method: 'POST',
      headers: this._headers(),
      body: JSON.stringify(args || {})
    });
    if (!res.ok) { throw new Error('Erreur ' + res.status); }
    return res.json();
  }
};
