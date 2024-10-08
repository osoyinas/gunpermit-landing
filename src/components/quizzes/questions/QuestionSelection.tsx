import { Loading } from '@/components/Loading'
import { useQuizNavigation } from '@/hooks/make-quiz/useQuizNavigation'
import { useResponseQuiz } from '@/hooks/make-quiz/useResponseQuiz'
import React from 'react'
export function QuestionSelection ():React.ReactElement {
  const { quizResponse } = useResponseQuiz()

  const { goToQuestion } = useQuizNavigation()
  const answers = quizResponse?.answers
  if (!answers) {
    return <Loading />
  }
  return (<ul className="w-full flex flex-wrap gap-2">
      {
        answers.map((question, index) => (
          <li key={question.question} className='h-12 w-12 border'>
            <button
              className='w-full h-full'
              onClick={() => {
                goToQuestion(question.question)
              }}
            >
              {index + 1}
            </button>
          </li>
        ))
      }

        </ul>
  )
}
