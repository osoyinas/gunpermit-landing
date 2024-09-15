import type { Topic } from '@/types/Topic.ts'
import { AxiosInstance } from 'axios'

export async function postPdf (file: File, axiosInstance:AxiosInstance): Promise<Topic> {
  const formData = new FormData()
  formData.append('file', file)
  const response = await axiosInstance.post('pdfs/', formData)
  return response.data.topic
}
