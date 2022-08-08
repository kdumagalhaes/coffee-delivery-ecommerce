import styled from 'styled-components'

export const Container = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  display: flex;
`

const BlockLayout = styled.div`
  width: 40rem;
  margin-right: 2rem;
  border-radius: 6px;
  padding: 2.5rem;
  background-color: ${(props) => props.theme['base-card']};
  margin-bottom: 0.85rem;

  &:last-child {
    margin-bottom: 0;
  }
`

export const BlockHeader = styled.div`
  display: flex;
  gap: 0.6rem;
  margin-bottom: 2rem;

  .right-blocks {
    display: flex;
    flex-direction: column;
  }

  .block-text {
    line-height: 130%;
  }

  .block-title {
    color: ${(props) => props.theme['base-subtitle']};
  }

  .block-subtitle {
    font-size: 0.8rem;
    color: ${(props) => props.theme['base-text']};
  }
`

export const CheckoutForm = styled(BlockLayout)``

export const Installments = styled(BlockLayout)`
  .installments-options {
    display: flex;
    gap: 0.75rem;
  }
`

export const OrderSummary = styled.div`
  width: 28rem;
  padding: 2.5rem;
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
  background-color: ${(props) => props.theme['base-card']};
`

export const SubTitle = styled.h3`
  font-size: 1.12rem;
  color: ${(props) => props.theme['base-subtitle']};
  font-family: 'Baloo 2', cursive;
  margin-bottom: 0.9rem;
`
export const RemoveButton = styled.button`
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  font-size: 0.75rem;
  text-transform: uppercase;
  padding: 0rem 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
`

export const SelectedProduct = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;

  .product-name-and-controls {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .product-name {
    color: ${(props) => props.theme['base-subtitle']};
  }

  .product-image {
    max-width: 4rem;
    max-height: 4rem;
  }

  .controls {
    display: flex;
    height: 2rem;
    gap: 0.5rem;
  }
`
export const BillingSummary = styled.div`
  .billing-title {
    font-size: 0.9rem;
    color: ${(props) => props.theme['base-text']};
  }

  .billing-value {
    font-size: 1rem;
  }

  .billing > li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 1.5rem;
    }
  }

  .billing-total-title,
  .billing-total-value {
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
  }
`

export const PlaceOrderButton = styled.a`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  padding: 0.9rem 0;
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  background-color: ${(props) => props.theme.yellow};
  text-decoration: none;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 700;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`
export const InstallmentButton = styled.button`
  width: 100%;
  height: 3.2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 6px;
  border: none;
  background-color: ${props => props.theme['base-button']};
  text-transform: uppercase;
  font-size: 0.75rem;
  color: ${props => props.theme['base-text']};
  padding: 0 0.9rem;
  gap: 0.4rem;
`
