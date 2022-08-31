import React, { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

import PageLayout from '@/components/PageLayout'
import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
  HOME_PAGE_ROUTE_CLASS,
  SETTINGS_PAGE_ROUTE_CLASS,
} from '@/constants'

const HomePage = lazy(() => import('@/pages/Home'))
const HomeClass = lazy(() => import('@/pages/HomeClass'))
const SettingsClass = lazy(() => import('@/pages/SettingsClass'))
const Settings = lazy(() => import('@/pages/Settings'))

const App = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path={HOME_PAGE_ROUTE} element={<HomePage />} />
        <Route path={HOME_PAGE_ROUTE_CLASS} element={<HomeClass />} />
        <Route path={SETTINGS_PAGE_ROUTE} element={<Settings />} />
        <Route path={SETTINGS_PAGE_ROUTE_CLASS} element={<SettingsClass />} />
      </Routes>
    </PageLayout>
  )
}

export default App
