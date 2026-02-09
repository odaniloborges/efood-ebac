import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  display: block;
  color: ${cores.vermelho};
`

export const ImagemFundo = styled.div`
  width: 100%;
  height: 186px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 40px;

    img {
      margin-left: 106px;
    }
  }
`

export const Titulo = styled.h2`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`

export const LinkCart = styled.span`
  color: ${cores.vermelho};
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
`
