import React from 'react'
import theme from '@/theme'
import { LoaderWrapper } from './styled'

const LOADER_SIZE = 100

export default () => {
  return (
    <LoaderWrapper
      type="Bars"
      color={theme.colors.secondary}
      height={LOADER_SIZE}
      width={LOADER_SIZE}
    />
  )
}
