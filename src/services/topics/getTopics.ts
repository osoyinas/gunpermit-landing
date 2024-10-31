import { Topic } from '@/types/Topic'
import { Axios } from 'axios'
import { Err, Ok, Result } from 'ts-results'

export const getTopics = async (axiosInstance: Axios): Promise<Result<Array<Topic>, string>> => {
  try {
    const response = await axiosInstance.get('/topics/')
    console.log(' GET TOPICS', response)
    return Ok(response.data)
  } catch (error) {
    return Err('Ha ocurrido un error al obtener los temas')
  }
}
