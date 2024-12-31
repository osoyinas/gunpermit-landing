'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { CheckCircle, XCircle, HelpCircle } from 'lucide-react'
import { UserQuestionAttemptsResponse } from '@/types/Metrics'

interface TopicStatisticsCardProps {
  data: UserQuestionAttemptsResponse
}

// Datos de ejemplo
const sampleData: UserQuestionAttemptsResponse = {
  topics: {
    'Leyes y Regulaciones': {
      answered: 30,
      total: 50,
      correct: 25,
      incorrect: 5
    },
    'Seguridad de Armas': {
      answered: 40,
      total: 60,
      correct: 35,
      incorrect: 5
    },
    'Manejo de Armas': {
      answered: 20,
      total: 40,
      correct: 15,
      incorrect: 5
    },
    'Primeros Auxilios': {
      answered: 15,
      total: 30,
      correct: 12,
      incorrect: 3
    }
  },
  answered: 105,
  total: 180
}

export function TopicStatisticsCard ({ data = sampleData }: TopicStatisticsCardProps) {
  if (!data || !data.topics) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="p-6">
          <p className="text-center text-muted-foreground">No hay datos disponibles.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>Estadísticas por Tema</span>
          <span className="text-sm font-normal text-muted-foreground">
            Total: {data.answered ?? 0} / {data.total ?? 0} respondidas
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {Object.entries(data.topics).map(([topicName, topicData]) => {
            if (!topicData) return null

            const answered = topicData.answered ?? 0
            const total = topicData.total ?? 0
            const correct = topicData.correct ?? 0
            const incorrect = topicData.incorrect ?? 0

            return (
              <motion.div
                key={topicName}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{topicName}</h3>
                  <span className="text-sm text-muted-foreground">
                    {answered} / {total} respondidas
                  </span>
                </div>
                <Progress
                  value={total > 0 ? (answered / total) * 100 : 0}
                  className="h-2"
                />
                <div className="flex justify-between text-sm">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                    <span>{correct} correctas</span>
                  </div>
                  <div className="flex items-center">
                    <XCircle className="h-4 w-4 text-red-500 mr-1" />
                    <span>{incorrect} incorrectas</span>
                  </div>
                  <div className="flex items-center">
                    <HelpCircle className="h-4 w-4 text-yellow-500 mr-1" />
                    <span>{total - answered} pendientes</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </CardContent>
    </Card>
  )
}
