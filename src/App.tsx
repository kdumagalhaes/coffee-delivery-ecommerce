import { GlobalStyles } from './styles/GlobalStyles'
import {ThemeProvider} from 'styled-components'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Salut !</h1>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
