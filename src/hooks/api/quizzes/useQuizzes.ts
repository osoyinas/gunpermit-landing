import { Result, Ok, Err } from 'ts-results'
import useAxios from '@/hooks/useAxios'
import {
  CompleteQuiz,
  QuizAttempt,
  QuizCategory,
  QuizResponse,
  QuizResult
} from '@/types/Quizzes'

export function useQuizzes () {
  const axios = useAxios()

  const getQuiz = async (id: number): Promise<Result<CompleteQuiz, string>> => {
    try {
      const response = await axios.get(`/quizzes/${id}/`)
      return Ok(response.data)
    } catch (error) {
      return Err('Ha ocurrido un error al obtener el examen')
    }
  }

  const getQuizzes = async (
    params: { category?: string } = {}
  ): Promise<Result<Array<QuizAttempt>, string>> => {
    try {
      const url = params.category ? `/quizzes/?category=${params.category}` : '/quizzes/'
      const response = await axios.get(url)
      return Ok(response.data)
    } catch (error) {
      return Err('Ha ocurrido un error al obtener los exámenes')
    }
  }

  const makeQuiz = async (
    quizId: number,
    quizResponse: QuizResponse
  ): Promise<Result<QuizResult, string>> => {
    try {
      const response = await axios.post(
        `/quizzes/${quizId}/make/`,
        quizResponse
      )
      return Ok(response.data)
    } catch (error) {
      return Err('Ha ocurrido un error al completar el examen')
    }
  }

  const getQuizCategories = async (): Promise<
    Result<Array<QuizCategory>, string>
  > => {
    try {
      const response = await axios.get('/quizzes/categories/')
      return Ok(response.data)
    } catch (error) {
      return Err(
        'Ha ocurrido un error al obtener las categorías de los exámenes'
      )
    }
  }
  return { getQuiz, getQuizzes, makeQuiz, getQuizCategories }
}
