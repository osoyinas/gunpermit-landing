import { ReactNode } from 'react'

export function ErrorP (props: { children: ReactNode }) {
  return (
    <div className="text-red-900 text-sm font-medium leading-none">
      {props.children}
    </div>
  )
}
