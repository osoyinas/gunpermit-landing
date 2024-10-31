import axios from 'axios'
import { CLIENT_ID, CLIENT_SECRET } from './serverEnv'
import { API_URI } from './env'
export async function getAccessToken () {
  if (!CLIENT_ID || !CLIENT_SECRET) {
    throw new Error('CLIENT_ID and CLIENT_SECRET are required')
  }
  const encodedCredentials = encodeCredentials(CLIENT_ID, CLIENT_SECRET)
  try {
    const response = await axios.post(
      `${API_URI}/api/v1/oauth2/token/`,
      new URLSearchParams({
        grant_type: 'client_credentials'
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${encodedCredentials}`
        }
      }
    )
    return response.data.access_token
  } catch (error) {
    console.error('Error obteniendo el token de acceso:', error)
    return null
  }
}

function encodeCredentials (clientId: string, clientSecret: string) {
  const credentials = `${clientId}:${clientSecret}`
  return btoa(credentials) // Encode to Base64
}
