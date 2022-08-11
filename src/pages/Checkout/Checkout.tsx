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

// utils
import { useEffect, useState } from 'react'
interface AddressViaApi {
  bairro: string
  cep: string
  complemento: string
  ddd: string
  gia: string
  ibge: string
  localidade: string
  logradouro: string
  siafi: string
  uf: string
  erro?: string
}

export function Checkout() {
  const [postalCode, setPostalCode] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [addressViaApi, setAddresViaApi] = useState<AddressViaApi>({
    bairro: '',
    cep: '',
    complemento: '',
    ddd: '',
    gia: '',
    ibge: '',
    localidade: '',
    logradouro: '',
    siafi: '',
    uf: '',
  })

  const postalCodeInputController = postalCode.length === 8 ? postalCode : null
  const postalCodePattern = '/^[0-9]{5}-[0-9]{3}$/'

  const handlePostalCode = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const userInput = e.target.value
    const userInputWithoutHifen = userInput.replace(/-/g, '')
    setPostalCode(userInputWithoutHifen)
  }

  useEffect(() => {
    const VIA_CEP_ENDPOINT = `https://viacep.com.br/ws/${postalCode}/json/`

    if (postalCode)
      fetch(VIA_CEP_ENDPOINT)
        .then((response) => response.json())
        .then((json) => setAddresViaApi(json))
        .catch((error) => setError('CEP não encontrado!'))
  }, [postalCodeInputController])

  return (
    <Container>
      <div className="left-blocks">
        <SubTitle>Complete seu pedido</SubTitle>
        <CheckoutForm id="checkout-form">
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
              id="postal-code"
              type="text"
              className="postal-code"
              placeholder="CEP"
              autoFocus
              required
              min={1}
              max={8}
              onChange={(e) => handlePostalCode(e)}
            />
            {error && addressViaApi?.logradouro === undefined ? (
              <span className="error-message">{error}</span>
            ) : null}
            <CheckoutFormInput
              id="street"
              type="text"
              className="street"
              placeholder="Rua"
              required
              min={1}
              value={addressViaApi?.logradouro}
              readOnly
            />
            <div className="flex-hor">
              <CheckoutFormInput
                id="number"
                type="text"
                className="number"
                placeholder="Número"
                required
                min={1}
              />
              <CheckoutFormInput
                id="complement"
                type="text"
                className="complement"
                placeholder="Complemento"
                min={1}
              />
            </div>
            <div className="flex-hor">
              <CheckoutFormInput
                id="neighbourhood"
                type="text"
                className="neighbourhood"
                placeholder="Bairro"
                required
                min={1}
                value={addressViaApi?.bairro}
                readOnly
              />
              <CheckoutFormInput
                id="city"
                type="text"
                className="city"
                placeholder="Cidade"
                required
                min={1}
                value={addressViaApi?.localidade}
                readOnly
              />
              <CheckoutFormInput
                id="state"
                type="text"
                className="state"
                placeholder="UF"
                required
                max={2}
                value={addressViaApi?.uf}
                readOnly
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
            <PlaceOrderButton type="submit" form="checkout-form">
              Confirmar pedido
            </PlaceOrderButton>
          </BillingSummary>
        </OrderSummary>
      </div>
    </Container>
  )
}
