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
import { LoginResponseError } from '@/types/Response'
import { ErrorP } from '@/components/ui/errorP'
import { TypographyMuted } from '@components/typography/TypographyMuted'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { z } from '@/lib/zod'
import { ZodError } from 'zod'
import { LinkButton } from '@components/ui/linkButton'
import { SignInWithGoogleButton } from '@components/buttons/signInWithGoogleButton'
import { Providers } from '@/types/Auth'

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
})

export default function Page () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<LoginResponseError | null>(null)
  const searchParams = useSearchParams()

  const handleLogin = async () => {
    setLoading(true)
    setError(null)

    try {
      LoginSchema.parse({ email, password })
    } catch (e) {
      if (e instanceof ZodError) {
        console.log(e.errors)
        setError({
          email: [
            e.errors.filter((error) => error.path[0] === 'email')[0]?.message
          ],
          password: [
            e.errors.filter((error) => error.path[0] === 'password')[0]
              ?.message
          ]
        })
      }
      setLoading(false)

      return
    }

    const callbackUrl = searchParams?.get('callbackUrl') || '/dashboard'
    await signIn(Providers.EMAIL, {
      email,
      password,
      redirectTo: callbackUrl
    })
    setLoading(false)
  }

  useEffect(() => {
    const error = searchParams?.get('error_message')
    const invalidCredentials =
      searchParams?.get('error') === 'CredentialsSignin'

    if (invalidCredentials) {
      setError({
        non_field_errors: ['Correo o contraseña incorrectos.']
      })
    }
    if (error) {
      setError({
        non_field_errors: error.toString() ? [error.toString()] : undefined
      })
    }
  }, [])
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
        <CardFooter className="flex flex-col w-full">
          <div className="flex justify-between w-full">
            <LinkButton variant="link" href="/auth/register">
              Registrase
            </LinkButton>
            <Button onClick={handleLogin} disabled={loading}>
              {loading && <ReloadIcon className="h-4 w-4 animate-spin mr-2" />}
              {loading ? 'Inciando...' : 'Iniciar sesión'}
            </Button>
          </div>
          <ul className="m-auto mt-8 w-full flex flex-col gap-4">
            <li className="w-full">
              <SignInWithGoogleButton
                onClick={() => signIn('google')}
                className="w-full"
              />
            </li>
          </ul>
        </CardFooter>
      </Card>
    </main>
  )
}
