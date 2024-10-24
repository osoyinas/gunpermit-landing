import { Result, Ok, Err } from 'ts-results'
import useAxios from '@/hooks/useAxios'
import { EditableUser, User } from '@/types/Auth'

export function useUser () {
  const axiosInstance = useAxios()

  const getMe = async (): Promise<Result<User, string>> => {
    try {
      const response = await axiosInstance.get('/auth/me/')
      return Ok(response.data)
    } catch (error) {
      return Err('No se pudo obtener la información del usuario')
    }
  }

  const updateMe = async (data: EditableUser): Promise<Result<User, string>> => {
    try {
      const response = await axiosInstance.put('/auth/me/', data)
      return Ok(response.data)
    } catch (error) {
      return Err('No se pudo actualizar la información del usuario')
    }
  }

  return { getMe, updateMe }
}
