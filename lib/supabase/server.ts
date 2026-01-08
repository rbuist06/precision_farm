import { createServerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Database } from '@/types/supabase';

export const createSupabaseServerClient = () =>
  createServerClient<Database>({
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
    cookies,
  });