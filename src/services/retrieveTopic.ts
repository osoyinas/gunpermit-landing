import { Topic } from '@/types/Topic'
import { AxiosInstance } from 'axios'

export async function retrieveTopic (id: number, axiosInstance:AxiosInstance): Promise<Topic> {
  const response = await axiosInstance.get(`topics/${id}/`)
  return response.data
}
