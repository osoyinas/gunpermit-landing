import { useCallback } from 'react'

const useCopyURL = () => {
  const copyURL = useCallback(() => {
    if (typeof window === 'undefined') {
      return
    }
    const url = window.location.href
    navigator.clipboard.writeText(url).then(() => {
      console.log('URL copiada al portapapeles')
    }).catch(err => {
      console.error('Error al copiar la URL: ', err)
    })
  }, [])

  return { copyURL }
}

export default useCopyURL
