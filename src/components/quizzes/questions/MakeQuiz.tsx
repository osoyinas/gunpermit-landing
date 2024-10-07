'use client'

import { AnimatedQuizQuestion } from './QuizQuestion'
import { useSetupQuiz } from '@/hooks/make-quiz/useSetupQuiz'
import { useMakeQuizQuestions } from '@/hooks/make-quiz/useMakeQuizQuestions'

interface MakeQuizProps {
  quizId: number
}
export function MakeQuiz (props: MakeQuizProps) {
  const { quizId } = props
  useSetupQuiz(quizId)

  const { actualQuestion } = useMakeQuizQuestions()
  return (
    <>
    <AnimatedQuizQuestion question={actualQuestion} />
    </>
  )
}
