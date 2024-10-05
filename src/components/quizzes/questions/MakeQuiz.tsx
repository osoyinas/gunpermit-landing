'use client'

import { CompleteQuiz } from '@/types/Quizzes'
import { QuizQuestion } from './QuizQuestion'
import { AnimatedBottomButtons } from './BottomButtons'

interface MakeQuizProps {
  quiz: CompleteQuiz
}
export function MakeQuiz (props: MakeQuizProps) {
  return (
    <>
    <QuizQuestion question={props.quiz.questions[0].question} answers={props.quiz.questions[0].answers} />
    <AnimatedBottomButtons />
    </>
  )
}
