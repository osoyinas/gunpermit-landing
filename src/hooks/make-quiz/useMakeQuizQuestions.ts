import { Question } from '@/types/Topic'
import { useMakeQuiz } from './useMakeQuiz'

interface Response {
    actualQuestionIndex: number
    actualQuestion: Question | undefined
    questions: Question[] | undefined
}
export function useMakeQuizQuestions ():Response {
  const { quiz, actualQuestionIndex: actualQuestion } = useMakeQuiz()

  const actualQuestionData = quiz?.questions[actualQuestion]
  return {
    actualQuestionIndex: actualQuestion,
    actualQuestion: actualQuestionData,
    questions: quiz?.questions
  }
}
