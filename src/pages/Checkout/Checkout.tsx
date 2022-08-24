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

// utils
import { useState, useEffect } from 'react'
import useCart from '../../contexts/cart/CartContext'
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
  const { products, removeFromCart, total } = useCart()
  console.log('checkout products = ', products)
  const postalCodeInputController = postalCode.length === 8 ? postalCode : null
  const deliveryCost = 3.50

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

  const handleDeleteProduct = (product: React.MouseEvent<HTMLElement>): void => {
    removeFromCart(product)
  }

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
            {products.map((product) => {
              return (
                <SelectedProduct key={product.id}>
                  <img
                    src={product.image}
                    alt="product name"
                    className="product-image"
                  />
                  <div className="product-name-and-controls">
                    <p className="product-name">{product.name}</p>
                    <div className="controls">
                      <QuantityStepper />
                      <RemoveButton onClick={() => handleDeleteProduct(product)}>
                        <Trash size={16} color="#8047F8" />
                        Remover
                      </RemoveButton>
                    </div>
                  </div>
                  <strong className="price">{product.price}</strong>
                </SelectedProduct>
              )
            })}
          </ul>
          <BillingSummary>
            <ul className="billing">
              <li>
                <p className="billing-items-title billing-title">
                  Total de itens
                </p>
                <span className="billing-items-value billing-value">
                  R$ {total}
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
                <span className="billing-total-value">R$ {total + deliveryCost}</span>
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
