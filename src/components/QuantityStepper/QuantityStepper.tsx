import { useState } from 'react'
import { Button, Container, Steps } from './styles'
import { useQuantityStepperContext } from '../../contexts/quantity-stepper/QuantityStepperContext'

export function QuantityStepper() {
  const { setQuantity, quantity } = useQuantityStepperContext()
  const [step, setStep] = useState(1)

  const handleIncreaseQuantity = (): void => {
    setStep(step + 1)
    setQuantity(quantity + 1)
  }

  const handleDecreaseQuantity = (): void => {
    if (step === 1 && quantity === 1) {
      return
    }
    setStep(step === 0 ? step : step - 1)
    setQuantity(quantity === 0 ? quantity : quantity - 1)
  }

  return (
    <Container>
      <Button onClick={handleDecreaseQuantity}>-</Button>
      <Steps>{step}</Steps>
      <Button onClick={handleIncreaseQuantity}>+</Button>
    </Container>
  )
}
