import { useState } from 'react'
import {
  Card,
  Descricao,
  Titulo,
  Infos,
  Modal,
  ModalContent,
  ButtonPrato
} from './styles'

type Props = {
  id: number
  titulo: string
  descricao: string
  imagem: string
  porcao?: string
  preco?: number
  isVisible?: boolean
}

const Prato = ({ titulo, descricao, imagem, porcao, preco }: Props) => {
  const [modal, setModal] = useState<{ isVisible: boolean }>({
    isVisible: false
  })

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }

  return (
    <>
      <Card>
        <img src={imagem} alt={titulo} />
        <div className="container">
          <Infos>
            <Titulo>{titulo}</Titulo>
          </Infos>
          <Descricao>{descricao}</Descricao>
          <ButtonPrato
            onClick={() => {
              setModal({
                isVisible: true
              })
            }}
          >
            Mais detalhes
          </ButtonPrato>
        </div>
      </Card>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <img src={imagem} alt={titulo} />
          <div className="container">
            <Infos>
              <h3>{titulo}</h3>
              <Descricao>{descricao}</Descricao>
              <p>{`Serve de ${porcao}`}</p>
              <ButtonPrato
                onClick={() => {
                  setModal({
                    isVisible: true
                  })
                }}
              >
                {`Adicionar ao carrinho - R$ ${preco}`}
              </ButtonPrato>
            </Infos>
          </div>
        </ModalContent>
        <div
          onClick={() => {
            closeModal()
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}

export default Prato
