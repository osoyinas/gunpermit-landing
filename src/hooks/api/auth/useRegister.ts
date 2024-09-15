import { AuthTokens, UserRegister } from '@/types/Auth'
import { RegisterResponseError } from '@/types/Response'
import { Result, Ok, Err } from 'ts-results'
import useAxios from '@/hooks/useAxios'
interface RegisterParams {
  userRegister: UserRegister;
}
export function useRegister (): {
  register: (
    params: RegisterParams
  ) => Promise<Result<AuthTokens, RegisterResponseError>>;
  } {
  const axiosInstance = useAxios()

  async function register (
    params: RegisterParams
  ): Promise<Result<AuthTokens, RegisterResponseError>> {
    const { userRegister } = params
    return await axiosInstance
      .post('/auth/register/', userRegister)
      .then((response) => {
        return Ok(response.data as AuthTokens)
      })
      .catch((error) => {
        if (error.response) {
          return Err(error.response.data as RegisterResponseError)
        }
        return Err({
          non_field_errors: ['Ha ocurrido un error inesperado']
        } as RegisterResponseError)
      })
  }
  return { register }
}
