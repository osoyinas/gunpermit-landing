'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { useQuizzes } from '@/hooks/api/quizzes/useQuizzes'
import { useEffect, useState } from 'react'
import { QuizCategory } from '@/types/Quizzes'
import useLoading from '@/hooks/useLoading'
import { FullscreenLoading } from '../FullscreenLoading'
import { FullscreenContainer } from '../ui/FullscreenContainer'
import { TypographyMuted } from '@components/typography/TypographyMuted'
import { TypographyP } from '@components/typography/TypographyP'
import { TypographyH2 } from '@components/typography/TypographyH2'
import { TypographyH1 } from '@components/typography/TypographyH1'

export function CategorySelection () {
  const [categories, setCategories] = useState<QuizCategory[]>([])
  const { loading, stopLoading } = useLoading()
  const { getQuizCategories } = useQuizzes()

  useEffect(() => {
    const fetchData = async () => {
      const response = await getQuizCategories()
      if (response.ok) {
        setCategories(response.val)
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
      <TypographyH1 className='text-center mb-8'>
        Categorías
      </TypographyH1>
      <div className="max-w-4xl mx-auto gap-8 flex flex-col">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <a
              href={
                  `/tests/categories/${category.tag}/`
              }
            >
              <Card className='w-full m-auto max-w-2xl hover:scale-105 hover:border-primary transition-all'>
                <CardHeader>
                <TypographyH2>{category.title}</TypographyH2>
                </CardHeader>
                <CardContent>
                  <TypographyP className='opacity-80'>
                    {category.description}
                  </TypographyP>
                </CardContent>
              </Card>
            </a>
          </motion.div>
        ))}
      </div>
    </FullscreenContainer>
  )
}
