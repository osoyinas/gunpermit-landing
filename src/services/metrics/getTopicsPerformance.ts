import { TopicData, TopicPerformance } from '@/types/Metrics'
import { AxiosInstance } from 'axios'
import { Err, Ok, Result } from 'ts-results'
export async function getTopicsPerformace (
  axios: AxiosInstance
): Promise<Result<Array<TopicPerformance>, string>> {
  try {
    const response = await axios.get('metrics/results/topics/count/')

    const topicsPerformance: Array<TopicPerformance> = []
    for (const [topic, data] of Object.entries(response.data.topics)) {
      topicsPerformance.push({
        topic,
        mark: (data as TopicData).correct,
        full_mark: (data as TopicData).total
      })
    }
    return Ok(topicsPerformance)
  } catch (error) {
    return Err(
      'Ha ocurrido un error al obtener los resultados de los exámenes'
    )
  }
}
