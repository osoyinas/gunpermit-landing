'use client'

import { PdfItem } from './PdfItem';
import { usePdfs } from '@/hooks/usePdfs';
export function PdfList() {
  const pdfs  = usePdfs();
  return (
    <>
    {pdfs && pdfs.length > 0 ? (
      <ul className="flex gap-4">
        {pdfs.map((pdf, index) => (
          <PdfItem pdf={pdf} key={index}/>
        ))}
      </ul>
    ) : (
      <p>No hay pdfs</p>
    )}
  </>
  )
};
