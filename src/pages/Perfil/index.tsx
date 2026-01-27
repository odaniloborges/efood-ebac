import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import PratosList from '../../components/PratosList'

import HeaderPerfil from '../../components/HeaderPerfil'
import Banner from '../../components/Banner'

export interface ModalItem {
  type: 'image'
  url: string
}

export interface PratoItem {
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
  cardapio: PratoItem[]
}

const Perfil = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<Restaurante | null>(null)

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }

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
    <>
      <HeaderPerfil />
      <Banner
        titulo={restaurante.titulo}
        infos={getRestauranteTags(restaurante)}
        imagem={restaurante.capa}
      />
      <div className="container">
        <PratosList restaurante={restaurante} />
      </div>
    </>
  )
}

export default Perfil
