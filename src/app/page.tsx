import Link from 'next/link'
import {
  Check,
  Shield,
  Zap,
  BarChart,
  BookOpen,
  FileText,
  ChevronRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Home () {
  return (
    <div className="flex min-h-screen flex-col bg-background justify-center items-center p-2">
      {/* Navbar */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="inline-block font-bold">gunpermit.es</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link
                href="#features"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Características
              </Link>
              <Link
                href="#testimonials"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Testimonios
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Precios
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Button variant="outline" asChild>
                <Link href="/auth/login">Iniciar Sesión</Link>
              </Button>
              <Button asChild>
                <Link href="/auth/register">Registrarse</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="space-y-6 pb-8 pt-10 md:pb-12 md:pt-16 lg:py-32 container">
        <div className="flex max-w-[980px] flex-col items-center gap-4 text-center mx-auto">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
            Obtén tu licencia de armas
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
            Prepárate para el examen con nuestra plataforma de aprendizaje
            interactiva
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button size="lg" asChild>
              <Link href="/inicio">
                Inicio <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/register">Registrarse</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container py-12 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
            Todo lo que necesitas para aprobar
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Nuestra plataforma te ofrece todas las herramientas necesarias para
            prepararte y aprobar el examen de licencia de armas.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-16">
          <Card className="border-2 border-muted bg-background/60">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Check className="h-8 w-8 text-primary" />
              <CardTitle className="text-xl">Exámenes Actualizados</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Preguntas actualizadas regularmente para reflejar los últimos
                requisitos legales.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="border-2 border-muted bg-background/60">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Zap className="h-8 w-8 text-primary" />
              <CardTitle className="text-xl">Aprendizaje Interactivo</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Practica con simulaciones de exámenes y recibe retroalimentación
                instantánea.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="border-2 border-muted bg-background/60">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Shield className="h-8 w-8 text-primary" />
              <CardTitle className="text-xl">Seguridad Primero</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Aprende las mejores prácticas de seguridad para el manejo
                responsable de armas.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* App Features Section */}
      <section className="container py-12 md:py-24 lg:py-32 bg-muted/40 rounded-lg p-16">
        <div className="mx-auto grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Funcionalidades completas
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Nuestra aplicación te ofrece todo lo que necesitas para prepararte
              adecuadamente.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/20 p-1 rounded-full">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">Tests Oficiales</h3>
                  <p className="text-muted-foreground">
                    Accede a tests basados en exámenes oficiales de la Guardia
                    Civil.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/20 p-1 rounded-full">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">Material de Estudio</h3>
                  <p className="text-muted-foreground">
                    Estudia los temas y normativas necesarias para aprobar el
                    examen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/20 p-1 rounded-full">
                  <BarChart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">Seguimiento de Progreso</h3>
                  <p className="text-muted-foreground">
                    Visualiza tu progreso con métricas detalladas y
                    estadísticas.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Tabs defaultValue="tests" className="w-full max-w-md">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="tests">Tests</TabsTrigger>
                <TabsTrigger value="estudio">Estudio</TabsTrigger>
                <TabsTrigger value="progreso">Progreso</TabsTrigger>
              </TabsList>
              <TabsContent
                value="tests"
                className="border rounded-lg p-6 mt-6 bg-card"
              >
                <div className="space-y-4">
                  <h3 className="text-lg font-bold">Tests por temas</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Normativa básica</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Funcionamiento de armas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Seguridad en el manejo</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent
                value="estudio"
                className="border rounded-lg p-6 mt-6 bg-card"
              >
                <div className="space-y-4">
                  <h3 className="text-lg font-bold">Material completo</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Temario actualizado</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Normativas vigentes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Guías prácticas</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent
                value="progreso"
                className="border rounded-lg p-6 mt-6 bg-card"
              >
                <div className="space-y-4">
                  <h3 className="text-lg font-bold">Seguimiento detallado</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Estadísticas por tema</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Gráficos de evolución</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Áreas de mejora</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="container py-12 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Miles de estudiantes han aprobado su examen gracias a nuestra
            plataforma.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-bold text-primary">JM</span>
                </div>
                <div>
                  <CardTitle className="text-lg">Juan Martínez</CardTitle>
                  <CardDescription>Madrid</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Gracias a gunpermit.es pude aprobar mi examen a la primera. Los
                tests son muy similares a los reales.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-bold text-primary">LR</span>
                </div>
                <div>
                  <CardTitle className="text-lg">Laura Rodríguez</CardTitle>
                  <CardDescription>Barcelona</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                La aplicación es muy intuitiva y el material de estudio está
                muy bien organizado. Totalmente recomendable.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-bold text-primary">AG</span>
                </div>
                <div>
                  <CardTitle className="text-lg">Antonio García</CardTitle>
                  <CardDescription>Valencia</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                El seguimiento del progreso me ayudó a identificar mis puntos
                débiles y mejorarlos. Excelente herramienta.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="pricing"
        className="container py-12 md:py-24 lg:py-32 bg-muted/40 rounded-lg"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
            Comienza tu preparación hoy
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Elige el plan que mejor se adapte a tus necesidades y comienza a
            prepararte para tu examen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 p-8">
          <Card className="flex flex-col m-2">
            <CardHeader>
              <CardTitle>Plan Básico</CardTitle>
              <div className="text-4xl font-bold">Gratis</div>
              <CardDescription>
                Acceso limitado a tests y material
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>5 tests de práctica</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Material básico</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Estadísticas limitadas</span>
                </li>
              </ul>
            </CardContent>
            <div className="p-6 pt-0 mt-auto">
              <Button className="w-full" variant="outline" asChild>
                <Link href="/register">Registrarse</Link>
              </Button>
            </div>
          </Card>
          <Card className="flex flex-col border-primary m-2">
            <CardHeader>
              <CardTitle>Plan Premium</CardTitle>
              <div className="text-4xl font-bold">19,99€</div>
              <CardDescription>Acceso completo por 3 meses</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Acceso ilimitado a tests</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Material completo de estudio</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Estadísticas detalladas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Tests personalizados</span>
                </li>
              </ul>
            </CardContent>
            <div className="p-6 pt-0 mt-auto">
              <Button className="w-full" asChild>
                <Link href="/premium">Obtener Premium</Link>
              </Button>
            </div>
          </Card>
          <Card className="flex flex-col m-2">
            <CardHeader>
              <CardTitle>Plan Anual</CardTitle>
              <div className="text-4xl font-bold">49,99€</div>
              <CardDescription>Acceso completo por 12 meses</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Todo lo del plan Premium</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Simulaciones de examen</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Soporte prioritario</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Actualizaciones garantizadas</span>
                </li>
              </ul>
            </CardContent>
            <div className="p-6 pt-0 mt-auto">
              <Button className="w-full" variant="outline" asChild>
                <Link href="/annual">Obtener Anual</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Shield className="h-6 w-6 text-primary" />
            <p className="text-center text-sm leading-loose md:text-left">
              &copy; {new Date().getFullYear()} gunpermit.es. Todos los derechos
              reservados.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/info/terminos-y-condiciones"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Términos
            </Link>
            <Link
              href="/info/politica-privacidad"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Privacidad
            </Link>
            <Link
              href="/contact"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Contacto
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
