'use client'

import { AnimatedQuizQuestion } from './QuizQuestion'
import { useSetupQuiz } from '@/hooks/make-quiz/useSetupQuiz'
import { useMakeQuizQuestions } from '@/hooks/make-quiz/useMakeQuizQuestions'
import { FullscreenLoading } from '@/components/FullscreenLoading'
import { QuestionSelection } from './QuestionSelection'
import { BottomButtons } from './BottomButtons'

interface MakeQuizProps {
  quizId: number
}
export function MakeQuiz (props: MakeQuizProps) {
  const { quizId } = props
  const { loading } = useSetupQuiz(quizId)

  const { actualQuestion } = useMakeQuizQuestions()

  if (loading) {
    return <FullscreenLoading />
  }
  return (
    <>
    <AnimatedQuizQuestion question={actualQuestion} />
    <QuestionSelection />
    <BottomButtons/>
    </>
  )
}
