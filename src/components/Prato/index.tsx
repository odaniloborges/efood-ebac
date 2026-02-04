import { useState } from 'react'
import Button from '../Button'
import { Card, Descricao, Titulo, Infos, Modal, ModalContent } from './styles'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { Prato as PratoType } from '../../pages/Home'

type Props = {
  id: number
  titulo: string
  descricao: string
  imagem: string
  porcao?: string
  preco?: number
  isVisible?: boolean
}

export const formatarPreco = (valor?: number) => {
  if (!valor) return '0,00'
  return valor.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}

const Prato = ({ id, titulo, descricao, imagem, porcao, preco }: Props) => {
  const dispatch = useDispatch()
  const addCart = () => {
    const item: PratoType = {
      foto: imagem,
      preco: preco || 0,
      id: id,
      nome: titulo,
      descricao: descricao,
      porcao: porcao || ''
    }

    dispatch(add(item))
    dispatch(open())
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 260) {
      return descricao.slice(0, 260) + '...'
    }
    return descricao
  }

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
          <Descricao>{getDescricao(descricao)}</Descricao>
          <Button
            type="button"
            title="Abrindo o modal"
            variant="secondary"
            onClick={() => {
              setModal({
                isVisible: true
              })
            }}
          >
            Mais detalhes
          </Button>
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
              <Button
                type="button"
                title="Adicionando prato ao carrinho"
                variant="secondary"
                onClick={addCart}
              >
                {`Adicionar ao carrinho - R$ ${formatarPreco(preco)}`}
              </Button>
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
