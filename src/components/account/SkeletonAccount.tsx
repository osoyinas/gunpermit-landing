import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@components/ui/card'
import { MotionAccount } from './MotionAccount'
import { Skeleton } from '@components/ui/skeleton'

export default async function SkeletonAccount () {
  return (
      <div className="bg-background text-foreground p-4 md:p-8 max-w-2xl mx-auto">
        <MotionAccount>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl">
                Configuración de la Cuenta
              </CardTitle>
              <CardDescription>
                Gestiona tu información personal y configuración de la cuenta
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />

            </CardContent>
            <CardFooter className="flex flex-row space-y-4 sm:flex-row sm:justify-between sm:space-y-0">
                <Skeleton className="h-12 w-1/4" />
                <Skeleton className="h-12 w-1/4" />
            </CardFooter>
          </Card>
        </MotionAccount>
      </div>
  )
}
