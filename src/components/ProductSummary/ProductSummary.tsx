import {
  Container,
  PricingAndAddToCart,
  ContentContainer,
  Pricing,
  AddToCartButton,
} from './styles'

// utils
import { Product } from '../../mocks/products'
import { formatPrice } from '../../utils/format'
import { QuantityStepper } from '../QuantityStepper/QuantityStepper'
import useCart from '../../store/contexts/cart/CartContext'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// assets
import { ShoppingCartSimple } from 'phosphor-react'

import { useState } from 'react'

interface ProductSummaryProps extends Product {}

export function ProductSummary({
  name,
  image,
  types,
  description,
  price,
  id,
  inventory,
  quantity,
}: ProductSummaryProps) {
  const formatedPrice = formatPrice(price)
  const { addToCart } = useCart()
  const [productQuantity, setProductQuantity] = useState(quantity)

  const textQuantity = productQuantity > 1 ? 'adicionados' : 'adicionado'

  const successNotification = () =>
    toast.success(`${productQuantity} ${name} ${textQuantity} ao carrinho!`)

  const handleAddToCart = (): void => {
    const product = {
      name,
      price,
      image,
      types,
      description,
      id,
      inventory,
      quantity: productQuantity,
    }

    addToCart(product)
    successNotification()
  }

  return (
    <Container>
      <ContentContainer>
        <img className="image" src={image} alt={name} />
        <div className="types">
          {types.map((type, index) => {
            return (
              <span key={index} className="type">
                {type}
              </span>
            )
          })}
        </div>
        <strong className="name">{name}</strong>
        <p className="description">{description}</p>
      </ContentContainer>
      <PricingAndAddToCart>
        <Pricing>
          <span className="currency">R$</span>
          <span className="price">{formatedPrice}</span>
        </Pricing>
        <QuantityStepper productId={id} quantity={productQuantity} />
        <AddToCartButton onClick={handleAddToCart}>
          <ShoppingCartSimple size={22} weight="fill" color="#F3F2F2" />
        </AddToCartButton>
      </PricingAndAddToCart>
    </Container>
  )
}
