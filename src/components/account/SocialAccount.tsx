import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@components/ui/card'
import { DeleteAccountButtonDialog } from '@components/account/DeleteAccountButtonDialog'
import { auth } from '@/auth'
import { SignedWithGoogleButton } from '@components/buttons/SignedWithGoogleButton'
import { ReactElement } from 'react'
import { User } from 'next-auth'
import EmailAccount from './EmailAccount'
import { Providers } from '@/types/Auth'

const ProviderWithButton: Record<string, (user:User) => ReactElement> = {
  google: (user) => <SignedWithGoogleButton email={user.email ?? ''} />,
  default: (user) => <div>Email: {user.email}</div>
}

export default async function SocialAccount () {
  const session = await auth()

  const provider = session?.user.provider ?? 'default'
  if (provider === Providers.EMAIL) {
    return <EmailAccount />
  }
  const user = session?.user
  if (!user) {
    return null
  }
  return (
    <div className="bg-background text-foreground p-4 md:p-8 max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl">
              Configuración de la Cuenta
            </CardTitle>
            <CardDescription>
              Gestiona tu información personal y configuración de la cuenta
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border">
              {
                ProviderWithButton[provider](user)
              }
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 sm:flex-row sm:justify-between sm:space-y-0">
            <DeleteAccountButtonDialog />
          </CardFooter>
        </Card>
    </div>
  )
}
