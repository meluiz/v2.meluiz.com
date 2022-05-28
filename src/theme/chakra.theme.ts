import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { mauveDark, mauve } from '@radix-ui/colors'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const Theme = extendTheme(
  { config },
  {
    styles: {
      global: {
        '*': {
          cursor: { lg: 'none' },
        },
      },
    },
    fonts: {
      body: 'DM Sans, sans-serif',
      heading: 'Outfit, sans-serif',
      mono: 'JetBrains Mono, monospace',
    },
    colors: {
      mauve_dark: {
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
      mauve_light: {
        100: mauve.mauve12,
        200: mauve.mauve11,
        300: mauve.mauve10,
        400: mauve.mauve9,
        500: mauve.mauve8,
        600: mauve.mauve7,
        700: mauve.mauve6,
        800: mauve.mauve5,
        900: mauve.mauve4,
        1000: mauve.mauve3,
        1100: mauve.mauve2,
        1200: mauve.mauve1,
      },
    },
    components: {
      Button: {
        baseStyle: {
          cursor: { lg: 'none' },
          fontFamily: 'DM Sans, sans-serif',
        },
      },
      Link: {
        baseStyle: {
          cursor: { lg: 'none' },
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
  }
)

export default Theme
