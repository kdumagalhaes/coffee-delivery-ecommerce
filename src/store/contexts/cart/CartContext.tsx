import {
  createContext,
  useReducer,
  useContext,
  ReactNode,
  useEffect,
} from 'react'
import {
  cartReducer,
  CartActionKind,
} from '../../../store/reducers/cartReducer'
import { Product } from '../../../mocks/products'
interface CartProviderProps {
  children: ReactNode
}

export interface CartItem {
  quantity: number
  product: Product
}

export interface CartContextModel {
  cartItems: CartItem[]
  addToCart: (product: Product, quantity: number) => void
  removeFromCart: (product: Product) => void
  updateItemQuantity: (quantity: number, id: string) => void
}

const initialState = {
  cartItems: [],
}

const CartContext = createContext({} as CartContextModel)

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

  const addToCart = (product: Product, quantity: number) => {
    const updatedCart: CartItem[] = [
      ...cartState.cartItems,
      { quantity, product },
    ]
    updateTotalPrice(updatedCart)
    dispatch({
      type: CartActionKind.ADD_TO_CART,
      payload: {
        cartItems: updatedCart,
      },
    })
  }

  const removeFromCart = (product: Product) => {
    const updatedCartWithoutDeletedProduct = cartState.cartItems.filter(
      (currentProduct: CartItem) => currentProduct.product.id !== product.id,
    )
    updateTotalPrice(updatedCartWithoutDeletedProduct)
    dispatch({
      type: CartActionKind.REMOVE_FROM_CART,
      payload: {
        cartItems: updatedCartWithoutDeletedProduct,
      },
    })
  }

  const updateTotalPrice = (products: CartItem[]) => {
    const initialValue = 0

    const totalCart = products.reduce(
      (previousValue, currentValue) =>
        previousValue + currentValue.product.price,
      initialValue,
    )

    dispatch({
      type: CartActionKind.UPDATE_PRICE,
      payload: {
        totalCart,
      },
    })
  }

  // acessar o cartItems
  // encontrar produto pelo ID
  // alterar a quantidade

  const updateItemQuantity = (quantity: number, id: string) => {
    const totalQuantity = quantity

    dispatch({
      type: CartActionKind.UPDATE_QUANTITY,
      payload: {
        totalQuantity,
      },
    })
  }

  const value = {
    cartItems: cartState.cartItems,
    updateItemQuantity,
    addToCart,
    removeFromCart,
  }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

const useCart = () => {
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error('useCart must be used within CartContext')
  }
  return context
}

export default useCart
