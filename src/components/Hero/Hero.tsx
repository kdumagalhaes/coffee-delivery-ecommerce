import { Container, Wrapper, TextContent } from './styles'

// assets
import CafeFresquinhoIcon from '../../assets/icons/cafe-fresquinho.svg'
import CompraSeguraIcon from '../../assets/icons/compra-segura.svg'
import EmbalagemIcon from '../../assets/icons/embalagem.svg'
import EntregaRapidaIcon from '../../assets/icons/entrega-rapida.svg'
import EmbalagemDeCafe from '../../assets/images/hero.svg'

export function Hero() {
  return (
    <Container>
      <Wrapper>
        <TextContent>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
          <div className="flex-hor">
            <ul>
              <li>
                <img
                  src={CompraSeguraIcon}
                  alt="ícone Compra simples e segura"
                />
                Compra simples e segura
              </li>
              <li>
                <img
                  src={EntregaRapidaIcon}
                  alt="ícone Entrega rápida e rastreada"
                />
                Entrega rápida e rastreada
              </li>
            </ul>
            <ul>
              <li>
                <img
                  src={EmbalagemIcon}
                  alt="ícone Embalagem mantém o café intacto"
                />
                Embalagem mantém o café intacto
              </li>
              <li>
                <img
                  src={CafeFresquinhoIcon}
                  alt="ícone O café chega fresquinho até você"
                />
                O café chega fresquinho até você
              </li>
            </ul>
          </div>
        </TextContent>
        <img
          className="img-hero"
          src={EmbalagemDeCafe}
          alt="Imagem de uma embalagem de café"
        />
      </Wrapper>
    </Container>
  )
}
