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
        const response = await axios.post('/auth/login/', credentials)
        const data = response.data
        if (response.status !== 200) throw new CredentialsSignin(data.detail)
        return data
      }
    })
  ],
  callbacks: {
    async jwt ({ token, user, account }) {
      switch (account?.provider) {
        case 'django':
          // eslint-disable-next-line no-case-declarations
          const credentialUser = user as any
          token.access_token = credentialUser?.access_token
          token.user = credentialUser?.user
          token.token_type = 'Bearer'
          break
      }
      return token
    },
    async session ({ session, token }) {
      session.access_token = token.access_token
      session.user = token.user
      session.token_type = token.token_type
      return session
    }
  },
  session: {
    strategy: 'jwt'
  }
})
