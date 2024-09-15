'use client'

import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'

export default function Home () {
  const router = useRouter()
  const { logout } = useAuth()
  const handleLogin = async () => {
    router.push('/auth/login')
  }
  const handleLogout = async () => {
    await logout()
    router.push('/auth/login')
  }
  return (
    <>
      <p>main page</p>
      <Button onClick={handleLogin}>login</Button>
      <Button onClick={handleLogout}>logout</Button>
    </>
  )
}
