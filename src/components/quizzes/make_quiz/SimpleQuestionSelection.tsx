import { Loading } from '@/components/Loading'
import { useResponseQuiz } from '@/hooks/make-quiz/useResponseQuiz'
import React from 'react'
export function SimpleQuestionSelection (): React.ReactElement {
  const { quizResponse } = useResponseQuiz()
  const answers = quizResponse?.answers
  if (!answers) {
    return <Loading />
  }

  const CompletedQuestionStyle = 'bg-primary/25'
  const UnansweredQuestionStyle = ''
  return (
    <ul className="my-4 md:my-0 mx-auto max-w-4xl w-full flex flex-wrap gap-2 justify-center">
      {answers.map((question, index) => {
        const isAnswered = question.answer !== undefined
        return (
          <li
            key={question.question}
            className={`h-12 w-12 border rounded-none md:rounded-2xl transition-colors ${
              isAnswered ? CompletedQuestionStyle : UnansweredQuestionStyle
            }`}
          >
            <a
              href={`#${(index + 1).toString()}`}
              className="w-full h-full flex items-center justify-center"
            >
              {index + 1}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
