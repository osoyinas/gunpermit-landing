'use client'
import {
  HandHelping,
  Landmark,
  LogOutIcon,
  UserPen
} from 'lucide-react'
import { Button } from '../../ui/button'
import { usePathname } from 'next/navigation'
import { Sheet, SheetContent, SheetTrigger } from '../../ui/sheet'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Separator } from '@components/ui/separator'
import { TypographyP } from '@components/typography/TypographyP'
import { AvatarIcon, GitHubLogoIcon } from '@radix-ui/react-icons'
import { signOut } from 'next-auth/react'

export function MobileAccountMenu () {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const handleLogout = async () => {
    await signOut()
  }
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="mr-2">
        <AvatarIcon className="w-10 h-10" strokeWidth={1} />
        </Button>
      </SheetTrigger>

      <SheetContent side="right">
        <ul className="p-2 text-left flex flex-col gap-4">
          <li className="font-bold opacity-70">Ajustes</li>
          <Separator />
          <li>
            <Link href="/account" className="flex items-center gap-2">
              <UserPen />
              <span>
                <TypographyP>Perfil</TypographyP>
              </span>
            </Link>
          </li>
          <Separator />
          <li>
            <Link href="https://github.com/osoyinas/gunpermit-landing" className="flex items-center gap-2">
              <GitHubLogoIcon />
              <span>
                <TypographyP>GitHub</TypographyP>
              </span>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/osoyinas/gunpermit-api" className="flex items-center gap-2">
              <Landmark />
              <span>
                <TypographyP>API</TypographyP>
              </span>
            </Link>
          </li>
          <li>
            <Link href="" className="flex items-center gap-2">
              <HandHelping className="opacity-60" />
              <span>
                <TypographyP className="opacity-60">Soporte</TypographyP>
              </span>
            </Link>
          </li>
          <Separator />
          <li>
            <button onClick={handleLogout} className="flex items-center gap-2">
              <LogOutIcon />
              <span>
                <TypographyP>Cerrar sesión</TypographyP>
              </span>
            </button>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  )
}
