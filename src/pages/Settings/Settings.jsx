import React, { useState, useEffect } from 'react'

import { theme } from '@/constants'
import {
  localeStorageSetTheme,
  localeStorageGetTheme,
} from '@/utils/localeStorage'

import {
    WrapperContent,
    Container,
    ChoiseTheme,
    Button,
    Title,
  } from './styled'

const Settings = () => {
  const [themeCurrent, setTheme] = useState()

  const handleChange = (e) => {
    localeStorageSetTheme(e.target.value)
    setTheme(e.target.value)
  }

  const getTheme = () => {
    const theme = localeStorageGetTheme()
    setTheme(theme)
  }

  useEffect(() => {
    getTheme()
    return () => getTheme()
  }, [themeCurrent])

  return (
    <Container backgroundTheme={themeCurrent}>
      <WrapperContent>
        <Title>Settings</Title>
        <ChoiseTheme
          value={themeCurrent}
          onChange={handleChange}>
          {theme.map(({ id, value }) => (
            <option key={id}>{value}</option>
          ))}
        </ChoiseTheme>
        <Button>Clear All History</Button>
      </WrapperContent>
    </Container>
  )
}

export default Settings
