import { Result, Ok, Err } from 'ts-results'
import useAxios from '@/hooks/useAxios'
import { Topic } from '@/types/Topic'

export function useTopics () {
  const axios = useAxios()

  const getTopics = async (): Promise<Result<Array<Topic>, string>> => {
    try {
      const response = await axios.get('/topics/')
      return Ok(response.data)
    } catch (error) {
      return Err('Ha ocurrido un error al obtener los temas')
    }
  }

  return { getTopics }
}
