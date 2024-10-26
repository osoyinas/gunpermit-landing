import { useAuth } from '@/hooks/useAuth'
import { axiosDefaultInstance } from '@/lib/axios'
import { AxiosInstance } from 'axios'
import { useRefresh } from './api/auth/useRefresh'
import { useEffect } from 'react'

function useAxios (): AxiosInstance {
  const { accessToken, setAccessToken, setIsAuthenticated } = useAuth()
  const { refresh } = useRefresh()
  const axiosInstance = axiosDefaultInstance

  useEffect(() => {
    // Add a request interceptor to add the access token to the request headers
    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config) => {
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`
        }
        return config
      },
      (error) => Promise.reject(error)
    )

    // Add a response interceptor to handle 401 (Unauthorized) errors  and try to refresh the token
    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config

        // If the error is a 401 (Unauthorized), try to refresh the token
        if (
          error.response?.status === 401 &&
          !originalRequest._retry) {
          try {
            const accessToken = await refresh()
            setAccessToken(accessToken)
            axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`
            return axiosInstance(originalRequest) // Retry the original request with the new access token
          } catch (err) {
            setAccessToken(null)
            setIsAuthenticated(false)
            return Promise.reject(err)
          }
        }
        return Promise.reject(error)
      }
    )
    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor)
      axiosInstance.interceptors.response.eject(responseInterceptor)
    }
  }, [accessToken, setAccessToken, setIsAuthenticated, refresh])

  return axiosInstance
}

export default useAxios
