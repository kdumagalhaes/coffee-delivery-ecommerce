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
import useCart from '../../contexts/cart/CartContext'

// assets
import { ShoppingCartSimple } from 'phosphor-react'

// thumbs
import Arabe from '../../assets/images/coffee/arabe.svg'
import CafeComLeite from '../../assets/images/coffee/cafe-com-leite.svg'
import CafeGelado from '../../assets/images/coffee/cafe-gelado.svg'
import Capuccino from '../../assets/images/coffee/capuccino.svg'
import ChocolateQuente from '../../assets/images/coffee/chocolate-quente.svg'
import Cubano from '../../assets/images/coffee/cubano.svg'
import ExpressoAmericano from '../../assets/images/coffee/expresso-americano.svg'
import ExpressoCremoso from '../../assets/images/coffee/expresso-cremoso.svg'
import Expresso from '../../assets/images/coffee/expresso.svg'
import Havaiano from '../../assets/images/coffee/havaiano.svg'
import Irlandes from '../../assets/images/coffee/irlandes.svg'
import Latte from '../../assets/images/coffee/latte.svg'
import Machiatto from '../../assets/images/coffee/machiatto.svg'
import Mochaccino from '../../assets/images/coffee/mochaccino.svg'

interface ProductSummaryProps extends Products {}

export function ProductSummary({
  name,
  image,
  types,
  description,
  price,
}: ProductSummaryProps) {
  const convertedPrice = formatPrice(price)
  const { addToCart, products } = useCart()

  const handleAddToCart = (): void => {
    const product = { name, price }

    addToCart(product)
  }

  let imageSrc = ''

  switch (image) {
    case 'coffee-1':
      imageSrc = Expresso
      break
    case 'coffee-2':
      imageSrc = ExpressoAmericano
      break
    case 'coffee-3':
      imageSrc = ExpressoCremoso
      break
    case 'coffee-4':
      imageSrc = CafeGelado
      break
    case 'coffee-5':
      imageSrc = CafeComLeite
      break
    case 'coffee-6':
      imageSrc = Latte
      break
    case 'coffee-7':
      imageSrc = Capuccino
      break
    case 'coffee-8':
      imageSrc = Machiatto
      break
    case 'coffee-9':
      imageSrc = Mochaccino
      break
    case 'coffee-10':
      imageSrc = ChocolateQuente
      break
    case 'coffee-11':
      imageSrc = Cubano
      break
    case 'coffee-12':
      imageSrc = Havaiano
      break
    case 'coffee-13':
      imageSrc = Arabe
      break
    case 'coffee-14':
      imageSrc = Irlandes
      break
    default:
      break
  }

  return (
    <Container>
      <ContentContainer>
        <img className="image" src={imageSrc} alt={name} />
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
          <span className="price">{convertedPrice}</span>
        </Pricing>
        <QuantityStepper />
        <AddToCartButton onClick={handleAddToCart}>
          <ShoppingCartSimple size={22} weight="fill" color="#F3F2F2" />
        </AddToCartButton>
      </PricingAndAddToCart>
    </Container>
  )
}
