import {
  createContext,
  useReducer,
  useContext,
  ReactNode,
  useEffect,
} from 'react'
import { cartReducer, CartActionKind } from '../../reducers/cartReducer'
import { Products } from '../../utils/products'

interface CartProviderProps {
  children: ReactNode
}

const initialState = {
  total: 0,
  products: [],
}

interface initialStateKind {
  total: number
  products: Products[]
  addToCart: (product: Products) => void
  removeFromCart: (product: Products) => void
}

const CartContext = createContext({} as initialStateKind)

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState, () => {
    const storedStateAsJson = localStorage.getItem(
      '@coffee-delivery:cart-cartState-1.0.0',
    )

    if (storedStateAsJson) {
      return JSON.parse(storedStateAsJson)
    }
    return initialState
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@coffee-delivery:cart-cartState-1.0.0', stateJSON)
  }, [cartState])

  const addToCart = (product: Products[]) => {
    const updatedCart = cartState.products.concat(product)
    updatePrice(updatedCart)
    dispatch({
      type: CartActionKind.ADD_TO_CART,
      payload: {
        products: updatedCart,
      },
    })
  }

  const removeFromCart = (product: Products) => {
    const updatedCartWithoutDeletedProduct = cartState.products.filter(
      (currentProduct: Products) => currentProduct.name !== product.name,
    )
    updatePrice(updatedCartWithoutDeletedProduct)
    dispatch({
      type: CartActionKind.REMOVE_FROM_CART,
      payload: {
        products: updatedCartWithoutDeletedProduct,
      },
    })
  }

  const updatePrice = (products: Products[]) => {
    let total = 0
    products.forEach((product) => (total += product.price))
    console.log('total inside updatePrice = ', total)
    dispatch({
      type: CartActionKind.UPDATE_PRICE,
      payload: {
        total,
      },
    })
  }

  const value = {
    total: cartState.total,
    products: cartState.products,
    addToCart,
    removeFromCart,
  }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

const useCart = () => {
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error('useCart must be used within ShopContext')
  }
  return context
}

export default useCart
