import React from 'react'

export const theme = [
  { id: 1, name: 'light', value: 'Light Theme' },
  { id: 2, name: 'dark', value: 'Dark Theme' },
]

const ThemeContext = React.createContext()

export default ThemeContext
