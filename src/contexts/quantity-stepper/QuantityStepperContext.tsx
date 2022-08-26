import { createContext, ReactNode, useContext, useState } from 'react'

interface QuantityStepperContextKind {
  quantity: number
  setQuantity: (quantity: number) => void
}

interface QuantityStepperProviderProps {
  children: ReactNode
}

const QuantityStepperContext = createContext({} as QuantityStepperContextKind)

const useQuantityStepperContext = (): QuantityStepperContextKind => {
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
