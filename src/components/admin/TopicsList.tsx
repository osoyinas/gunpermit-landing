'use client'

import { usePdfs } from '@/hooks/usePdfs'
import { Loading } from '@/components/Loading'
import { PdfType } from '@/types/Topic'
import Link from 'next/link'

export function TopicsList () {
  const { pdfs, error, loading } = usePdfs()
  return (
    <section className="my-4">

      {loading && <div className='w-full flex items-center justify-center'><Loading /></div>}
      {error && <div className='w-full text-xl text-red-600 font-bold flex items-center justify-center'><p>{error.message}</p></div>}
      {!loading && !error && <Table pdfs={pdfs} />}
    </section>
  )
};

function Table ({ pdfs }: { pdfs: PdfType[] }) {
  return (
  <table className='table table-zebra'>
      <thead>
        <tr>
          <th>Tema</th>
          <th>Preguntas</th>
          <th>Fecha de creación</th>
        </tr>
      </thead>
      <tbody>
        {pdfs.map((pdf, index) => (
          <tr key={index}>
            <td>
              <Link href={`/admin/topics/${pdf.topic.id}`}>
                {pdf.topic.title}
              </Link>
            </td>
            <td> {pdf.topic.questions.length} </td>
            <td>{new Date(pdf.created_at).toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric'
            })}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
