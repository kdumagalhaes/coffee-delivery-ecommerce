import { CartButton, ItemQuantity } from './styles'
import useCart from '../../store/contexts/cart/CartContext'

// assets
import { ShoppingCart } from 'phosphor-react'

export function MiniCart() {
  const { productsList } = useCart()
  const arr = []
  return (
    <CartButton data-testid="cart-button-test" href="/checkout">
      {productsList.length === 0 ? (
        ''
      ) : (
        <ItemQuantity>{productsList.length}</ItemQuantity>
      )}
      <ShoppingCart size={22} weight="fill" color={'#C47F17'} />
    </CartButton>
  )
}
