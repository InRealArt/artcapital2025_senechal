import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  let response = NextResponse.next()

  // Création du client Supabase avec les cookies
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          // Convertit le domaine relatif en absolu pour la compatibilité des cookies
          if (options?.domain?.startsWith('.')) {
            options.domain = options.domain.slice(1)
          }
          response.cookies.set({
            name,
            value,
            ...options,
          })
        },
        remove(name: string, options: CookieOptions) {
          response.cookies.set({
            name,
            value: '',
            ...options,
          })
        },
      },
    }
  )

  // Vérification de la session
  const { data: { session }, error } = await supabase.auth.getSession()

  // Si pas de session valide, tentative de connexion automatique
  if (!session) {
    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email: process.env.WEBAPP_USER!,
        password: process.env.WEBAPP_PASSWORD!
      })

      if (signInError) {
        console.error('Erreur de connexion automatique:', signInError)
      }
    } catch (error) {
      console.error('Erreur inattendue lors de la connexion:', error)
    }
  }

  return response
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}