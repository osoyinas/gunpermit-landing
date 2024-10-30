import NextAuth, { CredentialsSignin } from 'next-auth'
import { axiosDefaultInstance } from './lib/axios/clientAxios'
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
        console.log('Posting credentials', credentials)
        const response = await axiosDefaultInstance.post('/auth/login/', credentials)
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
          console.log('DJANGO CREDENTIALS', credentialUser)
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
