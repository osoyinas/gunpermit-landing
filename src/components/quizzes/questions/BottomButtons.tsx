import { Button } from '@/components/ui/button'
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'
import { motion } from 'framer-motion'

export function BottomButtons () {
  const handleNextQuestion = () => {
    // Logic for next question
    console.log('Next question')
  }
  const handlePreviousQuestion = () => {
    // Logic for previous question
    console.log('Previous question')
  }

  return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="w-full max-w-4xl mx-auto p-4 flex justify-between"
        >
          <Button
            onClick={handlePreviousQuestion}
            className="text-sm md:text-base lg:text-lg py-2 md:py-4 px-4 md:px-6 rounded-xl transition-all duration-300 hover:scale-105 flex items-center"
            variant="outline"
          >
            <ArrowLeftIcon className="mr-2 h-4 w-4 md:h-5 md:w-5" />
            Anterior
          </Button>
          <Button
            onClick={handleNextQuestion}
            className="text-sm md:text-base lg:text-lg py-2 md:py-4 px-4 md:px-6 rounded-xl transition-all duration-300 hover:scale-105 flex items-center"
            variant="outline"
          >
            Siguiente
            <ArrowRightIcon className="ml-2 h-4 w-4 md:h-5 md:w-5" />
          </Button>
        </motion.div>
  )
}
