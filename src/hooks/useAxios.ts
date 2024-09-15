import { useAuth } from '@/hooks/useAuth'
import { axiosDefaultInstance } from '@/lib/axios'
import { AxiosInstance } from 'axios'
import { useRefresh } from './api/auth/useRefresh'

function useAxios (): AxiosInstance {
  const { accessToken, setAccessToken, setIsAuthenticated } = useAuth()
  const { refresh } = useRefresh()
  const axiosInstance = axiosDefaultInstance

  axiosInstance.interceptors.request.use(
    (config) => {
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
      }
      return config
    },
    (error) => Promise.reject(error)
  )

  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config

      // If the error is a 401 (Unauthorized), try to refresh the token
      if (error.response.status === 401 && !originalRequest._retry && !originalRequest.sent) {
        originalRequest.sent = true
        originalRequest._retry = true
        try {
          console.log('401, refreshing token...')
          const accessToken = await refresh()
          setAccessToken(accessToken)
          axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`
          return axiosInstance(originalRequest) // Retry the original request with the new access token
        } catch (err) {
          setAccessToken(null)
          setIsAuthenticated(false) // The refresh token also failed
          return Promise.reject(err)
        }
      }
      setAccessToken(null)
      setIsAuthenticated(false) // The refresh token also failed
      return Promise.reject(error)
    }
  )

  return axiosInstance
}

export default useAxios
