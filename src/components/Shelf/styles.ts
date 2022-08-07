import styled from 'styled-components'

export const Container = styled.div`
  max-width: 70rem;
  margin: 0 auto;

  .title {
    font-size: 2rem;
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 3.4rem;
  }
`

export const ShelfGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  margin-bottom: 10rem;
  row-gap: 2.5rem;
  column-gap: 2rem;
`
