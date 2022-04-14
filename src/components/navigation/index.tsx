import { IconBrandCodepen, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons'
import { Box, Container, Flex, Link, List, ListItem } from '@chakra-ui/react'

const Component = () => {
  return (
    <Box w="100%" h="56px" pos="absolute" top="0" left="0" bg="inherit" zIndex="10">
      <Container maxW="100%" h="100%">
        <Flex w="100%" h="100%" alignItems="center" justifyContent="space-between">
          <Flex flex="1">
            <Link
              href="/"
              fontSize="20px"
              fontWeight="600"
              fontFamily="Outfit, sans-serif"
              p="2px 12px"
              _hover={{ borderRadius: '4px', bg: 'mauve.1000' }}
            >
              meluiz
            </Link>
          </Flex>
          <Flex flex="1" justifyContent="flex-end" px="12px">
            <Flex gap="4px" as={List}>
              <ListItem>
                <Flex
                  w="40px"
                  h="40px"
                  d="flex"
                  alignItems="center"
                  justifyContent="center"
                  _hover={{ borderRadius: '4px', bg: 'mauve.1000' }}
                  as={Link}
                  href="https://codepen.io/meluiz"
                  target="_blank"
                >
                  <IconBrandCodepen />
                </Flex>
              </ListItem>
              <ListItem>
                <Flex
                  w="40px"
                  h="40px"
                  d="flex"
                  alignItems="center"
                  justifyContent="center"
                  _hover={{ borderRadius: '4px', bg: 'mauve.1000' }}
                  as={Link}
                  href="https://www.linkedin.com/in/meluiz"
                  target="_blank"
                >
                  <IconBrandLinkedin />
                </Flex>
              </ListItem>
              <ListItem>
                <Flex
                  w="40px"
                  h="40px"
                  d="flex"
                  alignItems="center"
                  justifyContent="center"
                  _hover={{ borderRadius: '4px', bg: 'mauve.1000' }}
                  as={Link}
                  href="https://github.com/meluiz"
                  target="_blank"
                >
                  <IconBrandGithub />
                </Flex>
              </ListItem>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Component
