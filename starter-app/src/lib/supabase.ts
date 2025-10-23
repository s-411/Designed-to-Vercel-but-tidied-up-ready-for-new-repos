import { createClient } from '@supabase/supabase-js'
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { env } from './env'

// Client-side Supabase client
export function createBrowserClient() {
  return createClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    }
  )
}

// Server-side Supabase client for App Router
export function createServerSupabaseClient() {
  const cookieStore = cookies()

  return createServerClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options })
          } catch (error) {
            // Cookie setting can fail in Server Components
            // This is expected and can be safely ignored
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: '', ...options })
          } catch (error) {
            // Cookie removal can fail in Server Components
            // This is expected and can be safely ignored
          }
        },
      },
    }
  )
}

// Admin client with service role key (use with caution!)
export function createAdminClient() {
  if (!env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error('SUPABASE_SERVICE_ROLE_KEY is required for admin client')
  }

  return createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
}

// Type exports for database schema
export type Database = {
  public: {
    Tables: {
      user_profiles: {
        Row: {
          id: string
          email: string
          created_at: string
          updated_at: string
          first_name: string | null
          last_name: string | null
          avatar_url: string | null
          email_verified: boolean
          subscription_status: 'free' | 'active' | 'past_due' | 'canceled' | 'trialing'
          subscription_id: string | null
          theme_preference: 'light' | 'dark' | 'system'
          onboarding_completed: boolean
        }
        Insert: {
          id: string
          email: string
          created_at?: string
          updated_at?: string
          first_name?: string | null
          last_name?: string | null
          avatar_url?: string | null
          email_verified?: boolean
          subscription_status?: 'free' | 'active' | 'past_due' | 'canceled' | 'trialing'
          subscription_id?: string | null
          theme_preference?: 'light' | 'dark' | 'system'
          onboarding_completed?: boolean
        }
        Update: {
          id?: string
          email?: string
          created_at?: string
          updated_at?: string
          first_name?: string | null
          last_name?: string | null
          avatar_url?: string | null
          email_verified?: boolean
          subscription_status?: 'free' | 'active' | 'past_due' | 'canceled' | 'trialing'
          subscription_id?: string | null
          theme_preference?: 'light' | 'dark' | 'system'
          onboarding_completed?: boolean
        }
      }
    }
  }
}
