import { forwardRef, ReactNode, useMemo, useRef } from 'react'
import { useRouter } from 'next/router'
import {
  IconBrandCodepen,
  IconBrandGithub,
  IconBrandLinkedin,
  IconCode,
  IconCopy,
  IconMail,
} from '@tabler/icons'
import { Box, Flex, Grid, Input, Link, Text } from '@chakra-ui/react'
import {
  Action,
  ActionImpl,
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarQuery,
  KBarResults,
  KBarSearch,
  NO_GROUP,
  useKBar,
  useMatches,
} from 'kbar'

const Provider = ({ children }: { children: ReactNode }) => {
  const router = useRouter()
  const actions: Action[] = [
    {
      id: 'general-copy-url',
      name: 'Copiar URL',
      section: 'General',
      icon: <IconCopy strokeWidth={1.5} />,
      shortcut: ['u'],
      keywords: 'copy-url',
      perform: () => navigator.clipboard.writeText(window.location.href),
    },
    {
      id: 'general-view-source',
      name: 'Ver código-fonte',
      section: 'General',
      icon: <IconCode strokeWidth={1.5} />,
      shortcut: ['s', 'c'],
      keywords: 'go-source',
      perform: () => window.open('https://github.com/meluiz/meluiz.com', '_blank'),
    },
    {
      id: 'social-email',
      name: 'Email',
      subtitle: 'me.luizfelipe@gmail.com',
      section: 'Sociais',
      icon: <IconMail strokeWidth={1.5} />,
      shortcut: ['m'],
      keywords: 'send-mail',
      perform: () => window.open('mailto:me.luizfelipe@gmail.com', '_blank'),
    },
    {
      id: 'social-codepen',
      name: 'Codepen',
      subtitle: 'https://codepen.io/meluiz',
      section: 'Sociais',
      icon: <IconBrandCodepen strokeWidth={1.5} />,
      shortcut: ['c', 'p'],
      keywords: 'go-codepen',
      perform: () => window.open('https://codepen.io/meluiz', '_blank'),
    },
    {
      id: 'social-linkedin',
      name: 'Linkedin',
      subtitle: 'https://www.linkedin.com/in/meluiz',
      section: 'Sociais',
      icon: <IconBrandLinkedin strokeWidth={1.5} />,
      shortcut: ['l', 'd'],
      keywords: 'go-linkedin',
      perform: () => window.open('https://www.linkedin.com/in/meluiz', '_blank'),
    },
    {
      id: 'social-github',
      name: 'Github',
      subtitle: 'https://github.com/meluiz',
      section: 'Sociais',
      icon: <IconBrandGithub strokeWidth={1.5} />,
      shortcut: ['g', 'h'],
      keywords: 'go-github',
      perform: () => window.open('https://github.com/meluiz', '_blank'),
    },
  ]

  return (
    // @ts-ignore
    <KBarProvider
      actions={actions}
      options={{
        enableHistory: true,
      }}
    >
      <KBarPortal>
        <Positioner>
          <Animator>
            <Search />
            <Results />
          </Animator>
        </Positioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  )
}

const Positioner = ({ children }: { children: ReactNode }) => {
  return (
    <Flex
      w="100%"
      h="100%"
      pos="fixed"
      alignItems="flex-start"
      justifyContent="center"
      inset="0"
      bg="rgba(0,0,0,0.6)"
      zIndex="20"
      p="14vh 24px 24px"
      as={KBarPositioner}
    >
      {children}
    </Flex>
  )
}

const Animator = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      w="100%"
      maxW="420px"
      borderRadius="8px"
      overflow="hidden"
      bg="mauve.1200"
      color="mauve.100"
      as={KBarAnimator}
    >
      {children}
    </Box>
  )
}

const Search = () => {
  return (
    <Flex flexDir="column" borderBottom="1px solid" borderColor="mauve.1000">
      <Breadcrumbs />
      <Input
        h="48px"
        padding="12px 16px"
        fontSize="16px"
        width="100%"
        boxSizing="border-box"
        outline="none"
        border="none"
        margin={0}
        background="transparent"
        color="$primary"
        _focus={{ outline: 'none' }}
        _placeholder={{ color: 'mauve.600' }}
        as={KBarSearch}
      />
    </Flex>
  )
}

const Breadcrumbs = () => {
  const router = useRouter()
  const [path] = router.asPath.split('?')
  const nestedRoutes = path.split('/').filter((r) => r.length > 0)

  const crumblist = nestedRoutes.map((subpath, index) => {
    const location = '/' + nestedRoutes.slice(0, index + 1).join('/')
    const text = subpath

    return { location, text }
  })

  const paths = [{ location: '/', text: 'Home' }, ...crumblist]
  console.log(paths)

  return (
    <Flex p="8px 12px 0px" gap="6px">
      {paths.map((path, index) => (
        <Breadcrumb key={`breadcumb-kbar-${index}`} text={path.text} location={path.location} />
      ))}
    </Flex>
  )
}

const Breadcrumb = ({ text, location }: { text: string; location: string }) => {
  return (
    <Link
      borderRadius="6px"
      px="8px"
      bg="mauve.800"
      color="mauve.100"
      fontSize="14px"
      href={location}
    >
      {text}
    </Link>
  )
}

const Results = () => {
  const { results } = useMatches()
  const wrapperRef = useRef(null)

  return (
    <Flex flexDir="column" py="12px" ref={wrapperRef}>
      <KBarResults
        items={results.filter((i) => i !== NO_GROUP)}
        onRender={({ item, active }) =>
          typeof item === 'string' ? (
            <Text
              px="12px"
              textTransform="uppercase"
              color="mauve.500"
              fontSize="12px"
              fontWeight="semibold"
              fontFamily="Outfit, sans-serif"
              letterSpacing={0.5}
            >
              {item}
            </Text>
          ) : (
            <ResultItem action={item} active={active} />
          )
        }
      />
    </Flex>
  )
}

// eslint-disable-next-line react/display-name
const ResultItem = forwardRef(
  (
    {
      action,
      active,
    }: {
      action: ActionImpl
      active: boolean
    },
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <Flex
        alignItems="center"
        justifyContent="space-between"
        borderRadius="6px"
        p="8px 12px"
        pl="4px"
        mx="8px"
        cursor="pointer"
        transition="all 200ms ease"
        bg={active ? 'mauve.1000' : 'transparent'}
        ref={ref}
      >
        <Flex alignItems="center">
          <Text
            w="48px"
            h="40px"
            d="inline-flex"
            alignItems="center"
            justifyContent="center"
            color="mauve.100"
            as="span"
          >
            {action.icon}
          </Text>
          <Flex flexDir="column">
            <Box pos="relative">
              <Text color="mauve.100" fontSize="14px" fontFamily="Outfit, sans-serif" as="span">
                {action.name}
              </Text>
            </Box>
            {action.subtitle && (
              <Text color="mauve.200" fontSize="12px" fontFamily="Outfit, sans-serif" as="span">
                {action.subtitle}
              </Text>
            )}
          </Flex>
        </Flex>
        {action.shortcut?.length ? (
          <Grid gridAutoFlow="column" gap="4px" aria-hidden>
            {action.shortcut.map((sc) => (
              <Text
                key={sc}
                borderRadius="4px"
                borderBottom="2px solid"
                borderColor="mauve.1000"
                bg="mauve.1100"
                color="mauve.100"
                px="6px"
                as="kbd"
              >
                {sc}
              </Text>
            ))}
          </Grid>
        ) : null}
      </Flex>
    )
  }
)

export default Provider
