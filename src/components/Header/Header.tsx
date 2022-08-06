import { Container, Location } from './styles'

// assets
import Logo from '../../assets/logo.svg'
import { MapPin } from 'phosphor-react'

// components
import { Cart } from '../Cart/Cart'

export function Header() {
  return (
    <Container>
      <a href="/">
        <img src={Logo} alt="Coffee Delivery logo" />
      </a>
      <div className='wrapper'>
      <Location>
        <MapPin size={22} weight="fill" color={'#8047F8'} />
        <p>Teresópolis, RJ</p>
      </Location>
      <Cart />
      </div>
    </Container>
  )
}
