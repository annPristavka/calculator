import React, { lazy, Suspense, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
  HOME_PAGE_ROUTE_CLASS,
  SETTINGS_PAGE_ROUTE_CLASS,
} from '@/constants/index'

import Loader from '@Components/Loader/index'
import { ContainerApp } from './components'
import ErrorBoundary from '@Components/ErrorBoundary/ErrorBoundary'

const HomePage = lazy(() => import('@/pages/Home/index'))
const HomeClass = lazy(() =>
  import('@/pages/HomeClass/index'),
)
const SettingsClass = lazy(() =>
  import('@/pages/SettingsClass/index'),
)
const Header = lazy(() => import('../Header/index'))
const Settings = lazy(() =>
  import('@/pages/Settings/index'),
)

const App = () => {
  const [value, setValue] = useState('Light Theme')
  return (
    <ErrorBoundary>
      <ContainerApp>
        <Suspense fallback={<Loader />}>
          <Header />
          <Routes>
            <Route
              exact
              path={HOME_PAGE_ROUTE}
              element={<HomePage value={value} />}>
              {' '}
            </Route>{' '}
            <Route
              exact
              path={HOME_PAGE_ROUTE_CLASS}
              element={<HomeClass value={value} />}>
              {' '}
            </Route>{' '}
            <Route
              exact
              path={SETTINGS_PAGE_ROUTE}
              element={
                <Settings
                  setValue={setValue}
                  value={value}
                />
              }>
              {' '}
            </Route>{' '}
            <Route
              exact
              path={SETTINGS_PAGE_ROUTE_CLASS}
              element={
                <SettingsClass
                  setValue={setValue}
                  value={value}
                />
              }>
              {' '}
            </Route>{' '}
          </Routes>{' '}
        </Suspense>{' '}
      </ContainerApp>{' '}
    </ErrorBoundary>
  )
}

export default App
