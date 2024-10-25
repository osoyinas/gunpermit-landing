export function DesktopContentMenu () {
  return (
    <header className="flex">
      <a className="mr-6 flex items-center space-x-2" href="/">
        <span className="hidden font-bold sm:inline-block">
          Licencia de Armas
        </span>
      </a>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <a
          className="transition-colors hover:text-foreground/80 text-foreground/60"
          href="/"
        >
          Dashboard
        </a>
        <a
          className="transition-colors hover:text-foreground/80 text-foreground/60"
          href="/tests"
        >
          Exámenes
        </a>
        <a
          className="transition-colors hover:text-foreground/80 text-foreground/60"
          href="/recursos"
        >
          Recursos
        </a>
        <a
          className="transition-colors hover:text-foreground/80 text-foreground/60"
          href="/perfil"
        >
          Perfil
        </a>
      </nav>
    </header>
  )
}
