import * as React from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from '@/components/ui/card'
import { TypographyP } from '@components/typography/TypographyP'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { BreadcrumContainer } from './BreadcrumContainer'
import { Skeleton } from '@components/ui/skeleton'

export async function CategorySelectionSkeleton () {
  const categories = Array.from({ length: 2 }, (_, index) => (null))
  return (
    <BreadcrumContainer>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">Inicio</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <span className="text-xl">/</span>
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Tests</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <main className="gap-8 flex flex-col mt-4">
        {categories.map((category, index) => (
              <Card className="w-full m-auto max-w-6xl" key={index}>
                <CardHeader>
                  <Skeleton className="w-1/2 h-12" />
                </CardHeader>
                <CardContent>
                  <TypographyP className="opacity-80">
                    <Skeleton className="w-full h-20" />
                  </TypographyP>
                </CardContent>
                <CardFooter className="flex gap-2 items-center justify-center">
                    <Skeleton className="w-1/6 h-6" />
                    <Skeleton className="w-1/6 h-6" />
                    <Skeleton className="w-1/6 h-6" />
                </CardFooter>
              </Card>
        ))}
      </main>
    </BreadcrumContainer>
  )
}
