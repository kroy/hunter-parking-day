/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly SUPABASE_URL: string;
  readonly SUPABASE_ANON_KEY: string;
  readonly DATABASE_URL: string;
  readonly DATABASE_SCHEMA: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
