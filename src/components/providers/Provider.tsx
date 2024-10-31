'use client'
import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'

export function Provider (props: { children: ReactNode }) {
  return <SessionProvider>{props.children}</SessionProvider>
}
