import { useEffect } from 'react'
import { useQuizzes } from '../api/quizzes/useQuizzes'
import { useMakeQuiz } from './useMakeQuiz'
import useLoading from '../useLoading'

export function useSetupQuiz (id: number): { loading: boolean } {
  const { setQuiz } = useMakeQuiz()
  const { getQuiz } = useQuizzes()
  const { loading, stopLoading } = useLoading()
  useEffect(() => {
    const fetchQuiz = async () => {
      const response = await getQuiz(id)
      if (response.ok) {
        setQuiz(response.val)
        stopLoading()
      }
    }
    fetchQuiz()
  }, [id])

  return { loading }
}
