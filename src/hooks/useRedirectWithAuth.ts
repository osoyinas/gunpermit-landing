import { redirect } from 'next/navigation'
import { useAuth } from './useAuth'

// Redirects to this url if the user is not authenticated
const ROUTE = '/auth/login'

/**
 * Custom hook that checks the authentication status and redirects to a specified route if the user is not authenticated.
 *
 * @remarks
 * This hook utilizes the `useAuth` hook to determine the authentication status of the user.
 * If the user is not authenticated, it triggers a redirect to a predefined route.
 *
 * @example
 * ```typescript
 * const { isAuth } = useRedirectWithAuth();
 * if (!isAuth) {
 *   // Handle unauthenticated state
 * }
 * ```
 *
 * @returns {void} This hook does not return any value.
 */
export function useRedirectWithAuth (): void {
  const { isAuth } = useAuth()

  if (!isAuth) {
    redirect(ROUTE)
  }
}
