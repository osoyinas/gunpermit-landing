import { HTMLAttributes, ReactNode } from 'react'

interface FullscreenContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

export function FullscreenContainer (props: FullscreenContainerProps) {
  return (
    <main className={`text-foreground bg-background p-8 md:p-16 ${props.className}`} {...props} style={
      { minHeight: 'calc(100vh - 4rem)' }
    }>
      {props.children}
    </main>
  )
}
