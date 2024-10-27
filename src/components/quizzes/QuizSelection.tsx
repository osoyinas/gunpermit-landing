'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import {
  BookOpenCheck,
  CheckIcon,
  XIcon
} from 'lucide-react'
import { useQuizzes } from '@/hooks/api/quizzes/useQuizzes'
import { useEffect, useState } from 'react'
import { QuizAttempt } from '@/types/Quizzes'
import useLoading from '@/hooks/useLoading'
import { FullscreenLoading } from '../FullscreenLoading'
import { FullscreenContainer } from '../ui/FullscreenContainer'
import { Switch } from '../ui/switch'
import { Label } from '../ui/label'

interface QuizSelectionProps {
  category?: any
}

export function QuizSelection (props: QuizSelectionProps) {
  const { category } = props
  const [quizzes, setQuizzes] = useState<QuizAttempt[]>([])
  const { loading, stopLoading } = useLoading()
  const { getQuizzes } = useQuizzes()
  const [isInStudyMode, setIsInStudyMode] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const response = await getQuizzes(
        { category }
      )
      if (response.ok) {
        setQuizzes(response.val)
      } else {
        console.error(response.val)
      }
      stopLoading()
    }
    fetchData()
  }, [])

  if (loading) {
    return <FullscreenLoading />
  }
  return (
    <FullscreenContainer>
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Selección de Test
      </h1>
      <div className="flex items-center space-x-2 w-full justify-center mb-16">
        <Switch
          id="airplane-mode"
          onClick={() => setIsInStudyMode(!isInStudyMode)}
          checked={isInStudyMode}
        />
        <Label htmlFor="airplane-mode" className="text-md">
          Modo estudio
        </Label>
        <BookOpenCheck strokeWidth={1.5} size={28} />
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {quizzes.map((quizz, index) => (
          <motion.div
            key={quizz.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <a
              href={
                isInStudyMode
                  ? `/tests/${quizz.id}/study`
                  : `/tests/${quizz.id}`
              }
            >
              <Card
                className={`
                  cursor-pointer transition-all duration-300 transform hover:scale-105
                  ${
                    isInStudyMode
                      ? 'bg-primary/10'
                      : quizz.passed === true
                      ? 'bg-green-500/20 hover:bg-green-500/30'
                      : quizz.passed === false
                      ? 'bg-red-500/20 hover:bg-red-500/30'
                      : 'bg-primary/10 hover:bg-primary/20'
                  }
                  `}
              >
                {isInStudyMode
                  ? (
                  <CardContent className="p-4 flex flex-col items-center justify-center h-24">
                    <span className="text-2xl font-bold mb-2">{index + 1}</span>
                    <BookOpenCheck/>
                  </CardContent>
                    )
                  : (
                  <CardContent className="p-4 flex flex-col items-center justify-center h-24">
                    <span className="text-2xl font-bold mb-2">{index + 1}</span>
                    {quizz.passed === true && (
                      <CheckIcon className="h-6 w-6 text-green-500" />
                    )}
                    {quizz.passed === false && (
                      <XIcon className="h-6 w-6 text-red-500" />
                    )}
                  </CardContent>
                    )}
              </Card>
            </a>
          </motion.div>
        ))}
      </div>
    </FullscreenContainer>
  )
}
