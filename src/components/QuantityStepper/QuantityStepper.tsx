import { useState } from 'react'
import useCart from '../../store/contexts/cart/CartContext'
import { Button, Container, Steps } from './styles'
interface QuantityStepperProps {
  productId: string
  quantity: number
}

export function QuantityStepper({ productId, quantity }: QuantityStepperProps) {
  const { increaseProductQuantity, decreaseProductQuantity } = useCart()
  const [quantityClicked, setQuantityClicked] = useState(1)

  const handleIncreaseQuantity = (): void => {
    setQuantityClicked(quantityClicked + 1)
    increaseProductQuantity(productId)
  }

  const handleDecreaseQuantity = (): void => {
    setQuantityClicked(
      quantityClicked === 1 ? quantityClicked : quantityClicked - 1,
    )
    decreaseProductQuantity(productId)
  }

  return (
    <Container>
      <Button onClick={handleDecreaseQuantity}>-</Button>
      <Steps>{quantity}</Steps>
      <Button onClick={handleIncreaseQuantity}>+</Button>
    </Container>
  )
}
