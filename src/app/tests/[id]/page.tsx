'use client'

import { MakeQuiz } from '@/components/quizzes/make_quiz/MakeQuiz'
import { MakeQuizProvider } from '@/context/MakeQuizContext'

export default function Page ({ params }: { params: { id: number } }) {
  const { id } = params

  return (
    <MakeQuizProvider>
      <MakeQuiz quizId={id} />
    </MakeQuizProvider>
  )
}
