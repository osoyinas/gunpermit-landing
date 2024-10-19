'use client'

import { useSetupQuiz } from '@hooks/make-quiz/useSetupQuiz'
import { useMakeQuizQuestions } from '@hooks/make-quiz/useMakeQuizQuestions'
import { FullscreenLoading } from '@components/FullscreenLoading'
import { QuestionSelection } from '@components/quizzes/make_quiz/QuestionSelection'
import { useSetupResponseQuiz } from '@hooks/make-quiz/useSetupResponseQuiz'
import { AnimatedStudyQuizQuestion } from './StudyQuizQuestion'
import { BottomButtons } from './BottomButtons'
import { TypographyMuted } from '@components/typography/TypographyMuted'

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
      <footer className="max-w-4xl text-center mx-auto py-4">
        <TypographyMuted>
            Estas en <span className='font-bold'>modo estudio</span>.
          Las respuestas se mostrarán inmediatamente después de seleccionar una
          opción y no se guardará tu progreso.
        </TypographyMuted>
      </footer>
    </>
  )
}
