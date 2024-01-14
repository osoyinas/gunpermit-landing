import { axiosInstance as axios } from '@/lib/axios'
import type { PdfType } from '@/types/Topic.ts'

export async function getPdfs (): Promise<PdfType[]> {
  const response = await axios.get('pdfs/')
  const pdfs: PdfType[] = response.data
  return pdfs
}
