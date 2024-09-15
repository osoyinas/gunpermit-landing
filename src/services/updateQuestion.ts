import { Question } from '@/types/Topic'
import { AxiosInstance } from 'axios'

export async function updateQuestion (question: Question, axiosInstance:AxiosInstance) : Promise<number> {
  const response = await axiosInstance.put(`questions/${question.id}`, question)
  return response.status
}
