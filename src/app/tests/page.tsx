import { CategorySelection } from '@/components/quizzes/CategorySelection'
import { FullscreenLoading } from '@components/FullscreenLoading'
import { Suspense } from 'react'

export default function Page () {
  return (
    <Suspense fallback={<FullscreenLoading />}>
      <CategorySelection />
    </Suspense>
  )
}
