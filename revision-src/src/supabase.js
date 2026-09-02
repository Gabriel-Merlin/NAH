// Configuration Supabase partagée (projet du lycée « NAH-Lycee-Marceau »).
// La clé « anon » est PUBLIQUE par conception (accès protégé par les règles RLS).
export const SUPA_URL = 'https://wyydagcjkbivtbuhbzon.supabase.co'
export const SUPA_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5eWRhZ2Nqa2JpdnRidWhiem9uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxNjUzNjgsImV4cCI6MjA5NTc0MTM2OH0.ZSfHT9Ki6_bZae9yeJm-rh9Nc7TrsJnX08q68KK0xfs'
export const SUPA_READY = /^https:\/\/[a-z0-9]+\.supabase\.co$/.test(SUPA_URL) && SUPA_ANON.length > 20
