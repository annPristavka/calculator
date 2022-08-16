import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import fontSizes from '../../theme'

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 50;
  font-family: 'Pathway Gothic One', sans-serif;
  letter-spacing: 0.3px;
`

export const A = styled(NavLink)`
  font-size: 17px;
  font-weight: 500;
  font-family: 'Pathway Gothic One', sans-serif;
  color: #fff;

  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 400px;
  width: 100%;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0px 25px;
  background-color: #2b2b2b;
  color: #fff;
`
