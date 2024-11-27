import { Question } from '@/types/Topic'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { FullscreenLoading } from '@/components/FullscreenLoading'
import { useResponseQuiz } from '@/hooks/make-quiz/useResponseQuiz'
import { AnimatedGenericQuestionCard } from '../generics/AnimatedGenericQuestionCard'
import { GenericQuestionCard } from '../generics/GenericQuestionCard'
import { GenericQuestionHeader } from '../generics/GenericQuestionHeader'
import { GenericQuizQuestionContent } from '../generics/GenericQuestionContent'
import { AnimatedGenericQuestionOption } from '../generics/AnimatedGenericQuestionOption'
import { TypographyH3 } from '@components/typography/TypographyH3'

interface QuizQuestionProps {
  index: number;
  question: Question | undefined;
}

export function AnimatedSimpleQuizQuestion (props: QuizQuestionProps) {
  return (
    <AnimatedGenericQuestionCard className="md:py-8">
      <SimpleQuizQuestion key={props.question?.id} {...props} />
    </AnimatedGenericQuestionCard>
  )
}

export function SimpleQuizQuestion (props: QuizQuestionProps) {
  const { question, index: questionIndex } = props
  const { updateQuizResponse, getQuizResponse } = useResponseQuiz()

  if (!question) {
    return <FullscreenLoading />
  }
  const handleAnswerSelection = (questionId: number, answerIndex: number) => {
    console.log({ questionId, answerIndex })
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
      <div id={(questionIndex + 1).toString()} className='absolute top-[-56px] w-full h-2 bg-red-900'></div>
      <GenericQuestionHeader>
        <TypographyH3>Pregunta {questionIndex + 1}</TypographyH3>
      </GenericQuestionHeader>
      <GenericQuizQuestionContent>
        <p className="text-lg lg:text-xl font-medium text-left">
          {question.question}
        </p>
        <main className="w-full flex flex-col items-center justify-start gap-4">
          {question.answers.map((option, index) => (
            <button
            className='w-full'
                onClick={() => {
                  handleAnswerSelection(question.id, index)
                }}
                key={index}
              >
                  <AnimatedGenericQuestionOption index={index}>
                <Checkbox
                  checked={index === getQuizResponse(question.id)?.answer}
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
              </button>
          ))}
        </main>
      </GenericQuizQuestionContent>
    </GenericQuestionCard>
  )
}
