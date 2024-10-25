'use client'

import { ModeToggle } from './ui/ModeToggle'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '@radix-ui/react-dropdown-menu'
import { MenuIcon } from 'lucide-react'
import { Button } from './ui/button'
import { useLogout } from '@/hooks/api/auth/useLogout'
import { useRouter } from 'next/navigation'

export function Navbar () {
  const { logout } = useLogout()
  const router = useRouter()
  const handleLogout = async () => {
    await logout().catch(() => {})
    router.push('/auth/login')
  }
  return (
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center m-auto">
          <div className="mr-4 hidden md:flex">
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <MenuIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <a href="/dashboard">Dashboard</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/examenes">Exámenes</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/recursos">Recursos</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/perfil">Perfil</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center">
              <ModeToggle />
            </nav>
            <Button variant="outline" onClick={handleLogout} >Cerrar Sesión</Button>
          </div>
        </div>
      </header>
  )
}
