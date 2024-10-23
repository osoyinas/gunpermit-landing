'use client'
import { CalendarIcon } from 'lucide-react'
import TimeAgo from 'javascript-time-ago'
import es from 'javascript-time-ago/locale/es'
import ReactTimeAgo from 'react-time-ago'

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from '../../ui/card'
import { useEffect, useState } from 'react'
import { Assessment, Place } from '@/types/Assessments'
import { useAssessments } from '@/hooks/api/assessments/useAssessments'
import { Loading } from '../../Loading'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import useAssessmentLocalStorage from '@/hooks/assessments/useAssessmentLocalStorage'
import { Skeleton } from '../../ui/skeleton'
import { DetailsButton } from '@/components/dashboard/assesments/DetailsButton'
import { TypographyMuted } from '@components/typography/TypographyMuted'
import AddToCalendarButton from '@/components/dashboard/assesments/AddToCalendarButton'

TimeAgo.addDefaultLocale(es)

export function NextAssessmentCard () {
  const [assessment, setAssessment] = useState<Assessment | null>(null)
  const [places, setPlaces] = useState<Place[] | null>(null)
  const {
    selectedPlace: selectedPlaceId,
    setSelectedPlace: setSelectedPlaceId
  } = useAssessmentLocalStorage()
  const { getPlaces, getNextAssessment } = useAssessments()

  const [loadingNextAssessment, setLoadingNextAssessment] = useState(true)
  useEffect(() => {
    const fetchPlaces = async () => {
      const response = await getPlaces()
      if (response.ok) {
        const newPlaces = response.val
        setPlaces(newPlaces)
      }
    }
    fetchPlaces()
  }, [])

  useEffect(() => {
    if (places == null) return
    if (selectedPlaceId == null && places.length > 0) {
      setSelectedPlaceId(places[0].id)
    }
  }, [selectedPlaceId, places])

  useEffect(() => {
    if (places == null || selectedPlaceId == null) return
    setLoadingNextAssessment(true)
    const fetchNextAssessment = async () => {
      const response = await getNextAssessment(selectedPlaceId)
      if (response.ok) {
        setAssessment(response.val)
      }
      setTimeout(() => setLoadingNextAssessment(false), 200)
    }
    fetchNextAssessment()
  }, [selectedPlaceId, places])

  const handlePlaceChange = (placeId: string) => {
    setSelectedPlaceId(parseInt(placeId))
  }

  if (assessment == null || places == null) {
    return (
      <Card className="flex justify-center items-center">
        <Loading />
      </Card>
    )
  }
  const localeDateString = new Date(assessment.date).toLocaleDateString()
  const date = new Date(assessment.date)

  const selectedPlaceName = places.find((place) => {
    return place.id === selectedPlaceId
  })?.name

  return (
    <Card>
      <CardHeader>
        <CardTitle>Próxima Prueba</CardTitle>
        <CardDescription>Información sobre tu próximo examen</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Select
            onValueChange={handlePlaceChange}
            value={selectedPlaceId?.toString()}
          >
            <SelectTrigger>
              <SelectValue placeholder="Seleciona Ubicación" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Comandancias</SelectLabel>
                {places.map((place, index) => (
                  <SelectItem key={index} value={place.id.toString()}>
                    {place.province != null
                      ? `${place.name} - ${place.province}`
                      : place.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center space-x-4">
          <CalendarIcon className="h-10 w-10 text-primary" />
          {loadingNextAssessment
            ? (
            <div>
              <p className="text-sm font-medium">Fecha del Examen</p>
              <Skeleton className="w-24 h-6" />
            </div>
              )
            : (
            <div>
              <p className="text-sm font-medium">Fecha del Examen</p>
              <p className="text-lg">
                <span className="font-bold">{localeDateString}</span>
                <br />
                <TypographyMuted>
                  <ReactTimeAgo
                    date={new Date(assessment.date)}
                    locale="es-ES"
                  />{' '}
                </TypographyMuted>
              </p>
            </div>
              )}
        </div>
        <div>
          <p className="text-sm font-medium mb-1">Tipo de Examen</p>
          <p className="text-lg">Licencia de armas de caza (D, E, AEM)</p>
        </div>
        <DetailsButton className="w-full" />
        <AddToCalendarButton
          className="w-full"
          title="Examen para Licencia de armas de caza (D, E, AEM)"
          startDate={date}
          details="Licencia de armas de caza (D, E, AEM)"
          location={`Comandancia de la Guardia Civil, ${
            selectedPlaceName ?? ''
          } `}
        />
      </CardContent>
    </Card>
  )
}
