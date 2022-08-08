import { CartButton, ItemQuantity } from './styles'

// assets
import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'

export function Cart() {
  const [itemQuantity, setItemQuantity] = useState(0)
  return (
    <CartButton href="/checkout">
      {itemQuantity === 0 ? '' : <ItemQuantity>{itemQuantity}</ItemQuantity>}
      <ShoppingCart size={22} weight="fill" color={'#C47F17'} />
    </CartButton>
  )
}
