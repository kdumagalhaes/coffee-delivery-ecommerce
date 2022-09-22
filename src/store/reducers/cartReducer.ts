import { Product } from '../../mocks/products'
import { CartContextModel, CheckoutData } from '../contexts/cart/CartContext'

export enum CartActionModel {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  INCREASE_PRODUCT_QUANTITY = 'INCREASE_PRODUCT_QUANTITY',
  DECREASE_PRODUCT_QUANTITY = 'DECREASE_PRODUCT_QUANTITY',
  GET_CHECKOUT_DATA = 'GET_CHECKOUT_DATA',
}

type Action =
  | { type: CartActionModel.ADD_TO_CART; payload: { productsList: Product[] } }
  | {
      type: CartActionModel.REMOVE_FROM_CART
      payload: { productsList: Product[] | [] }
    }
  | {
      type: CartActionModel.INCREASE_PRODUCT_QUANTITY
      payload: { productsList: Product[] }
    }
  | {
      type: CartActionModel.DECREASE_PRODUCT_QUANTITY
      payload: { productsList: Product[] }
    }
  | {
      type: CartActionModel.GET_CHECKOUT_DATA
      payload: { checkoutData: CheckoutData }
    }

export const cartReducer = (state: CartContextModel, action: Action) => {
  const { type, payload } = action

  switch (type) {
    case CartActionModel.ADD_TO_CART:
      return {
        ...state,
        productsList: payload.productsList,
      }
    case CartActionModel.REMOVE_FROM_CART:
      return {
        ...state,
        productsList: payload.productsList,
      }
    case CartActionModel.INCREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        productsList: payload.productsList,
      }
    case CartActionModel.DECREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        productsList: payload.productsList,
      }
    case CartActionModel.GET_CHECKOUT_DATA:
      return {
        ...state,
        checkoutData: payload.checkoutData,
      }

    default:
      throw new Error(`No case for type ${type} found in cartReducer.`)
  }
}
