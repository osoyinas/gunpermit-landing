import { useState, useEffect } from 'react'

function useMediaQuery (query: string): boolean {
  // Inicializa el estado con el valor de la consulta.
  const [matches, setMatches] = useState<boolean>(window.matchMedia(query).matches)

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query)

    // Define el callback que actualiza el estado cuando cambia la media query.
    const handleChange = (event: MediaQueryListEvent) => setMatches(event.matches)

    // Añade un event listener para monitorear los cambios.
    mediaQueryList.addEventListener('change', handleChange)

    // Limpia el listener cuando el componente se desmonta.
    return () => mediaQueryList.removeEventListener('change', handleChange)
  }, [query])

  return matches
}

export default useMediaQuery
