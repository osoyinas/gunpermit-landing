import { AvatarIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Button } from '@components/ui/button'
import { useLogout } from '@hooks/api/auth/useLogout'
import { useRouter } from 'next/navigation'

export function DesktopAccountMenu () {
  const { logout } = useLogout()
  const router = useRouter()

  const handleLogout = async () => {
    await logout().catch(() => {})
    router.push('/auth/login')
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className='border-none'>
          <AvatarIcon className="w-10 h-10" strokeWidth={1} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <Link href="/account" legacyBehavior passHref>
            <DropdownMenuItem>Perfil</DropdownMenuItem>
          </Link>
          <DropdownMenuItem disabled>Ajustes</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <Link
          href="https://github.com/osoyinas/gunpermit-landing"
          legacyBehavior
          passHref
        >
          <DropdownMenuItem>GitHub</DropdownMenuItem>
        </Link>
        <Link
          href="https://github.com/osoyinas/gunpermit-api"
          legacyBehavior
          passHref
        >
          <DropdownMenuItem>API</DropdownMenuItem>
        </Link>
        <DropdownMenuItem disabled>Soporte</DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            handleLogout()
          }}
        >
          Cerrar sesión
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}