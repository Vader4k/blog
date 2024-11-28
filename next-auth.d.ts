// types/next-auth.d.ts
import type { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      providerId?: string
      provider?: string
    } & DefaultSession["user"]
  }

  interface User {
    providerId?: string
    provider?: string
  }
}

// If you're using JWT strategy, you might also want:
declare module "next-auth/jwt" {
  interface JWT {
    providerId?: string
    provider?: string
  }
}