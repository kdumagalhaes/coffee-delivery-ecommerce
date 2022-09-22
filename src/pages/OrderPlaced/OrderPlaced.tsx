import { Container } from './styles'

// assets
import OrderConfirmationIllustration from '../../assets/images/order-confirmation-illustration.svg'
import DeliveryAddressIcon from '../../assets/icons/map-circle.svg'
import DeliverySLAIcon from '../../assets/icons/watch-circle.svg'
import DeliveryInstallmentIcon from '../../assets/icons/currency-circle.svg'
import useCart from '../../store/contexts/cart/CartContext'

export function OrderPlaced() {
  const { checkoutData } = useCart()
  console.log('checkoutData = ', checkoutData)

  const nomeDaRua = 'Rua João Daniel Martinelli'
  const numeroDoLogradouro = '102'
  const nomeDaCidade = 'Farrapos'
  const nomeDoEstado = 'Porto Alegre, RS'
  const formaDePagamento = 'Cartão de Crédito'

  return (
    <Container>
      <div className="wrapper">
        <h1 className="order-confirmation-title">Uhu! Pedido confirmado</h1>
        <p className="order-confirmation-message">
          Agora é só aguardar que logo o café chegará até você
        </p>
        <div className="order-data">
          <ul>
            <li className="order-data-item">
              <img
                src={DeliveryAddressIcon}
                alt="ícone de localização no mapa"
              />
              <div className="text-content">
                <p>
                  Entrega em{' '}
                  <strong>
                    {checkoutData.street}, {checkoutData.number}
                  </strong>
                </p>
                <p>
                  {checkoutData.city} - {checkoutData.state}
                </p>
              </div>
            </li>
            <li className="order-data-item">
              <img src={DeliverySLAIcon} alt="ícone de relógio" />
              <div className="text-content">
                <p>Previsão de entrega</p>
                <strong>20 - 30 min</strong>
              </div>
            </li>
            <li className="order-data-item">
              <img src={DeliveryInstallmentIcon} alt="ícone de cifrão" />
              <div className="text-content">
                <p>Pagamento na entrega</p>
                <strong>{checkoutData.installment}</strong>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <img
        src={OrderConfirmationIllustration}
        alt="ilustração de um motoboy"
        className="order-confirmation-illustration"
      />
    </Container>
  )
}
