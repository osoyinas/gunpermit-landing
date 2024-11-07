import {
  CardContent,
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@components/ui/card'
import { BookOpenIcon, TrophyIcon } from 'lucide-react'
import { LinkButton } from '@components/ui/linkButton'
export function QuickAccessCard () {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Acceso Rápido</CardTitle>
        <CardDescription>Recursos de estudio y herramientas</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <LinkButton className="w-full" variant="default" href="/tests">
          <BookOpenIcon className="mr-2 h-4 w-4" />
          Hacer tests
        </LinkButton>
        <LinkButton className="w-full" variant="outline" href="/topics">
          <BookOpenIcon className="mr-2 h-4 w-4" />
          Material de Estudio
        </LinkButton>
        <LinkButton className="w-full" variant="outline" href="/progress">
          <TrophyIcon className="mr-2 h-4 w-4" />
          Mi progreso
        </LinkButton>
      </CardContent>
    </Card>
  )
}
