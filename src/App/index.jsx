import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from '../constants/index'

import Loader from '../components/Loader/index'
import { ContainerApp } from './components'
import ErrorBaundary from '../components/ErrorBoundary/ErrorBoundary'

const HomePage = lazy(() => import('../pages/Home/index'))
const Header = lazy(() =>
  import('../components/Header/index'),
)
const Settings = lazy(() =>
  import('../pages/Settings/index'),
)

export default () => (
  <ErrorBaundary>
    <ContainerApp>
      <Suspense fallback={<Loader />}>
        <Header />
        <Routes>
          <Route
            exact
            path={HOME_PAGE_ROUTE}
            element={<HomePage />}></Route>
          <Route
            exact
            path={SETTINGS_PAGE_ROUTE}
            element={<Settings />}></Route>
        </Routes>
      </Suspense>
    </ContainerApp>
  </ErrorBaundary>
)
