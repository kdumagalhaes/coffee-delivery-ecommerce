import { Products } from '../utils/products'

enum CartActionKind {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  UPDATE_PRICE = 'UPDATE_PRICE',
  UPDATE_INVENTORY = 'UPDATE_INVENTORY',
}

interface CartAction {
  type: CartActionKind
  payload: Products
}

interface CartState {
  product: Products[]
}

export const initialState = {
  total: 0,
  products: [],
}

export const cartReducer = (state: any, action: any) => {
  const { type, payload } = action

  switch (type) {
    case CartActionKind.ADD_TO_CART:
      console.log('add_to_cart')
      return {
        ...state,
        products: payload.products,
      }
    case CartActionKind.REMOVE_FROM_CART:
      return {
        ...state,
        products: payload.products,
      }
    case CartActionKind.UPDATE_PRICE:
      return {
        ...state,
        total: payload.total,
      }
    case CartActionKind.UPDATE_INVENTORY:
      return {
        ...state,
        products: payload.products,
      }

    default:
      throw new Error(`No case for type ${type} found in cartReducer.`)
  }
}
