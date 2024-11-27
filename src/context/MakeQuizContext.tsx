import { CompleteQuiz, QuizResponse } from '@/types/Quizzes'
import React, { createContext, ReactNode, useEffect, useState } from 'react'

interface MakeQuizContextType {
  quiz: CompleteQuiz | null;
  setQuiz: (quiz: CompleteQuiz) => void;
  quizResponse: QuizResponse | null;
  setQuizResponse: (quizResponse: QuizResponse) => void;
  actualQuestionIndex: number;
  setActualQuestionIndex: (actualQuestion: number) => void;
}

export const MakeQuizContext = createContext<MakeQuizContextType | undefined>(
  undefined
)

// Context provider
export const MakeQuizProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [quiz, setQuiz] = useState<CompleteQuiz | null>(null)
  const [quizResponse, setQuizResponse] = useState<QuizResponse | null>(null)
  const [actualQuestionIndex, setActualQuestionIndex] = useState<number>(0)

  useEffect(() => {
    console.log(quizResponse)
  }, [quizResponse])
  return (
    <MakeQuizContext.Provider
      value={{
        quiz,
        setQuiz,
        quizResponse,
        setQuizResponse,
        actualQuestionIndex,
        setActualQuestionIndex
      }}
    >
      {children}
    </MakeQuizContext.Provider>
  )
}
