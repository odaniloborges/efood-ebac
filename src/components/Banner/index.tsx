import * as S from './styles'

type Props = {
  titulo: string
  tipo: string
  imagem: string
}

const Banner = ({ titulo, tipo, imagem }: Props) => (
  <S.Imagem style={{ backgroundImage: `url(${imagem})` }}>
    <div className="container">
      <S.Categoria>
        <S.Tag>{tipo}</S.Tag>
      </S.Categoria>
      <div>
        <S.Titulo>{titulo}</S.Titulo>
      </div>
    </div>
  </S.Imagem>
)

export default Banner
