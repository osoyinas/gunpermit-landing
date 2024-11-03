import { QuizSelection } from '@/components/quizzes/QuizSelection'
import { FullscreenLoading } from '@components/FullscreenLoading'
import { Suspense } from 'react'

export default function Page ({ params }: { params: { category: string } }) {
  const { category } = params

  return (
    <Suspense fallback={<FullscreenLoading />}>
      <QuizSelection category={category} />
    </Suspense>
  )
}
