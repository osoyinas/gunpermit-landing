import { axiosInstance as axios } from '@/lib/axios'
import { Question } from '@/types/Topic'

export async function updateQuestion (question: Question) : Promise<number> {
  const response = await axios.put(`questions/${question.id}`, question)
  return response.status
}
