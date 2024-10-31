'use client'
import { signIn } from 'next-auth/react'
import * as React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  ArrowRight,
  CheckCircle,
  Shield,
  Zap,
  RefreshCw,
  Trophy,
  Calendar as CalendarIcon
} from 'lucide-react'
import { Calendar } from '@components/ui/calendar'
import { HalfTopicPerformanceImage } from '@components/images/HalfTopicPerformanceImage'
import { FullTopicPerformanceImage } from '@components/images/FullTopicPerformanceImage'
import Link from 'next/link'
export default function LandingPage () {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <Shield className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">
                FirearmLicense
              </span>
            </a>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center">
              <Button variant="ghost" asChild>
                <a href="/login">Iniciar Sesión</a>
              </Button>
            </nav>
          </div>
        </div>
      </header> */}

      <main className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Obtén tu <span className="text-primary">licencia de armas</span>
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Prepárate para el examen con nuestra plataforma de aprendizaje
            interactiva
          </p>
          <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
            <Button size="lg" className="font-semibold" onClick={() => signIn()}>
                Inicio
                <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="font-semibold"
            >
              <Link href="/auth/register">Registrarse</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 grid gap-8 md:grid-cols-3"
        >
          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <CheckCircle className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-xl font-semibold mb-2">
                Exámenes Actualizados
              </h2>
              <p className="text-center text-muted-foreground">
                Preguntas actualizadas regularmente para reflejar los últimos
                requisitos legales.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <Zap className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-xl font-semibold mb-2">
                Aprendizaje Interactivo
              </h2>
              <p className="text-center text-muted-foreground">
                Practica con simulaciones de exámenes y recibe retroalimentación
                instantánea.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-xl font-semibold mb-2">Seguridad Primero</h2>
              <p className="text-center text-muted-foreground">
                Aprende las mejores prácticas de seguridad para el manejo
                responsable de armas.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="my-24 text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <Card className="bg-gradient-to-r from-green-500 to-green-700 text-white">
            <CardContent className="p-8">
              <RefreshCw className="h-16 w-16 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                Datos Actualizados de la Guardia Civil
              </h2>
              <p className="text-xl mb-6">
                Nuestro contenido está sincronizado con la información más
                reciente proporcionada por la Guardia Civil.
              </p>
              <ul className="text-left list-disc list-inside mb-6">
                <li>Normativas actualizadas</li>
                <li>Procedimientos oficiales</li>
                <li>Requisitos legales vigentes</li>
              </ul>
              <Button
                asChild
                size="lg"
                className="font-semibold bg-white text-green-700 hover:bg-green-100"
              >
                <a href="/info">Más Información</a>
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-b from-blue-950 to-black text-white">
            <CardContent className="p-8">
              <Trophy className="h-16 w-16 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                Progreso y Estadísticas
              </h2>
              <p className="text-xl mb-6">
                Mantén un registro de tu progreso y mejora tus habilidades con
                estadísticas detalladas.
              </p>
              <aside className="flex gap-2 w-full">
                <HalfTopicPerformanceImage />
                <FullTopicPerformanceImage />
              </aside>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-500 to-blue-800 text-white">
            <CardContent className="p-8">
              <CalendarIcon className="h-16 w-16 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                Información de próximos exámenes
              </h2>
              <aside className="flex gap-2 w-full">
                <Calendar mode="single" className="rounded-md w-full mx-auto" />
              </aside>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">¿Listo para empezar?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Únete a miles de estudiantes que ya han obtenido su licencia con
            nosotros.
          </p>
          <Button
            asChild
            size="lg"
            className="font-semibold bg-green-500 hover:bg-green-600 text-white"
          >
            <Link href="/auth/register">Comenzar Ahora</Link>
          </Button>
        </motion.div>
      </main>

      <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Shield className="h-6 w-6" />
            <p className="text-center text-sm leading-loose md:text-left">
              Built by FirearmLicense. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
