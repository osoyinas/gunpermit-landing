import React, { AnchorHTMLAttributes } from 'react'
import { LinkButton } from '@components/ui/linkButton'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
    title: string
    startDate: Date
    endDate?: Date
    details: string
    location: string
}

function AddToCalendarButton (props: Props):React.ReactNode {
  const { title, startDate, endDate, details, location } = props

  const formatGoogleCalendarDate = (date: Date): string => {
    const year = date.getUTCFullYear()
    const month = String(date.getUTCMonth() + 1).padStart(2, '0')
    const day = String(date.getUTCDate()).padStart(2, '0')

    return `${year}${month}${day}`
  }
  const newStartDate = formatGoogleCalendarDate(startDate)
  const newEndDate = endDate ? formatGoogleCalendarDate(endDate) : newStartDate

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${newStartDate}/${newEndDate}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`

  return (
    <LinkButton variant='secondary' href={googleCalendarUrl} target="_blank" rel="noopener noreferrer"
    className={props.className}>
      Añadir a Google Calendar
    </LinkButton>
  )
}

export default AddToCalendarButton
