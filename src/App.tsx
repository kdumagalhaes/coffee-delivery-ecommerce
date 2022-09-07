import { GlobalStyles } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { Router } from './routes/Router'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './store/contexts/cart/CartContext'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CartProvider>
      <GlobalStyles />
      <ToastContainer autoClose={1600} position="bottom-right" />
    </ThemeProvider>
  )
}

export default App
