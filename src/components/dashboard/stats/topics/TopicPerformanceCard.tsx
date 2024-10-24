import { TopicPerformance } from '@/types/Metrics'
import { Loading } from '@components/Loading'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@components/ui/card'
import { useQuizAttempts } from '@hooks/api/metrics/useQuizResults'
import { useEffect, useState } from 'react'
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer
} from 'recharts'
import { HowItWorksDrawerDialog } from './HowItWorksDrawerDialog'
import { Skeleton } from '@components/ui/skeleton'

export function TopicPerformanceCard () {
  const { getTopicsPerformace } = useQuizAttempts()
  const [topicsPerformance, setTopicsPerformance] = useState<
    TopicPerformance[] | undefined
  >()

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTopicsPerformace()
      if (response.ok) {
        setTopicsPerformance(
          response.val.map((topic) => ({
            ...topic,
            topic: topic.topic.slice(0, 6)
          }))
        )
      }
    }
    fetchData()
  }, [])

  if (!topicsPerformance) {
    return (
      <Card>
        <CardHeader>
        <CardTitle>Rendimiento por Tema</CardTitle>
        <CardDescription>Preguntas correctas de cada tema y las totales</CardDescription>
      </CardHeader>
      <CardContent>
        <Skeleton className='h-[300px]' />
      </CardContent>
      </Card>
    )
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Rendimiento por Tema</CardTitle>
        <CardDescription>Preguntas correctas de cada tema y las totales</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="80%"
            data={topicsPerformance}
          >
            <PolarGrid stroke="#333" />
            <PolarAngleAxis dataKey="topic" stroke="#888" />
            <PolarRadiusAxis stroke="#888" />
            <Radar
              name="Preguntas correctas"
              dataKey="mark"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.9}
            />
            <Radar
              name="Preguntas totales"
              dataKey="full_mark"
              strokeDasharray="5 5"
              stroke="#82ca9d"
              fillOpacity={0.1}
            />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
        <HowItWorksDrawerDialog />
      </CardContent>
    </Card>
  )
}
