import { QuizAttempt } from '@/types/Quizzes'
import { AxiosInstance } from 'axios'
import { Err, Ok, Result } from 'ts-results'

export async function getQuizzes (
  axios: AxiosInstance,
  params: { category?: string } = {}
): Promise<Result<Array<QuizAttempt>, string>> {
  try {
    const url = params.category
      ? `/quizzes/?category=${params.category}`
      : '/quizzes/'
    const response = await axios.get(url)
    return Ok(response.data)
  } catch (error) {
    return Err('Ha ocurrido un error al obtener los exámenes')
  }
}
