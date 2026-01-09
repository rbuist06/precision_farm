import { createServerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Database } from '@/types/supabase';

export const createSupabaseServerClient = () => {
  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
    {
      cookies: {
        getAll: async () => {
          const cookieStore = await cookies();

          return cookieStore.getAll().map(({ name, value }) => ({
            name,
            value,
          }));
        },
        setAll: async (cookieValues) => {
          const cookieStore = await cookies();
          const mutableStore = cookieStore as unknown as {
            set?: (name: string, value: string, options?: Record<string, unknown>) => void;
          };

          cookieValues.forEach(({ name, value, options }) => {
            mutableStore.set?.(name, value, options);
          });
        },
      },
    }
  );
};