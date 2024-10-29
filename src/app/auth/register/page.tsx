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
import { RegisterResponseError } from '@/types/Response'
import { ErrorP } from '@/components/ui/errorP'
import { UserRegister } from '@/types/Auth'
import { useAuth } from '@/hooks/useAuth'
import { useRegister } from '@/hooks/api/auth/useRegister'
import { useRedirectIf } from '@/hooks/redirects/useRedirectIf'

export default function Page () {
  useRedirectIf({ authenticated: true }) // Redirects to home if the user is authenticated
  const { setAccessToken, setIsAuthenticated } = useAuth()
  const { register } = useRegister()
  const router = useRouter()

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
    setError(null)
    setLoading(true)
    const response = await register({ userRegister })
    if (response.ok) {
      setAccessToken(response.val.access)
      setIsAuthenticated(true)
    } else {
      setError(response.val)
    }
    setLoading(false)
  }

  const handleAlreadyHaveAnAccount = async () => {
    router.push('/auth/login')
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
          <Button variant="link" onClick={handleAlreadyHaveAnAccount}>
            Ya tengo una cuenta
          </Button>
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
