import { getAccessToken } from '../auth'
import axios from 'axios'
import { API_URI } from '../env'

export const axiosServerInstance = axios.create({
  baseURL: `${API_URI}/api/v1/`,
  timeout: 5005
})

axiosServerInstance.interceptors.request.use(
  async (config) => {
    const accessToken = await getAccessToken()
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
