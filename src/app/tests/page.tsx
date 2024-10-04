'use client'
import { QuizSelection } from '@/components/quizzes/QuizSelection'
import { useRedirectIf } from '@/hooks/redirects/useRedirectIf'

export default function Page () {
  useRedirectIf({ authenticated: false })
  return (
    <QuizSelection />
  )
}
