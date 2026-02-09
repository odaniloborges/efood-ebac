import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button'
import * as S from './styles'

import { RootReducer } from '../../store'
import { closeCart, remove } from '../../store/reducers/cart'
import { openCheckout } from '../../store/reducers/checkout'
import { formatarPreco, getTotalPrice } from '../../utils'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const close = () => {
    dispatch(closeCart())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    dispatch(openCheckout())
    close()
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={close} />
      <S.Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div className="info">
                    <h3>{item.nome}</h3>
                    <span>R$ {formatarPreco(item.preco)}</span>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    type="button"
                  ></button>
                </S.CartItem>
              ))}
            </ul>
            <S.Prices>
              <p>Valor total</p>
              <span>R$ {formatarPreco(getTotalPrice(items))}</span>
            </S.Prices>
            <Button
              type="button"
              onClick={goToCheckout}
              variant="secondary"
              title="Clique para o checkout"
            >
              Continuar com a entrega
            </Button>
          </>
        ) : (
          <p className="empty-text">
            O Carrinho está vazio, adicione pelo menos um prato para continuar
            com a compra.
          </p>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
