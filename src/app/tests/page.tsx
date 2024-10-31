'use client'
import { CategorySelection } from '@/components/quizzes/CategorySelection'
import { FullscreenLoading } from '@components/FullscreenLoading'
import { useSession } from 'next-auth/react'

export default function Page () {
  const { status } = useSession()
  if (status === 'loading') return <FullscreenLoading />
  return (
    <CategorySelection />
  )
}
