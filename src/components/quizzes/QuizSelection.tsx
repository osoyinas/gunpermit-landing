'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { CheckIcon, XIcon } from 'lucide-react'
import { useQuizzes } from '@/hooks/api/quizzes/useQuizzes'
import { useEffect, useState } from 'react'
import { QuizAttempt } from '@/types/Quizzes'

export function QuizSelection () {
  const [quizzes, setQuizzes] = useState<QuizAttempt[]>([])
  const [loading, setLoading] = useState(true)
  const { getQuizzes } = useQuizzes()
  useEffect(() => {
    const fetchData = async () => {
      const response = await getQuizzes()
      if (response.ok) {
        console.log('Seting data', response.val)
        setQuizzes(response.val)
      } else {
        console.error(response.val)
      }
      setLoading(false)
    }
    fetchData()
  }, [])

  if (loading) {
    return <div>Cargando...</div>
  }
  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Selección de Test
      </h1>
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {quizzes.map((quizz, index) => (
          <motion.div
            key={quizz.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <a href={`/tests/${quizz.id}`}>
            <Card

                className={`
                    cursor-pointer transition-all duration-300 transform hover:scale-105
                    ${
                        quizz.passed === true
                        ? 'bg-green-500/20 hover:bg-green-500/30'
                        : quizz.passed === false
                        ? 'bg-red-500/20 hover:bg-red-500/30'
                        : 'bg-primary/10 hover:bg-primary/20'
                    }
                    `}
                    >
              <CardContent className="p-4 flex flex-col items-center justify-center h-24">
                <span className="text-2xl font-bold mb-2">{index + 1}</span>
                {quizz.passed === true && (
                  <CheckIcon className="h-6 w-6 text-green-500" />
                )}
                {quizz.passed === false && (
                    <XIcon className="h-6 w-6 text-red-500" />
                )}
              </CardContent>
            </Card>
        </a>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
