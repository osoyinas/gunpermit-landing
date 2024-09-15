import { axiosInstance } from '@/lib/axios'

export async function logout (): Promise<void> {
  return await axiosInstance.delete('/auth/logout/')
}
