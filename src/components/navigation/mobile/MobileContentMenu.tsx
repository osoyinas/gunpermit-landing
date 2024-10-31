import {
  BookCheck,
  LayoutDashboard,
  LibraryBig,
  MenuIcon,
  Trophy
} from 'lucide-react'
import { Button } from '@components/ui/button'
import { usePathname } from 'next/navigation'
import { Sheet, SheetContent, SheetTrigger } from '../../ui/sheet'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Separator } from '@components/ui/separator'
import { TypographyP } from '@components/typography/TypographyP'

export function MobileContentMenu () {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <section>

    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="ml-2">
          <MenuIcon className="w-10 h-10" strokeWidth={1} />
        </Button>
      </SheetTrigger>

      <SheetContent side="left">
        <ul className="p-2 text-left flex flex-col gap-5">
          <li>
            <Link href="/" className="flex items-center gap-2 font-bold">
              <span>
                <TypographyP className="text-xl">Licencia de armas</TypographyP>
              </span>
            </Link>
          </li>
          <Separator />
          <li>
            <Link href="/dashboard" className="flex items-center gap-2">
              <LayoutDashboard />
              <span>
                <TypographyP>Dashboard</TypographyP>
              </span>
            </Link>
          </li>
          <Separator />
          <li>
            <Link href="/tests" className="flex items-center gap-2">
              <BookCheck />
              <span>
                <TypographyP>Tests</TypographyP>
              </span>
            </Link>
          </li>
          <li>
            <Link href="/resources" className="flex items-center gap-2">
              <LibraryBig />
              <span>
                <TypographyP>Material de estudio</TypographyP>
              </span>
            </Link>
          </li>
          <li>
            <Link href="/progress" className="flex items-center gap-2">
              <Trophy />
              <span>
                <TypographyP>Progreso</TypographyP>
              </span>
            </Link>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
    </section>
  )
}
