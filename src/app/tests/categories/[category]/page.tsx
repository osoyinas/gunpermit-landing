'use client'
import { QuizSelection } from '@/components/quizzes/QuizSelection'

export default function Page ({ params }: { params: { category: string } }) {
  const { category } = params
  return <QuizSelection category={category} />
}
