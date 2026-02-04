import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  background-color: ${(props) =>
    props.variant === 'primary' ? cores.vermelho : cores.bege2};
  color: ${(props) =>
    props.variant === 'primary' ? cores.branca : cores.vermelho};
  font-size: 12px;
  font-weight: bold;
  margin-top: 16px;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  background-color: ${cores.vermelho};
  color: ${cores.branca};
  font-size: 12px;
  font-weight: bold;
  padding: 8px 16px;
  margin-bottom: 8px;
  margin-top: 16px;
  text-decoration: none;
  display: inline-block;
`
