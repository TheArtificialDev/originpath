import { createClient } from '@supabase/supabase-js'
import { Database } from '../types/database'

if (!process.env.URL || !process.env.API_KEY) {
  throw new Error('Missing Supabase environment variables')
}

// Create a single supabase client for interacting with your database
export const supabase = createClient<Database>(
  process.env.URL,
  process.env.API_KEY,
  {
    auth: {
      persistSession: false // We don't need user sessions for this use case
    }
  }
)

// Server-side client (for API routes and server components)
export const createServerSupabaseClient = () => {
  return createClient<Database>(
    process.env.URL!,
    process.env.API_KEY!,
    {
      auth: {
        persistSession: false
      }
    }
  )
}