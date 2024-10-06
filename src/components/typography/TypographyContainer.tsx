import { ReactNode } from 'react'

interface TypographyContainerProps {
    children: ReactNode
}

export function TypographyContainer (props: TypographyContainerProps) {
  return (
    <main className="max-w-[75ch] m-auto py-8 px-4 md:px-0">
      {props.children}
    </main>
  )
}
