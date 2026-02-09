import { useState } from 'react'
import { useDispatch } from 'react-redux'

import Button from '../Button'

import { add, openCart } from '../../store/reducers/cart'

import * as S from './styles'
import { formatarPreco } from '../../utils'

type Props = {
  id: number
  titulo: string
  descricao: string
  imagem: string
  porcao?: string
  preco?: number
  isVisible?: boolean
}

const Prato = ({ id, titulo, descricao, imagem, porcao, preco }: Props) => {
  const dispatch = useDispatch()
  const addCart = () => {
    const item: Prato = {
      foto: imagem,
      preco: preco || 0,
      id: id,
      nome: titulo,
      descricao: descricao,
      porcao: porcao || ''
    }

    dispatch(add(item))
    dispatch(openCart())
    closeModal()
  }

  const getDescricao = (text: string) => {
    if (text.length > 260) {
      return text.slice(0, 260) + '...'
    }
    return text
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
      <S.Card>
        <img src={imagem} alt={titulo} />
        <div className="container">
          <S.Infos>
            <S.Titulo>{titulo}</S.Titulo>
          </S.Infos>
          <S.Descricao>{getDescricao(descricao)}</S.Descricao>
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
      </S.Card>
      <S.Modal className={modal.isVisible ? 'visivel' : ''}>
        <S.ModalContent className="container">
          <img src={imagem} alt={titulo} />
          <div className="container">
            <S.Infos>
              <h3>{titulo}</h3>
              <S.Descricao>{descricao}</S.Descricao>
              <p>{`Serve de ${porcao}`}</p>
              <Button
                type="button"
                title="Adicionando prato ao carrinho"
                variant="secondary"
                onClick={addCart}
              >
                {`Adicionar ao carrinho - R$ ${formatarPreco(preco)}`}
              </Button>
            </S.Infos>
          </div>
        </S.ModalContent>
        <div
          onClick={() => {
            closeModal()
          }}
          className="overlay"
        ></div>
      </S.Modal>
    </>
  )
}

export default Prato
