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
import { Input } from '@components/ui/input'
import { Label } from '@components/ui/label'
import { ErrorP } from '@components/ui/errorP'
import { ChangePasswordResponseError } from '@/types/Response'
import { usePassword } from '@hooks/api/auth/usePassword'
import { toast } from '@hooks/use-toast'
import { ReloadIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'
import { useLogout } from '@hooks/api/auth/useLogout'

const INFO = {
  title: 'Cambio de contraseña',
  description:
    'Introduce tu contraseña actual y la nueva contraseña para cambiarla.',
  buttonLabel: 'Cambiar contraseña'
}

export function ChangePasswordButtonDialog () {
  const [open, setOpen] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [repeatNewPassword, setRepeatNewPassword] = useState('')

  const { changePassword } = usePassword()
  const [errors, setErrors] = useState<
    ChangePasswordResponseError | undefined
  >()

  const [loading, setLoading] = useState(false)

  const router = useRouter()
  const { logout } = useLogout()
  const handleChangePassword = async () => {
    setLoading(true)
    await changePassword(password, newPassword).then(async (response) => {
      if (response.ok) {
        setOpen(false)
        toast({
          description: `${response.val}. Por motivos de seguridad, debes volver a iniciar sesión.`
        })
        await logout()
        setTimeout(() => {
          router.push('/auth/login')
        }, 2000)
      } else {
        setErrors(response.val)
      }
      console.log(response.val)
    })
    setLoading(false)
  }

  const disabled =
    !password ||
    !newPassword ||
    !repeatNewPassword ||
    repeatNewPassword !== newPassword ||
    loading
  if (isDesktop) {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="link" className="px-0">
            {INFO.buttonLabel}
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{INFO.title}</AlertDialogTitle>
            <AlertDialogDescription>{INFO.description}</AlertDialogDescription>
          </AlertDialogHeader>
          <PasswordInputs
            password={password}
            newPassword={newPassword}
            repeatNewPassword={repeatNewPassword}
            setPassword={setPassword}
            setNewPassword={setNewPassword}
            setRepeatNewPassword={setRepeatNewPassword}
            errors={errors}
          />
          <AlertDialogFooter className="flex justify-between w-full">
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <Button
              variant="default"
              onClick={handleChangePassword}
              disabled={disabled}
            >
              {loading && <ReloadIcon className="h-4 w-4 mr-2 animate-spin" />}
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
        <Button variant="link">Cambiar contraseña</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{INFO.title}</DrawerTitle>
          <DrawerDescription>{INFO.description}</DrawerDescription>
        </DrawerHeader>
        <PasswordInputs
          password={password}
          newPassword={newPassword}
          repeatNewPassword={repeatNewPassword}
          setPassword={setPassword}
          setNewPassword={setNewPassword}
          setRepeatNewPassword={setRepeatNewPassword}
        />
        <DrawerFooter className="pt-2">
          <Button
            variant="default"
            onClick={handleChangePassword}
            disabled={disabled}
          >
            {loading && <ReloadIcon className="h-4 w-4 mr-2 animate-spin" />}
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

interface PasswordInputsProps {
  password: string;
  newPassword: string;
  repeatNewPassword: string;
  setPassword: Function;
  setNewPassword: Function;
  setRepeatNewPassword: Function;
  errors?: ChangePasswordResponseError;
}

function PasswordInputs (props: PasswordInputsProps) {
  const {
    password,
    newPassword,
    repeatNewPassword,
    setPassword,
    setNewPassword,
    setRepeatNewPassword,
    errors
  } = props
  return (
    <>
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="old-password">Contraseña actual</Label>
        <Input
          id="old-password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors?.old_password && <ErrorP>{errors.old_password}</ErrorP>}
      </div>
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="new-password">Nueva contraseña</Label>
        <Input
          id="new-password"
          type="password"
          placeholder="••••••••"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        {errors?.new_password && <ErrorP>{errors.new_password}</ErrorP>}
      </div>
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="repeat-new-password">Repite la nueva contraseña</Label>
        <Input
          id="repeat-new-password"
          type="password"
          placeholder="••••••••"
          value={repeatNewPassword}
          onChange={(e) => setRepeatNewPassword(e.target.value)}
        />
        {repeatNewPassword.length > 0 && repeatNewPassword !== newPassword && (
          <ErrorP>Las contraseñas no coinciden</ErrorP>
        )}
        {errors?.non_field_errors && <ErrorP>{errors.non_field_errors}</ErrorP>}
      </div>
    </>
  )
}
