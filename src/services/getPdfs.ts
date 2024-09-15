import type { PdfType } from '@/types/Topic.ts'
import { AxiosInstance } from 'axios'

export async function getPdfs (axiosInstance:AxiosInstance): Promise<PdfType[]> {
  const response = await axiosInstance.get('pdfs/')
  const pdfs: PdfType[] = response.data
  return pdfs
}
