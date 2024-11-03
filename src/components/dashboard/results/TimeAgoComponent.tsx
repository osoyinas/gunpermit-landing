'use client'

import TimeAgo from 'javascript-time-ago'
import es from 'javascript-time-ago/locale/es'
import { useEffect } from 'react'
import ReactTimeAgo from 'react-time-ago'
TimeAgo.addDefaultLocale(es)

export function TimeAgoComponent ({ date }: { date: Date | string }) {
  useEffect(() => {
    TimeAgo.addDefaultLocale(es)
  }, [])
  return (
    <ReactTimeAgo date={new Date(date)} locale="es" />
  )
}
