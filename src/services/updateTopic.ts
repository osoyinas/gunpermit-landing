import { axiosInstance as axios } from '@/lib/axios'
import { Topic } from '@/types/Topic'

export async function updateTopic (topic: Topic) : Promise<number> {
  const response = await axios.put(`topics/${topic.id}`, topic)
  return response.status
}
