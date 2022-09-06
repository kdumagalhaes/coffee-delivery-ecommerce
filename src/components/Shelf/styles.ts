import styled from 'styled-components'

export const Container = styled.div`
  max-width: 72.5rem;
  margin: 0 auto;
  padding: 0 20px;

  .title {
    font-size: 2rem;
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 3.4rem;

    @media (max-width: 480px) {
      font-size: 1.7rem;
    }
  }
`

export const ShelfGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-bottom: 10rem;
  row-gap: 2.5rem;
  column-gap: 2rem;

  /* @media (max-width: 960px) {
    grid-template-columns: auto auto auto;
  } */

  @media (max-width: 480px) {
    grid-template-columns: auto;
    justify-content: center;
  }
`
