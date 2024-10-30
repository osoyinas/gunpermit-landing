import axios from 'axios'
import { API_URI } from '../env'

const defaultInstace = axios.create({
  baseURL: `${API_URI}/api/v1/`,
  timeout: 5005
})

export default defaultInstace
