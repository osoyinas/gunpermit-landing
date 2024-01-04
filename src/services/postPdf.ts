import { axiosInstance as axios } from '@/lib/axios'
import type { Topic } from '@/types/Topic.ts'

export async function postPdf (file: File): Promise<Topic> {
  const formData = new FormData()
  formData.append('file', file)
  const response = await axios.post('api/pdfs/', formData)
  return response.data.topic
}
