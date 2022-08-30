export enum QuantityStepperReducerActionKind {
  UPDATE_PRODUCT_QUANTITY = 'UPDATE_PRODUCT_QUANTITY',
  UPDATE_PRICE = 'UPDATE_PRICE',
}

interface QuantityStepperState {
  updatedQuantity: number
}

type Action =
  | {
      type: QuantityStepperReducerActionKind.UPDATE_PRODUCT_QUANTITY
      payload: { updatedQuantity: number }
    }
  | {
      type: QuantityStepperReducerActionKind.UPDATE_PRICE
      payload: { price: number; quantity: number }
    }

export const quantityStepperReducer = (
  state: QuantityStepperState,
  action: Action,
) => {
  const { type, payload } = action

  switch (type) {
    case QuantityStepperReducerActionKind.UPDATE_PRODUCT_QUANTITY:
      return {
        ...state,
        updateQuantity: payload.updatedQuantity,
      }
    case QuantityStepperReducerActionKind.UPDATE_PRICE:
      return {
        ...state,
        price: payload.price,
        quantity: payload.quantity,
      }
    default:
      throw new Error(
        `No case for type ${type} found in quantityStepperReducer.`,
      )
  }
}
