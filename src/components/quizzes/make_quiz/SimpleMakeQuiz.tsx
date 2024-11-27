'use client'

import { useSetupQuiz } from '@/hooks/make-quiz/useSetupQuiz'
import { useMakeQuizQuestions } from '@/hooks/make-quiz/useMakeQuizQuestions'
import { FullscreenLoading } from '@/components/FullscreenLoading'
import { BottomButtons } from './BottomButtons'
import { useSetupResponseQuiz } from '@/hooks/make-quiz/useSetupResponseQuiz'
import { AnimatedSimpleQuizQuestion } from './SimpleQuizQuestion'
import { SimpleQuestionSelection } from './SimpleQuestionSelection'

interface SimpleMakeQuizProps {
  quizId: number;
}
export function SimpleMakeQuiz (props: SimpleMakeQuizProps) {
  const { quizId } = props
  const { loading } = useSetupQuiz(quizId)
  useSetupResponseQuiz()
  const { questions } = useMakeQuizQuestions()

  if (loading) {
    return <FullscreenLoading />
  }
  return (
    <div className='py-2 md:py-8'>
      <SimpleQuestionSelection />
      {questions?.map((question, index) => (
        <AnimatedSimpleQuizQuestion
          key={index}
          index={index}
          question={question}
        />
      ))}
      <BottomButtons />
      <SimpleQuestionSelection />
    </div>
  )
}
