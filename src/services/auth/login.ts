import { axiosInstance } from '@/lib/axios'
interface LoginParams {
    email: string;
    password: string;
}
export function login (params: LoginParams): Promise<string> {
  return axiosInstance.post('/auth/login', params)
    .then(response => response.data.token)
    .catch(error => {
      throw new Error(error.response.data.message)
    })
}
