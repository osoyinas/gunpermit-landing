import { useMakeQuiz } from '@/hooks/make-quiz/useMakeQuiz'

export function useHandleResponseQuiz () {
  const { quizResponse, setQuizResponse } = useMakeQuiz()

  const handleResponse = (questionId: number, answerIndex: number) => {
    if (!quizResponse) return

    const newAnswers = quizResponse.answers.filter(
      (answer) => answer.question !== questionId
    )
    setQuizResponse({
      answers: [...newAnswers, { question: questionId, answer: answerIndex }]
    })
  }
  return handleResponse
}
