'use client'

import { useSetupQuiz } from '@hooks/make-quiz/useSetupQuiz'
import { useMakeQuizQuestions } from '@hooks/make-quiz/useMakeQuizQuestions'
import { FullscreenLoading } from '@components/FullscreenLoading'
import { QuestionSelection } from '@components/quizzes/make_quiz/QuestionSelection'
import { useSetupResponseQuiz } from '@hooks/make-quiz/useSetupResponseQuiz'
import { AnimatedStudyQuizQuestion } from './StudyQuizQuestion'
import { BottomButtons } from './BottomButtons'

interface StudyQuizProps {
  quizId: number;
}
export function StudyQuiz (props: StudyQuizProps) {
  const { quizId } = props
  const { loading } = useSetupQuiz(quizId)
  useSetupResponseQuiz()

  const { actualQuestion } = useMakeQuizQuestions()

  if (loading) {
    return <FullscreenLoading />
  }
  return (
    <>
      <AnimatedStudyQuizQuestion question={actualQuestion} />
      <QuestionSelection />
      <BottomButtons />
    </>
  )
}
