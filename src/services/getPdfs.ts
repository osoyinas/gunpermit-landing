import {axiosInstance as axios} from '@/lib/axios';
import type {PdfType} from '@/types/Topic.ts';

export async function getPdfs(): Promise<PdfType[]> {
  const response = await axios.get('/api/pdfs/');
  const pdfs: PdfType[] = await response.data;
  return pdfs;
}