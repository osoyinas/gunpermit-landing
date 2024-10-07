import { Question } from '@/types/Topic'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useMakeQuizQuestions } from '@/hooks/make-quiz/useMakeQuizQuestions'
import { Button } from '@/components/ui/button'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import { useQuizNavigation } from '@/hooks/make-quiz/useQuizNavigation'
import { FullscreenLoading } from '@/components/FullscreenLoading'

interface QuizQuestionProps {
  question: Question | undefined;
}

export function AnimatedQuizQuestion (props: QuizQuestionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex-grow flex flex-col md:justify-center md:items-center md:py-16"
    >
      <AnimatePresence mode='wait'>
        <QuizQuestion key={props.question?.id} {...props} />
      </AnimatePresence>
    </motion.div>
  )
}

export function QuizQuestion (props: QuizQuestionProps) {
  const { question } = props

  const { actualQuestionIndex, questions } = useMakeQuizQuestions()

  const {
    goToNextQuestion,
    goToPreviousQuestion,
    nextQuestionDisable,
    previousQuestionDisable
  } = useQuizNavigation()
  if (!question) {
    return <FullscreenLoading />
  }

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
        <CardContent className="p-4 md:p-6 lg:p-8 flex-grow overflow-y-hidden">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-6 h-full flex flex-col justify-center"
          >
            <p className="text-lg lg:text-xl font-medium text-left">
              {question.question}
            </p>
            <RadioGroup className="space-y-4">
              {question.answers.map((option, index) => (
                <motion.div
                  key={option.answer}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}
                >
                  <div className="flex items-center space-x-3 bg-primary/5 p-4 rounded-xl transition-colors hover:bg-primary/10">
                    <RadioGroupItem
                      value={index.toString()}
                      id={index.toString()}
                      className="text-primary"
                    />
                    <Label
                      htmlFor={index.toString()}
                      className="text-base md:text-lg cursor-pointer flex-grow"
                    >
                      {option.answer}
                    </Label>
                  </div>
                </motion.div>
              ))}
            </RadioGroup>
          </motion.div>
        </CardContent>
      </Card>
  )
}
