import useAxios from '@hooks/useAxios'
import { QuizAttemptResult, TopicPerformance } from '@/types/Metrics'
import { PagedResponse } from '@/types/Response'
import { Err, Ok, Result } from 'ts-results'

export function useQuizAttempts () {
  const axiosInstance = useAxios()

  const getQuizAttempts = async (
    { page = 1, size = 5 }: { page?: number, size?: number } = {}
  ): Promise<Result<PagedResponse<QuizAttemptResult>, string>> => {
    try {
      const response = await axiosInstance.get('metrics/results', {
        params: {
          page,
          size
        }
      })
      return Ok(response.data)
    } catch (error) {
      return Err('Ha ocurrido un error al obtener los resultados de los exámenes')
    }
  }

  const getTopicsPerformace = async (): Promise<Result<Array<TopicPerformance>, string>> => {
    try {
      const response = await axiosInstance.get('metrics/results/topics/')
      return Ok(response.data)
    } catch (error) {
      return Err('Ha ocurrido un error al obtener los resultados de los exámenes')
    }
  }

  return {
    getQuizAttempts,
    getTopicsPerformace
  }
}
