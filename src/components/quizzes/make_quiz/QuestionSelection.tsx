import { Loading } from '@/components/Loading'
import { useQuizNavigation } from '@/hooks/make-quiz/useQuizNavigation'
import { useResponseQuiz } from '@/hooks/make-quiz/useResponseQuiz'
import React from 'react'
export function QuestionSelection (): React.ReactElement {
  const { quizResponse } = useResponseQuiz()

  const { goToQuestion, actualQuestionIndex } = useQuizNavigation()
  const answers = quizResponse?.answers
  if (!answers) {
    return <Loading />
  }

  const selectedQuestionStyle = 'border-blue-500 border-2'
  const CompletedQuestionStyle = 'bg-gray-700'
  const UnansweredQuestionStyle = ''
  return (
    <ul className="m-auto max-w-4xl w-full flex flex-wrap gap-2 justify-center">
      {answers.map((question, index) => {
        const isAnswered = question.answer !== undefined
        const isSelected = actualQuestionIndex === index
        return (
          <li
            key={question.question}
            className={`h-12 w-12 border rounded-none md:rounded-2xl transition-colors ${
              isAnswered ? CompletedQuestionStyle : UnansweredQuestionStyle
            } ${isSelected ? selectedQuestionStyle : ''}`}
          >
            <button
              className="w-full h-full"
              onClick={() => {
                goToQuestion(question.question)
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
