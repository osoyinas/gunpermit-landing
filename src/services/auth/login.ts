import { axiosInstance } from '@/lib/axios'
import { AuthTokens } from '@/types/Auth'
import { LoginResponseError } from '@/types/Response'
import { Result, Ok, Err } from 'ts-results'
interface LoginParams {
    email: string;
    password: string;
}
export async function login (params: LoginParams): Promise<Result<AuthTokens, LoginResponseError>> {
  return await axiosInstance.post('/auth/login/', params)
    .then(response => {
      return Ok(response.data as AuthTokens)
    })
    .catch((error) => {
      if (error.response) {
        return Err(error.response.data as LoginResponseError)
      }
      return Err({
        non_field_errors: ['Ha ocurrido un error inesperado']
      } as LoginResponseError)
    })
}
