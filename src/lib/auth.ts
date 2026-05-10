import { createClient } from '@/lib/supabase/client'
import type { User } from '@supabase/supabase-js'

export async function getCurrentUser(): Promise<User | null> {
  try {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    return user
  } catch {
    return null
  }
}

export async function signInWithGoogle(): Promise<void> {
  const supabase = createClient()
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
    },
  })
  if (error) throw error
}

export async function signOut(): Promise<void> {
  const supabase = createClient()
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}
