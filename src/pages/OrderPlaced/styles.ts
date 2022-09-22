import styled from 'styled-components'

export const Container = styled.div`
  max-width: 70rem;
  margin: 4rem auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 480px) {
    margin: 1rem auto;
    padding: 0 20px;
  }

  .order-confirmation-title {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme['yellow-dark']};

    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }

  .order-confirmation-message {
    font-size: 1.25rem;
    margin-bottom: 3.1rem;

    @media (max-width: 480px) {
      font-size: 1rem;
      max-width: 20rem;
    }
  }

  .order-data {
    width: 32rem;
    border: 1px solid transparent;
    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;
    border-bottom-right-radius: 6px;
    border-top-left-radius: 6px;
    position: relative;
    background-clip: padding-box;
    background-color: ${(props) => props.theme.background};
    padding: 2.5rem;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      margin: -1px;
      border-radius: inherit;
      background: linear-gradient(to left, #8047f8, #dbac2c);
    }

    @media (max-width: 480px) {
      max-width: 21rem;
      margin-bottom: 5rem;
    }
  }

  .order-data-item {
    display: flex;
    gap: 0.75rem;
    line-height: 130%;
    margin-bottom: 2rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .order-confirmation-illustration {
    align-self: flex-end;

    @media (max-width: 480px) {
      display: none;
    }
  }
`
