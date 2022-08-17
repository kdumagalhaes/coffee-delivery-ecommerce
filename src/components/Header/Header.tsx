import { Container, Location, Wrapper } from './styles'

// assets
import Logo from '../../assets/logo.svg'
import { MapPin } from 'phosphor-react'

// components
import { MiniCart } from '../MiniCart/MiniCart'

export function Header() {
  return (
    <Container>
      <a href="/" className="logo">
        <img src={Logo} alt="Coffee Delivery logo" />
      </a>
      <Wrapper>
        <Location>
          <MapPin size={22} weight="fill" color={'#8047F8'} />
          <p>Nome da cidade, UF</p>
        </Location>
        <MiniCart />
      </Wrapper>
    </Container>
  )
}
