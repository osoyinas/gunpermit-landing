'use client'

import { Dashboard } from '@/components/Dashboard'
import { useRedirectIf } from '@/hooks/redirects/useRedirectIf'

export default function Home () {
  useRedirectIf({ authenticated: false })
  return (
    <>
      <Dashboard />
    </>
  )
}
