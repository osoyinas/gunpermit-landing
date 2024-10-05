import { Button } from '@/components/ui/button'
import { useQuizNavigation } from '@/hooks/make-quiz/useQuizNavigation'
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'
import { motion } from 'framer-motion'

export function AnimatedBottomButtons () {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="w-full max-w-4xl mx-auto p-4 flex justify-between"
    >
      <BottomButtons />
    </motion.div>
  )
}

export function BottomButtons () {
  const {
    goToNextQuestion,
    goToPreviousQuestion,
    nextQuestionDisable,
    previousQuestionDisable
  } = useQuizNavigation()
  return (
    <>
      <Button
        onClick={goToPreviousQuestion}
        className="text-sm md:text-base lg:text-lg py-2 md:py-4 px-4 md:px-6 rounded-xl transition-all duration-300 hover:scale-105 flex items-center"
        variant="outline"
        disabled={previousQuestionDisable}
      >
        <ArrowLeftIcon className="mr-2 h-4 w-4 md:h-5 md:w-5" />
      </Button>
      <Button
        onClick={goToNextQuestion}
        className="text-sm md:text-base lg:text-lg py-2 md:py-4 px-4 md:px-6 rounded-xl transition-all duration-300 hover:scale-105 flex items-center"
        variant="outline"
        disabled={nextQuestionDisable}
      >
        <ArrowRightIcon className="ml-2 h-4 w-4 md:h-5 md:w-5" />
      </Button>
    </>
  )
}
