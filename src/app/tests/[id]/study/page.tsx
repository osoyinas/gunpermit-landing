'use client'

import { StudyQuiz } from '@components/quizzes/study_quiz/StudyQuiz'
import { MakeQuizProvider } from '@/context/MakeQuizContext'
import { useSession } from 'next-auth/react'
import { FullscreenLoading } from '@components/FullscreenLoading'

export default function Page ({ params }: { params: { id: number } }) {
  const { id } = params
  const { status } = useSession()
  if (status === 'loading') return <FullscreenLoading />
  return (
    <MakeQuizProvider>
      <StudyQuiz quizId={id} />
    </MakeQuizProvider>
  )
}
