import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

// This would connect to MongoDB in a real implementation
const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "Email OTP",
      credentials: {
        email: { label: "Email", type: "email" },
        otp: { label: "OTP", type: "text" },
      },
      async authorize(credentials) {
        // In a real implementation, this would verify the OTP against what was sent
        if (!credentials?.email || !credentials?.otp) {
          return null
        }

        // Mock verification - in a real app, you'd verify against a database
        if (credentials.otp === "123456") {
          return {
            id: "1",
            email: credentials.email,
            name: "OTP User",
          }
        }

        return null
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.role = user.role || "user"
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id
        session.user.role = token.role
      }
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET || "your-secret-key",
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
