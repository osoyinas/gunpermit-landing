'use client'

import * as React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'
import { useQuizAttempts } from '@hooks/api/metrics/useQuizResults'
import { useEffect, useState } from 'react'
import { QuizAttemptResult } from '@/types/Metrics'
import { CustomTooltip } from './CustomStatsTooltip'
import { CustomDot } from './CustomDot'
import { HowItWorksDrawerDialog } from './HowItWorksDrawerDialog'
import { Skeleton } from '@components/ui/skeleton'

export function PuntuationProgressCard () {
  const { getQuizAttempts } = useQuizAttempts()
  const [attempts, setAttempts] = useState<QuizAttemptResult[] | undefined>()

  useEffect(() => {
    const fetchData = async () => {
      const response = await getQuizAttempts({ size: 99 })
      if (response.ok) {
        setAttempts(response.val.results)
      }
    }
    fetchData()
  }, [])

  if (!attempts) {
    return (
      <Card>
          <CardHeader>
            <CardTitle>Progreso de Puntuación</CardTitle>
            <CardDescription>
              Evolución de tus resultados en el tiempo
            </CardDescription>
            <Skeleton className='h-[250px]' />
          </CardHeader>
      </Card>
    )
  }

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
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={lineChartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="date" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="mark"
              stroke="#8884d8"
              dot={CustomDot}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotoneY"
              strokeDasharray="5 5"
              label="Aprobado"
              dataKey="score_to_pass"
              stroke="#15803d"
              dot={{ r: 0 }}
              activeDot={{ r: 0 }}
            />
          </LineChart>
        </ResponsiveContainer>
        <HowItWorksDrawerDialog />
      </CardContent>
    </Card>
  )
}
