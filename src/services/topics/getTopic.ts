import { Topic } from '@/types/Topic'
import { Axios } from 'axios'
import { Err, Ok, Result } from 'ts-results'

export const getTopic = async (axiosInstance: Axios, id: number): Promise<Result<Topic, string>> => {
  try {
    const response = await axiosInstance.get(`/topics/${id}`)
    return Ok(response.data)
  } catch (error) {
    return Err('Ha ocurrido un error al obtener el tema')
  }
}
