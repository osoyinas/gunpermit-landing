import { Card, CardHeader, CardTitle, CardDescription } from '@components/ui/card'
import { LinkButton } from '@components/ui/linkButton'
import { Skeleton } from '@components/ui/skeleton'

export function PuntuationProgressCardSkeleton () {
  return (
        <Card>
          <CardHeader>
            <CardTitle>Progreso de Puntuación</CardTitle>
            <CardDescription>
              Evolución de tus resultados en el tiempo
            </CardDescription>
            <Skeleton className='h-[262px] w-full' />
            <LinkButton variant='link'>
              ¿Cómo funciona este gráfico?
            </LinkButton>
          </CardHeader>
      </Card>
  )
}
