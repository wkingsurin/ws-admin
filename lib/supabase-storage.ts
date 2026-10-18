import "server-only";

import { createClient } from "@supabase/supabase-js";
import { env } from "prisma/config";

export const supabaseStorage = createClient(
  env("SUPABASE_URL"),
  env("SUPABASE_SERVICE_ROLE_KEY"),
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  },
);
