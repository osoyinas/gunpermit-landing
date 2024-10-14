import { TypographyH1 } from '@/components/typography/TypographyH1'
import { GenericQuestionCard } from '../generics/GenericQuestionCard'
import { GenericQuestionHeader } from '../generics/GenericQuestionHeader'
import { GenericQuizQuestionContent } from '../generics/GenericQuestionContent'
import { TypographyH3 } from '@/components/typography/TypographyH3'
import { QuizResult } from '@/types/Quizzes'
import { GenericQuestionFooter } from '../generics/GenericQuestionFooter'
import { QuestionSelectionResult } from './QuestionSelectionResult'
import { TypographyMuted } from '@/components/typography/TypographyMuted'
import { AnimatedGenericQuestionCard } from '../generics/AnimatedGenericQuestionCard'

interface ResultInfoProps {
  quizResult: QuizResult;
}

export function ResultInfo (props: ResultInfoProps) {
  const { quizResult } = props
  const {
    correct_answers: correctAnswers,
    total_questions: totalQuestions,
    passed
  } = quizResult
  return (
    <main className="max-w-4xl m-auto w-full text-center">
      <AnimatedGenericQuestionCard className='mt-16 mb-8'>
        <GenericQuestionCard>
          <GenericQuestionHeader>
            <div></div>
            <TypographyH1>Resultado</TypographyH1>
            <div></div>
          </GenericQuestionHeader>
          <GenericQuizQuestionContent>
            {passed
              ? (
              <TypographyH3>¡Felicidades! Has aprobado 😊</TypographyH3>
                )
              : (
              <TypographyH3>No has aprobado :(</TypographyH3>
                )}
            <div
              className={`p-4 border w-min m-auto rounded-xl ${
                passed ? 'bg-green-500' : 'bg-red-500'
              }`}
            >
              <TypographyH3 className="font-black">
                {correctAnswers}/{totalQuestions}
              </TypographyH3>
            </div>
            <TypographyMuted>
              Has respondido correctamente a{' '}
              <span className="font-bold">{correctAnswers}</span> preguntas.
              Necesitas al menos{' '}
              <span className="font-bold">
                {Math.trunc(0.8 * totalQuestions)}
              </span>{' '}
              respuestas correctas para aprobar.
            </TypographyMuted>
          </GenericQuizQuestionContent>
          <GenericQuestionFooter>
            <QuestionSelectionResult />
          </GenericQuestionFooter>
        </GenericQuestionCard>
      </AnimatedGenericQuestionCard>
    </main>
  )
}
