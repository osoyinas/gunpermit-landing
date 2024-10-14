import { TypographyMuted } from '@/components/typography/TypographyMuted'
import useCopyUrl from '@/hooks/useCopyUrl'

export function CopyToSaveMessage () {
  const { copyURL } = useCopyUrl()

  return (
    <footer className="max-w-4xl m-auto text-center pb-8">
      <TypographyMuted>
        Recuerda que solo almacenamos los resultados del examén, no las respuestas.
        <br />
        Si quieres guardar las respuestas de este examén, puedes guardar la URL de esta página:
        <br />
        <span className="underline hover:cursor-pointer pt-4" onClick={copyURL}>
          Click para copiar la URL
        </span>
        <br />
      </TypographyMuted>
    </footer>
  )
}
