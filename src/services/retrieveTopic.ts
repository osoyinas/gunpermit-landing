import { Topic } from '@/types/Topic'
import { axiosInstance as axios } from '@/lib/axios'

export async function retrieveTopic (id: number): Promise<Topic> {
  const response = await axios.get('topics/' + id)
  return response.data
}
