import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { TestsContainer } from '@components/quizzes/TestsContainer'
import { Card, CardContent, CardFooter, CardHeader } from '@components/ui/card'
import { Skeleton } from '@components/ui/skeleton'
import { TypographyP } from '@components/typography/TypographyP'

export async function TopicSelectionSkeleton () {
  return (
    <TestsContainer>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">Inicio</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <span className="text-xl">/</span>
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Material de estudio</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <main className="gap-8 flex flex-col mt-4">
        {[...new Array(7)].map((_, index) => (
              <Card className="w-full m-auto max-w-6xl" key={index}>
                <CardHeader>
                  <Skeleton className="w-1/2 h-8" />
                </CardHeader>
                <CardContent>
                  <TypographyP className="opacity-80">
                    <Skeleton className="w-full h-20" />
                  </TypographyP>
                </CardContent>
                <CardFooter className="flex gap-2 items-center justify-start">
                    <Skeleton className="w-1/6 h-6" />
                </CardFooter>
              </Card>
        ))}
      </main>
    </TestsContainer>
  )
}
