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
import { FullTopicPerformanceImage } from '@components/images/FullTopicPerformanceImage'
import { HalfTopicPerformanceImage } from '@components/images/HalfTopicPerformanceImage'
import { Separator } from '@components/ui/separator'
import { useState } from 'react'

const INFO = {
  title: 'Rendimiento por tema',
  description:
    'Este gráfico de radar muestra tu rendimiento en cada tema del examen. El área azul representa las preguntas correctas de cada tema, mientras que el área verde, en línea discontinua, indica el total de preguntas por tema. Cuanto más se aproxime el área azul al área verde, más preparado estarás para el examen.'
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
            <DialogDescription>
              <header className="flex w-full justify-between">
                <HalfTopicPerformanceImage />
                <Separator orientation="vertical" />
                <FullTopicPerformanceImage />
              </header>
              {INFO.description}
            </DialogDescription>
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
          <DrawerDescription>
          <header className="flex w-full">
                <HalfTopicPerformanceImage />
                <Separator orientation="vertical" color='red' />
                <FullTopicPerformanceImage />
              </header>
              {INFO.description}
          </DrawerDescription>
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
