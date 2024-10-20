import { useMakeQuiz } from '@/hooks/make-quiz/useMakeQuiz'

export function useQuizNavigation ():
{
  actualQuestionIndex: number,
  goToQuestion: (questionId:number) => void,
  goToQuestionIndex: (questionIndex:number) => void,
  goToNextQuestion: () => void,
  goToPreviousQuestion: () => void,
  nextQuestionDisable: boolean,
  previousQuestionDisable: boolean
  } {
  const { quiz, actualQuestionIndex, setActualQuestionIndex: setActualQuestion } = useMakeQuiz()

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
    if (actualQuestionIndex < quiz!.questions.length - 1) {
      setActualQuestion(actualQuestionIndex + 1)
    }
  }

  const goToPreviousQuestion = () => {
    if (!quiz) return
    if (actualQuestionIndex > 0) {
      setActualQuestion(actualQuestionIndex - 1)
    }
  }

  const nextQuestionDisable = quiz ? actualQuestionIndex === quiz.questions.length - 1 : true
  const previousQuestionDisable = actualQuestionIndex === 0
  return {
    actualQuestionIndex,
    goToQuestion,
    goToQuestionIndex,
    goToNextQuestion,
    goToPreviousQuestion,
    nextQuestionDisable,
    previousQuestionDisable
  }
}
