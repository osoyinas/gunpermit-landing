'use client'

import { QuizQuestion } from './QuizQuestion'
import { AnimatedBottomButtons } from './BottomButtons'
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
    <QuizQuestion question={actualQuestion} />
    <AnimatedBottomButtons />
    </>
  )
}
