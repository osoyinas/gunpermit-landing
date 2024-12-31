import { axiosServerInstance } from '@/lib/axios/serverAxios'
import { getQuizAttempts } from '@/services/metrics/getQuizAttempts'
import { TypographyMuted } from '@components/typography/TypographyMuted'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from '@components/ui/card'
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table
} from '@components/ui/table'
import { TimeAgoComponent } from './TimeAgoComponent'

export async function RecentResultsCard () {
  const response = await getQuizAttempts(axiosServerInstance, { size: 100 })
  if (!response.ok) return null
  const attempts = response.val.results
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
              <TableHead className="text-foreground">Test</TableHead>
              <TableHead className="text-foreground">Categoría</TableHead>
              <TableHead className="text-foreground">Puntuación</TableHead>
              <TableHead className="text-foreground">Realizado</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {attempts.map((attempt) => (
              <TableRow key={attempt.id}>
                <TableCell>{attempt.quiz}</TableCell>
                <TableCell className="font-bold opacity-85">
                  {attempt.category}
                </TableCell>
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
                    <TimeAgoComponent date={new Date(attempt.date)} />
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
