import { createContext, useState, ReactNode, useReducer } from 'react'
import { Products } from '../utils/products'

export type CartContextType = {
  productList: Products[]
  addToCart: (product: Products) => void
  removeItem: (id: string) => void
}

interface CartProviderProps {
  children: ReactNode
}

interface ProductListState {
  productList: Products[]
}

export const CartContext = createContext({} as CartContextType)

export const CartProvider = ({ children }: CartProviderProps) => {
  const [productListState, dispatch] = useReducer(
    (state: ProductListState, action: any) => {
      console.log('state = ', state)
      console.log('action = ', action)

      if (action.type === 'ADD_TO_CART') {
        return {
          ...state,
          productList: [...state.productList, action.payload],
        }
      }
      return state
    },
    {
      productList: [],
    },
  )

  const { productList } = productListState

  const addToCart = (product: Products) => {
    const selectedProduct: Products = {
      description: product.description,
      id: product.id,
      image: product.image,
      inventory: product.inventory,
      name: product.name,
      price: product.price,
      types: product.types,
    }
    console.log('selectedProduct = ', selectedProduct)
    dispatch({
      type: 'ADD_TO_CART',
      payload: { ...selectedProduct },
    })
  }

  const removeItem = (id: string) => {
    const productListWithoutDeletedOne = productList.filter((product) => {
      return product.id !== id
    })
    dispatch({
      type: 'REMOVE_ITEM',
      payload: productListWithoutDeletedOne,
    })
  }

  return (
    <CartContext.Provider value={{ addToCart, removeItem, productList }}>
      {children}
    </CartContext.Provider>
  )
}
