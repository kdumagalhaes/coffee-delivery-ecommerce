import useCart from '../../store/contexts/cart/CartContext'
import { Button, Container, Steps } from './styles'
interface QuantityStepperProps {
  productId: string
  quantity: number
  setQuantity: (quantity: number) => void
}

export function QuantityStepper({
  productId,
  quantity,
  setQuantity,
}: QuantityStepperProps) {
  const { increaseProductQuantity, decreaseProductQuantity } = useCart()

  const handleIncreaseQuantity = (): void => {
    setQuantity(quantity + 1)
    increaseProductQuantity(productId)
  }

  const handleDecreaseQuantity = (): void => {
    setQuantity(quantity === 1 ? quantity : quantity - 1)
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
