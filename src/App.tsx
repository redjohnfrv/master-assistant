import {useState} from 'react'
import './assets/font/font.css'
import {Screen} from './screen'
import {Layout} from './layout'
import {ViewportProvider} from './providers'
import {GlobalStyle} from './assets/globalStyles/GlobalStyle'
import {ThemeProvider} from 'styled-components'
import {theme} from './assets/theme'
import {useForm} from 'react-hook-form'

function App() {
  const {register, handleSubmit} = useForm({
    defaultValues: {
      timestamp: 0,
    }
  })

  const [timestamp, setTimestamp] = useState(0)
  const onTimerSubmit = handleSubmit(value => {
    setTimestamp(Number(value.timestamp))
  })

  return (
    <ViewportProvider>
      <GlobalStyle/>
      <ThemeProvider theme={theme.default}>
        <Layout timestamp={timestamp}>
          <Screen register={register} onTimerSubmit={onTimerSubmit}/>
        </Layout>
      </ThemeProvider>
    </ViewportProvider>
  )
}

export default App
