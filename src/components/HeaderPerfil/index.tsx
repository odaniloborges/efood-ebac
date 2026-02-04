import { HeaderBar, ImagemFundo, LinkCart, Titulo } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import logo from '../../assets/images/logo.svg'
import imagemFundo from '../../assets/images/Vector.png'
import { open } from '../../store/reducers/cart'

const HeaderPerfil = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <ImagemFundo style={{ backgroundImage: `url(${imagemFundo})` }}>
        <div className="container">
          <Titulo>Restaurantes</Titulo>
          <img src={logo} alt="Efood" />
          <LinkCart onClick={openCart}>
            {items.length} - produto(s) no carrinho
          </LinkCart>
        </div>
      </ImagemFundo>
    </HeaderBar>
  )
}

export default HeaderPerfil
