import { QuizAttemptResult } from '@/types/Metrics'
import { PagedResponse } from '@/types/Response'
import { AxiosInstance } from 'axios'
import { Err, Ok, Result } from 'ts-results'

export async function getQuizAttempts (
  axios: AxiosInstance,
  { page = 1, size = 5 }: { page?: number; size?: number } = {}
): Promise<Result<PagedResponse<QuizAttemptResult>, string>> {
  try {
    const response = await axios.get('metrics/results', {
      params: {
        page,
        size
      }
    })
    return Ok(response.data)
  } catch (error) {
    return Err(
      'Ha ocurrido un error al obtener los resultados de los exámenes'
    )
  }
}
