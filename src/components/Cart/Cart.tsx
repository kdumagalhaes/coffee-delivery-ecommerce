import { Button, ItemQuantity } from './styles'

// assets
import { ShoppingCart } from 'phosphor-react'

export function Cart() {
  return (
    <Button>
      <ItemQuantity>
        3
      </ItemQuantity>
      <ShoppingCart size={22} weight="fill" color={'#C47F17'} />
    </Button>
  )
}
