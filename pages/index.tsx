import type { NextPageWithLayout } from '@src/types/next'
import { Fragment, ReactElement } from 'react'
import { useKBar } from 'kbar'
import { Layout } from '@src/components'
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  useMediaQuery,
} from '@chakra-ui/react'

const Page: NextPageWithLayout = () => {
  const { query } = useKBar()
  const [isMoreThanTablet] = useMediaQuery('(min-width: 768px)')

  const kbd_bg = useColorModeValue('mauve_light.400', 'mauve_dark.400')
  const kbd_color = useColorModeValue('mauve_light.1200', 'mauve_dark.1200')

  return (
    <Box w="100%" pos="relative">
      <Container maxW="992px">
        <Flex
          w="100%"
          minH="100vh"
          flexDir="column"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Flex
            flexDir="column"
            alignItems={{ base: 'center', md: 'flex-start' }}
            gap="20px"
            textAlign={{ base: 'center', md: 'left' }}
          >
            <Heading
              px="12px"
              color={useColorModeValue('mauve_light.100', 'mauve_dark.100')}
              fontSize="48px"
              as="h1"
            >
              Luiz Felipe
            </Heading>
            <Flex flexDir="column" px="12px" gap="10px">
              <Text
                color={useColorModeValue('mauve_light.200', 'mauve_dark.100')}
                fontWeight="bold"
              >
                Desenvolvedor Front-end na RBR Digital
              </Text>
              <Text
                maxW="512px"
                color={useColorModeValue('mauve_light.400', 'mauve_dark.300')}
                fontWeight="bold"
              >
                Desenvolvedor Front-end que ama tecnologias web e que coloca amor em tudo que
                faz
              </Text>
            </Flex>
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
                    ctrl
                  </Text>{' '}
                  <Text borderRadius="2px" bg={kbd_bg} color={kbd_color} px="6px" as="kbd">
                    k
                  </Text>{' '}
                  para navegar
                </Fragment>
              ) : (
                <Fragment>Toque para navegar</Fragment>
              )}
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Page
