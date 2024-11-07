import * as React from 'react'
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
import { QuizRow } from './QuizRow'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { BreadcrumContainer } from './BreadcrumContainer'

interface QuizSelectionProps {
  category?: string;
}

export async function QuizSelection (props: QuizSelectionProps) {
  const { category } = props
  const response = await getQuizzes(axiosServerInstance, {
    category
  })

  if (!response.ok) return null
  const quizzes = response.val
  return (
    <BreadcrumContainer>
      <Breadcrumb className="mx-auto">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">Inicio</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <span className="text-xl">/</span>
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/tests">Tests</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <span className="text-xl">/</span>
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>{category}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Table className="max-3xl mt-4">
        <TableHeader>
          <TableRow>
            <TableHead>Test</TableHead>
            <TableHead className="text-right">Nota</TableHead>
            <TableHead className="text-center">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {quizzes.map((quiz, index) => (
            <QuizRow key={quiz.id} quiz={quiz} />
          ))}
        </TableBody>
      </Table>
    </BreadcrumContainer>
  )
}
