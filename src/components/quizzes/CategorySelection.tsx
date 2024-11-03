import * as React from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from '@/components/ui/card'
import { FullscreenContainer } from '../ui/FullscreenContainer'
import { TypographyP } from '@components/typography/TypographyP'
import { TypographyH2 } from '@components/typography/TypographyH2'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Badge } from '@components/ui/badge'
import { getQuizCategories } from '@/services/quizzes/getQuizCategories'
import { axiosServerInstance } from '@/lib/axios/serverAxios'

export async function CategorySelection () {
  const response = await getQuizCategories(axiosServerInstance)

  if (!response.ok) return null
  const categories = response.val
  return (
    <FullscreenContainer className="max-w-2xl mx-auto flex flex-col gap-8 pt-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <span className="text-2xl">/</span>
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Tests</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <main className="gap-8 flex flex-col">
        {categories.map((category, index) => (
            <a href={`/tests/categories/${category.tag}/`} key={category.id}>
              <Card className="w-full m-auto max-w-6xl hover:scale-105 hover:border-primary transition-all">
                <CardHeader>
                  <TypographyH2>{category.title}</TypographyH2>
                </CardHeader>
                <CardContent>
                  <TypographyP className="opacity-80">
                    {category.description}
                  </TypographyP>
                </CardContent>
                <CardFooter className="flex gap-2 items-center justify-center">
                  <Badge variant="outline">
                    {category.total_quizzes} en total
                  </Badge>
                  <Badge variant="default">
                    {category.passed_quizzes} tests aprobados
                  </Badge>
                  <Badge variant="destructive">
                    {category.failed_quizzes} tests fallidos
                  </Badge>
                </CardFooter>
              </Card>
            </a>
        ))}
      </main>
    </FullscreenContainer>
  )
}
