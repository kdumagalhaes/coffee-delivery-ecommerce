import {
  createContext,
  useReducer,
  useContext,
  ReactNode,
  useEffect,
} from 'react'
import {
  CartActionModel,
  cartReducer,
} from '../../../store/reducers/cartReducer'
import { Product } from '../../../mocks/products'
interface CartProviderProps {
  children: ReactNode
}
export interface CartContextModel {
  productsList: Product[]
  addToCart: (product: Product) => void
  removeFromCart: (product: Product) => void
}

const initialState = {
  productsList: [],
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

  console.log('cartState.productsList = ', cartState)

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)
    localStorage.setItem('@coffee-delivery:cart-cartState-1.0.0', stateJSON)
  }, [cartState])

  const addToCart = (product: Product) => {
    const updatedProductsList = [...cartState.productsList, product]
    dispatch({
      type: CartActionModel.ADD_TO_CART,
      payload: {
        productsList: updatedProductsList,
      },
    })
  }

  const removeFromCart = (product: Product) => {
    const productsListWithoutDeletedOne = cartState.productsList.filter(
      (selectedProduct) => selectedProduct.id !== product.id,
    )
    dispatch({
      type: CartActionModel.REMOVE_FROM_CART,
      payload: {
        productsList: productsListWithoutDeletedOne,
      },
    })
  }

  const value = {
    productsList: cartState.productsList,
    addToCart,
    removeFromCart,
  }
  console.log('productsList = ', cartState.productsList)

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
