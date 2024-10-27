import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@components/ui/alert-dialog'
import { Button } from '@components/ui/button'

import useMediaQuery from '@hooks/useMediaQuery'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@components/ui/drawer'
import { useState } from 'react'
import { useUser } from '@hooks/api/auth/useUser'
import { useRouter } from 'next/navigation'
import { useLogout } from '@hooks/api/auth/useLogout'

const INFO = {
  title: '¿Estás seguro de que quieres eliminar tu cuenta?',
  description:
    'Esta acción no se puede deshacer. Esto eliminará permanentemente tu cuenta y removerá tus datos de nuestros servidores.',
  buttonLabel: 'Eliminar Cuenta'
}

export function DeleteAccountButtonDialog () {
  const [open, setOpen] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const { deleteMe } = useUser()
  const { logout } = useLogout()

  const router = useRouter()
  const handleDeleteAccount = async () => {
    try {
      await deleteMe()
      await logout()
      router.push('/auth/login')
    } catch (error) {
      console.error(error)
    }
  }
  if (isDesktop) {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive">{INFO.buttonLabel}</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{INFO.title}</AlertDialogTitle>
            <AlertDialogDescription>{INFO.description}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <Button variant="destructive" onClick={handleDeleteAccount}>
              {INFO.buttonLabel}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="destructive">Eliminar Cuenta</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{INFO.title}</DrawerTitle>
          <DrawerDescription>{INFO.description}</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="pt-2">
          <Button variant="destructive" onClick={handleDeleteAccount}>
            {INFO.buttonLabel}
          </Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
