import axios from 'axios'
import { API_URI } from '../env'

export const defaultInstace = axios.create({
  baseURL: `${API_URI}/api/v1/`,
  timeout: 5005
})

export default defaultInstace
