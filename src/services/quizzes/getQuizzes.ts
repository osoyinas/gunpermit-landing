import { QuizAttempt } from '@/types/Quizzes'
import { PagedResponse } from '@/types/Response'
import { AxiosInstance } from 'axios'
import { Err, Ok, Result } from 'ts-results'

export async function getQuizzes (
  axios: AxiosInstance,
  params: { category?: string, page?:number, size?:number } = {}
): Promise<Result<PagedResponse<QuizAttempt>, string>> {
  try {
    const url = `/quizzes/?${params.category ? `category=${params.category}&` : ''}${params.page ? `page=${params.page}&` : ''}${params.size ? `size=${params.size}` : ''}`.replace(/&$/, '')

    const response = await axios.get(url)
    return Ok(response.data)
  } catch (error) {
    return Err('Ha ocurrido un error al obtener los exámenes')
  }
}
