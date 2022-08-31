import React, { lazy, Suspense } from 'react'

import Loader from '@/components/Loader'
import ErrorBoundary from '@/components/ErrorBoundary'

import { ContainerApp } from './styled'

const Header = lazy(() => import('@/components/Header/index'))

const PageLayout = ({ children }) => {
  return (
    <ContainerApp>
      <Suspense fallback={<Loader />}>
        <ErrorBoundary>
          <Header />
          {children}
        </ErrorBoundary>
      </Suspense>
    </ContainerApp>
  )
}

export default PageLayout
