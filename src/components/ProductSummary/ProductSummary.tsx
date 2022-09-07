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
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
}: ProductSummaryProps) {
  const formatedPrice = formatPrice(price)
  const { addToCart } = useCart()
  const [productQuantity, setProductQuantity] = useState(1)

  const successNotification = () =>
    toast.success(`${name} adicionado ao carrinho!`)

  const handleAddToCart = (): void => {
    const product = {
      name,
      price,
      image,
      types,
      description,
      id,
      inventory,
    }

    addToCart(product, productQuantity)
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
        <QuantityStepper
          setQuantity={setProductQuantity}
          productId={id}
          quantity={productQuantity}
        />
        <AddToCartButton onClick={handleAddToCart}>
          <ShoppingCartSimple size={22} weight="fill" color="#F3F2F2" />
        </AddToCartButton>
      </PricingAndAddToCart>
      <ToastContainer autoClose={1000} />
    </Container>
  )
}
