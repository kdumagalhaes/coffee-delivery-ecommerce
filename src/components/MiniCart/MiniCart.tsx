import { CartButton, ItemQuantity } from './styles'

// assets
import { ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext, CartContextType } from '../../contexts/CartContext'

export function MiniCart() {

  const {productList} = useContext(CartContext) as CartContextType
  console.log("productList in MiniCart = ", productList)
  const productListQuantity = productList.length


  return (
    <CartButton href="/checkout">
      {productListQuantity === 0 ? '' : <ItemQuantity>{productListQuantity}</ItemQuantity>}
      <ShoppingCart size={22} weight="fill" color={'#C47F17'} />
    </CartButton>
  )
}
