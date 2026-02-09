import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => (
  <S.Container>
    <div className="container">
      <S.FooterSection>
        <img src={logo} alt="Efood" />
        <S.Links>
          <li>
            <S.Link href="#">
              <img src={instagram} alt="instagram" />
            </S.Link>
          </li>
          <li>
            <S.Link href="#">
              <img src={facebook} alt="facebook" />
            </S.Link>
          </li>
          <li>
            <S.Link href="#">
              <img src={twitter} alt="twitter" />
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </div>
  </S.Container>
)

export default Footer
