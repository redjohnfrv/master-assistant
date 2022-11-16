import React from 'react'
import './assets/font/font.css'
import {Layout} from './layouts'
import {Screen} from './screen/Screen'
import {ViewportProvider} from './providers'
import { GlobalStyle } from './assets/globalStyles/GlobalStyle'
import {ThemeProvider} from 'styled-components'
import {theme} from './assets/theme'

function App() {
  return (
    <ViewportProvider>
      <GlobalStyle />
      <ThemeProvider theme={theme.default}>
        <Layout>
          <Screen/>
        </Layout>
      </ThemeProvider>
    </ViewportProvider>
  )
}

export default App
