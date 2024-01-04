import { TopicsList } from '@/components/admin/TopicsList'
import UploadPDF from '@/components/admin/UploadPDF'

export default function page () {
  return (
    <main className="w-[800px] mx-auto p-8">
      <h1 className="text-4xl font-bold text-primary">Panel de administrador</h1>
      <div className='flex flex-col gap-4'>
      <TopicsList/>
      <UploadPDF/>
      </div>
    </main>
  )
}
