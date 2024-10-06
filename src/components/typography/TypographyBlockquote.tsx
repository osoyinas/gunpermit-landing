import { HTMLAttributes } from 'react'

interface TypographyBlockquoteProps extends HTMLAttributes<HTMLQuoteElement> {}

export function TypographyBlockquote (props: TypographyBlockquoteProps) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">
      {props.children}
    </blockquote>
  )
}
