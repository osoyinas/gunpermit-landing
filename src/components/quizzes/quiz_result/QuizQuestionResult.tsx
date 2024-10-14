import { Question } from '@/types/Topic'
import { CardDescription, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { useMakeQuizQuestions } from '@/hooks/make-quiz/useMakeQuizQuestions'
import { Button } from '@/components/ui/button'
import {
  CheckCircledIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CircleIcon
} from '@radix-ui/react-icons'
import { useQuizNavigation } from '@/hooks/make-quiz/useQuizNavigation'
import { FullscreenLoading } from '@/components/FullscreenLoading'
import { useResponseQuiz } from '@/hooks/make-quiz/useResponseQuiz'
import { XIcon } from 'lucide-react'
import { TypographyH3 } from '@/components/typography/TypographyH3'
import { AnimatedGenericQuestionCard } from '../generics/AnimatedGenericQuestionCard'
import { GenericQuestionCard } from '../generics/GenericQuestionCard'
import { GenericQuestionHeader } from '../generics/GenericQuestionHeader'
import { GenericQuizQuestionContent } from '../generics/GenericQuestionContent'
import { AnimatedGenericQuestionOption } from '../generics/AnimatedGenericQuestionOption'
import { GenericQuestionFooter } from '../generics/GenericQuestionFooter'
import { TypographyH2 } from '@/components/typography/TypographyH2'

interface QuizQuestionResultProps {
  question: Question | undefined;
}
export function AnimatedQuizResultQuestion (props: QuizQuestionResultProps) {
  return (
    <AnimatedGenericQuestionCard className='mb-8'>
      <QuizResultQuestion key={props.question?.id} {...props} />
    </AnimatedGenericQuestionCard>
  )
}

export function QuizResultQuestion (props: QuizQuestionResultProps) {
  const { question } = props

  const { actualQuestionIndex, questions, actualQuestion } =
    useMakeQuizQuestions()
  const { getQuizResponse } = useResponseQuiz()

  const {
    goToNextQuestion,
    goToPreviousQuestion,
    nextQuestionDisable,
    previousQuestionDisable
  } = useQuizNavigation()
  if (!question) {
    return <FullscreenLoading />
  }

  const isCorrect =
    actualQuestion?.answers.findIndex((answer) => answer.is_true) ===
    getQuizResponse(question.id)?.answer
  return (
    <>
    <TypographyH2 className=' max-w-4xl w-full mb-4 text-center'>Respuestas</TypographyH2>
    <GenericQuestionCard>
      <GenericQuestionHeader>
        <Button
          onClick={goToPreviousQuestion}
          variant="outline"
          size="icon"
          disabled={previousQuestionDisable}
          >
          <ChevronLeftIcon className="h-4 w-4" />
        </Button>
        <div>
          <CardTitle className="text-xl md:text-2xl lg:text-3xl font-bold text-center">
            Pregunta {actualQuestionIndex + 1}/{questions?.length}
          </CardTitle>
          <CardDescription className="text-center text-base md:text-lg mt-2">
            Selecciona la respuesta correcta
          </CardDescription>
        </div>
        <Button
          onClick={goToNextQuestion}
          variant="outline"
          size="icon"
          disabled={nextQuestionDisable}
          >
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
      </GenericQuestionHeader>
      <GenericQuizQuestionContent>
        <p className="text-lg lg:text-xl font-medium text-left">
          {question.question}
        </p>
        <section className="space-y-4">
          {question.answers.map((option, index) => {
            const selectedAnswer = getQuizResponse(question.id)?.answer
            const correctAnswerIndex = question.answers.findIndex(
              (answer) => answer.is_true
            )
            const isSelected = selectedAnswer === index
            const isCorrect = isSelected && correctAnswerIndex === index
            return (
              <AnimatedGenericQuestionOption
              index={index}
              key={index}
              className={`
                hover:cursor-default hover:bg-primary/5
                ${isSelected ? (isCorrect ? 'bg-green-600 hover:bg-green-600' : 'bg-red-500 hover:bg-red-500') : ''}
                `}
                >
                {isSelected
                  ? (
                      isCorrect
                        ? (
                      <CheckCircledIcon className="h-5 w-5" />
                          )
                        : (
                      <XIcon className="h-5 w-5" />
                          )
                    )
                  : (
                    <CircleIcon className="h-4 w-4 text-primary" />
                    )}
                <Label
                  htmlFor={index.toString()}
                  className="hover:cursor-default text-left text-base md:text-lg cursor-pointer flex-grow py-4"
                  >
                  {option.answer}
                </Label>
              </AnimatedGenericQuestionOption>
            )
          })}
        </section>
      </GenericQuizQuestionContent>
      {!isCorrect && (
        <GenericQuestionFooter>
          <TypographyH3>La respuesta correcta es:</TypographyH3>
          <div className="w-full flex items-center gap-4 bg-green-600 px-4  rounded-xl transition-colors hover:cursor-default">
            <CheckCircledIcon className="h-6 w-6" />
            <Label className="hover:cursor-default text-left text-base md:text-lg cursor-pointer flex-grow py-4">
              {question.answers.find((answer) => answer.is_true)?.answer}
            </Label>
          </div>
        </GenericQuestionFooter>
      )}
    </GenericQuestionCard>
      </>
  )
}
