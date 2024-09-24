'use client'

import { useState, useEffect } from 'react'
import { retrieveTopic } from '@/services/retrieveTopic'
import TopicRetrieve from '@/components/admin/TopicRetrieve'
import { Topic } from '@/types/Topic'
import { Loading } from '@/components/Loading'
import useAxios from '@/hooks/useAxios'

export default function Page ({ params }: { params: { topicId: number } }) {
  const [topic, setTopic] = useState<Topic | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const axiosInstance = useAxios()
  useEffect(() => {
    const fetchTopic = async () => {
      const response = await retrieveTopic(params.topicId, axiosInstance)
      setTopic(response ?? null)
    }

    fetchTopic()
    setLoading(false)
  }, [params.topicId])

  return (
    <main className="mx-auto p-8">
      {loading && <div className='w-full flex items-center justify-center scale-150'><Loading /></div>}
      {topic && !loading && <TopicRetrieve topic={topic}/>}
    </main>
  )
}
