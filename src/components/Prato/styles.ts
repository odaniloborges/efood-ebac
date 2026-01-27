import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.vermelho};
  position: relative;
  width: 320px;
  color: ${cores.bege};

  .container {
    padding: 8px;
  }

  > img {
    display: block;
    width: 308px;
    height: 217px;
    object-fit: cover;
    margin: 6px;
    padding-top: 6px;
  }
`

export const Titulo = styled.h3`
  color: ${cores.bege};
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
  color: ${cores.bege};
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`

export const Infos = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
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

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  background-color: ${cores.vermelho};
  max-width: 1024px;
  padding: 16px;
  position: relative;
  display: flex;
  flex-direction: row;
  z-index: 1;

  img {
    width: 280px;
    height: 280px;
    margin: 16px;
  }

  h3 {
    color: ${cores.bege};
    font-weight: bold;
    font-size: 18px;
    display: block;
    margin-top: 16px;
    margin-bottom: 16px;
  }

  p {
    color: ${cores.bege};
    font-size: 14px;
    line-height: 22px;
    display: block;
    margin-top: 16px;
  }
`

export const ButtonPrato = styled.button`
  background-color: ${cores.bege};
  color: ${cores.vermelho};
  font-size: 12px;
  font-weight: bold;
  border: none;
  width: 100%;
  padding: 8px 16px;
  margin-bottom: 16px;
  text-align: center;
  margin-top: 16px;
  text-decoration: none;
  display: inline-block;
`
