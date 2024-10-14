import { CompleteQuiz, QuizResponse } from '@/types/Quizzes'
import { useEffect } from 'react'

interface SetupResponseQuizParams {
    quiz: CompleteQuiz | null;
    setQuizResponse: (response: QuizResponse) => void;
}

/**
 * Custom hook that sets up the initial response structure for a quiz.
 *
 *
 * @returns {void}
 */
export function useSetupResponseQuiz (params: SetupResponseQuizParams): void {
  const { quiz, setQuizResponse } = params
  useEffect(() => {
    if (!quiz) return
    setQuizResponse({
      answers: quiz.questions.map((question) => ({
        question: question.id,
        answer: undefined
      }))
    })
  }, [quiz])
}
