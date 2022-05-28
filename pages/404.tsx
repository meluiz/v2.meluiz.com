import type { NextPageWithLayout } from '@src/types/next'
import { Fragment, ReactElement } from 'react'

import { useApplicationContext } from '@src/contexts'
import { useKBar } from 'kbar'

import NextLink from 'next/link'
import { Layout } from '@src/components'
import { Button, Flex, Heading, Link, Text, useColorModeValue } from '@chakra-ui/react'

const Page: NextPageWithLayout = () => {
  const { query } = useKBar()
  const { isMoreThanTablet } = useApplicationContext()

  const kbd_bg = useColorModeValue('mauve_light.400', 'mauve_dark.400')
  const kbd_color = useColorModeValue('mauve_light.1200', 'mauve_dark.1200')

  const mColor = useColorModeValue('rgba(191,78,99, 1)', 'mauve_dark.100')
  const dColor = useColorModeValue('mauve_light.200', 'mauve_dark.100')

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
        {isMoreThanTablet ? (
          <Flex
            gap="8px"
            px="12px"
            color={dColor}
            bg="transparent"
            _hover={{ bg: 'transparent' }}
            onClick={() => query.toggle()}
            as={Button}
          >
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
          </Flex>
        ) : (
          <NextLink href="/" passHref>
            <Link
              minH="40px"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              border="1px solid rgba(191,78,99, 1)"
              borderRadius="6px"
              px="12px"
              bg="rgba(191,78,99, 0.1)"
              color={mColor}
              _hover={{ bg: 'rgba(191,78,99, 0.2)' }}
            >
              Toque para voltar ao início
            </Link>
          </NextLink>
        )}
      </Flex>
    </Flex>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Page
