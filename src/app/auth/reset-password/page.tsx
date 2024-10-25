'use client'
import { useEffect, useState } from 'react'

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
import { useSearchParams } from 'next/navigation'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { ExclamationTriangleIcon, ReloadIcon } from '@radix-ui/react-icons'
import {
  ResetPasswordResponseError
} from '@/types/Response'
import { ErrorP } from '@/components/ui/errorP'
import { usePassword } from '@hooks/api/auth/usePassword'
import { toast } from '@hooks/use-toast'
import { LinkButton } from '@components/ui/linkButton'
import { FullscreenLoading } from '@components/FullscreenLoading'

export default function Page () {
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  const [verifyingToken, setVerifyingToken] = useState(true)

  const [error, setError] = useState<ResetPasswordResponseError | null>(null)

  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  const [loading, setLoading] = useState(false)

  const [passwordChanged, setPasswordChanged] = useState(false)

  const { checkResetPasswordToken, resetPasswordConfirm } = usePassword()

  const handleChangeVerification = async () => {
    setLoading(true)
    setError(null)
    if (!token) {
      setError({
        non_field_errors: ['Token de verificación no encontrado']
      })
      setLoading(false)
      return
    }
    const response = await resetPasswordConfirm(token, password)
    if (response.ok) {
      setPasswordChanged(true)
      toast({
        description: 'Contraseña cambiada exitosamente',
        action: <LinkButton href='/auth/login'>Iniciar sesión</LinkButton>
      })
    } else {
      setError(response.val)
    }
    setLoading(false)
  }

  useEffect(() => {
    if (token) {
      checkResetPasswordToken(token).then((verified) => {
        if (!verified) {
          setError({
            non_field_errors: ['El token de verificación es inválido']
          })
        }
        setVerifyingToken(false)
      })
    }
  }, [token])

  if (verifyingToken) {
    return <FullscreenLoading>Verificando...</FullscreenLoading>
  }

  if (passwordChanged) {
    return <SuccessPasswordChangedCard />
  }
  const disabled =
    !password || !repeatPassword || password !== repeatPassword || loading
  return (
    <main className="w-full flex justify-center items-center md:my-16">
      <Card className="w-full max-w-[28rem] border-none md:border">
        <CardHeader>
          <CardTitle>Restablecimiento de contraseña</CardTitle>
          <CardDescription>
            Inserta tu nueva contraseña para restablecer tu cuenta
          </CardDescription>
          {error?.non_field_errors && (
            <Alert variant="destructive">
              <ExclamationTriangleIcon className="h-4 w-4" />
              <AlertTitle>Error al verificar</AlertTitle>
              <AlertDescription>{error?.non_field_errors}</AlertDescription>
            </Alert>
          )}
        </CardHeader>

        <CardContent>
          <form className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Nueva contraseña</Label>
              <Input
                id="password"
                type="password"
                placeholder="********"
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
              {password && <ErrorP>{error?.password}</ErrorP>}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Repetir nueva contraseña</Label>
              <Input
                id="repeat-password"
                type="password"
                placeholder="********"
                value={repeatPassword}
                onChange={(e) => {
                  setRepeatPassword(e.target.value)
                }}
              />
              {repeatPassword.length > 0 && password !== repeatPassword && (
                <ErrorP>Las contraseñas no coinciden</ErrorP>
              )}
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col">
          <div className="flex justify-between w-full">
            <LinkButton className="p-0" variant="link" href="/auth/login">
              Volver a inicio de sesión
            </LinkButton>
            <Button
              variant="default"
              disabled={disabled}
              onClick={handleChangeVerification}
            >
              {loading && <ReloadIcon className="h-4 w-4 mr-2 animate-spin" />}
              {loading ? 'Cambiando contraseña...' : 'Cambiar contraseña'}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </main>
  )
}

function SuccessPasswordChangedCard () {
  return (
    <main className="w-full flex justify-center items-center md:my-16">
      <Card className="w-full max-w-[28rem] border-none md:border">
        <CardHeader>
          <CardTitle>Contraseña cambiada</CardTitle>
          <CardDescription>
            Tu contraseña ha sido cambiada exitosamente
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center">
            <LinkButton variant="default" href="/auth/login" className='w-full'>
              Iniciar sesión
            </LinkButton>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
