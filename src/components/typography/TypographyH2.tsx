import { HTMLAttributes } from 'react'

interface TypographyH2Props extends HTMLAttributes<HTMLHeadingElement> {}

export function TypographyH2 (props: TypographyH2Props) {
  return (
    <h2 className={`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${props.className}`}>
      {props.children}
    </h2>
  )
}
