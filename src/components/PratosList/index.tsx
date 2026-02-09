import Prato from '../Prato'

import * as S from './styles'

export type Props = {
  restaurante: Restaurante
}

const PratosList = ({ restaurante }: Props) => {
  return (
    <S.Container>
      <div className="container">
        <S.List>
          {restaurante.cardapio.map((item) => (
            <li key={item.id}>
              <Prato
                id={item.id}
                descricao={item.descricao}
                imagem={item.foto}
                titulo={item.nome}
                porcao={item.porcao}
                preco={item.preco}
              />
            </li>
          ))}
        </S.List>
      </div>
    </S.Container>
  )
}

export default PratosList
