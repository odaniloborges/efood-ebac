import ProductsList from '../../components/ProductsList'
import Header from '../../components/Header'

import { useGetRestaurantesQuery } from '../../services/api'

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
