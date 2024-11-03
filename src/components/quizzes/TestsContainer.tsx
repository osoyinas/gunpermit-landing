import { HTMLAttributes, ReactNode } from 'react'

interface FullscreenContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

export function TestsContainer (props: FullscreenContainerProps) {
  return (
    <main className='max-w-2xl px-2 md:p-0 md:mx-auto mt-8'{...props} style={
      { minHeight: 'calc(100dvh - 4rem)' }
    }>
      {props.children}
    </main>
  )
}
