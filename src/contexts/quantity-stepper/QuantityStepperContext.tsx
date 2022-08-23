import { createContext, ReactNode, useContext, useState } from 'react'

interface QuantityStepperContext {
  quantity: number
  setQuantity: (quantity: number) => void
}

interface QuantityStepperProviderProps {
  children: ReactNode
}

const QuantityStepperContext = createContext({} as QuantityStepperContext)

const useQuantityStepperContext = (): QuantityStepperContext => {
  const context = useContext(QuantityStepperContext)
  return context
}

const QuantityStepperProvider = ({
  children,
}: QuantityStepperProviderProps) => {
  const quantityStepperInitialValue = 1
  const [quantity, setQuantity] = useState(quantityStepperInitialValue)

  const QuantityStepperValue = {
    quantity,
    setQuantity,
  }

  return (
    <QuantityStepperContext.Provider value={QuantityStepperValue}>
      {children}
    </QuantityStepperContext.Provider>
  )
}

export { useQuantityStepperContext, QuantityStepperProvider }
