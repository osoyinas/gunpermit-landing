import { useState } from 'react'

const useStorage = (key: string, initialValue: string) => {
  const [storedValue, setStoredValue] = useState<string>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item || initialValue
    } catch (error) {
      console.error(error)
      return initialValue
    }
  })

  const setValue = (value: string) => {
    try {
      setStoredValue(value)
      window.localStorage.setItem(key, value)
    } catch (error) {
      console.error(error)
    }
  }

  return [storedValue, setValue] as const
}

export default useStorage
