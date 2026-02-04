import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button'
import { Overlay, CartContainer, Sidebar, CartItem, Prices } from './styles'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formatarPreco } from '../Prato'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div className="info">
                <h3>{item.nome}</h3>
                <span>R$ {formatarPreco(item.preco)}</span>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                type="button"
              ></button>
            </CartItem>
          ))}
        </ul>
        <Prices>
          <p>Valor total</p>
          <span>R$ {formatarPreco(getTotalPrice())}</span>
        </Prices>
        <Button
          type="button"
          to={`/perfil/`}
          variant="secondary"
          title="Clique aqui para aproveitar esta oferta"
        >
          Continuar com a Compra
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
