import { TopicStudy } from '@components/topics/topic_study/TopicStudy'
import { TopicStudySkeleton } from '@components/topics/topic_study/TopicStudySkeleton'
import { Suspense } from 'react'

export default function Page ({ params }: { params: { id: number } }) {
  const { id } = params

  return (
    <Suspense fallback={<TopicStudySkeleton topicId={id}/>}>
      <TopicStudy topicId={id} />
    </Suspense>
  )
}
