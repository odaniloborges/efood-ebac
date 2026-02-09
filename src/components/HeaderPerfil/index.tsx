import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import logo from '../../assets/images/logo.svg'
import imagemFundo from '../../assets/images/Vector.png'
import { openCart } from '../../store/reducers/cart'

const HeaderPerfil = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const open = () => {
    dispatch(openCart())
  }

  return (
    <S.HeaderBar>
      <S.ImagemFundo style={{ backgroundImage: `url(${imagemFundo})` }}>
        <div className="container">
          <S.Titulo>Restaurantes</S.Titulo>
          <img src={logo} alt="Efood" />
          <S.LinkCart role="button" onClick={open}>
            {items.length} - produto(s) no carrinho
          </S.LinkCart>
        </div>
      </S.ImagemFundo>
    </S.HeaderBar>
  )
}

export default HeaderPerfil
