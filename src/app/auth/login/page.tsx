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
import { LoginResponseError } from '@/types/Response'
import { ErrorP } from '@/components/ui/errorP'
import { TypographyMuted } from '@components/typography/TypographyMuted'
import { signIn } from 'next-auth/react'
import Link from 'next/link'

export default function Page () {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<LoginResponseError | null>(null)

  const handleLogin = async () => {
    setError(null)
    setLoading(true)
    await signIn('credentials', { email, password })

    setLoading(false)
  }

  const handleRegister = async () => {
    router.push('/auth/register')
  }

  return (
    <main className="w-full flex justify-center items-center md:py-16">
      <Card className="w-full max-w-[28rem] border-none md:border">
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
                <Link
                  className="underline underline-offset-2"
                  href="/auth/forgot-password"
                >
                  <TypographyMuted>He olvidado mi contraseña</TypographyMuted>
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="link" onClick={handleRegister}>
            Registrase
          </Button>
          <Button onClick={handleLogin} disabled={loading}>
            {loading && <ReloadIcon className="h-4 w-4 animate-spin mr-2" />}
            {loading ? 'Inciando...' : 'Iniciar sesión'}
          </Button>
        </CardFooter>
      </Card>
    </main>
  )
}
