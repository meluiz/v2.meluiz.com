import type { AppPropsWithLayout } from '@src/types/next'
import { DefaultSeo } from 'next-seo'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'

import { ChakraTheme } from '@src/theme'
import { SEOConfig } from '@src/config'

function Application({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ChakraProvider theme={ChakraTheme}>
      <DefaultSeo {...SEOConfig} />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  )
}

export default Application
