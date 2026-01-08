'use client';

import { createBrowserClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types/supabase';

export const supabase = createBrowserClient<Database>({
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
});