import { useEffect } from 'react'
import { useQuizzes } from '../api/quizzes/useQuizzes'
import { useMakeQuiz } from './useMakeQuiz'

export function useSetupQuiz (id: number): void {
  const { setQuiz } = useMakeQuiz()
  const { getQuiz } = useQuizzes()

  useEffect(() => {
    const fetchQuiz = async () => {
      const response = await getQuiz(id)
      if (response.ok) {
        setQuiz(response.val)
      }
    }
    fetchQuiz()
  }, [id])
}
