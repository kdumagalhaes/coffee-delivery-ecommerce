import {
  Container,
  PricingAndAddToCart,
  ContentContainer,
  Pricing,
  AddToCartButton,
} from './styles'

// utils
import { Products } from '../../utils/products'
import { formatPrice } from '../../utils/format'
import { QuantityStepper } from '../QuantityStepper/QuantityStepper'

// assets
import { ShoppingCartSimple } from 'phosphor-react'

interface ProductSummaryProps extends Products {}

export function ProductSummary({
  name,
  image,
  types,
  description,
  price,
  id
}: ProductSummaryProps) {
  const convertedPrice = formatPrice(price)

  return (
    <Container>
      <ContentContainer>
        <img className="image" src={image} alt={name} />
        <div className="types">
        {types.map((type) => {
          return <span key={id} className="type">{type}</span>
        })}
        </div>
        <strong className="name">{name}</strong>
        <p className="description">{description}</p>
      </ContentContainer>
      <PricingAndAddToCart>
        <Pricing>
          <span className="currency">R$</span>
          <span className="price">{convertedPrice}</span>
        </Pricing>
        <QuantityStepper />
        <AddToCartButton>
          <ShoppingCartSimple size={22} weight="fill" color="#F3F2F2" />
        </AddToCartButton>
      </PricingAndAddToCart>
    </Container>
  )
}
