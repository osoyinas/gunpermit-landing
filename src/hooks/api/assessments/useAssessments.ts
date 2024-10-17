import { Result, Ok, Err } from 'ts-results'
import useAxios from '@/hooks/useAxios'
import { Assessment, Place } from '@/types/Assessments'

export function useAssessments (): {
    getPlaces: () => Promise<Result<Array<Place>, string>>;
  getNextAssessment: (placeId: number) =>Promise<Result<Assessment, string>>;
  } {
  const axios = useAxios()

  const getPlaces = async (): Promise<Result<Array<Place>, string>> => {
    try {
      const response = await axios.get('/places/')
      return Ok(response.data)
    } catch (error) {
      return Err('Ha ocurrido un error al obtener los lugares')
    }
  }

  const getNextAssessment = async (placeId:number): Promise<Result<Assessment, string>> => {
    try {
      const response = await axios.get(`/places/${placeId}/next-assessment/`)
      return Ok(response.data)
    } catch (error) {
      return Err('Ha ocurrido un error al obtener el próximo examen')
    }
  }
  return { getPlaces, getNextAssessment }
}
