import { Loading } from '@/components/Loading'
import { useMakeQuizQuestions } from '@/hooks/make-quiz/useMakeQuizQuestions'
import { useQuizNavigation } from '@/hooks/make-quiz/useQuizNavigation'
import { useResponseQuiz } from '@/hooks/make-quiz/useResponseQuiz'
import React from 'react'
export function QuestionSelectionResult (): React.ReactElement {
  const { quizResponse } = useResponseQuiz()

  const { goToQuestion, actualQuestionIndex } = useQuizNavigation()
  const { questions } = useMakeQuizQuestions()

  const answers = quizResponse?.answers
  if (!answers || !questions) {
    return <Loading />
  }

  const selectedQuestionStyle = 'border-blue-500 border-2'
  const correctQuestionStyle = 'bg-green-500'
  const incorrectQuestionStyle = 'bg-red-600'
  return (
    <ul className="m-auto max-w-4xl w-full flex flex-wrap gap-2 justify-center">
      {answers.map((quizAnswer, index) => {
        const question = questions[index]
        const correctAnswerIndex = question.answers.findIndex((answer) => answer.is_true)
        const isCorrect = quizAnswer.answer === correctAnswerIndex
        const isSelected = actualQuestionIndex === index
        return (
          <li
            key={quizAnswer.question}
            className={`h-12 w-12 border rounded-none md:rounded-2xl transition-colors ${
              isCorrect ? correctQuestionStyle : incorrectQuestionStyle
            } ${isSelected ? selectedQuestionStyle : ''}`}
          >
            <button
              className="w-full h-full"
              onClick={() => {
                goToQuestion(quizAnswer.question)
              }}
            >
              {index + 1}
            </button>
          </li>
        )
      })}
    </ul>
  )
}
