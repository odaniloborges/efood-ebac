import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  position: relative;

  .container {
    position: relative;
    padding-top: 214px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    z-index: 1;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    content: '';
  }
`

export const Titulo = styled.h2`
  font-size: 32px;
  color: ${cores.branca};
`

export const Categoria = styled.div`
  position: absolute;
  top: 16px;
  left: 0;
`

export const Tag = styled.div`
  color: ${cores.branca};
  font-size: 32px;
  padding: 8px 16px;
  font-weight: lighter;
  display: inline-block;
`
