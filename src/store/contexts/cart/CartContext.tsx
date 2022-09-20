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
import { CoffeeTypes, Product } from '../../../mocks/products'
import produce from 'immer'
interface CartProviderProps {
  children: ReactNode
}
export interface CartContextModel {
  productsList: Product[]
  addToCart: (product: Product) => void
  removeFromCart: (product: Product) => void
  increaseProductQuantity: (productId: string) => void
  decreaseProductQuantity: (productId: string) => void
}

interface initialStateModel {
  productsList: Product[]
}

const initialState: initialStateModel = {
  productsList: [],
}

const CartContext = createContext({} as CartContextModel)

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState, () => {
    const storedStateAsJson = localStorage.getItem(
      '@coffee-delivery:cart-cartState-1.0.1',
    )
    if (storedStateAsJson) {
      return JSON.parse(storedStateAsJson)
    }
    return initialState
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)
    localStorage.setItem('@coffee-delivery:cart-cartState-1.0.1', stateJSON)
  }, [cartState])

  const addToCart = (product: Product) => {
    const isProductInCart = cartState.productsList.some(
      (item) => item.id === product.id,
    )

    const updatedProductsList = !isProductInCart
      ? [...cartState.productsList, product]
      : produce(cartState.productsList, (draft) => {
          const index = draft.findIndex((item) => item.id === product.id)
          draft[index]!.quantity++
        })

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

  const increaseProductQuantity = (productId: string) => {
    const productsListWithIncreasedQuantity = produce(
      cartState.productsList,
      (draft) => {
        const index = draft.findIndex((product) => product.id === productId)
        draft[index]!.quantity++
      },
    )

    dispatch({
      type: CartActionModel.INCREASE_PRODUCT_QUANTITY,
      payload: {
        productsList: productsListWithIncreasedQuantity,
      },
    })
  }

  const decreaseProductQuantity = (productId: string) => {
    const productsListWithDecreasedQuantity = produce(
      cartState.productsList,
      (draft) => {
        const index = draft.findIndex((product) => product.id === productId)
        draft[index].quantity > 1
          ? draft[index].quantity--
          : (draft[index].quantity = 1)
      },
    )

    dispatch({
      type: CartActionModel.DECREASE_PRODUCT_QUANTITY,
      payload: {
        productsList: productsListWithDecreasedQuantity,
      },
    })
  }

  const value = {
    productsList: cartState.productsList,
    addToCart,
    removeFromCart,
    increaseProductQuantity,
    decreaseProductQuantity,
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
