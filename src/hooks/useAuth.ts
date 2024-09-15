import { useAuthStore } from './useAuthStore'

/**
 * Custom hook to manage authentication state.
 *
 * This hook provides access to the authentication state and functions to update it.
 * It uses the `useAuthStore` to retrieve and set the authentication state.
 *
 * @returns {Object} An object containing:
 * - `accessToken` {string | null}: The current access token.
 * - `setAccessToken` {Function}: Function to set the access token and update the authentication state.
 * - `isAuth` {boolean}: Boolean indicating if the user is authenticated.
 * - `logout` {Function}: Function to log out the user, clear the access token, and update the authentication state.
 */
export function useAuth () {
  const { accessToken, setAccessToken: setToken, isAuth, setIsAuth } = useAuthStore((state) => state)

  const setAccessToken = (accessToken:string) => {
    setToken(accessToken)
    setIsAuth(true)
  }

  const logout = async () => {
    setToken(null)
    setIsAuth(false)
    await logout().catch((error) => { console.error(error) })
  }

  return { accessToken, setAccessToken, isAuth, logout }
}
