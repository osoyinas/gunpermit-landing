import { HTMLAttributes } from 'react'

interface TypographyListProps extends HTMLAttributes<HTMLUListElement> {}

export function TypographyList (props: TypographyListProps) {
  return (
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        {props.children}
      </ul>
  )
}
