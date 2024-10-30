import { redirect } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'

const IF_AUTH_URL = '/'
const NOT_AUTH_URL = '/auth/login'

interface RedirectIfProps {
  authenticated: boolean;
  redirectUrl?: string;
}

/**
 * Custom hook that redirects the user based on their authentication status.
 *
 * If `authenticated` is true, it redirects the user to the specified URL if the user is authenticated. By default, it redirects to `/`.
 *
 * If `authenticated` is false, it redirects the user to the specified URL if the user is not authenticated. By default, it redirects to `/auth/login`.
 *
 * @param {boolean} authenticated - If true, redirects if the user is authenticated.
 *                                  If false, redirects if the user is not authenticated.
 * @param {string} [redirectUrl=ROUTE] - The URL to redirect to if the condition is met.
 */
export function useRedirectIf ({
  authenticated: redirectIfAuthenticated,
  redirectUrl
}: RedirectIfProps): void {
  // const { isAuthenticated: userIsAuthenticated } = useAuth()

  // if (redirectIfAuthenticated && userIsAuthenticated === true) {
  //   redirect(redirectUrl ?? IF_AUTH_URL)
  // } else if (!redirectIfAuthenticated && userIsAuthenticated === false) {
  //   redirect(redirectUrl ?? NOT_AUTH_URL)
  // }
}
