import { DesktopAccountMenu } from './desktop/DesktopAccountMenu'
import { MobileAccountMenu } from './mobile/MobileAccountMenu'
import { DesktopContentMenu } from './desktop/DesktopContentMenu'
import { MobileContentMenu } from './mobile/MobileContentMenu'
import { Suspense } from 'react'
import { DesktopContentMenuSkeleton } from './desktop/DesktopContentSkeleton'

export function Navbar () {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center m-auto">
        <div className="hidden md:block">
          <Suspense fallback={<DesktopContentMenuSkeleton />}>
            <DesktopContentMenu />
          </Suspense>
        </div>
      <div className='block md:hidden'>
        <MobileContentMenu />
      </div>
        <div className="flex-1"></div>
        <div className="hidden md:block">
          <DesktopAccountMenu />
        </div>
        <div className="block md:hidden">
          <MobileAccountMenu />
        </div>
      </div>
    </header>
  )
}
