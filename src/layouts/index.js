import styled from 'styled-components'
import theme from '@/theme'

export const PageLayout = styled.div`
  width: 100%;
  height: 100%;
  max-width: ${theme.length[1]}px;
  margin: 0 auto;
`

export const PageLayoutHeader = styled.div`
  width: 100%;
  max-width: ${theme.length[1]}px;
  grid: 0 auto;
`
