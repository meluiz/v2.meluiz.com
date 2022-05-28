import type { NextPageWithLayout } from '@src/types/next'
import { Fragment, ReactElement } from 'react'

import { useApplicationContext } from '@src/contexts'
import { useKBar } from 'kbar'
import { Layout } from '@src/components'
import { Button, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'

const Page: NextPageWithLayout = () => {
  const { query } = useKBar()
  const { isMoreThanTablet } = useApplicationContext()

  const kbd_bg = useColorModeValue('mauve_light.400', 'mauve_dark.400')
  const kbd_color = useColorModeValue('mauve_light.1200', 'mauve_dark.1200')

  return (
    <Flex
      w="100%"
      h="calc(100% - 56px)"
      flexDir="row"
      alignItems="center"
      justifyContent="center"
      color="red"
      pos="relative"
    >
      <Flex
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        gap="16px"
        textAlign="center"
      >
        <Heading
          px="12px"
          color={useColorModeValue('mauve_light.100', 'mauve_dark.100')}
          fontSize="48px"
          as="h1"
        >
          4
          <Text color="rgba(191,78,99, 1)" as="span">
            zero
          </Text>
          4
        </Heading>
        <Flex
          gap="8px"
          px="12px"
          bg={{
            base: 'rgba(191,78,99, 0.1)',
            lg: 'transparent',
          }}
          border={{
            base: '1px solid rgba(191,78,99, 1)',
            lg: 'none',
          }}
          color={{
            base: useColorModeValue('rgba(191,78,99, 1)', 'mauve_dark.100'),
            lg: useColorModeValue('mauve_light.200', 'mauve_dark.100'),
          }}
          _hover={{
            bg: {
              base: 'rgba(191,78,99, 0.2)',
              lg: 'none',
            },
          }}
          onClick={() => query.toggle()}
          as={Button}
        >
          {isMoreThanTablet ? (
            <Fragment>
              Pressione{' '}
              <Text borderRadius="2px" bg={kbd_bg} color={kbd_color} px="6px" as="kbd">
                G
              </Text>{' '}
              <Text borderRadius="2px" bg={kbd_bg} color={kbd_color} px="6px" as="kbd">
                H
              </Text>{' '}
              para ir ao início
            </Fragment>
          ) : (
            <Fragment>Toque para voltar ao início</Fragment>
          )}
        </Flex>
      </Flex>
    </Flex>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Page
