import {
  IconBrandCodepen,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMoon,
  IconSun,
} from '@tabler/icons'
import {
  Box,
  Button,
  Container,
  Flex,
  Link,
  List,
  ListItem,
  Text,
  useColorMode,
} from '@chakra-ui/react'

const Component = () => {
  const { colorMode, toggleColorMode } = useColorMode()
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
              _hover={{ borderRadius: '4px', bg: 'mauve_dark.1000' }}
            >
              <Text color="#BF4E63" as="span">
                me
              </Text>
              luiz
            </Link>
          </Flex>
          <Flex flex="1" justifyContent="flex-end" px="12px" gap="24px">
            <Flex gap="4px" as={List}>
              <ListItem>
                <Flex
                  w="40px"
                  h="40px"
                  d="flex"
                  alignItems="center"
                  justifyContent="center"
                  _hover={{ borderRadius: '4px', bg: 'mauve_dark.1000' }}
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
                  _hover={{ borderRadius: '4px', bg: 'mauve_dark.1000' }}
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
                  _hover={{ borderRadius: '4px', bg: 'mauve_dark.1000' }}
                  as={Link}
                  href="https://github.com/meluiz"
                  target="_blank"
                >
                  <IconBrandGithub />
                </Flex>
              </ListItem>
            </Flex>
            <Flex gap="4px" as={List}>
              <ListItem>
                <Flex
                  w="40px"
                  h="40px"
                  p="0"
                  d="flex"
                  alignItems="center"
                  justifyContent="center"
                  bg="transparent"
                  _hover={{ borderRadius: '4px', bg: 'mauve_dark.1000' }}
                  href="https://codepen.io/meluiz"
                  target="_blank"
                  as={Button}
                  onClick={toggleColorMode}
                >
                  {colorMode === 'dark' ? <IconMoon /> : <IconSun />}
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
