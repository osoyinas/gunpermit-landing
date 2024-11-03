import { defaultInstace as axios } from '@/lib/axios/defaultAxiosInstance'
import { Err, Ok, Result } from 'ts-results'

interface LoggedUser {
  access_token: string;
  expires_in: number;
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  is_active: boolean;
}

interface ErrorResponse {
  detail: string;
}

export async function loginWithGoogle (
  tokenId: string | undefined
): Promise<Result<LoggedUser, ErrorResponse >> {
  if (!tokenId) {
    return Err({ detail: 'Token not provided' })
  }
  const response = await axios.post(
    'social-auth/google/',
    { auth_token: tokenId },
    {
      validateStatus: () => true
    }
  )
  if (response.status === 200) {
    return Ok(response.data)
  }
  return Err(response.data as ErrorResponse)
}
