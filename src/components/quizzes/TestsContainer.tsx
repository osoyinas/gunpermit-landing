import { HTMLAttributes, ReactNode } from 'react'

interface FullscreenContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

export function TestsContainer (props: FullscreenContainerProps) {
  return (
    <main className='w-full max-w-2xl px-5 md:px-0 md:mx-auto mt-8'{...props}>
      {props.children}
    </main>
  )
}
