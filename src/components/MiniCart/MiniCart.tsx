import { CartButton, ItemQuantity } from './styles'
import useCart from '../../store/contexts/cart/CartContext'

// assets
import { ShoppingCart } from 'phosphor-react'

export function MiniCart() {
  const { cartItems } = useCart()

  return (
    <CartButton href="/checkout">
      {cartItems.length === 0 ? (
        ''
      ) : (
        <ItemQuantity>{cartItems.length}</ItemQuantity>
      )}
      <ShoppingCart size={22} weight="fill" color={'#C47F17'} />
    </CartButton>
  )
}
