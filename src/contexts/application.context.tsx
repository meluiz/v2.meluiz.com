import type {
  ApplicationContextProps,
  ApplicationContextProviderProps,
} from '@src/types/contexts/application'

import { createContext, useContext, useEffect, useState } from 'react'
import { useMediaQuery } from '@chakra-ui/react'

const ApplicationContext = createContext<ApplicationContextProps>({
  isMoreThanTablet: false,
})

export const ApplicationContextProvider = ({ children }: ApplicationContextProviderProps) => {
  const [isMoreThanTabletMediaQuery] = useMediaQuery('(min-width: 768px)')
  const [isMoreThanTablet, updateIsMoreThanTablet] = useState(false)

  useEffect(() => {
    updateIsMoreThanTablet(isMoreThanTabletMediaQuery)
  }, [isMoreThanTabletMediaQuery])

  return (
    <ApplicationContext.Provider
      value={{
        isMoreThanTablet,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  )
}

const Context = () => {
  const context = useContext(ApplicationContext)
  if (context === undefined)
    throw new Error('Application context must be used within a Aplication Context Provider')
  return context
}

export default Context
