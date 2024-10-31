import { QuizResult } from '@/types/Quizzes'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useMakeQuiz } from '../make-quiz/useMakeQuiz'

export function useSetupQuizResult (): {
  quizResult: QuizResult | undefined;
  } {
  const query = useSearchParams()
  const [quizResult, setQuizResult] = useState<QuizResult | undefined>(
    undefined
  )
  const { setQuizResponse } = useMakeQuiz()

  useEffect(() => {
    const encodedQuizReponse = query?.get('quizResponse')
    const encodedQuizResult = query?.get('quizResult')
    if (!encodedQuizReponse) return
    if (!encodedQuizResult) return
    const quizReponse = JSON.parse(decodeURIComponent(encodedQuizReponse))
    const quizResult = JSON.parse(decodeURIComponent(encodedQuizResult))
    setQuizResponse(quizReponse)
    setQuizResult(quizResult)
  }, [query])

  return { quizResult }
}
