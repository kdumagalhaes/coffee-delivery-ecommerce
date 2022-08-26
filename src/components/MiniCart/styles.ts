import styled from 'styled-components'

export const CartButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.4rem;
  width: 2.4rem;
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.theme['yellow-light']};
  position: relative;
`
export const ItemQuantity = styled.span`
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};
  border-radius: 100%;
  font-size: 0.75rem;
  position: absolute;
  bottom: 27px;
  left: 27px;
  font-weight: bold;
`
