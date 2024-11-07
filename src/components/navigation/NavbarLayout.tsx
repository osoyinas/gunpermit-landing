import { ReactNode } from 'react'
import { Navbar } from './Navbar'
import Footer from '@components/footer/Footer'

export default function NavbarLayout (
  { children }: {children: ReactNode}
) {
  return (
    <main className='flex flex-col'>
      <Navbar />
      <div className='flex-1'>

      {children}
      </div>
      <Footer />
    </main>
  )
}
