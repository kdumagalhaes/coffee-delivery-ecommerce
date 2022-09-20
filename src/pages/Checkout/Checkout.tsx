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
  EmptyCartMessage,
  EmptyCartButton,
} from './styles'
import { useAutoAnimate } from '@formkit/auto-animate/react'

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
import React, { useState, useEffect } from 'react'
import useCart from '../../store/contexts/cart/CartContext'
import { Product } from '../../mocks/products'
import { formatPrice } from '../../utils/format'
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
  const [installmentSelected, setInstallmentSelected] = useState('')
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

  const [parent] = useAutoAnimate<HTMLUListElement>()

  const { productsList, removeFromCart } = useCart()

  const handleDeleteProduct = (product: Product): void => {
    removeFromCart(product)
  }

  const itemQuantity = productsList.map(({ quantity }) => quantity)[0]
  const [productQuantity, setProductQuantity] = useState(itemQuantity)

  const handleItemQuantity = () => {
    productsList.map((product) => setProductQuantity(product.quantity))
  }

  const totalItemsQuantity = productsList
    .map((product) => product.quantity)
    .reduce((prev, curr) => prev + curr, 0)

  const totalItemsPrices = productsList
    .map((product) => product.price * product.quantity)
    .reduce((prev, curr) => prev + curr, 0)

  // manage delivery cost
  const deliveryCost = productsList.length > 0 ? 3.5 : 0

  // format prices
  const total = totalItemsPrices || 0
  const formatedTotal = formatPrice(total)
  const formatedDeliveryCost = formatPrice(deliveryCost)
  const totalWithDelivery = total + deliveryCost
  const formatedTotalWithDelivery = formatPrice(totalWithDelivery)

  // set address by postal code
  const postalCodeInputController = postalCode.length === 8 ? postalCode : null

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
        .catch((error) => setError(error))
  }, [postalCode, postalCodeInputController])

  const handleInstallmentSelection = (selection: string) => {
    setInstallmentSelected(selection)
  }

  const isSubmitButtonDisable =
    installmentSelected === '' || productsList.length === 0

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
                id="cartState"
                type="text"
                className="cartState"
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
            <InstallmentButton
              onFocus={() => handleInstallmentSelection('credit')}
              className={
                installmentSelected === 'credit' ? 'selected-installment' : ''
              }
            >
              <CreditCard size={16} color="#8047F8" />
              Cartão de crédito
            </InstallmentButton>
            <InstallmentButton
              onFocus={() => handleInstallmentSelection('debit')}
              className={
                installmentSelected === 'debit' ? 'selected-installment' : ''
              }
            >
              <Bank size={16} color="#8047F8" />
              Cartão de débito
            </InstallmentButton>
            <InstallmentButton
              onFocus={() => handleInstallmentSelection('money')}
              className={
                installmentSelected === 'money' ? 'selected-installment' : ''
              }
            >
              <Money size={16} color="#8047F8" />
              Dinheiro
            </InstallmentButton>
          </div>
        </Installments>
      </div>
      <div className="right-blocks">
        <SubTitle>Cafés selecionados</SubTitle>
        <OrderSummary>
          <ul className="product-list" ref={parent}>
            {productsList.length === 0 ? (
              <>
                <EmptyCartMessage>
                  Você ainda não adicionou cafés no carrinho.
                </EmptyCartMessage>
                <EmptyCartButton href="/">Escolher meus cafés</EmptyCartButton>
              </>
            ) : (
              productsList.map((product) => {
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
                        <QuantityStepper
                          quantity={product.quantity}
                          productId={product.id}
                          setQuantity={handleItemQuantity}
                        />
                        <RemoveButton
                          onClick={() => handleDeleteProduct(product)}
                        >
                          <Trash size={16} color="#8047F8" />
                          <span className="btn-text">Remover</span>
                        </RemoveButton>
                      </div>
                    </div>
                    <strong className="price">
                      R$ {formatPrice(product.price * product.quantity)}
                    </strong>
                  </SelectedProduct>
                )
              })
            )}
          </ul>
          <BillingSummary>
            <ul className="billing">
              <li>
                <p className="billing-items-title billing-title">
                  Total de itens
                </p>
                <span className="billing-items-value billing-value">
                  R$ {formatedTotal}
                </span>
              </li>
              <li>
                <p className="billing-delivery-title billing-title">Entrega</p>
                <span className="billing-delivery-value billing-value">
                  R$ {formatedDeliveryCost}
                </span>
              </li>
              <li>
                <p className="billing-total-title">Total</p>
                <span className="billing-total-value">
                  R$ {formatedTotalWithDelivery}
                </span>
              </li>
            </ul>
            <PlaceOrderButton
              type="submit"
              form="checkout-form"
              disabled={isSubmitButtonDisable}
            >
              Confirmar pedido
            </PlaceOrderButton>
          </BillingSummary>
        </OrderSummary>
      </div>
    </Container>
  )
}
