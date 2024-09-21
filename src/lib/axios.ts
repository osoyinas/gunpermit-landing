import axios from 'axios'

export const axiosDefaultInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1/',
  timeout: 5000,
  withCredentials: true
})
