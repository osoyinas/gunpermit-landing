import { TestsContainer } from '@components/quizzes/TestsContainer'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Skeleton } from '@components/ui/skeleton'
import StudyQuestionSkeleton from './study_question/StudyQuestionSkeleton'
import { Separator } from '@components/ui/separator'

interface TopicStudySkeletonProps {
  topicId: number;
}

export async function TopicStudySkeleton (props: TopicStudySkeletonProps) {
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
            <BreadcrumbLink href="/topics">Material de estudio</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <span className="text-xl">/</span>
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Tema {props.topicId}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <header className="my-4 md:my-8">
        <Skeleton className="h-12 w-64 mb-8" />
        <Skeleton className="h-6 w-96" />
      </header>
      <Separator />
      <ul className="flex flex-col gap-4">
        {[...Array(4)].map((_, index) => (
          <li key={index}>
            <StudyQuestionSkeleton />
          </li>
        ))}
      </ul>
    </TestsContainer>
  )
}
