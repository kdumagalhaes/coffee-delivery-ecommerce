import '@testing-library/jest-dom'
import { describe, it } from 'vitest'
import { screen, render } from '@testing-library/react'
import { MiniCart } from '../MiniCart'
import { CartProvider } from '../../../store/contexts/cart/CartContext'

const MockMiniCart = () => {
  return (
    <CartProvider>
      <MiniCart />
    </CartProvider>
  )
}

describe('MiniCart', () => {
  it('should render properly', () => {
    render(<MockMiniCart />)
    const cartButton = screen.getByTestId('cart-button-test')
    expect(cartButton).toBeInTheDocument()
  })
})
