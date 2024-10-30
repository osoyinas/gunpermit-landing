import NextAuth from 'next-auth'
import { axiosDefaultInstance } from '@/lib/axios/clientAxios'
import { type NextAuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

async function refreshAccessToken (token: any) {
  try {
    const response = await axiosDefaultInstance.post('/auth/refresh-token', {
      refresh_token: token.refreshToken
    })
    const refreshedTokens = response.data

    if (response.status !== 200) {
      throw refreshedTokens
    }

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken
    }
  } catch (error) {
    return {
      ...token,
      error: 'RefreshAccessTokenError'
    }
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Correo electrónico', type: 'text', placeholder: 'username' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize (credentials) {
        const response = await axiosDefaultInstance.post('/auth/login/', credentials)
        if (response.status === 200) {
          return response.data
        }
        return null
      }
    })
  ],
  callbacks: {
    async jwt ({ token, user }) {
      // Solo se ejecuta después de la autenticación inicial
      if (user) {
        token.accessToken = (user as any).access_token
        token.refreshToken = (user as any).refresh_token
        token.id = parseInt(user.id)
        token.email = user.email ?? ''
      }
      if (Date.now() > (token.accessTokenExpires as number)) {
        token = await refreshAccessToken(token)
      }
      return token
    },
    async session ({ session, token }) {
      session.user = {
        ...session.user,
        accessToken: token.accessToken,
        error: token.error
      }
      return session
    }

  },
  secret: 'AAAAAAAAAAAAAA',
  session: {
    strategy: 'jwt'
  }
}

export const handler = NextAuth(authOptions)
