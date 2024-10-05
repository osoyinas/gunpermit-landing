import { useMakeQuiz } from '@/hooks/make-quiz/useMakeQuiz'

export function useQuizNavigation () {
  const { quiz, actualQuestionIndex: actualQuestion, setActualQuestionIndex: setActualQuestion } = useMakeQuiz()

  const goToNextQuestion = () => {
    if (!quiz) return
    if (actualQuestion < quiz!.questions.length - 1) {
      setActualQuestion(actualQuestion + 1)
    }
  }

  const goToPreviousQuestion = () => {
    if (!quiz) return
    if (actualQuestion > 0) {
      setActualQuestion(actualQuestion - 1)
    }
  }

  const nextQuestionDisable = quiz ? actualQuestion === quiz.questions.length - 1 : true
  const previousQuestionDisable = actualQuestion === 0
  return {
    goToNextQuestion,
    goToPreviousQuestion,
    nextQuestionDisable,
    previousQuestionDisable
  }
}
