import { Restaurante } from '../../pages/Home'
import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  restaurantes: Restaurante[]
}

const ProductsList = ({ restaurantes }: Props) => {
  const getRestauranteTags = (restaurante: Restaurante) => {
    const tags = []

    if (restaurante.destacado === true) {
      tags.push(`Destaque da semana`)
    }

    if (restaurante.tipo) {
      tags.push(restaurante.tipo)
    }

    return tags
  }

  return (
    <Container>
      <div className="container">
        <List>
          {restaurantes.map((restaurante) => (
            <li key={restaurante.id}>
              <Product
                id={restaurante.id}
                description={restaurante.descricao}
                image={restaurante.capa}
                infos={getRestauranteTags(restaurante)}
                rating={restaurante.avaliacao}
                title={restaurante.titulo}
              />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
