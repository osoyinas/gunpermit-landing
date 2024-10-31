import { QuizCategory } from '@/types/Quizzes'
import { AxiosInstance } from 'axios'
import { Err, Ok, Result } from 'ts-results'

export const getQuizCategories = async (axiosInstance: AxiosInstance): Promise<Result<Array<QuizCategory>, string>> => {
  try {
    const response = await axiosInstance.get('/quizzes/categories/')
    return Ok(response.data)
  } catch (error) {
    return Err('Ha ocurrido un error al obtener los categories')
  }
}
