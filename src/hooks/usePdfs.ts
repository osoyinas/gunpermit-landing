'use client'

import { useEffect, useState } from 'react'
import { getPdfs } from '@/services/getPdfs'
import { PdfType } from '@/types/Topic'
import useAxios from './useAxios'

export function usePdfs () {
  const [pdfs, setPdfs] = useState<PdfType[]>([])
  const [error, setError] = useState<null|Error>(null)
  const [loading, setLoading] = useState(true)

  const axiosInstance = useAxios()
  useEffect(() => {
    getPdfs(axiosInstance)
      .then((res) => {
        setPdfs(res)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return { pdfs, error, loading }
}
