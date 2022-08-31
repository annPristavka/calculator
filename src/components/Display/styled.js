import styled from 'styled-components'
import theme from '@/theme'

export const Wrapper = styled.div`
  text-align: right;
  border-radius: ${theme.borderRadius[0]}px;
  overflow: hidden;
  outline: none;
  font-size: ${theme.fontSizes[3]}px;
  margin-top: ${theme.margin[0]}px;
  min-width: ${theme.length[6]}px;
  width: 100%;
  padding: ${theme.padding[1]}px;
  border: ${theme.border[0]}px solid ${theme.grey};
  & p:last-child {
    font-size: ${theme.fontSizes[3]}px;
    opacity: ${theme.opacity[0]};
  }
`

export const Text = styled.p`
  opacity: ${theme.opacity[1]};
  top: 0;
  right: 0;
  width: 100%;
  height: ${theme.length[7]}px;
`
