import styled from 'styled-components'

export const Container = styled.header`
  max-width: 72.5rem;
  margin: 0 auto;
  height: 7.4rem;
  padding: 32px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Wrapper = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const Location = styled.span`
  background-color: ${(props) => props.theme['purple-light']};
  padding: 0.5rem 0.7rem 0.5rem 0.5rem;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${(props) => props.theme['purple-dark']};
  border-radius: 6px;

  @media (max-width: 480px) {
    display: none;
  }
`
