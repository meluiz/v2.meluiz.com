import type { LayoutProps } from '@src/types/components/layout'
import React, { useEffect, useRef, useState } from 'react'

import { Navigation } from '@src/components'
import { Box, useColorModeValue } from '@chakra-ui/react'

const Component = ({ children }: LayoutProps) => {
  const innerCursor = useRef<HTMLDivElement>(null)
  const outerCursor = useRef<HTMLDivElement>(null)
  const [isFixed, updateFixed] = useState(false)

  function mousemove(event: MouseEvent) {
    const inner = innerCursor.current
    const outer = outerCursor.current

    if (inner && outer && !isFixed) {
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

  function cursorScalableEnter() {
    const inner = innerCursor.current
    const outer = outerCursor.current

    if (inner && outer) {
      inner.style.transform = `translate(-50%, -50%) scale(12)`
      inner.style.mixBlendMode = `exclusion`
      outer.style.transform = `translate(-50%, -50%) scale(0)`
    }
  }

  function cursorScalableLeave() {
    const inner = innerCursor.current
    const outer = outerCursor.current

    if (inner && outer) {
      inner.style.transform = `translate(-50%, -50%) scale(1)`
      inner.style.mixBlendMode = `unset`
      outer.style.transform = `translate(-50%, -50%) scale(1)`
    }
  }

  function huggedButtonMove(event: MouseEvent) {
    const inner = innerCursor.current
    const outer = outerCursor.current

    if (inner && outer) {
      const target = event.currentTarget as HTMLButtonElement
      const { width, height, top, left } = target.getBoundingClientRect()
      const __br = getComputedStyle(target).borderRadius

      updateFixed(true)

      inner.style.transform = `translate(-50%, -50%) scale(.25)`
      inner.style.opacity = `0`
      outer.style.transform = `translate(0, 0) scale(1)`
      outer.style.width = `${width}px`
      outer.style.height = `${height}px`
      outer.style.top = `${top}px`
      outer.style.left = `${left}px`
      outer.style.borderRadius = `${__br}`
    }
  }

  function huggedButtonLeave() {
    const inner = innerCursor.current
    const outer = outerCursor.current

    updateFixed(false)

    if (inner && outer) {
      inner.style.transform = `translate(-50%, -50%) scale(1)`
      inner.style.opacity = `1`
      outer.style.transform = `translate(-50%, -50%) scale(1)`
      outer.style.width = `28px`
      outer.style.height = `28px`
      outer.style.borderRadius = `28px`
    }
  }

  useEffect(() => {
    document.addEventListener('mousemove', mousemove, false)
    document.addEventListener('mouseleave', mouseleave, false)
    document.addEventListener('mouseenter', mouseenter, false)

    const headings = document.querySelectorAll('h1,h2,h3')
    for (const heading of Array.from(headings)) {
      heading.addEventListener('mouseenter', cursorScalableEnter, false)
      heading.addEventListener('mouseleave', cursorScalableLeave, false)
    }

    const buttons = document.querySelectorAll('button')
    for (const button of Array.from(buttons)) {
      button.addEventListener('mousemove', huggedButtonMove, false)
      button.addEventListener('mouseleave', huggedButtonLeave, false)
    }

    return () => {
      document.removeEventListener('mousemove', mousemove, false)
      document.removeEventListener('mouseleave', mouseleave, false)
      document.removeEventListener('mouseenter', mouseenter, false)

      for (const heading of Array.from(headings)) {
        heading.removeEventListener('mouseover', cursorScalableEnter, false)
        heading.removeEventListener('mouseleave', cursorScalableLeave, false)
      }

      for (const button of Array.from(buttons)) {
        button.removeEventListener('mouseenter', huggedButtonMove, false)
        button.removeEventListener('mouseleave', huggedButtonLeave, false)
      }
    }
  }, [isFixed])

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
        transition="transform 600ms ease-out, opacity 300ms ease-out"
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
        borderRadius="28px"
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
