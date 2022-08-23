import { createContext, useReducer, useContext, ReactNode } from 'react'
import { initialState, cartReducer } from '../../reducers/cartReducer'
import {Products} from '../../utils/products'

const CartContext = createContext(initialState)

interface CartProviderProps {
  children: ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addToCart = (product: Products[]) => {
    const updatedCart = state.products.concat(product)
    console.log("updatedCart = ", updatedCart)
    updatePrice(updatedCart)
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        products: updatedCart,
      },
    })
  }

  const removeFromCart = (product: Products) => {
    const updatedCartWithoutDeletedProduct = state.products.filter(
      (currentProduct: Products) => currentProduct.name !== product.name,
    )
    updatePrice(updatedCartWithoutDeletedProduct)
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        products: updatedCartWithoutDeletedProduct,
      },
    })
  }

  const updatePrice = (products: Products[]) => {
    let total = 0
    products.forEach((product) => (total += product.price))

    dispatch({
      type: 'UPDATE_PRICE',
      payload: {
        total,
      },
    })
  }

  const value = {
    total: state.total,
    products: state.products,
    addToCart,
    removeFromCart,
  }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

const useCart = (): any => {
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error('useCart must be used within ShopContext')
  }

  return context
}

export default useCart