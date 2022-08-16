import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'

import Application from './components/App/index'
import GlobalStyles from './globalStyles'
import ThemeContext, { theme } from './context'

ReactDOM.render(
  <BrowserRouter>
    <ThemeContext.Provider value={theme}>
      <Application />
      <GlobalStyles />
    </ThemeContext.Provider>
  </BrowserRouter>,
  document.getElementById('root'),
)
