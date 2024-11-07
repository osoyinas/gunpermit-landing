import { Separator } from '@components/ui/separator'
import { Shield } from 'lucide-react'

export default function Footer () {
  return (
      <footer className="bg-background border-t ">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="flex flex-col items-center md:flex-row md:justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <Shield className="h-6 w-6 mr-2 text-primary" />
              <span className="text-lg font-semibold">Gunpermit</span>
            </div>
            <nav className="flex flex-wrap justify-center md:justify-end space-x-4 mb-4 md:mb-0">
              <a href="mailto:osoyinas@gmail.com" className="text-sm hover:underline">Contacto</a>
              <a href="/info/terminos-y-condiciones" className="text-sm hover:underline">Términos de Uso</a>
              <a href="/info/politica-privacidad" className="text-sm hover:underline">Política de Privacidad</a>
            </nav>
          </div>
          <Separator className="my-6" />
          <div className="flex flex-col items-center md:flex-row md:justify-between text-sm text-muted-foreground">
            <p>&copy; 2024 Gunpermit. Todos los derechos reservados.</p>
            <p>@osoyinas</p>
          </div>
        </div>
      </footer>
  )
}
