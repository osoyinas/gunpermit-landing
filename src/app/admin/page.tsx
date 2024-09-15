'use client'
import { TopicsList } from '@/components/admin/TopicsList'
import UploadTopic from '@/components/admin/UploadTopic'
import { useRedirectIf } from '@/hooks/redirects/useRedirectIf'

export default function Page () {
  useRedirectIf({ authenticated: false })

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
