import { HTMLAttributes } from 'react'

interface TypographyH1Props extends HTMLAttributes<HTMLHeadingElement> {}

export function TypographyH1 (props: TypographyH1Props) {
  return (
    <h1 className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${props.className}`}>
      {props.children}
    </h1>
  )
}
