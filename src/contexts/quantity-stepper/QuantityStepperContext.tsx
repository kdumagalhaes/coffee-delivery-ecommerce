import {
  createContext,
  ReactNode,
  useContext,
  useReducer,
} from 'react'
import {
  quantityStepperReducer,
  QuantityStepperReducerActionKind,
} from '../../reducers/quantityStepperReducer'
import { Products } from '../../utils/products'
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

  const updateProductQuantity = ( quantity: number ) => {
    dispatch({
      type: QuantityStepperReducerActionKind.UPDATE_PRODUCT_QUANTITY,
      payload: {
        updatedQuantity: quantity
      },
    })
  }

  const QuantityStepperValue = {
    updatedQuantity: quantityStepperState.updatedQuantity,
    updateProductQuantity
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
