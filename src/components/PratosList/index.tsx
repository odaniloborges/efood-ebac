import { Restaurante } from '../../pages/Perfil'
import Prato from '../Prato'

import { Container, List } from './styles'

export type Props = {
  restaurante: Restaurante
}

const PratosList = ({ restaurante }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
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
        </List>
      </div>
    </Container>
  )
}

export default PratosList
