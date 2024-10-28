'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from '@/components/ui/card'
import { useQuizzes } from '@/hooks/api/quizzes/useQuizzes'
import { useEffect, useState } from 'react'
import { QuizCategory } from '@/types/Quizzes'
import useLoading from '@/hooks/useLoading'
import { FullscreenLoading } from '../FullscreenLoading'
import { FullscreenContainer } from '../ui/FullscreenContainer'
import { TypographyP } from '@components/typography/TypographyP'
import { TypographyH2 } from '@components/typography/TypographyH2'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Badge } from '@components/ui/badge'

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
    <FullscreenContainer className="max-w-4xl mx-auto flex flex-col gap-8 pt-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <span className="text-2xl">/</span>
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Tests</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mx-auto gap-8 flex flex-col">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <a href={`/tests/categories/${category.tag}/`}>
              <Card className="w-full m-auto max-w-6xl hover:scale-105 hover:border-primary transition-all">
                <CardHeader>
                  <TypographyH2>{category.title}</TypographyH2>
                </CardHeader>
                <CardContent>
                  <TypographyP className="opacity-80">
                    {category.description}
                  </TypographyP>
                </CardContent>
                <CardFooter className="flex gap-2 items-center justify-center">
                  <Badge variant="outline">
                    {category.total_quizzes} en total
                  </Badge>
                  <Badge variant="default">
                    {category.passed_quizzes} tests aprobados
                  </Badge>
                  <Badge variant="destructive">
                    {category.failed_quizzes} tests fallidos
                  </Badge>
                </CardFooter>
              </Card>
            </a>
          </motion.div>
        ))}
      </div>
    </FullscreenContainer>
  )
}
