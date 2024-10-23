import { useEffect } from 'react'
import { useMakeQuiz } from './useMakeQuiz'

/**
 * Custom hook that sets up the initial response structure for a quiz.
 *
 *
 * @returns {void}
 */
export function useSetupResponseQuiz (): void {
  const { quiz, setQuizResponse } = useMakeQuiz()
  useEffect(() => {
    if (!quiz) return
    setQuizResponse({
      answers: quiz.questions.map((question) => ({
        question: question.id,
        answer: question.answers.findIndex((answer) => answer.is_true)
      }))
    })
  }, [quiz])
}
