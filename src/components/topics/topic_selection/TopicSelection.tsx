import * as React from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from '@/components/ui/card'
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
import { axiosServerInstance } from '@/lib/axios/serverAxios'
import { TestsContainer } from '@components/quizzes/TestsContainer'
import { getTopics } from '@/services/topics/getTopics'

export async function TopicSelection () {
  const response = await getTopics(axiosServerInstance)

  if (!response.ok) return null
  const topics = response.val
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
        {topics.map((topics, index) => (
            <a href={`/topics/${topics.id}/`} key={topics.id}>
              <Card className="w-full m-auto max-w-6xl hover:border-primary transition-all">
                <CardHeader>
                  <TypographyH2>{topics.title}</TypographyH2>
                </CardHeader>
                <CardContent>
                  <TypographyP className="opacity-80">
                    {topics.description}
                  </TypographyP>
                </CardContent>
                <CardFooter className="flex gap-2 items-center justify-start">
                  <Badge variant="outline">
                    {topics.questions_count} preguntas
                  </Badge>
                </CardFooter>
              </Card>
            </a>
        ))}
      </main>
    </TestsContainer>
  )
}
