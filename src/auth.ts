import NextAuth, { CredentialsSignin } from 'next-auth'
import { defaultInstace as axios } from '@/lib/axios/defaultAxiosInstance'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import { loginWithGoogle } from '@/services/auth/loginWithGoogle'

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.NEXTAUTH_SECRET || 'secret',
  providers: [
    CredentialsProvider({
      id: 'django',
      name: 'Django',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize (credentials: any) {
        const response = await axios.post('/auth/login/', credentials, {
          validateStatus: () => true
        })
        const data = response.data
        if (response.status !== 200) {
          console.log(response.statusText)
          throw new CredentialsSignin()
        }
        return data
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    async signIn ({ user, account, profile, email, credentials }) {
      if (account?.provider === 'google') {
        const response = await loginWithGoogle(account.id_token)
        if (response.ok) {
          return true
        } else {
          return `/auth/login?error_message=${response.val.detail}`
        }
      }
      return true
    },

    async jwt ({ token, user, account }) {
      token.token_type = 'Bearer'

      if (account?.provider === 'django') {
        const credentialUser = user as any
        token.access_token = credentialUser?.access_token
        token.user = credentialUser?.user
        token.expires_in = credentialUser?.expires_in
      } else if (account?.provider === 'google') {
        const response = await loginWithGoogle(account.id_token)
        if (response.ok) {
          const credentialUser = response.val
          token.access_token = credentialUser.access_token
          token.expires_in = credentialUser.expires_in
          token.user = credentialUser
        } else {
          return null
        }
      }

      if (Date.now() > token.expires_in) {
        return null
      }
      return token
    },
    async session ({ session, token }) {
      session.access_token = token.access_token
      session.user = token.user
      session.token_type = token.token_type
      session.expires_in = token.expires_in
      return session
    }
  },
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/auth/login'
  }
})
