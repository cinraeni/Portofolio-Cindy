import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_SUPABASE_URL: "https://dummy.supabase.co",
    NEXT_PUBLIC_SUPABASE_ANON_KEY: "dummy"
  }
};

export default nextConfig;
