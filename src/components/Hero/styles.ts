import styled from 'styled-components'

// assets
import HeroBackgroundImg from '../../assets/images/Background.png'

export const Container = styled.div`
  background-image: url(${HeroBackgroundImg});

  @media (max-width: 480px) {
    background: transparent;
  }
`
export const Wrapper = styled.div`
  max-width: 72.5rem;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 544px;

  @media (max-width: 480px) {
    align-items: flex-start;
    height: 100%;
    margin-bottom: 2rem;
  }

  .flex-hor {
    display: flex;
  }

  h1,
  h2 {
    line-height: 130%;
  }

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    margin-bottom: 16px;
    color: ${(props) => props.theme['base-title']};
    font-weight: 800;

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 400;
    margin-bottom: 4rem;
    color: ${(props) => props.theme['base-subtitle']};

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }

  ul {
    margin-right: 2.5rem;
  }

  ul > li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1.25rem;

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }

  .img-hero {
    max-width: 29.75rem;

    @media (max-width: 960px) {
      display: none;
    }
  }
`

export const TextContent = styled.div`
  margin-right: 40px;

  @media (max-width: 480px) {
    margin-right: 0;
  }
`
