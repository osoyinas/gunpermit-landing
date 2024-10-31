'use client'

import { motion } from 'framer-motion'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@components/ui/card'
import { Input } from '@components/ui/input'
import { Label } from '@components/ui/label'
import { Button } from '@components/ui/button'

import { useUser } from '@hooks/api/auth/useUser'
import { ChangeEvent, useEffect, useState } from 'react'
import { toast } from '@hooks/use-toast'
import { ReloadIcon } from '@radix-ui/react-icons'
import { DeleteAccountButtonDialog } from '@components/account/DeleteAccountButtonDialog'
import { ChangePasswordButtonDialog } from '@components/account/ChangePasswordButtonDialog'

export default function AccountSettings () {
  const [name, setName] = useState('John')
  const [surnames, setSurnames] = useState('Doe')
  const [email, setEmail] = useState('john.doe@example.com')
  const [loading, setLoading] = useState(false)

  const { getMe, updateMe } = useUser()

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMe()
      if (response.ok) {
        setName(response.val.first_name)
        setSurnames(response.val.last_name)
        setEmail(response.val.email)
      }
    }
    fetchData()
  }, [])

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value)
  const handleSurnamesChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSurnames(e.target.value)

  const handleSave = async () => {
    setLoading(true)
    const data = { first_name: name, last_name: surnames }
    try {
      await updateMe(data)
      setTimeout(() => {
        toast({
          title: 'Cuenta actualizada',
          description: ` ${new Date().toLocaleString()}`
        })
      }, 300)
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: 'Error al actualizar la cuenta',
          description: error.message,
          variant: 'destructive'
        })
      } else {
        toast({
          title: 'Error al actualizar la cuenta',
          description: 'Ocurrió un error inesperado',
          variant: 'destructive'
        })
      }
    }
    setTimeout(() => setLoading(false), 300)
  }

  return (
    <div className="bg-background text-foreground p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl">
              Configuración de la Cuenta
            </CardTitle>
            <CardDescription>
              Gestiona tu información personal y configuración de la cuenta
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre</Label>
              <Input id="name" value={name} onChange={handleNameChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Apellidos</Label>
              <Input
                id="name"
                value={surnames}
                onChange={handleSurnamesChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Correo Electrónico</Label>
              <Input id="email" type="email" value={email} disabled />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                disabled
              />
              <ChangePasswordButtonDialog />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 sm:flex-row sm:justify-between sm:space-y-0">
            <Button onClick={handleSave} disabled={loading}>
              {loading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
              Guardar Cambios
            </Button>
        <DeleteAccountButtonDialog />
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}
