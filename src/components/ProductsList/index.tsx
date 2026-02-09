import Product from '../Product'

import * as S from './styles'

export type Props = {
  restaurante: Restaurante[]
}

const ProductsList = ({ restaurante }: Props) => {
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
    <S.Container>
      <div className="container">
        <S.List>
          {restaurante.map((restaurante) => (
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
        </S.List>
      </div>
    </S.Container>
  )
}

export default ProductsList
