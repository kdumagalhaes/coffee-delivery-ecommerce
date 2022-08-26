import { Products } from '../utils/products'

export enum CartActionKind {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  UPDATE_PRICE = 'UPDATE_PRICE',
  UPDATE_INVENTORY = 'UPDATE_INVENTORY',
}
interface CartState {
  products: Products[]
  total: number
}

type Action =
  | { type: CartActionKind.ADD_TO_CART; payload: { products: Products[] } }
  | { type: CartActionKind.REMOVE_FROM_CART; payload: { products: Products[] } }
  | { type: CartActionKind.UPDATE_INVENTORY; payload: { products: Products[] } }
  | { type: CartActionKind.UPDATE_PRICE; payload: { total: number } }

export const cartReducer = (state: CartState, action: Action) => {
  const { type, payload } = action

  switch (type) {
    case CartActionKind.ADD_TO_CART:
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
