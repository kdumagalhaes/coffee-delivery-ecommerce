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
import { useNavigate } from 'react-router-dom'
import { QuantityStepper } from '../../components/QuantityStepper/QuantityStepper'

// assets
import {
  MapPin,
  Trash,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react'

// utils
import { useState, useEffect, ChangeEvent } from 'react'
import useCart from '../../store/contexts/cart/CartContext'
import { Product } from '../../mocks/products'
import { formatPrice } from '../../utils/format'
import { fetchAddressData } from '../../utils/fetchAddressData'
import useSWR from 'swr'
import { formatOrderPrices } from '../../utils/formatOrderPrices'
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
  const { productsList, removeFromCart, getCheckoutData } = useCart()

  const [formData, setFormData] = useState({
    postalCode: '',
    addressNumber: '',
  })
  const { postalCode, addressNumber } = formData

  const [installmentSelected, setInstallmentSelected] = useState('')
  const [addressViaApi, setAddresViaApi] = useState({} as AddressViaApi)

  const [parent] = useAutoAnimate<HTMLUListElement>()
  const navigate = useNavigate()

  const isSubmitButtonDisable =
    installmentSelected === '' ||
    productsList.length === 0 ||
    addressNumber === '' ||
    postalCode === ''

  const total = formatOrderPrices(productsList).formatedTotal || 0
  const deliveryPrice = formatOrderPrices(productsList).formatedDeliveryCost
  const totalWithDelivery =
    formatOrderPrices(productsList).formatedTotalWithDelivery

  const handleFormData = (
    prop: string,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setFormData({ ...formData, [prop]: event.target.value })
  }

  const { data } = useSWR(postalCode, fetchAddressData)
  const postalCodeInputController = postalCode.length === 8 ? postalCode : null

  useEffect(() => {
    if (data) {
      setAddresViaApi(data)
    }
  }, [data, postalCode, postalCodeInputController])

  const handleDeleteProduct = (product: Product): void => {
    removeFromCart(product)
  }

  const handleInstallmentSelection = (selection: string) => {
    setInstallmentSelected(selection)
  }

  const handleCheckout = () => {
    const data = {
      state: addressViaApi.uf,
      street: addressViaApi.logradouro,
      number: addressNumber,
      installment: installmentSelected,
      city: addressViaApi.localidade,
    }
    getCheckoutData(data)
    navigate('/order-placed')
    productsList.length = 0
  }

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
              id="postal-code"
              type="text"
              className="postal-code"
              placeholder="CEP"
              autoFocus
              required
              min={1}
              max={8}
              onChange={(e) => handleFormData('postalCode', e)}
            />
            {addressViaApi.cep === '' && installmentSelected !== '' ? (
              <span className="error-message-postalcode">
                CEP é obrigatório!
              </span>
            ) : (
              ''
            )}
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
                onChange={(e) => handleFormData('addressNumber', e)}
                value={addressNumber}
              />
              {addressNumber === '' && installmentSelected !== '' ? (
                <span className="error-message-number-mobile">
                  Número é obrigatório!
                </span>
              ) : (
                ''
              )}
              <CheckoutFormInput
                id="complement"
                type="text"
                className="complement"
                placeholder="Complemento"
                min={1}
              />
            </div>
            {addressNumber === '' && installmentSelected !== '' ? (
              <span className="error-message-number">
                Número é obrigatório!
              </span>
            ) : (
              ''
            )}
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
              onFocus={() => handleInstallmentSelection('Crédito')}
              onClick={() => handleInstallmentSelection('Crédito')}
              className={
                installmentSelected === 'Crédito' ? 'selected-installment' : ''
              }
            >
              <CreditCard size={16} color="#8047F8" />
              Cartão de crédito
            </InstallmentButton>
            <InstallmentButton
              onFocus={() => handleInstallmentSelection('Débito')}
              onClick={() => handleInstallmentSelection('Débito')}
              className={
                installmentSelected === 'Débito' ? 'selected-installment' : ''
              }
            >
              <Bank size={16} color="#8047F8" />
              Cartão de débito
            </InstallmentButton>
            <InstallmentButton
              onFocus={() => handleInstallmentSelection('Dinheiro')}
              onClick={() => handleInstallmentSelection('Dinheiro')}
              className={
                installmentSelected === 'Dinheiro' ? 'selected-installment' : ''
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
                  R$ {total}
                </span>
              </li>
              <li>
                <p className="billing-delivery-title billing-title">Entrega</p>
                <span className="billing-delivery-value billing-value">
                  R$ {deliveryPrice}
                </span>
              </li>
              <li>
                <p className="billing-total-title">Total</p>
                <span className="billing-total-value">
                  R$ {totalWithDelivery}
                </span>
              </li>
            </ul>
            <PlaceOrderButton
              disabled={isSubmitButtonDisable}
              onClick={handleCheckout}
            >
              Confirmar pedido
            </PlaceOrderButton>
          </BillingSummary>
        </OrderSummary>
      </div>
    </Container>
  )
}
