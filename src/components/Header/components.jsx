import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import fontSizes from '../../theme'

export const Title = styled.h1`
  font-size: 22px;
  font-weight: 500;
  font-family: 'arial';
  letter-spacing: 0.3px;
`

export const A = styled(NavLink)`
  font-size: 22px;
  font-weight: 500;
  font-family: 'arial';
  color: #fff;
  letter-spacing: 0.3px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
  //border: 1px solid red;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-heigth: 100px;
  height: 70px;
  padding: 0px 25px;
  background-color: #2b2b2b;
  color: #fff;
`
