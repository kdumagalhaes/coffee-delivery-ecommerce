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
  padding: 0 1.5rem;

  .image {
    width: 120px;
    height: 120px;
    background-color: coral;
    position: absolute;
    top: -30px;
  }
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;

  .type,
  .name {
    margin-bottom: 1rem;
  }

  .type {
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    text-transform: uppercase;
    font-size: 0.7rem;
    font-weight: 700;
  }

  .name {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2', cursive;
  }

  .description {
    font-size: 0.88rem;
    color: ${(props) => props.theme['base-label']};
    line-height: 130%;
    text-align: center;
  }
`

export const PricingAndAddToCart = styled.div`
  width: 100%;
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