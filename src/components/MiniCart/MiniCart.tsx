import { CartButton, ItemQuantity } from './styles'
import useCart from '../../contexts/cart/CartContext'

// assets
import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'

export function MiniCart() {
  const { products } = useCart()

  return (
    <CartButton href="/checkout">
      {products.length === 0 ? (
        ''
      ) : (
        <ItemQuantity>{products.length}</ItemQuantity>
      )}
      <ShoppingCart size={22} weight="fill" color={'#C47F17'} />
    </CartButton>
  )
}
