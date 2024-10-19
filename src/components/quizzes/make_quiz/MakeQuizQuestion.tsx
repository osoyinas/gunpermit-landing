import { Question } from '@/types/Topic'
import { CardDescription, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useMakeQuizQuestions } from '@/hooks/make-quiz/useMakeQuizQuestions'
import { Button } from '@/components/ui/button'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import { useQuizNavigation } from '@/hooks/make-quiz/useQuizNavigation'
import { FullscreenLoading } from '@/components/FullscreenLoading'
import { useResponseQuiz } from '@/hooks/make-quiz/useResponseQuiz'
import { AnimatedGenericQuestionCard } from '../generics/AnimatedGenericQuestionCard'
import { GenericQuestionCard } from '../generics/GenericQuestionCard'
import { GenericQuestionHeader } from '../generics/GenericQuestionHeader'
import { GenericQuizQuestionContent } from '../generics/GenericQuestionContent'
import { AnimatedGenericQuestionOption } from '../generics/AnimatedGenericQuestionOption'

interface QuizQuestionProps {
  question: Question | undefined;
}

export function AnimatedMakeQuizQuestion (props: QuizQuestionProps) {
  return (
    <AnimatedGenericQuestionCard className="md:py-16">
      <MakeQuizQuestion key={props.question?.id} {...props} />
    </AnimatedGenericQuestionCard>
  )
}

export function MakeQuizQuestion (props: QuizQuestionProps) {
  const { question } = props

  const { actualQuestionIndex, questions } = useMakeQuizQuestions()
  const { updateQuizResponse, getQuizResponse } = useResponseQuiz()

  const {
    goToNextQuestion,
    goToPreviousQuestion,
    nextQuestionDisable,
    previousQuestionDisable
  } = useQuizNavigation()
  if (!question) {
    return <FullscreenLoading />
  }
  const handleAnswerSelection = (questionId: number, answerIndex: number) => {
    const previusAnswer = getQuizResponse(questionId)
    if (!previusAnswer) return
    if (previusAnswer.answer === answerIndex) {
      updateQuizResponse(questionId, undefined)
      return
    }
    updateQuizResponse(questionId, answerIndex)
  }
  return (
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
        <RadioGroup
          className="w-full flex flex-col items-center justify-start gap-4"
          value={getQuizResponse(question.id)?.answer?.toString() ?? ''}
        >
          {question.answers.map((option, index) => (
            <AnimatedGenericQuestionOption index={index} key={index}>
              <RadioGroupItem
                value={index.toString()}
                id={index.toString()}
                onClick={() => {
                  handleAnswerSelection(question.id, index)
                }}
                className="text-primary bg-primary/5 hover:bg-primary/10"
              />
              <Label
                htmlFor={index.toString()}
                className="text-left text-base md:text-lg cursor-pointer flex-grow py-4"
              >
                {option.answer}
              </Label>
            </AnimatedGenericQuestionOption>
          ))}
        </RadioGroup>
        <footer className="flex justify-between pt-6">
          <aside className="flex gap-4 items-center">
            <Button
              onClick={goToPreviousQuestion}
              variant="outline"
              size="icon"
              disabled={previousQuestionDisable}
              className="flex items-center"
            >
              <ChevronLeftIcon className="h-4 w-4" />
            </Button>
            <span className={previousQuestionDisable ? 'opacity-60' : ''}>
              Anterior
            </span>
          </aside>
          <aside className="flex gap-4 items-center">
            <span className={nextQuestionDisable ? 'opacity-60' : ''}>
              Siguiente
            </span>
            <Button
              onClick={goToNextQuestion}
              variant="outline"
              size="icon"
              disabled={nextQuestionDisable}
            >
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
          </aside>
        </footer>
      </GenericQuizQuestionContent>
    </GenericQuestionCard>
  )
}
