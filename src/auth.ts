import NextAuth, { CredentialsSignin } from 'next-auth'
import { defaultInstace as axios } from '@/lib/axios/defaultAxiosInstance'
import CredentialsProvider from 'next-auth/providers/credentials'

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
    })
  ],
  callbacks: { // 604800.0
    async jwt ({ token, user, account }) {
      if (account?.provider === 'django') {
        const credentialUser = user as any
        token.access_token = credentialUser?.access_token
        token.user = credentialUser?.user
        token.token_type = 'Bearer'
        token.expires_in = credentialUser?.expires_in
      }
      console.log(token.expires_in)
      console.log(Date.now())
      if (Date.now() > token.expires_in) {
        console.log('Token expired')
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
