import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY!
const supabaseAdmin = createClient(supabaseUrl, supabaseAnonKey)

export async function GET() {
  try {
    if (!process.env.WEBAPP_USER || !process.env.WEBAPP_PASSWORD) {
      console.error('Variables d\'environnement manquantes')
      return NextResponse.json(
        { error: 'Configuration incorrecte' },
        { status: 500 }
      )
    }

    const { data, error } = await supabaseAdmin.auth.signInWithPassword({
      email: process.env.WEBAPP_USER,
      password: process.env.WEBAPP_PASSWORD
    })

    if (error) {
      console.error('Erreur Supabase:', error)
      throw error
    }

    return NextResponse.json({ session: data.session })
  } catch (error) {
    console.error('Erreur détaillée:', error)
    return NextResponse.json(
      { error: 'Erreur d\'authentification' },
      { status: 501 }
    )
  }
}