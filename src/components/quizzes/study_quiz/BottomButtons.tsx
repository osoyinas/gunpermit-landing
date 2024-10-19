import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Button } from '@components/ui/button'
import { useQuizNavigation } from '@hooks/make-quiz/useQuizNavigation'
import { useResponseQuiz } from '@hooks/make-quiz/useResponseQuiz'

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
  const { resetQuizResponse } = useResponseQuiz()
  const router = useRouter()

  const { goToQuestionIndex } = useQuizNavigation()
  const handleExit = () => {
    router.push('/tests')
  }

  const handleReset = () => {
    resetQuizResponse()
    goToQuestionIndex(0)
  }
  return (
    <footer className="mx-auto py-8 max-w-4xl flex justify-between">
      <Button
        onClick={handleReset}
        className="text-sm md:text-base lg:text-lg py-2 md:py-4 px-4 md:px-6 rounded-xl transition-all duration-300 hover:scale-105 flex items-center"
        variant="outline"
      >
        Reiniciar examen
      </Button>
      <Button
        onClick={handleExit}
        className="text-sm md:text-base lg:text-lg py-2 md:py-4 px-4 md:px-6 rounded-xl transition-all duration-300 hover:scale-105 flex items-center"
        variant="destructive"
      >
        Salir
      </Button>
    </footer>
  )
}
