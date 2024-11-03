/* eslint-disable camelcase */
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
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { ExclamationTriangleIcon, ReloadIcon } from '@radix-ui/react-icons'
import { RegisterResponseError } from '@/types/Response'
import { ErrorP } from '@/components/ui/errorP'
import { Providers, UserRegister } from '@/types/Auth'
import { useRegister } from '@/hooks/api/auth/useRegister'
import { z } from '@/lib/zod'
import { ZodError } from 'zod'
import { LinkButton } from '@components/ui/linkButton'
import { signIn } from 'next-auth/react'

const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  repeat_password: z.string().min(8),
  first_name: z.string().min(2),
  last_name: z.string().min(2)
}
).superRefine(({ repeat_password, password }, ctx) => {
  if (repeat_password !== password) {
    ctx.addIssue({
      code: 'custom',
      message: 'Las contraseñas no coinciden',
      path: ['repeat_password']
    })
  }
})

export default function Page () {
  const { register } = useRegister()
  const [error, setError] = useState<RegisterResponseError | null>(null)
  const [loading, setLoading] = useState(false)
  const [userRegister, setUserRegister] = useState<UserRegister>({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    repeat_password: ''
  })
  const handleRegister = async () => {
    setLoading(true)
    setError(null)
    try {
      RegisterSchema.parse(userRegister)
    } catch (e) {
      if (e instanceof ZodError) {
        console.log(e.errors)
        setError(
          {
            email: [e.errors.filter((error) => error.path[0] === 'email')[0]?.message],
            password: [e.errors.filter((error) => error.path[0] === 'password')[0]?.message],
            repeat_password: [e.errors.filter((error) => error.path[0] === 'repeat_password')[0]?.message],
            first_name: [e.errors.filter((error) => error.path[0] === 'first_name')[0]?.message],
            last_name: [e.errors.filter((error) => error.path[0] === 'last_name')[0]?.message]

          }
        )
        setLoading(false)
      }
    }
    const response = await register({ userRegister })
    if (response.ok) {
      await signIn(Providers.EMAIL, {
        email: userRegister.email,
        password: userRegister.password,
        redirectTo: '/dashboard'
      })
    } else {
      setError(response.val)
      setLoading(false)
    }
  }

  const disable =
    Object.values(userRegister).some((value) => value === '') || loading
  return (
    <main className="w-full flex justify-center items-center">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Registrarse</CardTitle>
          <CardDescription>
            Regístrate para acceder a la plataforma de tests
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
                <Label htmlFor="first_name">Nombre</Label>
                <Input
                  id="first_name"
                  placeholder="Juan "
                  value={userRegister.first_name}
                  onChange={(e) =>
                    setUserRegister((prev) => ({
                      ...prev,
                      first_name: e.target.value
                    }))
                  }
                />
                {error?.first_name && (
                  <ErrorP>{error.first_name.join(', ')}</ErrorP>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="second_name">Apellidos</Label>
                <Input
                  id="last_name"
                  placeholder="García González"
                  value={userRegister.last_name}
                  onChange={(e) =>
                    setUserRegister((prev) => ({
                      ...prev,
                      last_name: e.target.value
                    }))
                  }
                />
                {error?.last_name && (
                  <ErrorP>{error.last_name.join(', ')}</ErrorP>
                )}
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="juangarcia@gmail.com"
                  value={userRegister.email}
                  onChange={(e) =>
                    setUserRegister((prev) => ({
                      ...prev,
                      email: e.target.value
                    }))
                  }
                />
                {error?.email && <ErrorP>{error.email.join(', ')}</ErrorP>}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Contraseña</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="********"
                  value={userRegister.password}
                  onChange={(e) => {
                    setUserRegister((prev) => ({
                      ...prev,
                      password: e.target.value
                    }))
                  }}
                />
                {error?.password && <ErrorP>{error.password}</ErrorP>}
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="repeat-password">Repetir contraseña</Label>
                <Input
                  id="repeat-password"
                  type="password"
                  placeholder="********"
                  value={userRegister.repeat_password}
                  onChange={(e) => {
                    setUserRegister((prev) => ({
                      ...prev,
                      repeat_password: e.target.value
                    }))
                  }}
                />
                {error?.repeat_password && (
                  <ErrorP>{error.repeat_password}</ErrorP>
                )}
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <LinkButton variant="link" href='/auth/login'>
            Ya tengo una cuenta
          </LinkButton>
          <Button
            variant="default"
            className="pl-2"
            onClick={handleRegister}
            disabled={disable}
          >
            {loading && <ReloadIcon className="h-4 w-4 animate-spin mr-2" />}
            Registrarse
          </Button>
        </CardFooter>
      </Card>
    </main>
  )
}
