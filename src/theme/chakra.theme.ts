import { extendTheme } from '@chakra-ui/react'
import { mauveDark } from '@radix-ui/colors'

const Theme = extendTheme({
  fonts: {
    body: 'DM Sans, sans-serif',
    heading: 'Outfit, sans-serif',
    mono: 'JetBrains Mono, monospace',
  },
  colors: {
    mauve: {
      100: mauveDark.mauve12,
      200: mauveDark.mauve11,
      300: mauveDark.mauve10,
      400: mauveDark.mauve9,
      500: mauveDark.mauve8,
      600: mauveDark.mauve7,
      700: mauveDark.mauve6,
      800: mauveDark.mauve5,
      900: mauveDark.mauve4,
      1000: mauveDark.mauve3,
      1100: mauveDark.mauve2,
      1200: mauveDark.mauve1,
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontFamily: 'DM Sans, sans-serif',
      },
    },
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: 'none',
        },
      },
    },
  },
  breakpoints: {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    xxl: '96em',
    xxxl: '112em',
  },
})

export default Theme
