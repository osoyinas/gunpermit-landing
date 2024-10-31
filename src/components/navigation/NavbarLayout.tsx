import { ReactNode } from 'react'
import { Navbar } from './Navbar'

export default function NavbarLayout (
  { children }: {children: ReactNode}
) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
