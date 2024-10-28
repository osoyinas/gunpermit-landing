import { HTMLAttributes, ReactNode } from 'react'

interface FullscreenContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

export function FullscreenContainer (props: FullscreenContainerProps) {
  return (
    <main className={`text-foreground bg-background py-8 ${props.className}`} {...props} style={
      { minHeight: 'calc(100dvh - 4rem)' }
    }>
      {props.children}
    </main>
  )
}
