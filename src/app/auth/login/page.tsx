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
import { redirect, useRouter } from 'next/navigation'
import { login } from '@/services/auth/login'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'
import { LoginResponseError } from '@/types/Response'
import { ErrorP } from '@/components/ui/errorP'
import { useAuth } from '@/hooks/useAuth'

export default function Page () {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<LoginResponseError | null>(null)
  const { setAccessToken, isAuth } = useAuth()

  if (isAuth) {
    redirect('/')
  }

  const handleLogin = async () => {
    setError(null)
    const response = await login({ email, password })
    if (response.ok) {
      setAccessToken(response.val.access)
    } else {
      setError(response.val)
    }
  }

  const handleRegister = async () => {
    router.push('/auth/register')
  }

  return (
    <main className="w-full flex justify-center items-center">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Inicia sesión</CardTitle>
          <CardDescription>
            Inicia sesión para acceder a la plataforma de tests
          </CardDescription>
          {error?.non_field_errors && (
            <Alert variant="destructive">
              <ExclamationTriangleIcon className="h-4 w-4" />
              <AlertTitle>Error al iniciar sesión</AlertTitle>
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
                  placeholder="johndoe@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                {error?.email && <ErrorP>{error.email.join(', ')}</ErrorP>}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Contraseña</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error?.password && <ErrorP>{error.password}</ErrorP>}
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="link" onClick={handleRegister}>
            Registrase
          </Button>
          <Button onClick={handleLogin}>Iniciar sesión</Button>
        </CardFooter>
      </Card>
    </main>
  )
}