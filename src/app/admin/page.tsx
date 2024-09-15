'use client'
import { TopicsList } from '@/components/admin/TopicsList'
import UploadTopic from '@/components/admin/UploadTopic'
import { useRedirectWithAuth } from '@/hooks/useRedirectWithAuth'

export default function Page () {
  useRedirectWithAuth()
  return (
    <main className="mx-auto p-8">
      <h1 className="text-4xl font-bold text-primary">Panel de administrador</h1>
      <div className='flex flex-col gap-4'>
      <TopicsList/>
      <UploadTopic/>
      </div>
    </main>
  )
}
