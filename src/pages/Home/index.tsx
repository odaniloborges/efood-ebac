import ProductsList from '../../components/ProductsList'
import Header from '../../components/Header'

import { useGetRestaurantesQuery } from '../../services/api'

export interface Prato {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Prato[]
}

const Home = () => {
  const { data: restaurante } = useGetRestaurantesQuery()

  if (restaurante) {
    return (
      <>
        <Header />
        <div className="container">
          <ProductsList restaurante={restaurante} />
        </div>
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Home
