'use client'

import { MakeQuiz } from '@/components/quizzes/questions/MakeQuiz'
import { MakeQuizProvider } from '@/context/MakeQuizContext'
import { useQuizzes } from '@/hooks/api/quizzes/useQuizzes'
import { CompleteQuiz } from '@/types/Quizzes'
import { useEffect, useState } from 'react'

export default function Page ({ params }: { params: { id: number } }) {
  const { id } = params
  const [quiz, setQuiz] = useState<CompleteQuiz | null>(null)
  const { getQuiz } = useQuizzes()
  useEffect(() => {
    const fetchQuiz = async () => {
      const response = await getQuiz(id)
      if (response.ok) {
        setQuiz(response.val)
      }
    }
    fetchQuiz()
  }, [])

  if (quiz === null) {
    return <>cargando</>
  }

  return (
    <MakeQuizProvider>
      <MakeQuiz quiz={quiz} />
    </MakeQuizProvider>
  )
}
