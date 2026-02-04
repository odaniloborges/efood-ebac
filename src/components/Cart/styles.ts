import styled from 'styled-components'
import { cores } from '../../styles'
import fechar from '../../assets/images/fechar.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.vermelho};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  Button {
    max-width: 100%;
    width: 100%;
  }
`

export const CartItem = styled.li`
  display: flex;
  position: relative;
  height: 100px;
  padding: 8px;
  margin-bottom: 16px;
  background-color: ${cores.bege};

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    color: ${cores.vermelho};
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 16px;
  }

  span {
    color: ${cores.vermelho};
    font-size: 14px;
  }

  .info {
    margin: 8px 8px 16px 0;
  }

  button {
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`

export const Prices = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  font-weight: bold;
  font-size: 14px;
  color: ${cores.bege};
`
