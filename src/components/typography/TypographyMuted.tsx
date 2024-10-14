import { HTMLAttributes } from 'react'

interface TypographyMutedProps extends HTMLAttributes<HTMLParagraphElement> {}

export function TypographyMuted (props:TypographyMutedProps) {
  return (
      <p className="text-sm text-muted-foreground">
        {props.children}
      </p>
  )
}
