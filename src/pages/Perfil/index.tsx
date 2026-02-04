import { useParams } from 'react-router-dom'
import PratosList from '../../components/PratosList'

import HeaderPerfil from '../../components/HeaderPerfil'
import Banner from '../../components/Banner'
import { useGetRestauranteQuery } from '../../services/api'
import { Restaurante } from '../Home'

export type Props = {
  restaurante: Restaurante[]
}

const Perfil = () => {
  const { id } = useParams()
  const { data: restaurante } = useGetRestauranteQuery(id ?? '')

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
