import {
  ChangePasswordResponseError,
  ForgotPasswordResponseError
} from '@/types/Response'
import useAxios from '@hooks/useAxios'
import { Err, Ok, Result } from 'ts-results'

export function usePassword () {
  const axiosInstance = useAxios()

  const resetPassword = async (
    email: string
  ): Promise<Result<string, ForgotPasswordResponseError>> => {
    return await axiosInstance
      .post('/auth/password-reset/', { email })
      .then((response) => {
        return Ok(
          `Se ha enviado un correo a ${email} con las instrucciones para recuperar tu contraseña`
        )
      })
      .catch((error) => {
        if (error.response) {
          return Err(error.response.data as ForgotPasswordResponseError)
        }
        return Err({
          non_field_errors: ['Ha ocurrido un error inesperado']
        } as ForgotPasswordResponseError)
      })
  }

  const checkResetPasswordToken = async (token: string) => {
    return await axiosInstance
      .post('/auth/password-reset/validate_token/', { token })
      .then(() => {
        return true
      })
      .catch(() => {
        return false
      })
  }
  const resetPasswordConfirm = async (
    token: string,
    password: string
  ): Promise<Result<string, ChangePasswordResponseError>> => {
    return await axiosInstance
      .post('/auth/password-reset/confirm/', { token, password })
      .then(() => {
        return Ok('Contraseña cambiada exitosamente')
      })
      .catch((error) => {
        if (error.response) {
          return Err(error.response.data as ChangePasswordResponseError)
        }
        return Err({
          non_field_errors: ['Ha ocurrido un error inesperado']
        } as ChangePasswordResponseError)
      })
  }

  return { resetPassword, checkResetPasswordToken, resetPasswordConfirm }
}
