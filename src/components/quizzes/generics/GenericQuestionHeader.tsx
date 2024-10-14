import { CardHeader } from '@/components/ui/card'
import { ReactNode } from 'react'

export function GenericQuestionHeader (props: { children: ReactNode }) {
  return (
    <CardHeader className="bg-primary/10 p-4 md:p-6 lg:p-8 flex-shrink-0 flex flex-row justify-between items-center w-full">
        {props.children}
    </CardHeader>
  )
}
