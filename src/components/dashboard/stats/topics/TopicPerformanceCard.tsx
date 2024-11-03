import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@components/ui/card'

import { HowItWorksDrawerDialog } from './HowItWorksDrawerDialog'
import { getTopicsPerformace } from '@/services/metrics/getTopicsPerformance'
import { axiosServerInstance } from '@/lib/axios/serverAxios'
import { TopicPerformanceRadarChart } from './TopicPerformanceRadarChart'

export async function TopicPerformanceCard () {
  const response = await getTopicsPerformace(axiosServerInstance)
  if (!response.ok) return null
  const topicsPerformance = response.val
  return (
    <Card>
      <CardHeader>
        <CardTitle>Rendimiento por Tema</CardTitle>
        <CardDescription>
          Preguntas correctas de cada tema y las totales
        </CardDescription>
      </CardHeader>
      <CardContent>
        <TopicPerformanceRadarChart data={topicsPerformance} />
        <HowItWorksDrawerDialog />
      </CardContent>
    </Card>
  )
}
