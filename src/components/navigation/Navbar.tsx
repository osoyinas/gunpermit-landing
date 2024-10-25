'use client'

import useMediaQuery from '@hooks/useMediaQuery'
import { DesktopAccountMenu } from './DesktopAccountMenu'
import { MobileAccountMenu } from './MobileAccountMenu'

export function Navbar () {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center m-auto">
        {isDesktop && <DesktopNav />}
        <div className="flex-1"></div>
        {isDesktop ? <DesktopAccountMenu /> : <MobileAccountMenu />}
        </div>
    </header>
  )
}

function DesktopNav () {
  return (
    <div>
      <a className="mr-6 flex items-center space-x-2" href="/">
        <span className="hidden font-bold sm:inline-block">
          Licencia de Armas
        </span>
      </a>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <a
          className="transition-colors hover:text-foreground/80 text-foreground/60"
          href="/"
        >
          Dashboard
        </a>
        <a
          className="transition-colors hover:text-foreground/80 text-foreground/60"
          href="/tests"
        >
          Exámenes
        </a>
        <a
          className="transition-colors hover:text-foreground/80 text-foreground/60"
          href="/recursos"
        >
          Recursos
        </a>
        <a
          className="transition-colors hover:text-foreground/80 text-foreground/60"
          href="/perfil"
        >
          Perfil
        </a>
      </nav>
    </div>
  )
}
