'use client'
import { Button } from '@components/ui/button'
import { MyComponent } from './component'
import { signOut } from 'next-auth/react'
import { LinkButton } from '@components/ui/linkButton'
export default function Page () {
  return (
    <>
        <MyComponent></MyComponent>
        <Button onClick={
          async () => {
            await signOut()
          }
        }>
          Sign Out
        </Button>
        <LinkButton href='/auth/login'>
          Sign In
        </LinkButton>
    </>
  )
}
