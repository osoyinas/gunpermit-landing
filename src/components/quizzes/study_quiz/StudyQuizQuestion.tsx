import { Question } from '@/types/Topic'
import { CardDescription, CardTitle } from '@components/ui/card'
import { Label } from '@components/ui/label'
import { useMakeQuizQuestions } from '@hooks/make-quiz/useMakeQuizQuestions'
import { Button } from '@components/ui/button'
import {
  CheckCircledIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@radix-ui/react-icons'
import { useQuizNavigation } from '@hooks/make-quiz/useQuizNavigation'
import { FullscreenLoading } from '@components/FullscreenLoading'
import { AnimatedGenericQuestionCard } from '@components/quizzes/generics/AnimatedGenericQuestionCard'
import { GenericQuestionCard } from '@components/quizzes/generics/GenericQuestionCard'
import { GenericQuestionHeader } from '@components/quizzes/generics/GenericQuestionHeader'
import { GenericQuizQuestionContent } from '@components/quizzes/generics/GenericQuestionContent'
import { TypographyH3 } from '@components/typography/TypographyH3'
import { GenericQuestionFooter } from '@components/quizzes/generics/GenericQuestionFooter'
import { useResponseQuiz } from '@hooks/make-quiz/useResponseQuiz'
import { OptionsWithNoAnswerSelected } from '@components/quizzes/study_quiz/OptionsWithNoAnswerSelected'
import { OptionsWithAnswerSelected } from '@components/quizzes/study_quiz/OptionsWithAnswerSelected'
import { BottomNavigationButtons } from '../navigation_buttons/BottomNavigationButtons'

interface StudyQuizQuestionProps {
  question: Question | undefined;
}

export function AnimatedStudyQuizQuestion (props: StudyQuizQuestionProps) {
  return (
    <AnimatedGenericQuestionCard className="md:py-16">
      <StudyQuizQuestion key={props.question?.id} {...props} />
    </AnimatedGenericQuestionCard>
  )
}

export function StudyQuizQuestion (props: StudyQuizQuestionProps) {
  const { question } = props

  const { actualQuestionIndex, questions } = useMakeQuizQuestions()

  const {
    goToNextQuestion,
    goToPreviousQuestion,
    nextQuestionDisable,
    previousQuestionDisable
  } = useQuizNavigation()

  const { updateQuizResponse, getQuizResponse } = useResponseQuiz()

  if (!question) {
    return <FullscreenLoading />
  }
  const handleOptionSelection = (questionId: number, answerIndex: number) => {
    updateQuizResponse(questionId, answerIndex)
  }
  const correctAnswerIndex = question.answers.findIndex(
    (answer) => answer.is_true
  )
  const selectedOptionIndex = getQuizResponse(question.id)?.answer
  const isIncorrect =
    selectedOptionIndex != null && selectedOptionIndex !== correctAnswerIndex
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
        {selectedOptionIndex == null
          ? (
          <OptionsWithNoAnswerSelected
            question={question}
            handleOptionSelection={handleOptionSelection}
          />
            )
          : (
          <OptionsWithAnswerSelected
            question={question}
            selectedOptionIndex={selectedOptionIndex}
            correctAnswerIndex={correctAnswerIndex}
          />
            )}
        <BottomNavigationButtons />
      </GenericQuizQuestionContent>
      {selectedOptionIndex != null && isIncorrect && (
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
  )
}
