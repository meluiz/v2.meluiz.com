import type { LayoutProps } from '@src/types/components/layout'
import React from 'react'

import { Navigation } from '@src/components'
import { Box, useColorModeValue } from '@chakra-ui/react'

const Component = ({ children }: LayoutProps) => {
  return (
    <Box
      id="__app"
      w="100vw"
      h="100vh"
      position="relative"
      overflow="auto"
      bg={useColorModeValue('mauve_light.1200', 'mauve_dark.1200')}
      color="mauve_dark.100"
    >
      <Navigation />
      {children}
    </Box>
  )
}

export default Component
