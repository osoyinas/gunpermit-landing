import { axiosServerInstance as axios } from '@/lib/axios/serverAxios'
import { QuizCategory } from '@/types/Quizzes'
import { Err, Ok, Result } from 'ts-results'

export const getQuizCategories = async (): Promise<Result<Array<QuizCategory>, string>> => {
  try {
    const response = await axios.get('/quizzes/categories/')
    return Ok(response.data)
  } catch (error) {
    return Err('Ha ocurrido un error al obtener los categories')
  }
}
