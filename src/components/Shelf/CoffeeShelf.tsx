import { Container, ShelfGrid } from './styles'

// products api
import { products } from '../../utils/products'
import { ProductSummary } from '../ProductSummary/ProductSummary'

export function Shelf() {
  return (
    <Container>
      <h3 className="title">Nossos cafés</h3>
      <ShelfGrid>
        {products.map((product) => {
          return (
            <ProductSummary
              id={product.id}
              name={product.name}
              type={product.type}
              description={product.description}
              image={product.image}
              inventory={product.inventory}
              price={product.price}
              key={product.id}
            />
          )
        })}
      </ShelfGrid>
    </Container>
  )
}
