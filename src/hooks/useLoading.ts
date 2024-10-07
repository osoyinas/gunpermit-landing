import { useState } from 'react'

const useLoading = () => {
  const [loading, setLoading] = useState(true)

  const startLoading = () => setLoading(true)
  const stopLoading = () => setLoading(false)

  return { loading, startLoading, stopLoading }
}

export default useLoading
