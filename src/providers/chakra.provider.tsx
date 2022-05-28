import type { GetServerSideProps } from 'next'
import type { ChakraProps } from '@src/types/providers/chakra'
import { ChakraProvider, cookieStorageManager, localStorageManager } from '@chakra-ui/react'
import { ChakraTheme } from '@src/theme'

const Provider = ({ cookies, children }: ChakraProps) => {
  const colorModeManager =
    typeof cookies === 'string' ? cookieStorageManager(cookies) : localStorageManager

  return (
    <ChakraProvider theme={ChakraTheme} resetCSS colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  )
}

export default Provider

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      cookies: req.headers.cookie ?? '',
    },
  }
}
