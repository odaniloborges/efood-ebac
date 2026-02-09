import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import imagemFundo from '../../assets/images/Vector.png'

const Header = () => (
  <S.HeaderBar>
    <S.ImagemFundo style={{ backgroundImage: `url(${imagemFundo})` }}>
      <div className="container">
        <img src={logo} alt="Efood" />
        <S.Titulo>
          Viva experiências gastronômicas no conforto da sua casa
        </S.Titulo>
      </div>
    </S.ImagemFundo>
  </S.HeaderBar>
)

export default Header
