import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

import { HowItWorksDrawerDialog } from './HowItWorksDrawerDialog'
import { axiosServerInstance } from '@/lib/axios/serverAxios'
import { getQuizAttempts } from '@/services/metrics/getQuizAttempts'
import { PuntuationProgressLineChart } from './PuntuationProgressLineChart'

export async function PuntuationProgressCard () {
  const response = await getQuizAttempts(axiosServerInstance, { size: 1000 })
  if (!response.ok) return null
  const attempts = response.val.results
  const lineChartData = attempts.map((attempt) => ({
    date: new Date(attempt.date).toLocaleString(),
    mark: attempt.mark,
    score: attempt.score,
    score_to_pass: 80,
    passed: attempt.passed
  })).toReversed()
  return (
    <Card>
      <CardHeader>
        <CardTitle>Progreso de Puntuación</CardTitle>
        <CardDescription>
          Evolución de tus resultados en el tiempo
        </CardDescription>
      </CardHeader>
      <CardContent>
        <PuntuationProgressLineChart data={lineChartData} />
        <HowItWorksDrawerDialog />
      </CardContent>
    </Card>
  )
}
