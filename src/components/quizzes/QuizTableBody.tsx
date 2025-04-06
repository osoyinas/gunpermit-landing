'use client'

import { useInfiniteQuery } from '@tanstack/react-query'
import { QuizRow } from './QuizRow'
import { getQuizzes } from '@/services/quizzes/getQuizzes'
import useAxios from '@hooks/useAxios'
import { TableBody } from '@components/ui/table'
import { QuizAttempt } from '@/types/Quizzes'
import { PagedResponse } from '@/types/Response'
import { useRef, useEffect } from 'react'
import { TypographyMuted } from '@components/typography/TypographyMuted'

interface QuizTableBodyProps {
  initialData: PagedResponse<QuizAttempt>;
  category?: string;
}

export function QuizTableBody ({ initialData, category }: QuizTableBodyProps) {
  const axios = useAxios()
  const getQuizzesClient = async ({
    category,
    page,
    limit
  }: {
    category?: string;
    page?: number;
    limit?: number;
  }) => {
    const response = await getQuizzes(axios, {
      category,
      page,
      size: limit
    })
    if (!response.ok) {
      throw new Error('Error fetching quizzes')
    }
    return response.val
  }

  // Use useInfiniteQuery to fetch quizzes with pagination
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['quizzes', category],
      queryFn: ({ pageParam = 1 }) =>
        getQuizzesClient({ category, page: pageParam, limit: 10 }),
      getNextPageParam: (lastPage) => lastPage.next,
      initialData: {
        pageParams: [1],
        pages: [initialData]
      }
    })

  const observerRef = useRef<HTMLTableRowElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage()
        }
      },
      { threshold: 0.5, rootMargin: '100px' } // Trigger earlier with rootMargin
    )

    if (observerRef.current) {
      observer.observe(observerRef.current)
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current)
      }
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage])

  return (
    <TableBody>
      {data?.pages.map((page) =>
        page.results.map((quiz: any) => <QuizRow key={quiz.id} quiz={quiz} />)
      )}
      {hasNextPage && (
        <tr ref={observerRef}>
          <td colSpan={3} className="text-center">
            {isFetchingNextPage
              ? (
              <div className="mt-4">
                <TypographyMuted>Cargando más tests...</TypographyMuted>
              </div>
                )
              : (
                  ''
                )}
          </td>
        </tr>
      )}
    </TableBody>
  )
}
