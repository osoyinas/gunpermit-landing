'use client'
import { CategorySelection } from '@/components/quizzes/CategorySelection'
import { useRedirectIf } from '@/hooks/redirects/useRedirectIf'

export default function Page () {
  useRedirectIf({ authenticated: false })
  return (
    <CategorySelection />
  )
}
