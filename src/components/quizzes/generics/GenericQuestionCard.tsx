import { Card } from '@/components/ui/card'
import { ReactNode } from 'react'

export function GenericQuestionCard (props: { children: ReactNode }) {
  const { children } = props

  return (
    <Card className="m-auto w-full max-w-4xl h-full md:h-auto overflow-hidden rounded-none md:rounded-2xl shadow-none md:shadow-lg flex flex-col items-center border-none md:border-solid">
      {children}
    </Card>
  )
}
