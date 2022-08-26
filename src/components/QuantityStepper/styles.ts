import styled from 'styled-components'

export const Container = styled.div`
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-button']};
  display: flex;
  align-items: center;
`

export const Button = styled.button`
  border: none;
  background: transparent;
  padding: 0rem 0.8rem;
  color: ${(props) => props.theme.purple};
  font-size: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Steps = styled.span`
  color: ${(props) => props.theme['base-title']};
`
