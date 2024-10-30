import { axiosServerInstance as axios } from '@/lib/axios/serverAxios'
import { Topic } from '@/types/Topic'
import { Err, Ok, Result } from 'ts-results'

export const getTopics = async (): Promise<Result<Array<Topic>, string>> => {
  try {
    const response = await axios.get('/topics/')
    return Ok(response.data)
  } catch (error) {
    return Err('Ha ocurrido un error al obtener los temas')
  }
}
