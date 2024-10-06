import { HTMLAttributes } from 'react'

interface TypographyH4Props extends HTMLAttributes<HTMLHeadingElement> {}

export function TypographyH4 (props: TypographyH4Props) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {props.children}
    </h4>
  )
}
