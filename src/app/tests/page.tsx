import { CategorySelection } from '@/components/quizzes/CategorySelection'
import { CategorySelectionSkeleton } from '@components/quizzes/CategorySelectionSkeleton'
import { Suspense } from 'react'

export default function Page () {
  return (
    <Suspense fallback={<CategorySelectionSkeleton />}>
      <CategorySelection />
    </Suspense>
  )
}
