import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'

const LINK = 'https://www.guardiacivil.es/documentos/pdfs/2024/ArmasyExplosivos/FECHAS_EXAMENES_PARA_OBTENCION_LICENCIAS_DE_ARMAS_DE_CAZA_27-02-2024.pdf'
export function DetailsButton () {
  const router = useRouter()

  const handleClick = () => {
    router.push(LINK)
  }
  return (
    <Button className="w-full" onClick={handleClick}>
      Ver Detalles
    </Button>
  )
}
