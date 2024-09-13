'use client'
import * as React from 'react'

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

export default function Page () {
  const router = useRouter()

  const handleLogin = async () => {
    console.log('login')
  }

  const handleRegister = async () => {
    router.push('/auth/register')
  }
  return (
    <main className='w-full flex justify-center items-center'>
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Inicia sesión</CardTitle>
          <CardDescription>
            Inicia sesión para acceder a la plataforma de tests
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="johndoe@gmail.com" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Contraseña</Label>
                <Input id="password" type='password' placeholder="********" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="link">Registrase</Button>
          <Button onClick={handleLogin}>Iniciar sesión</Button>
        </CardFooter>
      </Card>
    </main>
  )
}
