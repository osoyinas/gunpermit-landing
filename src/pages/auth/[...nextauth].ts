import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import axios from '@/lib/axios/defaultAxiosInstance'

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Correo electrónico', type: 'text' },
        password: { label: 'Contraseña', type: 'password' }
      },
      async authorize (credentials, req) {
        const res = await axios.post('/auth/login', credentials)
        if (res.status === 200) {
          return res.data
        }
        return null
      }
    })
  ]
})
