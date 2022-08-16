import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'

import Application from './components/App/index'
import GlobalStyles from './globalStyles'
import theme from './theme'
import { ThemeProvider } from 'styled-components'

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Application />
      <GlobalStyles />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
)
