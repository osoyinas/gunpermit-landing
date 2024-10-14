'use client'

import { QuizRevision } from '@/components/quizzes/quiz_result/QuizRevision'
import { MakeQuizProvider } from '@/context/MakeQuizContext'

export default function Page ({ params }: { params: { id: number } }) {
  const { id } = params

  return (
    <MakeQuizProvider>
      <QuizRevision quizId={id} />
    </MakeQuizProvider>
  )
}
