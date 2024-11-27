'use client'

import { MakeQuizProvider } from '@/context/MakeQuizContext'
import { FullscreenLoading } from '@components/FullscreenLoading'
import { SimpleMakeQuiz } from '@components/quizzes/make_quiz/SimpleMakeQuiz'
import { useSession } from 'next-auth/react'

export default function Page ({ params }: { params: { id: number } }) {
  const { id } = params
  const { status } = useSession()
  if (status === 'loading') return <FullscreenLoading />
  return (
    <MakeQuizProvider>
      <SimpleMakeQuiz quizId={id} />
    </MakeQuizProvider>
  )
}
