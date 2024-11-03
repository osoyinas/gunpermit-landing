'use client'
import useMediaQuery from '@hooks/useMediaQuery'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@components/ui/dialog'
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

const INFO = {
  title: 'Progreso',
  description:
    'Este gráfico muestra los examanes realizados a lo largo del tiempo. Si superan la linea discontinua, significa que el examen fue aprobado.'
}

export function HowItWorksDrawerDialog () {
  const [open, setOpen] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="w-full" variant="link">
            ¿Como funciona este gráfico?
          </Button>
        </DialogTrigger>
        <DialogContent className="min-w-min">
          <DialogHeader>
            <DialogTitle>{INFO.title}</DialogTitle>
            <DialogDescription>{INFO.description}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="w-full" variant="link">
          ¿Como funciona este gráfico?
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{INFO.title}</DrawerTitle>
          <DrawerDescription>{INFO.description}</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
