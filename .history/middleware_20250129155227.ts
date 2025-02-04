import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req: request, res })

  try {
    console.log('Connexion automatique avec le webapp_user')
    // Connexion automatique avec le webapp_user
    const { data, error } = await supabase.auth.signInWithPassword({
      email: process.env.WEBAPP_USER!,
      password: process.env.WEBAPP_PASSWORD!
    })

    if (error) throw error
  } catch (error) {
    console.error('Erreur de connexion automatique:', error)
  }

  return res
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}