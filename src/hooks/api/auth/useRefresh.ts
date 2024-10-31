import { axiosDefaultInstance } from '@/lib/axios/clientAxios'

/**
 * Hook that provides the `refresh` function to request a new access token.
 *
 * This function sends a POST request to the `/auth/refresh-token/` endpoint
 * to request a new access token. It returns the new access token as a string. Also, httpOnly cookies are used to store the refresh token.
 *
 * @returns {Promise<string>} A promise that resolves to the new access token.
 *
 * @throws {Error} An error if the request fails.
 */
export function useRefresh (): {
  refresh: () => Promise<string>;
  } {
  async function refresh (): Promise<string> {
    const response = await axiosDefaultInstance.post('/auth/refresh-token/') // Request the new access token
    return response.data.access
  }

  return { refresh }
}
