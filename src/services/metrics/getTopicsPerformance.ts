import { TopicPerformance } from '@/types/Metrics'
import { AxiosInstance } from 'axios'
import { Err, Ok, Result } from 'ts-results'
export async function getTopicsPerformace (
  axios: AxiosInstance
): Promise<Result<Array<TopicPerformance>, string>> {
  try {
    const response = await axios.get('metrics/results/topics/')
    return Ok(response.data)
  } catch (error) {
    return Err(
      'Ha ocurrido un error al obtener los resultados de los exámenes'
    )
  }
}
