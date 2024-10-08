'use client'

import { AnimatedQuizQuestion } from './QuizQuestion'
import { useSetupQuiz } from '@/hooks/make-quiz/useSetupQuiz'
import { useMakeQuizQuestions } from '@/hooks/make-quiz/useMakeQuizQuestions'
import { FullscreenLoading } from '@/components/FullscreenLoading'
import { useResponseQuiz } from '@/hooks/make-quiz/useResponseQuiz'
import { QuestionSelection } from './QuestionSelection'

interface MakeQuizProps {
  quizId: number
}
export function MakeQuiz (props: MakeQuizProps) {
  const { quizId } = props
  const { loading } = useSetupQuiz(quizId)

  const { actualQuestion } = useMakeQuizQuestions()

  const { quizResponse } = useResponseQuiz()

  const handleSubmit = () => {
    console.log(quizResponse)
  }

  if (loading) {
    return <FullscreenLoading />
  }
  return (
    <>
    <QuestionSelection />
    <AnimatedQuizQuestion question={actualQuestion} />
    <button onClick={handleSubmit}>Submit</button>
    </>
  )
}
