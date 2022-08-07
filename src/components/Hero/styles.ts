import styled from 'styled-components'

// assets
import HeroBackgroundImg from '../../assets/images/Background.png'

export const Container = styled.div`
  background-image: url(${HeroBackgroundImg});
`
export const Wrapper = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 544px;

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
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 400;
    margin-bottom: 4rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  ul {
    margin-right: 2.5rem;
  }

  ul > li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1.25rem;
  }

  .img-hero {
    max-width: 29.75rem;
  }
`

export const TextContent = styled.div`
  margin-right: 40px;
`