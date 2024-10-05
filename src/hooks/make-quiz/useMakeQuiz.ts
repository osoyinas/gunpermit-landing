import { MakeQuizContext } from '@/context/MakeQuizContext'
import { useContext } from 'react'

// Hook to use the context
export const useMakeQuiz = () => {
  const context = useContext(MakeQuizContext)
  if (context === undefined) {
    throw new Error('useMakeQuiz must be used within a MakeQuizProvider')
  }
  return context
}
