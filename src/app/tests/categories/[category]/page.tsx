'use client'
import { QuizSelection } from '@/components/quizzes/QuizSelection'
import { FullscreenLoading } from '@components/FullscreenLoading'
import { useSession } from 'next-auth/react'

export default function Page ({ params }: { params: { category: string } }) {
  const { category } = params
  const { status } = useSession()
  if (status === 'loading') return <FullscreenLoading />
  return <QuizSelection category={category} />
}
