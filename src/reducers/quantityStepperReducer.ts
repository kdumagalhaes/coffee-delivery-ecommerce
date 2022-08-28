export enum QuantityStepperReducerActionKind {
  UPDATE_PRODUCT_QUANTITY = 'UPDATE_PRODUCT_QUANTITY',
}

interface QuantityStepperState {
  updatedQuantity: number
}

type Action = {
  type: QuantityStepperReducerActionKind.UPDATE_PRODUCT_QUANTITY
  payload: { updatedQuantity: number }
}

export const quantityStepperReducer = (
  state: QuantityStepperState,
  action: Action,
) => {
  const { type, payload } = action

  if (type === QuantityStepperReducerActionKind.UPDATE_PRODUCT_QUANTITY) {
    return { ...state, updatedQuantity: payload.updatedQuantity }
  }
  throw new Error(`No case for type ${type} found in quantityStepperReducer.`)
}
