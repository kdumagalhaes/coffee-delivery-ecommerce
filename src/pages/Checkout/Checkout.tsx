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
  BlockHeader,
  InstallmentButton,
  CheckoutFormInput,
} from './styles'

// assets
import {
  MapPin,
  Trash,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react'
import { QuantityStepper } from '../../components/QuantityStepper/QuantityStepper'

// mock
import CafeImgMock from '../../assets/images/coffee/expresso.svg'

export function Checkout() {
  return (
    <Container>
      <div className="left-blocks">
        <SubTitle>Complete seu pedido</SubTitle>
        <CheckoutForm>
          <BlockHeader>
            <MapPin size={22} color="#C47F17" />
            <div className="block-text">
              <p className="block-title">Endereço de Entrega</p>
              <p className="block-subtitle">
                Informe o endereço onde deseja receber seu pedido
              </p>
            </div>
          </BlockHeader>
          <div className="form-inputs">
            <CheckoutFormInput
              name="postal-code"
              id="postal-code"
              type="text"
              className="postal-code"
              placeholder="CEP"
              autoFocus
            />
            <CheckoutFormInput
              name="street"
              id="street"
              type="text"
              className="street"
              placeholder="Rua"
            />
            <div className="flex-hor">
              <CheckoutFormInput
                name="number"
                id="number"
                type="number"
                className="number"
                placeholder="Número"
              />
              <CheckoutFormInput
                name="complement"
                id="complement"
                type="text"
                className="complement"
                placeholder="Complemento"
              />
            </div>
            <div className="flex-hor">
              <CheckoutFormInput
                name="neighbourhood"
                id="neighbourhood"
                type="text"
                className="neighbourhood"
                placeholder="Bairro"
              />
              <CheckoutFormInput
                name="city"
                id="city"
                type="text"
                className="city"
                placeholder="Cidade"
              />
              <CheckoutFormInput
                name="state"
                id="state"
                type="text"
                className="state"
                placeholder="UF"
              />
            </div>
          </div>
        </CheckoutForm>
        <Installments>
          <BlockHeader>
            <CurrencyDollar size={22} color="#8047F8" />
            <div className="block-text">
              <p className="block-title">Pagamento</p>
              <p className="block-subtitle">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </BlockHeader>
          <div className="installments-options">
            <InstallmentButton>
              <CreditCard size={16} color="#8047F8" />
              Cartão de crédito
            </InstallmentButton>
            <InstallmentButton>
              <Bank size={16} color="#8047F8" />
              Cartão de débito
            </InstallmentButton>
            <InstallmentButton>
              <Money size={16} color="#8047F8" />
              Dinheiro
            </InstallmentButton>
          </div>
        </Installments>
      </div>
      <div className="right-blocks">
        <SubTitle>Cafés selecionados</SubTitle>
        <OrderSummary>
          <ul className="product-list">
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
