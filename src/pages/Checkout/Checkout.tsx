import {
  CheckoutForm,
  Container,
  Installments,
  OrderSummary,
  SubTitle,
  RemoveButton,
  SelectedProduct,
  BillingSummary,
  PlaceOrderButton,
} from './styles'

// assets
import { MapPin, Trash } from 'phosphor-react'
import { QuantityStepper } from '../../components/QuantityStepper/QuantityStepper'

// mock
import CafeImgMock from '../../assets/images/coffee/expresso.svg'

export function Checkout() {
  return (
    <Container>
      <div className="left-blocks">
        <SubTitle>Complete seu pedido</SubTitle>
        <CheckoutForm>
          <div className="form-header">
            <MapPin size={22} color="#C47F17" />
            <div className="form-text">
              <p className="form-title">Endereço de Entrega</p>
              <p className="form-subtitle">
                Informe o endereço onde deseja receber seu pedido
              </p>
            </div>
          </div>
        </CheckoutForm>
        <Installments></Installments>
      </div>
      <div className="right-blocks">
        <SubTitle>Cafés selecionados</SubTitle>
        <OrderSummary>
          <ul className="products-list">
            <SelectedProduct>
              <img
                src={CafeImgMock}
                alt="product name"
                className="product-image"
              />
              <div className="product-name-and-controls">
                <p className="product-name">Expresso Tradicional</p>
                <div className="controls">
                  <QuantityStepper />
                  <RemoveButton>
                    <Trash size={16} color="#8047F8" />
                    Remover
                  </RemoveButton>
                </div>
              </div>
              <strong className="price">R$ 9,90</strong>
            </SelectedProduct>
            <SelectedProduct>
              <img
                src={CafeImgMock}
                alt="product name"
                className="product-image"
              />
              <div className="product-name-and-controls">
                <p className="product-name">Expresso Tradicional</p>
                <div className="controls">
                  <QuantityStepper />
                  <RemoveButton>
                    <Trash size={16} color="#8047F8" />
                    Remover
                  </RemoveButton>
                </div>
              </div>
              <strong className="price">R$ 9,90</strong>
            </SelectedProduct>
          </ul>
          <BillingSummary>
            <ul className="billing">
              <li>
                <p className="billing-items-title billing-title">
                  Total de itens
                </p>
                <span className="billing-items-value billing-value">
                  R$ 29,70
                </span>
              </li>
              <li>
                <p className="billing-delivery-title billing-title">Entrega</p>
                <span className="billing-delivery-value billing-value">
                  R$ 3,50
                </span>
              </li>
              <li>
                <p className="billing-total-title">Total</p>
                <span className="billing-total-value">R$ 33,20</span>
              </li>
            </ul>
            <PlaceOrderButton href="/order-placed">
              Confirmar pedido
            </PlaceOrderButton>
          </BillingSummary>
        </OrderSummary>
      </div>
    </Container>
  )
}
