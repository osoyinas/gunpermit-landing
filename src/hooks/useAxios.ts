import { axiosDefaultInstance } from '@/lib/axios/clientAxios'
import { AxiosInstance } from 'axios'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'

function useAxios (): AxiosInstance {
  const axiosInstance = axiosDefaultInstance
  const { status, data } = useSession()

  useEffect(() => {
    // Add a request interceptor to add the access token to the request headers
    const accessToken = data?.access_token
    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config) => {
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`
        }
        return config
      },
      (error) => Promise.reject(error)
    )

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor)
    }
  }, [status])

  return axiosInstance
}

export default useAxios
