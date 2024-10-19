import { useMakeQuiz } from '@/hooks/make-quiz/useMakeQuiz'
import { QuizAnswer, QuizResponse } from '@/types/Quizzes'

export function useResponseQuiz (): {
  quizResponse: QuizResponse | undefined;
  updateQuizResponse: (
    questionId: number,
    answerIndex: number | undefined
  ) => void;
  getQuizResponse: (questionId: number) => QuizAnswer | undefined;
  resetQuizResponse: () => void;
  } {
  const { quizResponse, setQuizResponse } = useMakeQuiz()
  const { quiz } = useMakeQuiz()
  const updateQuizResponse = (
    questionId: number,
    answerIndex: number | undefined
  ) => {
    if (!quizResponse) return

    const newAnswers = quizResponse.answers.map((answer) =>
      answer.question === questionId
        ? { ...answer, answer: answerIndex }
        : answer
    )
    setQuizResponse({ ...quizResponse, answers: newAnswers })
  }
  const getQuizResponse = (questionId: number): QuizAnswer | undefined => {
    if (!quizResponse) return
    return quizResponse.answers.find(
      (answer) => answer.question === questionId
    )
  }
  const resetQuizResponse = () => {
    if (!quiz) return
    setQuizResponse({
      answers: quiz.questions.map((question) => ({
        question: question.id,
        answer: undefined
      }))
    })
  }
  return {
    quizResponse: quizResponse ?? undefined,
    updateQuizResponse,
    getQuizResponse,
    resetQuizResponse
  }
}
