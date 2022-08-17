import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'

import Application from './components/App/index'
import GlobalStyles from './globalStyles'
import { Provider } from 'react-redux'
import theme from './theme'
import { ThemeProvider } from 'styled-components'
import { store } from '@/store'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Application />
        <GlobalStyles />
      </ThemeProvider>{' '}
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
)
