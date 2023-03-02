import { formatPrice } from './format'
import { Product } from '../mocks/products'

export const formatOrderPrices = (products: Product[]) => {
  const DELIVERY_COST = products.length > 0 ? 3.5 : 0

  const totalItemsPrices = products
    .map((product) => product.price * product.quantity)
    .reduce((prev, curr) => prev + curr, 0)
  const total = totalItemsPrices || 0
  const formatedTotal = formatPrice(total)
  const formatedDeliveryCost = formatPrice(DELIVERY_COST)
  const totalWithDelivery = total + DELIVERY_COST
  const formatedTotalWithDelivery = formatPrice(totalWithDelivery)

  return {
    formatedTotal,
    formatedDeliveryCost,
    formatedTotalWithDelivery,
  }
}
