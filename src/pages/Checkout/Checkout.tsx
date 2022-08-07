import {
  CheckoutForm,
  Container,
  Installments,
  OrderSummary,
  SubTitle,
  RemoveButton,
  SelectedProduct,
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
        </OrderSummary>
      </div>
    </Container>
  )
}
