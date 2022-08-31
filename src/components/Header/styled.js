import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import theme from '@/theme'

export const Title = styled.h1`
  font-size: ${theme.fontSizes[3]}px;
  font-weight: ${theme.fontWeight[0]};
  font-family: ${theme.font};
  letter-spacing: ${theme.letterSpacing[0]}px;
`

export const Link = styled(NavLink)`
  font-size: ${theme.fontSizes[10]}px;
  font-weight: ${theme.fontWeight[0]};
  font-family: ${theme.font};
  color: ${theme.colors.white};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`
export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: ${theme.length[8]}px;
  width: 100%;
`

export const ContainerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${theme.length[9]}px;
  padding: 0px ${theme.padding[2]}px;
  background-color: ${theme.colors.dark};
  color: ${theme.colors.white};
`
