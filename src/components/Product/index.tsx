import Button from '../Button'
import * as S from './styles'

import estrela from '../../assets/images/estrela.png'

type Props = {
  id: number
  title: string
  rating: number
  description: string
  infos: string[]
  image: string
}

const Product = ({ title, rating, description, infos, image, id }: Props) => (
  <S.Card to={`/perfil/${id}`}>
    <img src={image} alt={title} />
    <S.Categoria>
      {infos.map((info) => (
        <S.Tag key={info}>{info}</S.Tag>
      ))}
    </S.Categoria>
    <div className="container">
      <S.Infos>
        <S.Titulo>{title}</S.Titulo>
        <S.Nota>
          {rating} <img src={estrela} alt="estrela" />
        </S.Nota>
      </S.Infos>
      <S.Descricao>{description}</S.Descricao>
      <Button
        type="link"
        to={`/perfil/${id}`}
        variant="primary"
        title="Clique aqui para aproveitar esta oferta"
      >
        Saiba mais
      </Button>
    </div>
  </S.Card>
)

export default Product
