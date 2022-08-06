import { Button } from './styles'

// assets
import { ShoppingCart } from 'phosphor-react'

export function Cart() {
  return (
    <Button>
      <ShoppingCart size={22} weight="fill" color={'#C47F17'} />
    </Button>
  )
}
