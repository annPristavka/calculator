import React from 'react'
import { Title, A, Container, Nav } from './components'
import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from '../../constants/index'
import { PageLayoutHeader } from '../../layouts/index'

export default () => {
  return (
    <PageLayoutHeader>
      <Container>
        <div>
          <Title>Calculator App</Title>
        </div>
        <Nav>
          <A to={HOME_PAGE_ROUTE}>Home</A>
          <A to={SETTINGS_PAGE_ROUTE}>Settings</A>
        </Nav>
      </Container>
    </PageLayoutHeader>
  )
}
