import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { CheckCircle, XCircle, HelpCircle } from 'lucide-react'
import { getTopicsStatistics } from '@/services/metrics/getTopicsStatistics'
import { axiosServerInstance } from '@/lib/axios/serverAxios'
import {
  MotionTopicStatistics,
  MotionTopicItem
} from './MotionTopicStatistics'

export async function TopicStatisticsCard () {
  const response = await getTopicsStatistics(axiosServerInstance)
  if (!response.ok) return null
  const topicsStatistics = response.val
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>Estadísticas por Tema</span>
          <span className="text-sm font-normal text-muted-foreground">
            Total: {topicsStatistics.answered ?? 0} /{' '}
            {topicsStatistics.total ?? 0} respondidas
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <MotionTopicStatistics className="space-y-6">
          {Object.entries(topicsStatistics.topics).map(
            ([topicName, topictopicsStatistics]) => {
              if (!topictopicsStatistics) return null

              const answered = topictopicsStatistics.answered ?? 0
              const total = topictopicsStatistics.total ?? 0
              const correct = topictopicsStatistics.correct ?? 0
              const incorrect = topictopicsStatistics.incorrect ?? 0

              return (
                <MotionTopicItem key={topicName} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">{topicName}</h3>
                    <span className="text-sm text-muted-foreground">
                      {answered} / {total} respondidas
                    </span>
                  </div>
                  <TwoColorProgress
                    correct={correct}
                    incorrect={incorrect}
                    total={total}
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
                </MotionTopicItem>
              )
            }
          )}
        </MotionTopicStatistics>
      </CardContent>
      <CardFooter className="border-t">
        <div className="w-full space-y-2">
          <div className="flex justify-between items-center">
            <span className="font-medium">Estadísticas Totales</span>
            <span className="text-sm text-muted-foreground">
              {topicsStatistics.answered} / {topicsStatistics.total} respondidas
            </span>
          </div>
          <TwoColorProgress
            correct={topicsStatistics.correct}
            incorrect={topicsStatistics.incorrect}
            total={topicsStatistics.total}
          />
          <div className="flex justify-between text-sm">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
              <span>{topicsStatistics.correct} correctas</span>
            </div>
            <div className="flex items-center">
              <XCircle className="h-4 w-4 text-red-500 mr-1" />
              <span>{topicsStatistics.incorrect} incorrectas</span>
            </div>
            <div className="flex items-center">
              <HelpCircle className="h-4 w-4 text-yellow-500 mr-1" />
              <span>
                {topicsStatistics.total - topicsStatistics.answered} pendientes
              </span>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

function TwoColorProgress ({
  correct,
  incorrect,
  total
}: {
  correct: number;
  incorrect: number;
  total: number;
}) {
  const correctPercentage = (correct / total) * 100
  const incorrectPercentage = (incorrect / total) * 100

  return (
    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
      <div
        className="h-full bg-green-500"
        style={{ width: `${correctPercentage}%`, float: 'left' }}
      />
      <div
        className="h-full bg-red-500"
        style={{ width: `${incorrectPercentage}%`, float: 'left' }}
      />
    </div>
  )
}
