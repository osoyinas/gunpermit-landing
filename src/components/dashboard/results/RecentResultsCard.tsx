import { QuizAttemptResult } from '@/types/Metrics'
import { Loading } from '@components/Loading'
import { TypographyMuted } from '@components/typography/TypographyMuted'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from '@components/ui/card'
import { Skeleton } from '@components/ui/skeleton'
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table
} from '@components/ui/table'
import { useQuizAttempts } from '@hooks/api/metrics/useQuizResults'
import { useEffect, useState } from 'react'
import ReactTimeAgo from 'react-time-ago'

export function RecentResultsCard () {
  const { getQuizAttempts } = useQuizAttempts()
  const [attempts, setAttempts] = useState<QuizAttemptResult[] | undefined>()

  useEffect(() => {
    const fetchData = async () => {
      const response = await getQuizAttempts()
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
          <CardTitle>Resultados Recientes</CardTitle>
          <CardDescription>Tus últimos intentos de examen</CardDescription>
        </CardHeader>
        <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-foreground">Puntuación</TableHead>
              <TableHead className="text-foreground">Realizado</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              Array.from({ length: 5 }).map((_, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Skeleton className="w-12 h-6" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="w-16 h-6" />
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Resultados Recientes</CardTitle>
        <CardDescription>Tus últimos intentos de examen</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-foreground">Puntuación</TableHead>
              <TableHead className="text-foreground">Realizado</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {attempts.map((attempt) => (
              <TableRow key={attempt.id}>
                <TableCell>
                  <div
                    className={` px-3 py-1 rounded-full font-bold w-min min-w-[4rem] flex items-center justify-center ${
                      attempt.passed ? 'bg-green-700' : 'bg-red-900'
                    }`}
                  >
                    {attempt.score}
                  </div>
                </TableCell>
                <TableCell>
                  <TypographyMuted>
                    <ReactTimeAgo date={new Date(attempt.date)} locale="es" />
                  </TypographyMuted>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
