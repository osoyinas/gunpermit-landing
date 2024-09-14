import axios from 'axios'
import { useAuthStore } from '@/hooks/useAuthStore'

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1/',
  timeout: 5000,
  withCredentials: true
})

// Interceptor to add the Authorization header to all requests
axiosInstance.interceptors.request.use(
  (config) => {
    console.log('Interceptor')
    try {
      const { accessToken } = useAuthStore.getState()
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
      }
    } catch (error) {
      console.log('error', error)
    }

    return config
  },
  (error) => {
    console.log('error', error)
    return Promise.reject(error)
  }
)

// Interceptor to handle 401 responses
axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const originalRequest = error.config
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        // Call the refresh token endpoint to get a new accessToken
        const response = await axiosInstance.post('auth/refresh-token/', {}, {
          withCredentials: true // Important to send httpOnly cookies
        })

        const newAccessToken = response.data.access

        // Update the token in Zustand
        useAuthStore.getState().setAccessToken(newAccessToken)

        // Update the Authorization header for the retry
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`

        // Retry the original request with the new token
        return axiosInstance(originalRequest)
      } catch (refreshError) {
        console.error('Error refreshing token:', refreshError)
      }
    }

    return Promise.reject(error)
  }
)

export { axiosInstance }
