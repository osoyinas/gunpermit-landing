import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'
import { Navbar } from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tests del permiso de armas',
  description: 'Generated by create next app'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className='bg-base-100 text-base-content'>
      <body className={`${inter.className} md:w-[800px] w-[100%] mx-auto`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
