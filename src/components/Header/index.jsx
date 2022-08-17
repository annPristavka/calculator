import React from 'react'
import { Title, A, Container, Nav } from './components'
import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE_CLASS,
  HOME_PAGE_ROUTE_CLASS,
} from '@/constants/index'
import { PageLayoutHeader } from '@/layouts/index'

export default () => {
  return (
    <PageLayoutHeader>
      <Container>
        <div>
          <Title>Calculator App</Title>
        </div>
        <Nav>
          <A to={HOME_PAGE_ROUTE}>Home(FC)</A>
          <A to={SETTINGS_PAGE_ROUTE}>Settings(FC)</A>
          <A to={HOME_PAGE_ROUTE_CLASS}>Home(CC)</A>
          <A to={SETTINGS_PAGE_ROUTE_CLASS}>Settings(CC)</A>
        </Nav>
      </Container>
    </PageLayoutHeader>
  )
}
