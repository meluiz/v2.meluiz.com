import { ReactElement, ReactNode } from 'react'

export type ApplicationContextProps = {
  isMoreThanTablet: boolean
}

export type ApplicationContextProviderProps = {
  children: ReactNode | ReactElement | JSX.Element
}
