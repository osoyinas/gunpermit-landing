import { TopicSelection } from '@components/topics/topic_selection/TopicSelection'
import { TopicSelectionSkeleton } from '@components/topics/topic_selection/TopicSelectionSkeleton'
import { Suspense } from 'react'

export default function Page () {
  return (
    <Suspense fallback={<TopicSelectionSkeleton />}>
      <TopicSelection />
    </Suspense>
  )
}
