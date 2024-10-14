import { HTMLAttributes } from 'react'

interface TypographyH3Props extends HTMLAttributes<HTMLHeadingElement> {}

export function TypographyH3 (props: TypographyH3Props) {
  return (
    <h3 className={`scroll-m-20 text-2xl font-semibold tracking-tight ${props.className}`}>
      {props.children}
    </h3>
  )
}
