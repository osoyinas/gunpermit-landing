import { useSession } from 'next-auth/react'

export const MyComponent = () => {
  const { data: session } = useSession()

  return (
    <div>
      {JSON.stringify(session)}
    </div>
  )
}
