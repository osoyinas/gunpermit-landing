'use server'
import axios from 'axios'
import { API_URI } from '../env'
import { auth } from '@/auth'
export const axiosServerInstance = axios.create({
  baseURL: `${API_URI}/api/v1/`,
  timeout: 5005
})

axiosServerInstance.interceptors.request.use(
  async (config) => {
    const session = await auth()
    if (!session) {
      return config
    }
    const accessToken = session.access_token
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
