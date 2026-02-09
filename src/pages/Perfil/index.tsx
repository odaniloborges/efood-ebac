import { useParams } from 'react-router-dom'
import PratosList from '../../components/PratosList'

import HeaderPerfil from '../../components/HeaderPerfil'
import Banner from '../../components/Banner'
import { useGetRestauranteQuery } from '../../services/api'

export type Props = {
  restaurante: Restaurante[]
}

type RestauranteParams = {
  id: string
}

const Perfil = () => {
  const { id } = useParams() as RestauranteParams
  const { data: restaurante } = useGetRestauranteQuery(id)

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <HeaderPerfil />
      <Banner
        titulo={restaurante.titulo}
        tipo={restaurante.tipo}
        imagem={restaurante.capa}
      />
      <div className="container">
        <PratosList restaurante={restaurante} />
      </div>
    </>
  )
}

export default Perfil
