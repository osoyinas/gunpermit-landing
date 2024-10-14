import { CardFooter } from '@/components/ui/card'
import { ReactNode } from 'react'

export function GenericQuestionFooter (props: { children: ReactNode }) {
  return (
    <CardFooter className="w-full bg-primary/10 flex flex-col py-6 gap-8 px-8">
      {props.children}
    </CardFooter>
  )
}
