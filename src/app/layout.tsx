import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import React, { Suspense } from 'react'
import { Toaster } from '@components/ui/toaster'
import { Provider } from '@components/providers/Provider'
import { FullscreenLoading } from '@components/FullscreenLoading'

export const metadata: Metadata = {
  title: 'Tests del permiso de armas',
  description: 'Generated by create next app'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/gunpermit.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen">
        <Suspense fallback={<FullscreenLoading />}>
          <Provider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Toaster />
              {children}
            </ThemeProvider>
          </Provider>
        </Suspense>
      </body>
    </html>
  )
}
