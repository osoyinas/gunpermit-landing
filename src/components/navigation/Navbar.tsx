'use client'
import useMediaQuery from '@hooks/useMediaQuery'
import { DesktopAccountMenu } from './desktop/DesktopAccountMenu'
import { MobileAccountMenu } from './mobile/MobileAccountMenu'
import { DesktopContentMenu } from './desktop/DesktopContentMenu'
import { MobileContentMenu } from './mobile/MobileContentMenu'
import { useSession } from 'next-auth/react'

export function Navbar () {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const { status } = useSession()
  if (status === 'loading') {
    return (
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center m-auto">
          <div className="flex-1"></div>
        </div>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center m-auto">
        {isDesktop ? <DesktopContentMenu /> : <MobileContentMenu />}
        <div className="flex-1"></div>
        {isDesktop ? <DesktopAccountMenu /> : <MobileAccountMenu />}
      </div>
    </header>
  )
}
