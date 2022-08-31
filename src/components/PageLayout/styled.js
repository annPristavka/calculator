import styled from 'styled-components'
import theme from '@/theme'

export const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${theme.length[1]}px;
  min-height: ${theme.length[0]}px;
  width: 100%;
  margin: auto;
  max-height: ${theme.length[2]}px;
  border: ${theme.border[0]}px solid ${theme.grey};
`
