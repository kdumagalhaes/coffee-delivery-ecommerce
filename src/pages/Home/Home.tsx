import { Hero } from '../../components/Hero/Hero'
import { Shelf } from '../../components/Shelf/CoffeeShelf'
import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <Hero />
      <Shelf />
    </Container>
  )
}
