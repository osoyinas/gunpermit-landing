import { Question } from '@/types/Topic'
import { Axios } from 'axios'
import { Err, Ok, Result } from 'ts-results'

export const getTopicQuestions = async (axiosInstance: Axios, id:number): Promise<Result<Array<Question>, string>> => {
  try {
    const response = await axiosInstance.get(`/topics/${id}/questions`)
    return Ok(response.data)
  } catch (error) {
    return Err('Ha ocurrido un error al obtener las preguntas')
  }
}
