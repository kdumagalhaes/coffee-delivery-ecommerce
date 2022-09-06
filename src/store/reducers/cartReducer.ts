import { CartContextModel, CartItem } from '../contexts/cart/CartContext'

export enum CartActionKind {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  UPDATE_INVENTORY = 'UPDATE_INVENTORY',
  UPDATE_QUANTITY = 'UPDATE_QUANTITY',
  UPDATE_PRICE = 'UPDATE_PRICE',
}

type Action =
  | { type: CartActionKind.ADD_TO_CART; payload: { cartItems: CartItem[] } }
  | {
      type: CartActionKind.REMOVE_FROM_CART
      payload: { cartItems: CartItem[] | [] }
    }
  | { type: CartActionKind.UPDATE_INVENTORY; payload: { products: CartItem[] } }
  | { type: CartActionKind.UPDATE_QUANTITY; payload: { totalQuantity: number } }
  | {
      type: CartActionKind.UPDATE_PRICE
      payload: { totalCart: number }
    }

export const cartReducer = (state: CartContextModel, action: Action) => {
  const { type, payload } = action

  switch (type) {
    case CartActionKind.ADD_TO_CART:
      return {
        ...state,
        cartItems: payload.cartItems,
      }
    case CartActionKind.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: payload.cartItems,
      }
    case CartActionKind.UPDATE_INVENTORY:
      return {
        ...state,
        products: payload.products,
      }
    case CartActionKind.UPDATE_PRICE:
      return {
        ...state,
        totalCart: payload.totalCart,
      }
    case CartActionKind.UPDATE_QUANTITY:
      return {
        ...state,
        quantity: payload.totalQuantity,
      }

    default:
      throw new Error(`No case for type ${type} found in cartReducer.`)
  }
}
