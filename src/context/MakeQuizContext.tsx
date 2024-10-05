import { useSetupResponseQuiz } from '@/hooks/make-quiz/useSetupResponseQuiz'
import { CompleteQuiz, QuizResponse } from '@/types/Quizzes'
import React, { createContext, ReactNode, useState } from 'react'

interface MakeQuizContextType {
  quiz: CompleteQuiz | null;
  setQuiz: (quiz: CompleteQuiz) => void;
  quizResponse: QuizResponse | null;
  setQuizResponse: (quizResponse: QuizResponse) => void;
  actualQuestion: number;
  setActualQuestion: (actualQuestion: number) => void;
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
  const [actualQuestion, setActualQuestion] = useState<number>(0)

  useSetupResponseQuiz(
    {
      quiz,
      setQuizResponse
    }
  )

  return (
    <MakeQuizContext.Provider
      value={{
        quiz,
        setQuiz,
        quizResponse,
        setQuizResponse,
        actualQuestion,
        setActualQuestion
      }}
    >
      {children}
    </MakeQuizContext.Provider>
  )
}