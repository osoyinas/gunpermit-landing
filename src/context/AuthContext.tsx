'use client'
import { createContext, useState, useEffect, ReactNode } from 'react'
import { useRefresh } from '@/hooks/api/auth/useRefresh'

export interface AuthContextType {
  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
  isAuthenticated: boolean | undefined;
  setIsAuthenticated: (auth: boolean) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
)

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(undefined)
  const { refresh } = useRefresh()
  // Try to renew the accessToken when the application loads
  useEffect(() => {
    const refreshToken = async () => {
      try {
        const accessToken = await refresh() // Request the new access token
        setAccessToken(accessToken)
        setIsAuthenticated(true)
      } catch (error) {
        setIsAuthenticated(false) // If it fails, not authenticated
      }
    }

    refreshToken()
  }, [])

  useEffect(() => {
    console.log('accessToken', accessToken)
    console.log('isAuthenticated', isAuthenticated)
  }, [accessToken, isAuthenticated])

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        setAccessToken,
        isAuthenticated,
        setIsAuthenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
