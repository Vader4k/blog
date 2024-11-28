import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    jwt({ token, account}){
      if(account){
        token.providerId = account.providerAccountId
        token.provider = account.provider
      }
      return token
    },
    session({session, token}){
      if(session.user){
        session.user.providerId = token.providerId as string
        session.user.provider = token.provider as string
      }
      return session
    }
  }
});
