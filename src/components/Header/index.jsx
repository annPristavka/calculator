import React from 'react'

import { PageLayoutHeader } from '@/layouts/index'
import { routesForHeader } from '@/constants/index'

import {
    Title,
    Link,
    ContainerWrapper,
    Navigation,
  } from './styled'

const Header = () => {
  return (
    <PageLayoutHeader>
      <ContainerWrapper>
        <Title>Calculator App</Title>
        <Navigation>
          {routesForHeader.map(({ route, value }) => (
            <Link key={route} to={route}>
              {value}
            </Link>
          ))}
        </Navigation>
      </ContainerWrapper>
    </PageLayoutHeader>
  )
}

export default Header
