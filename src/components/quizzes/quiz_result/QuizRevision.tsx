'use client'

import { useSetupQuiz } from '@/hooks/make-quiz/useSetupQuiz'
import { useMakeQuizQuestions } from '@/hooks/make-quiz/useMakeQuizQuestions'
import { FullscreenLoading } from '@/components/FullscreenLoading'
import { QuestionSelectionResult } from '../quiz_result/QuestionSelectionResult'
import { AnimatedQuizResultQuestion } from './QuizQuestionResult'

interface MakeQuizProps {
  quizId: number
}
export function QuizRevision (props: MakeQuizProps) {
  const { quizId } = props
  const { loading } = useSetupQuiz(quizId)

  const { actualQuestion } = useMakeQuizQuestions()

  if (loading) {
    return <FullscreenLoading />
  }
  return (
    <>
    <AnimatedQuizResultQuestion question={actualQuestion} />
    <QuestionSelectionResult />
    </>
  )
}
