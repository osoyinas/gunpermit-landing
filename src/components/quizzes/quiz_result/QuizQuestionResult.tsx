import { Question } from '@/types/Topic'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
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

interface QuizQuestionResultProps {
  question: Question | undefined;
}
export function AnimatedQuizQuestionResult (props: QuizQuestionResultProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex-grow flex flex-col md:justify-center md:items-center md:py-16"
    >
      <AnimatePresence mode="wait">
        <QuizQuestionResult key={props.question?.id} {...props} />
      </AnimatePresence>
    </motion.div>
  )
}

export function QuizQuestionResult (props: QuizQuestionResultProps) {
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
    <Card className="m-auto w-full max-w-4xl h-full md:h-auto overflow-hidden rounded-none md:rounded-2xl shadow-none md:shadow-lg flex flex-col items-center border-none md:border-solid">
      <CardHeader className="bg-primary/10 p-4 md:p-6 lg:p-8 flex-shrink-0 flex flex-row justify-between items-center w-full">
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
      </CardHeader>
      <CardContent className="p-4 md:p-6 lg:p-8 flex-grow overflow-y-hidden w-full">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-6 h-full flex flex-col justify-center"
        >
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
                <motion.div
                  key={option.answer}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}
                >
                  <div className={`w-full flex items-center justify-start gap-4 bg-primary/5 px-4  rounded-xl transition-colors hover:cursor-default ${
                        isSelected ? isCorrect ? 'bg-green-900' : 'bg-red-900' : ''
                      }`}>
                    {isSelected
                      ? (
                          isCorrect
                            ? (
                        <CheckCircledIcon className="h-6 w-6 text-green-500" />
                              )
                            : (
                        <XIcon className="h-6 w-6 text-red-500" />
                              )
                        )
                      : (
                      <CircleIcon className="h-6 w-6 text-primary" />
                        )}
                    <Label
                      htmlFor={index.toString()}
                      className="hover:cursor-default text-left text-base md:text-lg cursor-pointer flex-grow py-4"
                    >
                      {option.answer}
                    </Label>
                  </div>
                </motion.div>
              )
            })}
          </section>
        </motion.div>
      </CardContent>
      {!isCorrect && (
        <CardFooter className="w-full bg-primary/10 flex flex-col py-6 gap-8 px-8">
          <TypographyH3>La respuesta correcta es:</TypographyH3>
          <div className="w-full flex items-center justify-start gap-4 bg-primary/5 px-4  rounded-xl transition-colors hover:cursor-default">
            <CheckCircledIcon className="h-6 w-6 text-green-500" />
            <Label className="hover:cursor-default text-left text-base md:text-lg cursor-pointer flex-grow py-4">
              {question.answers.find((answer) => answer.is_true)?.answer}
            </Label>
          </div>
        </CardFooter>
      )}
    </Card>
  )
}
