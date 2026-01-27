import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const Card = styled(Link)`
  background-color: ${cores.branca};
  position: relative;
  text-decoration: none;
  color: ${cores.vermelho};
  width: 472px;

  .container {
    padding: 8px;
  }

  > img {
    display: block;
    width: 100%;
    height: 167px;
    object-fit: cover;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: block;
  margin-top: 8px;
  margin-bottom: 16px;
`

export const Nota = styled.a`
  font-weight: bold;
  font-size: 18px;
  height: 21px;
  display: inline-block;
  text-decoration: none;
  margin-top: 8px;
  margin-bottom: 16px;
  text-align: center;
  vertical-align: middle;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`

export const Infos = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Categoria = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Tag = styled.div`
  background-color: ${cores.vermelho};
  color: ${cores.bege};
  font-size: 12px;
  font-weight: bold;
  padding: 8px 16px;
  margin-left: 8px;
  display: inline-block;
`
