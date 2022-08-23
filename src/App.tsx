import { GlobalStyles } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { Router } from './routes/Router'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './contexts/cart/CartContext'
import { QuantityStepperProvider } from './contexts/quantity-stepper/QuantityStepperContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <QuantityStepperProvider>
        <CartProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </CartProvider>
      </QuantityStepperProvider>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
