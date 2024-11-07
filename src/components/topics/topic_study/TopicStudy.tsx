import { axiosServerInstance } from '@/lib/axios/serverAxios'
import { getTopic } from '@/services/topics/getTopic'
import { getTopicQuestions } from '@/services/topics/getTopicQuestions'
import { StudyQuestion } from './study_question/StudyQuestion'
import { BreadcrumContainer } from '@components/quizzes/BreadcrumContainer'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { TypographyP } from '@components/typography/TypographyP'
import { TypographyH1 } from '@components/typography/TypographyH1'
import { Separator } from '@components/ui/separator'
interface TopicStudyProps {
  topicId: number;
}

export async function TopicStudy (props: TopicStudyProps) {
  const { topicId } = props
  const responseTopic = await getTopic(axiosServerInstance, topicId)
  const responseQuestions = await getTopicQuestions(
    axiosServerInstance,
    topicId
  )
  if (!responseTopic.ok || !responseQuestions.ok) return null
  const topic = responseTopic.val
  const questions = responseQuestions.val

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
            <BreadcrumbLink href="/topics">Material de estudio</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <span className="text-xl">/</span>
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>{topic.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <header className="my-4 md:my-8">
        <TypographyH1>{topic.title}</TypographyH1>
        <TypographyP>{topic.description}</TypographyP>
      </header>
      <Separator />
      <ul className="flex flex-col gap-4">
        {questions.map((question, index) => (
          <li key={question.id}>
            <StudyQuestion
              question={question}
              index={index}
              totalQuestions={questions.length}
            />
          </li>
        ))}
      </ul>
    </BreadcrumContainer>
  )
}
