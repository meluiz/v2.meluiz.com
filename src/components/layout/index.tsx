import type { LayoutProps } from '@src/types/components/layout'
import React, { useEffect, useRef } from 'react'

import { Navigation } from '@src/components'
import { Box, useColorModeValue } from '@chakra-ui/react'

const Component = ({ children }: LayoutProps) => {
  const innerCursor = useRef<HTMLDivElement>(null)
  const outerCursor = useRef<HTMLDivElement>(null)

  function mousemove(event: MouseEvent) {
    const inner = innerCursor.current
    const outer = outerCursor.current
    if (inner && outer) {
      const __x = event.clientX
      const __y = event.clientY

      inner.style.top = `${__y}px`
      inner.style.left = `${__x}px`

      outer.style.top = `${__y}px`
      outer.style.left = `${__x}px`
    }
  }

  function mouseleave() {
    const inner = innerCursor.current
    const outer = outerCursor.current

    if (inner && outer) {
      inner.style.opacity = '0'
      outer.style.opacity = '0'
    }
  }

  function mouseenter() {
    const inner = innerCursor.current
    const outer = outerCursor.current

    if (inner && outer) {
      inner.style.opacity = '1'
      outer.style.opacity = '1'
    }
  }

  useEffect(() => {
    document.addEventListener('mousemove', mousemove, false)
    document.addEventListener('mouseleave', mouseleave, false)
    document.addEventListener('mouseenter', mouseenter, false)

    return () => {
      document.removeEventListener('mousemove', mousemove, false)
      document.removeEventListener('mouseleave', mouseleave, false)
      document.removeEventListener('mouseenter', mouseenter, false)
    }
  }, [])

  return (
    <Box
      id="__app"
      w="100vw"
      h="100vh"
      position="relative"
      overflow="auto"
      bg={useColorModeValue('mauve_light.1200', 'mauve_dark.1200')}
      color="mauve_dark.100"
      cursor="none"
    >
      <Box
        ref={innerCursor}
        w="8px"
        h="8px"
        display={{
          base: 'none',
          lg: 'block',
        }}
        borderRadius="9999px"
        bg="#BF4E63"
        pos="fixed"
        top="-50%"
        left="-50%"
        transform="translate(-50%, -50%)"
        zIndex={99999}
        pointerEvents="none"
        userSelect="none"
        transition="transform 600ms ease-out"
      />
      <Box
        ref={outerCursor}
        width="28px"
        h="28px"
        display={{
          base: 'none',
          lg: 'block',
        }}
        border="1px solid #BF4E63"
        borderRadius="9999px"
        pos="fixed"
        top="-50%"
        left="-50%"
        transform="translate(-50%, -50%)"
        zIndex={99999}
        pointerEvents="none"
        userSelect="none"
        transition="200ms ease-out"
      />
      <Navigation />
      {children}
    </Box>
  )
}

export default Component
