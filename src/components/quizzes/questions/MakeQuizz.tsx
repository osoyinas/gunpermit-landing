'use client'

import { CompleteQuiz } from '@/types/Quizzes'
import { QuizQuestion } from './QuizQuestion'

interface MakeQuizProps {
  quiz: CompleteQuiz
}
export function MakeQuizz (props: MakeQuizProps) {
  return (
    <QuizQuestion question={props.quiz.questions[0].question} answers={props.quiz.questions[0].answers} />
  )
}
