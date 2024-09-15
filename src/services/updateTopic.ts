import { Topic } from '@/types/Topic'
import { AxiosInstance } from 'axios'

export async function updateTopic (topic: Topic, axiosInstance:AxiosInstance) : Promise<number> {
  const response = await axiosInstance.put(`topics/${topic.id}`, topic)
  return response.status
}
