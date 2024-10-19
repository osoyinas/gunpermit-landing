import { Button } from '@/components/ui/button'
import { useQuizzes } from '@/hooks/api/quizzes/useQuizzes'
import { useMakeQuiz } from '@/hooks/make-quiz/useMakeQuiz'
import { useResponseQuiz } from '@/hooks/make-quiz/useResponseQuiz'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

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
  const { makeQuiz } = useQuizzes()
  const { quiz } = useMakeQuiz()
  const { quizResponse } = useResponseQuiz()
  const disabled = quizResponse?.answers.some(question => question.answer == null)
  const router = useRouter()

  const handleCompleteQuiz = async () => {
    if (quiz && quizResponse) {
      const result = await makeQuiz(quiz.id, quizResponse)
      if (!result.ok) {
        console.error(result.val)
        return
      }
      const serializedQuizResponse = JSON.stringify(quizResponse)
      const encodedQuizReponse = encodeURIComponent(serializedQuizResponse)

      const serializedQuizResult = JSON.stringify(result.val)
      const encodedQuizResult = encodeURIComponent(serializedQuizResult)

      router.push(`/tests/${quiz.id}/revision?quizResponse=${encodedQuizReponse}&quizResult=${encodedQuizResult}`)
    }
  }

  return (
    <footer className='mx-auto px-2 md:px-0 py-8 max-w-4xl flex justify-between'>
      <div></div>
      <Button
        onClick={handleCompleteQuiz}
        className="text-sm md:text-base lg:text-lg py-2 md:py-4 px-4 md:px-6 rounded-xl transition-all duration-300 hover:scale-105 flex items-center"
        variant="default"
        disabled={disabled}
      >
        Enviar respuestas
      </Button>
    </footer>
  )
}
