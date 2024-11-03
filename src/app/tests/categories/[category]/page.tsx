import { QuizSelection } from '@/components/quizzes/QuizSelection'
import { QuizSelectionSkeleton } from '@components/quizzes/QuizSelectionSkeleton'
import { Suspense } from 'react'

export default function Page ({ params }: { params: { category: string } }) {
  const { category } = params

  return (
    <Suspense fallback={<QuizSelectionSkeleton />} key={category}>
      <QuizSelection category={category} />
    </Suspense>
  )
}
