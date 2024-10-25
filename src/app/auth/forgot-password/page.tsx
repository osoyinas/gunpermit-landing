'use client'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useRouter } from 'next/navigation'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { ExclamationTriangleIcon, ReloadIcon } from '@radix-ui/react-icons'
import { ForgotPasswordResponseError } from '@/types/Response'
import { ErrorP } from '@/components/ui/errorP'
import { usePassword } from '@hooks/api/auth/usePassword'
import { toast } from '@hooks/use-toast'
import { LinkButton } from '@components/ui/linkButton'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@components/ui/alert-dialog'

export default function Page () {
  const router = useRouter()

  const [error, setError] = useState<ForgotPasswordResponseError | null>(null)

  const [email, setEmail] = useState<string>('')
  const { resetPassword } = usePassword()
  const [isEmailSent, setIsEmailSent] = useState<boolean>(false)
  const [loading, setLoading] = useState(false)

  const handleSendVerification = async () => {
    setLoading(true)
    setError(null)
    const response = await resetPassword(email)
    if (response.ok) {
      setIsEmailSent(true)
      toast({
        description: response.val
      })
    } else {
      setError(response.val)
    }
    setLoading(false)
  }

  const handleAlreadyHaveAnAccount = async () => {
    router.push('/auth/login')
  }

  const disable = !email
  if (isEmailSent) {
    return <EmailSentCard email={email} />
  }

  return (
    <main className="w-full flex justify-center items-center md:my-16">
      <Card className="w-full max-w-[28rem] border-none md:border">
        <CardHeader>
          <CardTitle>Recuperación de contraseña</CardTitle>
          <CardDescription>
            Ingresa tu correo electrónico para recuperar tu contraseña
          </CardDescription>
          {error?.non_field_errors && (
            <Alert variant="destructive">
              <ExclamationTriangleIcon className="h-4 w-4" />
              <AlertTitle>Error al registrarse</AlertTitle>
              <AlertDescription>{error?.non_field_errors}</AlertDescription>
            </Alert>
          )}
        </CardHeader>

        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="juangarcia@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error?.email && <ErrorP>{error.email.join(', ')}</ErrorP>}
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col">
          <div className="flex justify-between w-full">
            <LinkButton
              className="p-0"
              variant="link"
              onClick={handleAlreadyHaveAnAccount}
              href="/auth/login"
            >
              Volver a inicio de sesión
            </LinkButton>
            <Button
              variant="default"
              onClick={handleSendVerification}
              disabled={disable || loading}
            >
              {loading && <ReloadIcon className="h-4 w-4 mr-2 animate-spin" />}
              {loading ? 'Enviando...' : 'Enviar'}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </main>
  )
}

function EmailSentCard ({ email }: { email: string }) {
  const { resetPassword } = usePassword()

  const handleResendEmail = async () => {
    const response = await resetPassword(email)
    if (response.ok) {
      toast({
        description: response.val
      })
    }
  }
  return (
    <main className="w-full flex justify-center items-center md:my-16">
      <Card className="w-full max-w-[28rem] border-none md:border">
        <CardHeader>
          <CardTitle>Correo enviado</CardTitle>
          <CardDescription>
            Se ha enviado un correo a <span className="font-bold">{email}</span>{' '}
            con las instrucciones para recuperar tu contraseña
          </CardDescription>
        </CardHeader>
        <CardContent className='flex flex-col gap-4'>
          <LinkButton variant="default" href="/auth/login" className="w-full">
            Volver a inicio de sesión
          </LinkButton>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="secondary" className='w-full'>Volver a enviar a {email}</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
                <AlertDialogDescription>
                  Antes de volver a enviar el correo, asegúrate de revisar tu bandeja de entrada y la carpeta de spam del correo <span className="font-bold">{email}</span>.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction onClick={handleResendEmail}>
                  Volver a enviar
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardContent>
      </Card>
    </main>
  )
}
