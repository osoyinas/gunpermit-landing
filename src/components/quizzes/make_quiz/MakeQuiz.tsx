'use client'

import { AnimatedMakeQuizQuestion } from './MakeQuizQuestion'
import { useSetupQuiz } from '@/hooks/make-quiz/useSetupQuiz'
import { useMakeQuizQuestions } from '@/hooks/make-quiz/useMakeQuizQuestions'
import { FullscreenLoading } from '@/components/FullscreenLoading'
import { QuestionSelection } from './QuestionSelection'
import { BottomButtons } from './BottomButtons'
import { useSetupResponseQuiz } from '@/hooks/make-quiz/useSetupResponseQuiz'

interface MakeQuizProps {
  quizId: number;
}
export function MakeQuiz (props: MakeQuizProps) {
  const { quizId } = props
  const { loading } = useSetupQuiz(quizId)
  useSetupResponseQuiz()

  const { actualQuestion } = useMakeQuizQuestions()

  if (loading) {
    return <FullscreenLoading />
  }
  return (
    <>
      <AnimatedMakeQuizQuestion question={actualQuestion} />
      <QuestionSelection />
      <BottomButtons />
    </>
  )
}
