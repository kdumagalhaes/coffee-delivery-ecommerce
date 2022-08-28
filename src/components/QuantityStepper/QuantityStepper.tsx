import { useState } from 'react'
import useQuantityStepper from '../../contexts/quantity-stepper/QuantityStepperContext'
import { Button, Container, Steps } from './styles'
interface QuantityStepperProps {
  initialQuantity: number
}

export function QuantityStepper({ initialQuantity }: QuantityStepperProps) {
  const [step, setStep] = useState(initialQuantity)
  const {updateProductQuantity} = useQuantityStepper()
  const handleIncreaseQuantity = (): void => {
    setStep(step + 1)
    updateProductQuantity(step + 1)
  }

  const handleDecreaseQuantity = (): void => {
    if (step === 1 && step === 1) {
      return
    }
    setStep(step === 0 ? step : step - 1)
    updateProductQuantity(step === 0 ? step : step - 1)

  }

  return (
    <Container>
      <Button onClick={handleDecreaseQuantity}>-</Button>
      <Steps>{step}</Steps>
      <Button onClick={handleIncreaseQuantity}>+</Button>
    </Container>
  )
}
