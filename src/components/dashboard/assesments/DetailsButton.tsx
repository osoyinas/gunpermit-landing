import { LinkButton } from '@components/ui/linkButton'
import { AnchorHTMLAttributes } from 'react'

const LINK = 'https://www.guardiacivil.es/documentos/pdfs/2024/ArmasyExplosivos/FECHAS_EXAMENES_PARA_OBTENCION_LICENCIAS_DE_ARMAS_DE_CAZA_27-02-2024.pdf'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
}

export function DetailsButton (props: Props) {
  return (
    <LinkButton href={LINK} {...props}>
      Ver Detalles
    </LinkButton>
  )
}
