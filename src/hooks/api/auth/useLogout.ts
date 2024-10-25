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
    await axiosInstance.delete('/auth/logout/').catch(() => {
      console.error('Error logging out')
    })
  }

  return { logout }
}
