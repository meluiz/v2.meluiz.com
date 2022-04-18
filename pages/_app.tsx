import type { AppPropsWithLayout } from '@src/types/next'
import { DefaultSeo } from 'next-seo'
import { ApplicationContextProvider } from '@src/contexts/application.context'
import { ChakraProvider, CommandPalette } from '@src/providers'
import Head from 'next/head'

import { SEOConfig } from '@src/config'

function Application({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ChakraProvider cookies={pageProps.cookies}>
      <DefaultSeo {...SEOConfig} />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ApplicationContextProvider>
        <CommandPalette>{getLayout(<Component {...pageProps} />)}</CommandPalette>
      </ApplicationContextProvider>
    </ChakraProvider>
  )
}

export default Application
