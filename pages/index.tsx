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
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react'

const Page: NextPageWithLayout = () => {
  const { query } = useKBar()
  const [isMoreThanTablet] = useMediaQuery('(min-width: 768px)')

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
            <Heading px="12px" color="mauve.100" fontSize="48px" as="h1">
              Luiz Felipe
            </Heading>
            <Flex flexDir="column" px="12px" gap="10px">
              <Text color="mauve.100" fontWeight="bold">
                Desenvolvedor Front-end na RBR Digital
              </Text>
              <Text maxW="512px" color="mauve.300" fontWeight="bold">
                Desenvolvedor Front-end que ama tecnologias web e que coloca amor em tudo que
                faz
              </Text>
            </Flex>
            <Flex
              gap="8px"
              bg="transparent"
              px="12px"
              _hover={{ bg: 'mauve.1000' }}
              as={Button}
              onClick={() => query.toggle()}
            >
              {isMoreThanTablet ? (
                <Fragment>
                  Pressione{' '}
                  <Text borderRadius="2px" bg="mauve.400" color="mauve.1200" px="6px" as="kbd">
                    ctrl
                  </Text>{' '}
                  <Text borderRadius="2px" bg="mauve.400" color="mauve.1200" px="6px" as="kbd">
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
