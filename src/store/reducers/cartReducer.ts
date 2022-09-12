import { Product } from '../../mocks/products'
import { CartContextModel } from '../contexts/cart/CartContext'

export enum CartActionModel {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
}

type Action =
  | { type: CartActionModel.ADD_TO_CART; payload: { productsList: Product[] } }
  | {
      type: CartActionModel.REMOVE_FROM_CART
      payload: { productsList: Product[] | [] }
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
    default:
      throw new Error(`No case for type ${type} found in cartReducer.`)
  }
}
