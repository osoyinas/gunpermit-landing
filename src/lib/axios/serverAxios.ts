'use server'
import axios from 'axios'
import { API_URI } from '../env'
import { getSession } from 'next-auth/react'

export const axiosServerInstance = axios.create({
  baseURL: `${API_URI}/api/v1/`,
  timeout: 5005
})

axiosServerInstance.interceptors.request.use(
  async (config) => {
    console.log('INTERCEPTOoRRRRRRRRRRRRRRRRRRRRRRRRR')
    const session = await getSession()
    console.log(session)
    // if (accessToken) {
    //   config.headers.Authorization = `Bearer ${accessToken}`
    // }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
