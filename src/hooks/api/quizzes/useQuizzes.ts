import { Result, Ok, Err } from 'ts-results'
import useAxios from '@/hooks/useAxios'
import { CompleteQuiz, QuizAttempt, QuizResponse } from '@/types/Quizzes'

export function useQuizzes (): {
  getQuiz: (id: number) => Promise<Result<CompleteQuiz, string>>;
  getQuizzes: () => Promise<Result<Array<QuizAttempt>, string>>;
  makeQuiz: (
    quizId: number,
    quizResponse: QuizResponse
  ) => Promise<Result<CompleteQuiz, string>>;
  } {
  const axios = useAxios()

  const getQuiz = async (id: number): Promise<Result<CompleteQuiz, string>> => {
    try {
      const response = await axios.get(`/quizzes/${id}/`)
      return Ok(response.data)
    } catch (error) {
      return Err('Ha ocurrido un error al obtener el examen')
    }
  }

  const getQuizzes = async (): Promise<Result<Array<QuizAttempt>, string>> => {
    try {
      const response = await axios.get('/quizzes/')
      return Ok(response.data)
    } catch (error) {
      return Err('Ha ocurrido un error al obtener los exámenes')
    }
  }

  const makeQuiz = async (quizId: number, quizResponse: QuizResponse) => {
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
  return { getQuiz, getQuizzes, makeQuiz }
}
