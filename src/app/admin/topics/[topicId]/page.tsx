'use client'

import { useState, useEffect } from 'react'
import { retrieveTopic } from '@/services/retrieveTopic'
import TopicRetrieve from '@/components/admin/TopicRetrieve'
import { Topic } from '@/types/Topic'

export default function Page ({ params }: { params: { topicId: number } }) {
  const [topic, setTopic] = useState<Topic | null>(null)

  useEffect(() => {
    const fetchTopic = async () => {
      const response = await retrieveTopic(params.topicId)
      setTopic(response ?? null)
    }

    fetchTopic()
  }, [params.topicId])

  return (
    <main className='relative'>
      {topic && <TopicRetrieve topic={topic}/>}

    </main>
  )
}
