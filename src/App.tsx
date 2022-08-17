import { GlobalStyles } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { Router } from './routes/Router'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './contexts/CartContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      </CartProvider>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
