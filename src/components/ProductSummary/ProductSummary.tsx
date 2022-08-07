import {
  Container,
  PricingAndAddToCart,
  ContentContainer,
  Pricing,
} from './styles'

// utils
import { Products } from '../../utils/products'
import { formatPrice } from '../../utils/format'
import { QuantityStepper } from '../QuantityStepper/QuantityStepper'

interface ProductSummaryProps extends Products {}

export function ProductSummary({
  name,
  image,
  type,
  description,
  price,
}: ProductSummaryProps) {
  const convertedPrice = formatPrice(price)

  return (
    <Container>
      <ContentContainer>
        <img className="image" src={image} alt={name} />
        <span className="type">{type}</span>
        <strong className="name">{name}</strong>
        <p className="description">{description}</p>
      </ContentContainer>
      <PricingAndAddToCart>
        <Pricing>
          <span className="currency">R$</span>
          <span className="price">{convertedPrice}</span>
        </Pricing>
          <QuantityStepper />
      </PricingAndAddToCart>
    </Container>
  )
}
