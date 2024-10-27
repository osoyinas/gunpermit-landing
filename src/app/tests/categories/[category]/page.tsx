'use client'
import { QuizSelection } from '@/components/quizzes/QuizSelection'
import { useRedirectIf } from '@/hooks/redirects/useRedirectIf'

export default function Page ({ params }: { params: { category: string } }) {
  useRedirectIf({ authenticated: false })
  return <QuizSelection category={category} />
}
