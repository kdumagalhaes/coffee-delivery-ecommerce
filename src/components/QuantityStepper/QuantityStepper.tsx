import { useState } from 'react'
import { Button, Container, Quantity } from './styles'

export function QuantityStepper() {
  const [quantity, setQuantity] = useState(1)

  const handleIncreaseQuantity = (): void => {
    setQuantity(quantity + 1)
  }

  const handleDecreaseQuantity = (): void => {
    if (quantity === 1) {
      return
    }
    setQuantity(quantity - 1)
  }

  return (
    <Container>
      <Button onClick={handleDecreaseQuantity}>-</Button>
      <Quantity>{quantity}</Quantity>
      <Button onClick={handleIncreaseQuantity}>+</Button>
    </Container>
  )
}
