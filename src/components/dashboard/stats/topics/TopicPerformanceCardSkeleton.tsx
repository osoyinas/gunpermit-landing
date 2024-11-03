import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@components/ui/card'
import { Skeleton } from '@components/ui/skeleton'
export function TopicPerformanceCardSkeleton () {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Rendimiento por Tema</CardTitle>
        <CardDescription>
          Preguntas correctas de cada tema y las totales
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Skeleton className="h-[250px]" />
      </CardContent>
    </Card>
  )
}
