import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  max-width: 16rem;
  height: 19.3rem;
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
  position: relative;
  padding: 0 1.2rem;

  .image {
    width: 120px;
    height: 120px;
    position: absolute;
    top: -22px;
  }
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 110px;

  .types {
    margin-bottom: 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .type {
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    text-transform: uppercase;
    font-size: 0.6rem;
    font-weight: 700;
    gap: 0.9rem;
  }

  .name {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2', cursive;
    margin-bottom: 0.3rem;
  }

  .description {
    width: 100%;
    font-size: 0.88rem;
    color: ${(props) => props.theme['base-label']};
    line-height: 130%;
    text-align: center;
    margin-bottom: 1.5rem;
  }
`

export const PricingAndAddToCart = styled.div`
  width: 100%;
  max-height: 2.7rem;
  display: flex;
  justify-content: space-between;
`

export const Pricing = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  .currency {
    font-size: 0.8rem;
  }

  .price {
    font-size: 1.5rem;
    font-family: 'Baloo 2', cursive;
  }
`
export const AddToCartButton = styled.button`
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.theme['purple-dark']};
  padding: 0.7rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`
