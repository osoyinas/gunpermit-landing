import { ReactNode } from 'react'
import { Navbar } from './Navbar'
import Footer from '@components/footer/Footer'

export default function NavbarLayout (
  { children }: {children: ReactNode}
) {
  return (
    <div style={
      {
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto',
        minHeight: '100dvh'
      }
    }>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
