import { createContext, ReactNode, useContext, useReducer } from 'react'
import {
  quantityStepperReducer,
  QuantityStepperReducerActionKind,
} from '../../reducers/quantityStepperReducer'
interface QuantityStepperProviderProps {
  children: ReactNode
}
interface QuantityStepperContextKind {
  updateProductQuantity: (quantity: number) => void
  updatedQuantity: number
}

const initialState = {
  updatedQuantity: 1,
}

const QuantityStepperContext = createContext({} as QuantityStepperContextKind)

export const QuantityStepperProvider = ({
  children,
}: QuantityStepperProviderProps) => {
  const [quantityStepperState, dispatch] = useReducer(
    quantityStepperReducer,
    initialState,
  )

  const updateProductQuantity = (quantity: number) => {
    dispatch({
      type: QuantityStepperReducerActionKind.UPDATE_PRODUCT_QUANTITY,
      payload: {
        updatedQuantity: quantity,
      },
    })
  }

  const updatePrice = (price: number, quantity: number) => {
    let total = 0
    total += product.price * product.quantity

    dispatch({
      type: CartActionKind.UPDATE_PRICE,
      payload: {
        total,
      },
    })
  }

  const QuantityStepperValue = {
    updatedQuantity: quantityStepperState.updatedQuantity,
    updateProductQuantity,
    updatePrice,
  }

  return (
    <QuantityStepperContext.Provider value={QuantityStepperValue}>
      {children}
    </QuantityStepperContext.Provider>
  )
}

const useQuantityStepper = () => {
  const context = useContext(QuantityStepperContext)

  if (context === undefined) {
    throw new Error(
      'useQuantityStepper must be used within QuantityStepperContext',
    )
  }
  return context
}

export default useQuantityStepper
