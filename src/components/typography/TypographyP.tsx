import { HTMLAttributes } from 'react'

interface TypographyPProps extends HTMLAttributes<HTMLParagraphElement> {}

export function TypographyP (props: TypographyPProps) {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6">{props.children}</p>
  )
}
