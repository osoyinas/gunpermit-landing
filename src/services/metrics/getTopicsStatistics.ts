import { UserQuestionAttemptsResponse } from '@/types/Metrics'
import { AxiosInstance } from 'axios'
import { Err, Ok, Result } from 'ts-results'
export async function getTopicsStatistics (
  axios: AxiosInstance
): Promise<Result<UserQuestionAttemptsResponse, string>> {
  try {
    const response = await axios.get('metrics/results/topics/count/')
    return Ok(response.data)
  } catch (error) {
    return Err(
      'Ha ocurrido un error al obtener los resultados de los exámenes'
    )
  }
}
