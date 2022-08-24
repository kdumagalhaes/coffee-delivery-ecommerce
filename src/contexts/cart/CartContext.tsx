import {
  createContext,
  useReducer,
  useContext,
  ReactNode,
  useEffect,
} from 'react'
import { initialState, cartReducer } from '../../reducers/cartReducer'
import { Products } from '../../utils/products'

interface CartProviderProps {
  children: ReactNode
}

interface CartContext {
  total: number
  products: Products
  addToCart: (product: Products) => void
  removeFromCart: (product: Products) => void
  updatePrice: (product: Products) => void
}

const CartContext = createContext(initialState)

export const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, initialState, () => {
    const storedStateAsJson = localStorage.getItem(
      '@coffee-delivery:cart-state-1.0.0',
    )

    if (storedStateAsJson) {
      return JSON.parse(storedStateAsJson)
    }
    return initialState
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(state)

    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [state])

  const addToCart = (product: Products[]) => {
    const updatedCart = state.products.concat(product)
    console.log('updatedCart = ', updatedCart)
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
    console.log("total inside updatePrice = ", total)
    dispatch({
      type: 'UPDATE_PRICE',
      payload: {
        total
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

const useCart = (): CartContext => {
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error('useCart must be used within ShopContext')
  }

  return context
}

export default useCart
