import * as React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { CheckIcon, XIcon } from 'lucide-react'
import { FullscreenContainer } from '../ui/FullscreenContainer'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { axiosServerInstance } from '@/lib/axios/serverAxios'
import { getQuizzes } from '@/services/quizzes/getQuizzes'

interface QuizSelectionProps {
  category?: any;
}

export async function QuizSelection (props: QuizSelectionProps) {
  const { category } = props
  const response = await getQuizzes(axiosServerInstance, {
    category: category.tag
  })
  if (!response.ok) return null
  const quizzes = response.val
  return (
    <FullscreenContainer>
      <Breadcrumb className="max-w-2xl mx-auto">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <span className="text-xl">/</span>
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/tests">Tests</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <span className="text-2xl">/</span>
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>{category}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex items-center space-x-2 w-full justify-center mb-16"></div>
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {quizzes.map((quiz, index) => (

            <a href={`/tests/${quiz.id}`} key={index + 1}>
              <Card
                className={`
                  cursor-pointer transition-all duration-300 transform hover:scale-105
                  ${
                    quiz.passed === true
                      ? 'bg-green-500/20 hover:bg-green-500/30'
                      : quiz.passed === false
                      ? 'bg-red-500/20 hover:bg-red-500/30'
                      : 'bg-primary/10 hover:bg-primary/20'
                  }
                  `}
              >
                <CardContent className="p-4 flex flex-col items-center justify-center h-24">
                  <span className="text-2xl font-bold mb-2">{quiz.number}</span>
                  {quiz.passed === true && (
                    <CheckIcon className="h-6 w-6 text-green-500" />
                  )}
                  {quiz.passed === false && (
                    <XIcon className="h-6 w-6 text-red-500" />
                  )}
                </CardContent>
              </Card>
            </a>
        ))}
      </div>
    </FullscreenContainer>
  )
}
