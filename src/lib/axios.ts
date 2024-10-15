import axios from 'axios'
import { API_URI } from './env'
export const axiosDefaultInstance = axios.create({
  baseURL: `${API_URI}/api/v1/`,
  timeout: 5000,
  withCredentials: true
})
