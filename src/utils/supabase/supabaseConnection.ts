// Import the module for client creation from the Supabase SDK.
import { createClient } from '@supabase/supabase-js'

// Set variables for your Supabase connection. Replace supabaseUrl with the
// API address for your instance, and replace supabaseAnonKey with the anon
// key for your instance.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL as string
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY as string

// Create and export the Supabase client.
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false
  }
})

// Connexion automatique via l'API Routeconst initWebAppUser = async () => {
const initWebAppUser = async () => {
  try {
    // Utiliser le chemin absolu
    const response = await fetch('/api/authSupabase', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const { session, error } = await response.json()

    if (error) throw error
    if (session) {
      await supabase.auth.setSession(session)
    }
  } catch (error) {
    console.error('Erreur de connexion:', error)
  }
}

// Initialiser la connexion
initWebAppUser()