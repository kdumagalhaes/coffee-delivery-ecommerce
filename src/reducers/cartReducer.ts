export const initialState = {
  total: 0,
  products: [],
}

export const cartReducer = (state: any, action: any) => {
  const { type, payload } = action

  switch (type) {
    case 'ADD_TO_CART':
        console.log('add_to_cart')
      return {
        ...state,
        products: payload.products,
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        products: payload.products,
      }
    case 'UPDATE_PRICE':
      return {
        ...state,
        products: payload.products,
      }
    case 'UPDATE_INVENTORY':
      return {
        ...state,
        products: payload.products,
      }

    default:
      throw new Error(`No case for type ${type} found in cartReducer.`)
  }
}
