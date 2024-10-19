'use client'

import { StudyQuiz } from '@components/quizzes/study_quiz/StudyQuiz'
import { MakeQuizProvider } from '@/context/MakeQuizContext'

export default function Page ({ params }: { params: { id: number } }) {
  const { id } = params

  return (
    <MakeQuizProvider>
      <StudyQuiz quizId={id} />
    </MakeQuizProvider>
  )
}
