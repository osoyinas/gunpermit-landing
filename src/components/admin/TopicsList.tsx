'use client'

import { usePdfs } from '@/hooks/usePdfs'
export function TopicsList () {
  const pdfs = usePdfs()
  return (
    <section className="my-4">

    {pdfs && pdfs.length > 0
      ? (
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
            <td> {pdf.topic.name} </td>
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
      : (
      <p>No hay pdfs</p>
        )}
  </section>
  )
};
