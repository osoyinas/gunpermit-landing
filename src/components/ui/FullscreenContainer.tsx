import { ReactNode } from 'react'

interface FullscreenContainerProps {
    children: ReactNode
}

export function FullscreenContainer (props: FullscreenContainerProps) {
  return (
    <div className="text-foreground bg-background p-8 md:p-16" style={
      { minHeight: 'calc(100vh - 4rem)' }
    }>
      {props.children}
    </div>
  )
}
