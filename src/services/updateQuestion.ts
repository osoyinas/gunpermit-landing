import { Question } from '@/types/Topic'
import { AxiosInstance } from 'axios'

export async function updateQuestion (question: Question, axiosInstance:AxiosInstance) : Promise<number> {
  try {
    const response = await axiosInstance.put(`questions/${question.id}`, question, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response.status
  } catch (error) {
    console.error(error)
    return 500
  }
}
