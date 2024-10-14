'use client'

import { useSetupQuiz } from '@/hooks/make-quiz/useSetupQuiz'
import { useMakeQuizQuestions } from '@/hooks/make-quiz/useMakeQuizQuestions'
import { FullscreenLoading } from '@/components/FullscreenLoading'
import { AnimatedQuizQuestionResult } from '../quiz_result/QuizQuestionResult'
import { QuestionSelectionResult } from '../quiz_result/QuestionSelectionResult'

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
    <AnimatedQuizQuestionResult question={actualQuestion} />
    <QuestionSelectionResult />
    </>
  )
}
