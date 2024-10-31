'use client'

import { MakeQuiz } from '@/components/quizzes/make_quiz/MakeQuiz'
import { MakeQuizProvider } from '@/context/MakeQuizContext'
import { FullscreenLoading } from '@components/FullscreenLoading'
import { useSession } from 'next-auth/react'

export default function Page ({ params }: { params: { id: number } }) {
  const { id } = params
  const { status } = useSession()
  if (status === 'loading') return <FullscreenLoading />
  return (
    <MakeQuizProvider>
      <MakeQuiz quizId={id} />
    </MakeQuizProvider>
  )
}
