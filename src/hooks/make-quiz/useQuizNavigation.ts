import { useMakeQuiz } from '@/hooks/make-quiz/useMakeQuiz'

export function useQuizNavigation ():
{
  goToQuestion: (questionId:number) => void,
  goToQuestionIndex: (questionIndex:number) => void,
  goToNextQuestion: () => void,
  goToPreviousQuestion: () => void,
  nextQuestionDisable: boolean,
  previousQuestionDisable: boolean
  } {
  const { quiz, actualQuestionIndex: actualQuestion, setActualQuestionIndex: setActualQuestion } = useMakeQuiz()

  const goToQuestion = (questionId:number) => {
    const questionIndex = quiz?.questions.findIndex(question => question.id === questionId)
    if (questionIndex !== undefined && questionIndex !== -1) {
      setActualQuestion(questionIndex)
    }
  }

  const goToQuestionIndex = (questionIndex:number) => {
    if (quiz) {
      setActualQuestion(questionIndex)
    }
  }
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
    goToQuestion,
    goToQuestionIndex,
    goToNextQuestion,
    goToPreviousQuestion,
    nextQuestionDisable,
    previousQuestionDisable
  }
}
