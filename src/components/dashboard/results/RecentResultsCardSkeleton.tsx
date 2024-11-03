import { Skeleton } from '@components/ui/skeleton'
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table
} from '@components/ui/table'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from '@components/ui/card'

export function RecentResultsCardSkeleton () {
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
            {Array.from({ length: 5 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Skeleton className="w-12 h-6" />
                </TableCell>
                <TableCell>
                  <Skeleton className="w-16 h-6" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
