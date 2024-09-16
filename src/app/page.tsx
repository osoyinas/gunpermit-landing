'use client'

import { DashboardComponent } from '@/components/dashboard'
// import { Button } from '@/components/ui/button'
// import { useLogout } from '@/hooks/api/auth/useLogout'
// import { useRouter } from 'next/navigation'

export default function Home () {
  // const router = useRouter()
  // const { logout } = useLogout()
  // const handleLogin = async () => {
  //   router.push('/auth/login')
  // }
  // const handleLogout = async () => {
  //   await logout()
  //   router.push('/auth/login')
  // }
  return (
    <>
      {/* <p>main page</p>
      <Button onClick={handleLogin}>login</Button>
      <Button onClick={handleLogout}>logout</Button> */}
      <DashboardComponent />
    </>
  )
}
