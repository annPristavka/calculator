import styled from 'styled-components'
import theme from '@/theme'

export const ButtonClear = styled.button`
  position: absolute;
  right: 0px;
  top: 40%;
  cursor: pointer;
  width: ${theme.length[4]}px;
  height: ${theme.length[9]}px;
  font-size: ${theme.fontSizes[0]}px;
  border: ${theme.border[0]}px solid ${theme.colors.grey};
  background-color: ${theme.white};
  border-radius: ${theme.borderRadius[0]}px;
`
