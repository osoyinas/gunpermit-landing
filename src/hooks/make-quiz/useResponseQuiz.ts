import { useMakeQuiz } from '@/hooks/make-quiz/useMakeQuiz'
import { QuizAnswer, QuizResponse } from '@/types/Quizzes'

export function useResponseQuiz (): {
  quizResponse: QuizResponse | undefined,
  updateQuizResponse: (questionId: number, answerIndex: number | undefined) => void,
  getQuizResponse: (questionId:number) => QuizAnswer | undefined
  } {
  const { quizResponse, setQuizResponse } = useMakeQuiz()

  const updateQuizResponse = (questionId: number, answerIndex: number | undefined) => {
    if (!quizResponse) return

    const newAnswers = quizResponse.answers.filter(
      (answer) => answer.question !== questionId
    )
    setQuizResponse({
      answers: [...newAnswers, { question: questionId, answer: answerIndex }]
    })
  }
  const getQuizResponse = (questionId:number) => {
    if (!quizResponse) return
    return quizResponse.answers.find((answer) => answer.question === questionId)
  }
  return { quizResponse: quizResponse ?? undefined, updateQuizResponse, getQuizResponse }
}
