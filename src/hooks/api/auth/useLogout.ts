import { useAuth } from '@/hooks/useAuth'
import useAxios from '@/hooks/useAxios'

export function useLogout (): {
  logout: () => Promise<void>;
  } {
  const axiosInstance = useAxios()
  const { setIsAuthenticated, setAccessToken } = useAuth()
  async function logout (): Promise<void> {
    setIsAuthenticated(false)
    setAccessToken(null)
    return await axiosInstance.delete('/auth/logout/')
  }

  return { logout }
}
