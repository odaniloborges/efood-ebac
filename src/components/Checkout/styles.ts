import styled from 'styled-components'
import { cores } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const FormContainer = styled.form`
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

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;

  &.completed {
    display: none;
  }
`
export const Row = styled.div`
  display: flex;
  column-gap: 24px;
`
export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    color: ${cores.bege};
    margin-bottom: 8px;
    display: block;
  }

  input {
    background-color: ${cores.bege};
    border: 1px solid ${cores.bege};
    width: 100%;
    height: 32px;
    padding: 0 8px;
    margin-bottom: 8px;

    &.error {
      border: 1px solid red;
    }
  }
`
